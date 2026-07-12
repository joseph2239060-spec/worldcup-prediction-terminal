// 世界杯预测数据 - 2026-06-20
// ★诚实声明:概率=48家盘口去水隐含概率为基准 + 人工按真实因素小幅调整,非蒙特卡洛/非模型自动算;
//   比分/盘口/排名/伤停/场馆/天气 均为查证过的真数据。预测判断会错,但不掺假数字。
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-20"] = {
  "date": "2026-06-20",
  "tournament": "FIFA World Cup 2026 · E/F组 MD2（⚠️回填）",
  "model_version": "预测法:48家庄家盘口(The Odds API)去水后市场隐含概率为基准 + 按真实因素(伤停/主客场/高原/天气/停赛)人工小幅调整 · ★非蒙特卡洛、非模型自动计算,概率含人工判断",
  "model_accuracy_7d": null,
  "data_note": "⚠️事后回填,不计盲测;v1.4(对手门槛+不看衰强队+双λ) ｜ ⚠️诚实:概率=盘口锚定+人工判断,非模型算出;比分/盘口/排名/伤停/天气均查证",
  "matches": [
    {
      "id": "WC2026_M032",
      "kickoff_cst": "2026-06-20 12:00 ET",
      "group": "E",
      "round": 2,
      "tag": null,
      "home": {
        "code": "GER",
        "name_zh": "德国",
        "flag": "🇩🇪",
        "fifa_rank": 10
      },
      "away": {
        "code": "CIV",
        "name_zh": "科特迪瓦",
        "flag": "🇨🇮",
        "fifa_rank": 33
      },
      "venue": "BMO Field, 多伦多",
      "altitude_m": 76,
      "temp_c": 24,
      "humidity_pct": 55,
      "referee": "Benítez",
      "headline": "德国58.1%：进攻深度碾压，但德国连续7场世界杯丢球，科特迪瓦反击+Amad是真威胁",
      "probabilities": {
        "home_win": 58.1,
        "draw": 21.8,
        "away_win": 20
      },
      "expected_goals": {
        "home": 1.95,
        "away": 1.05
      },
      "expected_score": "2 : 1",
      "over_2_5": 57.5,
      "btts": 55.7,
      "clean_sheet_home": 35,
      "confidence": 61,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.2,
          "items": [
            {
              "label": "rank_10_vs_33",
              "value": "+",
              "note": "Havertz火热+Wirtz创造+Musiala,进攻核心碾压中游防线"
            },
            {
              "label": "anti_padding",
              "value": "+",
              "note": "7-1库拉索反灌水后德国λ仍1.95,净优势0.9"
            },
            {
              "label": "neutral_control",
              "value": "+",
              "note": "中立场,Nagelsmann控球控节奏"
            }
          ]
        },
        "home_risk": {
          "score": -0.8,
          "items": [
            {
              "label": "GER_leaky",
              "value": "-",
              "note": "连续7场世界杯丢球,2014后无零封,零封仅35%"
            },
            {
              "label": "CIV_real_attack",
              "value": "-",
              "note": "科特迪瓦攻击非鱼腩(2-1法国/MD1绝杀厄瓜多尔),BTTS 56%"
            },
            {
              "label": "Musiala_sharp",
              "value": "-",
              "note": "Musiala伤愈状态+知道出线在望可能轮换"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.7,
          "items": [
            {
              "label": "Amad_counter",
              "value": "+",
              "note": "Amad(非洲杯金靴,绝杀厄瓜多尔)打德国高位反击"
            },
            {
              "label": "deep_block",
              "value": "+",
              "note": "复刻零封厄瓜多尔的铁桶+德国丢球惯性"
            },
            {
              "label": "Kessie_physical",
              "value": "+",
              "note": "Kessie中场对抗破坏德国节奏"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Musiala_start",
              "value": "±",
              "note": "Musiala首发还是轮换"
            },
            {
              "label": "early_goal",
              "value": "±",
              "note": "科特迪瓦先进则德国丢球惯性放大冷门"
            },
            {
              "label": "Kessie_card",
              "value": "-",
              "note": "Kessie黄牌临界,再吃则停赛"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Kai Havertz",
            "pos": "ST",
            "status": "HOT",
            "note": "前一场梅开二度"
          },
          {
            "name": "Florian Wirtz",
            "pos": "AM",
            "status": "KEY",
            "note": "组织核心"
          },
          {
            "name": "Jamal Musiala",
            "pos": "AM",
            "status": "QUEST",
            "note": "伤愈状态待考"
          },
          {
            "name": "德国后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "连7场世界杯丢球"
          }
        ],
        "away": [
          {
            "name": "Amad Diallo",
            "pos": "RW",
            "status": "HOT",
            "note": "非洲杯金靴,绝杀厄瓜多尔"
          },
          {
            "name": "Franck Kessié",
            "pos": "CM",
            "status": "KEY",
            "note": "中场对抗,黄牌临界"
          },
          {
            "name": "Simon Adingra",
            "pos": "WG",
            "status": "OK",
            "note": "速度反击"
          },
          {
            "name": "Yan Diomande",
            "pos": "FW",
            "status": "OK",
            "note": "反击点"
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
          "msg": "⚠️ backfill (事后回填,非盲测)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank GER#10 CIV#33"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 58.1 / 21.8 / 20.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 2,
        "away_goals": 1,
        "scoreline": "2 - 1",
        "scorers": [
          {
            "min": "90+",
            "team": "GER",
            "player": "Deniz Undav",
            "type": "替补绝杀梅开二度"
          },
          {
            "min": "—",
            "team": "CIV",
            "player": "科特迪瓦",
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
        "key_moment": "德国2-1科特迪瓦,替补Undav读秒绝杀。回填模型期望比分2-1=精准命中",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "（回填）期望比分2-1精准命中：德国2-1险胜。模型也说中了科特迪瓦攻击是真威胁(进了1球)、德国丢球惯性",
        "hits": [
          "胜负方向对：德国58.1%最高→赢 ✓",
          "★期望比分2-1=实际2-1,完全命中",
          "BTTS判对(双方都进)",
          "德国零封仅35%判对(确实丢球)"
        ],
        "misses": [
          "⚠️事后回填"
        ],
        "model_lesson": "回填看v1.4在'强队vs有反击的中游队'判断很准:既给德国favorite,又预留了对手进球空间"
      }
    },
    {
      "id": "WC2026_M033",
      "kickoff_cst": "2026-06-20 15:00 ET",
      "group": "E",
      "round": 2,
      "tag": null,
      "home": {
        "code": "ECU",
        "name_zh": "厄瓜多尔",
        "flag": "🇪🇨",
        "fifa_rank": 29
      },
      "away": {
        "code": "CUW",
        "name_zh": "库拉索",
        "flag": "🇨🇼",
        "fifa_rank": 83
      },
      "venue": "Arrowhead Stadium, 堪萨斯城",
      "altitude_m": 270,
      "temp_c": 33,
      "humidity_pct": 55,
      "referee": "马宁(中)",
      "headline": "厄瓜多尔78%：实力+铁防碾压。但厄瓜多尔是grinder型(进攻效率低),库拉索摆大巴+老门将Room能搅",
      "probabilities": {
        "home_win": 78,
        "draw": 14.3,
        "away_win": 6.4
      },
      "expected_goals": {
        "home": 2.45,
        "away": 0.55
      },
      "expected_score": "2 : 0",
      "over_2_5": 56.4,
      "btts": 38.1,
      "clean_sheet_home": 57,
      "confidence": 76,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.7,
          "items": [
            {
              "label": "rank_29_vs_83",
              "value": "+",
              "note": "差54位;Ecuador1.2进球对强敌全额保留,迁到rank83防线λ抬到2.45"
            },
            {
              "label": "CUW_leaky",
              "value": "-对手",
              "note": "库拉索被德国灌7,场均失~3.6,全额计入崩盘"
            },
            {
              "label": "ECU_def",
              "value": "+",
              "note": "Hincapié+Pacho+Caicedo顶级后防,零封57%"
            }
          ]
        },
        "home_risk": {
          "score": -0.6,
          "items": [
            {
              "label": "ECU_grinder",
              "value": "-",
              "note": "厄瓜多尔进攻效率低,常0-0/1-0,早领先可能收兵压低比分"
            },
            {
              "label": "Room_GK",
              "value": "-",
              "note": "库拉索37岁门将Room+摆大巴可压成1-0甚至0-0"
            },
            {
              "label": "heat",
              "value": "-",
              "note": "33°C酷热+补水暂停打碎节奏利弱旅"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.2,
          "items": [
            {
              "label": "Room_MOTM",
              "value": "+",
              "note": "Room封神+ECU低转化→冷平"
            },
            {
              "label": "Bacuna_counter",
              "value": "+",
              "note": "Bacuna兄弟反击偷一球"
            },
            {
              "label": "historic_point",
              "value": "+",
              "note": "库拉索拿1分即历史"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "early_goal",
              "value": "±",
              "note": "ECU早进则大胜;闷平则draw权重升"
            },
            {
              "label": "ECU_finishing",
              "value": "-",
              "note": "厄瓜多尔临门一脚转化率(grinder通病)"
            },
            {
              "label": "heat_pauses",
              "value": "-",
              "note": "补水暂停次数,越碎越利弱旅"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Moisés Caicedo",
            "pos": "CDM",
            "status": "KEY",
            "note": "切尔西,中场屏障"
          },
          {
            "name": "Willian Pacho",
            "pos": "CB",
            "status": "KEY",
            "note": "PSG铁闸"
          },
          {
            "name": "Enner Valencia",
            "pos": "ST",
            "status": "OK",
            "note": "队史世界杯6球"
          },
          {
            "name": "Piero Hincapié",
            "pos": "CB",
            "status": "OK",
            "note": "阿森纳"
          }
        ],
        "away": [
          {
            "name": "Eloy Room",
            "pos": "GK",
            "status": "KEY",
            "note": "37岁老门将,偷分唯一指望"
          },
          {
            "name": "Juninho Bacuna",
            "pos": "CM",
            "status": "OK",
            "note": "预选3球"
          },
          {
            "name": "Leandro Bacuna",
            "pos": "CM",
            "status": "OK",
            "note": "定位球经验"
          },
          {
            "name": "库拉索后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "被德国灌7,场均失~3.6"
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
          "msg": "⚠️ backfill (事后回填,非盲测)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank ECU#29 CUW#83"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "模型自己标了风险:ECU grinder+Room可能压成低比分"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 78.0 / 14.3 / 6.4"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 0,
        "away_goals": 0,
        "scoreline": "0 - 0",
        "scorers": [],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "厄瓜多尔0-0被库拉索逼平,库拉索拿历史性首分。门将Room封神,正是模型home_risk写的剧本",
        "source": "ESPN"
      },
      "review": {
        "verdict": "MISS",
        "headline": "（回填）失手但模型自己预警了：给厄瓜多尔78%,结果0-0。模型home_risk明写'grinder+Room可能压成0-0',应验",
        "hits": [
          "★home_risk原话'厄瓜多尔grinder低转化+Room封神→压成1-0甚至0-0'→ 字面应验",
          "away_upset'Room MOTM+ECU低转化→冷平'→ 兑现"
        ],
        "misses": [
          "★方向失手:78%当稳赢,0-0平。又是'强队打铁桶被门神逼平'(像西班牙0-0佛得角)",
          "⚠️回填"
        ],
        "model_lesson": "强队vs摆大巴+热门门将,是模型(和庄家)共同的死穴。78%里那22%(平+负)真兑现了。新框架本该把这类标'平局风险中、别上重注'"
      }
    },
    {
      "id": "WC2026_M034",
      "kickoff_cst": "2026-06-20 18:00 ET",
      "group": "F",
      "round": 2,
      "tag": null,
      "home": {
        "code": "NED",
        "name_zh": "荷兰",
        "flag": "🇳🇱",
        "fifa_rank": 8
      },
      "away": {
        "code": "SWE",
        "name_zh": "瑞典",
        "flag": "🇸🇪",
        "fifa_rank": 34
      },
      "venue": "NRG Stadium, 休斯顿",
      "altitude_m": 15,
      "temp_c": 22,
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "荷兰50.2%：实力+铁防占优。但瑞典Isak+Gyökeres双杀是真锋线,荷兰防线一漏就被打",
      "probabilities": {
        "home_win": 50.2,
        "draw": 22.8,
        "away_win": 27
      },
      "expected_goals": {
        "home": 1.85,
        "away": 1.3
      },
      "expected_score": "2 : 1",
      "over_2_5": 60.6,
      "btts": 61.1,
      "clean_sheet_home": 27.2,
      "confidence": 62,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.85,
          "items": [
            {
              "label": "rank_8_vs_34",
              "value": "+",
              "note": "结构更强,中场De Jong/Gravenberch/Reijnders控制"
            },
            {
              "label": "NED_def",
              "value": "+",
              "note": "荷兰防守~0.9失 vs 瑞典漏防~1.6失,防守不对称"
            },
            {
              "label": "Gakpo_Malen",
              "value": "+",
              "note": "Gakpo+Malen(俱乐部20场15球)进攻地板高"
            }
          ]
        },
        "home_risk": {
          "score": -0.95,
          "items": [
            {
              "label": "Isak_Gyokeres",
              "value": "-",
              "note": "Isak+Gyökeres顶级双杀,几次机会就能转化"
            },
            {
              "label": "SWE_momentum",
              "value": "-",
              "note": "瑞典3连胜领头,士气足"
            },
            {
              "label": "BTTS_high",
              "value": "-",
              "note": "荷兰零封仅27%,双方都进概率61%"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.9,
          "items": [
            {
              "label": "clinical_strikers",
              "value": "+",
              "note": "Isak/Gyökeres高效,荷兰防线一漏就被打"
            },
            {
              "label": "counter",
              "value": "+",
              "note": "瑞典反击打荷兰压上的身后"
            },
            {
              "label": "momentum",
              "value": "+",
              "note": "瑞典状态正佳,不怵荷兰"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "first_goal",
              "value": "±",
              "note": "谁先进影响走势"
            },
            {
              "label": "NED_press",
              "value": "±",
              "note": "荷兰高位逼抢vs瑞典反击的攻防"
            },
            {
              "label": "Gakpo_form",
              "value": "±",
              "note": "Gakpo状态"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Cody Gakpo",
            "pos": "LW",
            "status": "HOT",
            "note": "进攻箭头"
          },
          {
            "name": "Frenkie de Jong",
            "pos": "CM",
            "status": "KEY",
            "note": "中场节拍"
          },
          {
            "name": "Donyell Malen",
            "pos": "FW",
            "status": "OK",
            "note": "俱乐部20场15球"
          },
          {
            "name": "Virgil van Dijk",
            "pos": "CB",
            "status": "KEY",
            "note": "队长"
          }
        ],
        "away": [
          {
            "name": "Alexander Isak",
            "pos": "ST",
            "status": "HOT",
            "note": "2球3助,顶级前锋"
          },
          {
            "name": "Viktor Gyökeres",
            "pos": "ST",
            "status": "HOT",
            "note": "对突尼斯进球+附加赛帽子戏法"
          },
          {
            "name": "Anthony Elanga",
            "pos": "WG",
            "status": "OK",
            "note": "边路速度"
          },
          {
            "name": "瑞典后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "漏防~1.6失"
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
          "msg": "⚠️ backfill (事后回填,非盲测)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank NED#8 SWE#34; Opta NED 55.8%"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 50.2 / 22.8 / 27.0"
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
            "team": "NED",
            "player": "Brobbey + Gakpo 各梅开二度",
            "type": ""
          },
          {
            "min": "—",
            "team": "SWE",
            "player": "瑞典",
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
        "key_moment": "荷兰5-1血洗瑞典,Brobbey+Gakpo各两球。回填模型选荷兰=对,但5球又超进球λ预期",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "（回填）方向命中：荷兰50.2%最高→5-1大胜。但又一次进球被低估(模型期望2球,实际5)",
        "hits": [
          "胜负方向对：荷兰50.2%→赢 ✓",
          "Gakpo热状态判对(梅开二度)",
          "BTTS判对"
        ],
        "misses": [
          "★进球数低估:期望2,实际5(强队大爆发的尾部仍难抓)",
          "瑞典只给27%客胜其实合理(他们被血洗)",
          "⚠️回填"
        ],
        "model_lesson": "方向对,进球λ仍偏保守。荷兰5-1属强队井喷,和德国7/瑞典5一类——这类大胜的净胜球没人(包括庄家)能精确预测"
      }
    }
  ]
};
