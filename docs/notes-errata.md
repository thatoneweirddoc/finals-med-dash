# Notes errata — errors found in the source material, 14 Aug 2026

Found during the readability pass over the table-dominant notes. **Nothing here has
been silently corrected.** Almost all of it comes from the ANU student documents,
which the pipeline stacks verbatim under their own attribution — editing them in
place would break that contract and hide the provenance. They are listed here so
they can be fixed deliberately, and so nothing gets revised from a wrong number.

Where the master notes in the same file contradict the ANU block, the master notes
are the more reliable of the two.

## Dangerous — fix or ignore the source line

| Where | What it says | What is correct |
|---|---|---|
| Neuro-oncology, ANU epilepsy management | IV phenytoin **1.5–2 mg/kg** | Loading dose is **15–20 mg/kg** — out by a factor of ten |
| Haematology, ANU vitamin K deficiency | Life-threatening bleeding → "vitamin K **antagonist**" | An antagonist worsens bleeding; "PDD" appears to be a garbled **PCC** (prothrombin complex concentrate) |
| Cardiology additional notes, MAT | "Treat with **theophylline**" | Theophylline **causes/aggravates** multifocal atrial tachycardia |
| Neuroanatomy, ANU MND | Riluzole is an "**NMDA receptor antagonist**" | Glutamate-release inhibitor / Na⁺-channel blocker. Contradicts §12.7 of the pharmacology file, which is right |
| Immunology additional notes, RA | Tofacitinib is a "**JAK-2** inhibitor" | JAK1/JAK3 |

## Wrong, but unlikely to be dangerous

- **HCM, cardiomyopathies ANU** — "commonest cause of sudden **heart failure** in athletes" should be sudden **death**; the master notes in the same file say it correctly.
- **GBM, neuro ANU** — "resection (↓ prognosis)" reads as resection worsening outcome; the master notes above state the maximal-resection principle.
- **PT/PTT, haematology ANU** — "PTT: common and intrinsic pathway… a defect → ↑**PT**" should be ↑PTT.
- **Haemophilia C, haematology ANU** — "factor XI → PTT" missing the ↑; treatment line truncated.
- **Empiric antibiotics, ANU "other antibiotics" table** — column headed **BETA-LACTAM** but not one of the ten drugs listed is a beta-lactam; aminoglycosides/tetracyclines/macrolides each marked both bacteriostatic *and* bactericidal; fluoroquinolones credited with anaerobic cover (only moxifloxacin has meaningful activity, and it contradicts the clindamycin row).
- **MG, neurological assessment ANU** — anti-AChR "90% (70% ocular)" conflicts with §3.8 of the same file (~85% generalised, ~50% ocular); the pathology row describes presynaptic (LEMS-type) physiology as MG.
- **Aphasia, neuroanatomy ANU** — "primary auditory cortex receives information from the cerebral cortex"; input is from the medial geniculate body.
- **Neurophysiology ANU** — parietal lobe pathology lists "aphasia" unqualified (classically temporal/frontal; dominant parietal only).
- **UTI, STI/HIV file** — "trimethoprim-sulfamethoxazole 300 mg PO" is the trimethoprim-monotherapy dose, and conflicts with the empiric-therapy file's first-line.
- **Gout, immunology additional notes** — urate target "<0.3 mmol/L"; usual target is **<0.36**, with <0.30 reserved for tophaceous disease. RA "peak 20–40 years" (standard is 30–50) and "HLA-DR4/DR1 in ~93%" is implausibly high.
- **Two different PUO definitions** sit in the same file (>3 weeks + 1 week inpatient work-up, vs 3 outpatient visits / 3 days inpatient). Both are published; know which one you are quoting.
- **Sodium valproate row, neuro-oncology** — side-effect list ends "used commonly with Valproate", self-referential and presumably a truncation.

## Formatting faults that were silently hiding content

Four table rows had one cell too many for their table, so the renderer was **dropping
them entirely**: the whole ITP block, the whole haemophilia block, and the
constrictive-pericarditis presentation and investigation columns. These were joined
with `<br>` rather than deleted — the content is now visible for the first time.

## Typos left as written

"Proponalol", "Deimethyl fumarate", "endrophonium", "Decerberate", "Charles Bonnett",
"Marcus Gun", "Metranidazole", "restricted chess expansion", "impreoves… with wrest",
"suprotentorial", "most oven in convexities", "prominent Q eaves",
"nitrofurtoin/bleomysin", "microangiopathi", "non-hepatin anticoagulation",
"*Rickettsia rickettsia*" (→ *rickettsii*), "≥ 105 CFU/mL" (→ 10⁵), and — in the MG
exacerbating-features list — "climate change", presumably meant to be heat.
