# Notes build plan — scoping before starting

Written 14 Aug 2026, 31 days out. This delineates the work rather than starting it.
Nothing here is built yet.

> **The ordering below is superseded.** Six systems have been built since it was
> written; the current order is in **`docs/notes-build-order.md`**, ranked by how empty
> each remaining system is, how examined it is, and what source material exists. The
> yield measurements and the definition-of-done here are still current.
>
> **Before starting a system, read `docs/system-build-playbook.md`.** It has the fixed
> order of operations, the pre-flight checks, the error taxonomy from 155 verified
> corrections, and the hardened agent prompt templates. It exists because the same
> process mistakes kept recurring across builds.

---

## The diagnosis: "thin" correlates exactly with "never ran the pipeline"

Cross-referencing `tools/notes_sources.json` against the library:

| Build method | Systems | Typical size |
|---|---|---|
| v2 pipeline, with a `claude_*_master.md` | Respiratory, Endocrine, Gastro, Neurology, MSK, Haem/Onc, ID, Immunology, Cardiology | **20,000–53,000 words** |
| Raw ANU docs stacked, no master | Anaesthetics, General Practice, Paediatrics | 4,400 / 11,800 / 22,400 (but 83 fragments) |
| Not in the config at all — orphaned output | O&G, Psychiatry, Dermatology, Ophthalmology, Renal | 2,500–4,200 (Renal excepted) |

The correlation is clean. This is not "some systems need more writing" — it is
**seven systems never had the v2 pipeline run on them**. That also explains the
errata: every dangerous error in `docs/notes-errata.md` sits in an ANU-stacked
block, none in a `claude_*_master.md` system.

So the unit of work is not "write more notes." It is **run Phases 0–5 for one
system**, which is a known, repeatable quantity.

---

## Exam yield — measured, not assumed

Topic frequency across the 100 questions rewritten from the real 2024 and 2025
papers, set against current coverage:

| System | Qs /100 | Notes words | Verdict |
|---|---|---|---|
| Paediatrics | **10** | 22,400 in 83 fragments, no master | **Consolidate** — content exists, structure doesn't |
| Endocrine | 9 | 38,700 | Fine |
| **O&G** | **8** | **4,000** | **Worst yield-to-coverage ratio in the library** |
| Neurology | 6 | 53,400 | Fine |
| **Surgery** | **5** | **none** | Content is buried inside Gastroenterology |
| Rheumatology | 5 | 27,000 (under MSK) | Fine |
| **Urology** | **4** | **no such system** | Invisible gap |
| Pharmacology | 4 | distributed per system | Acceptable |
| Psychiatry | 4 | 3,600 | Thin |
| **ENT** | **3** | **no such system** | Invisible gap |
| Anaesthetics | 2 | 4,400 | Thin |
| **Geriatrics** | **2** | **no such system** | Invisible gap |
| Critical Care | 2 | none | Has quizzes, no notes |
| Ophthalmology | 1 | 2,500 | Thin, but low yield |
| Dermatology | 1 | 2,800 | Thin, but low yield |

**The finding worth acting on:** Urology, ENT and Geriatrics together account for
**9 of 100 real exam questions and have no notes system at all**. They were
invisible because the dashboard only ranks systems it already knows about — you
cannot see a gap that isn't on the list. That is nine times the exam weight of
Ophthalmology, which is what the broken coverage flag had you worried about.

---

## Source material, and the copyright constraint

The repo is **public**. Drive holds full commercial textbooks — Schwartz's
*Principles of Surgery*, *Essential Surgery*, *Shorter Oxford Textbook of
Psychiatry*, Toronto Notes. **None of these may be extracted or stacked.** They
can inform Claude-authored prose, which is then original text; that is the same
route already taken for Psychiatry, O&G, Dermatology and Ophthalmology, and the
reason those four are thin.

| System | Usable source | Method |
|---|---|---|
| Paediatrics | CRS 1–7 (Anu), Paediatric CPGs, Seriously Ill Child — already wired | **Consolidate + Phase 4–5**: master doc, recognition summary, retire fragments |
| O&G | None of his own | **Author from guidelines** — RANZCOG, Queensland Clinical Guidelines, ADIPS, NBA anti-D |
| Surgery | General Surgery & Gastro (ANU), Operative Surgery, Essential Surgery, Schwartz | **Author** (textbooks are reference only); split surgical content out of Gastroenterology |
| Psychiatry | Y4 Mental Health notes reproduce DSM-5 — **do not extract** | **Author from RANZCP guidelines + Therapeutic Guidelines** |
| Urology / ENT / Geriatrics | Nothing | **Author from scratch**, guideline-anchored |
| Anaesthetics | Anaesthetics (ANU) — wired | Consolidate + author gaps (ANZCA, ADS–ANZCA periop) |
| Critical Care | Nothing; quiz data only | **Author** — ANZCOR, Surviving Sepsis, ANZICS |
| Ophthalmology / Dermatology | WSU workshop PDFs, Fishburn dermatoscopy, Derm in GP | Author + assemble |

---

## Build order

Ranked by exam yield ÷ current coverage, with the invisible gaps promoted because
they are cheap to fix and currently score zero:

1. ~~**O&G**~~ — **BUILT 15 Aug 2026.** 14 sections, 52,251 words, wired into `notes_sources.json` as `sources/claude_obstetrics_gynaecology_master.md`. Independently verified: 4 errors found and fixed (PE diagnostic platelet threshold, IV hydralazine rate, acute BP floor, AIS test-of-cure pathway).
2. ~~**Paediatrics**~~ — **BUILT 15 Aug 2026.** Turned out not to be a consolidation: the 83 fragments averaged 270 words (Kawasaki 124, testicular torsion 118) and were all from one ANU source, so it was rebuilt through the pipeline rather than reorganised. 13 sections, 32,577 words. **Independently verified 15 Aug 2026** by eight adversarial reviewers — no dangerous errors survived, 58 corrections applied (CAH is now on the Australian newborn screen; orchidopexy 6–12 mo; pre/post-ductal gradient >3% not >10%; the "bronchiolitis 90 vs NICE 92" discriminator was false; WA mandates sexual abuse reporting only; NT has no statutory consent age). See `docs/paediatrics-verification.md`.
3. ~~**Urology + ENT + Geriatrics**~~ — **BUILT 15 Aug 2026.** Urology 5 sections / 18,944 words; ENT 5 / 18,531; Geriatrics 6 / 24,680. Each ends in a recognition summary (syndrome lookups, signature findings, confusable pairs, must-not-miss list, all numbers in one table). **Independently verified** by six adversarial reviewers — 52 corrections applied. The ENT sore-throat/ARF section failed its first check outright (first-line antibiotic inverted, prophylaxis duration doubled) and has been rewritten against RHDAustralia 3rd edn. See `docs/trio-verification.md`.
4. ~~**Surgery**~~ — **BUILT 16 Aug 2026.** 8 sections, 39,450 words; also fixes the "surgery is hidden inside Gastro" navigation problem, with GI medicine cross-referenced rather than duplicated. **Independently verified** by five adversarial reviewers — 41 corrections, three dangerous (sepsis antibiotic timing tied to shock rather than organ dysfunction; "incarcerated hernia is not an emergency"; warfarin reversal omitting FFP alongside 3-factor Prothrombinex). Both worked burn calculations were recomputed and were correct. See `docs/surgery-verification.md`. **Next in the order.**
5. ~~**Psychiatry**~~ — **BUILT AND VERIFIED 16 Aug 2026.** 8 sections, 45,078 words, from 3,635. 101 corrections applied across five adversarial reviewers, 15 dangerous; 16 cross-section contradictions adjudicated. See `docs/psychiatry-verification.md`. **Critical Care is next.**
6. **Anaesthetics** — 2 Qs, and it feeds the periop questions that recur.
7. **Critical Care** — 2 Qs, but you already score well on it in the tracker.
8. **Ophthalmology, Dermatology** — 1 Q each. Lowest priority despite being thin.

---

## What one unit of work is

**One system = one session.** Phases 0–5 of `finals_notes_workflow_v2.md`, ending
at the consolidated master. Phase 6 (Anki) is separate and optional.

Definition of done, per system:

- [ ] Study plan following the standard spine, with sequencing table and top-ten
- [ ] Section notes: sourced, thresholds confirmed in ≥2 sources, ⚑ on anything changed from older texts
- [ ] Every section ends with a Rapid-Recall Discriminators table
- [ ] Anatomy written as prose + tables, not image-only
- [ ] Consolidated `claude_[system]_master.md`, wired into `tools/notes_sources.json`
- [ ] Recognition summary (syndrome / signature lookups / confusable pairs)
- [ ] `build_notes.py` + `build_notes_page.py` re-run, committed with the source config
- [ ] Key facts spot-checked by an independent reviewer before it counts — same standing rule as the quizzes

Realistic estimate: **one system per session**, longer for Surgery and O&G.

---

## The honest recommendation

You have 31 days. Nine systems at one session each is most of them, and note-writing
is the lowest-yield revision activity available to you — you already have 342,000
words you have not finished reading.

Suggested cut:

- **Build three**: O&G, the Paediatrics consolidation, and the Urology/ENT/Geriatrics trio. That covers **27 of every 100 exam questions** and closes every genuine hole.
- **Leave the rest.** Ophthalmology and Dermatology are 1 question each; a thin note plus past-paper questions is proportionate.
- **Spend the recovered time on past papers.** Ten near-verbatim repeats were found across three years, and there are ten more years sitting in Drive unconverted. That is the highest-yield material you own and it is not yet in the bank.

If you only do one thing from this document: **O&G**. Eight questions in a hundred,
four thousand words, and the second-highest yield in the exam.
