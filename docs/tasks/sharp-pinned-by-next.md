# Decision: `sharp` is behind its security fix, and Next pins it there

**Status:** Blocked upstream — should resolve itself via GitHub issue #22
(Next 16 declares `sharp: ^0.35.3`); verify rather than assume
**Last verified:** 2026-08-12 — `sharp@0.34.5`; `next@15.5.23` declares
`^0.34.3`; the one remaining Dependabot alert on `main`
**Run from:** `~/work/tej-splsh`

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

Recheck when Next is next upgraded — most likely as part of
[the flat-config migration](./eslint-flat-config-migration.md) and the Next 16
work that follows it. If a newer Next widens its range to `^0.35`, this closes
by itself with no override needed.

Only add an explicit override if Vercel starts blocking the deploy on it, or if
the app ever gains a server-rendered image path.
