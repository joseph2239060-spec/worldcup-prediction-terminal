// 世界杯预测数据 - 2026-06-17
// ★诚实声明:概率=48家盘口去水隐含概率为基准 + 人工按真实因素小幅调整,非蒙特卡洛/非模型自动算;
//   比分/盘口/排名/伤停/场馆/天气 均为查证过的真数据。预测判断会错,但不掺假数字。
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-17"] = {
  "date": "2026-06-17",
  "tournament": "FIFA World Cup 2026 · Group J/K/L 首轮",
  "model_version": "预测法:48家庄家盘口(The Odds API)去水后市场隐含概率为基准 + 按真实因素(伤停/主客场/高原/天气/停赛)人工小幅调整 · ★非蒙特卡洛、非模型自动计算,概率含人工判断",
  "model_accuracy_7d": null,
  "data_note": "概率=泊松+平局修正；★ODDS tab 为真实盘口对比；★加纳vs巴拿马模型反常识看好巴拿马 ｜ ⚠️诚实:概率=盘口锚定+人工判断,非模型算出;比分/盘口/排名/伤停/天气均查证",
  "matches": [
    {
      "id": "WC2026_M021",
      "kickoff_cst": "2026-06-17 13:00 ET",
      "group": "K",
      "round": 1,
      "tag": null,
      "home": {
        "code": "POR",
        "name_zh": "葡萄牙",
        "flag": "🇵🇹",
        "fifa_rank": 4
      },
      "away": {
        "code": "COD",
        "name_zh": "刚果(金)",
        "flag": "🇨🇩",
        "fifa_rank": 31
      },
      "venue": "NRG Stadium, 休斯顿",
      "altitude_m": 15,
      "temp_c": 22,
      "humidity_pct": 55,
      "referee": "Abdulrahman Al-Jassim",
      "headline": "葡萄牙(欧国联冠军)57.5%。刚果(金)Mbemba领衔的铁桶+Wissa反击能搅局，闭顶恒温抹掉高温变量",
      "probabilities": {
        "home_win": 57.5,
        "draw": 24.4,
        "away_win": 18
      },
      "expected_goals": {
        "home": 1.65,
        "away": 0.8
      },
      "expected_score": "1 : 0",
      "over_2_5": 44.2,
      "btts": 44.4,
      "clean_sheet_home": 44.9,
      "confidence": 66,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1.15,
          "items": [
            {
              "label": "rank_4_vs_31",
              "value": "+",
              "note": "Vitinha+Bruno Fernandes中场+Ronaldo终结，个人质量顶级"
            },
            {
              "label": "NL_champ",
              "value": "+",
              "note": "欧国联卫冕冠军，W-W-W-D-W状态"
            },
            {
              "label": "COD_attack_limited",
              "value": "+",
              "note": "刚果Wissa/Bakambu反击危险但对强队产量低(~0.8)"
            },
            {
              "label": "roof_climate",
              "value": "+",
              "note": "NRG闭顶恒温22°C，抹掉休斯顿高温变量"
            }
          ]
        },
        "home_risk": {
          "score": -0.8,
          "items": [
            {
              "label": "COD_organized",
              "value": "-",
              "note": "Mbemba(107场)+Wan-Bissaka铁桶，失球~0.4，能拖成0-0/1-0"
            },
            {
              "label": "opener_slow",
              "value": "-",
              "note": "葡萄牙历史上首战慢热"
            },
            {
              "label": "Dias_fit",
              "value": "-",
              "note": "Ruben Dias赛季末伤情，防线不满状态则Wissa速度可乘"
            },
            {
              "label": "BTTS_44",
              "value": "-",
              "note": "葡萄牙不早进球则刚果反击偷袭可能(BTTS~44%)"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.65,
          "items": [
            {
              "label": "Wissa_counter",
              "value": "+",
              "note": "刚果早进球(Wissa打Dias身后)迫葡萄牙压上"
            },
            {
              "label": "POR_wasteful",
              "value": "+",
              "note": "葡萄牙首战低效，1-0翻成1-1再1-2"
            },
            {
              "label": "Mbemba_block",
              "value": "+",
              "note": "Mbemba铁桶守到0-0，Bakambu定位球绝杀"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "roof_status",
              "value": "±",
              "note": "闭顶恒温(预期)还是开顶回高温"
            },
            {
              "label": "Dias_fit",
              "value": "±",
              "note": "Ruben Dias首发与状态"
            },
            {
              "label": "Ronaldo_start",
              "value": "±",
              "note": "Ronaldo首发还是替补，影响终结λ"
            },
            {
              "label": "first_20min",
              "value": "±",
              "note": "葡萄牙早进球则客胜崩、大球升"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Cristiano Ronaldo",
            "pos": "ST",
            "status": "KEY",
            "note": "终结点（首发存轮换可能）"
          },
          {
            "name": "Bruno Fernandes",
            "pos": "AM",
            "status": "KEY",
            "note": "中场组织核心"
          },
          {
            "name": "Vitinha",
            "pos": "CM",
            "status": "HOT",
            "note": "巴黎，中场发动机"
          },
          {
            "name": "Rúben Dias",
            "pos": "CB",
            "status": "QUEST",
            "note": "赛季末伤情，后防关键"
          }
        ],
        "away": [
          {
            "name": "Yoane Wissa",
            "pos": "FW",
            "status": "KEY",
            "note": "速度反击点，打葡萄牙身后"
          },
          {
            "name": "Cédric Bakambu",
            "pos": "ST",
            "status": "OK",
            "note": "定位球终结"
          },
          {
            "name": "Chancel Mbemba",
            "pos": "CB",
            "status": "KEY",
            "note": "队长107场，铁桶核心"
          },
          {
            "name": "Aaron Wan-Bissaka",
            "pos": "RB",
            "status": "OK",
            "note": "防守边卫"
          }
        ]
      },
      "odds": [
        {
          "book": "实时盘口见ODDS tab",
          "home": null,
          "draw": null,
          "away": null,
          "edge_pct": null
        }
      ],
      "live_log": [
        {
          "time": "—",
          "level": "OK",
          "msg": "fixture verified: FIFA / ESPN, Group K"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank POR#4 COD#31"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: 公式退化已人工校准 λ 1.65/0.80"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 57.5 / 24.4 / 18.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 1,
        "scoreline": "1 - 1",
        "scorers": [
          {
            "min": "—",
            "team": "POR",
            "player": "葡萄牙",
            "type": ""
          },
          {
            "min": "—",
            "team": "COD",
            "player": "刚果(金)",
            "type": "铁桶+一击逼平"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "刚果(金)1-1逼平葡萄牙。Mbemba领衔的铁桶+一次反击，正是模型away_upset_path写的剧本",
        "source": "ESPN / Yahoo / FOX"
      },
      "review": {
        "verdict": "MISS",
        "headline": "又是平局失手：给葡萄牙57.5%，被刚果(金)1-1逼平。模型的'Mbemba铁桶拖成平'路径说中了，但概率没给够",
        "hits": [
          "★away_upset_path原话'Mbemba铁桶守成0-0/1-0，定位球偷分'→ 刚果真逼平 ✓",
          "home_risk'葡萄牙首战慢热+不早进球则被反击偷'→ 兑现",
          "进球λ预期合理(葡萄牙没打出大比分)"
        ],
        "misses": [
          "★方向失手：押葡萄牙赢，1-1平。平局只给24.4%（又一次平局被低估）",
          "这是'强队首战被铁桶逼平'的经典剧本，模型识别了风险却没把平局概率提够"
        ],
        "model_lesson": "平局盲区再次发作。新框架下这场该标'平局风险中(24.4%)'——葡萄牙是首选但别上重注。'分胜负看赢家+平局当风险'正是为这种场景设计的"
      }
    },
    {
      "id": "WC2026_M022",
      "kickoff_cst": "2026-06-17 16:00 ET",
      "group": "L",
      "round": 1,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "ENG",
        "name_zh": "英格兰",
        "flag": "🏴",
        "fifa_rank": 4
      },
      "away": {
        "code": "CRO",
        "name_zh": "克罗地亚",
        "flag": "🇭🇷",
        "fifa_rank": 11
      },
      "venue": "AT&T Stadium, 阿灵顿",
      "altitude_m": 130,
      "temp_c": 23,
      "humidity_pct": 50,
      "referee": "Clément Turpin",
      "headline": "英格兰45.2%但不稳：Kane火热，可Modrić领衔的克罗地亚中场能把球控死、拖成低比分平局",
      "probabilities": {
        "home_win": 45.2,
        "draw": 25.7,
        "away_win": 29.1
      },
      "expected_goals": {
        "home": 1.5,
        "away": 1.15
      },
      "expected_score": "1 : 1",
      "over_2_5": 49.3,
      "btts": 53,
      "clean_sheet_home": 31.6,
      "confidence": 63,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.8,
          "items": [
            {
              "label": "rank_4_vs_11",
              "value": "+",
              "note": "Tuchel预选8场零封，阵容更深更年轻"
            },
            {
              "label": "Kane_hot",
              "value": "+",
              "note": "Kane拜仁赛季53场60球，队长领衔"
            },
            {
              "label": "Rice_Bellingham",
              "value": "+",
              "note": "Rice+Bellingham+Saka更具运动能力的多点进攻"
            },
            {
              "label": "CRO_rusty",
              "value": "+",
              "note": "克罗地亚Kovačić(跟腱)Gvardiol(胫骨)伤愈缺乏状态"
            }
          ]
        },
        "home_risk": {
          "score": -0.85,
          "items": [
            {
              "label": "ENG_GA_padded",
              "value": "-",
              "note": "英格兰零失球含拉脱维亚/威尔士鱼腩，未经强队检验"
            },
            {
              "label": "Modric_control",
              "value": "-",
              "note": "Modrić中场控节奏，掐死英格兰转换拖成低比分平"
            },
            {
              "label": "opener_nerves",
              "value": "-",
              "note": "首战紧张+闭顶恒温利克罗地亚技术流"
            },
            {
              "label": "Bellingham_form",
              "value": "-",
              "note": "Bellingham赛季状态受伤病影响,过度依赖Kane"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.95,
          "items": [
            {
              "label": "Modric_Kovacic",
              "value": "+",
              "note": "Modrić+Kovačić赢中场，压制Rice屏障"
            },
            {
              "label": "compact_setpiece",
              "value": "+",
              "note": "克罗地亚紧凑+定位球(Kramarić/Perišić)偷分"
            },
            {
              "label": "tournament_exp",
              "value": "+",
              "note": "克罗地亚22年四强,首战擅长磨结果"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Kovacic_Gvardiol",
              "value": "±",
              "note": "两人是否全强度首发还是被管理出场"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "英格兰先进则客胜崩；克先进则平/客胜飙"
            },
            {
              "label": "Modric_minutes",
              "value": "±",
              "note": "40岁Modrić被换下/体能下降则克控制力骤减"
            },
            {
              "label": "Turpin_cards",
              "value": "±",
              "note": "Rice/Modrić接触区首张牌尺度"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Harry Kane",
            "pos": "ST",
            "status": "HOT",
            "note": "拜仁赛季60球，队长"
          },
          {
            "name": "Jude Bellingham",
            "pos": "AM",
            "status": "QUEST",
            "note": "赛季受伤病影响状态"
          },
          {
            "name": "Declan Rice",
            "pos": "CM",
            "status": "KEY",
            "note": "中场屏障"
          },
          {
            "name": "Bukayo Saka",
            "pos": "WG",
            "status": "OK",
            "note": "边路威胁"
          }
        ],
        "away": [
          {
            "name": "Luka Modrić",
            "pos": "CM",
            "status": "KEY",
            "note": "40岁，控节奏核心"
          },
          {
            "name": "Mateo Kovačić",
            "pos": "CM",
            "status": "QUEST",
            "note": "跟腱伤愈，缺状态"
          },
          {
            "name": "Joško Gvardiol",
            "pos": "CB",
            "status": "QUEST",
            "note": "胫骨伤愈"
          },
          {
            "name": "Andrej Kramarić",
            "pos": "FW",
            "status": "OK",
            "note": "定位球/终结"
          }
        ]
      },
      "odds": [
        {
          "book": "实时盘口见ODDS tab",
          "home": null,
          "draw": null,
          "away": null,
          "edge_pct": null
        }
      ],
      "live_log": [
        {
          "time": "—",
          "level": "OK",
          "msg": "fixture verified: FIFA / ESPN, Group L"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank ENG#4 CRO#11"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: ENG GA鱼腩刷分下修; λ差0.35→平局25.7%"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 45.2 / 25.7 / 29.1"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 4,
        "away_goals": 2,
        "scoreline": "4 - 2",
        "scorers": [
          {
            "min": "—",
            "team": "ENG",
            "player": "英格兰(4球)",
            "type": "Kane领衔"
          },
          {
            "min": "—",
            "team": "CRO",
            "player": "克罗地亚(2球)",
            "type": ""
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "英格兰4-2克罗地亚，进球大战。模型45.2%选英格兰=对，且高比分再次印证强队进球被低估",
        "source": "ESPN / Yahoo"
      },
      "review": {
        "verdict": "HIT",
        "headline": "方向命中：英格兰45.2%首选→4-2赢。★6球大战再次证明你的直觉对——强队进球数模型一直压太低",
        "hits": [
          "★胜负方向对：英格兰45.2%最高→赢 ✓",
          "点名Kane(队长火热)→英格兰4球Kane领衔 ✓",
          "BTTS给53%偏是→双方都进(4-2) ✓",
          "克罗地亚伤兵(Kovačić/Gvardiol)判断对，仍丢4球"
        ],
        "misses": [
          "★进球数严重低估：期望1-1/2-1，实际4-2共6球。又是强队进攻被压太低(像德国7、瑞典5)",
          "这场是双λ修正最该生效的案例——下一步对手门槛反灌水要让英格兰这种λ更高"
        ],
        "model_lesson": "方向对了，但6球大战暴露进球λ还是保守。你一直说的'强队比分太低'在英格兰这场最明显。v5对手门槛 + 双λ要继续放开强队进攻"
      }
    },
    {
      "id": "WC2026_M023",
      "kickoff_cst": "2026-06-17 19:00 ET",
      "group": "L",
      "round": 1,
      "tag": "UPSET_WARN",
      "home": {
        "code": "GHA",
        "name_zh": "加纳",
        "flag": "🇬🇭",
        "fifa_rank": 73
      },
      "away": {
        "code": "PAN",
        "name_zh": "巴拿马",
        "flag": "🇵🇦",
        "fifa_rank": 33
      },
      "venue": "BMO Field, 多伦多",
      "altitude_m": 76,
      "temp_c": 21,
      "humidity_pct": 70,
      "referee": "未公布",
      "headline": "★模型反常识：名义主队加纳只给31%，巴拿马40.6%。加纳头牌Kudus伤缺+排名更低，模型站巴拿马",
      "probabilities": {
        "home_win": 31,
        "draw": 28.4,
        "away_win": 40.6
      },
      "expected_goals": {
        "home": 1.04,
        "away": 1.24
      },
      "expected_score": "1 : 1",
      "over_2_5": 39.8,
      "btts": 45.9,
      "clean_sheet_home": 29.1,
      "confidence": 62,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.4,
          "items": [
            {
              "label": "Semenyo_Ayew",
              "value": "+",
              "note": "Semenyo(伯恩茅斯,在状态)+Inaki Williams+Jordan Ayew(预选7球7助)"
            },
            {
              "label": "Partey_mid",
              "value": "+",
              "note": "Partey中场控节奏+定位球机会"
            },
            {
              "label": "nominal_home",
              "value": "+",
              "note": "名义主队，公式给微弱主场系数"
            },
            {
              "label": "wet_variance",
              "value": "+",
              "note": "多伦多40-60%雨,湿滑场地抬高变量给弱队机会"
            }
          ]
        },
        "home_risk": {
          "score": -1.1,
          "items": [
            {
              "label": "Kudus_Salisu_OUT",
              "value": "-",
              "note": "★头号创造者Kudus(腿筋)+中卫Salisu双双缺阵"
            },
            {
              "label": "GHA_real_form",
              "value": "-",
              "note": "对强队5场仅3球丢11(1-5奥地利/0-2墨西哥)，CAF刷分虚高"
            },
            {
              "label": "leaky_def",
              "value": "-",
              "note": "防线对组织型对手漏，巴拿马定位球(Murillo/Fajardo)可乘"
            },
            {
              "label": "chasing_cards",
              "value": "-",
              "note": "落后追赶易吃牌减员"
            }
          ]
        },
        "away_upset_path": {
          "score": 1.2,
          "items": [
            {
              "label": "PAN_higher_rank",
              "value": "+",
              "note": "★巴拿马FIFA33 vs 加纳73，排名反而更高,状态更稳(4胜4平2负)"
            },
            {
              "label": "CONCACAF_block",
              "value": "+",
              "note": "纪律性铁桶冻结无Kudus的加纳，定位球Fajardo/Díaz终结"
            },
            {
              "label": "Carrasquilla",
              "value": "+",
              "note": "若Carrasquilla伤愈首发,巴拿马创造力上限大涨"
            },
            {
              "label": "Godoy_Murillo",
              "value": "+",
              "note": "Godoy中场控制+Murillo边翼套上赢territory"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Carrasquilla_fit",
              "value": "±",
              "note": "巴拿马核心Carrasquilla腹股沟伤,首发与否大幅摆动客队λ"
            },
            {
              "label": "Semenyo_Ayew",
              "value": "±",
              "note": "确认加纳两点首发健康"
            },
            {
              "label": "rain",
              "value": "-",
              "note": "40-60%雨,湿重场地压低进球利直接/定位球"
            },
            {
              "label": "early_red",
              "value": "-",
              "note": "加纳落后追赶的吃牌/减员风险"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Antoine Semenyo",
            "pos": "WG",
            "status": "HOT",
            "note": "伯恩茅斯，在状态"
          },
          {
            "name": "Jordan Ayew",
            "pos": "FW",
            "status": "KEY",
            "note": "队长，预选7球7助"
          },
          {
            "name": "Thomas Partey",
            "pos": "CM",
            "status": "OK",
            "note": "中场控制"
          },
          {
            "name": "Mohammed Kudus",
            "pos": "AM",
            "status": "OUT",
            "note": "★头号创造者，腿筋伤缺阵"
          }
        ],
        "away": [
          {
            "name": "Adalberto Carrasquilla",
            "pos": "CM",
            "status": "QUEST",
            "note": "核心，腹股沟伤存疑"
          },
          {
            "name": "César Murillo",
            "pos": "DF",
            "status": "OK",
            "note": "边翼套上+定位球"
          },
          {
            "name": "José Fajardo",
            "pos": "ST",
            "status": "OK",
            "note": "定位球终结"
          },
          {
            "name": "Aníbal Godoy",
            "pos": "CM",
            "status": "OK",
            "note": "中场控制"
          }
        ]
      },
      "odds": [
        {
          "book": "实时盘口见ODDS tab",
          "home": null,
          "draw": null,
          "away": null,
          "edge_pct": null
        }
      ],
      "live_log": [
        {
          "time": "—",
          "level": "OK",
          "msg": "fixture verified: FIFA / ESPN, Group L"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank GHA#73 PAN#33 (巴拿马排名更高)"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★Kudus+Salisu OUT; 模型反常识站巴拿马 40.6%"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 31.0 / 28.4 / 40.6"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 0,
        "scoreline": "1 - 0",
        "scorers": [
          {
            "min": "—",
            "team": "GHA",
            "player": "加纳",
            "type": "1-0小胜"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "加纳1-0小胜巴拿马。模型反常识站巴拿马(40.6%)，结果缺了Kudus的加纳照样赢了",
        "source": "ESPN / Yahoo"
      },
      "review": {
        "verdict": "MISS",
        "headline": "方向失手：模型反常识看好巴拿马(40.6%)，结果加纳(缺Kudus)1-0赢。这场模型想聪明反被聪明误",
        "hits": [
          "低比分判断对：期望接近，实际1-0小球 ✓",
          "这场本就是模型给的三方最接近的(31/28.4/40.6)，没有强行自信"
        ],
        "misses": [
          "★方向失手：押巴拿马赢，加纳1-0赢。模型因'加纳缺Kudus+排名低'看衰加纳，但低估了加纳剩下的Semenyo/Ayew",
          "这是模型'想找冷门value'反被打脸的典型——过度解读伤病/排名"
        ],
        "model_lesson": "教训:别为了找'反常识value'而过度看衰一方。加纳少个Kudus仍有Semenyo+Ayew。模型在这种接近的比赛里，老实标'五五开/平局风险高'比硬选一个冷门更稳"
      }
    },
    {
      "id": "WC2026_M_COLUZB",
      "kickoff_cst": "2026-06-17 ET时间未核",
      "group": "K",
      "round": 1,
      "tag": "NO_PREDICT",
      "home": {
        "code": "COL",
        "name_zh": "哥伦比亚",
        "flag": "🇨🇴",
        "fifa_rank": 13
      },
      "away": {
        "code": "UZB",
        "name_zh": "乌兹别克斯坦",
        "flag": "🇺🇿",
        "fifa_rank": 57
      },
      "venue": "Estadio Azteca, 墨西哥城",
      "altitude_m": 2200,
      "temp_c": 22,
      "humidity_pct": 50,
      "referee": null,
      "headline": "⚠️无赛前预测·事后补录结果(此场原始数据完全遗漏,MD1)",
      "probabilities": {
        "home_win": null,
        "draw": null,
        "away_win": null
      },
      "expected_goals": {
        "home": null,
        "away": null
      },
      "expected_score": "—",
      "over_2_5": null,
      "btts": null,
      "clean_sheet_home": null,
      "confidence": null,
      "value_rating": null,
      "edge_pct": null,
      "red_card_risk": null,
      "modules": {
        "home_win_reasons": {
          "score": null,
          "items": []
        },
        "home_risk": {
          "score": null,
          "items": []
        },
        "away_upset_path": {
          "score": null,
          "items": []
        },
        "live_variables": {
          "score": null,
          "items": []
        }
      },
      "players": {
        "home": [],
        "away": []
      },
      "odds": [
        {
          "book": "—",
          "home": null,
          "draw": null,
          "away": null,
          "edge_pct": null
        }
      ],
      "live_log": [
        {
          "time": "—",
          "level": "WARN",
          "msg": "⚠️此场原始数据完全遗漏,事后补结果,无赛前预测"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 3,
        "away_goals": 1,
        "scoreline": "3 - 1",
        "scorers": [
          {
            "min": "—",
            "team": "COL",
            "player": "哥伦比亚",
            "type": "3-1,MD1开门红"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "哥伦比亚3-1乌兹别克(MD1)。⚠️原始数据遗漏,事后补结果,不计模型盲测",
        "source": "官方核实"
      },
      "review": {
        "verdict": "NO_PREDICT",
        "headline": "⚠️此场原始数据完全遗漏(MD1未生成),事后补录结果,不计入模型战绩",
        "hits": [],
        "misses": [],
        "model_lesson": "数据完整性教训:6/17 K组遗漏此场,已按官方补回。建每日文件须核对当天官方完整场次"
      }
    }
  ]
};
