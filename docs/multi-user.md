# Multi-user — how it works and how to add someone

Added 16 Aug 2026. The dashboard now supports several people, each with their own
progress, flags, history and personalisation. Notes, quizzes and revision modules stay
shared — they are identical for everyone and are the expensive part to produce.

## What is per-user, and what is shared

| Per-user | Shared |
|---|---|
| Tracker: topic scores, open flags, resolved, log, recent misses, quiz history | The notes library |
| Which quizzes you have attempted, and therefore your "unattempted pool" figure | The quiz bank (repo + Drive) |
| Cached tracker in the browser | Revision modules |
| Mid-quiz progress (resume/restart) | The generation queue |
| Theme, typeface and text-weight settings | |

## Adding someone

1. **Invent a token.** Use a password manager's random string — 16+ characters. It is
   a bearer credential: anyone holding it *is* that user.
2. **Add a row to `USERS` in `Code.gs`:**

   ```javascript
   const USERS = {
     'fadmag':                    { id: 'fadi', name: 'Fadi', generate: true },
     'x7Qm-2vLp-9RtK-4wZa':       { id: 'sam',  name: 'Sam',  generate: false }
   };
   ```

3. **Deploy > Manage deployments > edit > New version.** The URL does not change.
4. **Send them the token privately** — not in a group chat that outlives the exam.
   They paste it into Data > Drive sync > Connect.

Their tracker file `finals-tracker-<id>.json` is created in your Drive on first use.

**Never change an existing `id`.** The tracker filename is derived from it, so renaming
an id orphans that person's entire history. The `name` is safe to change; the `id` is
not.

To remove someone, delete the row and redeploy. Their tracker file stays in Drive, so
the removal is reversible.

## Why generation is gated

`generate: false` blocks `generateNow`, `queueRequest`, `saveQuiz`, `saveRevision` and
`ingestOutbox` server-side, and the dashboard hides the Schedule and Make now buttons
so nobody meets an error they did not expect. Everything else — sitting quizzes,
reading notes, recording results, tracking weak areas — works normally.

The reason is cost: every "Make now" is an Anthropic API call billed to the owner's
key. The 6-hourly scheduled top-up keeps producing quizzes that land in the shared
bank, so other users are never short of material; they simply do not hold the button
that spends money.

To let someone generate, set `generate: true`. If you ever do that for more than one
or two people, add a per-user daily cap in Script Properties first — an uncapped
button on someone else's key is not a good arrangement.

## Two traps that were designed around

**The owner's Drive file is untouched.** `trackerFileId()` returns the original
`finals-tracker.json` and its cached `fileId` property when the id is the owner's.
There is no migration step and no way for this change to lose the existing history.

**A new user must not inherit the owner's scores.** `SEED` in `index.html` is the
owner's tracker state baked in at page-generation time, and the old code fell back to
it whenever the Drive tracker came back empty — which is exactly the state a new user
is in on their first connect. It is now guarded by `SEED_OWNER`, so a new user starts
genuinely empty and everyone else's first session does not open with someone else's
82% in Cardiology.

## Shared devices

The cached tracker is namespaced (`finals_v1:<id>`), so two people using the same
browser keep separate local copies and switching tokens switches the cache rather than
merging it. The connected name is shown in Data > Drive sync, so a quiz cannot be
silently recorded against the wrong tracker. **Disconnect** clears the token without
touching either person's data in Drive.

## What this is not

- **Not authentication.** A token identifies, it does not authenticate. Someone who
  obtains another person's token becomes that person. For a group of people who know
  each other this is proportionate; for anything public it is not.
- **Not isolation.** All tracker files live in the owner's Drive and the script runs as
  the owner, so the owner can read everyone's progress. Say so to anyone you invite.
- **Not free of quota.** Drive API calls and Apps Script runtime all count against the
  owner's account.

If it ever needs to be a real multi-tenant thing, the upgrade path is Google Identity
Services on the page: the browser gets a signed ID token, posts it to Apps Script,
which verifies it against `oauth2.googleapis.com/tokeninfo` and derives the user from
the verified email. That removes shared secrets and the token admin entirely, at the
cost of about a day's work and more moving parts. The per-user storage layer built here
does not change — only `resolveUser()` does.
