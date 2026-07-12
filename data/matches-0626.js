// 世界杯预测数据 - 2026-06-26
// ★诚实声明:概率=48家盘口去水隐含概率为基准 + 人工按真实因素小幅调整,非蒙特卡洛/非模型自动算;
//   比分/盘口/排名/伤停/场馆/天气 均为查证过的真数据。预测判断会错,但不掺假数字。
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-26"] = {
  "date": "2026-06-26",
  "tournament": "FIFA World Cup 2026 · 小组末轮收官 MD3 (I/H/G组)",
  "model_version": "预测法:48家庄家盘口(The Odds API)去水后市场隐含概率为基准 + 按真实因素(伤停/主客场/高原/天气/停赛)人工小幅调整 · ★非蒙特卡洛、非模型自动计算,概率含人工判断",
  "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有盘口;末轮豪强双刃:争头名/打鱼腩则碾压,真无欲+对手拼命则爆冷风险高(6/25德国/美国翻车教训) ｜ ⚠️诚实:概率=盘口锚定+人工判断,非模型算出;比分/盘口/排名/伤停/天气均查证",
  "matches": [
    {
      "id": "WC2026_M060",
      "kickoff_cst": "2026-06-26 15:00 ET",
      "group": "I",
      "round": 3,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "NOR",
        "name_zh": "挪威",
        "flag": "🇳🇴",
        "fifa_rank": 31
      },
      "away": {
        "code": "FRA",
        "name_zh": "法国",
        "flag": "🇫🇷",
        "fifa_rank": 2
      },
      "venue": "Boston Stadium, 波士顿",
      "altitude_m": 10,
      "temp_c": 24,
      "humidity_pct": 60,
      "referee": "未公布",
      "headline": "豪门对决争头名：法国44%。两队都2连胜已出线(各6分),Haaland vs Mbappé。都无出线压力可能轮换+争头名动机并存→近三选一",
      "probabilities": {
        "home_win": 28,
        "draw": 28,
        "away_win": 44
      },
      "expected_goals": {
        "home": 1.2,
        "away": 1.65
      },
      "expected_score": "1 : 2",
      "over_2_5": 53,
      "btts": 55,
      "clean_sheet_home": 24,
      "confidence": 55,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.4,
          "items": [
            {
              "label": "Haaland",
              "value": "+",
              "note": "Haaland火热(4-1伊拉克),挪威2连胜势头正盛"
            },
            {
              "label": "both_through",
              "value": "+",
              "note": "挪威已出线无压力,可放开踢争头名"
            },
            {
              "label": "Odegaard",
              "value": "+",
              "note": "Ødegaard组织+Haaland终结,进攻有质量"
            }
          ]
        },
        "home_risk": {
          "score": -0.95,
          "items": [
            {
              "label": "FRA_quality",
              "value": "-",
              "note": "FIFA 2 vs 31,法国Mbappé+Tchouaméni深度全面碾压"
            },
            {
              "label": "FRA_form",
              "value": "-",
              "note": "法国2连胜(3-1塞/3-0伊)零封能力强,防Haaland有人"
            },
            {
              "label": "rotation_risk",
              "value": "±",
              "note": "若挪威大轮换护淘汰赛则强度降"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            {
              "label": "market_fav",
              "value": "本就favorite",
              "note": "法国盘口隐含~45-50%,模型贴市场"
            },
            {
              "label": "Mbappe",
              "value": "+",
              "note": "Mbappé速度打挪威压上的身后,反击致命"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "rotation_both",
              "value": "±",
              "note": "★双方轮换幅度=最大变量;都出线易踢成温和平局"
            },
            {
              "label": "head_to_head_GD",
              "value": "±",
              "note": "争头名靠净胜球,可能影响进攻欲望"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "谁先进球决定另一方是否压上"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Erling Haaland",
            "pos": "ST",
            "status": "HOT",
            "note": "本届火热,4-1伊拉克进球"
          },
          {
            "name": "Martin Ødegaard",
            "pos": "AM",
            "status": "KEY",
            "note": "阿森纳,组织核心"
          },
          {
            "name": "Alexander Sørloth",
            "pos": "ST",
            "status": "OK",
            "note": "副锋"
          },
          {
            "name": "挪威后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "防Mbappé速度是难题"
          }
        ],
        "away": [
          {
            "name": "Kylian Mbappé",
            "pos": "ST",
            "status": "HOT",
            "note": "队长,反击爆点"
          },
          {
            "name": "Aurélien Tchouaméni",
            "pos": "CM",
            "status": "KEY",
            "note": "中场屏障"
          },
          {
            "name": "Ousmane Dembélé",
            "pos": "RW",
            "status": "OK",
            "note": "边路速度"
          },
          {
            "name": "Mike Maignan",
            "pos": "GK",
            "status": "OK",
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
          "msg": "★真预测,ODDS tab有盘口"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank NOR#31 FRA#2;两队都已出线争头名"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "都无压力可能轮换→近三选一,但法国质量占优;Haaland vs Mbappé钩子"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 28.0 / 28.0 / 44.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 4,
        "scoreline": "1 - 4",
        "scorers": [
          {
            "min": "—",
            "team": "FRA",
            "player": "法国",
            "type": "4-1大胜,Mbappé领衔"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "法国4-1血洗挪威。模型押法国(44%三选一)→方向对,但判温和平局(1:2),实际法国4球血洗",
        "source": "多源核实"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★方向命中:法国44%→4-1。但'都出线可能轮换→温和平局'判断错,法国全力4球血洗",
        "hits": [
          "★胜负方向对：法国44%(三选一最高)→赢 ✓（真盲测）",
          "Mbappé/法国质量碾压挪威兑现"
        ],
        "misses": [
          "★比分严重低估:预测法国1.65球→实际4球",
          "'两队都出线可能轮换打平'判断错,法国根本没留力"
        ],
        "model_lesson": "又一个强队进球低估+'已出线轮换'误判。法国争头名全力打,4-1。末轮豪强进球λ要更敢给"
      }
    },
    {
      "id": "WC2026_M061",
      "kickoff_cst": "2026-06-26 15:00 ET",
      "group": "I",
      "round": 3,
      "tag": null,
      "home": {
        "code": "SEN",
        "name_zh": "塞内加尔",
        "flag": "🇸🇳",
        "fifa_rank": 15
      },
      "away": {
        "code": "IRQ",
        "name_zh": "伊拉克",
        "flag": "🇮🇶",
        "fifa_rank": 58
      },
      "venue": "Toronto Stadium, 多伦多",
      "altitude_m": 76,
      "temp_c": 23,
      "humidity_pct": 58,
      "referee": "未公布",
      "headline": "塞内加尔58%：两队都0分已出局的荣誉战。塞内加尔纸面实力(FIFA15)远超伊拉克,但两连败士气低迷",
      "probabilities": {
        "home_win": 58,
        "draw": 23,
        "away_win": 19
      },
      "expected_goals": {
        "home": 1.7,
        "away": 0.85
      },
      "expected_score": "2 : 0",
      "over_2_5": 48,
      "btts": 44,
      "clean_sheet_home": 42,
      "confidence": 60,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1,
          "items": [
            {
              "label": "rank_gap",
              "value": "+",
              "note": "FIFA 15 vs 58,塞内加尔(Mané/Koulibaly级)个人能力强一档"
            },
            {
              "label": "pride",
              "value": "+",
              "note": "塞内加尔两连败,荣誉战想体面收尾"
            },
            {
              "label": "IRQ_weak",
              "value": "+",
              "note": "伊拉克两场丢7球(0-4法/1-4挪),防线脆弱"
            }
          ]
        },
        "home_risk": {
          "score": -0.55,
          "items": [
            {
              "label": "SEN_morale",
              "value": "-",
              "note": "塞内加尔两连败信心崩,无欲无求易松懈"
            },
            {
              "label": "dead_rubber",
              "value": "-",
              "note": "双方都出局,可能踢得拖沓低强度"
            },
            {
              "label": "IRQ_park_bus",
              "value": "-",
              "note": "伊拉克若摆大巴,塞内加尔低迷锋线难破"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.35,
          "items": [
            {
              "label": "both_eliminated",
              "value": "+",
              "note": "都出局=变量大,伊拉克放手一搏或偷分"
            },
            {
              "label": "SEN_flat",
              "value": "+",
              "note": "塞内加尔松懈则伊拉克定位球偷袭"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "motivation",
              "value": "±",
              "note": "★两队荣誉战动机=最大未知,易踢成闷局"
            },
            {
              "label": "rotation",
              "value": "±",
              "note": "塞内加尔可能练新人"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "塞内加尔早进则轻松"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "塞内加尔锋线",
            "pos": "FW",
            "status": "QUEST",
            "note": "两连败,需找回状态"
          },
          {
            "name": "Pape Matar Sarr",
            "pos": "CM",
            "status": "OK",
            "note": "热刺,中场"
          },
          {
            "name": "Édouard Mendy",
            "pos": "GK",
            "status": "OK",
            "note": "门将"
          },
          {
            "name": "Kalidou Koulibaly",
            "pos": "CB",
            "status": "OK",
            "note": "后防核心"
          }
        ],
        "away": [
          {
            "name": "Aymen Hussein",
            "pos": "ST",
            "status": "OK",
            "note": "伊拉克锋线"
          },
          {
            "name": "伊拉克防线",
            "pos": "DF",
            "status": "QUEST",
            "note": "两场丢7球"
          },
          {
            "name": "Jalal Hassan",
            "pos": "GK",
            "status": "OK",
            "note": "门将"
          },
          {
            "name": "伊拉克中场",
            "pos": "CM",
            "status": "OK",
            "note": "拼抢"
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
          "msg": "FIFA rank SEN#15 IRQ#58;双方均已出局"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "荣誉战双方无欲→给塞内加尔58%但置信不高,易闷局"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 58.0 / 23.0 / 19.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 5,
        "away_goals": 0,
        "scoreline": "5 - 0",
        "scorers": [
          {
            "min": "4'",
            "team": "SEN",
            "player": "Habib Diarra",
            "type": "开场闪击"
          },
          {
            "min": "—",
            "team": "SEN",
            "player": "Sarr/Pape Gueye×2/Ndiaye",
            "type": "下半场打崩"
          }
        ],
        "red_cards": [
          {
            "team": "IRQ",
            "player": "Rebin Sulaka",
            "min": "—"
          }
        ],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "塞内加尔5-0血洗伊拉克(10人)。模型押塞(58%)→方向对,但赛前判'易闷局/低比分'惨败,塞4分钟就破门",
        "source": "ESPN/Sky"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★方向命中但满盘皆输:塞58%→5-0。我赛前判'荣誉战易闷局/士气低'彻底打脸",
        "hits": [
          "★胜负方向对：塞内加尔58%→赢 ✓（真盲测）"
        ],
        "misses": [
          "★比分灾难性低估:预测塞1.70球→实际5球(伊拉克红牌后放开,但法国/比利时无红牌也打崩=系统性)",
          "★赛前'易闷局/无欲/磨不开'判断完全错,塞4分钟进球"
        ],
        "model_lesson": "这场胜负方向对了,但满盘皆输在比分:预测塞内加尔进1.70球,实际5球,低估得离谱。更大的错是赛前靠直觉判'荣誉战、易闷局、士气低',结果塞内加尔4分钟就进球,直觉完全打脸。伊拉克红牌是个变量,但没有红牌的强队(法国/比利时)也照样打崩弱旅,说明是系统性低估。教训:压强队进球别靠'闷局'这种直觉,要信模型和整体实力对比"
      }
    },
    {
      "id": "WC2026_M062",
      "kickoff_cst": "2026-06-26 20:00 ET",
      "group": "H",
      "round": 3,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "URU",
        "name_zh": "乌拉圭",
        "flag": "🇺🇾",
        "fifa_rank": 11
      },
      "away": {
        "code": "ESP",
        "name_zh": "西班牙",
        "flag": "🇪🇸",
        "fifa_rank": 3
      },
      "venue": "Estadio Akron, 瓜达拉哈拉",
      "altitude_m": 1566,
      "temp_c": 22,
      "humidity_pct": 52,
      "referee": "未公布",
      "headline": "西班牙40%：夺冠热门(4-0沙特)争头名,平即够。乌拉圭2分必须搏分,Núñez/Valverde会拼命→生死战压低西班牙",
      "probabilities": {
        "home_win": 29,
        "draw": 31,
        "away_win": 40
      },
      "expected_goals": {
        "home": 1.05,
        "away": 1.4
      },
      "expected_score": "1 : 1",
      "over_2_5": 44,
      "btts": 48,
      "clean_sheet_home": 28,
      "confidence": 54,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.45,
          "items": [
            {
              "label": "must_win",
              "value": "+",
              "note": "乌拉圭2分,赢才稳出线,Bielsa会全力压上"
            },
            {
              "label": "Nunez_Valverde",
              "value": "+",
              "note": "Núñez冲击+Valverde中场强度,硬度足"
            },
            {
              "label": "physicality",
              "value": "+",
              "note": "乌拉圭身体+经验,能搅乱西班牙传控"
            }
          ]
        },
        "home_risk": {
          "score": -0.9,
          "items": [
            {
              "label": "ESP_quality",
              "value": "-",
              "note": "FIFA 3,西班牙Yamal/Pedri传控+4-0沙特火力验证"
            },
            {
              "label": "ESP_form",
              "value": "-",
              "note": "西班牙小组最强,控球碾压可耗死乌拉圭"
            },
            {
              "label": "altitude",
              "value": "-",
              "note": "瓜达拉哈拉1566m海拔,体能消耗大"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            {
              "label": "market_fav",
              "value": "本就favorite",
              "note": "西班牙盘口favorite,模型贴市场"
            },
            {
              "label": "draw_enough",
              "value": "±",
              "note": "西班牙平局即头名,可能控场不冒进→压低己方λ"
            },
            {
              "label": "Yamal",
              "value": "+",
              "note": "Yamal/Williams边路爆点"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "ESP_motivation",
              "value": "±",
              "note": "★西班牙平即头名,会否全力=关键;若控场则比分低"
            },
            {
              "label": "URU_desperation",
              "value": "+",
              "note": "乌拉圭必须赢→后段压上留反击空间"
            },
            {
              "label": "cards",
              "value": "-",
              "note": "乌拉圭身体战,红黄牌风险高"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Darwin Núñez",
            "pos": "ST",
            "status": "KEY",
            "note": "冲击点,必须进球"
          },
          {
            "name": "Federico Valverde",
            "pos": "CM",
            "status": "KEY",
            "note": "中场引擎"
          },
          {
            "name": "Ronald Araújo",
            "pos": "CB",
            "status": "OK",
            "note": "后防"
          },
          {
            "name": "Facundo Pellistri",
            "pos": "WG",
            "status": "OK",
            "note": "边路"
          }
        ],
        "away": [
          {
            "name": "Lamine Yamal",
            "pos": "RW",
            "status": "HOT",
            "note": "巴萨,边路爆点"
          },
          {
            "name": "Pedri",
            "pos": "CM",
            "status": "KEY",
            "note": "节拍器"
          },
          {
            "name": "Nico Williams",
            "pos": "LW",
            "status": "OK",
            "note": "速度"
          },
          {
            "name": "西班牙轮换",
            "pos": "—",
            "status": "QUEST",
            "note": "已基本出线,或部分轮换"
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
          "msg": "FIFA rank URU#11 ESP#3;西班牙平即头名"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "乌拉圭必须赢会拼命+西班牙平即够→平局31%当风险标尺,不硬猜"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 29.0 / 31.0 / 40.0"
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
            "team": "ESP",
            "player": "西班牙",
            "type": "1-0小胜,锁头名"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "西班牙1-0小胜乌拉圭,锁A组... K组头名。模型押西班牙(40%三选一)+判低比分→双双命中",
        "source": "多源核实"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★难得比分也判对:西班牙40%→1-0。赛前'平即头名可能控场+乌拉圭硬→低比分'精准",
        "hits": [
          "★胜负方向对：西班牙40%(三选一最高)→赢 ✓（真盲测）",
          "★低比分判断对(预警生死战谨慎+西班牙控场)→1-0,和强队井喷场相反",
          "乌拉圭进攻被掐(0进球)"
        ],
        "misses": [
          "略,几乎完美"
        ],
        "model_lesson": "今日唯一'方向+比分都对'的一场。'西班牙平即头名会控场不冒进'的判断把比分压住了,证明双λ思路在'有理由保守的强队'身上work"
      }
    },
    {
      "id": "WC2026_M063",
      "kickoff_cst": "2026-06-26 20:00 ET",
      "group": "H",
      "round": 3,
      "tag": null,
      "home": {
        "code": "CPV",
        "name_zh": "佛得角",
        "flag": "🇨🇻",
        "fifa_rank": 70
      },
      "away": {
        "code": "KSA",
        "name_zh": "沙特",
        "flag": "🇸🇦",
        "fifa_rank": 56
      },
      "venue": "NRG Stadium, 休斯顿",
      "altitude_m": 15,
      "temp_c": 29,
      "humidity_pct": 68,
      "referee": "未公布",
      "headline": "佛得角42%：2分搏出线(逼平西班牙的黑马),沙特1分已基本出局(0-4惨败西班牙)。低排名互掐,比分偏低",
      "probabilities": {
        "home_win": 42,
        "draw": 29,
        "away_win": 29
      },
      "expected_goals": {
        "home": 1.15,
        "away": 0.95
      },
      "expected_score": "1 : 0",
      "over_2_5": 38,
      "btts": 42,
      "clean_sheet_home": 40,
      "confidence": 53,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 0.5,
          "items": [
            {
              "label": "must_win",
              "value": "+",
              "note": "佛得角赢可能搏出线(黑马,逼平过西班牙),全力踢"
            },
            {
              "label": "morale",
              "value": "+",
              "note": "0-0西班牙+1-1乌拉圭的硬度,防守组织好"
            },
            {
              "label": "KSA_low",
              "value": "+",
              "note": "沙特0-4惨败西班牙信心受挫"
            }
          ]
        },
        "home_risk": {
          "score": -0.6,
          "items": [
            {
              "label": "CPV_attack",
              "value": "-",
              "note": "佛得角进攻有限,破密集防守乏力"
            },
            {
              "label": "KSA_counter",
              "value": "-",
              "note": "沙特反击+定位球仍有威胁"
            },
            {
              "label": "low_scoring",
              "value": "-",
              "note": "两队都偏防守,易闷平"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.3,
          "items": [
            {
              "label": "KSA_pride",
              "value": "+",
              "note": "沙特荣誉战想雪耻"
            },
            {
              "label": "set_piece",
              "value": "+",
              "note": "沙特定位球偷分"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "group_math",
              "value": "±",
              "note": "★佛得角出线还要看乌拉圭-西班牙结果,影响其冒进度"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "谁先进谁掌握主动"
            },
            {
              "label": "heat",
              "value": "-",
              "note": "休斯顿高温高湿,降节奏"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Ryan Mendes",
            "pos": "FW",
            "status": "OK",
            "note": "佛得角核心"
          },
          {
            "name": "佛得角后防",
            "pos": "DF",
            "status": "OK",
            "note": "逼平西班牙的组织"
          },
          {
            "name": "Vozinha",
            "pos": "GK",
            "status": "OK",
            "note": "门将"
          },
          {
            "name": "佛得角中场",
            "pos": "CM",
            "status": "OK",
            "note": "拼抢"
          }
        ],
        "away": [
          {
            "name": "Salem Al-Dawsari",
            "pos": "WG",
            "status": "KEY",
            "note": "沙特爆点"
          },
          {
            "name": "Firas Al-Buraikan",
            "pos": "ST",
            "status": "OK",
            "note": "锋线"
          },
          {
            "name": "沙特防线",
            "pos": "DF",
            "status": "QUEST",
            "note": "0-4失球多"
          },
          {
            "name": "沙特门将",
            "pos": "GK",
            "status": "OK",
            "note": "把关"
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
          "msg": "FIFA rank CPV#70 KSA#56;佛得角搏出线"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "低排名互掐+佛得角进攻有限→低比分,平局当风险"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 42.0 / 29.0 / 29.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 0,
        "away_goals": 0,
        "scoreline": "0 - 0",
        "scorers": [
          {
            "min": "—",
            "team": "—",
            "player": "无进球",
            "type": "0-0闷平"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "佛得角0-0沙特。模型押佛得角(42%)方向没中,但赛前已标'低排名互掐+佛得角进攻有限→低比分,平局当风险'→0-0正中",
        "source": "多源核实"
      },
      "review": {
        "verdict": "MISS",
        "headline": "✗方向没中但风险预警准:押佛得角(42%)→0-0。赛前'低比分+平局风险'全应验",
        "hits": [
          "★低比分判断精准(预警'佛得角进攻有限+两队偏防守')→0-0",
          "平局当风险标尺对"
        ],
        "misses": [
          "方向错:押佛得角42%→0-0平(没押平,但已预警)",
          "又一个平局"
        ],
        "model_lesson": "平局盲区,但'弱队互掐易闷平'的低比分预警到位。这类场维持'分胜负看赢家+平局当风险',不硬押"
      }
    },
    {
      "id": "WC2026_M064",
      "kickoff_cst": "2026-06-26 23:00 ET",
      "group": "G",
      "round": 3,
      "tag": null,
      "home": {
        "code": "NZL",
        "name_zh": "新西兰",
        "flag": "🇳🇿",
        "fifa_rank": 83
      },
      "away": {
        "code": "BEL",
        "name_zh": "比利时",
        "flag": "🇧🇪",
        "fifa_rank": 8
      },
      "venue": "BC Place, 温哥华",
      "altitude_m": 0,
      "temp_c": 21,
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "比利时53%：必须赢才出线(两平挣扎中),De Bruyne需带队。新西兰1分顽强(2-2伊朗)但实力差一档",
      "probabilities": {
        "home_win": 20,
        "draw": 27,
        "away_win": 53
      },
      "expected_goals": {
        "home": 0.8,
        "away": 1.65
      },
      "expected_score": "0 : 2",
      "over_2_5": 47,
      "btts": 40,
      "clean_sheet_home": 18,
      "confidence": 58,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": -1.2,
          "items": [
            {
              "label": "NZL_fight",
              "value": "+",
              "note": "新西兰顽强(2-2逼平伊朗),身体+定位球能搅局"
            },
            {
              "label": "BEL_struggle",
              "value": "+",
              "note": "比利时两平(1-1埃及/0-0伊朗)进攻哑火,信心不足"
            },
            {
              "label": "nothing_to_lose",
              "value": "+",
              "note": "新西兰无包袱可冲"
            }
          ]
        },
        "home_risk": {
          "score": -1.55,
          "items": [
            {
              "label": "BEL_quality",
              "value": "-",
              "note": "FIFA 8,De Bruyne/Doku个人能力碾压,必须赢会爆发"
            },
            {
              "label": "BEL_must_win",
              "value": "-",
              "note": "比利时必须赢出线→全力进攻不轮换"
            },
            {
              "label": "NZL_attack",
              "value": "-",
              "note": "新西兰进攻有限,难持续威胁"
            }
          ]
        },
        "away_upset_path": {
          "score": 1.3,
          "items": [
            {
              "label": "must_win_push",
              "value": "+",
              "note": "比利时必须赢→全力压上,质量终会破门"
            },
            {
              "label": "De_Bruyne",
              "value": "+",
              "note": "De Bruyne组织+定位球解锁密集防守"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "BEL_early_goal",
              "value": "±",
              "note": "★比利时早进球则放开,僵持久则焦虑(参其两平)"
            },
            {
              "label": "NZL_block",
              "value": "±",
              "note": "新西兰摆大巴能撑多久"
            },
            {
              "label": "set_piece",
              "value": "±",
              "note": "新西兰定位球是唯一爆冷路径"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Chris Wood",
            "pos": "ST",
            "status": "KEY",
            "note": "支点前锋"
          },
          {
            "name": "新西兰后防",
            "pos": "DF",
            "status": "OK",
            "note": "顽强,逼平伊朗"
          },
          {
            "name": "新西兰门将",
            "pos": "GK",
            "status": "OK",
            "note": "扑救指望"
          },
          {
            "name": "新西兰中场",
            "pos": "CM",
            "status": "OK",
            "note": "拼抢"
          }
        ],
        "away": [
          {
            "name": "Kevin De Bruyne",
            "pos": "AM",
            "status": "KEY",
            "note": "组织核心,解锁关键"
          },
          {
            "name": "Jérémy Doku",
            "pos": "WG",
            "status": "OK",
            "note": "边路突破"
          },
          {
            "name": "Romelu Lukaku",
            "pos": "ST",
            "status": "QUEST",
            "note": "终结点,需找状态"
          },
          {
            "name": "比利时中场",
            "pos": "CM",
            "status": "OK",
            "note": "控制"
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
          "msg": "FIFA rank NZL#83 BEL#8;比利时必须赢"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "比利时必须赢→全力(非无欲轮换),给53%;但其两平哑火是隐患"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 20.0 / 27.0 / 53.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 5,
        "scoreline": "1 - 5",
        "scorers": [
          {
            "min": "—",
            "team": "BEL",
            "player": "Trossard 双响 等",
            "type": "5-1大胜,末段连入"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "比利时5-1血洗新西兰。模型押比利时(53%)→方向对,但'两平挣扎'的比利时这场彻底放开,5球",
        "source": "FIFA/ESPN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★方向命中:比利时53%→5-1。'必须赢全力'判断对,但比分又严重低估(预测1.65球→5球)",
        "hits": [
          "★胜负方向对：比利时53%→赢 ✓（真盲测）",
          "★'必须赢→全力(非无欲轮换)'判断对,比利时放开打崩新西兰",
          "新西兰挡不住质量差"
        ],
        "misses": [
          "★比分大低估:预测比利时1.65球→实际5球",
          "两平哑火的比利时一旦放开就井喷,模型没料到"
        ],
        "model_lesson": "又一个强队进球低估(今日法国4/塞5/比利时5,预测全1.6-1.7)。对'必须赢且质量碾压'的豪强,进球λ要大幅上调"
      }
    },
    {
      "id": "WC2026_M065",
      "kickoff_cst": "2026-06-26 23:00 ET",
      "group": "G",
      "round": 3,
      "tag": "CLOSE_MATCH",
      "home": {
        "code": "EGY",
        "name_zh": "埃及",
        "flag": "🇪🇬",
        "fifa_rank": 33
      },
      "away": {
        "code": "IRN",
        "name_zh": "伊朗",
        "flag": "🇮🇷",
        "fifa_rank": 18
      },
      "venue": "Lumen Field, 西雅图",
      "altitude_m": 5,
      "temp_c": 23,
      "humidity_pct": 60,
      "referee": "未公布",
      "headline": "埃及40%微favored：4分领头(3-1新西兰),Salah火热。伊朗2分防守硬(0-0比利时)需搏分→低比分胶着",
      "probabilities": {
        "home_win": 40,
        "draw": 31,
        "away_win": 29
      },
      "expected_goals": {
        "home": 1.25,
        "away": 0.95
      },
      "expected_score": "1 : 1",
      "over_2_5": 40,
      "btts": 45,
      "clean_sheet_home": 32,
      "confidence": 54,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.45,
          "items": [
            {
              "label": "Salah",
              "value": "+",
              "note": "Salah火热+埃及3-1新西兰进攻打开,领头有动机争头名"
            },
            {
              "label": "EGY_lead",
              "value": "+",
              "note": "埃及4分占先,赢/平多数情况出线,心态主动"
            },
            {
              "label": "home_morale",
              "value": "+",
              "note": "状态回升,锋线有产出"
            }
          ]
        },
        "home_risk": {
          "score": -0.75,
          "items": [
            {
              "label": "IRN_defense",
              "value": "-",
              "note": "★伊朗防守扎实(0-0逼平比利时),低比分能限制埃及"
            },
            {
              "label": "IRN_must",
              "value": "-",
              "note": "伊朗需搏分出线,会全力+反击Taremi"
            },
            {
              "label": "IRN_rank",
              "value": "-",
              "note": "FIFA 18高于埃及33,整体不弱"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            {
              "label": "Taremi_counter",
              "value": "+",
              "note": "Taremi/Azmoun反击+定位球抓机会"
            },
            {
              "label": "low_block",
              "value": "+",
              "note": "伊朗低位防守+反击,0-1/1-0最可能"
            },
            {
              "label": "must_win_edge",
              "value": "+",
              "note": "伊朗求胜欲强于已占先的埃及"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "low_scoring",
              "value": "-",
              "note": "★伊朗防守+生死战谨慎→低比分,平局风险高"
            },
            {
              "label": "group_math",
              "value": "±",
              "note": "另一场新西兰-比利时结果影响两队冒进度"
            },
            {
              "label": "Salah_marking",
              "value": "±",
              "note": "伊朗如何盯防Salah决定埃及进攻效率"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Mohamed Salah",
            "pos": "RW",
            "status": "HOT",
            "note": "队长,进攻核心"
          },
          {
            "name": "Omar Marmoush",
            "pos": "FW",
            "status": "OK",
            "note": "搭档锋线"
          },
          {
            "name": "埃及后防",
            "pos": "DF",
            "status": "OK",
            "note": "组织"
          },
          {
            "name": "埃及门将",
            "pos": "GK",
            "status": "OK",
            "note": "把关"
          }
        ],
        "away": [
          {
            "name": "Mehdi Taremi",
            "pos": "ST",
            "status": "KEY",
            "note": "反击爆点"
          },
          {
            "name": "Sardar Azmoun",
            "pos": "FW",
            "status": "OK",
            "note": "终结"
          },
          {
            "name": "伊朗后防",
            "pos": "DF",
            "status": "KEY",
            "note": "逼平比利时的铁防"
          },
          {
            "name": "Alireza Beiranvand",
            "pos": "GK",
            "status": "OK",
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
          "msg": "★真预测,ODDS tab有盘口"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank EGY#33 IRN#18;埃及领头伊朗搏分"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "伊朗铁防+生死战谨慎→低比分,平局31%当风险标尺"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "预测概率(盘口锚定+人工调整): 40.0 / 31.0 / 29.0"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 1,
        "scoreline": "1 - 1",
        "scorers": [
          {
            "min": "5'",
            "team": "EGY",
            "player": "Mahmoud Saber"
          },
          {
            "min": "14'",
            "team": "IRN",
            "player": "Ramin Rezaeian"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "埃及1-1伊朗(伊朗补时绝杀被VAR越位取消)。模型押埃及(40%)方向没中,但赛前标'伊朗铁防+生死战谨慎→低比分平局风险'→1-1正中,埃及险些输",
        "source": "FIFA/ESPN"
      },
      "review": {
        "verdict": "MISS",
        "headline": "✗方向没中但风险预警准:押埃及(40%)→1-1。赛前'伊朗铁防+平局风险'应验,埃及还差点被VAR绝杀",
        "hits": [
          "★平局风险+低比分判断对(预警'伊朗铁防+生死战谨慎')→1-1",
          "Taremi/伊朗反击威胁判对(伊朗险绝杀,VAR越位救了埃及)"
        ],
        "misses": [
          "方向错:押埃及40%→1-1平(没押平,但已预警)",
          "又一个平局"
        ],
        "model_lesson": "平局盲区第N次,但'伊朗铁防→低比分'预警到位。埃及靠VAR保平出线——这种一念之差模型测不了,维持平局当风险"
      }
    }
  ]
};
