# Critical Care — Master Notes

*Final-year Australian medical finals (written paper, 14 September 2026). Built through the v2 finals notes pipeline: standard spine, every section sourced and ending in a Rapid-Recall Discriminators table, thresholds cross-checked against two independent sources, ⚑ marking anything changed from older textbooks or where Australian practice diverges. Australian sources throughout — ANZCOR, ANZICS, ACEM, ACSQHC, the National Blood Authority and Lifeblood, THANZ, TSANZ, COPD-X and Lung Foundation Australia, the Australian Asthma Handbook, the Australian Sepsis Network and NSW CEC, KDIGO (international, and labelled as such), the Australian and New Zealand paracetamol consensus guidelines, Austin Health Clinical Toxicology, the Poisons Information Centres, CSL Seqirus antivenom product information, Therapeutic Guidelines and the AMH — with international guidance used only where Australian guidance is silent, and always named as international.*

*Deliberately cross-referenced rather than duplicated: trauma primary survey, burns, GCS and head injury live in **Surgery §5**; anaphylaxis in **Immunology & Allergy** and **Paediatrics §3**; paediatric ALS and paediatric DKA in **Paediatrics §3**; delirium in **Geriatrics §1**; ACS, stroke, asthma and COPD chronic management in **Cardiology**, **Neurology** and **Respiratory**; serotonin toxicity and NMS in **Psychiatry §7.2**.*

*Independently verified 17 August 2026 by five adversarial reviewers instructed to find errors rather than confirm the work; 86 corrections applied, and nine cross-section contradictions adjudicated against a source — seven confirmed and fixed, two rejected as false findings. The build also caught a superseded fact in six other systems: Prothrombinex-VF (3-factor) was replaced by Beriplex (4-factor) in June 2024 and FFP is no longer required for warfarin reversal. See `docs/critical-care-verification.md`.*

*Written originally; no guideline flowcharts, algorithm text or scoring-tool item text reproduced, because this repository is public.*

---



---

# Critical Care Notes — Section 1: Recognition of the Critically Ill, Resuscitation and Post-Arrest Care
*Sources: ANZCOR Guidelines 11.2 (Jun 2024), 11.4 (Jul 2025), 11.5 (Apr 2025), 11.6 (Apr 2025), 11.6.1 (Feb 2026), 11.7 (Sep 2024), 11.8 (Jun 2024), 11.9, 11.10 (Jul 2026), Guidance Statement 10.5.3; ANZCA PG61(A) 2017; NSW Health/CEC Between the Flags; ACSQHC NSQHS Standard 8 (2nd ed); ERC/Resuscitation Council UK 2025 and RCP NEWS2 2017 labelled international. Scope: adult ward deterioration, ABCDE, airway and RSI, ANZCOR adult ALS, post-ROSC care, special-circumstance arrests.*

All doses, energies and thresholds below are **adult** unless stated. **Paediatric ALS — paediatric adrenaline dosing, J/kg energies, the paediatric algorithm — is Paediatrics §3 and is deliberately not restated.** Trauma primary survey, haemorrhagic shock, burns, GCS and head injury: **Surgery §5**. Anaphylaxis: **Immunology & Allergy**, **Paediatrics §3**. Tension pneumothorax technique: **Surgery §5**, **Respiratory**. Shock and vasopressors **§3**, sepsis **§4**, ventilation **§5**, poisoning **§7**.

---

## 1.1 The deteriorating ward patient and track-and-trigger systems

**The short version**
- Almost all in-hospital arrests follow hours of abnormal, documented, unacted-upon observations. The failure is escalation, not detection.
- NSW runs **Between the Flags (BTF)** — a two-tier, single-parameter track-and-trigger system on colour-coded standard observation charts. **Yellow Zone → Clinical Review** (admitting team, within 30 min). **Red Zone → Rapid Response** (MET/Code Blue).
- BTF is **single-parameter**: one criterion triggers, no aggregate needed. NEWS2 (UK, international) is **aggregate-weighted**, 0–20.
- ACSQHC NSQHS **Standard 8 — Recognising and Responding to Acute Deterioration** (2nd ed) makes this mandatory nationally and covers **mental state** and **end-of-life** deterioration, not just physiological.
- Mandatory override in every system: **staff, patient or family concern alone is a trigger**, irrespective of numbers.

**BTF — the five elements.** Governance (state/district/facility/unit); calling criteria embedded in standard observation charts; the Clinical Emergency Response System (CERS); education; evaluation via KPIs and data. Exam-relevant point: the charts *are* the trigger tool.

**Adult BTF calling criteria (NSW standard adult observation chart).**

| Parameter | Yellow Zone (Clinical Review) | Red Zone (Rapid Response) |
| --- | --- | --- |
| RR | 6–10 or 25–30 | ≤5 or ≥30 |
| SpO₂ | 91–95% | ≤90% |
| Systolic BP | 90–100 or 180–200 | ≤90 or ≥200 |
| HR | 40–50 or 120–140 | ≤40 or ≥140 |
| Temperature | ≤35.5 or ≥38.5 °C | — (temp is a yellow criterion) |
| Consciousness | responds to **voice**, or new confusion/behaviour change | responds to **pain** or unresponsive; new stroke symptoms |
| Urine output | low output **persistent for 4 h**: <100 mL over 4 h, or <0.5 mL/kg/h via IDC | low output **persistent for 8 h**: <200 mL over 8 h, or <0.5 mL/kg/h via IDC |
| BGL | ≤4 or ≥20 mmol/L | ≤4 or ≥20 mmol/L **with** reduced LOC |
| Other | new/uncontrolled pain; staff or family concern | serious concern; sudden acute deterioration |

Response timing: Clinical Review requires the admitting team **within 30 min**; two or more yellow criteria, or a yellow that does not resolve, escalates to registrar review. Red Zone mandates Rapid Response attendance essentially immediately. **Code Blue** is reserved for arrest, airway obstruction, unresponsiveness, seizure, critical bleeding.

**NEWS2 (international — RCP UK, 2017).** Six parameters scored 0–3 (RR, SpO₂, systolic BP, pulse, ACVPU, temperature) plus **+2 for any supplemental oxygen**; aggregate max 20. Thresholds: **1–4** low (registered nurse assessment); **3 in any single parameter** triggers urgent clinician review even if the aggregate is low; **5–6** medium/"key threshold" — urgent doctor review, consider critical care; **≥7** high, emergency critical care outreach. ⚑ NEWS2's chief innovation over NEWS is **SpO₂ Scale 2** for *confirmed* hypercapnic respiratory failure with a prescribed 88–92% target — Scale 1 would reward hyperoxia. Using Scale 2 must be a documented clinician decision.

**Limits of track-and-trigger — the discussion-mark answer.** Single-parameter systems (BTF) are sensitive but drive high trigger volumes and alarm fatigue; aggregate systems (NEWS2) are more specific but can miss one catastrophically abnormal parameter among five normal ones — hence the single-parameter-3 rule. Neither is validated in **children** or **pregnancy** (separate maternal and paediatric charts exist for this reason), and both are unreliable in **spinal cord injury** with autonomic disruption. Both depend on observations being taken at the prescribed frequency and on the *afferent limb* — the call being made. NSW evaluations (Bhonagiri et al., *Intern Med J* 2021) found an association with **reduced in-hospital cardiac arrest rates**; a clear all-cause mortality benefit has been harder to show.

---

## 1.2 ABCDE as a written-paper framework

**The short version**
- ABCDE is sequential and **resuscitative**: do not move on until the current letter is addressed. Say what you would *do*, not what you would *look for*.
- The examiner is testing whether you fix the killer before you diagnose — "high-flow O₂ and open the airway" precedes "order a CT".
- Reassess after every intervention; after any deterioration, go back to A.
- D includes **glucose** — missed hypoglycaemia is a classic written-paper trap.
- E is exposure, temperature, rash, back, calves; then the tail — fluids/catheter, full bloods/ABG, history/notes/charts. **NSW ACI ECAT and the CEC deteriorating-patient material run this as an A–G assessment ending in glucose**; use "A–G" so it matches CC §2.9, and do not attribute a lettered mnemonic to Between the Flags itself, which is a charting and escalation system, not an assessment mnemonic.

**A — Airway.** Talking normally = patent airway with adequate ventilation and brain perfusion, and is the most efficient screening test there is. Stridor, snoring (soft-tissue obstruction), gurgling (secretions/blood), see-saw movement and tracheal tug indicate obstruction. Intervene: head tilt–chin lift (jaw thrust if C-spine concern), suction, OPA/NPA, then SGA or intubation. **All critically ill patients get high-concentration oxygen initially** — titration comes after stabilisation.

**B — Breathing.** RR (the most sensitive and most often unrecorded vital sign), SpO₂, chest movement symmetry, percussion, auscultation, tracheal position, ABG. Immediately life-threatening: tension pneumothorax, massive haemothorax, severe bronchospasm, APO, massive PE. Tension pneumothorax is a clinical diagnosis treated before imaging — **Surgery §5**.

**C — Circulation.** HR, BP, capillary refill, peripheral mottling, JVP, urine output, lactate. Two large-bore cannulae, bloods including cross-match, VBG, fluid challenge, reassess; stop external haemorrhage. Shock classification and vasopressors are **§3**.

**D — Disability.** AVPU or GCS, pupils, lateralising signs, **BGL**, temperature, drug chart for opioids/sedatives (naloxone if indicated — **§7**). Consider raised ICP, seizure, stroke, meningitis, metabolic encephalopathy.

**E — Exposure.** Full exposure while preventing hypothermia; rash, purpura, wounds, surgical sites, drains, calves, back, perineum. Then the tail: fluid balance and catheter, full bloods, and the notes/charts — the *documented* trend is usually where the diagnosis is.

---

## 1.3 Airway assessment, adjuncts and the difficult airway

**The short version**
- Predicting difficulty: **MOANS** (BMV), **LEMON** (laryngoscopy), **RODS** (SGA), **SMART** (front-of-neck access). Written papers usually want LEMON.
- Adjuncts do not replace manoeuvres: an OPA/NPA still needs head tilt/jaw support (ANZCOR 11.6, Apr 2025).
- In cardiac arrest, **BMV is an acceptable strategy** — ANZCOR does not mandate intubation.
- CICO = failure of oxygenation despite all three supraglottic rescue pathways. ANZCA PG61(A) (2017) sets attempt limits and mandates a pre-declared **front-of-neck access** plan.
- ⚑ Waveform capnography is the standard for tube confirmation and continuous monitoring — ANZCOR 11.6 recommends it in addition to clinical assessment.

**Predicting the difficult airway.** LEMON: **L**ook externally (facial trauma, beard, obesity, large tongue, small mandible); **E**valuate 3-3-2 (mouth opening, hyoid–mentum, thyroid–hyoid); **M**allampati; **O**bstruction (stridor, epiglottitis, neck haematoma, angio-oedema, radiotherapy fibrosis); **N**eck mobility (rheumatoid, ankylosing spondylitis, collar). Difficult BMV (MOANS): mask seal problems, obesity/obstruction, age >55, no teeth, stiff lungs. Where BMV *and* laryngoscopy *and* SGA all look difficult, consider an awake technique rather than RSI.

**Adjuncts.** OPA sized incisor-to-angle of mandible; contraindicated with an intact gag reflex. NPA sized nostril–tragus; ANZCOR 11.6 prefers the **oral** airway in basal skull fracture. Second-generation SGAs (gastric drain port) are the default rescue device; bougie, videolaryngoscope and two-person two-handed BMV are the standard optimisation steps.

**Airway in cardiac arrest (ANZCOR 11.6, Apr 2025).** ANZCOR suggests **either BMV or an advanced airway strategy** during adult CPR in any setting — no high-certainty evidence favours advanced airways. Where intubation success rates are low, an **SGA is suggested** for OHCA; where high, either is acceptable for OHCA or IHCA. Once an advanced airway is in, **ventilate 6–10 breaths/min without pausing compressions**. ANZCOR suggests **against routine mechanical chest compression devices**, reserving them for where sustained manual compressions are impractical or unsafe.

**CICO — can't intubate, can't oxygenate (ANZCA PG61(A), 2017).** Failure to deliver oxygen despite all reasonable rescue manoeuvres, with falling or persistently low saturations. The three **supraglottic rescue** pathways are BMV, SGA and tracheal intubation, with attempt limits — **up to three optimised intubation attempts**, up to two SGA attempts with a different size/type, BMV with optimising manoeuvres. Call for help after one pathway fails substantially; **prepare for front-of-neck access after two fail**; declare CICO and perform **infraglottic rescue** after all three fail, by **scalpel–bougie–tube** or needle/cannula cricothyroidotomy. The Australian-origin **Vortex approach** (Chrimes) is the widely taught cognitive aid for the same three-lifeline structure; PG61(A) does not name it but aligns. The examinable principle: CICO is a **declaration**, and declaring it late causes hypoxic brain injury.

---

## 1.4 Rapid sequence intubation

**The short version**
- RSI = pre-oxygenation, then near-simultaneous induction agent + rapid-onset neuromuscular blocker, no intervening BMV, to minimise the aspiration window in a non-fasted patient.
- Anyone critically ill is a full stomach: obstructed bowel, GI bleed, trauma, pregnancy, reduced GCS, sepsis, obesity, reflux.
- ⚑ **Cricoid pressure is no longer routine** in Australian pre-hospital/retrieval and much ED/ICU practice. IRIS (JAMA Surg 2019, n=3472) failed to show non-inferiority of a sham but found cricoid worsened the laryngoscopic view and lengthened intubation; GSA-HEMS does not use it, preferring external laryngeal manipulation. It persists in parts of elective obstetric anaesthesia — practice varies, so say so.
- Reduce the induction dose and expect post-induction hypotension in shock; the paralytic dose is **not** reduced.
- Plan A/B/C/D stated aloud before drugs are given, FONA equipment out.

**Preparation — the seven Ps.** Preparation, pre-oxygenation, pre-treatment/optimisation, paralysis with induction, positioning, placement with proof, post-intubation care. Pre-oxygenate for 3 min of tidal breathing on a sealed circuit, or high-flow nasal oxygen; head-up 20–30° or ramped in obesity; **apnoeic oxygenation** via nasal prongs left running through the apnoeic period. Resuscitate before you intubate: fluid, and a vasopressor drawn up ready — **§3**.

**Drugs (adult).** Doses are weight-based and reduced substantially in shock. Representative Australian retrieval practice (GSA-HEMS Prehospital Emergency Anaesthesia Manual v3.0, Nov 2017):

| Drug | Adult dose | Notes |
| --- | --- | --- |
| Ketamine | 1.5–2 mg/kg IV; **0.5–1 mg/kg if hypovolaemic** | Induction agent of choice in shock; bronchodilator |
| Fentanyl | 50–100 mcg loading, then boluses/infusion | Blunts sympathetic response; adds to hypotension |
| Propofol | Reduce markedly in shock | Reliable amnesia; most hypotensive |
| Thiopentone | Alternative in the hypertensive/raised-ICP patient | |
| Midazolam | 2 mg boluses / infusion for maintenance | Poor sole induction agent |
| Rocuronium | 1.2 mg/kg; retrieval services use up to **2 mg/kg** | Onset ~45–60 s, duration ~45–60 min; sugammadex reverses |
| Suxamethonium | 1.5 mg/kg | Fastest onset/offset; **avoid** in hyperkalaemia, burns >24–48 h, denervation/prolonged immobility, crush injury, MH history |

Post-intubation: confirm with **waveform capnography** (sustained trace over ≥6 breaths — chest rise and auscultation alone are insufficient), secure the tube, CXR for depth, start sedation ± analgesia promptly (a paralysed, awake patient is a preventable harm), set lung-protective ventilation (**§5**), and anticipate hypotension from loss of sympathetic drive plus positive intrathoracic pressure.

**Who gets RSI.** Failure to maintain or protect the airway; failure of oxygenation or ventilation; anticipated clinical course (airway burns, expanding neck haematoma, transfer of an unstable patient); and to facilitate humane, safe management (agitated head injury, status epilepticus). "GCS ≤8 = intubate" is a rule of thumb, not a rule — the question is trajectory and airway protection, and reversible causes (opioid, hypoglycaemia, postictal state) should be excluded first.

---

## 1.5 ANZCOR adult ALS — the algorithm

**The short version**
- Start CPR 30:2, attach defibrillator/monitor, then divide by rhythm: **shockable (VF/pulseless VT)** vs **non-shockable (asystole/PEA)**.
- Loops are **2 minutes**; rhythm check every 2 min, compressions resume immediately after every shock without a pulse check. **Single-shock strategy** — no stacked shocks.
- ⚑ **Adult** biphasic energy: ANZCOR sets the **default at 200 J for all shocks**, escalating to maximum available if the first fails. Monophasic **360 J for all shocks**. ⚑ ERC/RCUK 2025 (international) says **at least 150 J** for the first biphasic shock (130–150 J pulsed biphasic).
- Compressions: lower half of sternum, depth **at least 5 cm**, rate **100–120/min**, full recoil, minimal interruption.

**The shockable arm.** CPR → charge during compressions → clear → **single shock at 200 J biphasic** → resume compressions immediately for 2 min without pulse check → rhythm check. Still VF/pVT: second shock, resume CPR, and **after the second shock give adrenaline 1 mg IV/IO** (§1.6). Third shock, resume CPR, and **directly after the third shock give amiodarone 300 mg IV/IO**. Thereafter alternate shock–CPR–rhythm check, with **adrenaline 1 mg every second loop** (~every 4 min) and a further amiodarone 150 mg considered after the fifth defibrillation attempt.

**The non-shockable arm.** CPR 2 min, **adrenaline 1 mg as soon as feasible**, then **every second loop**; rhythm check every 2 min. If the rhythm becomes shockable, cross over. PEA demands an active hunt for a reversible cause — the algorithm is largely a scaffold for the 4 Hs and 4 Ts (§1.7).

**Worked answers to the classic stems.**
- *"A patient is in VF. Per ANZCOR, when should 1 mg adrenaline be given?"* → **After the second shock**, then after every second loop. ⚑ The highest-yield Australian/international divergence in this section: **ANZCOR (11.2 Jun 2024, 11.5 Apr 2025) gives adrenaline after the *second* shock in shockable rhythms; ERC and Resuscitation Council UK 2025 give 1 mg after the *third* shock.** Both give it as soon as possible in non-shockable rhythms. Australian stem → "after the second shock"; explicitly ERC/UK → "after the third".
- *"The same patient remains in VF after a third shock — what antiarrhythmic and at what dose?"* → **Amiodarone 300 mg IV/IO bolus**, directly after the third shock; a further **150 mg** may be considered after the fifth defibrillation attempt. If amiodarone is unavailable, **lignocaine 1 mg/kg**, then 0.5 mg/kg after the fifth attempt. ANZCOR and ERC agree on 300 mg after three shocks and 150 mg after five; only the lignocaine figures differ (ERC/RCUK 2025 use fixed 100 mg then 50 mg — international).
- *"A shock is delivered after 2 minutes of CPR for VT."* → Two points. **Pulseless** VT is a shockable arrest rhythm treated with an **unsynchronised** shock at 200 J biphasic, whereas VT **with a pulse** and adverse features gets **synchronised cardioversion** (ANZCOR 11.9) — read the stem for a pulse. And the timing reflects the **2-minute loop**: compressions run a full 2 min between rhythm checks, the shock is delivered at the rhythm check, and compressions resume immediately — no pulse check until the next rhythm check unless there are other signs of ROSC.

**Defibrillation practice (ANZCOR 11.4, Jul 2025).** Standard anterolateral pads — below the right clavicle and in the left mid-axillary line; anteroposterior is an alternative. Keep pads **≥8 cm from an implanted pacemaker or ICD generator**. Charge during compressions, pause a couple of seconds at most, resume compressions immediately; oxygen away from the field. Precordial thump is now a narrow-indication manoeuvre (ANZCOR 11.3) — witnessed, monitored VF/pVT with no defibrillator immediately to hand — and never delays defibrillation.

---

## 1.6 Drugs in adult cardiac arrest (ANZCOR 11.5, Apr 2025)

**The short version**
- **Adrenaline 1 mg IV/IO**. Non-shockable: as soon as feasible, then every second loop. Shockable: **after the second shock**, then every second loop.
- **Amiodarone 300 mg** after the third shock; **150 mg** may be considered after the fifth. Lignocaine 1 mg/kg then 0.5 mg/kg is the alternative.
- ANZCOR suggests **against vasopressin**, alone or added to adrenaline; no routine calcium, bicarbonate or magnesium.
- **IV access is preferred**; IO is reasonable if IV cannot be achieved **within two attempts**.

| Drug | Adult dose | Indication |
| --- | --- | --- |
| Adrenaline | 1 mg IV/IO | All arrests; timing as above |
| Amiodarone | 300 mg, then 150 mg after 5th shock | Shock-refractory VF/pVT |
| Lignocaine | 1 mg/kg, then 0.5 mg/kg after 5th shock | Alternative if amiodarone unavailable |
| Magnesium | Not routine | Torsades de pointes, digoxin toxicity, documented hypo-K⁺/hypo-Mg²⁺ |
| Calcium chloride 10% | 10 mL IV (≈ 30 mL calcium gluconate 10%) | Hyperkalaemia, hypocalcaemia, CCB overdose |
| Sodium bicarbonate | **Cardiac-arrest dose (ANZCOR 11.5): 1 mmol/kg IV over 2–3 min**, then guided by ABG; not routine. ⚑ **Arrest context only** — the *toxicological* dose for sodium-channel blockade is different (ANZCOR 11.10, below) | Hyperkalaemia, TCA overdose, severe metabolic acidosis, prolonged arrest >15 min |
| Fibrinolytic | Not routine | Consider when **PE** is the suspected cause |

⚑ **Two different bicarbonate doses — do not merge them.** In **cardiac arrest** (ANZCOR 11.5, Apr 2025) it is **1 mmol/kg IV over 2–3 min**, then guided by ABG. In **sodium-channel-blocker/TCA toxicity in a patient with a pulse** (ANZCOR 11.10, Jul 2026) it is **8.4% 1–2 mL/kg (1–2 mmol/kg) up to 100 mL per bolus, every 3–5 min, titrated to QRS narrowing, aiming pH 7.45–7.55, to a maximum total of 6 mL/kg (6 mmol/kg)** — beyond that, hyperventilate rather than give more bicarbonate (→ §1.12, CC §7.7). Both figures are correct in their own setting; quote the ceiling with the dose.

Do not mix calcium chloride and sodium bicarbonate in the same line (precipitation). Fibrinolysis for suspected PE commits you to prolonged CPR (§1.12).

---

## 1.7 The 4 Hs and 4 Ts

**The short version**
- **Hs**: hypoxaemia, hypovolaemia, hyper/hypokalaemia and metabolic disorders, hypo/hyperthermia.
- **Ts**: tension pneumothorax, tamponade, toxins/poisons/drugs, thrombosis (pulmonary or coronary).
- PEA and asystole are where the list earns its keep — the algorithm alone will not restart the heart. Each cause has a specific action, not just a label; say the action.
- POCUS during the rhythm-check pause identifies tamponade, RV strain, pneumothorax and cardiac standstill without prolonging the pause.

| Cause | Clue | Action |
| --- | --- | --- |
| Hypoxaemia | Asphyxia, drowning, obstructed airway | Secure airway, 100% O₂, confirm tube |
| Hypovolaemia | Trauma, GI bleed, ruptured AAA, ectopic, sepsis | Volume, blood, stop the bleeding (**Surgery §5**) |
| Hyperkalaemia | Renal failure, missed dialysis, crush, peaked T waves | Calcium, insulin–glucose, dialysis (§1.12) |
| Hypothermia | Exposure, immersion, elderly found on floor | Modified algorithm, rewarming, ECMO (§1.12) |
| Tension pneumothorax | Ventilated, trauma, COPD, rising airway pressure | Immediate decompression then chest drain (**Surgery §5**) |
| Tamponade | Post-cardiac surgery, penetrating trauma, malignancy, uraemia | Pericardiocentesis or resuscitative thoracotomy |
| Toxins | Overdose, bradycardia, wide QRS, drug chart | Specific antidote (**§7**); lipid emulsion for LAST |
| Thrombosis | Sudden collapse, pleuritic pain, RV strain, ACS symptoms | Fibrinolysis for PE; PCI post-ROSC for coronary |

---

## 1.8 CPR quality, monitoring, and when to stop

**The short version**
- Quality metrics: depth ≥5 cm, rate 100–120/min, full recoil, ≤10 s interruptions, 6–10 ventilations/min once an advanced airway is in, rotate compressor every 2 min.
- Waveform capnography is the best real-time feedback: a sudden **rise** in ETCO₂ suggests ROSC; a persistently very low value suggests poor compressions or a hopeless prognosis.
- ⚑ ANZCOR 11.6 (Apr 2025) advises **against an ETCO₂ cut-off alone** as a mortality predictor or trigger to stop.
- Stopping is a judgement about futility, informed by validated **termination of resuscitation (TOR)** rules out of hospital, downtime, rhythm and reversible causes. Advance care directives and resuscitation plans should be sought and honoured.

**Feedback.** Keep the chest compression fraction high — pre-charge the defibrillator during compressions, next compressor's hands hovering. Arterial line diastolic pressure, if already in situ, beats ETCO₂ as a haemodynamic target in an ICU arrest.

**Withholding and ceasing (ANZCOR Guidance Statement 10.5.3).** ANZCOR recommends **prospectively validated TOR rules** out of hospital. The **BLS TOR rule** predicts futility when *all three* of: no ROSC, no shockable rhythm / no shock delivered, and the arrest not witnessed by emergency services. **"No bystander CPR" is not a BLS TOR criterion — it belongs to the four-item ALS TOR rule** (arrest unwitnessed by bystander or EMS, no bystander CPR, no ROSC before transport, no defibrillation before transport). Do not import it into the BLS rule. Clinicians are not obliged to provide futile or non-beneficial treatment; only Queensland and South Australia have explicit statutory provisions for withholding in acute emergencies where continuation would be inconsistent with good medical practice. A DNAR/NFR order **must not be made without appropriate consultation** with the patient or substitute decision-maker, and **Advance Care Directives and Acute Resuscitation Plans are preferable** to institution-specific DNAR orders — they reflect prior informed decisions and travel with the patient. In hospital, reasonable grounds to stop include asystole persisting despite ≥20 min of high-quality ALS with reversible causes excluded or treated. Extend resuscitation markedly in hypothermia, drowning, toxicological arrest, LAST, PE given fibrinolysis, and pregnancy.

---

## 1.9 Post-ROSC care

**The short version**
- Post-cardiac-arrest syndrome = brain injury + myocardial dysfunction + systemic ischaemia–reperfusion response + the precipitating pathology. Most post-ROSC deaths are neurological.
- **Oxygen**: 100% until saturation can be measured reliably, then titrate to **SpO₂ 94–98%** (88–92% if known hypercapnic respiratory failure); avoid hypoxaemia (strong) and hyperoxaemia (weak) — ANZCOR 11.6.1 (Feb 2026).
- **CO₂**: **normocapnia — PaCO₂ 35–45 mmHg** (ANZCOR 11.6.1 gives the number; 11.7 words it as "within a normal physiological range"); do not routinely target hypocapnia.
- **BP**: the patient's usual BP, or **MAP ≥60–65 mmHg / SBP >100 mmHg**. **Glucose**: normoglycaemia, treat **>10 mmol/L** with insulin, avoid hypoglycaemia.
- 12-lead ECG immediately, and decide about the cath lab.

**Coronary angiography.** ANZCOR 11.7 (Sep 2024) recommends **early coronary angiography in comatose post-arrest patients with ST-elevation**. Without ST-elevation, **either an early (2–6 h) or a delayed (within 24 h) approach is reasonable**. ⚑ A real divergence worth naming: **ANZCOR treats early vs delayed as equivalent options in non-ST-elevation post-arrest patients, whereas ERC/Resuscitation Council UK 2025 (international) recommends catheter-lab evaluation be *delayed* unless the context suggests a high likelihood of acute coronary occlusion** — reflecting COACT, TOMAHAWK and related trials.

**Seizures.** ANZCOR suggests **against prophylaxis** but **for treatment** when seizures occur, with maintenance started after the first event and precipitants (intracranial haemorrhage, electrolyte derangement) excluded. Post-arrest seizures and status myoclonus are common, often subclinical, and warrant EEG if the patient fails to wake. (ERC/RCUK 2025, international, name **levetiracetam or sodium valproate** first-line alongside sedation; ANZCOR specifies no agent.)

**General ICU care.** Lung-protective ventilation (**§5**), sedation, treat the cause, avoid fever, correct electrolytes, echo for stunning, vasopressor/inotrope support (**§3**). Post-arrest myocardial dysfunction is usually **reversible over 24–72 h** — do not withdraw on cardiac grounds early.

---

## 1.10 Temperature control after cardiac arrest (ANZCOR 11.8, Jun 2024)

**The short version**
- ⚑ The guideline has moved from *therapeutic hypothermia* to **fever prevention**: ANZCOR targets a temperature **≤37.5 °C** in patients who remain comatose after ROSC, for **at least 72 h**. (ERC/RCUK 2025, international, say 36–72 h — same target, shorter permitted floor.)
- Whether any subpopulation benefits from targeting **32–34 °C** "remains uncertain" — neither mandated nor forbidden.
- ANZCOR recommends **against routine pre-hospital cooling with large-volume cold IV fluid** immediately after ROSC.
- Comatose patients who are **mildly hypothermic** after ROSC **should not be actively rewarmed** to normothermia.

**Why it changed — TTM2.** TTM2 (Dankiewicz et al., *NEJM* 2021; n = 1861 analysed) randomised unconscious adults after OHCA of presumed cardiac or unknown cause to **targeted hypothermia at 33 °C for 28 h** with rewarming over 12 h, versus **targeted normothermia** in which active cooling started only once temperature reached 37.8 °C (device set to 37.5 °C). Six-month mortality **50% vs 48%** (RR 1.04, 95% CI 0.94–1.14) — no difference; poor functional outcome (mRS 4–6) 55% in both arms. **Arrhythmia with haemodynamic compromise was commoner with hypothermia (24% vs 16%, RR 1.45, 95% CI 1.21–1.75).** With the earlier TTM trial (33 °C vs 36 °C, no difference), this is what shifted ANZCOR, ERC and ILCOR from "cool to 32–34 °C" to "prevent fever". ⚑ **The trap in older texts and question banks is "cool to 32–34 °C for 12–24 hours" — no longer the ANZCOR recommendation.** HYPERION (2019), suggesting benefit from 33 °C in non-shockable rhythms, is why the subgroup question is called uncertain rather than closed.

**How.** Surface or endovascular devices. Ice-cold IV fluid up to 30 mL/kg or ice packs are feasible for an initial drop of ~1.5 °C **in hospital** — the recommendation against them is specific to routine **pre-hospital** use immediately after ROSC. Monitor core temperature (oesophageal, bladder or intravascular), sedate and treat shivering, avoid rebound hyperthermia on rewarming.

---

## 1.11 Neuroprognostication

**The short version**
- ANZCOR **recommends a multimodal approach** — no single test has sufficient specificity to eliminate false positives — and **recommends against** relying on the neurological examination during or immediately after arrest.
- Timing: pupillary/pupillometry and corneal reflexes at **≥72 h from ROSC**; SSEP and EEG **≥72 h**; NSE **within 72 h**; CT **within 48 h**; MRI **2–6 days**; GCS motor score over the **first 4 days**; myoclonus **within 7 days**.
- Exclude confounders first — residual sedation, neuromuscular blockade, hypothermia, hypotension, metabolic derangement, seizure. ANZCOR suggests **prolonging observation** where sedation or paralysis is suspected.
- Prognostication drives withdrawal of life-sustaining therapy, so a false-positive prediction of poor outcome is self-fulfilling — make that point.

**Modalities.** Clinical: bilaterally absent pupillary and corneal reflexes; status myoclonus (distinguish from benign post-hypoxic myoclonus/Lance–Adams, which is compatible with good recovery). Neurophysiology: bilaterally absent **N20 cortical SSEP**; highly malignant EEG (suppression, burst-suppression off sedation). Biomarker: **NSE**, interpreted serially, with haemolysis as a confounder. Imaging: diffuse anoxic injury on CT (loss of grey–white differentiation) or extensive restricted diffusion on MRI.

**The international algorithm** (ERC/ESICM 2021, reaffirmed 2025 — useful as a structure): in a patient still comatose with **motor response M ≤3 at ≥72 h** and confounders excluded, poor outcome is likely when **two or more** are present — absent pupillary and corneal reflexes at ≥72 h; bilaterally absent N20 SSEP at ≥24 h; highly malignant EEG at >24 h; **NSE >60 mcg/L** at 48 and/or 72 h; status myoclonus ≤72 h; diffuse extensive anoxic injury on CT/MRI. Fewer than two = **indeterminate**, keep observing. ANZCOR publishes no numerical NSE cut-off, so quote the "two-or-more predictors, ≥72 h, multimodal" principle, not an Australian NSE number.

---

## 1.12 Special-circumstance arrests (ANZCOR 11.10, Jul 2026)

**The short version**
- The default algorithm still runs — these are **modifications**, and most involve resuscitating for longer.
- **Hypothermia**: withhold adrenaline below 30 °C; after three failed shocks, delay further shocks until core >30 °C; ECMO is the preferred rewarming modality.
- **Drowning**: hypoxic arrest — **5 initial ventilations**, 30:2, no compression-only CPR.
- **Pregnancy**: manual **left uterine displacement** if >20 weeks or fundus above the umbilicus; **perimortem caesarean** for arrest in the second half of pregnancy.
- **LAST**: 20% lipid emulsion **1.5 mL/kg bolus**, then **15 mL/kg/h**, up to three boluses 5 min apart, **max 12 mL/kg**. **Hyperkalaemia**: calcium chloride 10% 10 mL IV (or calcium gluconate 10% 30 mL), plus insulin 10 units with 25 g glucose.

**Hypothermic arrest.** Adult figures. Withhold adrenaline while core temperature is **<30 °C**; at **30–34 °C**, increase the adrenaline interval to **6–10 minutes**. If VF persists after **three shocks**, delay further attempts until core temperature is **>30 °C**. Extracorporeal rewarming — **ECMO preferred over cardiopulmonary bypass** — is definitive. Handle gently (rough movement precipitates VF) and remember "nobody is dead until they are warm and dead": profound hypothermia is neuroprotective and full recovery after very prolonged arrest is documented. Severe hyperkalaemia and an asphyxial mechanism (e.g. avalanche burial) mark futility.

**Drowning.** Hypoxia is the mechanism, so ventilation matters: **5 initial ventilations** with oxygen if available, then **30:2 — do not use compression-only CPR**. Post-resuscitation, target **SpO₂ 94–98%** with **PEEP 5–10 cmH₂O**, escalating to **15–20 cmH₂O** if severely hypoxaemic. Salt vs fresh water makes no practical difference. Cold-water submersion warrants prolonged effort (above).

**Pregnancy.** Aortocaval compression from ~20 weeks impairs venous return, so **manually displace the uterus to the left** (preferred over whole-patient tilt, which degrades compression quality); hand position is otherwise standard. High-risk airway: reduced FRC, raised O₂ consumption, oedematous airway, aspiration risk — intubate early, smaller tube, experienced operator. **Perimortem caesarean** is recommended for arrest in the second half of pregnancy; ANZCOR states there is **insufficient evidence to define a specific time interval**, so "4 minutes to start, delivered by 5" is a teaching aid, not an ANZCOR figure. Perform it **at the site of the arrest**, primarily for **maternal** haemodynamics. Consider haemorrhage, eclampsia, amniotic fluid embolism, PE, magnesium toxicity (give calcium), cardiomyopathy.

**Pulmonary embolism.** Consider **fibrinolysis** when PE is the suspected or confirmed cause; if given, **continue CPR for 60–90 minutes** before terminating. Embolectomy, percutaneous thrombectomy and ECPR are alternatives. Suspect with sudden collapse, preceding pleuritic pain or dyspnoea, risk factors, and PEA with echocardiographic RV dilatation.

**Local anaesthetic systemic toxicity.** Perioral tingling, metallic taste, tinnitus and agitation precede seizures, then collapse with refractory arrhythmia. Stop the injection, secure the airway, treat seizures with benzodiazepines, and give **20% lipid emulsion: 1.5 mL/kg bolus over ~1 min, then 15 mL/kg/h**, doubled to 30 mL/kg/h after 5 min if circulation is not restored; repeat the bolus up to **twice more at 5-minute intervals**; **maximum cumulative 12 mL/kg** (NSW SESLHD adult protocol 2021, consistent with ANZCOR 11.10). Prolonged CPR is often needed — bupivacaine is highly protein- and tissue-bound. Avoid vasopressin, CCBs, beta-blockers and further local anaesthetic (use amiodarone, not lignocaine).

**Hyperkalaemia.** Suspect with renal failure, missed dialysis, crush injury, rhabdomyolysis, or ACEi/ARB/spironolactone/trimethoprim on the chart; ECG progresses peaked T waves → flattened P waves → broad QRS → sine wave → arrest. In arrest give **calcium chloride 10% 10 mL IV** (or **calcium gluconate 10% 30 mL**) by rapid bolus, plus **insulin 10 units short-acting with 25 g glucose**; bicarbonate is reasonable here. Do not mix calcium chloride and bicarbonate in one line. **Dialysis** is definitive for refractory hyperkalaemic arrest.

**Asthma, tension pneumothorax and traumatic arrest.** In asthma, dynamic hyperinflation is the killer: intubate early, ventilate **slowly (8–10 breaths/min) with low tidal volumes**, and on sudden deterioration **disconnect the circuit and compress the chest wall** to relieve gas trapping while excluding pneumothorax (**Respiratory**). Tension pneumothorax decompression and the traumatic-arrest sequence are **Surgery §5** and ANZCOR 11.10.1; anaphylactic arrest is **Immunology & Allergy** and **Paediatrics §3**.

---

## Rapid-Recall Discriminators

| Cue | Answer |
| --- | --- |
| Adult VF, adrenaline timing, Australian guideline | 1 mg IV/IO **after the second shock**, then every second loop (ANZCOR 11.2/11.5) |
| Adult VF, adrenaline timing, ERC/UK guideline | 1 mg IV **after the third shock** — the classic ANZCOR-vs-ERC trap |
| Adult VF still present after the third shock | Amiodarone **300 mg** IV/IO bolus; a further **150 mg** after the fifth shock. If unavailable, lignocaine 1 mg/kg then 0.5 mg/kg |
| Adult non-shockable arrest (asystole/PEA), adrenaline timing | 1 mg IV/IO **as soon as feasible**, then every second loop |
| Default adult biphasic defibrillation energy, ANZCOR | **200 J for all shocks**; escalate to maximum if the first shock fails. Monophasic **360 J** |
| Adult CPR quality metrics | Depth **≥5 cm**, rate **100–120/min**, 30:2, 2-minute loops, full recoil; **6–10 breaths/min** once an advanced airway is in, without pausing compressions |
| Post-ROSC adult oxygen, CO₂ and BP targets | **SpO₂ 94–98%** (88–92% if hypercapnic respiratory failure); **PaCO₂ 35–45 mmHg** (normocapnia); **MAP ≥60–65 mmHg** or SBP >100 mmHg |
| Temperature target in the comatose adult after ROSC | Actively prevent fever, **≤37.5 °C**, for **at least 72 h** — not 32–34 °C hypothermia |
| Trial that ended routine therapeutic hypothermia | **TTM2** (NEJM 2021): 33 °C vs normothermia, 6-month mortality 50% vs 48%, more haemodynamically significant arrhythmia with cooling |
| Earliest time to prognosticate neurologically after adult arrest | **≥72 h from ROSC**, multimodal, confounders (sedation, paralysis, hypothermia) excluded |
| NSW ward patient with SpO₂ 90%, HR 145, systolic 88 | **Red Zone → Rapid Response** (Between the Flags); Yellow Zone would be SpO₂ 91–95%, HR 120–140, systolic 90–100 |
| NEWS2 aggregate score of 5 | Medium/"key" threshold — urgent doctor review, consider critical care (international, RCP 2017); a single parameter scoring 3 also triggers urgent review |
| Adult hypothermic arrest, core temperature 28 °C | **Withhold adrenaline** (<30 °C); after three failed shocks, delay further shocks until core >30 °C; ECMO rewarming |
| Adult cardiac arrest after an interscalene block | LAST — **20% lipid emulsion 1.5 mL/kg bolus**, then 15 mL/kg/h, up to three boluses 5 min apart, max **12 mL/kg**; prolonged CPR |
| Adult arrest at 30 weeks' gestation | **Manual left uterine displacement** + standard ALS; **perimortem caesarean on site** for arrest in the second half of pregnancy, primarily for maternal benefit |
| Adult arrest with suspected massive PE, fibrinolytic given | **Continue CPR for 60–90 minutes** before considering termination |
| Sodium bicarbonate dose — **which context?** | **Arrest (ANZCOR 11.5): 1 mmol/kg IV over 2–3 min**, then per ABG. **Sodium-channel-blocker/TCA toxicity with a pulse (ANZCOR 11.10): 8.4% 1–2 mL/kg up to 100 mL per bolus**, q3–5 min to QRS narrowing, pH 7.45–7.55, **max total 6 mL/kg**. Different numbers, different settings — always quote the ceiling (CC §7.7) |
| Cricoid pressure during adult RSI | No longer routine in most Australian ED/ICU/retrieval practice; IRIS (JAMA Surg 2019) showed worse laryngoscopic view and longer intubation without demonstrated benefit |
| CICO declared — next step | **Front-of-neck access**: scalpel–bougie–tube or needle/cannula cricothyroidotomy (ANZCA PG61(A) 2017), after three failed supraglottic rescue pathways |

---

**Sources**

- ANZCOR Guideline 11.2 — Protocols for Adult ALS (Jun 2024; supersedes Aug 2018); 11.3 — Precordial Thump and Percussion Pacing (2024).
- ANZCOR Guideline 11.4 — Electrical Therapy for Adult ALS (Jul 2025; supersedes Jan 2016); 11.5 — Medications in Adult Cardiac Arrest (Apr 2025; supersedes Aug 2016).
- ANZCOR Guideline 11.6 — Equipment and Techniques in Adult ALS (Apr 2025); 11.6.1 — Targeted Oxygen Therapy (Feb 2026; supersedes Jan 2016).
- ANZCOR Guideline 11.7 — Post-resuscitation Therapy in Adult ALS (Sep 2024; supersedes Jan 2016); 11.8 — Temperature Control after Cardiac Arrest (Jun 2024; supersedes TTM, Jan 2016).
- ANZCOR Guideline 11.9 — Managing Acute Dysrhythmias; 11.10 — Resuscitation in Special Circumstances (Jul 2026); 11.10.1 — Cardiac Arrest due to Trauma.
- ANZCOR Guidance Statement 10.5.3 — Legal and Ethical Issues Related to Resuscitation: Withholding and Withdrawal of Resuscitation.
- ANZCA PG61(A) — Management of Evolving Airway Obstruction: Transition to the Can't Intubate, Can't Oxygenate Airway Emergency (2017), with background paper PG61(A)BP.
- NSW Health / Clinical Excellence Commission — Between the Flags: standard adult observation charts, Clinical Emergency Response Systems, five-element framework (current).
- Greater Sydney Area HEMS — Prehospital Emergency Anaesthesia Manual v3.0 (Nov 2017). South Eastern Sydney LHD — Intralipid 20% for Local Anaesthetic Toxicity, Adult (2021, reviewed 2023).
- ACSQHC — NSQHS Standard 8, Recognising and Responding to Acute Deterioration (2nd ed); National Consensus Statement: Essential Elements for Recognising and Responding to Acute Physiological Deterioration (2021).
- Bhonagiri D et al. Reduction of in-hospital cardiac arrest rates in ICU-equipped NSW hospitals with Between the Flags. *Intern Med J* 2021.
- Dankiewicz J et al. Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest (TTM2). *N Engl J Med* 2021;384:2283–94.
- Birenbaum A et al. Cricoid Pressure vs Sham in Rapid Sequence Induction: the IRIS Randomized Clinical Trial. *JAMA Surg* 2019;154:9–17.
- *International, for comparison only:* ERC / Resuscitation Council UK Guidelines 2025 — Adult ALS and Post-Resuscitation Care; ERC/ESICM neuroprognostication algorithm (2021, reaffirmed 2025); RCP, National Early Warning Score (NEWS2), 2017.

---

# Critical Care Notes — Section 2: The Undifferentiated Emergency Presentations

*Sources: ACEM P06 and G126; NHFA/CSANZ ACS guideline 2025; ACSQHC ACS and Sepsis Clinical Care Standards; NSW ACI Emergency Care Institute (PACSA, ECAT, back pain and headache tools); Queensland Health ABD guideline v5.0; Stroke Foundation living guidelines; Therapeutic Guidelines; AMH; ACR/VF 2021; ESC 2018 syncope; international decision rules (Ottawa SAH, Canadian syncope, Canadian CT Head, Canadian C-spine, Wells, PERC). Scope: front-door reasoning for the undifferentiated adult — what the stem is testing, the must-not-miss list, the discriminators, the first hour. All figures adult unless stated; paediatrics → see Paediatrics.*

## 2.1 How the written paper asks emergency medicine

**The short version**
- The stem gives a **presentation plus an obs set**. Name the **worst plausible cause the stem is compatible with**, then say what happens in the first hour.
- The distractor is the **common diagnosis fitting 90% of the stem**; the answer is the **time-critical one fitting the one odd feature**.
- ⚑ Australian EDs stream by the **Australasian Triage Scale**, not Manchester or ESI: cat 1 immediate, **cat 2 within 10 min**, cat 3 30 min, cat 4 60 min, cat 5 120 min (ACEM P06). All ages — the descriptors differ for children, the times do not.
- The obs set is a **screen, not a rule-out**. Normal obs exclude nothing; abnormal obs are almost never non-specific.

**Reading the obs set, in the order things kill.** **RR** is the most sensitive and most ignored — raised RR with a normal SpO₂ is metabolic acidosis, PE or early sepsis until proven otherwise. **SpO₂** is late in shunt and useless in anaemia, CO poisoning and profound shock. **HR** is blunted by β-blockade and pacing. **BP** falls last in the young — a normal systolic with a lactate of 4 is compensated shock. **Hypothermia** in an infected older person is worse than fever. **Five bedside tests before you think hard:** ECG, BSL, VBG with lactate, βhCG in every female of reproductive age, and focused ultrasound if shocked. ACEM/RANZCR G126 (2012) advises imaging be driven by decision rules, not routine.

## 2.2 Acute chest pain

**The short version**
- Six lethal causes: **ACS, PE, aortic dissection, tension pneumothorax, cardiac tamponade, oesophageal rupture**.
- ⚑ **ECG within 10 min of first emergency clinical contact** — Australian standard (ACSQHC ACS Clinical Care Standard). The most examinable number here.
- ⚑ The **2025 NHFA/CSANZ guideline** replaces the 2016 version and introduces **ACOMI** — occlusion patterns beyond classical ST elevation now trigger emergent reperfusion.
- ⚑ **CTCA is not endorsed for routine Australian ED chest pain** (NSW ACI).

**The six, and what separates them.** *ACS* — crescendo, heavy, diaphoresis, radiation (→ Cardiology). *PE* — pleuritic, dyspnoea out of proportion to the chest findings, often a normal CXR. *Dissection* — abrupt, maximal at onset, tearing, front-to-back; **pulse or BP differential, new AR murmur, focal neurology**. *Tension pneumothorax* — clinical diagnosis; decompress before imaging (§3). *Tamponade* — muffled sounds, raised JVP, hypotension, pulsus paradoxus, electrical alternans. *Boerhaave* — forceful vomiting then retrosternal pain and surgical emphysema. **Asymmetry of any kind — pulses, BP, breath sounds — is the most valuable positive finding.**

**ECG decision points.** The 2025 guideline names ECG patterns of **ACOMI** requiring the same emergent revascularisation as STEMI — **posterior MI, de Winter T waves, right ventricular and high lateral infarction** — and flags **Wellens' T waves, diffuse ST depression with ST elevation in aVR, and hyperacute T waves** as needing continuous monitoring. So ST depression maximal V1–V3 with tall R waves and upright T waves is **posterior MI** — posterior leads and reperfuse, not "anterior ischaemia". Inferior STE demands **right-sided leads**; V4R elevation means preload dependence and nitrates are contraindicated. **PACSA specifies a repeat ECG at 2 h, one with each troponin, and every 30 min while symptoms continue.**

**Troponin decision points.** hs assays allow accelerated rule-out from a baseline plus a short-interval repeat, read as an absolute delta against **assay-specific** thresholds. PACSA uses a **2 h repeat for hs assays to calculate a delta**; a **single troponin may suffice in a low-risk patient drawn >6 h after symptoms ceased**; with point-of-care assays, discharge requires a **negative 6 h POC troponin**. ng/L cut-offs and deltas differ by manufacturer and by troponin I vs T, so **the examinable content is the principle — a defined low baseline plus a defined small delta over a defined interval, on your own laboratory's figures**. Raised troponin means myocardial injury, not infarction: PE, myocarditis, sepsis, renal failure and heart failure all raise it.

**Risk pathways here.** **EDACS** is the Australasian tool (Than, *Emerg Med Australas* 2014;26(1):34–44), combining age, sex, cardiac risk factors in younger patients and pain features. **EDACS-ADP** calls a patient low risk when the **score is <16, the ECG shows no new ischaemia, and 0 h and 2 h troponins are both negative** — around 45% of presentations, 99–100% sensitive for 30-day MACE. ⚑ PACSA states explicitly that **a negative troponin does not exclude coronary artery disease**.

⚑ **Reperfusion targets — two Australian documents, two figures.** The **ACSQHC ACS Clinical Care Standard** (2014, reviewed 2019) sets primary PCI where **first-medical-contact-to-balloon is anticipated under 90 min**, with fibrinolysis **within 30 min of hospital presentation** if PCI is unavailable in time. The **NHFA/CSANZ 2025 guideline** sets primary PCI **within 60 min of first medical contact at a PCI-capable centre and within 90 min at a non-PCI-capable centre**; the Commission notes its standard is not yet updated against it.

**Dissection.** The **ADD-RS** is international (Rogers, *Circulation* 2011, from IRAD), used here but not in an Australian guideline. One point per category in which any feature is present: predisposing conditions (Marfan/connective tissue disease, family history of aortic disease, aortic valve disease, recent aortic manipulation, known thoracic aneurysm); pain features (abrupt and/or severe, tearing/ripping/sharp); examination (pulse deficit or BP differential, focal deficit, new AR murmur, hypotension). **ADD-RS 0–1 with D-dimer <500 ng/mL** stands the workup down; **2–3 goes straight to CT aortography**. The trap: dissection with inferior ST elevation — antiplatelets or lysis here is catastrophic.

**PE at the front door** (→ Respiratory, Haematology). **Wells** — DVT signs 3; PE most likely diagnosis 3; HR >100 1.5; immobilisation ≥3 days or surgery within 4 weeks 1.5; previous PE/DVT 1.5; haemoptysis 1; malignancy 1 — dichotomised **≤4 unlikely, >4 likely**. **PERC** requires all eight absent (age ≥50, HR ≥100, SpO₂ <95% RA, unilateral leg swelling, haemoptysis, surgery/trauma within 4 weeks needing GA, prior PE/DVT, oestrogen) and applies **only when gestalt pre-test probability is <15%**.

| Stem cue | Think | Do |
|---|---|---|
| Tearing pain, BP differential between arms | Dissection | CT aortography; no antiplatelets |
| Sudden pleuritic pain, hypotension, unilateral silent chest | Tension pneumothorax | Decompress clinically, image after |
| ST depression V1–V3, tall R, upright T | Posterior ACOMI | Posterior leads, activate reperfusion |
| Inferior STE, then hypotension after GTN | RV infarction | Right-sided leads, fluid, stop nitrate |
| Vomiting then severe pain, surgical emphysema | Oesophageal rupture | CT with oral contrast, surgical referral |
| Raised JVP, muffled sounds, small complexes | Tamponade | Bedside echo, pericardiocentesis |

## 2.3 Acute dyspnoea

**The short version**
- Four buckets: **cardiac, respiratory, metabolic, and the non-organic diagnosis you make last**.
- The obs set **cannot separate** cardiac from respiratory; the **RR–SpO₂–pH triad** separates metabolic from both.
- **NT-proBNP <300 pg/mL** rules out acute heart failure; rule-in thresholds are **age-stratified** (international, ICON-RELOADED 2018) and the assay is not universal in Australian EDs.
- ⚑ Anxiety/hyperventilation is a **diagnosis of exclusion made after a normal gas** — a young woman with dyspnoea and tingling fingers is PE until scored otherwise.

**Patterns, not numbers.** **Hypoxia correcting with oxygen** = V/Q mismatch. **Hypoxia refractory to high-flow oxygen** = shunt, and a ventilation problem (§5). **Tachypnoea with normal/high SpO₂ and clear lungs** = metabolic acidosis (DKA, sepsis, salicylate, renal failure) or PE — the classic finals stem. **Normal RR with severe subjective dyspnoea** = anaemia, anxiety, or a patient about to tire; a "normalising" RR in an exhausted asthmatic is pre-arrest, not improvement.

**Cardiac.** Orthopnoea and PND are the historical items that earn their place; raised JVP, S3, non-clearing bibasal crackles, displaced apex. CXR: upper-lobe diversion, Kerley B lines, alveolar shadowing, effusions. Bedside ultrasound: bilateral diffuse B-lines, plethoric IVC. **NT-proBNP** (ICON-RELOADED 2018, adult, international) — **<300 pg/mL rules out acute heart failure (NPV ~98%)**; rule-in **>450 pg/mL under 50 y, >900 pg/mL at 50–75 y, >1800 pg/mL over 75 y**. Raised also by renal impairment, AF, PE, sepsis and age; lowered by obesity. APO and NIV → §5, Cardiology.

**Respiratory.** Diffuse polyphonic expiratory wheeze = asthma or COPD (→ Respiratory); a **silent chest is failure to move air**, not improvement. Focal crackles with fever = pneumonia. Sudden onset in a tall young man = primary pneumothorax; in COPD, secondary and far more dangerous. Stridor is upper airway (§1).

**Metabolic.** Deep, sighing Kussmaul breathing with ketotic fetor = DKA; salicylate gives tachypnoea with tinnitus and a mixed picture (§7); severe anaemia or haemorrhage gives dyspnoea with a normal chest and normal SpO₂. **Any dyspnoea stem describing a normal CXR should push you to this bucket plus PE.** **Anxiety** is diagnosed only after normal examination, ECG, CXR and a gas showing **pure respiratory alkalosis without metabolic acidosis** — a raised A–a gradient makes it organic, and paraesthesiae are non-specific because PE causes hyperventilation too.

| Stem cue | Think | Do |
|---|---|---|
| RR 32, SpO₂ 98%, clear chest and CXR | Metabolic acidosis or PE | VBG with lactate, ketones, PE score |
| Orthopnoea, raised JVP, bilateral B-lines | Acute pulmonary oedema | Sit up, O₂, GTN, consider NIV (§5) |
| Silent chest in an asthmatic | Near-fatal asthma | Treat as life-threatening |
| Tall young man, sudden pleuritic pain, hyper-resonance | Pneumothorax | Erect CXR; decompress first if unstable |

## 2.4 Altered consciousness and collapse

**The short version**
- **BSL first, every time.** Australian definition of hypoglycaemia: BGL **below 4.0 mmol/L** (adult; paediatric → see Paediatrics).
- Sort into **syncope, seizure, hypoglycaemia, stroke, toxic or septic** using *before, during, after*.
- The best single discriminator between syncope and seizure is the **recovery** — immediate orientation vs prolonged post-ictal confusion.
- ⚑ Brief myoclonic jerking during syncope is **common and does not make it a seizure** — a frequent distractor.

**Three-phase history.** *Before* — exertional or supine onset, palpitations, or no prodrome = cardiac; hot room, standing, pain, micturition with nausea, sweating and greying vision = reflex; aura, déjà vu, epigastric rising = seizure. *During* — pallor and limpness vs cyanosis and sustained rhythmic movement. *After* — **immediate orientation = syncope; post-ictal confusion over minutes to an hour = seizure**. Tongue biting counts only if **lateral**; incontinence occurs in both and is near worthless.

**Workup.** BSL, 12-lead ECG in every collapse, postural BP, βhCG, VBG. The ESC 2018 high-risk ECG list: ischaemia, complete or Mobitz II AV block, sinus bradycardia <40 or pauses >3 s, alternating bundle branch block, VT or rapid paroxysmal SVT, bifascicular block, pre-excitation, long or short QT, Brugada pattern, ARVC changes. A lactate raised out of proportion after a "faint" is either a seizure (clears within an hour) or occult sepsis or haemorrhage (does not).

**Which syncope needs admission.** **ESC 2018**: **low-risk features** (young, no cardiac or family history of sudden death, typical prodrome, clear trigger, normal ECG, normal obs) → **discharge from the ED** (Class I). **High-risk features** (exertional or supine syncope, no prodrome, palpitations immediately before, family history of young sudden death, structural or coronary disease, abnormal obs, heart failure, severe anaemia, any high-risk ECG) → **prompt evaluation in a syncope or ED observation unit, or admission**. Neither → **observed rather than admitted**. There is no direct evidence admission changes outcome, so **routine admission for syncope is not the correct answer**.

**CSRS** (*CMAJ* 2016; >4000 patients; validated internationally 2022) scores vasovagal predisposition −1, heart disease +1, SBP <90 or >180 mmHg +2, troponin above the 99th percentile +2, QRS axis <−30° or >100° +1, QRS >130 ms +1, QTc >480 ms +2, and the ED diagnosis (vasovagal −2, cardiac +2). Range **−3 to +11**; 30-day serious adverse events ~**0.4%** (≤−2), ~0.7% (−1 to 0), ~8% (1–3), ~19% (4–5), ~51% (≥6); risk rises continuously from 0.4% at a score of −3 to 83.6% at 11. International, not Australian-endorsed.

**Stroke, toxic, septic.** Posterior circulation stroke may present as vertigo, ataxia, diplopia and drowsiness with **no limb weakness**; BSL first, because hypoglycaemia mimics stroke perfectly. Non-contrast CT then CTA where thrombectomy is on the table; windows and thrombolysis → Neurology and the Stroke Foundation living guidelines. **Isolated syncope is not a stroke presentation** — "TIA" for transient LOC without focal signs is the wrong answer. Toxidromes → §7. An intoxicated patient not improving hour by hour needs a CT for subdural, not more time.

**Head injury** (trauma otherwise → Surgery §5). The **Canadian CT Head Rule** (Stiell, *Lancet* 2001) applies to adults **≥16** with GCS 13–15 within 24 h and witnessed LOC, amnesia or disorientation, and **excludes anticoagulated patients and post-injury seizure**. High risk (predicting neurosurgical intervention): **GCS <15 at 2 h, suspected open or depressed skull fracture, any basal skull fracture sign, ≥2 vomits, age ≥65**. Medium risk (any injury on CT): **retrograde amnesia ≥30 min, or dangerous mechanism — pedestrian struck, ejection, fall >3 feet/5 stairs**. International, but ACEM/RANZCR G126 cites its criteria as the basis for CT in head trauma; **anticoagulated patients are outside the rule and get a CT**. The **Canadian C-spine rule** applies only to **alert (GCS 15), stable** trauma patients, and clears the neck by high-risk factors (**age ≥65, dangerous mechanism, extremity paraesthesiae**), then low-risk factors (simple rear-end MVC, sitting up in ED, ambulatory at any time, delayed-onset neck pain, no midline C-spine tenderness), then **45° active rotation left and right**.

| Stem cue | Think | Do |
|---|---|---|
| Collapse, immediate orientation, clear trigger | Reflex syncope | ECG, postural BP, discharge if low risk |
| Collapse, 20 min confusion, lateral tongue bite | Seizure | BSL, ECG, seek the provoking cause (Neurology) |
| Syncope while swimming or on exertion | Cardiac/arrhythmic | Admit or observe; ECG, echo, monitoring |
| Collapse, BGL 2.6 mmol/L | Hypoglycaemia | Glucose, then ask *why* — sulfonylurea, sepsis, alcohol |
| Sudden vertigo, ataxia, diplopia, drowsy | Posterior circulation stroke | BSL then urgent CT/CTA (Neurology) |

## 2.5 The headache that matters

**The short version**
- Five must-not-miss: **SAH, meningitis, raised ICP/mass, giant cell arteritis, cerebral venous sinus thrombosis** — plus acute angle-closure glaucoma and carbon monoxide, which the exam hides.
- **Thunderclap** — maximal within one hour — is SAH until imaged, whatever the story.
- Non-contrast CT is **~98% sensitive for SAH within 6 h of onset**, falling steeply after; **LP for xanthochromia needs ≥12 h from onset**.
- ⚑ **CVST needs a venogram** — a normal non-contrast CT does not exclude it.

**Triage by tempo.** *Instantaneous, maximal at onset* → SAH, arterial dissection, RCVS, pituitary apoplexy. *Hours* → meningitis, CVST, glaucoma, hypertensive emergency. *Days to weeks, worse on waking or Valsalva* → mass, raised ICP, CVST, subdural. *New headache over 50* → GCA and mass until excluded. NSW ACI ED red flags: worst-ever or thunderclap onset especially on exertion, maximal at onset, elderly, anticoagulated, altered conscious state, neurological symptoms, prolonged duration.

**SAH.** Non-contrast CT first: **~98% sensitive within 6 h** on a modern scanner read by an experienced reader, falling to roughly 70% by day 3 and below 50% after a week. CT negative with onset >6 h ago → **LP for xanthochromia**, needing **≥12 h from ictus** (bilirubin detectable from ~9–12 h, persisting 2–4 weeks); serial tube RBC counts are far less reliable. CTA is the alternative in many Australian centres, at the cost of incidental aneurysms.

The **Ottawa SAH rule** applies to **alert (GCS 15) patients aged ≥15** with a **new severe non-traumatic headache peaking within one hour**, excluding new deficit, prior aneurysm or SAH, brain tumour, shunt, or ≥3 similar headaches over ≥6 months. Investigate if **any one** of: **age ≥40, neck pain or stiffness, witnessed LOC, onset during exertion, thunderclap headache, limited neck flexion**. Validation (Perry 2017): **100% sensitive, 13.6% specific** — that specificity means **it can never justify imaging, only not imaging**. International; the NSW ACI headache tool points instead to ACEM/RANZCR imaging pathways.

**Meningitis.** Fever, headache, neck stiffness, photophobia — the classical triad is present in a minority; non-blanching purpura changes everything. **Antibiotics before LP** if there is any delay, with dexamethasone at or just before the first dose in suspected bacterial meningitis. CT before LP only for focal signs, seizures, immunocompromise or reduced conscious state. Regimens → Infectious Disease.

**Raised ICP.** Worse on waking and with cough or strain; vomiting without nausea; papilloedema; sixth nerve palsy as a false localiser. IIH in a young obese woman with papilloedema and visual obscurations — image first, then LP with opening pressure.

**GCA.** New headache over 50, scalp tenderness, **jaw claudication** (most specific), visual disturbance, polymyalgic symptoms. An Australian review gives **CRP >20 mg/L (sensitivity ~67%) and platelets >300 × 10⁹/L (~71%)** as the most useful markers — **normal inflammatory markers do not exclude it**. **Do not wait for biopsy to treat.** ACR/VF 2021 (adult): **prednis(ol)one 1 mg/kg/day up to 80 mg** without vision loss; **IV methylprednisolone 500–1000 mg/day for 3–5 days** where vision is threatened or lost. ⚑ Older texts give 40–60 mg daily; ACR/VF 2021 and the current Australian review both use **1 mg/kg up to 80 mg**. ACR/VF 2021 conditionally recommends obtaining the temporal artery biopsy **within 2 weeks of starting oral glucocorticoids** (histopathological changes are more likely to be detected inside that window, though they have been detected later); ultrasound findings degrade after roughly **3 days**, so an ultrasound pathway must be arranged immediately.

**CVST.** Subacute progressive, often positional headache in a prothrombotic state — pregnancy or puerperium, the COCP, dehydration, malignancy, thrombophilia, local sepsis. May present with seizures, deficits crossing arterial territories, papilloedema or isolated intracranial hypertension. ⚑ **Plain CT is frequently normal — the diagnosis needs CT or MR venography**, and D-dimer is not sensitive enough to exclude it. Anticoagulate even with venous haemorrhagic infarction.

| Stem cue | Think | Do |
|---|---|---|
| Maximal within seconds, "worst ever" | SAH | CT now; LP ≥12 h if CT −ve and onset >6 h |
| New headache >50, jaw claudication, CRP up | GCA | Steroid immediately, then biopsy/ultrasound |
| Progressive headache, on the COCP or post-partum | CVST | CT/MR venography — plain CT is not enough |
| Red painful eye, haloes, mid-dilated pupil | Acute angle-closure glaucoma | Ophthalmology now, lower IOP |
| Whole household with headache and nausea | Carbon monoxide | Co-oximetry (SpO₂ reads normal), high-flow O₂ |

## 2.6 Acute abdominal pain in the emergency setting

**The short version**
- The ED question is **which abdominal pain is time-critical**: **ruptured AAA, mesenteric ischaemia, ruptured ectopic, strangulating obstruction/volvulus**.
- **βhCG in every female of reproductive age**, before anything else.
- **Pain out of proportion to examination in an arteriopath or a patient in AF** is mesenteric ischaemia (→ Surgery §3).
- ⚑ **AXR is not a screening test**; its uses are narrow (suspected obstruction, volvulus, follow-up of known pseudo-obstruction).

**The time-critical stems** (definitive management → Surgery §3). *Ruptured AAA* — abdominal or back pain, syncope, hypotension, pulsatile mass; the triad is usually incomplete and the commonest misdiagnosis is renal colic. **A first presentation of "renal colic" over 60 is a AAA until imaged.** Unstable → theatre, not CT. *Mesenteric ischaemia* — sudden severe periumbilical pain with a soft abdomen, rising lactate, late peritonism; AF or atherosclerosis in the stem. *Ruptured ectopic* — amenorrhoea, unilateral pain, syncope, shoulder-tip pain; βhCG then transvaginal ultrasound, but instability goes to theatre. *Strangulating, closed-loop or volvulus* — colicky becoming constant, tachycardia, fever, localised tenderness, raised lactate; **do not omit the hernial orifices**. *Perforation* — erect CXR is only ~70–80% sensitive, so a normal film does not exclude it.

**Medical mimics.** Inferior MI as epigastric pain with diaphoresis and no chest pain — **ECG and troponin in anyone over about 40 with upper abdominal pain**. DKA; lower-lobe pneumonia; Addisonian crisis; hypercalcaemia. Testicular torsion as lower abdominal pain in an adolescent who has not mentioned his scrotum — **examine it** (→ Urology).

**Who gets which imaging** (ACEM/RANZCR G126 — ultrasound preferred where it answers the question without radiation). **Ultrasound first** for RUQ pain, suspected gynaecological pathology, pregnancy, and suspected appendicitis in children and young women; a non-visualised appendix is non-diagnostic, not negative. **CT abdomen–pelvis with IV contrast** is the default for the sick or equivocal adult; **CT angiography** for mesenteric ischaemia or AAA; **non-contrast low-dose CT KUB** for renal colic, except that over 60 with first-episode colic the imaging question is the aorta; **MRI** for appendicitis in pregnancy where ultrasound is inconclusive.

⚑ **Analgesia does not mask the diagnosis** — that teaching is obsolete. Inhaled **methoxyflurane (Penthrox)** is standard Australian ED practice: **3 mL per bottle, max 6 mL/24 h, max 15 mL/week**, contraindicated in renal impairment, malignant hyperthermia susceptibility, cardiovascular instability and altered consciousness (Australian PI, Oct 2023).

| Stem cue | Think | Do |
|---|---|---|
| First "renal colic" at 68, hypotensive | Ruptured AAA | Theatre if unstable; CT angiography if stable |
| Severe pain, soft abdomen, AF, lactate 4 | Mesenteric ischaemia | CT angiography, surgical/vascular referral |
| Amenorrhoea, unilateral pain, syncope | Ruptured ectopic | βhCG, TV ultrasound; theatre if unstable |
| Epigastric pain, diaphoresis, age 62 | Inferior MI | ECG and troponin before anything abdominal |
| Colicky pain, vomiting, previous laparotomy | Adhesive SBO | CT; strangulation features change the timeline |

## 2.7 Acute back pain

**The short version**
- Four emergencies: **cauda equina syndrome, spinal epidural abscess, vertebral fracture or malignant cord compression, and aortic causes**.
- ⚑ **Routine imaging is not indicated** for non-specific low back pain in the ED (NSW ACI).
- Suspected cauda equina → **urgent MRI and urgent spinal surgical referral, the referral made before investigations are complete** (NSW ACI).
- **Incontinence at presentation is a poor prognostic sign** — the incomplete syndrome is the one to catch.

**Red flags (NSW ACI ED tool).** Cancer history; unexplained weight loss; severe pain when supine or at night; age <16 or >50; significant trauma; IVDU; recent bacterial infection or fever; immunosuppression; saddle anaesthesia; bladder or bowel dysfunction; progressive lower-limb deficit; symptoms beyond 4 weeks; pregnancy; repeat presentations. All mandate senior review — but **not the same imaging**. **Urgent MRI** for known active malignancy with new back pain, suspected cauda equina, suspected spinal infection, or severe/progressive deficit. **CT lumbar spine** for suspected fracture after significant trauma. **Plain X-ray** for suspected osteoporotic fracture after minimal trauma in an older patient or one on corticosteroids. **No imaging** for non-specific low back pain within the first month of appropriate therapy.

**Cauda equina** (pathology → MSK & Rheumatology). Triad of saddle anaesthesia, sphincter disturbance and urinary symptoms. The distinction that matters: **incomplete CES** — reduced urinary sensation, poor stream, hesitancy, altered perianal sensation, continence preserved — versus **complete CES with retention and overflow**, where prognosis is much worse. PR and post-void residual, urgent MRI, and **the spinal surgical referral goes out before imaging is complete**.

**Spinal epidural abscess.** Fever, back pain and deficit is the classical triad and is present in a minority; suspect in IVDU, diabetes, dialysis, immunosuppression, recent bacteraemia or spinal instrumentation. CRP and ESR are near-universally raised. **Blood cultures before antibiotics**, urgent contrast MRI of the **whole spine** (skip lesions are common), neurosurgical and ID referral.

**Fracture, cord compression, aorta.** Osteoporotic wedge fracture after trivial trauma in an older person or one on long-term corticosteroids. Malignant cord compression — progressive pain, worse at night and lying flat, sensory level, weakness, later sphincter involvement; whole-spine MRI, high-dose dexamethasone, urgent oncology (→ Oncology). **Any back pain with hypotension gets an aorta answer.**

**Analgesia (NSW ACI, adult).** Paracetamol 1 g 4–6 hourly (max 4 g/day) with ibuprofen 400 mg 6–8 hourly; add oxycodone 5 mg 4–6 hourly (max 30 mg/day) with an aperient, **reduced to 2.5 mg over 75**. Discouraged: routine benzodiazepines, neuropathic agents for new acute presentations, acute nerve-root injections, and manual therapy in the first 48 h.

| Stem cue | Think | Do |
|---|---|---|
| Saddle numbness, poor urinary stream | Incomplete cauda equina | Urgent MRI + spinal referral before results |
| Back pain, fever, IVDU, CRP 180 | Spinal epidural abscess | Blood cultures, whole-spine contrast MRI |
| Known breast cancer, night pain, sensory level | Malignant cord compression | Whole-spine MRI, dexamethasone, oncology |
| Back pain, syncope, systolic 85 | Ruptured AAA | Aorta imaging or theatre — not a spine problem |

## 2.8 The "generally unwell" older patient

**The short version**
- "Off legs", "not herself" and a fall are **presentations of a physiological problem**. The commonest answers are **infection, MI, medication and metabolic derangement**.
- ⚑ **Fever is often absent and hypothermia may replace it**; the leucocyte response is blunted; a normal WCC excludes nothing.
- **Silent MI** — a large minority of MIs in older patients present without chest pain, as dyspnoea, confusion, syncope or falls. **ECG and troponin belong in the baseline screen.**
- **Delirium is the presenting sign of physical illness** here and needs a cause found, not a label (→ Geriatrics).

**Why the presentation is atypical.** Reduced reserve, blunted thermoregulation and immune response, polypharmacy masking tachycardia and fever, baseline cognitive impairment lowering the threshold for delirium, and multimorbidity giving several coexisting explanations. Consequence: **the abnormal number in the obs set is the finding, and it is never non-specific.** RR 26 in an 84-year-old with no cough is sepsis, PE, acidosis or heart failure — not "age".

**Baseline screen.** Obs including **temperature and postural BP**; **BSL**; **ECG**; **urinalysis** — with the caveat that **asymptomatic bacteriuria is common and a positive dipstick is not a diagnosis of UTI in a delirious older person**; FBC, U&E, LFT, CRP, calcium, TSH; **troponin**; **VBG with lactate**; CXR; **medication reconciliation**; and a **collateral history** of baseline cognitive and functional state — the most informative item available and the one most often missing from the stem.

**Occult sepsis.** Australian practice follows the **Sepsis Clinical Care Standard (ACSQHC, 2022)**; criteria, fluids and antimicrobial timing → **§4**. The front-door point: **hypothermia, new delirium, falls, unexplained tachypnoea, hypotension relative to the patient's usual BP, or a rising lactate** are all sepsis presentations, and absent fever, leucocytosis and localising symptoms do not weigh against it.

**Silent MI.** Older patients, women, people with diabetes (autonomic neuropathy) and First Nations patients are over-represented among ACS presentations without chest pain — dyspnoea, syncope, epigastric pain, confusion or an unexplained fall; the **2025 NHFA/CSANZ guideline** explicitly addresses these priority populations. A "generally unwell" stem containing an ECG finding, a troponin or a diabetic history is an ACS stem.

**Medications** are the most reversible cause (→ Geriatrics): postural hypotension (antihypertensives, diuretics, α-blockers); delirium (anticholinergics, opioids, benzodiazepines); **sulfonylurea hypoglycaemia**, long-acting and prone to recurrence, so admit and observe rather than treat-and-street; hyponatraemia (thiazides, SSRIs); AKI from the triple whammy of ACE inhibitor/ARB plus diuretic plus NSAID; digoxin and lithium toxicity with any fall in renal function.

⚑ **"Medically clear" is not "safe to discharge".** Function, cognition, carer capacity, mobility and home circumstances determine disposition as much as the diagnosis; a patient who cannot get off the floor at home is not dischargeable on a normal workup.

| Stem cue | Think | Do |
|---|---|---|
| 84, "off legs", temp 35.4, RR 24 | Sepsis with hypothermia | Lactate, cultures, antimicrobials (§4) |
| 79, diabetic, sudden dyspnoea, no chest pain | Silent MI | ECG within 10 min, troponin |
| New confusion, positive urine dipstick | *Not* automatically a UTI | Keep looking — CXR, ECG, meds, bloods |
| Recurrent hypoglycaemia on gliclazide | Sulfonylurea toxicity | Glucose, admit and observe — rebound expected |
| Fall on ramipril + indapamide + ibuprofen | AKI, postural hypotension | U&E, postural BP, withhold the triple whammy |

## 2.9 The drug-affected or agitated patient

**The short version**
- Agitation is a **presentation, not a diagnosis** — hypoxia, hypoglycaemia, head injury, hypotension, sepsis, withdrawal, toxidrome and pain all present this way first.
- ⚑ **Never sedate before a BSL and a set of obs.** Sedating undiagnosed hypoglycaemia or hypoxia is the classic fatal error.
- Verbal de-escalation and environmental modification come first (NSW ACI ECAT adult protocol).
- ⚑ **Droperidol is the Australian first-line parenteral agent** (Queensland Health v5.0, 2024): **10 mg IM, repeatable at 15 min, max 30 mg/24 h**; **benzodiazepines are not recommended first-line parenterally**.

**Exclude before labelling it behavioural.** The NSW ACI adult ABD protocol lists psychosis, acute delirium, acute metabolic disorder, head trauma, fever, post-ictal state, infection, intoxication or withdrawal, and unmanaged pain; add hypoxia, hypoglycaemia, hypotension, hypercapnia, raised ICP, thyrotoxicosis, serotonin syndrome and anticholinergic delirium. Assessment runs A–G, ending in **glucose**. **Pupils and skin are the highest-yield findings in an uncooperative patient** — pinpoint with hypoventilation = opioid; dilated with dry flushed skin and retention = anticholinergic; dilated with diaphoresis and hypertension = sympathomimetic; dilated with clonus (legs > arms) = serotonin syndrome. Toxidromes and antidotes → **§7**.

**Withdrawal.** Alcohol withdrawal peaks at 24–72 h with tremor, sweating, tachycardia, hypertension and agitation; withdrawal seizures come early, delirium tremens later with real mortality. Both alcohol and benzodiazepine withdrawal need adequate benzodiazepine, **thiamine before glucose**, and a search for the precipitating intercurrent illness → Psychiatry.

**Sedation, Australian practice.** The **Sedation Assessment Tool** runs **+3 to −3**: +3 combative and violent; +2 very agitated with loud outbursts; +1 anxious/restless; 0 awake, calm, cooperative; −1 asleep but rousable to name; −2 responds only to physical stimulation; −3 no response. **Effective sedation = a fall of two SAT levels or a return to zero.**

Queensland Health v5.0 (21 October 2024), adult: **droperidol 10 mg IM first line, repeatable once at 15 min, max 30 mg/24 h**; **10 mg IV** where access exists; for SAT +1 with an acceptable oral route, **diazepam 10–20 mg or olanzapine 10 mg orally**; **ketamine 4–6 mg/kg IM** second line after failed droperidol sedation. Benzodiazepines alone or with droperidol carry more adverse events and are not first-line parenterally. ⚑ **Hard sequencing rule if IM olanzapine has been given: a parenteral benzodiazepine must not be given until at least 1 hour after the IM olanzapine dose, and the two must never be drawn up in the same syringe or given simultaneously** — the combination causes excessive sedation and cardiorespiratory depression, and has caused death. The interval runs *forwards from the olanzapine*, not the other way round. ⚑ **Interstate divergence:** the NSW ACI adult ABD protocol lists **olanzapine 5 mg oral once only** against **Queensland Health's olanzapine 10 mg oral**.

**Monitoring after parenteral sedation (Queensland Health v5.0).** Continuous pulse oximetry; vitals every 5 min for 20 min; SAT every 15 min for 60 min. **Escalate if SpO₂ <94%, RR <10, pulse <50, BP <90/50, or GCS motor score <5.** Adult figures; paediatric ABD has separate NSW ACI and Queensland protocols → see Paediatrics. **Restraint** is a last resort needing documented justification and continuous observation, and is a bridge to chemical sedation, not an alternative (→ Psychiatry).

| Stem cue | Think | Do |
|---|---|---|
| Agitated, BGL 2.1 | Hypoglycaemia | Glucose — do not sedate |
| Dilated pupils, dry skin, retention, delirium | Anticholinergic toxidrome | Supportive care (§7) |
| Clonus greater in the legs, hyperthermia | Serotonin syndrome | Cease agent, cool, benzodiazepine (§7) |
| SAT +3, de-escalation failed | Parenteral sedation indicated | Droperidol 10 mg IM + full monitoring |

## Rapid-Recall Discriminators

| Cue | Answer |
|---|---|
| ATS category 2 maximum waiting time (all ages, ACEM) | Within 10 minutes |
| Australian standard for 12-lead ECG in suspected ACS (ACSQHC Clinical Care Standard) | Within 10 minutes of first emergency clinical contact |
| Primary PCI target, 2025 NHFA/CSANZ ACS guideline | <60 min from first medical contact at a PCI-capable centre, <90 min at a non-PCI-capable centre |
| ST depression maximal V1–V3, tall R waves, upright T waves | Posterior ACOMI — posterior leads and emergent reperfusion, not "anterior ischaemia" |
| EDACS-ADP low-risk criteria (Than, *Emerg Med Australas* 2014) | EDACS <16, no new ischaemia on ECG, negative troponin at 0 h and 2 h |
| NT-proBNP ruling out acute heart failure, adult (ICON-RELOADED 2018) | <300 pg/mL |
| Australian definition of hypoglycaemia in an adult | Blood glucose below 4.0 mmol/L |
| ESC 2018 disposition for syncope with only low-risk features | Discharge from the ED — routine admission is not indicated |
| Canadian Syncope Risk Score range and high-risk cut-off (CMAJ 2016) | −3 to +11; high risk from 4 |
| Sensitivity of non-contrast CT for SAH within 6 hours of onset | ~98%, falling steeply thereafter |
| Ottawa SAH rule performance and correct use (validated 2017) | 100% sensitive, ~13.6% specific — rule-out only, never a justification to image |
| Adult glucocorticoid for GCA with threatened or established vision loss (ACR/VF 2021) | IV methylprednisolone 500–1000 mg/day for 3–5 days |
| Imaging needed to exclude cerebral venous sinus thrombosis | CT or MR venography — a normal non-contrast CT does not exclude it |
| NSW ACI action when cauda equina syndrome is suspected | Urgent MRI plus spinal surgical referral made before investigations are complete |
| First-line parenteral sedation, adult ABD (Queensland Health v5.0, 2024) | Droperidol 10 mg IM, repeatable at 15 min, max 30 mg in 24 h |
| Effective sedation on the Sedation Assessment Tool | A fall of two SAT levels, or a return to zero |

**Sources**

- ACEM *P06 Policy on the Australasian Triage Scale* and *G24* (revised 2016, reviewed 2023); ACSQHC *Emergency Triage Education Kit*; ACEM/RANZCR *Guidelines on Diagnostic Imaging*, G126 (2012).
- NHFA/CSANZ *Comprehensive Australian Clinical Guideline for Diagnosing and Managing Acute Coronary Syndromes 2025*, Heart Lung Circ 2025;34:309–397 — supersedes 2016; introduces ACOMI.
- ACSQHC *Acute Coronary Syndromes Clinical Care Standard* (2014, reviewed 2019; not yet updated against the 2025 guideline) and *Sepsis Clinical Care Standard* (2022).
- NSW ACI Emergency Care Institute: PACSA (2021, updated Oct 2025); chest pain/CTCA, acute low back pain and headache clinical tools; adult ECAT protocols. Than M, et al. EDACS, *Emerg Med Australas* 2014;26(1):34–44.
- Queensland Health QH-GDL-438 v5.0, 21 October 2024 (acute severe behavioural disturbance; includes the SAT).
- Stroke Foundation, *Australian and New Zealand Living Clinical Guidelines for Stroke Management*; Therapeutic Guidelines (eTG complete) and AMH, current editions; Australian PI *Penthrox*, October 2023.
- Maz M, et al. 2021 ACR/Vasculitis Foundation guideline for GCA; Australian review, *Medicine Today*, November 2025. Brignole M, et al. 2018 ESC syncope guidelines, *Eur Heart J* 2018;39:1883–1948.
- International rules: CSRS (*CMAJ* 2016, validated 2022); Ottawa SAH (Perry, *CMAJ* 2017); Canadian CT Head (Stiell, *Lancet* 2001) and Canadian C-Spine; ADD-RS (Rogers, *Circulation* 2011); Wells; PERC; ICON-RELOADED (*J Am Coll Cardiol* 2018) — none endorsed by an Australian guideline.

---

# Critical Care Notes — Section 3: Shock, Fluids, Electrolytes and Transfusion

*Sources: NBA PBM Module 4 Critical Care (2012/2013, still in force) and NBA/THANZ critical bleeding guideline (MJA 2024); THANZ/MJA warfarin reversal statement (2025); Lifeblood (2026); Queensland Health hypo-electrolyte guideline (2023); WACHS hyperkalaemia guideline (2024); SESLHD/RHW procedures (2021–2025); SLHD adult MTP (2021); NSW CEC and TGA on andexanet (2026); Australian Prescriber, AMH, eTG; ANZ trials SAFE, CHEST, ARISE, PLUS; international guidance labelled as such. Scope: shock classification, fluid responsiveness and choice, vasoactive support, electrolyte and acid–base emergencies, transfusion and coagulopathy in the critically ill adult.*

Cross-references, not repeated: resuscitation **CC §1**; sepsis bundle and source control **CC §4**; ventilation **CC §5**; AKI/RRT **CC §6**; poisoning **CC §7**; haemorrhagic shock grading, damage control and trauma MTP activation **Surgery §5**; perioperative fluids **Surgery §2**; preoperative PBM **Surgery §1**; hyperkalaemia in CKD/AKI **Renal**; DKA/HHS **Endocrine**; transfusion reactions and haematological DIC **Haematology & Oncology**; warfarin/DOAC pharmacology **Haematology** and **Cardiology**. **All doses adult unless marked paediatric.**

---

## 3.1 Classification of shock and the haemodynamic grid

**The short version**
- Shock = inadequate DO₂ for demand, not a BP number. Normotensive shock exists.
- Four mechanisms — hypovolaemic, cardiogenic, distributive, obstructive. Papers test the *pattern*, not the label.
- Discriminating trio: preload/CVP, cardiac output, SVR. ScvO₂ says whether output is meeting demand.
- Warm + wide pulse pressure + low diastolic = distributive. Cold + narrow pulse pressure = low-output.
- Obstructive shock is fixed with a procedure, not a drug — look for it every time.

Treat the CVP column as a *direction*, not a measurement (§3.2).

| Type | CVP/preload | CO | SVR | ScvO₂ | Typical stem |
|---|---|---|---|---|---|
| Hypovolaemic | ↓ | ↓ | ↑ | ↓ | Melaena, ruptured AAA, burns, severe D&V |
| Cardiogenic | ↑ | ↓ | ↑ | ↓ | STEMI + crackles + cool peripheries |
| Distributive (septic, anaphylactic, neurogenic, liver failure) | ↓/normal | ↑ (↓ if myocardial depression) | ↓↓ | ↑/normal | Fever, warm, bounding, wide pulse pressure |
| Obstructive — tamponade | ↑ (equalised) | ↓ | ↑ | ↓ | Muffled sounds, pulsus paradoxus, ↑JVP |
| Obstructive — tension pneumothorax | ↑ | ↓ | ↑ | ↓ | Absent breath sounds, tracheal shift, ↑ airway pressures |
| Obstructive — massive PE | ↑ (right-sided) | ↓ | ↑ | ↓ | Pleuritic pain, hypoxia, RV strain |

**Septic shock is not purely distributive** — sepsis-induced cardiomyopathy gives a subgroup low output with low SVR; that is the dobutamine patient (§3.5). **Neurogenic shock** (cord injury above ~T6) is distributive but with *bradycardia*, because cardiac sympathetic outflow is lost while vagal tone persists; still exclude haemorrhage. If a stem gives two mechanisms, treat the obstructive or hypovolaemic one first.

**Reading the obs set.** Narrow pulse pressure (<~25% of systolic) = low stroke volume + vasoconstriction; wide pulse pressure with low diastolic (100/40) = vasodilatation. Hypotension is late. CRT >3 s, knee mottling and UO <0.5 mL/kg/h are flow markers. **Lactate clearance over hours beats any single value**; adrenaline, salbutamol, liver failure, seizures and metformin raise lactate without shock.

---

## 3.2 Assessing fluid responsiveness

**The short version**
- Fluid responsiveness = ≥10–15% rise in stroke volume after a preload challenge; only ~half of unstable patients are responsive.
- ⚑ **Static measures (CVP, PAOP) do not predict responsiveness** — this overturns the CVP 8–12 mmHg target of the EGDT era.
- Dynamic measures: passive leg raise with a stroke-volume measure, SVV/PPV, echo.
- Every dynamic test has invalidating conditions — knowing them is the exam point.
- Fluid-*responsive* ≠ fluid-*needing*: a normal person is responsive and needs nothing.

**Why CVP fails.** CVP is a pressure, preload is a volume, and the relationship depends on ventricular compliance, intrathoracic pressure, PEEP, intra-abdominal pressure and pericardial constraint — all deranged in the critically ill. A *very low* CVP still makes tamponade, tension pneumothorax and RV failure unlikely and a *very high* one is a reason to stop fluid; the middle is noise.

**Passive leg raise.** From 45° semi-recumbent, tilt the bed so the trunk is horizontal and legs are at 45° — autotransfuses ~300 mL centrally, fully reversible. Measure **stroke volume/CO** (echo VTI, pulse contour, oesophageal Doppler) within 60–90 s; ≥10% rise predicts responsiveness. Exam points: measure SV, **not BP**; tilt the bed rather than lifting the legs (pain gives a false positive); invalidated by raised intra-abdominal pressure, compression stockings and any patient who cannot be positioned.

**SVV/PPV.** Positive-pressure breaths cyclically alter stroke volume; the swing locates the patient on the Starling curve, threshold ~12–13%. Invalidating conditions, heavily examined: **spontaneous breathing effort, arrhythmia (especially AF), tidal volume <8 mL/kg PBW, low compliance, open chest, high RR:HR ratio, RV failure** — and since lung-protective ventilation uses 6 mL/kg PBW (CC §5), SVV/PPV is uninterpretable in many ICU patients.

**Echo and IVC.** Echo answers the mechanism question best: hyperdynamic "kissing" LV = hypovolaemia/vasodilatation; dilated poorly contracting LV = cardiogenic; dilated RV with septal flattening = PE/RV failure; effusion with RA/RV diastolic collapse = tamponade. Aortic VTI is the practical SV surrogate for PLR. **IVC** is over-interpreted — distensibility correlates modestly only in a *fully passive* ventilated patient and views are often unobtainable: screening cue, never a target. **The fluid challenge** is a small timed bolus (250–500 mL over 5–15 min) with a pre-defined endpoint and a decision to stop if unmet.

---

## 3.3 Fluid choice: crystalloid, albumin, starch

**The short version**
- Crystalloid first. Balanced solutions (Hartmann's, Plasma-Lyte 148) are a reasonable default; 0.9% saline causes hyperchloraemic acidosis in volume but is not an error.
- ⚑ **PLUS** (ANZ, NEJM 2022) found **no** mortality or RRT difference between balanced solution and saline in ICU.
- Albumin is not superior for general resuscitation and **SAFE showed harm in TBI**.
- Starches are not used: **CHEST** (ANZ) showed more RRT with no survival benefit.
- Glucose 5% is not a resuscitation fluid — it distributes across total body water.

**Australian evidence.** **PLUS**: 5,037 patients, 53 ANZ ICUs; 90-day mortality 21.8% vs 22.0%, OR 0.99 (95% CI 0.86–1.14, p = 0.90); new RRT 12.7% vs 12.9%. **SAFE** (2004): ~7,000 patients, 4% albumin vs saline, 28-day mortality 20.9% vs 21.1% (RR 0.99, 95% CI 0.91–1.09) — safe but not superior, with the **TBI subgroup worse on albumin (24.5% vs 15.1%; RR 1.62, 95% CI 1.12–2.34)**. **CHEST** (2012): 7,000 patients, 6% HES 130/0.4 vs saline, 90-day mortality 18.0% vs 17.0% (NS) but RRT 7.0% vs 5.8% (RR 1.21, 95% CI 1.00–1.45, p = 0.04) — that, with 6S, ended starch use.

⚑ **Named disagreement.** The international **SSC 2026** conditionally recommends **balanced crystalloids over 0.9% saline** (moderate certainty); the ANZ **PLUS** trial (NEJM 2022) found **no difference**. The evidence base is split: **SMART** (2018, USA, n = 15,802, unblinded cluster-randomised) found fewer major adverse kidney events at 30 days with balanced crystalloids (14.3% vs 15.4%), while **BaSICS** (2021, Brazil, n = 11,052) found no 90-day mortality difference — so SSC 2026's recommendation rests largely on SMART, and PLUS and BaSICS, the two largest blinded/ICU-wide trials, are both neutral. That is why the recommendation is conditional and why saline is not an error in Australia. Reconciliation: balanced solutions are a sensible default and what most Australian ICUs stock, but the effect is small and saline is not an error. Saline suits hypochloraemic metabolic alkalosis (vomiting, high NG losses), hyponatraemia, and TBI where Hartmann's (Na ~131 mmol/L) is relatively hypotonic; balanced solution suits large-volume resuscitation, DKA (Endocrine), and anywhere a hyperchloraemic acidosis would confuse interpretation.

**Albumin** — an option after large crystalloid volumes, in decompensated cirrhosis (20% albumin for large-volume paracentesis, SBP, hepatorenal — Gastroenterology), and in plasma exchange. **Contraindicated in TBI** (SAFE). SSC 2026 (international) suggests crystalloid alone over crystalloid plus albumin. It is a Lifeblood blood product, so consent and traceability rules apply.

---

## 3.4 Fluid overload as iatrogenic harm, and de-resuscitation

**The short version**
- Positive cumulative balance is independently associated with mortality, prolonged ventilation, AKI and poor wound healing.
- Resuscitation fluid saves lives in hours and harms over days — salvage → optimisation → stabilisation → de-escalation.
- Interstitial oedema raises intra-abdominal pressure, worsens gas exchange and lowers renal perfusion pressure.
- **Fluid creep** (diluents, flushes, antibiotic carriers, TPN, sedation) is 1–1.5 L/day in a ventilated adult and nobody prescribed it.
- De-resuscitation = stop maintenance, deprescribe creep, then active negative balance once shock has resolved.

**Abdominal compartment syndrome.** Intra-abdominal hypertension = sustained IAP ≥12 mmHg; ACS = sustained IAP >20 mmHg **with new organ dysfunction**. Stem clues: tense distended abdomen, rising airway pressures with falling tidal volumes on volume control, oliguria refractory to fluid. Measure bladder pressure; decompress — NG and rectal decompression, drainage of ascites, neuromuscular blockade, laparotomy if refractory.

**De-resuscitation** starts once vasopressors are weaning and lactate has cleared: stop maintenance crystalloid, convert to enteral fluid, concentrate infusions, loop diuretic with K⁺/Mg²⁺/renal monitoring, ultrafiltration if already on RRT (CC §6). Trap: restarting resuscitation for a BP dip in a patient still 12 L positive.

---

## 3.5 Vasopressors and inotropes

**The short version**
- **Noradrenaline is first-line in essentially all shock states** other than pure low-output cardiogenic states.
- ⚑ **Second-line in septic shock is vasopressin**, added when noradrenaline requirement is escalating; adrenaline is third.
- Default **MAP target ≥65 mmHg**; ⚑ the SSC 2026 (international) **algorithm** also gives **60–65 mmHg at age ≥65** (algorithm figures, not graded recommendations).
- Dobutamine and milrinone are inotropes, not vasopressors — both vasodilate and both can drop BP.
- Peripheral noradrenaline is acceptable short-term via a large proximal cannula — SESLHD: source a central line if needed **beyond 2 hours**; extravasation → **phentolamine**.

*Noradrenaline* — mainly α₁ with modest β₁; raises SVR and venous return with little tachycardia. SSC 2026 (international) **strong** recommendation as first-line over dopamine, adrenaline and selepressin.

*Vasopressin* — V₁ agonist, catecholamine-independent, given at a **fixed low dose** (0.03 units/min in the trial literature; follow local protocol) rather than titrated. **This answers the second-line vasopressor stem.** SSC 2026 (international, conditional, moderate certainty) recommends adding it on escalating noradrenaline; Australian ICU practice is concordant, though no Australian guideline publishes an independent numerical trigger. Watch digital and mesenteric ischaemia.

*Adrenaline* — mixed α/β; third-line in septic shock (SSC 2026, conditional, very low certainty), **first-line in anaphylaxis** (**Immunology & Allergy**; paediatric doses **Paediatrics §3**) and arrest (CC §1). Raises lactate via β₂-driven aerobic glycolysis — a rising lactate on adrenaline is not automatically worsening perfusion.

*Inotropes.* **Dobutamine** — β₁ inotrope with β₂ vasodilatation: raises CO, lowers SVR, so may **lower** MAP; add on top of noradrenaline, never alone in a hypotensive patient, for persistent hypoperfusion with cardiac dysfunction despite adequate volume and MAP. **Milrinone** — PDE-3 "inodilator" for downregulated or β-blocked receptors and for pulmonary hypertension/RV failure; renally cleared with a long half-life, so it accumulates in AKI. ⚑ **Dopamine** is no longer first-line (more arrhythmia, no renal protection); "renal dose dopamine" is obsolete.

**MAP targets.** The **SSC 2026 algorithm** (international) targets **MAP ≥65 mmHg, or 60–65 mmHg at age ≥65** — both figures come from the treatment algorithm rather than from separately graded recommendations, so do not attach a strength or certainty grade to them. **SEPSISPAM** (2014, international, n = 776) compared 80–85 vs 65–70 mmHg: 28-day mortality 36.6% vs 34.0% (HR 1.07, 95% CI 0.84–1.38), more new AF at the higher target (6.7% vs 2.8%, p = 0.02), but in the **chronic hypertension subgroup** less RRT with the higher target (31.7% vs 42.2%, p = 0.046). A higher MAP is therefore justified selectively — chronic hypertension with rising creatinine, and pressure-dependent organs (raised ICP with a CPP target, acute cord injury). The **65 trial** (JAMA 2020, international, n = 2,600) found 90-day mortality 41.0% with permissive hypotension vs 43.8% usual care — **not statistically significant** (absolute difference −2.85%, 95% CI −6.75 to 1.05, p = 0.15); only the pre-specified *adjusted* analysis reached significance (OR 0.82, 95% CI 0.68–0.98). It establishes that permissive hypotension is **safe** at age ≥65, not that it is superior.

**Peripheral vs central.** Central access is standard for sustained infusion, but waiting for it delays resuscitation. Peripheral use is accepted short-term via a **large, proximal, well-sited cannula (antecubital or above; not hand, wrist or a flexion point)** with a visible site. SESLHD: a large peripheral vein (e.g. antecubital) may be used **in an emergency, pending insertion of a PICC or central line**; review the site **every 15 minutes** while peripheral, and **escalate and source a central venous catheter if ongoing noradrenaline is required (>2 hours of use)**. **Dose (adult):** typical infusion **4 mg or 6 mg in 100 mL**, commence ~**0.02–0.05 microgram/kg/min**, titrate in 0.02 microgram/kg/min increments to the MAP target; usual range **0.05–1 microgram/kg/min** (some units dose in microgram/min). **Extravasation** causes vasoconstrictive necrosis: stop the infusion, aspirate through the cannula before removing it, elevate the limb, and infiltrate with **phentolamine** (α-blocker) diluted in 0.9% saline as early as possible — NSW medicine guidelines carry the dilution; doses are institution-specific.

---

## 3.6 Cardiogenic shock and mechanical support (outline)

**The short version**
- Hypotension with pulmonary congestion, low CO and end-organ hypoperfusion despite adequate filling.
- Commonest cause is acute MI with LV failure; look for mechanical complications and RV infarction.
- Early revascularisation is what changes mortality (Cardiology).
- Fluid is not the reflex — but **RV infarct is preload-dependent**: give volume, avoid nitrates.
- Mechanical support is a bridge, never a therapy, and needs a defined destination.

Assess with early echo (LV function, RV size, valves, VSD, effusion), ECG, troponin, lactate, ScvO₂. Support: noradrenaline for MAP with dobutamine for output; cautious diuresis once perfused; NIV (CC §5). **RV infarction** is the classic trap: inferior STEMI, hypotension, raised JVP with **clear lung fields**, ST elevation in V4R — fluid load, and **no** nitrates or vasodilating opioid doses.

**Mechanical support.** ⚑ *IABP* — no mortality benefit in MI-related cardiogenic shock (IABP-SHOCK II, international), so no longer routine. *Impella* — direct LV unloading, selected Australian centres. *VA-ECMO* — full support for refractory shock or arrest via the ANZICS/ELSO network; vascular, haemorrhagic, thrombotic and neurological complications, and LV distension may need venting. All are bridge-to-decision, -recovery or -transplant, agreed in advance.

---

## 3.7 Potassium emergencies

**The short version**
- **Stabilise (calcium) → shift (insulin/glucose ± salbutamol ± bicarbonate) → remove (binder, diuretic, dialysis).**
- Calcium does **not** lower potassium; shifting agents are temporary and the level rebounds at 4–6 h unless you also remove.
- A normal ECG does not exclude dangerous hyperkalaemia; the rate of rise matters as much as the level.
- Refractory hypokalaemia is **hypomagnesaemia** until proven otherwise.
- IV potassium (**adult**) has strict ceilings: max **40 mmol/L** peripherally, general max rate **10 mmol/h**, **up to 20 mmol/h peripherally only via a volumetric infusion pump with continuous cardiac monitoring** — the pump, **not** central access, is what permits the faster rate. In **DKA** the 20 mmol/h peripheral rate is capped at **4 hours** (→ §6.9).

**Hyperkalaemia ladder (adult)** — WACHS *Hyperkalaemia guideline* (v1.01, current from 4 April 2024) and SESLHD/RHW *Management of hyperkalaemia in adults* (CLIN168, August 2025). They agree on the agents but **not on every detail**: calcium gluconate 10% 10 mL is given over ~5 min (WACHS) vs 2–3 min (RHW); insulin/glucose is given over 15 min (WACHS) vs over 30 min peripherally / 5 min centrally (RHW); resonium is 15–30 g PO 3–4×/day (WACHS) vs 15 g PO 3–4×/day or 30–50 g PR daily (RHW); and salbutamol and frusemide appear in the WACHS pathway but not the RHW treatment table.

| Step | Agent and adult dose | Mechanism | Onset | Duration | Notes |
|---|---|---|---|---|---|
| 1 Stabilise | Calcium gluconate 10% 10 mL IV (2.2 mmol Ca) over ~5 min, large vein; repeat at 5 min if ECG changes persist | Raises myocyte threshold potential | 1–5 min | 30–60 min | **Does not lower K⁺.** Continuous ECG. Calcium chloride 10% 10 mL = 6.8 mmol (~3×) — central access or arrest |
| 2 Shift | Actrapid 10 units IV with 50 mL glucose 50% | Na⁺/K⁺-ATPase | ~30 min | 4–6 h | Falls 0.5–1.5 mmol/L. **Check BGL first**, then at 15–30 min and hourly for 6 h — delayed hypoglycaemia is the commonest iatrogenic harm |
| 3 Shift | Salbutamol 10 mg nebulised over ~10 min | β₂ shift | ~30 min, peak ~90 min | 2–6 h | Falls 0.5–1.5 mmol/L; additive to insulin. Ineffective if β-blocked |
| 4 Shift (conditional) | Sodium bicarbonate 8.4% 50 mL IV over 5–10 min | Shift, only if significant acidosis | Variable | Variable | Inconsistent; **not a single agent**. Never in the same line as calcium |
| 5 Remove | Sodium polystyrene sulfonate 15–30 g PO in 45–60 mL water, 3–4×/day | GI cation exchange | Hours | Variable | Falls 0.5–1 mmol/L over 1–6 h. Contraindicated in ileus/obstruction. Cease when K⁺ <5.0–5.2 |
| 6 Remove | Frusemide 20–40 mg IV over 5–10 min | Kaliuresis | ~30 min | Hours | Needs urine output; **never alone** |
| 7 Remove | Haemodialysis | Definitive | Immediate | — | Refractory, anuric, or ongoing release (CC §6) |

⚑ **Named divergence in Australian severity bands**: WACHS (2024) mild **5.2–5.9**, moderate 6.0–6.5, severe >6.5 mmol/L; SESLHD/RHW (2025) mild **5.5–5.9**, moderate 6.0–6.4, severe ≥6.5 mmol/L. The triggers are **not** identical either. SESLHD/RHW: K⁺ ≥6.0 mmol/L **or** ECG changes → active treatment and close observation. WACHS: treat immediately if ECG changes, symptoms/signs, **or K⁺ >6.5 mmol/L**; at 6.0–6.5 it says "**consider** insulin with glucose and/or salbutamol and/or Resonium". Safe examinable rule: **any ECG change, or K⁺ ≥6.0 mmol/L, treats** — WACHS mandates treatment only above 6.5. Treat the trigger, not the band.

**ECG progression**: peaked T waves → flattened/absent P and PR prolongation → QRS widening → sine wave → VF/asystole. Always ask *why*: AKI/CKD (Renal), K-sparing diuretics, ACEi/ARB, spironolactone, trimethoprim, NSAIDs, rhabdomyolysis, tumour lysis, digoxin toxicity (CC §7), suxamethonium in burns/denervation, adrenal insufficiency. Exclude pseudohyperkalaemia — well patient, normal ECG, haemolysed specimen.

**Hypokalaemia (adult).** Queensland Health (2023) bands: mild 3.1–3.5, moderate 2.5–3.0, severe <2.5 mmol/L. Mild → oral; moderate–severe → **60–80 mmol IV over 24 h** plus daily requirements. Consider continuous cardiac monitoring for any K⁺ <3.0 mmol/L. Recheck at 4 h and replace **magnesium** concurrently. ECG: flat T waves, ST depression, U waves, QT/QU prolongation, torsades, digoxin toxicity.

**IV potassium — the single rule (all figures ADULT). Stated identically in §3.7 and CC §6.9; read the two together.**
- **Maximum peripheral concentration 40 mmol/L** — anything more concentrated requires a **central venous catheter**.
- **General maximum peripheral rate 10 mmol/h.**
- **Up to 20 mmol/h may be given peripherally only if it runs through a volumetric infusion pump with continuous cardiac monitoring.** Queensland Health (adult electrolyte prescribing guideline v7.00, 2023) makes the **pump**, not central access, the requirement. The two contexts in which this is invoked are **severe hypokalaemia (K⁺ <2.5 mmol/L)** and **adult DKA**.
- ⚑ **In DKA the 20 mmol/h peripheral rate carries a hard 4-hour ceiling** (WACHS adult DKA guideline): if 20 mmol/h is still required beyond **4 hours**, insert a **central line and/or obtain HDU review**.
- Cardiac monitoring, frequent bloods and an infusion device are **mandatory** whenever the standard rate or concentration is exceeded.

---

## 3.8 Sodium: hyponatraemia and hypernatraemia

**The short version**
- Hyponatraemia is a water problem, not a salt problem, in most critically ill patients.
- Severe **symptomatic** hyponatraemia (seizures, coma) gets 3% saline immediately, whatever the chronicity.
- Ceiling ≤10 mmol/L in 24 h and ≤18 mmol/L in 48 h; **<8 mmol/L in 24 h if high risk** — to prevent osmotic demyelination. ⚑ Australian state guidelines are tighter: **8 mmol/L in 24 h is the working target**, 4–6 mmol/L/day if high risk.
- Overcorrection is treated: 5% glucose ± desmopressin. Sudden polyuria >100 mL/h is the warning.
- Hypernatraemia is a free-water deficit — correct slowly and treat the cause and the ongoing losses.

**Hyponatraemia.** Australian classification (Endocrinology Today, 2025): mild 130–134, moderate 125–129, profound <125 mmol/L; "severe" refers to *symptoms*, not a number. ⚑ **Queensland Health (SW1232 v7.00, 2023) bands differently** — mild 131–135, moderate 120–130, severe <120 mmol/L. This section uses Queensland Health bands for K⁺, Mg²⁺, PO₄³⁻ and Ca²⁺ but a different source for Na⁺, so "moderate hyponatraemia" in a stem could mean either. Assess tonicity (exclude pseudohyponatraemia from hyperlipidaemia/paraproteinaemia, translocational from hyperglycaemia or mannitol), volume status and urine Na/osmolality. Hypovolaemic (diuretics, GI losses, cerebral salt wasting) → isotonic crystalloid. Euvolaemic (SIADH — pneumonia, SAH, meningitis, positive-pressure ventilation, carbamazepine, SSRIs) → fluid restriction. Hypervolaemic → fluid and salt restriction.

**Acute treatment (adult).** **3% saline 100–150 mL IV over 10–20 min**, repeated as needed to a **4–6 mmol/L rise**, then stop and reassess — you are buying brain, not normalising sodium.

**Arithmetic, recomputed.** 3% NaCl = 30 g/L; MW 58.44, so 30 ÷ 58.44 = 0.513 mol/L = **513 mmol/L Na⁺**, and 100 mL delivers 51.3 mmol. Adrogué–Madias: ΔNa per litre = (infusate Na − serum Na) ÷ (TBW + 1). A 70 kg man, Na 108, TBW ≈ 0.6 × 70 = 42 L → (513 − 108) ÷ 43 = 405 ÷ 43 = **9.4 mmol/L per litre**, so 100 mL ≈ **0.9 mmol/L**. A 60 kg elderly woman, TBW ≈ 0.45 × 60 = 27 L → 405 ÷ 28 = **14.5 mmol/L per litre**, so 100 mL ≈ **1.4 mmol/L**. So the 70 kg man gains ~0.9 mmol/L per 100 mL (~1.4 per 150 mL), so a 4–6 mmol/L rise needs **four to six 100 mL boluses, or three to four 150 mL boluses**; the 60 kg elderly woman gains ~1.4 mmol/L per 100 mL (~2.2 per 150 mL), needing **three to four 100 mL boluses or two to three 150 mL boluses**. Note SESLHD caps hypertonic saline at a maximum of three 150 mL infusions, and in ICU only — so if the target is not met, escalate rather than continue bolusing. The Adrogué–Madias figure *under*-estimates the real rise once ADH switches off and a water diuresis starts, so recheck Na after each bolus rather than trusting the bolus count.

**Correction limits and ODS.** ≤10 mmol/L in 24 h, ≤18 mmol/L in 48 h; **<8 mmol/L per 24 h in high-risk patients** — serum Na <105 mmol/L, hypokalaemia, chronic alcohol use, liver disease, malnutrition (Endocrinology Today, 2025). ⚑ **Australian state guidelines are more conservative**: SESLHD (2021/2023) gives "not more than **8–10 mmol/L in the first 24 hours**" and, in high-risk patients, a target of **4–6 mmol/L daily**; Queensland Health (2023) gives "generally no more than **8 mmol/L in 24 hours**" for everyone. Safest exam answer: quote 10/24 h and 18/48 h as the ceiling, but say that **8 mmol/L in 24 h is the working Australian target** and 4–6 mmol/L/day in high-risk patients. ODS presents 2–6 days after correction with dysarthria, dysphagia, quadriparesis, pseudobulbar palsy, at worst locked-in; MRI lags. **Overcorrection**: 5% glucose and/or **desmopressin 1–4 microgram IV** to stop the free-water diuresis. Check Na 1–2 hourly during active correction and whenever UO >100 mL/h. Correcting potassium also raises sodium — count it in the budget.

**Hypernatraemia (adult).** Almost always water deficit: impaired thirst or access (sedated, intubated, delirious), osmotic diuresis, diabetes insipidus (central — post-neurosurgery, TBI; nephrogenic — lithium, hypercalcaemia), GI losses, or sodium loading. Inappropriately dilute urine with a high serum Na → DI; the desmopressin response separates central from nephrogenic. Treat with enteral water where possible, otherwise IV 5% glucose. Conventional ceiling for **chronic** hypernatraemia ~10 mmol/L per 24 h (cerebral oedema if faster); acute (<48 h) may be corrected faster.

---

## 3.9 Calcium, magnesium and phosphate

**The short version**
- Measure **ionised** calcium — albumin-corrected total is unreliable with rapid albumin and acid–base shifts.
- Citrate in blood products and citrate-anticoagulated RRT chelates calcium; hypocalcaemia is expected in massive transfusion.
- Magnesium is the fixer — refractory hypokalaemia, refractory arrhythmia, torsades.
- Phosphate depletion causes diaphragmatic weakness and failure to wean; refeeding syndrome is the classic trigger.
- Doses are adult; paediatric replacement is weight-based — use the relevant state paediatric guideline.

**Calcium.** Acidosis raises the ionised fraction and alkalosis lowers it, so hyperventilation can produce tetany at an unchanged total. ICU causes: citrate load, sepsis, pancreatitis, rhabdomyolysis, tumour lysis, hypomagnesaemia, post-parathyroidectomy. Signs: perioral paraesthesia, tetany, Chvostek/Trousseau, long QT, reduced contractility. Queensland Health (2023) severe/symptomatic adult replacement: calcium gluconate **two ampoules (4.4 mmol) in 100 mL 0.9% saline over 20 min**, then if needed 22 mmol in 900 mL at 50 mL/h. **Gluconate 10% 10 mL = 2.2 mmol; chloride 10% 10 mL = 6.8 mmol** — a classic mix-up.

**Magnesium** (Queensland Health 2023 bands: mild 0.71–0.9, moderate 0.4–0.7, severe <0.4 mmol/L). Severe/symptomatic: **10–20 mmol in 100 mL 0.9% saline over 1 hour**, faster in emergencies (torsades, eclampsia — Obstetrics); review at 6–12 h. Causes: diuretics, PPIs, alcohol, diarrhoea, aminoglycosides, amphotericin, cisplatin.

**Phosphate** (bands: mild 0.51–0.8, moderate 0.3–0.5, severe <0.3 mmol/L). Adult IV: one ampoule (**10 mmol**) sodium dihydrogen phosphate in 250 mL 0.9% saline over **2–6 h** into a large vein; in critical care, more concentrated solutions may be given **preferably via a central line** (10 mmol in 100 mL 0.9% saline), at up to 10 mmol/h, maximum 40 mmol over 4 h. Monitor phosphate, calcium and renal function 12–24 hourly (1–2 hourly if critically ill) — rapid phosphate causes hypocalcaemia and arrhythmia. Severe depletion → respiratory muscle weakness and failure to wean, myocardial depression, rhabdomyolysis, seizures. **Refeeding syndrome** (falling PO₄³⁻, K⁺, Mg²⁺ with thiamine depletion after reintroducing nutrition to a starved patient) is prevented by slow calorie reintroduction, thiamine before feeding and daily electrolytes.

---

## 3.10 Acid–base interpretation as a written-paper skill

**The short version**
- Fixed order: pH → primary disorder → compensation adequate? → anion gap → delta ratio → clinical fit.
- Compensation never fully normalises the pH and never overshoots; if it appears to, there are two disorders.
- Calculate the anion gap on **every** metabolic acidosis and check it against **your lab's** range.
- The delta ratio finds the second disorder hiding behind a high anion gap acidosis.
- A normal ABG does not exclude shock.

**Steps 1–3.** pH <7.35 acidaemia, >7.45 alkalaemia. Respiratory if PaCO₂ moves with the disorder, metabolic if HCO₃⁻/base excess does. Respiratory compensation is fast (minutes–hours), metabolic compensation takes 2–5 days — so an acute respiratory acidosis with a markedly raised bicarbonate implies chronicity or a coexisting metabolic alkalosis.

**Step 4 — anion gap.** AG = Na⁺ − (Cl⁻ + HCO₃⁻). ⚑ The "normal" range is analyser-dependent: older texts quote 8–16 mmol/L (**12–20 including K⁺**), whereas modern ion-selective electrode methods used by most Australian labs give lower values, often ~4–13 mmol/L — **use the range on the report**. **Correct for albumin**: the gap falls ~2.5 mmol/L per 10 g/L fall in albumin, so a hypoalbuminaemic patient can have a "normal" gap with a large unmeasured anion load. High gap: lactate, ketoacidosis (diabetic — Endocrine; alcoholic; starvation), renal failure, toxins (methanol, ethylene glycol, salicylate, metformin, paracetamol — CC §7). Normal gap (hyperchloraemic): GI bicarbonate loss (diarrhoea, high-output stoma, fistula), renal tubular acidoses, carbonic anhydrase inhibitors, and **large-volume 0.9% saline**.

**Step 5 — delta ratio** = (measured AG − normal AG) ÷ (normal HCO₃⁻ − measured HCO₃⁻). Per Brandis/LITFL (Australian): **<0.4** pure hyperchloraemic normal-gap acidosis; **0.4–0.8** mixed high-gap plus normal-gap (common in DKA after saline, and in renal failure); **1–2** uncomplicated HAGMA (lactic acidosis ~1.6; DKA nearer 1 because ketoanions are lost in urine); **>2** coexisting metabolic alkalosis or chronic respiratory acidosis with a high baseline bicarbonate.

**Worked example, recomputed.** Na 136, Cl 96, HCO₃⁻ 8, pH 7.10, lactate 9. AG = 136 − (96 + 8) = 136 − 104 = **32 mmol/L**. Taking normal AG 12 and normal HCO₃⁻ 24: ΔAG = 32 − 12 = **20**; ΔHCO₃⁻ = 24 − 8 = **16**; delta ratio = 20 ÷ 16 = **1.25** — uncomplicated HAGMA consistent with lactic acidosis alone, no hidden second metabolic disorder.

**Patterns.** Metabolic acidosis + respiratory compensation + high lactate → shock. Respiratory acidosis with normal bicarbonate → acute hypoventilation; with high bicarbonate → chronic retention, acutely decompensated. Metabolic alkalosis with hypokalaemia and hypochloraemia → vomiting/NG losses, diuretics. Respiratory alkalosis + HAGMA with tinnitus → **salicylate poisoning** (CC §7). A normal or rising PaCO₂ in a severe asthmatic signals exhaustion (CC §5).

---

## 3.11 Transfusion in the critically ill

**The short version**
- ⚑ Restrictive transfusion is the Australian standard: **NBA PBM Module 4 — <70 g/L transfusion likely appropriate; 70–90 g/L not associated with reduced mortality; >90 g/L generally unnecessary.**
- Prescribe **one unit at a time with clinical reassessment**, not "two units".
- ICU anaemia is multifactorial: dilution, inflammation with functional iron deficiency, blunted erythropoietin, blood loss, phlebotomy.
- Restrictive thresholds do **not** automatically apply to active major haemorrhage or acute coronary syndromes.
- Every transfusion needs a documented indication, consent where practicable, and a post-transfusion Hb.

**The Hb 68 g/L stem, answered.** **NBA PBM Module 4 — Critical Care** (NHMRC-approved 14 December 2012, released 5 April 2013; **the module is currently under review and the original version remains in force** — there is no substantive 2024 revision, the Quick Reference Guide carries the 2012/2013 recommendations and only the hosting URL is dated 2024), Recommendation R1: a **restrictive transfusion strategy** should be employed (Grade B). PP3 gives the bands above; PP1 requires the decision to rest on clinical status and not Hb alone; PP2 endorses **single-unit transfusion with reassessment** in non-bleeding patients. So the **threshold is 70 g/L**, this patient is below it, and the correct action is **one unit then reassess** — not two, and not "top up to 100". One adult unit raises Hb by roughly 10 g/L in a 70–80 kg adult. Concurrently look for the cause (occult GI loss, haemolysis, marrow suppression) and cut phlebotomy volume. Lineage: **TRICC** (1999, international) showed restrictive 70 g/L non-inferior to liberal 100 g/L in general ICU; **TRISS** (2014, international, n = 1,005, septic shock) showed no difference between 70 and 90 g/L.

**Where restrictive thresholds do not apply.** **Active critical bleeding** — Hb lags and is dilution-dependent; it must not gate resuscitation (§3.12). **ACS** — ⚑ **MINT** (2023, international, n = 3,504) compared restrictive (70 g/L, transfusion permitted <80 g/L) with liberal (≥100 g/L) in MI with anaemia: death or recurrent MI at 30 days 16.9% vs 14.5% (**RR 1.15, 95% CI 0.99–1.34, p = 0.07**; unadjusted RR 1.16, 95% CI 1.00–1.35) — not significant, but the CI does not exclude harm from restriction. Restrictive arm = transfusion **permitted** at Hb <80 g/L and **strongly recommended** at <70 g/L; liberal arm = maintain Hb ≥100 g/L. Australian practice commonly uses ~80 g/L in ACS; state the uncertainty rather than a false certainty. **Cardiac surgery** — restrictive is non-inferior in trials but governed by NBA Module 2 and local protocol (Surgery §1). **Neurocritical care** — no high-quality threshold evidence; say so rather than inventing a number.

**Product notes.** Australian red cells are **leucodepleted as standard**; **irradiated** components prevent TA-GvHD (severely immunocompromised recipients, HLA-matched or relative-directed donations, after certain purine analogues). **Platelets** (NBA Module 4): without acute bleeding, transfusion may be appropriate at **<20 × 10⁹/L**; **≥50 × 10⁹/L** generally permits invasive procedures. **FFP**: routine use for a mildly deranged INR is explicitly **not advised**, and INR ≤2 may not require FFP pre-procedure.

---

## 3.12 Massive transfusion and critical bleeding

**The short version**
- Activate the protocol early, give defined packs, communicate with the blood bank — it is a systems problem.
- ⚑ The Australian **NBA/THANZ critical bleeding guideline (MJA 2024, replacing Module 1, 2011)** supports a **high ratio, at least 2:1:1**, with insufficient evidence to prefer 1:1:1 over 2:1:1.
- **TXA within 3 hours**; later than that may be harmful in trauma.
- Lethal triad — hypothermia, acidosis, coagulopathy — plus **hypocalcaemia** ("lethal diamond").
- Stopping the bleeding is the treatment; product is a holding measure.

**Ratios.** 2:1:1 in practice = **8 RBC : 4 FFP : 1 adult therapeutic dose of platelets**, delivered as pre-composed packs so no arithmetic is needed under pressure. Trauma MTP activation and damage-control resuscitation → **Surgery §5**.

**Targets during critical bleeding** (SLHD adult MTP, PD2020_008 v2, 2021, representative of NSW practice): core temperature **>35.5 °C**; pH **>7.2**; ionised calcium **>1.1 mmol/L**; platelets **>50 × 10⁹/L** (**>100 × 10⁹/L** with head injury); INR **≤1.5**, PT <16 s, aPTT <42 s. ⚑ **Named fibrinogen disagreement**: SLHD MTP (2021) targets **fibrinogen >1.0 g/L** (>2.0 g/L obstetric), while the national **NBA/THANZ critical bleeding guideline (MJA 2024)** defines critical derangement as **fibrinogen <2.0 g/L** and recommends replacing with **3–4 g** of fibrinogen. Follow the national 2.0 g/L figure and know that older local protocols carry 1.0 g/L. ⚑ **Named divergence, targets vs critical derangement**: the local MTP *targets* above (ionised calcium **>1.1 mmol/L**, temperature **>35.5 °C**) sit above the national NBA/THANZ (MJA 2024) definition of **critical derangement** (ionised calcium **<1.0 mmol/L**, temperature **<35 °C**, pH <7.2, INR >1.5, fibrinogen <2.0 g/L) — different concepts, and a stem may quote either.

**Cryoprecipitate.** Lifeblood (product page last updated March 2026): an adult dose supplying **3–4 g fibrinogen** = **9 units whole-blood cryoprecipitate, 9 units split apheresis cryoprecipitate** (the two are equivalent and interchangeable), **or 3 units of large-dose apheresis while residual stock lasts** — large-dose apheresis manufacture ceased in January 2025 and was replaced by split apheresis units (three per donation). Typical fibrinogen content: whole blood 319 ± 99 mg/unit, split apheresis 348 ± 165 mg/unit, large-dose apheresis 1173 ± 334 mg/unit. Fibrinogen concentrate is an alternative. **Fibrinogen content per unit varies substantially between blood services**, so international unit counts do not transfer.

**Calcium and the other correctables.** Citrate in stored components chelates ionised calcium and the shocked hypothermic liver clears citrate slowly; hypocalcaemia here is both a cardiac depressant and a coagulopathy in its own right (calcium is factor IV). Target **>1.1 mmol/L** and replace — calcium chloride is preferred where central access exists (~3× the elemental calcium per ampoule) and must go **through separate access from the blood products**. Warm actively; hypothermia impairs coagulation and platelet function and is not fixed by product. Acidosis impairs thrombin generation — correct by restoring perfusion, not bicarbonate. Viscoelastic testing (TEG/ROTEM) directs goal-based product use in many Australian centres.

---

## 3.13 Coagulopathy in the critically ill

**The short version**
- **Trauma-induced coagulopathy** is present on arrival in a substantial minority of major trauma — endothelial activation, protein C activation and hyperfibrinolysis, not simply dilution.
- **TXA within 3 hours** of injury or of onset of obstetric haemorrhage; standard adult regimen 1 g IV over 10 min then 1 g over 8 h.
- **DIC is always secondary** — treat the trigger; product only for bleeding or procedures.
- Liver disease produces a *rebalanced* haemostatic state: a raised INR does not mean auto-anticoagulation and does not justify FFP.
- ICU thrombocytopenia differential: sepsis, DIC, drugs, HIT, TTP/HUS, dilution, mechanical circuits.

**Tranexamic acid.** Lysine analogue blocking plasminogen binding to fibrin. Australian MTP guidance (SLHD 2021): **1 g IV over 10 minutes**, then 1 g over 8 hours if indicated, **within 3 hours** of injury or of onset of postpartum haemorrhage (second 1 g if PPH persists after 30 min). The national NBA/THANZ guideline (2024) recommends early TXA within the same **3-hour window** without prescribing a dose. The window is the examinable point — benefit falls hourly and use beyond 3 hours in trauma was associated with harm in CRASH-2 (international). **GI bleeding is not an established indication** (HALT-IT, international, negative with more VTE).

**DIC.** ICU triggers: sepsis (especially Gram-negative), major trauma, obstetric catastrophes (amniotic fluid embolism, abruption, retained products), malignancy (particularly APML), severe pancreatitis, snake envenomation (CC §7 — venom-induced consumption coagulopathy is *not* classical DIC; **antivenom**, not factor replacement, is the treatment). Labs: falling platelets, prolonged PT/aPTT, **low fibrinogen**, raised D-dimer, fragments on film. **Treat the cause**; give product only for bleeding or before a procedure; consider therapeutic heparin if the phenotype is thrombotic (purpura fulminans, digital ischaemia).

**Liver disease.** Procoagulants and anticoagulants fall together and vWF rises, so the INR misrepresents bleeding risk — do not give FFP to correct a number in a non-bleeding cirrhotic; the volume load raises portal pressure and can precipitate variceal bleeding.

---

## 3.14 Anticoagulant reversal

**The short version**
- ⚑ **Australian practice changed in 2024–2026; older texts are wrong.**
- **Prothrombinex-VF was a 3-factor PCC (II, IX, X, minimal VII) — which is why FFP was given alongside it, to supply factor VII.** It was **replaced in Australia by Beriplex, a 4-factor PCC (II, VII, IX, X), from June 2024**, and with 4-factor PCC **FFP is no longer required** for reversal of the warfarin effect.
- Vitamin K goes with PCC in every bleeding warfarin patient — PCC lasts hours, warfarin lasts days.
- **Dabigatran → idarucizumab 5 g IV** as two 2.5 g infusions ≤15 min apart.
- ⚑ **Andexanet alfa is no longer available in Australia** — removed from the ARTG on **20 May 2026**. Factor Xa inhibitor reversal here is now PCC-based.

**Warfarin (adult)** — THANZ/MJA position statement (Robinson et al., *MJA* 2025;222(1), 13 January 2025) and Lifeblood guidance:
- **Life-threatening or critical-organ bleeding, INR ≥1.5**: 4-factor PCC **50 IU/kg IV** (capped at 100 kg body weight, i.e. max 5,000 IU) **plus vitamin K 5–10 mg IV**. **FFP is not required** for warfarin reversal with 4-factor PCC; give it only if the associated major haemorrhage protocol calls for it.
- **Clinically significant but non-life-threatening bleeding, INR ≥2.0**: 4-factor PCC **25–50 IU/kg IV** by INR and patient factors, plus **vitamin K 5–10 mg IV**.
- **Minor bleeding (any INR)**: omit warfarin and repeat the INR; **give vitamin K 1–2 mg orally or 0.5–1 mg IV only if the bleeding risk is high or the INR is >4.5.** Vitamin K is not automatic for all minor bleeding.
- **No bleeding, high INR**: withhold warfarin, vitamin K orally or IV (typically 1–5 mg). Where urgent non-bleeding reversal is needed (e.g. before a procedure), 4-factor PCC is dosed **15–50 IU/kg from a table of current INR against target INR**. Outside the perioperative setting, "4FPCC use should only be considered if **INR >10** and there is high risk of bleeding". Management of the non-bleeding patient is otherwise unchanged from the 2013 Australian consensus.
- Recheck INR after PCC and at 12–24 h — the PCC effect is short and the warfarin effect is not. PCC carries thrombotic risk; involve haematology.

**Exam safety note.** If a stem or older Australian protocol says "Prothrombinex-VF **plus** FFP", the reason is the **absent factor VII in the 3-factor product** — correct pre-2024, and still correct wherever Prothrombinex-VF is actually stocked. **That teaching is superseded in Australia from June 2024**, when Beriplex (4-factor) replaced Prothrombinex-VF; most textbooks still print the old answer, so recognise it as the old answer. State both positions and say which product is in front of you.

**Dabigatran.** **Idarucizumab (Praxbind)** — antibody fragment binding dabigatran far more avidly than thrombin does. Adult dose **5 g IV as two 2.5 g/50 mL infusions no more than 15 minutes apart**; onset within minutes. Effect can re-emerge up to 24 h later by redistribution and a repeat dose may be needed; no dose adjustment is currently recommended in renal impairment. Dabigatran is also **dialysable** (~60% over 2–3 h) if idarucizumab is unavailable.

**Factor Xa inhibitors (apixaban, rivaroxaban, edoxaban).** ⚑ Andexanet alfa's provisional TGA registration lapsed and it was **removed from the ARTG on 20 May 2026**; the NSW Medicines Formulary Committee declined to list it, citing thrombotic risk (ICH trial data: ≥1 thrombotic event within 30 days in 10.3% on andexanet vs 5.6% usual care) without clear net benefit, and the FDA had withdrawn it in the US in December 2025. Australian management is therefore **PCC-based**, plus the universal measures: stop the drug, establish the **time of last dose** and renal function (these determine residual effect more than any assay), surgical haemostasis, charcoal if very recent ingestion, haematology consult. **A normal routine aPTT/INR does not exclude a therapeutic DOAC level.**

**Others, briefly.** UFH → protamine, dose based on heparin given in the preceding hours. LMWH → protamine gives only partial (~60% anti-Xa) reversal. Antiplatelets → platelet transfusion is contested and specifically **not** recommended in spontaneous intracerebral haemorrhage (PATCH, international — outcomes were worse). Pharmacology → **Haematology**, **Cardiology**.

---

## Rapid-Recall Discriminators

| Cue | Answer |
|---|---|
| 72-year-old, pneumonia, Hb 68 g/L, stable, not bleeding, no ischaemia — transfusion threshold? | 70 g/L (NBA PBM Module 4). Transfuse **one** unit and reassess; do not top up to 100 g/L |
| Septic shock on escalating noradrenaline — second-line vasopressor? | **Vasopressin** (fixed low dose, catecholamine-sparing); adrenaline is third-line |
| Hypotension, raised JVP, clear lungs, inferior STEMI with ST elevation in V4R | RV infarction — load with fluid, **avoid nitrates** |
| First drug in hyperkalaemia with ECG changes | Calcium gluconate 10% 10 mL IV (2.2 mmol) over ~5 min — **does not lower K⁺** |
| Insulin/glucose for hyperkalaemia — onset, duration, main iatrogenic harm | ~30 min onset, 4–6 h, falls 0.5–1.5 mmol/L; **delayed hypoglycaemia** — BGL hourly for 6 h |
| Max hyponatraemia correction rate if high-risk (Na <105, hypokalaemia, alcohol, liver disease, malnutrition) | **<8 mmol/L in 24 h** (standard risk ≤10 mmol/L in 24 h, ≤18 mmol/L in 48 h). ⚑ SESLHD targets **4–6 mmol/L/day** in high-risk patients and Queensland Health caps everyone at 8 mmol/L in 24 h |
| Seizing patient, Na 108 — first drug and target rise | 3% saline 100–150 mL IV over 10–20 min, repeated to a **4–6 mmol/L** rise, then reassess |
| Sudden polyuria >100 mL/h during hyponatraemia correction | Impending overcorrection — Na 1–2 hourly; re-lower with 5% glucose ± desmopressin 1–4 microgram IV |
| Product ratio in Australian critical bleeding | At least **2:1:1** — 8 RBC : 4 FFP : 1 adult platelet dose (NBA/THANZ, MJA 2024) |
| Fibrinogen threshold and replacement dose, Australian critical bleeding | Critical derangement **<2.0 g/L**; replace with **3–4 g** fibrinogen (**9 units** cryoprecipitate — whole-blood or split apheresis — or fibrinogen concentrate) |
| Ionised calcium target in massive transfusion, and why it falls | **>1.1 mmol/L** (SLHD MTP *target*; the national NBA/THANZ *critical derangement* threshold is **<1.0 mmol/L**); citrate chelates calcium — give via separate access from the products |
| Tranexamic acid in trauma — dose and window | 1 g IV over 10 min then 1 g over 8 h, **within 3 hours** of injury; later may be harmful |
| Warfarin, INR 5.2, intracranial haemorrhage — reversal in Australia now | 4-factor PCC (Beriplex) **50 IU/kg** (capped at 100 kg) + **vitamin K 5–10 mg IV**; FFP not required |
| Why did older Australian protocols pair FFP with Prothrombinex-VF? | Prothrombinex-VF is **3-factor** (II, IX, X, minimal VII) — FFP supplied the **factor VII**. Replaced by 4-factor Beriplex from June 2024 |
| Dabigatran-associated life-threatening bleeding — antidote and dose | **Idarucizumab 5 g IV** as two 2.5 g infusions ≤15 min apart; effect may re-emerge at 24 h; also dialysable |
| Apixaban-associated life-threatening bleeding in Australia, 2026 | **PCC-based** — andexanet alfa removed from the ARTG 20 May 2026. Note time of last dose and renal function |
| AG 32, HCO₃⁻ 8 — delta ratio and meaning | (32 − 12) ÷ (24 − 8) = 20 ÷ 16 = **1.25** — uncomplicated HAGMA, no second metabolic disorder |
| Why can SVV/PPV not be used in this patient? | Spontaneous breathing, AF, tidal volume <8 mL/kg PBW, low compliance, open chest, RV failure |
| Fluid resuscitation in TBI — which fluid is avoided? | **Albumin** (SAFE 2004: TBI mortality 24.5% vs 15.1%) |

---

**Sources**

- National Blood Authority. *Patient Blood Management Guidelines: Module 4 — Critical Care*. NHMRC-approved 14 December 2012, released 5 April 2013. The module is under review and the original version remains in force; the Quick Reference Guide carries the 2012/2013 recommendations (only its hosting URL is dated 2024).
- National Blood Authority / THANZ. *Patient blood management guideline for adults with critical bleeding*. Med J Aust 2024;220(4) (online 2023; replaces Module 1, 2011).
- Robinson SD, et al. *Updated recommendations for warfarin reversal in the setting of four-factor prothrombin complex concentrate*. Med J Aust 2025;222(1), 13 January 2025.
- Australian Red Cross Lifeblood. *Warfarin reversal*; *Management of critical bleeding*; *Cryoprecipitate* product page, updated March 2026 (the superseded 29 January 2025 news item carries the older 10-unit/4-unit figures).
- Queensland Health, *Prescribing guidelines for hypo-electrolyte disturbances in adults*, 2023; WA Country Health Service, *Hyperkalaemia guideline* (adult), 4 April 2024; SESLHD/RHW, *Management of hyperkalaemia in adults* (CLIN168), August 2025, *Electrolyte replacement (adults)* SESLHDPR/762 and *Phentolamine for noradrenaline extravasation*; Sydney LHD, *Adult massive transfusion protocol* SLHD_PD2020_008 v2, October 2021.
- NSW Clinical Excellence Commission, *Andexanet alfa*, June 2026; TGA, *Lapse of provisional registration for Andexxa*, ARTG removal 20 May 2026. Australian Prescriber, *Idarucizumab*, 2016. AMH and eTG complete, current editions. Endocrinology Today, *Management of hyponatraemia*, February 2025.
- ANZ trials: SAFE (NEJM 2004;350:2247–56, TBI post hoc 2007); CHEST (NEJM 2012;367:1901–11); ARISE (NEJM 2014); PLUS (NEJM 2022;386:815–26).
- International: TRICC (NEJM 1999); TRISS (NEJM 2014;371:1381–91); MINT (NEJM 2023); SEPSISPAM (NEJM 2014;370:1583–93); 65 trial (JAMA 2020); Surviving Sepsis Campaign *international guidelines 2026*. Brandis K, *Acid–Base Physiology*, via the LITFL Critical Care Compendium (current).

---

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

---

# Critical Care Notes — Section 5: Respiratory Failure, Oxygen and Ventilation
*Sources: TSANZ acute oxygen guideline (2015/2016) and position statement (2022); COPD-X (2024); Australian Asthma Handbook; ACI NSW NIV clinical practice guide (2023); THANZ (MJA 2019); ANZICS; Therapeutic Guidelines and AMH; plus ARDSnet, Amato, PROSEVA, ROSE, EOLIA, FLORALI, ERS/ATS and the Berlin and 2023–24 global ARDS definitions, labelled international. Scope: the failing respiratory system in critical care — recognising it, oxygenating it, ventilating it, escalating it, and troubleshooting the ventilated patient.*

Cross-references: airway, RSI and induction drugs — §1 and Anaesthetics; shock §3; sepsis §4; AKI/RRT §6; chronic asthma/COPD, pneumonia and pleural disease — Respiratory; PE diagnosis and anticoagulation — Respiratory and Haematology (only the unstable PE is covered here); tension pneumothorax — Surgery §5.

---

## 5.1 Respiratory failure: types, mechanisms, A–a gradient

**The short version**
- Type 1 = hypoxaemic, PaO₂ <60 mmHg with normal/low PaCO₂. Type 2 = hypercapnic, PaCO₂ >45 mmHg. The dividing line is the CO₂. Adult figures.
- Five mechanisms of hypoxaemia: low FiO₂, hypoventilation, V/Q mismatch, right-to-left shunt, diffusion limitation. Only the first two leave the A–a gradient normal.
- **Shunt is the mechanism that does not correct with oxygen** — the most examinable point here.
- Type 2 failure is a pump problem (drive, nerve, muscle, chest wall, or load exceeding capacity), not primarily parenchymal.

**The five mechanisms.** *Low FiO₂* — altitude, wrong gas mixture; normal A–a. *Hypoventilation* — opioids, sedatives, brainstem lesion, high cord injury, Guillain–Barré, myasthenic crisis, kyphoscoliosis, obesity; normal A–a, corrects readily with O₂, which is why oxygen alone masks a patient narcotised into hypercapnia. *V/Q mismatch* — commonest: pneumonia, COPD, asthma, PE, atelectasis, oedema; widened A–a, *partially* corrects. *Shunt* — consolidated lobe, ARDS, complete collapse, pulmonary AVM, intracardiac; widened A–a, **poorly or not corrected by FiO₂**. Still hypoxaemic on 15 L/min non-rebreather = shunt until proved otherwise. *Diffusion limitation* — ILD, emphysema; widened A–a, corrects with O₂, unmasked by exertion; rarely the sole cause at rest.

**A–a gradient.** PAO₂ = FiO₂ × (P_atm − P_H₂O) − PaCO₂/R; at sea level on room air ≈ **150 − PaCO₂/0.8**. A–a = PAO₂ − PaO₂. Normal 5–10 mmHg in a young non-smoker; age-adjusted upper limit ≈ **age/4 + 4 mmHg** (≈14 at 40 y). Adult figures.

*Worked example.* 60-year-old, room air, PaCO₂ 70, PaO₂ 60. PAO₂ = 150 − 70/0.8 = 150 − 87.5 = 62.5. A–a = 62.5 − 60 = **2.5 mmHg** — normal: pure hypoventilation, lungs fine, pump failing. Contrast PaCO₂ 30 with PaO₂ 60: PAO₂ = 112.5, A–a = **52.5 mmHg** — parenchymal or vascular.

It is near-useless on supplemental oxygen, since the delivered FiO₂ of low-flow devices is unknown — use PaO₂/FiO₂ instead (§5.8).

---

## 5.2 ABG interpretation and the acute-versus-chronic CO₂ question

**The short version**
- Read in order: pH → PaCO₂ → HCO₃⁻/base excess → PaO₂ with FiO₂ → anion gap if acidotic.
- High PaCO₂ with near-normal pH = chronic and compensated; high PaCO₂ with acidaemia = acute or acute-on-chronic.
- Adult rules of thumb: acutely pH falls ≈0.08 per 10 mmHg rise in PaCO₂; chronically ≈0.03. Renal compensation takes 2–5 days, so a bicarbonate too high for an acute picture means pre-existing chronic hypercapnia.
- **pH, not PaCO₂, triggers NIV and predicts its failure.**

Acute retention alone barely moves HCO₃⁻ (≈+1 mmol/L per 10 mmHg). PaCO₂ 68 with HCO₃⁻ 32 means time to compensate — chronic — but a pH of 7.26 on top means acute-on-chronic decompensation: the standard COPD gas, and exam stem 2 below.

**Why oxygen worsens hypercapnia in COPD**, in order of importance: release of hypoxic pulmonary vasoconstriction, worsening V/Q matching and increasing dead space (dominant); the Haldane effect; and only modestly, reduced hypoxic drive. The old "loss of hypoxic drive" teaching is wrong and the physiology is examinable. Always record the FiO₂ and device — a gas without an FiO₂ is uninterpretable.

---

## 5.3 Oxygen therapy: devices, targets, harm

**The short version**
- ⚑ TSANZ (Australia/NZ, adults): **88–92%** if at risk of hypercapnic respiratory failure; **92–96%** for other acute medical conditions. Start oxygen below the lower bound.
- ⚑ BTS (UK, 2017, adults) agrees on **88–92%** for the at-risk group but uses **94–98%** for everyone else. The Australia-versus-UK difference here is in the *general acute medical* target — do not manufacture others. ⚑ **It is not a blanket "Australia uses 92–96%" rule.** **ANZCOR Guideline 11.6.1 (Feb 2026) — an Australian/NZ guideline — specifies SpO₂ 94–98% after ROSC** (88–92% if known hypercapnic respiratory failure), as does ANZCOR 11.7. So in a **post-cardiac-arrest** stem the Australian answer is **94–98%** (§1.9, §1.12); 92–96% is the TSANZ figure for the **general acute medical** patient — a context-specific target, not a contradiction. Read the setting before choosing the band.
- Oxygen is a drug: prescribe a target range, and titrate down as well as up. Routine oxygen in a normoxic patient has no role in ACS or stroke, and in STEMI enlarges the infarct (AVOID, Australian).
- The at-risk group is not only COPD: obesity hypoventilation, bronchiectasis, cystic fibrosis, neuromuscular disease, severe kyphoscoliosis.

TSANZ also advise ≈85% after bleomycin exposure or in paraquat poisoning. The Australian Asthma Handbook and the ACI NSW NIV guide use the same bands, so one pair of numbers covers oxygen, asthma and NIV in Australian practice. Paediatric targets differ (ACI NSW set no less than 93% in children with neuromuscular weakness) — never carry adult bands into a paediatric answer.

**Delivery devices (adult; FiO₂ per TSANZ).** Low-flow devices give a *variable* FiO₂ that falls as inspiratory flow rises, so a breathless patient receives less than the table suggests.

| Device | Flow | Approx. FiO₂ | Note |
|---|---|---|---|
| Nasal cannulae | 1–4 L/min | 0.24–0.35 | First choice at 1–2 L/min for an 88–92% target |
| Simple face mask | 5–10 L/min | 0.35–0.60 | Must run ≥5 L/min or the patient rebreathes CO₂ |
| Venturi mask | Device-specific | 0.24–0.60 | Only common device giving a reasonably **fixed** FiO₂ |
| Non-rebreather reservoir | 15 L/min | >0.60 | Emergency use; never true 1.0 |
| High-flow nasal oxygen | 30–60+ L/min | 0.21–0.80+ | Fixed FiO₂ because flow exceeds demand (§5.4) |
| Bag-valve-mask + reservoir | 15 L/min | ~1.0 | Ventilates as well as oxygenates |

**Evidence that liberal oxygen harms.** **AVOID** (Australia, 2015; 441 normoxic STEMI): oxygen 8 L/min vs none unless SpO₂ <94% — larger infarct by peak CK and cardiac MRI, more recurrent MI (5.5% vs 0.9%) and arrhythmia (40.4% vs 31.4%). **IOTA** (Lancet 2018): liberal oxygen associated with increased in-hospital and 30-day mortality. Conversely **ICU-ROX** (ANZ, NEJM 2020) and **UK-ROX** (2025) found no benefit from conservative targets, and **LOCO2** (2020) stopped early with a harm signal. **Mega-ROX**, the ANZICS-led 40,000-patient registry-embedded trial, was designed to settle this — check for its published result before quoting a figure. Synthesis: hyperoxaemia is not benign and harms in ACS, but conservative targets have no proven benefit.

---

## 5.4 High-flow nasal oxygen

**The short version**
- Heated humidified oxygen–air at 30–60+ L/min via wide-bore prongs, giving a set FiO₂ because flow exceeds peak inspiratory demand.
- Four mechanisms: fixed FiO₂; dead-space washout; a small flow-dependent positive pressure (a few cmH₂O, lost when the mouth opens); reduced work of breathing from conditioned gas.
- Best-supported niche: **de novo acute hypoxaemic (type 1) failure** — not COPD, not cardiogenic oedema; not a substitute for NIV in hypercapnic COPD with acidosis.
- Its risk is comfort masking deterioration, delaying intubation.

FLORALI (2015) randomised de novo hypoxaemic failure (PaO₂/FiO₂ ≤300 on ≥10 L/min) to HFNO, standard oxygen or NIV. Intubation at day 28 did not differ overall (38% / 47% / 50%), but in the pre-specified PaO₂/FiO₂ ≤200 subgroup HFNO was superior (35% / 53% / 58%) and 90-day mortality favoured HFNO (12% / 23% / 28%) — that signal moved practice more than the neutral primary endpoint.

Uses: first-line in type 1 failure; pre-oxygenation and apnoeic oxygenation around intubation (§1); post-extubation in high-risk patients; a comfort-oriented ceiling of care. In hypercapnic COPD it is an alternative only when NIV is refused or not tolerated. Track the ROX index (SpO₂/FiO₂ ÷ RR): a comfortable patient on 60 L/min at FiO₂ 0.9 has a large shunt the device is hiding.

---

## 5.5 Non-invasive ventilation: CPAP versus bilevel

**The short version**
- **CPAP** = one continuous pressure; recruits alveoli, raises FRC, reduces LV afterload. It does **not** ventilate. Use for hypoxaemia — cardiogenic pulmonary oedema above all.
- **Bilevel** = IPAP + EPAP; the *difference* is the pressure support that augments tidal volume and clears CO₂. Use for hypercapnic acidosis.
- Strongest evidence: **AECOPD with respiratory acidosis** and **acute cardiogenic pulmonary oedema**.
- ⚑ Adult trigger: **pH <7.35 with PaCO₂ >45 mmHg** despite optimal therapy (COPD-X definition of acute hypercapnic respiratory failure; ERS/ATS 2017 use pH ≤7.35 with PaCO₂ >45 mmHg).
- Judge at **1–2 hours** on pH, PaCO₂, respiratory rate and work of breathing. No improvement is the escalation trigger.

**Indications by strength (ERS/ATS 2017).** AECOPD with acidosis — mortality and intubation benefit, strongest. Cardiogenic pulmonary oedema — CPAP or bilevel, either acceptable. Obesity hypoventilation and neuromuscular/chest-wall hypercapnic failure — bilevel. *Prevention* of post-extubation failure in high-risk patients — yes; *treatment* of established post-extubation failure — no, it delays reintubation. De novo hypoxaemic failure and acute asthma — no recommendation possible; never answer "NIV" for a severe asthmatic (§5.11).

**Contraindications (ACI NSW 2023).** Absolute: immediate need for intubation, imminent arrest, impaired consciousness with inability to protect the airway. Relative: haemodynamic instability, copious secretions or vomiting, pneumothorax, facial trauma.

**Initial settings — adult (ACI NSW 2023).**

| Indication | Start | Titration | Target |
|---|---|---|---|
| AECOPD, restrictive chest wall | IPAP 14, EPAP 4 cmH₂O | ↑IPAP 2 cmH₂O every few minutes; 20–25 often needed | Vt 8–10 mL/kg IBW; SpO₂ 88–92% |
| Obesity hypoventilation | IPAP 20, EPAP 8–10 cmH₂O | ↑2 cmH₂O; rise time 0.3 s | Vt 8–10 mL/kg IBW |
| Neuromuscular disease | IPAP 8, EPAP 4 cmH₂O | ↑1 cmH₂O; 12–16 usually sufficient | Vt 6–8 mL/kg IBW |
| Cardiogenic pulmonary oedema | CPAP/EPAP 8–12 cmH₂O | To work of breathing | SpO₂ 92–96% |

Paediatric (same guide): EPAP should generally not exceed 7–8 cmH₂O in infants or 10–12 cmH₂O in older children.

⚑ Note the contrast with §5.7: the NIV target of 8–10 mL/kg IBW is *higher* than the 6 mL/kg PBW of ARDS, because the problem is CO₂ clearance in a compliant lung, not injury in a stiff one. Conflating them is a classic trap.

**Monitoring and failure.** Observations every 30 min for 1–2 hours then hourly; ABG at baseline and 1 hour. Markers of failure: **pH <7.26 at initiation** (ACI NSW high-risk group), no improvement in pH/PaCO₂ by 1–2 hours, rising respiratory rate, falling GCS. Document the ceiling of treatment **before** starting.

---

## 5.6 Intubation and invasive ventilation

**The short version**
- Intubate for failure to oxygenate, failure to ventilate, failure to protect the airway, obstructed/threatened airway, or to manage something else (transfer, imaging, agitation, raised ICP).
- It is a clinical decision, not a number: "pH 7.26" does not intubate a patient; a falling GCS with a silent chest does.
- **Volume control** guarantees minute ventilation and lets pressure vary. **Pressure control** guarantees pressure and lets volume vary. **Pressure support** is the spontaneous/weaning mode.
- FiO₂ and PEEP are the oxygenation controls; Vt × rate is the CO₂ control. Every mode is defined by what triggers a breath, what limits it, and what cycles it off.

**Indications.** Refractory hypoxaemia despite maximal non-invasive support (a shunt unresponsive to FiO₂); ventilatory failure with acidaemia and exhaustion, or failed NIV; airway protection (GCS ≤8, absent gag with secretions, vomiting); obstruction or threat (inhalational burn, angio-oedema, neck haematoma, epiglottitis); anticipated deterioration (transfer, controlled PaCO₂ in raised ICP).

**Modes.** *Volume control (VC-AC)*: set Vt, rate, flow/inspiratory time, PEEP, FiO₂; **pressure is the dependent variable**, rising if compliance falls or resistance increases — the mode in which peak and plateau pressures are meaningful, hence where the troubleshooting question is set. *Pressure control (PC-AC)*: set inspiratory pressure above PEEP, inspiratory time, rate, PEEP, FiO₂; **volume is the dependent variable**, falling if compliance falls — safer against barotrauma, riskier for hypoventilation, so alarm on low minute volume. *Pressure support*: patient-triggered, pressure-limited, flow-cycled — the weaning mode. *SIMV*, *PRVC*, *APRV*, HFOV — names only.

**Parameters.** PEEP recruits collapsed alveoli and reduces shunt; its costs are reduced venous return, over-distension and raised ICP. In obstruction, raising the rate shortens expiration and may *worsen* CO₂ — I:E defaults to ≈1:2, and 1:3–1:5 in obstruction.

---

## 5.7 Lung-protective ventilation

**The short version**
- Tidal volume **6 mL/kg predicted body weight** (range 4–8) — never actual weight; PBW depends only on height and sex.
- **Male PBW (kg) = 50 + 0.91 × (height cm − 152.4). Female PBW (kg) = 45.5 + 0.91 × (height cm − 152.4).**
- Plateau pressure **≤30 cmH₂O**; driving pressure (Pplat − PEEP) ideally **≤15 cmH₂O**.
- Permissive hypercapnia: accept a high PaCO₂ to keep volumes and pressures safe. ARDSnet targeted pH 7.30–7.45, rescue if pH <7.15. ARMA (2000): 6 vs 12 mL/kg PBW cut mortality from 39.8% to 31.0%.

Lung volume scales with height, not adiposity; actual weight in an obese patient delivers a grossly injurious breath. Both formulae share the coefficient 0.91; only the sex constant differs.

*Worked PBW.* Man 175 cm: 175 − 152.4 = 22.6; 0.91 × 22.6 = 20.566; PBW = 50 + 20.566 = **70.6 kg**.

> **Exam stem 1 — ventilated ARDS patient, predicted body weight 70 kg. What tidal volume?**
> Target 6 mL/kg PBW: **6 × 70 = 420 mL**.
> Protocol range 4–8 mL/kg: 4 × 70 = 280 mL; 8 × 70 = 560 mL.
> Answer **420 mL**, adjustable 280–560 mL by plateau pressure and pH. If a stem gives height and sex instead, compute PBW first — never the stated actual weight.

**Pressures.** *Plateau* is measured on a ~0.5 s inspiratory hold in a passive patient during a volume-controlled breath; with flow abolished it reflects alveolar distending pressure, i.e. compliance. Target ≤30 cmH₂O. *Driving pressure* ΔP = Pplat − PEEP (equivalently Vt ÷ compliance); Amato's 2015 mediation analysis made it the ventilator variable most strongly associated with survival, with the inflection at 13–15 cmH₂O. ⚑ Be precise: that comes from mediation and secondary analyses, **not** a randomised trial of a driving-pressure-targeted strategy. *Peak pressure* is not a protection target — it includes resistive losses across tube and airways (§5.9).

**PEEP** is set from a PEEP/FiO₂ table (ARDSnet tables run from PEEP 5 at FiO₂ 0.3 to 18–24 at FiO₂ 1.0). Higher-PEEP strategies show no overall mortality benefit but appear to help PEEP-responsive moderate-to-severe ARDS. Routine recruitment manoeuvres are **not** recommended (ART: harm).

**ARDSnet targets (adult).** PaO₂ 55–80 mmHg or SpO₂ 88–95%; pH 7.30–7.45; rate up to 35/min; if pH <7.15, increase Vt and/or give bicarbonate. Permissive hypercapnia is contraindicated with raised ICP and used cautiously in severe pulmonary hypertension or RV failure, where acidosis raises PVR.

---

## 5.8 ARDS

**The short version**
- ⚑ Two definitions are current. **Berlin (2012)** remains the reference standard for exams and trials and is what I use for the bands below. A **new global definition** was published in 2023 (AJRCCM) and disseminated through 2024, broadening ARDS to non-intubated patients — international, not Australian.
- Berlin: onset within 1 week of a known insult; bilateral opacities not explained by effusion, collapse or nodules; not explained by cardiac failure or fluid overload; **PaO₂/FiO₂ ≤300 mmHg on PEEP ≥5 cmH₂O**.
- Only two interventions carry clear mortality evidence: **low tidal volume** and **proning**.
- ARDS is a syndrome, not a diagnosis — treat the cause (sepsis, aspiration, pneumonia, pancreatitis, trauma, TRALI).

| Severity (Berlin 2012; intubated, PEEP ≥5 cmH₂O) | PaO₂/FiO₂ (mmHg) | Global-definition SpO₂/FiO₂ (only if SpO₂ ≤97%) |
|---|---|---|
| Mild | 201–300 | 235–315 |
| Moderate | 101–200 | 148–235 |
| Severe | ≤100 | ≤148 |

⚑ **What the 2023–24 global definition changed.** It adds **non-intubated ARDS** — HFNO at **≥30 L/min** or CPAP/NIV with PEEP ≥5 cmH₂O, meeting PaO₂/FiO₂ ≤300 or SpO₂/FiO₂ ≤315 (meaningless above SpO₂ 97%); accepts **lung ultrasound** as imaging; and adds a resource-limited category without PEEP, HFNO or PaO₂ requirements. Timing and the exclusion of hydrostatic oedema are unchanged. Berlin is the safer default in an Australian written paper — but say which you are using.

**Management.** *Lung-protective ventilation* as §5.7. *Proning* — PROSEVA (2013): PaO₂/FiO₂ <150 on FiO₂ ≥0.6 and PEEP ≥5, prone **≥16 consecutive hours** per session, started early; 28-day mortality 16.0% vs 32.8%, 90-day 23.6% vs 41.0% — the largest treatment effect in ARDS. Complications: pressure injury, facial oedema, tube and line displacement. *Neuromuscular blockade* — ⚑ ACURASYS (2010) showed benefit from 48 h cisatracurium in severe ARDS; ROSE (2019), with lighter sedation in controls, found none (42.5% vs 42.8%). Not routine; reserve for refractory hypoxaemia or dyssynchrony, and to enable proning. *Conservative fluids* — FACTT (2006): more ventilator-free days, no mortality difference; once shock resolves, keep them dry (§3, §6). *ECMO in outline* — veno-venous; EOLIA (2018) entry criteria define "refractory": PaO₂/FiO₂ <50 mmHg for >3 h, or <80 mmHg for >6 h, or pH <7.25 with PaCO₂ ≥60 mmHg for >6 h despite optimised ventilation. 60-day mortality 35% vs 46%, RR 0.76, p=0.09, stopped early; refer early to an ECMO-capable centre. *Not recommended*: routine corticosteroids for all ARDS; inhaled nitric oxide (oxygenation only, no survival benefit).

---

## 5.9 Ventilator troubleshooting

**The short version**
- **Peak pressure = resistance + compliance. Plateau = compliance alone.** The gap is the resistive component.
- ↑Peak with **unchanged** plateau = a resistance problem. ↑Peak **and** ↑plateau = a compliance problem.
- Auto-PEEP causes hypotension and failure to trigger; the immediate manoeuvre is to **disconnect and let the patient exhale**.
- Acute deterioration: **DOPES** to think, **DOTTS** to act. VAP prevention is a bundle, not a drug.

| Pattern | Physiology | Causes |
|---|---|---|
| ↑Peak, plateau unchanged (gap widens) | ↑ airway resistance | Bronchospasm; secretions/mucus plug; ETT kinked, bitten or blocked; ETT too small; circuit obstruction or water in tubing; herniated cuff |
| ↑Peak **and** ↑plateau (gap unchanged) | ↓ compliance | Pneumothorax; lobar collapse; right main-bronchus intubation; pulmonary oedema; ARDS progression; raised intra-abdominal pressure; chest wall oedema or burn eschar; auto-PEEP |
| ↓Peak | Loss of circuit pressure | Disconnection, cuff leak, extubation, circuit leak |

> **Exam stem 3 — ventilated patient, peak airway pressure rises acutely with an unchanged plateau pressure. What does this suggest?**
> An acute rise in **airway resistance** with unchanged compliance — the lung is no stiffer, something is obstructing flow between ventilator and alveoli. Differential: bronchospasm, secretions or mucus plug, kinked or bitten ETT, water in the circuit. Act: disconnect and hand-bag (feel the resistance), pass a suction catheter to test patency and clear secretions, give bronchodilators. Specifically **not** pneumothorax, pulmonary oedema or ARDS progression — those raise the plateau too.

**Auto-PEEP / dynamic hyperinflation.** When expiratory time is insufficient — obstruction, high rate, high minute ventilation, long inspiratory time — the lung does not return to FRC. Consequences: hyperinflation; rising intrathoracic pressure obstructing venous return and causing hypotension; increased triggering work (the patient must overcome intrinsic PEEP before flow begins), producing ineffective triggering; barotrauma. Detect it on an expiratory flow tracing that does not reach zero before the next breath, or by an end-expiratory hold. Treat: **disconnect the circuit and allow full exhalation** — diagnostic and therapeutic — then cut rate and Vt, raise inspiratory flow to lengthen expiration, and treat the bronchospasm. Applied PEEP set *below* intrinsic PEEP reduces triggering work without worsening hyperinflation.

**DOPES then DOTTS.** *DOPES* (what has gone wrong): **D**isplacement of the tube (endobronchial, oesophageal, cuff failure); **O**bstruction of the tube; **P**neumothorax and other patient problems (PE, oedema, collapse, bronchospasm); **E**quipment failure; **S**tacked breaths/auto-PEEP. *DOTTS* (what to do, in order): **D**isconnect; **O**xygenate by hand at FiO₂ 1.0, feeling for resistance; **T**ube position and patency (ETCO₂, suction catheter or bougie, depth at the teeth, CXR); **T**weak the ventilator once safe; **S**onography — lung ultrasound for pneumothorax or main-stem intubation, echo for RV strain. If in doubt about the tube, replace it.

**Asynchrony.** *Ineffective triggering* — effort not converted to a breath (auto-PEEP, insensitive trigger). *Auto-triggering* — breaths without effort (circuit water, cardiac oscillations, leaks). *Double triggering* — neural inspiratory time exceeds the set time; lengthen inspiration or raise Vt. *Flow starvation* — demand exceeds set flow. Fix the ventilator before deepening sedation.

**VAP prevention bundle.** Semi-recumbent 30–45°; daily sedation interruption; daily readiness-to-wean assessment; subglottic secretion drainage if ventilation >48–72 h anticipated; cuff pressure ~20–30 cmH₂O; oral care; no unnecessary circuit changes. ⚑ Routine oral chlorhexidine has been de-emphasised in recent guidance (ISID, 2024 update) over a possible mortality signal — check local policy.

---

## 5.10 Weaning, extubation, tracheostomy

**The short version**
- Screen daily: cause resolving, oxygenating on modest support (FiO₂ ≤0.4, PEEP ≤5–8), stable without escalating vasopressors, awake and able to cough.
- Then a **spontaneous breathing trial**: 30 min to 2 h on pressure support 5–8 cmH₂O with PEEP ≤5, or T-piece; pair it with sedation interruption.
- RSBI = respiratory rate ÷ tidal volume in litres; <105 predicts success (sensitive, not specific).
- Failed cuff-leak test → corticosteroid ≥4 h before extubation, not automatic cancellation.

**SBT failure**: RR >35, SpO₂ below target, tachycardia or arrhythmia, hypertension or hypotension, agitation, diaphoresis, paradoxical abdominal movement. Find the reason rather than repeating trials blindly — fluid overload, sepsis, cardiac ischaemia unmasked by spontaneous breathing, ICU-acquired weakness.

**Cuff-leak test**: on volume control, deflate the cuff and compare inspired with expired Vt. Commonly quoted thresholds are a leak **<110 mL** or **<10–15% of delivered Vt**; good negative and poor positive predictive value, so apply it selectively to those at risk (traumatic or prolonged intubation, large tube, female sex, reintubation, airway burns). **Post-extubation stridor** presents within minutes to hours: sit up, humidified oxygen, **nebulised adrenaline**, IV corticosteroid, and an operator ready to reintubate over a bougie. Do not use NIV for established post-extubation failure — reintubate before exhaustion.

**Tracheostomy** for anticipated prolonged ventilation, difficult weaning, secretion clearance or upper-airway obstruction; less sedation and dead space, better mobilisation. ⚑ Randomised evidence has **not** shown a mortality benefit for early over late tracheostomy, so timing is a unit-level decision, usually reconsidered around day 7–10. Displacement in the first few days is an emergency — the tract is immature; oxygenate from above and follow the emergency tracheostomy algorithm.

---

## 5.11 Severe and life-threatening asthma

**The short version**
- ⚑ Life-threatening features (Australian Asthma Handbook, adults and adolescents ≥12 y): reduced consciousness or collapse, exhaustion, cyanosis, **SpO₂ <90%**, poor respiratory effort with a soft or **silent chest**.
- A **silent chest is not improvement** — airflow is too low to generate wheeze.
- A **normalising or rising PaCO₂** in a previously hypocapnic asthmatic signals impending respiratory arrest. Blood gas in severe or life-threatening asthma only.
- Intubation is high-risk: dynamic hyperinflation causes hypotension and arrest.

**Escalation therapy (Australian Asthma Handbook; adult/adolescent doses).** Oxygen titrated to 92–96% (88–92% if at risk of hypercapnia). Continuous nebulised salbutamol (2 × 5 mg nebules) driven by oxygen; ipratropium 8 actuations (21 microgram each) every 20 min for the first hour; prednisolone 37.5–50 mg oral, or IV hydrocortisone; **IV magnesium sulfate 0.2 mmol/kg, maximum 10 mmol, over 20 minutes**. ⚑ The Handbook states **IV salbutamol is not recommended**; adrenaline is for peri-arrest (300 microgram IM, adults >12 y or >50 kg).

> **Exam stem 4 — 25-year-old asthmatic, silent chest, drowsy, PaCO₂ 48 mmHg having previously been 30 mmHg. How should this be interpreted?**
> As **life-threatening asthma with impending respiratory arrest**, not improvement. A patient with acute severe asthma should be hyperventilating and hypocapnic; a PaCO₂ climbing from 30 to 48 mmHg — even though 48 is only marginally above normal — means alveolar ventilation is falling because the patient is **tiring**. With a silent chest and reduced consciousness, this is the pre-arrest triad. Act: senior emergency/ICU and anaesthetic help now; continuous nebulised salbutamol with oxygen; IV magnesium; IV corticosteroid; consider adrenaline; prepare to intubate. Do not be reassured by the "near-normal" number.

**The ventilation problem asthma poses.** Expiratory obstruction means the lung cannot empty in the time available, so breaths stack (§5.9): dynamic hyperinflation, high intrathoracic pressure, obstructed venous return, hypotension and classically PEA arrest shortly after intubation. Ventilate to *let them breathe out*: Vt 6–8 mL/kg PBW, **low rate (8–10/min, per ERC/ANZCOR special-circumstances guidance)**, high inspiratory flow (60–100 L/min), I:E 1:3–1:5, minimal or zero applied PEEP, plateau <30 cmH₂O, and accept marked **permissive hypercapnia** (pH >7.2 as a floor). If hypotensive on the ventilator: **disconnect, allow full exhalation, give fluid**, and exclude pneumothorax on ultrasound.

---

## 5.12 Severe COPD exacerbation

**The short version**
- Controlled oxygen to **88–92%** (COPD-X and TSANZ agree) — Venturi or nasal prongs at 0.5–2 L/min, not a non-rebreather.
- Bronchodilators (salbutamol + ipratropium), systemic corticosteroid, antibiotics if increased sputum purulence and volume plus dyspnoea; ABG at presentation and after any change in oxygen or support.
- ⚑ NIV when **pH <7.35 with PaCO₂ >45 mmHg** despite optimal therapy — the intervention with the survival benefit in acute hypercapnic failure.
- **pH <7.26** marks a high-risk group for NIV failure; site them where intubation is available.

Hunt the precipitant and the mimic: pneumonia, pneumothorax, PE, heart failure, arrhythmia, sedatives. The ceiling-of-treatment discussion belongs at the front door.

> **Exam stem 2 — 55-year-old with severe COPD, pH 7.26, PaCO₂ 68 mmHg, PaO₂ 58 mmHg on 28% O₂, alert and protecting his airway. Most appropriate next step?**
> **Start bilevel non-invasive ventilation**, continuing maximal medical therapy.
> Reasoning: acute-on-chronic hypercapnic respiratory failure with respiratory acidosis — pH 7.26 (<7.35) with PaCO₂ 68 mmHg (>45 mmHg) — exactly the threshold at which COPD-X and ERS/ATS recommend NIV, and the setting in which NIV reduces intubation and mortality. He is alert and protecting his airway, so there is no contraindication and no need for immediate intubation. PaO₂ 58 mmHg on 28% corresponds to a saturation near the 88–92% target and must **not** prompt more FiO₂.
> Practical: bilevel at IPAP ≈14 / EPAP 4 cmH₂O (ACI NSW adult settings), titrating IPAP in 2 cmH₂O steps, entrained oxygen for SpO₂ 88–92%; continue bronchodilators, corticosteroid and antibiotics; document the ceiling of treatment; repeat the ABG at **1 hour**. No improvement by 1–2 hours, or a falling GCS, means intubation — and since pH 7.26 sits in the higher-risk band for NIV failure, that plan is made in advance.
> Reject: intubate now (alert, airway protected, no NIV trial yet); increase FiO₂ (worsens hypercapnia); IV bicarbonate; doxapram (superseded by NIV).

---

## 5.13 Massive (high-risk) PE

**The short version**
- High-risk/massive PE = PE with **haemodynamic instability**. **ESC (international):** systolic <90 mmHg or a fall ≥40 mmHg for >15 min, need for vasopressors, or cardiac arrest. **THANZ (Australia/NZ, MJA 2019) defines it as:** "sustained hypotension (systolic BP <90 mmHg for 15 min or requiring inotropic support), or pulselessness, or sustained HR <40 beats/min with signs/symptoms of shock".
- The killing mechanism is acute **RV failure**, not hypoxaemia.
- ⚑ THANZ (Australia/NZ, MJA 2019): "thrombolysis or alternative based on local expertise and availability (eg, surgical embolectomy, catheter-based intervention, ECMO)" — **strong recommendation, moderate-level evidence**.
- Fluids kill an already-distended RV — ≤500 mL, then noradrenaline; intubation and positive pressure can precipitate arrest.

**Recognition.** Collapse, syncope, hypotension with a clear chest, raised JVP, tachycardia, hypoxaemia refractory to oxygen. Bedside echo showing a dilated hypokinetic RV, septal flattening (D-shaped LV), McConnell's sign or a raised RV/LV ratio is the key test when the patient is too unstable for CT.

**Management.** Anticoagulate immediately with **IV unfractionated heparin** (short half-life, reversible, compatible with proceeding to lysis or surgery) rather than a DOAC. **Systemic thrombolysis** unless contraindicated — alteplase, most commonly **100 mg IV over 2 hours** in adults; in peri-arrest a bolus regimen (commonly 50 mg) is used with CPR continued 60–90 minutes afterwards. ⚑ Regimens vary between local ED/ICU protocols — check the AMH and your hospital protocol rather than reciting one dose. Absolute contraindications: prior intracranial haemorrhage, cerebral vascular lesion or neoplasm, ischaemic stroke within 3 months, active bleeding, recent head trauma or intracranial surgery, aortic dissection — all relative in arrest. If lysis is contraindicated or fails: catheter-directed thrombolysis or thrombectomy, or surgical embolectomy; VA-ECMO as a bridge. Support: cautious fluid (≤500 mL — overfilling worsens RV dilatation), **noradrenaline** first-line, and avoid hypercapnia and acidosis (both raise PVR).

> **Exam stem 5 — large PE, BP 76/40 mmHg, right heart strain on echo. Appropriate management?**
> **High-risk (massive) PE**: immediate **systemic thrombolysis** (alteplase per local protocol) with **IV unfractionated heparin**, in a resuscitation area with critical care involvement, provided there is no absolute contraindication. Alongside: oxygen for SpO₂ ≥92%, a *cautious* 250–500 mL fluid bolus at most, **noradrenaline**, and avoiding intubation if possible — induction drops systemic pressure and RV coronary perfusion, and positive intrathoracic pressure impedes RV filling. If lysis is contraindicated or fails, arrange **catheter-directed therapy or surgical embolectomy**. Wrong answers: DOAC or LMWH alone; large-volume fluid; waiting for CTPA when the echo already shows RV strain.

---

## Rapid-Recall Discriminators

| Cue | Answer |
|---|---|
| Hypoxaemia not improving despite FiO₂ 1.0 | Right-to-left shunt (consolidation, ARDS, collapse, intracardiac) — the one mechanism oxygen cannot fix |
| Raised PaCO₂ with a normal A–a gradient (adult, room air: 150 − PaCO₂/0.8 − PaO₂; upper limit ≈ age/4 + 4 mmHg) | Pure hypoventilation — a pump problem (opioids, neuromuscular disease), not parenchymal disease |
| Target SpO₂ in an adult at risk of hypercapnic respiratory failure, per TSANZ (Australia/NZ) | 88–92% |
| Target SpO₂ in other acutely unwell adults, per TSANZ (Australia/NZ) | 92–96%; UK BTS 2017 uses 94–98% — both agree on 88–92% for the at-risk group. **Exception: post-ROSC the Australian target is 94–98% (ANZCOR 11.6.1, Feb 2026) — see §1.9.** |
| Adult COPD exacerbation, pH <7.35 with PaCO₂ >45 mmHg despite optimal therapy | Bilevel NIV; ACI NSW adult IPAP ≈14 / EPAP 4 cmH₂O in 2 cmH₂O steps, O₂ to 88–92%, ABG at 1 h |
| pH marking high risk of NIV failure in adult COPD | pH <7.26 — site where intubation is immediately available, and pre-plan escalation |
| Predicted body weight formulae (adult) | Male 50 + 0.91 × (height cm − 152.4); female 45.5 + 0.91 × (height cm − 152.4) |
| Tidal volume in ARDS for a patient of 70 kg predicted body weight | 6 mL/kg × 70 = **420 mL** (range 4–8 mL/kg = 280–560 mL) |
| Pressure ceilings in lung-protective ventilation (adult) | Plateau ≤30 cmH₂O; driving pressure (Pplat − PEEP) ≤15 cmH₂O — the latter from mediation data, not an RCT |
| ARDS severity by PaO₂/FiO₂ in mmHg on PEEP ≥5 cmH₂O (Berlin 2012) | Mild 201–300, moderate 101–200, severe ≤100 |
| What the 2023–24 global ARDS definition added (international) | Non-intubated ARDS on HFNO ≥30 L/min or CPAP/NIV with PEEP ≥5; SpO₂/FiO₂ ≤315 when SpO₂ ≤97%; lung ultrasound; a resource-limited category |
| ARDS intervention with the largest randomised mortality benefit, and its dose | Proning ≥16 h per session for PaO₂/FiO₂ <150 (PROSEVA 2013: 28-day mortality 16.0% vs 32.8%) |
| Ventilated patient — peak pressure rises, plateau unchanged | Increased airway **resistance**: bronchospasm, secretions or mucus plug, kinked/bitten/blocked ETT, circuit obstruction |
| Ventilated patient — peak **and** plateau both rise | Reduced **compliance**: pneumothorax, atelectasis or endobronchial intubation, pulmonary oedema, ARDS progression, raised intra-abdominal pressure |
| Sudden hypotension in a ventilated asthmatic or COPD patient | Auto-PEEP — disconnect and let them exhale, then cut the rate and lengthen expiration; exclude pneumothorax |
| Mnemonics for acute deterioration on the ventilator | DOPES to diagnose (Displacement, Obstruction, Pneumothorax/patient, Equipment, Stacked breaths); DOTTS to act (Disconnect, Oxygenate by hand, Tube, Tweak the vent, Sonography) |
| Asthmatic with a silent chest, drowsiness, and PaCO₂ risen from 30 to 48 mmHg | Life-threatening asthma, impending respiratory arrest — fatigue, not improvement; senior/ICU help, prepare to intubate |
| PE with systolic BP 76/40 mmHg and RV strain on echo | High-risk (massive) PE — systemic thrombolysis plus IV unfractionated heparin; noradrenaline, fluid ≤500 mL; embolectomy if lysis contraindicated |

---

**Sources**

**Australian and New Zealand**
- TSANZ. *Acute oxygen use in adults: "swimming between the flags"* — guideline 2015 (web version 2016); position statement, Respirology 2022. Authority for target saturations and device FiO₂.
- Lung Foundation Australia. *COPD-X Plan / COPD-X Handbook*, 2024–2025 versions.
- National Asthma Council Australia. *Australian Asthma Handbook*, current version; *Asthma in adults quick reference guide*, Oct 2024.
- ACI, NSW Health. *Non-invasive ventilation for acute respiratory failure — clinical practice guide*, Feb 2023 (rev. Mar 2023); adult and paediatric settings.
- THANZ. *Diagnosis and management of venous thromboembolism*, MJA 2019.
- ANZICS: Mega-ROX protocols, Crit Care Resusc 2023–2024; ICU-ROX, NEJM 2020. Stub D et al. *AVOID*, Circulation 2015. Therapeutic Guidelines (eTG complete) and AMH, current editions.

**International**
- BTS. *Oxygen use in adults*, Thorax 2017 (full version 2016) — cited only for the 94–98% comparison.
- ARDS Network *ARMA*, NEJM 2000, with the ARDSnet PEEP/FiO₂ protocol; Amato, NEJM 2015; *FACTT*, NEJM 2006.
- *PROSEVA*, NEJM 2013; *ACURASYS*, NEJM 2010; *ROSE*, NEJM 2019; *EOLIA*, NEJM 2018; *FLORALI*, NEJM 2015; Rochwerg B et al. *ERS/ATS NIV guideline*, ERJ 2017.
- ARDS Definition Task Force *Berlin definition*, JAMA 2012; Matthay MA et al. *A new global definition of ARDS*, AJRCCM 2023 (disseminated 2024).
- *LOCO2*, NEJM 2020; *IOTA*, Lancet 2018; UK-ROX, 2025. ISID *VAP prevention position paper, 2024 update*, IJID.

---

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

---

# Critical Care Notes — Section 7: Poisoning, Overdose and Environmental Emergencies
*Sources: Australian/New Zealand paracetamol poisoning consensus guidelines (Chiew et al., MJA 2020); Austin Health clinical toxicology guidelines (TCA 2022, HIET v4.2 2025, digoxin 2022); Queensland and NSW Poisons Information Centres; ANZCOR 9.4.1, 9.4.5, 9.4.8, 11.10; Australian Snakebite Project and Isbister & Brown (MJA 2013); Queensland Health ABD guideline 2024; EXTRIP; SESLHD fomepizole guideline 2023; RCH CPGs; Australian Prescriber; AMH. Scope: risk assessment in the poisoned patient, toxidromes, decontamination and elimination, agent-specific poisonings and antidotes, Australian envenomation, environmental emergencies.*

---

## 7.1 The risk-assessment-based approach

**The short version**
- Australian toxicology is built on **risk assessment**, not reflex decontamination. Five inputs: **agent, dose, time since ingestion, clinical course so far, patient factors**.
- The output is a prediction: *what will this patient do over the next 24 h, and when?* Charcoal, antidote, monitoring and disposition all follow from it.
- Assume the **worst credible dose** and the **earliest credible time**, and assume co-ingestion — especially paracetamol and alcohol.
- Most poisoned patients need **only observation and supportive care**; the commonest finals error is reaching for charcoal or an antidote in a patient the risk assessment says will be fine.
- Screening in every deliberate self-poisoning: **paracetamol level (≥4 h post ingestion) and ECG**, plus BSL, electrolytes, VBG, pregnancy test where relevant.

**Why risk assessment rather than decontamination.** Decontamination was historically applied to everyone presenting within an arbitrary window, on the assumption that removing drug must help. It does not: lavage and ipecac cause harm and change no outcome, and charcoal's benefit depends entirely on whether the predicted toxicity justifies the aspiration risk. Risk assessment reverses the logic — decide first whether the ingestion can plausibly hurt *this* patient, then ask whether any intervention could change that.

**The five inputs.**
- **Agent** — drug *and formulation*: MR and enteric-coated preparations delay and prolong the peak, and push out the safe-discharge time.
- **Dose** — **mg/kg** in children, mg/kg and total mg in adults; count every unaccounted tablet and expect under-reporting.
- **Time since ingestion** — anchors the charcoal window, the level-taking window, time to peak effect and the observation period. Staggered ingestion: use the **earliest** time.
- **Clinical course so far** — asymptomatic at 6 h post an IR ingestion is a different problem from asymptomatic at 30 min.
- **Patient factors** — weight, age, pregnancy, renal/hepatic function, chronic therapy with the same drug (tolerance in opioids/benzodiazepines; accumulated burden in lithium and digoxin), co-ingestants.

**Paediatric exploratory ingestion** is mostly trivial, with a "one tablet can kill a toddler" list: TCAs, verapamil/diltiazem, sulfonylureas, opioids (including buprenorphine, methadone), theophylline, chloroquine/hydroxychloroquine, camphor, concentrated eucalyptus oil. A single dose of any in a 10 kg child needs assessment and a defined observation period. Deliberate self-poisoning also carries a psychiatric risk assessment (**Psychiatry §1.4**); the medical risk assessment determines when that can safely occur, not the reverse.

---

## 7.2 Resuscitation and supportive care first

**The short version**
- Airway, breathing, circulation, **glucose**, then a focused toxidrome examination — BSL is part of the primary survey in every altered poisoned patient.
- Poisoned patients arrest by few mechanisms: **hypoxia/airway loss**, **sodium-channel blockade → wide-complex arrhythmia**, **cardiogenic shock (BB/CCB)**, **seizure and hyperthermia**, **massive metabolic acidosis**.
- Supportive care cures far more poisonings than antidotes: intubation for airway protection, fluids and vasopressors for shock, benzodiazepines for seizures and agitation, active cooling for hyperthermia.
- **CPR should be prolonged in the poisoned arrest** — the poison may be metabolised or eliminated. ANZCOR 11.10 endorses prolonged resuscitation and **ECPR** for potentially reversible toxicity.
- Correct the **acidosis**: it worsens sodium-channel blockade, drives free salicylate into the CNS, and blunts vasopressor response.

**Specific arrest mechanisms and what they change.**
- **Sodium-channel blockade** (TCAs, propranolol, flecainide, bupivacaine, quinine): wide-complex tachycardia then asystole. **NaHCO₃ 8.4%** — ANZCOR 11.10 names it as the measure to narrow the QRS — not amiodarone or class Ia/Ic agents.
- **Cardiogenic shock** (β-blocker, CCB): fluids, calcium, catecholamines, **HIET** (§7.12), then mechanical support.
- **LAST**: **20% lipid emulsion 1.5 mL/kg IV bolus**, then infusion at **15 mL/kg/h**; up to **three boluses at 5-minute intervals**, continuing the infusion until stable or to a **total of 12 mL/kg** (ANZCOR 11.10). Lipid outside LAST is contentious — toxicologist advice only.
- **Hypoxia** — the opioid/sedative arrest is a *respiratory* arrest that becomes cardiac; ventilation fixes it, naloxone is adjunctive once arrested.
- **Hyperthermia** with rigidity kills via rhabdomyolysis, DIC and MOF. Cool aggressively; sedate and paralyse if >39–40 °C and not falling.

Arrest algorithms **§1**; shock and electrolytes **§3**; ventilation **§5**; organ support and rhabdomyolysis-associated AKI **§6**.

---

## 7.3 Toxidromes

**The short version**
- A toxidrome is **vitals + pupils + skin + bowel sounds + mental state**, narrowing an unknown ingestion to a class.
- Highest-yield discriminator in a written stem is **skin**: anticholinergic = **dry, flushed, hot**; sympathomimetic = **diaphoretic**. Both are tachycardic, hypertensive, mydriatic, agitated.
- Second: **bowel sounds and bladder** — anticholinergic **absent, retention**; sympathomimetic normal/increased; cholinergic **hyperactive, incontinent**.
- **Pinpoint pupils** = opioid or cholinergic; separate on secretions — opioids are dry and constipated, cholinergics are wet and wet.
- Sedative-hypnotic depresses conscious state with **relatively normal vitals and pupils**; serotonergic is the only toxidrome with **clonus** and **lower-limb-predominant hyperreflexia**.

| Toxidrome | HR / BP | Temp | Pupils | Skin | Bowel sounds | Mental state | Classic agents |
|---|---|---|---|---|---|---|---|
| **Sympathomimetic** | ↑↑ / ↑↑ | ↑ | Mydriasis | **Diaphoretic** | Normal/↑ | Agitation, psychosis | Amphetamine, methamphetamine, cocaine, MDMA, pseudoephedrine |
| **Anticholinergic** | ↑ / ↑ or normal | ↑ | Mydriasis, poorly reactive | **Dry, flushed** | **Absent**, urinary retention | Delirium, mumbling, picking, visual hallucinations | TCAs, antihistamines (promethazine, doxylamine), benztropine, antipsychotics, *Datura* |
| **Cholinergic** | ↓ (or ↑) / ↓ | Normal/↓ | **Miosis** | **Wet** — sweating, salivation | **↑**, incontinence | Confusion, coma, fasciculations, weakness | Organophosphates, carbamates, nerve agents, some mushrooms |
| **Opioid** | ↓ / ↓ | ↓ | **Pinpoint** | Normal/cool | ↓ | **↓RR**, sedation, coma | Morphine, oxycodone, heroin, methadone, fentanyl |
| **Sedative-hypnotic** | Normal/↓ / normal/↓ | Normal/↓ | Normal or small | Normal | Normal/↓ | Sedation with **preserved vitals**, slurred speech, ataxia | Benzodiazepines, zolpidem, ethanol, GHB, barbiturates |
| **Serotonergic** | ↑ / ↑ | ↑↑ | Mydriasis | Diaphoretic | ↑ | Agitation + **clonus, hyperreflexia (legs > arms), tremor** | SSRIs, SNRIs, MAOIs, tramadol, linezolid, combinations |

**How the discriminations are examined.**
- *Anticholinergic vs sympathomimetic* — dry vs wet skin, then bowel sounds and bladder. Anticholinergic delirium is **mumbling, picking at unseen objects, frank visual hallucinations**; the sympathomimetic patient is alert, orientated and paranoid.
- *Opioid vs cholinergic* (both miotic) — the cholinergic patient is drenched in secretions with bronchorrhoea and diarrhoea; the opioid patient is dry with a slow RR (triad: **miosis, respiratory depression, reduced conscious state**).
- *Sedative-hypnotic vs opioid* — RR discriminates: benzodiazepine monotoxicity preserves respiratory drive; RR 6 with pinpoint pupils is opioid until proven otherwise.
- *Serotonergic vs anticholinergic vs NMS* — comparison table in **Psychiatry §7.2**; the toxicological addition is that **clonus is the finding to elicit**, and it is the feature most likely to appear in a stem.
- GHB: **deep coma with abrupt agitated awakening at 2–4 h**, preserved vitals, no antidote.

---

## 7.4 Decontamination

**The short version**
- **Activated charcoal** is the only GI decontamination with a real role, and it is narrow: **early presentation** (usually <1–2 h), **potentially serious ingestion**, **cooperative patient with an intact airway**, agent that **binds to charcoal**.
- Adult dose **50 g**; paediatric **1 g/kg up to 50 g**.
- The problem is **aspiration** — not for the drowsy, vomiting or uncooperative patient; may be given via NGT if the airway is already protected.
- Charcoal does **not** bind: metals (iron, lithium, potassium), alcohols and glycols, corrosives, hydrocarbons, cyanide, fluoride.
- **Gastric lavage and ipecac are obsolete** — no outcome benefit, real harm (aspiration, oesophageal injury, hypoxia, delayed charcoal).

**Charcoal timing.** The one-hour rule is a rule of thumb from volunteer pharmacokinetics, extended where absorption is delayed or the ingestion very large. The Australian paracetamol guideline (Chiew et al., MJA 2020) is the clearest worked example: within **2 h** for IR ingestions ≥10 g or ≥200 mg/kg, within **4 h** for ingestions **≥30 g**, and within **4 h** for **modified-release** paracetamol at the ≥10 g / ≥200 mg/kg threshold, because MR absorption continues for hours.

**Whole bowel irrigation.** PEG electrolyte solution via NGT until effluent runs clear. Indications all amount to "charcoal cannot do it": life-threatening **MR verapamil/diltiazem**, MR potassium, **iron**, lead, **body packers**. Contraindicated with ileus, obstruction, perforation, instability or an unprotected airway. A toxicologist-level decision.

**Skin and eye decontamination** matters more than GI decontamination for organophosphates, hydrofluoric acid and corrosives: remove clothing, irrigate copiously, **protect staff**.

---

## 7.5 Enhanced elimination

**The short version**
- Four techniques: **urinary alkalinisation**, **multi-dose activated charcoal (MDAC)**, **haemodialysis**, rarely haemoperfusion/exchange transfusion.
- Dialysable = **low molecular weight, low protein binding, Vd <1 L/kg, low endogenous clearance**. The list to memorise: **salicylate, lithium, methanol, ethylene glycol, metformin, valproate, theophylline, phenobarbitone, carbamazepine**.
- **Urinary alkalinisation** is essentially a salicylate technique (also phenobarbitone, chlorpropamide, some herbicides): NaHCO₃ infusion to **urine pH 7.5–8.5**, with obsessive **potassium replacement** — you cannot alkalinise the urine of a hypokalaemic patient.
- **MDAC** interrupts enterohepatic/enteroenteric recirculation: **carbamazepine, dapsone, phenobarbitone, quinine, theophylline**.

**Urinary alkalinisation in practice.** Bicarbonate load then infusion, hourly urine pH (catheter), serial K⁺, watching for hypocalcaemia and fluid overload. Contraindicated in renal failure and pulmonary oedema — in which case, dialyse. In salicylate poisoning **haemodialysis** is indicated for altered mental state, acidaemia, renal failure, pulmonary oedema, failed alkalinisation, or very high concentrations; commonly quoted thresholds are around **>7.2 mmol/L acutely** and around **4.4 mmol/L** in chronic or elderly poisoning, but clinical criteria trump the number and a falling pH with a rising level is the emergency. ⚑ Salicylate is reported in **mmol/L in Australia** and **mg/dL in North American sources** (7.2 mmol/L ≈ 100 mg/dL) — a genuine unit trap.

**Intubation in severe salicylate poisoning is dangerous**: compensatory hyperventilation is keeping the patient alive, and any apnoeic period drops the pH, drives salicylate into the CNS and can precipitate arrest. Pre-alkalinise and match the pre-intubation minute ventilation. Haemodialysis is also definitive for the **toxic alcohols** (§7.13) and, selectively, **lithium** (§7.10); CRRT is a fallback where instability precludes intermittent HD, not an equivalent.

---

## 7.6 Paracetamol

**The short version**
- Risk assessment threshold for an acute ingestion: **≥10 g or ≥200 mg/kg, whichever is less** (adult and paediatric).
- The **Australian nomogram line is 150 mg/L (1000 µmol/L) at 4 h**, declining with a 4-h half-life — a single treatment line. ⚑ The **UK line is 100 mg/L at 4 h** (MHRA 2012); presenting the UK line as Australian is a classic error.
- Australian NAC regimen since the 2019–2020 consensus update is the **two-bag regimen**: **200 mg/kg (max 22 g) over 4 h**, then **100 mg/kg (max 11 g) over 16 h** — 300 mg/kg over 20 h.
- **Massive ingestion** (≥30 g or ≥500 mg/kg, or a concentration **>2× the nomogram line**): **double the second bag to 200 mg/kg over 16 h**.
- Start NAC **empirically without waiting for a level** if presentation is **>8 h post ingestion**, if the level will not be back within 8 h of ingestion, or if the time is unknown.

**What changed in 2019–2020 (Chiew et al., MJA 2020).** ⚑ Four practice-changing items, all examinable: (1) the **three-bag Prescott regimen was replaced by the two-bag regimen** — same 300 mg/kg over 20 h, fewer anaphylactoid reactions and infusion errors; (2) an explicit **increased-dose recommendation** — second bag doubled to 200 mg/kg/16 h where the concentration exceeds **double** the nomogram line, with toxicologist discussion above **3×**; (3) explicit **charcoal indications with extended windows** for large and MR ingestions (§7.4); (4) clear **stopping rules** replacing "finish the course and go home".

**Nomogram rules.** Valid only for a **single acute immediate-release ingestion at a known time**, using a level taken **at or after 4 h** (generally within 16 h). Never plot a pre-4 h level to decide *against* treatment, and do not use it at all for **modified-release** paracetamol or **RSTI**.

**The regimen, arithmetic done.** **70 kg adult**: bag 1 = 200 × 70 = **14 g over 4 h**; bag 2 = 100 × 70 = **7 g over 16 h**; total **21 g over 20 h**. The 22 g and 11 g caps correspond to a **110 kg ceiling** (22 000 ÷ 200 = 110; 11 000 ÷ 100 = 110) — above that, dose is capped, not extrapolated. With a doubled second bag: 14 + 14 = **28 g**.

**Presentation patterns.**
- **Acute** — discrete single ingestion. Level at 4 h (or on arrival if later); plot; treat above the line.
- **Staggered** — deliberate ingestion over **>2 h**. Manage as acute but **anchor the nomogram to the earliest ingestion time**, which biases toward treatment; in practice most staggered ingestions above threshold receive NAC.
- **RSTI** — therapeutic intent, cumulative excess. Assess if **≥10 g or ≥200 mg/kg/24 h**; **≥12 g or ≥300 mg/kg/48 h**; or above-therapeutic dosing **>48 h with GI symptoms**. Nomogram does not apply; the decision rests on **ALT and paracetamol concentration** — treat if ALT is elevated or paracetamol is detectable above the locally used trigger (commonly 20 mg/L).
- **Modified-release** — ≥10 g or ≥200 mg/kg gets a **full NAC course regardless of concentration**, with paired levels 4 h apart, because a single point can be falsely reassuring.

**Stopping NAC.** At the end of the 20 h course check **ALT/AST, INR and paracetamol concentration**. Stop if **clinically well**, ALT/AST **normal or falling**, and **INR <2.0**. Continue (at 100 mg/kg per 16 h) if ALT is **>50 U/L and rising**, or if paracetamol remains **≥10 mg/L (66 µmol/L)** — the latter mandatory in high-risk groups (massive ingestion, MR preparation, initial concentration >2× the line).

**NAC without a level.** NAC is near-completely hepatoprotective started **within 8 h of ingestion**, with efficacy falling off thereafter (though still given late, including in established hepatotoxicity). Rule: **if the level will not be in your hand and acted on before the 8-hour mark, start NAC and stop it later if the level is below the line.**

> **Worked bank stem.** *A 70 kg adult took 20 g of IR paracetamol 6 h ago. Key management priority?* Dose = 20 000 ÷ 70 = **286 mg/kg** — above both the 200 mg/kg and 10 g thresholds. The 2 h charcoal window has passed and this is not ≥30 g, so **no charcoal**. At 6 h a level is valid **now**. Priority: **take the paracetamol level immediately and ensure NAC starts within 8 h of ingestion** — i.e. start empirically if the level will not be available and acted on within the next 2 h. Not "check LFTs", not "await the 4-hour level", not "give charcoal".

Hepatotoxicity, King's College criteria and acute liver failure are in **Gastroenterology**; NAC anaphylactoid reactions and paracetamol-associated AKI in **Renal**.

---

## 7.7 Tricyclic antidepressants and sodium-channel blockade

**The short version**
- TCA overdose kills by **sodium-channel blockade** (wide QRS, ventricular arrhythmia), **α₁ blockade** (hypotension), **anticholinergic** effects (delirium, ileus, retention) and **GABA-A antagonism** (seizures).
- **QRS width is the risk marker.** In Australian **adult** practice the trigger is **QRS >120 ms → bicarbonate and seizure risk** (Austin Health); in **paediatric** practice **QRS >100 ms → seizure risk** (RCH). Both use **QRS >160 ms → ventricular arrhythmia risk**. If a written stem gives an adult, use 120 ms. ⚑ Quote the threshold with its source rather than treating 100 and 120 as interchangeable.
- The other ECG sign: **R wave in aVR >3 mm *or* R/S ratio in aVR >0.7** — the most specific finding for TCA toxicity (either criterion suffices; requiring both understates sensitivity), plus a rightward terminal QRS axis.
- **Sodium bicarbonate 8.4%** is the specific treatment **in the toxicological (pulse-present) setting**: **1–2 mmol/kg IV bolus** (8.4% contains **1 mmol/mL**, so 1–2 mL/kg), **capped at 100 mL per bolus**, repeated **every 3–5 min** until the QRS narrows, **maximum total 6 mL/kg (6 mmol/kg)** — ANZCOR 11.10. Target arterial **pH 7.50–7.55** (Austin Health; ANZCOR words it 7.45–7.55). ⚑ Do not confuse this with the **cardiac-arrest** dose of **1 mmol/kg over 2–3 min** (ANZCOR 11.5 → **CC §1.6**) — different context, different ceiling.
- **Do not give**: flumazenil (seizures), class Ia/Ic antiarrhythmics or amiodarone (worsen sodium-channel blockade), phenytoin (sodium-channel blocker), β-blockers, physostigmine.

**Risk assessment by dose** (Austin Health 2022): **5–10 mg/kg** mild (tachycardia, mydriasis, mild CNS effects); **>10 mg/kg** moderate (anticholinergic delirium, retention); **>20 mg/kg** severe (seizures, coma, hypotension, arrhythmia, death). Onset is **fast — 30–90 min** — and deterioration abrupt. One or two tablets can be lethal in a small child; RCH refers any child ingesting **>5 mg/kg**.

**Bicarbonate mechanics.** Two effects — the **sodium load** overcomes channel blockade, the **alkalaemia** reduces drug binding to the channel — which is why hyperventilation accompanies boluses rather than a continuous bicarbonate infusion. Repeat boluses **every 3–5 minutes** while the QRS is wide, titrated to QRS narrowing. ANZCOR 11.10 caps each bolus at **1–2 mL/kg up to 100 mL** and the **total at 6 mL/kg** (≈420 mL of 8.4% in a 70 kg adult); beyond that, hyperventilate an intubated patient to pH 7.45–7.55 (PaCO₂ 30–35 mmHg) rather than giving more bicarbonate. **70 kg adult**: 1 mmol/kg = **70 mmol = 70 mL of 8.4%**; 2 mmol/kg = 140 mL. Watch Na⁺, pH and K⁺.

**Sequence in the crashing patient.** Intubate early for falling GCS with tachycardia after recent ingestion — Austin recommends a **bicarbonate bolus on induction**, since the apnoea and acidosis of RSI can precipitate arrhythmia — then hyperventilate to pH 7.50–7.55. **Hypotension**: crystalloid **20–30 mL/kg**, correct acidosis, then **noradrenaline**. **Seizures**: benzodiazepines plus bicarbonate, not phenytoin. **Arrhythmia**: bicarbonate, magnesium; lidocaine only on toxicologist advice. Charcoal only once the airway is secured; lipid emulsion and ECMO are rescue. **Disposition**: normal ECG and conscious state at **6 h** = medically cleared.

> **Worked bank stem.** *QRS 140 ms with hypotension after TCA overdose — what is the specific treatment?* **IV sodium bicarbonate 8.4%, 1–2 mmol/kg (1–2 mL/kg, max 100 mL per bolus) as a bolus, repeated every 3–5 min until the QRS narrows, to a maximum total of 6 mL/kg, with hyperventilation to pH 7.50–7.55.** Not amiodarone, not flumazenil, not phenytoin. Fluid and noradrenaline support the blood pressure but bicarbonate is the *specific* answer.

---

## 7.8 Opioids and sedative-hypnotics

**The short version**
- **Naloxone is titrated to respiration, not to consciousness.** The endpoint is adequate ventilation and oxygenation — waking the patient fully is not the goal and precipitates withdrawal, vomiting and aggression.
- Australian toxicology practice starts low in the dependent **adult**: **100 microgram IV increments every 30–60 s**, escalating as needed. ⚑ ANZCOR 11.10 quotes **adult** initial doses of **400 microgram IV, 800 microgram IM/SC, 2 mg intranasal** for the arrest/prehospital setting — the resuscitation figure and the titration figure differ because the goals differ; name which context you mean.
- **Naloxone is shorter-acting than most opioids** — duration of action **45–70 min**, while respiratory depression may persist **4–5 h** after an opioid overdose. Re-sedation can occur; observe for at least **2 h after the last dose**, and much longer for methadone, buprenorphine or MR oxycodone.
- **Infusion** when repeated dosing is needed: start at approximately **two-thirds of the total waking dose per hour**, titrated.
- **Flumazenil is almost never used.** It precipitates seizures in benzodiazepine-dependent patients and in co-ingested proconvulsants (especially TCAs), and it has no meaningful mortality benefit in a poisoning that supportive care already treats.

**The dependent patient.** A large naloxone bolus in chronic opioid use precipitates acute withdrawal: agitation, vomiting with aspiration risk, catecholamine surge, occasionally non-cardiogenic pulmonary oedema. Reserve it for genuine respiratory compromise (typically **RR <8–10** with reduced conscious state and hypoxia) and titrate; larger increments are safe in the opioid-naive.

**Which opioids misbehave.** **Methadone** — long half-life, QT prolongation, torsades. **Buprenorphine** — high-affinity partial agonist, may need much larger naloxone doses. **Tramadol** — seizures and serotonin toxicity as well. **Fentanyl analogues** — rapid onset, chest-wall rigidity, high naloxone requirement. **MR preparations** — delayed, prolonged toxicity needing longer observation.

**Benzodiazepines.** A supportive-care problem: positioning, oxygen, occasionally intubation, and time. Mortality is driven by **co-ingestion** (alcohol, opioids) and aspiration. **Flumazenil** (0.2 mg increments) has one legitimate niche — reversing iatrogenic procedural sedation in a benzodiazepine-naive patient with a known single agent — and must never be a diagnostic manoeuvre in undifferentiated coma. Withdrawal syndromes: **Psychiatry §5.3**.

---

## 7.9 Stimulants including methamphetamine

**The short version**
- Three things kill: **hyperthermia**, **agitation-related injury and rhabdomyolysis**, and **cardiovascular events** (ACS, dissection, ICH, arrhythmia).
- **Benzodiazepines are the pharmacological backbone** — they treat agitation, tachycardia, hypertension, seizures and hyperthermia simultaneously.
- Australian ED practice for severe acute behavioural disturbance uses **droperidol 10 mg IM in adults** (5 mg IM if medically frail; children/adolescents 0.1–0.2 mg/kg, max 10 mg), repeatable at 15 min, **max 30 mg/24 h in adults** (15 mg if frail; 0.4 mg/kg to a max 20 mg in children) (Queensland Health guideline, 2024), with **ketamine 4–6 mg/kg IM in adults** (2–4 mg/kg in children/adolescents) as rescue for failed droperidol sedation.
- **Temperature is the vital sign that decides prognosis.** >39–40 °C and rising demands active cooling and, if needed, intubation with paralysis.
- Do not use **β-blockers alone** in cocaine toxicity (unopposed α, worsening vasospasm and hypertension); use benzodiazepines, GTN and phentolamine.

**Sedation approach.** Escalating and protocolised, with continuous pulse oximetry, vitals every 5 min for 20 min and sedation scoring every 15 min for an hour after parenteral sedation (Queensland Health 2024). Droperidol has been rehabilitated in Australian practice — the QT concerns behind its US withdrawal were not reproduced at these doses in Australian ED series. Contraindications: hypersensitivity, previous dystonic reaction, Parkinson's disease. Ketamine is rescue, not first-line.

**Investigations and complications.** ECG (ischaemia, QT, wide complexes), troponin if chest pain, CK and renal function for rhabdomyolysis, sodium (MDMA causes **hyponatraemia** via SIADH plus free-water loading — a stem favourite: a rave attendee with seizures and Na⁺ 120), BSL, temperature, CT brain if focal signs or persistent headache. Cocaine chest pain — benzodiazepines, aspirin, GTN, then treat ACS on its merits. Body packers/stuffers — WBI and surgical retrieval on toxicologist advice; a ruptured packet is a surgical emergency. Substance use disorders: **Psychiatry §5**.

---

## 7.10 Lithium

**The short version**
- **Acute** overdose in a lithium-naive patient: GI symptoms dominate (vomiting, diarrhoea) with **relatively few neurological features despite a high level** — lithium has not yet distributed into the CNS.
- **Chronic** toxicity (dehydration, NSAIDs, ACEI/ARB, thiazides, AKI): **neurological features dominate at a much lower level** — tremor, ataxia, dysarthria, hyperreflexia, myoclonus, confusion, seizures.
- Therefore **the level means different things in each**: a level of 3.0 mmol/L in an acute-on-naive ingestion may be benign and falling; the same level in a chronic patient is a neurological emergency.
- **Charcoal does not bind lithium.** Treatment is **IV normal saline** to restore renal perfusion and promote excretion; withhold the lithium and any precipitating drugs.
- **Haemodialysis** (EXTRIP 2015): recommended if **[Li⁺] >4.0 mmol/L with impaired kidney function**, or if there is **decreased conscious state, seizures or life-threatening dysrhythmia irrespective of level**; suggested if **[Li⁺] >5.0 mmol/L**, if confusion is present, **or if the expected time to reach [Li⁺] <1.0 mmol/L with optimal management is >36 h**. Intermittent haemodialysis is the preferred modality; serial levels over 12 h decide whether further sessions are needed. Stop when **[Li⁺] <1.0 mmol/L** or clinical improvement occurs, or after a minimum of 6 h if levels are unavailable.

⚑ **Australian caveat.** Buckley et al. (*BJCP* 2020, *Haemodialysis for lithium poisoning: translating EXTRIP recommendations into practical guidelines*) argue the EXTRIP criteria over-select for dialysis: many patients meeting them recover with saline alone, and dialysis rarely alters the outcome that matters — chronic neurological injury (SILENT). Exam-safe position: know the EXTRIP numbers, and state that the decision is made with a toxicologist, not by the number alone.

**Practical points.** Take **paired levels** — a single level may still be rising, especially with MR preparations (WBI is sometimes used for these). Expect rebound after ceasing dialysis as lithium redistributes out of cells. Watch for **nephrogenic diabetes insipidus** confounding fluid management in chronic toxicity.

---

## 7.11 Digoxin

**The short version**
- Features: **GI upset, confusion, visual disturbance (xanthopsia, halos)**, and almost any arrhythmia — the classic being **bradyarrhythmia with ectopy**, and the near-pathognomonic **bidirectional VT**.
- **Potassium tells you the story in acute toxicity**: acute poisoning blocks Na⁺/K⁺-ATPase and causes **hyperkalaemia**, which correlates with mortality. **K⁺ >5.0 mmol/L** marks significant poisoning (Australian Prescriber); **Austin Health uses K⁺ >6.0 mmol/L with evidence of acute toxicity** as its Fab trigger. Quote the threshold with its source; K⁺ >5.0 alone in an otherwise well patient is not by itself an indication for Fab.
- **Chronic** toxicity behaves differently: normal or **low** potassium, often with hypokalaemia and hypomagnesaemia from diuretics, insidious onset, and it responds far less predictably to Fab.
- **Digoxin immune Fab** is the antidote. Australian empiric dosing (Queensland PIC): **cardiac arrest 5 vials (200 mg)**; **acute toxicity with haemodynamic compromise 2 vials (80 mg)** IV over 30 min, repeated as needed; **chronic toxicity with compromise 1 vial (40 mg)** over 30 min.
- **Fab is the treatment for digoxin-associated hyperkalaemia**; insulin–dextrose and bicarbonate as required. The old absolute contraindication to IV calcium ("stone heart") is **not evidence-based** — Austin Health's acute digoxin guideline says to treat hyperkalaemia "along conventional lines (this includes giving calcium if indicated)", and calcium should **not** be withheld in life-threatening hyperkalaemia when digoxin toxicity is only suspected. Calcium is usually unnecessary once Fab is given, not forbidden.

⚑ Australian practice uses **empiric, small, titrated vial doses**; North American product information gives **formula-based** dosing from ingested dose or serum concentration, with much larger vial numbers. Cite the Australian approach for an Australian paper. Total digoxin assays are uninterpretable after Fab (they measure bound drug) — do not chase levels post-antidote.

**Other cardiac glycosides** — oleander, foxglove, lily-of-the-valley, **cane toad** bufadienolides — give the same syndrome and generally need **higher** Fab doses. Precipitants of chronic toxicity in a stem: new AKI, dehydration, and interacting drugs (amiodarone, verapamil, clarithromycin, spironolactone). Bradyarrhythmia unresponsive to Fab may need atropine and pacing, though pacing itself is arrhythmogenic in the digoxin-toxic myocardium.

---

## 7.12 Beta-blocker, calcium-channel blocker and sulfonylurea

**The short version**
- **CCB (verapamil, diltiazem)**: bradycardia, hypotension, **preserved conscious state until very late**, and **hyperglycaemia** (calcium channels are needed for insulin release) — the discriminating clue.
- **β-blocker**: bradycardia and hypotension with **hypoglycaemia**; **propranolol** adds sodium-channel blockade (wide QRS, seizures — bicarbonate) and marked CNS toxicity; **sotalol** prolongs QT and causes torsades.
- Escalation: fluids → **atropine** → **IV calcium** → catecholamines → **HIET** → high-dose vasopressors/mechanical support (IABP, VA-ECMO). Glucagon is traditional in β-blocker poisoning but vomiting-limited and of modest benefit.
- **HIET** (Austin Health v4.2, 2025; adult): **insulin 1 unit/kg IV bolus**, then **1 unit/kg/h** (initial rate capped at 120 units/h), **titrated every 15 min up to 5 units/kg/h over the first hour** and thereafter to a maximum **10 units/kg/h (absolute ceiling 1200 units/h)**, with **50 mL of 50% glucose** bolus (omit if BSL >15 mmol/L) and **100 mL/h of 10% glucose**, targeting **glucose 5.5–11.0 mmol/L** and **K⁺ 2.8–3.3 mmol/L**, checking both 15-minutely at first; cease once cardiovascular toxicity resolves.
- **Sulfonylurea** poisoning causes **prolonged, recurrent hypoglycaemia**: glucose, plus **octreotide** to suppress the insulin surge dextrose itself provokes.

**HIET arithmetic.** **70 kg adult**: bolus **70 units**; initial infusion **70 units/h**; maximum titration 10 × 70 = **700 units/h** (within the 1200 units/h ceiling). Mechanism: the poisoned myocardium switches from fatty acid to carbohydrate metabolism, and insulin is inotropic. Hypoglycaemia and hypokalaemia are expected; mild hypokalaemia is tolerated because the shift is intracellular, not a true deficit. Onset **15–60 min** — start early, not as a last resort.

**Sulfonylurea specifics** (Queensland PIC), once BSL <4.0 mmol/L is confirmed: **octreotide 50 microgram SC 8-hourly for at least 24 h**, or 50 microgram IV load then 25 microgram/h. Paediatric **2 microgram/kg SC 8-hourly** (20 kg child = **40 microgram** per dose). A child with any possible sulfonylurea exposure needs **BSL monitoring for a full 24 h** — onset of hypoglycaemia may be **delayed up to 18 h** — so a normal BSL at 4 h, or at 12 h, does not permit discharge.

---

## 7.13 Iron, carbon monoxide, organophosphates and toxic alcohols

**The short version**
- **Iron** — toxicity is by **elemental** iron: <20 mg/kg minimal, 20–60 mg/kg GI toxicity, **>60 mg/kg** systemic toxicity, >120 mg/kg potentially lethal. Charcoal does **not** bind iron; consider **whole bowel irrigation** for large ingestions with radio-opaque tablets on AXR.
- **Desferrioxamine** (Queensland PIC): **15 mg/kg/h IV infusion** for serum iron **>90 micromol/L at 6 h**, or **>60 micromol/L with clinical toxicity** (shock, coma, GI haemorrhage, metabolic acidosis); continue until iron <60 micromol/L; halve the dose if eGFR <50. Expect hypotension with rapid infusion and *vin rosé* urine.
- **Carbon monoxide** — non-specific (headache, nausea, confusion); **pulse oximetry is falsely normal**, so measure **COHb on a co-oximeter**. Treatment is **high-flow 100% oxygen**; COHb half-life falls from ~240 min on air to ~90 min on FiO₂ 1.0 and ~23 min at 3 ATA.
- **Organophosphates** — cholinergic toxidrome. **Atropine** is titrated by a **doubling-dose strategy** to drying of secretions, not to heart rate; **pralidoxime** reactivates cholinesterase but the evidence is weak (Cochrane).
- **Toxic alcohols** — **raised osmolar gap early, raised anion-gap metabolic acidosis late**. Block metabolism with **fomepizole**, and dialyse.

**Iron's four phases** — GI (0–6 h), latent/apparent recovery (6–24 h), systemic (acidosis, shock, hepatic necrosis), then late **gastric outlet/pyloric stricture and bowel obstruction** at **2–8 weeks**. The apparent-recovery phase is the trap: do not discharge on symptom resolution alone after a significant dose.

**Carbon monoxide.** ⚑ **Hyperbaric oxygen remains contested.** Cochrane (six RCTs, n≈1361) found no significant benefit; a widely cited single trial (Weaver 2002) showed reduced cognitive sequelae at six weeks. HBO therefore **cannot be routinely recommended**, though it is considered for loss of consciousness, persistent neurological deficit, myocardial ischaemia, metabolic acidosis, age >55 and **pregnancy** (fetal Hb binds CO avidly; fetal COHb lags maternal). Outcome correlates poorly with the COHb number. Delayed neuropsychiatric sequelae appear days to weeks later — warn and follow up.

**Organophosphates in detail.** DUMBBELS/SLUDGE plus nicotinic (fasciculations, weakness, tachycardia) and CNS (coma, seizures) features. Death is from **bronchorrhoea and respiratory failure** — hence atropine's endpoint is a **dry chest on auscultation**. Start around **0.02 mg/kg** (adult starting doses ~1.2 mg also used), **doubling every 5 min** until atropinised, then infuse; cumulative doses of tens of milligrams are normal. **Pralidoxime** (~**30 mg/kg IV load then ~8 mg/kg/h**) targets nicotinic weakness before enzyme "ageing", but Cochrane found no clear benefit — toxicologist advice, not reflex. Benzodiazepines for seizures. **Decontaminate and protect staff.** Watch for **intermediate syndrome** at 24–96 h: proximal, neck flexor and respiratory weakness after the acute crisis resolves, requiring ventilation.

**Toxic alcohols.** **Methanol** → formic acid → **visual loss, "snowstorm" vision, putaminal necrosis**; **ethylene glycol** → glycolic and oxalic acid → **AKI with calcium oxalate crystalluria and hypocalcaemia**. **Fomepizole** (SESLHD 2023): **15 mg/kg IV load** — 70 kg adult, **1050 mg** — then **10 mg/kg 12-hourly for 48 h**, then 15 mg/kg 12-hourly; during intermittent HD, **10 mg/kg every 4 h**. Ethanol infusion is the fallback but far harder to run. **Haemodialysis** for significant acidosis, visual or renal end-organ effects, or high concentrations. Adjuncts: **folinic acid** (methanol), **thiamine and pyridoxine** (ethylene glycol).

---

## 7.14 Serotonin toxicity and neuroleptic malignant syndrome

**The short version**
- Both are hyperthermic, rigid, autonomically unstable states; the comparison table (onset, rigidity, reflexes, pupils, CK, treatment) is in **Psychiatry §7.2** — not duplicated here.
- Toxicological framing: serotonin toxicity is a **dose-dependent, rapid-onset (hours) drug interaction** — SSRI/SNRI plus a second serotonergic agent (**tramadol, MAOI, moclobemide, linezolid, St John's wort**); NMS is an **idiosyncratic, slow-onset (days) reaction** to dopamine antagonism or antiparkinsonian withdrawal.
- **Clonus with lower-limb-predominant hyperreflexia** = serotonin toxicity; **lead-pipe rigidity with bradyreflexia** = NMS.
- Both start identically: **stop the drug, cool actively, benzodiazepines, IV fluids**, intubate/paralyse if temperature is uncontrolled. **Cyproheptadine** is the serotonin-specific adjunct; **dantrolene and bromocriptine** for severe NMS.
- **Hyperthermia is the emergency**, not the rigidity — sustained >39–40 °C causes rhabdomyolysis, AKI and DIC. Antipyretics do not work.

**Poisoning-specific point:** single-agent SSRI overdose rarely causes severe serotonin toxicity — it is the **combination** (especially with an MAOI or moclobemide) that is life-threatening. **Citalopram/escitalopram** cause dose-dependent **QT prolongation** in overdose; **venlafaxine** causes seizures and cardiotoxicity.

---

## 7.15 Envenomation

**The short version**
- **Pressure immobilisation technique (PIT)** applies to **all Australian venomous snakes including sea snakes, funnel-web spider, blue-ringed octopus and cone shell** (ANZCOR 9.4.8) — **not** redback or other spiders, jellyfish, stonefish or other fish stings, scorpions or centipedes.
- Technique: broad **elasticised bandage 10–15 cm**, firm enough that a finger cannot easily slide underneath, applied **over the bite then from the fingers/toes upward covering as much of the limb as possible**, then **splint** including joints either side. **Do not wash the bite** (removes venom needed for the SVDK), **do not cut, suck or apply an arterial tourniquet**, and **do not remove the bandage** until antivenom can be given.
- **Snake venom detection kit**: **bite-site swab** (best sample; urine if the site is unknown). Its purpose is to **choose which antivenom**, not to decide whether the patient is envenomed — false negatives occur in a substantial minority, and tiger/brown cross-reaction is described.
- **Antivenom dose: one vial**, adults and children, any Australian snake (Australian Snakebite Project). Repeat dosing is **no longer recommended**; no premedication.
- Envenomation is diagnosed **clinically and on bloods**: **VICC** (INR, aPTT, fibrinogen, D-dimer), **myotoxicity** (CK), **neurotoxicity** (ptosis, ophthalmoplegia, descending paralysis), thrombotic microangiopathy, sudden collapse.

**Snakebite workflow.** PIT on, then transfer to a facility with antivenom, resuscitation capability and a laboratory. Bloods (**INR/aPTT, FBC, CK, EUC**) on arrival, **1 h after bandage removal**, then at **6 h and 12 h**; remove the bandage only once ready to treat. Normal serial bloods and examination at **12 h** = not envenomed; discharge in daylight with return advice. Give antivenom diluted and slowly with adrenaline drawn up (anaphylaxis — **Immunology & Allergy**). VICC takes **24–36 h** to correct; do **not** chase it with routine FFP or repeat antivenom.

**Spiders.** **Redback (*Latrodectus hasselti*)** — severe local, radiating and regional pain, patchy sweating, malaise; **no PIT** (venom is slow-acting); ice and oral analgesia first. Antivenom exists but RAVE II found it no better than placebo, so it is used selectively for severe refractory pain. **Funnel-web (*Atrax*/*Hadronyche*)** — a true emergency: rapid cholinergic-plus-catecholamine storm (salivation, lacrimation, sweating, fasciculation, hypertension, pulmonary oedema, coma). **PIT applies**; give antivenom early, repeat as required, with intensive supportive care.

**Marine.** **Box jellyfish (*Chironex fleckeri*)**, tropical north — immediate excruciating pain, ladder-pattern marks, **collapse within minutes** in large stings. ANZCOR 9.4.5: remove from water, **douse with vinegar ~30 s**, pick off tentacles, **CPR if unresponsive** (the intervention that saves lives), antivenom where available; no fresh water. **Irukandji syndrome** — trivial sting, then **5–40 min later** severe generalised back/abdominal/chest pain, agitation, sweating, hypertension, sometimes **myocardial injury and pulmonary oedema**; **titrated IV opioid**, antiemetics, ECG and troponin, echo if abnormal (magnesium used, not established). **Bluebottle (*Physalia*)** and all non-tropical jellyfish stings — **no vinegar**; **hot water immersion for 20 min**, no hotter than the rescuer can comfortably tolerate (≈45 °C maximum); a cold pack if heat gives no relief or is unavailable. **Stonefish and stingray** — hot water immersion, stonefish antivenom for uncontrolled pain; do not remove an embedded barb in the field.

---

## 7.16 Environmental emergencies

**The short version**
- **Drowning** is a hypoxic insult: **five initial ventilations** (with oxygen if available), then standard CPR 30:2 (**ANZCOR 11.10**) — the one arrest algorithm where ventilation genuinely precedes compressions. ANZCOR 9.3.2 *Resuscitation in Drowning* requires rescue breaths for all drowning victims but does not itself specify the number.
- **Hypothermic cardiac arrest**: ANZCOR 11.10 — **withhold adrenaline below 30 °C**; at **30–34 °C** lengthen adrenaline intervals to **6–10 min**; if VF persists after **three shocks**, defer further attempts until core temperature is **>30 °C**.
- **"Not dead until warm and dead"** — good neurological survival is documented after prolonged hypothermic arrest. Continue CPR during rewarming; **ECMO is the preferred rewarming modality** where available.
- **Heat stroke** = core temperature typically >40 °C **plus CNS dysfunction**. It is distinguished from heat exhaustion by the altered mental state. Treat by **immediate active cooling** — cold-water immersion is the most effective — targeting a rapid fall to ~38–39 °C.
- Antipyretics are useless in heat stroke and in toxic hyperthermia; the temperature is not prostaglandin-mediated.

**Drowning.** Do not drain water from the lungs or use abdominal thrusts. High-flow oxygen (10–15 L/min non-rebreather), early intubation for reduced conscious state or arrest, correct hypovolaemia. Post-immersion pulmonary oedema and ARDS evolve over hours — observe symptomatic patients. Salt- versus fresh-water distinctions are irrelevant to management. Look for the precipitant: seizure, long QT, alcohol, trauma, hypoglycaemia, syncope in the elderly. Concurrent **hypothermia is common** and changes the rules above.

**Hypothermia grading and rewarming.** Mild (~32–35 °C): shivering, ataxia, confusion — passive external rewarming (remove wet clothing, insulate). Moderate (~28–32 °C): shivering ceases, bradycardia, **Osborn (J) waves** — active external rewarming (forced warm air, warmed IV fluids, warm humidified oxygen). Severe (<28 °C): coma and high arrhythmia risk from rough handling — **handle minimally**, active internal rewarming, **ECLS** for arrest or instability. Beware **afterdrop** and **rewarming collapse** from vasodilatation into a volume-depleted circulation; give warm fluids.

**Heat illness.** Classical (elderly, chronic disease, heatwave, often anhidrotic) versus exertional (young, athletic or military, often still sweating — **sweating does not exclude heat stroke**). Complications: rhabdomyolysis with AKI, hepatic injury, DIC, seizures, ARDS. Cool first, investigate second; monitor K⁺, CK, coagulation, glucose. Predisposing drugs — anticholinergics, antipsychotics, diuretics, stimulants — link back to §7.3.

---

## 7.17 The Poisons Information Centre and the clinical toxicology service

**The short version**
- **13 11 26** reaches the Australian Poisons Information Centre network from anywhere in Australia, **24 hours a day**, for public and clinicians alike.
- Call **early** — the value is in shaping the risk assessment before decisions are made, not rescuing one already taken.
- Have ready: **agent and formulation, maximum possible dose (mg/kg in children), time of ingestion, weight and age, vitals and clinical state, co-ingestants, comorbidities**.
- PIC gives risk assessment, decontamination, observation and disposition advice; a **clinical toxicologist** adds antidote dosing, enhanced elimination and unusual or massive ingestions, and can accept transfer.
- Any uncommon, expensive or formula-dosed antidote — **digoxin Fab, desferrioxamine, fomepizole, HIET, antivenom, lipid emulsion** — should follow that discussion.

**What the toxicology service actually adds.** Three things a general ED cannot reliably supply at 3 am: a **quantitative risk assessment** for uncommon agents and massive ingestions; knowledge of **antidote stock locations** across a jurisdiction (state stocking recommendations exist because rural and remote hospitals cannot hold everything); and **advice on when *not* to intervene** — the most valuable output. Document the call and the advice.

---

## Rapid-Recall Discriminators

| Cue | Answer |
|---|---|
| Agitated, tachycardic, mydriatic — **dry flushed skin with absent bowel sounds** vs **diaphoretic with normal bowel sounds** | Anticholinergic (TCA, antihistamine, benztropine) vs sympathomimetic (amphetamine, cocaine, MDMA) |
| **Pinpoint pupils with bronchorrhoea, diarrhoea and fasciculations** | Cholinergic — organophosphate; atropine by doubling doses to a dry chest |
| **Pinpoint pupils, RR 6, GCS 8, dry skin** | Opioid; naloxone titrated to respiration, 100 microgram IV increments in the dependent adult; duration 45–70 min, so observe ≥2 h after the last dose |
| **Clonus and lower-limb-predominant hyperreflexia** with fever | Serotonin toxicity (compare NMS — Psychiatry §7.2) |
| Australian paracetamol nomogram treatment line at 4 h | **150 mg/L (1000 µmol/L)** — the UK line is 100 mg/L at 4 h |
| Acute paracetamol ingestion threshold for assessment | **≥10 g or ≥200 mg/kg, whichever is less** (adult and paediatric) |
| Australian NAC regimen (adult and paediatric, per kg) | Two-bag: **200 mg/kg (max 22 g) over 4 h, then 100 mg/kg (max 11 g) over 16 h** |
| Paracetamol concentration **>2× the nomogram line** or ingestion ≥30 g / ≥500 mg/kg | Massive ingestion — **double the second bag to 200 mg/kg over 16 h** |
| TCA overdose, **QRS 140 ms with hypotension** (adult trigger QRS >120 ms; paediatric >100 ms) | **Sodium bicarbonate 8.4%, 1–2 mmol/kg (1–2 mL/kg, max 100 mL per bolus) IV**, repeat every 3–5 min until QRS narrows, **total ≤6 mL/kg**; target pH 7.50–7.55 |
| Bradycardia and hypotension with **hyperglycaemia** | Calcium-channel blocker overdose (β-blocker gives hypoglycaemia) |
| Refractory shock from verapamil overdose | **HIET** (adult) — insulin **1 unit/kg bolus then 1 unit/kg/h** (initial rate capped at 120 units/h), up to 10 units/kg/h (ceiling 1200 units/h), with dextrose |
| Digoxin overdose with **K⁺ 6.2 mmol/L** and bradyarrhythmia | Severe acute toxicity — **digoxin immune Fab** (Austin Fab trigger: K⁺ >6.0 mmol/L with evidence of acute toxicity); Fab treats the hyperkalaemia, and **IV calcium is not contraindicated** — the "stone heart" is not evidence-based |
| Snake bite first aid, and which envenomations PIT is for | Pressure immobilisation — **all Australian snakes, funnel-web, blue-ringed octopus, cone shell**; NOT redback, jellyfish or fish stings |
| Australian snake antivenom dose | **One vial**, adult or child, any snake (Australian Snakebite Project); no premedication |
| Purpose of the snake venom detection kit | To **choose the antivenom**, not to diagnose envenomation; bite-site swab, never wash the bite |
| Trivial sting then severe generalised pain 30 min later | Irukandji syndrome — titrated IV opioids, ECG and troponin |
| VF arrest with core temperature 27 °C | **Withhold adrenaline <30 °C**, limit to three shocks until >30 °C, prolonged CPR, ECMO rewarming — not dead until warm and dead |
| Core temperature >40 °C with confusion after a fun run | Exertional heat stroke — **immediate cold-water immersion**; antipyretics do not work |

---

**Sources**

- Chiew AL, et al. *Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand.* MJA 2020;212(4):175–183, with supporting-information full guideline. NSW ACI Emergency Care Institute, *Management of paracetamol overdose* (2026).
- Austin Health clinical toxicology guidelines: *Tricyclic antidepressants* (Oct 2022); *High dose insulin–euglycaemic therapy* v4.2 (2025); *Digoxin: Acute Poisoning* and *Digoxin: Chronic Poisoning* (Oct 2022); *Salicylate* v4.8 (2025).
- *Practice standards for Australian Poisons Information Centres* (2014) — a national PIC-network document, not an Austin Health toxicology guideline.
- Queensland PIC antidote guidance: digoxin immune Fab, octreotide, desferrioxamine (2026). Queensland Health QH-GDL-438 v5.0, *Acute severe behavioural disturbance in emergency departments* (2024). SESLHD, *Fomepizole for toxic alcohol poisoning* v2 (2023).
- ANZCOR 9.4.1 *Australian snake bite* (2021), 9.4.5 *Marine envenomation* (2025), 9.4.8 *Pressure immobilisation technique* (2011, reviewed 2024), 9.3.2 *Drowning*, 9.3.3 *Hypothermia*, 11.10 *Special circumstances* (2026).
- Isbister GK, Brown SGA, et al. *Snakebite in Australia.* MJA 2013;199(11):763–768. Johnston CI, et al. *Australian Snakebite Project 2005–2015 (ASP-20).* MJA 2017;207(3):119–125. Australian Venom Research Unit SVDK guidance; CSL Seqirus antivenom and SVDK product information (current); Safer Care Victoria snakebite pathway.
- Decker BS, et al. *Extracorporeal treatment for lithium poisoning: EXTRIP.* CJASN 2015;10(5):875–887. Buckley NA, et al. *Haemodialysis for lithium poisoning.* BJCP 2020;86:999–1006.
- RCH Melbourne clinical practice guidelines: poisoning (initial management), TCA, paracetamol, oral hypoglycaemic, salicylate (2026).
- Australian Prescriber: *Antivenom update*; *Managing injuries by venomous sea creatures in Australia*; *Naloxone for opioid toxicity in the community*. RACGP, *Marine envenomations* (2015).
- Cochrane reviews of oximes in organophosphorus poisoning and HBO for CO poisoning; Juurlink DN, et al. BJCP 2023.
- Therapeutic Guidelines: Toxicology and Toxinology (current edition); AMH (current edition); TGA product information for acetylcysteine, naloxone, flumazenil, digoxin immune Fab, desferrioxamine, fomepizole, octreotide.

---

# Critical Care Notes — Section 8: Recognition Summary
*Sources: consolidated from sections 1–7. Scope: one-page lookup layer for the written paper.*

All figures **adult** unless marked paediatric. Where a section labels a figure paediatric, that label is carried here.

---

## 8.1 Stem cue → diagnosis

| Stem cue | Think | Why it's not the near-miss |
|---|---|---|
| Ward patient, SpO₂ 90%, HR 145, systolic 88 | Red Zone → Rapid Response (Between the Flags) | Yellow Zone is SpO₂ 91–95%, HR 120–140, systolic 90–100 — every one of these is past yellow into red (§1.1) |
| Ward patient, urine output <100 mL over 4 h | Yellow Zone → Clinical Review, admitting team within 30 min | The Red Zone urine-output row needs <200 mL persisting over **8 h** — BTF escalates this parameter by duration, not by a different rate (§1.1) |
| Failed oxygenation after three optimised intubation attempts, two SGA attempts and optimised BMV | **CICO** — declare it, front-of-neck access (scalpel–bougie–tube, or needle/cannula cricothyroidotomy) | Not "one more look" — CICO is a declaration, and declaring it late causes hypoxic brain injury (§1.3) |
| Adult VF, second shock just delivered, Australian guideline | **Adrenaline 1 mg IV/IO now**, then every second loop | ERC/RCUK 2025 give it after the **third** shock — read whether the stem is Australian or international (§1.5) |
| Adult VF still present after the third shock | **Amiodarone 300 mg IV/IO bolus**; a further 150 mg considered after the fifth defibrillation attempt | Not an adrenaline decision — adrenaline runs on its own every-second-loop clock (§1.5, §1.6) |
| VT **with a pulse** and adverse features | Synchronised cardioversion (ANZCOR 11.9) | Pulseless VT is a shockable arrest rhythm getting an **unsynchronised** 200 J shock — read the stem for a pulse (§1.5) |
| Comatose 24 h after ROSC, temperature 37.9 °C | Actively prevent fever, target **≤37.5 °C for at least 72 h** | Not therapeutic hypothermia to 32–34 °C — TTM2 ended that; the 32–34 °C subgroup question is "uncertain", not recommended (§1.10) |
| Adult hypothermic arrest, core 28 °C | **Withhold adrenaline** (<30 °C); after three failed shocks defer further shocks until core >30 °C; ECMO rewarming | Not the standard drug schedule, and not termination — profound hypothermia is neuroprotective (§1.12, §7.16) |
| Cardiac arrest minutes after an interscalene block | LAST — 20% lipid emulsion 1.5 mL/kg bolus then 15 mL/kg/h | Amiodarone, not lignocaine, for arrhythmia here; avoid vasopressin, CCBs, beta-blockers (§1.12) |
| Arrest at 30 weeks' gestation | Manual **left uterine displacement** + standard ALS; perimortem caesarean on site | Whole-patient tilt degrades compression quality; the caesarean is primarily for **maternal** haemodynamics (§1.12) |
| Arrest with suspected massive PE, fibrinolytic given | Continue CPR **60–90 minutes** before considering termination | Standard futility reasoning does not apply once you have committed to lysis (§1.12) |
| Tearing chest pain, BP differential between arms | Aortic dissection — CT aortography | Not ACS; antiplatelets or lysis here are catastrophic. ADD-RS 2–3 goes straight to imaging (§2.2) |
| ST depression maximal V1–V3, tall R waves, upright T waves | **Posterior ACOMI** — posterior leads, activate reperfusion | Not "anterior ischaemia"; 2025 NHFA/CSANZ puts occlusion patterns beyond classical STE into the emergent-reperfusion arm (§2.2) |
| Inferior STE, then hypotension after GTN | RV infarction — right-sided leads, fluid load, stop the nitrate | Preload dependence is the point; V4R elevation is the confirmatory lead (§2.2, §3.6) |
| Forceful vomiting, then retrosternal pain and surgical emphysema | Oesophageal rupture — CT with oral contrast, surgical referral | Not ACS and not pneumothorax, despite the surgical emphysema (§2.2) |
| Raised JVP, muffled sounds, small complexes with electrical alternans | Tamponade — bedside echo, pericardiocentesis | Tension pneumothorax gives absent breath sounds and tracheal shift instead (§2.2, §3.1) |
| RR 32, SpO₂ 98%, clear chest and clear CXR | Metabolic acidosis or PE | The obs set looks respiratory but the lungs are normal — VBG with lactate, ketones, PE score (§2.3) |
| Tall young man, sudden pleuritic pain, hyper-resonance | Primary pneumothorax — erect CXR; decompress first if unstable | The same picture in COPD is a **secondary** pneumothorax and far more dangerous (§2.3) |
| Collapse, immediate orientation afterwards, clear trigger | Reflex syncope — ECG, postural BP, discharge if low risk | Brief myoclonic jerking during syncope is common and does **not** make it a seizure; recovery is the discriminator (§2.4) |
| Syncope while swimming or on exertion | Cardiac/arrhythmic syncope — admit or observe; ECG, echo, monitoring | This is the ESC 2018 high-risk arm; low-risk features permit discharge from the ED (§2.4) |
| Sudden vertigo, ataxia, diplopia, drowsy, **no limb weakness** | Posterior circulation stroke — BSL then urgent CT/CTA | Isolated syncope is not a stroke presentation; hypoglycaemia mimics stroke perfectly, hence BSL first (§2.4) |
| Headache maximal within seconds, "worst ever" | SAH — non-contrast CT now | CT is ~98% sensitive **within 6 h** and falls steeply; CT negative with onset >6 h → LP for xanthochromia at ≥12 h from ictus (§2.5) |
| New headache over 50 with jaw claudication and raised CRP | GCA — steroid immediately, then biopsy/ultrasound | Do not wait for biopsy; normal inflammatory markers do not exclude it (§2.5) |
| Progressive positional headache on the COCP or post-partum | CVST — CT or MR venography | Plain CT is frequently normal and D-dimer is not sensitive enough to exclude it (§2.5) |
| Red painful eye, haloes, mid-dilated pupil | Acute angle-closure glaucoma — ophthalmology now, lower IOP | The exam hides this inside a headache stem (§2.5) |
| Whole household with headache and nausea | Carbon monoxide — co-oximetry, high-flow oxygen | SpO₂ reads falsely normal; outcome correlates poorly with the COHb number (§2.5, §7.13) |
| First presentation of "renal colic" at 68, hypotensive | Ruptured AAA — theatre if unstable, CT angiography if stable | Renal colic is the commonest misdiagnosis; over 60 with first-episode colic the imaging question is the aorta (§2.6) |
| Severe pain, soft abdomen, AF, lactate 4 | Mesenteric ischaemia — CT angiography, surgical/vascular referral | Pain out of proportion to examination with late peritonism; the soft abdomen is the trap (§2.6) |
| Amenorrhoea, unilateral pain, syncope, shoulder-tip pain | Ruptured ectopic — βhCG, transvaginal ultrasound; theatre if unstable | βhCG goes in every female of reproductive age before anything else (§2.6) |
| Epigastric pain with diaphoresis at 62 | Inferior MI — ECG and troponin **before** anything abdominal | ECG and troponin belong in anyone over about 40 with upper abdominal pain (§2.6) |
| Saddle numbness, poor urinary stream, continence preserved | **Incomplete** cauda equina — urgent MRI plus spinal surgical referral made before investigations are complete | Complete CES with retention and overflow has a much worse prognosis; incomplete is the one to catch (§2.7) |
| Back pain, fever, IVDU, CRP 180 | Spinal epidural abscess — blood cultures before antibiotics, urgent contrast MRI of the **whole** spine | The classical triad is present in a minority; skip lesions are common (§2.7) |
| Known breast cancer, night pain, sensory level | Malignant cord compression — whole-spine MRI, high-dose dexamethasone, urgent oncology | Not mechanical back pain; progressive pain worse lying flat is the tempo cue (§2.7) |
| 84-year-old, "off legs", temp 35.4 °C, RR 24 | Sepsis with hypothermia — lactate, cultures, antimicrobials | Fever is often absent and hypothermia may replace it; a normal WCC excludes nothing (§2.8, §4.4) |
| 79-year-old with diabetes, sudden dyspnoea, no chest pain | Silent MI — ECG within 10 min, troponin | A large minority of MIs in older patients present as dyspnoea, confusion, syncope or falls (§2.8) |
| New confusion with a positive urine dipstick | *Not* automatically a UTI — keep looking (CXR, ECG, meds, bloods) | Asymptomatic bacteriuria is common; a positive dipstick is not a diagnosis in a delirious older person (§2.8) |
| Fall on ramipril + indapamide + ibuprofen | AKI and postural hypotension — the triple whammy | Medications are the most reversible cause in this group (§2.8) |
| Agitated patient, BGL 2.1 mmol/L | Hypoglycaemia — glucose, **do not sedate** | Sedating undiagnosed hypoglycaemia or hypoxia is the classic fatal error; never sedate before a BSL and obs (§2.9) |
| Hb 68 g/L, pneumonia, stable, not bleeding, no ischaemia | Transfuse **one** unit and reassess | Not two units and not "top up to 100" — 70 g/L threshold with single-unit prescribing (§3.11) |
| Septic shock on escalating noradrenaline | Add **vasopressin** at a fixed low dose | Adrenaline is third-line; dopamine is not used at all (§3.5, §4.8) |
| Seizing patient, Na⁺ 108 mmol/L | 3% saline 100–150 mL over 10–20 min, repeated to a 4–6 mmol/L rise, then stop and reassess | You are buying brain, not normalising sodium; chronicity does not delay treatment when symptomatic (§3.8) |
| Sudden polyuria >100 mL/h during hyponatraemia correction | Impending overcorrection — Na⁺ 1–2 hourly, re-lower with 5% glucose ± desmopressin 1–4 microgram IV | This is the ODS warning sign, not a sign of recovery (§3.8) |
| Warfarin, INR 5.2, intracranial haemorrhage | 4-factor PCC (Beriplex) 50 IU/kg (capped at 100 kg) + vitamin K 5–10 mg IV | **FFP is not required** — it only ever supplied the factor VII missing from 3-factor Prothrombinex-VF (§3.14) |
| Urosepsis, 30 mL/kg given, noradrenaline at MAP 68, lactate 3.4 | **Septic shock** by Sepsis-3 | Vasopressor-dependent with lactate 1.6 is *not* septic shock; hypotension correcting with fluid alone is sepsis (§4.3) |
| Fever, hypotension, rapidly spreading purpuric non-blanching rash in a young adult | Meningococcaemia — **immediate parenteral ceftriaxone 2 g IV** before cultures, LP, imaging or transfer | The standard exception to "cultures before antibiotics"; benzylpenicillin IM/IV if no IV access (§4.12) |
| Fever and shock in a returning traveller | Falciparum malaria until excluded — films/RDT immediately and repeated | One negative film does not exclude it; melioidosis is the domestic northern-Australian equivalent in diabetics and heavy drinkers in the wet season (§4.12) |
| Hypoxaemia not improving on FiO₂ 1.0 / 15 L non-rebreather | Right-to-left **shunt** — consolidation, ARDS, collapse, intracardiac | V/Q mismatch partially corrects; shunt is the one mechanism oxygen cannot fix (§5.1) |
| PaCO₂ 70, PaO₂ 60 on room air, A–a gradient 2.5 mmHg | Pure hypoventilation — a pump problem | A widened A–a gradient would make it parenchymal or vascular (§5.1) |
| COPD, pH 7.26, PaCO₂ 68 mmHg, alert and protecting the airway | **Bilevel NIV** plus maximal medical therapy | Not intubation (alert, no NIV trial yet) and not more FiO₂ (worsens hypercapnia) (§5.12) |
| Ventilated asthmatic, sudden hypotension | Auto-PEEP / dynamic hyperinflation — **disconnect and let them exhale** | Then cut rate and Vt and lengthen expiration; exclude pneumothorax on ultrasound (§5.9, §5.11) |
| PaO₂/FiO₂ 120 mmHg on PEEP 5, bilateral opacities, no cardiac cause | Moderate ARDS (Berlin) | Mild is 201–300, severe ≤100; proning is triggered below 150 on FiO₂ ≥0.6 (§5.8) |
| PE with BP 76/40 mmHg and RV strain on echo | High-risk (massive) PE — systemic thrombolysis + IV unfractionated heparin, noradrenaline, fluid ≤500 mL | Wrong answers: DOAC or LMWH alone, large-volume fluid, waiting for CTPA when the echo already shows RV strain (§5.13) |
| Creatinine 80 → 190 µmol/L with urine output 0.3 mL/kg/h for 8 h | **KDIGO stage 2 AKI** | 2.375× baseline is stage 2; the urine-output limb is only stage 1 — stage by whichever axis is worse (§6.1) |
| Anuria in a ventilated patient with an IDC | Bladder scan, flush or replace the catheter | A blocked IDC is a post-renal cause — do not diagnose anuric ATN first (§6.1) |
| Confused and seizing during a first-ever dialysis session with very high urea | Dialysis disequilibrium syndrome | Rising anion gap acidosis on CRRT with a total:ionised calcium ratio ≥2.5 is **citrate accumulation** instead (§6.2) |
| Day 4 of high-dose propofol: HAGMA, CK 40,000, K⁺ 6.5, new bradyarrhythmia | Propofol infusion syndrome — stop propofol, correct K⁺, RRT, pacing, ECMO | No antidote; the win is recognising unexplained acidosis on day 3–4 of propofol (§6.3.1) |
| Day 10 of ventilation, symmetrical flaccid limb weakness, face relatively spared | ICU-acquired weakness — MRC sum score <48/60 in a cooperative patient | Sensation is impaired in critical illness polyneuropathy and preserved in pure myopathy, so it does not discriminate (§6.5) |
| Phosphate <0.65 mmol/L with a fall >0.16 mmol/L within 72 h of starting feed | Refeeding syndrome — restrict to 20 kcal/h, replace electrolytes, give thiamine | Cut the calories, not the electrolyte replacement, and continue feeding at a reduced rate rather than stopping (§6.6) |
| On dapagliflozin, post-op, BGL 9 mmol/L, ketones 4 mmol/L, base excess −12 | **Euglycaemic DKA** — insulin with concurrent glucose from the outset | A normal glucose does not exclude DKA on an SGLT2 inhibitor (§6.9) |
| Agitated, tachycardic, mydriatic, **dry flushed skin, absent bowel sounds, retention** | Anticholinergic toxidrome | Sympathomimetic is diaphoretic with normal/increased bowel sounds; anticholinergic delirium mumbles, picks and has frank visual hallucinations (§7.3) |
| Pinpoint pupils with bronchorrhoea, diarrhoea and fasciculations | Cholinergic — organophosphate; atropine by doubling doses to a dry chest | The opioid patient is dry and constipated with a slow RR (§7.3, §7.13) |
| TCA overdose, QRS 140 ms, hypotension | Sodium bicarbonate 8.4% 1–2 mmol/kg (1–2 mL/kg), repeated until the QRS narrows | Not amiodarone, not flumazenil, not phenytoin — all worsen it; fluid and noradrenaline support BP but bicarbonate is the *specific* answer (§7.7) |
| Bradycardia and hypotension with **hyperglycaemia**, conscious state preserved until late | Calcium-channel blocker overdose | β-blocker overdose gives **hypoglycaemia**; propranolol adds sodium-channel blockade and seizures (§7.12) |
| Digoxin toxicity, K⁺ 6.2 mmol/L, bradyarrhythmia with ectopy or bidirectional VT | Digoxin immune Fab | Fab treats the hyperkalaemia, and **IV calcium is not contraindicated** — the "stone heart" is not evidence-based (§7.11) |
| 70 kg adult, 20 g of immediate-release paracetamol 6 h ago | Take the level **now** and ensure NAC starts within 8 h of ingestion | 286 mg/kg is above threshold, but the 2 h charcoal window has passed and this is not ≥30 g — so no charcoal, and not "await the 4-hour level" (§7.6) |
| Rave attendee with seizures and Na⁺ 120 mmol/L | MDMA — SIADH plus free-water loading | Not a simple stimulant seizure; sodium is the treatable finding (§7.9) |
| Trivial marine sting, then severe generalised back/abdominal/chest pain 30 min later | Irukandji syndrome — titrated IV opioid, ECG and troponin | Box jellyfish causes immediate excruciating pain with ladder marks and collapse within minutes (§7.15) |
| Core temperature >40 °C with confusion after a fun run | Exertional heat stroke — immediate cold-water immersion to ~38–39 °C | Sweating does not exclude heat stroke; antipyretics do not work because the temperature is not prostaglandin-mediated (§7.16) |
| "Snowstorm" vision with a high anion gap acidosis after drinking | Methanol — fomepizole and haemodialysis | Ethylene glycol instead gives AKI with calcium oxalate crystalluria and hypocalcaemia (§7.13) |
| Iron ingestion, symptoms settled at 8 h | Latent/apparent-recovery phase (6–24 h) — do not discharge on symptom resolution | The systemic phase (acidosis, shock, hepatic necrosis) follows, then strictures at 2–8 weeks (§7.13) |

---

## 8.2 Signature findings

**ABG and acid–base patterns**
- **Raised PaCO₂ with a normal A–a gradient** (room air: 150 − PaCO₂/0.8 − PaO₂; upper limit ≈ age/4 + 4 mmHg) → pure hypoventilation, a pump problem, not parenchymal disease (§5.1).
- **PaO₂ 60 on 15 L/min non-rebreather** → shunt; V/Q mismatch would have partially corrected (§5.1).
- **High PaCO₂ with near-normal pH and a high HCO₃⁻** → chronic compensated retention. HCO₃⁻ rises only ≈1 mmol/L per 10 mmHg acutely; renal compensation takes 2–5 days. Acutely pH falls ≈0.08 per 10 mmHg PaCO₂ rise, chronically ≈0.03 (§5.2).
- **Respiratory alkalosis + high anion gap metabolic acidosis + tinnitus** → salicylate poisoning (§3.10, §7.5).
- **High anion gap acidosis with delta ratio 1–2** → uncomplicated HAGMA (lactic ~1.6; DKA nearer 1 because ketoanions are lost in urine). **<0.4** pure hyperchloraemic; **0.4–0.8** mixed high-gap plus normal-gap; **>2** coexisting metabolic alkalosis or chronic respiratory acidosis (§3.10).
- **Normal-gap (hyperchloraemic) acidosis** → GI bicarbonate loss, RTA, carbonic anhydrase inhibitors, large-volume 0.9% saline (§3.10).
- **Metabolic acidosis + respiratory compensation + high lactate** → shock. A normal ABG does not exclude shock (§3.10).
- **Raised osmolar gap early, high anion gap acidosis late** → toxic alcohol (§7.13).
- **Unexplained HAGMA with rising lactate on day 3–4 of propofol** → PRIS (§6.3.1).
- **Normalising or rising PaCO₂ in a previously hypocapnic asthmatic** → exhaustion and impending respiratory arrest, even if the absolute number is only marginally abnormal (§5.11).

**Ventilator pressure and waveform patterns**
- **↑Peak, plateau unchanged (gap widens)** → resistance: bronchospasm, secretions/mucus plug, kinked, bitten or blocked ETT, ETT too small, circuit obstruction or water in tubing, herniated cuff (§5.9).
- **↑Peak *and* ↑plateau (gap unchanged)** → compliance: pneumothorax, lobar collapse, right main-bronchus intubation, pulmonary oedema, ARDS progression, raised intra-abdominal pressure, chest wall oedema or burn eschar, auto-PEEP (§5.9).
- **↓Peak** → loss of circuit pressure: disconnection, cuff leak, extubation, circuit leak (§5.9).
- **Expiratory flow tracing that does not reach zero before the next breath**, or a positive end-expiratory hold → auto-PEEP; consequences are hypotension, ineffective triggering and barotrauma (§5.9).
- **Effort not converted to a breath** → ineffective triggering (auto-PEEP, insensitive trigger). **Breaths without effort** → auto-triggering (circuit water, cardiac oscillations, leaks). **Double triggering** → neural inspiratory time exceeds the set time. **Flow starvation** → demand exceeds set flow (§5.9).
- **Rising airway pressures with falling tidal volumes on volume control, tense abdomen, refractory oliguria** → abdominal compartment syndrome (§3.4).

**ECG signatures**
- **Peaked T waves → flattened/absent P with PR prolongation → broad QRS → sine wave → VF/asystole** = hyperkalaemia. A normal ECG does not exclude dangerous hyperkalaemia, and the rate of rise matters as much as the level (§3.7).
- **Flat T waves, ST depression, U waves, QT/QU prolongation, torsades** = hypokalaemia (§3.7).
- **ST depression maximal V1–V3 with tall R waves and upright T waves** = posterior MI/ACOMI (§2.2).
- **ST elevation in V4R** = RV infarction — preload dependent, nitrates contraindicated (§2.2, §3.6).
- **De Winter T waves, high lateral and RV infarction patterns** = ACOMI, same emergent reperfusion as STEMI; **Wellens' T waves, diffuse ST depression with ST elevation in aVR, hyperacute T waves** = continuous monitoring (§2.2).
- **Electrical alternans with small complexes** = tamponade (§2.2).
- **QRS >120 ms (adult) or >100 ms (paediatric)** = sodium-channel blockade with seizure risk; **>160 ms** = ventricular arrhythmia risk. **R wave in aVR >3 mm *or* R/S ratio in aVR >0.7** (either suffices) with a rightward terminal QRS axis = the most specific TCA finding (§7.7).
- **Bradyarrhythmia with ectopy, and bidirectional VT** = digoxin (§7.11).
- **Refractory bradycardia, asystole, or a Brugada-like pattern** on day 3–4 of propofol = PRIS (§6.3.1).
- **Osborn (J) waves** = moderate hypothermia (~28–32 °C) (§7.16).
- **ESC 2018 high-risk syncope ECG list**: ischaemia, complete or Mobitz II AV block, sinus bradycardia <40 or pauses >3 s, alternating bundle branch block, VT or rapid paroxysmal SVT, bifascicular block, pre-excitation, long or short QT, Brugada pattern, ARVC changes (§2.4).
- **QT prolongation** in overdose: citalopram/escitalopram (dose-dependent), methadone (with torsades), sotalol (§7.8, §7.12, §7.14).

**Toxidrome signatures**
- **Sympathomimetic**: HR↑↑, BP↑↑, temp↑, mydriasis, **diaphoretic**, bowel sounds normal/↑, alert and paranoid (§7.3).
- **Anticholinergic**: HR↑, temp↑, mydriasis poorly reactive, **dry flushed skin**, **absent bowel sounds with urinary retention**, mumbling delirium with picking and visual hallucinations (§7.3).
- **Cholinergic**: bradycardia (or tachycardia), **miosis**, **wet** — sweating, salivation, bronchorrhoea — hyperactive bowel sounds with incontinence, fasciculations and weakness (§7.3).
- **Opioid**: **pinpoint pupils, reduced RR, reduced conscious state**, dry skin, reduced bowel sounds (§7.3).
- **Sedative-hypnotic**: sedation with **relatively preserved vitals and pupils**, slurred speech, ataxia (§7.3).
- **Serotonergic**: hyperthermia, mydriasis, diaphoresis, and the discriminator — **clonus with lower-limb-predominant hyperreflexia** and tremor (§7.3, §7.14).
- **Hyperglycaemia** with bradycardia and hypotension = CCB; **hypoglycaemia** with the same haemodynamics = β-blocker (§7.12).
- **Xanthopsia and halos** with GI upset and confusion = digoxin (§7.11).
- **Vin rosé urine** = desferrioxamine (§7.13).

**The specific rash**
- **Rapidly spreading purpuric, non-blanching rash** with fever and hypotension = invasive meningococcal disease, progressing to purpura fulminans and Waterhouse–Friderichsen syndrome (§4.12).
- **Diffuse macular sunburn-like erythroderma including palms and soles, desquamating at 1–2 weeks** = staphylococcal TSS (§4.12).
- **Ladder-pattern marks** with immediate excruciating pain in tropical waters = box jellyfish (*Chironex fleckeri*) (§7.15).

**The specific pupil**
- **Pinpoint with hypoventilation** = opioid; **pinpoint and wet** = cholinergic (§2.9, §7.3).
- **Dilated with dry flushed skin and retention** = anticholinergic; **dilated with diaphoresis and hypertension** = sympathomimetic; **dilated with clonus, legs > arms** = serotonin toxicity (§2.9).
- **Mid-dilated with a red painful eye and haloes** = acute angle-closure glaucoma (§2.5).
- **Bilaterally absent pupillary and corneal reflexes at ≥72 h from ROSC**, confounders excluded = one arm of multimodal neuroprognostication — never used alone (§1.11).
- **Sixth nerve palsy** as a false localiser in raised ICP (§2.5).

---

## 8.3 Confusable pairs

| Pair | The discriminator |
|---|---|
| Hypovolaemic vs cardiogenic shock | Both cold, low CO, high SVR, low ScvO₂ — **preload/CVP separates them**: ↓ in hypovolaemia, ↑ in cardiogenic (§3.1) |
| Distributive vs the other three shock states | **↓↓SVR with ↑CO and normal/↑ScvO₂**, warm with a wide pulse pressure and low diastolic; the others are cold with a narrow pulse pressure (§3.1) |
| Obstructive vs cardiogenic shock | Obstructive has ↑CVP with ↓CO and ↑SVR **and is fixed by a procedure, not a drug** — tamponade (equalised pressures, pulsus paradoxus), tension pneumothorax (absent breath sounds, tracheal shift, ↑airway pressures), massive PE (right-sided ↑CVP, RV strain) (§3.1) |
| Septic shock as "purely distributive" vs sepsis-induced cardiomyopathy | A subgroup has **low output with low SVR** — that is the dobutamine-on-top-of-noradrenaline patient, not more fluid (§3.1, §3.5) |
| Distributive shock vs neurogenic shock | Neurogenic is distributive **with bradycardia** (cord injury above ~T6, cardiac sympathetic outflow lost, vagal tone intact) — and still needs haemorrhage excluded (§3.1) |
| Type 1 vs type 2 respiratory failure | **The CO₂ is the dividing line**: type 1 = PaO₂ <60 mmHg with normal/low PaCO₂; type 2 = PaCO₂ >45 mmHg. Type 2 is a pump problem, not primarily parenchymal (§5.1) |
| Acute vs chronic hypercapnia | **pH, plus the bicarbonate**: acute retention barely moves HCO₃⁻ (≈+1 mmol/L per 10 mmHg) and pH falls ≈0.08 per 10 mmHg; chronic gives a high HCO₃⁻ with pH falling only ≈0.03 per 10 mmHg. High PaCO₂ + high HCO₃⁻ + acidaemia = acute-on-chronic (§5.2) |
| Peak vs plateau pressure rise | **Peak = resistance + compliance; plateau = compliance alone.** ↑Peak with unchanged plateau is a resistance problem (obstruction between ventilator and alveoli); ↑Peak *and* ↑plateau is a compliance problem (§5.9) |
| Asthma vs COPD as a ventilation problem | Both obstruct expiration, but asthma is the one where **dynamic hyperinflation causes hypotension and PEA arrest shortly after intubation** — ventilate slowly (8–10/min), high inspiratory flow, I:E 1:3–1:5, minimal PEEP, permissive hypercapnia. COPD with acidosis is the **NIV** disease with proven mortality benefit; **never answer "NIV" for a severe asthmatic** (§5.5, §5.11, §5.12) |
| Sepsis vs septic shock | Septic shock adds **vasopressor requirement to maintain MAP ≥65 mmHg *and* lactate >2 mmol/L, both persisting despite adequate fluid resuscitation**. Hypotension correcting with fluid alone is sepsis; vasopressor-dependent with lactate 1.6 is not septic shock; no vasopressor, no septic shock (§4.3) |
| SIRS vs Sepsis-3 | SIRS (temp <36/>38, HR >90, RR >20, WCC <4/>12) is **insensitive** (~1 in 8 infected ICU patients with organ dysfunction miss 2 criteria) and **non-specific** (~4 in 5 non-infected ICU patients meet it). Sepsis-3 is infection + acute rise in **SOFA ≥2**. ACSQHC rejects SIRS as resting on discontinued definitions; SSC still accepts it (§4.1, §4.2) |
| Anticholinergic vs sympathomimetic toxidrome | **Skin first — dry and flushed vs diaphoretic**; then bowel sounds and bladder — absent with retention vs normal/increased. Anticholinergic delirium mumbles, picks and hallucinates visually; the sympathomimetic patient is alert, orientated and paranoid (§7.3) |
| Opioid vs sedative-hypnotic | **Respiratory rate**: benzodiazepine monotoxicity preserves respiratory drive with relatively normal vitals and pupils; RR 6 with pinpoint pupils is opioid until proven otherwise (§7.3) |
| Opioid vs cholinergic (both miotic) | **Secretions**: the cholinergic patient is drenched — bronchorrhoea, salivation, diarrhoea, fasciculations; the opioid patient is dry and constipated (§7.3) |
| Serotonin toxicity vs NMS vs malignant hyperthermia | **Clonus with lower-limb-predominant hyperreflexia** = serotonin toxicity, dose-dependent and rapid onset over hours from a drug interaction. **Lead-pipe rigidity with bradyreflexia** = NMS, idiosyncratic and slow onset over days from dopamine antagonism or antiparkinsonian withdrawal. Malignant hyperthermia appears in sections 1–7 only as a **suxamethonium contraindication** and a **methoxyflurane contraindication** — see **Gaps** (§7.14, §1.4, §2.6) |
| TCA vs other sodium-channel blockade | The **class effect** is shared — wide QRS then ventricular arrhythmia, treated with sodium bicarbonate, in TCAs, propranolol, flecainide, bupivacaine and quinine. What is **TCA-specific** is the accompanying α₁ blockade (hypotension), anticholinergic syndrome and GABA-A antagonism (seizures), plus **R in aVR >3 mm or R/S in aVR >0.7** (§7.2, §7.7) |
| Acute vs chronic lithium toxicity | **Acute in a lithium-naive patient**: GI symptoms dominate with few neurological features despite a high level (not yet distributed into CNS). **Chronic** (dehydration, NSAIDs, ACEI/ARB, thiazides, AKI): neurological features — tremor, ataxia, dysarthria, hyperreflexia, myoclonus, confusion, seizures — at a **much lower level**. The same number means different things (§7.10) |
| DKA vs HHS vs euglycaemic DKA | **DKA**: glucose >11 mmol/L, ketones ≥3.0 mmol/L, pH <7.35 or HCO₃⁻ <18 (WACHS; the 2024 consensus uses pH <7.3). **HHS**: glucose ≥33.3 mmol/L, effective osmolality >300 mOsm/kg, β-hydroxybutyrate <3.0, pH ≥7.3, HCO₃⁻ ≥15, deficit often 8–10 L, higher mortality, correct slowly. **euDKA**: ketones >1.0 with base excess < −5 and **glucose <14** on an SGLT2i — a normal glucose does not exclude it. Mixed pictures are treated as DKA (§6.9) |
| AKI staged by creatinine vs by urine output | Two **independent** axes — **stage by whichever is worse**. Creatinine: 1.5–1.9× / 2.0–2.9× / ≥3.0× or ≥353.6 µmol/L or commencing RRT. Urine output: <0.5 mL/kg/h for 6–12 h / ≥12 h / **<0.3 mL/kg/h for ≥24 h or anuria ≥12 h** — exactly 0.3 does not qualify for stage 3 (§6.1) |
| NIV success vs NIV failure | Judge at **1–2 hours** on pH, PaCO₂, respiratory rate and work of breathing. **pH <7.26 at initiation** marks the high-risk group; no improvement in pH/PaCO₂ by 1–2 h, a rising RR or a falling GCS is the escalation trigger. Document the ceiling of treatment **before** starting (§5.5, §5.12) |
| Shockable vs non-shockable ALS arms | **Shockable (VF/pulseless VT)**: single shock, immediate CPR, adrenaline **after the second shock**, amiodarone 300 mg after the third. **Non-shockable (asystole/PEA)**: adrenaline **as soon as feasible**, no antiarrhythmic, and the algorithm is largely a scaffold for the 4 Hs and 4 Ts. Both run 2-minute loops with adrenaline every second loop thereafter (§1.5) |
| Syncope vs seizure | **The recovery**: immediate orientation = syncope; post-ictal confusion over minutes to an hour = seizure. Brief myoclonic jerking during syncope is common and does not make it a seizure; tongue biting counts only if **lateral**; incontinence occurs in both. A lactate raised after a "faint" clears within an hour if it was a seizure (§2.4) |
| BLS vs ALS termination-of-resuscitation criteria | **BLS TOR — all three**: no ROSC, no shockable rhythm/no shock delivered, arrest not witnessed by emergency services. **ALS TOR — four items**: arrest unwitnessed by bystander or EMS, **no bystander CPR**, no ROSC before transport, no defibrillation before transport. "No bystander CPR" belongs to the ALS rule only — do not import it into the BLS rule (§1.8) |

---

## 8.4 Must-not-miss

Each with the immediate action **as the sections state it**.

**Airway and arrest**
- **CICO** — declare it and perform **infraglottic rescue**: scalpel–bougie–tube or needle/cannula cricothyroidotomy, after all three supraglottic pathways fail. Call for help after one pathway fails substantially; prepare for FONA after two (§1.3).
- **Shockable arrest** — single shock 200 J biphasic, resume compressions immediately without a pulse check; adrenaline 1 mg after the **second** shock, amiodarone 300 mg directly after the **third** (§1.5).
- **Non-shockable arrest** — adrenaline 1 mg as soon as feasible; work the 4 Hs and 4 Ts with a **specific action** for each, not a label (§1.5, §1.7).
- **Hyperkalaemic arrest** — calcium chloride 10% 10 mL IV (or calcium gluconate 10% 30 mL) by rapid bolus **plus** insulin 10 units with 25 g glucose; **dialysis** is definitive (§1.12).
- **LAST** — stop the injection, secure the airway, benzodiazepines for seizures, **20% lipid emulsion 1.5 mL/kg over ~1 min then 15 mL/kg/h** (§1.12).
- **Hypothermic arrest** — withhold adrenaline <30 °C, limit to three shocks until core >30 °C, handle gently, ECMO rewarming (§1.12).
- **Arrest in pregnancy >20 weeks** — manual left uterine displacement and **perimortem caesarean at the site of the arrest** (§1.12).

**Chest, circulation, bleeding**
- **STEMI/ACOMI** — **ECG within 10 minutes of first emergency clinical contact**; ACOMI patterns get the same emergent revascularisation as STEMI (§2.2).
- **Aortic dissection** — CT aortography; **no antiplatelets**. The trap is dissection with inferior ST elevation (§2.2).
- **Tension pneumothorax** — clinical diagnosis, **decompress before imaging** (§2.2, §2.3).
- **Tamponade** — bedside echo, pericardiocentesis (or resuscitative thoracotomy in arrest) (§2.2, §1.7).
- **RV infarction** — right-sided leads, **fluid load, stop the nitrate** (§2.2, §3.6).
- **High-risk (massive) PE** — **systemic thrombolysis** unless contraindicated, with **IV unfractionated heparin**; noradrenaline first-line, fluid ≤500 mL, avoid intubation if possible (§5.13).
- **Ruptured AAA** — **theatre if unstable**, CT angiography if stable. Any back pain with hypotension gets an aorta answer (§2.6, §2.7).
- **Critical bleeding** — activate the MTP early, give pre-composed packs at **at least 2:1:1**, **TXA 1 g over 10 min within 3 hours**, and stop the bleeding — product is a holding measure (§3.12, §3.13).
- **Warfarin with life-threatening or critical-organ bleeding** — **4-factor PCC 50 IU/kg + vitamin K 5–10 mg IV**; FFP not required (§3.14).

**Infection**
- **Sepsis with organ dysfunction** — **antimicrobials within 60 minutes**, cultures immediately but never delaying the drug; two sets in adults (§4.5, §4.6).
- **Meningococcaemia** — **immediate parenteral antibiotic (ceftriaxone 2 g IV) before cultures, LP, imaging or transfer**; benzylpenicillin IM/IV if IV access is not immediately available; urgently notifiable with contact tracing (§4.12).
- **Neutropenic sepsis** — IV antibiotics **within 60 minutes** (30 minutes for a ward patient with signs of sepsis); do not wait for the neutrophil count (§4.12).
- **Necrotising soft tissue infection** — **urgent debridement**; delay to theatre is directly proportional to mortality, and the patient goes with noradrenaline running (§4.9).
- **Uncontrolled source** — vasopressor dependence at 12–24 h on correct antibiotics means **re-image and re-examine**, not broader antibiotics; source control ideally within 6 h (§4.9).
- **Bacterial meningitis** — antibiotics before LP if there is any delay, with **dexamethasone at or just before the first dose** (§2.5).
- **Spinal epidural abscess** — **blood cultures before antibiotics**, urgent contrast MRI of the whole spine, neurosurgical and ID referral (§2.7).

**Neurological and spinal**
- **SAH** — non-contrast CT now; if CT negative and onset >6 h, **LP for xanthochromia at ≥12 h from ictus** (§2.5).
- **Giant cell arteritis with threatened or established vision loss** — **IV methylprednisolone 500–1000 mg/day for 3–5 days**; do not wait for biopsy (§2.5).
- **CVST** — **CT or MR venography**; anticoagulate even with venous haemorrhagic infarction (§2.5).
- **Cauda equina syndrome** — **urgent MRI plus a spinal surgical referral made before investigations are complete** (§2.7).
- **Malignant cord compression** — whole-spine MRI, high-dose dexamethasone, urgent oncology (§2.7).
- **Hypoglycaemia** — BSL first in every altered or agitated patient; **glucose, do not sedate**, then ask why (§2.4, §2.9, §7.2).

**Respiratory**
- **Life-threatening asthma** — senior/ICU and anaesthetic help now, continuous nebulised salbutamol on oxygen, IV magnesium, IV corticosteroid, consider adrenaline, prepare to intubate. **Never NIV** (§5.11).
- **AECOPD with pH <7.35 and PaCO₂ >45 mmHg despite optimal therapy** — **start bilevel NIV**; do not increase FiO₂ (§5.12).
- **Auto-PEEP with hypotension** — **disconnect the circuit and allow full exhalation**, give fluid, exclude pneumothorax (§5.9, §5.11).
- **Post-extubation stridor** — sit up, humidified oxygen, **nebulised adrenaline**, IV corticosteroid, operator ready to reintubate over a bougie. Do **not** use NIV for established post-extubation failure (§5.10).

**Metabolic, renal, ICU**
- **Hyperkalaemia with ECG changes** — **calcium gluconate 10% 10 mL IV first** (it does not lower K⁺), then shift, then remove (§3.7).
- **Symptomatic severe hyponatraemia (seizures, coma)** — **3% saline 100–150 mL over 10–20 min**, repeated to a 4–6 mmol/L rise, whatever the chronicity (§3.8).
- **DKA/HHS** — fluid first, then fixed-rate insulin; **potassium rules decide everything**; add glucose below 14 mmol/L and **do not stop the insulin** (§6.9).
- **Euglycaemic DKA on an SGLT2i** — insulin **with concurrent glucose from the outset**; a normal glucose does not exclude it (§6.9).
- **Propofol infusion syndrome** — **stop propofol immediately** and substitute; correct hyperkalaemia and acidosis, RRT, pacing, ECMO (§6.3.1).
- **Refeeding syndrome** — restrict calories to **20 kcal/h**, replace electrolytes aggressively, thiamine before or with the first carbohydrate load, continue feeding at a reduced rate rather than stopping (§6.6).
- **Refractory hyperkalaemia or life-threatening acid–base/fluid derangement** — emergent RRT (§6.2).

**Toxicology and environment**
- **Paracetamol** — start NAC **within 8 h of ingestion**; if the level will not be back and acted on by then, start empirically and stop later if below the line (§7.6).
- **TCA with QRS >120 ms (adult)** — **sodium bicarbonate 8.4% 1–2 mmol/kg IV**, repeated until the QRS narrows; bicarbonate bolus on induction if intubating (§7.7).
- **Opioid overdose** — **naloxone titrated to respiration**, not to consciousness; observe at least 2 h after the last dose (§7.8).
- **CCB/β-blocker cardiogenic shock** — fluids → atropine → IV calcium → catecholamines → **HIET**, started early rather than as a last resort (§7.12).
- **Digoxin toxicity with haemodynamic compromise** — **digoxin immune Fab**; treat hyperkalaemia conventionally, **including calcium if indicated** (§7.11).
- **Sulfonylurea hypoglycaemia** — glucose plus **octreotide**; admit and observe, because hypoglycaemia is prolonged and recurrent and may be delayed up to 18 h (§2.8, §7.12).
- **Snake, funnel-web, blue-ringed octopus or cone shell envenomation** — **pressure immobilisation technique**, then transfer; **do not remove the bandage until antivenom can be given**; **one vial** of antivenom, adult or child (§7.15).
- **Box jellyfish sting with collapse** — **CPR if unresponsive** (the intervention that saves lives), vinegar ~30 s, antivenom where available (§7.15).
- **Heat stroke (core typically >40 °C with CNS dysfunction)** — **immediate active cooling**, cold-water immersion most effective, target ~38–39 °C; antipyretics do not work (§7.16).
- **Severe salicylate poisoning** — beware intubation: pre-alkalinise and match the pre-intubation minute ventilation, because an apnoeic period drops the pH and drives salicylate into the CNS (§7.5).

---

## 8.5 Every number in one place

**Adult unless the line says paediatric.** A paediatric threshold applied silently to an adult is a recurring error, so the label is explicit wherever the sections give one.

### Resuscitation and arrest

| Figure | Detail | § |
|---|---|---|
| BTF adult calling criteria — RR | Yellow 6–10 or 25–30; Red ≤5 or ≥30 (**adult chart**) | §1.1 |
| BTF — SpO₂ | Yellow 91–95%; Red ≤90% | §1.1 |
| BTF — systolic BP | Yellow 90–100 or 180–200; Red ≤90 or ≥200 | §1.1 |
| BTF — HR | Yellow 40–50 or 120–140; Red ≤40 or ≥140 | §1.1 |
| BTF — temperature | Yellow ≤35.5 or ≥38.5 °C (temperature is a yellow criterion) | §1.1 |
| BTF — urine output | Yellow: low output persistent **4 h** — <100 mL/4 h or <0.5 mL/kg/h via IDC. Red: persistent **8 h** — <200 mL/8 h or <0.5 mL/kg/h | §1.1 |
| BTF — BGL | Yellow ≤4 or ≥20 mmol/L; Red same **with** reduced LOC | §1.1 |
| BTF response times | Clinical Review by the admitting team **within 30 min**; Rapid Response essentially immediately | §1.1 |
| NEWS2 (international, adult) | 6 parameters scored 0–3 + **2 for any supplemental oxygen**; aggregate max 20. 1–4 low; **3 in any single parameter**; 5–6 medium/key; ≥7 high. Scale 2 target **88–92%** in confirmed hypercapnic respiratory failure. **NEWS2 ≥5** is the sepsis-relevant trigger | §1.1, §4.2 |
| Australasian Triage Scale (**all ages**) | Cat 1 immediate; **cat 2 within 10 min**; cat 3 30 min; cat 4 60 min; cat 5 120 min | §2.1 |
| CICO attempt limits | Up to **three** optimised intubation attempts; up to **two** SGA attempts (different size/type); FONA prepared after two pathways fail | §1.3 |
| Pre-oxygenation | 3 min tidal breathing on a sealed circuit, or HFNO; head-up 20–30° or ramped | §1.4 |
| RSI drugs (adult) | Ketamine 1.5–2 mg/kg IV (**0.5–1 mg/kg if hypovolaemic**); fentanyl 50–100 mcg loading; midazolam 2 mg boluses; rocuronium **1.2 mg/kg** (retrieval up to 2 mg/kg), onset ~45–60 s, duration ~45–60 min; suxamethonium **1.5 mg/kg**, avoid in burns >24–48 h | §1.4 |
| Tube confirmation | Waveform capnography, sustained trace over **≥6 breaths** | §1.4 |
| CPR quality (adult) | 30:2; depth **≥5 cm**; rate **100–120/min**; interruptions **≤10 s**; **6–10 ventilations/min** once an advanced airway is in, without pausing compressions; rotate compressor every 2 min; **2-minute** loops | §1.5, §1.8 |
| Defibrillation energy (adult) | ANZCOR **200 J biphasic for all shocks**, escalate to maximum if the first fails; monophasic **360 J**. ERC/RCUK 2025 (international) **≥150 J** first biphasic (130–150 J pulsed biphasic). Pads **≥8 cm** from a pacemaker/ICD generator | §1.5 |
| Adrenaline in arrest (adult) | **1 mg IV/IO**. Shockable: **after the second shock** (ANZCOR) then every second loop (~every 4 min). Non-shockable: as soon as feasible, then every second loop. ERC/RCUK: after the **third** shock | §1.5, §1.6 |
| Amiodarone (adult) | **300 mg** after the third shock; **150 mg** considered after the fifth. Alternative lignocaine **1 mg/kg then 0.5 mg/kg** (ERC/RCUK use fixed 100 mg then 50 mg) | §1.6 |
| Calcium in arrest (adult) | Calcium chloride 10% **10 mL** IV ≈ calcium gluconate 10% **30 mL** | §1.6 |
| Sodium bicarbonate in arrest (adult) | **1 mmol/kg IV over 2–3 min**, then guided by ABG; not routine. Indications: hyperkalaemia, TCA overdose, severe metabolic acidosis, prolonged arrest >15 min | §1.6 |
| Vascular access in arrest | IV preferred; IO reasonable if IV cannot be achieved **within two attempts** | §1.6 |
| In-hospital grounds to stop | Asystole persisting despite **≥20 min** of high-quality ALS with reversible causes excluded or treated | §1.8 |
| Post-ROSC targets (adult) | SpO₂ **94–98%** (88–92% if known hypercapnic respiratory failure); PaCO₂ **35–45 mmHg**; MAP **≥60–65 mmHg** or SBP **>100 mmHg**; treat glucose **>10 mmol/L** with insulin | §1.9 |
| Post-ROSC angiography | Early angiography with ST elevation; without it, early **2–6 h** or delayed **within 24 h** both reasonable (ANZCOR) | §1.9 |
| Temperature after ROSC (adult) | Prevent fever, **≤37.5 °C for at least 72 h** (ERC/RCUK 36–72 h). 32–34 °C "uncertain". Ice-cold IV fluid up to **30 mL/kg** or ice packs give ~**1.5 °C** initial drop **in hospital**; recommended against routinely **pre-hospital** | §1.10 |
| Neuroprognostication timing (adult) | Pupillary/pupillometry and corneal **≥72 h** from ROSC; SSEP and EEG **≥72 h**; NSE **within 72 h**; CT **within 48 h**; MRI **2–6 days**; GCS motor over the **first 4 days**; myoclonus **within 7 days** | §1.11 |
| ERC/ESICM prognostication algorithm (international, adult) | Motor **M ≤3 at ≥72 h**, confounders excluded, plus **≥2** of: absent pupillary and corneal reflexes ≥72 h; bilaterally absent N20 SSEP ≥24 h; highly malignant EEG >24 h; **NSE >60 mcg/L** at 48 and/or 72 h; status myoclonus ≤72 h; diffuse anoxic injury on CT/MRI. Fewer than two = indeterminate. ANZCOR publishes **no** numerical NSE cut-off | §1.11 |
| Hypothermic arrest (adult) | Withhold adrenaline **<30 °C**; at **30–34 °C** lengthen the adrenaline interval to **6–10 min**; if VF persists after **three shocks**, defer further attempts until core **>30 °C** | §1.12, §7.16 |
| Hypothermia grading | Mild ~**32–35 °C**; moderate ~**28–32 °C** (shivering ceases, Osborn J waves); severe **<28 °C** | §7.16 |
| Drowning | **5 initial ventilations** then 30:2; post-resuscitation SpO₂ **94–98%** with PEEP **5–10 cmH₂O**, escalating to **15–20 cmH₂O** if severely hypoxaemic | §1.12 |
| Pregnancy | Aortocaval compression from ~**20 weeks** or fundus above the umbilicus → manual left uterine displacement; perimortem caesarean for arrest in the **second half** of pregnancy — ANZCOR gives **no** specific time interval | §1.12 |
| PE arrest | Fibrinolysis commits to **60–90 minutes** of CPR before terminating | §1.12 |
| LAST (adult) | 20% lipid emulsion **1.5 mL/kg bolus over ~1 min**, then **15 mL/kg/h**, doubled to **30 mL/kg/h** after 5 min if circulation not restored; repeat the bolus up to **twice more at 5-minute intervals** (three boluses total); **maximum cumulative 12 mL/kg** | §1.12, §7.2 |
| Asthma in arrest / ventilated asthma | **8–10 breaths/min** with low tidal volumes; disconnect and compress the chest wall on sudden deterioration | §1.12, §5.11 |
| Heat stroke | Core typically **>40 °C** plus CNS dysfunction; cool rapidly to ~**38–39 °C** | §7.16 |
| Toxic hyperthermia threshold for paralysis | **>39–40 °C** and not falling → sedate and paralyse | §7.2, §7.14 |

### Haemodynamic and shock targets

| Figure | Detail | § |
|---|---|---|
| Narrow vs wide pulse pressure | Narrow **<~25% of systolic** = low stroke volume with vasoconstriction; wide with low diastolic (e.g. 100/40) = vasodilatation | §3.1 |
| Flow markers | CRT **>3 s**, knee mottling, urine output **<0.5 mL/kg/h** | §3.1 |
| Fluid responsiveness | **≥10–15% rise in stroke volume** after a preload challenge; only ~half of unstable patients are responsive | §3.2 |
| Passive leg raise | From 45° semi-recumbent; autotransfuses **~300 mL**; measure SV/CO within **60–90 s**; **≥10% rise** predicts responsiveness. Measure SV, **not BP** | §3.2 |
| SVV/PPV | Threshold **~12–13%**; invalid with spontaneous effort, arrhythmia, **tidal volume <8 mL/kg PBW**, low compliance, open chest, high RR:HR ratio, RV failure | §3.2 |
| Fluid challenge | **250–500 mL over 5–15 min** with a pre-defined endpoint | §3.2 |
| Intra-abdominal pressure | IAH = sustained IAP **≥12 mmHg**; ACS = sustained **>20 mmHg with new organ dysfunction** | §3.4 |
| Fluid creep | **1–1.5 L/day** in a ventilated adult | §3.4 |
| MAP target | Default **≥65 mmHg**. SSC 2026 **algorithm** (international) also gives **60–65 mmHg at age ≥65** — algorithm figures, not graded recommendations; Australian pathways have **not** adopted a separate geriatric target and continue to use ≥65 | §3.5, §4.8 |
| SEPSISPAM (international) | 80–85 vs 65–70 mmHg: 28-day mortality 36.6% vs 34.0%; more new AF at the higher target (6.7% vs 2.8%); chronic-hypertension subgroup less RRT (31.7% vs 42.2%) | §3.5 |
| 65 trial (international) | 90-day mortality 41.0% permissive hypotension vs 43.8% usual care — not significant (difference −2.85%, 95% CI −6.75 to 1.05) | §3.5 |
| Noradrenaline (adult) | Typical **4 mg or 6 mg in 100 mL**; commence **~0.02–0.05 microgram/kg/min**, titrate in **0.02 microgram/kg/min** increments; usual range **0.05–1 microgram/kg/min** | §3.5 |
| Peripheral noradrenaline (adult) | Large proximal cannula (antecubital or above); review the site **every 15 minutes**; source a central line if ongoing noradrenaline is required **beyond 2 hours** (SESLHD). Extravasation → **phentolamine** | §3.5 |
| Vasopressin | **Fixed low dose — 0.03 units/min** in the trial literature; not titrated | §3.5 |
| Septic shock definition | Vasopressor required for **MAP ≥65 mmHg** + lactate **>2 mmol/L**, both **despite adequate fluid resuscitation** | §4.3 |
| Lactate | **≥4 mmol/L** = high risk regardless of BP (ARISE cryptic-shock entry threshold); lactate clearance over hours beats any single value | §3.1, §4.4 |
| Initial crystalloid in sepsis | **At least 30 mL/kg within the first 3 hours** (SSC 2026, **conditional**, low certainty). **250–500 mL boluses with reassessment** in heart failure, dialysis-dependent ESKD, severe pulmonary hypertension, cirrhosis and the frail elderly | §4.7 |
| Sepsis resuscitation endpoints | MAP ≥65, improving capillary refill, urine output **≥0.5 mL/kg/h**, falling lactate. CVP obsolete as a target | §4.7 |
| High-risk PE (THANZ, Australia/NZ) | Sustained hypotension — systolic **<90 mmHg for 15 min** or requiring inotropic support — or pulselessness, or sustained **HR <40/min** with signs of shock. ESC (international): systolic <90 or a fall **≥40 mmHg for >15 min** | §5.13 |
| Massive PE support | Fluid **≤500 mL** (cautious 250–500 mL bolus at most); noradrenaline first-line; alteplase commonly **100 mg IV over 2 hours**, peri-arrest bolus commonly **50 mg** with CPR continued 60–90 min | §5.13 |

### Electrolytes and correction limits

| Figure | Detail | § |
|---|---|---|
| Hyperkalaemia severity bands (adult) | WACHS 2024: mild **5.2–5.9**, moderate 6.0–6.5, severe **>6.5**. SESLHD/RHW 2025: mild **5.5–5.9**, moderate 6.0–6.4, severe **≥6.5** | §3.7 |
| Hyperkalaemia treatment trigger | SESLHD/RHW: K⁺ **≥6.0** or ECG changes → active treatment. WACHS: treat immediately if ECG changes, symptoms, **or K⁺ >6.5**; at 6.0–6.5 "consider". Safe rule: **any ECG change, or K⁺ ≥6.0, treats** | §3.7 |
| Calcium (stabilise) | Calcium gluconate 10% **10 mL IV = 2.2 mmol** over ~5 min (WACHS) or 2–3 min (RHW); repeat at 5 min if ECG changes persist. Onset **1–5 min**, duration **30–60 min**. Calcium chloride 10% 10 mL = **6.8 mmol** (~3×) | §3.7, §3.9 |
| Insulin–glucose (shift) | Actrapid **10 units IV with 50 mL glucose 50%**; over 15 min (WACHS) or 30 min peripherally / 5 min centrally (RHW). Onset ~30 min, duration **4–6 h**, K⁺ falls **0.5–1.5 mmol/L**. BGL before, at 15–30 min, then **hourly for 6 h** | §3.7 |
| Salbutamol (shift) | **10 mg nebulised over ~10 min**; onset ~30 min, peak ~90 min, duration 2–6 h; falls 0.5–1.5 mmol/L; ineffective if β-blocked | §3.7 |
| Bicarbonate (shift, conditional) | Sodium bicarbonate 8.4% **50 mL IV over 5–10 min**, only with significant acidosis; never in the same line as calcium | §3.7 |
| Sodium polystyrene sulfonate | **15–30 g PO in 45–60 mL water, 3–4×/day** (WACHS) vs 15 g PO 3–4×/day or 30–50 g PR daily (RHW). Falls 0.5–1 mmol/L over 1–6 h; cease when K⁺ **<5.0–5.2** | §3.7 |
| Frusemide | **20–40 mg IV over 5–10 min**; needs urine output; never alone | §3.7 |
| Hypokalaemia bands (adult, Queensland Health 2023) | Mild **3.1–3.5**, moderate **2.5–3.0**, severe **<2.5 mmol/L** | §3.7 |
| Potassium replacement (adult) | Moderate–severe: **60–80 mmol IV over 24 h** plus daily requirements. **Max peripheral concentration 40 mmol/L** (higher needs a CVC); **max rate 10 mmol/h by burette, up to 20 mmol/h via volumetric infusion pump** — the pump, not central access, is the requirement. Continuous cardiac monitoring for any K⁺ **<3.0**; recheck at **4 h**; replace magnesium concurrently | §3.7 |
| Hyponatraemia bands (adult) | Endocrinology Today 2025: mild **130–134**, moderate **125–129**, profound **<125**. Queensland Health 2023: mild **131–135**, moderate **120–130**, severe **<120 mmol/L**. "Severe" refers to *symptoms*, not a number | §3.8 |
| Acute hypertonic saline (adult) | **3% saline 100–150 mL IV over 10–20 min**, repeated to a **4–6 mmol/L rise**, then stop and reassess. 3% NaCl = **513 mmol/L Na⁺**; 100 mL delivers **51.3 mmol**. SESLHD caps at **three 150 mL infusions, ICU only** | §3.8 |
| Sodium correction ceilings | **≤10 mmol/L in 24 h, ≤18 mmol/L in 48 h**; **<8 mmol/L in 24 h if high risk** (Na <105, hypokalaemia, chronic alcohol use, liver disease, malnutrition). SESLHD: **8–10 mmol/L in the first 24 h**, and **4–6 mmol/L daily** if high risk; Queensland Health: **8 mmol/L in 24 h** for everyone | §3.8 |
| Overcorrection | 5% glucose ± **desmopressin 1–4 microgram IV**; check Na⁺ **1–2 hourly** during active correction and whenever urine output **>100 mL/h**. ODS presents **2–6 days** after correction | §3.8 |
| Hypernatraemia | Chronic: ceiling ~**10 mmol/L per 24 h**; acute (<48 h) may be corrected faster | §3.8 |
| Calcium replacement (adult, severe/symptomatic) | Calcium gluconate **two ampoules (4.4 mmol) in 100 mL 0.9% saline over 20 min**, then if needed **22 mmol in 900 mL at 50 mL/h**. Measure **ionised** calcium | §3.9 |
| Magnesium bands and replacement (adult) | Mild **0.71–0.9**, moderate **0.4–0.7**, severe **<0.4 mmol/L**. Severe/symptomatic: **10–20 mmol in 100 mL 0.9% saline over 1 hour**, faster in torsades/eclampsia; review at 6–12 h | §3.9 |
| Phosphate bands and replacement (adult) | Mild **0.51–0.8**, moderate **0.3–0.5**, severe **<0.3 mmol/L**. One ampoule (**10 mmol**) in 250 mL 0.9% saline over **2–6 h**; in critical care 10 mmol in 100 mL preferably centrally, up to **10 mmol/h, maximum 40 mmol over 4 h**. Monitor 12–24 hourly, **1–2 hourly if critically ill**. *Paediatric replacement is weight-based — use the state paediatric guideline* | §3.9 |
| Anion gap | AG = Na⁺ − (Cl⁻ + HCO₃⁻). Older texts **8–16 mmol/L** (12–20 including K⁺); modern ion-selective electrode methods often **~4–13** — use the range on the report. Correct for albumin: gap falls **~2.5 mmol/L per 10 g/L** fall in albumin | §3.10 |
| Delta ratio | (measured AG − normal AG) ÷ (normal HCO₃⁻ − measured HCO₃⁻). **<0.4** hyperchloraemic; **0.4–0.8** mixed; **1–2** uncomplicated HAGMA (lactic ~1.6, DKA nearer 1); **>2** coexisting metabolic alkalosis or chronic respiratory acidosis | §3.10 |

### Transfusion and reversal

| Figure | Detail | § |
|---|---|---|
| Restrictive transfusion (NBA PBM Module 4) | **<70 g/L** transfusion likely appropriate; **70–90 g/L** not associated with reduced mortality; **>90 g/L** generally unnecessary. **One unit at a time with reassessment**; one adult unit raises Hb ~**10 g/L** in a 70–80 kg adult | §3.11 |
| Where restrictive does not apply | Active critical bleeding; **ACS** — MINT compared restrictive (70 g/L, transfusion permitted <80) with liberal (≥100 g/L): death or recurrent MI at 30 days 16.9% vs 14.5%; Australian practice commonly uses **~80 g/L** in ACS. Neurocritical care: no threshold evidence | §3.11 |
| Platelets (NBA Module 4) | Without acute bleeding, transfusion may be appropriate at **<20 × 10⁹/L**; **≥50 × 10⁹/L** generally permits invasive procedures. FFP not advised for a mildly deranged INR; **INR ≤2** may not require FFP pre-procedure | §3.11 |
| Massive transfusion ratio | **At least 2:1:1** = **8 RBC : 4 FFP : 1 adult therapeutic dose of platelets**, as pre-composed packs | §3.12 |
| MTP targets (SLHD adult MTP 2021) | Core temperature **>35.5 °C**; pH **>7.2**; ionised calcium **>1.1 mmol/L**; platelets **>50 × 10⁹/L** (**>100** with head injury); INR **≤1.5**; PT **<16 s**; aPTT **<42 s**; fibrinogen **>1.0 g/L** (>2.0 obstetric) | §3.12 |
| National critical derangement (NBA/THANZ, MJA 2024) | Ionised calcium **<1.0 mmol/L**; temperature **<35 °C**; pH **<7.2**; INR **>1.5**; **fibrinogen <2.0 g/L**, replaced with **3–4 g** of fibrinogen | §3.12 |
| Cryoprecipitate (Lifeblood, March 2026) | An adult dose supplying 3–4 g fibrinogen = **9 units whole-blood cryoprecipitate**, **9 units split apheresis** (equivalent and interchangeable), **or 3 units large-dose apheresis** while stock lasts. Content per unit: whole blood **319 ± 99 mg**, split apheresis **348 ± 165 mg**, large-dose apheresis **1173 ± 334 mg** | §3.12 |
| Tranexamic acid (adult) | **1 g IV over 10 min, then 1 g over 8 h**, **within 3 hours** of injury or of onset of postpartum haemorrhage (second 1 g if PPH persists after 30 min). Beyond 3 h may be harmful in trauma | §3.13 |
| Warfarin — life-threatening or critical-organ bleeding, INR ≥1.5 | 4-factor PCC **50 IU/kg IV** (capped at **100 kg**, i.e. max **5,000 IU**) **+ vitamin K 5–10 mg IV**. **FFP is not required** | §3.14 |
| Warfarin — clinically significant, non-life-threatening bleeding, INR ≥2.0 | 4-factor PCC **25–50 IU/kg IV** + vitamin K 5–10 mg IV | §3.14 |
| Warfarin — minor bleeding (any INR) | Omit warfarin, repeat INR; vitamin K **1–2 mg orally or 0.5–1 mg IV only if** bleeding risk is high or **INR >4.5** | §3.14 |
| Warfarin — no bleeding | Withhold warfarin, vitamin K typically **1–5 mg**; urgent procedural reversal **15–50 IU/kg** from an INR-against-target table; outside the perioperative setting 4FPCC considered only if **INR >10** with high bleeding risk. Recheck INR after PCC and at **12–24 h** | §3.14 |
| Dabigatran | **Idarucizumab 5 g IV** as two **2.5 g/50 mL** infusions **no more than 15 minutes apart**; effect may re-emerge up to **24 h** later. Dabigatran is dialysable (**~60% over 2–3 h**) | §3.14 |
| Factor Xa inhibitors | **PCC-based** in Australia. Andexanet alfa removed from the ARTG **20 May 2026** (ICH data: thrombotic event within 30 days **10.3% vs 5.6%**) | §3.14 |
| Heparins | UFH → protamine by heparin given in the preceding hours; LMWH → protamine gives only **~60% anti-Xa** reversal. Platelet transfusion **not** recommended in spontaneous ICH on antiplatelets | §3.14 |

### Oxygen and ventilator settings

| Figure | Detail | § |
|---|---|---|
| Respiratory failure definitions (adult) | Type 1: PaO₂ **<60 mmHg** with normal/low PaCO₂. Type 2: PaCO₂ **>45 mmHg** | §5.1 |
| A–a gradient (adult) | Room air ≈ **150 − PaCO₂/0.8 − PaO₂**. Normal **5–10 mmHg** in a young non-smoker; age-adjusted upper limit ≈ **age/4 + 4 mmHg** (≈14 at 40 y) | §5.1 |
| Acute vs chronic CO₂ rules of thumb (adult) | pH falls ≈**0.08** per 10 mmHg rise in PaCO₂ acutely, ≈**0.03** chronically; HCO₃⁻ rises ≈**1 mmol/L** per 10 mmHg acutely; renal compensation takes **2–5 days** | §5.2 |
| TSANZ oxygen targets (Australia/NZ, **adult**) | **88–92%** if at risk of hypercapnic respiratory failure; **92–96%** for other acute medical conditions. Also ≈**85%** after bleomycin exposure or in paraquat poisoning | §5.3 |
| BTS (UK, 2017, adult) | **88–92%** at-risk group (agrees), **94–98%** for everyone else — the Australia-vs-UK difference is in the *general acute medical* target only | §5.3 |
| Post-ROSC oxygen (Australian) | **94–98%** (ANZCOR 11.6.1, Feb 2026; 88–92% if known hypercapnic respiratory failure) — a context-specific target, not a contradiction of TSANZ | §1.9, §5.3 |
| **Paediatric** oxygen target | ACI NSW set **no less than 93%** in children with neuromuscular weakness — never carry adult bands into a paediatric answer | §5.3 |
| Device FiO₂ (adult, TSANZ) | Nasal cannulae 1–4 L/min → 0.24–0.35 (first choice at **1–2 L/min** for an 88–92% target); simple mask 5–10 L/min → 0.35–0.60 (**must run ≥5 L/min**); Venturi device-specific 0.24–0.60 (the only common **fixed**-FiO₂ device); non-rebreather 15 L/min → >0.60; HFNO 30–60+ L/min → 0.21–0.80+; BVM + reservoir 15 L/min → ~1.0 | §5.3 |
| HFNO | **30–60+ L/min**; a few cmH₂O of flow-dependent positive pressure, lost when the mouth opens. FLORALI entry PaO₂/FiO₂ **≤300 on ≥10 L/min**; benefit in the **≤200** subgroup | §5.4 |
| NIV trigger (adult) | **pH <7.35 with PaCO₂ >45 mmHg** despite optimal therapy (COPD-X; ERS/ATS use pH ≤7.35 with PaCO₂ >45) | §5.5, §5.12 |
| NIV failure markers (adult) | **pH <7.26 at initiation** (ACI NSW high-risk group); no improvement in pH/PaCO₂ by **1–2 hours**; rising RR; falling GCS | §5.5, §5.12 |
| NIV monitoring | Observations **every 30 min for 1–2 hours** then hourly; ABG at baseline and at **1 hour** | §5.5 |
| NIV settings — AECOPD / restrictive chest wall (**adult**, ACI NSW 2023) | Start **IPAP 14, EPAP 4 cmH₂O**; ↑IPAP **2 cmH₂O** every few minutes, **20–25 often needed**; target **Vt 8–10 mL/kg IBW**, SpO₂ 88–92% | §5.5 |
| NIV settings — obesity hypoventilation (adult) | **IPAP 20, EPAP 8–10 cmH₂O**; ↑2 cmH₂O; rise time 0.3 s; Vt 8–10 mL/kg IBW | §5.5 |
| NIV settings — neuromuscular disease (adult) | **IPAP 8, EPAP 4 cmH₂O**; ↑1 cmH₂O; **12–16** usually sufficient; Vt 6–8 mL/kg IBW | §5.5 |
| NIV settings — cardiogenic pulmonary oedema (adult) | **CPAP/EPAP 8–12 cmH₂O**; target SpO₂ 92–96% | §5.5 |
| **Paediatric** NIV ceiling | EPAP should generally not exceed **7–8 cmH₂O in infants** or **10–12 cmH₂O in older children** | §5.5 |
| Lung-protective ventilation (adult) | **Vt 6 mL/kg predicted body weight** (range 4–8), never actual weight. **Male PBW = 50 + 0.91 × (height cm − 152.4); female PBW = 45.5 + 0.91 × (height cm − 152.4)**. 70 kg PBW → **420 mL** (range 280–560 mL) | §5.7 |
| Pressure ceilings (adult) | Plateau **≤30 cmH₂O** (measured on a ~0.5 s inspiratory hold in a passive patient on volume control); driving pressure (Pplat − PEEP) ideally **≤15 cmH₂O**, inflection at **13–15** — from mediation and secondary analyses, **not** an RCT | §5.7 |
| ARDSnet targets (adult) | PaO₂ **55–80 mmHg** or SpO₂ **88–95%**; pH **7.30–7.45**; rate up to **35/min**; if pH **<7.15**, increase Vt and/or give bicarbonate. PEEP/FiO₂ tables run from **PEEP 5 at FiO₂ 0.3 to 18–24 at FiO₂ 1.0**. ARMA: 6 vs 12 mL/kg PBW cut mortality **39.8% → 31.0%** | §5.7 |
| ARDS — Berlin 2012 (intubated, PEEP ≥5 cmH₂O) | Onset within **1 week**; bilateral opacities; not explained by cardiac failure/overload; **PaO₂/FiO₂ ≤300 mmHg**. Mild **201–300**, moderate **101–200**, severe **≤100** | §5.8 |
| ARDS — 2023–24 global definition (international) | SpO₂/FiO₂ **235–315 / 148–235 / ≤148**, valid only when **SpO₂ ≤97%**; non-intubated ARDS on HFNO **≥30 L/min** or CPAP/NIV with PEEP ≥5 | §5.8 |
| Proning (PROSEVA) | PaO₂/FiO₂ **<150** on FiO₂ **≥0.6** and PEEP ≥5; prone **≥16 consecutive hours** per session, started early. 28-day mortality **16.0% vs 32.8%**, 90-day **23.6% vs 41.0%** | §5.8 |
| ECMO referral (EOLIA entry, international) | PaO₂/FiO₂ **<50 mmHg for >3 h**, or **<80 mmHg for >6 h**, or **pH <7.25 with PaCO₂ ≥60 mmHg for >6 h** despite optimised ventilation | §5.8 |
| I:E ratio | Default ≈**1:2**; **1:3–1:5 in obstruction** | §5.6 |
| Ventilated asthma (adult) | Vt **6–8 mL/kg PBW**, rate **8–10/min**, inspiratory flow **60–100 L/min**, I:E **1:3–1:5**, minimal or zero applied PEEP, plateau **<30 cmH₂O**, permissive hypercapnia with **pH >7.2** as a floor | §5.11 |
| Weaning screen (adult) | FiO₂ **≤0.4**, PEEP **≤5–8**, stable without escalating vasopressors, awake and able to cough | §5.10 |
| Spontaneous breathing trial | **30 min to 2 h** on pressure support **5–8 cmH₂O** with PEEP ≤5, or T-piece. **RSBI = RR ÷ Vt in litres; <105** predicts success. SBT failure: RR **>35**, SpO₂ below target, tachycardia/arrhythmia, hypertension or hypotension, agitation, diaphoresis, paradoxical abdominal movement | §5.10 |
| Cuff-leak test | Leak **<110 mL** or **<10–15% of delivered Vt**; failed test → corticosteroid **≥4 h before extubation**, not automatic cancellation | §5.10 |
| Tracheostomy timing | No mortality benefit for early over late; usually reconsidered around **day 7–10** | §5.10 |
| VAP prevention bundle | Semi-recumbent **30–45°**; cuff pressure **~20–30 cmH₂O**; subglottic secretion drainage if ventilation **>48–72 h** anticipated; daily sedation interruption and readiness-to-wean; VAP defined as pneumonia **>48 h** after intubation | §5.9, §6.10 |
| Life-threatening asthma features (**adults and adolescents ≥12 y**, Australian Asthma Handbook) | Reduced consciousness or collapse, exhaustion, cyanosis, **SpO₂ <90%**, poor respiratory effort with a soft or silent chest | §5.11 |
| Asthma escalation therapy (**adult/adolescent**) | Oxygen to **92–96%** (88–92% if at risk of hypercapnia); continuous nebulised salbutamol (**2 × 5 mg nebules**) driven by oxygen; **ipratropium 8 actuations (21 microgram each) every 20 min for the first hour**; **prednisolone 37.5–50 mg oral** or IV hydrocortisone; **IV magnesium sulfate 0.2 mmol/kg, maximum 10 mmol, over 20 minutes**. IV salbutamol **not recommended**; **adrenaline 300 microgram IM** for peri-arrest (>12 y or >50 kg) | §5.11 |
| COPD exacerbation oxygen | **88–92%** (COPD-X and TSANZ agree) — Venturi or nasal prongs at **0.5–2 L/min**, not a non-rebreather | §5.12 |

### Sepsis

| Figure | Detail | § |
|---|---|---|
| Sepsis-3 | Infection + **acute rise in SOFA ≥2**. SOFA scores six systems **0–4 each (max 24)** | §4.1, §4.2 |
| qSOFA | **RR ≥22, GCS <15, SBP ≤100 mmHg**; **≥2** = higher risk — prognostic, not a screen | §4.2 |
| SIRS (obsolete as a definition basis) | Temp **<36 or >38 °C**, HR **>90**, RR **>20**, WCC **<4 or >12**. Insensitive: ~**1 in 8** infected ICU patients with organ dysfunction miss 2 criteria. Non-specific: ~**4 in 5** non-infected ICU patients meet them | §4.1 |
| Mortality anchors | Sepsis ~**10%** in-hospital; septic shock **>40%** | §4.1, §4.13 |
| Hypothermia in sepsis | **<36 °C** carries a worse prognosis than fever | §4.4 |
| Antimicrobial timing | Probable/definite sepsis **with or without shock → within 1 hour**; *possible* sepsis without shock → **within 3 hours** if concern persists; low likelihood, no shock → **defer and monitor**. ACSQHC 2022: **within 60 minutes** where infection-related organ dysfunction is present, 3-hour outer limit when infection is uncertain. Prehospital with **>60 min** to evaluation → give en route | §4.6 |
| Cultures | **Two sets in adults** from separate venepuncture sites; **one in children** (paediatric — Paediatrics §3). Never delay the drug | §4.5, §4.6 |
| Antimicrobial review | **24–48 hours after the first dose** (ACSQHC / Antimicrobial Stewardship Standard) | §4.11 |
| Duration | **5–7 days** with adequate source control; ≥**14 days** minimum for *S. aureus* bacteraemia | §4.11 |
| Source control | **Ideally within 6 hours** of diagnosing sepsis/septic shock requiring it (SSC 2026, conditional) | §4.9 |
| Empirical therapy — sepsis **without** shock (adult, Queensland Health, TG-concordant) | Unknown source: **tobramycin 4–5 mg/kg IV stat (max 500 mg) + flucloxacillin 2 g IV 6-hourly**. CAP: **benzylpenicillin 1.2 g IV 6-hourly + azithromycin 500 mg IV daily**. Urinary: tobramycin stat + **ampicillin 2 g IV 6-hourly**. Intra-abdominal: tobramycin stat + ampicillin 2 g 6-hourly + **metronidazole 500 mg IV 12-hourly**. Skin/soft tissue: flucloxacillin 2 g IV 6-hourly. Necrotising fasciitis: **piperacillin–tazobactam 4/0.5 g IV 6-hourly + vancomycin load + clindamycin 600 mg IV 8-hourly**. CNS/meningitis: **dexamethasone 10 mg IV 6-hourly** with/before the first dose **+ ceftriaxone 2 g IV 12-hourly** (+ benzylpenicillin 2.4 g IV 4-hourly if Listeria risk). Febrile neutropenia: piperacillin–tazobactam 4/0.5 g IV 6-hourly | §4.6 |
| Empirical therapy — **septic shock** column (adult) | Aminoglycoside becomes **tobramycin 7 mg/kg IBW/AdjBW IV stat (max 700 mg)**. Unknown source becomes **tobramycin 7 mg/kg + ceftriaxone 2 g IV 12-hourly + flucloxacillin 2 g IV 4-hourly**. CAP becomes **ceftriaxone 2 g IV daily + azithromycin 500 mg IV daily + vancomycin 25–30 mg/kg load**. Febrile neutropenia becomes **tobramycin 7 mg/kg + piperacillin–tazobactam 4/0.5 g IV 6-hourly + vancomycin load** | §4.6 |
| Severe penicillin allergy (adult) | Vancomycin **25–30 mg/kg load (max 3 g)**; CAP **moxifloxacin 400 mg IV daily**; intra-abdominal tobramycin + **clindamycin 600 mg IV 8-hourly**; necrotising fasciitis or febrile neutropenia **meropenem 2 g IV 8-hourly** + vancomycin | §4.6 |
| Modifiers | Water-exposure soft tissue infection: add **ciprofloxacin 400 mg IV 8-hourly**. Suspected meningococcal disease: replace piperacillin–tazobactam with **ceftriaxone 2 g IV 12-hourly** (severe penicillin allergy: ciprofloxacin 400 mg IV 8-hourly). Aminoglycosides dosed on **ideal or actual body weight, whichever is lower** | §4.6, §4.12 |
| Corticosteroids in septic shock | **Hydrocortisone 200 mg/day by continuous infusion for 7 days** (ADRENAL) — no 90-day mortality benefit (**27.9% vs 28.8%**), shock resolution **3 vs 4 days**. Not for sepsis without shock | §4.10 |
| Vitamin C | **Recommended against** — LOVIT gave vitamin C **50 mg/kg IV 6-hourly for 96 hours**: death or persistent organ dysfunction at day 28 **44.5% vs 38.5%, RR 1.21 (1.04–1.40)** | §4.10 |
| Other adjuncts | VTE prophylaxis; restrictive transfusion **~70 g/L**; glucose **≤10 mmol/L**; early enteral nutrition | §4.10 |
| Febrile neutropenia (adult, Australian definition) | Temperature **≥38.3 °C once, or ≥38.0 °C on two occasions**, with neutrophils **<0.5 × 10⁹/L**. IV antibiotics **within 60 minutes**, or **30 minutes** for a ward patient with signs of sepsis | §4.12 |
| Immunosuppression marker | Prednisolone **≥20 mg/day** among the risk factors for deterioration | §4.4 |
| ARISE FLUIDS (ANZ) | Days alive and out of hospital to day 90 **76 vs 76**; 90-day mortality 16.4% vs 14.4% (NS); vasopressor use 87% vs 68%; **pulmonary oedema 0.6% vs 5%** | §4.7 |

### Renal and ICU

| Figure | Detail | § |
|---|---|---|
| AKI definition (KDIGO 2012) | SCr rise **≥26.5 µmol/L in 48 h**, *or* **≥1.5× baseline within 7 days**, *or* urine output **<0.5 mL/kg/h for 6 h** | §6.1 |
| KDIGO staging | Stage 1: **1.5–1.9×** baseline or absolute rise ≥26.5 µmol/L within 48 h; UO <0.5 mL/kg/h for **6–12 h**. Stage 2: **2.0–2.9×**; UO <0.5 mL/kg/h for **≥12 h**. Stage 3: **≥3.0×**, or SCr **≥353.6 µmol/L**, or commencing RRT, or **eGFR <35 mL/min/1.73 m² (patients <18 y only)**; UO **<0.3 mL/kg/h for ≥24 h** or **anuria ≥12 h**. Stage by whichever axis is worse | §6.1 |
| Contrast AKI risk | Concentrates at **eGFR <30**, intra-arterial first-pass administration, volume depletion. N-acetylcysteine and bicarbonate not supported | §6.1 |
| RRT emergency triggers (AEIOU) | Refractory acidosis (conventionally **pH <7.1**); refractory hyperkalaemia or with ECG change; dialysable toxin (low Vd, low protein binding, low MW); diuretic-resistant overload; uraemic syndrome. No absolute urea or creatinine number triggers RRT | §6.2 |
| STARRT-AKI standard-arm triggers | Persistent severe AKI (creatinine **>50% above** the randomisation value) plus one of: **K⁺ ≥6.0 mmol/L**; **pH ≤7.20 or HCO₃⁻ ≤12 mmol/L**; overload with **PaO₂/FiO₂ ≤200**; AKI persisting **>72 h**. Accelerated = RRT within 12 h. 90-day mortality **43.9% vs 43.7%**; RRT dependence **10.4% vs 6.0%** | §6.2 |
| CRRT dose | Effluent **~25 mL/kg/h**; RENAL showed 40 vs 25 mL/kg/h adds nothing | §6.2 |
| Regional citrate | Titrate to **post-filter ionised calcium <0.35 mmol/L**. Suspect citrate accumulation when the **total:ionised calcium ratio ≥2.5**. RICH: filter life **47 vs 26 h**, bleeding 5.1% vs 16.9% | §6.2 |
| Dialysis disequilibrium prevention | Short first session (**~2 h**), blood flow **~150–200 mL/min**, small dialyser, stepwise escalation | §6.2 |
| Sedation depth | **RASS −5 to +4**; target **0 to −2** unless there is a reason to go deeper. **ICDSC ≥4** suggests delirium; **RASS −4/−5** is "unable to assess". CAM-ICU needs RASS **≥ −3** | §6.3, §6.4 |
| Propofol ceilings | TGA-approved Australian PI: maximum for **adult** ICU sedation **4.0 mg/kg/hour**; PRIS associated with infusions **exceeding 5 mg/kg/h for more than 48 h** (a reporting threshold, not a permitted dose). **Paediatric** (WA Health/PCH): maximum **4 mg/kg/h for up to 48 h including boluses**; risk triad **>4 mg/kg/h, cumulative >240 mg/kg, >48 h**. Propofol delivers **1.1 kcal/mL** | §6.3.1, §6.6 |
| Propofol contraindication (Australian PI) | Contraindicated in **children 16 years of age or younger** for ICU sedation and for monitored conscious sedation | §6.3.1 |
| Haloperidol (AID-ICU) | **2.5 mg IV three times daily** vs placebo — no difference in days alive and out of hospital at 90 days | §6.4 |
| ICU-acquired weakness | **MRC sum score <48/60** (6 muscle groups bilaterally, 0–5 each) in a cooperative patient; ~**25–60%** of patients ventilated **>7 days** | §6.5 |
| Nutrition | **Enteral within 24–48 h** once resuscitated; protein **~1.2–2.0 g/kg/day**; TARGET compared **1.5 vs 1.0 kcal/mL** with no mortality difference | §6.6 |
| Refeeding syndrome (Doig, ANZ) | Phosphate **<0.65 mmol/L within 72 h** of starting nutrition **with a fall >0.16 mmol/L**. Protocol: **20 kcal/h for at least 2 days**, then 40 kcal/h for 24 h, 60 kcal/h for 24 h, 80% of goal, full goal by day 4, **dropping back to 20 kcal/h if phosphate falls below 0.71 mmol/L**. Survival 91% vs 79% at day 60; 87% vs 79% at day 90. Risk: anyone unfed **>5 days** | §6.6 |
| Thiamine at refeeding (**adult**) | QuEDS **300 mg IM/IV 30 min before feeding and daily for 3 days, then 100 mg orally daily**; NSW Health **100 mg orally bd for 3 days**. *Paediatric thresholds differ* | §6.6 |
| Glycaemic control (adult) | NICE-SUGAR intensive **4.5–6.0 mmol/L** vs conventional **≤10.0 mmol/L**: 90-day mortality **27.5% vs 24.9%**; severe hypoglycaemia (**≤2.2 mmol/L**) 6.8% vs 0.5%. Standard adult target ≈ **6–10 mmol/L**; insulin infusion when glucose persistently exceeds ~10 mmol/L, hourly BGL initially | §6.7 |
| Stress ulcer prophylaxis | Coagulopathy defined as **platelets <50, INR >1.5, aPTT >2× normal**; invasive ventilation especially **>48 h**; prior GI bleed **within a year**. REVISE: pantoprazole **40 mg IV daily** — clinically important upper GI bleeding **1.0% vs 3.5%** | §6.8 |
| VTE prophylaxis | LMWH (enoxaparin) standard; **UFH if CrCl <30 mL/min**; graduated stockings should **not** be used after stroke | §6.8 |
| DKA — ICU/HDU criteria (**adult**, WACHS) | Severe ketoacidosis; **K⁺ <3.5 mmol/L on admission**; AKI with low urine output; **GCS <12**; haemodynamic instability; failure to respond; pregnancy; **age 16–25 years**; or no hourly nursing available | §6.9 |
| DKA diagnosis (**adult**) | Glucose **>11 mmol/L** or known diabetes; blood ketones **≥3.0 mmol/L**; venous **pH <7.35 or HCO₃⁻ <18 mmol/L** (WACHS). The 2024 ADA/EASD/AACE/JBDS consensus uses **pH <7.3**, or HCO₃⁻ <18, or both, and accepts urine ketones ≥2+ | §6.9 |
| HHS (**adult**) | Glucose **≥33.3 mmol/L**; **effective osmolality >300 mOsm/kg** (or total >320); β-hydroxybutyrate **<3.0**; pH **≥7.3**; HCO₃⁻ **≥15**. Effective osmolality = 2 × Na⁺ + glucose. Deficit often **8–10 L**; correct glucose fall **≤~5–6 mmol/L/h** and sodium change **≤~10 mmol/L/24 h** | §6.9 |
| DKA fluid (**adult**) | Shocked (SBP <90): 0.9% sodium chloride **500–1,000 mL over ~15 min**, repeat. Otherwise ~**1,000 mL in the first hour**, then **500–1,000 mL/h for 2–4 h**; **250 mL aliquots** if elderly, cardiac or renal | §6.9 |
| DKA insulin (**adult**) | Fixed-rate **0.1 units/kg/h** short-acting insulin by **actual body weight**; senior discussion above **~15 units/h**. HHS **0.05 units/kg/h**. Add **10% glucose when BGL <14 mmol/L** (~125 mL/h) and consider halving to 0.05 units/kg/h. Continue usual basal subcutaneous insulin. Resolution: β-hydroxybutyrate **<0.6 mmol/L** and venous pH **≥7.3** or HCO₃⁻ **≥18**; overlap subcutaneous rapid-acting **30–60 min** before stopping | §6.9 |
| DKA potassium (**adult**) | **>5.5 mmol/L** → no potassium, recheck in 1–2 h. **3.5–5.5** → pre-mixed **40 mmol/L** bags. **<3.5** → WACHS requires senior review; the 2024 international consensus replaces at **~10 mmol/h and withholds insulin until K⁺ >3.5**. Hold K⁺ **4–5 mmol/L**. Peripheral cap **10 mmol/h** and **40 mmol/L**; **the WACHS DKA exception permits 20 mmol/h peripherally for a maximum of 4 hours**, after which insert a central line and/or obtain HDU review | §6.9 |
| DKA — other | **Bicarbonate** not indicated; consider only at **pH <7.0** after senior discussion. **Phosphate** not routine; replace if **<1.0 mmol/L** with weakness or cardiorespiratory compromise | §6.9 |
| Euglycaemic DKA on SGLT2i | Presumptive: ketones **>1.0 mmol/L** AND base excess **< −5 mmol/L** AND glucose **<14 mmol/L**. **Withhold SGLT2i for at least 3 days** before an elective procedure (the two days before plus the day of) and before bowel prep. Infuse glucose alongside insulin from the outset (**BGL <15 mmol/L**) | §6.9 |
| Cerebral oedema in DKA | Predominantly **paediatric** — ~**0.3–1%** of paediatric DKA episodes and the leading cause of DKA death in children; adult cases rare. Paediatric risk associations and fluid/insulin regimens differ materially — do not transfer them | §6.9 |
| Brain death — preconditions (**adult**) | Temperature **≥35 °C**; **SBP ≥90 mmHg or MAP ≥60 mmHg**; no significant sedative or NMBA effect; Na⁺ within ~**125–160 mmol/L**, glucose within ~**3–25 mmol/L**, Mg²⁺ or PO₄³⁻ **≥0.5 mmol/L**, urea **≤40 mmol/L**; testable eyes, ears and cranial nerves | §6.12 |
| Brain death — observation and testing (**adult, and children >30 days**) | Minimum **4 h** of unresponsive coma with absent brainstem reflexes before clinical testing; **24 h** after hypoxic-ischaemic injury or rewarming from hypothermia. **Two** medical practitioners independent of the transplant team. Apnoea test: no respiratory effort at **PaCO₂ >60 mmHg (~8 kPa) with arterial pH <7.30** | §6.12 |
| Brain death — **PAEDIATRIC ONLY** | Cannot be determined with certainty in any infant born **before 37 weeks** post-conceptual age, and **not possible in the first 24 hours of life** in a term newborn. From **24 hours to 30 days of age**: a **24-hour observation period before the first clinical examination and a further 24-hour interval before the second**. **Beyond 30 days the criteria are the same as in adults** | §6.12 |
| Death by circulatory criteria (DCD) | **5 minutes** of observed absent circulation, then clinical confirmation | §6.12 |
| CLABSI insertion | **2% chlorhexidine in 70% alcohol** allowed to dry; maximal sterile barrier precautions; avoid femoral where practicable | §6.10 |

### Antidotes and toxicology

| Figure | Detail | § |
|---|---|---|
| Screening in deliberate self-poisoning | **Paracetamol level (≥4 h post ingestion) and ECG**, plus BSL, electrolytes, VBG, pregnancy test | §7.1 |
| Activated charcoal | **Adult 50 g; paediatric 1 g/kg up to 50 g**. Generally within **1–2 h**. Does not bind metals (iron, lithium, potassium), alcohols and glycols, corrosives, hydrocarbons, cyanide, fluoride | §7.4 |
| Charcoal windows in paracetamol | Within **2 h** for IR ingestions ≥10 g or ≥200 mg/kg; within **4 h** for ingestions **≥30 g**; within **4 h** for **modified-release** paracetamol at the ≥10 g / ≥200 mg/kg threshold | §7.4 |
| Urinary alkalinisation | NaHCO₃ infusion to **urine pH 7.5–8.5**, with obsessive potassium replacement | §7.5 |
| Salicylate haemodialysis | Commonly quoted at around **>7.2 mmol/L acutely** and around **4.4 mmol/L** in chronic or elderly poisoning — clinical criteria trump the number. Unit trap: **7.2 mmol/L ≈ 100 mg/dL** | §7.5 |
| Paracetamol risk threshold | **≥10 g or ≥200 mg/kg, whichever is less** (adult **and** paediatric) | §7.6 |
| Paracetamol nomogram | Australian treatment line **150 mg/L (1000 µmol/L) at 4 h**, declining with a 4-h half-life. The **UK line is 100 mg/L at 4 h**. Valid only for a single acute IR ingestion at a known time, level at or after **4 h** (generally within 16 h) | §7.6 |
| NAC two-bag regimen (adult and paediatric, per kg) | **200 mg/kg (max 22 g) over 4 h**, then **100 mg/kg (max 11 g) over 16 h** = 300 mg/kg over 20 h. Caps correspond to a **110 kg ceiling**. 70 kg: 14 g then 7 g = **21 g** | §7.6 |
| Massive ingestion | **≥30 g or ≥500 mg/kg**, or a concentration **>2× the nomogram line** → double the second bag to **200 mg/kg over 16 h**; toxicologist discussion above **3×** | §7.6 |
| NAC without a level | Start empirically if presentation is **>8 h** post ingestion, if the level will not be back within 8 h of ingestion, or if the time is unknown | §7.6 |
| Stopping NAC | At 20 h check ALT/AST, INR and paracetamol concentration. Stop if clinically well, ALT/AST normal or falling, **INR <2.0**. Continue at 100 mg/kg per 16 h if ALT **>50 U/L and rising**, or paracetamol **≥10 mg/L (66 µmol/L)** | §7.6 |
| Repeated supratherapeutic ingestion | Assess if **≥10 g or ≥200 mg/kg/24 h**; **≥12 g or ≥300 mg/kg/48 h**; or above-therapeutic dosing **>48 h with GI symptoms**. Nomogram does not apply; decision rests on ALT and concentration (locally used trigger commonly **20 mg/L**) | §7.6 |
| TCA — QRS thresholds | **Adult >120 ms** → bicarbonate and seizure risk (Austin Health); **paediatric >100 ms** → seizure risk (RCH); both **>160 ms** → ventricular arrhythmia risk | §7.7 |
| TCA — bicarbonate | **8.4% (1 mmol/mL), 1–2 mmol/kg = 1–2 mL/kg IV bolus**, repeated **every 3–5 min** while the QRS is wide; target arterial **pH 7.50–7.55**. ANZCOR 11.10 caps each bolus at **1–2 mL/kg up to 100 mL** and the **total at 6 mL/kg** (≈420 mL of 8.4% in a 70 kg adult), then hyperventilate to pH 7.45–7.55 (**PaCO₂ 30–35 mmHg**) | §7.7 |
| TCA — dose risk (adult) | **5–10 mg/kg** mild; **>10 mg/kg** moderate; **>20 mg/kg** severe. Onset **30–90 min**. Hypotension: crystalloid **20–30 mL/kg** then noradrenaline. **Medical clearance at 6 h** with a normal ECG and conscious state. **Paediatric**: RCH refers any child ingesting **>5 mg/kg** | §7.7 |
| Naloxone (adult) | Toxicology titration: **100 microgram IV increments every 30–60 s** in the dependent adult, threshold typically **RR <8–10** with reduced conscious state and hypoxia. ANZCOR 11.10 arrest/prehospital: **400 microgram IV, 800 microgram IM/SC, 2 mg intranasal**. Duration **45–70 min** while respiratory depression may persist **4–5 h**; observe **≥2 h** after the last dose. Infusion at ~**two-thirds of the total waking dose per hour** | §7.8 |
| Flumazenil | **0.2 mg increments**; one legitimate niche only — reversing iatrogenic procedural sedation in a benzodiazepine-naive patient with a known single agent | §7.8 |
| Droperidol (Queensland Health v5.0, 2024) | **Adult 10 mg IM** (5 mg IM if medically frail), repeatable once at 15 min, **max 30 mg/24 h** (15 mg if frail); **10 mg IV** where access exists. **Children/adolescents 0.1–0.2 mg/kg, max 10 mg per dose, 0.4 mg/kg to a maximum 20 mg/24 h** | §2.9, §7.9 |
| Oral options for SAT +1 (adult) | **Diazepam 10–20 mg** or **olanzapine 10 mg** orally (Queensland Health); NSW ACI lists **olanzapine 5 mg oral once only** | §2.9 |
| Ketamine as rescue | **Adult 4–6 mg/kg IM**; **children/adolescents 2–4 mg/kg IM** — second line after failed droperidol sedation | §2.9, §7.9 |
| Olanzapine–benzodiazepine sequencing | If IM olanzapine has been given, a parenteral benzodiazepine must not be given **until at least 1 hour after** the IM olanzapine dose, and never in the same syringe or simultaneously | §2.9 |
| Post-sedation monitoring (adult) | Continuous pulse oximetry; vitals **every 5 min for 20 min**; SAT **every 15 min for 60 min**. Escalate if **SpO₂ <94%, RR <10, pulse <50, BP <90/50, or GCS motor score <5**. SAT runs **+3 to −3**; effective sedation = a fall of **two SAT levels** or a return to zero | §2.9, §7.9 |
| Lithium haemodialysis (EXTRIP) | Recommended if **[Li⁺] >4.0 mmol/L with impaired kidney function**, or decreased conscious state, seizures or life-threatening dysrhythmia **irrespective of level**. Suggested if **>5.0 mmol/L**, if confusion is present, or if the expected time to reach **<1.0 mmol/L** with optimal management is **>36 h**. Stop when **<1.0 mmol/L**, or on clinical improvement, or after a minimum of **6 h** if levels are unavailable; serial levels over **12 h** decide further sessions | §7.10 |
| Digoxin — potassium | **K⁺ >5.0 mmol/L** marks significant acute poisoning (Australian Prescriber); **Austin Health Fab trigger is K⁺ >6.0 mmol/L with evidence of acute toxicity**. Chronic toxicity has normal or **low** potassium | §7.11 |
| Digoxin immune Fab (Queensland PIC, empiric) | **Cardiac arrest 5 vials (200 mg)**; **acute toxicity with haemodynamic compromise 2 vials (80 mg)** IV over 30 min, repeated as needed; **chronic toxicity with compromise 1 vial (40 mg)** over 30 min. Total digoxin assays are uninterpretable after Fab | §7.11 |
| HIET (Austin Health v4.2, 2025; **adult**) | **Insulin 1 unit/kg IV bolus**, then **1 unit/kg/h** with the **initial rate capped at 120 units/h**, titrated **every 15 min up to 5 units/kg/h over the first hour** and thereafter to a maximum **10 units/kg/h (absolute ceiling 1200 units/h)**. Glucose: **50 mL of 50%** bolus (omit if BSL >15 mmol/L) plus **100 mL/h of 10%**. Targets: glucose **5.5–11.0 mmol/L**, K⁺ **2.8–3.3 mmol/L**, both checked **15-minutely** at first. Onset **15–60 min**. 70 kg: bolus 70 units, initial 70 units/h, maximum 700 units/h | §7.12 |
| Octreotide for sulfonylurea | Once **BSL <4.0 mmol/L** is confirmed: **adult 50 microgram SC 8-hourly for at least 24 h**, or 50 microgram IV load then 25 microgram/h. **Paediatric 2 microgram/kg SC 8-hourly** (20 kg child = 40 microgram). **BSL monitoring for a full 24 h** — hypoglycaemia may be delayed up to **18 h** | §7.12 |
| Iron (elemental) | **<20 mg/kg** minimal; **20–60 mg/kg** GI toxicity; **>60 mg/kg** systemic toxicity; **>120 mg/kg** potentially lethal. Phases: GI **0–6 h**, latent **6–24 h**, systemic, then strictures at **2–8 weeks** | §7.13 |
| Desferrioxamine (Queensland PIC) | **15 mg/kg/h IV infusion** for serum iron **>90 micromol/L at 6 h**, or **>60 micromol/L with clinical toxicity**; continue until iron **<60 micromol/L**; **halve the dose if eGFR <50** | §7.13 |
| Carbon monoxide | COHb half-life ~**240 min on air**, ~**90 min on FiO₂ 1.0**, ~**23 min at 3 ATA**. HBO considered for LOC, persistent deficit, myocardial ischaemia, metabolic acidosis, **age >55** and pregnancy | §7.13 |
| Organophosphates | **Atropine ~0.02 mg/kg** (adult starting doses ~**1.2 mg** also used), **doubling every 5 min** until atropinised (endpoint a **dry chest**, not a heart rate), then infuse. **Pralidoxime ~30 mg/kg IV load then ~8 mg/kg/h**. **Intermediate syndrome at 24–96 h** | §7.13 |
| Fomepizole (SESLHD 2023) | **15 mg/kg IV load** (70 kg = **1050 mg**), then **10 mg/kg 12-hourly for 48 h**, then **15 mg/kg 12-hourly**; during intermittent haemodialysis **10 mg/kg every 4 h** | §7.13 |
| Pressure immobilisation technique | Broad elasticised bandage **10–15 cm**, firm enough that a finger cannot easily slide underneath, over the bite then from the fingers/toes upward, then splint. Applies to **all Australian venomous snakes including sea snakes, funnel-web spider, blue-ringed octopus and cone shell**; **not** redback or other spiders, jellyfish, stonefish or other fish stings, scorpions or centipedes | §7.15 |
| Snake antivenom | **One vial**, adults and children, any Australian snake; repeat dosing no longer recommended; no premedication | §7.15 |
| Snakebite serial testing | INR/aPTT, FBC, CK, EUC on arrival, **1 h after bandage removal**, then at **6 h and 12 h**. Normal serial bloods and examination at **12 h** = not envenomed. VICC takes **24–36 h** to correct | §7.15 |
| Marine | Box jellyfish: douse with vinegar **~30 s**. Irukandji: latency **5–40 min** before severe generalised pain. Bluebottle and non-tropical stings: **no vinegar**; hot water immersion for **20 min**, no hotter than the rescuer can tolerate (**≈45 °C maximum**) | §7.15 |
| Poisons Information Centre | **13 11 26**, anywhere in Australia, **24 hours a day** | §7.17 |

---

## ⚠ Inconsistencies found

**None outstanding.** Nine conflicts were flagged across two passes of this summary. All nine have been adjudicated against a source and resolved in the sections, so nothing is left for the reader to decide. Recorded here so the next build does not re-litigate them.

**Confirmed real, and corrected:**

| Was | Resolved to | Decided by |
|---|---|---|
| §1.9/§1.12 post-ROSC SpO₂ **94–98%** vs §5.3 calling 94–98% "the UK/BTS figure" and the only Australia-vs-UK oxygen split | **§1 correct.** ANZCOR 11.6.1 (Feb 2026) specifies 94–98% post-ROSC — a context-specific target, not a UK one. §5.3 rewritten: TSANZ 92–96% general acute / 88–92% at-risk; BTS 94–98% general / 88–92% at-risk; the "only genuine split" claim deleted | ANZCOR 11.6.1; TSANZ acute oxygen guideline. Two reviewers, independently |
| Ventilator rate in the intubated asthmatic — §1.12 **<10/min** vs §5.11 **≈10–14/min** | **8–10/min** in both. 10–14 exceeds the recommended rate and invites the dynamic hyperinflation the same paragraph warns about | ERC; ANZCOR special circumstances |
| Peripheral IV potassium — §3.7 requiring **central access** for 20 mmol/h vs §6.9 permitting **20 mmol/h peripherally** in DKA | **Both partly wrong.** One identical rule now in both: max 40 mmol/L peripherally; **10 mmol/h** general; **20 mmol/h peripherally** only with a **volumetric pump** and continuous cardiac monitoring (the pump, not central access, is the requirement), in severe hypokalaemia and adult DKA; **hard 4-hour ceiling** on the DKA exception, then central line or HDU. Adult figures | Queensland Health v7.00 (2023); WACHS |
| Sodium bicarbonate — §1.6 **1 mmol/kg over 2–3 min** vs §7.7 **1–2 mmol/kg repeated** | **Both correct for their own context**, now labelled: ANZCOR 11.5 gives 1 mmol/kg over 2–3 min in arrest; ANZCOR 11.10 gives 8.4% 1–2 mL/kg up to 100 mL every 3–5 min for sodium-channel blockade, **maximum total 6 mL/kg**. The caps are now stated in both places | ANZCOR 11.5 and 11.10, both fetched; Austin Health TCA guideline (Oct 2022) |
| MAP targets given four ways across four sections | Not a contradiction — four different contexts (post-ROSC, shock, septic shock, brain-death testing). All four now context-labelled | Reviewers 1 and 3 |
| §3.5 pointing to "CC §1" for anaphylaxis; §4.13 pointing to "§1" for post-intensive care syndrome | Both broken cross-references repointed — anaphylaxis to **Immunology & Allergy** and **Paediatrics §3**, PICS to **§6** | Internal |

**Rejected — the flag was wrong, and the text was right:**

| Flagged as | Verdict |
|---|---|
| Between the Flags urine output: Yellow "<100 mL over 4 h" vs Red "<200 mL over 8 h" being the same rate, so Red cannot escalate | **False finding.** These are the real NSW criteria and they escalate by **duration**, not rate. Text unchanged; the duration basis is now made explicit so no one repeats the misreading |
| §7.12 HIET ceilings of 120 units/h and 1200 units/h contradicting each other and the worked example | **False finding.** Austin Health v4.2 (2025): **120 units/h caps the initial 1 unit/kg/h rate; 1200 units/h caps the maximum 10 units/kg/h rate.** Both bind only above 120 kg, so the 70 kg example (70 units bolus, 70 units/h, max 700 units/h) is internally consistent. Numbers unchanged; a clarifying clause added |

Two false findings out of nine is the expected cost of a flag-everything rule, and the right trade: the alternative is a summary agent that resolves conflicts by preference, which has previously harmonised this library onto the wrong side twice.

**Divergences the sections flag themselves** — real, acknowledged in situ, and left standing deliberately: ANZCOR adrenaline after the second shock vs ERC/RCUK after the third; ANZCOR 200 J vs ERC ≥150 J; ANZCOR fever prevention ≥72 h vs ERC 36–72 h; ACSQHC vs NHFA/CSANZ reperfusion times; SSC vs ACSQHC antibiotic timing; COPD-X pH <7.35 vs ERS/ATS ≤7.35; Berlin vs the 2023–24 global ARDS definition; the Australian 150 mg/L paracetamol nomogram line vs the UK 100 mg/L; EXTRIP lithium criteria vs Buckley's Australian critique; Australian empiric vs North American formula-based digoxin Fab dosing.

## Gaps

What a finals paper could reasonably ask that sections 1–7 do not supply.

**Explicitly cross-referenced out of Critical Care**
- **Paediatric ALS in its entirety** — paediatric adrenaline dosing, J/kg energies, the paediatric algorithm → **Paediatrics §3**. Also paediatric sepsis and the seriously ill child, the paediatric rash, paediatric DKA fluid and insulin regimens, paediatric electrolyte replacement, and paediatric ABD protocols.
- **Anaphylaxis** — no adrenaline dose, route or repeat interval anywhere in sections 1–7; adrenaline is named "first-line in anaphylaxis" and routed to **Immunology & Allergy** and **Paediatrics §3**.
- **Trauma** — primary survey, haemorrhagic shock grading, damage-control resuscitation, trauma MTP activation, burns, GCS and head-injury management, traumatic arrest, and **tension pneumothorax decompression technique** → **Surgery §5** (and Respiratory).
- **Transfusion reactions** — acute haemolytic, febrile, TACO, TRALI — and haematological DIC → **Haematology & Oncology**. Only TA-GvHD prevention by irradiation appears here.
- **AKI aetiology and CKD, contrast nephropathy in depth, rhabdomyolysis management** → **Renal**.
- **DKA diagnosis, precipitants, sick-day rules and outpatient management** → **Endocrine**.
- **Stroke thrombolysis windows, thrombectomy criteria** → **Neurology** and the Stroke Foundation living guidelines.
- **ACS definitive management** — antiplatelet and anticoagulant regimens, PCI vs fibrinolysis specifics beyond the timing targets → **Cardiology**.
- **PE diagnosis pathway and anticoagulation** outside the unstable patient → **Respiratory**, **Haematology**; **chronic asthma/COPD, pneumonia, pleural disease** → **Respiratory**.
- **Serotonin toxicity vs NMS comparison table** (onset, rigidity, reflexes, pupils, CK, treatment) → **Psychiatry §7.2**; **alcohol and benzodiazepine withdrawal management** → **Psychiatry §5.3**; **psychiatric risk assessment after self-poisoning** → **Psychiatry §1.4**; **refeeding in anorexia nervosa** → **Psychiatry §6.2**.
- **Delirium phenomenology and general management** → **Geriatrics §1**; **advance care planning and capacity law** → **Geriatrics §5**.
- **Organism-specific therapy, CSF interpretation, meningitis regimens, HAI microbiology** → **Infectious Disease**.
- **Cauda equina pathology** → **MSK & Rheumatology**; **malignant cord compression oncology** → **Oncology**; **testicular torsion** → **Urology**; **mesenteric ischaemia, obstruction and necrotising soft tissue infection definitive management** → **Surgery §2, §3, §14**; **perioperative fluids and preoperative PBM** → **Surgery §1, §2**.

**Testable content not covered anywhere in sections 1–7**
- **Malignant hyperthermia** — appears only as a suxamethonium contraindication (§1.4) and a methoxyflurane contraindication (§2.6). No trigger list, no clinical criteria, no dantrolene dose, despite being one of the three hyperthermic-rigid syndromes an exam pairs.
- **Cyanide and smoke inhalation** — cyanide appears only as an agent charcoal does not bind (§7.4). No hydroxocobalamin or dicobalt edetate.
- **Methaemoglobinaemia** — absent, including methylene blue as an antidote (methylene blue appears only as "insufficient evidence" in septic shock).
- **Status epilepticus** — named as an RSI indication and as a post-arrest problem, but **no anticonvulsant agents or doses**; ANZCOR specifies no agent and the ERC agents are named without doses.
- **Airway burns and inhalational injury** — listed as an intubation indication only.
- **Obstetric critical care** beyond arrest — eclampsia, amniotic fluid embolism and PPH appear as causes but without management figures other than TXA.
- **Antimicrobial dose adjustment in RRT** — flagged as "a common and lethal error" but deferred to "the ICU RRT protocol" with no figures.
- **Phentolamine dose** for noradrenaline extravasation — explicitly "institution-specific".
- **Troponin ng/L cut-offs and deltas** — explicitly assay-specific and deliberately not given; only the principle is examinable.
- **An Australian NSE cut-off** — ANZCOR publishes none; only the international 60 mcg/L figure exists.
- **Mega-ROX** — designed to settle the oxygen-target question, result not yet quotable.
- **KDIGO 2026 AKI/AKD** — reached public review March 2026, not published; KDIGO 2012 remains operative.
- **ECMO and mechanical circulatory support detail** — VA-ECMO, Impella and IABP are outlined as bridge-to-decision only, without cannulation, configuration or complication management figures.
