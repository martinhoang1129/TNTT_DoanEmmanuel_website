#!/bin/bash
# Vercel Ignored Build Step
# Prevents unnecessary rebuilds from rapid TinaCMS saves.
# Only builds if:
#   1. The branch is 'main', OR
#   2. At least 60 seconds have passed since the last commit (debounce)

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  echo "✅ Main branch — proceeding with build."
  exit 1  # 1 = proceed with build
fi

echo "🚫 Not main branch — skipping build."
exit 0  # 0 = skip build
