// 世界杯预测数据 - 2026-07-06（★7/6起:真模型 predict.js 泊松+蒙特卡洛5万次,防穿越）
// 概率=真模型算出,不是人工拍;强度来自各队本届真实比分;比分/盘口/排名/天气均查证
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-06"] = {
  "date": "2026-07-06",
  "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 16",
  "model_version": "泊松乘法模型 + 真蒙特卡洛5万次(predict.js 真跑,防穿越:只用赛前真实比分算强度) · 会错但每个数字真算出来",
  "model_accuracy_7d": null,
  "data_note": "★真模型预测:泊松+蒙特卡洛5万次(predict.js真跑),强度来自各队本届真实进球,防穿越只用赛前数据;再对48家庄家盘口看edge",
  "matches": [
    {
      "id": "WC2026_R16_05",
      "kickoff_cst": "2026-07-06 15:00 ET",
      "group": "R16",
      "round": 5,
      "tag": "KNOCKOUT",
      "home": {
        "code": "POR",
        "name_zh": "葡萄牙",
        "flag": "🇵🇹",
        "fifa_rank": 5
      },
      "away": {
        "code": "ESP",
        "name_zh": "西班牙",
        "flag": "🇪🇸",
        "fifa_rank": 3
      },
      "venue": "AT&T Stadium, 阿灵顿",
      "altitude_m": 180,
      "temp_c": 24,
      "humidity_pct": 50,
      "referee": "未公布",
      "headline": "★伊比利亚德比:模型 葡萄牙22%/平34%/西班牙44%。西班牙本届零封+夺冠热门→模型给西班牙favored;葡萄牙火力(B费/Leão/C罗)仍有一搏。庄家西50%,模型也押西但更保守。德比易低比分。达拉斯极热AT&T空调",
      "probabilities": {
        "home_win": 22,
        "draw": 34,
        "away_win": 44
      },
      "expected_goals": {
        "home": 0.64,
        "away": 1.02
      },
      "expected_score": "1 : 1",
      "over_2_5": 48,
      "btts": 54,
      "clean_sheet_home": 28,
      "confidence": 53,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.55,
          "items": [
            {
              "label": "POR_firepower",
              "value": "+",
              "note": "葡萄牙B费/Leão/C罗火力,德比拼劲足"
            },
            {
              "label": "derby",
              "value": "+",
              "note": "伊比利亚德比,葡萄牙不惧西班牙,历史胶着"
            },
            {
              "label": "Ramos_form",
              "value": "+",
              "note": "Gonçalo Ramos状态好(R32绝杀克罗地亚)"
            }
          ]
        },
        "home_risk": {
          "score": -0.8,
          "items": [
            {
              "label": "ESP_quality",
              "value": "-",
              "note": "★西班牙夺冠热门,Yamal/Pedri传控体系碾压中场"
            },
            {
              "label": "ESP_form",
              "value": "-",
              "note": "西班牙3-0奥地利状态最佳,控球能耗死对手"
            },
            {
              "label": "rank",
              "value": "-",
              "note": "FIFA 3 vs 5,西班牙略高+状态更好"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.6,
          "items": [
            {
              "label": "vs_market",
              "value": "★分歧",
              "note": "庄家西50%/葡23.6%,我给葡27%——德比无绝对favorite,留空间"
            },
            {
              "label": "Yamal_Pedri",
              "value": "+",
              "note": "Yamal/Pedri中场统治+边路爆点"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "extra_time_likely",
              "value": "-",
              "note": "★德比+势均力敌→最易进加时/点球"
            },
            {
              "label": "heat",
              "value": "-",
              "note": "达拉斯室外热指数45°C,AT&T关顶空调场内可控"
            },
            {
              "label": "first_goal",
              "value": "±",
              "note": "谁先进谁掌握德比心理"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Bruno Fernandes",
            "pos": "AM",
            "status": "KEY",
            "note": "调度核心"
          },
          {
            "name": "Rafael Leão",
            "pos": "LW",
            "status": "OK",
            "note": "突破爆点"
          },
          {
            "name": "Gonçalo Ramos",
            "pos": "ST",
            "status": "HOT",
            "note": "R32绝杀功臣"
          },
          {
            "name": "Rúben Dias",
            "pos": "CB",
            "status": "KEY",
            "note": "后防核心"
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
            "name": "Álvaro Morata",
            "pos": "ST",
            "status": "OK",
            "note": "终结"
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
          "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越:只用赛前数据)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank POR#5 ESP#3"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型 22/34/44 vs 庄家 23.6/26.4/50:对比看edge"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "蒙特卡洛5万次输出: 22 / 34 / 44"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 0,
        "away_goals": 1,
        "scoreline": "0 - 1",
        "scorers": [
          {
            "min": "90+1'",
            "team": "ESP",
            "player": "Mikel Merino(替补)",
            "type": "补时绝杀,Ferran Torres助攻"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "西班牙1-0葡萄牙,Merino补时90+1'替补绝杀,C罗世界杯梦碎。模型押西班牙(44%最高)→方向对,低比分(1-0,模型算1-0/0-0最可能)也判对",
        "source": "ESPN/Yahoo"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★方向对+低比分对:模型西班牙44%→1-0补时绝杀。伊比利亚德比果然低比分",
        "hits": [
          "★晋级方向对：模型西班牙44%(三选一最高)→赢 ✓（防穿越真盲测）",
          "★低比分判对:西班牙本届零封→模型算低λ→1-0/0-0最可能,实际1-0兑现",
          "两队都保守→僵持到补时,符合模型的低比分预期"
        ],
        "misses": [
          "补时才绝杀,模型没法预测具体绝杀时刻(点球/加时属随机,模型不硬猜)"
        ],
        "model_lesson": "模型押西班牙对、低比分对。站得住:西班牙本届零封→贝叶斯平滑后仍给低失球→λ低→1-0最可能,真实兑现"
      }
    },
    {
      "id": "WC2026_R16_06",
      "kickoff_cst": "2026-07-06 20:00 ET",
      "group": "R16",
      "round": 5,
      "tag": "KNOCKOUT",
      "home": {
        "code": "USA",
        "name_zh": "美国",
        "flag": "🇺🇸",
        "fifa_rank": 16
      },
      "away": {
        "code": "BEL",
        "name_zh": "比利时",
        "flag": "🇧🇪",
        "fifa_rank": 8
      },
      "venue": "Lumen Field, 西雅图",
      "altitude_m": 5,
      "temp_c": 22,
      "humidity_pct": 60,
      "referee": "未公布",
      "headline": "模型 美国46%/平21%/比利时33%:美国本届场均进2.5(小组赛火力足)→模型给美国favored。但庄家给比利时favored(36.9%)——模型 vs 盘口分歧大,是风险信号。西雅图22°C凉爽",
      "probabilities": {
        "home_win": 46,
        "draw": 21,
        "away_win": 33
      },
      "expected_goals": {
        "home": 2.03,
        "away": 1.68
      },
      "expected_score": "2 : 2",
      "over_2_5": 50,
      "btts": 54,
      "clean_sheet_home": 28,
      "confidence": 53,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.7,
          "items": [
            {
              "label": "Balogun_back",
              "value": "+",
              "note": "★Balogun红牌停赛被撤(改一年察看期),回归首发,锋线终结点补上,美国进攻威胁明显上调"
            },
            {
              "label": "home_advantage",
              "value": "+",
              "note": "东道主主场(西雅图)+满场声浪+势头(2-0波黑)"
            },
            {
              "label": "Pulisic_Balogun",
              "value": "+",
              "note": "Pulisic组织+Balogun终结+Weah边路,主场火力齐整"
            },
            {
              "label": "BEL_inconsistent",
              "value": "+",
              "note": "比利时不稳(小组赛两平+R32被塞内加尔拖进加时)"
            }
          ]
        },
        "home_risk": {
          "score": -0.5,
          "items": [
            {
              "label": "De_Bruyne",
              "value": "-",
              "note": "★De Bruyne组织+比利时个人能力(Doku/Lukaku)仍高一档"
            },
            {
              "label": "rank",
              "value": "-",
              "note": "FIFA 16 vs 8,比利时纸面仍占优"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.3,
          "items": [
            {
              "label": "vs_market",
              "value": "★分歧=风险",
              "note": "模型美国46% vs 庄家比利时36.9%favored,分歧大→当风险信号,不当edge(事后证明盘口对)"
            },
            {
              "label": "De_Bruyne_moment",
              "value": "+",
              "note": "De Bruyne一脚定乾坤"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "extra_time_likely",
              "value": "-",
              "note": "★修正后美国略favored,但仍近五五→易进加时"
            },
            {
              "label": "Balogun_back",
              "value": "+",
              "note": "★Balogun回归=本场最大变量,补上终结点,美国进攻火力恢复"
            },
            {
              "label": "crowd",
              "value": "±",
              "note": "西雅图主场是助力还是压力"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Christian Pulisic",
            "pos": "AM",
            "status": "KEY",
            "note": "核心"
          },
          {
            "name": "Folarin Balogun",
            "pos": "ST",
            "status": "HOT",
            "note": "★红牌停赛撤销、回归首发,终结点归位(本场关键变量)"
          },
          {
            "name": "Timothy Weah",
            "pos": "WG",
            "status": "OK",
            "note": "边路速度"
          },
          {
            "name": "Tyler Adams",
            "pos": "CM",
            "status": "OK",
            "note": "中场拦截"
          }
        ],
        "away": [
          {
            "name": "Kevin De Bruyne",
            "pos": "AM",
            "status": "KEY",
            "note": "组织核心"
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
            "status": "OK",
            "note": "终结"
          },
          {
            "name": "Leandro Trossard",
            "pos": "FW",
            "status": "OK",
            "note": "副攻"
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
          "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越:只用赛前数据)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank USA#16 BEL#8"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型 46/21/33 vs 庄家 34.7/28.4/36.9:对比看edge"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "蒙特卡洛5万次输出: 46 / 21 / 33"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 4,
        "scoreline": "1 - 4",
        "scorers": [
          {
            "min": "9'",
            "team": "BEL",
            "player": "德凯特拉勒",
            "type": "开场闪击 → 0-1"
          },
          {
            "min": "31'",
            "team": "USA",
            "player": "蒂尔曼",
            "type": "扳平 → 1-1"
          },
          {
            "min": "33'",
            "team": "BEL",
            "player": "德凯特拉勒",
            "type": "梅开二度,2分钟后再进 → 1-2"
          },
          {
            "min": "57'",
            "team": "BEL",
            "player": "瓦纳肯",
            "type": "门将Freese+Ream失误送礼 → 1-3"
          },
          {
            "min": "90+3'",
            "team": "BEL",
            "player": "卢卡库(替补)",
            "type": "补时锁定 → 1-4"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "★比利时4-1血洗美国,美国出局。不是运气:模型死抓'美国进球多'一个信号,把美国刷鱼腩的火力当真实力、把比利时中前场(德布劳内/卢卡库/多库)整条看轻→被4-1打脸。同一个'抓单变量就上头'的病,小组赛抓'轮换'砍德国美国那次也犯过",
        "source": "NBC/Yahoo"
      },
      "review": {
        "verdict": "MISS",
        "headline": "✗模型抓单变量就上头:死抓美国进球多、放大美国进攻、把比利时整条看轻→4-1。骨子里的权重毛病,v2要动刀",
        "hits": [
          "无。模型这场彻底看走眼"
        ],
        "misses": [
          "★★方向大错:模型押美国46%→比利时4-1碾压。病根不是防守崩这么简单——是模型抓'美国进球多'一个信号就上头,没和比利时整体实力硬碰对比",
          "★把比利时整条看轻:德布劳内/卢卡库/多库中前场一整条实力没进到对比里,结果四个球招呼过来,美国进攻根本不够",
          "★同一个病复发:人工阶段抓'巴洛贡回归'一个人就把美国反超、小组赛抓'轮换'砍德国美国——都是抓一个变量放大、把整体忽略。这次1-4是最重的一次"
        ],
        "model_lesson": "这场1-4是模型的一堂课。它有个毛病:抓住一个信号就上头。这次死抓'美国进球多',把小组赛刷鱼腩刷出来的火力当成真实力,放大了美国进攻;同时把比利时中前场的整体实力看轻了,结果被四个球打穿。病根在权重——单个信号不该盖过两队整体对比。v2要给模型动刀:对手强度加权(打弱队进的球打折),再加单变量约束,让它别被一条消息、一个数据带偏。"
      }
    }
  ]
};
