---
title: Merge Rules & Commit Guidelines
description: Guidelines on merge types and commit message standards for Realworld.
order: 4
---

# Merge Rules & Commit Guidelines

## Merge Types

| From → To           | Merge Type      | Rationale                                           |
|---------------------|-----------------|-----------------------------------------------------|
| `task/*` → `feat/*` | Squash & merge  | Keeps feature branch history concise and focused.   |
| `feat/*` → `dev`    | Squash & merge  | One commit per feature facilitates PR review.       |
| `dev` → `stage`     | Merge commit    | Preserves commit granularity for changelogs.        |
| `stage` → `main`    | Merge commit    | Includes full feature commit details in releases.   |
| `hotfix/*` → `main` | Squash or merge | Depends on urgency; keep history clean or detailed. |

## Why this mix?

- Squash merges simplify feature and task branches.
- Merge commits preserve detailed history for environment branches, crucial for automated changelogs.

## Commit Messages & PR Titles

We strictly follow the **[Conventional Commits](https://www.conventionalcommits.org/)** spec:

```
<type>(<scope>): <short summary>
```

Examples:

- `feat(auth): add refresh token support`
- `fix(ui): fix navbar alignment bug`
- `docs(readme): update installation instructions`

### Types:

- `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

### Enforcement:

- Use [commitlint](https://commitlint.js.org/) in CI to reject non-conforming commits.
- Enforce PR titles to follow the same pattern as they become the squash commit message.
- Optionally use GitHub Actions or bots to validate PR titles.
