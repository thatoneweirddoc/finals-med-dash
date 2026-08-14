/**
 * Finals tracker + quiz bank sync endpoint.  v2 — adds the generation loop.
 *
 * Everything goes through the Drive v3 REST API via UrlFetchApp, never DriveApp
 * (DriveApp's create methods are gated to the broad "drive" scope; the REST API
 * works correctly under the narrow drive.file scope we actually want).
 *
 * Two restrictions still hold:
 *   1. SCOPE (Google-enforced): drive.file — only files this script created.
 *      This is WHY the outbox exists: Claude cannot create a file this script
 *      can then see. It CAN overwrite the body of a file the script already
 *      made. So claude-outbox.json is created here, written by Claude, and
 *      ingested back here into a real quiz file.
 *   2. FOLDER PIN (script-enforced): everything lives under one "Finals tracker"
 *      folder, with quizzes in a "Quizzes" subfolder.
 *
 * Actions — GET: ?action=
 *   (none)        tracker JSON
 *   listQuizzes   [{id, title, system, count, created}]
 *   getQuiz&id=   one quiz's question set
 *   status        {unattempted, target, short, pending, quizzes:[...]}
 *   queue         the request queue
 * Actions — POST body {action:...}
 *   (none)         overwrite tracker (existing behaviour)
 *   saveQuiz       {title, system, questions:[...]} → stores a new quiz
 *   recordResults  {quizId, title, system, results, flags, misses, score}
 *   queueRequest   {system, n, topics, note} → "Schedule" button; the hourly
 *                  Claude task drains this
 *   ingestOutbox   pull anything Claude left in claude-outbox.json into real
 *                  quiz files; called by the page on load
 *   generateNow    {system, n, topics} → "Make now" button; calls the Anthropic
 *                  API directly and saves the result. Needs ANTHROPIC_API_KEY
 *                  in Script Properties.
 *
 * SETUP: paste over Code.gs, keep appsscript.json unchanged, Run > setup,
 * then Deploy > Manage deployments > pencil > New version > Deploy.
 *
 * For "Make now" only: Project Settings > Script Properties > add
 *   ANTHROPIC_API_KEY = sk-ant-...
 *   MODEL             = claude-sonnet-5      (optional, this is the default)
 * The Schedule button and the hourly task work without a key.
 */

const TOKEN = 'fadmag';

const FOLDER_NAME = 'Finals tracker';
const QUIZZES_FOLDER_NAME = 'Quizzes';
const FILE_NAME = 'finals-tracker.json';
const QUEUE_NAME = 'queue.json';
const OUTBOX_NAME = 'claude-outbox.json';

// the standing pool of unattempted questions the hourly task tops back up
const BUFFER_TARGET = 30;

const REPO_RAW = 'https://raw.githubusercontent.com/thatoneweirddoc/finals-med-dash/main/';
const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const DEFAULT_MODEL = 'claude-sonnet-5';

// Apps Script kills a UrlFetchApp call around the 60s mark, and a 20-question
// generation can run past that. So generation is always chunked — never ask the
// model for more than this many questions in one call.
const BATCH_MAX = 10;

const STARTER = {
  updated: '', topics: {}, open: [], resolved: [], log: [],
  recent_misses: [], quiz_history: [], coverage: { built: [], not_built: [] }
};

const EMPTY_OUTBOX = { version: 1, written: null, quizzes: [] };
const EMPTY_QUEUE = { version: 1, requests: [] };

function setup() {
  Logger.log('Folder id:  ' + folderId());
  Logger.log('File id:    ' + fileId());
  Logger.log('Quizzes id: ' + quizzesFolderId());
  Logger.log('Queue id:   ' + queueFileId());
  Logger.log('Outbox id:  ' + outboxFileId());
  Logger.log('API key set: ' + (props().getProperty('ANTHROPIC_API_KEY') ? 'yes' : 'no (Make now will refuse)'));
  Logger.log('Ready.');
}

/**
 * Run this once by hand after deploying, then paste the two ids it logs to
 * whoever is setting up the hourly Claude task. Claude needs the OUTBOX id to
 * write to and the QUEUE id to read.
 */
function idsForClaude() {
  Logger.log('QUEUE  file id: ' + queueFileId());
  Logger.log('OUTBOX file id: ' + outboxFileId());
}

function doGet(e) {
  const p = e.parameter;
  if ((p.token || '') !== TOKEN) return json({ error: 'bad token' });
  try {
    if (p.action === 'listQuizzes') return json({ quizzes: listQuizzes() });
    if (p.action === 'getQuiz')     return json(JSON.parse(readById(p.id)));
    if (p.action === 'status')      return json(bufferStatus());
    if (p.action === 'queue')       return json(readQueue());
    return json(JSON.parse(readFile()));
  } catch (err) {
    return json({ error: String(err) });
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if ((body.token || '') !== TOKEN) return json({ error: 'bad token' });

    if (body.action === 'saveQuiz')      return json(saveQuiz(body));
    if (body.action === 'recordResults') return json(recordResults(body));
    if (body.action === 'queueRequest')  return json(queueRequest(body));
    if (body.action === 'ingestOutbox')  return json(ingestOutbox());
    if (body.action === 'generateNow')   return json(generateNow(body));

    // An unrecognised action must NEVER fall through to a tracker overwrite —
    // an older deployment doing exactly that would silently destroy the tracker
    // when a newer client sent an action it didn't know about yet.
    if (body.action) {
      return json({ error: 'unknown action "' + body.action + '" — redeploy the script' });
    }

    // Only a body with no action at all is a tracker write, and it must at least
    // look like a tracker before it is allowed to replace one.
    if (!body.topics || typeof body.topics !== 'object') {
      return json({ error: 'refusing to overwrite tracker with a non-tracker payload' });
    }

    delete body.token;
    body.updated = new Date().toISOString().slice(0, 10);
    writeFile(JSON.stringify(body, null, 2));
    return json({ ok: true, updated: body.updated });
  } catch (err) {
    return json({ error: String(err) });
  }
}

// --- Drive REST plumbing --------------------------------------------------------

function props() { return PropertiesService.getScriptProperties(); }
function auth() { return { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }; }

function api(url, options) {
  const opts = options || {};
  opts.headers = Object.assign({}, auth(), opts.headers || {});
  opts.muteHttpExceptions = true;
  const res = UrlFetchApp.fetch(url, opts);
  if (res.getResponseCode() >= 300) {
    throw new Error('Drive ' + res.getResponseCode() + ': ' + res.getContentText());
  }
  return res.getContentText();
}

function makeFolder(name, parent) {
  const meta = { name: name, mimeType: 'application/vnd.google-apps.folder' };
  if (parent) meta.parents = [parent];
  return JSON.parse(api('https://www.googleapis.com/drive/v3/files', {
    method: 'post', contentType: 'application/json', payload: JSON.stringify(meta)
  })).id;
}

function makeFile(name, parent, mime, content, appProps) {
  const b = 'xxfinalsxx';
  const meta = { name: name, parents: [parent], mimeType: mime };
  if (appProps) meta.appProperties = appProps;
  const payload = '--' + b + '\r\n' +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(meta) + '\r\n' +
    '--' + b + '\r\n' + 'Content-Type: ' + mime + '\r\n\r\n' + content + '\r\n' +
    '--' + b + '--';
  return JSON.parse(api('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'post', contentType: 'multipart/related; boundary=' + b, payload: payload
  })).id;
}

function readById(id) {
  return api('https://www.googleapis.com/drive/v3/files/' + id + '?alt=media');
}

function writeById(id, text) {
  api('https://www.googleapis.com/upload/drive/v3/files/' + id + '?uploadType=media', {
    method: 'patch', contentType: 'application/json', payload: text
  });
}

function setAppProps(id, appProps) {
  api('https://www.googleapis.com/drive/v3/files/' + id, {
    method: 'patch', contentType: 'application/json',
    payload: JSON.stringify({ appProperties: appProps })
  });
}

function folderId() {
  const p = props();
  let id = p.getProperty('folderId');
  if (!id) { id = makeFolder(FOLDER_NAME, null); p.setProperty('folderId', id); }
  return id;
}

function quizzesFolderId() {
  const p = props();
  let id = p.getProperty('quizzesFolderId');
  if (!id) { id = makeFolder(QUIZZES_FOLDER_NAME, folderId()); p.setProperty('quizzesFolderId', id); }
  return id;
}

function fileId() {
  const p = props();
  let id = p.getProperty('fileId');
  if (!id) {
    id = makeFile(FILE_NAME, folderId(), 'application/json', JSON.stringify(STARTER, null, 2));
    p.setProperty('fileId', id);
  }
  return id;
}

/** Generic "one named JSON file in the root folder, created lazily" helper. */
function singletonFileId(propKey, name, starter) {
  const p = props();
  let id = p.getProperty(propKey);
  if (!id) {
    id = makeFile(name, folderId(), 'application/json', JSON.stringify(starter, null, 2));
    p.setProperty(propKey, id);
  }
  return id;
}

function queueFileId()  { return singletonFileId('queueFileId',  QUEUE_NAME,  EMPTY_QUEUE); }
function outboxFileId() { return singletonFileId('outboxFileId', OUTBOX_NAME, EMPTY_OUTBOX); }

function readFile() { return readById(fileId()); }
function writeFile(text) { writeById(fileId(), text); }

// --- quiz bank -------------------------------------------------------------------

function saveQuiz(body) {
  const questions = validateQuestions(body.questions || []);
  if (!questions.length) return { error: 'no valid questions in payload' };

  const quiz = {
    title: body.title || 'Untitled',
    system: body.system || body.title || 'General',
    created: new Date().toISOString(),
    source: body.source || 'paste',
    questions: questions
  };
  const safe = String(quiz.title).replace(/[\/\\?%*:|"<>]/g, '-').slice(0, 100);
  const stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd-HHmm');
  const id = makeFile(safe + '-' + stamp + '.json', quizzesFolderId(),
                      'application/json', JSON.stringify(quiz),
                      { count: String(questions.length), system: quiz.system,
                        title: quiz.title, source: quiz.source });
  return { ok: true, id: id, title: quiz.title, system: quiz.system, count: questions.length };
}

/**
 * The gate between "some JSON turned up" and "it goes in the bank".
 * Anything malformed is dropped rather than stored — a bad `correct` index or a
 * two-option question would otherwise mark itself wrong forever in the tracker.
 */
function validateQuestions(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  list.forEach(function (q) {
    if (!q || typeof q !== 'object') return;
    const stem = String(q.stem || '').trim();
    const lead = String(q.lead || '').trim();
    const opts = Array.isArray(q.options) ? q.options.map(function (o) { return String(o).trim(); }) : [];
    const correct = Number(q.correct);
    if (stem.length < 20) return;                    // not a real vignette
    if (!lead) return;
    if (opts.length < 3 || opts.length > 6) return;
    if (opts.some(function (o) { return !o; })) return;
    if (!(correct >= 0 && correct < opts.length) || correct !== Math.floor(correct)) return;
    out.push({
      stem: stem, lead: lead, options: opts, correct: correct,
      explanation: String(q.explanation || '').trim(),
      topic: String(q.topic || '').trim() || 'General',
      type: ['recall', 'application', 'discrimination'].indexOf(q.type) >= 0 ? q.type : 'recall'
    });
  });
  return out;
}

function listQuizzes() {
  const q = encodeURIComponent(`'${quizzesFolderId()}' in parents and trashed = false`);
  const fields = encodeURIComponent('files(id,name,createdTime,appProperties)');
  const order = encodeURIComponent('createdTime desc');
  const out = JSON.parse(api(
    `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&orderBy=${order}`));
  return (out.files || []).map(function (f) {
    const ap = f.appProperties || {};
    let count = Number(ap.count || 0);
    let title = ap.title || f.name.replace(/-\d{4}-\d{2}-\d{2}-\d{4}\.json$/, '');
    let system = ap.system || title;
    // Quizzes saved before v2 have no appProperties — read once, then stamp them
    // so this only ever costs a fetch the first time each is listed.
    if (!ap.count) {
      try {
        const body = JSON.parse(readById(f.id));
        count = (body.questions || []).length;
        title = body.title || title;
        system = body.system || system;
        setAppProps(f.id, { count: String(count), system: system, title: title,
                            source: body.source || 'paste' });
      } catch (err) { /* leave it at 0 rather than breaking the whole listing */ }
    }
    return { id: f.id, name: f.name, title: title, system: system,
             count: count, created: f.createdTime, source: ap.source || '' };
  });
}

// --- the buffer ------------------------------------------------------------------

/**
 * How many unattempted questions are sitting in the bank right now, counting
 * both the repo-published quizzes and the Drive ones. "Unattempted" means the
 * quiz has no entry in the tracker's quiz_history — a quiz you have taken stops
 * counting toward the floor even though it's still there to redo.
 */
function bufferStatus() {
  let tracker;
  try { tracker = JSON.parse(readFile()); } catch (err) { tracker = {}; }
  const taken = {};
  (tracker.quiz_history || []).forEach(function (h) { if (h.quizId) taken[h.quizId] = true; });

  const quizzes = [];
  const serviced = {};
  let unattempted = 0;

  try {
    const idx = JSON.parse(UrlFetchApp.fetch(REPO_RAW + 'quizzes/index.json',
      { muteHttpExceptions: true }).getContentText());
    (idx.quizzes || []).forEach(function (q) {
      const id = 'repo:' + q.file;
      const done = !!taken[id];
      if (!done) unattempted += Number(q.count || 0);
      // The hourly task cannot write to Drive (the connector can create files but
      // not overwrite one, and drive.file hides anything this script didn't make),
      // so it publishes to the repo instead and stamps which request it answered.
      // That stamp is how a queued request gets marked off.
      if (q.servicedRequest) serviced[q.servicedRequest] = 'repo:' + q.file;
      quizzes.push({ id: id, title: q.title, system: q.system,
                     count: Number(q.count || 0), taken: done, src: 'repo' });
    });
  } catch (err) { /* repo unreachable — Drive quizzes still count */ }

  try {
    listQuizzes().forEach(function (q) {
      const done = !!taken[q.id];
      if (!done) unattempted += q.count;
      quizzes.push({ id: q.id, title: q.title, system: q.system,
                     count: q.count, taken: done, src: 'drive' });
    });
  } catch (err) { /* ignore */ }

  const queue = readQueue();
  let queueDirty = false;
  (queue.requests || []).forEach(function (r) {
    if (r.status === 'pending' && serviced[r.id]) {
      r.status = 'done'; r.quizId = serviced[r.id]; r.done = new Date().toISOString();
      queueDirty = true;
    }
  });
  if (queueDirty) { try { writeQueue(queue); } catch (err) { /* non-fatal */ } }
  const pending = (queue.requests || []).filter(function (r) { return r.status === 'pending'; });

  return {
    unattempted: unattempted,
    target: BUFFER_TARGET,
    short: Math.max(0, BUFFER_TARGET - unattempted),
    pending: pending.length,
    pendingDetail: pending,
    quizzes: quizzes,
    lastTopUp: props().getProperty('lastTopUp') || 'never run',
    checked: new Date().toISOString()
  };
}

// --- the request queue -----------------------------------------------------------

function readQueue() {
  try {
    const q = JSON.parse(readById(queueFileId()));
    q.requests = q.requests || [];
    return q;
  } catch (err) { return { version: 1, requests: [] }; }
}

function writeQueue(q) { writeById(queueFileId(), JSON.stringify(q, null, 2)); }

function queueRequest(body) {
  const q = readQueue();
  const id = 'r' + new Date().getTime();
  q.requests.unshift({
    id: id,
    system: body.system || 'Weakest areas',
    n: Math.min(40, Math.max(5, Number(body.n) || 20)),
    topics: Array.isArray(body.topics) ? body.topics : [],
    note: String(body.note || ''),
    status: 'pending',
    requested: new Date().toISOString()
  });
  q.requests = q.requests.slice(0, 50);
  writeQueue(q);
  return { ok: true, id: id,
           pending: q.requests.filter(function (r) { return r.status === 'pending'; }).length };
}

/**
 * Drain claude-outbox.json into real quiz files.
 *
 * Claude (the hourly scheduled task) cannot create a file this script can see —
 * drive.file scope only covers files the script itself made. It overwrites the
 * body of this one instead, and this pulls the contents across.
 */
function ingestOutbox() {
  let ob;
  try { ob = JSON.parse(readById(outboxFileId())); }
  catch (err) { return { ok: true, ingested: 0, note: 'outbox unreadable — treated as empty' }; }

  const list = (ob && ob.quizzes) || [];
  if (!list.length) return { ok: true, ingested: 0 };

  const q = readQueue();
  const made = [];
  const rejected = [];

  list.forEach(function (z) {
    if (!z || !Array.isArray(z.questions)) { rejected.push('not a quiz object'); return; }
    const saved = saveQuiz({
      title: z.title, system: z.system, questions: z.questions, source: 'claude-scheduled'
    });
    if (saved.error) { rejected.push((z.title || 'untitled') + ': ' + saved.error); return; }
    made.push(saved);
    if (z.requestId) {
      q.requests.forEach(function (r) {
        if (r.id === z.requestId) {
          r.status = 'done'; r.quizId = saved.id; r.done = new Date().toISOString();
        }
      });
    }
  });

  writeQueue(q);
  writeById(outboxFileId(), JSON.stringify(EMPTY_OUTBOX, null, 2));
  return { ok: true, ingested: made.length, quizzes: made, rejected: rejected };
}

// --- "Make now" — direct Anthropic call ------------------------------------------

function generateNow(body) {
  const key = props().getProperty('ANTHROPIC_API_KEY');
  if (!key) {
    return { error: 'No ANTHROPIC_API_KEY in Script Properties — use Schedule instead, ' +
                    'or add a key under Project Settings > Script Properties.' };
  }
  const system = body.system || 'Mixed';
  const want = Math.min(20, Math.max(5, Number(body.n) || 10));

  const ground = groundingFor(system);
  const weak = weakAreasFor(system);

  const out = [];
  let guard = 0;
  while (out.length < want && guard < 4) {
    guard++;
    const before = out.length;
    const batch = Math.min(BATCH_MAX, want - out.length);
    let got = [];
    try { got = callAnthropic(key, system, batch, ground, weak, out); }
    catch (err) { if (!out.length) return { error: String(err) }; break; }
    validateQuestions(got).forEach(function (q) { out.push(q); });
    if (out.length === before) break;   // no progress — stop rather than spin
  }

  if (!out.length) return { error: 'model returned nothing usable' };

  const saved = saveQuiz({
    title: system + ' — generated ' + Utilities.formatDate(
      new Date(), Session.getScriptTimeZone(), 'd MMM HH:mm'),
    system: system, questions: out, source: 'make-now'
  });
  saved.asked = want;
  return saved;
}

function callAnthropic(key, system, n, ground, weak, already) {
  const avoid = already.slice(-20).map(function (q) { return '- ' + q.lead; }).join('\n');

  const prompt = [
    'Write ' + n + ' single-best-answer clinical vignettes for a final-year Australian',
    'medical student sitting written finals (no OSCE — written paper only).',
    '',
    'System: ' + system,
    '',
    weak ? 'Weight questions toward these known weak areas:\n' + weak + '\n' : '',
    ground ? 'Ground the content in these notes the student has actually studied:\n\n' +
             '<notes>\n' + ground + '\n</notes>\n' : '',
    'Rules:',
    '- Finals depth: history, exam findings, sometimes one investigation result, then',
    '  ask for diagnosis, next best step, or mechanism.',
    '- Australian guidelines where they differ (ANZCOR, not Resuscitation Council UK).',
    '- Exactly 4 options. Exactly one defensible answer. Distractors must be plausible.',
    '- Vary question type across the set: recognition, best-next-step, differential',
    '  narrowing, threshold/cut-off recall, and mechanism.',
    '- Explanation states why the right answer is right AND why the tempting wrong one',
    '  is wrong. Use <b>...</b> around the specific number, threshold or drug that is',
    '  the point of the question. 2-4 sentences.',
    '- Medical shorthand is fine; assume familiarity.',
    avoid ? '\nDo NOT repeat these questions already written for this set:\n' + avoid : '',
    '',
    'Return ONLY a JSON array, no prose, no code fence. Each element:',
    '{"stem":"...","lead":"...","options":["a","b","c","d"],"correct":<0-3 index>,',
    ' "explanation":"...","topic":"' + system + ' — <subtopic>","type":"recall|application|discrimination"}'
  ].join('\n');

  const res = UrlFetchApp.fetch(ANTHROPIC_URL, {
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    headers: {
      'x-api-key': key,
      'anthropic-version': '2023-06-01'
    },
    payload: JSON.stringify({
      model: props().getProperty('MODEL') || DEFAULT_MODEL,
      max_tokens: 700 * n + 500,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (res.getResponseCode() >= 300) {
    throw new Error('Anthropic ' + res.getResponseCode() + ': ' +
                    res.getContentText().slice(0, 300));
  }
  const body = JSON.parse(res.getContentText());
  const text = (body.content || []).map(function (c) { return c.text || ''; }).join('');
  return parseJsonArray(text);
}

/** Models sometimes wrap JSON in a fence or a sentence. Dig the array out. */
function parseJsonArray(text) {
  let t = String(text || '').trim();
  t = t.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const start = t.indexOf('[');
  const end = t.lastIndexOf(']');
  if (start < 0 || end <= start) return [];
  try { return JSON.parse(t.slice(start, end + 1)); } catch (err) { return []; }
}

/** Pull a few of the student's own notes for this system as grounding. */
function groundingFor(system) {
  try {
    const idx = JSON.parse(UrlFetchApp.fetch(REPO_RAW + 'notes/index.json',
      { muteHttpExceptions: true }).getContentText());
    const want = String(system).toLowerCase();
    let notes = [];
    (idx.systems || []).forEach(function (s) {
      const name = String(s.system || '').toLowerCase();
      if (name.indexOf(want) >= 0 || want.indexOf(name) >= 0) {
        notes = notes.concat(s.notes || []);
      }
    });
    if (!notes.length) return '';
    notes.sort(function (a, b) { return (b.words || 0) - (a.words || 0); });
    let text = '';
    notes.slice(0, 3).forEach(function (n) {
      if (text.length > 30000) return;
      try {
        text += '\n\n## ' + n.title + '\n' +
          UrlFetchApp.fetch(REPO_RAW + 'notes/' + n.path,
            { muteHttpExceptions: true }).getContentText();
      } catch (err) { /* skip this note */ }
    });
    return text.slice(0, 30000);
  } catch (err) { return ''; }
}

/** Flagged weak areas + weak scores for this system, as prompt context. */
function weakAreasFor(system) {
  try {
    const t = JSON.parse(readFile());
    const want = String(system).toLowerCase();
    const lines = [];
    (t.open || []).forEach(function (o) {
      const sys = String(o.system || '').toLowerCase();
      if (want === 'mixed' || want === 'weakest areas' ||
          sys.indexOf(want) >= 0 || want.indexOf(sys) >= 0) {
        lines.push('- ' + o.topic + ' (' + (o.type || 'recall') + ' failure, ' +
                   (o.attempts || 1) + ' attempts)');
      }
    });
    Object.keys(t.topics || {}).forEach(function (k) {
      const v = t.topics[k];
      if (v && v.score != null && v.score < 70 &&
          (want === 'mixed' || want === 'weakest areas' ||
           k.toLowerCase().indexOf(want) >= 0)) {
        lines.push('- ' + k + ' (scoring ' + v.score + '%)');
      }
    });
    return lines.slice(0, 15).join('\n');
  } catch (err) { return ''; }
}

// --- results recorded server-side -------------------------------------------------

function recordResults(body) {
  const t = JSON.parse(readFile());
  const date = new Date().toISOString().slice(0, 10);

  t.topics = t.topics || {};
  (body.results || []).forEach(function (r) {
    if (!r.topic || !r.total) return;
    const cur = t.topics[r.topic] || { score: null, tested: 0, correct: 0 };
    const prior = cur.correct != null ? cur.correct
                : Math.round((cur.score || 0) / 100 * (cur.tested || 0));
    const tested = (cur.tested || 0) + r.total;
    const correct = prior + (r.correct || 0);
    t.topics[r.topic] = {
      score: Math.round(correct / tested * 100), tested: tested,
      correct: correct, last: date
    };
  });

  t.open = t.open || [];
  (body.flags || []).forEach(function (f) {
    if (!f.topic) return;
    const hit = t.open.filter(function (o) {
      return String(o.topic).toLowerCase() === String(f.topic).toLowerCase();
    })[0];
    if (hit) { hit.attempts = (hit.attempts || 1) + 1; }
    else {
      t.open.push({
        topic: f.topic, system: f.system || body.system || '',
        type: f.type || 'recall', attempts: 1, since: date, source: 'quiz'
      });
    }
  });

  // the actual missed questions, so a tutoring session can pick them up directly
  t.recent_misses = (body.misses || []).map(function (m) {
    return {
      date: date, system: body.system || '', topic: m.topic || '',
      stem: m.stem || '', lead: m.lead || '',
      mine: m.mine || '', correct: m.correct || '', type: m.type || ''
    };
  }).concat(t.recent_misses || []).slice(0, 40);

  // per-quiz attempt record, so the bank can show how each one went
  t.quiz_history = t.quiz_history || [];
  t.quiz_history.unshift({
    quizId: body.quizId || '',
    title: body.title || 'Untitled',
    correct: body.correct || 0,
    total: body.total || 0,
    date: date
  });
  t.quiz_history = t.quiz_history.slice(0, 200);

  t.log = t.log || [];
  t.log.unshift({
    date: date,
    note: 'Quiz — ' + (body.title || 'Untitled') + ', ' + (body.score || '') + '.'
  });

  t.updated = date;
  writeFile(JSON.stringify(t, null, 2));
  return { ok: true, updated: date };
}

// --- the hourly top-up, run by Google's scheduler ---------------------------------

/**
 * Run this ONCE by hand (function dropdown > installHourlyTopUp > Run) to install
 * the timer. Safe to re-run — it clears its own previous trigger first.
 *
 * Why this and not a scheduled Claude task: measured on 14 Aug, fresh-session
 * scheduled tasks in that environment fired 13 minutes to 86+ minutes late, and
 * one that did fire never completed its write. Google's time-driven triggers are
 * dull and dependable, which is what a standing question buffer actually needs.
 */
function installHourlyTopUp() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'hourlyTopUp') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('hourlyTopUp').timeBased().everyHours(1).create();
  Logger.log('Hourly top-up installed. It will also drain the Schedule queue.');
}

function uninstallHourlyTopUp() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'hourlyTopUp') ScriptApp.deleteTrigger(t);
  });
  Logger.log('Hourly top-up removed.');
}

/**
 * Fires hourly. Generates AT MOST one quiz per run, so the ceiling is bounded at
 * roughly one quiz an hour even if something upstream misbehaves.
 *
 * Priority: an explicit Schedule request beats a buffer top-up. If neither is
 * outstanding it does nothing and costs nothing — no API call is made.
 */
function hourlyTopUp() {
  const p = props();
  const stamp = new Date().toISOString();

  if (!p.getProperty('ANTHROPIC_API_KEY')) {
    p.setProperty('lastTopUp', stamp + ' — skipped, no API key');
    return;
  }

  // 1. explicit requests first, oldest first
  const q = readQueue();
  const pending = (q.requests || []).filter(function (r) { return r.status === 'pending'; });
  if (pending.length) {
    const r = pending[pending.length - 1];
    const made = generateNow({ system: r.system, n: r.n });
    if (made && !made.error) {
      r.status = 'done'; r.quizId = made.id; r.done = stamp;
      writeQueue(q);
      p.setProperty('lastTopUp', stamp + ' — request "' + r.system + '" served, ' +
                                 made.count + ' questions');
    } else {
      p.setProperty('lastTopUp', stamp + ' — request failed: ' +
                                 ((made && made.error) || 'unknown'));
    }
    return;
  }

  // 2. otherwise, top the pool back up to the floor
  let st;
  try { st = bufferStatus(); }
  catch (err) { p.setProperty('lastTopUp', stamp + ' — status failed: ' + err); return; }

  if (st.short <= 0) {
    p.setProperty('lastTopUp', stamp + ' — pool at ' + st.unattempted + ', nothing to do');
    return;
  }

  const n = Math.min(20, Math.max(5, st.short));
  const sys = weakestSystem();
  const made = generateNow({ system: sys, n: n });
  p.setProperty('lastTopUp', (made && !made.error)
    ? stamp + ' — topped up ' + sys + ' with ' + made.count + ' questions'
    : stamp + ' — top-up failed: ' + ((made && made.error) || 'unknown'));
}

/**
 * Which system is currently hurting most: the one with the most flagged attempts
 * in `open`, falling back to the lowest-scoring topic's system prefix.
 */
function weakestSystem() {
  try {
    const t = JSON.parse(readFile());

    const counts = {};
    (t.open || []).forEach(function (o) {
      const s = o.system || String(o.topic || '').split('—')[0].trim();
      if (s) counts[s] = (counts[s] || 0) + (o.attempts || 1);
    });
    let best = null, bestN = -1;
    Object.keys(counts).forEach(function (k) {
      if (counts[k] > bestN) { bestN = counts[k]; best = k; }
    });
    if (best) return best;

    let low = null, lowScore = 101;
    Object.keys(t.topics || {}).forEach(function (k) {
      const v = t.topics[k];
      if (v && v.score != null && v.score < lowScore) { lowScore = v.score; low = k; }
    });
    if (low) return String(low).split('—')[0].trim();
  } catch (err) { /* fall through */ }
  return 'Mixed';
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
