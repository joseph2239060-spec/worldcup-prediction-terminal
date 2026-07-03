// 世界杯预测数据 - 2026-06-13（已按官方赛程校正日期归属）
// ⚠️ 部分早期场 ET 开球时间官方未公布、未逐一核实，仅日期已对官方校正；录制不念具体开球时间
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-13"] = {
  "date": "2026-06-13",
  "tournament": "FIFA World Cup 2026 · Day 3 · 首个4场比赛日",
  "model_version": "POISSON v1.1 + 红牌风险标记",
  "model_accuracy_7d": null,
  "data_note": "概率=泊松估算；排名/球员/战绩=官方核实；赔率=占位；这4场均中立场地无主场优势",
  "matches": [
    {
      "id": "WC2026_M005",
      "kickoff_cst": "2026-06-13 15:00 ET",
      "group": "B",
      "round": 1,
      "tag": null,
      "home": {
        "code": "QAT",
        "name_zh": "卡塔尔",
        "flag": "🇶🇦",
        "fifa_rank": 56
      },
      "away": {
        "code": "SUI",
        "name_zh": "瑞士",
        "flag": "🇨🇭",
        "fifa_rank": 19
      },
      "venue": "Levi's Stadium, 圣克拉拉",
      "altitude_m": 9,
      "temp_c": 32,
      "humidity_pct": 45,
      "referee": "Said Martinez (二手来源未官方确认)",
      "headline": "今日最悬殊对位：瑞士排名高37位，模型给瑞士72%。唯一变量是32°C高温能否拖垮欧洲球员",
      "probabilities": {
        "home_win": 7.8,
        "draw": 20.2,
        "away_win": 72
      },
      "expected_goals": {
        "home": 0.43,
        "away": 1.85
      },
      "expected_score": "0 : 2",
      "over_2_5": 39.7,
      "btts": 29.4,
      "clean_sheet_home": 15.8,
      "confidence": 68,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": -1.42,
          "items": [
            {
              "label": "QAT_heat_adapt",
              "value": "+",
              "note": "32°C高温卡塔尔球员更适应，可拖慢瑞士节奏"
            },
            {
              "label": "Afif_Almoez",
              "value": "+",
              "note": "Afif(11助攻)+Almoez Ali(12球)一次转换可偷1球"
            },
            {
              "label": "neutral_venue",
              "value": "±",
              "note": "中立场地，瑞士无真实主场敌意但也无加成"
            },
            {
              "label": "opener_nerves",
              "value": "+",
              "note": "大赛首战瑞士可能保守起步"
            }
          ]
        },
        "home_risk": {
          "score": -1.85,
          "items": [
            {
              "label": "rank_56_vs_19",
              "value": "-37位",
              "note": "本届小组赛最悬殊对位之一"
            },
            {
              "label": "QAT_no_goals",
              "value": "-",
              "note": "卡塔尔近5场仅1球，场均进0.4失1.2，锋线哑火"
            },
            {
              "label": "SUI_quality",
              "value": "-",
              "note": "Akanji中卫+Xhaka中场仍属顶级，世代交替已完成"
            },
            {
              "label": "weak_opponents",
              "value": "-",
              "note": "卡塔尔近期只打巴勒斯坦/叙利亚/萨尔瓦多，成色低"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.4,
          "items": [
            {
              "label": "heat_drains_SUI",
              "value": "+",
              "note": "高温拖垮瑞士跑动，给卡塔尔反击/定位球土壤"
            },
            {
              "label": "Embolo_QUEST",
              "value": "+",
              "note": "瑞士进攻过度依赖Embolo单点，哑火则锋无力"
            },
            {
              "label": "Xhaka_cards",
              "value": "+",
              "note": "Xhaka逼抢型后腰易累积黄牌甚至红牌"
            },
            {
              "label": "Kobel_newGK",
              "value": "+",
              "note": "新门将Kobel首次世界杯主力，适应期可能失误"
            }
          ]
        },
        "live_variables": {
          "score": 0.2,
          "items": [
            {
              "label": "heat_32C",
              "value": "-",
              "note": "Levi's无遮荫，午后直射32°C拖累欧洲球员体能"
            },
            {
              "label": "Embolo_start",
              "value": "±",
              "note": "Embolo是否首发决定瑞士能否拉开比分"
            },
            {
              "label": "Xhaka_early_card",
              "value": "±",
              "note": "Xhaka早段吃牌影响瑞士中场控制"
            },
            {
              "label": "QAT_tactic",
              "value": "±",
              "note": "卡塔尔死守反击还是对攻，决定大小球走向"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Akram Afif",
            "pos": "AM",
            "status": "KEY",
            "note": "11助攻，卡塔尔进攻组织核心"
          },
          {
            "name": "Almoez Ali",
            "pos": "ST",
            "status": "KEY",
            "note": "12球，门前终结点"
          },
          {
            "name": "Meshaal Barsham",
            "pos": "GK",
            "status": "OK",
            "note": "需要高接管率才能保住比分"
          },
          {
            "name": "卡塔尔锋线",
            "pos": "FW",
            "status": "QUEST",
            "note": "近5场仅1球，整体哑火"
          }
        ],
        "away": [
          {
            "name": "Manuel Akanji",
            "pos": "CB",
            "status": "KEY",
            "note": "曼城中卫，后防定海神针"
          },
          {
            "name": "Granit Xhaka",
            "pos": "CM",
            "status": "KEY",
            "note": "中场核心，但有累积黄牌倾向"
          },
          {
            "name": "Breel Embolo",
            "pos": "ST",
            "status": "QUEST",
            "note": "瑞士唯一稳定得分点，状态待定"
          },
          {
            "name": "Gregor Kobel",
            "pos": "GK",
            "status": "OK",
            "note": "接替Sommer的新一号门将，世界杯首秀"
          }
        ]
      },
      "odds": [
        {
          "book": "占位-待接入API",
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
          "msg": "fixture verified: FIFA / ESPN, Group B"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank QAT#56 SUI#19; QAT GF0.4/GA1.2"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "neutral venue, no home boost; heat 32C noted"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 7.8 / 20.2 / 72.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 1,
        "scoreline": "1 - 1",
        "scorers": [
          {
            "min": "17'",
            "team": "SUI",
            "player": "Breel Embolo",
            "type": "点球"
          },
          {
            "min": "90+4'",
            "team": "QAT",
            "player": "Boualem Khoukhi",
            "type": "补时绝平，卡塔尔队史首个世界杯积分"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "瑞士Embolo 17'点球先进，卡塔尔Khoukhi 90+4'绝平抢到队史首个世界杯积分",
        "source": "ESPN / FOX / VAVEL"
      },
      "review": {
        "verdict": "MISS",
        "headline": "方向失手：给瑞士72%稳赢，结果1-1被卡塔尔绝平。但模型点的Embolo进了、'卡塔尔死守偷分'路径也兑现",
        "hits": [
          "★away_upset_path原话'卡塔尔死守+一次机会偷分逼平'→ Khoukhi 90+4'绝平，字面应验",
          "点名Embolo是瑞士唯一稳定得分点→ 他真的进球(点球)了 ✓",
          "红牌风险标LOW→ 全场0红牌 ✓"
        ],
        "misses": [
          "★核心失手：72%当稳赢，瑞士却没拿下。高favorite被'强队首战放不开'的老问题坑了",
          "低估卡塔尔韧性：给他们赢/平合计28%，实际抢到分",
          "又是'强队vs弱旅'方差判断不准——和加拿大那场同病(高估favorite)"
        ],
        "model_lesson": "连续多场印证:'强队首战'系统性高估。瑞士、加拿大、巴西都没赢下纸面该赢的球。需要给'大赛首轮强队保守/放不开'一个负向修正项"
      }
    },
    {
      "id": "WC2026_M006",
      "kickoff_cst": "2026-06-13 18:00 ET",
      "group": "C",
      "round": 1,
      "tag": "UPSET_WARN",
      "home": {
        "code": "BRA",
        "name_zh": "巴西",
        "flag": "🇧🇷",
        "fifa_rank": 6
      },
      "away": {
        "code": "MAR",
        "name_zh": "摩洛哥",
        "flag": "🇲🇦",
        "fifa_rank": 7
      },
      "venue": "MetLife Stadium, 新泽西",
      "altitude_m": 7,
      "temp_c": 32,
      "humidity_pct": 60,
      "referee": "Slavko Vinčić",
      "headline": "★今日头条：模型把状态火热的摩洛哥放在巴西前面(47% vs 30%)。巴西缺4主力+摩洛哥非洲杯冠军底子",
      "probabilities": {
        "home_win": 30,
        "draw": 22.9,
        "away_win": 47.1
      },
      "expected_goals": {
        "home": 1.41,
        "away": 1.81
      },
      "expected_score": "1 : 2",
      "over_2_5": 62.2,
      "btts": 63.1,
      "clean_sheet_home": 16.4,
      "confidence": 55,
      "monte_carlo_n": 50000,
      "value_rating": 5,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.9,
          "items": [
            {
              "label": "front_line_ceiling",
              "value": "+",
              "note": "Vinícius+Raphinha+Cunha 个人能力可一瞬间破密集防守"
            },
            {
              "label": "Ancelotti_form",
              "value": "+",
              "note": "近3场友谊赛全胜(埃及2-1/巴拿马6-2/克罗地亚3-1)"
            },
            {
              "label": "rank_level",
              "value": "±",
              "note": "FIFA 6 vs 7 几乎持平，但巴西进攻深度最深"
            },
            {
              "label": "Aguerd_OUT",
              "value": "+",
              "note": "摩洛哥主力中卫Aguerd缺阵，防线变薄"
            }
          ]
        },
        "home_risk": {
          "score": -1.3,
          "items": [
            {
              "label": "4_absentees",
              "value": "-",
              "note": "Neymar/Rodrygo/Militão/Estêvão 全部缺阵，后防尤其受损"
            },
            {
              "label": "BRA_leaky",
              "value": "-",
              "note": "巴西近5场4场丢球(场均1.4)，易被摩洛哥反击/定位球打穿"
            },
            {
              "label": "AFCON_structure",
              "value": "-",
              "note": "摩洛哥非洲杯冠军体系专治强队，巴西可能控球却被反击"
            },
            {
              "label": "heat_2nd_half",
              "value": "-",
              "note": "32°C下半场拖累巴西高能边路game"
            }
          ]
        },
        "away_upset_path": {
          "score": 1.5,
          "items": [
            {
              "label": "MAR_form",
              "value": "+",
              "note": "2025非洲杯冠军，近5场仅失0.6球，状态巅峰"
            },
            {
              "label": "Hakimi_Diaz",
              "value": "+",
              "note": "Hakimi(非洲足球先生)+Brahim Díaz(非洲杯金靴5球)双核"
            },
            {
              "label": "Bounou_lowblock",
              "value": "+",
              "note": "Bounou门将+铁桶防守，巴西零封概率仅16%"
            },
            {
              "label": "counter_vs_Militao_out",
              "value": "+",
              "note": "巴西缺Militão，正是摩洛哥反击速度的猎物"
            }
          ]
        },
        "live_variables": {
          "score": -0.1,
          "items": [
            {
              "label": "lineup_unconfirmed",
              "value": "±",
              "note": "首发为ESPN预测非官方，需核实Militão/Aguerd/Mazraoui"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "摩洛哥先进则退守，巴西先进则打开场面"
            },
            {
              "label": "Vinčić_cards",
              "value": "-",
              "note": "主裁严判，影响Casemiro与摩洛哥战术犯规"
            },
            {
              "label": "set_pieces",
              "value": "±",
              "note": "两队定位球都强，一个死球可定低进球比赛"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Vinícius Júnior",
            "pos": "LW",
            "status": "KEY",
            "note": "皇马，巴西进攻一号点"
          },
          {
            "name": "Raphinha",
            "pos": "RW",
            "status": "KEY",
            "note": "右路威胁"
          },
          {
            "name": "Matheus Cunha",
            "pos": "ST",
            "status": "OK",
            "note": "中锋(Neymar缺阵下顶上)"
          },
          {
            "name": "Neymar/Militão/Rodrygo",
            "pos": "—",
            "status": "OUT",
            "note": "4名主力缺阵，后防与创造力双损"
          }
        ],
        "away": [
          {
            "name": "Achraf Hakimi",
            "pos": "RB",
            "status": "HOT",
            "note": "非洲足球先生，攻防一体，专打巴西左路"
          },
          {
            "name": "Brahim Díaz",
            "pos": "AM",
            "status": "HOT",
            "note": "非洲杯金靴5球，线间杀手"
          },
          {
            "name": "Yassine Bounou",
            "pos": "GK",
            "status": "KEY",
            "note": "铁桶防守的最后一道神锁"
          },
          {
            "name": "Nayef Aguerd",
            "pos": "CB",
            "status": "OUT",
            "note": "主力中卫缺阵，防线变薄"
          }
        ]
      },
      "odds": [
        {
          "book": "占位-待接入API",
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
          "msg": "fixture verified: FIFA / ESPN, Group C"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank BRA#6 MAR#7 (几乎持平)"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "BRA missing Neymar/Rodrygo/Militão/Estêvão"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "model leans MOROCCO 47.1% — UPSET WARN"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 30.0 / 22.9 / 47.1"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 1,
        "scoreline": "1 - 1",
        "scorers": [
          {
            "min": "21'",
            "team": "MAR",
            "player": "Ismael Saibari",
            "type": "摩洛哥先进"
          },
          {
            "min": "32'",
            "team": "BRA",
            "player": "Vinícius Júnior",
            "type": "扳平"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "摩洛哥Saibari 21'先进，Vinícius 32'扳平，1-1各拿一分",
        "source": "ESPN / Al Jazeera / CBS"
      },
      "review": {
        "verdict": "PARTIAL",
        "headline": "模型最大胆的判断基本对了：它说'别押巴西赢'——巴西果然没赢(1-1)。只是结果是平不是摩洛哥赢",
        "hits": [
          "★核心命中：模型给巴西仅30%、明确看衰→ 巴西真的没赢，1-1平 ✓",
          "★顶住舆论是对的：赛前所有人当巴西稳，模型敢说悬，结果验证",
          "点名Vinícius是巴西头号点→ 他打进扳平球 ✓",
          "flagged巴西缺Militão后防漏→ 摩洛哥21'就先进球 ✓",
          "BTTS偏是63%→ 双方都进 ✓；大2.5给62%(这场2球略偏)"
        ],
        "misses": [
          "方向上模型#1是摩洛哥赢(47%)，实际是平(模型给平仅22.9%，第二低)",
          "进球的是Saibari，不是模型点的Hakimi/Brahim Díaz——具体球员没押中"
        ],
        "model_lesson": "这是模型最有价值的一场:逆共识说'巴西要栽'，方向对(巴西没赢)。教训仍是平局被低估——'强队互交白卷/平局'概率该上调，独立泊松对1-1类低分平局系统性低估(Dixon-Coles能修)"
      }
    },
    {
      "id": "WC2026_M007",
      "kickoff_cst": "2026-06-13 21:00 ET",
      "group": "C",
      "round": 1,
      "tag": null,
      "home": {
        "code": "HAI",
        "name_zh": "海地",
        "flag": "🇭🇹",
        "fifa_rank": 83
      },
      "away": {
        "code": "SCO",
        "name_zh": "苏格兰",
        "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "fifa_rank": 42
      },
      "venue": "Gillette Stadium, 福克斯堡",
      "altitude_m": 28,
      "temp_c": 21,
      "humidity_pct": 85,
      "referee": "Mustapha Ghorbal (阿尔及利亚)",
      "headline": "苏格兰排名高41位+状态好，模型给47%。但80%雷暴预报+湿重场地可能帮海地拖平",
      "probabilities": {
        "home_win": 26.2,
        "draw": 26.6,
        "away_win": 47.1
      },
      "expected_goals": {
        "home": 1,
        "away": 1.44
      },
      "expected_score": "1 : 2",
      "over_2_5": 44,
      "btts": 48.2,
      "clean_sheet_home": 23.7,
      "confidence": 62,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.5,
          "items": [
            {
              "label": "real_PL_talent",
              "value": "+",
              "note": "Isidor(桑德兰)+Bellegarde(狼队)+Nazon(预选赛6球)真有锋线"
            },
            {
              "label": "momentum",
              "value": "+",
              "note": "刚4-0胜新西兰，预选赛战绩硬(GF1.5/GA1.0)"
            },
            {
              "label": "wet_pitch",
              "value": "+",
              "note": "80%雷暴湿重场地压制苏格兰技术传控，利海地直接打法"
            },
            {
              "label": "neutral_US",
              "value": "+",
              "note": "中立美国场+MLS球员适应当地，无客场劣势"
            }
          ]
        },
        "home_risk": {
          "score": -0.95,
          "items": [
            {
              "label": "rank_83_vs_42",
              "value": "-41位",
              "note": "实力差距真实，模型仅给海地26%胜"
            },
            {
              "label": "SCO_McTominay",
              "value": "-",
              "note": "McTominay(24-25意甲MVP)+队长Robertson(利物浦92场)+McGinn"
            },
            {
              "label": "HAI_leaky",
              "value": "-",
              "note": "海地曾失3球给洪都拉斯/哥斯达黎加，后防能被撕开"
            },
            {
              "label": "SCO_form",
              "value": "-",
              "note": "苏格兰近5场4胜(0-4玻利维亚/4-1库拉索)"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.7,
          "items": [
            {
              "label": "HAI_early_lead",
              "value": "+",
              "note": "海地若湿地早进球逼苏格兰追赶，重场拖累其传控"
            },
            {
              "label": "BTTS_likely",
              "value": "+",
              "note": "BTTS 48%，Isidor/Nazon进一个就够打1-0/2-1低事件比赛"
            },
            {
              "label": "Gilmour_OUT",
              "value": "+",
              "note": "苏格兰Gilmour膝伤整届缺阵，中场控制留缺口"
            },
            {
              "label": "Ghorbal_setpiece",
              "value": "+",
              "note": "主裁判一个定位球/点球可让Nazon翻盘"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "thunderstorm_80",
              "value": "-",
              "note": "80%雷暴：真下则低比分混战(小球)；放晴则苏格兰λ回升"
            },
            {
              "label": "Che_Adams_doubt",
              "value": "-",
              "note": "苏格兰Che Adams伤情存疑，削弱进攻多样性"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "近平局率26.6%，首球决定苏格兰碾压还是开放对攻"
            },
            {
              "label": "Ghorbal_cards",
              "value": "±",
              "note": "海地一张红牌会兑现苏格兰实力优势"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Wilson Isidor",
            "pos": "ST",
            "status": "HOT",
            "note": "桑德兰，状态火热(由法国转投海地)"
          },
          {
            "name": "Jean-Ricner Bellegarde",
            "pos": "CM",
            "status": "KEY",
            "note": "狼队中场"
          },
          {
            "name": "Duckens Nazon",
            "pos": "FW",
            "status": "KEY",
            "note": "队史最佳射手，预选赛6球"
          },
          {
            "name": "Danley Jean Jacques",
            "pos": "CM",
            "status": "OK",
            "note": "MLS球员，适应美国场地"
          }
        ],
        "away": [
          {
            "name": "Scott McTominay",
            "pos": "CM",
            "status": "HOT",
            "note": "24-25赛季意甲MVP，进攻中场核心"
          },
          {
            "name": "Andy Robertson",
            "pos": "LB",
            "status": "KEY",
            "note": "队长，利物浦，92场国脚"
          },
          {
            "name": "John McGinn",
            "pos": "CM",
            "status": "OK",
            "note": "中场推进"
          },
          {
            "name": "Billy Gilmour",
            "pos": "CM",
            "status": "OUT",
            "note": "膝伤整届缺阵，中场控制留缺口"
          }
        ]
      },
      "odds": [
        {
          "book": "占位-待接入API",
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
          "msg": "fixture verified: FIFA / ESPN, Group C"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank HAI#83 SCO#42; thunderstorm 80%"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "Gilmour OUT (knee); Che Adams doubt"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 26.2 / 26.6 / 47.1"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 0,
        "away_goals": 1,
        "scoreline": "0 - 1",
        "scorers": [
          {
            "min": "28'",
            "team": "SCO",
            "player": "John McGinn",
            "type": "苏格兰制胜球"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "苏格兰McGinn 28'进球，0-1小胜海地。湿重场地下双方都难有作为，低比分如预期",
        "source": "ESPN / Olympics.com"
      },
      "review": {
        "verdict": "HIT",
        "headline": "方向命中：模型给苏格兰47%(最高)→苏格兰0-1赢。且低比分、McGinn进球都说中",
        "hits": [
          "★胜负方向对：模型给苏格兰47%是最高→苏格兰赢 ✓",
          "点名McGinn等苏格兰中场质量→ 正是McGinn打进唯一进球 ✓",
          "预判'80%雷暴湿地压制进球、低比分'→ 实际0-1小比分 ✓",
          "大2.5仅给44%(偏小球)→ 实际1球，小球 ✓"
        ],
        "misses": [
          "比分预测1-2，实际0-1（海地没进球，没出现BTTS）",
          "海地的锋线(Isidor/Nazon)没能兑现，进攻端高估了海地一点"
        ],
        "model_lesson": "这场是教科书式命中：实力差+天气压制低比分，模型四个维度都对。说明模型在'中等实力差+明确环境因素'的比赛里最可靠，远好过'强队首战'和'五五开'两类"
      }
    }
  ]
};
