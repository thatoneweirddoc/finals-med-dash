# Answer-key verification — past-paper quizzes, 14 Aug 2026

All 100 past-paper questions were re-checked by five independent adversarial
reviewers, one per block, each instructed to find errors rather than confirm the
work, and to verify anything numeric or guideline-specific against current
Australian sources rather than from memory.

**49 of 100 questions carried at least one issue.** That rate is the argument for
doing this at all: a wrong key does not merely waste a question, it teaches the
wrong fact and `recordResults` writes it into the tracker as mastery.

## Wrong or ambiguous keys — fixed

1. **COCP contraindications (2025-B).** The question had **two correct answers**.
   Smoking 30/day at age 29 is UKMEC category 2 — restriction begins at 35 — so
   it was not a contraindication either. Replaced with uncontrolled hypertension.
2. **Mastitis (2024-B).** Keyed ultrasound, but the stem never said antibiotics
   had been given, which makes "start flucloxacillin" the better answer. Stem now
   states 48 hours of failed flucloxacillin.
3. **Reactive arthritis (2024-B).** Wrist-dominant, febrile, with active dysuria —
   that is disseminated gonococcal infection at least as well as reactive
   arthritis, and both were options. Rewritten as lower-limb, afebrile,
   post-urethritis with conjunctivitis.

## Wrong facts being taught — fixed

4. **Statin–macrolide interaction (2025-A).** The vignette used *rosuvastatin +
   roxithromycin*, which is **not a clinically significant interaction** —
   rosuvastatin is not CYP3A4-dependent and roxithromycin is a weak inhibitor.
   Changed to simvastatin + clarithromycin, mechanism corrected.
5. **SCFE imaging (2024-A).** The learning point recommended a frog-leg lateral.
   The boy cannot weight-bear, making this an **unstable** slip, where frog-leg
   positioning is contraindicated because it can complete the slip. Corrected to
   AP pelvis plus cross-table lateral.
6. **Penicillin and cellulitis (2025-A).** Taught penicillin as first-line for
   cellulitis. Australian practice is flucloxacillin/dicloxacillin or cefalexin,
   because empirical cover must include *S. aureus*.
7. **Allopurinol in acute gout (2025-C).** Taught "never start during a flare".
   ACR 2020 and the RACGP now support starting urate-lowering therapy during a
   flare under anti-inflammatory cover.
8. **STEMI reperfusion (2025-C).** Threshold stated as "90–120 minutes"; the
   Australian decision threshold is **120 minutes from first medical contact**
   (90 is a performance target). The keyed regimen also omitted mandatory
   anticoagulation — enoxaparin added.
9. **Sepsis definitions (2025-A).** Claimed hypothermia is a sepsis criterion
   while simultaneously quoting Sepsis-3, which removed temperature entirely.
   Options now carry lactate and vasopressor data so the keyed answer actually
   meets the definition it is tested against.
10. **Anti-D / anaemia (2024-A).** Dismissed Hb 112 with MCV 82 at **12 weeks** as
    physiological haemodilution — that is a second/third-trimester phenomenon.
11. **GDM threshold (2024-A).** Used the superseded 2014 cut-off (2-hour ≥8.5);
    ADIPS 2025 raised it to **≥9.0**.
12. **Bowel screening (2024-A).** Implied automatic invitation from 45. Since July
    2024, 45–49 is **request-only**; automatic invitations run 50–74.
13. **Hartmann's (2025-B).** Rejected for containing "little chloride" — it has
    111 mmol/L. The real reasons are lactate → bicarbonate worsening the alkalosis,
    and only 5 mmol/L potassium.
14. **PERC rule (2024-B).** Implied the age criterion applied to a 47-year-old;
    the cut-off is ≥50.
15. **Giant cell arteritis (2024-B).** With transient visual loss the answer is
    IV methylprednisolone and same-day ophthalmology, not oral prednisone alone.
16. **Peptic ulcer share of upper GI bleeds (2025-B).** "~50%" is historical;
    contemporary series give roughly a third.
17. **Oral candidiasis (2025-B).** Nystatin taught as first-line; Australian
    first-line is miconazole 2% gel.
18. **Perioperative type 1 diabetes (2024-B).** Omitted the instruction to
    **continue basal insulin** alongside the infusion.
19. **Panhypopituitarism (2025-B).** Added the safety rule that glucocorticoid
    replacement must be adequate before increasing thyroxine, or you can
    precipitate adrenal crisis.

## Ambiguous or under-specified stems — tightened

Myocarditis vs ARF (added negative ASOT/anti-DNase B and absent Jones features —
this one was genuinely arguable); Gilbert's (now specifies unconjugated with a
normal film); painful arc (stem said 45–135° against the standard 60–120°);
neonatal bilious vomiting (malrotation added as an option — it is the
must-not-miss); enuresis (stem described *secondary* enuresis while the key
taught the primary algorithm); L4 radiculopathy (medial malleolus added to
exclude L3); carbimazole (ANC 0.2 specified so it is agranulocytosis, not
incidental neutropenia); trochanteric pain (normal X-ray added — an undisplaced
insufficiency fracture was live); histrionic PD (seductive/shallow-affect cues
added, narcissistic PD removed); coeliac (gluten exposure stated); BPPV (attack
duration added); food allergy (prior exposure stated); subdural (right third-nerve
palsy had been paired with right-sided weakness — anatomically impossible);
Romberg (distal sensory findings added); developmental milestones (mixed 4-, 6-
and 9-month features); pre-op investigations (hernia repair is intermediate, not
minor, surgery; sex specified); CEA and diazepam (arguably-true and incoherent
distractors replaced); ARF (polyarthralgia not polyarthritis, high-risk criteria
made explicit); diabetic nephropathy (glomerular hyperfiltration genuinely
precedes albuminuria, so the lead now asks for the earliest *screened* marker).

## Standing rule

**Every generated or hand-written quiz gets an independent adversarial key check
before it counts toward the tracker.** The generator is calibrated to the real
papers but is not self-verifying, and the failure mode — a confident, well-formed,
wrong answer — is invisible to the structural validator in `Code.gs`.
