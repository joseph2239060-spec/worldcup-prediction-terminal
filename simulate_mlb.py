"""
WCP TERMINAL · MLB 棒球赛前预测 · 泊松 + 蒙特卡洛引擎
────────────────────────────────────────────────────────────
和足球版同源:每队得分服从 Poisson(λ),λ = 预期得分(runs)。
差异:棒球没有平局 → 9 局打平进加时(extra innings),每加局各按 λ/9 继续,直到分出胜负。
输入 λ 由数据层算(球队场均得分 × 对手场均失分 / 联盟均值 · 见 mlb_data.py)。
依赖:仅 Python 3 标准库。运行:python3 simulate_mlb.py
"""
import random, math, json, sys
from collections import Counter


def poisson_sample(lam):
    """Knuth 泊松抽样。"""
    L = math.exp(-lam)
    k, p = 0, 1.0
    while p > L:
        k += 1
        p *= random.random()
    return k - 1


def simulate_mlb_match(lam_h, lam_a, n=50000):
    """跑 n 次:9 局 + 加时决胜。返回胜率/加时率/期望比分/大小分/最可能比分。"""
    home_w = away_w = extra = over_85 = 0
    home_by2 = away_by2 = 0
    score_counter = Counter()
    sum_h = sum_a = 0
    per_inning_h, per_inning_a = lam_h / 9.0, lam_a / 9.0

    for _ in range(n):
        gh, ga = poisson_sample(lam_h), poisson_sample(lam_a)
        went_extra = False
        guard = 0
        while gh == ga and guard < 30:  # 打平进加时,每加局各加一点
            went_extra = True
            gh += poisson_sample(per_inning_h)
            ga += poisson_sample(per_inning_a)
            guard += 1
        if gh == ga:  # 极罕见:加时上限内仍平 → 抛硬币
            if random.random() < 0.5:
                home_w += 1
            else:
                away_w += 1
        elif gh > ga:
            home_w += 1
        else:
            away_w += 1

        if went_extra:
            extra += 1
        if gh + ga > 8.5:
            over_85 += 1
        if gh - ga >= 2:
            home_by2 += 1
        elif ga - gh >= 2:
            away_by2 += 1
        score_counter[(gh, ga)] += 1
        sum_h += gh
        sum_a += ga

    return {
        "n": n,
        "home_win_pct": round(100 * home_w / n, 1),
        "away_win_pct": round(100 * away_w / n, 1),
        "extra_innings_pct": round(100 * extra / n, 1),
        "exp_h": round(sum_h / n, 2),
        "exp_a": round(sum_a / n, 2),
        "exp_total": round((sum_h + sum_a) / n, 2),
        "over_8_5": round(100 * over_85 / n, 1),
        "home_run_line_pct": round(100 * home_by2 / n, 1),  # 主队 -1.5 让分
        "away_run_line_pct": round(100 * away_by2 / n, 1),
        "top_scores": [f"{h}-{a}" for (h, a), _ in score_counter.most_common(6)],
    }


def report(m, r):
    hn, an = m["home"], m["away"]
    fav = hn if r["home_win_pct"] >= r["away_win_pct"] else an
    fav_pct = max(r["home_win_pct"], r["away_win_pct"])
    print(f"\n{'=' * 60}\n  MLB · {m['id']}  ·  {hn}  vs  {an}")
    print(f"  {m.get('kickoff','')}   λ_home={m['lambda_home']}  λ_away={m['lambda_away']}")
    print(f"{'-' * 60}")
    print(f"  谁赢(含加时):   {fav}  {fav_pct}%")
    print(f"  {hn} 胜 {r['home_win_pct']}%   |   {an} 胜 {r['away_win_pct']}%")
    print(f"  拖进加时:         {r['extra_innings_pct']}%")
    print(f"  期望比分:         {round(r['exp_h'])}-{round(r['exp_a'])}  (raw {r['exp_h']}:{r['exp_a']})")
    print(f"  总分:            {r['exp_total']}   大 8.5:{r['over_8_5']}%")
    print(f"  让分 {hn}-1.5:{r['home_run_line_pct']}%   {an}-1.5:{r['away_run_line_pct']}%")
    print(f"  最可能比分:       {'  '.join(r['top_scores'])}")


# ─── 示例(改这个 MATCHES 或从 mlb_data.py 喂真实 λ)───
MATCHES = [
    {"id": "MLB_DEMO_01", "home": "Dodgers", "away": "Rockies",
     "kickoff": "2026-07-22 22:10 ET", "lambda_home": 5.2, "lambda_away": 3.9},
]

if __name__ == "__main__":
    out = []
    for m in MATCHES:
        r = simulate_mlb_match(m["lambda_home"], m["lambda_away"])
        report(m, r)
        out.append({**m, **r})
    if "--json" in sys.argv:
        print("\n" + json.dumps(out, ensure_ascii=False))
