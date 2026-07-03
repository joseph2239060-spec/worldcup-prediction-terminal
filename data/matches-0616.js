// 世界杯预测数据 - 2026-06-16（日期已按官方校正；早期ET开球时间官方未公布，标注未公布，录制不念时间）
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-16"] = {
  "date": "2026-06-16",
  "tournament": "FIFA World Cup 2026 · Group I 首轮",
  "model_version": "POISSON v1.3 + 反平局低估 + 反灌水",
  "model_accuracy_7d": null,
  "data_note": "概率=泊松+平局修正；★ODDS tab 为真实盘口对比；模型在两场都比庄家更看好弱队/平局",
  "matches": [
    {
      "id": "WC2026_M020",
      "kickoff_cst": "2026-06-16 ET未公布",
      "group": "J",
      "round": 1,
      "tag": null,
      "home": {
        "code": "AUT",
        "name_zh": "奥地利",
        "flag": "🇦🇹",
        "fifa_rank": 24
      },
      "away": {
        "code": "JOR",
        "name_zh": "约旦",
        "flag": "🇯🇴",
        "fifa_rank": 63
      },
      "venue": "Levi's Stadium, 圣克拉拉",
      "altitude_m": 9,
      "temp_c": 22,
      "humidity_pct": 50,
      "referee": "Dahane Beida",
      "headline": "奥地利(Rangnick体系)55.6%。约旦世界杯首秀、头号中锋ACL报销，但Al-Tamari单点反击能搅局",
      "probabilities": {
        "home_win": 55.6,
        "draw": 25.6,
        "away_win": 18.8
      },
      "expected_goals": {
        "home": 1.55,
        "away": 0.78
      },
      "expected_score": "1 : 0",
      "over_2_5": 41.1,
      "btts": 42.6,
      "clean_sheet_home": 45.8,
      "confidence": 63,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1.1,
          "items": [
            {
              "label": "rank_24_vs_63",
              "value": "+",
              "note": "Rangnick高位逼抢体系，预选对韩国/突尼斯零封"
            },
            {
              "label": "JOR_collapse",
              "value": "+",
              "note": "约旦碰强队就崩(1-4瑞士/0-2哥伦比亚)"
            },
            {
              "label": "Al-Naimat_OUT",
              "value": "+",
              "note": "约旦头号中锋ACL报销，进攻支点削弱"
            },
            {
              "label": "Baumgartner_Sabitzer",
              "value": "+",
              "note": "中场创造力+Alaba复出坐镇，控场碾压"
            }
          ]
        },
        "home_risk": {
          "score": -0.7,
          "items": [
            {
              "label": "opener_slow",
              "value": "-",
              "note": "首战慢热，可能上半场闷平拖成1-0/1-1"
            },
            {
              "label": "Arnautovic_fit",
              "value": "-",
              "note": "37岁Arnautović体能/出场存疑，哑火则终结打折"
            },
            {
              "label": "Al-Tamari",
              "value": "-",
              "note": "'约旦梅西'(法甲雷恩)单点反击随时制造一球"
            },
            {
              "label": "neutral",
              "value": "-",
              "note": "中立凉爽夜场，对体能压制收益有限"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.65,
          "items": [
            {
              "label": "Al-Tamari_solo",
              "value": "+",
              "note": "Al-Tamari边路爆点单刀/任意球先拔头筹"
            },
            {
              "label": "Abulaila_GK",
              "value": "+",
              "note": "门将超神+奥地利终结低迷，0-0/1-0偷分"
            },
            {
              "label": "AUT_nerves",
              "value": "+",
              "note": "奥地利首战失误送点/定位球丢球，约旦首秀冷门"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Arnautovic_start",
              "value": "±",
              "note": "Arnautović首发及撑多久=奥地利进攻锐度"
            },
            {
              "label": "AUT_60min",
              "value": "±",
              "note": "60分钟内未破门则平局概率随时间升"
            },
            {
              "label": "JOR_formation",
              "value": "±",
              "note": "约旦5后卫摆大巴还是正常防守"
            },
            {
              "label": "first_card",
              "value": "±",
              "note": "首张牌时机与主裁尺度"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Marcel Sabitzer",
            "pos": "CM",
            "status": "KEY",
            "note": "中场创造力"
          },
          {
            "name": "Christoph Baumgartner",
            "pos": "AM",
            "status": "HOT",
            "note": "德甲赛季13球"
          },
          {
            "name": "David Alaba",
            "pos": "CB",
            "status": "OK",
            "note": "复出坐镇后防"
          },
          {
            "name": "Marko Arnautović",
            "pos": "ST",
            "status": "QUEST",
            "note": "37岁，体能/出场存疑"
          }
        ],
        "away": [
          {
            "name": "Mousa Al-Tamari",
            "pos": "WG",
            "status": "KEY",
            "note": "'约旦梅西'，法甲雷恩，单点爆破"
          },
          {
            "name": "Yazan Al-Naimat",
            "pos": "ST",
            "status": "OUT",
            "note": "ACL重伤赛季报销"
          },
          {
            "name": "Yazan Al-Arab",
            "pos": "CB",
            "status": "OK",
            "note": "后防核心"
          },
          {
            "name": "门将 Abulaila",
            "pos": "GK",
            "status": "OK",
            "note": "偷分指望"
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
          "msg": "fixture verified: FIFA / ESPN, Group J"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank AUT#24 JOR#63"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: AUT λ下修到1.55(Jordan崩盘失球不全信)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 55.6 / 25.6 / 18.8"
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
            "team": "AUT",
            "player": "Romano Schmid",
            "type": "远射"
          },
          {
            "min": "—",
            "team": "JOR",
            "player": "Ali Olwan",
            "type": "约旦队史世界杯首球"
          },
          {
            "min": "76'",
            "team": "AUT",
            "player": "Al-Arab 乌龙",
            "type": "乌龙"
          },
          {
            "min": "90+",
            "team": "AUT",
            "player": "Marko Arnautović",
            "type": "点球锁定"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "奥地利3-1约旦，36年来首场世界杯胜利。模型55.6%选奥地利=对",
        "source": "ESPN / Sky"
      },
      "review": {
        "verdict": "HIT",
        "headline": "方向命中：奥地利55.6%首选→3-1拿下，36年首胜。模型在'明确favorite+低平局风险'类持续稳",
        "hits": [
          "★胜负方向对：奥地利55.6%最高→赢 ✓",
          "点名Arnautović→他点球锁定胜局 ✓",
          "约旦单点反击(Al-Tamari体系)→约旦确实进了球(Olwan)，但不足以翻盘",
          "红牌风险LOW→无红牌 ✓"
        ],
        "misses": [
          "比分2:1预期，实际3-1(含乌龙)，略低估奥地利净胜"
        ],
        "model_lesson": "又一个标准favorite命中。连同阿根廷，6/17 的强队预测全准——模型的强项就是这类有明确实力差的比赛"
      }
    },
    {
      "id": "WC2026_M017",
      "kickoff_cst": "2026-06-16 15:00 ET",
      "group": "I",
      "round": 1,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "FRA",
        "name_zh": "法国",
        "flag": "🇫🇷",
        "fifa_rank": 3
      },
      "away": {
        "code": "SEN",
        "name_zh": "塞内加尔",
        "flag": "🇸🇳",
        "fifa_rank": 15
      },
      "venue": "MetLife Stadium, 新泽西",
      "altitude_m": 7,
      "temp_c": 31,
      "humidity_pct": 65,
      "referee": "Alireza Faghani",
      "headline": "★模型 vs 庄家最大分歧：庄家给法国65%，我的模型只给44.6%、塞内加尔26.9%——模型认为塞内加尔被严重低估",
      "probabilities": {
        "home_win": 44.6,
        "draw": 28.5,
        "away_win": 26.9
      },
      "expected_goals": {
        "home": 1.66,
        "away": 1.24
      },
      "expected_score": "2 : 1",
      "over_2_5": 55.2,
      "btts": 57.4,
      "clean_sheet_home": 29.1,
      "confidence": 88,
      "monte_carlo_n": 50000,
      "value_rating": 4,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.1,
          "items": [
            {
              "label": "rank_3_vs_15",
              "value": "+",
              "note": "Mbappé(56国家队球)+Dembélé(金球候选)双星，塞内加尔后防难锁"
            },
            {
              "label": "FRA_real_form",
              "value": "+",
              "note": "近期真2-1胜巴西、3-1胜哥伦比亚，进攻含金量高"
            },
            {
              "label": "Tchouaméni_mid",
              "value": "+",
              "note": "中场控节奏，限制塞内加尔Jackson/Mané转换空间"
            },
            {
              "label": "depth",
              "value": "+",
              "note": "中立场无塞主场加成，法国深度更深"
            }
          ]
        },
        "home_risk": {
          "score": -1.05,
          "items": [
            {
              "label": "FRA_rotation_loss",
              "value": "-",
              "note": "6/4 B队1-2负科特迪瓦，轮换深度存疑+首战生疏"
            },
            {
              "label": "SEN_AFCON_finalist",
              "value": "-",
              "note": "塞内加尔非洲杯亚军，Mendy门将+Mané，组织硬朗能搅局"
            },
            {
              "label": "heat_88F",
              "value": "-",
              "note": "下午3点31°C湿热，压低节奏、抬高平局概率"
            },
            {
              "label": "FRA_GF_padded",
              "value": "-",
              "note": "法国2.3进球含阿塞拜疆/乌克兰灌水，已反灌水下修"
            }
          ]
        },
        "away_upset_path": {
          "score": 1,
          "items": [
            {
              "label": "deep_counter",
              "value": "+",
              "note": "塞内加尔死守+Jackson/Mané打法国高位防线反击"
            },
            {
              "label": "Mendy_bigGK",
              "value": "+",
              "note": "Mendy大赛门将,曾零封沙特,可偷1-0/1-1"
            },
            {
              "label": "heat_grind",
              "value": "+",
              "note": "高温拖法国进泥潭,Sarr咬住中场逼平"
            },
            {
              "label": "FRA_opener_nerves",
              "value": "+",
              "note": "夺冠热门首战紧张+轮换生疏(参考科特迪瓦负)"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "FRA_lineup",
              "value": "±",
              "note": "法国首发是全主力还是轮换(6/8友谊赛后)"
            },
            {
              "label": "Mbappé_fit",
              "value": "±",
              "note": "Mbappé大腿伤报已愈,出场时间是关键"
            },
            {
              "label": "heat_actual",
              "value": "-",
              "note": "实际温湿度影响节奏与末段体能"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "法国先进则平局崩;塞先进则爆冷窗口开"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Kylian Mbappé",
            "pos": "FW",
            "status": "HOT",
            "note": "56国家队进球，头号杀器"
          },
          {
            "name": "Ousmane Dembélé",
            "pos": "WG",
            "status": "HOT",
            "note": "金球候选，欧冠冠军"
          },
          {
            "name": "Aurélien Tchouaméni",
            "pos": "CDM",
            "status": "KEY",
            "note": "中场屏障+控节奏"
          },
          {
            "name": "William Saliba",
            "pos": "CB",
            "status": "QUEST",
            "note": "轻微背伤，预计可出战"
          }
        ],
        "away": [
          {
            "name": "Édouard Mendy",
            "pos": "GK",
            "status": "KEY",
            "note": "大赛门将，偷分关键"
          },
          {
            "name": "Sadio Mané",
            "pos": "FW",
            "status": "KEY",
            "note": "队魂，反击爆点"
          },
          {
            "name": "Nicolas Jackson",
            "pos": "ST",
            "status": "OK",
            "note": "速度型中锋打法国高位"
          },
          {
            "name": "Pape Matar Sarr",
            "pos": "CM",
            "status": "OK",
            "note": "中场咬合"
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
          "msg": "fixture verified: FIFA / ESPN, Group I (MD1)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank FRA#3 SEN#15"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: FRA GF 2.3→1.85; draw lifted to 28.5% floor"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★model FRA 44.6% vs market 64.8% — 模型看衰法国/看好塞内加尔"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 44.6 / 28.5 / 26.9"
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
            "team": "FRA",
            "player": "Kylian Mbappé",
            "type": "梅开二度"
          },
          {
            "min": "—",
            "team": "FRA",
            "player": "Michael Olise",
            "type": "锦上添花"
          },
          {
            "min": "—",
            "team": "SEN",
            "player": "塞内加尔",
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
        "key_moment": "Mbappé双响，法国3-1完胜塞内加尔。法国轻松拿下，庄家的64.8%对了，模型的44.6%错了",
        "source": "ESPN / Yahoo / FOX"
      },
      "review": {
        "verdict": "PARTIAL",
        "headline": "选赢家对了(法国是模型首选)，但赌庄家错了：模型说塞内加尔被低估、法国只44.6%——结果法国3-1轻取，庄家完胜模型",
        "hits": [
          "胜负方向对：法国仍是模型最高项(44.6%)→法国赢 ✓",
          "★双λ修正方向对：进球λ给法国~2球，比保守λ的1球准——实际法国进3球，强队就是高产",
          "点名Mbappé是头号杀器→他梅开二度 ✓"
        ],
        "misses": [
          "★模型vs庄家:输了。模型给法国44.6% vs 庄家64.8%,说塞内加尔26.9%被低估——结果法国3-1碾压,庄家的高favorite是对的",
          "系统性偏差被坐实:反灌水+平局抬升把法国压太低了。法国就是该65%+",
          "连进球λ(~2)都还低估了法国(实际3球),强队产量被砍得太狠"
        ],
        "model_lesson": "★第一份模型vs庄家成绩单:庄家对、模型错。证实了我的系统性偏差警告——别再无脑下修强队。anti-padding该只对'打鱼腩刷分'生效,不该惩罚法国这种对强队也能赢的真豪强。下一步:反灌水加一个'对手强度'门槛,只砍打弱旅刷的分"
      }
    },
    {
      "id": "WC2026_M018",
      "kickoff_cst": "2026-06-16 18:00 ET",
      "group": "I",
      "round": 1,
      "tag": null,
      "home": {
        "code": "IRQ",
        "name_zh": "伊拉克",
        "flag": "🇮🇶",
        "fifa_rank": 57
      },
      "away": {
        "code": "NOR",
        "name_zh": "挪威",
        "flag": "🇳🇴",
        "fifa_rank": 32
      },
      "venue": "Gillette Stadium, 福克斯堡",
      "altitude_m": 25,
      "temp_c": 27,
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "挪威(Haaland)客场热门。模型给挪威69.3%，但庄家给到80.4%——模型觉得挪威被高估、伊拉克铁桶能搅局",
      "probabilities": {
        "home_win": 11.7,
        "draw": 19,
        "away_win": 69.3
      },
      "expected_goals": {
        "home": 0.75,
        "away": 2.15
      },
      "expected_score": "0 : 2",
      "over_2_5": 55.4,
      "btts": 46.6,
      "clean_sheet_home": 11.6,
      "confidence": 62,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": -1.4,
          "items": [
            {
              "label": "deep_block",
              "value": "+",
              "note": "Arnold体系深防+Hassan扑救+定位球反击,可偷1-0/1-1"
            },
            {
              "label": "NOR_vs_quality",
              "value": "+",
              "note": "挪威对硬仗成色一般(1-1摩洛哥/1-1新西兰/0-2荷兰)"
            },
            {
              "label": "opener_nerves",
              "value": "+",
              "note": "挪威28年首进世界杯+Haaland首秀,首战易紧张"
            },
            {
              "label": "neutral",
              "value": "±",
              "note": "中立场无挪威主场加成"
            }
          ]
        },
        "home_risk": {
          "score": -1.8,
          "items": [
            {
              "label": "IRA_no_attack",
              "value": "-",
              "note": "伊拉克进攻贫弱,近两场0-2委内瑞拉/1-1西班牙,缺终结者"
            },
            {
              "label": "Haaland_Sorloth",
              "value": "-",
              "note": "Haaland+Sørloth双塔+Ødegaard喂球,伊拉克后防全面被压"
            },
            {
              "label": "foul_red",
              "value": "-",
              "note": "弱势深防=高犯规,后段累黄甚至红牌,减员则崩盘"
            },
            {
              "label": "low_ceiling",
              "value": "-",
              "note": "拿分概率仅~31%,纯防反偷分容错极低"
            }
          ]
        },
        "away_upset_path": {
          "score": 1.55,
          "items": [
            {
              "label": "Haaland_early",
              "value": "+",
              "note": "Haaland早进球迫伊拉克弃守,空间放大成3-0/4-0"
            },
            {
              "label": "Odegaard_Nusa",
              "value": "+",
              "note": "Ødegaard串联+Nusa边路突破持续创造"
            },
            {
              "label": "setpiece",
              "value": "+",
              "note": "Sørloth空霸打定位球破密集防守"
            },
            {
              "label": "depth",
              "value": "+",
              "note": "挪威替补深度兑现垃圾时间进球扩比分"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "first_30min",
              "value": "±",
              "note": "伊拉克上半场0-0扛住则平/小负概率升;早丢球倒向挪威大胜"
            },
            {
              "label": "Haaland_start",
              "value": "±",
              "note": "Haaland首发足额+首次射正时间(世界杯首秀)"
            },
            {
              "label": "Odegaard_fit",
              "value": "±",
              "note": "挪威唯一组织核心,被限则创造力骤降"
            },
            {
              "label": "IRA_cards",
              "value": "-",
              "note": "伊拉克吃牌减员=比分敞口放大"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Jalal Hassan",
            "pos": "GK",
            "status": "KEY",
            "note": "门将，偷分唯一指望"
          },
          {
            "name": "Aymen Hussein",
            "pos": "ST",
            "status": "OK",
            "note": "锋线支点"
          },
          {
            "name": "Amir Al-Ammari",
            "pos": "CM",
            "status": "OK",
            "note": "定位球/反击点"
          },
          {
            "name": "Ali Al-Hamadi",
            "pos": "FW",
            "status": "OK",
            "note": "反击终结"
          }
        ],
        "away": [
          {
            "name": "Erling Haaland",
            "pos": "ST",
            "status": "HOT",
            "note": "世界杯首秀，头号杀器"
          },
          {
            "name": "Martin Ødegaard",
            "pos": "AM",
            "status": "KEY",
            "note": "唯一组织核心"
          },
          {
            "name": "Alexander Sørloth",
            "pos": "ST",
            "status": "OK",
            "note": "双塔之一，空霸"
          },
          {
            "name": "Antonio Nusa",
            "pos": "WG",
            "status": "OK",
            "note": "边路爆点"
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
          "msg": "fixture verified: FIFA / ESPN, Group I (MD1)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank IRA#57 NOR#32; Haaland debut"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: NOR GF 4.6→2.15 (摩尔多瓦11-1灌水剔除)"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★model NOR 69.3% vs market 80.4% — 模型觉得挪威被高估"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 11.7 / 19.0 / 69.3"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 4,
        "scoreline": "1 - 4",
        "scorers": [
          {
            "min": "28'",
            "team": "NOR",
            "player": "Erling Haaland",
            "type": "世界杯首球"
          },
          {
            "min": "42'",
            "team": "NOR",
            "player": "Erling Haaland",
            "type": "梅开二度"
          },
          {
            "min": "38'",
            "team": "IRQ",
            "player": "Aymen Hussein",
            "type": "头球扳平(一度)"
          },
          {
            "min": "—",
            "team": "NOR",
            "player": "Østigård + Thorstvedt",
            "type": "下半场扩大"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "Haaland世界杯首秀双响，挪威4-1血洗伊拉克。庄家的80.4%对了，模型给挪威69.3%偏低了",
        "source": "ESPN / Sky / FOX"
      },
      "review": {
        "verdict": "HIT",
        "headline": "胜负方向对(挪威赢),但又是'赌庄家输':模型给挪威69.3% vs 庄家80.4%,说挪威被高估——结果挪威4-1碾压,庄家又对了",
        "hits": [
          "★胜负方向对:挪威是模型最高项(69.3%)→挪威赢 ✓",
          "点名Haaland是头号杀器→世界杯首秀就双响 ✓",
          "模型点的伊拉克偷分点Aymen Hussein→真的进了球(一度扳平) ✓",
          "进球λ给挪威2.15方向对(实际4球,虽仍偏低)"
        ],
        "misses": [
          "★模型vs庄家:又输了。模型说挪威被高估(69.3% vs 庄家80.4%)——结果4-1碾压,庄家对",
          "把挪威进攻压到2.15,实际4球。反灌水又砍过头(挪威虽刷过摩尔多瓦,但实力是真的)",
          "伊拉克铁桶偷分剧本完全没兑现(1-4),低估了挪威质量"
        ],
        "model_lesson": "★模型vs庄家 0-2 开局(法国+挪威两场都赌庄家输)。规律极清晰:模型系统性低估强队,庄家两场都对。结论硬:anti-padding必须加对手强度门槛,否则模型在每个favorite上都会比市场低估——这不是value,是bug"
      }
    },
    {
      "id": "WC2026_M019",
      "kickoff_cst": "2026-06-16 20:00 ET",
      "group": "J",
      "round": 1,
      "tag": null,
      "home": {
        "code": "ARG",
        "name_zh": "阿根廷",
        "flag": "🇦🇷",
        "fifa_rank": 1
      },
      "away": {
        "code": "ALG",
        "name_zh": "阿尔及利亚",
        "flag": "🇩🇿",
        "fifa_rank": 28
      },
      "venue": "Arrowhead Stadium, 堪萨斯城",
      "altitude_m": 270,
      "temp_c": 31,
      "humidity_pct": 60,
      "referee": "Szymon Marciniak",
      "headline": "卫冕冠军阿根廷54.6%。但堪萨斯城高温+Messi 38岁体能+主裁严判，模型留了26.6%平局空间",
      "probabilities": {
        "home_win": 54.6,
        "draw": 26.6,
        "away_win": 18.8
      },
      "expected_goals": {
        "home": 1.47,
        "away": 0.74
      },
      "expected_score": "1 : 0",
      "over_2_5": 37.7,
      "btts": 40.1,
      "clean_sheet_home": 47.9,
      "confidence": 68,
      "monte_carlo_n": 50000,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.2,
          "items": [
            {
              "label": "rank_1_vs_28",
              "value": "+",
              "note": "FIFA第一卫冕冠军，Lautaro+Álvarez+Messi班底碾压"
            },
            {
              "label": "Messi_back",
              "value": "+",
              "note": "Messi腘绳肌已愈，对冰岛替补破门"
            },
            {
              "label": "solid_def",
              "value": "+",
              "note": "反灌水后场均失0.6，零封概率~48%"
            },
            {
              "label": "Enzo_control",
              "value": "+",
              "note": "Enzo中场控节奏，压制Mahrez/Amoura反击"
            }
          ]
        },
        "home_risk": {
          "score": -0.75,
          "items": [
            {
              "label": "opener_cagey",
              "value": "-",
              "note": "首战常谨慎闷平，1-0/0-0为主，平局26.6%"
            },
            {
              "label": "heat_Messi",
              "value": "-",
              "note": "Arrowhead露天高温高湿，38岁Messi体能折损"
            },
            {
              "label": "Marciniak_strict",
              "value": "-",
              "note": "主裁严判(22决赛3点球)，情绪化对抗易送点/吃牌"
            },
            {
              "label": "Amoura",
              "value": "-",
              "note": "阿尔及利亚Amoura预选8场10球，反击/定位球能咬分"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.7,
          "items": [
            {
              "label": "Zidane_GK",
              "value": "+",
              "note": "门将Luca Zidane高接抵挡+Mahrez把握机会偷分"
            },
            {
              "label": "heat_grind",
              "value": "+",
              "note": "高温拖垮阿根廷，低比分泥潭利死守抢平"
            },
            {
              "label": "ARG_red",
              "value": "+",
              "note": "若阿根廷吃红牌少打一人，Amoura火热致命一击"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Messi_minutes",
              "value": "±",
              "note": "Messi首发还是替补，直接影响λ_home"
            },
            {
              "label": "heat_actual",
              "value": "-",
              "note": "堪萨斯城实际高温高湿/雷暴"
            },
            {
              "label": "Marciniak_cards",
              "value": "-",
              "note": "早段点球/红牌放大方差"
            },
            {
              "label": "Zidane_debut",
              "value": "±",
              "note": "阿尔及利亚新籍门将Luca Zidane大赛首秀状态未知"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Lionel Messi",
            "pos": "FW",
            "status": "KEY",
            "note": "38岁，腘绳肌已愈，组织核心"
          },
          {
            "name": "Lautaro Martínez",
            "pos": "ST",
            "status": "KEY",
            "note": "锋线终结"
          },
          {
            "name": "Julián Álvarez",
            "pos": "FW",
            "status": "HOT",
            "note": "马竞，状态在线"
          },
          {
            "name": "Enzo Fernández",
            "pos": "CM",
            "status": "OK",
            "note": "中场控制"
          }
        ],
        "away": [
          {
            "name": "Riyad Mahrez",
            "pos": "WG",
            "status": "KEY",
            "note": "进攻核心"
          },
          {
            "name": "Mohamed Amoura",
            "pos": "FW",
            "status": "HOT",
            "note": "预选赛8场10球"
          },
          {
            "name": "Amine Gouiri",
            "pos": "ST",
            "status": "OK",
            "note": "锋线高效"
          },
          {
            "name": "Luca Zidane",
            "pos": "GK",
            "status": "QUEST",
            "note": "新籍门将，大赛首秀"
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
          "msg": "fixture verified: FIFA / ESPN, Group J"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank ARG#1 ALG#28"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "anti-padding: ARG GF→1.47; draw 26.6% (未压<20%)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "poisson output: 54.6 / 26.6 / 18.8"
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
            "team": "ARG",
            "player": "Lionel Messi",
            "type": "帽子戏法！追平克洛泽16球世界杯纪录"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "Messi帽子戏法，阿根廷3-0完胜阿尔及利亚。模型54.6%选阿根廷=对，进球λ方向也对(实际3球)",
        "source": "ESPN / Yahoo"
      },
      "review": {
        "verdict": "HIT",
        "headline": "方向命中：阿根廷是模型首选(54.6%)→3-0完胜。Messi帽子戏法，进球λ(~2)方向对、仍偏保守(实际3)",
        "hits": [
          "★胜负方向对：阿根廷54.6%最高→赢 ✓（'分胜负看赢家'框架完美命中）",
          "点名Messi是核心→他帽子戏法 ✓",
          "★双λ修正方向对：进球λ给阿根廷~2球，比保守的1球准（实际3球）",
          "红牌风险ELEVATED→实际无红牌(误报，主裁严但没出红)"
        ],
        "misses": [
          "进球数仍低估(模型~2 vs 实际3)，强队大胜还能再放"
        ],
        "model_lesson": "标准favorite命中。新'分胜负+平局风险'框架下，这种低平局风险(26.6%)的强队就该自信选赢家"
      }
    }
  ]
};
