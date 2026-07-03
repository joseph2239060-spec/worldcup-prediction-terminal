// 世界杯预测数据 - 2026-06-21（日期已按官方校正；早期ET开球时间官方未公布，标注未公布，录制不念时间）
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-21"] = {
  "date": "2026-06-21",
  "tournament": "FIFA World Cup 2026 · G/H组 MD2",
  "model_version": "POISSON v1.4",
  "model_accuracy_7d": null,
  "data_note": "乌拉圭-佛得角=真预测(ODDS tab有盘口);西/比两场=事后回填复盘",
  "matches": [
    {
      "id": "WC2026_M039",
      "kickoff_cst": "2026-06-21 ET未公布",
      "group": "G",
      "round": 2,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "NZL",
        "name_zh": "新西兰",
        "flag": "🇳🇿",
        "fifa_rank": 83
      },
      "away": {
        "code": "EGY",
        "name_zh": "埃及",
        "flag": "🇪🇬",
        "fifa_rank": 28
      },
      "venue": "BC Place, 温哥华",
      "altitude_m": 0,
      "temp_c": 22,
      "humidity_pct": 55,
      "referee": "Omar Al Ali",
      "headline": "埃及客场50%占优：Salah+Marmoush打全届最低排名新西兰漏防。但新西兰Just/Wood刚2-2平伊朗",
      "probabilities": {
        "home_win": 23,
        "draw": 27,
        "away_win": 50
      },
      "expected_goals": {
        "home": 0.95,
        "away": 1.55
      },
      "expected_score": "1 : 2",
      "over_2_5": 41,
      "btts": 50,
      "clean_sheet_home": 21,
      "confidence": 62,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.45,
          "items": [
            {
              "label": "Just_hot",
              "value": "+",
              "note": "Elijah Just对伊朗梅开二度,边路爆点打埃及右路(Hany QUEST)"
            },
            {
              "label": "Wood_aerial",
              "value": "+",
              "note": "Chris Wood制空+定位球,埃及后防制空一般"
            },
            {
              "label": "high_press",
              "value": "+",
              "note": "新西兰高位逼抢搅埃及build-up"
            }
          ]
        },
        "home_risk": {
          "score": -1.05,
          "items": [
            {
              "label": "lowest_ranked",
              "value": "-",
              "note": "全届最低#83,近11场1胜,漏防(失~1.8)正是Marmoush的菜"
            },
            {
              "label": "Salah_central",
              "value": "-",
              "note": "Salah中路拉扯新西兰中卫"
            },
            {
              "label": "depth",
              "value": "-",
              "note": "落后则深度不足难翻盘"
            }
          ]
        },
        "away_upset_path": {
          "score": 1.2,
          "items": [
            {
              "label": "Salah_Marmoush",
              "value": "+",
              "note": "Salah+Marmoush转换打新西兰高位,最直接路径"
            },
            {
              "label": "Ashour",
              "value": "+",
              "note": "Ashour延续开场状态中场加威胁"
            },
            {
              "label": "control_2-0",
              "value": "+",
              "note": "埃及控球2-0/2-1的clear-favorite剧本(模型已给50%)"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "first_goal",
              "value": "±",
              "note": "新西兰早进则平/冷飙升"
            },
            {
              "label": "Hany_status",
              "value": "±",
              "note": "埃及右后卫Hany乌龙后状态"
            },
            {
              "label": "EGY_game_state",
              "value": "±",
              "note": "埃及领先则收deep,大小球转under"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Elijah Just",
            "pos": "WG",
            "status": "HOT",
            "note": "对伊朗梅开二度"
          },
          {
            "name": "Chris Wood",
            "pos": "ST",
            "status": "KEY",
            "note": "制空+定位球"
          },
          {
            "name": "Marko Stamenic",
            "pos": "CM",
            "status": "OK",
            "note": "中场"
          },
          {
            "name": "新西兰后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "全届最弱,失~1.8"
          }
        ],
        "away": [
          {
            "name": "Mohamed Salah",
            "pos": "FW",
            "status": "KEY",
            "note": "中路拉扯+终结"
          },
          {
            "name": "Omar Marmoush",
            "pos": "FW",
            "status": "HOT",
            "note": "曼城,转换速度"
          },
          {
            "name": "Emam Ashour",
            "pos": "CM",
            "status": "OK",
            "note": "中场威胁"
          },
          {
            "name": "Mohamed Hany",
            "pos": "RB",
            "status": "QUEST",
            "note": "乌龙后状态"
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
          "msg": "★真预测,ODDS tab有盘口"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank NZL#83 EGY#28"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 23.0 / 27.0 / 50.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 3,
        "scoreline": "1 - 3",
        "scorers": [
          {
            "min": "—",
            "team": "NZL",
            "player": "新西兰",
            "type": "一度领先"
          },
          {
            "min": "—",
            "team": "EGY",
            "player": "Zico / Salah / Trézéguet",
            "type": "下半场逆转,埃及队史首胜"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "埃及3-1逆转新西兰,Salah领衔拿队史世界杯首胜。模型押埃及客场赢(50%)=对",
        "source": "ESPN / Sky"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★真盲测命中：模型押埃及客场赢(50%最高)→埃及3-1逆转。Salah/Marmoush打新西兰漏防的判断对",
        "hits": [
          "★胜负方向对：埃及50%最高→赢 ✓（真盲测）",
          "away_upset_path'Salah+Marmoush转换打新西兰高位'→ 兑现",
          "点名Salah→他进球+领衔",
          "判新西兰漏防(全届最弱)→ 丢3球"
        ],
        "misses": [
          "新西兰一度先进球(模型给新西兰23%也合理),但埃及逆转"
        ],
        "model_lesson": "真盲测命中一个'客场favorite'——v1.4敢给客队50%(不被主队光环骗),对了。这正是成熟的表现"
      }
    },
    {
      "id": "WC2026_M038",
      "kickoff_cst": "2026-06-21 12:00 ET",
      "group": "G",
      "round": 2,
      "tag": null,
      "home": {
        "code": "BEL",
        "name_zh": "比利时",
        "flag": "🇧🇪",
        "fifa_rank": 9
      },
      "away": {
        "code": "IRN",
        "name_zh": "伊朗",
        "flag": "🇮🇷",
        "fifa_rank": 20
      },
      "venue": "SoFi Stadium, 洛杉矶",
      "altitude_m": 30,
      "temp_c": 24,
      "humidity_pct": 50,
      "referee": "未公布",
      "headline": "比利时52%但不稳：De Bruyne领衔但拼凑后防,伊朗铁桶+纪律能磨。平局风险中(26%)",
      "probabilities": {
        "home_win": 52,
        "draw": 26,
        "away_win": 22
      },
      "expected_goals": {
        "home": 1.55,
        "away": 1
      },
      "expected_score": "1 : 1",
      "over_2_5": 47,
      "btts": 48,
      "clean_sheet_home": 38,
      "confidence": 58,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.7,
          "items": [
            {
              "label": "rank_9_vs_20",
              "value": "+",
              "note": "De Bruyne+Doku边路,个人质量更高"
            },
            {
              "label": "Courtois",
              "value": "+",
              "note": "世界级门将兜底"
            },
            {
              "label": "attack_edge",
              "value": "+",
              "note": "比利时进攻产量高于伊朗"
            }
          ]
        },
        "home_risk": {
          "score": -0.85,
          "items": [
            {
              "label": "makeshift_def",
              "value": "-",
              "note": "比利时拼凑后防,伊朗反击可乘"
            },
            {
              "label": "IRN_discipline",
              "value": "-",
              "note": "伊朗防守纪律好,擅长磨低比分"
            },
            {
              "label": "red_risk",
              "value": "-",
              "note": "对抗激烈,红牌风险偏高(若比利时减员则被逼平)"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.65,
          "items": [
            {
              "label": "Taremi",
              "value": "+",
              "note": "Taremi反击终结"
            },
            {
              "label": "park_bus",
              "value": "+",
              "note": "伊朗铁桶磨平"
            },
            {
              "label": "BEL_red",
              "value": "+",
              "note": "比利时若吃红牌少打一人被追平"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "first_goal",
              "value": "±",
              "note": "比利时早进则伊朗压出"
            },
            {
              "label": "cards",
              "value": "-",
              "note": "红牌会剧烈改变走势"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Kevin De Bruyne",
            "pos": "AM",
            "status": "KEY",
            "note": "发动机"
          },
          {
            "name": "Jérémy Doku",
            "pos": "WG",
            "status": "HOT",
            "note": "边路1v1"
          },
          {
            "name": "Thibaut Courtois",
            "pos": "GK",
            "status": "KEY",
            "note": "门将保险"
          },
          {
            "name": "比利时中卫",
            "pos": "CB",
            "status": "QUEST",
            "note": "拼凑后防"
          }
        ],
        "away": [
          {
            "name": "Mehdi Taremi",
            "pos": "ST",
            "status": "KEY",
            "note": "头号杀器"
          },
          {
            "name": "Alireza Beiranvand",
            "pos": "GK",
            "status": "OK",
            "note": "门将"
          },
          {
            "name": "Alireza Jahanbakhsh",
            "pos": "WG",
            "status": "OK",
            "note": "创造力"
          },
          {
            "name": "伊朗后防",
            "pos": "DF",
            "status": "OK",
            "note": "纪律性铁桶"
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
          "msg": "⚠️ backfill (已踢完,事后回填)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank BEL#9 IRN#20"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "拼凑后防+伊朗铁桶→平局风险中26%"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 52.0 / 26.0 / 22.0"
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
            "team": "BEL",
            "player": "比利时",
            "type": ""
          },
          {
            "min": "—",
            "team": "IRN",
            "player": "伊朗",
            "type": "逼平"
          }
        ],
        "red_cards": [
          {
            "min": "下半场",
            "team": "BEL",
            "player": "比利时球员",
            "type": "红牌"
          }
        ],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "比利时1-1伊朗,下半场吃红牌少打一人被逼平。回填模型押比利时(52%)失手,但红牌+伊朗铁桶路径都标了",
        "source": "ESPN"
      },
      "review": {
        "verdict": "MISS",
        "headline": "（回填）方向失手：押比利时(52%),1-1平。但模型home_risk明写'红牌减员被追平+伊朗铁桶磨',全应验",
        "hits": [
          "★home_risk原话'比利时吃红牌少打一人被追平'+'伊朗铁桶磨平'→ 字面应验(比利时真吃红牌)",
          "平局给26%(没压<20%),away_upset都说中"
        ],
        "misses": [
          "方向押比利时,实际1-1平",
          "⚠️回填"
        ],
        "model_lesson": "红牌是泊松盲区(v2红牌因子标了ELEVATED风险但算不进概率)。这场模型把风险全列对了,只是没法量化进胜率——和揭幕战3红牌一个道理"
      }
    },
    {
      "id": "WC2026_M037",
      "kickoff_cst": "2026-06-21 15:00 ET",
      "group": "H",
      "round": 2,
      "tag": null,
      "home": {
        "code": "ESP",
        "name_zh": "西班牙",
        "flag": "🇪🇸",
        "fifa_rank": 2
      },
      "away": {
        "code": "KSA",
        "name_zh": "沙特",
        "flag": "🇸🇦",
        "fifa_rank": 60
      },
      "venue": "Mercedes-Benz Stadium, 亚特兰大",
      "altitude_m": 320,
      "temp_c": 24,
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "西班牙74%：欧洲杯冠军碾压沙特。v1.4对手门槛让进球λ放开(2.3),不再压成1球",
      "probabilities": {
        "home_win": 74,
        "draw": 17,
        "away_win": 9
      },
      "expected_goals": {
        "home": 2.3,
        "away": 0.55
      },
      "expected_score": "2 : 0",
      "over_2_5": 58,
      "btts": 33,
      "clean_sheet_home": 56,
      "confidence": 74,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1.8,
          "items": [
            {
              "label": "rank_2_vs_60",
              "value": "+",
              "note": "欧洲杯冠军,Yamal/Pedri/Oyarzabal阵容碾压"
            },
            {
              "label": "no_discount",
              "value": "+",
              "note": "v1.4:打沙特(弱)进攻λ放开到2.3,不重蹈压成1球"
            },
            {
              "label": "ESP_control",
              "value": "+",
              "note": "控球压死沙特低位,持续制造机会"
            }
          ]
        },
        "home_risk": {
          "score": -0.4,
          "items": [
            {
              "label": "Al_Aqidi",
              "value": "-",
              "note": "沙特门将能扑,可能压低比分"
            },
            {
              "label": "rotation",
              "value": "-",
              "note": "西班牙若已稳出线可能轮换"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.2,
          "items": [
            {
              "label": "Al_Dawsari",
              "value": "+",
              "note": "Al-Dawsari反击偷一球(胜率仅9%)"
            },
            {
              "label": "park_bus",
              "value": "+",
              "note": "沙特摆大巴拖低比分"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Yamal_fit",
              "value": "±",
              "note": "Yamal状态(此前腿筋疑)"
            },
            {
              "label": "early_goal",
              "value": "±",
              "note": "西班牙早进则大胜"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Lamine Yamal",
            "pos": "RW",
            "status": "HOT",
            "note": "边路爆点"
          },
          {
            "name": "Mikel Oyarzabal",
            "pos": "ST",
            "status": "HOT",
            "note": "终结点"
          },
          {
            "name": "Pedri",
            "pos": "CM",
            "status": "KEY",
            "note": "节拍器"
          },
          {
            "name": "Rodri",
            "pos": "CDM",
            "status": "OK",
            "note": "中场屏障"
          }
        ],
        "away": [
          {
            "name": "Salem Al-Dawsari",
            "pos": "LW",
            "status": "KEY",
            "note": "反击点"
          },
          {
            "name": "Nawaf Al-Aqidi",
            "pos": "GK",
            "status": "OK",
            "note": "门将"
          },
          {
            "name": "Firas Al-Buraikan",
            "pos": "ST",
            "status": "OK",
            "note": "锋线"
          },
          {
            "name": "沙特后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "对强队易失守"
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
          "msg": "⚠️ backfill (已踢完,事后回填)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank ESP#2 KSA#60"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "v1.4对手门槛:进球λ放开到2.3(不压成1球)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 74.0 / 17.0 / 9.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 4,
        "away_goals": 0,
        "scoreline": "4 - 0",
        "scorers": [
          {
            "min": "10'",
            "team": "ESP",
            "player": "Lamine Yamal",
            "type": ""
          },
          {
            "min": "—",
            "team": "ESP",
            "player": "Mikel Oyarzabal",
            "type": "梅开二度"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "西班牙4-0血洗沙特,Yamal+Oyarzabal双响。回填模型选西班牙(74%)=对,进球λ2.3方向也对(实际4)",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "（回填）方向命中：西班牙74%→4-0。★进球λ修正见效:给2.3(实际4),不再像早期压成1球",
        "hits": [
          "胜负方向对：西班牙74%→赢 ✓",
          "★点名Yamal+Oyarzabal→正是两人破门",
          "进球λ2.3比早期钝刀准多了"
        ],
        "misses": [
          "进球数仍略低(2.3 vs 4),但方向对",
          "⚠️回填"
        ],
        "model_lesson": "v1.4对强队打弱旅的进球λ终于合理(2.3),这正是发哥一直要的'强队比分别太低'"
      }
    },
    {
      "id": "WC2026_M036",
      "kickoff_cst": "2026-06-21 18:00 ET",
      "group": "H",
      "round": 2,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "URU",
        "name_zh": "乌拉圭",
        "flag": "🇺🇾",
        "fifa_rank": 16
      },
      "away": {
        "code": "CPV",
        "name_zh": "佛得角",
        "flag": "🇨🇻",
        "fifa_rank": 67
      },
      "venue": "Hard Rock Stadium, 迈阿密",
      "altitude_m": 2,
      "temp_c": 34,
      "humidity_pct": 75,
      "referee": "Eskas",
      "headline": "★真预测：乌拉圭46%但不稳——两核心De Arrascaeta/Araújo伤缺、Núñez哑火;佛得角门神Vozinha刚0-0平西班牙",
      "probabilities": {
        "home_win": 46,
        "draw": 29,
        "away_win": 25
      },
      "expected_goals": {
        "home": 1.55,
        "away": 1
      },
      "expected_score": "1 : 1",
      "over_2_5": 46,
      "btts": 49,
      "clean_sheet_home": 37,
      "confidence": 58,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.7,
          "items": [
            {
              "label": "rank_16_vs_67",
              "value": "+",
              "note": "差51位,Valverde驱动+Bielsa体系,个人上限高"
            },
            {
              "label": "must_win",
              "value": "+",
              "note": "乌拉圭必须取胜,会全力压上"
            },
            {
              "label": "quasi_home",
              "value": "+",
              "note": "迈阿密拉美球迷主场气氛"
            }
          ]
        },
        "home_risk": {
          "score": -1,
          "items": [
            {
              "label": "two_creators_OUT",
              "value": "-",
              "note": "De Arrascaeta(小腿)+Araújo(小腿)双缺,组织+后防双削"
            },
            {
              "label": "Nunez_slump",
              "value": "-",
              "note": "Núñez哑火,MD1对沙特1-1被换下,锋线焦点失灵"
            },
            {
              "label": "Vozinha_hot",
              "value": "-",
              "note": "佛得角门神Vozinha刚7扑0-0平西班牙,铁桶+热门门将是favorite死穴"
            }
          ]
        },
        "away_upset_path": {
          "score": 1,
          "items": [
            {
              "label": "low_block_Vozinha",
              "value": "+",
              "note": "摆大巴+Vozinha复刻平西班牙,0-0或偷1-0"
            },
            {
              "label": "counter_makeshift",
              "value": "+",
              "note": "Mendes/Monteiro反击打乌拉圭缺Araújo的重组后防"
            },
            {
              "label": "heat_storm",
              "value": "+",
              "note": "迈阿密34°C+80%雷暴拖垮压上的乌拉圭"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Nunez_start",
              "value": "±",
              "note": "Núñez首发+是否有10号顶替De Arrascaeta创造力"
            },
            {
              "label": "CB_pair",
              "value": "±",
              "note": "无Araújo的中卫搭档(Cáceres/Olivera)"
            },
            {
              "label": "weather",
              "value": "-",
              "note": "雷暴/酷热影响节奏"
            },
            {
              "label": "first_15",
              "value": "±",
              "note": "乌拉圭早进不了球→佛得角铁桶更难破,平局概率升"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Federico Valverde",
            "pos": "CM",
            "status": "KEY",
            "note": "皇马,中场驱动"
          },
          {
            "name": "Darwin Núñez",
            "pos": "ST",
            "status": "QUEST",
            "note": "哑火,MD1被换下"
          },
          {
            "name": "De Arrascaeta",
            "pos": "AM",
            "status": "OUT",
            "note": "小腿伤,头号组织者缺阵"
          },
          {
            "name": "Ronald Araújo",
            "pos": "CB",
            "status": "OUT",
            "note": "小腿伤,后防重组"
          }
        ],
        "away": [
          {
            "name": "Vozinha",
            "pos": "GK",
            "status": "HOT",
            "note": "本届门神,7扑0-0平西班牙"
          },
          {
            "name": "Ryan Mendes",
            "pos": "FW",
            "status": "OK",
            "note": "反击点"
          },
          {
            "name": "Jamiro Monteiro",
            "pos": "CM",
            "status": "OK",
            "note": "推进"
          },
          {
            "name": "佛得角铁桶",
            "pos": "DF",
            "status": "OK",
            "note": "低位防守组织好"
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
          "msg": "★真预测(非回填),ODDS tab有实时盘口"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank URU#16 CPV#67"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "乌拉圭两核心伤缺+Vozinha热→平局风险高(29%)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 46.0 / 29.0 / 25.0"
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
            "team": "URU",
            "player": "乌拉圭(2球,一度2-1领先)",
            "type": ""
          },
          {
            "min": "—",
            "team": "CPV",
            "player": "佛得角(2球,落后扳平)",
            "type": "二度奇迹平局"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "佛得角2-2逼平乌拉圭(2-1落后扳平),拿到第二个历史性平局。正是模型标的'两核心伤缺+Vozinha热→favorite stalls'",
        "source": "ESPN / NBC"
      },
      "review": {
        "verdict": "MISS",
        "headline": "★真盲测失手,但模型把整个剧本写对了：押乌拉圭(46%)、平局给29%(最高之一)、明写两核心伤缺+Vozinha热会拖平——佛得角2-2",
        "hits": [
          "★home_risk原话'De Arrascaeta/Araújo伤缺+Núñez哑火+Vozinha热=favorite stalls'→ 字面应验",
          "★平局给到29%(全场最高警示),没有过度自信押乌拉圭大胜",
          "away_upset_path'摆大巴+反击打重组后防'→ 佛得角真扳平"
        ],
        "misses": [
          "方向押乌拉圭赢,实际2-2平(乌拉圭一度2-1领先没守住)",
          "这是真盲测,记一次方向 MISS"
        ],
        "model_lesson": "又一个'强队该赢被铁桶+热门门将拖平'(佛得角已连平西班牙+乌拉圭)。模型风险标注精准,但平局仍是无法量化进胜率的盲区。诚实记:真盲测这场没押对方向"
      }
    },
    {
      "id": "WC2026_M035",
      "kickoff_cst": "2026-06-21 21:00 ET",
      "group": "F",
      "round": 2,
      "tag": null,
      "home": {
        "code": "JPN",
        "name_zh": "日本",
        "flag": "🇯🇵",
        "fifa_rank": 18
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
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "日本56%：技术流+Kubo/Ueda锋线 vs 突尼斯铁桶。日本控球但突尼斯擅长0-1/1-1磨",
      "probabilities": {
        "home_win": 56,
        "draw": 25,
        "away_win": 19
      },
      "expected_goals": {
        "home": 1.85,
        "away": 0.85
      },
      "expected_score": "2 : 1",
      "over_2_5": 47,
      "btts": 44,
      "clean_sheet_home": 43,
      "confidence": 60,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.95,
          "items": [
            {
              "label": "rank_18_vs_45",
              "value": "+",
              "note": "日本技术流,近期赢英格兰/巴西,含金量高"
            },
            {
              "label": "Kubo_Ueda",
              "value": "+",
              "note": "Kubo创造+Ueda(荷甲金靴)锋线锐利"
            },
            {
              "label": "TUN_blunt",
              "value": "+",
              "note": "突尼斯进攻熄火(0-5比利时),难破日本"
            }
          ]
        },
        "home_risk": {
          "score": -0.7,
          "items": [
            {
              "label": "TUN_bus",
              "value": "-",
              "note": "突尼斯铁桶,Skhiri/Talbi擅长0-1/1-1磨"
            },
            {
              "label": "JPN_finishing",
              "value": "-",
              "note": "日本控球但破密集防守需要耐心"
            },
            {
              "label": "heat",
              "value": "-",
              "note": "蒙特雷湿热压低节奏"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            {
              "label": "bus_setpiece",
              "value": "+",
              "note": "突尼斯铁桶+定位球Mejbri偷分"
            },
            {
              "label": "JPN_wasteful",
              "value": "+",
              "note": "日本久攻不下被反击"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "first_goal",
              "value": "±",
              "note": "日本早进则突尼斯压出"
            },
            {
              "label": "Msakni",
              "value": "±",
              "note": "突尼斯Msakni是否首发"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Takefusa Kubo",
            "pos": "RW",
            "status": "HOT",
            "note": "创造核心"
          },
          {
            "name": "Ayase Ueda",
            "pos": "ST",
            "status": "HOT",
            "note": "荷甲金靴"
          },
          {
            "name": "Wataru Endo",
            "pos": "CM",
            "status": "OK",
            "note": "中场屏障"
          },
          {
            "name": "Kaoru Mitoma",
            "pos": "LW",
            "status": "OK",
            "note": "边路突破"
          }
        ],
        "away": [
          {
            "name": "Ellyes Skhiri",
            "pos": "CM",
            "status": "KEY",
            "note": "铁三角核心"
          },
          {
            "name": "Hannibal Mejbri",
            "pos": "AM",
            "status": "OK",
            "note": "定位球"
          },
          {
            "name": "Montassar Talbi",
            "pos": "CB",
            "status": "OK",
            "note": "中卫"
          },
          {
            "name": "突尼斯锋线",
            "pos": "FW",
            "status": "QUEST",
            "note": "熄火,0-5比利时"
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
          "msg": "FIFA rank JPN#18 TUN#45"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 56.0 / 25.0 / 19.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 4,
        "away_goals": 0,
        "scoreline": "4 - 0",
        "scorers": [
          {
            "min": "—",
            "team": "JPN",
            "player": "日本(4球)",
            "type": "Kubo/Ueda领衔"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "日本4-0血洗突尼斯,小组头名出线。回填模型选日本=对,4球又超预期",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "（回填）方向命中：日本56%→4-0大胜。但又是进球低估(期望2,实际4),突尼斯铁桶没守住",
        "hits": [
          "胜负方向对：日本56%→赢 ✓",
          "Kubo/Ueda锋线判对",
          "突尼斯进攻熄火判对(0球)"
        ],
        "misses": [
          "★进球低估:期望2实际4",
          "突尼斯铁桶没扛住,away_upset高估了突尼斯",
          "⚠️回填"
        ],
        "model_lesson": "又一个方向对、进球低估的强队大胜。6/20四场里3个大胜(德国险胜除外)进球都被低估——强队井喷是系统性盲区,但方向稳"
      }
    }
  ]
};
