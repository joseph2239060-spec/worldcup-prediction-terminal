"""
WCP TERMINAL · 预测引擎 v2 · 泊松 + 纪律风险因子 (DISCIPLINE FACTOR)
─────────────────────────────────────────────────────────────────────
v1 (simulate.py) 的盲区：假设全程 11v11，算不了红牌断崖。
2026-06-11 揭幕战墨西哥2-0南非出了 3 张红牌，南非53'就9打11——v1 完全没料到。

v2 新增 discipline_factor：
  · 不"预测"红牌（没人能预测单张牌）
  · 而是估算每场的「红牌风险等级」，并在蒙特卡洛里模拟红牌对结果分布的影响
  · 风险来自三个真实可查的输入：
      1. 两队历史红牌率 (red cards / game)
      2. 当值主裁场均出牌数 (avg cards / game)
      3. 对抗烈度 (rivalry / stakes)

运行：python simulate_v2.py
对比 v1：python simulate.py
"""

import random
import math
import sys
import os
from collections import Counter

if os.name == 'nt':
    os.system('')
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

GREEN='\033[92m'; RED='\033[91m'; YELLOW='\033[93m'; BLUE='\033[94m'
AMBER='\033[38;5;208m'; CYAN='\033[96m'; WHITE='\033[97m'; GRAY='\033[90m'
BOLD='\033[1m'; END='\033[0m'

# ─── 赛事 + 纪律输入 ─────────────────────────────────────
# red_rate: 该队近 ~20 场场均红牌数（可从 Transfermarkt/FBref 查）
# ref_cards: 当值主裁场均总牌数（红+黄折算），未知用赛事均值 4.5
# intensity: 对抗烈度 0.8(友好)~1.5(死敌/淘汰赛)
MATCHES = [
    {"id": "WC2026_M001", "home": "🇲🇽 墨西哥", "away": "🇿🇦 南非",
     "lambda_home": 2.00, "lambda_away": 0.70,
     "home_red_rate": 0.12, "away_red_rate": 0.22,   # 南非纪律性差，红牌率高
     "ref_cards": 5.0, "intensity": 1.2,             # 揭幕战+东道主压力，烈度偏高
     "actual": "实际: 2-0，3 张红牌（南非2红 49'/52'，墨西哥1红 85'）"},
    {"id": "WC2026_M002", "home": "🇰🇷 韩国", "away": "🇨🇿 捷克",
     "lambda_home": 1.35, "lambda_away": 1.15,
     "home_red_rate": 0.10, "away_red_rate": 0.14,
     "ref_cards": 4.2, "intensity": 1.0,
     "actual": None},
]

# ─── 纪律风险等级 ────────────────────────────────────────
def discipline_risk(m):
    """
    综合三因子算出本场'出现至少一张红牌'的概率 + 风险等级。
    经验公式（v2 原型，权重待用历史数据回归校准）：
      base = (home_red + away_red) 两队红牌率之和
      调成概率：用泊松 P(至少1红) = 1 - e^(-expected_reds)
      expected_reds = (home_red + away_red) × (ref_cards/4.5) × intensity
    """
    expected_reds = (m["home_red_rate"] + m["away_red_rate"]) \
                    * (m["ref_cards"] / 4.5) * m["intensity"]
    p_any_red = 1 - math.exp(-expected_reds)
    if   p_any_red > 0.45: level, clr = "HIGH ⚠⚠",  RED
    elif p_any_red > 0.30: level, clr = "ELEVATED ⚠", AMBER
    else:                  level, clr = "LOW",        GREEN
    return expected_reds, p_any_red, level, clr

# ─── 泊松抽样 ────────────────────────────────────────────
def poisson_sample(lam):
    L = math.exp(-lam); k = 0; p = 1.0
    while p > L:
        k += 1; p *= random.random()
    return k - 1

# ─── v2 模拟：含红牌断崖 ─────────────────────────────────
def simulate_v2(m, n=50000):
    lam_h, lam_a = m["lambda_home"], m["lambda_away"]
    exp_reds, p_red, _, _ = discipline_risk(m)

    home_w = draw = away_w = 0
    red_games = 0
    sum_h = sum_a = 0

    for _ in range(n):
        # 1. 先决定本场红牌：用泊松抽红牌数
        n_reds_home = poisson_sample(exp_reds * m["home_red_rate"] /
                                     (m["home_red_rate"] + m["away_red_rate"]))
        n_reds_away = poisson_sample(exp_reds * m["away_red_rate"] /
                                     (m["home_red_rate"] + m["away_red_rate"]))
        if n_reds_home + n_reds_away > 0:
            red_games += 1

        # 2. 红牌影响 lambda：每张红牌让该队剩余进攻力按比例衰减、对方受益
        #    简化：一张红牌平均在比赛中段，影响约剩余 40% 时间
        adj_h = lam_h * (0.78 ** n_reds_home) * (1.12 ** n_reds_away)
        adj_a = lam_a * (0.78 ** n_reds_away) * (1.12 ** n_reds_home)

        gh = poisson_sample(adj_h)
        ga = poisson_sample(adj_a)

        if gh > ga: home_w += 1
        elif gh < ga: away_w += 1
        else: draw += 1
        sum_h += gh; sum_a += ga

    return {
        "home_win_pct": 100*home_w/n, "draw_pct": 100*draw/n, "away_win_pct": 100*away_w/n,
        "exp_h": sum_h/n, "exp_a": sum_a/n,
        "red_game_pct": 100*red_games/n,
    }

# ─── v1 baseline（无纪律因子）对比用 ─────────────────────
def simulate_v1(m, n=50000):
    lam_h, lam_a = m["lambda_home"], m["lambda_away"]
    home_w = draw = away_w = 0
    for _ in range(n):
        gh = poisson_sample(lam_h); ga = poisson_sample(lam_a)
        if gh > ga: home_w += 1
        elif gh < ga: away_w += 1
        else: draw += 1
    return {"home_win_pct":100*home_w/n, "draw_pct":100*draw/n, "away_win_pct":100*away_w/n}

# ─── 报告 ────────────────────────────────────────────────
def main():
    print()
    print(f"{AMBER}{BOLD}╔════════════════════════════════════════════════════════════════════════╗{END}")
    print(f"{AMBER}{BOLD}║  WCP ENGINE v2 · POISSON + DISCIPLINE FACTOR (红牌风险因子)              ║{END}")
    print(f"{AMBER}{BOLD}║  v1 盲区修补：把'红牌断崖'纳入蒙特卡洛                                    ║{END}")
    print(f"{AMBER}{BOLD}╚════════════════════════════════════════════════════════════════════════╝{END}")
    print()

    for m in MATCHES:
        exp_reds, p_red, level, clr = discipline_risk(m)
        v1 = simulate_v1(m)
        v2 = simulate_v2(m)

        print(f"{AMBER}{BOLD}━━ {m['home']}  vs  {m['away']}  ━━{END}")
        print(f"  {GRAY}纪律输入: 红牌率 {m['home_red_rate']}+{m['away_red_rate']} | 主裁场均牌 {m['ref_cards']} | 烈度 {m['intensity']}{END}")
        print()
        print(f"  {WHITE}红牌风险等级:{END} {clr}{BOLD}{level}{END}   "
              f"{GRAY}(预期红牌数 {exp_reds:.2f}，本场至少1红概率 {clr}{p_red*100:.0f}%{END}{GRAY}){END}")
        print(f"  {GRAY}模拟中出现红牌的比赛占比: {v2['red_game_pct']:.0f}%{END}")
        print()
        print(f"  {GRAY}{'':14}  {'V1 (无纪律)':>14}   {'V2 (含红牌)':>14}{END}")
        print(f"  {WHITE}主队胜{END}        {GREEN}{v1['home_win_pct']:13.1f}%{END}   {GREEN}{v2['home_win_pct']:13.1f}%{END}")
        print(f"  {WHITE}平局  {END}        {WHITE}{v1['draw_pct']:13.1f}%{END}   {WHITE}{v2['draw_pct']:13.1f}%{END}")
        print(f"  {WHITE}客队胜{END}        {RED}{v1['away_win_pct']:13.1f}%{END}   {RED}{v2['away_win_pct']:13.1f}%{END}")
        print()
        print(f"  {CYAN}解读:{END} {GRAY}红牌因子让结果分布'变胖'——强队被罚红会被拉下水，"
              f"弱队被罚红则雪上加霜。{END}")
        print(f"        {GRAY}模型不预测某张具体的牌，但给出'这场可能因牌翻车'的风险标记。{END}")
        if m["actual"]:
            print(f"  {AMBER}{m['actual']}{END}")
            print(f"  {AMBER}→ v2 把这场标为 {level}，正是提醒'别因 11v11 假设而对结果过度自信'。{END}")
        print()

    print(f"{GRAY}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{END}")
    print(f"{GRAY}v2 原型说明：权重(0.78衰减/1.12增益/40%时段)为经验值，待用历史红牌比赛回归校准。{END}")
    print(f"{GRAY}红牌率/主裁数据需从 FBref/Transfermarkt 接入，当前为估算。Not investment advice.{END}")
    print()

if __name__ == "__main__":
    main()
