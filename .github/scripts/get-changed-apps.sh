#!/usr/bin/env bash
set -euo pipefail

BASE="$1"
echo "Using base commit: $BASE"

pnpm exec lerna list --since "$BASE" --json \
  | jq -r '.[] | select(.location | test("apps/")) | .name' > changed.txt

if [ -s changed.txt ]; then
  APPS=$(jq -R -s -c 'split("\n") | map(select(length > 0)) | map({app: .})' changed.txt)
else
  APPS="[]"
fi

echo "changed_apps=${APPS}" >> $GITHUB_OUTPUT
