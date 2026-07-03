"""
WCP TERMINAL · 双模型擂台 · v1 (简单平均) vs v3 (加权 λ)
─────────────────────────────────────────────────────────────────────
不替换、不二选一——两个模型并行跑，每场各出各的预测，
赛后用真实结果同时打分。谁更准，让现实当裁判。

· v1：近期进失球简单平均 → λ（baseline）
· v3：按 时间近度×对手强度×赛事级别 加权 → λ

运行：python simulate_compare.py
"""

import math, sys, os
if os.name == 'nt':
    os.system('')
    try: sys.stdout.reconfigure(encoding='utf-8')
    except Exception: pass

GREEN='\033[92m'; RED='\033[91m'; YELLOW='\033[93m'; AMBER='\033[38;5;208m'
CYAN='\033[96m'; WHITE='\033[97m'; GRAY='\033[90m'; BOLD='\033[1m'; END='\033[0m'

RECENCY_DECAY = 0.18
COMP_WEIGHT = {'WC':1.00, 'qual':0.90, 'nations':0.80, 'friendly':0.55}
LEAGUE_AVG_GF = 1.35

def opp_strength(rank):
    return max(0.65, min(1.50, 1.0 + (50 - rank)/90.0))

# 球队近期战绩（示例数据，基于 Workflow 调研真实结果+代表性估计）
# (对手, 我进, 我失, 对手FIFA排名, 赛事, 几场前)
TEAMS = {
    "墨西哥": {"rank":14,"flag":"🇲🇽","history":[
        ("Serbia",5,1,33,'friendly',0),("Ghana",2,0,73,'friendly',1),
        ("Australia",1,0,27,'friendly',2),("USA",0,1,17,'nations',3),("Honduras",2,0,70,'qual',4)]},
    "南非": {"rank":60,"flag":"🇿🇦","history":[
        ("Jamaica",1,1,55,'friendly',0),("Nicaragua",0,0,90,'friendly',1),
        ("Nigeria",1,1,38,'qual',2),("Benin",2,0,95,'qual',3),("Lesotho",3,0,150,'qual',4)]},
    "韩国": {"rank":25,"flag":"🇰🇷","history":[
        ("Brazil",0,5,6,'friendly',0),("ElSalvador",5,0,80,'friendly',1),
        ("IvoryCoast",0,4,40,'friendly',2),("Iraq",2,0,58,'qual',3),("Kuwait",3,1,137,'qual',4)]},
    "捷克": {"rank":39,"flag":"🇨🇿","history":[
        ("Ireland",1,1,60,'qual',0),("Denmark",2,2,21,'qual',1),
        ("Croatia",1,5,10,'qual',2),("Gibraltar",6,0,200,'qual',3),("Faroe",2,1,136,'qual',4)]},
    "美国": {"rank":17,"flag":"🇺🇸","history":[
        ("Paraguay",2,1,41,'friendly',0),("Belgium",2,5,8,'friendly',1),
        ("Germany",1,2,9,'friendly',2),("Jamaica",4,0,55,'qual',3),("Panama",1,1,40,'nations',4)]},
    "巴拉圭": {"rank":41,"flag":"🇵🇾","history":[
        ("Brazil",0,0,6,'qual',0),("Argentina",1,1,1,'qual',1),
        ("Uruguay",2,2,15,'qual',2),("Mexico",1,0,14,'friendly',3),("Bolivia",2,1,78,'qual',4)]},
    "加拿大": {"rank":30,"flag":"🇨🇦","history":[
        ("Ecuador",0,0,23,'friendly',0),("Colombia",0,0,13,'friendly',1),
        ("Tunisia",1,0,38,'friendly',2),("Honduras",2,1,70,'nations',3),("Curacao",3,0,85,'qual',4)]},
    "波黑": {"rank":64,"flag":"🇧🇦","history":[
        ("Wales",1,1,33,'qual',0),("Italy",1,1,10,'qual',1),
        ("Malta",2,1,168,'qual',2),("Cyprus",3,0,110,'qual',3),("Romania",1,2,47,'nations',4)]},
    # ── 6/13 八队 ──
    "卡塔尔": {"rank":56,"flag":"🇶🇦","history":[
        ("Palestine",2,1,95,'qual',0),("Syria",1,0,93,'qual',1),
        ("ElSalvador",0,1,80,'friendly',2),("UAE",1,1,64,'qual',3),("Kyrgyzstan",3,1,101,'qual',4)]},
    "瑞士": {"rank":19,"flag":"🇨🇭","history":[
        ("Germany",3,4,9,'friendly',0),("Norway",0,0,32,'friendly',1),
        ("Jordan",4,1,62,'friendly',2),("Sweden",2,1,38,'nations',3),("Kosovo",1,0,84,'nations',4)]},
    "巴西": {"rank":6,"flag":"🇧🇷","history":[
        ("Croatia",3,1,10,'friendly',0),("Panama",6,2,40,'friendly',1),
        ("Egypt",2,1,33,'friendly',2),("Chile",2,1,25,'qual',3),("Peru",1,1,46,'qual',4)]},
    "摩洛哥": {"rank":7,"flag":"🇲🇦","history":[
        ("Norway",1,1,32,'friendly',0),("Tanzania",4,0,98,'qual',1),
        ("Zambia",2,0,88,'qual',2),("Gabon",5,1,80,'qual',3),("CongoDR",3,1,56,'qual',4)]},
    "海地": {"rank":83,"flag":"🇭🇹","history":[
        ("NewZealand",4,0,89,'friendly',0),("CostaRica",1,0,54,'qual',1),
        ("Nicaragua",3,0,90,'qual',2),("CostaRica",3,3,54,'qual',3),("Peru",1,2,46,'friendly',4)]},
    "苏格兰": {"rank":42,"flag":"🏴","history":[
        ("Bolivia",4,0,78,'friendly',0),("Curacao",4,1,82,'friendly',1),
        ("Liechtenstein",4,0,200,'qual',2),("Greece",3,0,48,'qual',3),("Denmark",0,2,21,'qual',4)]},
    "澳大利亚": {"rank":27,"flag":"🇦🇺","history":[
        ("Colombia",0,3,13,'friendly',0),("Venezuela",0,1,50,'friendly',1),
        ("Indonesia",5,1,118,'qual',2),("China",2,0,90,'qual',3),("Japan",1,1,18,'qual',4)]},
    "土耳其": {"rank":22,"flag":"🇹🇷","history":[
        ("Kosovo",1,0,84,'qual',0),("Romania",1,0,47,'qual',1),
        ("Iceland",3,2,72,'qual',2),("Bulgaria",2,1,85,'qual',3),("Spain",0,3,2,'qual',4)]},
    # ── 6/14 八队 ──
    "德国": {"rank":9,"flag":"🇩🇪","history":[
        ("Italy",2,1,10,'nations',0),("Netherlands",1,1,7,'nations',1),
        ("Hungary",3,0,40,'nations',2),("Bosnia",4,0,64,'nations',3),("Slovakia",2,0,45,'qual',4)]},
    "库拉索": {"rank":82,"flag":"🇨🇼","history":[
        ("Australia",1,5,27,'friendly',0),("China",0,2,90,'friendly',1),
        ("Jamaica",2,1,55,'qual',2),("Haiti",1,1,83,'qual',3),("Trinidad",3,0,100,'qual',4)]},
    "荷兰": {"rank":7,"flag":"🇳🇱","history":[
        ("Poland",1,1,28,'qual',0),("Algeria",1,2,43,'friendly',1),
        ("Lithuania",4,0,140,'qual',2),("Malta",4,0,168,'qual',3),("Ecuador",1,1,23,'friendly',4)]},
    "日本": {"rank":18,"flag":"🇯🇵","history":[
        ("Brazil",2,1,6,'friendly',0),("England",1,0,4,'friendly',1),
        ("Scotland",2,0,42,'friendly',2),("Bahrain",3,0,80,'qual',3),("SaudiArabia",1,0,57,'qual',4)]},
    "科特迪瓦": {"rank":33,"flag":"🇨🇮","history":[
        ("France",2,1,2,'friendly',0),("SouthKorea",4,0,25,'friendly',1),
        ("BurkinaFaso",3,0,55,'qual',2),("Kenya",1,0,98,'qual',3),("Gabon",2,1,80,'qual',4)]},
    "厄瓜多尔": {"rank":23,"flag":"🇪🇨","history":[
        ("Argentina",1,0,1,'qual',0),("USA",0,0,17,'friendly',1),
        ("Mexico",1,1,14,'friendly',2),("Brazil",0,1,6,'qual',3),("Peru",2,0,46,'qual',4)]},
    "瑞典": {"rank":38,"flag":"🇸🇪","history":[
        ("Switzerland",2,4,19,'friendly',0),("Norway",1,3,32,'nations',1),
        ("Ukraine",3,1,25,'qual',2),("Poland",2,2,28,'qual',3),("Azerbaijan",4,0,118,'qual',4)]},
    "突尼斯": {"rank":45,"flag":"🇹🇳","history":[
        ("Belgium",0,5,8,'friendly',0),("Austria",0,1,28,'friendly',1),
        ("Namibia",1,0,115,'qual',2),("Liberia",2,0,150,'qual',3),("Malawi",1,0,125,'qual',4)]},
}

# 已打完的比赛 (主, 客, 主场系数, 真实结果W/D/L 从主队视角, 比分)
FIXTURES = [
    ("墨西哥","南非",1.15,"W","2-0"),
    ("韩国","捷克",1.05,"W","2-1"),
    ("加拿大","波黑",1.20,"D","1-1"),
    ("美国","巴拉圭",1.22,"W","4-1"),
    ("卡塔尔","瑞士",1.00,"D","1-1"),
    ("巴西","摩洛哥",1.00,"D","1-1"),
    ("海地","苏格兰",1.00,"L","0-1"),
    ("澳大利亚","土耳其",1.00,"W","2-0"),
    ("德国","库拉索",1.02,"W","7-1"),
    ("荷兰","日本",1.00,"D","2-2"),
    ("科特迪瓦","厄瓜多尔",1.00,"W","1-0"),
    ("瑞典","突尼斯",1.00,"W","5-1"),
]

def weighted_ratings(team):
    na=nd=ws=0.0; rgf=rga=0.0; n=len(team["history"])
    for (opp,gf,ga,orank,comp,ago) in team["history"]:
        w = math.exp(-RECENCY_DECAY*ago) * COMP_WEIGHT.get(comp,0.6)
        os_ = opp_strength(orank)
        na += gf*os_*w; nd += (ga/os_)*w; ws += w; rgf += gf; rga += ga
    return na/ws, nd/ws, rgf/n, rga/n

def lam_v3(home,away,hf):
    ha,hd,_,_ = weighted_ratings(TEAMS[home]); aa,ad,_,_ = weighted_ratings(TEAMS[away])
    lh = LEAGUE_AVG_GF*(ha/LEAGUE_AVG_GF)*(ad/LEAGUE_AVG_GF)*hf
    la = LEAGUE_AVG_GF*(aa/LEAGUE_AVG_GF)*(hd/LEAGUE_AVG_GF)*(0.92 if hf>=1.0 else 1.0)
    return round(lh,2), round(la,2)

def lam_v1(home,away,hf):
    _,_,hgf,hga = weighted_ratings(TEAMS[home]); _,_,agf,aga = weighted_ratings(TEAMS[away])
    return round((hgf*aga/LEAGUE_AVG_GF)*hf,2), round((agf*hga/LEAGUE_AVG_GF)*(0.92 if hf>=1.0 else 1.0),2)

def pmf(k,l): return math.exp(-l)*l**k/math.factorial(k)
def probs(lh,la,mg=8):
    hw=dr=aw=0.0
    for h in range(mg):
        for a in range(mg):
            p=pmf(h,lh)*pmf(a,la)
            if h>a: hw+=p
            elif h==a: dr+=p
            else: aw+=p
    t=hw+dr+aw; return 100*hw/t,100*dr/t,100*aw/t

def call(hw,dr,aw):  # 模型的方向判断
    m=max(hw,dr,aw)
    return "W" if m==hw else ("D" if m==dr else "L")

def main():
    print()
    print(f"{AMBER}{BOLD}╔════════════════════════════════════════════════════════════════════════╗{END}")
    print(f"{AMBER}{BOLD}║  WCP 双模型擂台 · v1 简单平均  vs  v3 加权 λ                            ║{END}")
    print(f"{AMBER}{BOLD}║  两个模型各出各的预测，赛后用真实结果同时打分                            ║{END}")
    print(f"{AMBER}{BOLD}╚════════════════════════════════════════════════════════════════════════╝{END}")
    print()

    v1_score = v3_score = 0
    for (home,away,hf,actual,score) in FIXTURES:
        l1h,l1a = lam_v1(home,away,hf); l3h,l3a = lam_v3(home,away,hf)
        p1 = probs(l1h,l1a); p3 = probs(l3h,l3a)
        c1, c3 = call(*p1), call(*p3)
        ok1 = (c1==actual); ok3 = (c3==actual)
        v1_score += ok1; v3_score += ok3
        fh,fa = TEAMS[home]['flag'], TEAMS[away]['flag']
        res = {"W":f"{home}赢","D":"平","L":f"{away}赢"}[actual]

        print(f"{AMBER}{BOLD}━━ {fh} {home}  vs  {away} {fa}  ━━{END}  {GRAY}实际 {score}（{res}）{END}")
        print(f"  {GRAY}{'':10}{'主胜':>9}{'平':>9}{'客胜':>9}   方向   命中{END}")
        m1 = "✓" if ok1 else "✗"; m3 = "✓" if ok3 else "✗"
        c1clr = GREEN if ok1 else RED; c3clr = GREEN if ok3 else RED
        print(f"  {YELLOW}v1 平均  {p1[0]:>7.1f}%{p1[1]:>8.1f}%{p1[2]:>8.1f}%   {c1:>4}   {c1clr}{m1}{END}")
        print(f"  {CYAN}v3 加权  {p3[0]:>7.1f}%{p3[1]:>8.1f}%{p3[2]:>8.1f}%   {c3:>4}   {c3clr}{m3}{END}")
        print()

    print(f"{WHITE}{BOLD}━━━━━━━━━━━━━━━━ 擂台计分（已打完 {len(FIXTURES)} 场）━━━━━━━━━━━━━━━━{END}")
    print(f"  {YELLOW}v1 简单平均：方向命中 {v1_score}/{len(FIXTURES)}{END}")
    print(f"  {CYAN}v3 加权 λ ：方向命中 {v3_score}/{len(FIXTURES)}{END}")
    winner = "v3 加权" if v3_score>v1_score else ("v1 平均" if v1_score>v3_score else "打平")
    wclr = CYAN if v3_score>v1_score else (YELLOW if v1_score>v3_score else WHITE)
    print(f"  {wclr}{BOLD}→ 当前领先：{winner}{END}")
    print()
    print(f"{GRAY}注：球队近期战绩为示例数据，正式上线需接 FBref 逐场真实数据。{END}")
    print(f"{GRAY}方向命中=模型最高概率结果与真实W/D/L一致。样本仍小，需持续累积。{END}")
    print()

if __name__ == "__main__":
    main()
