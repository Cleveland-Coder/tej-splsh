# What this directory is

**GitHub issues are the source of truth for this repo's todos.** This directory
holds only the _briefs_ those issues point at — self-contained prompts you can
paste into a fresh Claude Code session to pick work up cold.

There is deliberately **no index here**. Run `gh issue list` for that; an index
in-tree would drift out of sync with the issues and there would be two answers
to "what's left".

Each brief opens with a status block naming its issue:

```markdown
**Status:** ...
**Tracked as:** GitHub issue #NN
**Last verified:** YYYY-MM-DD — what was actually true on disk that day
**Run from:** the directory the session should start in
```

Facts are stated with the date they were checked, so a stale brief announces
itself rather than quietly misleading you. Re-verify before relying on any of
it.

When an issue closes, delete its brief in the same PR.

Work not tied to a GitHub-hosted repo is tracked in `~/.claude/unfinished/`
instead — machine config, local-only repos, cross-cutting chores.
