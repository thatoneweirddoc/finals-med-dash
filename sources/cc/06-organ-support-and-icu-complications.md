# Critical Care Notes — Section 6: Organ Support and ICU Complications

*Sources: KDIGO 2012 AKI guideline (international standard); ANZICS statements (Death and Organ Donation Ed. 4.1, 2021; End-of-Life Care, 2014); ANZICS CTG trials (NICE-SUGAR, SPICE III, TARGET, TEAM, PEPTIC, RENAL); STARRT-AKI; REVISE; RICH; PADIS 2018 with the 2025 SCCM focused update; ADS/ADEA/ANZCA/NZSSD SGLT2i alert update May 2023; ADA/EASD/AACE/JBDS hyperglycaemic crises consensus 2024; WACHS adult DKA guideline; ACSQHC standards; ACEM/ANZCA/CICM IC-10 (2025); Therapeutic Guidelines; AMH; TGA. Scope: organ support in the ICU and the iatrogenic complications of being an ICU patient.*

Cross-refs: AKI aetiology/CKD → **Renal**; delirium assessment → **Geriatrics §1**; ACP and capacity → **Geriatrics §5**; DKA outpatient → **Endocrine**; refeeding in anorexia nervosa → **Psychiatry §6.2**; post-op AKI/delirium → **Surgery §2**; HAI microbiology → **Infectious Disease**; paediatric DKA → **Paediatrics**. Resuscitation §1; shock/electrolytes §3; sepsis §4; ventilation §5; poisoning §7.

---

## 6.1 AKI in the critically ill

**The short version**
- KDIGO 2012 is the universal staging system — **international, not Australian**, but adopted by Australian units and ANZICS datasets.
- Two independent axes, creatinine and urine output. **Stage by whichever is worse.**
- AKI = SCr rise ≥26.5 µmol/L in 48 h, *or* ≥1.5× baseline within 7 d, *or* UO <0.5 mL/kg/h for 6 h.
- Contrast is a far weaker nephrotoxin than older texts claim.

⚑ **Edition check.** *KDIGO 2012 CPG for AKI* is the operative document. The first major revision — *KDIGO 2026 CPG for AKI and AKD* — reached public review in March 2026 but was **not yet published** at time of writing.

| Stage | Creatinine | Urine output |
|---|---|---|
| 1 | 1.5–1.9× baseline (known or presumed within 7 d), **or** absolute rise ≥26.5 µmol/L **within 48 h** | <0.5 mL/kg/h for 6–12 h |
| 2 | 2.0–2.9× baseline | <0.5 mL/kg/h for ≥12 h |
| 3 | ≥3.0× baseline, **or** SCr ≥353.6 µmol/L, **or** commencing RRT, **or** eGFR <35 mL/min/1.73 m² (**<18 y only**) | <0.3 mL/kg/h for ≥24 h, **or** anuria ≥12 h |

### 6.1.1 Worked example — compute it, don't eyeball it

*Ventilated adult, UO 0.3 mL/kg/h for 8 h, creatinine 80 → 190 µmol/L. Stage?*

**Creatinine.** 190 ÷ 80 = **2.375×** → within 2.0–2.9× → **stage 2**. Absolute rise 190 − 80 = **110 µmol/L**, above 26.5, so AKI is certain — but that limb only defines AKI/stage 1 and does not upgrade further; 190 is far below 353.6, so the stage 3 absolute limb fails.

**Urine output.** 0.3 is **<0.5** and 8 h sits inside the 6–12 h window → **stage 1**; not ≥12 h, so not stage 2. Stage 3 needs **<0.3** (strict inequality) for **≥24 h** — 0.3 is not less than 0.3, and 8 h is not ≥24 h, so it fails on both counts.

**When the axes disagree, take the higher stage.** Answer = **KDIGO stage 2 AKI**.

### 6.1.2 Pre-renal / renal / post-renal in ICU

- **Pre-renal:** hypovolaemia, vasodilatory shock, low cardiac output, abdominal compartment syndrome. **Venous congestion** is under-recognised — a fluid-overloaded patient with CVP 20 has renal *outflow* failure, and more fluid worsens it.
- **Intrinsic:** sepsis-associated AKI is the commonest ICU phenotype (inflammation, microvascular shunting, tubular cell-cycle arrest — not simply ischaemic ATN); also rhabdomyolysis, drugs, contrast (→ **Renal**).
- **Post-renal:** **a blocked IDC is a post-renal cause — bladder scan and flush or replace the catheter before diagnosing anuric ATN.**

### 6.1.3 Nephrotoxins and contrast

Daily review for **aminoglycosides** (once-daily, level-guided, stop early), **vancomycin** (risk amplified by piperacillin–tazobactam), **amphotericin B**, **calcineurin inhibitors**, **NSAIDs**, **ACEI/ARB**. Avoid hydroxyethyl starch. **Diuretics do not treat AKI** — furosemide manages fluid overload only. Dose for the *current* GFR: creatinine lags, so eGFR overestimates clearance while GFR falls.

⚑ **Contrast-associated AKI — changed from older teaching.** The old "contrast-induced nephropathy" signal came largely from confounding by indication, hence *associated*. Risk concentrates in **eGFR <30**, intra-arterial first-pass administration and volume depletion. **N-acetylcysteine and bicarbonate are not supported** (PRESERVE 2018; AMACING 2017); isotonic crystalloid is still reasonable if high-risk. The **RANZCR Iodinated Contrast Media Guideline (v2.3)** frames this as risk–benefit — withholding contrast from a critically ill patient with a treatable diagnosis (dissection, ischaemic bowel, PE) is usually the larger harm. Metformin does not cause contrast AKI; the concern is accumulation *if* AKI occurs.

---

## 6.2 Renal replacement therapy

**The short version**
- No absolute creatinine or urea number triggers RRT. AEIOU lists the *emergency* indications, not a checklist.
- **STARRT-AKI (2020)** settled timing: accelerated initiation gave no mortality benefit and more RRT dependence.
- CRRT for haemodynamic instability and raised ICP; IHD for speed.
- **Regional citrate** is the preferred circuit anticoagulant (KDIGO 2012, grade 2B).

| Category | Emergency trigger |
|---|---|
| **A**cidosis | Refractory severe metabolic acidosis (conventionally pH <7.1) — treat the shock causing it |
| **E**lectrolytes | Refractory hyperkalaemia, or with ECG change — the commonest true emergency indication |
| **I**ntoxication | Dialysable toxin (low Vd, low protein binding, low MW): lithium, salicylate, toxic alcohols, metformin-associated lactic acidosis, valproate, theophylline (→ §7) |
| **O**verload | Diuretic-resistant pulmonary oedema, especially if you cannot wean |
| **U**raemia | Encephalopathy, pericarditis, uraemic bleeding — a syndrome, not a urea number |

⚑ KDIGO 2012 recommends emergent RRT for life-threatening fluid/electrolyte/acid–base derangement, otherwise judging the **trend and broader context**. Texts quoting urea >30 mmol/L or creatinine >400 µmol/L as automatic triggers are out of date.

**Timing — STARRT-AKI (NEJM 2020).** 2,927 patients. Accelerated = RRT within 12 h; standard = discouraged unless there was **persistent severe AKI (creatinine >50% above the randomisation value) plus at least one of**: **K⁺ ≥6.0 mmol/L**, **pH ≤7.20 or HCO₃⁻ ≤12 mmol/L**, fluid overload with respiratory compromise (PaO₂/FiO₂ ≤200), or AKI persisting **>72 h** from randomisation (only 61.8% of the standard arm then received RRT). **90-day mortality 43.9% vs 43.7%; RR 1.00 (0.93–1.09)**; **RRT dependence at 90 d worse with accelerated start, 10.4% vs 6.0%; RR 1.74**, plus more hypotension and hypophosphataemia. Supersedes the discordant ELAIN and AKIKI results.

**Modality.** CRRT when vasopressor-dependent and when osmotic swings are dangerous (raised ICP, liver failure); effluent dose ~25 mL/kg/h, higher intensity adds nothing (**RENAL**, ANZICS CTG 2009: 40 vs 25 mL/kg/h). IHD for rapid clearance; SLED is the hybrid. **No modality has a mortality advantage.**

**Circuit anticoagulation.** **Regional citrate** chelates ionised calcium in the circuit; titrate to **post-filter iCa <0.35 mmol/L**. KDIGO 2012 suggests citrate over heparin absent contraindication (**2B**). ⚑ **RICH (JAMA 2020; 638 randomised, 596 in the primary analysis set, 26 German ICUs, stopped early at interim analysis):** longer filter life with citrate (median **47 vs 26 h**) and far less bleeding (**5.1% vs 16.9%**), but **no mortality benefit (51.2% vs 53.6%; adjusted HR 0.79, 95% CI 0.63–1.004)** and **more new culture-proven infections (68.0% vs 55.4%)**. Citrate harms: metabolic alkalosis, hypocalcaemia, hypomagnesaemia, and **citrate accumulation** in liver failure or shock — suspect when the **total:ionised Ca ratio ≥2.5**. Alternatives: UFH (bleeding, HIT), or none if actively bleeding.

**Complications.** Access — pneumothorax, CRBSI, central venous stenosis (avoid subclavian to preserve future fistulae). Intradialytic hypotension may perpetuate renal injury; **hypophosphataemia is very common with CRRT**, plus hypokalaemia and hypothermia. **Underdosing antimicrobials during RRT is a common and lethal error** — dose per the ICU RRT protocol.

**Dialysis disequilibrium syndrome.** Urea clears from plasma faster than from brain (reverse urea effect plus idiogenic osmoles) → cerebral oedema. Risk: **first-ever session**, markedly elevated urea, extremes of age, pre-existing neurological disease. Headache, nausea, restlessness → seizures, coma. **Prevention:** short first session (~2 h), blood flow ~150–200 mL/min, small dialyser, stepwise escalation. CRRT largely avoids it.

---

## 6.3 Sedation and analgesia

**The short version**
- **Analgesia first (analgo-sedation).** Much "agitation" is untreated pain, a full bladder, or hypoxaemia.
- Target **light** sedation against a validated score, reassessed each shift.
- **Daily sedation interruption** and protocolised light sedation are largely equivalent — aim for minimum effective sedation.
- Benzodiazepines are the most deliriogenic; dexmedetomidine causes bradycardia/hypotension and is not a complete sedative.
- **Propofol infusion syndrome** is rare, under-recognised and lethal.

**Assessment (PADIS — the SCCM framework, US-authored but the one Australian units work to; 2018 guideline as revised by the 2025 SCCM focused update).** Pain by self-report or **BPS/CPOT**; pre-emptive analgesia before turning and suctioning. Depth by **RASS** (−5 → +4) or SAS; target **RASS 0 to −2** unless there is a reason to go deeper (proning/paralysis in severe ARDS, refractory raised ICP, status epilepticus). Deep sedation in the first 48 h predicts longer ventilation and higher mortality.

| Agent | Role | Specific harms |
|---|---|---|
| Propofol | First-line short-term, rapid on/off | Hypotension, negative inotropy, hypertriglyceridaemia, pancreatitis, lipid calories (1.1 kcal/mL), **PRIS** |
| Midazolam | When haemodynamics preclude propofol | Accumulates in renal/hepatic failure, tolerance, **strongest delirium association**, withdrawal |
| Dexmedetomidine | Cooperative sedation, no respiratory depression | Bradycardia, hypotension, no amnesia, inadequate alone |
| Morphine / fentanyl | Analgesia backbone | Morphine metabolites accumulate in renal failure; fentanyl in fat; ileus |
| NMBAs | Severe ARDS, dyssynchrony, shivering | Sedate fully first; awareness; ICU-AW; masks seizures |

⚑ **SPICE III (NEJM 2019; ANZICS CTG–led, 4,000 patients, 74 ICUs in 8 countries).** Early dexmedetomidine as primary sedative: **90-day mortality identical at 29.1% in both arms**; 64% still needed supplemental propofol; more bradycardia (5.1% vs 0.5%), hypotension (2.7% vs 0.5%) and asystole (0.7% vs 0.1%). Rarely adequate as a **sole** agent. ⚑ **Position has since moved:** the **2025 SCCM focused update to PADIS now suggests dexmedetomidine *over* propofol** for maintaining light sedation in mechanically ventilated adults (conditional recommendation, accepting the bradycardia excess). Reconcile the two: dexmedetomidine is a reasonable *primary* agent for light sedation, but seldom sufficient alone.

**Daily sedation interruption.** Cease sedative (± opioid) infusions daily until awake and following commands, then restart at ~half the prior rate. Paired with an SBT ("wake up and breathe") it shortens ventilation and ICU stay — the **A** and **B** of ABCDEF. **Contraindications:** active NMBA, refractory raised ICP, severe ARDS needing deep sedation/proning, status epilepticus, escalating vasopressors. ⚑ **Where sedation is already protocolised and light, DSI adds nothing further (SLEAP 2012).** Harms: self-extubation, device removal.

### 6.3.1 Propofol infusion syndrome (PRIS)

Impaired mitochondrial fatty acid oxidation and electron transport uncoupling → energy failure in cardiac and skeletal muscle.

**Recognise the vignette:** several days of propofol, often high rate, on noradrenaline and/or corticosteroids, with unexplained **high anion gap metabolic acidosis**, rising lactate, **rhabdomyolysis** (CK in the tens of thousands), **hyperkalaemia**, **AKI**, hypertriglyceridaemia/lipaemic serum, fever, hepatomegaly, and **bradyarrhythmia** → refractory bradycardia, asystole, or a Brugada-like ECG. Cardiac failure is the terminal event.

⚑ **Dose/duration thresholds — adult and paediatric, and they do not actually disagree.** The **TGA-approved Australian PI** (wording per Propofol Sandoz) states PRIS is associated with infusions **exceeding 5 mg/kg/h given for more than 48 h**, and separately states that **"the maximum dose of propofol for adult sedation during intensive care should not exceed 4.0 mg/kg/hour"**. The **WA Health / Perth Children's Hospital monograph (paediatric)** sets the identical ceiling — **maximum 4 mg/kg/h for up to 48 h including boluses** — and lists the risk triad **>4 mg/kg/h, cumulative >240 mg/kg, >48 h**. So **4 mg/kg/h is the licensed ceiling in adults and children alike**; **5 mg/kg/h is not a permitted adult dose — it is merely the rate above which PRIS is most often *reported***. Both sources stress PRIS occurs at lower rates and shorter durations: risk markers, not safety guarantees.

**Risk factors:** young age (children markedly more susceptible), acute neurological injury, sepsis, concurrent **catecholamine** and **glucocorticoid** exposure, inadequate carbohydrate intake, subclinical mitochondrial disorders, low oxygen delivery.

⚑ **Australian regulatory point:** the **TGA-approved Australian PI** states (wording per Propofol Sandoz, §4.3) that propofol **"is contraindicated in children 16 years of age or younger for sedation during intensive care and for monitored conscious sedation for surgical and diagnostic procedures"** — a restriction arising from paediatric deaths. (The NZ Diprivan data sheet words its paediatric ICU contraindications differently — children under 3 years with serious viral respiratory tract infection, and children of any age with croup or epiglottitis — so quote the Australian PI, not the NZ one.)

**Monitoring in prolonged adult propofol sedation:** daily CK, triglycerides, lactate, blood gas, renal function and ECG, tracking cumulative dose.

**Management** (no antidote): **stop propofol immediately** and substitute; correct hyperkalaemia (→ §3) and acidosis; **RRT** for potassium, lactate and rhabdomyolysis-associated AKI, often the definitive measure; pacing for bradyarrhythmia; **ECMO** in refractory collapse; adequate carbohydrate to suppress fat oxidation; report to the **TGA**. Mortality is high once cardiac features appear — the win is early recognition of unexplained acidosis on day 3–4 of propofol.

---

## 6.4 ICU delirium

**The short version**
- Roughly a third to two-thirds of ventilated patients; higher with benzodiazepines and deep sedation.
- Independently predicts prolonged ventilation, higher mortality and **long-term cognitive impairment**; hypoactive delirium is commonest and most missed.
- Screen with **CAM-ICU** or **ICDSC** each shift, after establishing arousal with RASS.
- **Antipsychotics do not treat it.** The **ABCDEF bundle** does.

Phenomenology, differential and general management → **Geriatrics §1**; critical-illness angle only here.

**Why it matters.** **BRAIN-ICU (NEJM 2013):** longer delirium duration predicted worse global cognition at 3 and 12 months, with deficits comparable to mild Alzheimer disease or moderate TBI in patients with no prior impairment — a core domain of **post-intensive care syndrome**.

**Screening.** **CAM-ICU** — establish arousability (RASS ≥ −3), then assess acute onset/fluctuating course, inattention, altered consciousness and disorganised thinking via non-verbal tasks, so intubated patients can be assessed; bedside sensitivity falls short of research conditions, so a negative screen in a patient who looks delirious does not close the question. **ICDSC** — 8-item shift checklist, ≥4 suggests delirium. RASS −4/−5 is "unable to assess", not "negative".

**ABCDEF bundle:** **A**ssess/prevent/manage pain; **B**oth SAT and SBT, paired; **C**hoice of sedation (avoid benzodiazepines); **D**elirium assess/prevent/manage; **E**arly mobility; **F**amily engagement. Implementation cohorts show a **dose–response** — more elements delivered, lower odds of death, next-day delirium, restraint use and readmission.

⚑ **Why antipsychotics are not the answer** (contradicts older ICU teaching):
- **MIND-USA (NEJM 2018):** 566 patients, haloperidol vs ziprasidone vs placebo — **no difference in days alive without delirium or coma** (8.5 / 7.9 / 8.7), nor in ventilation, ICU stay or mortality.
- **AID-ICU (NEJM 2022):** 1,000 patients, haloperidol 2.5 mg IV tds vs placebo — **no difference in the primary outcome**, days alive and out of hospital at 90 d (35.8 vs 32.9 d; adjusted difference 2.9 d, 95% CI −1.2 to 7.0). ⚑ 90-day **mortality was lower with haloperidol** (36.3% vs 43.3%; adjusted difference −6.9%, 95% CI −13 to −0.6) — a secondary outcome with more missing data than the fragility index, so hypothesis-generating only, but know it exists.
- **PADIS 2018 recommends against routine antipsychotics** for treatment or prevention of ICU delirium; the **2025 SCCM focused update makes no recommendation for or against** haloperidol or atypical antipsychotics for treating established delirium, concluding that they have minimal or no effect on patient-centred outcomes. Either way, routine use is not supported. Harms: QT prolongation and torsades, extrapyramidal effects, NMS, oversedation, and in older patients the mortality signal driving caution in dementia (→ **Geriatrics §1**).
- **Still defensible:** severe agitation threatening airway, lines or safety after non-drug measures fail — symptom control only, lowest dose, ECG monitoring, documented cessation plan.
- **Dexmedetomidine** has one niche: agitated delirium preventing extubation (**DahLIA**, JAMA 2016, ANZ — increased ventilator-free hours). Alcohol withdrawal delirium is a different disease.

---

## 6.5 ICU-acquired weakness and early mobilisation

**The short version**
- ~25–60% of patients ventilated >7 days.
- Clinical diagnosis: **MRC sum score <48/60** (6 muscle groups bilaterally, 0–5 each) in a cooperative patient.
- Prevent rather than treat: minimise sedation, NMBAs and steroids; treat sepsis; avoid hyperglycaemia; mobilise early — but **more is not automatically better** (TEAM).

**Subtypes:** critical illness polyneuropathy (axonal sensorimotor) and critical illness myopathy (reduced-amplitude, prolonged-duration CMAPs), usually together. **Risk factors:** sepsis, multi-organ failure, immobility, hyperglycaemia, corticosteroids, NMBAs, malnutrition, age. **Differential in failure to wean:** cervical cord injury, Guillain–Barré, myasthenic crisis, prolonged NMBA effect.

⚑ **TEAM (NEJM 2022; ANZICS CTG–led, 750 patients, mostly Australian/NZ sites).** Intensified early mobilisation (mean 20.8 vs 8.8 min/day) gave **no improvement in days alive and out of hospital at 180 days** (median 143 vs 145; difference −2.0 d, 95% CI −10 to 6) and **more adverse events (9.2% vs 4.1%; OR 2.55)**, mostly arrhythmia and desaturation. Mobilise early and routinely, titrated to the patient.

---

## 6.6 Nutrition and refeeding syndrome

**The short version**
- **Enteral first**, within 24–48 h once resuscitated; PN only if enteral is impossible or persistently inadequate.
- Do not chase full caloric targets in week one — **energy-dense feed confers no benefit (TARGET)**; protein ~1.2–2.0 g/kg/day.
- **Refeeding syndrome** in ICU is defined by a phosphate fall after feed starts; restrict calories while replacing electrolytes and thiamine.

NG is standard, post-pyloric only for demonstrated intolerance; routine gastric residual volume measurement is abandoned. Feeding is not contraindicated by proning or stable low-dose vasopressors; hold in escalating shock or suspected mesenteric ischaemia. ⚑ **TARGET (NEJM 2018; ANZICS CTG–led, ~4,000 patients, Australia/NZ):** 1.5 vs 1.0 kcal/mL at the same volume — **no difference in 90-day mortality** despite far more energy delivered. Avoid overfeeding and count **non-nutritional calories** — propofol (1.1 kcal/mL), citrate and dextrose solutions.

**Refeeding syndrome in ICU** (mechanism and the anorexia nervosa context → **Psychiatry §6.2**). Carbohydrate reintroduction → insulin surge → phosphate, potassium and magnesium shift intracellularly and thiamine is consumed as cofactor → hypophosphataemia (failure to wean, rhabdomyolysis, arrhythmia), hypokalaemia/hypomagnesaemia, Wernicke, fluid retention. **ICU risk groups:** prolonged starvation, chronic alcohol use, malignancy, post-bariatric or prolonged post-operative starvation, malabsorption, anyone unfed >5 days.

⚑ **Australian evidence — Doig et al., Lancet Respir Med 2015** (13 ICUs, Australia and NZ, 339 patients). Refeeding syndrome defined as **phosphate <0.65 mmol/L within 72 h of starting nutrition, with a fall >0.16 mmol/L**. Standard vs **protocol-restricted intake (20 kcal/h for ≥2 days, then stepwise return at 40/60/80% of goal, dropping back if phosphate fell below 0.71 mmol/L)**. The primary composite endpoint was not significant, but restricted intake gave **better survival — 91% vs 79% alive at day 60; 87% vs 79% at day 90**. When phosphate drops, cut the calories, not the electrolyte replacement.

**Adult approach:** phosphate, magnesium, potassium and calcium before and daily after starting feed; **thiamine before or with the first carbohydrate load — Australian dosed guidance (adult) comes from the eating-disorder protocols: QuEDS 300 mg IM/IV 30 min before feeding and daily for 3 days, then 100 mg orally daily; NSW Health 100 mg orally bd for 3 days** (→ **Psychiatry §6.2**); in established ICU refeeding syndrome, restrict to the Doig protocol's **20 kcal/h for at least 2 days**, then 40 kcal/h for 24 h, 60 kcal/h for 24 h, 80% of goal, full goal by day 4, dropping back to 20 kcal/h if phosphate falls below 0.71 mmol/L; replace electrolytes aggressively and continue feeding at a reduced rate rather than stopping. Paediatric thresholds differ → **Paediatrics**.

---

## 6.7 Glycaemic control

**The short version**
- Stress hyperglycaemia is near-universal and associated with worse outcomes — but *normalising* it aggressively causes harm.
- **NICE-SUGAR** is definitive and **Australian/New Zealand-led** (ANZICS CTG with the Canadian Critical Care Trials Group; 87.5% recruited in Australia and NZ).
- Intensive control (**4.5–6.0 mmol/L**) *increased* mortality vs conventional (**≤10.0 mmol/L**); standard adult target ≈ **6–10 mmol/L**, with severe hypoglycaemia the thing you are protecting against.

**NICE-SUGAR (NEJM 2009).** 6,104 adults. Intensive **4.5–6.0 mmol/L (81–108 mg/dL)** vs conventional **<10.0 mmol/L (<180 mg/dL)**. **90-day mortality 27.5% vs 24.9%; OR 1.14 (1.02–1.29), p = 0.02** — absolute excess 2.6%, driven largely by cardiovascular deaths. **Severe hypoglycaemia (≤2.2 mmol/L): 6.8% vs 0.5%.** Overturned the single-centre Leuven results behind a decade of tight-control protocols.

**Practical (adult):** nurse-led IV insulin infusion when glucose persistently exceeds ~10 mmol/L; hourly BGL initially; **arterial or venous samples rather than capillary** in shocked, oedematous or vasopressor-dependent patients. ⚑ Patients with pre-existing poorly controlled diabetes may tolerate a higher target ("relative hypoglycaemia") — **not yet a guideline change**.

---

## 6.8 Stress ulcer and VTE prophylaxis

**The short version**
- Strongest SUP indications: mechanical ventilation and coagulopathy.
- **REVISE (2024):** pantoprazole markedly reduces clinically important upper GI bleeding without changing mortality.
- **PEPTIC (2020, ANZICS CTG–led):** no clear mortality difference between PPI and H2RA.
- Pharmacological VTE prophylaxis for nearly all ICU patients; mechanical alone when anticoagulation is contraindicated.

**SUP — risk factors for clinically important bleeding:** invasive ventilation (especially >48 h), coagulopathy (platelets <50, INR >1.5, aPTT >2× normal), shock, chronic liver disease, RRT, prior GI bleed within a year, major burns or trauma. **Low-risk, enterally fed, non-ventilated patients do not need it.**

- **REVISE (NEJM 2024):** 4,821 ventilated adults, IV pantoprazole 40 mg daily vs placebo. **Clinically important upper GI bleeding 1.0% vs 3.5%; HR 0.30 (0.19–0.47).** 90-day mortality 29.1% vs 30.9% (HR 0.94, 95% CI 0.85–1.04), not significant; VAP identical (23.3% vs 23.8%); *C. difficile* **numerically higher on pantoprazole (1.2% vs 0.7%; HR 1.78, 95% CI 0.96–3.29)** — not significant, but not "comparable" either.
- ⚑ **PEPTIC (JAMA 2020; ANZICS CTG–led, ~26,800 patients, cluster crossover across Australian, NZ, UK, Canadian and Irish ICUs):** PPI vs H2RA — **in-hospital mortality 18.3% vs 17.5%**; inconclusive, though the point estimate mildly favoured H2RA. ⚑ The two answer **different questions** — whether to give prophylaxis at all, versus which agent.
- PPI harms: *C. difficile*, hypomagnesaemia, clopidogrel interaction. **Review daily and document the stop on the ICU-to-ward summary.**

**VTE prophylaxis.** The **ACSQHC Venous Thromboembolism Prevention Clinical Care Standard (2020)** requires a documented risk assessment and prescribed plan for every admitted adult. **Pharmacological (adult):** LMWH (enoxaparin) standard; UFH if CrCl <30 mL/min or reversibility matters; anti-Xa monitoring only at extremes of weight or in renal failure. **Contraindications:** active bleeding, severe thrombocytopenia, HIT (use a non-heparin agent), recent neuraxial procedure, imminent surgery. **Mechanical:** intermittent pneumatic compression when drugs are contraindicated; graduated stockings should **not** be used after stroke (CLOTS showed harm). Routine IVC filters and screening ultrasound are not indicated.

---

## 6.9 DKA and HHS as ICU problems

**The short version — all figures below are ADULT**
- ICU/HDU-level care (WACHS adult DKA guideline) for severe ketoacidosis, **K⁺ <3.5 mmol/L on admission**, AKI with low urine output, **GCS <12**, haemodynamic instability, failure to respond to treatment, pregnancy, **age 16–25 years**, or where hourly nursing is unavailable on the ward.
- Fluid first, then **fixed-rate IV insulin 0.1 units/kg/h (actual body weight)**. **Potassium rules decide everything** — max **40 mmol/L** peripherally, general max **10 mmol/h**, **20 mmol/h peripherally only via volumetric pump with continuous cardiac monitoring** and in DKA for a **maximum of 4 hours** (→ §3.7).
- Add glucose when BGL <14 mmol/L; **do not stop the insulin** — it is treating ketosis, not glucose.
- **Euglycaemic DKA** on SGLT2i is the modern trap.
- Cerebral oedema is predominantly **paediatric** → **Paediatrics**.

Diagnosis, precipitants, sick-day rules and outpatient management → **Endocrine**.

**Diagnosis (adult).** The Australian hospital template (**WACHS adult DKA guideline**) requires all three: glucose >11 mmol/L or known diabetes; **blood ketones ≥3.0 mmol/L**; venous **pH <7.35 or HCO₃⁻ <18 mmol/L**. The **2024 ADA/EASD/AACE/JBDS consensus** uses the same glucose and ketone limbs but a **lower acidosis cut-off — pH <7.3 (not <7.35), or HCO₃⁻ <18 mmol/L, or both** — and accepts urine ketones ≥2+ as an alternative to β-hydroxybutyrate ≥3.0 mmol/L; it makes **direct β-hydroxybutyrate measurement** preferred, demoting the anion gap. **They do not align on pH — name your source when you quote a number.**

**HHS (adult):** glucose ≥33.3 mmol/L, **effective osmolality >300 mOsm/kg** (or total >320), minimal ketosis (β-hydroxybutyrate <3.0), pH ≥7.3 and HCO₃⁻ ≥15. Effective osmolality = 2×Na⁺ + glucose (mmol/L) — urea excluded. Higher mortality than DKA; profound fluid deficit (often 8–10 L) and thrombosis risk. Mixed pictures are treated as DKA.

**Fluid (adult).** Shocked (SBP <90): 0.9% sodium chloride **500–1,000 mL over ~15 min**, repeat. Otherwise ~1,000 mL in the first hour then tapering (2024 consensus: 500–1,000 mL/h for 2–4 h); 250 mL aliquots if elderly, cardiac or renal. In **HHS** correct slowly — glucose fall ≤~5–6 mmol/L/h, sodium change ≤~10 mmol/L/24 h. ⚑ Saline is traditional and guideline-listed but causes hyperchloraemic acidosis prolonging the apparent acidosis; Australian units increasingly switch to a balanced crystalloid after resuscitation and the 2024 consensus permits either — genuinely unsettled.

**Insulin (adult).** DKA: **fixed-rate 0.1 units/kg/h** short-acting insulin by **actual body weight**; senior discussion above ~15 units/h. HHS: **0.05 units/kg/h**, or once fluid alone has stopped lowering glucose. **Continue the usual basal subcutaneous insulin** to prevent rebound ketosis. **Add 10% glucose when BGL <14 mmol/L** (~125 mL/h) and consider halving insulin to 0.05 units/kg/h; never stop insulin to correct hypoglycaemia while ketones are elevated. **Resolution (2024 consensus):** β-hydroxybutyrate **<0.6 mmol/L** **and** venous **pH ≥7.3 or HCO₃⁻ ≥18 mmol/L**; overlap subcutaneous rapid-acting insulin 30–60 min before stopping the infusion.

**Potassium (adult).** Total body K⁺ is depleted even when serum is normal or high, and insulin drops it fast.

| Serum K⁺ | Action |
|---|---|
| >5.5 mmol/L | **No potassium** in the fluid; recheck in 1–2 h |
| 3.5–5.5 mmol/L | Add potassium — Australian protocols typically use pre-mixed **40 mmol/L** bags |
| <3.5 mmol/L | ⚑ **WACHS (Australian)** requires senior medical review; the **2024 international consensus** is more prescriptive — **replace at ~10 mmol/h and withhold insulin until K⁺ >3.5 mmol/L**. Both defensible; name your source |

Hold K⁺ 4–5 mmol/L.

**IV potassium — the single rule (all figures ADULT). Stated identically in CC §3.7 and §6.9; read the two together.**
- **Maximum peripheral concentration 40 mmol/L** — anything more concentrated requires a **central venous catheter**.
- **General maximum peripheral rate 10 mmol/h.**
- **Up to 20 mmol/h may be given peripherally only if it runs through a volumetric infusion pump with continuous cardiac monitoring.** Queensland Health (adult electrolyte prescribing guideline v7.00, 2023) makes the **pump**, not central access, the requirement. The two contexts in which this is invoked are **severe hypokalaemia (K⁺ <2.5 mmol/L)** and **adult DKA**.
- ⚑ **In DKA the 20 mmol/h peripheral rate carries a hard 4-hour ceiling** (WACHS adult DKA guideline): if 20 mmol/h is still required beyond **4 hours**, insert a **central line and/or obtain HDU review**.
- Cardiac monitoring, frequent bloods and an infusion device are **mandatory** whenever the standard rate or concentration is exceeded.

**Bicarbonate** not indicated — consider only at pH <7.0 after senior discussion. **Phosphate** not routine; replace if <1.0 mmol/L with weakness or cardiorespiratory compromise.

⚑ **Cerebral oedema — population matters.** Predominantly **paediatric** (~0.3–1% of paediatric DKA episodes; leading cause of DKA death in children); adult cases rare. Paediatric risk associations (younger age, new-onset diabetes, severe acidosis, high urea, low pCO₂, bicarbonate, rapid osmolality shifts) and paediatric fluid/insulin regimens differ materially from the adult figures above — **do not transfer them** → **Paediatrics**. Warning signs: headache, recurrent vomiting, irritability, falling GCS, bradycardia with hypertension. Treat with hypertonic saline or mannitol; image *after* treating.

**Euglycaemic DKA and SGLT2 inhibitors.** ⚑ Australian source: the joint **ADS/ADEA/ANZCA/NZSSD Alert Update, May 2023** (supersedes the July 2022 version; the periprocedural and diagnostic advice is unchanged). Glycosuria means glucose may be normal while ketoacidosis proceeds — **a normal glucose does not exclude DKA**. **Presumptive euDKA:** ketones **>1.0 mmol/L** AND base excess **< −5 mmol/L** AND glucose **<14 mmol/L**. **Withhold SGLT2i for at least 3 days before an elective procedure** — the two days before plus the day of — and before bowel preparation. **Emergency surgery** on an SGLT2i: admit postoperatively somewhere able to manage DKA. **Management** is DKA management with the modification that **glucose must be infused alongside insulin from the outset (BGL <15 mmol/L)** so enough insulin can be given to shut off ketogenesis; ketonaemia may persist for days.

---

## 6.10 Hospital-acquired infection in the ICU

**The short version**
- The four to know: **VAP, CLABSI, CAUTI, *C. difficile*** — all bundle-preventable, and a bundle works only if every element is delivered every time.
- Australian governance: **ACSQHC Preventing and Controlling Infections Standard** (NSQHS 2nd ed.) and state agencies (CEC NSW, Safer Care Victoria, Qld Health, SA Health).
- ANZICS runs a national **CLABSI registry** — surveillance with unit-level feedback is itself part of the intervention.

**VAP.** Pneumonia >48 h after intubation; diagnosis imperfect — new infiltrate plus ≥2 of fever, leucocytosis, purulent secretions or worsening oxygenation, with a positive lower respiratory sample. Prevention bundle (Australian state guidance, e.g. SA Health): head-of-bed **30–45°**; structured oral care; daily sedation interruption and readiness-to-extubate assessment; subglottic secretion drainage if ventilation >48–72 h expected; cuff pressure ~**20–30 cmH₂O**. ⚑ **Routine chlorhexidine mouthwash has fallen out of favour** — pooled data raise a possible excess-mortality signal.

**CLABSI.** *Insertion:* hand hygiene, maximal sterile barrier precautions, **2% chlorhexidine in 70% alcohol** allowed to dry, ultrasound guidance, avoid femoral where practicable, documented checklist with any observer empowered to stop. *Maintenance:* daily review of need, sterile dressings, scrub the hub. Diagnosis uses paired peripheral and line cultures.

**CAUTI.** Insert only for a valid indication, aseptically, closed drainage with bag below bladder level, and **remove early — daily catheter review is the highest-yield intervention**. Do not treat asymptomatic bacteriuria.

***C. difficile*.** Driven by antimicrobial exposure, PPIs and prolonged stay. Prevention: stewardship (the dominant lever), **soap-and-water handwashing** (alcohol rub does not kill spores), contact precautions with single-room isolation, sporicidal cleaning. Test only unexplained diarrhoea; treat with oral vancomycin or fidaxomicin, not metronidazole (Therapeutic Guidelines). ⚑ Selective digestive decontamination is **not routine Australian practice**.

---

## 6.11 Transfer and handover of the critically ill

**The short version**
- Intra-hospital transport is high-risk — adverse events are common and mostly predictable.
- Australasian standard: joint **ACEM/ANZCA/CICM guideline IC-10 / PG52** (revised 2025).
- **Stabilise before you move** — a transfer is not a resuscitation venue; escort seniority and equipment match acuity, not destination.
- Structured **ISBAR** handover at every interface.

**Risks:** hypotension, arrhythmia, desaturation, ventilator disconnection, accidental extubation, line dislodgement, raised ICP, pumps running flat, oxygen exhaustion. Australian work (*Australian Critical Care*, 2019) showed a **transport checklist improves compliance with safety standards**.

**Pre-transport (adult ICU).** *Decide:* will the investigation change management? *Stabilise:* airway secured and position confirmed, transport ventilator settings checked before leaving, infusions consolidated with charged pumps. *Oxygen:* calculate cylinder contents against minute ventilation and duration, with a margin. *Equipment:* monitor with ECG, SpO₂, invasive BP and **mandatory capnography if intubated**; defibrillator; airway kit with spare tube; vasopressor, sedative, NMBA; suction. *Personnel:* a doctor with airway competence plus an ICU nurse. *Communication:* receiving area ready and a documented plan for deterioration en route.

**Inter-hospital transfer** adds state retrieval services (NSW Ambulance Aeromedical/Retrieval, Adult Retrieval Victoria, Retrieval Services Queensland) and altitude physiology — drain a pneumothorax before flying.

**Handover — ISBAR**, the ACSQHC-endorsed structure. ICU-to-ward handover is where prophylaxis is dropped, deprescribing forgotten and escalation limits lost. Hand over explicitly: active issues; lines/drains and when they come out; antimicrobial stop dates; sedation weaning; **which ICU-started medicines are to be stopped** (PPI, antipsychotic, insulin infusion); nutrition and mobility plans; escalation plan and treatment limitations.

---

## 6.12 ICU ethics and end-of-life care

**The short version**
- Most ICU deaths follow a decision to withhold or withdraw life-sustaining treatment, not a failed resuscitation (**ANZICS Statement on Care and Decision-Making at the End of Life for the Critically Ill, 2014**).
- Death may be determined by **circulatory** or **neurological** criteria (**ANZICS Statement on Death and Organ Donation, Ed. 4.1, 2021**); organ donation is raised **after**, and separately from, the end-of-life decision, via **DonateLife**.

ACP, capacity and the state legal frameworks → **Geriatrics §5**.

**Treatment limitation.** Withholding and withdrawing are ethically and legally equivalent in Australian practice. A **time-limited trial with explicit review criteria** often beats a binary decision at admission. ⚑ **"Futile" has largely been replaced in Australian policy by "non-beneficial" or "potentially inappropriate"** — futility conflates a physiological judgement (this cannot achieve its effect) with a value judgement (the achievable outcome is not worth having). Consent is not required to withhold treatment that is not clinically indicated, but process matters: senior clinician decision, second consultant opinion, documented reasoning, communication with the substitute decision-maker. Record limitations in the state resuscitation plan so they transfer with the patient.

**Family conference.** Right people (substitute decision-maker, key family, consultant, bedside nurse, interpreter), private space, pre-meeting to agree the message. Ask what they understand; use plain words ("dying"); distinguish **substituted judgement** from what the family wants; **make a recommendation**, not a menu. Ask about cultural, religious and **Aboriginal and Torres Strait Islander** considerations — family presence, Sorry Business, returning to Country.

**Withdrawal and palliation.** Stop what no longer serves the goal (vasopressors, RRT, antibiotics, bloods, alarms) and escalate comfort measures. **Doctrine of double effect:** drugs given proportionately to relieve distress are lawful even if they may hasten death; drugs given primarily to cause death are not, and are legally distinct from **voluntary assisted dying** under separate state legislation.

**Determination of death (ANZICS *Statement on Death and Organ Donation*, Edition 4.1, 2021 — the current edition).**
- **Neurological criteria — preconditions:** established acute brain pathology consistent with irreversible loss of all brain function; **temperature ≥35 °C**; **SBP ≥90 mmHg or MAP ≥60 mmHg**; no significant sedative or NMBA effect; correction of severe metabolic derangement (Na⁺ outside ~125–160 mmol/L, glucose outside ~3–25 mmol/L, Mg²⁺ or PO₄³⁻ <0.5 mmol/L, urea >40 mmol/L); testable eyes, ears and cranial nerves.
- **Observation (adult, and children >30 days):** minimum **4 h** of unresponsive coma with absent brainstem reflexes before clinical testing; **24 h** after hypoxic-ischaemic injury or rewarming from hypothermia. **Examiners: two medical practitioners** independent of the transplant team (at least one a specialist; jurisdictional requirements vary).
- **Tests:** absent pupillary light, corneal, supraorbital pain, vestibulo-ocular (cold caloric), gag and cough reflexes, plus **apnoea testing** — no respiratory effort at **PaCO₂ >60 mmHg (~8 kPa) with arterial pH <7.30**.
- **Ancillary testing** (four-vessel or CT angiography, radionuclide perfusion) when clinical examination cannot be completed — heavy sedation, severe facial trauma, high cervical cord injury, chronic CO₂ retention.
- **Paediatrics (ANZICS) — these age rules are PAEDIATRIC ONLY and must never be applied to an adult:** clinical determination of death by neurological criteria **cannot be made with certainty in any infant born before 37 weeks** post-conceptual age, and **is not possible in the first 24 hours of life** in a term newborn. From **24 hours to 30 days of age**, a **24-hour observation period is required before the first clinical examination and a further 24-hour interval before the second**. **Beyond 30 days the criteria are the same as in adults.** Brain perfusion studies assist where preconditions cannot be met → **Paediatrics**.
- **Circulatory criteria (DCD):** after planned withdrawal, death is determined following **5 minutes** of observed absent circulation (loss of arterial line pulsatility or asystole), then clinical confirmation.

**Donation pathways.** Consent via the **Australian Organ Donor Register**, in practice always with family agreement; the request is **decoupled** in time from the end-of-life decision and made by a trained requester supported by state **DonateLife** agencies. DBD generally yields more organs than DCD. Donor management after death determination (haemodynamic support, hormone replacement, lung-protective ventilation) is legitimate and aimed at organ viability. Coronial cases need the coroner's consent; tissue donation is possible in a much wider group.

---

## Rapid-Recall Discriminators

| Cue | Answer |
|---|---|
| Creatinine 80 → 190 µmol/L with urine output 0.3 mL/kg/h for 8 h | **KDIGO stage 2 AKI** — 2.375× baseline is stage 2, urine output is stage 1; stage by the worse criterion |
| KDIGO urine output criterion for stage 3 AKI | <0.3 mL/kg/h for **≥24 h**, or anuria **≥12 h** — exactly 0.3 does not qualify |
| The eGFR <35 mL/min/1.73 m² limb of KDIGO stage 3 | **Patients under 18 years only** |
| Trial showing early RRT gives no survival benefit and more dialysis dependence | **STARRT-AKI** (2020) — mortality 43.9% vs 43.7%; RRT dependence 10.4% vs 6.0% |
| Confused and seizing during a first-ever dialysis session with very high urea | **Dialysis disequilibrium** — short low-blood-flow first run. (Rising anion gap acidosis on CRRT with total:ionised Ca ≥2.5 is **citrate accumulation** instead) |
| Day 4 of high-dose propofol: acidosis, CK 40,000, K⁺ 6.5, new bradyarrhythmia | **Propofol infusion syndrome** — stop propofol, supportive care, RRT, pacing or ECMO |
| Propofol contraindication stated explicitly in the Australian PI | **ICU sedation and conscious sedation in patients aged 16 years or younger** |
| Trials showing antipsychotics do not shorten ICU delirium | **MIND-USA** (2018) and **AID-ICU** (2022) — both negative on their primary outcomes (AID-ICU's lower 90-day mortality was a secondary outcome only); the **ABCDEF bundle** is what works |
| Cannot lift limbs on day 10 of ventilation; symmetrical flaccid limb weakness, face relatively spared, reflexes reduced | **ICU-acquired weakness** — MRC sum score **<48/60** in a cooperative patient; **sensation is impaired in critical illness polyneuropathy and preserved in pure critical illness myopathy**, so it does not discriminate; **TEAM** (2022) showed intensified mobilisation adds no benefit and more adverse events |
| Phosphate <0.65 mmol/L **with a fall of >0.16 mmol/L** within 72 h of starting feed in a starved ICU patient | **Refeeding syndrome** (Doig trial definition) — restrict to **20 kcal/h** (Doig, ANZ 2015), replace electrolytes, give thiamine |
| Glucose target range that increased mortality in critically ill adults | **4.5–6.0 mmol/L** (NICE-SUGAR) — 27.5% vs 24.9% against a ≤10.0 mmol/L target |
| Trial showing pantoprazole cuts upper GI bleeding without a mortality benefit | **REVISE** (2024) — 1.0% vs 3.5%, HR 0.30 |
| Adult DKA with serum K⁺ 3.2 mmol/L on arrival | Replace K⁺ and **withhold insulin until K⁺ >3.5 mmol/L** (2024 consensus); WACHS requires senior review |
| On dapagliflozin, post-op, BGL 9 mmol/L, ketones 4 mmol/L, base excess −12 | **Euglycaemic DKA** — insulin **with concurrent glucose**; withhold SGLT2i ≥3 days pre-procedure |
| Doctors, observation and apnoea endpoint for brain death in Australia (**adult**) | **Two** practitioners; **4 h** unresponsive coma; **PaCO₂ >60 mmHg with pH <7.30**. Paediatric differs: no determination before 24 h of age, never below 37 weeks, and 24 h + a further 24 h from 24 h to 30 days |
| Observation before death is determined by circulatory criteria for DCD | **5 minutes** of absent circulation |

---

**Sources**

- KDIGO AKI Work Group, *KDIGO CPG for Acute Kidney Injury* (2012) — international standard adopted in Australia, still the published version; the 2026 AKI/AKD revision reached public review in March 2026 but was not yet published. RANZCR *Iodinated Contrast Media Guideline* v2.3.
- Trials: STARRT-AKI (NEJM 2020); RICH (JAMA 2020); PRESERVE (NEJM 2018); AMACING (Lancet 2017); MIND-USA (NEJM 2018); AID-ICU (NEJM 2022); BRAIN-ICU (NEJM 2013); REVISE (NEJM 2024). Australian/New Zealand-led: RENAL (NEJM 2009), SPICE III (NEJM 2019), DahLIA (JAMA 2016), TEAM (NEJM 2022), TARGET (NEJM 2018), Doig refeeding trial (Lancet Respir Med 2015), NICE-SUGAR (NEJM 2009), PEPTIC (JAMA 2020).
- TGA-approved Australian PI for propofol (wording per Propofol Sandoz) — adult ICU sedation capped at 4 mg/kg/h and the ≤16 years contraindication; Diprivan Data Sheet, Medsafe NZ (NZ wording differs); WA Health / Perth Children's Hospital *PropOFol* monograph (paediatric); TGA SGLT2i safety advisory.
- ACSQHC *VTE Prevention Clinical Care Standard* (2020) and *Preventing and Controlling Infections Standard*, NSQHS 2nd ed.; SA Health VAP principles; ANZICS CLABSI Registry.
- WACHS *Adult Diabetic Ketoacidosis Guideline*; ADA/EASD/AACE/JBDS *Hyperglycemic Crises in Adults* consensus (2024); ADS/ADEA/ANZCA/NZSSD *Alert Update May 2023: Periprocedural DKA with SGLT2 Inhibitor Use* (supersedes July 2022). Queensland Health *Prescribing Guidelines for HYPO-Electrolyte Disturbances in Adults* v7.00 (2023).
- ACEM/ANZCA/CICM *IC-10 / PG52 Transport of critically ill patients* (2025); ANZICS *Statement on Care and Decision-Making at the End of Life for the Critically Ill* (2014) and *Statement on Death and Organ Donation* Ed. 4.1 (2021, current edition); DonateLife. PADIS guidelines (Crit Care Med 2018, SCCM focused update 2025); Therapeutic Guidelines and Australian Medicines Handbook, current editions; *Australian Prescriber*.
