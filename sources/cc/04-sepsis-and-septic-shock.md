# Critical Care Notes — Section 4: Sepsis and Septic Shock
*Sources: ACSQHC Sepsis Clinical Care Standard (2022); NSW CEC adult sepsis pathway and SEPSIS KILLS (2016); SA Health Adult Sepsis Pathway (2025); Queensland Health adult sepsis antimicrobial guideline (TG-concordant); WACHS febrile neutropenia guideline (2021); Sepsis-3 (2016); Surviving Sepsis Campaign 2021 and 2026 (international); ANZICS CTG — ARISE, ADRENAL, PLUS, ARISE FLUIDS; LOVIT (2022); NEWS2 (2017). Scope: recognition, definition and first-24-hour management of sepsis and septic shock in the critically ill adult.*

> **Adult section.** Every dose and threshold is the **adult** figure unless labelled paediatric. Paediatric sepsis and the seriously ill child are **Paediatrics §3**.
> **Cross-references:** shock physiology, fluid and vasopressor pharmacology **§3**; resuscitation **§1**; ventilation **§5**; AKI/RRT **§6**; surgical source **Surgery §2, §14**; organism-specific therapy and meningitis **Infectious Disease**; neutropenic sepsis in context **Haematology & Oncology**.

---

## 4.1 Definitions — Sepsis-3 and the death of SIRS

**The short version**

- Sepsis = **life-threatening organ dysfunction caused by a dysregulated host response to infection**; operationally **infection + acute rise in SOFA ≥2** (Sepsis-3, JAMA 2016).
- **"Severe sepsis"** and **"septicaemia"** are obsolete.
- Mortality anchors: sepsis ~**10%** in-hospital, septic shock **>40%**.

The old SIRS construct (temp <36/>38, HR >90, RR >20, WCC <4/>12) failed on both axes. **Insensitive**: ~**1 in 8** ICU patients with infection and organ dysfunction never meet two SIRS criteria. **Non-specific**: ~**4 in 5** ICU patients *without* infection meet them — SIRS is the signature of any stressed patient (trauma, pancreatitis, burns, post-op). The graded language is now **infection → sepsis (organ dysfunction) → septic shock**.

Organ dysfunction is deliberately broad and is what makes the ward diagnosis: new hypoxaemia, oliguria or rising creatinine, hyperbilirubinaemia, thrombocytopenia, coagulopathy, hypotension, and the one most often missed — **new confusion or reduced GCS**. Delirium in an infected older patient *is* sepsis.

⚑ Sepsis-3 changed definitions, not treatment. Older Australian pathway documents still carry "severe sepsis" language; the **ACSQHC Sepsis Clinical Care Standard (2022)** uses Sepsis-3 and is the current Australian reference.

---

## 4.2 SOFA, qSOFA, NEWS2 and what Australia actually screens with

**The short version**

- **SOFA** scores six systems 0–4 each (max 24): respiratory, coagulation, liver, cardiovascular, CNS, renal. **Rise ≥2 = sepsis.**
- **qSOFA** = RR ≥22, GCS <15, SBP ≤100. **≥2 = higher risk** — prognostic, not a screen.
- ⚑ **SSC 2021 and 2026 (international) both *strongly* recommend against qSOFA as a single screening tool**, preferring NEWS, NEWS2, MEWS or SIRS.
- ⚑ **ACSQHC (2022, Australian) recommends LqSOFA, NEWS or MEWS**, states that **qSOFA is not recommended for use in any setting**, and rejects SIRS as resting on discontinued definitions — a real divergence from SSC, which accepts SIRS.

**SOFA** grades respiratory on PaO₂/FiO₂, coagulation on platelets, liver on bilirubin, cardiovascular on MAP **and the dose of vasopressor required**, CNS on GCS, renal on creatinine/urine output. Baseline is assumed 0 without known pre-existing dysfunction; the vasopressor-dose dependence is why SOFA tracks severity better than any single observation.

**qSOFA** (mnemonic *HAT*) was a bedside prompt needing no bloods, then wrongly adopted as a *screen*. The problem is sensitivity: it flags patients **already deteriorating**, by which point the early-intervention window has closed. SSC 2026 noted that electronic qSOFA screening with alert activation improved 90-day mortality in one stepped-wedge trial, but the recommendation against it as a *sole* screen stands.

⚑ **Named divergence.** **ACSQHC 2022 (Australian)** recommends **LqSOFA, NEWS or MEWS**, stating **qSOFA is not recommended for use in any setting** and that SIRS rests on discontinued definitions; **SSC 2021/2026 (international)** include **SIRS** among acceptable alternatives. SIRS is acceptable internationally, unacceptable under the Australian standard — in an Australian paper, answer with ACSQHC.

**NEWS2** (RCP, December 2017) aggregates RR, SpO₂, systolic BP, pulse, consciousness/new confusion and temperature, **plus 2 points for any supplemental oxygen**. Thresholds: **1–4** ward review; **3 in one parameter** urgent ward doctor review; **5–6** urgent review by a clinician with acute-illness competencies; **≥7** emergency critical care assessment. **NEWS2 ≥5 is the sepsis-relevant trigger.**

⚑ **NEWS2 is a UK instrument, not the Australian standard.** Australian hospitals use **state track-and-trigger charts** — NSW **Between the Flags** (yellow zone = clinical review, red zone = rapid response/MET call), Queensland Q-ADDS, SA Health **Adult RDR**. The Australian trigger is **the yellow/red zone plus the explicit question "could it be sepsis?"**.

---

## 4.3 Septic shock — the definition, exactly

**The short version**

- Septic shock = **sepsis + vasopressor required to maintain MAP ≥65 mmHg + lactate >2 mmol/L, both persisting *despite adequate fluid resuscitation***.
- Hypotension correcting with fluid alone = **sepsis**, not septic shock.
- Mortality **>40%** vs ~10% — why the label matters.

A **2025 past-paper item asks which observation set meets this definition**. *"Despite adequate fluid resuscitation"* governs both criteria — a patient hypotensive because they have not been filled is under-resuscitated, not in septic shock. Traps: **MAP ≥65 is the target the vasopressor is used to achieve, not a value the patient must display** (on noradrenaline at MAP 58 the patient *is* in septic shock, and failing target); **lactate must be >2** (vasopressor-dependent with lactate 1.4 does not meet it); **no vasopressor, no septic shock**.

| Stem | Vasopressor for MAP ≥65? | Lactate >2? | Verdict |
|---|---|---|---|
| Urosepsis; 30 mL/kg given; noradrenaline 0.15 µg/kg/min, MAP 68; lactate 3.4 | Yes | Yes | **Septic shock** |
| Pneumonia; MAP 58 after 2 L; lactate 4.1; **no vasopressor yet** | No | Yes | Fluid-refractory sepsis — start noradrenaline; meets criteria once vasopressor-dependent |
| Cellulitis; MAP 62 → 78 after 1 L; lactate 2.8 → 1.5; no vasopressor | No | No (corrected) | **Sepsis, not septic shock** — fluid-responsive |
| Cholangitis; on noradrenaline, MAP 70; lactate **1.6** | Yes | **No** | **Not septic shock by Sepsis-3** (vasopressor-dependent sepsis) |
| Post-op collection; noradrenaline, MAP 58; lactate 5.2; 30 mL/kg given | Yes | Yes | **Septic shock**, below MAP target |

> **Exam stem 1 — answered.** *68-year-old with septic shock, still hypotensive on noradrenaline at MAP 58. Standard initial MAP target?* **MAP ≥65 mmHg** — the Sepsis-3 threshold, the SSC 2021/2026 strong recommendation and the Australian pathway target. At 58 the patient is **below target**: titrate noradrenaline up, reassess volume status, hunt for an uncontrolled source (§4.8).

---

## 4.4 Recognition — who deteriorates, atypical presentation, and lactate

**The short version**

- Deaths cluster in the **afebrile, old, immunosuppressed and post-operative**; **hypothermia (<36°C) carries worse prognosis than fever**.
- Lactate is a **severity and risk marker**, not a hypoperfusion meter.
- **Failure of lactate to fall** is the ominous finding.

**Who deteriorates.** Age >65; immunosuppression (chemotherapy, prednisolone ≥20 mg/day, biologics, transplant, asplenia, advanced HIV); diabetes; chronic liver or kidney disease; malignancy; recent surgery or instrumentation; indwelling lines or prostheses; injecting drug use; pregnancy and post-partum; and Aboriginal and Torres Strait Islander peoples, in whom invasive bacterial disease incidence is higher (National Sepsis Program).

**Atypical presentations.** **Afebrile or hypothermic sepsis** — elderly, uraemic, cirrhotic, on paracetamol/NSAIDs. **Isolated delirium or "off legs"** — often the only feature of urosepsis or pneumonia. **Unexplained tachypnoea** — the earliest reliably abnormal vital sign, and the least often counted. **Blunted tachycardia** on beta-blockers; blunted hypotension in chronic hypertensives. **Normal or low WCC** — neutropenia marks severity, not absent infection. **Isolated organ failure** — new AKI, new AF, unexplained hyperglycaemia, decompensated heart failure. **Pain out of proportion to findings** — necrotising soft tissue infection until excluded (Surgery §14).

**Lactate.** A dose-dependent marker of **severity and mortality risk**; **≥4 mmol/L** was the ARISE cryptic-shock entry threshold and remains the "high-risk regardless of BP" number. But it is **not** a clean readout of anaerobic hypoperfusion: much sepsis lactate is generated **aerobically** — catecholamine-driven β₂ stimulation of skeletal-muscle Na⁺/K⁺-ATPase accelerates glycolysis faster than pyruvate dehydrogenase can consume the pyruvate — compounded by **impaired hepatic clearance**. So a rising lactate with warm peripheries and adequate MAP should **not** reflexively trigger more fluid. Keep **non-septic causes** live: metformin, salbutamol/adrenaline infusions, seizures, ischaemic bowel, thiamine deficiency, malignancy, liver disease, alcohol. **Venous lactate is acceptable** and is what Australian pathways use (ACSQHC 2022; point-of-care testing endorsed for rural and remote settings).

⚑ **SSC 2026 (international)** makes both "measuring blood lactate" and "using serial lactate to guide resuscitation" **conditional** recommendations — weaker than the bundle-era treatment of lactate clearance as a hard target.

---

## 4.5 The Australian architecture — SEPSIS KILLS, the Clinical Care Standard, state pathways

**The short version**

- **SEPSIS KILLS** (NSW CEC, MJA 2016) — *recognise, resuscitate, refer*; improved time-to-antibiotics and reduced mortality across NSW hospitals.
- **ACSQHC Sepsis Clinical Care Standard (June 2022)** — **seven quality statements**; the current national standard.
- Statement 3 is the exam item: **cultures immediately without delaying antimicrobials; antimicrobials within 60 minutes where infection-related organ dysfunction is present; review therapy at 24–48 hours after the first dose.**
- The standard extends **beyond the acute episode** to survivorship.

**ACSQHC (June 2022) — seven quality statements:** (1) **Could it be sepsis?** — consider it in any acute illness or deterioration, using vital signs and **lactate**; (2) **time-critical management** via a locally approved pathway, with experienced-clinician review and escalation; (3) **antimicrobial management** — cultures immediately **without delaying** antimicrobials, antimicrobials **within 60 minutes** where infection-related organ dysfunction is present, **review at 24–48 hours after the first dose**; (4) **multidisciplinary coordination**; (5) **patient and carer education** from the point of suspicion; (6) **transitions of care and communication**; (7) **care after hospital and survivorship**. Statements 5–7 are easy to skip and are exactly what a written paper asks. Blood cultures: **two sets in adults, one in children** (paediatric — Paediatrics §3).

**State pathways** follow the same skeleton. The **SA Health Adult Sepsis Pathway** (August 2025) is representative: screening triggers off the **Adult RDR observation chart escalation pathway** plus "could it be sepsis?"; response is senior clinician review or MET call; bundle target is **oxygen, blood cultures, IV antibiotics and IV fluids within 60 minutes**. NSW CEC pathways cover patients **≥16 years**; separate paediatric and maternal pathways exist because **no single tool applies uniformly across neonatal, paediatric, maternal and adult populations**.

---

## 4.6 The first hour — cultures, antibiotic timing, empirical choice

**The short version**

- **Blood cultures before antibiotics — two sets in adults — but never let collection delay the drug.**
- ⚑ **Antibiotic timing is tied to sepsis/organ dysfunction, NOT to shock.** Probable/definite sepsis **with or without shock → within 1 hour**. *Possible* sepsis without shock → **within 3 hours** if concern persists. Low likelihood, no shock → **defer and monitor**.
- **ACSQHC (2022, Australian): within 60 minutes when infection-related organ dysfunction is present** — same trigger.

**Cultures.** SSC 2026 gives a **strong** recommendation for cultures before antimicrobials; ACSQHC adds **where this does not delay urgent treatment**. Adults: **two sets** from separate venepuncture sites, distinguishing true bacteraemia from skin contaminants; take the other relevant cultures too — urine, sputum, wound, CSF, drain fluid. Do not wait when access has failed, when meningococcaemia is suspected (§4.12), or when collection would push the antibiotic past the hour.

⚑ **Antibiotic timing — stated precisely.** The rule is **not** "1 hour if shocked, 3 hours if not". Both international and Australian guidelines key the 1-hour tier to **organ dysfunction and diagnostic confidence**; shock is only one way into the top tier.

| Clinical state | SSC 2026 (international) | Strength |
|---|---|---|
| **Probable/definite septic shock** | Antimicrobials immediately, **ideally within 1 hour** of recognition | Strong |
| **Probable/definite sepsis, no shock** | Antimicrobials immediately, **ideally within 1 hour** of recognition | Strong |
| **Possible sepsis, no shock** | Time-limited rapid investigation; if concern persists, **within 3 hours** | Conditional |
| **Low likelihood of infection, no shock** | **Defer**; monitor closely | Conditional |
| Prehospital, >60 min to evaluation | Give in ambulance/flight | Conditional |

⚑ **Both guidelines, both figures.** **SSC 2021 (international)** placed *high likelihood of sepsis or possible septic shock* in the 1-hour tier and *possible sepsis without shock* at **3 hours**. **SSC 2026 (international)** keeps the architecture but states the sepsis-without-shock **1-hour** recommendation explicitly and as **strong**. **ACSQHC 2022 (Australian)** expresses it as **within 60 minutes where infection-related organ dysfunction is present**, with a 3-hour outer limit when organ dysfunction is present but infection uncertain. All three converge: **organ dysfunction, not hypotension, starts the 1-hour clock.**

**The controversy.** These recommendations rest on **very low certainty** evidence — a 1-hour bundle did not change mortality in Freund et al., and observationally, in sepsis *without* shock only delays beyond ~6 hours clearly associate with excess mortality. The "defer and monitor" tier limits indiscriminate broad-spectrum prescribing.

**Empirical choice by source (adult, community-acquired).** Australian regimens follow **Therapeutic Guidelines: Antibiotic**; TG is subscription-gated, so the table is from the TG-concordant **Queensland Health adult sepsis antimicrobial prescribing guideline**. **All doses adult.** ⚑ **The Queensland guideline has two columns, and the doses differ: in septic shock the aminoglycoside dose rises to tobramycin 7 mg/kg IV stat (max 700 mg) and cover is broadened.** The table below is the **sepsis-without-shock** column; the septic-shock column is given underneath.

| Source | Sepsis WITHOUT shock (adult) | Severe penicillin allergy (adult) |
|---|---|---|
| **Unknown** | Tobramycin 4–5 mg/kg IV stat (max 500 mg) **+** flucloxacillin 2 g IV 6-hourly | Tobramycin stat **+** vancomycin 25–30 mg/kg load (max 3 g) |
| **CAP** | *Sepsis without shock:* benzylpenicillin 1.2 g IV 6-hourly **+** azithromycin 500 mg IV daily. *Septic shock:* **ceftriaxone 2 g IV daily + azithromycin 500 mg IV daily + vancomycin 25–30 mg/kg load** — the escalation is triggered by **shock/ICU-level support** (SMART-COP ≥5 predicts the need for it) | Moxifloxacin 400 mg IV daily |
| **Urinary** | Tobramycin stat **+** ampicillin 2 g IV 6-hourly | Tobramycin stat **+ seek ID advice** |
| **Intra-abdominal** | Tobramycin stat **+** ampicillin 2 g IV 6-hourly **+** metronidazole 500 mg IV 12-hourly | Tobramycin **+** clindamycin 600 mg IV 8-hourly |
| **Skin/soft tissue** | Flucloxacillin 2 g IV 6-hourly | Vancomycin 25–30 mg/kg load |
| **Necrotising fasciitis** | Piperacillin–tazobactam 4/0.5 g IV 6-hourly **+** vancomycin load **+** clindamycin 600 mg IV 8-hourly | Meropenem 2 g IV 8-hourly **+** vancomycin **+** clindamycin |
| **CNS/meningitis** | **Dexamethasone 10 mg IV 6-hourly** with/before first dose **+** ceftriaxone 2 g IV 12-hourly (**+** benzylpenicillin 2.4 g IV 4-hourly if Listeria risk) | Dexamethasone **+** moxifloxacin 400 mg IV daily (+ trimethoprim–sulfamethoxazole if Listeria risk) |
| **Febrile neutropenia** | Piperacillin–tazobactam 4/0.5 g IV 6-hourly (**+** vancomycin **+** aminoglycoside if hypotension/organ dysfunction) | Meropenem 2 g IV 8-hourly **+** vancomycin load |

**In septic shock (Queensland Health):** aminoglycoside dose becomes **tobramycin 7 mg/kg IBW/AdjBW IV stat (max 700 mg)**; unknown source becomes **tobramycin 7 mg/kg + ceftriaxone 2 g IV 12-hourly + flucloxacillin 2 g IV 4-hourly**; febrile neutropenia becomes **tobramycin 7 mg/kg + piperacillin–tazobactam 4/0.5 g IV 6-hourly + vancomycin load**.

Modifiers: **add vancomycin** for MRSA risk; **add ciprofloxacin 400 mg IV 8-hourly** for water-exposure soft tissue infection (*Aeromonas*, *Vibrio*); if meningococcal disease is suspected, **replace piperacillin–tazobactam with ceftriaxone 2 g IV 12-hourly** (or add ceftriaxone where an aminoglycoside is contraindicated). **Gentamicin substitutes for tobramycin at the same dose** but is no longer recommended for *Pseudomonas aeruginosa*. Aminoglycosides are dosed on **ideal or actual body weight, whichever is lower**; a single stat dose is safe in almost all patients including AKI. ⚑ SSC 2026 **upgrades prolonged infusion of beta-lactams for maintenance (after a loading dose) over bolus administration from the 2021 conditional suggestion to a *strong* recommendation (moderate certainty)** — the change is the strength, not the existence, of the recommendation.

---

## 4.7 Fluid resuscitation — the 30 mL/kg question

**The short version**

- ⚑ **SSC 2026 (international): at least 30 mL/kg IV crystalloid within the first 3 hours — a *conditional*, low-certainty recommendation**, downgraded from bundle-era framing.
- **Balanced crystalloid over 0.9% saline** (conditional). Australian **PLUS** (ANZICS, NEJM 2022, n=5037): **no mortality difference — 21.8% vs 22.0%** at 90 days.
- ⚑ **The Australian view is that 30 mL/kg is a starting point, not a mandate.** **ARISE FLUIDS** (ANZICS CTG/ACEM, NEJM 2026): **no difference** in days alive and out of hospital to day 90 (**76 vs 76**); **less pulmonary oedema with restriction (0.6% vs 5%)**.

The 30 mL/kg figure entered guidelines via the Rivers EGDT protocol and early bundles and has never been randomised against, say, 20 mL/kg — a weakly evidenced default for the patient you have not yet assessed.

**Why Australia is circumspect.** **CLASSIC** (2022) and **CLOVERS** (2023) found no mortality difference between restrictive and liberal strategies. **ARISE FLUIDS** (ANZICS CTG and ACEM CTN, NEJM 2026) is the ANZ answer: 1000 adults randomised (963 analysed) at **51 EDs in Australia, New Zealand and Ireland** with sepsis, hypotension and raised lactate after ≤2000 mL fluid, randomised to **early vasopressor with restricted fluid** (~500 mL more over 6 h) or **fluid-forward care** (30 mL/kg in 3 h advised). **Days alive and out of hospital to day 90 identical (median 76 vs 76)**; 90-day mortality 16.4% vs 14.4% (NS); vasopressor use 87% vs 68%; **pulmonary oedema 0.6% vs 5%**. Early restricted fluid therefore **reduces fluid exposure without improving outcomes** — it *licenses* early noradrenaline rather than mandating it, and removes any obligation to complete 30 mL/kg in a non-responding patient.

**Care needed** in **heart failure, dialysis-dependent ESKD, severe pulmonary hypertension, cirrhosis and the frail elderly** — **250–500 mL boluses with reassessment after each**, moving to vasopressors early. Conversely, do not under-fill the young patient with meningococcaemia or a large intra-abdominal source.

**Endpoints.** Continue while there is **fluid responsiveness**: **MAP ≥65**, improving capillary refill, urine output ≥0.5 mL/kg/h, **falling lactate**. Dynamic measures (passive leg raise, stroke volume variation, IVC collapsibility, echo) beat static; **CVP is obsolete** as a target. Stop signals: new hypoxaemia, crackles, abdominal distension. **Albumin** is a suggested add-on after large-volume crystalloid, not first-line.

---

## 4.8 Vasopressors — noradrenaline, MAP 65, peripheral start

**The short version**

- **Noradrenaline first line** (SSC 2026, **strong**, over dopamine, adrenaline or selepressin).
- **MAP target ≥65 mmHg** (strong, moderate certainty). ⚑ **SSC 2026 adds a conditional suggestion of MAP 60–65 in adults aged ≥65 years.**
- ⚑ **Start noradrenaline peripherally** rather than waiting for central access (SSC 2026, conditional).

**MAP target.** **65 mmHg** — the Sepsis-3 definitional threshold, the SSC 2021 and 2026 strong recommendation, and the Australian adult pathway target. Higher targets bought more atrial fibrillation without mortality benefit, with a possible signal of less RRT in chronic hypertensives. **Individualise upward only for demonstrated benefit** (a chronic hypertensive whose urine output and mentation improve at 75, or where cerebral perfusion pressure drives the target).

⚑ **Age nuance, both figures.** **SSC 2021 (international)** recommended an initial MAP target of **65 mmHg** for all adults with septic shock. **SSC 2026 (international)** retains **65 mmHg** as the strong general recommendation but **adds a conditional suggestion of an initial MAP range of 60–65 mmHg in adults aged ≥65 years**. Australian pathways have **not** adopted a separate geriatric target and continue to use **≥65**.

> **Exam stem 1 revisited.** A 68-year-old on noradrenaline at MAP 58 is **below the standard target of ≥65 mmHg**. Answer **65 mmHg**. The SSC 2026 ≥65-year nuance lowers the acceptable *floor* to 60 in older adults — it does not make 58 acceptable, and the Australian target remains ≥65.

**Sequence.** Noradrenaline titrated to MAP. As requirement climbs, **add vasopressin** (fixed low dose) rather than escalating noradrenaline alone — catecholamine-sparing, may reduce AF. If MAP remains inadequate on both, **add adrenaline**. With **cardiac dysfunction and persistent hypoperfusion despite adequate volume and MAP**, noradrenaline or adrenaline is preferred (consider dobutamine — §3). ⚑ SSC 2026 **suggests against terlipressin** and **beta-blockers**, with insufficient evidence for **methylene blue** and **midodrine**. Do not use **dopamine**.

**Peripheral initiation.** The old "no vasopressors without a central line" rule is gone: **SSC 2026 conditionally supports peripheral administration before central access**, now standard Australian ED and ICU practice. Requirements: **large-bore cannula in a large proximal vein** (antecubital fossa or above; avoid hand, wrist and leg), confirmed blood return, **frequent site inspection**, and a plan for central access if needed at high dose.

---

## 4.9 Source control

**The short version**

- **The intervention that changes outcome most, and the one most often delayed.**
- ⚑ **SSC 2026: early over late, ideally within 6 hours** of diagnosing sepsis/septic shock requiring source control (conditional).
- **Failure to improve = uncontrolled source until proven otherwise.**

Antibiotics do not sterilise pus, dead tissue, an obstructed system or infected hardware. Source control means physical removal or drainage: abscess or empyema; laparotomy for perforation or ischaemic bowel; **ERCP or percutaneous biliary drainage for cholangitis**; **nephrostomy or ureteric stent for an obstructed infected kidney**; **urgent debridement in necrotising soft tissue infection**; **removal of infected lines, prostheses or retained products**.

The unstable patient often needs **damage control** — drain, decompress, divert — not a definitive operation. The judgement call is **resuscitate first or intervene first**. For a **draining** problem — obstructed infected kidney, cholangitis, tension empyema — the intervention *is* the resuscitation and should not wait for haemodynamic optimisation. In **necrotising soft tissue infection** delay to theatre is directly proportional to mortality; the patient goes with noradrenaline running.

**Recurring exam pattern**: correct antibiotics, adequately filled, still vasopressor-dependent at 12–24 hours. The answer is almost never "broaden the antibiotics" — **re-image and re-examine for an uncontrolled source** (Surgery §2, §14).

---

## 4.10 Adjuncts — steroids, vitamin C, blood purification

**The short version**

- **Corticosteroids: for septic shock on vasopressors, not for sepsis without shock.** SSC 2026 **suggests** IV corticosteroids (conditional, low certainty).
- **ADRENAL** (ANZICS, NEJM 2018, n=3800; 3658 with primary-outcome data): hydrocortisone **200 mg/day continuous infusion for 7 days** — **no 90-day mortality benefit (27.9% vs 28.8%)** but **faster shock reversal (3 vs 4 days)**.
- ⚑ **Vitamin C is now negative and has swung to harm.** **LOVIT** (NEJM 2022): **44.5% vs 38.5%, RR 1.21 (1.04–1.40)** for death or persistent organ dysfunction at day 28.

**Corticosteroids.** Indication is **septic shock with ongoing vasopressor requirement**, conventionally after a period of vasopressor dependence rather than at first noradrenaline. **ADRENAL** (ANZICS CTG, NEJM 2018) randomised **3800** ventilated adults with septic shock across **69 ICUs in five countries** (Australia, New Zealand, UK, Saudi Arabia, Denmark), **3658 of whom had primary-outcome data**, to **hydrocortisone 200 mg/day by continuous infusion for 7 days**. **Negative for its primary outcome** (90-day mortality 27.9% vs 28.8%, OR 0.95, 95% CI 0.82–1.10, P=0.50) but positive for secondaries: **shock resolution 3 vs 4 days**, ventilation cessation 6 vs 7 days. **APROCCHSS** (French), using **hydrocortisone plus fludrocortisone** in a sicker population, did show mortality benefit — benefit concentrating in the sickest. Net practice: hydrocortisone for **shock reversal**, not survival benefit; watch hyperglycaemia and hypernatraemia; **do not** give steroids for sepsis without shock.

**Vitamin C, and why it died.** The 2017 Marik before-after study reported dramatic mortality reduction with hydrocortisone + ascorbic acid + thiamine; no randomised trial replicated it. **VITAMINS** (ANZ/Brazil) found no benefit on vasopressor-free time; **VICTAS** stopped early for futility; **LOVIT** (NEJM 2022) — 872 ICU adults with infection on vasopressors given **vitamin C 50 mg/kg IV 6-hourly for 96 hours** — found **death or persistent organ dysfunction at day 28 in 44.5% (191/429) vs 38.5% (167/434), RR 1.21 (95% CI 1.04–1.40, P=0.01)**: a **harm** signal. ⚑ **SSC 2026 suggests against IV vitamin C** — a genuine reversal, and exactly where older textbooks mislead.

**Blood purification.** Cytokine adsorption (CytoSorb), high-volume haemofiltration, plasma exchange and **polymyxin B haemoperfusion** remain **investigational** and have repeatedly failed in adequately powered trials. **Not standard Australian practice.** ⚑ SSC 2026 also **suggests against vitamin D**. RRT for sepsis-associated AKI is **§6**.

Also: **VTE prophylaxis** unless contraindicated; **restrictive transfusion** (~70 g/L); **glucose ≤10 mmol/L**; **early enteral nutrition**.

---

## 4.11 De-escalation, biomarkers and duration

**The short version**

- ⚑ **De-escalate once susceptibilities return — SSC 2026 makes this *strong***.
- **ACSQHC (2022, Australian): review antimicrobial therapy at 24–48 hours after the first dose**; **shorter over longer** duration with adequate source control — typically **5–7 days**.
- **Procalcitonin: use it to help *stop*, not to decide whether to *start*.**

The commonest failure after a good first hour is that nobody revisits the empirical regimen. SSC 2026 recommends de-escalation **strongly** once a microbiological diagnosis and susceptibilities are available, and **conditionally** when **no** pathogen is identified on final cultures — negative cultures are a reason to narrow, not to persist. The Australian standard ties review to the **Antimicrobial Stewardship Clinical Care Standard**: formal review at **24–48 hours after the first dose**, documenting a decision to continue, narrow, switch to oral or stop.

**Biomarkers.** SSC 2026 draws an examinable asymmetry: to decide whether to **start**, use **clinical evaluation alone** — never withhold antibiotics from a septic patient because PCT is low; to decide when to **stop**, use **PCT *and* clinical evaluation**, **when optimal duration is unclear**. CRP is too slow and non-specific for either.

**Duration.** With adequate source control most sepsis is treated **5–7 days**. Longer is reserved for *S. aureus* bacteraemia (minimum 14 days), endocarditis, osteomyelitis and septic arthritis, undrained collections, retained prosthetic material, fungaemia, and profound immunosuppression (**Infectious Disease**).

---

## 4.12 Special groups

**The short version**

- **Neutropenic sepsis is an emergency** — antibiotics **within 60 minutes**; do not wait for the neutrophil count.
- **Meningococcaemia**: rapidly spreading **purpuric non-blanching rash** + fever + hypotension → **immediate parenteral antibiotic**, before cultures, LP or transfer.
- The **returning traveller** with fever and shock is **malaria until excluded**.

**Neutropenic sepsis.** Australian adult definition (WACHS 2021, TG-concordant): **temperature ≥38.3°C once, or ≥38.0°C on two occasions, with neutrophils <0.5 × 10⁹/L**. **Start IV antibiotics on suspicion** — **within 60 minutes**, or **30 minutes** for a ward patient with signs of sepsis. Adult empirical therapy **piperacillin–tazobactam 4/0.5 g IV 6-hourly**; **add vancomycin (25–30 mg/kg load) and an aminoglycoside** with systemic compromise. Severe beta-lactam allergy: **vancomycin + ciprofloxacin 400 mg IV 12-hourly**. Do not delay for cultures, imaging or the count. MASCC stratification, G-CSF and outpatient management are **Haematology & Oncology**.

**The immunosuppressed more broadly.** Long-term corticosteroids, biologics, transplant immunosuppression, asplenia and advanced HIV blunt the febrile response. Two traps: **asplenic/hyposplenic patients** risk overwhelming post-splenectomy infection with encapsulated organisms (*S. pneumoniae*, *H. influenzae* type b, *N. meningitidis*) and can go from well to dead in hours — immediate parenteral **ceftriaxone**; and long-term steroid users may have **adrenal insufficiency** contributing to shock.

> **Exam stem 2 — answered.** *Previously well 30-year-old with fever, hypotension and a rapidly spreading petechial non-blanching rash. Immediate priority alongside fluid resuscitation?* **Immediate parenteral antibiotics — ceftriaxone 2 g IV (adult) — without waiting for blood cultures, lumbar puncture, imaging or transfer.** If IV access is not immediately available, give **benzylpenicillin IM/IV** rather than delay.

**Meningococcaemia.** A rapidly evolving purpuric non-blanching rash with fever and hypotension is **invasive meningococcal disease until proven otherwise**; mortality is measured in hours, progressing to purpura fulminans and Waterhouse–Friderichsen syndrome (adrenal haemorrhage). This is the **standard exception** to "cultures before antibiotics", and **antibiotics are never delayed for an LP** (contraindicated in the shocked or coagulopathic patient anyway). The Queensland guideline adds **ceftriaxone 2 g IV 12-hourly** where meningococcal disease is suspected; in severe penicillin allergy, **ciprofloxacin 400 mg IV 8-hourly**. **Public health limb**: **urgently notifiable**, with **contact tracing and chemoprophylaxis** (single-dose ciprofloxacin in adults). CSF interpretation is **Infectious Disease**; the rash in a child is **Paediatrics §3**.

**Toxic shock syndromes.** Suspect when shock is out of proportion to an apparently minor focus. **Staphylococcal TSS**: fever, hypotension, **diffuse macular erythroderma** (sunburn-like, including palms and soles) with **desquamation at 1–2 weeks**, plus multi-system involvement (vomiting/diarrhoea, myalgia with raised CK, renal impairment, mucosal hyperaemia, thrombocytopenia). Classically menstrual/tampon-associated, but also post-surgical, nasal packing and burns; blood cultures usually **negative** — toxin-mediated. **Streptococcal TSS**: usually a deep soft-tissue focus (often necrotising fasciitis), **blood cultures positive in the majority**, higher mortality. Management: fluid and vasopressor support, **removal of the focus**, a beta-lactam **plus clindamycin** — added for **ribosomal inhibition of toxin synthesis**, not spectrum — and **IVIG** in streptococcal TSS.

**The returning traveller.** Fever plus shock after travel to a malaria-endemic area is **falciparum malaria until excluded**: thick and thin films or RDT **immediately and repeated**, because one negative film does not exclude it. Also **enteric fever**, **dengue**, **leptospirosis**, **melioidosis** (endemic in northern Australia — the key domestic "tropical" diagnosis in diabetics and heavy drinkers in the wet season, requiring **meropenem or ceftazidime**), and rickettsial infections (**Infectious Disease**).

---

## 4.13 Outcomes and post-sepsis morbidity

**The short version**

- **Sepsis ~10% in-hospital mortality; septic shock >40%.**
- **Mortality stays elevated for years**; **post-sepsis syndrome** = disability, cognitive impairment, fatigue, anxiety, depression, PTSD.
- ⚑ **ACSQHC statement 7 makes structured post-discharge follow-up an Australian standard-of-care requirement.**

**ARISE** (ANZICS CTG, NEJM 2014) reported 90-day mortality **18.6% with EGDT vs 18.8% usual care** in 1600 ANZ ED patients with early septic shock — **protocolised EGDT with mandatory central venous oximetry adds nothing over good usual care**. What matters is **early recognition, source control, appropriate antimicrobials, fluid resuscitation and escalation**, not the monitoring apparatus.

Beyond discharge, sepsis acts as a chronic-disease inflection point. Survivors carry **excess mortality for years**, high **readmission** rates, and **post-sepsis syndrome**: ICU-acquired weakness, new or worsened **cognitive impairment**, persistent fatigue, chronic pain, and **anxiety, depression and PTSD** in patients and families — overlapping heavily with post-intensive-care syndrome (**§6.4**, and ICU-acquired weakness **§6.5**).

The Australian implication is concrete: **statement 7** requires **structured, coordinated follow-up after hospital**; **statement 5** that patients and carers be told about sepsis and its after-effects **from the point of suspicion**, verbally and in writing; **statement 6** documented handover at each transition. "What does the Standard require after discharge?" is answered by naming **statements 5, 6 and 7** — including GP involvement, medication and vaccination review, and functional/psychological assessment.

---

## Rapid-Recall Discriminators

| Cue | Answer |
|---|---|
| Definition of sepsis under Sepsis-3 (2016) | Life-threatening organ dysfunction from a dysregulated host response to infection; infection + acute rise in SOFA ≥2 |
| Three components required for Sepsis-3 septic shock | Sepsis + vasopressor needed to maintain MAP ≥65 mmHg + lactate >2 mmol/L, both despite adequate fluid resuscitation |
| Adult on noradrenaline for septic shock — standard initial MAP target | **65 mmHg**; MAP 58 is below target — escalate noradrenaline and hunt the source |
| Fever, hypotension and rapidly spreading purpuric non-blanching rash in a young adult — immediate priority alongside fluids | **Immediate parenteral antibiotic — ceftriaxone 2 g IV (adult)** — without waiting for cultures, LP, imaging or transfer; urgently notifiable |
| Two reasons SIRS was abandoned as the basis of the sepsis definition | Insensitive (~1 in 8 infected ICU patients with organ dysfunction miss 2 criteria); non-specific (~4 in 5 non-infected ICU patients meet it) |
| qSOFA components and cut-offs | RR ≥22, GCS <15, SBP ≤100 mmHg; ≥2 = higher risk — **prognostic, not a screening tool** |
| Current guideline position on qSOFA as a single sepsis screen | SSC 2021/2026 (international) **strongly recommend against**; ACSQHC 2022 (Australian) recommends LqSOFA, NEWS or MEWS, rejecting qSOFA **in any setting** and SIRS |
| Time target for antimicrobials in probable/definite sepsis **without** shock | **Within 1 hour** — the clock is set by organ dysfunction, not shock (SSC 2026 strong; ACSQHC 2022: 60 min) |
| Time target when sepsis is only *possible* and there is no shock | **Within 3 hours** if concern persists after time-limited investigation; if infection unlikely and no shock, **defer and monitor** |
| Guideline-recommended initial crystalloid volume in adult sepsis, and its evidence strength | **At least 30 mL/kg in the first 3 h** (SSC 2026, **conditional**, low certainty) |
| Australian trial of early vasopressors versus fluid-forward resuscitation in ED septic shock | **ARISE FLUIDS** (NEJM 2026) — day-90 days alive and out of hospital identical (76 vs 76); pulmonary oedema 0.6% vs 5% |
| First-line vasopressor in septic shock, and whether it can be started peripherally | **Noradrenaline** (SSC 2026 strong); **yes** — via a large proximal cannula rather than delay for central access |
| Recommended timing of source control in sepsis/septic shock | **Ideally within 6 hours** (SSC 2026, conditional); vasopressor dependence at 12–24 h means uncontrolled source |
| Corticosteroid regimen in septic shock and the outcome it actually improves | Hydrocortisone **200 mg/day IV infusion, 7 days** (ADRENAL 2018) — **no 90-day mortality benefit (27.9% vs 28.8%)**; shock reversal 3 vs 4 days |
| Current status of IV vitamin C in sepsis | **Recommended against** — LOVIT (2022): death or persistent organ dysfunction at day 28 44.5% vs 38.5%, RR 1.21 — a **harm** signal |
| How procalcitonin should and should not be used in sepsis | PCT **plus clinical evaluation to decide when to stop**; **clinical evaluation alone to decide whether to start** |
| Australian adult definition of febrile neutropenia and its antibiotic time target | Temp ≥38.3°C once (or ≥38.0°C twice) with neutrophils <0.5 × 10⁹/L; IV antibiotics **within 60 min** (30 min with signs of sepsis) |

---

**Sources**

- ACSQHC. *Sepsis Clinical Care Standard*, June 2022; National Sepsis Program.
- NSW CEC. *Adult Sepsis Pathway* (≥16 years); *Between the Flags* adult observation charts. Burrell AR, et al. SEPSIS KILLS. *Med J Aust* 2016;204(2):73.
- SA Health. *Adult Sepsis Pathway* FAQ, August 2025. Safer Care Victoria, *Victorian Adult Sepsis Pathway*.
- Queensland Health. *Adult sepsis antimicrobial prescribing guideline* — TG-concordant substitute for *Therapeutic Guidelines: Antibiotic* (subscription-gated); cross-check eTG/AMH.
- WA Country Health Service. *Neutropenic Sepsis / Febrile Neutropenia in adult Oncology and Haematology*, November 2021.
- Singer M, et al. Sepsis-3 consensus definitions. *JAMA* 2016;315(8):801–10.
- Evans L, et al. Surviving Sepsis Campaign 2021. **International.**
- Surviving Sepsis Campaign 2026. *Intensive Care Med*, online 23 March 2026 (SCCM/ESICM). **International — supersedes 2021.**
- ANZICS CTG trials (all *N Engl J Med*): ARISE 2014;371:1496–506; ADRENAL 2018;378:797–808; PLUS 2022; ARISE FLUIDS (with ACEM CTN) 2026.
- LOVIT, *N Engl J Med* 2022;386:2387–98. CLASSIC (2022), CLOVERS (2023), APROCCHSS (2018).
- Royal College of Physicians (UK). *NEWS2*, December 2017. **UK instrument — not the Australian standard.**
