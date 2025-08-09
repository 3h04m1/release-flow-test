---
title: Pull Request Best Practices
description: Guidelines to create and review pull requests in Realworld.
order: 4
---

# Pull Request Best Practices

## Creating Pull Requests

- Target branch must follow the rules:
    - `task/*` → corresponding `feat/*`
    - `feat/*` → `dev`
    - `bugfix/*` → `dev`
    - `hotfix/*` → `main` (and `stage`, `dev` if relevant)

- PR title **must** follow Conventional Commits.

- Keep PRs small and focused on a single concern.

- Include a descriptive PR body outlining:
    - What was changed and why
    - Link to relevant user story or issue
    - Any deployment or testing instructions

## Reviewing Pull Requests

- Verify PR title format.
- Check that all tests pass.
- Ensure code follows style and lint rules.
- Validate no unrelated changes.
- Leave comments for improvements or questions.

## Merging

- Use **Squash merge** for `task/*` and `feat/*` PRs.
- Use **Merge commit** for `dev` → `stage` and `stage` → `main`.
- After merging, delete feature or bugfix branches.

---

## Hotfix PRs

- Critical fixes that require immediate production deployment.
- PRs target `main` and backport merges to `stage` and `dev`.
- Prefer **fast merges** but still follow commit and PR guidelines.
