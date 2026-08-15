# Decision: `sharp` is behind its security fix, and Next pins it there

**Status:** RESOLVED by the Next 16 upgrade (#22) — safe to close #25
**Tracked as:** GitHub issue #25
**Last verified:** 2026-08-14 — `next@16.3.1` declares `sharp: ^0.35.3` and the
tree now resolves `sharp@0.35.3`, at or above the `>= 0.35.0` the advisory
requires. No `pnpm.overrides` entry was needed. Confirm the Dependabot alert
has cleared, then close #25 and delete this file.

Everything below is the pre-upgrade analysis, kept only until #25 closes.

Written 2026-08-12, during the transitive-dependency patching in PR #17.

**Recommendation: accept it for now, and recheck when Next is upgraded.** This
is a watch item, not work to do.

## What it is

Dependabot flags `sharp` (HIGH, GHSA-f88m-g3jw-g9cj — inherited libvips CVEs).
The fix requires `sharp >= 0.35.0`. The repo resolves `sharp@0.34.5`.

It was left out of the `pnpm.overrides` block that patched the other seven
alerts, deliberately.

## Why it wasn't overridden

`next@15.5.23` declares `sharp: ^0.34.3` as an optional dependency. A pnpm
override to `0.35.x` would force it outside the range Next declares support
for. `sharp` ships native binaries and Next calls into it for image
optimization, so this is exactly the kind of dependency where ignoring the
declared range can fail at runtime rather than at install time.

Patching seven low-risk pure-JS transitives is worth it. Forcing a native image
library past its supported range, on a live site, is not.

## Why the exposure is low

- The site builds **fully static** (`○ (Static) prerendered as static
content`). There is no server doing image optimization at request time.
- It deploys to Vercel, where image optimization is handled by Vercel's own
  infrastructure rather than the app's bundled `sharp`.
- pnpm does not even build sharp's native binaries locally — install reports
  `Ignored build scripts: sharp`.

## What to do, and when

This is what happened: the Next 16 upgrade (issue #22) landed on 2026-08-14
and moved Next to `16.3.1`, which declares `sharp: ^0.35.3`. `sharp` resolved
straight to `0.35.3` and the advisory range no longer applies — no override
needed, exactly as predicted.

Only add an explicit override if Vercel starts blocking the deploy on it, or if
the app ever gains a server-rendered image path.

## Cleanup

This file is scaffolding, not permanent documentation. When issue #25 closes,
**delete this file in the same PR**. When the last brief goes, delete the
`docs/tasks/` directory with it — the issue tracker is the record, not this
directory.
