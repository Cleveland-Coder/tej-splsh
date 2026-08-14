# Backlog

Deferred work for this repo. Each item is either a ready-to-paste prompt for a
fresh Claude Code session, or a decision waiting to be made and closed.

> **`~/.claude/unfinished/README.md` is the source of truth.** That directory
> indexes unfinished work across every repo, and each item here is symlinked
> into it. This file is the repo-local view of the same items — the prompt
> files live here so they travel with the code and show up in review.
>
> When an item lands: append an outcome to the file, move it to
> `~/.claude/unfinished/archive/`, drop its row from both indexes, and delete
> the symlink. Update `~/.claude/unfinished/README.md` first — it is the one
> that gets read.

## Open

| Item                                                                        | Type     | Priority                                          | Why it's waiting                                                                             |
| --------------------------------------------------------------------------- | -------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Migrate off `next lint` to flat config](./eslint-flat-config-migration.md) | Prompt   | **High** — deprecation now live, deadline Next 16 | Widens lint scope, so it needs its own session and real testing. An official codemod exists. |
| [Upgrade Next.js to 16.x](./next-16-upgrade.md)                             | Prompt   | High — blocked by the flat-config migration       | Removes `next lint`; also clears the last Dependabot alert for free.                         |
| [Add CI](./add-ci.md)                                                       | Prompt   | Medium — formatting has no server-side check      | Vercel already covers build, typecheck and lint on PRs; `format:check` is the real gap.      |
| [`sharp` is behind its security fix](./sharp-pinned-by-next.md)             | Decision | Low — blocked upstream                            | Fix needs `sharp >= 0.35.0`; `next@15.5.23` declares `^0.34.3`. Wait for Next to widen it.   |
| [The unsigned initial commit](./unsigned-initial-commit.md)                 | Decision | Low — recommend closing as won't-do               | Fixing it rewrites all ~133 SHAs and force-pushes over merged PRs.                           |

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
- **The node pins do work — but only in an interactive shell.** `.zshrc` runs
  an nvm `load-nvmrc` hook on `chpwd`, so an interactive shell in this repo
  correctly uses node `24.15.0`, matching `.nvmrc` and `engines` (verified
  2026-08-12). Non-interactive shells — agent tooling, `sh -c`, some CI steps —
  skip that hook and fall back to whatever node is on `PATH` (Homebrew's, node
  26 on this machine), which prints `Unsupported engine` on every pnpm command.
  The warning is a property of the calling shell, not of the repo. Don't
  "fix" the pins because of it; if a non-interactive context needs the right
  node, have it read `.nvmrc` explicitly.
