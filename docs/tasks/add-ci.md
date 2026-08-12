# Prompt: add CI to tej-splsh

Written 2026-08-12, split out of the husky hook fixup. Paste the block below
into a fresh Claude Code session started in `~/work/tej-splsh`.

**Why it matters:** the pre-push hook is currently the _only_ enforcement of
anything, and `git push --no-verify` skips it with nothing behind it. Separately,
**nothing type-checks at all today** — see the gap called out below.

---

```
Add CI to ~/work/tej-splsh. Investigate before changing anything -- the
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

THE REAL GAP -- NOT JUST PARITY WITH THE HOOK:

Nothing type-checks. `next lint` does not type-check, and the pre-push hook
only runs format:check and lint. tsconfig.json has "strict": true and
"noEmit": true, and next.config.ts does NOT set typescript.ignoreBuildErrors
or eslint.ignoreDuringBuilds -- so a type error is caught by `next build` and
by nothing else. It can currently reach main unnoticed.

So CI should be MORE than a mirror of the hook. Include a type check
(`tsc --noEmit`, or `next build` if you'd rather have build coverage too).
Decide which and tell me why. If you add a typecheck script to package.json,
consider whether the pre-push hook should call it as well -- but weigh that
against hook latency, which is currently ~4s and worth keeping snappy.

TOOLCHAIN GOTCHA -- GET THIS RIGHT:

Node and pnpm are pinned by VOLTA ("volta": { "node": "20.18.3", "pnpm":
"10.5.2" }). GitHub Actions does NOT read volta pins, and there is no
"packageManager" field for pnpm/action-setup to pick up either. So either pin
both versions explicitly in the workflow, or add a "packageManager" field --
and if you add one, make sure it agrees with the volta pin rather than
silently drifting from it. pnpm-lock.yaml exists; install with a frozen
lockfile so CI fails on a stale lock instead of quietly resolving something
new.

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

- Coordinate with docs/tasks/eslint-flat-config-migration.md. If that has not
  landed yet, CI must invoke `pnpm lint` (not `eslint` or `next lint`
  directly) so the migration does not break the workflow. Check whether it has
  landed before writing the job.

ASK ME FIRST:

Where does this deploy? There is no vercel.json or netlify.toml in the repo,
so hosting is presumably wired up in a dashboard. If Vercel (or similar) is
already building every PR, part of this may be redundant -- confirm with me
before duplicating a build that already runs.

TESTING -- do not skip, and do not claim success without it:

Prove the workflow actually fails for each class of problem, on a scratch
branch, not on main:
  - a formatting violation fails CI
  - a lint error fails CI (a rules-of-hooks violation in app/ works)
  - a TYPE error fails CI -- this is the new coverage, so prove it explicitly
  - a clean branch passes
  - the CI log shows node 20.18.3 and pnpm 10.5.2, matching the volta pins

Use `gh run watch` / `gh run view --log-failed` rather than guessing. Delete
the scratch branch and any scratch files afterwards.

Show me the diff and let me approve before committing. Do not push.
```
