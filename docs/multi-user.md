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

## Signing in

**Google Sign-In is the way in.** A person signs in with a Google account, the browser
receives an ID token, and Apps Script verifies that token with Google before deciding
who they are. Nothing is shared between people and there is no secret to leak.

### Turning it on — one time

1. **Create an OAuth client.** Google Cloud Console → APIs & Services → Credentials →
   Create credentials → OAuth client ID → **Web application**.
   - Authorized JavaScript origins: `https://thatoneweirddoc.github.io`
   - No redirect URI is needed; Identity Services hands the credential back in-page.
2. **Put the client ID in two places.** It is public by design — it ships in the page,
   identifies the app, and authorises nothing on its own:
   - `index.html` → `const GOOGLE_CLIENT_ID = '…'`
   - `Code.gs` → `const GOOGLE_CLIENT_ID = '…'`, overridable by a Script Property of
     the same name if it ever needs changing without a redeploy.
3. **Deploy → New version.**

**Done as of 16 Aug 2026** — client `645861800030-…apps.googleusercontent.com`, origin
`https://thatoneweirddoc.github.io`.

With no client ID configured, sign-in is simply unavailable: the button hides itself and
the shared-token path carries on. Nothing breaks, it just isn't offered.

**The origin must be scheme + host only** — `https://thatoneweirddoc.github.io`, not the
project path the site is served from. That is the usual mistake and it fails with a
403 that reads like a code fault.

### Adding a person

Add a row to `USERS` in `Code.gs`, keyed by their **verified Google email**:

```javascript
const USERS = {
  'fadimaghak@gmail.com': { id: 'fadi', name: 'Fadi', generate: true },
  'someone@example.com':  { id: 'sam',  name: 'Sam',  generate: false }
};
```

Deploy a new version and tell them to sign in. Their tracker
`finals-tracker-<id>.json` is created in your Drive on first use.

An address that is not listed is refused, and the refusal names the address so the
person can see which account they used. **Nobody is auto-provisioned by merely having
a Google account.**

**Never change an existing `id`.** The tracker filename is derived from it, so renaming
an id orphans that person's whole history. `name` is safe to change; `id` is not.

To remove someone, delete their row and redeploy. Their tracker file stays in Drive, so
it is reversible.

### What the server actually checks

`verifyIdToken()` calls Google's tokeninfo endpoint, then verifies:

- **`aud` matches the client ID.** This is the load-bearing check. Without it an ID
  token minted for *any other Google app* — which anyone can obtain — would be accepted
  here as proof of identity.
- `iss` is Google.
- `exp` has not passed.
- `email_verified` is true.
- the address appears in `USERS`.

Results are cached until the token's own expiry, so a page making six calls costs one
verification rather than six. Failures fail **closed**: if tokeninfo is unreachable the
request is refused, not waved through.

Tokeninfo is used instead of local RS256 + JWKS validation deliberately. At this volume
the round-trip is cheap, and hand-rolled signature verification is exactly the kind of
code that is wrong in a way nobody notices.

### The old shared tokens

`LEGACY_TOKENS` maps the pre-sign-in tokens to the same accounts, and still works.

That is deliberate. Deploying sign-in must not lock anyone out of their tracker four
weeks before the exam, and sign-in cannot work at all until the client ID exists. The
dashboard shows *"using a shared token — sign in when you can"* beside the name, so the
older method reads as the older method.

Delete a row once that person has signed in successfully; delete the map to require
sign-in. A token identifies without authenticating — anyone holding one **is** that
person — which is why it is now the fallback rather than the front door.

### Credential lifetime

Google ID tokens last an hour. The page stores the credential with its expiry, treats
the final minute as already gone (a request that leaves valid can still arrive
expired), and re-requests one within ten minutes of lapsing. If Identity Services is
blocked, slow, or the origin is not authorised, every path ends with the page working
as it did before.

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
browser keep separate local copies and switching accounts switches the cache rather
than merging it. The connected name and email are shown in Data > Drive sync, so a quiz
cannot be silently recorded against the wrong tracker. **Sign out** clears the
credential — and tells Google not to auto-select that account next time — without
touching either person's data in Drive.

## Concurrency — where files can and cannot collide

Apps Script runs web-app requests **concurrently**, and Drive's media upload is a blind
last-write-wins `PATCH` with no ETag check. So any read-then-write on a shared file can
silently lose the other writer's change. This matters differently for different files.

### Between two users' trackers — no conflict, by construction

Each person writes only `finals-tracker-<id>.json`. Two users never write the same
tracker. This is the one guarantee the design gives you for free.

### On the shared queue — there was a real conflict, now closed

`queue.json` is written by four paths, and one of them is reachable by **every** user:
`bufferStatus()` marks requests serviced, and the dashboard calls it on every Bank or
Session tab click. So before locking:

> Fadi presses Schedule → `queueRequest` reads the queue, adds his request, writes it.
> Sam, meanwhile, clicked Bank a moment earlier; his `bufferStatus` had already read the
> old queue, and now writes that copy back. **Fadi's request is gone, silently.**

That was survivable with one user. With several it is not, because the number of people
clicking tabs is exactly the number of concurrent writers.

The fix is `withLock()` around every read-modify-write on a shared file, with two rules
that are the whole point:

- **Re-read the file inside the lock.** A copy read before the lock was taken is the
  stale copy that causes the loss. This is the mistake the original code made.
- **Never hold the lock across generation.** Those calls take 30–60 s; holding a
  script-wide lock across one would stall every user's page behind it.

### The scheduled top-up — claim, generate, finalise

`topUpRun` used to read the queue, generate for a minute, then write back its copy —
a minute-wide window in which anyone's tab click could be lost, and in which a second
overlapping run could pick up the same request and **generate it twice, billing the API
key twice**. It now:

1. **Claims** the oldest pending request under the lock, marking it `running`.
2. **Generates** outside the lock.
3. **Finalises** under the lock, against a fresh read — `done` on success, back to
   `pending` with a `lastError` on failure, so a failure is retried rather than lost.

A claim-based scheme strands work if the claimer dies, and Apps Script kills an
execution at six minutes — so a request left `running` for more than `STALE_CLAIM_MS`
(10 minutes) is reclaimed as pending on the next run. The dashboard shows claimed
requests as "being built" rather than "queued", which is also just more truthful.

### Same person, two devices — a real conflict, unchanged and worth knowing

If you have the dashboard open on a laptop and a phone, the tracker is last-write-wins
on the whole object. Multi-user neither caused nor worsened this.

It matters less than it sounds, because **the path that carries real work is already
safe**: sitting a quiz posts `recordResults`, which is a server-side read-modify-write
(now under the lock) and merges rather than replaces. The full-object `push()` only
carries manual edits — a flag cleared, a log line — so the worst case is losing one of
those, not a session's results. If you are about to make manual edits on a second
device, hit **Reload from Drive** first.

### Verified, not assumed

The interleavings above are modelled in a simulation of blind last-write-wins storage:
the unlocked version loses Fadi's request, the locked version does not; two overlapping
runs cannot both claim one request; a stranded claim is reclaimed while a live one is
not; and concurrent recording keeps each tracker correct.

## What this is not

- **Not authorisation beyond a list.** Sign-in proves *who* someone is; the `USERS`
  map decides whether that person gets in at all. There are no roles beyond the
  `generate` flag.
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
