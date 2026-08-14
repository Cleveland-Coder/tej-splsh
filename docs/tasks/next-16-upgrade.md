# Prompt: upgrade Next.js 15.5.23 → 16.x

**Status:** Not started — **blocked by** the flat-config migration
**Tracked as:** GitHub issue #22 (blocked by #21)
**Last verified:** 2026-08-13 — `next@16.3.1` is latest; needs React `^19.0.0`
and node `>=20.9.0`, both of which this repo already satisfies
**Run from:** `~/work/tej-splsh`

Do **not** start this before the flat-config migration
([`eslint-flat-config-migration.md`](./eslint-flat-config-migration.md), issue
#21) has landed. Next 16 removes `next lint`, which the `lint` script and
`.husky/pre-push` both depend on.

---

```
Upgrade ~/work/tej-splsh from Next.js 15.5.23 to 16.x. Investigate before
changing anything -- the findings below were gathered on 2026-08-13 and may
have drifted.

CHECK FIRST -- THIS IS BLOCKING:

Confirm the flat-config migration has landed. If package.json "lint" is still
`next lint`, STOP and do that first (issue #21). Next 16 removes the command;
upgrading first breaks `pnpm lint` and therefore every push, because
.husky/pre-push runs it.

BACKGROUND (verified 2026-08-13, re-verify):

- Latest is next@16.3.1. It requires react ^19.0.0 and react-dom ^19.0.0 --
  this repo is already on ^19.0.0, so NO React upgrade is needed. It requires
  node >=20.9.0; .nvmrc pins 24.15.0 and engines says 24.x, so that is fine
  too.

- next@16.3.1 has ZERO security advisories against it.

- The app surface is small: no middleware, no Server Actions, no API routes,
  no rewrites. Every route builds static. That is the profile where a Next
  major is mostly mechanical -- but verify it still is rather than assuming.

- next.config.ts currently sets `allowedDevOrigins` and a headers() rule
  caching /favicon.ico. Config options move in majors; confirm both still do
  what they say.

BONUS -- CONFIRM IT, DO NOT ASSUME IT:

`sharp` is the only open Dependabot alert and is unfixable on 15.x:
next@15.5.23 declares sharp ^0.34.3 while the advisory needs >=0.35.0.
next@16.3.1 declares ^0.35.3, so this upgrade should clear it with no override
at all. After upgrading, CHECK that the alert actually cleared and that the
resolved sharp version is >=0.35.0. If it did, close the decision in
docs/tasks/sharp-pinned-by-next.md and drop it from both backlog indexes.

WATCH OUT:

Build-time ESLint disappears along with `next lint`. Since Vercel builds every
PR, that build is currently the only thing linting PRs. Once it is gone, if CI
still is not running lint, PRs are silently unlinted. Flag this in the PR --
it raises the priority of docs/tasks/add-ci.md.

TESTING -- do not skip, and do not claim success without it:

  - `pnpm build` succeeds and still emits all 4 routes as ○ (Static)
  - `pnpm lint` exits 0
  - `pnpm format:check` passes
  - `pnpm dev` starts and the page renders correctly in a browser
  - the Vercel preview deploy goes green and the deployed page looks right --
    a static build passing locally is not proof the deploy is fine
  - Dependabot shows 0 open alerts

Keep this a SEPARATE PR from the flat-config migration, so a failure is
attributable to one or the other. Show me the diff and let me approve before
committing. Do not push.
```
