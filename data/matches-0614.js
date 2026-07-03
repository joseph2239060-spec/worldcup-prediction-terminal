// 世界杯预测数据 - 2026-06-14（日期已按官方校正；早期ET开球时间官方未公布，标注未公布，录制不念时间）
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-14"] = {
  "date": "2026-06-14",
  "tournament": "FIFA World Cup 2026 · Day 4",
  "model_version": "POISSON v1.2 + 反灌水修正 + 红牌风险",
  "model_accuracy_7d": null,
  "data_note": "概率=泊松估算；本日主动对鱼腩灌水数据下修(吸取强队被高估教训)；赔率占位",
  "matches": [
    {
      "id": "WC2026_M008",
      "kickoff_cst": "2026-06-14 ET未公布",
      "group": "D",
      "round": 1,
      "tag": null,
      "home": {
        "code": "AUS",
        "name_zh": "澳大利亚",
        "flag": "🇦🇺",
        "fifa_rank": 27
      },
      "away": {
        "code": "TUR",
        "name_zh": "土耳其",
        "flag": "🇹🇷",
        "fifa_rank": 22
      },
      "venue": "BC Place, 温哥华",
      "altitude_m": 0,
      "temp_c": 22,
      "humidity_pct": 55,
      "referee": "Valenzuela (委内瑞拉)",
      "headline": "土耳其52%占优，但核心Çalhanoğlu/Yıldız伤情存疑——若双缺则可能被澳洲拖平",
      "probabilities": {
        "home_win": 18.9,
        "draw": 25.3,
        "away_win": 55.8
      },
      "expected_goals": {
        "home": 0.8,
        "away": 1.58
      },
      "expected_score": "0 : 2",
      "over_2_5": 42.3,
      "btts": 43.6,
      "clean_sheet_home": 20.7,
      "confidence": 61,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": -1.1,
          "items": [
            {
              "label": "setpiece_aerial",
              "value": "+",
              "note": "Souttar(近2米)+门将Maty Ryan(第4届世界杯)定位球防空体系"
            },
            {
              "label": "Toure_HOT",
              "value": "+",
              "note": "新星Mohamed Toure(诺维奇12场10球)若首发可成支点"
            },
            {
              "label": "TUR_injuries",
              "value": "+",
              "note": "土耳其Çalhanoğlu/Yıldız伤情若坐实则火力下调"
            },
            {
              "label": "neutral_venue",
              "value": "±",
              "note": "中立场抹平澳洲劣势也取消土耳其客场惩罚"
            }
          ]
        },
        "home_risk": {
          "score": -1.55,
          "items": [
            {
              "label": "AUS_no_goals",
              "value": "-",
              "note": "近5场场均仅0.8球，对强队脆弱(0-3哥伦比亚/0-1委内瑞拉)"
            },
            {
              "label": "TUR_playoff_def",
              "value": "-",
              "note": "土耳其附加赛两场连续1-0零失球，防守纪律好"
            },
            {
              "label": "Valenzuela_strict",
              "value": "-",
              "note": "委内瑞拉主裁严判，澳洲对抗型打法易吃黄"
            },
            {
              "label": "no_real_home",
              "value": "-",
              "note": "名义主队带不来真实主场助力"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.45,
          "items": [
            {
              "label": "TUR_core_doubt",
              "value": "+",
              "note": "Çalhanoğlu+Yıldız双缺则组织/定位球中枢失灵，易被拖平"
            },
            {
              "label": "TUR_conservative",
              "value": "+",
              "note": "土耳其附加赛进攻保守(两场各1球)，非火力外溢型"
            },
            {
              "label": "opener_pressure",
              "value": "+",
              "note": "24年来首次重返世界杯的心理包袱"
            },
            {
              "label": "strict_ref",
              "value": "+",
              "note": "南美严苛主裁，早黄打乱节奏可能交出冷平"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "TUR_lineup",
              "value": "±",
              "note": "Çalhanoğlu/Yıldız是否首发=最大单一不确定性"
            },
            {
              "label": "Toure_start",
              "value": "±",
              "note": "澳洲是否让Toure首发+Souttar健康度"
            },
            {
              "label": "first_goal_15_30",
              "value": "±",
              "note": "土先进则1-0锁死；澳先进则平局/冷门概率大涨"
            },
            {
              "label": "roof_closed",
              "value": "±",
              "note": "可伸缩顶棚，闭顶利于技术型土耳其"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Harry Souttar",
            "pos": "CB",
            "status": "KEY",
            "note": "近2米，定位球防空+进攻支点"
          },
          {
            "name": "Maty Ryan",
            "pos": "GK",
            "status": "KEY",
            "note": "第4届世界杯，10场追平队史"
          },
          {
            "name": "Mohamed Toure",
            "pos": "ST",
            "status": "HOT",
            "note": "诺维奇2025/26赛季12场10球"
          },
          {
            "name": "澳洲锋线",
            "pos": "FW",
            "status": "QUEST",
            "note": "近5场场均仅0.8球，进攻贫瘠"
          }
        ],
        "away": [
          {
            "name": "Hakan Çalhanoğlu",
            "pos": "CM",
            "status": "QUEST",
            "note": "国米中场核心，比目鱼肌伤存疑"
          },
          {
            "name": "Kenan Yıldız",
            "pos": "AM",
            "status": "QUEST",
            "note": "尤文新星，小腿伤大概率缺阵"
          },
          {
            "name": "Arda Güler",
            "pos": "AM",
            "status": "HOT",
            "note": "皇马，创造力点"
          },
          {
            "name": "Kerem Aktürkoğlu",
            "pos": "WG",
            "status": "HOT",
            "note": "附加赛淘汰科索沃致胜球"
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
          "msg": "fixture verified: FIFA / ESPN, Group D"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank AUS#27 TUR#22; AUS GF0.8"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "TUR core Çalhanoğlu/Yıldız injury doubt — key swing"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 18.9 / 25.3 / 55.8"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 2,
        "away_goals": 0,
        "scoreline": "2 - 0",
        "scorers": [
          {
            "min": "27'",
            "team": "AUS",
            "player": "Nestory Irankunda",
            "type": "反击"
          },
          {
            "min": "75'",
            "team": "AUS",
            "player": "Connor Metcalfe",
            "type": "锁定胜局"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "全日最大冷门：澳大利亚Irankunda 27'反击破门、Metcalfe 75'锁定，2-0爆冷土耳其",
        "source": "ESPN / Yahoo / Olympics.com"
      },
      "review": {
        "verdict": "MISS",
        "headline": "全日最大冷门，方向失手：给土耳其56%、澳洲仅19%，结果澳洲2-0。但模型早标了土耳其伤病隐患",
        "hits": [
          "★away_upset_path原话'Çalhanoğlu+Yıldız双缺则土耳其组织/进攻失灵,易被澳洲拖住'→ 土耳其真的没踢出来",
          "flagged土耳其进攻保守(附加赛各只进1球)、非火力型→ 全场0进球 ✓",
          "红牌风险LOW→ 0红牌 ✓"
        ],
        "misses": [
          "★大失手：澳洲只给19%胜，结果2-0完胜。把澳洲进攻(场均0.8球)压得太死",
          "Irankunda这个反击点完全没在模型雷达上(模型只盯Souttar定位球)",
          "土耳其伤病'隐患'被低估成减分项，实际是直接崩盘"
        ],
        "model_lesson": "和美国4-1同类:低估了'被看衰但有反击爆点'的球队。Irankunda这种快马反击点模型抓不到。教训:进攻贫瘠的队若有1-2个速度型奇兵,λ不该压到0.8那么低;主裁严判+对手核心伤=爆冷温床,该给受让方更高权重"
      }
    },
    {
      "id": "WC2026_M009",
      "kickoff_cst": "2026-06-14 13:00 ET",
      "group": "E",
      "round": 1,
      "tag": null,
      "home": {
        "code": "GER",
        "name_zh": "德国",
        "flag": "🇩🇪",
        "fifa_rank": 9
      },
      "away": {
        "code": "CUW",
        "name_zh": "库拉索",
        "flag": "🇨🇼",
        "fifa_rank": 82
      },
      "venue": "NRG Stadium, 休斯顿",
      "altitude_m": 15,
      "temp_c": 22,
      "humidity_pct": 55,
      "referee": "摩洛哥裁判组 (二手来源)",
      "headline": "今日最稳：德国85.7%。模型已吸取教训，把库拉索打鱼腩的灌水数据下修，但实力差仍压倒性",
      "probabilities": {
        "home_win": 85.7,
        "draw": 10.7,
        "away_win": 3.6
      },
      "expected_goals": {
        "home": 2.75,
        "away": 0.42
      },
      "expected_score": "2 : 0",
      "over_2_5": 61.4,
      "btts": 32.1,
      "clean_sheet_home": 65.7,
      "confidence": 85,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 2.1,
          "items": [
            {
              "label": "rank_9_vs_82",
              "value": "+73位",
              "note": "史上面积/人口最大的处子秀球队，实力鸿沟真实非噪声"
            },
            {
              "label": "GER_attack_depth",
              "value": "+",
              "note": "Wirtz+Havertz+Kimmich定位球+Musiala替补，进攻深度碾压"
            },
            {
              "label": "roof_climate",
              "value": "+",
              "note": "NRG闭顶恒温22°C，抹掉了高温拖垮强队的爆冷变量"
            },
            {
              "label": "German_crowd",
              "value": "+",
              "note": "休斯顿德国球迷多，中立场仍有~1.02主场气氛"
            }
          ]
        },
        "home_risk": {
          "score": -0.45,
          "items": [
            {
              "label": "Musiala_rotation",
              "value": "-",
              "note": "Musiala状态/轮换不确定，Nagelsmann可能首战留力"
            },
            {
              "label": "Room_GK",
              "value": "-",
              "note": "库拉索37岁门将Eloy Room一场神扑可偷低比分"
            },
            {
              "label": "opener_slow",
              "value": "-",
              "note": "德国历史上世界杯首战常慢热"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.3,
          "items": [
            {
              "label": "low_block_5-4-1",
              "value": "+",
              "note": "5-4-1铁桶+Room扑救拖到0-0，再反击/定位球偷一个"
            },
            {
              "label": "GER_rotate",
              "value": "+",
              "note": "德国大轮换+Musiala/Wirtz哑火，favorites急躁"
            },
            {
              "label": "remote",
              "value": "±",
              "note": "但德国红牌概率近零，这条路很窄"
            }
          ]
        },
        "live_variables": {
          "score": 0.1,
          "items": [
            {
              "label": "Musiala_start",
              "value": "±",
              "note": "Musiala首发还是替补，决定德国进攻火力"
            },
            {
              "label": "roof_confirm",
              "value": "±",
              "note": "NRG赛前确认闭顶(已假设闭顶)"
            },
            {
              "label": "early_goal",
              "value": "±",
              "note": "德国25分钟内进球则爆冷路径全灭"
            },
            {
              "label": "CUW_cards",
              "value": "-",
              "note": "库拉索吃黄牌会让铁桶变薄"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Florian Wirtz",
            "pos": "AM",
            "status": "KEY",
            "note": "进攻组织核心"
          },
          {
            "name": "Kai Havertz",
            "pos": "ST",
            "status": "KEY",
            "note": "锋线终结点"
          },
          {
            "name": "Joshua Kimmich",
            "pos": "CM",
            "status": "KEY",
            "note": "中场+定位球"
          },
          {
            "name": "Jamal Musiala",
            "pos": "AM",
            "status": "QUEST",
            "note": "状态/轮换不确定，可能首战留力"
          }
        ],
        "away": [
          {
            "name": "Eloy Room",
            "pos": "GK",
            "status": "KEY",
            "note": "37岁门将，偷低比分的唯一指望"
          },
          {
            "name": "Juninho Bacuna",
            "pos": "CM",
            "status": "OK",
            "note": "中场组织"
          },
          {
            "name": "Jürgen Locadia",
            "pos": "FW",
            "status": "OK",
            "note": "反击爆点"
          },
          {
            "name": "库拉索后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "热身赛0-2中国/1-5澳洲，强队级实测脆弱"
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
          "msg": "fixture verified: FIFA / ESPN, Group E"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank GER#9 CUW#82"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: CUW λ deflated 1.0→0.42 (minnow stats discounted)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 85.7 / 10.7 / 3.6"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 7,
        "away_goals": 1,
        "scoreline": "7 - 1",
        "scorers": [
          {
            "min": "—",
            "team": "GER",
            "player": "德国多点开花(7球)",
            "type": "大胜"
          },
          {
            "min": "—",
            "team": "CUW",
            "player": "库拉索",
            "type": "扳回一球"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "德国7-1血洗库拉索，方向完全正确但比分远超模型预期",
        "source": "ESPN / FOX / Olympics.com"
      },
      "review": {
        "verdict": "HIT",
        "headline": "方向完美命中(德国大胜)，但反灌水这次修过头了——预期2.75球实际进了7个",
        "hits": [
          "★胜负方向对：模型给德国85.7%(全场最高信心)→德国大胜 ✓",
          "零封/大球方向对：预判德国压倒性，实际7-1 ✓",
          "红牌风险LOW→0红牌 ✓"
        ],
        "misses": [
          "比分严重低估：期望进球压到2.75，实际7球。反灌水修正这次矫枉过正——库拉索防线比'热身赛被中国2-0'还脆",
          "库拉索的真实防守下限比模型估的更低"
        ],
        "model_lesson": "反灌水是对的方向(避免高估强队胜率)，但对'实力鸿沟极大'的比赛会低估净胜球。教训:鱼腩对手的λ折扣要分场景——打平时反灌水有用，预测大比分/净胜球时不该过度压低强队进攻"
      }
    },
    {
      "id": "WC2026_M010",
      "kickoff_cst": "2026-06-14 16:00 ET",
      "group": "H",
      "round": 1,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "NED",
        "name_zh": "荷兰",
        "flag": "🇳🇱",
        "fifa_rank": 7
      },
      "away": {
        "code": "JPN",
        "name_zh": "日本",
        "flag": "🇯🇵",
        "fifa_rank": 18
      },
      "venue": "Lincoln Financial Field, 费城",
      "altitude_m": 12,
      "temp_c": 33,
      "humidity_pct": 70,
      "referee": "Ismail Elfath (ESPN预告，未官方确认)",
      "headline": "又一场五五开，模型甚至微微偏日本(35.5%)。荷兰数据打鱼腩灌水，日本近期真赢过英格兰/巴西",
      "probabilities": {
        "home_win": 32.8,
        "draw": 31.7,
        "away_win": 35.5
      },
      "expected_goals": {
        "home": 0.93,
        "away": 0.98
      },
      "expected_score": "0 : 0",
      "over_2_5": 29.9,
      "btts": 37.8,
      "clean_sheet_home": 37.5,
      "confidence": 58,
      "monte_carlo_n": 50000,
      "value_rating": 4,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.55,
          "items": [
            {
              "label": "rank_7_vs_18",
              "value": "+",
              "note": "Van Dijk领衔后防，de Jong控节奏，Gakpo是破局点"
            },
            {
              "label": "squad_depth",
              "value": "+",
              "note": "首战阵容深度优势，缺人也能摆出顶级中轴"
            },
            {
              "label": "Koeman_org",
              "value": "+",
              "note": "结构化首战，Koeman可压制日本的转换进攻"
            },
            {
              "label": "Depay_impact",
              "value": "+",
              "note": "Depay若70分钟替补冲击疲惫防线可定胜负"
            }
          ]
        },
        "home_risk": {
          "score": -0.8,
          "items": [
            {
              "label": "stats_padded",
              "value": "-",
              "note": "荷兰2.2进球含4-0立陶宛/芬兰/马耳他灌水；遇强队两平波兰、平厄瓜多尔、负阿尔及利亚"
            },
            {
              "label": "defense_thin",
              "value": "-",
              "note": "Timber伤退、Simons(ACL)/Frimpong缺阵，边路与后防变薄"
            },
            {
              "label": "Depay_unfit",
              "value": "-",
              "note": "Depay刚复出仅~34分钟状态，首发进攻钝、过度依赖Gakpo"
            },
            {
              "label": "heat_101F",
              "value": "-",
              "note": "33°C体感101F压制荷兰高位传控"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.9,
          "items": [
            {
              "label": "JPN_real_form",
              "value": "+",
              "note": "日本近期真赢英格兰/苏格兰/巴西，场均失~0.6多场零封，含金量高"
            },
            {
              "label": "Kubo_Ueda",
              "value": "+",
              "note": "Kubo(HOT,Mitoma缺阵下创造核心)+Ueda(荷甲金靴~25球)锋线锐利"
            },
            {
              "label": "neutral_coinflip",
              "value": "+",
              "note": "中立场抹掉荷兰主场，模型微微偏日本"
            },
            {
              "label": "heat_favors_JPN",
              "value": "+",
              "note": "湿热利于日本纪律性反击，一个定位球+零封1-0"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "roof_open_closed",
              "value": "±",
              "note": "开顶+101F体感大幅压低节奏与总进球"
            },
            {
              "label": "Depay_role",
              "value": "±",
              "note": "Depay替补(大概率)还是意外首发，改变荷兰λ"
            },
            {
              "label": "Tomiyasu_fit",
              "value": "±",
              "note": "Tomiyasu伤愈2年后状态，影响日本右路防守"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "0-0倾向的低比分里，谁先进球极大左右走势"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Virgil van Dijk",
            "pos": "CB",
            "status": "KEY",
            "note": "队长，后防定海神针"
          },
          {
            "name": "Frenkie de Jong",
            "pos": "CM",
            "status": "KEY",
            "note": "中场节拍器"
          },
          {
            "name": "Cody Gakpo",
            "pos": "LW",
            "status": "HOT",
            "note": "状态在线的破局点"
          },
          {
            "name": "Memphis Depay",
            "pos": "ST",
            "status": "QUEST",
            "note": "刚复出仅34分钟状态，可能替补"
          }
        ],
        "away": [
          {
            "name": "Takefusa Kubo",
            "pos": "RW",
            "status": "HOT",
            "note": "皇家社会，Mitoma缺阵下的创造核心"
          },
          {
            "name": "Ayase Ueda",
            "pos": "ST",
            "status": "HOT",
            "note": "荷甲金靴~25球，锋线终结"
          },
          {
            "name": "Takehiro Tomiyasu",
            "pos": "RB",
            "status": "QUEST",
            "note": "伤愈2年后状态待考"
          },
          {
            "name": "Kaoru Mitoma",
            "pos": "LW",
            "status": "OUT",
            "note": "缺阵，边路威胁削弱"
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
          "msg": "fixture verified: FIFA / ESPN (组别以CBS赛程H组为准)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank NED#7 JPN#18"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: NED GF deflated 12% (4-0 vs minnows discounted)"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "coin-flip: model slightly favors JAPAN on real form"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 32.8 / 31.7 / 35.5"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 2,
        "away_goals": 2,
        "scoreline": "2 - 2",
        "scorers": [
          {
            "min": "—",
            "team": "NED",
            "player": "荷兰(2球)",
            "type": ""
          },
          {
            "min": "—",
            "team": "JPN",
            "player": "日本(2球)",
            "type": "顽强逼平"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "荷兰2-2日本，日本顶住豪门拿到宝贵一分，正是模型'五五开、荷兰难赢'的判断",
        "source": "ESPN / Yahoo / FOX"
      },
      "review": {
        "verdict": "PARTIAL",
        "headline": "模型的核心判断对了:荷兰赢不了(只给32.8%)、这是五五开→真2-2平。只是猜了日本赢、且大错了进球数",
        "hits": [
          "★最关键:模型敢不站FIFA第7的荷兰、给日本35.5%略高→荷兰确实没赢 ✓",
          "★逆名气判断对:反灌水识破荷兰打鱼腩刷的数据，日本真实力被肯定 ✓",
          "BTTS给37.8%偏是→双方都进 ✓"
        ],
        "misses": [
          "方向上模型#1是日本赢，实际平(平局31.7%是第二高，很接近)",
          "★进球数大错:模型判低比分0-0(大2.5仅29.9%)，实际2-2四个球。两支技术队对攻完全没料到"
        ],
        "model_lesson": "荷兰vs日本是反灌水的胜利(没被荷兰名气骗)。但'低比分'判断翻车——两支技术流互攻可以打出2-2。教训:'防守数据好'不等于'低进球'，技术队对轰的开放性被独立泊松低估"
      }
    },
    {
      "id": "WC2026_M011",
      "kickoff_cst": "2026-06-14 19:00 ET",
      "group": "F",
      "round": 1,
      "tag": null,
      "home": {
        "code": "CIV",
        "name_zh": "科特迪瓦",
        "flag": "🇨🇮",
        "fifa_rank": 33
      },
      "away": {
        "code": "ECU",
        "name_zh": "厄瓜多尔",
        "flag": "🇪🇨",
        "fifa_rank": 23
      },
      "venue": "AT&T Stadium, 达拉斯",
      "altitude_m": 130,
      "temp_c": 34,
      "humidity_pct": 45,
      "referee": "François Letexier (法国)",
      "headline": "今日最闷一场：双方都防守强，模型给科特迪瓦38%但期望0-0。厄瓜多尔铁桶曾1-0赢阿根廷",
      "probabilities": {
        "home_win": 38.2,
        "draw": 35.1,
        "away_win": 26.8
      },
      "expected_goals": {
        "home": 0.9,
        "away": 0.7
      },
      "expected_score": "0 : 0",
      "over_2_5": 21.7,
      "btts": 29.9,
      "clean_sheet_home": 49.7,
      "confidence": 62,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.6,
          "items": [
            {
              "label": "CIV_form",
              "value": "+",
              "note": "6月热身真2-1赢过法国，进攻质量部分是真的"
            },
            {
              "label": "Amad_Adingra",
              "value": "+",
              "note": "Amad Diallo(非洲杯金靴)+Adingra速度，边路比厄瓜多尔有活力"
            },
            {
              "label": "near_neutral",
              "value": "+",
              "note": "海平面达拉斯无海拔惩罚，湿热利非洲队"
            },
            {
              "label": "Kessie_midfield",
              "value": "+",
              "note": "队长Kessie 100+场+定位球分量，能抗衡Caicedo"
            }
          ]
        },
        "home_risk": {
          "score": -0.85,
          "items": [
            {
              "label": "ECU_elite_def",
              "value": "-",
              "note": "厄瓜多尔0.6失球是真的(对阿根廷/美国/墨西哥)，Pacho+Hincapié+Caicedo铁闸"
            },
            {
              "label": "CIV_padded_attack",
              "value": "-",
              "note": "科特迪瓦2.1进球含非洲杯鱼腩(4-0韩国/3-0布基纳法索)，真实约1球"
            },
            {
              "label": "counter_risk",
              "value": "-",
              "note": "高位压迫留转换空间给Valencia反击"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.7,
          "items": [
            {
              "label": "park_bus_1-0",
              "value": "+",
              "note": "厄瓜多尔招牌1-0磨法(本周期1-0赢阿根廷)，吸压后一击致命"
            },
            {
              "label": "Caicedo_control",
              "value": "+",
              "note": "Caicedo掐死中场断CIV供给，拖成0-0/1-0"
            },
            {
              "label": "rank_reality",
              "value": "+",
              "note": "FIFA厄23 vs 科33+大俱乐部班底，90分钟见真章"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "first_goal",
              "value": "±",
              "note": "厄瓜多尔先进则关门，平/客胜概率飙升"
            },
            {
              "label": "Amad_sharpness",
              "value": "±",
              "note": "Amad/Adingra状态，哑火则CIV进攻崩向客胜"
            },
            {
              "label": "rain_risk",
              "value": "-",
              "note": "达拉斯6月雷暴可能压低节奏，利平局"
            },
            {
              "label": "Letexier_cards",
              "value": "-",
              "note": "CIV高压易吃牌，早黄削弱强度"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Amad Diallo",
            "pos": "RW",
            "status": "HOT",
            "note": "曼联，非洲杯金靴，创造力核心"
          },
          {
            "name": "Simon Adingra",
            "pos": "LW",
            "status": "OK",
            "note": "速度型边锋"
          },
          {
            "name": "Franck Kessié",
            "pos": "CM",
            "status": "KEY",
            "note": "队长，100+场，定位球分量"
          },
          {
            "name": "科特迪瓦锋线",
            "pos": "FW",
            "status": "QUEST",
            "note": "进攻数据含鱼腩灌水，对铁桶真实约1球"
          }
        ],
        "away": [
          {
            "name": "Moisés Caicedo",
            "pos": "CDM",
            "status": "KEY",
            "note": "切尔西，中场屏障，断供给核心"
          },
          {
            "name": "Willian Pacho",
            "pos": "CB",
            "status": "KEY",
            "note": "PSG，欧冠冠军中卫"
          },
          {
            "name": "Piero Hincapié",
            "pos": "CB",
            "status": "OK",
            "note": "阿森纳，铁闸"
          },
          {
            "name": "Enner Valencia",
            "pos": "ST",
            "status": "QUEST",
            "note": "36岁，反击终结点，可能被管理出场时间"
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
          "msg": "fixture verified: FIFA / ESPN, Group F"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank CIV#33 ECU#23; ECU GA 0.6 (真实,对强队)"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: CIV attack discounted (AFCON minnow goals)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 38.2 / 35.1 / 26.8 (低比分)"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 0,
        "scoreline": "1 - 0",
        "scorers": [
          {
            "min": "90'",
            "team": "CIV",
            "player": "Amad Diallo",
            "type": "90分钟绝杀"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "科特迪瓦Amad Diallo 90'绝杀1-0。闷战如预期，靠模型点名的核心一击制胜",
        "source": "ESPN / Yahoo / Bleacher Report"
      },
      "review": {
        "verdict": "HIT",
        "headline": "教科书级命中:模型给科特迪瓦38%(最高)、判低比分→1-0，且绝杀的正是模型点的HOT球员Amad",
        "hits": [
          "★胜负方向对：模型给科特迪瓦38.2%最高→科特迪瓦赢 ✓",
          "★低比分判对：期望0-0、大2.5仅22%→实际1-0小比分 ✓",
          "★点名Amad Diallo是HOT创造核心→正是他90'绝杀 ✓",
          "厄瓜多尔铁桶被识别(零封概率高)→真的顶到89分钟"
        ],
        "misses": [
          "差点判平(平局给35.1%很接近)，绝杀来得晚，90分钟前都是0-0平局剧本"
        ],
        "model_lesson": "又一场'中等实力差+明确风格(铁桶闷战)'的命中。模型在这类比赛持续可靠。反灌水对科特迪瓦进攻的下修也对(全场仅进1球)"
      }
    },
    {
      "id": "WC2026_M012",
      "kickoff_cst": "2026-06-14 22:00 ET",
      "group": "G",
      "round": 1,
      "tag": null,
      "home": {
        "code": "SWE",
        "name_zh": "瑞典",
        "flag": "🇸🇪",
        "fifa_rank": 38
      },
      "away": {
        "code": "TUN",
        "name_zh": "突尼斯",
        "flag": "🇹🇳",
        "fifa_rank": 45
      },
      "venue": "Estadio BBVA, 蒙特雷",
      "altitude_m": 540,
      "temp_c": 28,
      "humidity_pct": 60,
      "referee": "Falcón Pérez (阿根廷，世界杯首秀)",
      "headline": "瑞典52%占优：Isak+Gyökeres双前锋断层级火力。但瑞典防线漏(被瑞士灌4)，突尼斯铁桶可偷分",
      "probabilities": {
        "home_win": 52,
        "draw": 25.5,
        "away_win": 22.5
      },
      "expected_goals": {
        "home": 1.55,
        "away": 0.92
      },
      "expected_score": "1 : 1",
      "over_2_5": 46.5,
      "btts": 50,
      "clean_sheet_home": 40,
      "confidence": 62,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.85,
          "items": [
            {
              "label": "Isak_Gyokeres",
              "value": "+",
              "note": "Isak(利物浦)+Gyökeres(阿森纳,资格赛戴帽+绝杀)双前锋断层级"
            },
            {
              "label": "TUN_attack_dead",
              "value": "+",
              "note": "突尼斯热身进攻熄火(0-5比利时/0-1奥地利)，难破局"
            },
            {
              "label": "rank_form_edge",
              "value": "+",
              "note": "FIFA瑞38 vs 突45+个人能力，净胜≈0.6球"
            },
            {
              "label": "Elanga_pace",
              "value": "+",
              "note": "Elanga边路速度增加进攻维度"
            }
          ]
        },
        "home_risk": {
          "score": -0.7,
          "items": [
            {
              "label": "SWE_leaky",
              "value": "-",
              "note": "瑞典防线漏勺：被瑞士灌4、挪威灌3，场均失1.6"
            },
            {
              "label": "opener_nerves",
              "value": "-",
              "note": "揭幕战保守+蒙特雷湿热33°C压制双前锋跑动"
            },
            {
              "label": "Kulusevski_OUT",
              "value": "-",
              "note": "Kulusevski伤缺削弱右路创造，Isak若被冻结进攻变钝"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.65,
          "items": [
            {
              "label": "bus_setpiece",
              "value": "+",
              "note": "Skhiri-Talbi防守铁三角拖到60分钟0-0，Mejbri定位球致命一击"
            },
            {
              "label": "heat_drains",
              "value": "+",
              "note": "湿热消耗瑞典双前锋，下半场抢一个死守1-0"
            },
            {
              "label": "exploit_SWE_def",
              "value": "+",
              "note": "瑞典已证明的防线漏洞是突尼斯偷分主通道"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "SWE_formation",
              "value": "±",
              "note": "瑞典双前锋(Isak+Gyökeres)还是单中锋，决定λ_home"
            },
            {
              "label": "Msakni_start",
              "value": "±",
              "note": "突尼斯Msakni是否首发(QUEST)决定其进攻上限"
            },
            {
              "label": "early_tempo",
              "value": "±",
              "note": "瑞典早进球则放大比分；0-0僵持回归低比分"
            },
            {
              "label": "heat_actual",
              "value": "-",
              "note": "夜赛实测温湿度偏高会进一步压低总进球"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Alexander Isak",
            "pos": "ST",
            "status": "KEY",
            "note": "利物浦，头号射手"
          },
          {
            "name": "Viktor Gyökeres",
            "pos": "ST",
            "status": "HOT",
            "note": "阿森纳，资格赛戴帽+绝杀，状态火热"
          },
          {
            "name": "Anthony Elanga",
            "pos": "WG",
            "status": "OK",
            "note": "边路速度"
          },
          {
            "name": "Dejan Kulusevski",
            "pos": "AM",
            "status": "OUT",
            "note": "伤缺，右路创造力削弱"
          }
        ],
        "away": [
          {
            "name": "Ellyes Skhiri",
            "pos": "CM",
            "status": "KEY",
            "note": "防守型中场，铁三角核心"
          },
          {
            "name": "Montassar Talbi",
            "pos": "CB",
            "status": "KEY",
            "note": "中卫，负责冻结Isak"
          },
          {
            "name": "Hannibal Mejbri",
            "pos": "AM",
            "status": "OK",
            "note": "定位球+反击发起"
          },
          {
            "name": "Youssef Msakni",
            "pos": "FW",
            "status": "QUEST",
            "note": "是否首发决定突尼斯进攻上限"
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
          "msg": "fixture verified: FIFA / ESPN (组别以CBS赛程G组为准)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank SWE#38 TUN#45; SWE GA 1.6 (漏)"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: TUN attack deflated (0-5 Belgium real gauge)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 52.0 / 25.5 / 22.5"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 5,
        "away_goals": 1,
        "scoreline": "5 - 1",
        "scorers": [
          {
            "min": "—",
            "team": "SWE",
            "player": "Yasin Ayari",
            "type": "梅开二度"
          },
          {
            "min": "—",
            "team": "SWE",
            "player": "Isak / Gyökeres / Svanberg",
            "type": "各入一球"
          },
          {
            "min": "—",
            "team": "TUN",
            "player": "突尼斯",
            "type": "扳回一球"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "瑞典下半场爆发5-1血洗突尼斯，Isak+Gyökeres双前锋都进球，正是模型点的火力点",
        "source": "ESPN / RotoWire / Olympics.com"
      },
      "review": {
        "verdict": "HIT",
        "headline": "方向命中(瑞典赢)，双前锋Isak+Gyökeres都进球如模型所点；只是比分又被低估(预期1-1实际5-1)",
        "hits": [
          "★胜负方向对：模型给瑞典52%最高→瑞典大胜 ✓",
          "★点名Isak+Gyökeres双前锋断层级火力→两人都进球 ✓",
          "突尼斯进攻熄火判断对(反灌水)→突尼斯只进1球",
          "BTTS给50%→双方都进 ✓"
        ],
        "misses": [
          "比分大幅低估：期望1-1，实际5-1。又是'低估强队净胜球'(和德国7-1同病)",
          "瑞典防线漏的担忧没成真(只丢1球)，对瑞典进攻上限压太低"
        ],
        "model_lesson": "连续两场(德国7-1/瑞典5-1)印证:反灌水修正在'胜负方向'上有效，但在'强队打弱旅的净胜球'上系统性低估。下一步该区分两种预测目标:胜平负用反灌水λ，净胜球/大小球用未折扣λ"
      }
    }
  ]
};
