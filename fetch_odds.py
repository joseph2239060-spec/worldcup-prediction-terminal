"""
WCP TERMINAL · 实时盘口拉取 + 模型 vs 庄家 edge 计算
─────────────────────────────────────────────────────────────────────
做什么：
  1. 从 The Odds API 拉世界杯 h2h 盘口
  2. 多家书商去水(de-vig)，算出市场隐含概率
  3. 写入 data/odds-latest.js，工具 ODDS_COMPARE tab 自动读
  4. 控制台打印"模型 vs 庄家"value 报告(需先有当日模型预测)

运行：python fetch_odds.py
依赖：仅标准库(urllib)。API key 在 odds_config.py（已 gitignore）。
"""

import json, urllib.request, urllib.parse, sys, os
from collections import defaultdict

if os.name == 'nt':
    os.system('')
    try: sys.stdout.reconfigure(encoding='utf-8')
    except Exception: pass

try:
    from odds_config import ODDS_API_KEY
except ImportError:
    print("缺 odds_config.py（含 ODDS_API_KEY）"); sys.exit(1)

GREEN='\033[92m'; RED='\033[91m'; YELLOW='\033[93m'; AMBER='\033[38;5;208m'
CYAN='\033[96m'; WHITE='\033[97m'; GRAY='\033[90m'; BOLD='\033[1m'; END='\033[0m'

BASE = "https://api.the-odds-api.com/v4/sports/soccer_fifa_world_cup/odds/"

# 英文队名 → 我们的队代码（API 用全名，含常见变体）
NAME2CODE = {
    "mexico":"MEX","south africa":"RSA","south korea":"KOR","korea republic":"KOR",
    "czechia":"CZE","czech republic":"CZE","canada":"CAN","bosnia and herzegovina":"BIH","bosnia & herzegovina":"BIH","bosnia":"BIH",
    "united states":"USA","usa":"USA","paraguay":"PAR","qatar":"QAT","switzerland":"SUI",
    "brazil":"BRA","morocco":"MAR","haiti":"HAI","scotland":"SCO","australia":"AUS",
    "turkey":"TUR","turkiye":"TUR","türkiye":"TUR","germany":"GER","curacao":"CUW","curaçao":"CUW",
    "netherlands":"NED","japan":"JPN","ivory coast":"CIV","cote d'ivoire":"CIV","côte d'ivoire":"CIV",
    "ecuador":"ECU","sweden":"SWE","tunisia":"TUN","spain":"ESP","cape verde":"CPV","cabo verde":"CPV",
    "belgium":"BEL","egypt":"EGY","saudi arabia":"KSA","uruguay":"URU","iran":"IRN","new zealand":"NZL",
    # Group I/J/K/L (6/16-17)
    "france":"FRA","senegal":"SEN","iraq":"IRQ","norway":"NOR",
    "argentina":"ARG","algeria":"ALG","austria":"AUT","jordan":"JOR",
    "portugal":"POR","dr congo":"COD","congo dr":"COD","democratic republic of congo":"COD",
    "england":"ENG","croatia":"CRO","ghana":"GHA","panama":"PAN",
    # 防 fallback 冲突：澳大利亚 vs 奥地利都会撞 AUS
    "australia":"AUS",
}

def code(name):
    return NAME2CODE.get(name.strip().lower(), name.strip()[:3].upper())

def fetch():
    q = urllib.parse.urlencode({"apiKey":ODDS_API_KEY,"regions":"us,uk,eu","markets":"h2h","oddsFormat":"decimal"})
    url = f"{BASE}?{q}"
    req = urllib.request.Request(url, headers={"User-Agent":"WCP/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        remaining = r.headers.get("x-requests-remaining","?")
        data = json.loads(r.read().decode("utf-8"))
    return data, remaining

def devig_match(m):
    """多家书商去水，返回市场隐含概率(home/draw/away)平均值"""
    home, away = m["home_team"], m["away_team"]
    accH=accD=accA=0.0; n=0
    for bk in m.get("bookmakers",[]):
        for mk in bk.get("markets",[]):
            if mk["key"]!="h2h": continue
            od={o["name"]:o["price"] for o in mk["outcomes"]}
            ph=od.get(home); pa=od.get(away); pd=od.get("Draw")
            if not(ph and pa and pd): continue
            ih,idr,ia = 1/ph, 1/pd, 1/pa
            s = ih+idr+ia            # overround
            accH+=ih/s; accD+=idr/s; accA+=ia/s; n+=1
    if n==0: return None
    return {"home":round(100*accH/n,1),"draw":round(100*accD/n,1),
            "away":round(100*accA/n,1),"books":n}

def main():
    print(f"\n{AMBER}{BOLD}拉取世界杯实时盘口…{END}")
    try:
        data, remaining = fetch()
    except Exception as e:
        print(f"{RED}拉取失败: {e}{END}"); sys.exit(1)
    print(f"{GRAY}返回 {len(data)} 场比赛 · API 配额剩余 {remaining}{END}\n")

    entries=[]
    for m in data:
        mk = devig_match(m)
        if not mk: continue
        hc, ac = code(m["home_team"]), code(m["away_team"])
        entries.append({
            "home_code":hc,"away_code":ac,
            "home_team":m["home_team"],"away_team":m["away_team"],
            "commence":m["commence_time"],
            "market":mk
        })
        print(f"  {WHITE}{m['home_team']} vs {m['away_team']}{END} {GRAY}({hc}/{ac}, {mk['books']}家){END}")
        print(f"    市场隐含: 主胜 {CYAN}{mk['home']}%{END} / 平 {CYAN}{mk['draw']}%{END} / 客胜 {CYAN}{mk['away']}%{END}")

    # 写出给工具用
    out = "// 实时盘口(去水后市场隐含概率) — 由 fetch_odds.py 生成，勿手改\n"
    out += "// 工具 ODDS_COMPARE tab 用它和模型概率算 edge\n"
    out += "window.WCP_ODDS = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"
    with open("data/odds-latest.js","w",encoding="utf-8") as f:
        f.write(out)
    print(f"\n{GREEN}✓ 写入 data/odds-latest.js（{len(entries)} 场）{END}")
    print(f"{GRAY}刷新工具 → ODDS_COMPARE tab 即可看到模型 vs 庄家 edge{END}\n")

if __name__ == "__main__":
    main()
