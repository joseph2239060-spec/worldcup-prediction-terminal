#!/usr/bin/env bash
# ════════════════════════════════════════════════════════════════
# build_data.sh — 把 data/ 下所有单日预测文件合并成 data/matches-all.js
# 日更工作流：照常新建 data/matches-06XX.js，然后重跑本脚本即可
#   用法（在项目根目录）：  bash build_data.sh
# 原始单日文件不删，始终是数据源；matches-all.js 是生成产物
# ════════════════════════════════════════════════════════════════
set -e
cd "$(dirname "$0")/data"

OUT=matches-all.js
TMP=.matches-all.tmp

{
  echo "// ════════════════════════════════════════════════════════════════"
  echo "// 世界杯预测 · 全部每日数据合并文件 (matches-all.js) — 自动生成，勿手改"
  echo "// 由 build_data.sh 把所有 matches*.js 按日期顺序合并而成"
  echo "// 原始单日文件仍保留在 data/ 目录，是真正的数据源，可随时回退"
  echo "// ════════════════════════════════════════════════════════════════"
  echo ""
  # 6/11 揭幕日是 matches.js（无日期后缀），固定排最前
  for f in matches.js $(ls matches-0*.js 2>/dev/null | sort); do
    echo ""
    echo "// ══════════════════ $f ══════════════════"
    cat "$f"
    echo ""
  done
} > "$TMP"

mv "$TMP" "$OUT"
DAYS=$(grep -o 'WCP_DAYS\["2026-[0-9-]*"\]' "$OUT" | sort -u | wc -l)
echo "✓ 已生成 data/$OUT — 合并 $DAYS 天数据"
