# Adversarial verification — Critical Care Section 6: Organ Support and ICU Complications

File reviewed: `/tmp/fmd/sources/cc/06-organ-support-and-icu-complications.md` (5,564 words)
Reviewer mode: adversarial. Every factual claim checked against a live source; nothing verified from memory.

**Counts:** dangerous 3 · wrong 6 · imprecise 10 · stylistic 1 = **20 findings**

**Verdict on the KDIGO worked example (§6.1.1):** arithmetic and staging logic are **correct in full** — 190 ÷ 80 = 2.375× (stage 2), UO 0.3 mL/kg/h for 8 h is stage 1 only, and the "stage by the worse criterion" rule is correctly stated and correctly applied; answer stage 2 stands.

---

## Findings

### 1.
```
QUOTE: - **Paediatrics:** infants under 30 days need longer observation; determination is not possible with certainty in very premature infants → **Paediatrics**.
FILE + HEADING: 06-organ-support-and-icu-complications.md — §6.12 ICU ethics and end-of-life care → "Determination of death (ANZICS Ed. 4, 2019)"
CORRECTION: - **Paediatrics (ANZICS):** clinical determination of death by neurological criteria **cannot be made with certainty in any infant born before 37 weeks** post-conceptual age, and **is not possible in the first 24 hours of life** in a term newborn. From **24 hours to 30 days of age**, a **24-hour observation period is required before the first clinical examination and a further 24-hour interval before the second**. **Beyond 30 days the criteria are the same as in adults.** Brain perfusion studies assist where preconditions cannot be met → **Paediatrics**.
SOURCE: ANZICS, The Statement on Death and Organ Donation, Ed. 4 / 4.1 — paediatric criteria as published at https://www.anzics.com.au/death-and-organ-donation-app-content/ ; edition currency confirmed by NSW Health GL2023_013 (2023), https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/GL2023_013.pdf
SEVERITY: dangerous
```
Three separate errors in one bullet. "Very premature" understates the rule — it is **all** preterm infants (<37 weeks), not just extreme prematurity. The section gives no age floor at all, when ANZICS excludes clinical determination in the first 24 h of life. And "longer observation" is unquantified when ANZICS specifies 24 h before the first examination *and* 24 h between examinations. This is Australian death-determination criteria applied to the wrong population (taxonomy B).

### 2.
```
QUOTE: ⚑ **Dose/duration thresholds — and the disagreement.** The Australasian **Diprivan data sheet (Medsafe NZ)** states PRIS is most often associated with **>5 mg/kg/h for >48 h**, caps ICU sedation at a **maximum 4 mg/kg/h**, and advises against prolonged sedation beyond 48 hours. The **WA Health / Perth Children's Hospital propofol monograph** gives the triad **>4 mg/kg/h, cumulative >240 mg/kg, >48 h** — **paediatric** figures. Both stress PRIS occurs at lower rates and shorter durations: risk markers, not safety guarantees.
FILE + HEADING: §6.3.1 Propofol infusion syndrome (PRIS)
CORRECTION: ⚑ **Dose/duration thresholds — adult and paediatric, and they do not actually disagree.** The **TGA-approved Australian PI** (wording per Propofol Sandoz) states PRIS is associated with infusions **exceeding 5 mg/kg/h given for more than 48 h**, and separately states that **"the maximum dose of propofol for adult sedation during intensive care should not exceed 4.0 mg/kg/hour"**. The **WA Health / Perth Children's Hospital monograph (paediatric)** sets the identical ceiling — **maximum 4 mg/kg/h for up to 48 h including boluses** — and lists the risk triad **>4 mg/kg/h, cumulative >240 mg/kg, >48 h**. So **4 mg/kg/h is the licensed ceiling in adults and children alike**; 5 mg/kg/h is merely the rate above which PRIS is most often *reported*, not a permitted dose. Both sources stress PRIS occurs at lower rates and shorter durations: risk markers, not safety guarantees.
SOURCE: Australian PI, Propofol Sandoz emulsion for injection, §4.3 and §4.2 (TGA-approved, via NPS MedicineWise), https://www.nps.org.au/medicine-finder/propofol-sandoz-emulsion-for-injection ; Perth Children's Hospital Medication Management Manual, PropOFol monograph, https://pch.health.wa.gov.au/~/media/Files/Hospitals/PCH/General-documents/Health-professionals/MedicationMonographs/propOFol.pdf ; NZ Medsafe Diprivan Data Sheet, https://www.medsafe.govt.nz/profs/datasheet/d/diprivaninj.pdf
SEVERITY: dangerous
```
The section frames 4 vs 5 mg/kg/h as an adult–paediatric disagreement. It is not. The Australian PI caps **adults** at 4 mg/kg/h, exactly as the paediatric monograph caps children. Presenting 5 mg/kg/h as "the adult figure" against "a WA Health paediatric >4" invites a candidate to conclude that 4.5 mg/kg/h is within licence in an adult. It is not. Also note the Australasian sourcing is available: the NZ data sheet was not needed — the Australian PI carries all three statements.

### 3.
```
QUOTE: Peripheral infusion is normally capped at 10 mmol/h; DKA protocols permit 20 mmol/h peripherally for a limited period with cardiac monitoring.
FILE + HEADING: §6.9 DKA and HHS as ICU problems → Potassium (adult)
CORRECTION: Peripheral infusion is normally capped at **10 mmol/h**, maximum peripheral concentration **40 mmol/L**; anything faster requires **central access, an infusion pump and continuous cardiac monitoring** (Queensland Health adult electrolyte prescribing guideline v7.00, 2023, which permits up to 20 mmol/h centrally when K⁺ <2.5 mmol/L). **The DKA exception is real and Australian, but it is time-limited:** the WACHS adult DKA guideline permits **20 mmol/h via a peripheral venous line for a maximum of 4 hours**; if 20 mmol/h is still needed beyond 4 hours, insert a central line and/or obtain HDU review.
SOURCE: WA Country Health Service, Adult Diabetic Ketoacidosis Guideline, https://www.wacountry.health.wa.gov.au/~/media/WACHS/Documents/About-us/Policies/Adult-Diabetic-Ketoacidosis-Guideline.pdf ; Queensland Health, Prescribing Guidelines for HYPO-Electrolyte Disturbances in Adults, v7.00 (Oct 2023), https://www.health.qld.gov.au/__data/assets/pdf_file/0027/1006587/electrolyte-prescribe-gline-adult.pdf
SEVERITY: dangerous
```
Taxonomy F: a safety ceiling stated as "a limited period" when the guideline gives a hard 4-hour limit with a defined escalation. **Cross-section adjudication (item 3 in the brief) — both sections are right, neither is complete:** §3.7's "20 mmol/h requires central access plus continuous ECG when K⁺ <2.5" is a correct statement of the Queensland Health general rule; §6.9's DKA exception is a correct statement of the WACHS DKA rule. The fix is to add the 4-hour ceiling and the WACHS attribution here, and a one-line DKA cross-reference in §3.7 — not to delete either.

### 4.
```
QUOTE: **Assessment (PADIS 2018, the framework used in Australian units).**
FILE + HEADING: §6.3 Sedation and analgesia
CORRECTION: **Assessment (PADIS — the SCCM framework, US-authored but the one Australian units work to; 2018 guideline as revised by the 2025 SCCM focused update).**
SOURCE: SCCM, A Focused Update to the PADIS Guidelines (2025), https://www.sccm.org/clinical-resources/guidelines/guidelines/focused-update-padis-guideline ; AACN summary, https://www.aacn.org/blog/key-takeaways-2025-update-padis-guidelines
SEVERITY: imprecise
```
Taxonomy A borderline. The section does not claim PADIS is Australian, but "the framework used in Australian units" is the only label given for a US guideline, and the 2018 edition is now superseded on two of the points this section makes. Name the authorship and the edition.

### 5.
```
QUOTE: ⚑ **SPICE III (NEJM 2019; ANZICS CTG–led, 4,000 patients).** Early dexmedetomidine as primary sedative: **90-day mortality identical at 29.1%**; most still needed propofol/midazolam; more bradycardia (5.1% vs 0.5%) and hypotension. **Adjunct, not mandated first-line.**
FILE + HEADING: §6.3 Sedation and analgesia
CORRECTION: ⚑ **SPICE III (NEJM 2019; ANZICS CTG–led, 4,000 patients, 74 ICUs in 8 countries).** Early dexmedetomidine as primary sedative: **90-day mortality identical at 29.1% in both arms**; 64% still needed supplemental propofol; more bradycardia (5.1% vs 0.5%), hypotension (2.7% vs 0.5%) and asystole (0.7% vs 0.1%). Rarely adequate as a **sole** agent. ⚑ **Position has since moved:** the **2025 SCCM focused update to PADIS now suggests dexmedetomidine *over* propofol** for maintaining light sedation in mechanically ventilated adults (conditional recommendation, accepting the bradycardia excess). Reconcile the two: dexmedetomidine is a reasonable *primary* agent for light sedation, but seldom sufficient alone.
SOURCE: SPICE III, NEJM 2019, summarised at https://www.thebottomline.org.uk/summaries/icm/spice-iii/ ; SCCM 2025 PADIS focused update, https://www.aacn.org/blog/key-takeaways-2025-update-padis-guidelines
SEVERITY: wrong
```
Taxonomy C. "Adjunct, not mandated first-line" was the correct 2019–2024 reading and is now out of step with the 2025 focused update. The section's own Sources line already cites the 2025 update, so the body has not been reconciled with it (taxonomy H — the citation is not evidence of checking).

### 6.
```
QUOTE: - **PADIS 2018 does not recommend routine antipsychotics** for treatment or prevention.
FILE + HEADING: §6.4 ICU delirium → "Why antipsychotics are not the answer"
CORRECTION: - **PADIS 2018 recommends against routine antipsychotics** for treatment or prevention of ICU delirium; the **2025 SCCM focused update makes no recommendation for or against** haloperidol or atypical antipsychotics for treating established delirium, concluding that they have minimal or no effect on patient-centred outcomes. Either way, routine use is not supported.
SOURCE: SCCM 2025 PADIS focused update, https://www.sccm.org/clinical-resources/guidelines/guidelines/focused-update-padis-guideline ; AACN key takeaways, https://www.aacn.org/blog/key-takeaways-2025-update-padis-guidelines
SEVERITY: wrong
```

### 7.
```
QUOTE: ⚑ **RICH (JAMA 2020, 1,260 patients, Germany):** longer filter life and less bleeding with citrate (**5.1% vs 16.9%**), but **no mortality benefit (51.2% vs 53.6%)** and **more new infections (68.0% vs 55.3%)**.
FILE + HEADING: §6.2 Renal replacement therapy → Circuit anticoagulation
CORRECTION: ⚑ **RICH (JAMA 2020; 638 randomised, 596 in the primary analysis set, 26 German ICUs, stopped early at interim analysis):** longer filter life with citrate (median **47 vs 26 h**) and far less bleeding (**5.1% vs 16.9%**), but **no mortality benefit (51.2% vs 53.6%; adjusted HR 0.79, 95% CI 0.63–1.004)** and **more new culture-proven infections (68.0% vs 55.4%)**.
SOURCE: Zarbock et al., JAMA 2020;324(16):1629–1639 (RICH), summarised with the enrolment figures at https://criticalcarereviews.com/foundational-trials/rich
SEVERITY: wrong
```
The N is out by roughly a factor of two — 1,260 is not the randomised, analysed, or planned enrolment. The trial's early termination is also omitted, which is the reason the mortality comparison is underpowered.

### 8.
```
QUOTE: | Cannot lift limbs on day 10 of ventilation; face spared, sensation intact | **ICU-acquired weakness** — MRC sum score **<48/60**; **TEAM** (2022) showed intensified mobilisation adds no benefit |
FILE + HEADING: Rapid-Recall Discriminators table
CORRECTION: | Cannot lift limbs on day 10 of ventilation; symmetrical flaccid limb weakness, face relatively spared, reflexes reduced | **ICU-acquired weakness** — MRC sum score **<48/60** in a cooperative patient; **sensation is impaired in critical illness polyneuropathy and preserved in pure critical illness myopathy**, so it does not discriminate; **TEAM** (2022) showed intensified mobilisation adds no benefit and more adverse events |
SOURCE: Internal contradiction with §6.5 of the same document, which states "critical illness polyneuropathy (**axonal sensorimotor**)"; TEAM, NEJM 2022, https://www.thebottomline.org.uk/summaries/team/
SEVERITY: wrong
```
Taxonomy D — a Rapid-Recall row contradicting the prose it summarises. §6.5 says CIP is sensorimotor; the discriminator row asserts sensation is intact. A stem written on the row would be unanswerable from the prose.

### 9.
```
QUOTE: **Diagnosis (adult).** The Australian hospital template (**WACHS adult DKA guideline**) requires all three: glucose >11 mmol/L or known diabetes; **blood ketones ≥3.0 mmol/L**; venous **pH <7.35 or HCO₃⁻ <18 mmol/L**. The **2024 ADA/EASD/AACE/JBDS consensus** aligns and makes **direct β-hydroxybutyrate measurement** preferred, demoting the anion gap.
FILE + HEADING: §6.9 DKA and HHS as ICU problems
CORRECTION: **Diagnosis (adult).** The Australian hospital template (**WACHS adult DKA guideline**) requires all three: glucose >11 mmol/L or known diabetes; **blood ketones ≥3.0 mmol/L**; venous **pH <7.35 or HCO₃⁻ <18 mmol/L**. The **2024 ADA/EASD/AACE/JBDS consensus** uses the same glucose and ketone limbs but a **lower acidosis cut-off — pH <7.3 (not <7.35), or HCO₃⁻ <18 mmol/L, or both** — and accepts urine ketones ≥2+ as an alternative to β-hydroxybutyrate ≥3.0 mmol/L; it makes **direct β-hydroxybutyrate measurement** preferred, demoting the anion gap. **They do not align on pH — name your source when you quote a number.**
SOURCE: Umpierrez et al., Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (ADA/EASD/AACE/DTS/JBDS), Diabetes Care 2024;47:1257–1275, summarised at https://www.ccjm.org/content/ccjom/92/3/152.full.pdf ; WACHS Adult DKA Guideline, https://www.wacountry.health.wa.gov.au/~/media/WACHS/Documents/About-us/Policies/Adult-Diabetic-Ketoacidosis-Guideline.pdf
SEVERITY: wrong
```
The claim of alignment is the error, not either threshold. Both are correctly quoted; the assertion that they agree is false.

### 10.
```
QUOTE: **Resolution:** ketones <0.6 mmol/L **and** HCO₃⁻ ≥18 or pH ≥7.35; overlap subcutaneous rapid-acting insulin 30–60 min before stopping.
FILE + HEADING: §6.9 → Insulin (adult)
CORRECTION: **Resolution (2024 consensus):** β-hydroxybutyrate **<0.6 mmol/L** **and** venous **pH ≥7.3 or HCO₃⁻ ≥18 mmol/L**; overlap subcutaneous rapid-acting insulin 30–60 min before stopping the infusion.
SOURCE: 2024 ADA/EASD/AACE/JBDS consensus resolution criteria, https://www.ccjm.org/content/ccjom/92/3/152.full.pdf
SEVERITY: wrong
```
Same 7.35/7.3 slippage carried into the resolution criterion. Resolution defined at pH ≥7.35 keeps a patient on an insulin infusion after the guideline would stop it.

### 11.
```
QUOTE: - ICU-level care for pH <7.0, reduced GCS, K⁺ <3.5 or >6.0, instability, pregnancy, or where hourly nursing is unavailable on the ward.
FILE + HEADING: §6.9 → The short version
CORRECTION: - ICU/HDU-level care (WACHS adult DKA guideline) for severe ketoacidosis, **K⁺ <3.5 mmol/L on admission**, AKI with low urine output, **GCS <12**, haemodynamic instability, failure to respond to treatment, pregnancy, **age 16–25 years**, or where hourly nursing is unavailable on the ward.
SOURCE: WACHS Adult Diabetic Ketoacidosis Guideline, escalation criteria, https://www.wacountry.health.wa.gov.au/~/media/WACHS/Documents/About-us/Policies/Adult-Diabetic-Ketoacidosis-Guideline.pdf
SEVERITY: imprecise
```
"K⁺ >6.0" appears in neither WACHS nor the 2024 consensus escalation lists. More importantly the section drops **age 16–25 years**, which is exactly the adult–paediatric boundary that the same section's cerebral-oedema paragraph is trying to police — the young adult is the adult in whom the paediatric complication happens.

### 12.
```
QUOTE: **Determination of death (ANZICS Ed. 4, 2019).**
FILE + HEADING: §6.12 (also in the header Sources line, in the §6.12 short version, and in the final Sources list)
CORRECTION: **Determination of death (ANZICS *Statement on Death and Organ Donation*, Edition 4.1, 2021 — the current edition).**
SOURCE: DonateLife, ANZICS Statement on Death and Organ Donation Edition 4.1, https://www.donatelife.gov.au/media/anzics-statement-death-and-organ-donation-edition-41 ; cited as current in NSW Health GL2023_013 (2023), https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/GL2023_013.pdf
SEVERITY: imprecise
```
Taxonomy C. The clinical content the section quotes is unchanged between 4 and 4.1, so nothing downstream is wrong — but four separate citations name a superseded edition, and Australian death-determination criteria are the last place to cite the wrong edition.

### 13.
```
QUOTE: **Euglycaemic DKA and SGLT2 inhibitors.** ⚑ Australian source: the joint **ADS/ADEA/ANZCA/NZSSD alert (July 2022 update)**.
FILE + HEADING: §6.9 (also in the header Sources line and the final Sources list)
CORRECTION: **Euglycaemic DKA and SGLT2 inhibitors.** ⚑ Australian source: the joint **ADS/ADEA/ANZCA/NZSSD Alert Update, May 2023** (supersedes the July 2022 version; the periprocedural and diagnostic advice is unchanged).
SOURCE: ADS/ADEA/ANZCA/NZSSD, "Periprocedural Diabetic Ketoacidosis with SGLT2 Inhibitor Use in People with Diabetes — ALERT UPDATE May 2023", https://www.diabetessociety.com.au/wp-content/uploads/2023/05/ADS-ADEA-ANZCA-NZSSD_DKA_SGLT2i_Alert_Ver-May-2023.pdf
SEVERITY: imprecise
```
Everything the section attributes to this alert is **correct** and verified verbatim against the May 2023 text: presumptive euDKA as ketones >1.0 mmol/L **and** base excess < −5 mmol/L **and** glucose <14 mmol/L; omit SGLT2i "for at least 3 days (i.e. 2 days preprocedure, and the day of procedure)", same for bowel preparation; emergency surgery → postoperative admission to a ward able to manage DKA; insulin with added glucose infusion if BGL <15 mmol/L. Only the version label is stale.

### 14.
```
QUOTE: standard = discouraged unless K⁺ >6.0, pH <7.20 or HCO₃⁻ <12, fluid overload with respiratory compromise, or persistent AKI >72 h (only 61.8% then needed RRT).
FILE + HEADING: §6.2 → Timing — STARRT-AKI (NEJM 2020)
CORRECTION: standard = discouraged unless there was **persistent severe AKI (creatinine >50% above the randomisation value) plus at least one of**: **K⁺ ≥6.0 mmol/L**, **pH ≤7.20 or HCO₃⁻ ≤12 mmol/L**, fluid overload with respiratory compromise (PaO₂/FiO₂ ≤200), or AKI persisting **>72 h** from randomisation (only 61.8% of the standard arm then received RRT).
SOURCE: STARRT-AKI, NEJM 2020;383:240–251, protocol criteria as summarised at https://www.thebottomline.org.uk/summaries/icm/starrt-aki/
SEVERITY: imprecise
```
Three inequality signs flipped from inclusive to exclusive, and the mandatory persistent-severe-AKI precondition omitted. A candidate reproducing this would give the wrong potassium threshold in an SAQ.

### 15.
```
QUOTE: | 1 | 1.5–1.9× baseline, **or** absolute rise ≥26.5 µmol/L | <0.5 mL/kg/h for 6–12 h |
FILE + HEADING: §6.1 AKI in the critically ill — KDIGO staging table
CORRECTION: | 1 | 1.5–1.9× baseline (known or presumed within 7 d), **or** absolute rise ≥26.5 µmol/L **within 48 h** | <0.5 mL/kg/h for 6–12 h |
SOURCE: KDIGO 2012 Clinical Practice Guideline for AKI, Table 2, https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf (staging reproduced at https://qxmd.com/calculate/definition_17/kdigo-aki-staging)
SEVERITY: imprecise
```
The time windows are given correctly in "The short version" but dropped from the table — and the table is what a candidate will memorise. The stage 2, stage 3 and urine-output rows are all exactly correct as printed, including the <18 y eGFR limb and the "anuria ≥12 h" limb.

### 16.
```
QUOTE: 90-day mortality 29.1% vs 30.9%, not significant; VAP and *C. difficile* comparable.
FILE + HEADING: §6.8 Stress ulcer and VTE prophylaxis → REVISE
CORRECTION: 90-day mortality 29.1% vs 30.9% (HR 0.94, 95% CI 0.85–1.04), not significant; VAP identical (23.3% vs 23.8%); *C. difficile* **numerically higher on pantoprazole (1.2% vs 0.7%; HR 1.78, 95% CI 0.96–3.29)** — not significant, but not "comparable" either.
SOURCE: REVISE, NEJM 2024 (Stress Ulcer Prophylaxis during Invasive Mechanical Ventilation), figures at https://criticalcarereviews.com/foundational-trials/revise
SEVERITY: imprecise
```
Enrolment (4,821), bleeding (1.0% vs 3.5%) and HR 0.30 (0.19–0.47) all verified correct.

### 17.
```
QUOTE: - **AID-ICU (NEJM 2022):** haloperidol vs placebo — no difference in days alive and out of hospital at 90 d.
FILE + HEADING: §6.4 ICU delirium
CORRECTION: - **AID-ICU (NEJM 2022):** 1,000 patients, haloperidol 2.5 mg IV tds vs placebo — **no difference in the primary outcome**, days alive and out of hospital at 90 d (35.8 vs 32.9 d; adjusted difference 2.9 d, 95% CI −1.2 to 7.0). ⚑ 90-day **mortality was lower with haloperidol** (36.3% vs 43.3%; adjusted difference −6.9%, 95% CI −13 to −0.6) — a secondary outcome with more missing data than the fragility index, so hypothesis-generating only, but know it exists.
SOURCE: AID-ICU, NEJM 2022;387:2425–2435, figures at https://www.thebottomline.org.uk/summaries/aid-icu/
SEVERITY: imprecise
```
The Rapid-Recall row calls MIND-USA and AID-ICU "both negative", which is true of both primary outcomes but conceals the one result an examiner is most likely to probe.

### 18.
```
QUOTE: ⚑ **Australian regulatory point:** the Australian PI (Propofol-Lipuro, per ACSQHC medicine information) **contraindicates propofol for sedation in intensive care and for monitored conscious sedation in patients aged 16 years or younger**, a restriction arising from paediatric deaths.
FILE + HEADING: §6.3.1 Propofol infusion syndrome (PRIS)
CORRECTION: ⚑ **Australian regulatory point:** the **TGA-approved Australian PI** states (wording per Propofol Sandoz, §4.3) that propofol **"is contraindicated in children 16 years of age or younger for sedation during intensive care and for monitored conscious sedation for surgical and diagnostic procedures"** — a restriction arising from paediatric deaths. (The NZ Diprivan data sheet words its paediatric ICU contraindications differently — children under 3 years with serious viral respiratory tract infection, and children of any age with croup or epiglottitis — so quote the Australian PI, not the NZ one.)
SOURCE: Australian PI, Propofol Sandoz emulsion for injection, §4.3, https://www.nps.org.au/medicine-finder/propofol-sandoz-emulsion-for-injection ; NZ Medsafe Diprivan data sheet, https://www.medsafe.govt.nz/profs/datasheet/d/diprivaninj.pdf
SEVERITY: imprecise
```
**The substance of this claim is correct and now verified** — this was one of the flagged items and it survives. Only the attribution needs fixing: ACSQHC's medicine finder republishes the TGA-approved PI rather than issuing medicine information of its own, and the contraindication is present in the general Australian propofol PI, not specific to Propofol-Lipuro.

### 19.
```
QUOTE: **thiamine before or with the first carbohydrate load**; start low, advance slowly; replace electrolytes aggressively and continue feeding at a reduced rate rather than stopping.
FILE + HEADING: §6.6 Nutrition and refeeding syndrome → Adult approach
CORRECTION: **thiamine before or with the first carbohydrate load — Australian dosed guidance comes from the eating-disorder protocols: QuEDS 300 mg IM/IV 30 min before feeding and daily for 3 days, then 100 mg orally daily; NSW Health 100 mg orally bd for 3 days** (→ **Psychiatry §6.2**); in established ICU refeeding syndrome, restrict to the Doig protocol's **20 kcal/h for at least 2 days**, then 40 kcal/h for 24 h, 60 kcal/h for 24 h, 80% of goal, full goal by day 4, dropping back to 20 kcal/h if phosphate falls below 0.71 mmol/L; replace electrolytes aggressively and continue feeding at a reduced rate rather than stopping.
SOURCE: Doig et al., Lancet Respir Med 2015 (protocol detail at https://www.thebottomline.org.uk/summaries/icm/the-refeeding-syndrome-trial/); thiamine doses cross-checked against the same library's Psychiatry §6.2 table (QuEDS / NSW Health)
SEVERITY: imprecise
```
Cross-check against Psychiatry §6.2 requested in the brief: **no conflict** — §6.2 gives QuEDS 300 mg IV/IM and NSW 100 mg oral bd, and a "start low" energy prescription of 0.8–1.0 × BEE ≈ 1,000 kcal/day for high risk. The critical care section is not wrong, it simply gives no dose and no energy figure other than Doig's, so the two documents cannot be reconciled by a reader. The Doig trial details as printed in §6.6 are otherwise **exactly right**, verified figure by figure: 13 ANZ ICUs, 339 patients, phosphate <0.65 mmol/L within 72 h with a fall >0.16 mmol/L, 20 kcal/h for ≥2 days, 40/60/80% escalation, drop-back at 0.71 mmol/L, non-significant primary composite, 91% vs 79% alive at day 60 and 87% vs 79% at day 90.

### 20.
```
QUOTE: | Phosphate <0.65 mmol/L within 72 h of starting feed in a starved ICU patient | **Refeeding syndrome** — restrict calories (Doig, ANZ 2015), replace electrolytes, give thiamine |
FILE + HEADING: Rapid-Recall Discriminators table
CORRECTION: | Phosphate <0.65 mmol/L **with a fall of >0.16 mmol/L** within 72 h of starting feed in a starved ICU patient | **Refeeding syndrome** (Doig trial definition) — restrict to **20 kcal/h** (Doig, ANZ 2015), replace electrolytes, give thiamine |
SOURCE: Doig et al., Lancet Respir Med 2015, trial definition, https://www.thebottomline.org.uk/summaries/icm/the-refeeding-syndrome-trial/
SEVERITY: imprecise
```
Taxonomy D — the prose carries the >0.16 mmol/L fall requirement, the discriminator row drops it, so the row would label a chronically hypophosphataemic patient as refeeding syndrome.

### 21.
```
QUOTE: Pain by self-report or **BPS/CPOT**;; pre-emptive analgesia before turning and suctioning.
FILE + HEADING: §6.3 Sedation and analgesia — Assessment
CORRECTION: Pain by self-report or **BPS/CPOT**; pre-emptive analgesia before turning and suctioning.
SOURCE: n/a — typographical
SEVERITY: stylistic
```

---

## Verified correct

Checked against a live source and found accurate — do not change these.

**KDIGO and AKI (§6.1)**
- Stage 2 (2.0–2.9×), stage 3 (≥3.0×, SCr ≥353.6 µmol/L, commencing RRT, eGFR <35 mL/min/1.73 m² in <18 y only) and all three urine-output rows verified exactly against KDIGO 2012 Table 2.
- **The worked example is right in every step**: 190 ÷ 80 = 2.375× → stage 2; the 110 µmol/L absolute rise defines AKI but does not upgrade; 190 is below the 353.6 stage 3 limb; UO 0.3 mL/kg/h for 8 h satisfies "<0.5 for 6–12 h" = stage 1 only; 0.3 is not <0.3 and 8 h is not ≥24 h so stage 3 fails on both limbs; higher of the two axes = **stage 2**. I re-derived all of it independently.
- **Edition check is correct and current as at August 2026.** KDIGO 2012 remains the published guideline. The KDIGO 2026 AKI/AKD guideline went to public review in March 2026, review was extended to 11 May 2026, and it is **still unpublished** — kdigo.org's AKI page as fetched today still describes it as a draft under public review. The section is also right to label KDIGO as international-standard-adopted-in-Australia rather than Australian (taxonomy A handled correctly).
- Contrast: PRESERVE/AMACING position, the eGFR <30 risk concentration, and RANZCR Iodinated Contrast Media Guideline v2.3 as the current published Australian version — all confirmed.

**RRT (§6.2)**
- STARRT-AKI: mITT 2,927, accelerated = RRT within 12 h, 90-day mortality 43.9% vs 43.7% RR 1.00 (0.93–1.09), RRT dependence 10.4% vs 6.0% RR 1.74, more hypotension and hypophosphataemia, 61.8% of the standard arm ultimately dialysed. All exact. The section's headline reading — accelerated initiation gives no survival benefit and more dialysis dependence — is what the trial showed, and the section does **not** overstate it.
- "No absolute creatinine or urea number triggers RRT"; KDIGO 2012's trend-and-context framing; the statement that urea >30 or creatinine >400 as automatic triggers is out of date — correct and correctly attributed.
- RENAL 40 vs 25 mL/kg/h with ~25 mL/kg/h as the effluent dose; KDIGO 2012 grade **2B** suggestion for regional citrate over heparin; post-filter iCa <0.35 mmol/L; total:ionised Ca ≥2.5 as the citrate-accumulation marker — all correct.

**Sedation and PRIS (§6.3)**
- SPICE III: 4,000 patients, 90-day mortality 29.1% in both arms, bradycardia 5.1% vs 0.5%, most patients still needing propofol — exact.
- RASS −5 to +4, target 0 to −2, BPS/CPOT, deep early sedation predicting worse outcomes; SLEAP 2012 as the basis for "where sedation is already protocolised and light, DSI adds nothing further"; the DSI contraindication list — all sound.
- PRIS mechanism, recognition features (HAGMA, rhabdomyolysis, hyperkalaemia, AKI, lipaemia, bradyarrhythmia/Brugada-like ECG), risk factors (young age, neurological injury, sepsis, catecholamines, glucocorticoids, low carbohydrate intake, mitochondrial disease) and management (stop propofol, RRT, pacing, ECMO, carbohydrate, TGA report) — all consistent with both the Australian PI and the PCH monograph. The PCH triad **>4 mg/kg/h, cumulative >240 mg/kg, >48 h** and its paediatric scope are quoted verbatim-accurate.

**Delirium (§6.4)**
- CAM-ICU (arousal via RASS ≥ −3 first; RASS −4/−5 = unable to assess) and ICDSC (8 items, ≥4) as the tools used; the ABCDEF bundle content and its dose–response implementation data; MIND-USA 566 patients with 8.5 / 7.9 / 8.7 days alive without delirium or coma and no difference in ventilation, ICU stay or mortality; BRAIN-ICU's long-term cognitive findings; DahLIA as the ANZ agitated-delirium-preventing-extubation niche — all verified.

**ICU-AW, nutrition, glycaemic control (§6.5–6.7)**
- TEAM: 750 patients, 20.8 vs 8.8 min/day, days alive and out of hospital 143 vs 145 (difference −2.0, 95% CI −10 to 6), adverse events 9.2% vs 4.1% OR 2.55 — exact.
- TARGET: ~4,000 patients (3,957 randomised), 46 ICUs in Australia and NZ, 1.5 vs 1.0 kcal/mL at the same volume, 90-day mortality 26.8% vs 25.7% — exact. Propofol at 1.1 kcal/mL as a non-nutritional calorie source is right.
- **NICE-SUGAR verified in full, including the Australian-led claim**: 6,104 adults, intensive 4.5–6.0 mmol/L (81–108 mg/dL) vs conventional <10.0 mmol/L (180 mg/dL), 90-day mortality 27.5% vs 24.9%, OR **1.14 (95% CI 1.02–1.29), p = 0.02**, severe hypoglycaemia 6.8% vs 0.5%, and **87.5% of patients recruited in Australia and New Zealand** with 12.5% in North America. The intervention and control arms are stated the right way round.

**Prophylaxis and HAI (§6.8, §6.10)**
- PEPTIC: ~26,800 patients (26,828), cluster crossover across Australian, NZ, English, Canadian and Irish ICUs, in-hospital mortality 18.3% vs 17.5% — exact, and the "two trials answer different questions" framing is right.
- CLOTS: graduated stockings after stroke gave no DVT reduction (10.0% vs 10.5%) and significantly more skin trauma (5% vs 1%) — "showed harm" is fair.
- ACSQHC VTE Prevention Clinical Care Standard (2020) is still the current version. The ANZICS **CLABSI registry** exists as described (anzics.com.au). Chlorhexidine mouthwash falling out of favour is supported by current network meta-analyses.

**Transfer (§6.11)**
- IC-10 / PG52 confirmed as the **joint ACEM/ANZCA/CICM guideline, 2025**. Continuous waveform capnography is indeed **mandatory** for all ventilated and/or sedated patients; stabilise-before-transport is stated as fundamental with the single exception of stabilisation only being possible at the receiving facility; oxygen is to be calculated with a margin (the guideline specifies a 50–100% buffer for oxygen, which the section could add); formal handover at each interface is required.

**Death determination (§6.12)**
- **The SBP ≥90 mmHg or MAP ≥60 mmHg precondition is correct.** So is every other precondition as printed: core temperature ≥35 °C, no significant sedative or NMBA effect, sodium 125–160 mmol/L, glucose 3–25 mmol/L, magnesium and phosphate ≥0.5 mmol/L, urea <40 mmol/L, testable eyes/ears/cranial nerves and ability to perform apnoea testing.
- 4 h minimum unresponsive coma before clinical testing; **24 h** delay after hypoxic-ischaemic injury and after rewarming from hypothermia; **two** medical practitioners independent of the transplant team with at least one a specialist and jurisdictional requirements varying; apnoea endpoint **PaCO₂ >60 mmHg (8 kPa) with arterial pH <7.30**; ancillary testing indications; **5 minutes** of absent circulation (absent arterial pulsatility, or asystole on ECG where no arterial line) for DCD — all verified.
- Definitional handling is clean (taxonomy E): brain death vs circulatory death are kept distinct, withholding/withdrawing equivalence is correctly stated, the "futile → non-beneficial / potentially inappropriate" shift is real Australian policy language, double effect is correctly separated from voluntary assisted dying, and donation is correctly described as decoupled from the end-of-life decision and requested by a trained requester via DonateLife.

**Rapid-Recall table** — every other row checked against its prose and found consistent, including the KDIGO stage 2 row, the stage 3 urine-output row with its "exactly 0.3 does not qualify" note, the <18 y eGFR row, STARRT-AKI, dialysis disequilibrium vs citrate accumulation, PRIS, the propofol 16-years contraindication, NICE-SUGAR, REVISE, the DKA K⁺ 3.2 row, the euDKA row (BGL 9, ketones 4, BE −12 satisfies the ADS criteria exactly), and both brain-death rows.

---

## Could not verify — and what blocked me

1. **"SA Health VAP principles"** (§6.10 and Sources). I could not locate an SA Health ventilator-associated pneumonia prevention bundle document to confirm the attribution, the head-of-bed 30–45°, or the cuff pressure 20–30 cmH₂O as *Australian state* guidance. The bundle content is standard and matches the ISID 2024 position paper, but the Australian attribution is unverified — treat the `⚑` on this as an open claim (taxonomy H). Blocked/absent: sahealth.sa.gov.au returned no matching guideline via search.
2. **Therapeutic Guidelines position on *C. difficile* treatment** (§6.10: "oral vancomycin or fidaxomicin, not metronidazole (Therapeutic Guidelines)"). Therapeutic Guidelines proper is paywalled/blocked as advised. The relevant Australasian authority has moved on: **ASID published updated CDI guidelines for Australia and New Zealand in 2025** (Longhitano et al., *Internal Medicine Journal*), which is the citation this line should carry — but **onlinelibrary.wiley.com returned HTTP 403**, so I could not confirm whether ASID 2025 retains metronidazole for a first non-severe episode. Recommend re-checking before treating the "not metronidazole" claim as settled.
3. **Australian PI full text via TGA eBS** — the TGA eBS PI search interface is not directly fetchable; I used the TGA-approved PI as republished by NPS MedicineWise (Propofol Sandoz), which carries the §4.3 and §4.2 text verbatim. **safetyandquality.gov.au (ACSQHC) and nps.org.au/medical-info both returned ROBOTS_DISALLOWED** on the Propofol-Lipuro pages specifically, so I could not confirm whether the Propofol-Lipuro Australian PI words the 16-years contraindication identically to Propofol Sandoz.
4. **ANZICS Statement PDF direct** — `anzics.org/wp-content/.../ANZICS-Statement-on-Death-and-Organ-Donation-Edition-4.pdf` returned ROBOTS_DISALLOWED. I verified the preconditions, observation periods, examiner requirements, apnoea endpoints, DCD interval and paediatric rules through the ANZICS statement app content page on anzics.com.au, Deranged Physiology's transcription of the statement, and NSW Health GL2023_013. All three agree; the Edition 4.1 PDF itself was not read line by line.
5. **pmc.ncbi.nlm.nih.gov, pubmed.ncbi.nlm.nih.gov, jamanetwork.com and ajkd.org** all returned reCAPTCHA challenge pages or 403s. Trial figures were therefore verified through NEJM/JAMA-derived summary sites (The Bottom Line, Critical Care Reviews, Wiki Journal Club, ICU Reach), cross-checked against each other wherever the numbers mattered — which is how the RICH enrolment error was caught.
6. **WACHS "senior discussion above ~15 units/h" insulin escalation** (§6.9) — not present in the sections of the WACHS guideline I could extract. Plausible and low-risk, but unconfirmed.
