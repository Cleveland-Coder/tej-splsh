# Backlog

Deferred work for this repo. Each item below is either a ready-to-paste prompt
for a fresh Claude Code session, or a decision waiting to be made and closed.

Keep this index in sync: when an item lands, delete its file and its row.

## Open

| Item                                                                        | Type     | Priority                            | Why it's waiting                                                     |
| --------------------------------------------------------------------------- | -------- | ----------------------------------- | -------------------------------------------------------------------- |
| [Migrate off `next lint` to flat config](./eslint-flat-config-migration.md) | Prompt   | **Deadline-bound** — before Next 16 | Widens lint scope, so it needs its own session and real testing.     |
| [Add CI](./add-ci.md)                                                       | Prompt   | High — nothing type-checks today    | No `.github/`; `--no-verify` bypasses the only enforcement there is. |
| [The unsigned initial commit](./unsigned-initial-commit.md)                 | Decision | Low — recommend closing as won't-do | Fixing it rewrites all ~133 SHAs and force-pushes over merged PRs.   |

## Known tradeoffs (not tasks)

These are accepted consequences of decisions already made. Listed so they are
not rediscovered as bugs later.

- **`.husky/pre-commit` rewrites files mid-commit.** lint-staged runs
  `prettier --write` and `eslint --fix` on staged files, so what lands can
  differ from what was staged. Most visible with partially-staged hunks.
  Bypass once with `git commit --no-verify`.
- **`ESLINT_USE_FLAT_CONFIG=false` in `.husky/pre-commit` is a bridge, not a
  fix.** It exists because ESLint 9 refuses to read this repo's legacy
  `.eslintrc.json`. It must be deleted as part of the flat-config migration
  above — that prompt already says so.
- **Signing enforcement depends on a file outside this repo**
  (`~/.config/git/hooks/pre-push`). `.husky/pre-push` delegates to it rather
  than duplicating its logic. If it is absent, the hook warns and skips the
  signing check rather than failing — so on a fresh machine, signing is not
  enforced until that file exists.
