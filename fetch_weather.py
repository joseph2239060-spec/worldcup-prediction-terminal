"""
WCP TERMINAL · 球场天气预报拉取（open-meteo，免费、无需 API key）
─────────────────────────────────────────────────────────────────────
做什么：
  1. 内置 World Cup 2026 各球场真实坐标 + 海拔（固定真值）
  2. 从 open-meteo 拉指定日期、比赛时段(当地15-21点)的温度+湿度预报
  3. 写入 data/weather-latest.js（window.WCP_WEATHER）
  4. 打印每球场温湿度，建预测时按 球场名 取真值填（替代手估）

用法：
  python fetch_weather.py 2026-07-03        # 拉 7/3 全部球场
  python fetch_weather.py 2026-07-03 SoFi   # 只拉含"SoFi"的球场
依赖：仅标准库(urllib)。open-meteo 无需 key，预报覆盖未来 ~16 天。
"""
import json, urllib.request, urllib.parse, sys, os

if os.name == 'nt':
    os.system('')
    try: sys.stdout.reconfigure(encoding='utf-8')
    except Exception: pass

GREEN='\033[92m'; RED='\033[91m'; CYAN='\033[96m'; GRAY='\033[90m'; AMBER='\033[38;5;208m'; BOLD='\033[1m'; END='\033[0m'

# 球场名 → (纬度, 经度, 海拔m)  —— 海拔为球场固定真值
VENUES = {
    "SoFi Stadium, 洛杉矶":              (33.953, -118.339, 30),
    "BMO Field, 多伦多":                (43.633,  -79.418, 76),
    "BC Place, 温哥华":                 (49.277, -123.112, 3),
    "NRG Stadium, 休斯顿":              (29.685,  -95.411, 15),
    "MetLife Stadium, 新泽西":          (40.814,  -74.074, 7),
    "Mercedes-Benz Stadium, 亚特兰大":  (33.755,  -84.401, 320),
    "Estadio Azteca, 墨西哥城":         (19.303,  -99.150, 2200),
    "Estadio Akron, 瓜达拉哈拉":        (20.681, -103.463, 1566),
    "Estadio BBVA, 蒙特雷":            (25.669, -100.244, 540),
    "AT&T Stadium, 阿灵顿":            (32.748,  -97.093, 180),
    "Arrowhead Stadium, 堪萨斯城":      (39.049,  -94.484, 270),
    "Lincoln Financial Field, 费城":    (39.901,  -75.168, 12),
    "Gillette Stadium, 福克斯堡":       (42.091,  -71.264, 28),
    "Lumen Field, 西雅图":             (47.595, -122.332, 5),
    "Levi's Stadium, 旧金山湾区":       (37.403, -121.970, 5),
    "Hard Rock Stadium, 迈阿密":        (25.958,  -80.239, 2),
    "Estadio Banorte, 墨西哥城":        (19.303,  -99.150, 2200),
}

def fetch_venue(lat, lon, date):
    q = urllib.parse.urlencode({
        "latitude": lat, "longitude": lon,
        "hourly": "temperature_2m,relative_humidity_2m",
        "start_date": date, "end_date": date, "timezone": "auto"
    })
    url = f"https://api.open-meteo.com/v1/forecast?{q}"
    req = urllib.request.Request(url, headers={"User-Agent": "WCP/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.loads(r.read().decode("utf-8"))
    temps = data.get("hourly", {}).get("temperature_2m", [])
    hums  = data.get("hourly", {}).get("relative_humidity_2m", [])
    # 取比赛时段(当地 15-21 点)均值近似
    ts = [temps[i] for i in range(15, 22) if i < len(temps) and temps[i] is not None]
    hs = [hums[i]  for i in range(15, 22) if i < len(hums)  and hums[i]  is not None]
    t = round(sum(ts)/len(ts)) if ts else None
    h = round(sum(hs)/len(hs)) if hs else None
    return t, h

def main():
    if len(sys.argv) < 2:
        print(f"{RED}用法: python fetch_weather.py YYYY-MM-DD [球场关键词]{END}"); sys.exit(1)
    date = sys.argv[1]
    filt = sys.argv[2] if len(sys.argv) > 2 else None
    print(f"\n{AMBER}{BOLD}拉取 {date} 球场天气预报（open-meteo，比赛时段15-21点均值）…{END}\n")

    out = {}
    for name, (lat, lon, alt) in VENUES.items():
        if filt and filt.lower() not in name.lower():
            continue
        try:
            t, h = fetch_venue(lat, lon, date)
        except Exception as e:
            print(f"  {RED}{name} 拉取失败: {e}{END}"); continue
        out[name] = {"temp_c": t, "humidity_pct": h, "altitude_m": alt, "date": date}
        print(f"  {name}")
        print(f"    温度 {CYAN}{t}°C{END} / 湿度 {CYAN}{h}%{END} / 海拔 {alt}m")

    body = "// 球场天气预报(open-meteo,比赛时段均值) — 由 fetch_weather.py 生成，勿手改\n"
    body += "// 建预测时按 球场名 取 temp_c/humidity_pct/altitude_m 真值\n"
    body += "window.WCP_WEATHER = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n"
    with open("data/weather-latest.js", "w", encoding="utf-8") as f:
        f.write(body)
    print(f"\n{GREEN}✓ 写入 data/weather-latest.js（{len(out)} 个球场）{END}")
    print(f"{GRAY}建预测时按球场名取真值填 temp_c/humidity_pct/altitude_m{END}\n")

if __name__ == "__main__":
    main()
