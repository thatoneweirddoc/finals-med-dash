# Notes build order — what is left, in the order to do it

Written 16 Aug 2026, 29 days out. Supersedes the ordering in
`docs/notes-build-plan.md`, which was written before O&G, Paediatrics, Urology, ENT,
Geriatrics and Surgery were built.

Ranked on three things together, because no one of them decides it:

- **How empty it is** — total words, and words per note.
- **How examined it is** — questions in the real past papers, and questions sitting in
  your quiz bank right now.
- **What source material exists** — a system with usable sources in the project is a
  consolidation job; one without is an authoring job, and takes roughly twice as long.

---

## The benchmark

Everything built through the v2 pipeline lands at **3,000–4,900 words per note**:

| Pipeline-built | Words/note |
|---|---|
| Surgery | 4,921 |
| Haematology & Oncology | 4,557 |
| Neurology | 4,112 |
| Geriatrics | 4,100 |
| Urology | 3,776 |
| O&G | 3,740 |
| ENT | 3,692 |

Anything under about 1,000 words per note has never been through it. That is the line
the order below is drawn along.

---

## Step 1 — Psychiatry

**Why first.** 3,635 words across 6 notes at **606 words each**, against **4 past-paper
questions** — joint fourth-highest yield of any system. That is the worst
yield-to-coverage ratio in the library, which is exactly where O&G was before it went
from 4,000 words to 52,000.

**Source.** The Y4 Mental Health notes reproduce DSM-5 criteria — **do not extract
them**, the repo is public. Author from **RANZCP guidelines and Therapeutic
Guidelines: Psychotropic**, with `16. Mental Health DIAL GP.pdf` from the project as a
usable secondary. An authoring job, not a consolidation.

**Scope.** Mood, anxiety, psychosis and schizophrenia, personality, eating disorders,
substance use, delirium vs dementia vs depression (cross-ref Geriatrics §1), risk
assessment, the Mental Health Act and involuntary treatment, psychotropic prescribing
and its emergencies — serotonin syndrome, NMS, lithium toxicity, clozapine monitoring.

---

## Step 2 — Critical Care

**Why second.** **33 questions in your bank and no notes system at all.** Only 2 of 100
past-paper questions, so the true exam yield is modest — but being quizzed 33 times on
something you cannot revise from is the worst state in the library, and the same
invisible-gap shape that Urology, ENT and Geriatrics had.

**Already covered elsewhere** — cross-reference, do not rewrite: burns, GCS, transfusion
thresholds and damage control (Surgery §5), sepsis recognition and antibiotic timing
(Surgery §2, Infectious Disease), paediatric ALS (Paediatrics §3), anaphylaxis
(Immunology, Paediatrics §3).

**Genuinely uncovered, and the reason this is a build:** mechanical ventilation and
ARDS lung-protective settings, ventilator troubleshooting (the peak-vs-plateau
distinction), NIV in COPD, vasopressor escalation and shock targets, post-arrest care
and targeted temperature management, RRT indications, propofol infusion syndrome, ICU
delirium, AKI staging in the critically ill.

**Source.** Nothing in the project. Author from **ANZCOR, Surviving Sepsis, ANZICS,
Therapeutic Guidelines** and the Australian ARDS/ventilation literature.

---

## Step 3 — Anaesthetics

**Why third.** 4,448 words across 5 notes at 890 each, ANU-stacked, never ran the
pipeline. Only 2 past-paper questions — but it is **cheap**, because the source is
already wired into `notes_sources.json`, and it feeds the perioperative questions that
recur across Surgery and Endocrine.

**Source.** `Anaesthetics (ANU).docx` already in the config, plus **ANZCA professional
documents** and the ADS–ANZCA perioperative guidelines. Consolidation plus gap-filling,
so roughly half the effort of Step 1.

**Watch for overlap.** Surgery §1 now covers pre-operative assessment, fasting, VTE and
antibiotic prophylaxis thoroughly. Anaesthetics should cross-reference it and own what
Surgery does not: airway assessment and management, anaesthetic agents and their
pharmacology, regional and neuraxial technique, monitoring, recovery, malignant
hyperthermia, local anaesthetic systemic toxicity, post-operative nausea and pain.

---

## Step 4 — Palliative Care and Toxicology, together

**Why together.** Both are narrow, both have zero notes, and together they carry
**12 bank questions and 4 past-paper questions**. The same reasoning that made
Urology + ENT + Geriatrics one job.

**Palliative Care** — 10 bank questions. Geriatrics §5 already covers capacity, advance
care planning and terminal symptom control; it does **not** cover opioid conversion and
rotation, breakthrough dosing, opioid toxicity and myoclonus, terminal secretions,
malignant bowel obstruction, or the oncological emergencies (hypercalcaemia, cord
compression, SVC obstruction). That is what those questions test.

**Toxicology** — looks covered and is not. Paracetamol and NAC sit in Gastroenterology
and Renal; "toxidrome" appears once, in Neurology; TCA overdose appears nowhere. Needs
a coherent treatment: the toxidromes, risk assessment, decontamination, paracetamol and
the nomogram, TCA, opioid, stimulant, lithium, digoxin, iron, and when to call the
Poisons Information Centre.

**Source.** Nothing for either. Author from **Therapeutic Guidelines: Palliative Care**,
CareSearch/palliAGED, the **Austin Toxicology** and NSW PIC resources.

---

## Step 5 — General Practice consolidation

**Why fifth.** 11,823 words across **24 notes averaging 493 words** — the most
fragmented thing in the library, and the shape Paediatrics was in before it was rebuilt.
Only 3 past-paper questions, which is why it is not higher.

**Source — the richest of anything left.** `General Practice (ANU).docx` plus twelve
DIAL GP PDFs already in the project: prescribing and safe prescribing, emergencies in
GP, multimorbidity, mental health, pelvic pain, substance misuse, osteoporosis,
trauma-informed care, justice health, cardiovascular risk, the doctor–patient–pharmacist
relationship. **This is consolidation, not authoring** — cheaper than its size suggests.

---

## Step 6 — Immunology & Allergy

9,162 words, 7 notes at 1,309 each, 1 past-paper question. Already cross-referenced from
MSK & Rheumatology, which covers the arthritides properly. Low priority; do it only if
the earlier steps land with time to spare.

---

## Step 7 — Ophthalmology and Dermatology

The two thinnest systems in the library — 2,521 and 2,787 words — and **last on purpose**,
because they are **1 past-paper question each**. Thinness is not the same as urgency.

**Source.** Good, and already in the project: the two WSU GP ophthalmology workshops
(red eye, vision loss) and `Causes of Vision Loss.docx`; Fishburn's dermatoscopy,
*Dermatology in General Practice 2021*, and the derm spot-test set. If they get built,
they will be quick.

---

## Not to build

**Ethics & Law** — 2 past-paper questions, but already covered where it belongs:
capacity and advance care planning in Geriatrics §5, consent and Gillick in Paediatrics
§12, Rogers v Whitaker and material risk in Surgery §1, consent in minors in O&G. A
separate system would duplicate four sections and be found by nobody.

**Anatomy** and **Pharmacology** — 2 and 4 past-paper questions, deliberately
distributed. Each system carries its own pharmacology section; that is the right home
for it.

---

## The honest note, once

Twenty-nine days. Steps 1–4 are four sessions and cover the whole of the genuine gap.
Steps 5–7 are 5 past-paper questions between them, against **half a million words you
have not finished reading**. Past papers remain the highest-yield material you own, and
there are years of them still unconverted in Drive.

If only one step gets done: **Psychiatry**.

---

## Standing rule for every step

Nothing counts as built until an independent adversarial reviewer has checked the key
facts — instructed to find errors rather than confirm the work, and to verify every
number against a current Australian source rather than from memory. That has caught,
per system: 4 errors in O&G (3 dangerous), 58 in Paediatrics, 52 across the trio
including one section not safe to revise from at all, 41 in Surgery (3 dangerous).

See `docs/system-build-playbook.md` for the order of operations and the prompt
templates before starting any of these.
