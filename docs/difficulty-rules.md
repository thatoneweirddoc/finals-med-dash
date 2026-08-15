# Difficulty rules for generated questions

Calibrated against real WSU Year 5 Barriers papers — the 2025 MCQ writeup (94
questions) and the 2024 MCQ paper (100 questions), plus the 2020 MCQ set. These
are student reconstructions, so option lists are sometimes incomplete, but the
stems and the reasoning demanded are faithful.

The two years differ in house style: 2024 is formal AMC-style with full stems,
supplied reference intervals and lab tables; 2025 is terser. The *difficulty
range* is the same in both, which is what matters here.

---

## What the real paper actually looks like

Two findings shaped these rules more than anything else.

**Roughly half the paper is not diagnosis.** Counting the 2024 set: next
investigation, next management step, mechanism of action, drug choice, guideline
figures, ethics and law, and epidemiology together outnumber "what is the most
likely diagnosis". Any generator that only writes diagnosis-spotting questions is
training the wrong half of the exam.

**Difficulty comes from the number of inferential hops, not from obscurity.** The
hard questions are rarely about rare diseases. They are about common conditions
where you have to interpret something, then do a second thing with the result —
or where the obvious answer is a trap.

---

## Easy — one hop

Anchors: *"Which drug causes gynaecomastia?"* (2025 Q16) · *"Raised lesion, rolled
edges, ulcerated centre"* → BCC (2024 Q29) · *"Pinpoint pupils, RR 6"* → heroin
(2025 Q10) · *"Target HbA1c in T2DM per the Australian Diabetes Handbook"* (2024
Q52).

- Stem is 1–3 sentences, or a bare knowledge question with no vignette at all.
- Exactly one cue, and it is near-pathognomonic — or the question is a single
  named fact, definition or guideline number.
- No lab panel to interpret. At most one value, explicitly flagged as abnormal.
- Distractors sit in visibly different categories; a prepared student eliminates
  at least two on sight.
- Answer is a named thing: a diagnosis, drug, organism, nerve, number.
- **No** negative stems, no "which of the following is TRUE" lists.

Target: under 30 seconds. A prepared student should score 85–95%.

## Medium — two hops (the modal Barriers question)

Anchors: *Weber lateralises to the good ear* → acute SNHL (2024 Q5) · *TSH 14,
fT4 8, fT3 5* → Hashimoto's (2024 Q27) · *statin + roxithromycin + CK 3000* →
statin myositis (2025 Q2) · *acute gout in an 80-year-old with CHF and CKD* →
colchicine (2025 Q69) · *anaemia, jaundice, splenomegaly, retics 12%, father had
splenectomy* → hereditary spherocytosis (2024 Q20).

- Stem is 3–6 sentences: demographics, history, examination, and often one
  investigation that must be **interpreted**, not merely read.
- Requires one of:
  - synthesising two or more findings into a single answer;
  - applying a threshold, algorithm or guideline to the specific scenario;
  - adjusting the standard answer for a comorbidity, contraindication or drug
    interaction present in the stem.
- Exactly one distractor is the correct answer to the neighbouring condition —
  the confusable pair. The rest are plausible but separable.
- Reference intervals are supplied whenever a value has to be judged.

Target: 60–90 seconds. A prepared student should score 60–75%, and should be
talk-out-able if their knowledge is shaky.

## Hard — two hops and a turn

Must satisfy **at least one** of these, and they are the only legitimate routes
to "hard". Rarity is not one of them.

1. **Chained inference across modalities.** Interpret data or imaging, then
   predict something in a different domain. *Post-lobectomy CXR → expected
   examination findings* (2025 Q12). *CT of an infarct → expected visual field
   defect* (2025 Q54).
2. **Fine discrimination.** Two options share nearly every feature and one
   specified detail decides it. *Romberg positive with intact vestibulo-ocular
   reflexes* — cerebellum vs dorsal column (2024 Q30).
3. **A trap in the physiology.** The obvious test is uninterpretable, or the
   normal result is the abnormal finding. *TSH in secondary hypothyroidism*
   (2025 Q35). *Normal calcium in vitamin D deficiency — the answer is the
   raised PTH holding it there* (2024 Q31). *Which respiratory function finding
   indicates pathology beyond asthma* — reduced DLCO (2024 Q92).
4. **A precise numeric threshold** is itself the answer — an exact cut-off,
   percentage or reference range.
5. **Negative stem** — "least likely", "not a feature", "all except". Real but
   sparing: cap at one in ten questions.

Every distractor must be defensible to a candidate who missed the key detail.
No throwaway options.

Target: 2 minutes or more. A prepared student scores 40–55%.

---

## Mix

`exam` mix reproduces the observed blend: **25% easy, 55% medium, 20% hard**.
Requesting a single difficulty generates entirely at that level, which is what
you want when drilling a known weak area rather than simulating a paper.

## Constraints at every level

- Question type must vary beyond diagnosis. Across a set, aim for a spread of
  next-investigation, next-management, mechanism, drug choice, guideline figure,
  and — occasionally — ethics/law or epidemiology, matching the real paper's
  roughly even split with diagnosis.
- Australian guidelines and drug names throughout (ANZCOR not Resuscitation
  Council UK, Therapeutic Guidelines, Australian Diabetes Handbook, RACGP).
- Supply the reference interval whenever interpretation depends on a cut-off.
- Every question carries a `point`: the takeaway as one standalone sentence.

## Known coverage gap

Both real papers lean heavily on **images** — ECGs, chest X-rays, plain films,
clinical photographs. The dashboard has no image support, so generated questions
can only describe findings in words ("X-ray reported as showing cortical
thickening and sclerosis…", which is how 2024 Q6 does it anyway). This is a real
gap against the actual exam and worth covering separately with the past papers
themselves.

---

# Follow-up pass — checked against the 2022 paper

A second, independent sample: the 2022 MCQ (80 questions, student
reconstruction, no answer key — difficulty ratings below are my own reading).
This is the test of whether the rules above generalise beyond the two years they
were derived from.

## What held

**The 25/55/20 blend held.** Rating each 2022 question against the tier
definitions gives roughly 28% easy, 55% medium, 17% hard. Close enough that the
`exam` mix stays as it is.

**"Hops not obscurity" held, and produced the single best hard-question anchor
in the whole set.** 2022 Q66: a woman on 15mg prednisone for 15 years for RA
presents with pneumonia, BP 110/50, T 36, Na 130, K 5.5, glucose 7.5 — the
question asks what to prescribe *in addition to antibiotics*. Answer:
IV hydrocortisone. Nothing in the stem says "adrenal"; you have to assemble
relative adrenal insufficiency from the drug history plus the electrolyte
pattern plus the inappropriately soft BP for a septic patient. That is a
three-hop chained inference on a common condition, and it is squarely inside
Fadi's flagged weak area — worth using as a template.

Other hard anchors from 2022 that fit routes 1–4 cleanly: post-pancreatitis
with a 10mm CBD and settling LFTs → MRCP before cholecystectomy (Q9, the trap
is that "same-admission chole" is the reflex answer); INR 7.5 with no bleeding
→ withhold and recheck, not vitamin K (Q50); the 24-hour fluid-balance
arithmetic question (Q48); the ABG classification (Q71).

## What changed

**1. Five options, not four.** 2022 runs A–E almost throughout; 2024/25 mix
four and five. The generator was fixed at four. Now five, matching the paper —
a fifth plausible distractor is also where much of the real difficulty in the
medium tier lives.

**2. List-style stems are far more common than I allowed.** "Which of the
following is TRUE / NOT / EXCEPT" made up roughly a quarter of the 2022 paper
(Q7, 8, 10, 12, 14, 18, 21, 22, 35, 39–41, 49, 52–54, 67, 72, 76, 78–80). The
2024/25 papers trended down to about one in ten, but the format clearly has not
gone away. Rule change: the exam mix may carry up to **15%** list-style
questions, and they are rated **medium by default** — each is really five
recall checks rather than a reasoning task, so it belongs neither in easy nor
in hard. The one-in-ten cap now applies only to *negative* stems within the
hard tier.

**3. Three question types I had not listed.** Applied anatomy (carpal tunnel
contents, femoral hernia relations, radial nerve on a humeral X-ray, nerve
roots — around 6% of 2022); statistics and public health (p-value meaning,
odds ratio vs hazard ratio, screening yield, mammography demographic — 3–5%);
and ethics, law and cultural safety (definition of an Aboriginal person,
informed consent, mature minor, Indigenous liaison — 4–6%). All three now sit
in the type-spread instruction.

## The finding that matters more than difficulty

**The bank recycles.** Verbatim or near-verbatim repeats across the three years
I have now read: testicular tumours TRUE/FALSE (2022 Q10 = 2025 Q15); Lynch
syndrome (2022 Q63 = 2024 Q98); caecal carcinoma presentation (2022 Q51 = 2024
Q72); decompensated hep C liver disease (2022 Q43 = 2024 Q93); inguinal hernia
urgency (2022 Q46 = 2024 Q99); the inferior MI ECG in the returned traveller
(2022 Q27 = 2024 Q85); vitamin D toxicity (2022 Q72 = 2025 Q65); acute gout in
CKD/CHF (2022 Q6 = 2025 Q69); lithium toxicity (2024 Q25 = 2025 Q9); SCC in an
old burn scar (2024 Q4 = 2025 Q80). Ten repeats found in a partial read of
three papers, and the 2025 writeup itself flags "Clopidogrel question was
repeated".

That is a higher-yield fact than any difficulty rule. The generated bank should
be *calibrated* to these papers, but the papers themselves — 2012 to 2025,
sitting in Drive — should be drilled directly. The handover flagged converting
them into dashboard quizzes as the next priority; this pass confirms it.
