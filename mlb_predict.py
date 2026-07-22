"""
MLB 每日预测管线 —— 数据全部来自 MLB 官方 Stats API(statsapi.mlb.com,公开、免 key)。
· 赛程:/schedule            · 球队真实场均得/失分:/standings(赛季至今 runsScored/runsAllowed ÷ 场次)
自动拉真实数据 → 算 λ → 跑 simulate_mlb(泊松+蒙特卡洛)→ 写 data/mlb-latest.js(供 mlb.html)。
用法:python3 mlb_predict.py [YYYY-MM-DD]   不传日期默认 DEFAULT_DATE。
注:先发投手影响大,v2 再细化;当前 λ = 球队季度真实进攻 × 对手真实失分 / 联盟均值,主场 +4%。
队标用各队主色圆形徽章 + 缩写(不使用官方 logo,避免商标侵权)。
"""
import json, sys, urllib.request
from simulate_mlb import simulate_mlb_match

DEFAULT_DATE = "2026-07-22"
LG = 4.50  # 联盟场均得分基准
API = "https://statsapi.mlb.com/api/v1"

# MLB 官方 team.name(简称)→ (三字码, 中文, 主色 hex)。主色为公开事实,仅用于配色圆徽,非官方 logo。
TEAM_META = {
    "Nationals": ("WSH", "国民", "#AB0003"), "Pirates": ("PIT", "海盗", "#FDB827"),
    "Dodgers": ("LAD", "道奇", "#005A9C"), "Cubs": ("CHC", "小熊", "#0E3386"),
    "Brewers": ("MIL", "酿酒人", "#12284B"), "Braves": ("ATL", "勇士", "#CE1141"),
    "Rockies": ("COL", "落基山", "#333366"), "White Sox": ("CWS", "白袜", "#27251F"),
    "Twins": ("MIN", "双城", "#002B5C"), "Yankees": ("NYY", "洋基", "#0C2340"),
    "Orioles": ("BAL", "金莺", "#DF4601"), "Rays": ("TB", "光芒", "#092C5C"),
    "Astros": ("HOU", "太空人", "#002D62"), "Athletics": ("ATH", "运动家", "#003831"),
    "Cardinals": ("STL", "红雀", "#C41E3A"), "Marlins": ("MIA", "马林鱼", "#00A3E0"),
    "D-backs": ("ARI", "响尾蛇", "#A71930"), "Phillies": ("PHI", "费城人", "#E81828"),
    "Angels": ("LAA", "天使", "#BA0021"), "Red Sox": ("BOS", "红袜", "#BD3039"),
    "Royals": ("KC", "皇家", "#004687"), "Tigers": ("DET", "老虎", "#0C2340"),
    "Rangers": ("TEX", "游骑兵", "#003278"), "Reds": ("CIN", "红人", "#C6011F"),
    "Padres": ("SD", "教士", "#472245"), "Giants": ("SF", "巨人", "#FD5A1E"),
    "Mets": ("NYM", "大都会", "#002D72"), "Mariners": ("SEA", "水手", "#0C2C56"),
    "Guardians": ("CLE", "守护者", "#0C2340"), "Blue Jays": ("TOR", "蓝鸟", "#134A8E"),
}


def fetch(path):
    with urllib.request.urlopen(API + path, timeout=25) as r:
        return json.load(r)


def load_teams(season):
    """id → 真实场均得/失分 + 元数据。"""
    j = fetch(f"/standings?leagueId=103,104&season={season}&standingsTypes=regularSeason")
    teams = {}
    for div in j.get("records", []):
        for t in div.get("teamRecords", []):
            meta = TEAM_META.get(t["team"]["name"])
            if not meta:
                continue
            gp = t.get("gamesPlayed") or 1
            code, zh, color = meta
            teams[t["team"]["id"]] = {
                "code": code, "zh": zh, "color": color, "en": t["team"]["name"],
                "rs": t["runsScored"] / gp, "ra": t["runsAllowed"] / gp,
            }
    return teams


def load_games(date, teams):
    j = fetch(f"/schedule?sportId=1&date={date}")
    games, seen = [], set()
    for d in j.get("dates", []):
        for g in d.get("games", []):
            h = g["teams"]["home"]["team"]["id"]
            a = g["teams"]["away"]["team"]["id"]
            if h in teams and a in teams and (a, h) not in seen:  # 双重赛只取一场(同对阵同预测)
                seen.add((a, h))
                games.append((a, h, g.get("venue", {}).get("name", "")))
    return games


def lam(off_rs, opp_ra, home):
    return round(off_rs * (opp_ra / LG) * (1.04 if home else 1.0), 2)


def build(date):
    teams = load_teams(date[:4])
    games = load_games(date, teams)
    out = []
    for a, h, venue in games:
        A, H = teams[a], teams[h]
        lh, la = lam(H["rs"], A["ra"], True), lam(A["rs"], H["ra"], False)
        r = simulate_mlb_match(lh, la)
        out.append({
            "id": f"MLB_{date.replace('-','')}_{A['code']}{H['code']}",
            "home": {"code": H["code"], "en": H["en"], "zh": H["zh"], "color": H["color"]},
            "away": {"code": A["code"], "en": A["en"], "zh": A["zh"], "color": A["color"]},
            "venue": venue, "lambda_home": lh, "lambda_away": la, **r,
        })
    data = {"date": date, "games": out,
            "source": "MLB Stats API (statsapi.mlb.com) · 赛季至今真实场均得失分"}
    with open("data/mlb-latest.js", "w", encoding="utf-8") as f:
        f.write("window.MLB_GAMES = " + json.dumps(data, ensure_ascii=False) + ";\n")
    print(f"✅ {len(out)} 场 · 数据源:MLB 官方 Stats API(真实场均得失分)→ data/mlb-latest.js")
    for g in out:
        fav = g["home"]["code"] if g["home_win_pct"] >= g["away_win_pct"] else g["away"]["code"]
        print(f"  {g['away']['code']}@{g['home']['code']}: {fav} {max(g['home_win_pct'],g['away_win_pct'])}%"
              f"  λ {g['lambda_away']}/{g['lambda_home']}  期望{round(g['exp_h'])}-{round(g['exp_a'])}")


if __name__ == "__main__":
    build(sys.argv[1] if len(sys.argv) > 1 else DEFAULT_DATE)
