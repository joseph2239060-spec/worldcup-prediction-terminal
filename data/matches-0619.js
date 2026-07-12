// 世界杯预测数据 - 2026-06-19
// ★诚实声明:概率=48家盘口去水隐含概率为基准 + 人工按真实因素小幅调整,非蒙特卡洛/非模型自动算;
//   比分/盘口/排名/伤停/场馆/天气 均为查证过的真数据。预测判断会错,但不掺假数字。
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-19"] = {
  "date": "2026-06-19",
  "tournament": "FIFA World Cup 2026 · MD2（⚠️事后回填预测）",
  "model_version": "预测法:48家庄家盘口(The Odds API)去水后市场隐含概率为基准 + 按真实因素(伤停/主客场/高原/天气/停赛)人工小幅调整 · ★非蒙特卡洛、非模型自动计算,概率含人工判断",
  "model_accuracy_7d": null,
  "data_note": "⚠️事后回填:无真实赛前记录,不计入盲测战绩;预测用赛前因素生成 ｜ ⚠️诚实:概率=盘口锚定+人工判断,非模型算出;比分/盘口/排名/伤停/天气均查证",
  "matches": [
    {
      "id": "WC2026_M028",
      "kickoff_cst": "2026-06-19 12:00 ET",
      "group": "C",
      "round": 2,
      "tag": null,
      "home": {
        "code": "SCO",
        "name_zh": "苏格兰",
        "flag": "🏴",
        "fifa_rank": 37
      },
      "away": {
        "code": "MAR",
        "name_zh": "摩洛哥",
        "flag": "🇲🇦",
        "fifa_rank": 7
      },
      "venue": "Gillette Stadium, 福克斯堡",
      "altitude_m": 28,
      "temp_c": 26,
      "humidity_pct": 60,
      "referee": "Tantashev",
      "headline": "摩洛哥55.6%（客场favorite）：非洲杯卫冕冠军+苏格兰后防伤兵告急。模型站摩洛哥",
      "probabilities": {
        "home_win": 21.3,
        "draw": 23.1,
        "away_win": 55.6
      },
      "expected_goals": {
        "home": 1.02,
        "away": 1.8
      },
      "expected_score": "1 : 2",
      "over_2_5": 53.3,
      "btts": 53.2,
      "clean_sheet_home": 16.5,
      "confidence": 62,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.4,
          "items": [
            {
              "label": "setpiece",
              "value": "+",
              "note": "McGinn/McTominay定位球+反击是苏格兰唯一现实路径"
            },
            {
              "label": "MD1_clean",
              "value": "+",
              "note": "MD1 1-0小胜海地,能死守低比分"
            },
            {
              "label": "ref_loose",
              "value": "±",
              "note": "主裁首执世界杯,若放任对抗利苏格兰拼抢"
            }
          ]
        },
        "home_risk": {
          "score": -1.2,
          "items": [
            {
              "label": "Hickey_OUT",
              "value": "-",
              "note": "右后卫Hickey大概率缺阵+McKenna存疑→Hakimi右路猛攻"
            },
            {
              "label": "Gilmour_OUT",
              "value": "-",
              "note": "中场核心Gilmour赛季报销,控球出球缺失"
            },
            {
              "label": "no_striker",
              "value": "-",
              "note": "缺顶级前锋,落后难翻盘,零封自己仅16.5%"
            }
          ]
        },
        "away_upset_path": {
          "score": 1.45,
          "items": [
            {
              "label": "MAR_AFCON",
              "value": "+",
              "note": "非洲杯卫冕冠军,近9场7胜2平不败,失球~0.3"
            },
            {
              "label": "Hakimi_Diaz",
              "value": "+",
              "note": "Hakimi+Brahim Díaz+Saibari火热,打苏格兰残破右路"
            },
            {
              "label": "real_def",
              "value": "+",
              "note": "摩洛哥防守真材实料(MD1逼平巴西),反灌水后λ仍1.8"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "SCO_backline",
              "value": "±",
              "note": "Hickey/McKenna是否双缺,缺则摩洛哥λ再上调"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "苏格兰早进球才有死守爆冷的可能"
            },
            {
              "label": "MAR_rotation",
              "value": "±",
              "note": "摩洛哥1平需胜,大概率全力出击"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Scott McTominay",
            "pos": "CM",
            "status": "KEY",
            "note": "进攻中场,定位球"
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
            "note": "赛季报销,中场控制缺失"
          },
          {
            "name": "Aaron Hickey",
            "pos": "RB",
            "status": "OUT",
            "note": "右后卫缺阵,Hakimi猛攻区"
          }
        ],
        "away": [
          {
            "name": "Achraf Hakimi",
            "pos": "RB",
            "status": "HOT",
            "note": "攻防一体,打苏格兰残破右路"
          },
          {
            "name": "Brahim Díaz",
            "pos": "AM",
            "status": "HOT",
            "note": "线间杀手"
          },
          {
            "name": "Ismael Saibari",
            "pos": "AM",
            "status": "OK",
            "note": "MD1对巴西进球"
          },
          {
            "name": "Yassine Bounou",
            "pos": "GK",
            "status": "KEY",
            "note": "门神"
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
          "msg": "⚠️ backfill prediction (事后回填,非盲测)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank SCO#37 MAR#7"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 21.3 / 23.1 / 55.6"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 0,
        "away_goals": 1,
        "scoreline": "0 - 1",
        "scorers": [
          {
            "min": "—",
            "team": "MAR",
            "player": "摩洛哥",
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
        "key_moment": "摩洛哥0-1小胜苏格兰。回填模型选摩洛哥(55.6%)=对",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "（回填）方向命中：模型站客场favorite摩洛哥(55.6%)→摩洛哥1-0赢。苏格兰伤兵+摩洛哥质量的判断对",
        "hits": [
          "胜负方向对：摩洛哥55.6%最高→赢 ✓",
          "低比分判断对(0-1)",
          "苏格兰后防伤兵被Hakimi打的逻辑成立"
        ],
        "misses": [
          "⚠️这是事后回填,不算真实盲测命中"
        ],
        "model_lesson": "回填看,v1.4在'强队+对手伤病'类判断稳。但因是事后,仅供参考"
      }
    },
    {
      "id": "WC2026_M029",
      "kickoff_cst": "2026-06-19 15:00 ET",
      "group": "C",
      "round": 2,
      "tag": null,
      "home": {
        "code": "BRA",
        "name_zh": "巴西",
        "flag": "🇧🇷",
        "fifa_rank": 6
      },
      "away": {
        "code": "HAI",
        "name_zh": "海地",
        "flag": "🇭🇹",
        "fifa_rank": 85
      },
      "venue": "MetLife Stadium, 新泽西",
      "altitude_m": 7,
      "temp_c": 28,
      "humidity_pct": 70,
      "referee": "未公布",
      "headline": "巴西76.4%：全届最大排名差(6 vs 85)。Vinícius火热,海地只能靠门将Placide死守",
      "probabilities": {
        "home_win": 76.4,
        "draw": 16,
        "away_win": 7.6
      },
      "expected_goals": {
        "home": 2.3,
        "away": 0.57
      },
      "expected_score": "2 : 0",
      "over_2_5": 54.3,
      "btts": 39,
      "clean_sheet_home": 56.6,
      "confidence": 78,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1.8,
          "items": [
            {
              "label": "rank_gap_79",
              "value": "+",
              "note": "FIFA 6 vs 85,全届最大差;Opta超算给巴西~87%"
            },
            {
              "label": "Vini_hot",
              "value": "+",
              "note": "Vinícius火热(MD1对摩洛哥扳平),Raphinha两翼"
            },
            {
              "label": "midfield",
              "value": "+",
              "note": "Casemiro+Bruno Guimarães中场territory碾压"
            },
            {
              "label": "must_win",
              "value": "+",
              "note": "MD1平摩洛哥后需取胜保组头"
            }
          ]
        },
        "home_risk": {
          "score": -0.5,
          "items": [
            {
              "label": "Neymar_OUT",
              "value": "-",
              "note": "Neymar缺阵+可能轮换,慢热风险"
            },
            {
              "label": "storm",
              "value": "-",
              "note": "84%雷暴,湿滑场地降低终结质量"
            },
            {
              "label": "Placide_block",
              "value": "-",
              "note": "海地老门将Placide+铁桶,首球延误则1-0紧张"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.3,
          "items": [
            {
              "label": "Placide_MOTM",
              "value": "+",
              "note": "Placide神勇守成0-0僵局"
            },
            {
              "label": "Isidor_counter",
              "value": "+",
              "note": "Isidor(桑德兰)反击是海地唯一现实进球点"
            },
            {
              "label": "storm_chaos",
              "value": "+",
              "note": "雷暴湿地加方差(但巴西胜率仍76%)"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "BRA_rotation",
              "value": "±",
              "note": "巴西轮换程度+Neymar最终状态"
            },
            {
              "label": "storm",
              "value": "-",
              "note": "雷暴是否落地影响节奏"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "早进球则3-0+,延误则压2-0/1-0"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Vinícius Júnior",
            "pos": "LW",
            "status": "HOT",
            "note": "MD1扳平,头号点"
          },
          {
            "name": "Raphinha",
            "pos": "RW",
            "status": "KEY",
            "note": "右翼"
          },
          {
            "name": "Casemiro",
            "pos": "CDM",
            "status": "OK",
            "note": "中场拦截"
          },
          {
            "name": "Neymar",
            "pos": "AM",
            "status": "OUT",
            "note": "缺阵"
          }
        ],
        "away": [
          {
            "name": "Johny Placide",
            "pos": "GK",
            "status": "KEY",
            "note": "~84场老门将,死守指望"
          },
          {
            "name": "Wilson Isidor",
            "pos": "ST",
            "status": "OK",
            "note": "桑德兰,唯一现实进球点"
          },
          {
            "name": "Frantzdy Pierrot",
            "pos": "ST",
            "status": "OK",
            "note": "支点"
          },
          {
            "name": "海地后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "深位铁桶,失球~1.4"
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
          "msg": "⚠️ backfill prediction (事后回填,非盲测)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank BRA#6 HAI#85; Opta 87%"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 76.4 / 16.0 / 7.6"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 3,
        "away_goals": 0,
        "scoreline": "3 - 0",
        "scorers": [
          {
            "min": "—",
            "team": "BRA",
            "player": "巴西(3球)",
            "type": "Vinícius领衔"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "巴西3-0完胜海地。回填模型选巴西(76.4%)=对,进球λ2.3也接近(实际3)",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "（回填）方向命中：巴西76.4%→3-0完胜。进球λ2.3比之前的钝刀准多了(实际3球)",
        "hits": [
          "胜负方向对：巴西76.4%→赢 ✓",
          "★进球λ修正见效：给巴西2.3(实际3),不再像之前压到1球"
        ],
        "misses": [
          "⚠️事后回填,不算盲测"
        ],
        "model_lesson": "回填印证:对手门槛+双λ后,强队打弱旅的λ终于合理(巴西2.3),不再低估净胜球"
      }
    },
    {
      "id": "WC2026_M030",
      "kickoff_cst": "2026-06-19 18:00 ET",
      "group": "D",
      "round": 2,
      "tag": null,
      "home": {
        "code": "USA",
        "name_zh": "美国",
        "flag": "🇺🇸",
        "fifa_rank": 17
      },
      "away": {
        "code": "AUS",
        "name_zh": "澳大利亚",
        "flag": "🇦🇺",
        "fifa_rank": 27
      },
      "venue": "Lumen Field, 西雅图",
      "altitude_m": 5,
      "temp_c": 24,
      "humidity_pct": 55,
      "referee": "Felix Zwayer",
      "headline": "美国56%：主场+MD1 4-1大胜巴拉圭。但Pulisic缺阵+多人黄牌临界，澳洲5-4-1反击能搅",
      "probabilities": {
        "home_win": 56,
        "draw": 23.5,
        "away_win": 20.3
      },
      "expected_goals": {
        "home": 1.75,
        "away": 0.95
      },
      "expected_score": "2 : 1",
      "over_2_5": 50.4,
      "btts": 50.5,
      "clean_sheet_home": 38.6,
      "confidence": 64,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.9,
          "items": [
            {
              "label": "home_form",
              "value": "+",
              "note": "主场Lumen+MD1 4-1大胜巴拉圭,火力(~2.1)高于澳洲"
            },
            {
              "label": "Balogun_hot",
              "value": "+",
              "note": "Balogun热状态+Pepi顶替,波切蒂诺体系火力足"
            },
            {
              "label": "h2h",
              "value": "+",
              "note": "2025-10友谊赛美国2-1胜澳洲,对位占优"
            },
            {
              "label": "AUS_low_output",
              "value": "+",
              "note": "澳洲5-4-1失球少但进攻产出低,客场更保守"
            }
          ]
        },
        "home_risk": {
          "score": -0.75,
          "items": [
            {
              "label": "Pulisic_OUT",
              "value": "-",
              "note": "★普利西奇缺阵,左路创造+定位球点缺失,破密集防守效率降"
            },
            {
              "label": "yellow_cards",
              "value": "-",
              "note": "Adams/Robinson/Balogun/Richards黄牌停赛边缘,踢得保守"
            },
            {
              "label": "Irankunda",
              "value": "-",
              "note": "澳洲Irankunda速度反击一击致命(BTTS 50%)"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            {
              "label": "park_bus_60",
              "value": "+",
              "note": "5-4-1顶住前60分钟,靠转换/定位球偷分"
            },
            {
              "label": "USA_no_Pulisic",
              "value": "+",
              "note": "美国无普利西奇进攻钝化,久攻不下压上失衡"
            },
            {
              "label": "counter",
              "value": "+",
              "note": "Irankunda/Metcalfe反击或角球抓机会"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Pulisic_replace",
              "value": "±",
              "note": "谁顶普利西奇的创造位"
            },
            {
              "label": "yellow_mgmt",
              "value": "-",
              "note": "美国为保R32黄牌管理影响逼抢强度"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "美国早进球则澳洲压出,大球升"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Folarin Balogun",
            "pos": "ST",
            "status": "HOT",
            "note": "MD1梅开二度"
          },
          {
            "name": "Ricardo Pepi",
            "pos": "ST",
            "status": "OK",
            "note": "顶替轮换"
          },
          {
            "name": "Christian Pulisic",
            "pos": "LW",
            "status": "OUT",
            "note": "★缺阵,创造核心"
          },
          {
            "name": "Tyler Adams",
            "pos": "CM",
            "status": "QUEST",
            "note": "黄牌停赛边缘"
          }
        ],
        "away": [
          {
            "name": "Nestory Irankunda",
            "pos": "WG",
            "status": "KEY",
            "note": "速度反击,MD1对土耳其进球"
          },
          {
            "name": "Connor Metcalfe",
            "pos": "CM",
            "status": "OK",
            "note": "MD1进球"
          },
          {
            "name": "Harry Souttar",
            "pos": "CB",
            "status": "OK",
            "note": "防空"
          },
          {
            "name": "Maty Ryan",
            "pos": "GK",
            "status": "KEY",
            "note": "门将"
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
          "msg": "⚠️ backfill prediction (事后回填,非盲测)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank USA#17 AUS#27; H2H USA 2-1"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 56.0 / 23.5 / 20.3"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 2,
        "away_goals": 0,
        "scoreline": "2 - 0",
        "scorers": [
          {
            "min": "—",
            "team": "USA",
            "player": "美国(2球)",
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
        "key_moment": "美国2-0澳洲,无普利西奇照样拿下。回填模型选美国(56%)=对",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "（回填）方向命中：美国56%→2-0。缺普利西奇仍赢,且零封(模型给零封38.6%偏低,实际守住)",
        "hits": [
          "胜负方向对：美国56%→赢 ✓",
          "期望比分2:1接近实际2-0",
          "澳洲反击没兑现,美国防住"
        ],
        "misses": [
          "⚠️事后回填",
          "略低估美国零封能力"
        ],
        "model_lesson": "回填命中。美国是这届模型偏爱的队(主场+火力),三场预测都对方向"
      }
    },
    {
      "id": "WC2026_M031",
      "kickoff_cst": "2026-06-19 21:00 ET",
      "group": "D",
      "round": 2,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "TUR",
        "name_zh": "土耳其",
        "flag": "🇹🇷",
        "fifa_rank": 22
      },
      "away": {
        "code": "PAR",
        "name_zh": "巴拉圭",
        "flag": "🇵🇾",
        "fifa_rank": 41
      },
      "venue": "BC Place, 温哥华",
      "altitude_m": 0,
      "temp_c": 22,
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "今日最焦灼：土耳其39.5/平28/巴拉圭32.5，几乎三选一。模型微弱选土耳其",
      "probabilities": {
        "home_win": 39.5,
        "draw": 28,
        "away_win": 32.5
      },
      "expected_goals": {
        "home": 1.35,
        "away": 1.2
      },
      "expected_score": "1 : 1",
      "over_2_5": 46.9,
      "btts": 51.7,
      "clean_sheet_home": 30.1,
      "confidence": 52,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.55,
          "items": [
            {
              "label": "Guler",
              "value": "+",
              "note": "Güler(皇马)创造力,土耳其纸面更强"
            },
            {
              "label": "must_win",
              "value": "+",
              "note": "土耳其MD1负澳洲,本场必须取胜"
            },
            {
              "label": "rank_22_vs_41",
              "value": "+",
              "note": "排名占优,但差距不大"
            }
          ]
        },
        "home_risk": {
          "score": -0.8,
          "items": [
            {
              "label": "PAR_elite_def",
              "value": "-",
              "note": "巴拉圭铁桶,Gustavo Gómez领衔,预选失球少"
            },
            {
              "label": "TUR_MD1_loss",
              "value": "-",
              "note": "土耳其MD1 0-2负澳洲,信心+进攻存疑"
            },
            {
              "label": "Almiron_counter",
              "value": "-",
              "note": "巴拉圭Almirón反击速度威胁"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.7,
          "items": [
            {
              "label": "deep_block",
              "value": "+",
              "note": "巴拉圭低位铁桶+反击,专磨"
            },
            {
              "label": "TUR_pressure",
              "value": "+",
              "note": "土耳其必胜压力下易急躁失衡"
            },
            {
              "label": "Sanabria",
              "value": "+",
              "note": "Sanabria反击终结"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "TUR_attack",
              "value": "±",
              "note": "土耳其能否打破巴拉圭铁桶=胜负关键"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "巴拉圭先进则关门死守"
            },
            {
              "label": "cards",
              "value": "-",
              "note": "对抗激烈,红牌风险偏高"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Arda Güler",
            "pos": "AM",
            "status": "KEY",
            "note": "皇马,创造核心"
          },
          {
            "name": "Kerem Aktürkoğlu",
            "pos": "WG",
            "status": "OK",
            "note": "边路"
          },
          {
            "name": "Hakan Çalhanoğlu",
            "pos": "CM",
            "status": "QUEST",
            "note": "国米,伤情存疑"
          },
          {
            "name": "土耳其锋线",
            "pos": "FW",
            "status": "QUEST",
            "note": "MD1 0-2哑火"
          }
        ],
        "away": [
          {
            "name": "Gustavo Gómez",
            "pos": "CB",
            "status": "KEY",
            "note": "队长,铁桶核心"
          },
          {
            "name": "Miguel Almirón",
            "pos": "RW",
            "status": "KEY",
            "note": "反击速度"
          },
          {
            "name": "Antonio Sanabria",
            "pos": "ST",
            "status": "OK",
            "note": "反击终结"
          },
          {
            "name": "Julio Enciso",
            "pos": "AM",
            "status": "OK",
            "note": "创造力"
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
          "msg": "⚠️ backfill prediction (事后回填,非盲测)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank TUR#22 PAR#41"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "三选一接近(39.5/28/32.5),低置信度52%"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 39.5 / 28.0 / 32.5"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 0,
        "away_goals": 1,
        "scoreline": "0 - 1",
        "scorers": [
          {
            "min": "—",
            "team": "PAR",
            "player": "巴拉圭",
            "type": "铁桶+反击1-0"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "巴拉圭0-1小胜土耳其。回填模型微弱选土耳其(39.5%)=错,巴拉圭铁桶赢了",
        "source": "ESPN"
      },
      "review": {
        "verdict": "MISS",
        "headline": "（回填）方向失手：模型微弱选土耳其(39.5%)，巴拉圭1-0赢。但这本就是模型标的'最接近、低置信52%'比赛",
        "hits": [
          "★诚实标了低置信(52%)+三选一接近→没有过度自信",
          "away_upset_path'巴拉圭铁桶+反击偷分'→正是发生的",
          "低比分判断对(0-1)"
        ],
        "misses": [
          "方向选了土耳其,实际巴拉圭赢",
          "⚠️事后回填"
        ],
        "model_lesson": "这种52%置信的三选一,新框架本就该说'五五开别重注'。巴拉圭(像沙特/乌拉圭那样)又是铁桶磨赢——防守型球队的爆冷模型仍难抓"
      }
    }
  ]
};
