# System build playbook

Written 16 Aug 2026, after six systems (O&G, Paediatrics, Urology, ENT, Geriatrics,
Surgery, Psychiatry) and **256 verified corrections**. This exists because the same mistakes kept
recurring across builds and were being re-learned each session instead of encoded.

Read this before starting a system. It is a procedure, not a reflection.

---

## Part 1 — Process mistakes made, and the mechanism that prevents each

### 1. Launching fewer agents than intended, and not noticing

In the Surgery build I planned seven section agents and issued **one**. It surfaced
only when the recognition-summary agent refused to work, having found six of seven
input files missing. Had that agent been more obliging, it would have invented 85% of
a document.

**Mechanism.** After every fan-out, before the dependent step, run:

```bash
ls /tmp/fmd/sources/<slug>/ && wc -w /tmp/fmd/sources/<slug>/*.md
```

Count the files. Do not proceed on the assumption that a launch happened because you
composed the prompt. The filesystem is the source of truth, not your own account of
what you did.

**Keep the grounding rule in the recognition-summary prompt.** "Do NOT introduce facts
absent from the seven sections" is what made that agent stop rather than confabulate.
It is a safety interlock, not a style preference.

### 2. Resolving contradictions by picking a side instead of checking

The recognition-summary agent flagged that §1.8 said mesh implants warrant antibiotic
prophylaxis while §4.3 said elective mesh hernia repair does not. I harmonised them —
onto the **wrong** side. Therapeutic Guidelines lists hernia repair with or without
prosthetic material as YES. I then propagated the error into a second section and
wrote it up as a flagged exam pearl, which made it more prominent, not less.

I did the same thing with needle decompression: two parts of §5.2 said "5th ICS" and
"4th/5th ICS", so I harmonised to "4th or 5th". ATLS 10th ed says **5th**. The reviewer
had to correct a value that had been right before I touched it.

**Mechanism.** A flagged inconsistency is a **correctness** signal, not a consistency
one. Two sections disagreeing means at least one is wrong — and the probability that
the wrong one is the one you find more plausible is not low. Every flagged
contradiction goes to a verifier with a source, and the winner is decided by the
source, never by which reads better.

### 3. Running the harmonisation pass before the verification pass

Mistakes 2 and 3 were both possible only because I resolved inconsistencies first and
verified afterwards. Corrections applied to unverified text get overwritten, contradict
the verifier, or — worse — survive because the verifier was reading a different
section.

**Mechanism.** Fixed order. Verify → then harmonise using verified facts → then
assemble. Never the other way round. See Part 2.

### 4. Treating a `⚑` flag as evidence of verification

The Surgery AAA surveillance table was one step too tight in every band, labelled
"Australian practice", **and carried a flag presenting the gap against SVS as a
legitimate guideline conflict**. The flag made the error look like the *product* of
checking. It was self-justifying and would have survived a casual read.

**Mechanism.** Verifier prompts must include: *"Where the notes flag a guideline
disagreement, verify that the disagreement is real and that both sides are stated
correctly. A ⚑ is a claim to be checked, not evidence of checking."* Fabricated
justifications are a known failure mode of confident writing.

### 5. Pushing without fetching

Push was rejected twice this session. Apps Script publishes generated quizzes and
revision modules to the same branch on a schedule, so the remote moves while you work.

**Mechanism.** Fetch and rebase at the **start** of a build and again immediately
before commit:

```bash
GH=<token from the finals-deploy-token Drive doc>
git -c http.extraHeader="Authorization: Basic $(printf 'x:%s' "$GH" | base64 -w0)" fetch origin main
git rebase origin/main
# rebuild indices AFTER rebasing — the remote may have changed notes/
python3 tools/build_notes.py && python3 tools/build_notes_page.py
```

The token lives in the Drive doc `finals-deploy-token`
(`1ZGHqZJIxDBzz_wi1SSURqXBFXlZQvT01PO5Yy3qdtwQ`), never in chat. Drive's text export
escapes underscores — strip the backslashes.

### 6. Agents dying during their final report

Four of six O&G agents hit a session limit **while writing their summary**, after the
file was safely on disk. The work survived by luck.

**Mechanism.** Every agent prompt ends with a hard cap on the *report*, not just the
file: *"Reply with ONLY: file path, word count, list of `##` headings. Under 100
words."* Write the file first, report second — an agent that dies mid-report has still
delivered.

### 7. Not re-running the recognition summary after applying corrections

Psychiatry, 16 Aug 2026. The recognition summary flagged 11 contradictions, all
were adjudicated and fixed — and re-running it against the corrected sections
found **5 more**, three of them introduced or exposed by the correction pass
itself (five separate editors working on their own files cannot see each other's
wording). One was safety-relevant: two sections gave the IM olanzapine /
parenteral benzodiazepine interval rule in **opposite directions**.

**Mechanism.** The recognition summary runs **twice** — once before verification
to generate the verifier's target list, and again after corrections land, as the
cross-file consistency check that no single-file editor can perform. Patch the
second run's findings rather than regenerating a 10,000-word file for five lines.

### 8. Assuming a slug from a display name

`assemble_notes.py --system "Obstetrics & Gynaecology"` builds **0 notes silently**.
It takes the slug. This one was already documented and did not recur — proof the
mechanism works when written down.

---

## Part 2 — The fixed order of operations

Deviating from this order is what caused mistakes 2 and 3.

| # | Step | Check before moving on |
|---|---|---|
| 0 | Fetch and rebase | `git log --oneline HEAD..origin/main` is empty |
| 1 | Scope from the past papers | Topics extracted from `quizzes/pp-*.json`, so the build is aimed at the actual exam |
| 2 | Check what already exists | Don't duplicate — cross-reference. Surgery cross-refs Gastro for pancreatitis, biliary, hepatology, GI bleeding, IBD |
| 3 | **Fan out section agents** | `ls sources/<slug>/` — count the files against what you launched |
| 4 | **Recognition-summary agent (pass 1)** | It reads all sections, and **flags contradictions rather than picking**. Its inconsistency list is an input to step 5, not something to act on directly |
| 5 | **Adversarial verification** | One reviewer per 1–2 sections. Instructed to find errors, not confirm. **Include the flagged contradictions from step 4 in the verifier's target list** |
| 6 | Apply corrections | Script the edits with exact-string matching and **report which failed** — a silent no-op is worse than an error |
| 7 | **Recognition-summary agent (pass 2)** | Re-run against the corrected sections. It sees across files; the per-file editors cannot. Expect it to find contradictions the correction pass introduced |
| 7b | Harmonise leftovers | Only now, using verified facts. Each conflict goes to a verifier with a source — never resolved by preference |
| 8 | Reassemble → assemble_notes → build_notes → build_notes_page | Word count sane; new slug appears in the index |
| 9 | Write the verification doc | What was wrong, what survived, what could not be checked |
| 10 | Fetch, rebase, rebuild, commit, push | |

**Nothing counts as built until step 5 has run.** Notes with a verification doc are
revisable; notes without one are a draft.

---

## Part 3 — Error taxonomy from 155 real corrections

Verifier prompts should name these explicitly, because they are what actually goes
wrong. Ranked by frequency across the five builds.

### A. UK or US convention presented as Australian *(most common)*

- Bronchiolitis "Australian 90% vs NICE 92% — a clean discriminator". NICE also uses
  90%. The split does not exist.
- Leg ulcer compression "≥0.8 full, 0.5–0.8 reduced, <0.5 contraindicated" — a UK
  ladder attributed to Wounds Australia, which compresses above 0.8 and refers below.
- Asymptomatic carotid stenosis "intervene at centres with complication rates <3%" —
  US/SVS framing; the Australian Stroke Foundation says do not operate.
- BCC/SCC excision margins as 4/6/10 mm tiers — NCCN, not Cancer Council Australia.
- Carotid symptomatic window of 6 months (NASCET) where the Australian guideline says
  <3 months.

**Verifier instruction:** *for every claim labelled "Australian", find the Australian
source. If only an international source supports it, that is a finding.*

### B. Paediatric rule applied to adults, or vice versa

- Cefazolin "30 mg/kg (max 2 g)" as the adult surgical prophylaxis dose. That is the
  paediatric formula; adults get a flat 2 g. It under-doses anyone under ~67 kg.
- "Formula 4 h" as a blanket paediatric fasting rule — it applies to infants under 12
  months; over 12 months formula is a solid at 6 h.
- Austroads CPAP adherence "≥4 h/night on ≥70% of nights" given as the general rule —
  it is the **commercial** driver standard.

### C. Superseded fact, stated confidently

CAH now *is* on the Australian newborn screen; orchidopexy is 6–12 months; nephrotic
albumin is <30 g/L (KDIGO 2025); maternal HIV is no longer an absolute
contraindication to breastfeeding; emotional abuse not neglect is the commonest
substantiated category; RHDAustralia is on its 3rd edition.

**Verifier instruction:** *check the edition and year of every guideline cited.*

### D. Internal contradiction between a summary line and its own table

Complex febrile convulsion "recurs within 24 h" in the table vs "within the same
illness" in the prose; AVPU "≤V" in the table vs "below V" in the prose;
epididymo-orchitis age row contradicting its own management row. **The short-version
bullets and the Rapid-Recall table are where these hide**, because they are written
last and compressed hardest.

### E. Definitional slippage into an adjacent concept

Voluntariness and adequacy of information listed among the things assessed in
determining **capacity** — they are elements of valid **consent**. This is precisely
what the 2024 past paper question tests.

### F. A safety rule stated with a grace period the guideline does not give

Denosumab "missed dose given within 4–6 weeks" sitting next to the note's own
rebound-fracture warning; dexamethasone in meningitis framed as useless once
antibiotics are running (RCH allows up to 12 h); "incarcerated hernia — a warning, not
an emergency".

### G. Arithmetic

Rare, and it survived. Both worked burn calculations were recomputed independently and
every step was right. **Still make a reviewer redo the arithmetic** — it is cheap and
the one place where an error is unambiguous.

---

## Part 4 — Prompt templates

### Section writer

Keep: the exact house format (short version → detail → Rapid-Recall table → sources);
`⚑` for changed/divergent; British/Australian spelling; **past exam stems quoted into
the brief** so the section answers real questions; the named Australian source list;
*"Use WebSearch/WebFetch to CHECK every number — do NOT write from memory. If it
cannot be confirmed against two sources, state the principle rather than a spurious
number"*; the copyright rule; a word cap; and a **capped report**.

Add, learned this session:

> Where you state a threshold, dose or age rule, say explicitly whether it is the
> **adult or paediatric** figure. Where you flag a guideline disagreement, name both
> guidelines and both figures — do not write "sources disagree" without them, and do
> not invent a disagreement to explain a number you are unsure of.

### Recognition summary

Keep: reads all sections first; every row self-contained; no new facts; **flags
contradictions under a final `## ⚠ Inconsistencies found` heading with exact quotes and
filenames rather than picking**; the "every number in one place" table.

That inconsistency mechanism found **8 contradictions in the trio and 7 in Surgery**
that no single-section reviewer saw, and it stopped a confabulated document. It is the
highest-value step in the pipeline for its cost.

### Verifier

Keep: *"Your job is to FIND ERRORS, not confirm the work. Assume errors exist"*; a
numbered highest-priority target list naming the specific traps; *"Use WebSearch and
WebFetch — do NOT verify from memory"*; quote-heading-correction-source-severity
format; a "verified correct" list so cleared items are not re-checked next time.

Add, learned this session:

> - For every claim labelled "Australian", find the Australian source. An
>   international source alone is a finding.
> - Check the edition and year of every guideline cited.
> - Where the notes flag a guideline disagreement, verify the disagreement is real and
>   both sides are stated correctly. A ⚑ is a claim to be checked, not evidence of
>   checking.
> - Check whether each dose or threshold is the adult or paediatric one.
> - Re-do every arithmetic step yourself.
> - Report which sites blocked you, so unverified claims are recorded as unverified
>   rather than assumed clean.

---

## Part 5 — Known blocked sources

ACSQHC, PBS, Therapeutic Guidelines proper, PubMed full text. Reachable substitutes:
the TG **collated tables** PDF, Australian Prescriber, RACGP/AJGP, state health
services (NSW ACI, Safer Care Victoria, RCH, CHQ), and the specialist colleges.

Claims resting on blocked sources go in the verification doc under *"could not be
verified — treat as unchecked"*. Never silently upgrade them to checked.
