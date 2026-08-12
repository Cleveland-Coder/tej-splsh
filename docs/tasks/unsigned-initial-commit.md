# Decision: the unsigned initial commit (08a223c)

Written 2026-08-12, found during the husky hook fixup.

**Recommendation: do nothing.** This is on the backlog to be _decided_ and
closed, not implemented. The cost of fixing it is far out of proportion to the
benefit, and it is currently harmless. Read the analysis before acting.

## What it is

`08a223c "Initial commit"` carries no `gpgsig` header — `%G?` reports `N`. It
is committed under `raul@clevelandcoder.com`, so the signing hook does treat it
as mine. It is the **only** unsigned commit out of all ~133 in the repo
(verified 2026-08-12 by walking every commit's raw header).

## Why it is currently harmless

The global pre-push hook only inspects commits that are not yet published. For
a push to `origin`, `08a223c` is long since published, so it falls outside the
range the hook computes and is never looked at.

It surfaces in exactly one situation: pushing the full history to a remote that
does not already have it. The hook's new-branch path computes
`git rev-list <local> --not --remotes=<remote>`, which on a fresh remote is the
entire history — including the root commit. I hit this while testing against a
throwaway bare repo, and it was a true positive, not a bug.

## Why fixing it is expensive

Signing the root commit rewrites the root commit, which changes the SHA of
**every commit in the repo**. That means:

- a force-push to `origin`, on a repo whose history is already merged via
  PRs #9–#12
- every one of those merge commits and PR references on GitHub now points at
  commits that no longer exist
- any other clone or branch anywhere becomes detached from the new history

That is a lot of blast radius to retroactively sign a single "Initial commit"
that contains nothing sensitive and whose authorship is not in dispute.

## If you decide to do it anyway

Do not do it casually or as a side effect of another task. It needs its own
session, a full backup (`git clone --mirror` first), and a deliberate
force-push. The rewrite itself is roughly:

```
git rebase --root --force-rebase --gpg-sign
```

Verify afterwards that every commit reports a signature, then force-push.

## The cheap workaround, if it ever gets annoying

When seeding a genuinely new remote, bypass once:

```
git push --no-verify <new-remote> main
```

That is the intended escape hatch and costs nothing.
