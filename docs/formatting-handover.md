# Handover — formatting cleanup of the finals notes library

Written 18 August 2026 for a fresh agent session. **You are improving formatting only.
You are not changing clinical facts.** Read the whole of this before touching anything;
the source-of-truth rule in §2 will silently waste your work if you miss it.

Exam is **14 September 2026** — 27 days out. The owner is Fadi, a final-year Western
Sydney University medical student. The notes are read on a phone as often as a laptop.

---

## 1. What and where

| | |
|---|---|
| Repo | `github.com/thatoneweirddoc/finals-med-dash` — **public**, so never commit copyrighted material |
| Working copy | clone fresh; the previous session used `/tmp/fmd` |
| Live site | GitHub Pages, `notes.html` at the repo root |
| Library size | **22 systems, 211 notes, ~614,000 words** |
| Deploy token | Drive doc `finals-deploy-token`, id `1ZGHqZJIxDBzz_wi1SSURqXBFXlZQvT01PO5Yy3qdtwQ` — read it with the Google Drive connector, never paste it into chat. Drive's text export escapes underscores; strip the backslashes |

Push needs the token in a header because plain push 403s and `api.github.com` is blocked:

```bash
GH=<token>
git -c http.extraHeader="Authorization: Basic $(printf 'x:%s' "$GH" | base64 -w0)" push origin main
```

**Fetch and rebase before you start and again immediately before you commit.** A Google
Apps Script publishes generated quizzes to the same branch on a schedule, so the remote
moves while you work — one recent session came back 27 commits behind.

Read these before starting, in this order: **`docs/system-build-playbook.md`** (the
house conventions and the error taxonomy), then **`docs/notes-build-order.md`** (what
each system is and how it was made).

---

## 2. THE RULE THAT MATTERS MOST — where the source of truth lives

Eight systems are **generated** from a master file. Editing their `notes/*.md` is
pointless: the next `assemble_notes.py` run overwrites it. Fourteen systems have **lost
their upstream master** (it lived at `/mnt/project/...` or `/tmp/out/...` in an
ephemeral sandbox from an earlier session and no longer exists), so for those the
`notes/*.md` file **is** the only copy and editing it directly is correct.

Confirm this yourself before your first edit — do not trust the table below blindly:

```bash
python3 - <<'PY'
import json,os
cfg=json.load(open('tools/notes_sources.json'))
for s in cfg['systems']:
    paths=[x['path'] for x in s.get('sources',[])]
    live=[p for p in paths if os.path.exists(p)]
    print(f"{s['slug']:<26}{'EDIT sources/' if live else 'EDIT notes/ (master gone)':<28}{live or paths}")
PY
```

| Edit `sources/` — then regenerate | Edit `notes/` directly |
|---|---|
| paediatrics, obstetrics-gynaecology, urology, ent, geriatrics, surgery, psychiatry, critical-care | anaesthetics, cardiology, dermatology, endocrine, gastroenterology, general-practice, haematology-oncology, immunology-allergy, infectious-disease, msk-rheumatology, neurology, ophthalmology, renal, respiratory |

Note `dermatology`, `ophthalmology` and `renal` are **not in `tools/notes_sources.json`
at all** — they exist only under `notes/`. Leave them out of the config; adding them
without a source path will break the build.

For the eight generated systems the chain is
`sources/<slug>/NN-*.md` → `sources/claude_<system>_master.md` → `notes/<slug>/*.md`.
If you edit a section file you must also update the master, or they diverge. The master
is a plain concatenation of the section files with a preamble.

### Build commands

```bash
python3 tools/assemble_notes.py --config tools/notes_sources.json --out notes --system <slug>
python3 tools/build_notes.py          # rebuilds notes/index.json + search-index.json
python3 tools/build_notes_page.py     # rebuilds notes.html
```

**Use the slug, not the display name** — `obstetrics-gynaecology`, not
"Obstetrics & Gynaecology", or it silently builds 0 notes and reports success.

---

## 3. The renderer — what markdown actually survives

Two files decide this. **Read both before deciding on any formatting convention**, because
several obvious-looking ideas do not render:

- **`tools/notes.template.html`** — the client-side markdown renderer is the function
  `mdToHtml()` (around line 559) and its helper `inline()` (around line 550).
- **`tools/build_notes.py`** — `split_sections()` decides search and navigation granularity.

Things established by reading them, which you should re-confirm:

**Supported:** `##`–`######` headings (rendered one level deeper, since the note title is
the H2), fenced code, `---` rules, pipe tables, blockquotes, ordered and unordered lists,
`**bold**`, `*italic*`, `` `code` ``, images, links.

**Quirks that will bite you:**

- **Only `##`, `###` and `####` become navigable, searchable sections.** `#####` and
  `######` are swallowed into the parent section's body — no nav entry, no separate search
  hit. There are a lot of H5s and H6s in the library and promoting the real topics among
  them is one of the highest-value fixes available.
- **Nested lists are not supported.** An indented sub-bullet is folded into the parent
  `<li>` as continuation text, producing a run-on line.
- **A table only renders if a `|---|` separator row immediately follows the header.**
- Tables with **more than two columns** get `class="wide"`, and every cell carries a
  `data-label` taken from its column heading so narrow screens stack each row as a
  labelled card instead of scrolling sideways. **A table with an all-empty header row
  loses those labels and becomes unreadable on a phone.** Give every table real headers.
- The bold regex is `\*\*([^*]+)\*\*` — it **cannot contain another `*`**, so
  `**a *b* c**` breaks. Italic needs a preceding space or `(`, so `word*italic*` fails.
- There is a **callout syntax nobody has used**: `> [!KEY] text` renders as a "Key rule"
  box, `> [!VERIFY] text` as a "Verify before relying on this" box. Zero occurrences in
  611,000 words. This is the single biggest presentational upgrade available — but see
  the caution in §6.

---

## 4. The house format

The eight pipeline-built systems follow this and are the reference standard. Match it;
do not invent a new one.

```
## N.1 Section title

**The short version**
- three to six tight bullets

…detail prose, tables where they earn their place…

## Rapid-Recall Discriminators

| Cue | Answer |
|---|---|
| …16–18 self-contained rows… |

**Sources**
- Name, edition/year
```

- `⚑` marks anything changed from older texts or where Australian practice diverges.
- British/Australian spelling, sentence case for metadata lines.
- Dense shorthand register — the reader is a final-year student; **do not expand common
  abbreviations** and do not "clarify" prose into something longer.

Compliance is uneven and is worth measuring per system — `**The short version**` and
`Rapid-Recall` are both greppable.

---

## 5. The defects, and how to measure them yourself

The previous session's scan found the defects cluster almost entirely in the fourteen
systems whose notes came from stacked Word-document conversions rather than the pipeline.
**Re-run the measurement rather than trusting these figures** — they are a starting point
and a sanity check on your own script, nothing more.

Rough shape of what was found, worst first: **haematology-oncology, endocrine, neurology,
respiratory, renal, msk-rheumatology, cardiology, gastroenterology, infectious-disease,
general-practice**. The eight pipeline systems were largely clean.

Defect classes worth scripting a detector for:

1. **Giant table cells** — whole paragraphs crammed into one cell by the docx conversion.
   Hundreds of cells over 400 characters; the worst is over 3,000. These are unreadable
   on any screen and should become prose or a properly split table.
2. **Fused words** — the conversion dropped line breaks inside cells, producing
   `carcinomasDuctal carcinoma in situ`. Detectable as `[a-z0-9)][A-Z][a-z]{2,}` inside
   table rows. **~3,400 candidate hits, and a meaningful fraction are false positives**
   — `HbA1c`, `mmHg`, drug names, proper nouns after a bracket. **Never blind-sed this.**
   Generate a candidate list, review it, fix in reviewed batches.
3. **Column-count mismatches** between a table's header and its rows.
4. **Lists with no blank line before them** — CommonMark needs one, and the count is high
   even in the clean systems. Cheap, safe, scriptable.
5. **`#####`/`######` headings** that should be `###`/`####` so they become navigable.
6. **ALL-CAPS runs** left over from the Word originals.
7. **Typography** — curly quotes, non-breaking spaces, stray HTML entities. Note that a
   previous session already fixed 759 double-escaped entities, so check before assuming.
8. **Images** — around 645, referenced as `![](notes/images/<source>/imgNNN.jpg)` with
   **empty alt text** and usually no caption or surrounding context. Adding a short
   caption line beneath each is a real improvement; writing alt text is a nice-to-have.
9. **Nested bullets** — indented sub-bullets that the renderer folds. Concentrated in
   renal and cardiology.

Frontmatter was checked and is **uniformly correct** across all 211 notes
(`title`, `system`, `tags`, `sources`, `updated`) — leave it alone.

---

## 6. Hard rules

1. **Do not change a single clinical fact, number, dose, threshold or drug name.** Every
   number in this library has been through adversarial verification — 340 corrections
   across seven systems, 34 of them dangerous. If a reformat would change meaning, stop
   and leave a note rather than guessing. Reflowing a giant table cell into prose is the
   riskiest thing you will do; re-read every one you touch.
2. **`⚑` is a deliberate convention, not decoration.** It marks a verified divergence or
   change. Do not strip it, and do not add it to things you have not verified.
3. **Converting `⚑` lines wholesale into `> [!KEY]` callouts would be a large structural
   change — do not do it unprompted.** Propose it, show the owner two or three rendered
   examples, and only proceed with agreement. Callouts are best reserved for the
   must-not-miss items.
4. **Do not "improve" the register.** Terse shorthand is intentional. Do not expand
   abbreviations, add connective prose, or lengthen anything.
5. **Do not touch `docs/notes-errata.md` content.** Some notes carry `⚠ SOURCE ERROR`
   markers annotating known mistakes in the original Word documents. Those are deliberate;
   preserve them exactly, and preserve verbatim source text they refer to.
6. **Work one system per commit** so a bad reformat can be reverted cleanly.

---

## 7. Suggested order of work

Start with the safe, scriptable, high-volume fixes across the whole library, then move to
the judgement-heavy ones system by system.

1. Blank lines before lists; typography; ALL-CAPS runs; heading-level promotion. Scriptable, reversible, no clinical risk.
2. Table column mismatches and empty header rows. Small, mechanical.
3. Fused words, reviewed in batches. Medium risk.
4. Giant cells reflowed into prose or split tables. Highest risk, highest payoff — do these last, one system at a time, worst system first.
5. Image captions.

After each system: rebuild, then **actually look at it**. The site can be served locally
and screenshotted — Chromium is at `/opt/pw-browsers/chromium` and Playwright is
available:

```bash
python3 -m http.server 8899   # from the repo root, then open notes.html
```

Check at **390×844** (phone) as well as desktop — the mobile table-stacking behaviour is
the thing most likely to break, and the phone is how these get read.

Verify the build did not lose content:

```bash
python3 -c "import json;d=json.load(open('notes/index.json'));print(d['counts'])"
```

Note counts and word counts should be stable or explicably close. A large drop means a
heading or table change broke the parser.

---

## 8. Ask before you start

Two things genuinely need the owner's decision and are worth one round of questions:

- **How far to go with giant cells** — reflow into prose, or split into multi-row tables?
  Show a worked before/after on the worst one before committing to a pattern.
- **Whether to adopt callouts at all**, and if so for what — must-not-miss items only, or
  something broader.

Everything else in §7 is safe to proceed on without asking.
