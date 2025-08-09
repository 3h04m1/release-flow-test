---
title: Release Process & Tagging
description: Managing versioning, changelogs, and deployments for Realworld.
order: 3
---

# Release Process & Tagging

## Branch-to-Release Mapping

| Branch  | Tag Suffix | Deployment             |
|---------|------------|------------------------|
| `main`  | none       | Production             |
| `stage` | `-stage`   | Staging                |
| `dev`   | *none*     | Dev (auto-deploy only) |

## Creating Releases

Releases happen after merging `stage` into `main`.  
We use **release-it** with **@release-it-plugins/lerna-changelog** to:

- Automatically bump version numbers based on commit history.
- Generate changelog entries.
- Create Git tags following semantic versioning.
- Publish GitHub Releases with changelog notes.

### Typical Release Command

```bash
npx release-it --ci
```

This command will:

- Detect version bump from commit messages (`feat`, `fix`, etc.).
- Update `package.json` version.
- Generate or update `CHANGELOG.md`.
- Commit the changes.
- Create a Git tag (e.g., `v1.2.3` or `v1.2.3-stage`).
- Push tags and release notes to GitHub.

## CI Integration

In your GitHub Actions workflow:

- Run `release-it` only on merges to `main` or `stage`.
- Skip tagging on `dev`.
