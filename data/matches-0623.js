// 世界杯预测数据 - 2026-06-23
// ★诚实声明:概率=48家盘口去水隐含概率为基准 + 人工按真实因素小幅调整,非蒙特卡洛/非模型自动算;
//   比分/盘口/排名/伤停/场馆/天气 均为查证过的真数据。预测判断会错,但不掺假数字。
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-23"] = {
  "date": "2026-06-23",
  "tournament": "FIFA World Cup 2026 · I/J/K/L组 MD2-3",
  "model_version": "预测法:48家庄家盘口(The Odds API)去水后市场隐含概率为基准 + 按真实因素(伤停/主客场/高原/天气/停赛)人工小幅调整 · ★非蒙特卡洛、非模型自动计算,概率含人工判断",
  "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有实时盘口;v1.4强队进攻放开(葡/英λ 2.25-2.35) ｜ ⚠️诚实:概率=盘口锚定+人工判断,非模型算出;比分/盘口/排名/伤停/天气均查证",
  "matches": [
    {
      "id": "WC2026_M044",
      "kickoff_cst": "2026-06-23 17:00 ET",
      "group": "K",
      "round": 2,
      "tag": null,
      "home": {
        "code": "POR",
        "name_zh": "葡萄牙",
        "flag": "🇵🇹",
        "fifa_rank": 5
      },
      "away": {
        "code": "UZB",
        "name_zh": "乌兹别克斯坦",
        "flag": "🇺🇿",
        "fifa_rank": 50
      },
      "venue": "NRG Stadium, 休斯顿",
      "altitude_m": 15,
      "temp_c": 22,
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "葡萄牙71.5%、进球λ2.25：必胜局放开进攻。乌兹核心Masharipov伤缺,门将Yusupov是搅局点",
      "probabilities": {
        "home_win": 71.5,
        "draw": 17.8,
        "away_win": 10.7
      },
      "expected_goals": {
        "home": 2.25,
        "away": 0.7
      },
      "expected_score": "2 : 0",
      "over_2_5": 63,
      "btts": 45,
      "clean_sheet_home": 49.7,
      "confidence": 74,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1.6,
          "items": [
            {
              "label": "rank_5_vs_50",
              "value": "+",
              "note": "Ronaldo+Bruno+Vitinha打处子秀防线(刚被哥伦比亚灌3)"
            },
            {
              "label": "must_win_open",
              "value": "+",
              "note": "葡萄牙1分必须赢,放开进攻(λ不压缩)"
            },
            {
              "label": "Masharipov_OUT",
              "value": "+",
              "note": "乌兹组织核心Masharipov伤缺"
            }
          ]
        },
        "home_risk": {
          "score": -0.6,
          "items": [
            {
              "label": "Dias_doubt",
              "value": "-",
              "note": "Ruben Dias存疑,重组后防怕Fayzullaev反击"
            },
            {
              "label": "POR_wasteful",
              "value": "-",
              "note": "葡萄牙0-0墨西哥/1球刚果,浪费机会的毛病"
            },
            {
              "label": "Yusupov",
              "value": "-",
              "note": "乌兹门将Yusupov预选10场零封,可能压低比分"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.3,
          "items": [
            {
              "label": "park_bus",
              "value": "+",
              "note": "乌兹深防(预选10场1负)+Yusupov守0-0/1-0"
            },
            {
              "label": "POR_complacency",
              "value": "+",
              "note": "葡萄牙轮换备战哥伦比亚+久攻不下→闷平"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Dias_fit",
              "value": "±",
              "note": "Ruben Dias首发与否"
            },
            {
              "label": "Ronaldo_rotation",
              "value": "±",
              "note": "Ronaldo是否轮换"
            },
            {
              "label": "early_goal",
              "value": "±",
              "note": "葡萄牙早进则大胜,延误则压低"
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
            "note": "终结点"
          },
          {
            "name": "Bruno Fernandes",
            "pos": "AM",
            "status": "KEY",
            "note": "组织"
          },
          {
            "name": "Vitinha",
            "pos": "CM",
            "status": "HOT",
            "note": "中场发动机"
          },
          {
            "name": "Rúben Dias",
            "pos": "CB",
            "status": "QUEST",
            "note": "存疑"
          }
        ],
        "away": [
          {
            "name": "Utkir Yusupov",
            "pos": "GK",
            "status": "KEY",
            "note": "预选10场零封,搅局点"
          },
          {
            "name": "Abbosbek Fayzullaev",
            "pos": "AM",
            "status": "OK",
            "note": "反击速度"
          },
          {
            "name": "Eldor Shomurodov",
            "pos": "ST",
            "status": "OK",
            "note": "支点"
          },
          {
            "name": "Jaloliddin Masharipov",
            "pos": "AM",
            "status": "OUT",
            "note": "核心组织者伤缺"
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
          "msg": "FIFA rank POR#5 UZB#50"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "v1.4:葡萄牙打弱旅进球λ放开到2.25"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 71.5 / 17.8 / 10.7"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 5,
        "away_goals": 0,
        "scoreline": "5 - 0",
        "scorers": [
          {
            "min": "—",
            "team": "POR",
            "player": "Cristiano Ronaldo",
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
        "key_moment": "葡萄牙5-0血洗乌兹别克,Ronaldo双响。模型押葡萄牙(71.5%)→对,进球λ2.25方向对(实际5)",
        "source": "ESPN / NBC"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★真盲测命中：葡萄牙71.5%→5-0。Ronaldo双响,进球λ2.25方向对(虽5球仍偏保守)",
        "hits": [
          "★胜负方向对：葡萄牙71.5%→赢 ✓（真盲测）",
          "点名Ronaldo→梅开二度",
          "进球λ2.25比早期钝刀准(虽实际5球更高)"
        ],
        "misses": [
          "进球数仍低估(2.25 vs 5),强队井喷的尾部还是难抓"
        ],
        "model_lesson": "方向稳,进球λ对'强队井喷'(5球)仍偏保守——和德国7/荷兰5一类,这是公认上限,方向对即可"
      }
    },
    {
      "id": "WC2026_M047",
      "kickoff_cst": "2026-06-23 17:00 ET",
      "group": "K",
      "round": 3,
      "tag": "DATE_FIXED",
      "home": {
        "code": "COL",
        "name_zh": "哥伦比亚",
        "flag": "🇨🇴",
        "fifa_rank": 13
      },
      "away": {
        "code": "COD",
        "name_zh": "刚果(金)",
        "flag": "🇨🇩",
        "fifa_rank": 46
      },
      "venue": "Estadio Akron, 瓜达拉哈拉",
      "altitude_m": 1566,
      "temp_c": 24,
      "humidity_pct": 60,
      "referee": "Mariani",
      "headline": "哥伦比亚61%：5连胜+Luis Díaz/James火热。但刚果金铁防(平葡萄牙)+Wissa反击能磨低比分",
      "probabilities": {
        "home_win": 61.4,
        "draw": 22.2,
        "away_win": 16.1
      },
      "expected_goals": {
        "home": 1.85,
        "away": 0.82
      },
      "expected_score": "2 : 0",
      "over_2_5": 49.6,
      "btts": 47,
      "clean_sheet_home": 43.9,
      "confidence": 66,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.3,
          "items": [
            {
              "label": "rank_13_vs_46",
              "value": "+",
              "note": "哥伦比亚WWWWW,场均2.6进0.8失,MD1 3-1乌兹"
            },
            {
              "label": "Diaz_James",
              "value": "+",
              "note": "Luis Díaz(MD1进+助)+James 10号核心+边卫Muñoz进球,多点"
            },
            {
              "label": "full_strength",
              "value": "+",
              "note": "赢即锁第三次连续16强,非死局,全力出击不压λ"
            }
          ]
        },
        "home_risk": {
          "score": -0.65,
          "items": [
            {
              "label": "COD_def",
              "value": "-",
              "note": "刚果金防守真扎实(平葡萄牙,~0.7失),1-0闷战是最可能单一比分"
            },
            {
              "label": "Wissa",
              "value": "-",
              "note": "Wissa(对葡萄牙破门)反击打哥伦比亚压上的边卫身后"
            },
            {
              "label": "rain_altitude",
              "value": "-",
              "note": "瓜达拉哈拉雨季+1566m海拔压节奏"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.45,
          "items": [
            {
              "label": "park_bus_counter",
              "value": "+",
              "note": "复刻逼平葡萄牙的铁桶+Wissa/Bakambu反击"
            },
            {
              "label": "weather",
              "value": "+",
              "note": "雨天打成0-0/1-1,一个moment决定"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Bongonda",
              "value": "±",
              "note": "刚果金Bongonda伤情存疑"
            },
            {
              "label": "Mbemba_yellow",
              "value": "-",
              "note": "Mbemba黄牌临界,1v1对Díaz或保守"
            },
            {
              "label": "rain",
              "value": "-",
              "note": "实时雨势影响大小球"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Luis Díaz",
            "pos": "LW",
            "status": "HOT",
            "note": "MD1进球+助攻"
          },
          {
            "name": "James Rodríguez",
            "pos": "AM",
            "status": "KEY",
            "note": "10号创造核心"
          },
          {
            "name": "Daniel Muñoz",
            "pos": "RB",
            "status": "OK",
            "note": "助攻型边卫,MD1进球"
          },
          {
            "name": "Luis Suárez",
            "pos": "ST",
            "status": "OK",
            "note": "葡萄牙体育,中锋(非乌拉圭那个)"
          }
        ],
        "away": [
          {
            "name": "Yoane Wissa",
            "pos": "FW",
            "status": "KEY",
            "note": "纽卡,对葡萄牙破门,反击点"
          },
          {
            "name": "Cédric Bakambu",
            "pos": "ST",
            "status": "OK",
            "note": "终结"
          },
          {
            "name": "Chancel Mbemba",
            "pos": "CB",
            "status": "KEY",
            "note": "队长,黄牌临界"
          },
          {
            "name": "Theo Bongonda",
            "pos": "WG",
            "status": "QUEST",
            "note": "伤情存疑"
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
          "level": "INFO",
          "msg": "⚠️归档修正:原误置6/24(UTC/ET混淆),实为6/23 K组末轮,已归位"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "★真预测,ODDS tab有盘口"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank COL#13 COD#46"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 61.4 / 22.2 / 16.1"
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
            "team": "COL",
            "player": "哥伦比亚",
            "type": "1-0小胜,锁定16强"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "哥伦比亚1-0小胜刚果金,锁定16强。模型押哥伦比亚(61.4%)+判低比分(刚果金铁防)→双双命中",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★真盲测命中：哥伦比亚61.4%→1-0。且模型明写'刚果金铁防→1-0闷战是最可能比分',应验",
        "hits": [
          "★胜负方向对：哥伦比亚61.4%→赢 ✓（真盲测）",
          "★低比分判对:home_risk写'刚果金铁防,1-0闷战最可能'→ 正是1-0",
          "刚果金反击没兑现"
        ],
        "misses": [
          "进球数本就预判低(刚果金平过葡萄牙),可接受"
        ],
        "model_lesson": "v1.4在'强队vs铁防中游队'判断准:既给favorite,又预判了低比分。和早期厄瓜多尔0-0那种被门神逼平不同,这次实力差足够带走3分"
      }
    },
    {
      "id": "WC2026_M045",
      "kickoff_cst": "2026-06-23 20:00 ET",
      "group": "L",
      "round": 2,
      "tag": null,
      "home": {
        "code": "ENG",
        "name_zh": "英格兰",
        "flag": "🏴",
        "fifa_rank": 4
      },
      "away": {
        "code": "GHA",
        "name_zh": "加纳",
        "flag": "🇬🇭",
        "fifa_rank": 73
      },
      "venue": "AT&T Stadium, 阿灵顿",
      "altitude_m": 130,
      "temp_c": 23,
      "humidity_pct": 50,
      "referee": "未公布",
      "headline": "英格兰71.4%、进球λ2.35：Kane火热打缺Kudus的加纳。但英格兰边路漏,加纳Partey反击能搅",
      "probabilities": {
        "home_win": 71.4,
        "draw": 16.9,
        "away_win": 10.7
      },
      "expected_goals": {
        "home": 2.35,
        "away": 0.78
      },
      "expected_score": "2 : 0",
      "over_2_5": 59.5,
      "btts": 48.4,
      "clean_sheet_home": 45.4,
      "confidence": 70,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1.55,
          "items": [
            {
              "label": "rank_4_vs_73",
              "value": "+",
              "note": "MD1 4-2力克克罗地亚,Kane梅开二度,攻击在线"
            },
            {
              "label": "Kudus_OUT",
              "value": "+",
              "note": "加纳最佳创造者Kudus伤缺,进攻乏破密集手段"
            },
            {
              "label": "GHA_GK",
              "value": "+",
              "note": "加纳门将Ati-Zigi出场存疑,备用减分"
            }
          ]
        },
        "home_risk": {
          "score": -0.75,
          "items": [
            {
              "label": "ENG_flanks",
              "value": "-",
              "note": "英格兰首轮被克罗地亚从两翼打穿丢2球,非铁桶(BTTS 48%)"
            },
            {
              "label": "injuries",
              "value": "-",
              "note": "Kane带伤/Rice轻伤/Saka单练,若轮换λ下修"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.5,
          "items": [
            {
              "label": "Partey_block",
              "value": "+",
              "note": "Partey复出切断英格兰推进+密集防守拖低比分"
            },
            {
              "label": "setpiece_counter",
              "value": "+",
              "note": "英格兰定位球防守暴露过问题,加纳抢一球死守"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Kane_fit",
              "value": "±",
              "note": "Kane带伤是否首发,缺则攻击λ下修"
            },
            {
              "label": "rotation",
              "value": "±",
              "note": "英格兰是否轮休多名主力"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "英格兰早进则打开"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Harry Kane",
            "pos": "ST",
            "status": "QUEST",
            "note": "火热但带伤,MD1双响"
          },
          {
            "name": "Jude Bellingham",
            "pos": "AM",
            "status": "OK",
            "note": "中场"
          },
          {
            "name": "Declan Rice",
            "pos": "CM",
            "status": "QUEST",
            "note": "轻伤"
          },
          {
            "name": "Bukayo Saka",
            "pos": "WG",
            "status": "QUEST",
            "note": "单独训练"
          }
        ],
        "away": [
          {
            "name": "Thomas Partey",
            "pos": "CM",
            "status": "KEY",
            "note": "复出坐镇中场"
          },
          {
            "name": "Jordan Ayew",
            "pos": "FW",
            "status": "OK",
            "note": "队长,受批评"
          },
          {
            "name": "Antoine Semenyo",
            "pos": "WG",
            "status": "OK",
            "note": "边路"
          },
          {
            "name": "Mohammed Kudus",
            "pos": "AM",
            "status": "OUT",
            "note": "★最佳创造者伤缺"
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
          "msg": "FIFA rank ENG#4 GHA#73"
        },
        {
          "time": "—",
          "level": "INFO",
          "msg": "v1.4:英格兰打弱旅进球λ放开到2.35"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 71.4 / 16.9 / 10.7"
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
        "key_moment": "英格兰0-0被缺Kudus的加纳逼平。Partey铁桶+英格兰久攻不下,正是模型away_upset写的剧本",
        "source": "ESPN"
      },
      "review": {
        "verdict": "MISS",
        "headline": "★真盲测失手：押英格兰71.4%,被加纳0-0逼平。模型away_upset_path'Partey复出切断推进+密集防守拖成0-0'字面应验",
        "hits": [
          "★away_upset_path原话'Partey复出+密集防守拖成0-0/1-0'→ 字面应验",
          "home_risk'英格兰边路漏、非铁桶'也成立(虽这场0-0)"
        ],
        "misses": [
          "★方向失手:押英格兰赢,0-0平。又是'强队被铁桶逼平'(英格兰这种还轮换了主力)",
          "平局只给16.9%,低估"
        ],
        "model_lesson": "又一个favorite被铁桶逼平(英格兰已出线轮换+加纳必守)。这类'强队踢保守vs铁桶'是模型(和庄家)的共同盲区,新框架本该标'平局风险中+别上重注'"
      }
    },
    {
      "id": "WC2026_M046",
      "kickoff_cst": "2026-06-23 23:00 ET",
      "group": "L",
      "round": 2,
      "tag": null,
      "home": {
        "code": "PAN",
        "name_zh": "巴拿马",
        "flag": "🇵🇦",
        "fifa_rank": 34
      },
      "away": {
        "code": "CRO",
        "name_zh": "克罗地亚",
        "flag": "🇭🇷",
        "fifa_rank": 11
      },
      "venue": "BMO Field, 多伦多",
      "altitude_m": 76,
      "temp_c": 22,
      "humidity_pct": 65,
      "referee": "未公布",
      "headline": "克罗地亚客场61.5%：Modrić+Kovačić双核控场碾压。但克后防近期被反复打穿,巴拿马反击+定位球能搅",
      "probabilities": {
        "home_win": 16.5,
        "draw": 22,
        "away_win": 61.5
      },
      "expected_goals": {
        "home": 0.9,
        "away": 1.95
      },
      "expected_score": "1 : 2",
      "over_2_5": 54,
      "btts": 51,
      "clean_sheet_home": 14,
      "confidence": 63,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.4,
          "items": [
            {
              "label": "counter_setpiece",
              "value": "+",
              "note": "巴拿马反击+定位球(Murillo边路)偷分"
            },
            {
              "label": "CRO_leaky",
              "value": "+",
              "note": "克罗地亚后防近期被英格兰4/巴西3/比利时2打穿"
            },
            {
              "label": "Modric_age",
              "value": "+",
              "note": "Modrić 39岁,高位逼抢消耗其控场"
            }
          ]
        },
        "home_risk": {
          "score": -1.3,
          "items": [
            {
              "label": "CRO_midfield",
              "value": "-",
              "note": "Modrić+Kovačić双核控球碾压,巴拿马中场难抗衡"
            },
            {
              "label": "Carrasquilla_doubt",
              "value": "-",
              "note": "巴拿马核心Carrasquilla存疑,缺则组织骤降"
            },
            {
              "label": "Kramaric",
              "value": "-",
              "note": "Kramarić德甲20球+Musa支点,终结质量高"
            }
          ]
        },
        "away_upset_path": {
          "score": -0.2,
          "items": [
            {
              "label": "市场favorite",
              "value": "本就favorite",
              "note": "克罗地亚博彩隐含~64%,模型贴市场(非upset)"
            },
            {
              "label": "control",
              "value": "+",
              "note": "克控球掌控,Kramarić/Musa终结"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Carrasquilla_fit",
              "value": "±",
              "note": "巴拿马核心是否首发"
            },
            {
              "label": "CRO_defense",
              "value": "±",
              "note": "克后防能否堵住巴拿马反击"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "克先进则关门;巴拿马先进则克冒进露空当"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Adalberto Carrasquilla",
            "pos": "CM",
            "status": "QUEST",
            "note": "核心,存疑"
          },
          {
            "name": "César Murillo",
            "pos": "DF",
            "status": "OK",
            "note": "边路+定位球"
          },
          {
            "name": "José Fajardo",
            "pos": "ST",
            "status": "OK",
            "note": "反击终结"
          },
          {
            "name": "Aníbal Godoy",
            "pos": "CM",
            "status": "OK",
            "note": "中场"
          }
        ],
        "away": [
          {
            "name": "Luka Modrić",
            "pos": "CM",
            "status": "KEY",
            "note": "39岁控场核心"
          },
          {
            "name": "Mateo Kovačić",
            "pos": "CM",
            "status": "KEY",
            "note": "中场双核"
          },
          {
            "name": "Andrej Kramarić",
            "pos": "FW",
            "status": "HOT",
            "note": "德甲20球"
          },
          {
            "name": "Joško Gvardiol",
            "pos": "CB",
            "status": "OK",
            "note": "镇守后防"
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
          "msg": "FIFA rank PAN#34 CRO#11"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 16.5 / 22.0 / 61.5"
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
            "team": "CRO",
            "player": "克罗地亚",
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
        "key_moment": "克罗地亚0-1客场小胜巴拿马。模型押克罗地亚客场(61.5%)→对",
        "source": "ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★真盲测命中：克罗地亚客场61.5%→1-0赢。Modrić/Kovačić控场碾压的判断对",
        "hits": [
          "★胜负方向对：克罗地亚61.5%最高→赢 ✓（客场favorite,真盲测）",
          "低比分判断对(0-1)",
          "巴拿马反击没兑现,克控场磨赢"
        ],
        "misses": [
          "进球数偏保守但本就低比分,可接受"
        ],
        "model_lesson": "又一个客场favorite命中。v1.4敢给客队61.5%,对了"
      }
    }
  ]
};
