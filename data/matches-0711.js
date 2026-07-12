// 世界杯预测数据 - 2026-07-11（★八强 QF 收官：真模型 predict.js 泊松+蒙特卡洛5万次，防穿越 cutoff 7/11 含 R16+八强）
// 概率=真模型算出，不是人工拍；强度来自各队本届真实比分；比分/盘口/排名/天气均查证
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-11"] = {
  "date": "2026-07-11",
  "tournament": "FIFA World Cup 2026 · 八强 Quarter-final",
  "model_version": "泊松乘法模型 + 真蒙特卡洛5万次(predict.js 真跑,防穿越:只用赛前真实比分算强度) · 会错但每个数字真算出来",
  "model_accuracy_7d": null,
  "data_note": "★真模型预测:泊松+蒙特卡洛5万次(predict.js真跑,cutoff到7/11、含R16+前两场八强结果算强度),强度来自各队本届真实进球;再对49家庄家盘口看分歧(分歧大多半是模型偏差,当风险信号不当机会)。天气=open-meteo 实时预报",
  "matches": [
    {
      "id": "WC2026_QF_03",
      "kickoff_cst": "2026-07-11 17:00 ET",
      "group": "QF",
      "round": 6,
      "tag": "KNOCKOUT",
      "home": {
        "code": "NOR",
        "name_zh": "挪威",
        "flag": "🇳🇴",
        "fifa_rank": 31
      },
      "away": {
        "code": "ENG",
        "name_zh": "英格兰",
        "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "fifa_rank": 4
      },
      "venue": "Hard Rock Stadium, 迈阿密",
      "altitude_m": 2,
      "temp_c": 27,
      "humidity_pct": 78,
      "referee": "未公布",
      "headline": "模型 挪威29%/平20%/英格兰51%:英格兰Kane/Bellingham整体强、favored;挪威靠Haaland/Ødegaard火力搏杀(本届场均2.4球,但失1.8防守漏)。庄家英50.6%,模型基本一致。迈阿密Hard Rock 27°C湿热,易大球",
      "probabilities": {
        "home_win": 29,
        "draw": 20,
        "away_win": 51
      },
      "expected_goals": {
        "home": 1.74,
        "away": 2.32
      },
      "expected_score": "1 : 2",
      "over_2_5": 77,
      "btts": 74,
      "clean_sheet_home": 10,
      "confidence": 51,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "NORMAL",
      "modules": {
        "home_win_reasons": {
          "score": 0.5,
          "items": [
            {
              "label": "NOR_firepower",
              "value": "+",
              "note": "挪威Haaland+Sørloth+Ødegaard火力,本届场均进2.4球,对攻不虚"
            },
            {
              "label": "Haaland",
              "value": "+",
              "note": "哈兰德巅峰终结力,一球定江山的能力"
            }
          ]
        },
        "home_risk": {
          "score": -0.7,
          "items": [
            {
              "label": "ENG_quality",
              "value": "-",
              "note": "★英格兰Kane/Bellingham/Saka整体强一档,FIFA#4 vs 挪威#31"
            },
            {
              "label": "NOR_defense",
              "value": "-",
              "note": "挪威失1.8/场、后防漏,易被英格兰的整体进攻打穿"
            },
            {
              "label": "ENG_depth",
              "value": "-",
              "note": "英格兰阵容深度和大赛经验都占优"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            {
              "label": "vs_market",
              "value": "一致",
              "note": "模型给英格兰51% vs 庄家50.6%,几乎一致——共识:英格兰favored"
            },
            {
              "label": "Kane_Bellingham",
              "value": "+",
              "note": "Kane支点做球+Bellingham后插上,是英格兰破局主线"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "goals",
              "value": "±",
              "note": "★两队都能进、防守都不稳→模型期望总进球4个,大球倾向明显"
            },
            {
              "label": "heat",
              "value": "-",
              "note": "迈阿密27°C+湿78%,湿热拖体能,下半场易松动"
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
            "note": "终结核心"
          },
          {
            "name": "Martin Ødegaard",
            "pos": "AM",
            "status": "KEY",
            "note": "组织中枢"
          },
          {
            "name": "Alexander Sørloth",
            "pos": "ST",
            "status": "OK",
            "note": "第二点"
          },
          {
            "name": "挪威后防",
            "pos": "DF",
            "status": "QUEST",
            "note": "失1.8/场,防线是软肋"
          }
        ],
        "away": [
          {
            "name": "Harry Kane",
            "pos": "ST",
            "status": "KEY",
            "note": "支点+终结"
          },
          {
            "name": "Jude Bellingham",
            "pos": "AM",
            "status": "KEY",
            "note": "后插上爆点"
          },
          {
            "name": "Bukayo Saka",
            "pos": "RW",
            "status": "OK",
            "note": "边路突破"
          },
          {
            "name": "英格兰体能",
            "pos": "—",
            "status": "QUEST",
            "note": "湿热天气下的体能分配"
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
          "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越cutoff7/11,含R16+八强)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank NOR#31 ENG#4"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型 29/20/51 vs 庄家 23.4/25.9/50.6:英格兰favored一致,挪威模型略高"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "蒙特卡洛5万次输出: 29 / 20 / 51 · 最可能1-2(8%)"
        }
      ]
    },
    {
      "id": "WC2026_QF_04",
      "kickoff_cst": "2026-07-11 20:00 ET",
      "group": "QF",
      "round": 6,
      "tag": "KNOCKOUT",
      "home": {
        "code": "ARG",
        "name_zh": "阿根廷",
        "flag": "🇦🇷",
        "fifa_rank": 1
      },
      "away": {
        "code": "SUI",
        "name_zh": "瑞士",
        "flag": "🇨🇭",
        "fifa_rank": 19
      },
      "venue": "Arrowhead Stadium, 堪萨斯城",
      "altitude_m": 270,
      "temp_c": 32,
      "humidity_pct": 42,
      "referee": "未公布",
      "headline": "模型 阿根廷39%/平25%/瑞士36%:模型认为接近五五(瑞士本届进2.0/失0.6,防守硬、Akanji坐镇);但庄家给阿根廷56.6%大热、瑞士仅16.7%——★模型 vs 庄家大分歧(瑞士+19),多半是模型高估了瑞士,当风险信号看、别当机会。堪萨斯城32°C酷热",
      "probabilities": {
        "home_win": 39,
        "draw": 25,
        "away_win": 36
      },
      "expected_goals": {
        "home": 1.47,
        "away": 1.42
      },
      "expected_score": "1 : 1",
      "over_2_5": 56,
      "btts": 59,
      "clean_sheet_home": 24,
      "confidence": 39,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "NORMAL",
      "modules": {
        "home_win_reasons": {
          "score": 0.6,
          "items": [
            {
              "label": "ARG_quality",
              "value": "+",
              "note": "★卫冕冠军,Messi/Julián Álvarez/Lautaro,本届场均进2.8球,底蕴深"
            },
            {
              "label": "experience",
              "value": "+",
              "note": "淘汰赛经验+夺冠底蕴,关键时刻拎得清(R16补时逆转埃及)"
            }
          ]
        },
        "home_risk": {
          "score": -0.5,
          "items": [
            {
              "label": "SUI_defense",
              "value": "-",
              "note": "★瑞士本届失0.6、防守硬(Akanji),R16点球淘汰哥伦比亚,擅长把强队拖入僵局"
            },
            {
              "label": "SUI_data_strong",
              "value": "-",
              "note": "瑞士本届进2.0/失0.6,数据面不弱→模型据此给了36%"
            },
            {
              "label": "knockout_variance",
              "value": "-",
              "note": "淘汰赛单场方差,瑞士有搅局能力"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.4,
          "items": [
            {
              "label": "vs_market",
              "value": "★大分歧=风险",
              "note": "模型给瑞士36% vs 庄家16.7%,分歧+19——多半是模型高估瑞士(进球数据好但对手是卫冕冠军),当风险信号,别当机会(参照高估美国那次教训)"
            },
            {
              "label": "SUI_form",
              "value": "+",
              "note": "瑞士R16逆着庄家点球淘汰哥伦比亚,证明过搅局能力"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "extra_time",
              "value": "-",
              "note": "★模型算接近五五(39 vs 36)→易拖进加时/点球(瑞士上一轮就是点球晋级)"
            },
            {
              "label": "heat",
              "value": "-",
              "note": "★堪萨斯城32°C酷热+海拔270m,对两队体能都是硬考验"
            }
          ]
        }
      },
      "players": {
        "home": [
          {
            "name": "Lionel Messi",
            "pos": "AM",
            "status": "KEY",
            "note": "核心大脑"
          },
          {
            "name": "Julián Álvarez",
            "pos": "ST",
            "status": "KEY",
            "note": "锋线终结"
          },
          {
            "name": "Lautaro Martínez",
            "pos": "ST",
            "status": "OK",
            "note": "支点"
          },
          {
            "name": "Enzo Fernández",
            "pos": "CM",
            "status": "OK",
            "note": "中场调度(R16绝杀埃及)"
          }
        ],
        "away": [
          {
            "name": "Granit Xhaka",
            "pos": "CM",
            "status": "KEY",
            "note": "中场核心"
          },
          {
            "name": "Manuel Akanji",
            "pos": "CB",
            "status": "KEY",
            "note": "后防定海神针"
          },
          {
            "name": "Breel Embolo",
            "pos": "ST",
            "status": "OK",
            "note": "支点终结"
          },
          {
            "name": "Dan Ndoye",
            "pos": "WG",
            "status": "OK",
            "note": "边路速度"
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
          "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越cutoff7/11,含R16+八强)"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "FIFA rank ARG#1 SUI#19"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型 39/25/36 vs 庄家 56.6/26.7/16.7:★大分歧,瑞士+19,多半是模型高估瑞士——当风险信号"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "蒙特卡洛5万次输出: 39 / 25 / 36 · 最可能1-1(12%)"
        }
      ]
    }
  ]
};
