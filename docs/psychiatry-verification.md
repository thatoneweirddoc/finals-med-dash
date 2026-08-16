# Psychiatry — verification record

Built and verified 16 August 2026, 29 days out. Step 1 of `docs/notes-build-order.md`.
Procedure followed: `docs/system-build-playbook.md`, Part 2.

**Before:** 3,635 words across 6 notes averaging **606 words** — the worst
yield-to-coverage ratio in the library, against 4 past-paper questions.
**After:** 45,078 words across 8 notes averaging **5,635 words**, above every
previously pipeline-built system. The old six notes were retired, not merged:
they were orphaned output that had never been through the pipeline, and every
fact in them is now covered at greater depth and verified.

---

## What was checked, and how

Eight section agents wrote sections 1–7 plus a recognition summary. Then **five
independent adversarial reviewers**, one per one-or-two sections, each instructed
to *find errors rather than confirm the work*, to verify every number against a
current Australian source using web search rather than from memory, and to name
the sites that blocked them so unverified claims are recorded as unverified.

**101 findings: 15 dangerous, 34 wrong, 46 imprecise, 6 stylistic.** All were
applied by exact-string substitution; **none failed to match**. A further
**16 cross-section contradictions** were adjudicated against a source.

| Reviewer | Sections | Dangerous | Wrong | Imprecise | Stylistic |
|---|---|---|---|---|---|
| 1 | 1 Assessment & risk, 2 Mood | 3 | 8 | 12 | 2 |
| 2 | 3 Anxiety, trauma, somatic | 3 | 4 | 7 | 1 |
| 3 | 4 Psychosis | 2 | 7 | 8 | 0 |
| 4 | 5 Substance use | 4 | 9 | 8 | 2 |
| 5 | 6 Eating/personality/CAP, 7 Treatments, law, services | 3 | 6 | 11 | 1 |

---

## The dangerous fifteen

**Doses and thresholds that would have been written wrong in the exam.**

- **Escitalopram 10–40 mg listed among the "go higher in OCD" doses**, with
  citalopram named as *the* exception. The Australian PI caps escitalopram at
  **20 mg (10 mg if >65 y)**, OCD included. Two reviewers independently rated
  this dangerous. Both citalopram and escitalopram are now named as capped, and
  the correct move — switch SSRI rather than exceed the cap — is stated.
- **Clomipramine "75–300 mg/day"** for OCD. The Australian Anafranil PI gives
  100–150 mg and warns against exceeding it because seizure risk is
  dose-dependent.
- **CIWA-Ar bands given as <4 / 4–7 / >7.** Those are the **AWS** bands wearing a
  CIWA-Ar label; real CIWA-Ar is <10 / 10–20 / >20. A patient scoring CIWA-Ar 8
  would have read as "severe" and been given 20 mg of diazepam. Both scales are
  now tabled separately with an explicit non-interchangeability flag.
- **Buprenorphine maintenance "16–32 mg daily"** — 32 mg is the ceiling; usual
  maintenance is 12–24 mg.
- **Buprenorphine induction at "COWS ≥10–15"** — a band that does not exist
  (COWS is 0–12 mild, 13–24 moderate). Australian day-1 dosing is 8 mg, or
  4 mg then a further 4 mg after review. The **missed-dose re-induction rule was
  absent entirely** and has been added: missed doses strip tolerance, and
  resuming the previous dose is the classic fatal error.
- **Dantrolene "up to ~400 mg/day"** in NMS — not weight-based. Correct is
  1–2.5 mg/kg IV then 1 mg/kg 6-hourly, max 10 mg/kg/day.
- **Clozapine missed doses "(certainly >72 h)"** — an invented grace period.
  Australian guidance gives none beyond 48 h. The >28-day rule (re-registration,
  restart at 12.5 mg, full 18 weeks of weekly FBC) was missing and is now stated.
- **The §6.1 adult eating-disorder admission table** was entirely QuEDS figures
  under a "NSW Health / QuEDS" label, and NSW differs on **9 of 12 rows**. It is
  now three columns — QuEDS adult, NSW Health adult, RCH paediatric — with every
  row naming its source and age group.
- **Adult potassium threshold given as <3.0**, which is the RCH **paediatric**
  figure, with a parenthetical that inverted the attribution. Both Australian
  adult guidelines use <3.5.
- **Prazosin as an adjunct for PTSD nightmares** and quetiapine for refractory
  PTSD — the Australian guideline finds insufficient evidence for both, and the
  definitive multisite RCT (Raskind, *NEJM* 2018, n=304) was negative.
- **Lithium in pregnancy: "~1.2% cardiac anomalies"** — that is the
  **unexposed** baseline. The exposed rate is ~2.4% (Patorno, *NEJM* 2017;
  adjusted RR 1.65). The note had halved the absolute risk the student is being
  asked to weigh, and the error propagated verbatim into §2.7.
- **Antidepressant discontinuation syndrome "brief (1–2 weeks)"** used as the
  discriminator from relapse — and again as "1–3 weeks" in §7.2. Duration is
  conditional: brief only after short-term (6–12 weeks) treatment, and after
  longer treatment it can be severe and protracted, lasting months
  (*Aust Prescr* 2026;49:99–103). **Onset**, not duration, is the discriminator.
- **NMS hyperthermia ">38.5 °C"** in §4.7 and **">40 °C"** in §7.2. The
  diagnostic threshold is **>38.0 °C on at least two occasions** (Gurrera
  international consensus). The >40 °C version would have excluded NMS in most
  real presentations.
- **Antipsychotic metabolic monitoring "baseline, 3 months, then annually"** —
  under-monitoring against every Australian schedule.
- **"Both Acts guarantee a second psychiatric opinion"** — false for NSW.

---

## The cross-section adjudications

The recognition-summary agent's job is to **flag contradictions, not resolve
them** — a mechanism that exists because a previous build harmonised two
sections onto the wrong side twice. It flagged **11** on the first pass and
**5** more after corrections landed. Every one went to a reviewer with a source.

| Conflict | Resolved to | Decided by |
|---|---|---|
| TFT universal vs targeted at first presentation | §1.5 correct **and the claim is real** — Warren et al., *ANZJP* 2026 — but it is **scoped to first-episode psychosis**. TSH stays in the depression and anxiety baseline panels | ANZJP 2026, quoted verbatim by the reviewer |
| Three different antipsychotic metabolic monitoring schedules | §1.7 wins and is now the system's single source of truth: weight and waist **weekly for 6–8 weeks**, all parameters at **baseline, 3, 6, 9, 12 months, then 6-monthly**. §4.5 had imported the **international** INTEGRATE 2025 schedule; §7.2 simply under-monitored | Adult Positive Cardiometabolic Health Resource (Mindgardens / Equally Well, 2023) |
| NMS temperature >38.5 vs >40 °C | **Both wrong** — >38.0 °C on ≥2 occasions | Gurrera consensus; DSM-5-TR |
| Escitalopram max 40 vs 20 mg | 20 mg (10 mg if >65 y), OCD included | Australian PI (LEXAPRO) |
| Benzodiazepine taper 10% vs 10–25% | **10–25% every 1–2 weeks**, slower at the end — the 10% figure is the UK convention | Australian deprescribing guidance |
| Discontinuation syndrome 1–2 vs 1–3 weeks | **Both wrong** — duration is not the discriminator | *Aust Prescr* 2026;49:99–103 |
| Thiamine step-down 300 vs 100 mg | **Neither wrong** — different contexts. §5.3's alcohol regimen stands; §6.2's refeeding regimen amended and both now context-labelled | NSW/SA Health; refeeding guidance |
| Lithium target 0.5–0.8 vs 0.6–0.8 | Not a real contradiction (TRD augmentation vs bipolar maintenance); §2.4 set to **0.4–0.8** | Australian sources |
| Onset-age red flag <14 vs <15 | **<14 or >40**, everywhere | §1.5 correct |
| Cannabis–psychosis effect size | §4.3 was **self-contradictory** ("doubles risk (OR ~1.4)") and both sections were loose. Now: Moore 2007 — ever use **OR 1.41**, heaviest **2.09**; Di Forti EU-GEI 2019 — daily **3.2**, daily high-potency **4.8** | *Lancet* 2007; *Lancet Psychiatry* 2019 |
| QTc rise ≥60 vs >60 ms | **>60 ms** | Standardised |
| Parenteral benzodiazepines in acute behavioural disturbance | §5.7 correct, **and it is a general adult statement, not methamphetamine-specific**. "IM midazolam 5–10 mg" removed from §7.6 | Qld Health qh-gdl-438, quoted verbatim; WACHS ED guideline agrees |
| Direction of the IM olanzapine / benzodiazepine interval | §7.6 correct — the rule runs **one way**: a parenteral benzodiazepine is not given **until at least 1 h after** IM olanzapine. §5.7 had it backwards, which is the version that gets the sequencing wrong at the bedside | Australian ZYPREXA IM PI and CMI |
| MBS item 2713 — review item or consultation item | §7.8 correct: 2712 is the plan review, **2713 the GP mental health treatment consultation** | GPMHSC; MBS Online, 1 Nov 2025 |
| Weight monitoring weekly vs weekly-to-fortnightly | **Weekly** | §1.7 |
| §6.7 calling RCH's K⁺ and postural-HR figures "below" the adult thresholds | Reworded — they are the **more permissive** figures, tripping later | Internal |

---

## Errors by taxonomy

The playbook's taxonomy predicted where the errors would be, and it held.

**A — UK or US convention presented as Australian.** The largest category again.
The NICE "review weekly for 4 weeks" rule presented as a TGA mandate; the UK/Irish
valproate **signed annual risk acknowledgement form** presented as an Australian
requirement (Australia has no formal Pregnancy Prevention Programme); the **FDA**
HLA-B\*15:02 ancestry list presented as Australian, with the Epilepsy Society of
Australia's "consider, in patients of Han-Chinese ethnicity" hardened into
"test"; the UK 10% benzodiazepine taper; the international INTEGRATE 2025
metabolic schedule; NICE eating-disorder thinking behind the admission table.

**B — paediatric rule applied to adults.** Adult K⁺ given as the RCH paediatric
<3.0. Section 6 was the predicted danger zone and delivered.

**C — superseded fact stated confidently.** A 2004 RANZCP deliberate self-harm
CPG that does not exist (the guideline actually quoted is the 2016 one); a
claimed 1 November 2025 renaming of the Mental Health Treatment Plan that never
happened (items were **removed**, not renamed); SHIP prevalence quoted as the
12-month figure when 3.1/1000 is the one-month figure; employment in psychosis
given as 33% when the survey says 21.5%.

**D — summary line contradicting its own table.** **34 lines** were fixed in the
consistency sweeps after corrections landed in the body — the single most common
way a fix fails to stick, and the reason every editor was made to sweep the
short-version bullets and the Rapid-Recall table afterwards.

**E — definitional slippage.** Checked explicitly for capacity/consent
(voluntariness and adequacy of information belong to **consent**, not capacity —
the exact slip a 2024 past paper tested). **Not present**; both files already
scoped it correctly.

**G — arithmetic.** Both standard-drink conversions were independently
recomputed — 750 mL wine = 7.7 and 700 mL spirits = 22.1 standard drinks — and
**both were right**. Consistent with every previous build: arithmetic is the one
thing that keeps surviving.

---

## Could not be verified — treat as unchecked

- **The NSW 24-hour carer-notification timeframe.** AustLII and
  legislation.nsw.gov.au both returned 403. It is **marked unconfirmed in the
  text** rather than left reading as verified.
- Anything resting on **Therapeutic Guidelines proper, the PBS, ACSQHC, AMH or
  PubMed/PMC full text** — all blocked. Reachable substitutes were used where
  they exist (TG collated tables, Australian Prescriber, RACGP/AJGP, state health
  services, the colleges) and are named in the section source lists.
- **apps.medicines.org.au** direct PI PDFs failed on every candidate URL. The IM
  olanzapine sequencing rule was confirmed against the Lilly datasheet carrying
  identical CCDS wording plus the Australian CMI — two sources, but not the
  Australian PI itself.
- The TGA valproate alert page blocks robots.

---

## Copyright

The repository is public, so every section prompt carried a hard constraint and
it was checked on output: **no DSM-5 or ICD-11 criteria are reproduced verbatim
or near-verbatim**, and **no item text** from the PHQ-9, K10, EPDS, GAD-7, AUDIT,
CIWA-Ar, AWS, COWS or Y-BOCS appears. Instruments are described by what they
measure and by score band only. This is also why the Y4 Mental Health notes in
Drive were not extracted — they reproduce DSM-5 directly.

---

## What is still missing

The recognition summary's own `## Gaps` section lists what a finals paper could
test that these eight notes do not cover. The ones worth knowing:

- **Delirium and dementia** are deliberately deferred to Geriatrics §1 and are
  cross-referenced, not duplicated — but that means a delirium-vs-dementia stem
  cannot be answered from the Psychiatry notes alone. That is by design.
- **Mental health legislation outside NSW and Victoria.** The other six
  jurisdictions differ in both terminology and timeframes and are not set out.
- **Forensic psychiatry** — fitness to stand trial and mental impairment
  defences are alluded to but never defined.
- **Cognitive screen cut-offs** (MMSE, MoCA, RUDAS) and Y-BOCS bands are not
  given; the tools are named only.
- **Paediatric psychopharmacology doses** — agents are named, doses are not.

---

## Standing rule

Nothing counts as built until an independent adversarial reviewer has checked the
key facts. Running total across six systems: O&G 4, Paediatrics 58, the
Urology/ENT/Geriatrics trio 52, Surgery 41, **Psychiatry 101**. The count rises
with the size of the build, not with the carelessness of it — Psychiatry is the
largest system yet produced in one pass, and it is also the most drug-dense,
which is where numbers go wrong.
