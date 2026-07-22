"""
MLB 每日预测管线 —— 数据全部来自 MLB 官方 Stats API(statsapi.mlb.com,公开、免 key)。
· 赛程 + 当天先发投手:/schedule?hydrate=probablePitcher   · 30 队真实场均得/失分:/standings
· 先发投手赛季 ERA:/people?personIds=...&hydrate=stats(...)
λ = 球队真实进攻 × 对手「有效失分」/ 联盟均值,主场 +4%。
  对手有效失分 = 0.6 × 先发投手 RA9 + 0.4 × 球队整体失分(先发约投 5–6 局,牛棚兜底)。
队标用各队主色圆徽 + 缩写(不使用官方 logo,避免商标侵权)。
用法:python3 mlb_predict.py [YYYY-MM-DD]
"""
import json, sys, urllib.request
from simulate_mlb import simulate_mlb_match

DEFAULT_DATE = "2026-07-22"
LG = 4.50          # 联盟场均得分基准
SP_SHARE = 0.60    # 先发投手对一场失分的权重(约投 5.5/9 局)
API = "https://statsapi.mlb.com/api/v1"

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
    j = fetch(f"/standings?leagueId=103,104&season={season}&standingsTypes=regularSeason")
    teams = {}
    for div in j.get("records", []):
        for t in div.get("teamRecords", []):
            meta = TEAM_META.get(t["team"]["name"])
            if not meta:
                continue
            gp = t.get("gamesPlayed") or 1
            code, zh, color = meta
            teams[t["team"]["id"]] = {"code": code, "zh": zh, "color": color, "en": t["team"]["name"],
                                     "rs": t["runsScored"] / gp, "ra": t["runsAllowed"] / gp}
    return teams


def load_games(date, teams):
    j = fetch(f"/schedule?sportId=1&date={date}&hydrate=probablePitcher")
    games, seen = [], set()
    for d in j.get("dates", []):
        for g in d.get("games", []):
            hm, aw = g["teams"]["home"], g["teams"]["away"]
            h, a = hm["team"]["id"], aw["team"]["id"]
            if h in teams and a in teams and (a, h) not in seen:
                seen.add((a, h))
                games.append({"a": a, "h": h, "venue": g.get("venue", {}).get("name", ""),
                              "hp": hm.get("probablePitcher"), "ap": aw.get("probablePitcher")})
    return games


def load_pitchers(ids, season):
    if not ids:
        return {}
    j = fetch(f"/people?personIds={','.join(map(str, ids))}&hydrate=stats(group=[pitching],type=[season],season={season})")
    out = {}
    for p in j.get("people", []):
        era = None
        for sg in p.get("stats", []):
            for sp in sg.get("splits", []):
                v = sp.get("stat", {}).get("era")
                if v not in (None, "-", "-.--", ".---"):
                    era = float(v)
                    break
            if era is not None:
                break
        out[p["id"]] = era
    return out


def eff_ra(sp_era, team_ra):
    """对手一场的有效失分:先发投手 RA9(ERA×1.08)占 60%,球队整体失分兜底 40%。缺先发用球队失分。"""
    if sp_era is None:
        return team_ra
    return round(SP_SHARE * sp_era * 1.08 + (1 - SP_SHARE) * team_ra, 2)


def build(date):
    season = date[:4]
    teams = load_teams(season)
    games = load_games(date, teams)
    pids = [g[k]["id"] for g in games for k in ("hp", "ap") if g.get(k)]
    era = load_pitchers(pids, season)

    def sp_info(p):
        return {"name": p["fullName"], "era": era.get(p["id"])} if p else None

    out = []
    for g in games:
        A, H = teams[g["a"]], teams[g["h"]]
        h_era = era.get(g["hp"]["id"]) if g.get("hp") else None
        a_era = era.get(g["ap"]["id"]) if g.get("ap") else None
        lh = round(H["rs"] * (eff_ra(a_era, A["ra"]) / LG) * 1.04, 2)  # 主队进攻 vs 客队先发+牛棚
        la = round(A["rs"] * (eff_ra(h_era, H["ra"]) / LG), 2)          # 客队进攻 vs 主队先发+牛棚
        r = simulate_mlb_match(lh, la)
        out.append({
            "id": f"MLB_{date.replace('-','')}_{A['code']}{H['code']}",
            "home": {"code": H["code"], "en": H["en"], "zh": H["zh"], "color": H["color"], "sp": sp_info(g.get("hp"))},
            "away": {"code": A["code"], "en": A["en"], "zh": A["zh"], "color": A["color"], "sp": sp_info(g.get("ap"))},
            "venue": g["venue"], "lambda_home": lh, "lambda_away": la, **r,
        })
    data = {"date": date, "games": out,
            "source": "MLB Stats API · 真实场均得失分 + 当天先发投手 ERA"}
    with open("data/mlb-latest.js", "w", encoding="utf-8") as f:
        f.write("window.MLB_GAMES = " + json.dumps(data, ensure_ascii=False) + ";\n")
    print(f"✅ {len(out)} 场 · 数据源:MLB 官方 API(真实得失分 + 先发投手)→ data/mlb-latest.js")
    for g in out:
        fav = g["home"]["code"] if g["home_win_pct"] >= g["away_win_pct"] else g["away"]["code"]
        hp = g["home"]["sp"] or {}; ap = g["away"]["sp"] or {}
        print(f"  {g['away']['code']}@{g['home']['code']}: {fav} {max(g['home_win_pct'],g['away_win_pct'])}%"
              f"  先发 {ap.get('name','?')}({ap.get('era','-')}) vs {hp.get('name','?')}({hp.get('era','-')})")


if __name__ == "__main__":
    build(sys.argv[1] if len(sys.argv) > 1 else DEFAULT_DATE)
