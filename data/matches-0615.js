// 世界杯赛前预测 - 2026-06-15 数据
// ════════════════════════════════════════════════════════════════
// 6/15 真实赛程：4 场 — 完成 G/H 组首轮
//   1. 西班牙   vs 佛得角   — H组，Mercedes-Benz，亚特兰大
//   2. 比利时   vs 埃及     — G组，Lumen Field，西雅图
//   3. 沙特     vs 乌拉圭   — H组，Hard Rock，迈阿密
//   4. 伊朗     vs 新西兰   — G组，SoFi，洛杉矶
// 数据来源：FIFA/ESPN/Sofascore + Workflow（见 SOURCES.md）
// 4场均无真实东道主，主场系数~1.0；继续应用反灌水修正(下修鱼腩刷分)
// ════════════════════════════════════════════════════════════════

window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-15"] = {
  "date": "2026-06-15",
  "tournament": "FIFA World Cup 2026 · Day 5 · G/H组首轮",
  "model_version": "POISSON v1.2 + 反灌水修正 + 红牌风险",
  "model_accuracy_7d": null,
  "data_note": "概率=泊松估算；持续反灌水下修鱼腩刷分；赔率占位待接入",
  "matches": [
    {
      "id": "WC2026_M013",
      "kickoff_cst": "2026-06-15 12:00 ET",
      "group": "H",
      "round": 1,
      "tag": null,
      "home": { "code": "ESP", "name_zh": "西班牙", "flag": "🇪🇸", "fifa_rank": 2 },
      "away": { "code": "CPV", "name_zh": "佛得角", "flag": "🇨🇻", "fifa_rank": 67 },
      "venue": "Mercedes-Benz Stadium, 亚特兰大",
      "altitude_m": 320,
      "temp_c": 24,
      "humidity_pct": 55,
      "referee": "Adham Makhadmeh (AFC)",
      "headline": "欧洲杯冠军西班牙86%。佛得角世界杯处子秀，但模型已把其鱼腩刷分下修，唯一变量是Yamal伤情",
      "probabilities": { "home_win": 86.2, "draw": 11.0, "away_win": 2.8 },
      "expected_goals": { "home": 2.35, "away": 0.45 },
      "expected_score": "2 : 0",
      "over_2_5": 56.0,
      "btts": 32.8,
      "clean_sheet_home": 63.8,
      "confidence": 72,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.90,
          "items": [
            { "label": "rank_2_vs_67", "value": "+65位", "note": "欧洲杯冠军，阵容深度碾压世界杯处子秀佛得角" },
            { "label": "ESP_real_def", "value": "+", "note": "西班牙近5场失球0.6是真的(非灌水)，佛得角进球难转化" },
            { "label": "Pedri_Rodri", "value": "+", "note": "Pedri节拍器+Rodri回归，掌控深位防线对手" },
            { "label": "roof_climate", "value": "+", "note": "亚特兰大闭顶恒温，抹掉高温帮弱队死守的变量" }
          ]
        },
        "home_risk": {
          "score": -0.55,
          "items": [
            { "label": "favorite_trap", "value": "-", "note": "强队被高估教训：若Yamal/Nico都受限、Rodri没状态，进攻可能哑火被逼平" },
            { "label": "Vozinha_GK", "value": "-", "note": "佛得角队长门将Vozinha一场神扑可压制西班牙xG" },
            { "label": "opener_rust", "value": "-", "note": "首战生疏+轮换保护伤员，可能只赢1-0" }
          ]
        },
        "away_upset_path": {
          "score": 0.35,
          "items": [
            { "label": "low_block_70min", "value": "+", "note": "Vozinha神勇+佛得角铁桶死守70分钟" },
            { "label": "ESP_winger_injury", "value": "+", "note": "西班牙若失Yamal+Nico Williams边路penetration枯竭，0-0僵持" },
            { "label": "Mendes_counter", "value": "+", "note": "Ryan Mendes一次反击/定位球偷分(胜率仅2.8%，极低)" }
          ]
        },
        "live_variables": {
          "score": 0.10,
          "items": [
            { "label": "Yamal_fitness", "value": "±", "note": "Lamine Yamal腿筋伤(QUEST)，首发还是替补改变λ" },
            { "label": "Nico_Williams", "value": "±", "note": "第二个边锋伤情，两翼都缺则平局概率升" },
            { "label": "Rodri_sharpness", "value": "±", "note": "Rodri状态不足削弱中场控制" },
            { "label": "early_goal", "value": "±", "note": "西班牙20分钟内进球则佛得角铁桶崩" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Pedri", "pos": "CM", "status": "KEY", "note": "中场节拍器" },
          { "name": "Rodri", "pos": "CDM", "status": "QUEST", "note": "回归但状态待考" },
          { "name": "Lamine Yamal", "pos": "RW", "status": "QUEST", "note": "腿筋伤，出场时间存疑" },
          { "name": "Nico Williams", "pos": "LW", "status": "QUEST", "note": "伤情存疑" }
        ],
        "away": [
          { "name": "Vozinha", "pos": "GK", "status": "KEY", "note": "队长门将，偷分唯一指望" },
          { "name": "Ryan Mendes", "pos": "FW", "status": "OK", "note": "反击点" },
          { "name": "Dailon Rocha Livramento", "pos": "FW", "status": "OK", "note": "锋线" },
          { "name": "佛得角进攻", "pos": "FW", "status": "QUEST", "note": "1.6进球含CAF鱼腩灌水，对西班牙难转化" }
        ]
      },
      "odds": [ { "book": "占位-待接入API", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "fixture verified: FIFA / ESPN, Group H" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ESP#2 CPV#67" },
        { "time": "—", "level": "INFO", "msg": "anti-padding: CPV λ deflated to 0.45 (CAF minnow goals)" },
        { "time": "—", "level": "WARN", "msg": "Yamal + Nico Williams fitness QUEST" },
        { "time": "—", "level": "OK", "msg": "poisson output: 86.2 / 11.0 / 2.8" }
      ],
      "result": {
        "status": "FT", "home_goals": 0, "away_goals": 0, "scoreline": "0 - 0",
        "scorers": [],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "佛得角世界杯处子秀逼平夺冠热门西班牙0-0，门将Vozinha封神，拿到历史性首分",
        "source": "ESPN / Yahoo / Olympics.com"
      },
      "review": {
        "verdict": "MISS",
        "headline": "重大失手：给西班牙86%(全场最高信心之一)，被处子秀佛得角0-0逼平。但模型赛前明确标了Yamal/Nico伤情+Vozinha神勇这条平局路径",
        "hits": [
          "★away_upset_path原话'Vozinha神勇+佛得角铁桶死守70分钟→0-0'→ 字面应验",
          "home_risk原话'若Yamal/Nico都受限,进攻哑火被逼平'→ 正是发生的剧本",
          "红牌没出现(标ELEVATED这次误报)"
        ],
        "misses": [
          "★核心大失手：86%当稳赢，结果0-0平。又是强队被高估的老病，且这次最严重",
          "把佛得角胜率压到2.8%、平局只给11%——平局概率被严重低估",
          "反灌水下修了佛得角进攻是对的(他们真没进球)，但没料到西班牙自己也打不进"
        ],
        "model_lesson": "★这是压垮骆驼的一场:连同今天另外三场全平,模型对'平局'系统性失明。独立泊松对0-0/1-1低分平局结构性低估,必须上Dixon-Coles修正"
      }
    },
    {
      "id": "WC2026_M014",
      "kickoff_cst": "2026-06-15 15:00 ET",
      "group": "G",
      "round": 1,
      "tag": "CLOSE_MATCH",
      "home": { "code": "BEL", "name_zh": "比利时", "flag": "🇧🇪", "fifa_rank": 9 },
      "away": { "code": "EGY", "name_zh": "埃及", "flag": "🇪🇬", "fifa_rank": 29 },
      "venue": "Lumen Field, 西雅图",
      "altitude_m": 5,
      "temp_c": 32,
      "humidity_pct": 50,
      "referee": "未公布",
      "headline": "比利时53.7%占优但不稳：拼凑后防遇Salah反击是隐患，西雅图32°C高温拖累比利时逼抢",
      "probabilities": { "home_win": 53.7, "draw": 24.6, "away_win": 21.7 },
      "expected_goals": { "home": 1.65, "away": 0.95 },
      "expected_score": "2 : 1",
      "over_2_5": 48.0,
      "btts": 49.4,
      "clean_sheet_home": 38.6,
      "confidence": 62,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.85,
          "items": [
            { "label": "rank_9_vs_29", "value": "+", "note": "De Bruyne(资格赛6球)进攻发动机+Doku边路1v1" },
            { "label": "Courtois", "value": "+", "note": "世界级门将给拼凑后防兜底，压制埃及预期进球" },
            { "label": "BEL_attack_edge", "value": "+", "note": "比利时反灌水后~2.2进球仍高于埃及1.3" },
            { "label": "EGY_blunt", "value": "+", "note": "埃及是反击/低位队，Salah若不在状态上限有限" }
          ]
        },
        "home_risk": {
          "score": -0.85,
          "items": [
            { "label": "makeshift_def", "value": "-", "note": "Ngoy/Mechele/Theate拼凑后防，正是Salah/Marmoush反击猎物" },
            { "label": "heat_90F", "value": "-", "note": "西雅图32°C消耗逼抢型比利时远多于死守的埃及" },
            { "label": "BEL_leaky", "value": "-", "note": "资格赛丢7球(对威尔士3+2)，零封概率仅39%" },
            { "label": "neutral_no_crowd", "value": "-", "note": "中立场无真实主场声浪" }
          ]
        },
        "away_upset_path": {
          "score": 0.75,
          "items": [
            { "label": "Salah_moment", "value": "+", "note": "Salah(34岁生日)若健康，一脚解锁比利时稚嫩中卫" },
            { "label": "Marmoush_pace", "value": "+", "note": "曼城Marmoush打Ngoy身后反击" },
            { "label": "El_Shenawy", "value": "+", "note": "门将延续对西班牙/俄罗斯零封水准，死守偷1-0" },
            { "label": "heat_2nd_half", "value": "+", "note": "高温拖垮比利时下半场逼抢，埃及定位球/反击绝杀" }
          ]
        },
        "live_variables": {
          "score": 0.00,
          "items": [
            { "label": "Salah_fitness", "value": "±", "note": "Salah腿筋/状态=最大单一摇摆因素" },
            { "label": "BEL_CB_pair", "value": "±", "note": "比利时中卫搭档与是否Garcia客串补强" },
            { "label": "heat_severity", "value": "-", "note": "实际开球温度与降温暂停" },
            { "label": "first_goal", "value": "±", "note": "比利时早进球拉开；闷到一小时利好埃及" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Kevin De Bruyne", "pos": "AM", "status": "KEY", "note": "资格赛6球，进攻发动机" },
          { "name": "Jérémy Doku", "pos": "WG", "status": "HOT", "note": "边路1v1威胁" },
          { "name": "Thibaut Courtois", "pos": "GK", "status": "KEY", "note": "世界级门将，后防保险" },
          { "name": "比利时中卫", "pos": "CB", "status": "QUEST", "note": "Ngoy/Mechele/Theate拼凑后防，结构弱点" }
        ],
        "away": [
          { "name": "Mohamed Salah", "pos": "RW", "status": "QUEST", "note": "34岁，腿筋/状态存疑，埃及解锁关键" },
          { "name": "Omar Marmoush", "pos": "FW", "status": "HOT", "note": "曼城，反击速度打比利时身后" },
          { "name": "Mohamed El Shenawy", "pos": "GK", "status": "KEY", "note": "门将，曾零封西班牙/俄罗斯" },
          { "name": "埃及中场", "pos": "CM", "status": "OK", "note": "组织型，依赖Salah转化" }
        ]
      },
      "odds": [ { "book": "占位-待接入API", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "fixture verified: FIFA / ESPN, Group G" },
        { "time": "—", "level": "OK", "msg": "FIFA rank BEL#9 EGY#29" },
        { "time": "—", "level": "INFO", "msg": "anti-padding: BEL GF down 3.6→2.2 (Liechtenstein/Kazakhstan padding)" },
        { "time": "—", "level": "WARN", "msg": "BEL makeshift CB + Seattle heat; Salah fitness key" },
        { "time": "—", "level": "OK", "msg": "poisson output: 53.7 / 24.6 / 21.7" }
      ],
      "result": {
        "status": "FT", "home_goals": 1, "away_goals": 1, "scoreline": "1 - 1",
        "scorers": [ { "min": "—", "team": "BEL", "player": "比利时", "type": "" }, { "min": "—", "team": "EGY", "player": "埃及", "type": "顽强逼平" } ],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "埃及1-1逼平比利时，G组全面打开。比利时拼凑后防+高温隐患如模型所料",
        "source": "ESPN / Yahoo"
      },
      "review": {
        "verdict": "MISS",
        "headline": "方向失手(给比利时53.7%→1-1平)，但平局是模型第二高选项(24.6%)，且埃及偷分路径全部说中",
        "hits": [
          "★away_upset_path原话'Salah一刻+高温拖垮比利时逼抢+埃及偷分'→ 埃及真逼平",
          "home_risk'拼凑后防是结构弱点、零封仅39%'→ 比利时果然丢球没零封",
          "高温(西雅图)对逼抢型比利时的消耗判断对"
        ],
        "misses": [
          "方向上仍押比利时赢，实际平(平局给24.6%是第二高，不算离谱)",
          "依旧没把平局当首选——和今天其他三场同病"
        ],
        "model_lesson": "又一场该预警平局却押了favorite。比利时这场算'温和失手'(平局是次高选项)，但叠加今天全平,平局低估的问题再也藏不住"
      }
    },
    {
      "id": "WC2026_M015",
      "kickoff_cst": "2026-06-15 18:00 ET",
      "group": "H",
      "round": 1,
      "tag": null,
      "home": { "code": "KSA", "name_zh": "沙特", "flag": "🇸🇦", "fifa_rank": 61 },
      "away": { "code": "URU", "name_zh": "乌拉圭", "flag": "🇺🇾", "fifa_rank": 16 },
      "venue": "Hard Rock Stadium, 迈阿密",
      "altitude_m": 2,
      "temp_c": 31,
      "humidity_pct": 73,
      "referee": "Maurizio Mariani (意大利)",
      "headline": "乌拉圭客场59%占优(-200热门)。沙特进攻是最弱环，但迈阿密湿热+铁桶或能拖住Bielsa的乌拉圭",
      "probabilities": { "home_win": 15.5, "draw": 25.4, "away_win": 59.0 },
      "expected_goals": { "home": 0.65, "away": 1.55 },
      "expected_score": "0 : 1",
      "over_2_5": 37.6,
      "btts": 37.6,
      "clean_sheet_home": 21.2,
      "confidence": 70,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": -1.30,
          "items": [
            { "label": "URU_class", "value": "对手强", "note": "乌拉圭FIFA16 vs 沙特61，-200热门，实力断层" },
            { "label": "KSA_deep_block", "value": "+", "note": "沙特死守低位，迈阿密湿热利于省体能的一方" },
            { "label": "Al_Dawsari", "value": "+", "note": "Al-Dawsari(2022绝杀阿根廷)+Al-Buraikan一次反击可偷分" },
            { "label": "Al_Aqidi_saves", "value": "+", "note": "门将资格赛封神扑救，可偷分" }
          ]
        },
        "home_risk": {
          "score": -1.65,
          "items": [
            { "label": "KSA_no_attack", "value": "-", "note": "沙特进攻最弱：1.1进球含鱼腩(3-0波多黎各)，对强队0-4埃及/0-1约旦" },
            { "label": "Valverde_Nunez", "value": "-", "note": "Valverde(皇马,HOT)+Núñez领衔碾压沙特中后场" },
            { "label": "Bielsa_press", "value": "-", "note": "Bielsa高压钉死沙特低位，制造持续机会" }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            { "label": "Araujo_OUT", "value": "+", "note": "乌拉圭主力中卫Araújo大概率缺阵(留卡佛得角)，后防露空" },
            { "label": "Nunez_wasteful", "value": "+", "note": "Núñez把握机会不稳，乌拉圭浪费则沙特0-0/1-0有窗口" },
            { "label": "Miami_heat", "value": "+", "note": "迈阿密31°C+73%湿度拖累乌拉圭逼抢" },
            { "label": "thunderstorm", "value": "±", "note": "雷暴可能中断打乱乌拉圭节奏" }
          ]
        },
        "live_variables": {
          "score": 0.00,
          "items": [
            { "label": "Araujo_start", "value": "±", "note": "Araújo是否意外首发(会降低沙特机会)" },
            { "label": "weather", "value": "±", "note": "迈阿密雷暴/高温严重度与可能的开球延迟" },
            { "label": "Bentancur_Ugarte", "value": "±", "note": "乌拉圭双后腰是否都首发控节奏" },
            { "label": "first_goal", "value": "±", "note": "乌拉圭早进球则沙特被迫压出，大球+客胜概率升" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Salem Al-Dawsari", "pos": "LW", "status": "KEY", "note": "2022绝杀阿根廷功臣，反击点" },
          { "name": "Firas Al-Buraikan", "pos": "ST", "status": "OK", "note": "锋线终结" },
          { "name": "Nawaf Al-Aqidi", "pos": "GK", "status": "KEY", "note": "门将，资格赛封神扑救" },
          { "name": "沙特进攻", "pos": "FW", "status": "QUEST", "note": "全队最弱环，对强队场均近0球" }
        ],
        "away": [
          { "name": "Federico Valverde", "pos": "CM", "status": "HOT", "note": "皇马，攻防核心" },
          { "name": "Darwin Núñez", "pos": "ST", "status": "KEY", "note": "锋线领衔，把握机会是变量" },
          { "name": "Rodrigo Bentancur", "pos": "CM", "status": "OK", "note": "中场控制" },
          { "name": "Ronald Araújo", "pos": "CB", "status": "OUT", "note": "肌肉伤大概率缺阵，后防变薄" }
        ]
      },
      "odds": [ { "book": "占位-待接入API", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "fixture verified: FIFA / ESPN, Group H" },
        { "time": "—", "level": "OK", "msg": "FIFA rank URU#16 KSA#61; URU -200 market" },
        { "time": "—", "level": "INFO", "msg": "anti-padding: KSA GF deflated 1.1→0.65; URU 1-5 USA outlier discounted" },
        { "time": "—", "level": "WARN", "msg": "URU Araújo doubtful → backline thinner" },
        { "time": "—", "level": "OK", "msg": "poisson output: 15.5 / 25.4 / 59.0" }
      ],
      "result": {
        "status": "FT", "home_goals": 1, "away_goals": 1, "scoreline": "1 - 1",
        "scorers": [
          { "min": "—", "team": "KSA", "player": "Abdulelah Al Amri", "type": "上半场先进" },
          { "min": "80'", "team": "URU", "player": "Maxi Araújo", "type": "扳平救命" }
        ],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "沙特先进球，乌拉圭80'才扳平1-1。沙特铁桶+迈阿密湿热拖住了-200热门乌拉圭",
        "source": "ESPN / NBC / Yahoo"
      },
      "review": {
        "verdict": "MISS",
        "headline": "方向失手：给乌拉圭59%(客场热门)，结果被沙特先进球、1-1险平。沙特死守偷分路径完全说中",
        "hits": [
          "★away_upset_path原话'沙特低位铁桶+迈阿密湿热拖垮乌拉圭+一次定位球/反击偷分'→ 沙特真先进球",
          "home_risk'Núñez把握机会不稳、乌拉圭浪费则被拖住'→ 乌拉圭直到80'才扳平",
          "Araújo缺阵削弱乌拉圭的判断对"
        ],
        "misses": [
          "★方向失手：59%押乌拉圭赢，结果连赢都没赢，1-1。沙特甚至先领先",
          "把沙特胜/平合计压到40%，实际他们差点爆冷取胜",
          "再次低估平局(给25.4%)"
        ],
        "model_lesson": "今天第三场'强队没赢下'。沙特先进球说明模型连'弱队能否先得分'都低估了。平局+弱队抢分的概率需要整体上调"
      }
    },
    {
      "id": "WC2026_M016",
      "kickoff_cst": "2026-06-15 21:00 ET",
      "group": "G",
      "round": 1,
      "tag": null,
      "home": { "code": "IRN", "name_zh": "伊朗", "flag": "🇮🇷", "fifa_rank": 20 },
      "away": { "code": "NZL", "name_zh": "新西兰", "flag": "🇳🇿", "fifa_rank": 85 },
      "venue": "SoFi Stadium, 洛杉矶",
      "altitude_m": 30,
      "temp_c": 24,
      "humidity_pct": 50,
      "referee": "未公布",
      "headline": "伊朗71.6%：新西兰是全队最低排名(#85)。但伊朗当天往返的签证限制+Jahanbakhsh伤情是隐患",
      "probabilities": { "home_win": 71.6, "draw": 20.5, "away_win": 8.0 },
      "expected_goals": { "home": 1.83, "away": 0.43 },
      "expected_score": "1 : 0",
      "over_2_5": 39.2,
      "btts": 29.4,
      "clean_sheet_home": 65.0,
      "confidence": 66,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.40,
          "items": [
            { "label": "rank_20_vs_85", "value": "+65位", "note": "新西兰是全届最低排名队，近期L-L-W-L-L连续不胜" },
            { "label": "IRN_organized", "value": "+", "note": "Ghalenoei的伊朗防守纪律好+Beiranvand门将稳" },
            { "label": "Taremi", "value": "+", "note": "Taremi(~60国家队进球,奥林匹亚科斯)碾压新西兰单核Wood" },
            { "label": "NZL_injuries", "value": "+", "note": "Ryan Thomas缺阵+Wood伤愈状态存疑，新西兰进攻贫瘠" }
          ]
        },
        "home_risk": {
          "score": -0.85,
          "items": [
            { "label": "soft_data", "value": "-", "note": "伊朗进球数据含友谊赛鱼腩(5-0哥斯达黎加)，对铁桶可能更钝" },
            { "label": "same_day_travel", "value": "-", "note": "美国签证限制迫使伊朗赛前~24h往返，真实疲劳拖累" },
            { "label": "Jahanbakhsh_doubt", "value": "-", "note": "队长/创造核心伤情存疑，缺阵则破密集防守更难" },
            { "label": "Azmoun_omitted", "value": "-", "note": "Azmoun因内讧落选，进攻深度变薄" }
          ]
        },
        "away_upset_path": {
          "score": 0.45,
          "items": [
            { "label": "ultra_deep", "value": "+", "note": "新西兰摆铁桶逼伊朗0-0闷平偷分" },
            { "label": "IRN_fatigue", "value": "+", "note": "伊朗当天往返疲劳+首战紧张可能踢得平淡" },
            { "label": "Wood_aerial", "value": "+", "note": "Cacace左路传中找Wood头球，新西兰唯一空袭点" },
            { "label": "set_piece_variance", "value": "+", "note": "定位球/失误可能送新西兰冷门(胜率仅8%)" }
          ]
        },
        "live_variables": {
          "score": 0.00,
          "items": [
            { "label": "Jahanbakhsh_fit", "value": "±", "note": "Jahanbakhsh首发与否影响伊朗创造力" },
            { "label": "Wood_minutes", "value": "±", "note": "Chris Wood伤愈出场时间，缺则新西兰进攻归零" },
            { "label": "IRN_travel_impact", "value": "-", "note": "当天往返的实际体能影响" },
            { "label": "early_goal", "value": "±", "note": "伊朗早进球则新西兰开放，闷到一小时利好新西兰偷分" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Mehdi Taremi", "pos": "ST", "status": "KEY", "note": "奥林匹亚科斯，~60国家队进球，头号球星" },
          { "name": "Alireza Jahanbakhsh", "pos": "WG", "status": "QUEST", "note": "队长/创造核心，伤情存疑" },
          { "name": "Alireza Beiranvand", "pos": "GK", "status": "OK", "note": "门将，后防稳定" },
          { "name": "Sardar Azmoun", "pos": "FW", "status": "OUT", "note": "因内讧落选，进攻深度变薄" }
        ],
        "away": [
          { "name": "Chris Wood", "pos": "ST", "status": "QUEST", "note": "新西兰单核，刚膝伤复出状态存疑" },
          { "name": "Liberato Cacace", "pos": "LB", "status": "OK", "note": "左路传中点" },
          { "name": "Marko Stamenic", "pos": "CM", "status": "OK", "note": "中场" },
          { "name": "Ryan Thomas", "pos": "CM", "status": "OUT", "note": "缺阵，中场更薄" }
        ]
      },
      "odds": [ { "book": "占位-待接入API", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "fixture verified: FIFA / ESPN, Group G" },
        { "time": "—", "level": "OK", "msg": "FIFA rank IRN#20 NZL#85 (全届最低)" },
        { "time": "—", "level": "INFO", "msg": "anti-padding: IRN attack cut 1.7→1.40 (friendly minnow goals)" },
        { "time": "—", "level": "WARN", "msg": "IRN same-day travel + Jahanbakhsh doubt" },
        { "time": "—", "level": "OK", "msg": "poisson output: 71.6 / 20.5 / 8.0" }
      ],
      "result": {
        "status": "FT", "home_goals": 2, "away_goals": 2, "scoreline": "2 - 2",
        "scorers": [ { "min": "—", "team": "IRN", "player": "伊朗(2球)", "type": "" }, { "min": "—", "team": "NZL", "player": "新西兰(2球)", "type": "全届最低排名逼平" } ],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "全届最低排名#85的新西兰2-2逼平71.6%的伊朗。伊朗当天往返+Jahanbakhsh伤情隐患全兑现",
        "source": "ESPN / NBC / Yahoo"
      },
      "review": {
        "verdict": "MISS",
        "headline": "今天最大失手：给伊朗71.6%，被全届垫底的新西兰2-2逼平。模型标的'当天往返疲劳+创造力伤缺'全中，却没敢把概率压下来",
        "hits": [
          "★home_risk原话'当天往返疲劳+Jahanbakhsh缺则破密集防守更难+踢得平淡'→ 字面应验",
          "away_upset_path'新西兰摆铁桶+Wood空袭→偷分'→ 真偷到2分(平局)",
          "soft_data警告'伊朗进球含友谊赛鱼腩,对铁桶更钝'→ 但伊朗其实进了2个,这条反而过虑"
        ],
        "misses": [
          "★最大失手：71.6%押伊朗赢，被#85新西兰2-2逼平。我把新西兰胜/平压到28%",
          "进球数也错：判低比分(大2.5仅39%)，实际4个球2-2",
          "把所有'隐患'都列出来了,却没体现到最终概率上——风险识别和概率输出脱节"
        ],
        "model_lesson": "★今天的灵魂拷问:模型把所有正确的风险点都写进了备注(疲劳/伤病/铁桶),但概率还是给了71.6%。说明'定性风险'没有被'定量'进模型。这是比泊松公式更深的病——风险标注是给人看的文字,没进数学"
      }
    }
  ]
};
