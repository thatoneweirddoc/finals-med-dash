# Adversarial verification — Psychiatry §6 and §7 (v5)

Files reviewed in full:
- `/tmp/fmd/sources/psy/06-eating-personality-and-child-adolescent.md`
- `/tmp/fmd/sources/psy/07-treatments-law-and-services.md`

Every factual check below was made against a live Australian source fetched during this review. Nothing was verified from memory.

---

## FINDINGS

### 1. Adult eating-disorder admission table is QuEDS only, but is labelled "NSW Health / QuEDS" — NSW's figures are materially different and more conservative

```
QUOTE: | Domain | Adult (NSW Health / QuEDS) | Paediatric (RCH) |
FILE + HEADING: 06 §6.1 Anorexia nervosa — "Medical admission criteria"
CORRECTION: | Domain | Adult — QuEDS (Qld) medical-admission | Adult — NSW Health (2014) | Paediatric (RCH) |
SOURCE: NSW Health, Guidelines for the Inpatient Management of Adult Eating Disorders in General Medical and Psychiatric Settings in NSW (2014), Table 2 — https://www.health.nsw.gov.au/mentalhealth/resources/Publications/inpatient-adult-eating-disorders.pdf ; Queensland Health/QuEDS, A Guide to Admission and Inpatient Treatment for People with Eating Disorders in Queensland — https://metronorth.health.qld.gov.au/rbwh/wp-content/uploads/sites/2/2017/07/guide-to-admission-and-inpatient-treatment-eating-disorder.pdf
SEVERITY: dangerous
```

Every numeric row in the "adult" column is the QuEDS **medical**-admission figure. NSW Health's own thresholds, fetched from the NSW guideline's Table 2, are:

| Domain | Note says (as "NSW Health / QuEDS") | QuEDS actual | **NSW Health actual** |
|---|---|---|---|
| Heart rate | <40 or >120 | ≤40 or >120 | **<40 or >110** |
| Postural HR rise | >20 | >20 | **>10** |
| Systolic BP | <80 | <80 | **<90** |
| Postural BP drop | >20 mmHg | >20 | **>10 mmHg** |
| K⁺ | <3.0 (QuEDS <3.5) | **<3.5** | **<3.5** |
| Na⁺ | <125 | <125 | **<130** |
| Glucose | <2.5–3.0 | <3.0 | **<3.5** |
| BMI | <12–14 | <12 medical, 12–14 psychiatric | **<16** |
| Neutrophils | <0.7 | <0.7 | **<2.0** |
| Phosphate | <0.75–0.8 | <0.75 | <0.8 |
| Magnesium | <0.7 | <0.7 | 0.7–1.0 |
| Temperature | <35–35.5 °C | <35.5 °C | <35.5 °C |

The §6.1 flag "⚑ Figures **differ between states** — know the shape of the list, quote one set and say whose" is correct advice that the table itself then breaks by fusing two states under one heading.

### 2. Adult potassium threshold given is the paediatric figure

```
QUOTE: | K⁺ / Na⁺ | **<3.0** (QuEDS <3.5) / **<125** | **<3.0** / **<130** |
FILE + HEADING: 06 §6.1 — "Medical admission criteria" table
CORRECTION: | K⁺ / Na⁺ | **<3.5** (both NSW and QuEDS) / **<125** QuEDS, **<130** NSW | **<3.0** / **<130** |
SOURCE: NSW Health inpatient adult ED guideline (2014) Table 2 — "Potassium Below normal range (<3.5 mmol/L)"; QuEDS guide — "Potassium Below normal range (<3.5 mmol/L)"; RCH Melbourne, Management of Eating Disorders in the Emergency Department (current) — potassium <3.0 — https://www.rch.org.au/clinicalguide/guideline_index/Management_of_Eating_Disorders_in_the_Emergency_Department/
SEVERITY: dangerous
```

<3.0 mmol/L is the **RCH paediatric** red flag. Neither Australian adult guideline uses 3.0; both use "below the normal range (<3.5)". Quoting 3.0 for an adult raises the admission bar by a whole 0.5 mmol/L and the parenthetical "(QuEDS <3.5)" inverts which source says what — this is the exact adult/paediatric transposition the taxonomy warns about.

### 3. Paediatric postural heart-rate rise is wrong

```
QUOTE: | Postural HR rise | **>20** | **>35–50** |
FILE + HEADING: 06 §6.1 — "Medical admission criteria" table, "Paediatric (RCH)" column
CORRECTION: | Postural HR rise | **>20** (QuEDS) / **>10** (NSW Health) | **>50** |
SOURCE: RCH Melbourne, Management of Eating Disorders in the Emergency Department (current), red-flag table — "Increase in postural HR of >50 bpm" — https://www.rch.org.au/clinicalguide/guideline_index/Management_of_Eating_Disorders_in_the_Emergency_Department/
SEVERITY: wrong
```

The column is explicitly attributed to RCH; RCH gives a single figure, >50 bpm. "35–50" is not an RCH number.

### 4. Adult temperature range imports a non-Australian lower bound

```
QUOTE: | Temperature | **<35–35.5 °C**, cold/blue peripheries | **<35.5 °C** |
FILE + HEADING: 06 §6.1 — "Medical admission criteria" table
CORRECTION: | Temperature | **<35.5 °C** (QuEDS medical; <36.0 °C psychiatric admission) and NSW Health **<35.5 °C**; cold/blue peripheries | **<35.5 °C** |
SOURCE: NSW Health inpatient adult ED guideline (2014) Table 2; QuEDS guide, physical observation thresholds
SEVERITY: imprecise
```

Both Australian adult guidelines give 35.5 °C. 35 °C is the MARSIPAN/UK figure. The Rapid-Recall row repeats "<35–35.5 °C" and needs the same fix.

### 5. Refeeding blood-monitoring schedule omits the second-daily step

```
QUOTE: | **Bloods** | **EUC, CMP (PO₄, Mg, Ca), LFT, glucose daily for 7–10 days**, then twice weekly on weigh days; continue ≥2 weeks |
FILE + HEADING: 06 §6.2 Refeeding syndrome — "Australian practice (QuEDS/NSW)" table
CORRECTION: | **Bloods** | **EUC, CMP (PO₄, Mg, Ca), LFT, glucose daily for the first 7–10 days, then second daily until goal energy intake is reached, then twice weekly on weigh days from about week 3** |
SOURCE: QuEDS guide — "Daily for at least the first 7–10 days", then "Second daily", "By week 3, Twice weekly on weigh days"; NSW Health guideline — daily first week "then second daily until goal energy intake is reached"
SEVERITY: imprecise
```

Jumping from daily to twice-weekly skips the period of highest escalation risk. The Rapid-Recall table does not repeat this, so no second edit needed.

### 6. MBS eating-disorder plan review structure understates who must do the 20-session review

```
QUOTE: with **review at sessions 10, 20 and 30**
FILE + HEADING: 06 §6.4 Management of eating disorders — "Medicare"
CORRECTION: with reviews required before exceeding 10, 20 and 30 psychological services — the review before session 21 requires **two** reviews, one by the GP/managing practitioner and one by a **psychiatrist or paediatrician**
SOURCE: MBS Online, Explanatory Note MN.16.1 (Eating Disorder Treatment and Management Plans) — https://www9.health.gov.au/mbs/fullDisplay.cfm?type=note&qt=NoteID&q=MN.16.1
SEVERITY: imprecise
```

The specialist review requirement at the 20-session gate is the examinable detail. The Rapid-Recall row "reviewed at sessions 10, 20 and 30" carries the same gap.

### 7. Autism national guideline citation is the superseded edition

```
QUOTE: per the **National Guideline for the Assessment and Diagnosis of Autism in Australia (2018)**
FILE + HEADING: 06 §6.7 — "Autism spectrum disorder"
CORRECTION: per the **National Guideline for the Assessment and Diagnosis of Autism in Australia, 2nd edition (Autism CRC, 2023)**
SOURCE: Autism CRC, National Guideline for the assessment and diagnosis of autism in Australia — "The second edition is an update of the original Guideline… combines new evidence and perspectives with those from the 2018 Guideline" — https://www.autismcrc.com.au/best-practice/assessment-and-diagnosis/guideline
SEVERITY: wrong
```

Also correct the Sources block line (`Autism CRC, ... (2018)` → 2nd ed. 2023). Related imprecision in the same paragraph: the guideline does **not** mandate ADOS-2/ADI-R, and does not require a multidisciplinary team in every case — it makes recommendations about the roles of different professionals at different stages, with DSM-5 or ICD-11 as the diagnostic reference. Soften "Assessment is multidisciplinary and observational (developmental history plus ADOS-2/ADI-R)" to "developmental history plus structured observation; standardised tools such as ADOS-2/ADI-R are commonly used but are not mandated, and a single suitably qualified clinician may diagnose in clear-cut cases."

### 8. "Reviewed weekly for four weeks" after starting fluoxetine in under-18s is the UK convention, not the Australian one

```
QUOTE: ⚑ **fluoxetine is the SSRI of choice under 18**, started low and **reviewed weekly for four weeks** for activation
FILE + HEADING: 06 §6.7 — "Childhood depression and self-harm"
CORRECTION: ⚑ **fluoxetine is the SSRI of choice under 18**, started low, with **review at least fortnightly through the initial phase** and explicit monitoring for behavioural activation and emergent suicidality **over the first 4 weeks**
SOURCE: Wallis KA / Hazell P, "Antidepressants in adolescence", Aust Prescr — "In the initial phase, the adolescent should be reviewed at least every two weeks… Emphasis in the early weeks will be on the detection of serious adverse effects such as behavioural activation, and emergent or increasing suicidality" — https://australianprescriber.tg.org.au/articles/antidepressants-in-adolescence.html ; headspace, Using SSRI antidepressants and other medications (v2) — "close monitoring… especially in the first 4 weeks" without a weekly interval — https://headspace.org.au/assets/Uploads/Resource-library/Health-professionals/ssri-v2-pdf.pdf
SEVERITY: imprecise
```

Weekly review for four weeks is the NICE prescription. The Australian sources specify a 4-week window of heightened vigilance but a fortnightly minimum review interval. The Rapid-Recall row "⚑ **fluoxetine**, **weekly review for 4 weeks**" needs the same change.

### 9. ADHD monitoring intervals are the paediatric recommendations, presented unlabelled

```
QUOTE: monitor **height 6-monthly**, **weight at 3 and 6 months then 6-monthly**, **HR and BP before each dose change and 6-monthly**
FILE + HEADING: 06 §6.7 — "Management (AADPA 2022)"
CORRECTION: **in children**, monitor **height 6-monthly** and **weight at 3 and 6 months after starting then 6-monthly**; **in all ages**, HR and BP **before and after each dose change and 6-monthly**
SOURCE: AADPA, Australian Evidence-Based Clinical Practice Guideline for ADHD, Summary of Recommendations, recs 5.7.6–5.7.7 — "measure height every 6 months" and "measure weight 3 and 6 months after starting treatment and 6 months thereafter" (children); heart rate and blood pressure "before and after each dose change and every 6 months" — https://adhdguideline.aadpa.com.au/wp-content/uploads/2022/10/ADHD-Clinical-Practice-Guide-Summary-of-Recommendations-031022.pdf
SEVERITY: imprecise
```

Height and weight monitoring recommendations are paediatric; the note reads as if all four apply to everyone. Also note the AADPA text is "before **and after** each dose change", not "before each dose change".

### 10. State stimulant-prescribing reform is stated too loosely for 2026

```
QUOTE: through 2025–26 NSW, Queensland, WA and ACT opened pathways for **trained GPs to continue and sometimes initiate**
FILE + HEADING: 06 §6.7 — "Management (AADPA 2022)"
CORRECTION: through 2025–26 several jurisdictions opened GP pathways: **NSW** trained GPs may continue existing scripts from 1 September 2025, with diagnosis/initiation training commencing March 2026; **Queensland** specialist GPs may initiate, modify and continue for **adults** from 1 December 2025; **WA** and **ACT** have GP continuation pathways with initiation phasing in. Victoria, SA, Tasmania and NT remain continuation-only under state authority.
SOURCE: NSW Health news release, 11 February 2026 — "From next month, GPs can begin training to diagnose ADHD"; 1 September 2025 for repeat prescriptions — https://www.health.nsw.gov.au/news/Pages/20260211_00.aspx ; Queensland Health, Prescribing ADHD medicines — from 1 December 2025 specialist GPs may "initiate, modify, and continue psychostimulants for adults" — https://www.health.qld.gov.au/clinical-practice/guidelines-procedures/medicines/monitored-medicines/prescribing/adhd-psychostimulants
SEVERITY: imprecise
```

"Sometimes initiate" is unsafe in an exam answer where a stem will specify the state and the patient's age — Queensland's initiation right is adults-only.

---

### 11. Antipsychotic metabolic monitoring schedule in §7.2 is wrong (ADJUDICATION 2)

```
QUOTE: Metabolic screen at baseline, 3 months, then annually.
FILE + HEADING: 07 §7.2 Psychopharmacology overview — "Antipsychotics"
CORRECTION: Metabolic screen at **baseline, 3, 6 and 12 months, then 6-monthly**, with **weight weekly to fortnightly for the first 6–8 weeks** after starting or changing an antipsychotic (weight and waist also at 9 months).
SOURCE: Adult Positive Cardiometabolic Health Resource (Australian adaptation, Mindgardens/Keeping the Body in Mind, 2023) — weight "Baseline Weekly* 3 months 6 months 9 months 12 months Continue 6 monthly"; BP, glucose/HbA1c and lipids "Baseline Weekly* 3 months 6 months 12 months"; "*Weight should be assessed weekly to fortnightly in the first 6–8 weeks following initiation or change of medication" — https://www.mindgardens.org.au/wp-content/uploads/2023/07/Adult-Positive-Cardiometabolic-Health-Resource-KBIM-Resources-2023.pdf
SEVERITY: dangerous
```

**Adjudication of the three-way conflict: §1.7 is correct.** §7.2 ("baseline, 3 months, then annually") is the sparsest and is wrong — it omits the 6- and 12-month checks and the early weight monitoring during the highest-risk window. §4.5 ("baseline, ~6 weeks, 3 months, then at least annually") is also not the Australian schedule; the 6-week point is a weight-only checkpoint, not a full metabolic screen, and annual review is too infrequent for the first year. Bring §7.2 and §4.5 into line with §1.7. (Australian Prescriber's *Managing the metabolic adverse effects of antipsychotic drugs* independently supports "every three months during the first year and every six months after that" — https://australianprescriber.tg.org.au/articles/managing-the-metabolic-adverse-effects-of-antipsychotic-drugs-in-patients-with-psychosis.html)

### 12. NMS temperature threshold overstated (ADJUDICATION 3)

```
QUOTE: | **Temperature** | Moderate ↑ | **Marked ↑, often >40 °C** | ↑ |
FILE + HEADING: 07 §7.2 — serotonin toxicity / NMS / anticholinergic comparison table
CORRECTION: | **Temperature** | Moderate ↑ (usually <38.5 °C) | **↑ — diagnostic threshold >38.0 °C on at least 2 occasions; frequently >38.5 °C and may exceed 40 °C** | ↑ |
SOURCE: Gurrera RJ et al., An International Consensus Study of Neuroleptic Malignant Syndrome Diagnostic Criteria Using the Delphi Method, J Clin Psychiatry 2011 — "hyperthermia, >100.4 °F or >38.0 °C on at least 2 occasions" — https://www.psychiatrist.com/jcp/international-consensus-study-neuroleptic-malignant/ ; Isbister GK et al., "The hot patient: acute drug-induced hyperthermia", Aust Prescr 2019;42:24–8 (drug-induced hyperthermia defined at core temp ≥38.3 °C; no syndrome-specific threshold given) — https://australianprescriber.tg.org.au/articles/the-hot-patient-acute-drug-induced-hyperthermia.html
SEVERITY: wrong
```

**Adjudication: §4.7 is closer and should be adopted, with the criterion stated explicitly.** ">40 °C" is a severe-case figure, not the definition; a vignette with a rigid patient at 38.7 °C is still NMS, and §7.2 as written invites the candidate to exclude it. The Rapid-Recall row "Days, lead-pipe rigidity, hyporeflexia, CK 12,000, 40 °C — NMS" can stand as a *typical severe* vignette but should not be read back as a threshold.

### 13. Antidepressant discontinuation duration and taper advice are superseded (ADJUDICATION 6)

```
QUOTE: Onset **1–4 days** after stopping or a large cut, lasting 1–3 weeks: … Taper over **≥4 weeks**.
FILE + HEADING: 07 §7.2 — "Discontinuation syndromes"
CORRECTION: Onset usually **within hours to a few days** of a dose reduction or stop (delayed with fluoxetine). Duration is **highly variable — often days to a few weeks after short-term use, but can be severe and protracted (months) after long-term treatment**. Taper **gradually — 2–4 weeks may suffice after short courses, but after long-term use taper over months, using hyperbolic (proportional) dose reductions** for high-risk drugs (paroxetine, venlafaxine, duloxetine).
SOURCE: Wallis KA, "Stopping antidepressants: when and how", Aust Prescr 2026;49:99–103, doi 10.18773/austprescr.2026.019 — withdrawal "often within a day or 2"; "with longer-term therapy withdrawal symptoms can sometimes be severe and protracted"; 25–50% reductions over 2–6 weeks for low-risk patients, "smaller dose reductions over many weeks or months" for higher-risk — https://australianprescriber.tg.org.au/articles/stopping-antidepressants-when-and-how.html ; CATAG, Antidepressant withdrawal practice tool (Winter 2025) — duration "ranges from days to months to years"; tapering over months, no increased relapse when extended up to 6 months — https://catag.org.au/wp-content/uploads/CATAG-Topic_Antidepressants_Practice-Tool_F.pdf
SEVERITY: wrong
```

**Adjudication: neither §7.2 nor §2.3 is right.** §7.2's "1–3 weeks" and §2.3's "brief (1–2 weeks)" both encode the pre-2023 teaching that the current Australian sources explicitly reject. Fix both, and fix the Rapid-Recall row "taper ≥4 weeks".

### 14. NSW does not guarantee a second psychiatric opinion

```
QUOTE: ⚑ Both Acts require a **statement of rights** to be given and explained, and guarantee a **second psychiatric opinion**, representation and free communication.
FILE + HEADING: 07 §7.5 Mental health legislation — "The short version"
CORRECTION: ⚑ Both Acts require a **statement of rights** to be given and explained, and guarantee representation and free communication. ⚑ A **statutory patient-initiated right to a second psychiatric opinion** exists in **Victoria** (and the ACT, Qld and WA) but **not in NSW**, where a second opinion is a matter of clinical courtesy rather than legislation.
SOURCE: Callaghan S, Ryan C et al., "Do compulsory mental health patients have a right to receive a second opinion on their treatment under Australian mental health legislation?" — NSW has "no formal legislative provision" for patient-initiated second opinions; Victoria, ACT, Qld and WA do — https://pmc.ncbi.nlm.nih.gov/articles/PMC11497731/ ; Victorian Department of Health, Mental Health and Wellbeing Act handbook, "Second psychiatric opinions" — https://www.health.vic.gov.au/mental-health-and-wellbeing-act-handbook/second-psychiatric-opinions
SEVERITY: wrong
```

This is a NSW/Vic divergence stated as a commonality — exactly the class of error a two-state comparison question is built to catch.

### 15. Better Access: MHTP **preparation** items were not abolished on 1 November 2025

```
QUOTE: ⚑ **From 1 November 2025 plan preparation and review moved into time-tiered general attendance items**, letting the GP address physical and mental health in one consultation; **session caps unchanged**.
FILE + HEADING: 07 §7.8 Services and access — "Primary care and funding"
CORRECTION: ⚑ **From 1 November 2025 the MHTP review items (2712 and equivalents) and ongoing mental health consultation items (2713 and equivalents) were removed** — GPs now use **time-tiered general attendance items** to review, refer and provide ongoing mental health care, letting physical and mental health be addressed in one consultation. **Dedicated MHTP preparation items remain**, and are now tied to the patient's MyMedicare-registered practice or usual medical practitioner. **Session caps unchanged.**
SOURCE: MBS Online, "MBS changes to the Better Access Initiative" (1 November 2025) — items removed: "2712, 92114, 92126, 277, 92120, 92132 and… 2713, 92115, 92127, 279, 92121, 92133"; GPs "use time-tiered professional (general) attendance items to review, refer and/or provide ongoing mental health consultation" — https://www.mbsonline.gov.au/internet/mbsonline/publishing.nsf/650f3eec0dfb990fca25692100069854/a6bbccd4e1519234ca258d0f00120c7e/$FILE/PDF%20Version%20-%20MBS%20changes%20to%20the%20Better%20Access%20Initiative.pdf ; Department of Health FAQ (Nov 2025) — GPs use "dedicated Medicare Benefit Schedule (MBS) item numbers" to prepare a new MHTP — https://www.health.gov.au/sites/default/files/2025-11/frequently-asked-questions-better-access-to-psychiatrists-psychologists-and-general-practitioners-through-the-mbs-initiative.pdf
SEVERITY: wrong
```

The note as written implies there is no longer a dedicated MHTP item, which is the opposite of the change actually made.

### 16. Wrong Carer Recognition Act cited for state mental health services

```
QUOTE: Carers have a recognised right to involvement in **care and discharge planning** (*Carer Recognition Act 2010* (Cth)).
FILE + HEADING: 07 §7.7 Confidentiality and its limits — "Family and carers"
CORRECTION: Carers' involvement in assessment, care and discharge planning is recognised in **state carers legislation** — the *Carers (Recognition) Act 2010* (NSW) (NSW Carers Charter, principle "carers are partners in care") and the *Carers Recognition Act 2012* (Vic) — and, operatively, in the carer-notification and consultation provisions of each mental health Act. The Commonwealth *Carer Recognition Act 2010* binds Australian Public Service agencies and Commonwealth-funded providers, not state health services, and creates no enforceable individual right.
SOURCE: Carers NSW, NSW Carers (Recognition) Act 2010 — Carers Charter principle 4: "The choices, views and needs of carers and of the people they care for should be taken into account in the assessment, planning, delivery and review of services" — https://www.carersnsw.org.au/about-caring/nsw-carers-recognition-act-2010 ; DSS, Carer Recognition Act 2010 Guidelines — assists "Australian Public Service Agencies and Commonwealth Government funded providers" — https://www.dss.gov.au/our-responsibilities/disability-and-carers/publications-articles/carer-recognition-act-2010-guidelines
SEVERITY: imprecise
```

The near-identical NSW and Commonwealth Act titles make this an easy trap; the Cth Act is the wrong instrument for a NSW inpatient unit. Also update the Sources block line citing the Cth Act.

### 17. The Fifth Plan is no longer the operative national framework

```
QUOTE: Reducing and where possible **eliminating** restrictive practice is national policy under the **Fifth National Mental Health and Suicide Prevention Plan** and NSQHS standards
FILE + HEADING: 07 §7.6 Seclusion, restraint and acute behavioural disturbance — "Governance"
CORRECTION: Reducing and where possible **eliminating** restrictive practice is national policy under the **National Mental Health and Suicide Prevention Agreement (in effect March 2022)**, carrying forward the safety priorities of the Fifth National Mental Health and Suicide Prevention Plan (2017–2022), and under the NSQHS Standards
SOURCE: AIHW, Policies and strategies (mental health) — the Fifth Plan covered 2017–2022; the National Mental Health and Suicide Prevention Agreement "came into effect in March 2022 and was signed by the Australian Government and all states and territory governments" — https://www.aihw.gov.au/reports-data/imhspc/policies-and-strategies
SEVERITY: imprecise
```

The same substitution is needed in §7.8 ("the **national plan's** stated framework" → "the National Mental Health and Suicide Prevention Agreement and the National Mental Health Strategy") and in the Sources block.

### 18. ECT mortality figure is up to five-fold too high at the pessimistic end

```
QUOTE: Mortality is that of a brief GA (~1 in 10,000–80,000 treatments).
FILE + HEADING: 07 §7.3 ECT — "Side effects by time course"
CORRECTION: Mortality is that of a brief GA — approximately **2.1 deaths per 100,000 treatments (~1 in 50,000)**.
SOURCE: Tørring N et al., The mortality rate of electroconvulsive therapy: a systematic review and pooled analysis, Acta Psychiatr Scand 2017;135:388–97, as summarised against the RANZCP guideline — "Mortality is estimated at 2.1 per 100 000 treatments" — https://psychscenehub.com/psychinsights/electroconvulsive-therapy-summary-of-ranzcp-guidelines/ ; RANZCP, Professional practice guidelines for the administration of ECT, ANZJP 2019
SEVERITY: imprecise
```

1 in 10,000 = 10 per 100,000, roughly five times the pooled modern estimate.

### 19. Rapid-Recall drops the operative limb of the Victorian inpatient assessment order

```
QUOTE: | Victorian assessment, temporary treatment and treatment orders | **24 h community / 72 h inpatient**; **28 days**; **6 months adult, 3 months under 18** — the last by the **Tribunal only** |
FILE + HEADING: 07 Rapid-Recall Discriminators
CORRECTION: | Victorian assessment, temporary treatment and treatment orders | Assessment order: **community 24 h; inpatient — the earlier of 24 h from arrival at the service or 72 h from the order being made**, extendable twice by 24 h; TTO **28 days** (authorised psychiatrist); treatment order **6 months adult, 3 months under 18** — the last by the **Tribunal only** |
SOURCE: Victorian Department of Health, Mental Health and Wellbeing Act handbook, "Assessment orders" — inpatient assessment order expires "on the earlier of: 24 hours after the person is received at a designated mental health service; or 72 hours after the order is made"; "An assessment order may be extended twice… for a period of up to 24 hours" — https://www.health.vic.gov.au/mental-health-and-wellbeing-act-handbook/treatments-and-interventions/assessment-orders
SEVERITY: imprecise
```

The prose in §7.5 is correct; the Rapid-Recall row compresses it into the wrong-in-practice figure (a patient who arrives promptly is covered for 24 h, not 72 h).

### 20. IM olanzapine / parenteral benzodiazepine warning is directional, not symmetrical

```
QUOTE: ⚑ **Do not give IM olanzapine and a parenteral benzodiazepine within 1 hour of each other** — cardiorespiratory depression and deaths.
FILE + HEADING: 07 §7.6 — "The short version"
CORRECTION: ⚑ **Do not give a parenteral benzodiazepine within 1 hour of IM olanzapine** — excessive sedation, cardiorespiratory depression and, rarely, death. If a parenteral benzodiazepine has already been given, IM olanzapine may be given only after careful clinical evaluation with close monitoring.
SOURCE: ZYPREXA IM data sheet — "If the patient is considered to need parenteral benzodiazepine treatment, this should not be given until at least 1 hour after ZYPREXA IM administration"; in the reverse order, "ZYPREXA IM administration should only be considered after careful evaluation of clinical status" — https://www.medsafe.govt.nz/profs/datasheet/z/zyprexaiminj.pdf
SEVERITY: imprecise
```

The 1-hour rule runs one way only; a stem may well test the reverse sequence.

### 21. Mirtazapine — only sedation is inversely dose-related

```
QUOTE: | **Mirtazapine** | α2 antagonist + 5-HT2/3 block | **Sedation and weight gain — worse at low dose** |
FILE + HEADING: 07 §7.2 — antidepressant class table
CORRECTION: | **Mirtazapine** | α2 antagonist + 5-HT2/3 block | **Sedation — paradoxically worse at low dose** (relative H1 dominance); weight gain and increased appetite at all doses |
SOURCE: Lexapro/mirtazapine class pharmacology per AMH; the antihistaminic sedation of mirtazapine is offset by noradrenergic activation at higher doses, whereas appetite/weight effects are not dose-inverse — see Aust Prescr antidepressant adverse-effect reviews at https://australianprescriber.tg.org.au
SEVERITY: stylistic
```

Low confidence relative to the others — flagged for completeness because the compressed phrasing attributes the dose-inversion to both effects.

---

## ADJUDICATIONS REQUESTED

**2. Antipsychotic metabolic monitoring — §1.7 is correct.** See finding 11. The Australian standard is the Positive Cardiometabolic Health Resource: baseline; weight/waist weekly-to-fortnightly for 6–8 weeks after initiation or change; then 3, 6, 12 months (weight and waist also 9 months); then 6-monthly. §7.2 and §4.5 both need amending to §1.7's schedule.

**3. NMS temperature — §4.7 (>38.5 °C) is closer; both should state the criterion.** The international consensus diagnostic criterion is **>38.0 °C on at least two occasions**. §7.2's "often >40 °C" describes severe disease, not the diagnostic threshold. See finding 12.

**4. Maximum escitalopram dose — §7.2 is correct.** The Australian PI for Lexapro caps escitalopram at **20 mg/day for every registered indication, including OCD**, and at **10 mg/day as the maximum maintenance dose in patients over 65**. §3.6's "OCD doses run to 40 mg" is off-label and above the TGA-approved maximum — it must be relabelled as off-label specialist practice, not stated as a dose range. §2.3's "10–20 mg" is right but should say 20 mg is the ceiling, not just the top of a usual range. Source: LEXAPRO (escitalopram) Australian Product Information — https://rss.medsinfo.com.au/lu/pi.cfm?product=luplexap. §7.2's citalopram figures also check out against the Australian PI (max 40 mg/day; 20 mg/day if >65, in mild–moderate hepatic impairment, or in CYP2C19 poor metabolisers) — https://rss.medsinfo.com.au/lu/pi.cfm?product=lupcipra.

**6. Antidepressant discontinuation duration — neither §7.2 nor §2.3 is correct.** See finding 13. Current Australian guidance (Aust Prescr 2026; CATAG 2025) is that duration is highly variable and can be protracted for months after long-term use, and that taper duration should scale with treatment duration and drug half-life, using hyperbolic reductions for paroxetine, venlafaxine and duloxetine.

**7. Thiamine step-downs — both are correct for their contexts.** No change needed.
- §6.2 (refeeding in eating disorders): QuEDS specifies "300 mg IM/IV 30 minutes prior to feeding and daily for initial three days", then "100 mg oral daily after first 3 days". NSW Health's adult ED guideline instead uses 100 mg **orally twice daily** for the first 3 days then oral thereafter — the note's parenthetical is right, though it should add "for the first 3 days". Sources as in finding 1.
- §5.3 (alcohol): the Australian alcohol treatment guidelines specify, for malnourished patients, "300 mg intramuscularly or intravenously per day for 3 to 5 days, and subsequent oral thiamine doses of 300 mg per day for several weeks" — exactly as §5.3 states. Note for completeness that *established* Wernicke's requires a higher parenteral dose: "at least 500 mg per day… for at least 3 to 5 days, and subsequent doses of at least 300 mg… for 1 to 2 weeks". Source: Australian Guidelines for the Treatment of Alcohol Problems, "Preventing and Treating Wernicke's Encephalopathy" — https://alcoholtreatmentguidelines.com.au/wernickekorsakoffs-syndrome/preventing-and-treating-wernickes-encephalopathy

---

## Verified correct

**Section 6**
- Refeeding thiamine regimen (300 mg IM/IV daily × 3 days then 100 mg oral, before or with the first carbohydrate), zinc sulfate 50 mg daily, Phosphate-Sandoz 500 mg bd prophylaxis — QuEDS and NSW Health.
- Starting energy: high risk 0.8–1.0 × BEE ≈ 1000 kcal/day; extreme risk 0.5 × BEE ≈ 20 mL/h; escalation 200–300 kcal every 2–3 days — NSW Health, verbatim.
- Specialist-unit NG schedule: 40 mL/h ≈ 6000 kJ/1500 kcal, day 3–4 → 2000, day 5–6 → 2500, day 7+ → 3000 kcal/day — QuEDS, verbatim (arithmetic: 40 mL/h × 24 h × 1.5 kcal/mL = 1440 kcal ≈ 6000 kJ; the 1500 figure is QuEDS's own rounding, reproduced faithfully).
- "Replace, don't stop feeding"; correct magnesium first in refractory hypokalaemia.
- Refeeding risk criteria: negligible intake ≥5–10 days, pre-existing low PO₄/K/Mg, rapid loss, %mBMI <70 — QuEDS risk stratification.
- Adult "other" criteria: intake <1000 kcal/day, eGFR <60, uncontrollable purging — NSW Health and QuEDS.
- RCH paediatric figures other than postural HR: HR <50 awake, SBP <80 or postural drop >20, temp <35.5 °C, QTc >450 ms, K <3.0, Na <130, phosphate <0.9, glucose <3.0, %mBMI <70%, loss >1 kg/wk or >15% in 3–6 months.
- MBS eating disorder plan: up to 40 psychological + 20 dietetic services in a 12-month period; broadest eligibility for anorexia nervosa; MHTP (10 sessions) otherwise.
- Fluoxetine 60 mg/day as the only agent with robust bulimia evidence, adjunct to CBT-E; bupropion contraindicated with purging; lisdexamfetamine not TGA-registered for BED in Australia (registered ARTG indication is ADHD only).
- AADPA: parent/family training as a strong recommendation in children; methylphenidate/dexamfetamine/lisdexamfetamine first-line for children and adults; concurrent pharmacological and non-pharmacological treatment unless rapid symptom control needed; diagnosis must not rest on rating scales or observation alone (rec 2.1.4).
- NHMRC BPD guideline: "Drugs should not be used as primary therapy for borderline personality disorder"; drugs may be considered in acute crisis and "should be withdrawn once the crisis is resolved"; avoid polypharmacy; avoid drugs lethal in overdose.
- Medical practitioners are mandated child-abuse reporters in every Australian jurisdiction.

**Section 7**
- RANZCP ECT dosing: RUL ultrabrief 0.3 ms at 6× threshold; bitemporal/bifrontal 1.0 ms at 1.5× threshold; course generally 6–12 treatments; propofol/thiopentone as potent anticonvulsants used at lowest effective dose; benzodiazepines and anticonvulsants raise threshold; lithium risks post-ECT delirium.
- Adequate seizure = EEG duration ≥25 s with good post-ictal suppression — confirmed against the RANZCP guideline summary.
- Anterograde amnesia recovering within 2–4 weeks of the course ending; retrograde autobiographical loss persisting and permanent in a minority (~12% with bilateral).
- NSW ECT: s96 — the Tribunal "must also specify the number of treatments that are approved (not exceeding 12)" unless special circumstances; determination effective 6 months; certification by two medical practitioners, at least one a psychiatrist (and for under-16s, at least one with child/adolescent expertise); consent inquiry for voluntary patients, administration inquiry for involuntary patients and under-16s.
- Victorian ECT: "No guardian, parent or other substitute decision-maker may consent to ECT on behalf of an adult"; Tribunal must find no less restrictive way; "the number of treatments… (which can be up to 12) and the period… (which cannot be longer than 6 months)"; "The Mental Health Tribunal must determine applications to perform ECT on all people under 18 years of age, including when the young person consents"; urgent hearings exist. *PBU & NJE v Mental Health Tribunal* [2018] VSC 564 correctly cited.
- NSW MHA 2007: mentally disordered person detention up to 3 days excluding weekends and public holidays, examined at least every 24 hours, no more than 3 occasions in any month; AMO examination "not later than 12 hours" after arrival (s27), second examiner must be a psychiatrist if the AMO is not; mental health inquiry before the MHRT; involuntary patient order not exceeding 3 months; Tribunal review "at least once every three months for the first 12 months and after that at least once every six months"; CTO "up to 12 months"; CTO criteria (least restrictive, workable treatment plan, history of refusal with deterioration); breach handled by breach notice/order, not forcible treatment at home.
- Victorian MHWA 2022: commenced 1 September 2023; assessment order by a registered medical practitioner or authorised mental health practitioner who examined the person within the previous 24 hours; community assessment order 24 h; inpatient assessment order earlier of 24 h from arrival or 72 h from making; extendable twice by up to 24 h each; temporary treatment order 28 days, made by an authorised psychiatrist who cannot be the person who made the assessment order; treatment orders made by the Mental Health Tribunal only, 6 months adult / 3 months under 18 (for both community and inpatient variants); supported decision-making, advance statement of preferences, nominated support person, opt-out IMHA.
- rTMS MBS: items 14216/14217 (initial prescription/mapping and delivery) and 14219/14220 (retreatment); listed 1 November 2021; 18+; adequate trial of at least 2 different antidepressant classes at therapeutic dose for ≥3 weeks with adherence formally assessed; trained psychiatrist; 35 initial + 15 retreatment = **50 services over a lifetime**, retreatment once only, prior rTMS (public or private) disqualifying.
- Esketamine PBS-listed **1 May 2025** for treatment-resistant depression.
- Better Access: 10 individual + 10 group services per calendar year, unchanged; referral blocks of up to 6 then practitioner review; psychiatrist item 291; headspace 12–25.
- AIHW seclusion: "~14 events per 1,000 bed days in 2009–10 to ~6 in 2024–25" and "more than halved" — matches the AIHW page exactly, including the current reporting year.
- Acute behavioural disturbance dosing: droperidol 10 mg IM/IV (max 20 mg/24 h) as the Australian ED parenteral first-line; oral olanzapine 5–10 mg (max 30 mg/24 h); diazepam 5–10 mg; lorazepam 1–2 mg (max 8 mg/24 h) — WACHS ED ABD guideline. The stated inpatient-versus-ED divergence is real.
- TGA dose caps for citalopram and escitalopram (see adjudication 4).
- Escitalopram/citalopram, venlafaxine BP, agomelatine LFT schedule, fluoxetine 5-week MAOI washout, 2-week washout otherwise — consistent with Australian PIs and Aust Prescr.

---

## Could not verify

Named blockers, as requested.

- **ACSQHC / NSQHS Standards** — `safetyandquality.gov.au` returned no usable content for the standards text; the "NSQHS Standards (2nd ed.)" citation and the restrictive-practice governance requirements attributed to it are unverified. Note there is now a 2021 revision of the second edition, so "2nd ed." without a year is ambiguous.
- **NSW legislation site** (`legislation.nsw.gov.au`) returned 403 on the whole-Act HTML; **AustLII** returned 403 on `s31`, `s53` and `s78` of the *Mental Health Act 2007* (NSW). NSW figures were therefore verified against the MHCC Mental Health Rights Manual, the NSW MHRT information sheets and the NSW Health Schedule 3 statement of rights, all of which agreed. The one claim I could **not** confirm from any source is the **"within 24 hours"** timeframe for notifying a designated carer of detention (§7.7 prose and the Rapid-Recall row "Who in NSW must be told within 24 hours of a detention"). The NSW Health carers page lists the notifiable events but states no timeframe, and the Schedule 3 statement of rights does not mention a 24-hour rule. **Treat this figure as unconfirmed until s78 can be read directly.**
- **Therapeutic Guidelines: Psychotropic** — subscription-walled; cited in both files' Sources blocks but not checkable.
- **PBS** — the medicine-status page gave the esketamine listing date but the full restriction text (authority level, observation requirements, continuing criteria) was not retrievable.
- **AADPA "stimulant prescribing regulations summary (2026)"** cited in the §6 Sources block — no such AADPA publication was found on aadpa.com.au or adhdguideline.aadpa.com.au. The state-by-state position had to be assembled from NSW Health and Queensland Health primary sources plus commercial telehealth summaries of variable quality. **Either replace this citation with the state health department pages or delete it.** Separately, note that the AADPA guideline PDF now carries a 2024 update file (`ADHD-Clinical-Practice-Guideline-updated.pdf`), so "(2022)" should read "(2022, updated 2024)".
- **PubMed full text** — abstract-only for Tørring 2017; the 2.1 per 100,000 figure was taken from the RANZCP guideline summary rather than the primary paper, and Wiley/Ovid returned 403/402.
- **Australian Prescriber, "Prescribing and borderline personality disorder"** — first fetch failed on a robots.txt read timeout; a later fetch succeeded, so the NHMRC medication position is verified. The NHMRC reference guide PDF itself (nhmrc.gov.au) timed out on robots.txt and could not be read directly, so the BPD **prevalence (~1–2%)**, **~10% lifetime suicide rate**, **24–72 h brief admission** and **1–3 day follow-up** figures in §6.5 remain unverified against the guideline.
- **Tourette coprolalia ~10%**, **self-harm in ~10% of adolescents**, **intellectual disability in ~one third of autistic people** — plausible and widely cited, but no Australian primary source was located within this pass.
