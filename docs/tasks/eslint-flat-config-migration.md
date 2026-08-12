# Prompt: migrate off `next lint` to eslint + flat config

Written 2026-08-12, split out of the husky hook fixup. Paste the block below
into a fresh Claude Code session started in `~/work/tej-splsh`.

**Urgency:** raised 2026-08-12. The security upgrade to Next 15.5.23 (PR #16)
means the deprecation warning is now **live on every lint and every push**, and
build-time ESLint disappears at Next 16 — which currently is the only thing
linting PRs. Still must land before the Next 16 upgrade, not after.

---

```
Migrate ~/work/tej-splsh off `next lint` to calling eslint directly, and move
.eslintrc.json to flat config. Investigate before changing anything -- the
findings below were gathered on 2026-08-12 and may have drifted.

BACKGROUND (verified 2026-08-12, re-verify before relying on it):

- Next is 15.5.23 as of PR #16 (was 15.2.4 when this was written).
  package.json "lint" is `next lint`, which NOW EMITS a deprecation warning on
  every run -- warning only, exit code still 0. Removed entirely in Next 16.

- Next ships an official codemod for exactly this migration. Try it FIRST
  rather than hand-writing the config:
      npx @next/codemod@canary next-lint-to-eslint-cli .
  Review what it produces; do not accept it blindly.

- `next build` currently runs ESLint as part of the build, which is how PRs
  get linted at all (Vercel builds every PR). That goes away with `next lint`
  in Next 16. Coordinate with docs/tasks/add-ci.md -- if CI is not running
  lint by then, PRs silently stop being linted.

- eslint is 9.22.0, eslint-config-next is 15.5.23. Config is a LEGACY
  .eslintrc.json:
      extends: ["next/core-web-vitals", "prettier"]
      plugins: ["prettier"]
      rules:   prettier/prettier: "error"
               arrow-body-style: "off"
               prefer-arrow-callback: "off"

- ESLint 9 will NOT read .eslintrc.* without ESLINT_USE_FLAT_CONFIG=false.
  `next lint` works only because Next sets that compat flag internally. Bare
  `eslint` fails outright with "couldn't find an eslint.config.(js|mjs|cjs)".

- My gatherwellch-website repo already made this move. USE IT AS THE
  REFERENCE IMPLEMENTATION -- read its eslint config and lint script first and
  follow the same shape, rather than inventing a new one here.

- Package manager is pnpm. volta pins node 20.18.3, pnpm 10.5.2.

SCOPE CHANGE -- THE PART THAT WILL BITE:

`next lint` only scans app/, pages/, components/, lib/, src/ by default. Flat
config lints whatever you point it at, so the migration WIDENS what is
checked. Specifically:

  - next.config.ts is currently NOT linted at all. It will be after this.
  - app/page.tsx currently emits 3 jsx-a11y/alt-text WARNINGS (lines 33, 41,
    58). Warnings do not fail the build; confirm they stay warnings and do not
    get promoted to errors under the new config.

So expect new findings on the first run. Triage them: fix real ones, and if
any are noise, narrow the lint target or the rule rather than deleting the
check. Do NOT silence a rule just to get a green run -- say so if something
needs a real fix and is bigger than this task.

WHAT TO FIX:

1. Replace .eslintrc.json with flat config (eslint.config.mjs), preserving all
   four current settings: next/core-web-vitals, the prettier config, the
   prettier/prettier: error rule, and the two "off" rules. If it needs
   @eslint/eslintrc FlatCompat, add it as a devDependency.

2. Change the "lint" script from `next lint` to a direct eslint invocation.

3. DELETE the `export ESLINT_USE_FLAT_CONFIG=false` line and its comment block
   from .husky/pre-commit. That line exists ONLY as a bridge until this task
   lands -- leaving it in place after the migration would force eslint back
   onto a config file that no longer exists. This is easy to forget; do it.

CONSTRAINTS:

- This repo has NO CI (.github/workflows does not exist). The .husky/pre-push
  hook running `pnpm format:check` and `pnpm lint` is the ONLY thing enforcing
  either. Do not weaken it, and do not move enforcement to CI as part of this
  task.

- .husky/pre-push also delegates commit-signing enforcement to my global hook
  and must keep passing stdin/argv through. Do not reorder or disturb that
  block; it has to stay first in the file.

TESTING -- do not skip, and do not claim success without it:

  - `pnpm lint` exits 0 on the clean tree
  - `pnpm lint` exits NON-ZERO on a real error. Use a rules-of-hooks
    violation, e.g. a component calling useState() inside an if. Put the test
    file in app/ -- a root-level file was invisible to the old `next lint`,
    and confirming it is now visible is part of the point.
  - the prettier/prettier rule still fires as an ERROR on a misformatted file
  - `pnpm format:check` still passes
  - .husky/pre-commit still auto-fixes a misformatted staged file AFTER the
    env-var line is removed, and still blocks a commit on an unfixable error
  - a push still runs both checks and still blocks on failure

Delete every scratch file you create. Show me the diff and let me approve
before committing. Do not push.
```
