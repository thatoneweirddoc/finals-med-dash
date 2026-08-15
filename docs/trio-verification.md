# Urology / ENT / Geriatrics — build and verification, 15 Aug 2026

Three systems that between them account for **9 of every 100 real exam questions** and
previously had **no notes at all** — they were invisible on the dashboard because it
only ranked systems it already knew about.

| System | Sections | Words | Exam yield |
|---|---|---|---|
| Urology | 5 | 18,944 | 4 / 100 |
| ENT | 5 | 18,531 | 3 / 100 |
| Geriatrics | 6 | 24,680 | 2 / 100 |

Each was written through the v2 pipeline: one agent per section, every section
opening with a short-version summary and closing with a Rapid-Recall Discriminators
table, `⚑` on anything changed from older texts or where Australian practice diverges,
and a final recognition-summary section (syndrome lookups, signature findings,
confusable pairs, must-not-miss list, and every number gathered into one table).

Then **six independent adversarial reviewers**, instructed to find errors rather than
confirm the work. **52 corrections applied.** The build agents were told to verify
numbers as they wrote, and mostly did — but the review still found one section that
was not safe to revise from.

---

## The one that failed: the sore throat / ARF section

Reviewer verdict: *"NOT safe to revise from. Four substantive errors, including an
inverted first-line antibiotic and a wrong prophylaxis duration."*

This is the most Australian-specific, most examinable content in ENT, and it was
wrong in four ways at once:

1. **First-line agent inverted.** The notes gave oral phenoxymethylpenicillin as
   first-line with IM benzathine penicillin as the fallback. RHDAustralia has it the
   other way round — **IM benzathine benzylpenicillin G is preferred** in high-risk
   patients, because adherence is guaranteed and it is the same agent used for
   secondary prophylaxis.
2. **Secondary prophylaxis duration doubled.** Stated as "minimum 10 years or until
   21". For **ARF without RHD it is 5 years** or until 21, whichever is longer. Ten
   years is the *mild RHD* figure.
3. **Prophylaxis interval.** "Every 3–4 weeks" implies 21 days is routine. It is
   **28 days**, with 21 days only in defined high-risk circumstances.
4. **High-risk population defined by ethnicity alone.** The guideline defines risk by
   **setting and living circumstances** — First Nations peoples in rural or remote
   settings, and First Nations, Māori or Pacific Islander peoples in metropolitan
   households affected by crowding or lower socioeconomic status. The personal-history
   criterion also carries an **under-40** qualifier the notes dropped.
5. Sourced to the 2nd edition (2020); the **3rd edition (2025)** supersedes it.

## Other errors that would change an answer

- **Epididymo-orchitis stratified by age.** The notes used the familiar "<35 = STI,
  >35 = coliforms" split. The Australian STI Management Guidelines say chlamydia and
  gonorrhoea remain most likely in anyone **sexually active at any age**; enteric
  cover is triggered by insertive anal sex, instrumentation or obstruction. As
  written, a sexually active 40-year-old got cefalexin and his chlamydia was missed.
- **Denosumab.** The notes allowed a "missed dose given within 4–6 weeks" grace
  period, sitting immediately next to their own rebound-fracture warning. The
  Australian guideline says flatly that denosumab **should not be interrupted**, and
  that cessation requires transition to **bisphosphonate therapy for a minimum of
  12 months** — not a single zoledronic acid infusion.
- **Capacity table.** Voluntariness and adequacy of information were listed among the
  things *assessed* in determining capacity. They are elements of **valid consent**,
  not capacity. Given the past exam question asks which item is *not* assessed in
  determining capacity, this was the exact error that question is designed to catch.
- **Terminal antiemetic.** Metoclopramide was given as first-line with haloperidol
  second. NSW CEC anticipatory prescribing has **haloperidol first-line**, 1 mg subcut
  4-hourly PRN.
- **Amoxicillin+clavulanate in pyelonephritis** had no frequency, with 12-hourly
  given for cystitis in the row above — an invitation to underdose. It is **8-hourly**.
- **Acute otitis media observation threshold** stated as ≥2 years, which contradicted
  the note's own "bilateral in under-2s" rule. Observation is appropriate from
  **≥6 months**; the under-2 rule applies only to bilateral disease.
- **Austroads CPAP benchmark.** The ≥4 h/night on ≥70% of nights figure is the
  **commercial** driver standard; private drivers need documented compliance and
  response, with no number attached.
- **Amoxicillin in GAS pharyngitis** doubled (50 mg/kg → **25 mg/kg** once daily).
- **CSOM** defined at ≥2 weeks and attributed to Menzies — that is the **WHO** figure;
  the Australian OMA/Menzies definition is **≥6 weeks**.

## What survived checking, and is worth trusting

The two things most likely to have been fabricated turned out to be real, and both
were verified against the primary document:

- **The 2026 Australian prostate cancer early-detection guideline exists** and every
  element of the risk-stratified PSA table checks out verbatim — ≥3.0 µg/L at 50–69
  average risk, ≥1.0 at 45–49 higher risk, ≥2.0 at 50–69 higher risk, ≥5.5 at 70+,
  and the conditional recommendation against routine DRE as a PSA adjunct in primary
  care. Reviewer verdict: **safe to revise from**.
- **Therapeutic Guidelines: Antibiotic (March 2025) did demote trimethoprim** —
  **nitrofurantoin is now first-line for acute cystitis** on high *E. coli*
  resistance, with fosfomycin second and trimethoprim third. Also verified: the
  doses, durations, and the change that male cystitis is no longer automatically
  "complicated". Reviewer verdict: **safe to revise from**.

Also verified clean and left alone: the **Weber/Rinne interpretation table** (all five
rows checked independently), the **HINTS interpretation** including the
counter-intuitive rule that a *normal* head impulse test in acute vestibular syndrome
points central, the sudden SNHL definition and 14-day steroid window, the Bárány
criteria for Ménière's and vestibular migraine, DXA T-score thresholds, Medicare DXA
eligibility from 70, calcium and vitamin D intakes, TUG ≥12 s, the orthostatic
hypotension definition, the Clinical Frailty Scale and Fried counts, the NSW and
Victorian substitute decision-making hierarchies, and the confirmation that **Support
at Home replaced Home Care Packages on 1 November 2025**.

## Flagged, not fixed

- **Voluntary assisted dying in the NT.** Currently the exception, but a Bill was
  introduced in July 2026 with a vote scheduled for August — i.e. possibly before
  14 September. Re-check in early September.
- Several claims could not be verified because the source sites block automated
  fetching (ACSQHC, PBS, Therapeutic Guidelines behind its paywall). These are listed
  in the reviewers' reports rather than asserted as checked: the Delirium and Hip
  Fracture Clinical Care Standard quality statements, PBS criteria for cholinesterase
  inhibitors and osteoporosis agents, the KICA-Cog cut-offs, and the item-level 2023
  Beers claims.

## Cross-section inconsistencies caught before publication

The recognition-summary agents were told to read the preceding sections and flag
contradictions rather than silently pick one. They found eight, all resolved:
post-obstructive diuresis replacement fraction and monitoring interval, PSA starting
age across two guidelines, vestibular schwannoma trigeminal-sign timing, topical
decongestant duration, the antibiotic threshold in acute rhinosinusitis, the
bisphosphonate drug-holiday figure, and which form of elder abuse is commonest.

That mechanism is worth keeping — it is cheap, and it caught contradictions that no
single-section reviewer would have seen.
