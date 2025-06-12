#!/usr/bin/env bash

# Check if LHCI is installed
command -v lhci >/dev/null 2>&1 || { echo >&2 "❌ Lighthouse CI is not installed. Run: npm install -g @lhci/cli"; exit 1; }

# Create output directory
mkdir -p local-lighthouse-report

# Run Lighthouse CI for local URLs
lhci collect \
  --url=http://localhost:4321 \
  --url=http://localhost:4321/blog \
  --url=http://localhost:4321/blog/page/1 \
  --numberOfRuns=1 \
  --config=./.lighthouserc.js || { echo "❌ Lighthouse collection failed"; exit 1; }

# Copy reports
cp .lighthouseci/*.html local-lighthouse-report/ || { echo "❌ No HTML reports found in .lighthouseci/"; exit 1; }

# Open report in browser based on OS
echo "✅ Lighthouse report saved to local-lighthouse-report/index.html"

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  xdg-open local-lighthouse-report/index.html
elif [[ "$OSTYPE" == "darwin"* ]]; then
  open local-lighthouse-report/index.html
elif [[ "$OSTYPE" == "msys"* || "$OSTYPE" == "cygwin"* || "$OSTYPE" == "win32" ]]; then
  start local-lighthouse-report/index.html
else
  echo "ℹ️ Please open local-lighthouse-report/index.html manually"
fi