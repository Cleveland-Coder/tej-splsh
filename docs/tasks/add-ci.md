# Add CI to tej-splsh

**Status:** Not started
**Tracked as:** GitHub issue #24
**Last verified:** 2026-08-14 — no `.github/`; Vercel builds every PR and
covers build and typecheck. **Lint is no longer among them:** the Next 16
upgrade (#22) landed and `next build` no longer runs ESLint, so `pnpm lint`
and `format:check` are both now unenforced outside the local pre-push hook.

Written 2026-08-12, split out of the husky hook fixup. The brief below is self-contained; run it from the repo root.

**Why it matters:** `prettier --check` runs nowhere except the local pre-push
hook, which `git push --no-verify` skips — so formatting has no server-side
enforcement. As of the Next 16 upgrade the same is now true of `pnpm lint`:
PR linting used to be borrowed from `next build`, and Next 16 removed it.

**Revised 2026-08-12.** The first draft claimed "nothing type-checks" and rated
this High. That was wrong: Vercel builds every PR, and `next build` fails on
both type and lint errors. The genuine gap is narrower — see below.

---

```
Add CI to this repo. Investigate before changing anything -- the
findings below were gathered on 2026-08-12 and may have drifted.

BACKGROUND (verified 2026-08-12, re-verify before relying on it):

- .github/ does not exist. There is no CI of any kind.

- Remote is github.com/Cleveland-Coder/tej-splsh, and I do use a PR flow
  (5 merged PRs in recent history), so PR-triggered checks are worth having.

- Enforcement today is entirely local: .husky/pre-push runs `pnpm format:check`
  and `pnpm lint` (~4s), plus it delegates commit-signing enforcement to my
  global hook. All of it is skipped by `git push --no-verify`.

- package.json scripts: dev, build, start, lint, format, format:check, prepare.
  There is NO test script and NO test files anywhere in the repo. Do not
  invent a test job; there is nothing to run.

WHAT VERCEL ALREADY COVERS (updated 2026-08-14, after the Next 16 upgrade):

Vercel builds EVERY pull request -- confirmed on PRs #15 and #16. `next build`
still fails on a type error (tsconfig has "strict": true; next.config.ts does
not set typescript.ignoreBuildErrors).

It NO LONGER fails on an ESLint error. Next 16 removed build-time linting
along with `next lint`, and removed the `eslint` next.config option
entirely -- verified 2026-08-14: `pnpm lint` reports 3 warnings that the
Next 16 `next build` output no longer mentions at all.

So on PRs, Vercel now gives you: build + typecheck, and NOT lint. Do NOT
rebuild build/typecheck in CI. An earlier draft of this task claimed "nothing
type-checks" -- that was wrong, and the CI job should not be justified on it.

WHAT IS ACTUALLY MISSING:

1. `prettier --check` runs NOWHERE except the local pre-push hook. Vercel's
   build does not check formatting. `git push --no-verify` skips the hook, so
   formatting has no server-side enforcement at all.

2. `pnpm lint` is now in exactly the same position. Lint coverage on PRs used
   to be BORROWED from `next build`; the Next 16 upgrade (#22) removed
   build-time ESLint, so as of 2026-08-14 PRs are silently unlinted. This is
   no longer a forward-looking risk -- it is a present gap, and it is the
   change that raised this task's priority.

3. Feedback speed. A full Vercel deploy is a slow way to learn you have a
   type error.

So scope CI accordingly: format:check and lint are BOTH must-haves now, for
the same reason -- neither runs anywhere but a bypassable local hook. A
typecheck is optional given Vercel still covers it, but cheap and much
faster. Recommend what you'd include and say why -- do not just mirror the
pre-push hook.

TOOLCHAIN (updated 2026-08-12 -- an earlier draft of this task was wrong here):

This was previously a trap: node and pnpm were pinned only by volta, which
GitHub Actions ignores. PR #13 fixed it. package.json now has
"packageManager": "pnpm@10.5.2" and "engines": { "node": "24.x" }, and there
is a .nvmrc pinning 24.15.0. The volta block is gone.

So pnpm/action-setup and actions/setup-node can both read real pins now --
use them (setup-node's node-version-file: .nvmrc, and let pnpm/action-setup
pick up packageManager). Do NOT hardcode versions in the workflow; that would
reintroduce the drift #13 just removed. Verified 2026-08-12 that pnpm 10.5.2
is now what actually runs locally.

pnpm-lock.yaml exists; install with --frozen-lockfile so CI fails on a stale
lock instead of quietly resolving something new.

WHAT TO DO:

1. Add a workflow that runs on pull requests targeting main and on pushes to
   main: install with a frozen lockfile, then format:check, lint, and the type
   check. Cache the pnpm store.

2. Recommend (do not enable yourself) the GitHub branch-protection settings
   worth turning on, and tell me exactly where to click:
     - require the CI check to pass before merge
     - require signed commits. This is the server-side backstop for the
       signing hook, which today is local-only and bypassable with
       --no-verify. Note that the root commit 08a223c is unsigned -- check
       whether that setting would reject anything retroactively or only apply
       to new pushes, because that determines whether this is safe to enable.

CONSTRAINTS:

- Do NOT remove, weaken, or "replace" the husky hooks. CI is a backstop, not
  a substitute -- I want the fast local signal to stay. In particular do not
  touch the signing-delegation block at the top of .husky/pre-push; it must
  stay first in the file and keep receiving stdin.

- The flat-config migration (issue #21) and the Next 16 upgrade (issue #22)
  have both landed: `pnpm lint` is now `eslint .` over a flat
  `eslint.config.mjs` that imports `eslint-config-next/core-web-vitals` and
  `eslint-config-next/typescript` directly, and it lints the whole repo
  rather than just the source directories. CI should still invoke `pnpm lint`
  rather than `eslint` directly, so the script stays the single definition of
  what linting means here.

- `pnpm lint` currently exits 0 with 3 pre-existing `jsx-a11y/alt-text`
  warnings in app/page.tsx (false positives -- alt comes in via a spread).
  Do NOT add `--max-warnings=0` without fixing or scoping those first, or the
  very first CI run goes red on unrelated pre-existing noise.

ANSWERED 2026-08-12 (was: "where does this deploy?"):

Vercel, wired up via the dashboard -- there is no vercel.json in the repo. It
builds every PR and posts a required check. See the section above for exactly
what that covers; the point of this task is the gap it does NOT cover, not
duplicating it.

TESTING -- do not skip, and do not claim success without it:

Prove the workflow actually fails for each class of problem, on a scratch
branch, not on main:
  - a formatting violation fails CI -- this is the gap CI actually closes, so
    prove this one explicitly
  - a lint error fails CI from the CI job itself, not merely from Vercel's
    build. Check WHICH check went red, or you will not have tested anything.
  - a TYPE error fails CI, if you chose to include a typecheck
  - a clean branch passes
  - the CI log shows node 24.x (per .nvmrc / engines) and pnpm 10.5.2 (per
    packageManager), matching what runs locally

Use `gh run watch` / `gh run view --log-failed` rather than guessing. Delete
the scratch branch and any scratch files afterwards.

Open a PR for review rather than pushing to main.
```

## Cleanup

This file is scaffolding, not permanent documentation. When issue #24 closes,
**delete this file in the same PR**. When the last brief goes, delete the
`docs/tasks/` directory with it — the issue tracker is the record, not this
directory.
