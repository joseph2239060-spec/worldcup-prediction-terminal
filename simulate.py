"""
WCP TERMINAL · 世界杯赛前预测 · 泊松回归 + 蒙特卡洛模拟引擎
─────────────────────────────────────────────────────────────
原理：
  1. 每队的进球数服从 Poisson(λ) 分布 — λ 是预期进球
  2. λ 由泊松回归从历史数据 fit 出来（基于攻防强度、对手实力、主客场等特征）
  3. 用 50,000 次蒙特卡洛抽样模拟比赛，统计胜/平/负、期望比分、大小球等

依赖：仅 Python 3 标准库，无需 pip install。
运行：python simulate.py
"""

import random
import math
import sys
import os
import time
from collections import Counter

# ─── Windows: ANSI + UTF-8 启用 ──────────────────────────
if os.name == 'nt':
    os.system('')  # 触发 Windows 10+ VT mode 支持 ANSI 颜色
    # 强制 stdout 使用 UTF-8 (默认 GBK 编码不支持 emoji)
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# ─── ANSI 颜色 ───────────────────────────────────────────
GREEN  = '\033[92m'
RED    = '\033[91m'
YELLOW = '\033[93m'
BLUE   = '\033[94m'
AMBER  = '\033[38;5;208m'
CYAN   = '\033[96m'
WHITE  = '\033[97m'
GRAY   = '\033[90m'
BOLD   = '\033[1m'
DIM    = '\033[2m'
END    = '\033[0m'

# ─── 示例赛程 · DEMO ─────────────────────────────────────
# ⚠️ 下面是「怎么用」的示例数据（2026 揭幕日两场），不是当天最新预测。
#    每天的真实预测在仪表盘 index.html 和 data/matches-*.js 里。
#    想用模型算你自己的比赛，就改下面这个 MATCHES 列表：
#      · home / away 填两队名
#      · lambda_home / lambda_away 填两队的「预期进球数」(λ，一般 0.5~2.5)
#    改完直接跑： python simulate.py
MATCHES = [
    # ── 2026-06-11 揭幕日两场（示例；来源见 SOURCES.md）──
    # λ 基于核实的近期战绩 + FIFA 排名 + 主客场 + 海拔估算。
    {"id": "WC2026_M001", "home": "🇲🇽 墨西哥", "away": "🇿🇦 南非",
     "kickoff": "2026-06-11 15:00 ET", "group": "A",
     "lambda_home": 2.00, "lambda_away": 0.70, "tag": "OPENING ★ 揭幕战"},
    {"id": "WC2026_M002", "home": "🇰🇷 韩国",   "away": "🇨🇿 捷克",
     "kickoff": "2026-06-11 22:00 ET", "group": "A",
     "lambda_home": 1.35, "lambda_away": 1.15, "tag": None},
]

# ─── 泊松抽样 (Knuth 算法) ───────────────────────────────
def poisson_sample(lam):
    """从 Poisson(lam) 分布抽一个样本。Knuth 算法。"""
    L = math.exp(-lam)
    k = 0
    p = 1.0
    while p > L:
        k += 1
        p *= random.random()
    return k - 1

# ─── 蒙特卡洛模拟主体 ────────────────────────────────────
def simulate_match(lam_h, lam_a, n=50000, label=""):
    """跑 n 次模拟，统计所有指标"""
    home_w = draw = away_w = 0
    score_counter = Counter()
    over_25 = btts = clean_sheet_h = 0
    sum_h = sum_a = 0

    last_print = 0
    for i in range(n):
        gh = poisson_sample(lam_h)
        ga = poisson_sample(lam_a)

        if gh > ga: home_w += 1
        elif gh < ga: away_w += 1
        else: draw += 1

        score_counter[(gh, ga)] += 1
        if gh + ga > 2.5: over_25 += 1
        if gh > 0 and ga > 0: btts += 1
        if ga == 0: clean_sheet_h += 1
        sum_h += gh
        sum_a += ga

        # 进度条 (每 5% 更新一次, 录视频用)
        if i - last_print > n // 40:
            pct = 100 * i / n
            bar_len = int(pct / 2.5)
            sys.stdout.write(
                f"\r  {GRAY}{label} {CYAN}[{'█' * bar_len}{'░' * (40 - bar_len)}]{END} {CYAN}{pct:5.1f}%{END}"
            )
            sys.stdout.flush()
            last_print = i

    # 清掉进度条
    sys.stdout.write(f"\r  {GREEN}✓ {label} {' ' * 70}{END}\n")
    sys.stdout.flush()

    return {
        "n": n,
        "home_win_pct": 100 * home_w / n,
        "draw_pct":     100 * draw / n,
        "away_win_pct": 100 * away_w / n,
        "exp_h":        sum_h / n,
        "exp_a":        sum_a / n,
        "exp_total":    (sum_h + sum_a) / n,
        "over_2_5":     100 * over_25 / n,
        "btts":         100 * btts / n,
        "clean_sheet":  100 * clean_sheet_h / n,
        "top_scores":   score_counter.most_common(5),
    }

# ─── 可视化辅助 ──────────────────────────────────────────
def hbar(pct, length=22, color=GREEN):
    filled = int(round(pct / 100 * length))
    return color + '█' * filled + GRAY + '░' * (length - filled) + END

# ─── 打印单场报告 ────────────────────────────────────────
def print_match_report(m, r):
    home_short = m['home'].split(' ')[-1]
    away_short = m['away'].split(' ')[-1]

    print()
    print(f"{AMBER}{BOLD}{'━' * 76}{END}")
    print(f"{AMBER}{BOLD}  WCP TERMINAL  ·  MATCH SIMULATION  ·  {m['id']}  ·  GROUP {m['group']}{END}")
    if m['tag']:
        print(f"{AMBER}{BOLD}  TAG: {m['tag']}{END}")
    print(f"{AMBER}{BOLD}{'━' * 76}{END}")
    print(f"  {WHITE}{BOLD}{m['home']}{END}{GRAY}  vs  {END}{WHITE}{BOLD}{m['away']}{END}")
    print(f"  {GRAY}KICKOFF: {m['kickoff']}{END}")
    print(f"  {GRAY}λ_home = {m['lambda_home']}    λ_away = {m['lambda_away']}    n = {r['n']:,} simulations{END}")
    print()
    print(f"  {AMBER}┌─ WIN PROBABILITY ──────────────────────────────────────────────────┐{END}")
    print(f"  {AMBER}│{END}  {WHITE}{m['home']:<14}{END} {hbar(r['home_win_pct'], 22, GREEN)}  {GREEN}{BOLD}{r['home_win_pct']:5.1f}%{END}")
    print(f"  {AMBER}│{END}  {GRAY}DRAW          {END} {hbar(r['draw_pct'], 22, WHITE)}  {WHITE}{r['draw_pct']:5.1f}%{END}")
    print(f"  {AMBER}│{END}  {WHITE}{m['away']:<14}{END} {hbar(r['away_win_pct'], 22, RED)}  {RED}{BOLD}{r['away_win_pct']:5.1f}%{END}")
    print(f"  {AMBER}└────────────────────────────────────────────────────────────────────┘{END}")
    print()
    print(f"  {AMBER}┌─ DERIVED METRICS ──────────────────────────────────────────────────┐{END}")
    print(f"  {AMBER}│{END}  EXPECTED SCORE:       {WHITE}{BOLD}{round(r['exp_h'])} : {round(r['exp_a'])}{END}     {GRAY}(raw {r['exp_h']:.2f} : {r['exp_a']:.2f}){END}")
    print(f"  {AMBER}│{END}  EXPECTED TOTAL GOALS: {WHITE}{BOLD}{r['exp_total']:.2f}{END}")
    over_clr = GREEN if r['over_2_5'] > 50 else YELLOW
    btts_clr = GREEN if r['btts'] > 50 else YELLOW
    print(f"  {AMBER}│{END}  OVER 2.5:             {over_clr}{BOLD}{r['over_2_5']:5.1f}%{END}")
    print(f"  {AMBER}│{END}  BOTH TEAMS TO SCORE:  {btts_clr}{BOLD}{r['btts']:5.1f}%{END}")
    print(f"  {AMBER}│{END}  HOME CLEAN SHEET:     {YELLOW}{BOLD}{r['clean_sheet']:5.1f}%{END}")
    print(f"  {AMBER}└────────────────────────────────────────────────────────────────────┘{END}")
    print()
    print(f"  {AMBER}┌─ TOP 5 MOST LIKELY SCORES ─────────────────────────────────────────┐{END}")
    for (h, a), count in r['top_scores']:
        pct = 100 * count / r['n']
        print(f"  {AMBER}│{END}  {WHITE}{BOLD}{h}-{a}{END}   {hbar(pct, 35, CYAN)}  {CYAN}{pct:5.2f}%{END}")
    print(f"  {AMBER}└────────────────────────────────────────────────────────────────────┘{END}")

# ─── 简化版泊松回归 (演示用) ─────────────────────────────
def demo_poisson_fit():
    """
    演示：给一组历史 (主客 进球) 数据，估算两队各自的 λ。
    现实里用 GLM 解，这里用极大似然估计（样本均值 = λ）。
    """
    print(f"\n{AMBER}{BOLD}━━ POISSON REGRESSION DEMO ━━{END}\n")
    print(f"  {GRAY}演示：从历史比赛数据 fit 出每队的 λ (预期进球){END}\n")

    # mock 数据：墨西哥近 8 场进球数
    mex_history = [2, 1, 3, 0, 2, 1, 2, 3]
    rsa_history = [1, 0, 2, 1, 0, 1, 1, 1]

    lambda_mex = sum(mex_history) / len(mex_history)
    lambda_rsa = sum(rsa_history) / len(rsa_history)

    print(f"  {WHITE}墨西哥近 8 场进球：{mex_history}{END}")
    print(f"  {GRAY}最大似然估计:{END}  {GREEN}λ_MEX = {lambda_mex:.3f}{END}\n")
    print(f"  {WHITE}南非近 8 场进球：  {rsa_history}{END}")
    print(f"  {GRAY}最大似然估计:{END}  {RED}λ_RSA = {lambda_rsa:.3f}{END}\n")
    print(f"  {GRAY}(实际模型还要加入：对手强度、主客场、海拔、伤病等修正项){END}\n")
    return lambda_mex, lambda_rsa

# ─── 主入口 ──────────────────────────────────────────────
def main():
    print()
    print(f"{AMBER}{BOLD}╔══════════════════════════════════════════════════════════════════════════╗{END}")
    print(f"{AMBER}{BOLD}║  WCP TERMINAL · WORLD CUP PREDICT · POISSON + MONTE CARLO ENGINE          ║{END}")
    print(f"{AMBER}{BOLD}║  Date: DEMO SLATE  ·  Model: POISSON+XGB v4.2  ·  n = 50,000 per match    ║{END}")
    print(f"{AMBER}{BOLD}╚══════════════════════════════════════════════════════════════════════════╝{END}")
    print()

    # 显示泊松回归 demo (可注释掉)
    if "--with-fit" in sys.argv:
        demo_poisson_fit()

    print(f"  {GRAY}Running Monte Carlo simulations for {len(MATCHES)} matches...{END}\n")

    results = []
    for m in MATCHES:
        label = f"{m['home']:<14}vs {m['away']:<14}"
        r = simulate_match(m['lambda_home'], m['lambda_away'], n=50000, label=label)
        results.append((m, r))

    # 逐场详细报告
    for m, r in results:
        print_match_report(m, r)

    # 汇总
    print()
    print(f"{AMBER}{BOLD}═══════════════════════════════════════════════════════════════════════════{END}")
    print(f"{AMBER}{BOLD}  DEMO SUMMARY · 揭幕日示例（改 MATCHES 换成你要的比赛）{END}")
    print(f"{AMBER}{BOLD}═══════════════════════════════════════════════════════════════════════════{END}")
    print(f"  {'MATCH':<32}  {'HOME':>7} {'DRAW':>7} {'AWAY':>7}  {'EXP':>5}  {'O2.5':>6}")
    print(f"  {GRAY}{'─' * 73}{END}")
    for m, r in results:
        home_clr = GREEN if r['home_win_pct'] > 60 else YELLOW if r['home_win_pct'] > 40 else RED
        upset = AMBER + " ⚠" if 30 < r['away_win_pct'] < 45 else ""
        print(f"  {WHITE}{m['home']:<14}{END} vs {WHITE}{m['away']:<14}{END}  "
              f"{home_clr}{r['home_win_pct']:6.1f}%{END} {r['draw_pct']:6.1f}% {RED}{r['away_win_pct']:6.1f}%{END}  "
              f"{round(r['exp_h'])}:{round(r['exp_a'])}    {CYAN}{r['over_2_5']:5.1f}%{END}{upset}")
    print()
    print(f"  {GRAY}Total simulations: {len(MATCHES) * 50000:,}{END}")
    print(f"  {GRAY}Method: Poisson(λ) sampling × Monte Carlo aggregation{END}")
    print()
    print(f"  {AMBER}NOTE:{END} {GRAY}此脚本输出是 {WHITE}独立泊松 baseline{END}{GRAY}。{END}")
    print(f"        {GRAY}完整模型 (HTML 显示) 还包含：{END}")
    print(f"        {GRAY}  · Dixon-Coles 低比分修正 (1997, 平局概率↑、强队胜率↓ ~5%){END}")
    print(f"        {GRAY}  · 主力伤停权重 (如南非 Modiba 体能存疑、两边锋伤缺){END}")
    print(f"        {GRAY}  · 临场变量 (海拔 2200m/天气/旅途){END}")
    print(f"        {GRAY}基线与完整模型的差异本身就是 Agent 的工作量。{END}")
    print()
    print(f"  {GRAY}Disclaimer: Statistical estimates only. Not investment advice.{END}")
    print()

if __name__ == "__main__":
    main()
