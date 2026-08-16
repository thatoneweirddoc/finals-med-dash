# Break captions — the approval rule and the verified set

The 90-second breathing break ends with one line from `BRK_CAPTIONS` in `index.html`.

## The rule

**Nothing goes in that array without Fadi approving the exact wording first.** Every
entry must be a real quotation traced to a **named primary work** by a philosopher or
theologian writing about study, knowledge or attention. If it cannot be cited to a
book, chapter, letter or section, it does not go in — an unverifiable quotation is a
rejection, not a maybe.

This is not pedantry. Misattribution in this genre is the norm, not the exception. Of
the six lines most obviously worth including, **five were wrong** (see the rejected
list below), and every one of them is confidently repeated across hundreds of pages.

## Installed — approved by Fadi, 16 Aug 2026

All sixteen are live. Each is shown with its attribution beneath the line, because the
attribution is the safeguard: a quotation displayed bare is one that can quietly drift
back into being misattributed. A no-repeat guard stops the same line appearing twice in
a row.

Each was traced to a primary work and then actively checked for misattribution.

| # | Caption | Attribution |
|---|---|---|
| 1 | Enter not straightway into the ocean, but by way of the little streams. | Thomas Aquinas, *Letter to Brother John* |
| 2 | What you read, set about to understand, verifying what is doubtful. | Thomas Aquinas, *Letter to Brother John* |
| 3 | Do not heed by whom a thing is said, but rather what is said commit to your memory. | Thomas Aquinas, *Letter to Brother John* |
| 4 | The study of philosophy is not that we may know what men have thought, but what the truth of things is. | Thomas Aquinas, *Commentary on Aristotle's* On the Heavens |
| 5 | All men by nature desire to know. | Aristotle, *Metaphysics* I.1 |
| 6 | Everywhere means nowhere. | Seneca, *Letters* 2 |
| 7 | Let us so seek as if we should find, and so find as if we were about to seek. | Augustine, *On the Trinity* IX.1 |
| 8 | The beginning of discipline is humility. | Hugh of St Victor, *Didascalicon* III |
| 9 | Do not strike into a lot of by-ways until you know the main roads. | Hugh of St Victor, *Didascalicon* III |
| 10 | Some wish to know only in order to know: that is shameful curiosity. | Bernard of Clairvaux, *Sermons on the Song of Songs* 36 |
| 11 | Never is a genuine effort of the attention wasted. | Simone Weil, *Reflections on the Right Use of School Studies* |
| 12 | Twenty minutes of concentrated, untired attention is infinitely better than three hours of frowning application. | Simone Weil, *Reflections on the Right Use of School Studies* |
| 13 | Attention is an effort, the greatest of all efforts perhaps, but it is a negative effort. | Simone Weil, *Reflections on the Right Use of School Studies* |
| 14 | Attention is the rarest and purest form of generosity. | Simone Weil, letter to Joë Bousquet, 1942 |
| 15 | All the unhappiness of men arises from one single fact, that they cannot stay quietly in their own chamber. | Blaise Pascal, *Pensées* 139 |
| 16 | A great memory does not make a philosopher, any more than a dictionary can be called a grammar. | John Henry Newman, *The Idea of a University* VI |

Note on 14: universally cited as being from *Reflections on School Studies*. It is not —
it is from a 1942 letter to Joë Bousquet. The attribution above is the correct one.

## Rejected, with reasons — do not re-add these

| Claimed | Verdict |
|---|---|
| "Beware the man of a single book" — Aquinas | **Misattributed.** Jeremy Taylor (1649) reporting that Aquinas "is reputed" to have said it. The sense has also inverted: originally *fear the expert*, now used to mean *fear the ignoramus*. |
| "The things that we love tell us what we are" — Aquinas | **Misattributed.** Thomas Merton, *Thoughts in Solitude* (1956). Entered circulation as Aquinas via a paraphrase. |
| "The roots of education are bitter, but the fruit is sweet" — Aristotle | **Not in any extant work.** Survives only as an apophthegm reported by Diogenes Laertius ~500 years later. |
| "Knowing yourself is the beginning of all wisdom" — Aristotle | **Misattributed.** No locus in the corpus; a modern rewrite of the Delphic *gnōthi seauton*. |
| "We learn not for school but for life" — Seneca | **Backwards.** Seneca wrote *non vitae sed scholae discimus* — "we learn not for life but for school" — as a *complaint* (Ep. 106.12). The motto inverts his criticism. |
| "We must love them both, those whose opinions we share and those whose opinions we reject" — Aquinas | **Paraphrase drift.** Aquinas is quoting Aristotle, and the passage is about respecting *opinions*, not loving persons. |
| Aquinas, *ST* II-II q.166 a.1, "Study denotes keen application of the mind" | Real and correctly cited, but too flat to display. |

## Removed

- `'Helena was right about the long exhale.'` — removed 16 Aug 2026 at Fadi's request.
  It referred to a person and had no place here.
- The five generic encouragements that preceded these ("Tired is not the same as
  unprepared", "Steady beats frantic, every time", and three others). Replaced rather
  than supplemented, since the brief was that captions come from philosophers and
  theologians on study and knowledge.

## Verified in the browser, not by eye

All sixteen were rendered into the real caption element at 390x844 and measured: none
overflows the viewport (tallest is 273px against 844), all carry an attribution, and
200 consecutive picks produced all sixteen with zero back-to-back repeats. The longest
line — Weil on twenty minutes of attention — is the worst case and fits.
