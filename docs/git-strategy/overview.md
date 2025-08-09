---
title: Overview
description: Overview and rationale of our Git branching and release strategy for the Realworld project.
order: 1
---

# Git Branching & Release Strategy Overview

This documentation provides an in-depth guide to the **Git branching, merging, and release workflow** used in the Realworld project.  
Our approach is carefully designed to achieve the following goals:

- **Maintain a clean and traceable commit history**, ensuring every change can be traced to a task or feature.
- **Automate changelog generation** based on commit messages, reducing manual overhead.
- **Facilitate reliable and predictable deployments** across multiple environments: Development, Staging, and Production.
- **Align Git workflows with Agile principles**, reflecting how user stories and tasks are handled in branches.
- **Ensure team collaboration and code quality** through enforced PR reviews and commit standards.

This overview introduces the high-level concepts.  
Subsequent pages will cover branch definitions, merging rules, commit guidelines, release flow, and tooling.

For a visual summary of the branching strategy, see the **Flowchart of Branching Strategy** below.

```mermaid
flowchart TD
    main[main<br><sub>Production</sub>]
    stage[stage<br><sub>Pre-production QA</sub>]
    dev[dev<br><sub>Integration & Dev testing</sub>]
    feat_auth[feat/auth<br><sub>User Story: Authentication Feature</sub>]
    feat_ui[feat/ui<br><sub>User Story: UI Feature</sub>]
    bugfix_login[bugfix/login<br><sub>Bug Fix: Login Issue</sub>]
    task_api[task/api<br><sub>Task: API Implementation</sub>]
    task_auth_api[task/auth-login-screen<br><sub>Task: Auth Login Screen</sub>]
    task_ui_fix[task/ui-fix<br><sub>Task: UI Fix</sub>]
    task_refactor[task/refactor<br><sub>Task: Refactor Login</sub>]

    %% Merge arrows show direction of merging/pull requests
    task_auth_api --> feat_auth
    task_api --> feat_auth
    task_ui_fix --> feat_ui
    task_refactor --> bugfix_login

    feat_auth --> dev
    feat_ui --> dev
    bugfix_login --> dev

    dev --> stage
    stage --> main

    %% Labels for typical PR or merge types
%%        TODO: Add correct links to your documentation
    click feat_auth "https://yourcompany.com/docs/git-strategy#feature-branches" "Feature Branches"
    click feat_ui "https://yourcompany.com/docs/git-strategy#feature-branches"
    click bugfix_login "https://yourcompany.com/docs/git-strategy#bugfix-branches"
    click dev "https://yourcompany.com/docs/git-strategy#development-branch"
    click stage "https://yourcompany.com/docs/git-strategy#staging-branch"
    click main "https://yourcompany.com/docs/git-strategy#production-branch"
```

## Git Graph

```mermaid
gitGraph
    commit id: "chore: initial commit"

    branch dev
    checkout dev
    commit id: "chore: setup dev environment"

    checkout main
    branch stage

    checkout main

    branch feat/auth
    commit id: "feat(auth): add authentication feature"

    branch task/api
    commit id: "fix(api): correct API response format"
    checkout feat/auth
    merge task/api

    branch feat/ui
    commit id: "feat(ui): implement UI feature"

    branch task/ui-fix
    commit id: "fix(ui): fix UI bug in header"
    checkout feat/ui
    merge task/ui-fix

    branch bugfix/login
    commit id: "fix(login): fix login issue with invalid token"

    branch task/refactor
    commit id: "refactor(login): improve login flow code quality"
    checkout bugfix/login
    merge task/refactor

    checkout dev
    merge feat/auth
    merge feat/ui
    merge bugfix/login

    checkout stage
    merge dev tag: "chore(release): v1.0.0-stage"

    checkout main
    merge stage tag: "chore(release): v1.0.0"
```
