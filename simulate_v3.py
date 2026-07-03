"""
WCP TERMINAL · 预测引擎 v3 · 加权 λ (WEIGHTED LAMBDA)
─────────────────────────────────────────────────────────────────────
v1/v2 的根本毛病：λ 直接对近 N 场进失球做简单平均。
  → 友谊赛打鱼腩的进球，和世界杯打强队的进球，被当成等价数据。
  → 这是 6/12 加拿大被高估、美国被低估的共同根因。

v3 给每场历史比赛三重加权后再算 λ：
  1. 时间近度 (recency)      —— 越近的比赛权重越高（指数衰减）
  2. 对手强度 (opponent)     —— 打强队的数据更可信，打鱼腩的灌水要打折
  3. 赛事级别 (competition)  —— 世界杯/预选赛 > 友谊赛

对"进攻"和"防守"分开校正：
  · 进攻：对强队的防线还能进球 → 加分；对鱼腩狂灌 → 打折
  · 防守：对强队丢球可原谅；对鱼腩还丢球 → 加倍惩罚

运行：python simulate_v3.py   （对比 v1：python simulate.py）
"""

import math
import sys
import os

if os.name == 'nt':
    os.system('')
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

GREEN='\033[92m'; RED='\033[91m'; YELLOW='\033[93m'; BLUE='\033[94m'
AMBER='\033[38;5;208m'; CYAN='\033[96m'; WHITE='\033[97m'; GRAY='\033[90m'
BOLD='\033[1m'; END='\033[0m'

# ─── 加权参数（可调）────────────────────────────────────
RECENCY_DECAY = 0.18      # 越大=越只看最近的比赛
COMP_WEIGHT = {           # 赛事级别权重
    'WC':       1.00,     # 世界杯
    'qual':     0.90,     # 预选赛
    'nations':  0.80,     # 国家联赛
    'friendly': 0.55,     # 友谊赛
}
LEAGUE_AVG_GF = 1.35      # 国际比赛场均进球基线

# 对手强度系数：FIFA 排名 → 0.6(鱼腩) ~ 1.5(顶级)
def opp_strength(rank):
    s = 1.0 + (50 - rank) / 90.0
    return max(0.65, min(1.50, s))

# ─── 球队近期战绩（示例数据，正式用需接 FBref/Transfermarkt）──
# 每场: (对手, 我进, 我失, 对手FIFA排名, 赛事, 几场前[0=最近])
# 数据基于各 Workflow 调研里提到的真实近期结果，部分为代表性估计
TEAMS = {
    "USA": {
        "rank": 17, "flag": "🇺🇸",
        "history": [
            ("Paraguay", 2, 1, 41, 'friendly', 0),   # 2025-11 真实 2-1 胜
            ("Belgium",  2, 5, 8,  'friendly', 1),   # 真实 2-5 负（对强队）
            ("Germany",  1, 2, 9,  'friendly', 2),   # 真实 1-2 负（对强队）
            ("Jamaica",  4, 0, 55, 'qual',     3),
            ("Panama",   1, 1, 40, 'nations',  4),
        ],
    },
    "Paraguay": {
        "rank": 41, "flag": "🇵🇾",
        "history": [
            ("Brazil",    0, 0, 6,  'qual', 0),   # 逼平强队（防守硬，但0进球）
            ("Argentina", 1, 1, 1,  'qual', 1),
            ("Uruguay",   2, 2, 15, 'qual', 2),
            ("Mexico",    1, 0, 14, 'friendly', 3),  # 爆冷胜
            ("Bolivia",   2, 1, 78, 'qual', 4),
        ],
    },
    "Canada": {
        "rank": 30, "flag": "🇨🇦",
        "history": [
            ("Ecuador",  0, 0, 23, 'friendly', 0),  # 进攻钝
            ("Colombia", 0, 0, 13, 'friendly', 1),
            ("Tunisia",  1, 0, 38, 'friendly', 2),
            ("Honduras", 2, 1, 70, 'nations',  3),
            ("Curacao",  3, 0, 85, 'qual',     4),  # 打鱼腩灌水
        ],
    },
    "Bosnia": {
        "rank": 64, "flag": "🇧🇦",
        "history": [
            ("Wales",     1, 1, 33, 'qual', 0),   # 附加赛硬仗
            ("Italy",     1, 1, 10, 'qual', 1),
            ("Malta",     2, 1, 168,'qual', 2),
            ("Cyprus",    3, 0, 110,'qual', 3),   # 打鱼腩灌水
            ("Romania",   1, 2, 47, 'nations', 4),
        ],
    },
}

# ─── 加权计算 ────────────────────────────────────────────
def weighted_ratings(team):
    """返回 (加权进攻力, 加权防守失球, 简单平均进攻, 简单平均失球)"""
    num_att = num_def = wsum = 0.0
    raw_gf = raw_ga = 0.0
    n = len(team["history"])
    for (opp, gf, ga, orank, comp, ago) in team["history"]:
        w_rec  = math.exp(-RECENCY_DECAY * ago)
        w_comp = COMP_WEIGHT.get(comp, 0.6)
        w = w_rec * w_comp
        os_ = opp_strength(orank)

        # 进攻：对强队进球加分(×os)，对鱼腩进球打折
        gf_adj = gf * os_
        # 防守：对强队失球可原谅(÷os)，对鱼腩失球加倍惩罚
        ga_adj = ga / os_

        num_att += gf_adj * w
        num_def += ga_adj * w
        wsum += w
        raw_gf += gf
        raw_ga += ga

    return (num_att / wsum, num_def / wsum, raw_gf / n, raw_ga / n)

# ─── 由加权评分算 λ ──────────────────────────────────────
def lambdas(home, away, home_factor=1.0):
    ha, hd, _, _ = weighted_ratings(TEAMS[home])
    aa, ad, _, _ = weighted_ratings(TEAMS[away])
    # 攻击强度/防守弱点 都相对联赛基线归一
    atk_h = ha / LEAGUE_AVG_GF
    atk_a = aa / LEAGUE_AVG_GF
    dfw_h = hd / LEAGUE_AVG_GF   # 主队防守弱点
    dfw_a = ad / LEAGUE_AVG_GF   # 客队防守弱点
    lam_h = LEAGUE_AVG_GF * atk_h * dfw_a * home_factor
    lam_a = LEAGUE_AVG_GF * atk_a * dfw_h * (2 - home_factor if home_factor < 1.1 else 0.92)
    return round(lam_h, 2), round(lam_a, 2)

# ─── 泊松胜平负 ──────────────────────────────────────────
def poisson_pmf(k, lam):
    return math.exp(-lam) * lam**k / math.factorial(k)

def outcome_probs(lam_h, lam_a, maxg=8):
    hw = dr = aw = 0.0
    for h in range(maxg):
        for a in range(maxg):
            p = poisson_pmf(h, lam_h) * poisson_pmf(a, lam_a)
            if h > a: hw += p
            elif h == a: dr += p
            else: aw += p
    tot = hw + dr + aw
    return 100*hw/tot, 100*dr/tot, 100*aw/tot

# ─── naive λ（v1 简单平均，用于对比）────────────────────
def naive_lambdas(home, away, home_factor=1.0):
    _, _, hgf, hga = weighted_ratings(TEAMS[home])
    _, _, agf, aga = weighted_ratings(TEAMS[away])
    lam_h = (hgf * aga / LEAGUE_AVG_GF) * home_factor
    lam_a = (agf * hga / LEAGUE_AVG_GF) * (0.92 if home_factor >= 1.0 else 1.0)
    return round(lam_h, 2), round(lam_a, 2)

# ─── 报告 ────────────────────────────────────────────────
def show_team_ratings(name):
    t = TEAMS[name]
    ha, hd, rgf, rga = weighted_ratings(t)
    print(f"  {t['flag']} {WHITE}{BOLD}{name}{END} {GRAY}(FIFA #{t['rank']}){END}")
    print(f"     进攻: 简单平均 {YELLOW}{rgf:.2f}{END}  →  加权后 {GREEN}{BOLD}{ha:.2f}{END}  {GRAY}({'灌水被打折' if ha < rgf else '对强队含金量高,上调'}){END}")
    print(f"     防守: 简单平均失 {YELLOW}{rga:.2f}{END}  →  加权后 {RED}{BOLD}{hd:.2f}{END}  {GRAY}({'对鱼腩失球被加罚' if hd > rga else '对强队失球被原谅'}){END}")
    print()

def compare_match(home, away, home_factor, actual):
    nlh, nla = naive_lambdas(home, away, home_factor)
    wlh, wla = lambdas(home, away, home_factor)
    n_hw, n_dr, n_aw = outcome_probs(nlh, nla)
    w_hw, w_dr, w_aw = outcome_probs(wlh, wla)

    print(f"{AMBER}{BOLD}━━ {TEAMS[home]['flag']} {home}  vs  {away} {TEAMS[away]['flag']}  ━━{END}")
    print(f"  {GRAY}{'':22}{'v1 简单平均':>16}{'v3 加权后':>16}{END}")
    print(f"  λ (主/客)            {YELLOW}{nlh:>6} / {nla:<6}{END}   {GREEN}{wlh:>6} / {wla:<6}{END}")
    print(f"  {home} 胜            {YELLOW}{n_hw:>14.1f}%{END}   {GREEN}{w_hw:>14.1f}%{END}")
    print(f"  平局                 {YELLOW}{n_dr:>14.1f}%{END}   {GREEN}{w_dr:>14.1f}%{END}")
    print(f"  {away} 胜            {YELLOW}{n_aw:>14.1f}%{END}   {GREEN}{w_aw:>14.1f}%{END}")
    print(f"  {CYAN}实际结果: {actual}{END}")
    print()

def main():
    print()
    print(f"{AMBER}{BOLD}╔════════════════════════════════════════════════════════════════════════╗{END}")
    print(f"{AMBER}{BOLD}║  WCP ENGINE v3 · WEIGHTED LAMBDA (加权 λ)                                ║{END}")
    print(f"{AMBER}{BOLD}║  按 时间近度 × 对手强度 × 赛事级别 加权，清掉'打鱼腩灌水'的脏样本        ║{END}")
    print(f"{AMBER}{BOLD}╚════════════════════════════════════════════════════════════════════════╝{END}")
    print()

    print(f"{WHITE}{BOLD}【第一步】各队进攻/防守评分：简单平均 → 加权后{END}\n")
    for name in ["USA", "Paraguay", "Canada", "Bosnia"]:
        show_team_ratings(name)

    print(f"{WHITE}{BOLD}【第二步】用加权 λ 重算 6/12 那两场失手的比赛{END}\n")
    compare_match("USA", "Paraguay", 1.22, "美国 4-1 巴拉圭（v1 给美国仅 40%，严重低估）")
    compare_match("Canada", "Bosnia", 1.20, "加拿大 1-1 波黑（v1 给加拿大 60%，高估）")

    print(f"{GRAY}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{END}")
    print(f"{GRAY}注：球队近期战绩为示例数据（基于Workflow调研的真实结果+代表性估计）。{END}")
    print(f"{GRAY}正式上线需接 FBref/Transfermarkt 的逐场数据 + 对手真实防守评分。{END}")
    print(f"{GRAY}权重参数(衰减0.18/赛事0.55-1.0/对手0.65-1.5)待用历史回测校准。{END}")
    print()

if __name__ == "__main__":
    main()
