---
title: Branch Structure & Purpose
description: Detailed explanation of Git branch types and their roles in the Realworld project.
order: 2
---

# Branch Structure & Purpose

To maintain order and clarity, our Git repository uses two main categories of branches:

## 1. Permanent Branches

These long-lived branches correspond to deployment environments or release stages.  
They are protected and receive changes only via Pull Requests (PRs).

| Branch  | Description                                                                                | Deployment Target       | Protection & Rules                                                                        |
|---------|--------------------------------------------------------------------------------------------|-------------------------|-------------------------------------------------------------------------------------------|
| `main`  | Stable, production-ready code. Contains only thoroughly tested and approved features.      | Production server       | Protected branch; only merges from `stage` branch; requires PR reviews and status checks. |
| `stage` | Pre-production testing branch where final QA is performed before production release.       | Staging server          | Protected branch; only merges from `dev` branch; used for release candidate testing.      |
| `dev`   | Integration branch where features from multiple developers are merged and tested together. | Development environment | Protected branch; receives squash-merged feature branches (`feat/*` and `bugfix/*`).      |

### Why separate these?

This separation allows isolated testing at each stage.

- `dev` helps catch integration issues early.
- `stage` ensures release candidates are production-like.
- `main` remains clean and stable for customers.

## 2. Temporary Branches

Temporary branches are short-lived and focused on specific work items:

| Branch Prefix | Purpose                              | Merge Target                          |
|---------------|--------------------------------------|---------------------------------------|
| `feat/*`      | Full user stories or large features. | `dev`                                 |
| `task/*`      | Smaller subtasks within a feature.   | The related `feat/*` branch           |
| `bugfix/*`    | Fixes for non-critical bugs.         | `dev`                                 |
| `hotfix/*`    | Urgent fixes for production issues.  | `main`, `stage`, and optionally `dev` |

### Branch lifecycle

- `task/*` branches are deleted immediately after merging into their `feat/*` branch.
- `feat/*` and `bugfix/*` branches are deleted after merging into `dev`.
- `hotfix/*` branches are deleted after merging into all relevant permanent branches.
