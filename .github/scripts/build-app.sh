#!/usr/bin/env bash
set -euo pipefail

APP="$1"

echo "Building and testing $APP"

pnpm exec lerna run lint --scope "$APP"
pnpm exec lerna run typecheck --scope "$APP"
pnpm exec lerna run test:ci --scope "$APP"
pnpm exec lerna run build --scope "$APP"
