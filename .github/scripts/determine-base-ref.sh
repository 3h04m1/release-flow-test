#!/usr/bin/env bash
set -euo pipefail

if [ "${GITHUB_EVENT_NAME}" = "pull_request" ]; then
  echo "base_ref=${GITHUB_BASE_REF_SHA}" >> $GITHUB_OUTPUT
elif [ -n "${GITHUB_EVENT_BEFORE}" ] && [ "${GITHUB_EVENT_BEFORE}" != "0000000000000000000000000000000000000000" ]; then
  echo "base_ref=${GITHUB_EVENT_BEFORE}" >> $GITHUB_OUTPUT
else
  git fetch origin main || true
  if git rev-parse origin/main >/dev/null 2>&1; then
    echo "base_ref=$(git rev-parse origin/main)" >> $GITHUB_OUTPUT
  else
    echo "base_ref=$(git rev-list --max-parents=0 HEAD)" >> $GITHUB_OUTPUT
  fi
fi
