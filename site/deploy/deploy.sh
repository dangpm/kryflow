#!/usr/bin/env bash
# Deploy site KryFlow lên khi-box. Chạy từ máy dev: bash site/deploy/deploy.sh
# Bước: build → PRE-gate (disk, dist có index) → rsync web + compose → up -d (lần đầu) → smoke.
set -euo pipefail
HOST="${KRYFLOW_HOST:-khi-box}"
DEST="/opt/kryflow"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

echo "→ build"
node "$ROOT/site/build.mjs"
[ -f "$ROOT/site/dist/index.html" ] || { echo "✗ dist thiếu index.html"; exit 1; }
grep -rl $'—' "$ROOT/site/dist" --include='*.html' && { echo "✗ còn em-dash trong dist"; exit 1; } || true

echo "→ PRE-gate disk trên $HOST"
USED=$(ssh "$HOST" "df --output=pcent / | tail -1 | tr -dc '0-9'")
[ "$USED" -lt 85 ] || { echo "✗ disk $USED% > 85%, dừng"; exit 1; }
echo "  disk $USED% ok"

echo "→ rsync"
ssh "$HOST" "mkdir -p $DEST/web"
rsync -az --delete "$ROOT/site/dist/" "$HOST:$DEST/web/"
rsync -az "$ROOT/site/deploy/docker-compose.yml" "$ROOT/site/deploy/nginx.conf" "$HOST:$DEST/"

echo "→ compose up"
ssh "$HOST" "cd $DEST && docker compose up -d && docker compose ps --format '{{.Name}} {{.Status}}'"

echo "→ smoke"
sleep 2
code=$(curl -s -o /dev/null -w '%{http_code}' -H 'Host: kryflow.dang.pm' "https://kryflow.dang.pm/" || true)
echo "  https://kryflow.dang.pm/ → $code"
