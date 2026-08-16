/**
 * Finals tracker + quiz bank sync endpoint.  v3 — module generation fixed.
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
 *   listRevision  [{id, title, system, objectives, questions, created}]
 *   getQuiz&id=   one quiz's or module's question set
 *   status        {unattempted, target, short, pending, quizzes:[...]}
 *   queue         the request queue
 * Actions — POST body {action:...}
 *   (none)         overwrite tracker (existing behaviour)
 *   saveQuiz       {title, system, questions:[...]} → stores a new quiz
 *   saveRevision   {title, system, objectives, sections, questions} → module
 *   recordResults  {quizId, title, system, results, flags, misses, score}
 *   queueRequest   {system, n, topics, note, kind} → "Schedule" button
 *   ingestOutbox   pull anything Claude left in claude-outbox.json into real
 *                  quiz files; called by the page on load
 *   generateNow    {system, n, topics, kind} → "Make now" button; calls the
 *                  Anthropic API directly. Needs ANTHROPIC_API_KEY in Script
 *                  Properties.
 *
 * SETUP: paste over Code.gs, keep appsscript.json unchanged, Run > setup,
 * then Deploy > Manage deployments > pencil > New version > Deploy.
 *
 * For "Make now" only: Project Settings > Script Properties > add
 *   ANTHROPIC_API_KEY = sk-ant-...
 *   MODEL             = claude-sonnet-5      (optional, this is the default)
 * The Schedule button and the scheduled task work without a key.
 *
 * CHANGES IN v3
 *   - section `note` (a memorable sentence) and `link` (a notes-page reference)
 *     are now distinct fields. They were the same field, so every generated
 *     module rendered a dead link to notes.html#undefined/undefined.
 *   - generateModule now honours the easy/medium/hard mix instead of generating
 *     everything at medium.
 *   - generateModule is split into two API calls. It previously asked for
 *     objectives + six 350-word sections + 15 questions in a single call, which
 *     is the longest request in the file and the one most likely to exceed the
 *     ~60s UrlFetchApp ceiling — and a timeout lost the entire module.
 *   - saveRevision returns `count`, so the scheduler stops logging "undefinedq".
 */

/**
 * USERS — one entry per person. The key is that person's token; they paste it
 * into the dashboard once and the browser remembers it.
 *
 *   id       the tracker filename suffix. NEVER change an existing id — the
 *            tracker is stored as finals-tracker-<id>.json and renaming the id
 *            orphans that person's entire history.
 *   name     shown in the dashboard so a shared laptop can't silently record
 *            one person's quiz against another's tracker.
 *   generate whether this person may spend the owner's Anthropic credit. Only
 *            the owner should have this unless you decide otherwise.
 *
 * To add someone: invent a token that is not guessable (a password manager's
 * random string is ideal), add a row, redeploy as a NEW VERSION, and send them
 * the token privately. To remove someone: delete the row and redeploy. Their
 * tracker file stays in Drive, so the removal is reversible.
 *
 * A token is a bearer credential — anyone holding it is that user. That is an
 * acceptable trade for a small group of people who know each other; it would
 * not be for a public site.
 */
const OWNER_ID = 'fadi';

/**
 * The OAuth 2.0 Web client ID. This is PUBLIC by design — it ships in the page
 * and identifies the app, it does not authorise anything on its own. Create it
 * at console.cloud.google.com > APIs & Services > Credentials > OAuth client ID
 * > Web application, with Authorized JavaScript origin
 * https://thatoneweirddoc.github.io. Put the same value in index.html.
 *
 * Read from Script Properties first so it can be changed without a redeploy.
 */
const GOOGLE_CLIENT_ID = '645861800030-ign5j8vg7l16fcip1qbtj12lb7dsoh1a.apps.googleusercontent.com';

/**
 * USERS — keyed by the Google account's VERIFIED email address.
 *
 *   id       the tracker filename suffix. NEVER change an existing id — the
 *            tracker is finals-tracker-<id>.json and renaming it orphans that
 *            person's whole history.
 *   name     shown in the dashboard.
 *   generate whether this person may spend the owner's Anthropic credit.
 *
 * An email that is not listed is refused. Nobody is auto-provisioned by simply
 * having a Google account.
 */
const USERS = {
  'fadimaghak@gmail.com': { id: 'fadi', name: 'Fadi', generate: true }
  // 'someone@example.com': { id: 'sam', name: 'Sam', generate: false },
};

/**
 * Shared tokens from before sign-in existed, mapped to the same account.
 *
 * Kept deliberately: deploying sign-in must not lock anyone out of their
 * tracker four weeks before the exam, and Google Sign-In cannot work until the
 * client ID is configured. Delete a row once that person has signed in at
 * least once; delete the whole map to require sign-in.
 */
const LEGACY_TOKENS = {
  'fadmag': 'fadimaghak@gmail.com'
};

/**
 * Verify a Google ID token and return the verified identity, or null.
 *
 * Uses Google's tokeninfo endpoint rather than local RS256 + JWKS validation:
 * at this volume the round-trip is cheap, and hand-rolled signature checking is
 * exactly the kind of code that is wrong in a way nobody notices. The result is
 * cached until the token's own expiry, so a page making six calls in a row
 * costs one verification, not six.
 */
function verifyIdToken(jwt) {
  const raw = String(jwt || '');
  if (raw.split('.').length !== 3) return null;          // not a JWT at all

  const clientId = props().getProperty('GOOGLE_CLIENT_ID') || GOOGLE_CLIENT_ID;
  if (!clientId) return null;                            // sign-in not configured

  const cache = CacheService.getScriptCache();
  const key = 'idt:' + Utilities.base64Encode(
    Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw));
  const hit = cache.get(key);
  if (hit) { try { return JSON.parse(hit); } catch (err) { /* fall through */ } }

  let info;
  try {
    const r = UrlFetchApp.fetch(
      'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(raw),
      { muteHttpExceptions: true });
    if (r.getResponseCode() !== 200) return null;
    info = JSON.parse(r.getContentText());
  } catch (err) { return null; }

  // aud is THE check. Without it, an ID token minted for any other Google app —
  // which anyone can obtain — would be accepted here as proof of identity.
  if (info.aud !== clientId) return null;
  if (info.iss !== 'accounts.google.com' &&
      info.iss !== 'https://accounts.google.com') return null;

  const now = Math.floor(new Date().getTime() / 1000);
  const exp = Number(info.exp || 0);
  if (!exp || exp <= now) return null;
  // tokeninfo returns these as strings, so compare as strings.
  if (String(info.email_verified) !== 'true') return null;
  if (!info.email) return null;

  const out = { email: String(info.email).toLowerCase(), name: String(info.name || '') };
  try { cache.put(key, JSON.stringify(out), Math.min(3600, Math.max(60, exp - now))); }
  catch (err) { /* cache is a nicety, not a requirement */ }
  return out;
}

/**
 * Resolve whatever the client sent into a user record, or null.
 * Google ID token first; shared token second, while that map still has rows.
 */
function resolveUser(credential) {
  const c = String(credential || '');
  if (!c) return null;

  if (c.split('.').length === 3) {
    const v = verifyIdToken(c);
    if (!v) return null;
    const u = USERS[v.email];
    if (!u) return null;
    return { id: u.id, name: u.name || v.name, generate: !!u.generate,
             email: v.email, via: 'google' };
  }

  const email = LEGACY_TOKENS[c];
  if (!email) return null;
  const u = USERS[email];
  if (!u) return null;
  return { id: u.id, name: u.name, generate: !!u.generate, email: email, via: 'token' };
}

const FOLDER_NAME = 'Finals tracker';
const QUIZZES_FOLDER_NAME = 'Quizzes';
const REVISION_FOLDER_NAME = 'Revision';
const FILE_NAME = 'finals-tracker.json';
const QUEUE_NAME = 'queue.json';
const OUTBOX_NAME = 'claude-outbox.json';

// the standing pool of unattempted questions the scheduled task tops back up
const BUFFER_TARGET = 30;

// Whose weak areas the 6-hourly top-up aims at. Generated quizzes land in the
// shared bank and everyone can sit them — this only decides which tracker is
// read to choose the topic. Set to OWNER_ID because that is the exam this
// schedule was calibrated for.
const TOPUP_FOR = OWNER_ID;

// A queued request is marked 'running' while it is being generated, so a
// concurrent writer cannot hand the same request to the next run and pay for it
// twice. Apps Script kills an execution at 6 minutes, so anything still
// 'running' after this long was stranded by a crash and is safe to requeue.
const STALE_CLAIM_MS = 10 * 60 * 1000;

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
  Logger.log('Revision id:' + revisionFolderId());
  Logger.log('Queue id:   ' + queueFileId());
  Logger.log('Outbox id:  ' + outboxFileId());
  Logger.log('API key set: ' + (props().getProperty('ANTHROPIC_API_KEY') ? 'yes' : 'no (Make now will refuse)'));
  Logger.log('Sign-in:    ' + ((props().getProperty('GOOGLE_CLIENT_ID') || GOOGLE_CLIENT_ID)
    ? 'Google Sign-In configured' : 'NOT configured — set GOOGLE_CLIENT_ID in Script Properties'));
  Logger.log('Legacy:     ' + (Object.keys(LEGACY_TOKENS).length
    ? Object.keys(LEGACY_TOKENS).length + ' shared token(s) still accepted' : 'none'));
  Logger.log('Users:      ' + Object.keys(USERS).map(function (k) {
    return USERS[k].name + ' (' + USERS[k].id + (USERS[k].generate ? ', can generate' : '') + ')';
  }).join(', '));
  Object.keys(USERS).forEach(function (k) {
    Logger.log('  tracker ' + USERS[k].id + ': ' + trackerFileId(USERS[k].id));
  });
  Logger.log('Ready.');
}

/**
 * Run this once by hand after deploying, then paste the two ids it logs to
 * whoever is setting up the scheduled Claude task. Claude needs the OUTBOX id to
 * write to and the QUEUE id to read.
 */
function idsForClaude() {
  Logger.log('QUEUE  file id: ' + queueFileId());
  Logger.log('OUTBOX file id: ' + outboxFileId());
}

function doGet(e) {
  const p = e.parameter;
  const user = resolveUser(p.token);
  if (!user) return json({ error: 'bad token' });
  try {
    if (p.action === 'whoami')      return json({ user: user, signInConfigured: !!(props().getProperty('GOOGLE_CLIENT_ID') || GOOGLE_CLIENT_ID) });
    if (p.action === 'listQuizzes') return json({ quizzes: listQuizzes() });
    if (p.action === 'listRevision') return json({ modules: listRevision(user.id) });
    if (p.action === 'getQuiz')     return json(JSON.parse(readById(p.id)));
    if (p.action === 'status')      return json(bufferStatus(user.id));
    if (p.action === 'queue')       return json(readQueue());
    return json(JSON.parse(readFile(user.id)));
  } catch (err) {
    return json({ error: String(err) });
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const user = resolveUser(body.token);
    if (!user) return json({ error: 'bad token' });

    // Actions that spend the owner's Anthropic credit ON DEMAND, or that write to
    // the shared quiz bank, are gated. Everything else — sitting quizzes, reading
    // notes, recording your own results — is open to every user.
    //
    // queueRequest is deliberately NOT gated. Anyone may ask for a quiz; the
    // request simply waits for the scheduled run, which is rate-limited by
    // MAX_PER_RUN and happens on the owner's schedule. generateNow is different:
    // it bills an API call the instant the button is pressed, so it stays with
    // the owner. The distinction is on-demand spend, not spend as such.
    const NEEDS_GENERATE = ['saveQuiz', 'saveRevision',
                            'ingestOutbox', 'generateNow', 'deleteItem'];
    if (NEEDS_GENERATE.indexOf(body.action) >= 0 && !user.generate) {
      return json({ error: 'Generating content is not enabled for your account. ' +
                           'Quizzes appear in the bank as they are produced.' });
    }

    if (body.action === 'saveQuiz')      return json(saveQuiz(body));
    if (body.action === 'saveRevision')  return json(saveRevision(body));
    if (body.action === 'recordResults') return json(recordResults(body, user.id));
    if (body.action === 'queueRequest')  return json(queueRequest(body, user));
    if (body.action === 'ingestOutbox')  return json(ingestOutbox());
    if (body.action === 'generateNow')   return json(generateNow(body, user.id));
    if (body.action === 'deleteItem')    return json(deleteItem(body));

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
    writeFile(JSON.stringify(body, null, 2), user.id);
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

function revisionFolderId() {
  const p = props();
  let id = p.getProperty('revisionFolderId');
  if (!id) { id = makeFolder(REVISION_FOLDER_NAME, folderId()); p.setProperty('revisionFolderId', id); }
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

/**
 * Per-user tracker. The OWNER keeps the original finals-tracker.json and its
 * cached fileId property untouched — so switching this script to multi-user
 * needs no migration and cannot lose the existing history. Everyone else gets
 * finals-tracker-<id>.json created lazily on first use.
 */
function trackerFileId(uid) {
  const id = uid || OWNER_ID;
  if (id === OWNER_ID) return fileId();
  return singletonFileId('trackerId:' + id, 'finals-tracker-' + id + '.json', STARTER);
}

function readFile(uid) { return readById(trackerFileId(uid)); }
function writeFile(text, uid) { writeById(trackerFileId(uid), text); }

// --- quiz bank -------------------------------------------------------------------

/**
 * A quiz built from someone's tracked weak areas is derived from their own
 * results, so it belongs to them. Anything on a named system is subject matter,
 * not personal data, and can be shared with every user.
 */
function isPersonalScope(system) {
  const s = String(system || '').toLowerCase();
  return s.indexOf('weakest') >= 0 || s === 'mixed' || s.indexOf('weak area') >= 0;
}

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
                        title: quiz.title, source: quiz.source,
                        difficulty: String(body.difficulty || 'exam'),
                        category: body.category === 'past-paper' ? 'past-paper' : 'topic',
                        forUser: String(body.forUser || ''),
                        personal: isPersonalScope(quiz.system) ? '1' : '' });
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
      point: String(q.point || '').trim(),
      difficulty: ['easy', 'medium', 'hard'].indexOf(q.difficulty) >= 0 ? q.difficulty : 'medium',
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
             count: count, created: f.createdTime, source: ap.source || '',
             category: ap.category || 'topic', difficulty: ap.difficulty || '',
             for: ap.forUser || '', personal: ap.personal === '1' };
  });
}

// --- revision modules ------------------------------------------------------------
// Same shape of plumbing as the quiz bank, so a revision module requested from the
// site travels the identical path: queue -> generate -> Drive -> listed on the page.

/**
 * A section carries two optional extras that were previously conflated:
 *   note — ONE sentence worth memorising, a plain string, rendered as a callout
 *   link — {system, slug, title}, a reference into the student's own notes
 * They used to share the `note` field, so every generated module rendered its
 * link as notes.html#undefined/undefined. Hand-built modules that put a link
 * object in `note` are still accepted and migrated.
 */
function validateModule(body) {
  const objectives = (body.objectives || []).map(function (x) { return String(x).trim(); })
    .filter(function (x) { return x.length > 10; });

  const sections = (body.sections || []).filter(function (x) {
    return x && String(x.heading || '').trim() && String(x.body || '').trim();
  }).map(function (x) {
    const sec = { heading: String(x.heading).trim(), body: String(x.body).trim() };

    if (x.note && typeof x.note === 'string') sec.note = String(x.note).trim();

    if (x.link && typeof x.link === 'object' && x.link.system && x.link.slug) {
      sec.link = { system: String(x.link.system).trim(),
                   slug: String(x.link.slug).trim(),
                   title: String(x.link.title || x.link.slug).trim() };
    }
    // legacy shape: a link object passed in `note`
    if (!sec.link && x.note && typeof x.note === 'object' && x.note.system && x.note.slug) {
      sec.link = { system: String(x.note.system).trim(),
                   slug: String(x.note.slug).trim(),
                   title: String(x.note.title || x.note.slug).trim() };
      delete sec.note;
    }
    return sec;
  });

  const questions = validateQuestions(body.questions || []);
  return { objectives: objectives, sections: sections, questions: questions };
}

function saveRevision(body) {
  const m = validateModule(body);
  if (!m.sections.length || !m.questions.length) {
    return { error: 'a module needs at least one section and one valid question' };
  }
  const mod = {
    title: body.title || 'Untitled',
    system: body.system || body.title || 'General',
    created: new Date().toISOString().slice(0, 10),
    rationale: String(body.rationale || ''),
    objectives: m.objectives,
    sections: m.sections,
    questions: m.questions
  };
  const safe = String(mod.title).replace(/[\/\\?%*:|"<>]/g, '-').slice(0, 100);
  const stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd-HHmm');
  const id = makeFile(safe + '-' + stamp + '.json', revisionFolderId(),
                      'application/json', JSON.stringify(mod),
                      { title: mod.title, system: mod.system,
                        objectives: String(m.objectives.length),
                        questions: String(m.questions.length),
                        source: body.source || 'make-now',
                        forUser: String(body.forUser || OWNER_ID) });
  // `count` and `kind` are here so the scheduler can log a revision result the
  // same way it logs a quiz — it reads made.count regardless of which it made.
  return { ok: true, id: id, title: mod.title, system: mod.system,
           objectives: m.objectives.length, questions: m.questions.length,
           count: m.questions.length, kind: 'revision' };
}

/**
 * Revision modules are private to the person they were built for.
 *
 * Unlike a topic quiz, a module is generated FROM the requester's tracker — the
 * rationale names their weak areas and quotes their scores — so it is personal
 * data rather than subject matter. Filtered here rather than only in the page,
 * because hiding something client-side is not the same as not sending it.
 * Modules with no owner recorded predate the field and belong to the owner.
 */
function listRevision(uid) {
  const who = uid || OWNER_ID;
  const q = encodeURIComponent(`'${revisionFolderId()}' in parents and trashed = false`);
  const fields = encodeURIComponent('files(id,name,createdTime,appProperties)');
  const order = encodeURIComponent('createdTime desc');
  const out = JSON.parse(api(
    `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&orderBy=${order}`));
  return (out.files || []).filter(function (f) {
    const owner = (f.appProperties || {}).forUser || OWNER_ID;
    return owner === who;
  }).map(function (f) {
    const ap = f.appProperties || {};
    return { id: f.id, name: f.name,
             title: ap.title || f.name.replace(/-\d{4}-\d{2}-\d{2}-\d{4}\.json$/, ''),
             system: ap.system || '', objectives: Number(ap.objectives || 0),
             questions: Number(ap.questions || 0), created: f.createdTime,
             source: ap.source || '', for: ap.forUser || OWNER_ID };
  });
}

/**
 * Delete a quiz or revision module the script itself created.
 *
 * Trashed rather than hard-deleted, so a mistake is recoverable from Drive's bin
 * for 30 days. Pinned to the two folders this script owns: a stray or malicious
 * id cannot be used to trash the tracker, the queue, or anything else in Drive.
 */
function deleteItem(body) {
  const id = String(body.id || '').trim();
  if (!id) return { error: 'no id supplied' };

  let parents = [];
  try {
    const meta = JSON.parse(api('https://www.googleapis.com/drive/v3/files/' + id +
                                '?fields=parents,name'));
    parents = meta.parents || [];
  } catch (err) {
    return { error: 'could not read that file: ' + err };
  }

  const allowed = [quizzesFolderId(), revisionFolderId()];
  const ok = parents.some(function (p) { return allowed.indexOf(p) >= 0; });
  if (!ok) {
    return { error: 'refusing to delete — that file is not a quiz or revision module' };
  }

  api('https://www.googleapis.com/drive/v3/files/' + id, {
    method: 'patch', contentType: 'application/json',
    payload: JSON.stringify({ trashed: true })
  });
  return { ok: true, id: id, trashed: true };
}

// --- the buffer ------------------------------------------------------------------

/**
 * How many unattempted questions are sitting in the bank right now, counting
 * both the repo-published quizzes and the Drive ones. "Unattempted" means the
 * quiz has no entry in the tracker's quiz_history — a quiz you have taken stops
 * counting toward the floor even though it's still there to redo.
 */
function bufferStatus(uid) {
  let tracker;
  try { tracker = JSON.parse(readFile(uid)); } catch (err) { tracker = {}; }
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
      // The scheduled task cannot write to Drive (the connector can create files
      // but not overwrite one, and drive.file hides anything this script didn't
      // make), so it publishes to the repo instead and stamps which request it
      // answered. That stamp is how a queued request gets marked off.
      if (q.servicedRequest) serviced[q.servicedRequest] = 'repo:' + q.file;
      // one published quiz may answer several duplicate requests
      (q.alsoServices || []).forEach(function (rid) { serviced[rid] = 'repo:' + q.file; });
      quizzes.push({ id: id, title: q.title, system: q.system,
                     count: Number(q.count || 0), taken: done, src: 'repo' });
    });
  } catch (err) { /* repo unreachable — Drive quizzes still count */ }

  // Revision modules published to the repo carry the same servicedRequest stamp,
  // but this only ever read the quiz manifest — so a revision request stayed
  // 'pending' forever even after the module was live. Read both.
  try {
    const ridx = JSON.parse(UrlFetchApp.fetch(REPO_RAW + 'revision/index.json',
      { muteHttpExceptions: true }).getContentText());
    (ridx.modules || []).forEach(function (m) {
      if (m.servicedRequest) serviced[m.servicedRequest] = 'rev:' + m.file;
      (m.alsoServices || []).forEach(function (rid) { serviced[rid] = 'rev:' + m.file; });
    });
  } catch (err) { /* revision manifest unreachable — non-fatal */ }

  try {
    listQuizzes().forEach(function (q) {
      const done = !!taken[q.id];
      if (!done) unattempted += q.count;
      quizzes.push({ id: q.id, title: q.title, system: q.system,
                     count: q.count, taken: done, src: 'drive' });
    });
  } catch (err) { /* ignore */ }

  // Marking requests serviced is a read-modify-write on a file every user can
  // reach, so it happens under the lock and re-reads the queue inside it. The
  // copy is deliberately NOT taken before the lock. Failing to get the lock is
  // harmless: the next status call marks it instead.
  const queue = withLock(function () {
    const q = readQueue();
    let dirty = false;
    (q.requests || []).forEach(function (r) {
      if (r.status === 'pending' && serviced[r.id]) {
        r.status = 'done'; r.quizId = serviced[r.id]; r.done = new Date().toISOString();
        dirty = true;
      }
    });
    if (dirty) { try { writeQueue(q); } catch (err) { /* non-fatal */ } }
    return q;
  }, null) || readQueue();
  const pending = (queue.requests || []).filter(function (r) { return r.status === 'pending'; });

  return {
    unattempted: unattempted,
    target: BUFFER_TARGET,
    short: Math.max(0, BUFFER_TARGET - unattempted),
    pending: pending.length,
    running: (queue.requests || []).filter(function (r) { return r.status === 'running'; }).length,
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

/**
 * Serialise a read-modify-write on a SHARED file.
 *
 * Apps Script runs web-app requests concurrently and Drive's media upload is a
 * blind last-write-wins PATCH with no ETag check, so any read-then-write on
 * queue.json or a tracker can silently lose the other writer's change. That was
 * survivable with one user; with several it is not, because bufferStatus() marks
 * requests serviced and every user hits it on every Bank/Session tab click.
 *
 * Rules for using this:
 *   - ALWAYS re-read the file INSIDE the callback. A copy read before the lock
 *     was taken is exactly the stale copy that causes the loss.
 *   - NEVER hold it across a generation call. Those take 30-60s and would stall
 *     every other user's page behind them. Claim under lock, generate outside it,
 *     finalise under lock again.
 *
 * Returns the callback's value, or `fallback` if the lock could not be taken.
 */
function withLock(fn, fallback, waitMs) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(waitMs || 15000)) return fallback;
  try { return fn(); } finally { lock.releaseLock(); }
}

/**
 * Queue a request. Open to every user — see the gate in doPost for why.
 *
 * A per-user cap keeps a guest from filling the queue and monopolising the
 * owner's scheduled runs. The owner is uncapped: it is their credit and their
 * exam.
 */
const GUEST_QUEUE_CAP = { quiz: 2, revision: 2 };

function queueRequest(body, user) {
  const id = 'r' + new Date().getTime();
  const uid = (user && user.id) || '';
  const mayGenerate = !!(user && user.generate);

  return withLock(function () {
  const q = readQueue();

  const kind = body.kind === 'revision' ? 'revision' : 'quiz';

  // Capped per kind, not in total, so a guest waiting on two quizzes can still
  // ask for a revision module. Counting only 'pending' means a request that has
  // been built stops occupying the allowance.
  if (!mayGenerate) {
    const cap = GUEST_QUEUE_CAP[kind];
    const mine = q.requests.filter(function (r) {
      return r.by === uid && r.status === 'pending' &&
             (r.kind === 'revision' ? 'revision' : 'quiz') === kind;
    }).length;
    if (mine >= cap) {
      return { error: 'You already have ' + mine + ' ' + kind + ' request' +
                      (mine === 1 ? '' : 's') + ' waiting, which is the limit. ' +
                      'They are built on a schedule — let those come through first.' };
    }
  }

  q.requests.unshift({
    id: id,
    system: body.system || 'Weakest areas',
    n: Math.min(40, Math.max(5, Number(body.n) || 20)),
    topics: Array.isArray(body.topics) ? body.topics : [],
    kind: kind,
    difficulty: ['easy', 'medium', 'hard'].indexOf(body.difficulty) >= 0 ? body.difficulty : '',
    note: String(body.note || ''),
    status: 'pending',
    by: uid,
    byName: (user && user.name) || '',
    requested: new Date().toISOString()
  });
  q.requests = q.requests.slice(0, 50);
  writeQueue(q);
  return { ok: true, id: id,
           pending: q.requests.filter(function (r) { return r.status === 'pending'; }).length };
  }, { error: 'The queue is busy — try again in a moment.' });
}

/**
 * Drain claude-outbox.json into real quiz files.
 *
 * Claude (the scheduled task) cannot create a file this script can see —
 * drive.file scope only covers files the script itself made. It overwrites the
 * body of this one instead, and this pulls the contents across.
 */
function ingestOutbox() {
  let ob;
  try { ob = JSON.parse(readById(outboxFileId())); }
  catch (err) { return { ok: true, ingested: 0, note: 'outbox unreadable — treated as empty' }; }

  const list = (ob && ob.quizzes) || [];
  if (!list.length) return { ok: true, ingested: 0 };

  const made = [];
  const rejected = [];
  const servicedIds = [];

  list.forEach(function (z) {
    if (!z || !Array.isArray(z.questions)) { rejected.push('not a quiz object'); return; }
    // an outbox entry may be a revision module rather than a quiz
    const saved = (z.kind === 'revision' || z.sections)
      ? saveRevision({ title: z.title, system: z.system, rationale: z.rationale,
                       objectives: z.objectives, sections: z.sections,
                       questions: z.questions, source: 'claude-scheduled' })
      : saveQuiz({ title: z.title, system: z.system, questions: z.questions,
                   source: 'claude-scheduled' });
    if (saved.error) { rejected.push((z.title || 'untitled') + ': ' + saved.error); return; }
    made.push(saved);
    if (z.requestId) servicedIds.push({ id: z.requestId, quizId: saved.id });
  });

  // Creating the quiz files above makes new files and cannot collide. Marking
  // the shared queue can, so it is done separately, under the lock, against a
  // queue re-read inside it.
  if (servicedIds.length) {
    withLock(function () {
      const q = readQueue();
      servicedIds.forEach(function (h) {
        (q.requests || []).forEach(function (r) {
          if (r.id === h.id) {
            r.status = 'done'; r.quizId = h.quizId; r.done = new Date().toISOString();
          }
        });
      });
      writeQueue(q);
    }, null);
  }
  writeById(outboxFileId(), JSON.stringify(EMPTY_OUTBOX, null, 2));
  return { ok: true, ingested: made.length, quizzes: made, rejected: rejected };
}

// --- "Make now" — direct Anthropic call ------------------------------------------

function generateNow(body, uid) {
  const key = props().getProperty('ANTHROPIC_API_KEY');
  if (!key) {
    return { error: 'No ANTHROPIC_API_KEY in Script Properties — use Schedule instead, ' +
                    'or add a key under Project Settings > Script Properties.' };
  }
  // A revision module is the same request travelling the same path — it just
  // produces objectives + teaching + questions rather than questions alone.
  if (body.kind === 'revision') return generateModule(key, body, uid);

  const system = body.system || 'Mixed';
  const want = Math.min(20, Math.max(5, Number(body.n) || 10));

  const ground = groundingFor(system);
  const weak = weakAreasFor(system, uid || OWNER_ID);

  // A single difficulty generates all at that level; anything else reproduces the
  // 25/55/20 blend measured off the real papers.
  const plan = difficultyPlan(body.difficulty, want);
  const out = [];

  ['easy', 'medium', 'hard'].forEach(function (level) {
    let need = plan[level] || 0;
    let guard = 0;
    while (need > 0 && guard < 3) {
      guard++;
      const before = out.length;
      const batch = Math.min(BATCH_MAX, need);
      let got = [];
      try { got = callAnthropic(key, system, batch, ground, weak, out, level); }
      catch (err) { break; }
      validateQuestions(got).forEach(function (q) {
        q.difficulty = level;          // trust the plan, not the model's self-label
        out.push(q);
      });
      const added = out.length - before;
      if (!added) break;               // no progress — stop rather than spin
      need -= added;
    }
  });

  if (!out.length) return { error: 'model returned nothing usable' };

  const saved = saveQuiz({
    title: system + ' — ' + (body.difficulty || 'exam mix') + ' — ' +
      Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'd MMM HH:mm'),
    system: system, questions: out, source: 'make-now',
    difficulty: body.difficulty || '',
    forUser: body.forUser || ''
  });
  saved.asked = want;
  return saved;
}

/**
 * Build a revision module: learning objectives, short teaching sections written to
 * close the gap, then questions that test exactly those objectives.
 *
 * Split across two API calls deliberately. Asking for objectives, six 350-word
 * sections and fifteen questions in one request is the longest call in this file
 * and the one most likely to pass the ~60s UrlFetchApp ceiling — and a timeout
 * there loses the entire module. Teaching first, then questions grounded in the
 * objectives that came back, which also makes the questions test the module
 * rather than the topic in general.
 */
function generateModule(key, body, uid) {
  const system = body.system || 'Weakest areas';
  const nq = Math.min(15, Math.max(5, Number(body.n) || 10));
  const ground = groundingFor(system);
  const weak = weakAreasFor(system, uid || OWNER_ID);
  const plan = difficultyPlan(body.difficulty, nq);

  // ---- call 1: objectives + teaching -------------------------------------------
  const tPrompt = [
    'Build the TEACHING HALF of a revision module for a final-year Australian medical',
    'student sitting written finals (no OSCE). Teaching first — this exists to close a',
    'known gap, not to assess.',
    '',
    'Topic / scope: ' + system,
    '',
    weak ? 'The student\'s tracked weak points. Aim squarely at them, and say so in the\n' +
           'rationale:\n' + weak + '\n' : '',
    ground ? 'Ground the teaching in the notes the student has actually studied:\n\n' +
             '<notes>\n' + ground + '\n</notes>\n' : '',
    'Produce:',
    '- 4 to 7 LEARNING OBJECTIVES, each a full sentence naming what must be recalled or',
    '  discriminated. Not "understand X" — state the actual discriminator or threshold.',
    '- 3 to 6 TEACHING SECTIONS, each with a heading and a body of 150-350 words that',
    '  actually teaches the point: mechanism, the discriminator, the numbers. Markdown',
    '  tables are welcome where they earn their place.',
    '- Each section MAY carry "note": ONE sentence worth memorising, as a plain string.',
    '- Each section MAY carry "link": {"system":"<notes system slug>","slug":"<note slug>",',
    '  "title":"..."} pointing at the relevant page of the student\'s own notes. Omit it',
    '  unless you are confident that page exists — a dead link is worse than none.',
    '',
    'Australian guidelines throughout (ANZCOR not Resuscitation Council UK; Therapeutic',
    'Guidelines; RACGP; RCH/Queensland for paediatrics). Say where Australia differs.',
    '',
    'Return ONLY a JSON object, no prose, no code fence:',
    '{"title":"...","system":"' + system + '","rationale":"why this module, one sentence",',
    ' "objectives":["...","..."],',
    ' "sections":[{"heading":"...","body":"...","note":"...",',
    '   "link":{"system":"...","slug":"...","title":"..."}}]}'
  ].join('\n');

  const teach = anthropicJson(key, tPrompt, 6000, parseJsonObject);
  if (!teach || !teach.sections || !teach.sections.length) {
    return { error: 'model did not return usable teaching sections' };
  }

  // ---- call 2: questions, grounded in the teaching just written ----------------
  const objText = (teach.objectives || []).map(function (o) { return '- ' + o; }).join('\n');
  const mixLine = ['easy', 'medium', 'hard'].filter(function (d) { return plan[d]; })
    .map(function (d) { return plan[d] + ' ' + d; }).join(', ');

  const qPrompt = [
    'Write ' + nq + ' single-best-answer questions testing these learning objectives,',
    'for a final-year Australian medical student sitting written finals.',
    '',
    'Topic: ' + system,
    '',
    'Objectives the questions must test:',
    objText,
    '',
    'Difficulty mix: ' + mixLine + '. Label each question with its intended difficulty.',
    '',
    DIFFICULTY_RULES.easy, '', DIFFICULTY_RULES.medium, '', DIFFICULTY_RULES.hard,
    '',
    'Rules:',
    '- Australian guidelines where they differ (ANZCOR, Therapeutic Guidelines, RACGP).',
    '- Five options, exactly one defensible answer.',
    '- Supply the reference interval inline whenever a value must be judged.',
    '- No question may depend on seeing an image.',
    '- Explanation says why the right answer is right AND why the tempting wrong one is',
    '  wrong, with <b>...</b> around the number, threshold or drug that is the point.',
    '- Every question carries "point": the takeaway as ONE standalone factual sentence',
    '  that makes sense with zero context from the stem.',
    '',
    'Return ONLY a JSON array, no prose, no code fence. Each element:',
    '{"stem":"...","lead":"...","options":["a","b","c","d","e"],"correct":<0-4>,',
    ' "explanation":"...","point":"...","topic":"' + system + ' — <subtopic>",',
    ' "type":"recall|application|discrimination","difficulty":"easy|medium|hard"}'
  ].join('\n');

  const qs = anthropicJson(key, qPrompt, 700 * nq + 1000, parseJsonArray) || [];
  if (!qs.length) return { error: 'teaching generated but no usable questions came back' };

  teach.questions = qs;
  teach.system = teach.system || system;
  teach.source = 'make-now';
  teach.forUser = body.forUser || uid || OWNER_ID;
  return saveRevision(teach);
}

/** One Anthropic call, parsed with the supplied extractor. Returns null on failure. */
function anthropicJson(key, prompt, maxTokens, parser) {
  const res = UrlFetchApp.fetch(ANTHROPIC_URL, {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    payload: JSON.stringify({
      model: props().getProperty('MODEL') || DEFAULT_MODEL,
      max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  if (res.getResponseCode() >= 300) return null;
  const out = JSON.parse(res.getContentText());
  const text = (out.content || []).map(function (c) { return c.text || ''; }).join('');
  return parser(text);
}

/** Same tolerance as parseJsonArray, for a top-level object. */
function parseJsonObject(text) {
  let t = String(text || '').trim();
  t = t.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try { return JSON.parse(t.slice(start, end + 1)); } catch (err) { return null; }
}

/**
 * Difficulty rules, calibrated against the 2024 and 2025 Barriers MCQ papers.
 * Full working in docs/difficulty-rules.md — keep the two in step if editing.
 */
const DIFFICULTY_RULES = {
  easy: [
    'DIFFICULTY: EASY — one inferential hop.',
    '- Stem 1-3 sentences, or a bare knowledge question with no vignette.',
    '- Exactly one near-pathognomonic cue, or a single named fact/guideline number.',
    '- No lab panel to interpret; at most one value, explicitly flagged abnormal.',
    '- Distractors sit in visibly different categories — two are eliminable on sight.',
    '- No negative stems, no "which of the following is TRUE" lists.',
    '- A prepared student answers in under 30 seconds and scores 85-95%.'
  ].join('\n'),
  medium: [
    'DIFFICULTY: MEDIUM — two hops. This is the modal Barriers question.',
    '- List-style TRUE/EXCEPT questions, when used, belong here: five recall checks,',
    '  each option a real fact a candidate might half-remember.',
    '- Stem 3-6 sentences: demographics, history, examination, and usually one',
    '  investigation that must be INTERPRETED rather than merely read.',
    '- Requires synthesising 2+ findings, OR applying a threshold/algorithm to this',
    '  scenario, OR adjusting the standard answer for a comorbidity, contraindication',
    '  or drug interaction stated in the stem.',
    '- Exactly one distractor is the correct answer to the neighbouring condition.',
    '- A prepared student takes 60-90 seconds and scores 60-75%.'
  ].join('\n'),
  hard: [
    'DIFFICULTY: HARD — two hops and a turn. Difficulty must come from reasoning,',
    'NEVER from rarity or obscurity. Satisfy at least one of:',
    '  1. Chained inference across modalities — interpret data/imaging, then predict',
    '     something in a different domain (CXR findings -> expected examination signs).',
    '  2. Fine discrimination — two options share nearly every feature and one stated',
    '     detail decides between them.',
    '  3. A trap in the physiology — the obvious test is uninterpretable here, or a',
    '     normal value IS the finding (TSH in secondary hypothyroidism; normal calcium',
    '     in vitamin D deficiency held there by raised PTH).',
    '  4. A precise numeric threshold or cut-off is itself the answer.',
    '  5. A negative stem ("least likely", "not a feature") — at most 1 in 10 of',
    '     the hard tier, and only where the exclusion itself needs reasoning.',
    '- Every distractor must be defensible to someone who missed the key detail.',
    '- A prepared student takes 2+ minutes and scores 40-55%.'
  ].join('\n')
};

// Observed blend in the real papers.
const EXAM_MIX = { easy: 0.25, medium: 0.55, hard: 0.20 };

function difficultyPlan(difficulty, n) {
  if (difficulty && DIFFICULTY_RULES[difficulty]) {
    const one = {}; one[difficulty] = n; return one;
  }
  const easy = Math.round(n * EXAM_MIX.easy);
  const hard = Math.round(n * EXAM_MIX.hard);
  return { easy: easy, hard: hard, medium: Math.max(0, n - easy - hard) };
}

function callAnthropic(key, system, n, ground, weak, already, difficulty) {
  const avoid = already.slice(-20).map(function (q) { return '- ' + q.lead; }).join('\n');
  const rules = DIFFICULTY_RULES[difficulty] || DIFFICULTY_RULES.medium;

  const prompt = [
    'Write ' + n + ' single-best-answer clinical vignettes for a final-year Australian',
    'medical student sitting written finals (no OSCE — written paper only).',
    '',
    'System: ' + system,
    '',
    weak ? 'Weight questions toward these known weak areas:\n' + weak + '\n' : '',
    ground ? 'Ground the content in these notes the student has actually studied:\n\n' +
             '<notes>\n' + ground + '\n</notes>\n' : '',
    rules,
    '',
    'Rules:',
    '- Australian guidelines where they differ (ANZCOR, not Resuscitation Council UK;',
    '  Therapeutic Guidelines; Australian Diabetes Handbook; RACGP).',
    '- Five options (A-E), as the real paper uses. Exactly one defensible answer.',
    '- Roughly HALF the real paper is not diagnosis. Spread the set across next',
    '  investigation, next management step, mechanism, drug choice, guideline',
    '  figures, applied anatomy, and occasionally statistics/public health or',
    '  ethics/law/cultural safety — not just "what is the most likely diagnosis".',
    '- Up to 15% of a set may be list-style ("which of the following is TRUE /',
    '  NOT / EXCEPT"); rate those medium. Beyond that, avoid the format.',
    '- Supply the reference interval inline whenever a value must be judged.',
    '- No question may depend on seeing an image. If imaging matters, report its',
    '  findings in words the way the real paper does.',
    '- Explanation states why the right answer is right AND why the tempting wrong one',
    '  is wrong. Use <b>...</b> around the specific number, threshold or drug that is',
    '  the point of the question. 2-4 sentences.',
    '- Medical shorthand is fine; assume familiarity.',
    avoid ? '\nDo NOT repeat these questions already written for this set:\n' + avoid : '',
    '',
    'Return ONLY a JSON array, no prose, no code fence. Each element:',
    '{"stem":"...","lead":"...","options":["a","b","c","d","e"],"correct":<0-4 index>,',
    ' "explanation":"...","point":"...","topic":"' + system + ' — <subtopic>",',
    ' "type":"recall|application|discrimination","difficulty":"' + (difficulty || 'medium') + '"}',
    '',
    'The "point" field is the takeaway as ONE standalone factual sentence that makes',
    'sense with zero context from the stem — name the condition and the fact, never',
    '"this patient" or "the next step". It is shown later as a revision dot point on',
    'its own. Example: "Tension pneumothorax is decompressed the moment it is found',
    'on the primary survey — needle decompression, then the survey continues." NOT:',
    '"Immediate needle decompression, then continue the primary survey."'
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
function weakAreasFor(system, uid) {
  try {
    const t = JSON.parse(readFile(uid));
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

function recordResults(body, uid) {
  return withLock(function () { return recordResultsLocked(body, uid); },
                  { error: 'Your tracker is busy — try recording again in a moment.' });
}

/**
 * How many correct answers on the same point retire it.
 *
 * One, as asked for. Worth knowing the trade: a four-option question is a 25%
 * guess, so a single correct answer is weaker evidence than it looks. Raise
 * this to 2 and a point has to survive two separate sittings before the flag
 * goes — the counter below already tracks it.
 */
const CLEARS_REQUIRED = 1;

/**
 * The identity of a learning point, built identically whether it arrives as a
 * miss or as a correct answer — otherwise the two would never match and
 * nothing would ever clear.
 */
function pointLine(m) {
  const authored = String((m && m.point) || '').trim();
  if (authored) return authored;
  const lead = String((m && m.lead) || '').replace(/\s*\?\s*$/, '').trim();
  const ans = String((m && m.correct) || '').trim();
  if (!ans) return '';
  return (lead ? lead + ' — ' : '') + ans;
}

function recordResultsLocked(body, uid) {
  const t = JSON.parse(readFile(uid));
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

  // The learning point behind each flag, stored on the flag itself so it
  // survives past the 40-entry recent_misses cap. Reads standalone: the lead
  // question and its actual answer, not a topic label you have to decode.
  const pointsByTopic = {};
  (body.misses || []).forEach(function (m) {
    const key = String(m.topic || '').toLowerCase();
    if (!key || !m.correct) return;
    // Prefer the question's authored `point` — a standalone fact written at
    // generation time. Lead+answer is only the fallback for old quizzes, and it
    // reads badly ("what happens next — needle decompression") because it
    // depends on a stem that isn't shown.
    const line = pointLine(m);
    if (!line) return;
    pointsByTopic[key] = pointsByTopic[key] || [];
    if (pointsByTopic[key].indexOf(line) < 0) pointsByTopic[key].push(line);
  });

  t.open = t.open || [];
  t.resolved = t.resolved || [];

  /* A point answered correctly retires. Done BEFORE the new flags below, so a
     session that gets one instance right and another wrong still ends flagged —
     missing it again is the stronger signal and must win.
     A flag with no points is a manual one: it names no question, so no answer
     can be "the same question", and it is left alone. */
  (body.corrects || []).forEach(function (c) {
    const key = String(c.topic || '').toLowerCase();
    const line = pointLine(c);
    if (!key || !line) return;

    const hit = t.open.filter(function (o) {
      return String(o.topic).toLowerCase() === key;
    })[0];
    if (!hit || !(hit.points || []).length) return;
    if (hit.points.indexOf(line) < 0) return;      // a different question

    hit.hits = hit.hits || {};
    hit.hits[line] = (hit.hits[line] || 0) + 1;
    if (hit.hits[line] < CLEARS_REQUIRED) return;

    hit.points = hit.points.filter(function (l) { return l !== line; });
    delete hit.hits[line];

    // Every point that put this flag here has now been answered correctly.
    if (!hit.points.length) {
      t.open = t.open.filter(function (o) { return o !== hit; });
      t.resolved.unshift({ topic: hit.topic, system: hit.system || '', date: date });
      t.log = t.log || [];
      t.log.unshift({ date: date, note: 'Cleared — ' + hit.topic + ', answered correctly.' });
    }
  });

  (body.flags || []).forEach(function (f) {
    if (!f.topic) return;
    const key = String(f.topic).toLowerCase();
    const fresh = pointsByTopic[key] || [];
    const hit = t.open.filter(function (o) {
      return String(o.topic).toLowerCase() === key;
    })[0];
    if (hit) {
      hit.attempts = (hit.attempts || 1) + 1;
      hit.points = (hit.points || []);
      fresh.forEach(function (l) { if (hit.points.indexOf(l) < 0) hit.points.push(l); });
      hit.points = hit.points.slice(0, 2);
    } else {
      t.open.push({
        topic: f.topic, system: f.system || body.system || '',
        type: f.type || 'recall', attempts: 1, since: date, source: 'quiz',
        points: fresh.slice(0, 2)
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

  // accuracy by difficulty — the signal that says whether you are failing on
  // facts or on reasoning, which need different remedies
  t.difficulty_stats = t.difficulty_stats || {};
  (body.byDifficulty || []).forEach(function (d) {
    if (!d.level || !d.total) return;
    const cur = t.difficulty_stats[d.level] || { tested: 0, correct: 0 };
    cur.tested += d.total;
    cur.correct += (d.correct || 0);
    cur.score = Math.round(cur.correct / cur.tested * 100);
    t.difficulty_stats[d.level] = cur;
  });

  t.updated = date;
  writeFile(JSON.stringify(t, null, 2), uid);
  return { ok: true, updated: date };
}

// --- the scheduled top-up, run by Google's scheduler ------------------------------

// Sydney clock hours, per Project Settings > Time zone. 6-hourly across a waking
// day: 8am, 2pm, 8pm. The 2am slot is deliberately dropped — questions generated
// while asleep sit unattempted anyway, and it halves the idle API spend.
const TOPUP_HOURS = [8, 14, 20];

// Ceiling per run. At 3 runs a day that caps generation at 6 quizzes daily even
// if something upstream misbehaves. Two per run matters now the gap is 6 hours:
// with one, a pair of queued requests would take 12 hours to clear.
const MAX_PER_RUN = 2;

/**
 * Run this ONCE by hand (function dropdown > installTopUpSchedule > Run).
 * Safe to re-run — it clears its own previous triggers first, including any
 * older hourly one.
 *
 * Why Apps Script and not a scheduled Claude task: measured on 14 Aug,
 * fresh-session scheduled tasks in that environment fired 13 minutes to 86+
 * minutes late, and one that did fire never completed its write. Google's
 * time-driven triggers are dull and dependable, which is what a standing
 * question buffer actually needs.
 *
 * Note atHour() is a one-hour window, not a precise time — an 8am trigger fires
 * somewhere between 8 and 9. That is fine here and not worth fighting.
 */
function installTopUpSchedule() {
  clearTopUpTriggers();
  TOPUP_HOURS.forEach(function (h) {
    ScriptApp.newTrigger('topUpRun').timeBased().atHour(h).everyDays(1).create();
  });
  Logger.log('Top-up scheduled at ' + TOPUP_HOURS.join(':00, ') + ':00 ' +
             Session.getScriptTimeZone() +
             ' — check Project Settings shows Australia/Sydney.');
}

function clearTopUpTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    const f = t.getHandlerFunction();
    if (f === 'topUpRun' || f === 'hourlyTopUp') ScriptApp.deleteTrigger(t);
  });
}

function uninstallTopUpSchedule() {
  clearTopUpTriggers();
  Logger.log('Top-up schedule removed.');
}

// Legacy name — kept so an already-installed hourly trigger keeps working
// rather than erroring until it gets cleared.
function hourlyTopUp() { topUpRun(); }

/**
 * Priority: explicit Schedule requests first, oldest first; then buffer top-up.
 * If neither is outstanding it makes no API call at all, so an idle day is free.
 */
function topUpRun() {
  const p = props();
  const stamp = new Date().toISOString();

  if (!p.getProperty('ANTHROPIC_API_KEY')) {
    p.setProperty('lastTopUp', stamp + ' — skipped, no API key in Script Properties');
    return;
  }

  const did = [];

  for (let i = 0; i < MAX_PER_RUN; i++) {
    // CLAIM. Take the oldest pending request and mark it 'running' under the
    // lock, so a concurrent bufferStatus write cannot resurrect it as pending
    // and cause the next run to generate — and pay for — the same quiz twice.
    const claim = withLock(function () {
      const q = readQueue();
      // Reclaim anything stranded 'running' by a crashed or timed-out run.
      // Apps Script kills an execution at 6 minutes, so anything older than
      // STALE_CLAIM_MS is definitely not still being worked on.
      const now = new Date().getTime();
      (q.requests || []).forEach(function (r) {
        if (r.status === 'running' &&
            now - new Date(r.started || 0).getTime() > STALE_CLAIM_MS) {
          r.status = 'pending'; delete r.started;
          r.lastError = 'previous run did not finish — requeued';
        }
      });
      const pending = (q.requests || []).filter(function (r) { return r.status === 'pending'; });
      if (!pending.length) return null;
      const r = pending[pending.length - 1];          // oldest
      r.status = 'running'; r.started = new Date().toISOString();
      writeQueue(q);
      return { id: r.id, system: r.system, n: r.n, difficulty: r.difficulty || '',
               kind: r.kind || 'quiz' };
    }, null);

    if (claim) {
      // GENERATE, deliberately outside the lock — this takes 30-60s and holding
      // the lock across it would stall every user's page behind generation.
      // claim.by carries who asked, so the result can be filed under "Made for
      // others" for everyone except them.
      const made = generateNow({ system: claim.system, n: claim.n,
                                 difficulty: claim.difficulty, kind: claim.kind,
                                 forUser: claim.by || '' }, TOPUP_FOR);

      // FINALISE under the lock, against a fresh read.
      withLock(function () {
        const q2 = readQueue();
        (q2.requests || []).forEach(function (r) {
          if (r.id !== claim.id) return;
          if (made && !made.error) {
            r.status = 'done'; r.quizId = made.id; r.done = new Date().toISOString();
          } else {
            // Back to pending so it is retried next run rather than lost.
            r.status = 'pending'; delete r.started;
            r.lastError = String((made && made.error) || 'unknown').slice(0, 200);
          }
        });
        writeQueue(q2);
      }, null);

      if (made && !made.error) {
        did.push((made.kind === 'revision' ? 'module' : 'request') + ' "' + claim.system +
                 '" served (' + made.count + 'q)');
        continue;
      }
      did.push('request "' + claim.system + '" FAILED: ' + ((made && made.error) || 'unknown'));
      break;
    }

    let st;
    try { st = bufferStatus(TOPUP_FOR); }
    catch (err) { did.push('status failed: ' + err); break; }

    if (st.short <= 0) {
      if (!did.length) did.push('pool at ' + st.unattempted + ', nothing to do');
      break;
    }

    const sys = weakestSystem(TOPUP_FOR);
    const made = generateNow({ system: sys, n: Math.min(20, Math.max(5, st.short)) }, TOPUP_FOR);
    if (made && !made.error) {
      did.push('topped up ' + sys + ' (' + made.count + 'q)');
    } else {
      did.push('top-up FAILED: ' + ((made && made.error) || 'unknown'));
      break;
    }
  }

  p.setProperty('lastTopUp', stamp + ' — ' + did.join('; '));
}

/**
 * Which system is currently hurting most: the one with the most flagged attempts
 * in `open`, falling back to the lowest-scoring topic's system prefix.
 */
function weakestSystem(uid) {
  try {
    const t = JSON.parse(readFile(uid));

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
