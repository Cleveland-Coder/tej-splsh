# Decision: Prettier reformats `pnpm-lock.yaml` on every dependency change

Written 2026-08-12. **This one needs a call from Raul** — both options are
defensible and it changes an existing (probably accidental) convention.

## What happens

`prettier --check .` includes `pnpm-lock.yaml`. Prettier rewrites pnpm's
compact flow-style YAML (`resolution: {integrity: sha512-...}`) into block
style, which is **~2700 changed lines** on a file nobody reads.

The repo currently passes `format:check` only because the committed lockfile
was already Prettier-formatted at some point, and `pnpm install
--frozen-lockfile` never rewrites it. The moment pnpm actually _writes_ the
lockfile — any dependency change — it emits its own style and `format:check`
fails, which blocks the pre-push hook until someone runs `pnpm format`.

So today's workflow is: change a dependency → `pnpm format` → commit a lockfile
that is **not** in pnpm's canonical format.

Note this was misdiagnosed once already. It first appeared alongside a pnpm
version drift (10.8.1 vs the pinned 10.5.2) and was attributed to that. PR #13
fixed the version drift properly via `packageManager`, and the problem still
recurred on the very next dependency change — because the cause is Prettier
checking a generated file, not the pnpm version.

## Option A — ignore the lockfile (recommended)

Add a `.prettierignore` containing `pnpm-lock.yaml`.

- Dependency changes stop producing formatting churn
- Lockfile stays in pnpm's canonical format, so diffs reflect real dependency
  changes only
- One-time cost: a large diff converting it back to pnpm's style
- Generated lockfiles are conventionally excluded from formatters

## Option B — keep reformatting it

Change nothing; run `pnpm format` after every dependency change.

- No one-time diff, no convention change
- But every dependency bump carries ~2700 lines of unrelated churn, and
  forgetting `pnpm format` blocks the push with a confusing failure

## Recommendation

**Option A.** The lockfile is generated; formatting it serves nobody, and the
churn actively hides real changes in review. The one-time diff is noise in a
single commit, versus noise in every future dependency commit.
