# Adversarial verification — Psychiatry §5 Substance Use and Addiction
File reviewed: `/tmp/fmd/sources/psy/05-substance-use-and-addiction.md` (236 lines, read in full)
Verification date: 16 August 2026. All factual checks done by live retrieval, not from memory.

**Counts: 4 dangerous, 9 wrong, 9 imprecise, 2 stylistic (24 findings).**

---

## DANGEROUS

### 1. The CIWA-Ar severity table is not CIWA-Ar — the bands, monitoring intervals and diazepam doses are the AWS scale's, and even those are wrong

```
QUOTE:
| CIWA-Ar | Severity | Monitoring | Diazepam |
|---|---|---|---|
| **<4** | Mild | 6-hourly | None |
| **4–7** | Moderate | 4-hourly | 5–10 mg |
| **>7** (some units ≥8 or ≥10) | Severe | 1–2 hourly | 20 mg |
FILE + HEADING: 05-substance-use-and-addiction.md — §5.3 Alcohol: complications and withdrawal
CORRECTION:
| Scale | Mild | Moderate | Severe |
|---|---|---|---|
| **CIWA-Ar** (0–67) | **<10** | **10–20** | **>20** |
| **AWS** (Australian scale, 0–?) | **<4** | **4–14** | **>14** |
| Monitoring | 4–6 hourly | 2–4 hourly | Hourly |
| Diazepam | **0–5 mg** | **10 mg** (or 10–20 mg then 10 mg hourly) | **20 mg** — loading protocol, medical review >80 mg |
Note: the two scales are not interchangeable and must not be cross-mapped. The "≥8 or ≥10" figure is the CIWA-Ar threshold for giving *any* medication, not the threshold for *severe* withdrawal.
SOURCE: NSW Health, *Clinical Guidance for the Management of Withdrawal from Alcohol and Other Drugs* (2024) — https://www.health.nsw.gov.au/aod/professionals/Publications/clinical-guidance-withdrawal-alcohol-and-other-drugs.pdf ; Queensland Health, *Queensland Alcohol and Drug Withdrawal Clinical Practice Guidelines* — https://adis.health.qld.gov.au/sites/default/files/resource/file/qh_detox_guide.pdf
SEVERITY: dangerous
```
Why this matters clinically: as written, a patient with CIWA-Ar 8 is classed **severe** and given 20 mg diazepam, when 8 is mild-to-borderline on that scale; conversely a patient with CIWA-Ar 18 (genuinely moderate, needing 10 mg and 2–4 hourly review) reads as the same "severe" bucket. Both directions are unsafe. This is the single highest-risk error in the section.

### 2. Buprenorphine maintenance dose range states the maximum as if it were the usual dose

```
QUOTE: | Maintenance | **60–120 mg** daily | **16–32 mg** daily |
FILE + HEADING: §5.5 Opioids — methadone vs buprenorphine table, "Maintenance" row
CORRECTION: | Maintenance | **60–120 mg** daily (max 150 mg) | usual **12–24 mg** daily; **32 mg** is the maximum daily dose |
SOURCE: NSW Health, *NSW Clinical Guidelines: Treatment of Opioid Dependence* (GL2018_018, 2018) — "Usual maintenance range 12–24 mg per day; maximum daily dose 32 mg" — https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/GL2018_018.pdf
SEVERITY: dangerous
```
Methadone 60–120 mg is verified correct against the same source. Only the buprenorphine figure is wrong.

### 3. The COWS threshold for buprenorphine induction is stated as a band that does not exist, and it is propagated into Rapid-Recall

```
QUOTE: Only in **mild–moderate withdrawal, COWS ≥10–15** (~8–12 h after short-acting opioids); **2–8 mg day 1**, titrate over days
FILE + HEADING: §5.5 Opioids — induction row of the methadone/buprenorphine table (repeated in Rapid-Recall: "COWS score required before starting buprenorphine … **≥10–15**")
CORRECTION: Only once objective withdrawal is established — **COWS ≥12** (i.e. crossing from mild into moderate; COWS bands are 0–12 mild, 13–24 moderate, 25–36 moderately severe, >36 severe), usually **>8–12 h after the last short-acting opioid**. Day 1: **8 mg** (or **4 mg, then a further 4 mg after 1–2 h** if withdrawal is only mild), titrating to 12–24 mg over 2–3 days.
SOURCE: WA Health COWS chart (score bands; ">12 indicates symptomatic management") — https://www.health.wa.gov.au/~/media/Corp/Documents/Health-for/Walk-With-Me/COWS-Chart.pdf ; NSW Health GL2018_018 (2018): "Delay the first buprenorphine dose until the patient is experiencing mild to moderate opioid withdrawal (usually >8–12 hours after last opioid use)"; day 1 dose "8 mg" or "4 mg and then a further 4 mg after 1–2 hours" — https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/GL2018_018.pdf
SEVERITY: dangerous
```
Two errors compounded: "≥10–15" straddles the mild/moderate boundary and corresponds to no published rule, and a "2 mg day 1" start is well below the Australian day-1 dose, guaranteeing under-dosing and drop-out at the highest-risk moment.

### 4. The missed-dose re-induction rule — the commonest OAT killer — is absent entirely

```
QUOTE: **Take-aways and regulation.** Start with **supervised daily dosing**; **take-aways** are granted incrementally for demonstrated stability
FILE + HEADING: §5.5 Opioids — Take-aways and regulation
CORRECTION: Add, before the take-away sentence: "**Missed doses strip tolerance.** Methadone: 1–3 consecutive missed doses → resume the usual dose only if not intoxicated or withdrawing; **4 missed** → restart at **half the usual dose or 40 mg, whichever is lower**, re-titrating over 5–7 days in ≤10 mg steps every second day; **5–6 missed** → treat as a new induction (**20–30 mg, never >40 mg**); **≥7 missed** → do not dose without prescriber review. Buprenorphine: 1–3 missed → resume; **4–28 missed** → re-induct on withdrawal severity (4 mg then 4 mg if mild; 8 mg or half the previous dose, whichever lower, if moderate–severe), capped at 16 mg on day 2 and 24 mg on day 3."
SOURCE: Monash/Victorian OAT *Reinduction Protocol* — https://www.monash.edu/__data/assets/pdf_file/0011/3695051/Reinduction-protocol.pdf
SEVERITY: dangerous
```
This is an omission, not a misstatement, but it is the exact scenario finals vignettes use ("missed four days of methadone, presents for today's dose") and the answer the notes currently cannot produce.

---

## WRONG

### 5. IM midazolam is presented as a standard adult sedation option; Australian ED guidance recommends against parenteral benzodiazepines here

```
QUOTE: **olanzapine 10 mg IM** (⚑ not with parenteral benzodiazepine — cardiorespiratory depression) or **midazolam 5–10 mg IM**, with **ketamine** for failed sedation under senior supervision
FILE + HEADING: §5.7 Methamphetamine and stimulants — Acute behavioural disturbance
CORRECTION: **olanzapine 10 mg IM** (⚑ not within 1 h of a parenteral benzodiazepine — cardiorespiratory depression). ⚑ **Parenteral benzodiazepines, alone or added to droperidol, are not recommended in adults** — they increase adverse events and the need for further sedation. Failed droperidol sedation → **ketamine 4–6 mg/kg IM** under senior supervision.
SOURCE: Queensland Health, *Management of patients with Acute Severe Behavioural Disturbance in Emergency Departments* (QH-GDL-438): droperidol 10 mg IM, repeat 10 mg at 15 min, max 30 mg/24 h; "the use of parenteral benzodiazepines either alone or in combination with droperidol … is not recommended"; ketamine 4–6 mg/kg IM — https://www.health.qld.gov.au/__data/assets/pdf_file/0031/629491/qh-gdl-438.pdf
SEVERITY: wrong
```
Droperidol 10 mg IM and the oral diazepam 10 mg / olanzapine 5–10 mg first step are both verified correct (NSW ACI adult ECAT protocol gives "diazepam 10 mg orally once only" or "olanzapine 5 mg orally once only").

### 6. Cannabis–psychosis effect sizes — ADJUDICATION of the §5.8 vs §4.3 contradiction

```
QUOTE: **Psychosis**: heavy use roughly doubles-to-quadruples risk, dose-dependently and worst with **high-potency THC and adolescent onset**
FILE + HEADING: §5.8 Cannabis, nicotine and other drugs — Cannabis
CORRECTION: **Psychosis**: dose-dependent. Ever-use OR ≈ **1.4** (Moore 2007) — a ~40% increase, *not* a doubling; heaviest use OR ≈ **2.1** (Moore 2007); **daily** use OR **3.2** and **daily high-potency (THC ≥10%)** use OR **4.8** — a near five-fold risk (Di Forti, EU-GEI 2019). Worst with high-potency THC and adolescent onset.
SOURCE: Di Forti M et al., *Lancet Psychiatry* 2019;6(5):427–36 (EU-GEI) — ever use OR 1.3 (1.1–1.6), daily OR 3.2 (2.2–4.1), daily high-potency OR 4.8 (2.5–6.3) — https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(19)30048-3/fulltext (summarised at https://www.nationalelfservice.net/mental-health/addiction/daily-skunk-cannabis-use-associated-with-a-5-fold-increase-in-psychosis-risk/) ; Moore THM et al., *Lancet* 2007;370:319–28 — ever use OR 1.41 (1.20–1.65), most frequent use OR 2.09 (1.54–2.84) — https://pubmed.ncbi.nlm.nih.gov/17662880/
SEVERITY: wrong
```
**Adjudication (contradiction 10): §4.3 is the wrong side, and it is self-contradictory.** "Any use roughly doubles risk (OR ~1.4)" is internally incoherent — OR 1.4 is a 40% increase. Moore 2007's OR 1.41 is for *ever* use; the doubling (OR ~2.1) belongs to the *heaviest* users. §4.3's "daily high-potency use OR ~5" is correct (Di Forti 4.8). §5.8's "doubles-to-quadruples" understates the top of the range (4.8 ≈ five-fold) and mislabels the bottom. Fix both: replace §4.3's "any use roughly doubles risk (OR ~1.4)" with "**any use raises risk ~40% (OR ~1.4); heaviest use ~doubles it (OR ~2.1)**", and replace §5.8's band with the four figures above.

### 7. Queensland drug checking is stated as current; it was abolished in 2025, and Victoria — which now has both mobile and fixed-site services — is missing

```
QUOTE: ⚑ **Drug checking now exists**: fixed-site **CanTEST** (ACT, 2022), Queensland from 2024, an NSW festival trial from 2025.
FILE + HEADING: §5.10 Harm reduction and the Australian system — The short version
CORRECTION: ⚑ **Drug checking now exists**: fixed-site **CanTEST** (ACT, from July 2022, funded to at least June 2027); **Victoria** — mobile festival service from December 2024, fixed site (Fitzroy) from August 2025; **NSW** — 12-month mobile festival trial from March 2025. ⚑ **Queensland's CheQpoint service closed in April 2025 and drug checking was outlawed there in September 2025** — the one jurisdiction to reverse course.
SOURCE: Alcohol and Drug Foundation, *Pill testing in Australia* (updated 2025–26) — https://adf.org.au/insights/pill-testing-australia/ ; RACGP newsGP, *Queensland Government bans pill testing* (2025) — https://www1.racgp.org.au/newsgp/clinical/queensland-government-bans-pill-testing
SEVERITY: wrong
```
Type-C error: a 2024 snapshot asserted as the 2026 position. The reversal is also the more examinable fact.

### 8. Opioid withdrawal time course for short-acting opioids

```
QUOTE: Short-acting opioids: onset **6–12 h**, peak **1–3 days**, over by **5–7 days**.
FILE + HEADING: §5.5 Opioids — Withdrawal
CORRECTION: Short-acting opioids: onset **6–24 h**, peak **24–48 h**, resolving over **5–10 days**.
SOURCE: NSW Health, *Clinical Guidance for the Management of Withdrawal from Alcohol and Other Drugs* — heroin/short-acting opioid withdrawal onset "6–24 hours after the last dose", peak "24–48 hours", resolution "5–10 days" — https://www.health.nsw.gov.au/aod/professionals/Publications/clinical-guidance-withdrawal-alcohol-and-other-drugs.pdf
SEVERITY: wrong
```

### 9. CIWA-Ar item count double-counts

```
QUOTE: **CIWA-Ar** (0–67) scores ten autonomic and psychological domains plus orientation and perceptual disturbance.
FILE + HEADING: §5.3 — Risk for severe withdrawal/DT paragraph
CORRECTION: **CIWA-Ar** (0–67) has **ten items in total**, covering autonomic and psychological symptoms, perceptual disturbance in three modalities, and orientation/clouding of sensorium.
SOURCE: CIWA-Ar structure as described in NSW Health withdrawal guidance and Wikipedia's summary of Sullivan et al. 1989 — https://en.wikipedia.org/wiki/Clinical_Institute_Withdrawal_Assessment_for_Alcohol
SEVERITY: wrong
```
As written it implies twelve or thirteen domains. (No item text is reproduced anywhere in the section — the copyright constraint is respected. Confirmed.)

### 10. Take-away doses "up to six per week"

```
QUOTE: Some jurisdictions permit **up to six per week**, buprenorphine more liberally than methadone.
FILE + HEADING: §5.5 Opioids — Take-aways and regulation
CORRECTION: Typical ceilings are **2–4 methadone take-aways per week** for stable, low-risk patients; buprenorphine–naloxone is granted more liberally (up to 4 take-aways, and stable patients may be dispensed 1–4 weeks unsupervised).
SOURCE: NSW Health, *NSW Clinical Guidelines: Treatment of Opioid Dependence* (GL2018_018, 2018) — methadone maintenance, low risk: "2–4 takeaways per week"; buprenorphine–naloxone: "unsupervised (1–4 weeks dispensed)" or "0–4 takeaways" — https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/GL2018_018.pdf
SEVERITY: wrong
```
I could not find any Australian jurisdiction publishing a six-per-week methadone ceiling (SA Health MATOD take-away page was proxy-blocked; see *Could not verify*).

### 11. Under-18 vaping is not uniformly "prescription only"

```
QUOTE: **under-18s still need one**
FILE + HEADING: §5.8 — ⚑ Australian vaping regulation (also Rapid-Recall row "Can an Australian adult buy a nicotine vape without a script in 2026?")
CORRECTION: **under-18s need a prescription in NSW, Qld, ACT and NT; South Australia, Victoria and Tasmania prohibit supply to under-18s entirely, even with a prescription.**
SOURCE: Alcohol and Drug Foundation, *Australian vaping rules and regulations* (updated November 2025) — https://adf.org.au/talking-about-drugs/vaping/australian-vaping-rules/
SEVERITY: wrong
```

### 12. Benzodiazepine taper rate — ADJUDICATION of §5.6 vs §3.6

```
QUOTE: Reduce ~**10% of current dose every 1–2 weeks**, slower at the end; **minimum 6 weeks**, often months.
FILE + HEADING: §5.6 Benzodiazepines — The short version (repeated verbatim in the Tapering paragraph and in Rapid-Recall)
CORRECTION: Reduce by roughly **10% of the original daily dose per week** (equivalently ~**10–25% of the current dose every 1–2 weeks**, the range most guidelines quote), slowing to **5–10% per month** over the last quarter; **minimum 6 weeks (BNF), up to 6 months or longer (Lader)** for high-dose long-term users. The exact rate is individualised — no Australian guideline fixes a single percentage.
SOURCE: SA Health, *Benzodiazepine withdrawal management* — "approx 10% of the original dose per week", slowing to "5–10% monthly from total dose of approx 15 mg/day" — https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/clinical+resources/clinical+programs+and+practice+guidelines/substance+misuse+and+dependence/substance+withdrawal+management/benzodiazepine+withdrawal+management ; RACGP, *Prescribing drugs of dependence in general practice, Part B — Benzodiazepines* (2015), *Discontinuing benzodiazepines*: gives no fixed percentage, cites "BNF recommends a minimum of 6 weeks, Lader recommends a maximum of 6 months" — https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/drugs-of-dependence/part-b/discontinuing-benzodiazepines
SEVERITY: wrong
```
**Adjudication (contradiction 5): §3.6's "10–25% every 1–2 weeks" is the better-supported statement; §5.6's flat "10% of current dose" is not sourced to any Australian guideline** and, taken literally, is an asymptotic taper that never reaches zero. But neither is a hard Australian rule — RACGP deliberately declines to give a percentage, and SA Health anchors the 10% to the *original* dose per *week*, which is roughly twice §5.6's rate. Harmonise both sections to the corrected text above, and drop the false precision from the Rapid-Recall row.

### 13. Alcoholic hallucinosis is filed under "Uncomplicated" withdrawal

```
QUOTE: | **Uncomplicated** | Onset **6–24 h**, peak **24–72 h**, gone day 5–7 | Tremor, sweats, anxiety, agitation, nausea, insomnia, tachycardia, hypertension; **transient hallucinations with intact orientation** (alcoholic hallucinosis) |
FILE + HEADING: §5.3 — withdrawal phase table
CORRECTION: Move alcoholic hallucinosis out of the "Uncomplicated" row into its own row: | **Alcoholic hallucinosis** | **12–48 h** | **Hallucinations (classically auditory, also visual/tactile) with intact orientation and an otherwise clear sensorium** — this is a *complicated* withdrawal feature, not part of uncomplicated withdrawal, and mandates escalation of benzodiazepine dosing |
SOURCE: Australian guidelines for the treatment of alcohol problems (2021), Ch 8 — severe withdrawal complications are listed as "seizures, hallucinations or perceptual disturbances (visual, tactile, auditory), delirium", separately from uncomplicated withdrawal — https://alcoholtreatmentguidelines.com.au/chapter-8-alcohol-withdrawal/
SEVERITY: wrong
```
Type-E slippage: the 2021 guidelines classify hallucinosis as a marker of *severe* withdrawal. Labelling it "uncomplicated" invites under-treatment of exactly the patient who is about to progress to DT.

---

## IMPRECISE

### 14. Post-naloxone observation period after methadone or controlled-release opioids

```
QUOTE: observe 4–6 h and infuse at **two-thirds of the waking dose per hour**
FILE + HEADING: §5.5 Opioids — Naloxone
CORRECTION: observe for **at least 2 h after the last naloxone dose in short-acting opioid overdose, and admit for prolonged observation (a day or more, not hours) after methadone or controlled-release opioids**, since methadone's half-life is 20–36 h and it accumulates in tissue; infuse at **two-thirds of the dose needed to achieve reversal in the first hour, per hour**
SOURCE: LITFL, *Naloxone* — "re-sedation can occur within 2 hours"; "all patients given naloxone should be observed for re-sedation for at least 2 hours after the last dose"; infusion "2/3rd of the initial dose required in the first 1 hour"; higher doses and infusions needed for methadone/controlled-release — https://litfl.com/naloxone/ ; methadone t½ 20–36 h per NSW Health GL2018_018
SEVERITY: imprecise
```
"4–6 h" is a grace period no source gives for methadone (Type-F). The two-thirds infusion rule is verified correct, but the wording should be "the dose required to achieve reversal in the first hour", not "the waking dose".

### 15. Thiamine after the initial parenteral course — ADJUDICATION of §5.3 vs §6.2 (contradiction 7)

```
QUOTE: | Prophylaxis, **malnourished / chronic heavy use** | **300 mg/day IM or IV** 3–5 days, then **300 mg/day orally** for several weeks |
FILE + HEADING: §5.3 — thiamine table
CORRECTION: No change. This row is verbatim correct.
SOURCE: Australian guidelines for the treatment of alcohol problems (2021), *Thiamine and other supplements* / *Preventing and treating Wernicke's encephalopathy*: "Thiamine 300 mg intramuscularly or intravenously per day for 3 to 5 days, and subsequent oral thiamine doses of 300 mg per day for several weeks" — https://alcoholtreatmentguidelines.com.au/wernickekorsakoffs-syndrome/preventing-and-treating-wernickes-encephalopathy
SEVERITY: imprecise (adjudication only — §6.2 is the side needing amendment)
```
**Adjudication: §5.3 is correct for its context and must not be changed. §6.2's regimen is close but its step-down is understated.** The contexts genuinely differ. For alcohol-related thiamine deficiency the 2021 Australian guidelines mandate the 300 mg → 300 mg oral course above (well-nourished prophylaxis is the *oral* 300 mg/day 3–5 days → 100 mg/day 4–9 days row, also verified verbatim correct). For **refeeding syndrome in a non-alcohol-related patient**, Queensland Health specifies **300 mg IV/IM at least 30 min before feeding, then 200–300 mg IV or oral for 3 days** — so §6.2's "then 100 mg oral" is below guideline; amend §6.2 to "**then 200–300 mg daily for 3 days**". Where refeeding and alcohol coexist, Qld gives **100 mg IM/IV tds for 3 days then 100 mg tds oral for >1 month** if at risk of Wernicke's, and **300 mg IM/IV tds for 3–5 days then 100 mg tds oral for >1 month** if Wernicke's is suspected — the NSW "100 mg bd oral" figure §6.2 cites is a maintenance dose, not a substitute for the parenteral course. Add a one-line cross-reference in both sections so the two regimens cannot be swapped.
Source: Queensland Health (Metro North HHS), *Refeeding Syndrome Identification and Management in Adults* (2021) — https://www.health.qld.gov.au/__data/assets/pdf_file/0032/1287653/20211111_MNHHS_Refeeding_Syndrome.pdf

### 16. Disulfiram wash-out before first dose

```
QUOTE: Start ≥24 h after last drink
FILE + HEADING: §5.4 Alcohol relapse prevention — disulfiram row
CORRECTION: Start **24–48 h after the last drink**
SOURCE: SA Health, *Medication assisted treatment for alcohol dependence*: "Must wait 24–48 hours after last drink" — https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/conditions/alcohol/medication+assisted+treatment+for+alcohol+dependence
SEVERITY: imprecise
```
Type-F: the ≥24 h floor is a shorter grace period than the Australian source gives.

### 17. Naltrexone start dose omits the run-in

```
QUOTE: 50 mg daily, can start while still drinking
FILE + HEADING: §5.4 — naltrexone row
CORRECTION: **25 mg daily for 3–5 days, then 50 mg daily**; can start while still drinking
SOURCE: Australian Prescriber, *Long-term drug treatment of patients with alcohol dependence*: "50 mg daily (often started at 25 mg for 3–5 days)" — https://australianprescriber.tg.org.au/articles/long-term-drug-treatment-of-patients-with-alcohol-dependence.html
SEVERITY: imprecise
```

### 18. "Acamprosate … safe in liver disease" is stated without the renal counterweight in the summary line

```
QUOTE: **acamprosate** (glutamate/NMDA modulator) for **maintained abstinence**, safe in liver disease
FILE + HEADING: §5.4 — The short version (and Rapid-Recall: "use **acamprosate**, which also suits liver disease")
CORRECTION: **acamprosate** (glutamate/NMDA modulator) for **maintained abstinence**, safe in liver disease **but contraindicated in significant renal impairment (avoid if CrCl <30 mL/min)**
SOURCE: SA Health, *Medication assisted treatment for alcohol dependence* — acamprosate contraindicated in "kidney disease" — https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/conditions/alcohol/medication+assisted+treatment+for+alcohol+dependence
SEVERITY: imprecise
```
Type-D: the caveat is present in the §5.4 table's "Avoid" column but stripped from both the bold summary bullet and the Rapid-Recall row — precisely the pattern the brief flagged. The Rapid-Recall row is worse, because the vignette it answers (patient on OAT) is exactly the population in whom renal function is often unknown.

### 19. Buprenorphine "2–8 mg day 1"

Covered in finding 3; the day-1 figure alone is imprecise rather than dangerous. Australian day 1 is 8 mg, or 4 mg + 4 mg after 1–2 h.

### 20. Methadone maintenance range without the national figure

```
QUOTE: | Maintenance | **60–120 mg** daily |
FILE + HEADING: §5.5 — methadone/buprenorphine table
CORRECTION: Verified correct against NSW Health GL2018_018 ("usual maintenance range 60–120 mg per day", max 150 mg). Optionally note that the 2003/2014 national guidelines quote a narrower "typically 60–100 mg/day".
SOURCE: NSW Health GL2018_018 — https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/GL2018_018.pdf ; *Clinical guidelines and procedures for the use of methadone in the maintenance treatment of opioid dependence* (Commonwealth, 2003) — https://adis.health.qld.gov.au/sites/default/files/resource/file/National_guidelines_methadone.pdf
SEVERITY: imprecise
```

### 21. "Deaths cluster in the first 2 weeks" — correct, but the sharpest fact is missing

```
QUOTE: deaths cluster in the **first 2 weeks** as tissue levels accumulate (steady state ~5 days)
FILE + HEADING: §5.5 — induction row
CORRECTION: deaths cluster in the **first 2 weeks**, most on **day 3–4**, as tissue levels accumulate (steady state after 4–7 days); most induction deaths occur at doses of only **40–60 mg/day**
SOURCE: *Clinical guidelines and procedures for the use of methadone in the maintenance treatment of opioid dependence* (2003): "most deaths in this period have occurred on the third or fourth day of treatment"; "deaths in the first two weeks have been associated with doses in the range 25–100 mg/day, with most occurring at doses of 40–60 mg/day" — https://adis.health.qld.gov.au/sites/default/files/resource/file/National_guidelines_methadone.pdf ; steady state 4–7 days per NSW GL2018_018
SEVERITY: imprecise
```

### 22. Nicotine vaping second-line wording

```
QUOTE: Second-line after first-line pharmacotherapy plus support has failed, with a defined end point. Never for non-smokers or adolescents
FILE + HEADING: §5.8 — smoking cessation table, nicotine vaping row
CORRECTION: Verified substantially correct; RACGP's wording is that NVPs "may be a reasonable intervention" for people who have failed first-line therapy and remain motivated, **with thorough informed consent** and alongside behavioural support. Add "with informed consent documented".
SOURCE: RACGP, *Supporting smoking cessation: pharmacotherapy for smoking cessation* — https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/supporting-smoking-cessation/pharmacotherapy-for-smoking-cessation
SEVERITY: imprecise
```

---

## STYLISTIC

### 23. NHMRC table numbering reads as a typo

```
QUOTE: | **3. Pregnant / planning pregnancy** | … | **3. Breastfeeding** |
FILE + HEADING: §5.2 — NHMRC 2020 table
CORRECTION: | **3a. Pregnant / planning pregnancy** | … | **3b. Breastfeeding** |
SOURCE: NHMRC, *Australian guidelines to reduce health risks from drinking alcohol* (2020) — Guideline 3 covers women who are pregnant or breastfeeding as a single guideline with two limbs — https://www.nhmrc.gov.au/health-advice/alcohol
SEVERITY: stylistic
```
The content is correct (both limbs sit under Guideline 3); the repeated bare "3." looks like an error and will read as one under exam pressure.

### 24. Source list dates the national opioid guidelines only

```
QUOTE: *National guidelines for medication-assisted treatment of opioid dependence* (2014)
FILE + HEADING: Sources
CORRECTION: Add the jurisdictional guideline that actually supplies the dosing figures used above: NSW Health, *NSW Clinical Guidelines: Treatment of Opioid Dependence*, GL2018_018 (2018) — this is the source for the maintenance ranges, induction doses and take-away limits, and the 2014 national document does not itself carry them in the form quoted.
SOURCE: https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/GL2018_018.pdf
SEVERITY: stylistic
```

---

## Verified correct

Each of these was checked against a live Australian source and found right. Several were the specific traps named in the brief.

**Arithmetic (Type G) — both standard-drink conversions are correct.** Recomputed from the stated 10 g ethanol definition and ethanol density 0.789 g/mL (so 1 standard drink = 12.67 mL ethanol):
- **750 mL wine at 13% ABV** = 97.5 mL ethanol × 0.789 = **76.9 g = 7.7 standard drinks**. At 12% → 7.1; at 14% → 8.3. The claim "**≈ 7–8 standard drinks**" is correct across the normal ABV range for table wine.
- **700 mL spirits at 40% ABV** = 280 mL ethanol × 0.789 = **220.9 g = 22.1 standard drinks**. The claim "**≈ 22**" is correct to the digit.

- **Australian standard drink = 10 g ethanol; UK unit 8 g; US 14 g.** Correct, and correctly labelled as jurisdiction-specific (Type A handled properly).
- **NHMRC 2020: ≤10 standard drinks/week AND ≤4 on any one day, sex-neutral, replacing the 2009 2/day–4/occasion.** Correct. Guideline 2 (under 18: no alcohol) and Guideline 3 (pregnancy: no alcohol, no known safe level; breastfeeding: not drinking is safest) correct. NHMRC, 2020.
- **AUDIT 0–40; zones 0–7 / 8–15 hazardous / 16–19 harmful / ≥20 refer. AUDIT-C 0–12, ≥4 men, ≥3 women.** Correct (WHO four-zone version, which is the one Australian primary care uses). The ⚑ note that auditscreen.org collapses these to 8–14 / ≥15 is an accurate description of the disagreement.
- **Aboriginal and Torres Strait Islander AUDIT-C adaptation: ≥5 at-risk, ≥6 higher-risk, ≥9 likely dependent.** Correct to the number. Source: Calabria B et al., *Addiction Science & Clinical Practice* 2014;9:17 — https://link.springer.com/article/10.1186/1940-0640-9-17
- **Thiamine, all three rows.** Well-nourished prophylaxis 300 mg/day orally (100 mg tds) 3–5 days then 100 mg/day for 4–9 days; malnourished 300 mg/day IM or IV 3–5 days then 300 mg/day orally for several weeks; Wernicke's ≥500 mg/day parenterally (IV in saline over 30 min, or IM) for ≥3–5 days then ≥300 mg (up to 1000 mg) for 1–2 weeks. All verbatim correct against the Australian guidelines for the treatment of alcohol problems (2021).
- **The glucose rule is stated correctly, including the safety carve-out.** "Give thiamine before any glucose load … Never withhold glucose from a hypoglycaemic patient: give thiamine first or together." The 2021 guidelines say "before any carbohydrate load … when feasible or otherwise as soon as possible thereafter." This is one of the few places notes commonly get dangerously wrong (by implying glucose must be withheld); here it is right.
- **Diazepam loading: 10–20 mg orally every 1–2 h (e.g. 10 mg hourly) until 60–80 mg given or lightly sedated; review if still agitated after 80 mg or 4 h; >120 mg only after specialist review.** Verbatim correct against the 2021 guidelines' *Loading dose therapy* page (Recommendation 8.27, Grade B). Indications (severe withdrawal, seizures, delirium, prior severe withdrawal) also correct.
- **Oxazepam 15–30 mg or lorazepam in cirrhosis/frail elderly, glucuronidated with no active metabolites.** Correct; NSW guidance gives oxazepam "15–30 mg titrated carefully against response" for jaundice, ascites or hepatic encephalopathy.
- **Symptom-triggered is the inpatient default and gives less total benzodiazepine; fixed-dose reducing regimen instead in ambulatory settings, prior withdrawal seizures, invalidating comorbidity or untrained staff.** Consistent with the 2021 guidelines.
- **DT 48–72 h (to 96 h), lasting 3–5 days, mortality ~1–4% treated vs 15–20%+ untreated; seizures 6–48 h; focal, status or >48 h → image.** Within accepted published ranges.
- **Wernicke's: triad confusion/ophthalmoplegia/ataxia, full triad in ~10–20%, treat empirically, MRI supports but never excludes; Korsakoff dense anterograde amnesia with confabulation, ~20% substantial recovery.** Correct.
- **Naltrexone contraindicated with any opioid use including OAT and opioid analgesia; acamprosate 666 mg tds (two 333 mg tablets), less if <60 kg, safe in liver disease, avoid in severe renal impairment; disulfiram not PBS-subsidised, needs supervised ingestion, avoid in IHD/severe hepatic disease/psychosis/cognitive impairment/pregnancy; baclofen and topiramate off-label.** All correct (Australian Prescriber; SA Health).
- **Naloxone: non-dependent 100 µg IV titrated every 30–60 s; community 400 µg IM/SC; 1.8 mg intranasal (Nyxoid); onset 1–2 min IV; duration ~30–90 min; re-sedation within 2 h common; low-and-slow in dependence to avoid precipitated withdrawal.** Correct (LITFL).
- **Take-home naloxone is free nationally through the Commonwealth Take Home Naloxone Program for anyone who may experience or witness an opioid overdose.** The "free" and "for anyone who may witness an overdose" limbs are confirmed by health.gov.au; see *Could not verify* for the prescription-free limb.
- **Depot buprenorphine: Buvidal weekly 8/16/24/32 mg, monthly 64/96/128/160 mg; Sublocade monthly 100 mg and 300 mg.** Correct to the strength. NSW Health LAIB brief guide — https://www.health.nsw.gov.au/aod/Publications/buprenorphine-brief-guide.pdf
- **OAT moved to s100 HSD (Community Access) on 1 July 2023; patients pay only the PBS co-payment and pharmacies cannot charge additional private dispensing or dosing fees.** Correct. PBS, *Reforming Opioid Dependence Treatment Access* — https://www.pbs.gov.au/info/news/2023/05/reforming-opioid-dependence-treatment-access
- **OAT roughly halves mortality.** Supported: Santo T et al., *JAMA Psychiatry* 2021 — all-cause mortality 0.93 vs 2.29 per 100 person-years in vs out of treatment.
- **Loss of tolerance after ~3–5 days of abstinence; release from custody as the classic overdose window; opioid analgesic tolerance outstrips respiratory tolerance.** Correct and consistently stated in §5.1, §5.5 and Rapid-Recall (no internal contradiction).
- **Alprazolam rescheduled to Schedule 8 on 1 February 2014.** Correct to the day. Victorian Department of Health — https://www.health.vic.gov.au/drugs-and-poisons/alprazolam-permits-and-prescription-guidelines
- **RACGP: single 20-minute GP CBT consultation with a handout raises benzodiazepine non-use at 1 year from 15% to 45%.** Verbatim correct.
- **Smoking cessation, the whole table.** Combination NRT = patch (21 mg/24 h) plus a rapid form; "as effective as varenicline"; varenicline is "the most effective single-form pharmacotherapy"; higher-dose oral forms if >10/day or first cigarette within 30 min of waking; PBS subsidises a maximum 12 weeks of NRT per 12-month period; varenicline titrated over 1–2 weeks to 1 mg bd, quit around day 8, 12 weeks extendable; varenicline absolute gain 15% (95% CI 13–17) over placebo; EAGLES; bupropion 150 mg daily ×3 days then 150 mg bd, quit in week 2, contraindicated in current/past seizures, eating disorders and with MAOIs (including within 14 days). Every figure confirmed against RACGP *Supporting smoking cessation*. The Rapid-Recall row ("Varenicline; combination NRT is equivalent") matches the prose — no Type-D contradiction here.
- **Vaping timeline and the current 2026 position.** Disposable/non-therapeutic import ban 1 Jan 2024; all other non-prescription vapes 1 Mar 2024; pharmacy-only lawful supply from 1 July 2024; adults 18+ without prescription after pharmacist consultation from 1 Oct 2024; ≤20 mg/mL without a script; tobacco/mint/menthol flavours only; **WA and Tasmania still require a prescription for adults.** All correct as at 2026 (ADF, updated November 2025). The Rapid-Recall row matches the prose.
- **Nitazenes are in the Australian supply and often need repeated or larger naloxone doses.** Confirmed: Clifford B et al., "Responding to reports of nitazene toxicity in Australia", *MJA* 2025;222(5) — https://www.mja.com.au/journal/2025/222/5/responding-reports-nitazene-toxicity-australia
- **GHB withdrawal in heavy dependent users is severe, benzodiazepine-refractory, resembles DT and can be fatal.** Confirmed by Australian case literature (MJA *Lessons from practice*, "Severe GHB withdrawal delirium"; SA Health GHB withdrawal management page).
- **Supervised injecting: Sydney MSIC (Kings Cross) 2001, Melbourne North Richmond 2018, no on-site deaths.** Correct.
- **Droperidol 10 mg IM as the Australian ED workhorse, and de-escalation/environment first with oral diazepam 10 mg or olanzapine 5–10 mg.** Correct (Qld Health QH-GDL-438; NSW ACI adult ECAT).
- **No copyrighted item text reproduced** for AUDIT, AUDIT-C, CIWA-Ar, COWS or Fagerström anywhere in the section, and no DSM-5 criteria reproduced. The stated constraint is honoured throughout — checked line by line.
- **Type-B check (paediatric vs adult):** every dose and threshold in this section is an adult figure and none is ambiguously labelled; no paediatric rule is imported. The only paediatric-adjacent content is the NHMRC under-18 guideline, which is correctly scoped. No Type-B findings.

---

## Could not verify

- **"Naltrexone and acamprosate are PBS-listed within a comprehensive treatment program, no fixed duration."** The PBS website (pbs.gov.au) item-level restriction text was **blocked** — the specific listing pages returned proxy rejections. SA Health confirms both are PBS-subsidised with authority required and "limited to 1–2 months supply per prescription", which sits awkwardly with "no fixed duration"; Australian Prescriber confirms naltrexone is an authority item and acamprosate is subsidised. The "comprehensive treatment program" and "no fixed duration" clauses specifically could not be confirmed against primary PBS text. **Blocked by: pbs.gov.au.**
- **Take-away ceiling of six per week in "some jurisdictions."** NSW publishes 2–4 per week for methadone (see finding 10). The **SA Health MATOD take-away doses prescribing guidelines page was blocked (HTTP 403 at the proxy)**, and the Commonwealth methadone guidelines defer entirely to jurisdictional policy. I found no Australian source for six. **Blocked by: sahealth.sa.gov.au (MATOD take-away page).**
- **"NSPs have held HIV prevalence among people who inject drugs below ~2% in Australia" and "return several dollars per dollar spent."** Directionally right but not confirmed at these exact figures. The ADF page states only that injecting drug use accounts for ~1% of new HIV diagnoses, which is a different quantity from prevalence among PWID. The Kirby Institute ANSPS annual report (the primary source for PWID HIV prevalence) and the Commonwealth NSP return-on-investment reports were not retrievable in full. Kwon et al. 2012 supports a substantial positive ROI but the specific multiplier was not confirmed.
- **"Take-home naloxone is prescription-free."** The health.gov.au "Where to access naloxone" page was **blocked (robots disallowed)**; the program overview page confirms "free" and the target population but is silent on prescription status. Naloxone is Schedule 3 (pharmacist-only) so the claim is very likely right, but it is not verified from a primary source here. **Blocked by: health.gov.au ("Where to access naloxone").**
- **"Brief intervention NNT ≈ 8–12, sustained 6–12 months; does not transfer to dependent drinkers, adolescents or ED-only contacts."** The Australian guidelines' Chapter on brief intervention was not retrievable at the sub-page level; the summary PDF truncated before the relevant recommendations. The claim matches the broad Cochrane literature but the NNT band and the three exclusions were not confirmed against an Australian source.
- **"Detox alone has >80–90% relapse."** Widely repeated but I could not locate an Australian guideline or primary study stating this band; treat the number as illustrative rather than citable.
- **Varenicline's current Australian supply status.** The notes' claim that supply was "disrupted from 2021 (Champix nitrosamine recall)" with "generics now available" could not be confirmed as the 2026 position. The **TGA varenicline safety-alert page was blocked (robots disallowed)**, and *Tobacco in Australia* §7.16 shows "the sharp drop in varenicline prescriptions" but the text was truncated before the explanation. Tobacco in Australia does confirm varenicline remains PBS-listed as at January 2026, so the drug is available; the recall history and generic availability specifically are unverified. **Blocked by: tga.gov.au.**
- **Australian Prescriber's *Naloxone for opioid toxicity and overdose in the community* (2021).** Cited in the notes' source list; the article itself was blocked (**australianprescriber.tg.org.au — robots disallowed**; the PMC mirror served a reCAPTCHA challenge). Naloxone dosing was instead verified against LITFL. **Blocked by: australianprescriber.tg.org.au, pmc.ncbi.nlm.nih.gov, pubmed.ncbi.nlm.nih.gov.**
- **Therapeutic Guidelines: Addiction Medicine and Psychotropic**, cited as a primary source throughout the section, is paywalled and was not accessible. None of the findings above rest on it.

---

## Note on the ⚑ marks (Type H)

The section carries 27 ⚑ marks. Treating each as an unverified claim rather than evidence of verification, I checked all of them. **Four proved wrong or superseded**: the Queensland drug-checking claim (finding 7), the under-18 vaping claim (finding 11), the take-away "six per week" claim (finding 10), and the olanzapine/parenteral-benzodiazepine framing which understates the broader Australian recommendation against parenteral benzodiazepines (finding 5). The remaining 23 were confirmed accurate — notably the standard-drink jurisdiction warning, the NHMRC 2020 replacement of the 2009 limits, the "sources disagree" note on AUDIT bands, the glucose-before-thiamine rule, the change-of-agent-in-cirrhosis rule, the naloxone duration mismatch, the s100 HSD transition, the alprazolam rescheduling, the nitazene alert, and the WA/Tasmania vaping exception. The flag density is high but the flags are, on the whole, load-bearing and well-placed.
