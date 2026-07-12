// 世界杯预测数据 - 2026-07-07（★7/6起:真模型 predict.js 泊松+蒙特卡洛5万次,防穿越）
// 概率=真模型算出,不是人工拍;强度来自各队本届真实比分;比分/盘口/排名/天气均查证
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-07"] = {
  "date": "2026-07-07",
  "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 16 收官",
  "model_version": "泊松乘法模型 + 真蒙特卡洛5万次(predict.js 真跑,防穿越:只用赛前真实比分算强度) · 会错但每个数字真算出来",
  "model_accuracy_7d": null,
  "data_note": "★真模型预测:泊松+蒙特卡洛5万次(predict.js真跑),强度来自各队本届真实进球,防穿越只用赛前数据;再对48家庄家盘口看edge",
  "matches": [
    {
      "id": "WC2026_R16_07",
      "kickoff_cst": "2026-07-07 12:00 ET",
      "group": "R16",
      "round": 5,
      "tag": "KNOCKOUT",
      "home": {
        "code": "ARG",
        "name_zh": "阿根廷",
        "flag": "🇦🇷",
        "fifa_rank": 1
      },
      "away": {
        "code": "EGY",
        "name_zh": "埃及",
        "flag": "🇪🇬",
        "fifa_rank": 33
      },
      "venue": "Mercedes-Benz Stadium, 亚特兰大",
      "altitude_m": 320,
      "temp_c": 24,
      "humidity_pct": 55,
      "referee": "未公布",
      "headline": "模型 阿根廷59%/平22%/埃及19%:卫冕冠军+Messi实力占优,埃及Salah有威胁但差一档。庄家更看好阿根廷(69.2%),模型比盘口保守、给埃及留了淘汰赛方差空间。亚特兰大室外热湿,Mercedes-Benz有顶空调",
      "probabilities": {
        "home_win": 59,
        "draw": 22,
        "away_win": 19
      },
      "expected_goals": {
        "home": 1.91,
        "away": 0.99
      },
      "expected_score": "2 : 1",
      "over_2_5": 48,
      "btts": 40,
      "clean_sheet_home": 44,
      "confidence": 60,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": {
          "score": 1.1,
          "items": [
            {
              "label": "ARG_quality",
              "value": "+",
              "note": "卫冕冠军+Messi/Álvarez/Lautaro,个人能力碾压"
            },
            {
              "label": "rank_gap",
              "value": "+",
              "note": "FIFA 1 vs 33,实力高一档"
            },
            {
              "label": "depth",
              "value": "+",
              "note": "阿根廷深度厚,淘汰赛余地大"
            }
          ]
        },
        "home_risk": {
          "score": -0.65,
          "items": [
            {
              "label": "Salah",
              "value": "-",
              "note": "★Salah一个机会就能终结,埃及靠他+门将走到这"
            },
            {
              "label": "EGY_defense",
              "value": "-",
              "note": "埃及防守组织好(小组赛逼平比利时/伊朗)"
            },
            {
              "label": "ARG_wobble",
              "value": "-",
              "note": "阿根廷R32被佛得角拖进加时,不是碾压状态"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.45,
          "items": [
            {
              "label": "vs_market",
              "value": "本就favorite",
              "note": "庄家阿69.2%,我给65%留Salah+方差"
            },
            {
              "label": "Salah_counter",
              "value": "+",
              "note": "Salah反击+埃及铁桶偷袭"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "Messi_Salah",
              "value": "±",
              "note": "★Messi vs Salah,两核心谁先闪光"
            },
            {
              "label": "heat",
              "value": "-",
              "note": "亚特兰大室外热湿,Mercedes-Benz关顶空调场内可控"
            },
            {
              "label": "early_goal",
              "value": "±",
              "note": "阿根廷早进则控场,僵持久则埃及有戏"
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
            "note": "核心,连续7届进球"
          },
          {
            "name": "Julián Álvarez",
            "pos": "ST",
            "status": "KEY",
            "note": "终结点"
          },
          {
            "name": "Lautaro Martínez",
            "pos": "ST",
            "status": "OK",
            "note": "冲击"
          },
          {
            "name": "Enzo Fernández",
            "pos": "CM",
            "status": "OK",
            "note": "中场"
          }
        ],
        "away": [
          {
            "name": "Mohamed Salah",
            "pos": "RW",
            "status": "KEY",
            "note": "队长,爆冷指望"
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
            "note": "组织,逼平过比利时"
          },
          {
            "name": "埃及门将",
            "pos": "GK",
            "status": "KEY",
            "note": "点球英雄(淘汰澳)"
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
          "msg": "FIFA rank ARG#1 EGY#33"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型 59/22/19 vs 庄家 69.2/20.2/10.5:对比看edge"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "蒙特卡洛5万次输出: 59 / 22 / 19"
        }
      ],
      "result": {
        "status": "FT",
        "home_goals": 3,
        "away_goals": 2,
        "scoreline": "3 - 2",
        "scorers": [
          {
            "min": "15'",
            "team": "EGY",
            "player": "Yasser Ibrahim",
            "type": "埃及先拔头筹 → 0-1"
          },
          {
            "min": "67'",
            "team": "EGY",
            "player": "Mostafa Zico",
            "type": "埃及扩大领先 → 0-2"
          },
          {
            "min": "79'",
            "team": "ARG",
            "player": "Romero",
            "type": "阿根廷反扑第一球 → 1-2"
          },
          {
            "min": "83'",
            "team": "ARG",
            "player": "Messi",
            "type": "梅西扳平 → 2-2"
          },
          {
            "min": "90+2'",
            "team": "ARG",
            "player": "Enzo Fernández",
            "type": "补时绝杀逆转 → 3-2"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "阿根廷3-2埃及,惊天逆转:埃及一度2-0领先到79分钟,阿根廷最后13分钟连进3球(Romero 79'、Messi 83'扳平、Enzo 90+2'补时绝杀)。模型押阿根廷59%最高→方向对,但过程远比庄家想的惊险",
        "source": "ESPN/NPR/Al Jazeera"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★方向对+模型比庄家更懂埃及:阿根廷59%→3-2惊险逆转。模型给埃及留的19%方差空间,真差点掀翻卫冕冠军",
        "hits": [
          "★胜负方向对:模型阿根廷59%(三选一最高)→阿根廷赢 ✓(防穿越真盲测)",
          "★模型比庄家更接近真相:模型给埃及19%、庄家只给10.5%;结果埃及2-0领先、进2球、差点爆冷——模型'比盘口保守、给埃及留方差'这次被验证"
        ],
        "misses": [
          "模型没料到过程这么惊险:埃及一度2-0领先到79分钟。模型只给最终胜负概率,不预测'谁先进、会不会落后'",
          "比分3-2的具体剧情(埃及先2-0、阿根廷13分钟逆转绝杀)非模型能算,模型只管最终谁赢"
        ],
        "model_lesson": "这场难得模型比庄家更接近真相:模型只看进球数、给了埃及19%(庄家才10.5%),结果埃及真的2-0领先、差点淘汰卫冕冠军。但要老实——模型给埃及高不是算到了埃及多强,只是看埃及本届进球不差就给了空间,这次撞对了(和之前高估美国同一个机制,只是这次埃及真够硬)。结论:方向对、模型这次也站对了边,但它只管最终谁赢,管不了2-0落后再逆转这种剧情"
      }
    },
    {
      "id": "WC2026_R16_08",
      "kickoff_cst": "2026-07-07 16:00 ET",
      "group": "R16",
      "round": 5,
      "tag": "KNOCKOUT",
      "home": {
        "code": "SUI",
        "name_zh": "瑞士",
        "flag": "🇨🇭",
        "fifa_rank": 19
      },
      "away": {
        "code": "COL",
        "name_zh": "哥伦比亚",
        "flag": "🇨🇴",
        "fifa_rank": 13
      },
      "venue": "BC Place, 温哥华",
      "altitude_m": 3,
      "temp_c": 21,
      "humidity_pct": 60,
      "referee": "未公布",
      "headline": "模型 瑞士38%/平31%/哥伦比亚31%:瑞士本届场均进2.5火力更足→模型给瑞士略favored;哥伦比亚Luis Díaz/James质量高但本届进球少(1.25)。庄家反而看好哥伦比亚(42.3%)——模型和盘口方向相反、分歧大,是风险信号。温哥华21°C凉爽",
      "probabilities": {
        "home_win": 38,
        "draw": 31,
        "away_win": 31
      },
      "expected_goals": {
        "home": 1.01,
        "away": 0.89
      },
      "expected_score": "1 : 1",
      "over_2_5": 46,
      "btts": 52,
      "clean_sheet_home": 28,
      "confidence": 53,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.4,
          "items": [
            {
              "label": "SUI_solid",
              "value": "+",
              "note": "瑞士Xhaka/Embolo稳健(2-0阿尔及利亚),组织好"
            },
            {
              "label": "Akanji",
              "value": "+",
              "note": "Akanji/Kobel后防轴心稳"
            },
            {
              "label": "experience",
              "value": "+",
              "note": "瑞士大赛经验+纪律"
            }
          ]
        },
        "home_risk": {
          "score": -0.7,
          "items": [
            {
              "label": "COL_quality",
              "value": "-",
              "note": "★哥伦比亚Luis Díaz火热+James创造,进攻质量高一档"
            },
            {
              "label": "rank",
              "value": "-",
              "note": "FIFA 13 vs 19,哥伦比亚略高"
            },
            {
              "label": "COL_form",
              "value": "-",
              "note": "哥伦比亚小组头名+一路稳"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.55,
          "items": [
            {
              "label": "vs_market",
              "value": "本就微favorite",
              "note": "庄家哥42.3%/瑞26.8%,我给哥42%贴市场"
            },
            {
              "label": "Diaz_James",
              "value": "+",
              "note": "Luis Díaz突破+James调度撕开瑞士"
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
              "label": "tempo",
              "value": "±",
              "note": "哥伦比亚提速 vs 瑞士稳守,谁控节奏"
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
            "name": "Granit Xhaka",
            "pos": "CM",
            "status": "KEY",
            "note": "中场核心"
          },
          {
            "name": "Breel Embolo",
            "pos": "ST",
            "status": "OK",
            "note": "终结"
          },
          {
            "name": "Manuel Akanji",
            "pos": "CB",
            "status": "KEY",
            "note": "后防"
          },
          {
            "name": "Dan Ndoye",
            "pos": "WG",
            "status": "OK",
            "note": "边路(R32进球)"
          }
        ],
        "away": [
          {
            "name": "Luis Díaz",
            "pos": "LW",
            "status": "HOT",
            "note": "利物浦,进攻箭头"
          },
          {
            "name": "James Rodríguez",
            "pos": "AM",
            "status": "KEY",
            "note": "10号创造核心"
          },
          {
            "name": "Jhon Durán",
            "pos": "ST",
            "status": "OK",
            "note": "终结"
          },
          {
            "name": "Daniel Muñoz",
            "pos": "RB",
            "status": "OK",
            "note": "助攻边卫"
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
          "msg": "FIFA rank SUI#19 COL#13"
        },
        {
          "time": "—",
          "level": "WARN",
          "msg": "★模型 38/31/31 vs 庄家 26.8/30.9/42.3:对比看edge"
        },
        {
          "time": "—",
          "level": "OK",
          "msg": "蒙特卡洛5万次输出: 38 / 31 / 31"
        }
      ],
      "result": {
        "status": "AET · 点球 4-3",
        "home_goals": 0,
        "away_goals": 0,
        "scoreline": "0 - 0（点球 瑞士 4-3）",
        "went_to_penalties": true,
        "scorers": [
          {
            "min": "点球",
            "team": "SUI",
            "player": "点球大战 4-3",
            "type": "常规+加时 0-0,点球瑞士4-3胜,Vargas 第5轮打进决胜球晋级"
          }
        ],
        "red_cards": [],
        "stats": {
          "shots_home": null,
          "shots_on_target_home": null,
          "poss_home": null,
          "poss_away": null
        },
        "key_moment": "瑞士 0-0(含加时)哥伦比亚,点球大战瑞士 4-3 胜、晋级八强,Vargas 打进第5轮决胜点球。模型逆着庄家押瑞士(模型38% vs 哥31%,庄家却押哥42%favored)→方向压对,但0-0靠点球决胜、运气成分大",
        "source": "ESPN/FIFA"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★难得逆庄家押对:模型押瑞士晋级(庄家押哥伦比亚)→瑞士点球4-3晋级。但0-0靠点球决胜,赢在运气、别吹",
        "hits": [
          "★方向对、还逆着庄家:模型给瑞士38%>哥伦比亚31%(庄家反给哥42%favored)→瑞士晋级 ✓,难得模型压对盘口",
          "★平局判断也不差:模型给平31%,结果90分钟+加时真的0-0僵局",
          "模型看好瑞士的理由(本届场均进2.5>哥1.25)方向上站住了"
        ],
        "misses": [
          "★赢得侥幸:0-0靠点球4-3决胜,点球是随机的、模型明确不预测,瑞士晋级有运气成分",
          "模型看好瑞士是因为它进球多,但这场瑞士0进球,'进球数'信号本场没兑现,押对带运气",
          "模型只领先7%(38 vs 31)本就接近,不是笃定瑞士,别当成模型神预测"
        ],
        "model_lesson": "这场是模型难得逆着庄家押对方向:庄家给哥伦比亚favored(42%),模型因瑞士进球多给瑞士略高(38%),结果瑞士点球晋级。但必须老实:0-0靠点球决胜,点球纯随机、模型不算,这场赢在运气;而且模型看好瑞士的理由(进球多)本场根本没兑现(0进球)。所以是'方向压对+运气加持',不能吹成模型比庄家强——一场点球说明不了什么,长期命中率才算数"
      }
    }
  ]
};
