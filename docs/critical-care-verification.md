# Critical Care — verification record

Built and verified 17 August 2026, 28 days out. Step 2 of `docs/notes-build-order.md`.
Procedure followed: `docs/system-build-playbook.md`, Part 2.

**Before:** no notes system at all, against **33 questions sitting in the quiz bank** —
the worst state in the library, and the same invisible-gap shape that Urology, ENT and
Geriatrics had. **After:** 60,299 words across 8 notes averaging **7,537 words**, the
largest system in the library.

Only 2 of 100 past-paper questions are tagged Critical Care, so the true exam yield is
modest and this build is not a claim otherwise. It exists because being quizzed 33
times on something with no revisable notes is indefensible four weeks out, and because
several of its topics — mechanical ventilation, propofol infusion syndrome, targeted
temperature management, TCA overdose — appeared **nowhere** in the previous 546,000
words.

---

## What was checked, and how

Seven section agents wrote sections 1–7 (all seven launched, **all seven verified
present on disk before the dependent step** — the mechanism from playbook §1). A
recognition-summary agent then read all seven and **flagged contradictions rather than
resolving them**. Five independent adversarial reviewers, one per one-or-two sections,
each instructed to *find errors rather than confirm the work*, to verify every number
against a current Australian source by web search rather than from memory, and to name
the sites that blocked them.

**84 findings: 8 dangerous, 21 wrong, 52 imprecise, 3 stylistic.** Applied by
exact-string substitution; **none failed to match**. **Nine cross-section
contradictions** were adjudicated against a source — seven confirmed and fixed, **two
rejected as false findings**.

| Reviewer | Sections | Dangerous | Wrong | Imprecise | Stylistic |
|---|---|---|---|---|---|
| 1 | 1 Resuscitation, 2 Undifferentiated presentations | 1 | 3 | 11 | 0 |
| 2 | 3 Shock, fluids, transfusion | 0 | 6 | 11 | 1 |
| 3 | 4 Sepsis, 5 Ventilation | 1 | 4 | 8 | 0 |
| 4 | 6 Organ support and ICU complications | 3 | 6 | 11 | 1 |
| 5 | 7 Poisoning and environmental | 3 | 2 | 11 | 1 |

---

## The finding that reached outside this system

**Warfarin reversal is out of date in six other systems.** Section 3's author asserted
that **Prothrombinex-VF (3-factor) was replaced by Beriplex (4-factor) in June 2024 and
that FFP is no longer required** — which flatly contradicted the Surgery notes, where
"3-factor plus FFP" had itself been applied as a *dangerous correction* during that
build.

A reviewer was sent to settle it against the TGA, the National Blood Authority,
Lifeblood, CSL Behring Australia, THANZ and the MJA. **Critical Care was right and
Surgery was wrong.** Prothrombinex-VF was supplied until around June 2024; Lifeblood
now states plainly that **FFP is not required**, with vitamin K 5–10 mg IV plus PCC
50 IU/kg (capped at 100 kg) for critical bleeding. Separately, **andexanet alfa was
removed from the ARTG on 20 May 2026**, so Australian factor Xa reversal is now
PCC-based.

Corrected in **Surgery** (master + two section files), **ENT**, **Haematology &
Oncology** (two notes), **Cardiology** and **Neurology** (two notes) — 19 edits across
nine files, each `⚑`-marked and written so the *old* answer is recognisable as the old
answer, because every other textbook the student owns still says "3-factor plus FFP".

Two remaining mentions in `notes/haematology-oncology/additional-notes.md` and
`notes/anaesthetics/1-preoperative-assessment.md` are **verbatim ANU source text** and
were left alone; they belong in `docs/notes-errata.md` rather than being silently
rewritten.

**This is the first time a system build has corrected a different, already-verified
system.** Worth noting as a property of the pipeline: independent verification of a new
system is also a re-test of the old ones wherever they overlap.

---

## The dangerous eight

- **Empirical antibiotic doses in septic shock (§4.6).** The table reproduced
  Queensland Health's **sepsis-*without*-shock** column. In septic shock tobramycin is
  **7 mg/kg (max 700 mg)**, not 4–5 mg/kg (max 500 mg), and unknown-source cover adds
  ceftriaxone. Both columns are now present and explicitly labelled.
- **BLS termination of resuscitation (§1.8).** "No bystander CPR" was given as a BLS
  criterion. It is an **ALS** one. The BLS rule (ANZCOR 10.5.3) is no shockable rhythm,
  unwitnessed by EMS, no ROSC.
- **Paediatric brain death (§6.12).** "Very premature" had to become **any infant born
  before 37 weeks**, and two rules were missing entirely: **no determination before 24
  hours of age**, and **24-hour plus a further 24-hour** observation intervals from 24
  hours to 30 days. Now labelled *PAEDIATRIC ONLY — never apply to an adult*.
- **Propofol dose caps (§6.3).** The section framed 4 vs 5 mg/kg/h as an
  adult-versus-paediatric disagreement. It is not — the **Australian PI caps adult ICU
  sedation at 4 mg/kg/h too**, so 5 mg/kg/h is a **PRIS reporting threshold, not a
  permitted adult dose**. A fabricated adult-vs-paediatric divergence is the same
  failure mode as a fabricated guideline disagreement.
- **Peripheral potassium in DKA (§6.9).** "A limited period" is a **hard 4-hour
  ceiling** (WACHS), after which a central line or HDU is required.
- **IV calcium in digoxin toxicity (§7.11).** "Avoid IV calcium" was removed — Austin
  Health treats hyperkalaemia conventionally **including calcium**, and the "stone
  heart" concern is not evidence-based. The old teaching is still widespread, so it is
  named as the outdated answer rather than quietly deleted.
- **Sodium bicarbonate in sodium-channel blockade (§7.7).** "Large totals are normal"
  was replaced with the actual caps: **100 mL per bolus, 6 mL/kg total** (ANZCOR 11.10).
  A dose without its ceiling is the shape of error that has been rated dangerous before.
- **Sulfonylurea overdose in children (§7.12).** Monitoring is **24 hours**, not
  "12–24 h" — onset can be delayed up to 18 hours.

---

## The nine cross-section adjudications

The recognition summary runs **twice** — once before verification to build the
verifier's target list, and again after corrections land. That second pass is new this
build (encoded after Psychiatry) and it earned its place: three of the nine conflicts
below were only visible after the correction pass, because five editors working on
their own files cannot see each other's wording.

**Confirmed real, and fixed:**

| Conflict | Resolved to | Decided by |
|---|---|---|
| Post-ROSC SpO₂ — §1 gave **94–98%**; §5.3 called 94–98% "the UK/BTS figure" and "the only genuine Australia-vs-UK oxygen split" | **§1 correct.** ANZCOR 11.6.1 (Feb 2026) specifies 94–98% post-ROSC — context-specific, not British. §5.3 rewritten: TSANZ 92–96% general / 88–92% at-risk; BTS 94–98% / 88–92%; the "only split" claim deleted | ANZCOR 11.6.1; TSANZ. Two reviewers independently |
| Asthma ventilator rate — §1.12 **<10/min** vs §5.11 **≈10–14/min** | **8–10/min** in both. 10–14 invites the dynamic hyperinflation the same paragraph warns about | ERC; ANZCOR special circumstances |
| Peripheral potassium — §3.7 requiring **central access** for 20 mmol/h vs §6.9 permitting it **peripherally** in DKA | **Both partly wrong.** One identical rule now in both sections: 40 mmol/L max peripherally; 10 mmol/h general; **20 mmol/h peripherally with a volumetric pump** and continuous cardiac monitoring — the *pump*, not central access, is the requirement — in severe hypokalaemia and adult DKA, with a **4-hour ceiling** on the DKA exception | Queensland Health v7.00 (2023); WACHS |
| Sodium bicarbonate — §1.6 **1 mmol/kg over 2–3 min** vs §7.7 **1–2 mmol/kg repeated** | **Both correct for their own context**, now labelled. ANZCOR 11.5 for arrest; ANZCOR 11.10 for sodium-channel blockade, with the 100 mL / 6 mL/kg caps now stated in both places | ANZCOR 11.5 and 11.10, both fetched; Austin Health (Oct 2022) |
| MAP targets stated four ways across four sections | Four genuinely different contexts — post-ROSC, shock, septic shock, brain-death testing. All now context-labelled | Reviewers 1 and 3 |
| §3.5 pointing to "CC §1" for anaphylaxis; §4.13 pointing to "§1" for post-intensive care syndrome | Both repointed — anaphylaxis to **Immunology & Allergy** and **Paediatrics §3**, PICS to **§6** | Internal |

**Rejected — the flag was wrong and the text was right:**

| Flagged as | Verdict |
|---|---|
| Between the Flags urine output, Yellow "<100 mL over 4 h" vs Red "<200 mL over 8 h" being the same rate | **False finding.** These are the real NSW criteria; they escalate by **duration**, not rate. Text unchanged, with the duration basis now made explicit |
| §7.12 HIET ceilings of 120 units/h and 1200 units/h contradicting each other | **False finding.** Austin Health v4.2 (2025): 120 units/h caps the **initial** 1 unit/kg/h rate; 1200 units/h caps the **maximum** 10 unit/kg/h rate. Both bind only above 120 kg, so the 70 kg worked example is internally consistent. Numbers unchanged |

Two false findings in nine is the expected cost of a flag-everything rule, and the
right trade. The alternative is a summary agent that resolves conflicts by preference,
which harmonised this library onto the wrong side twice during the Surgery build.

---

## Claims that survived the check

Worth recording, because the next reviewer should not spend the time again:

- **All four ANZCOR citations in §1 — 11.5 (Apr 2025), 11.6.1 (Feb 2026), 11.8 (Jun
  2024), 11.10 (Jul 2026) — are real, correctly numbered and correctly dated.** They
  were targeted specifically because a fabricated or misdated citation makes an error
  look like the product of checking, which is how a wrong AAA surveillance table
  survived a previous build.
- **Surviving Sepsis Campaign 2026 is real** — *Intensive Care Med* 2026;52:1–73,
  online 23 March 2026 — and says what §4 claims, including the 1-hour antibiotic
  recommendation for probable or definite sepsis **with or without shock**. ACSQHC
  independently ties its 60-minute target to **infection-related organ dysfunction**,
  not shock, which confirms the flag §4.6 carries.
- **The KDIGO AKI worked example is right in every step.** 80 → 190 µmol/L is 2.375×
  (stage 2); urine output 0.3 mL/kg/h for 8 h is stage 1 only; the higher of the two
  criteria determines the stage. **KDIGO 2012 remains the published edition** — the
  2026 revision is still in public review.
- **The paracetamol content is correct as written** — the Australian nomogram line of
  **150 mg/L (~1000 µmol/L) at 4 h** against the UK's 100 mg/L, the two-bag regimen, the
  22 g / 11 g caps with the 110 kg ceiling, the doubling above twice the nomogram line,
  the 8-hour rule and the cessation criteria, all against Chiew et al., MJA 2020. The
  20 g at 6 hours stem recomputes to **286 mg/kg** and the section's answer stands.
  This mattered: the Australian, UK and US lines differ, and presenting the wrong one as
  Australian is the single commonest error in this library.
- **The predicted-body-weight tidal volume calculation**, including the female constant
  of 45.5, verified against two sources and recomputed.

---

## Errors by taxonomy

**A — UK or US convention presented as Australian.** Still the largest category, and
this time it produced a **fabricated** split rather than an imported one: §5.3 invented
an Australia-vs-UK oxygen divergence and asserted it was the only one. The same section
prompt had explicitly warned against this, citing the bronchiolitis "Australian 90% vs
NICE 92%" discriminator that a previous build invented. **A warning in the prompt does
not prevent the error; only the verifier does.**

**B — paediatric rule applied to adults, or the reverse.** The propofol cap, the
sulfonylurea monitoring period, and the paediatric brain-death intervals. Section 6 was
predicted as the danger zone and delivered three of the eight dangerous findings.

**C — superseded fact stated confidently.** The warfarin reversal chain, cryoprecipitate
dosing (Lifeblood March 2026: **9 units**, and **3** units of large-dose apheresis since
that manufacture ceased), and andexanet's ARTG removal.

**D — summary line contradicting its own table.** **31 lines** fixed in the consistency
sweeps after corrections landed in the body.

**G — arithmetic.** Two worked examples were independently recomputed and **both were
right** (KDIGO staging, HIET dosing), and a third was wrong: the hypertonic saline
example said "two to three boluses" where a 70 kg man needs **4–6**. Consistent with
every previous build — arithmetic mostly survives, which is exactly why it stays cheap
to check.

**A new one: fabricated agreement.** §3.7 asserted that "WACHS and SESLHD agree on all
doses" and that "both share the same trigger (≥6.0)". **Both false.** A `⚑` is a claim
to be checked — and so is the absence of one. An invented *agreement* is as misleading
as an invented disagreement, and it is harder to spot because it reads as tidiness.

---

## Could not be verified — treat as unchecked

- **The TGA ARTG entry and news article for andexanet alfa** both timed out. The 20 May
  2026 removal was confirmed via **NSW CEC** instead — one source, not two.
- Anything resting on **Therapeutic Guidelines proper, the PBS, ACSQHC, AMH or
  PubMed/PMC full text** — all blocked. Reachable substitutes were used where they
  exist and are named in each section's source list.

---

## What is still missing

From the recognition summary's own `## Gaps`:

- **BLS and the AED sequence** as distinct from ALS.
- **Rhabdomyolysis** in its own right — it appears only as a complication (PRIS, heat
  stroke, stimulants, hyperkalaemia).
- **Post-intensive care syndrome** as a topic, and ICU follow-up clinics.
- **Track-and-trigger criteria outside NSW** — Q-ADDS and the SA Adult RDR are named
  but their calling criteria are not given, nor the maternal and paediatric charts.
- Acid–base **normal reference values** as a table.

---

## Standing rule

Nothing counts as built until an independent adversarial reviewer has checked the key
facts. Running total across seven systems: O&G 4, Paediatrics 58, the Urology/ENT/
Geriatrics trio 52, Surgery 41, Psychiatry 101, **Critical Care 84** — 340 verified
corrections, of which **34 were dangerous**.
