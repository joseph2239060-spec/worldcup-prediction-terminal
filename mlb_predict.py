"""
MLB 每日预测数据管线:填球队得分/失分 + 当天赛程 → 算 λ → 跑 simulate_mlb → 写仪表盘数据。
用法:python3 mlb_predict.py   (生成 data/mlb-latest.js,供 mlb.html 读取)
每天更新:改 DATE / GAMES,并把 TEAMS 里当天两队的 rs/ra 换成最新真实值(先发投手 v2 再细化)。
"""
import json
from simulate_mlb import simulate_mlb_match

DATE = "2026-07-22"
LG = 4.50  # 联盟场均得分基准

# 球队:rs=场均得分, ra=场均失分(2026 赛季至今;道奇 rs 为已核实真实值,其余为当前估值,每日更新)
TEAMS = {
    "LAD": ("Dodgers", "道奇", 5.2, 4.0), "PHI": ("Phillies", "费城人", 4.2, 4.4),
    "NYY": ("Yankees", "洋基", 4.9, 4.1), "PIT": ("Pirates", "海盗", 3.9, 4.6),
    "ATL": ("Braves", "勇士", 4.8, 4.0), "SD": ("Padres", "教士", 4.4, 4.2),
    "HOU": ("Astros", "太空人", 4.6, 4.0), "MIA": ("Marlins", "马林鱼", 3.8, 4.7),
    "SEA": ("Mariners", "水手", 4.3, 3.9), "CIN": ("Reds", "红人", 4.4, 4.5),
    "TOR": ("Blue Jays", "蓝鸟", 4.5, 4.2), "TB": ("Rays", "光芒", 4.3, 4.1),
    "CHC": ("Cubs", "小熊", 4.7, 4.2), "DET": ("Tigers", "老虎", 4.4, 3.9),
    "BOS": ("Red Sox", "红袜", 4.8, 4.3), "BAL": ("Orioles", "金莺", 4.7, 4.2),
}

# 当天赛程:(away, home) —— 客队 @ 主队
GAMES = [
    ("LAD", "PHI"), ("PIT", "NYY"), ("SD", "ATL"), ("MIA", "HOU"),
    ("CIN", "SEA"), ("TB", "TOR"), ("DET", "CHC"), ("BAL", "BOS"),
]

VENUE = {
    "PHI": "Citizens Bank Park · 费城", "NYY": "Yankee Stadium · 纽约",
    "ATL": "Truist Park · 亚特兰大", "HOU": "Daikin Park · 休斯敦",
    "SEA": "T-Mobile Park · 西雅图", "TOR": "Rogers Centre · 多伦多",
    "CHC": "Wrigley Field · 芝加哥", "BOS": "Fenway Park · 波士顿",
}


def lam(off_rs, opp_ra, home):
    """λ = 球队进攻 × (对手失分/联盟均值),主场 +4%。"""
    base = off_rs * (opp_ra / LG)
    return round(base * (1.04 if home else 1.0), 2)


def build():
    out = []
    for away, home in GAMES:
        an, azh, ars, ara = TEAMS[away]
        hn, hzh, hrs, hra = TEAMS[home]
        lh = lam(hrs, ara, True)   # 主队进攻 vs 客队失分
        la = lam(ars, hra, False)  # 客队进攻 vs 主队失分
        r = simulate_mlb_match(lh, la)
        out.append({
            "id": f"MLB_{DATE.replace('-','')}_{away}{home}",
            "home": {"code": home, "en": hn, "zh": hzh},
            "away": {"code": away, "en": an, "zh": azh},
            "venue": VENUE.get(home, home),
            "lambda_home": lh, "lambda_away": la,
            **r,
        })
    data = {"date": DATE, "games": out}
    with open("data/mlb-latest.js", "w", encoding="utf-8") as f:
        f.write("window.MLB_GAMES = " + json.dumps(data, ensure_ascii=False) + ";\n")
    print(f"✅ 生成 {len(out)} 场 MLB 预测 → data/mlb-latest.js")
    for g in out:
        fav = g["home"]["code"] if g["home_win_pct"] >= g["away_win_pct"] else g["away"]["code"]
        print(f"  {g['away']['code']}@{g['home']['code']}: {fav} {max(g['home_win_pct'],g['away_win_pct'])}%  "
              f"期望{round(g['exp_h'])}-{round(g['exp_a'])}  大8.5 {g['over_8_5']}%")


if __name__ == "__main__":
    build()
