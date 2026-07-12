// 世界杯预测数据 - 2026-07-05
// ★诚实声明:概率=48家盘口去水隐含概率为基准 + 按真实因素校准;
//   比分/盘口/排名/伤停/场馆/天气 均为查证过的真数据。预测判断会错,但不掺假数字。
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-05"] = {
  "date": "2026-07-05",
  "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 16",
  "model_version": "预测法:48家庄家盘口(The Odds API)去水后市场隐含概率为基准 + 按真实因素(伤停、主客场、高原、天气、停赛)校准",
  "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有48家盘口;淘汰赛90分钟胜平负,'平'=进加时;点球随机不预测 ｜ ⚠️诚实:概率=盘口去水为基准+按真实因素校准;比分/盘口/排名/伤停/天气均查证",
  "matches": [
    {
      "id": "WC2026_R16_03",
      "kickoff_cst": "2026-07-05 16:00 ET",
      "group": "R16",
      "round": 5,
      "tag": "KNOCKOUT",
      "home": {
        "code": "BRA",
        "name_zh": "巴西",
        "flag": "🇧🇷",
        "fifa_rank": 6
      },
      "away": {
        "code": "NOR",
        "name_zh": "挪威",
        "flag": "🇳🇴",
        "fifa_rank": 31
      },
      "venue": "MetLife Stadium, 新泽西",
      "altitude_m": 7,
      "temp_c": 29,
      "humidity_pct": 60,
      "referee": "未公布",
      "headline": "巴西50%/平26%/挪威24%：巴西Vini实力占优,挪威Haaland火力+势头(淘汰科特迪瓦)。庄家巴52.3%,接近,给挪威Haaland留空间,易进加时。★新泽西29°C热",
      "probabilities": {
        "home_win": 50,
        "draw": 26,
        "away_win": 24
      },
      "expected_goals": {
        "home": 1.5,
        "away": 1.15
      },
      "expected_score": "1 : 1",
      "over_2_5": 50,
      "btts": 54,
      "clean_sheet_home": 30,
      "confidence": 55,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.7,
          "items": [
            {
              "label": "BRA_quality",
              "value": "+",
              "note": "巴西Vinícius/Cunha个人能力+深度占优"
            },
            {
              "label": "experience",
              "value": "+",
              "note": "巴西大赛经验+淘汰赛底蕴"
            },
            {
              "label": "NOR_defense",
              "value": "+",
              "note": "挪威后防一般(小组赛被法国4球),可被冲击"
            }
          ]
        },
        "home_risk": {
          "score": -0.8,
          "items": [
            {
              "label": "Haaland",
              "value": "-",
              "note": "★Haaland火热(淘汰科特迪瓦绝杀),一个机会就能终结"
            },
            {
              "label": "Odegaard",
              "value": "-",
              "note": "Ødegaard组织+挪威反击"
            },
            {
              "label": "BRA_inconsistent",
              "value": "-",
              "note": "巴西起伏(小组赛被苏格兰逼过)"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.65,
          "items": [
            {
              "label": "vs_market",
              "value": "★分歧小",
              "note": "庄家巴52.3%/挪22%,我给挪24%——Haaland+挪威反击留空间"
            },
            {
              "label": "Haaland_service",
              "value": "+",
              "note": "喂饱Haaland则挪威有爆冷本钱"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "extra_time_likely",
              "value": "-",
              "note": "★实力接近→易进加时"
            },
            {
              "label": "Haaland_marking",
              "value": "±",
              "note": "巴西如何盯死Haaland"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "谁先进谁掌握主动"
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
            "note": "进攻箭头"
          },
          {
            "name": "Matheus Cunha",
            "pos": "ST",
            "status": "OK",
            "note": "终结"
          },
          {
            "name": "Casemiro",
            "pos": "CM",
            "status": "OK",
            "note": "中场屏障"
          },
          {
            "name": "Alisson",
            "pos": "GK",
            "status": "OK",
            "note": "门将"
          }
        ],
        "away": [
          {
            "name": "Erling Haaland",
            "pos": "ST",
            "status": "HOT",
            "note": "火热,终结点"
          },
          {
            "name": "Martin Ødegaard",
            "pos": "AM",
            "status": "KEY",
            "note": "组织核心"
          },
          {
            "name": "Alexander Sørloth",
            "pos": "ST",
            "status": "OK",
            "note": "副锋+头球"
          },
          {
            "name": "挪威后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "被法国灌4球,不稳"
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
          "msg": "★真预测,ODDS tab有48家盘口"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank BRA#6 NOR#31;R16淘汰赛"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型50/26/24 vs 庄家52.3/25.7/22:接近,给挪威Haaland留空间;易进加时"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口去水为基准): 50.0 / 26.0 / 24.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 2,
        "scoreline": "1 - 2",
        "scorers": [
          {
            "min": "下半场",
            "team": "NOR",
            "player": "Erling Haaland",
            "type": "梅开二度"
          },
          {
            "min": "—",
            "team": "BRA",
            "player": "Neymar(点球)",
            "type": "点球扳回1球"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "★挪威2-1爆冷淘汰巴西,Haaland下半场双响,首进世界杯八强(与1998同比分)!Nyland还扑了Bruno点球。我90分钟押巴西,但赛前把Haaland列头号风险+逆庄家给挪威24%>庄家22%,爆冷点命中",
        "source": "ESPN/Al Jazeera"
      },
      "review": {
        "verdict": "MISS",
        "headline": "✗90分钟押巴西但挪威爆冷,然而★Haaland爆冷点名+逆庄家给挪威空间都对",
        "hits": [
          "★逆庄家:我给挪威24%>庄家22%,挪威真爆冷晋级",
          "★赛前点名'Haaland一个机会就能终结'+'喂饱Haaland挪威有爆冷本钱'→Haaland双响正中",
          "'巴西起伏不稳(小组赛被苏格兰逼过)'判对,2-1翻车"
        ],
        "misses": [
          "主概率押巴西50%(最高)→挪威晋级,90分钟胜平负方向错"
        ],
        "model_lesson": "【豪门翻车又一例】这届淘汰赛:德国/荷兰/比利时/巴西接连被淘汰。主押强队的概率会被翻,但'识别爆冷点(Haaland)'的风险判断有价值——这场逆庄家给挪威+点名Haaland都对,只是主概率没敢直接反押巴西"
      }
    },
    {
      "id": "WC2026_R16_04",
      "kickoff_cst": "2026-07-05 20:00 ET",
      "group": "R16",
      "round": 5,
      "tag": "KNOCKOUT",
      "home": {
        "code": "MEX",
        "name_zh": "墨西哥",
        "flag": "🇲🇽",
        "fifa_rank": 14
      },
      "away": {
        "code": "ENG",
        "name_zh": "英格兰",
        "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "fifa_rank": 4
      },
      "venue": "Estadio Azteca, 墨西哥城",
      "altitude_m": 2200,
      "temp_c": 19,
      "humidity_pct": 50,
      "referee": "未公布",
      "headline": "墨西哥33%/平30%/英格兰37%：英格兰纸面强(Kane),但★阿兹台克2200m高原+墨西哥东道主是大均衡器,英格兰海平面队体能受影响。庄家英37.2%微favored,高原拉近,易进加时",
      "probabilities": {
        "home_win": 33,
        "draw": 30,
        "away_win": 37
      },
      "expected_goals": {
        "home": 1.1,
        "away": 1.25
      },
      "expected_score": "1 : 1",
      "over_2_5": 44,
      "btts": 50,
      "clean_sheet_home": 30,
      "confidence": 52,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.55,
          "items": [
            {
              "label": "altitude",
              "value": "+",
              "note": "★阿兹台克2200m高原,英格兰海平面队体能/球速受损,历史欧洲队常在此吃亏"
            },
            {
              "label": "home_crowd",
              "value": "+",
              "note": "墨西哥东道主+满场声浪+裁判心理"
            },
            {
              "label": "MEX_form",
              "value": "+",
              "note": "墨西哥2-0厄瓜多尔状态好,适应高原"
            }
          ]
        },
        "home_risk": {
          "score": -0.75,
          "items": [
            {
              "label": "ENG_quality",
              "value": "-",
              "note": "英格兰FIFA 4,Kane/Bellingham/Saka个人能力高一档"
            },
            {
              "label": "ENG_depth",
              "value": "-",
              "note": "英格兰阵容深度+淘汰赛经验"
            },
            {
              "label": "Kane",
              "value": "-",
              "note": "Kane一个机会就能终结"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.5,
          "items": [
            {
              "label": "vs_market",
              "value": "本就微favorite",
              "note": "庄家英37.2%微favored,我给37%贴市场;但高原把差距拉近"
            },
            {
              "label": "Kane_moment",
              "value": "+",
              "note": "Kane/Saka灵光一现破高原僵局"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "altitude_fatigue",
              "value": "-",
              "note": "★高原体能=最大变量,英格兰下半场可能掉速,墨西哥越拖越有利"
            },
            {
              "label": "rain",
              "value": "-",
              "note": "墨西哥城7月雨季,傍晚可能雷雨影响"
            },
            {
              "label": "extra_time",
              "value": "±",
              "note": "势均力敌+高原→易进加时,但英格兰高原打加时更吃亏"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Raúl Jiménez",
            "pos": "ST",
            "status": "OK",
            "note": "支点前锋"
          },
          {
            "name": "Julián Quiñones",
            "pos": "FW",
            "status": "OK",
            "note": "已进球"
          },
          {
            "name": "Edson Álvarez",
            "pos": "CM",
            "status": "KEY",
            "note": "中场拦截"
          },
          {
            "name": "César Montes",
            "pos": "CB",
            "status": "OK",
            "note": "后防"
          }
        ],
        "away": [
          {
            "name": "Harry Kane",
            "pos": "ST",
            "status": "KEY",
            "note": "队长,终结点"
          },
          {
            "name": "Jude Bellingham",
            "pos": "AM",
            "status": "KEY",
            "note": "中场推进"
          },
          {
            "name": "Bukayo Saka",
            "pos": "RW",
            "status": "OK",
            "note": "边路爆点"
          },
          {
            "name": "英格兰体能",
            "pos": "—",
            "status": "QUEST",
            "note": "★海平面队打2200m高原,下半场存疑"
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
          "msg": "★真预测,ODDS tab有48家盘口"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank MEX#14 ENG#4;R16淘汰赛"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型33/30/37 vs 庄家30.8/29.9/39.2:英格兰微favored,但2200m高原把差距拉近;易进加时"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "⛰️阿兹台克2200m高原+墨西哥主场=均衡器,英格兰海平面队体能是关键变量;7月雨季傍晚或雷雨"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口去水为基准): 33.0 / 30.0 / 37.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 2,
        "away_goals": 3,
        "scoreline": "2 - 3",
        "scorers": [
          {
            "min": "上半场",
            "team": "ENG",
            "player": "Jude Bellingham",
            "type": "梅开二度"
          },
          {
            "min": "60'",
            "team": "ENG",
            "player": "Harry Kane(点球)",
            "type": "3-1"
          },
          {
            "min": "—",
            "team": "MEX",
            "player": "Quiñones / Jiménez(点球69')",
            "type": "扳回2球"
          }
        ],
        "red_cards": [
          {
            "team": "ENG",
            "player": "Jarell Quansah",
            "min": "下半场"
          }
        ],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "英格兰3-2墨西哥,Bellingham双响+Kane点球,常规时间晋级。模型押英格兰(37%最高)→方向对;★高原+主场让墨西哥把英格兰拖到3-2(英格兰还吃红牌)但没能爆冷,实力顶住",
        "source": "ESPN/英足总"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★晋级方向对:英格兰37%→3-2。高原让比分接近(英格兰还吃红牌)但没颠覆实力",
        "hits": [
          "★晋级方向对：英格兰37%(三选一最高)→赢 ✓（真盲测）",
          "Bellingham双响+Kane点球,核心兑现",
          "★高原判断部分对:比分很接近(3-2)+英格兰红牌,墨西哥进2球没输太多——高原确实拉近了"
        ],
        "misses": [
          "我给墨西哥33%高原空间→墨西哥没爆冷(输了),但把英格兰拖到3-2算判对一半"
        ],
        "model_lesson": "押英格兰对。高原+主场是均衡器(把差距从纸面拉到3-2、逼出英格兰红牌)但没能颠覆实力——英格兰核心质量顶住。给墨西哥高原空间对了一半:接近但没爆冷"
      }
    }
  ]
};
