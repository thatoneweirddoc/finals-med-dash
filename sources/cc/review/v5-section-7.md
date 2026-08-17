# Adversarial verification — Critical Care §7: Poisoning, Overdose and Environmental Emergencies

File reviewed: `/tmp/fmd/sources/cc/07-poisoning-overdose-and-environmental-emergencies.md` (348 lines, read in full)
Date of review: 17 August 2026. Every figure below was checked against a primary source retrieved live; nothing was accepted from memory.

**Counts: 16 findings — 3 dangerous, 2 wrong, 9 imprecise, 2 stylistic.**

**Headline verdicts**
- **Paracetamol nomogram line: CORRECT as written.** Australian line = 150 mg/L (≈1000 µmol/L) at 4 h, 4-hour half-life decay; UK line = 100 mg/L at 4 h joined to 15 mg/L at 15 h (CHM/MHRA, 3 Sept 2012). Two-bag regimen, 22 g/11 g caps (=110 kg ceiling), massive-ingestion doubling, 8-hour rule, cessation criteria and the 20 g/6 h bank stem all verified. No error found in §7.6 arithmetic.
- **HIET ceiling: NOT a self-contradiction. The summary agent's finding #4 is rejected.** Austin Health HIET v4.2 (2025) reads: bolus 1 unit/kg; initial infusion "1 unit/kg/hour infusion (up to 120 units/hour)"; "titrate to effect every 15 min up to 5 units/kg/hour over first hour"; maximum "10 units/kg/hour as required (max 1200 units/hour)". The 120 units/h cap belongs to the *initial* 1 unit/kg/h rate (it binds only above 120 kg); the 1200 units/h cap belongs to the *maximum* 10 units/kg/h rate (binds only above 120 kg). Redone arithmetic for 70 kg: bolus 70 units ✓; initial 70 units/h (< 120 ✓); max 10 × 70 = 700 units/h (< 1200 ✓). Both statements in the notes are internally consistent and correct. The only defect is an omitted intermediate step (finding 8).

---

## Findings

```
QUOTE: **Avoid IV calcium** in digoxin-associated hyperkalaemia in Australian practice; treat the hyperkalaemia with Fab (plus insulin–dextrose and bicarbonate as required).
FILE + HEADING: 07-poisoning-overdose-and-environmental-emergencies.md — §7.11 Digoxin, "The short version" (also the Rapid-Recall Discriminators row "Digoxin overdose with K⁺ 6.2 mmol/L and bradyarrhythmia | ... avoid IV calcium")
CORRECTION: **Fab is the treatment for digoxin-associated hyperkalaemia**; insulin–dextrose and bicarbonate as required. The old absolute contraindication to IV calcium ("stone heart") is **not evidence-based** — Austin Health's acute digoxin guideline says to treat hyperkalaemia "along conventional lines (this includes giving calcium if indicated)", and calcium should **not** be withheld in life-threatening hyperkalaemia when digoxin toxicity is only suspected. Calcium is usually unnecessary once Fab is given, not forbidden.
SOURCE: Austin Health Clinical Toxicology Guideline, *Digoxin: Acute Poisoning* (Oct 2022), https://www.austin.org.au/Assets/Files/Digoxin%20(Acute)_Oct2022.pdf ; Levine M et al., J Emerg Med 2011 (159 patients, no excess mortality/dysrhythmia after calcium), summarised at https://litfl.com/calcium-digoxin-toxicity-and-stone-heart-theory/ ; Australian Prescriber, *Management of digoxin toxicity*, https://australianprescriber.tg.org.au/articles/management-of-digoxin-toxicity.html
SEVERITY: dangerous
```

```
QUOTE: Repeat boluses every few minutes while the QRS is wide; large totals are normal.
FILE + HEADING: §7.7 Tricyclic antidepressants and sodium-channel blockade, "Bicarbonate mechanics"
CORRECTION: Repeat boluses **every 3–5 minutes** while the QRS is wide, titrated to QRS narrowing. ANZCOR 11.10 caps each bolus at **1–2 mL/kg up to 100 mL** and the **total at 6 mL/kg** (≈420 mL of 8.4% in a 70 kg adult); beyond that, hyperventilate an intubated patient to pH 7.45–7.55 (PaCO₂ 30–35 mmHg) rather than giving more bicarbonate. Watch Na⁺, pH and K⁺.
SOURCE: ANZCOR Guideline 11.10 *Resuscitation in Special Circumstances* (approved July 2026), https://www.anzcor.org/assets/anzcor-guidelines/guideline-11-10-resuscitation-in-special-circumstances-252.pdf — "sodium bicarbonate 8.4% 1 to 2 mL/kg up to 100 mL IV, every 3 to 5 minutes, titrated to a narrowing of the QRS complex (aim for serum pH 7.45 to 7.55). Maximum total dose is 6 mL/kg."
SEVERITY: dangerous
```

```
QUOTE: A child ingesting a single tablet needs **BSL monitoring for 12–24 h** — hypoglycaemia is delayed, so do not discharge on a normal BSL at 4 h.
FILE + HEADING: §7.12 Beta-blocker, calcium-channel blocker and sulfonylurea, "Sulfonylurea specifics"
CORRECTION: A child with any possible sulfonylurea exposure needs **BSL monitoring for a full 24 h** — onset of hypoglycaemia may be **delayed up to 18 h** — so a normal BSL at 4 h, or at 12 h, does not permit discharge.
SOURCE: RCH Melbourne Clinical Practice Guideline, *Oral Hypoglycaemic Poisoning*, https://www.rch.org.au/clinicalguide/guideline_index/Oral_Hypoglycaemic_Poisoning/ — "Any child with possible sulfonylurea exposure should be observed for 24 hours, as delayed hypoglycaemia may occur"; "Onset of hypoglycaemia may be delayed up to 18 hours after ingestion." (Paediatric rule; the adult risk-assessment period is longer still.)
SEVERITY: dangerous
```

```
QUOTE: **Naloxone is shorter-acting than most opioids** (effect ~20–60 min).
FILE + HEADING: §7.8 Opioids and sedative-hypnotics, "The short version"
CORRECTION: **Naloxone is shorter-acting than most opioids** — duration of action **45–70 min**, while respiratory depression may persist **4–5 h** after an opioid overdose.
SOURCE: ANZCOR Guideline 11.10 (July 2026) — "The duration of action of naloxone is 45 to 70 minutes, but respiratory depression may persist for 4 to 5 hours after opioid overdose." https://www.anzcor.org/assets/anzcor-guidelines/guideline-11-10-resuscitation-in-special-circumstances-252.pdf
SEVERITY: wrong
```

```
QUOTE: **Bluebottle (*Physalia*)** — **no vinegar**; **hot water immersion 43–45 °C for up to 30 min** (RCT evidence).
FILE + HEADING: §7.15 Envenomation, "Marine"
CORRECTION: **Bluebottle (*Physalia*)** and all non-tropical jellyfish stings — **no vinegar**; **hot water immersion for 20 min**, no hotter than the rescuer can comfortably tolerate (≈45 °C maximum); a cold pack if heat gives no relief or is unavailable.
SOURCE: ANZCOR Guideline 9.4.5 *Envenomation — Jellyfish Stings* (2025), https://www.anzcor.org/assets/anzcor-guidelines/guideline-9-4-5-envenomation-jellyfish-stings-290.pdf — "Place the victim's stung area in hot water (no hotter than the rescuer can comfortably tolerate) for 20 minutes."
SEVERITY: wrong
```

```
QUOTE: the decision rests on **ALT and paracetamol concentration** — treat if ALT is elevated or paracetamol is detectable above the locally used trigger (commonly 20 mg/L).
FILE + HEADING: §7.6 Paracetamol, "Presentation patterns" — RSTI
CORRECTION: the decision rests on **ALT and paracetamol concentration** — commence acetylcysteine if the **paracetamol concentration is >20 mg/L (132 µmol/L)** or the **ALT is >50 U/L**. These are the guideline's figures, not local variants.
SOURCE: Chiew AL et al., *Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand*, MJA 2020;212(4):175–183 — "paracetamol concentration is greater than 20 mg/L (132 μmol/L) or ALT is greater than 50 U/L." https://www.mja.com.au/journal/2020/212/4/updated-guidelines-management-paracetamol-poisoning-australia-and-new-zealand
SEVERITY: imprecise
```

```
QUOTE: **Massive ingestion** (≥30 g or ≥500 mg/kg, or a concentration **>2× the nomogram line**): **double the second bag to 200 mg/kg over 16 h**.
FILE + HEADING: §7.6 Paracetamol, "The short version" (repeated in the Rapid-Recall table)
CORRECTION: **Massive ingestion**: for **immediate-release** paracetamol the operative trigger for doubling is a **concentration >2× the nomogram line** (typically after ≥30 g); for **modified-release** paracetamol an ingestion of **≥30 g or ≥500 mg/kg** attracts the increased dose on the dose criterion alone, because the concentration cannot be interpreted. Either way: **double the second bag to 200 mg/kg over 16 h**; discuss with a toxicologist if ≥3× the line.
SOURCE: Chiew AL et al., MJA 2020;212(4):175–183 and Guideline Summary (NSW ACI) — "Only a small percentage … will have a paracetamol concentration greater than double the nomogram line and they typically have ingested 30 g or more"; MR "≥ 30 g or ≥ 500 mg/kg" receives increased acetylcysteine. https://aci.health.nsw.gov.au/__data/assets/pdf_file/0004/558526/MJA-Guideline-Summary-management-paracetamol-poisoning.pdf ; RCH *Paracetamol poisoning*, https://www.rch.org.au/clinicalguide/guideline_index/paracetamol_poisoning/
SEVERITY: imprecise
```

```
QUOTE: **HIET** (Austin Health v4, 2025): **insulin 1 unit/kg IV bolus**, then **1 unit/kg/h** (up to 120 units/h), titrated every 15 min to a maximum **10 units/kg/h**, with **50 mL of 50% glucose** bolus and **100 mL/h of 10% glucose**, targeting **glucose 5.5–11.0 mmol/L** and **K⁺ 2.8–3.3 mmol/L**, checking both 15-minutely at first.
FILE + HEADING: §7.12, "The short version"
CORRECTION: **HIET** (Austin Health v4.2, 2025): **insulin 1 unit/kg IV bolus**, then **1 unit/kg/h** (initial rate capped at 120 units/h), **titrated every 15 min up to 5 units/kg/h over the first hour** and thereafter to a maximum **10 units/kg/h (absolute ceiling 1200 units/h)**, with **50 mL of 50% glucose** bolus (omit if BSL >15 mmol/L) and **100 mL/h of 10% glucose**, targeting **glucose 5.5–11.0 mmol/L** and **K⁺ 2.8–3.3 mmol/L**, checking both 15-minutely at first; cease once cardiovascular toxicity resolves.
SOURCE: Austin Health, *High Dose Insulin-Euglycaemic Therapy (HIET)* v4.2 (2025), https://www.austin.org.au/Assets/Files/HIET_V4_2_2025.pdf
SEVERITY: imprecise
```

```
QUOTE: **LAST**: **20% lipid emulsion**, bolus then infusion at **15 mL/kg/h** (ANZCOR 11.10).
FILE + HEADING: §7.2 Resuscitation and supportive care first, "Specific arrest mechanisms"
CORRECTION: **LAST**: **20% lipid emulsion 1.5 mL/kg IV bolus**, then infusion at **15 mL/kg/h**; up to **three boluses at 5-minute intervals**, continuing the infusion until stable or to a **total of 12 mL/kg** (ANZCOR 11.10).
SOURCE: ANZCOR Guideline 11.10 (July 2026) — "Give an initial intravenous bolus of 1.5 mL/kg of 20% lipid emulsion followed by an infusion at 15 mL/kg/hr. Give up to three bolus doses of lipid at 5-minute intervals and continue the infusion until the patient is stable or has received up to a total of 12 mL/kg."
SEVERITY: imprecise
```

```
QUOTE: **Potassium tells you the story in acute toxicity**: acute poisoning blocks Na⁺/K⁺-ATPase and causes **hyperkalaemia**, which correlates with mortality — **K⁺ >5.0–5.5 mmol/L** is a marker of severe poisoning and an indication to treat.
FILE + HEADING: §7.11 Digoxin, "The short version"
CORRECTION: … which correlates with mortality. **K⁺ >5.0 mmol/L** marks significant poisoning (Australian Prescriber); **Austin Health uses K⁺ >6.0 mmol/L with evidence of acute toxicity** as its Fab trigger. Quote the threshold with its source; K⁺ >5.0 alone in an otherwise well patient is not by itself an indication for Fab.
SOURCE: Australian Prescriber, *Management of digoxin toxicity* ("potassium >5.0 mmol/L"), https://australianprescriber.tg.org.au/articles/management-of-digoxin-toxicity.html ; Austin Health *Digoxin: Acute Poisoning* (Oct 2022) — Fab indicated when "K+ >6 mmol/L and evidence of acute toxicity"
SEVERITY: imprecise
```

```
QUOTE: **Haemodialysis** (EXTRIP 2015): recommended if **[Li⁺] >4.0 mmol/L with impaired kidney function**, or if there is **decreased conscious state, seizures or life-threatening dysrhythmia irrespective of level**; suggested if **[Li⁺] >5.0 mmol/L** or if confusion is present.
FILE + HEADING: §7.10 Lithium, "The short version"
CORRECTION: … suggested if **[Li⁺] >5.0 mmol/L**, if confusion is present, **or if the expected time to reach [Li⁺] <1.0 mmol/L with optimal management is >36 h**. Intermittent haemodialysis is the preferred modality; serial levels over 12 h decide whether further sessions are needed.
SOURCE: Decker BS et al., *Extracorporeal Treatment for Lithium Poisoning: EXTRIP*, CJASN 2015;10(5):875–887, recommendations reproduced at https://www.extrip-workgroup.org/lithium
SEVERITY: imprecise
```

```
QUOTE: The other ECG sign: **tall R wave in aVR (>3 mm) and R/S ratio in aVR >0.7** — the most specific finding
FILE + HEADING: §7.7, "The short version"
CORRECTION: The other ECG sign: **R wave in aVR >3 mm *or* R/S ratio in aVR >0.7** — the most specific finding for TCA toxicity. (Either criterion suffices; requiring both understates sensitivity.)
SOURCE: Austin Health Clinical Toxicology Guideline, *Tricyclic Antidepressants* (Oct 2022) — "R wave in aVR >3 mm or >0.7 amplitude of S wave is most specific finding for TCA toxicity", https://www.austin.org.au/Assets/Files/Tricyclic%20Guideline_Oct%202022[1].pdf
SEVERITY: imprecise
```

```
QUOTE: **QRS width is the risk marker.** Widely taught thresholds: **QRS >100 ms → seizure risk**, **QRS >160 ms → ventricular arrhythmia risk**.
FILE + HEADING: §7.7, "The short version"
CORRECTION: **QRS width is the risk marker.** In Australian **adult** practice the trigger is **QRS >120 ms → bicarbonate and seizure risk** (Austin Health); in **paediatric** practice **QRS >100 ms → seizure risk** (RCH). Both use **QRS >160 ms → ventricular arrhythmia risk**. If a written stem gives an adult, use 120 ms.
SOURCE: Austin Health *Tricyclic Antidepressants* (Oct 2022) — "↑QRS (>120ms)", seizure risk ">120ms", arrhythmia ">160ms"; RCH *Tricyclic Antidepressant (TCA) Poisoning* — "QRS >100ms associated with seizures", "QRS>160ms associated with ventricular arrhythmias", https://www.rch.org.au/clinicalguide/guideline_index/Tricyclic_Antidepressant_(TCA)_Poisoning/
SEVERITY: imprecise
NOTE: the ⚑ divergence flagged in the notes is REAL and both sides are correctly stated in the prose; only the lead bullet buries the adult figure.
```

```
QUOTE: Australian ED practice for severe acute behavioural disturbance uses **droperidol 10 mg IM/IV**, repeatable at 15 min, max 30 mg/24 h (Queensland Health guideline, 2024), with **ketamine 4–6 mg/kg IM** as rescue for failed droperidol sedation.
FILE + HEADING: §7.9 Stimulants including methamphetamine, "The short version"
CORRECTION: Australian ED practice uses **droperidol 10 mg IM in adults** (5 mg IM if medically frail; children/adolescents 0.1–0.2 mg/kg, max 10 mg), repeatable at 15 min, **max 30 mg/24 h in adults** (15 mg if frail; 0.4 mg/kg to a max 20 mg in children), with **ketamine 4–6 mg/kg IM in adults** (2–4 mg/kg in children/adolescents) as rescue for failed droperidol sedation.
SOURCE: Queensland Health QH-GDL-438 v5.0, *Management of patients with Acute Severe Behavioural Disturbance in Emergency Departments* (October 2024), https://www.health.qld.gov.au/__data/assets/pdf_file/0031/629491/qh-gdl-438.pdf
SEVERITY: imprecise
```

```
QUOTE: **Drowning** is a hypoxic insult: **five initial rescue breaths**, then standard CPR 30:2 (ANZCOR 9.3.2/11.10)
FILE + HEADING: §7.16 Environmental emergencies, "The short version"
CORRECTION: **Drowning** is a hypoxic insult: **five initial ventilations** (with oxygen if available), then standard CPR 30:2 (**ANZCOR 11.10**). ANZCOR 9.3.2 *Resuscitation in Drowning* requires rescue breaths for all drowning victims but does not itself specify the number.
SOURCE: ANZCOR Guideline 11.10 (July 2026) — "Give 5 initial ventilations, supplemented with oxygen if available"; ANZCOR Guideline 9.3.2 *Resuscitation in Drowning*, https://www.anzcor.org/home/first-aid/guideline-9-3-2-resuscitation-in-drowning
SEVERITY: imprecise
```

```
QUOTE: then late **gastric outlet/pyloric stricture** at 4–6 weeks
FILE + HEADING: §7.13, "Iron's four phases"
CORRECTION: then late **gastric outlet/pyloric stricture and bowel obstruction** at **2–8 weeks**
SOURCE: RCH Melbourne Clinical Practice Guideline, *Iron poisoning* — phase 5 (bowel obstruction) "2–8 weeks", https://www.rch.org.au/clinicalguide/guideline_index/iron_poisoning/
SEVERITY: imprecise
```

```
QUOTE: Austin Health clinical toxicology guidelines: *Tricyclic antidepressants* (2022); *High dose insulin-euglycaemic therapy* v4 (2025); *Practice standards for Australian Poisons Information Centres* (2014).
FILE + HEADING: Sources list (end of file)
CORRECTION: Austin Health clinical toxicology guidelines: *Tricyclic antidepressants* (Oct 2022); *High dose insulin–euglycaemic therapy* v4.2 (2025); *Digoxin: Acute Poisoning* and *Digoxin: Chronic Poisoning* (Oct 2022); *Salicylate* v4.8 (2025). *Practice standards for Australian Poisons Information Centres* (2014) is a national PIC-network document, not an Austin Health toxicology guideline — list it separately.
SOURCE: Austin Health Clinical Toxicology Guidelines index, https://www.austin.org.au/clinical-toxicology-guidelines/
SEVERITY: stylistic
```

---

## Verified correct

Everything below was checked against a live Australian source and needs no change.

**Paracetamol (§7.6) — the whole section survives.**
- Australian nomogram line **150 mg/L (≈1000 µmol/L) at 4 h**, single treatment line, decaying with a 4-h half-life (LITFL: "150 mg at 4 h nomogram line"). UK line **100 mg/L at 4 h joined to 15 mg/L at 15 h**, CHM/MHRA 3 September 2012 — the notes' ⚑ is correct and correctly attributed.
- Current Australian guideline is **Chiew et al., MJA 2020;212(4):175–183**; no later Australian/NZ consensus revision exists as of Aug 2026.
- Risk threshold **≥10 g or ≥200 mg/kg whichever is less**, adult and paediatric ✓.
- **Two-bag regimen 200 mg/kg (max 22 g) over 4 h then 100 mg/kg (max 11 g) over 16 h** ✓; caps correspond to a **110 kg dosing ceiling** (RCH: "For patients >110 kg, calculate the dose based on 110 kg body weight") — arithmetic redone: 22 000/200 = 110 ✓, 11 000/100 = 110 ✓.
- 70 kg worked example: 14 g / 7 g / 21 g total ✓; doubled second bag 14 + 14 = 28 g ✓.
- Charcoal windows: **2 h** for IR ≥10 g/≥200 mg/kg; **4 h** for IR ≥30 g; **4 h** for MR at the ≥10 g/≥200 mg/kg threshold ✓.
- Increased dose for concentration **>2× the line**; toxicologist discussion at **≥3×** ✓ ("eg, ≥ triple the nomogram line").
- **Start NAC without a level** if >8 h since first ingestion or the concentration cannot be obtained within 8 h ✓.
- **Cessation**: ALT/AST decreasing, INR <2.0, clinically well; plus paracetamol **<10 mg/L (66 µmol/L)** in MR and high-initial-concentration cases ✓.
- **Staggered = >2 h**, anchored to the earliest ingestion ✓. **RSTI** ≥10 g/≥200 mg/kg per 24 h, ≥12 g/≥300 mg/kg per 48 h, or supratherapeutic >48 h with GI symptoms ✓. **MR** gets the full course regardless of concentration ✓.
- **Bank stem recomputed independently**: 20 000 mg ÷ 70 kg = **285.7 → 286 mg/kg** ✓, above both thresholds; at 6 h the 2 h IR charcoal window has closed and the ingestion is <30 g so charcoal is not indicated ✓; a 6 h level is valid ✓; the priority is the level now with NAC started so as to be running by the 8 h mark ✓. The notes' answer is right.

**TCA (§7.7).** ⚑ divergence **real**: Austin (adult) QRS >120 ms for bicarbonate/seizures; RCH (paediatric) >100 ms; both >160 ms for arrhythmia. Bicarbonate 8.4% **1 mmol/mL** so 1–2 mmol/kg = 1–2 mL/kg ✓ (Austin 1 mL/kg q5min; RCH 2 mmol/kg; ANZCOR 1–2 mL/kg). 70 kg = 70 mL for 1 mmol/kg ✓. Target pH **7.50–7.55** matches Austin (ANZCOR gives 7.45–7.55). Dose bands **5–10 / >10 / >20 mg/kg** ✓ verbatim Austin. RCH refers children ingesting **>5 mg/kg** ✓. Bicarbonate bolus on induction ✓. Avoid β-blockers, amiodarone, phenytoin, flumazenil ✓. **6 h** medical clearance with a normal ECG ✓ (both Austin and RCH). Bank-stem answer (bicarbonate, not amiodarone/flumazenil/phenytoin) ✓.

**Naloxone (§7.8).** ⚑ divergence **real** and both sides correct. Australian toxicology titration **100 microgram IV every 30–60 s** (adult, opioid-dependent) ✓; ANZCOR 11.10 initial doses **400 microgram IV, 800 microgram IM, 800 microgram SC, 2 mg IN** (adult, resuscitation/prehospital) ✓ — the notes' "800 microgram IM/SC" is exactly right. Titration endpoint **respiration, not consciousness** ✓ ("until the patient is breathing adequately and has protective airway reflexes"). Observation **≥2 h after the last dose** ✓. Infusion at **~2/3 of the dose required in the first hour** ✓. RR <8 threshold ✓. Paediatric naloxone (not in the notes) is 10 microgram/kg to max 800 microgram (APLS). Flumazenil 0.2 mg increments and its near-total avoidance ✓.

**Envenomation (§7.15).** PIT applies to **all Australian venomous snakes incl. sea snakes, funnel-web, blue-ringed octopus, cone shell**; **not** redback/other spiders, jellyfish, fish/stonefish stings, scorpions, centipedes or beetles ✓ verbatim ANZCOR 9.4.8. **Elasticised bandage 10–15 cm**, firm enough that a finger cannot easily slide underneath, over the bite then from fingers/toes upward, splint including joints either side, **do not wash the bite**, do not remove until in a hospital able to treat ✓. **SVDK**: bite-site swab first, urine second, never blood; purpose is antivenom *choice*, not diagnosis; ~**25% false negatives**, tiger read as brown in ~**10%** ✓. **One vial** of monovalent antivenom for adults and children, all Australian snakes ✓; **premedication with adrenaline/antihistamine/corticosteroid no longer recommended** ✓; repeat dosing not routine ✓. Bloods on arrival, **1 h after bandage removal, 6 h and 12 h**; normal at 12 h excludes envenomation; avoid night discharge ✓. **VICC 24–36 h** to normalise; FFP only for life-threatening bleeding ✓. Box jellyfish: **vinegar 30 s**, then pick off tentacles, CPR, antivenom ✓ (ANZCOR 9.4.5 2025). Irukandji latency **5–40 min**, opioids, ECG/troponin ✓. Redback: no PIT, RAVE II negative ✓. Funnel-web: PIT plus early antivenom ✓.

**Antidotes and elimination.** Activated charcoal **50 g adult / 1 g/kg paediatric** ✓; non-binding list (metals incl. lithium/iron/potassium, alcohols and glycols, corrosives, hydrocarbons) ✓. Salicylate HD thresholds **>7.2 mmol/L acute, >4.4 mmol/L chronic/elderly** ✓, and the mmol/L-vs-mg/dL unit trap (7.2 mmol/L ≈ 100 mg/dL) ✓; urine pH 7.5–8.5 with obsessive K⁺ ✓; the intubation hazard ✓. MDAC list (carbamazepine, dapsone, phenobarbitone, quinine, theophylline) ✓. **Digoxin Fab, Queensland PIC empiric doses verbatim**: cardiac arrest **5 vials (200 mg) IV bolus**; acute toxicity with compromise **2 vials (80 mg) over 30 min**, repeat on toxicologist advice; chronic accumulation with compromise **1 vial (40 mg) in 100 mL over 30 min** — the ⚑ empiric-vs-formula divergence is **real** (North American PI uses concentration × weight/100, or ingested mg × 2 × 0.7). Post-Fab total digoxin assays uninterpretable ✓. **Octreotide, Queensland PIC verbatim**: adult **50 microgram SC q8h ≥24 h**, or 50 microgram IV load then 25 microgram/h; paediatric **2 microgram/kg SC q8h**; trigger BSL <4.0 mmol/L ✓ — 20 kg × 2 = **40 microgram** ✓. **Desferrioxamine, Queensland PIC verbatim**: **15 mg/kg/h**, iron **>90 micromol/L at 6 h** or **>60 micromol/L with clinical toxicity**, continue until <60 micromol/L, **halve if eGFR <50**, infusion hypotension and *vin rosé* urine ✓. **Fomepizole**: 15 mg/kg load (70 kg = **1050 mg** ✓), 10 mg/kg q12h for 48 h, then 15 mg/kg q12h, **q4h during HD** ✓. Iron elemental bands and phases ✓ (bar the stricture timing above). **CO**: COHb half-life **240 min air / 90 min FiO₂ 1.0 / 23 min at 3 ATA** ✓; Cochrane 2011 (Buckley) — 7 RCTs, **n = 1361 from 6 studies**, OR 0.78 (0.54–1.12), no significant benefit ✓; HBO considered for LOC, persistent deficit, myocardial ischaemia, acidosis, age >55, pregnancy ✓. **Organophosphates**: atropine **0.02 mg/kg**, **doubling every 5 min**, endpoint drying of secretions/dry chest not heart rate ✓; pralidoxime **30 mg/kg load then 8 mg/kg/h** ✓, Cochrane negative ✓; intermediate syndrome 24–96 h ✓.

**Environmental (§7.16).** ANZCOR 11.10 verbatim: **withhold adrenaline <30 °C**; **6–10 min intervals at 30–34 °C**; **if VF persists after three shocks, delay further attempts until >30 °C**; **ECLS/ECMO preferred for rewarming**; prolonged CPR and **ECPR** for potentially reversible toxicity ✓. Hypothermia grading 32–35 / 28–32 / <28 °C with Osborn waves and afterdrop ✓. Heat stroke = core temp >40 °C plus CNS dysfunction, immediate cold-water immersion, antipyretics useless ✓.

**Other.** Poisons Information Centre **13 11 26**, 24 h, whole of Australia ✓. Buckley NA et al., *Haemodialysis for lithium poisoning: translating EXTRIP recommendations into practical guidelines*, BJCP 2020 — the ⚑ Australian critique is a **real paper**, not a fabricated disagreement (doi 10.1111/bcp.14212). Toxidrome grid checked row by row against the discriminators — anticholinergic dry/flushed with absent bowel sounds and retention vs sympathomimetic diaphoretic with normal/increased bowel sounds; cholinergic miosis + wet + hyperactive bowel; opioid miosis + dry + reduced bowel sounds + low RR; sedative-hypnotic preserved vitals; serotonergic clonus with leg-predominant hyperreflexia — all correct and internally consistent with the prose and the Rapid-Recall table. Serotonin toxicity vs NMS (§7.14) states no temperature threshold of its own, so it does **not** conflict with the corrected Psychiatry §7.2 figure of **>38.0 °C on at least two occasions**; the cross-reference is safe as written.

---

## Could not verify

- **Austin Health *Digoxin Immune Fab* guideline PDF** — 403 from austin.org.au for that specific asset. Worked around using the Austin *Digoxin: Acute Poisoning* (Oct 2022) PDF, which fetched successfully, plus Queensland PIC and Australian Prescriber.
- **Austin Health *Salicylate* guideline v4.8 (2025) PDF** — 403 from austin.org.au. Salicylate thresholds verified via LITFL and EXTRIP instead; the notes' figures matched, but the Austin urinary-alkalinisation bicarbonate loading dose could not be confirmed from the primary Australian source.
- **SESLHD *Fomepizole for toxic alcohol poisoning* v2 (2023)** — 404 at the SESLHD URL. Fomepizole regimen confirmed against LITFL only; the "v2 2023" version number and the SESLHD attribution in the notes' source list are unverified.
- **ANZCOR website (anzcor.org) Guideline 9.4.8 page** — HTTP 429 rate limit. Verified via the mirrored ANZCOR PDF at timecritical.com.au (current as of 28/05/2024).
- **PubMed abstract pages** — reCAPTCHA challenge; used Cochrane/LITFL summaries and publisher pages instead.
- **Therapeutic Guidelines (Toxicology and Toxinology), AMH, PBS, ACSQHC** — blocked as expected; no claim in this report rests on them.
- **§7.7 "Hypotension: crystalloid 20–30 mL/kg"** and **§7.7 "Onset is fast — 30–90 min"** — plausible and consistent with Austin's "exposure in the past 1–2 hours" framing, but no Australian source states these exact figures; left unchallenged rather than confirmed.
- **§7.16 heat-stroke cooling target "~38–39 °C"** — no Australian guideline located that names a target; international practice (SCCM 2024) supports cooling below 39 °C within 30 min. Not flagged as an error, but not independently confirmed as Australian.
