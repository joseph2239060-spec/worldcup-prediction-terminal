// 世界杯预测数据 - 2026-07-15（★半决赛 SF：真模型 predict.js 泊松+蒙特卡洛5万次，防穿越 cutoff 7/15）
// 概率=真模型算出，不是人工拍；强度来自各队本届真实比分；比分/盘口/排名/天气均查证
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-15"] = {
  "date": "2026-07-15",
  "tournament": "FIFA World Cup 2026 · 半决赛 Semi-final",
  "model_version": "泊松乘法模型 + 真蒙特卡洛5万次(predict.js 真跑,防穿越:只用赛前真实比分算强度) · 会错但每个数字真算出来",
  "model_accuracy_7d": null,
  "data_note": "★真模型预测:泊松+蒙特卡洛5万次(predict.js真跑,cutoff到7/15、含R16+八强结果算强度),强度来自各队本届真实进球;再对49家庄家盘口看分歧(分歧大多半是模型偏差,当风险信号不当机会)。天气=open-meteo 实时预报",
  "matches": [
    {
      "id": "WC2026_SF_02",
      "kickoff_cst": "2026-07-15 15:00 ET",
      "group": "SF",
      "round": 7,
      "tag": "KNOCKOUT",
      "home": {
        "code": "ENG",
        "name_zh": "英格兰",
        "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "fifa_rank": 4
      },
      "away": {
        "code": "ARG",
        "name_zh": "阿根廷",
        "flag": "🇦🇷",
        "fifa_rank": 1
      },
      "venue": "Mercedes-Benz Stadium, 亚特兰大",
      "altitude_m": 320,
      "temp_c": 31,
      "humidity_pct": 48,
      "referee": "未公布",
      "headline": "模型 英格兰33%/平22%/阿根廷45%:模型看阿根廷火力(本届场均2.83球)给阿根廷favored;但庄家给英格兰36.7%略高、阿根廷仅31.2%——★模型 vs 庄家方向相反(阿根廷+14),多半是模型高估阿根廷进攻,当风险信号看。英阿宿敌世纪对决,亚特兰大室内空调场",
      "probabilities": {
        "home_win": 33,
        "draw": 22,
        "away_win": 45
      },
      "expected_goals": {
        "home": 1.59,
        "away": 1.90
      },
      "expected_score": "2 : 2",
      "over_2_5": 68,
      "btts": 68,
      "clean_sheet_home": 15,
      "confidence": 45,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.55,
          "items": [
            {
              "label": "ENG_quality",
              "value": "+",
              "note": "英格兰Kane/Bellingham/Saka整体强,Bellingham八强双响正火热"
            },
            {
              "label": "home_market",
              "value": "+",
              "note": "★庄家反给英格兰favored(36.7% vs 阿31.2%),市场更看好英格兰"
            }
          ]
        },
        "home_risk": {
          "score": -0.6,
          "items": [
            {
              "label": "ARG_firepower",
              "value": "-",
              "note": "★阿根廷本届场均进2.83球(全场最高)、Messi/Julián Álvarez/Lautaro火力猛"
            },
            {
              "label": "ARG_champion",
              "value": "-",
              "note": "卫冕冠军底蕴+淘汰赛硬仗经验(八强加时逆转瑞士)"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.5,
          "items": [
            {
              "label": "vs_market",
              "value": "★方向相反=风险",
              "note": "★模型给阿根廷45% vs 庄家31.2%,方向相反(阿+14)——多半是模型高估阿根廷进攻(看它进球多就给高),当风险信号,别当机会(刚在高估瑞士那场被验证过)"
            },
            {
              "label": "Messi",
              "value": "+",
              "note": "Messi大赛关键先生,一脚定乾坤的能力"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "rivalry",
              "value": "-",
              "note": "★英阿宿敌世纪对决(马岛/1986恩怨),火药味足、易情绪化,红牌风险偏高"
            },
            {
              "label": "goals",
              "value": "±",
              "note": "两队都能进、防守都非顶级→模型期望总进球约3.5个,大球倾向"
            }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Harry Kane", "pos": "ST", "status": "KEY", "note": "支点+终结" },
          { "name": "Jude Bellingham", "pos": "AM", "status": "HOT", "note": "八强双响,状态爆棚" },
          { "name": "Bukayo Saka", "pos": "RW", "status": "OK", "note": "边路突破" },
          { "name": "英格兰体能", "pos": "—", "status": "QUEST", "note": "刚打完加时,体能待恢复" }
        ],
        "away": [
          { "name": "Lionel Messi", "pos": "AM", "status": "KEY", "note": "核心大脑" },
          { "name": "Julián Álvarez", "pos": "ST", "status": "HOT", "note": "八强世界波,火热" },
          { "name": "Lautaro Martínez", "pos": "ST", "status": "OK", "note": "锋线终结" },
          { "name": "Enzo Fernández", "pos": "CM", "status": "OK", "note": "中场调度" }
        ]
      },
      "odds": [
        { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null }
      ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越cutoff7/15,含R16+八强)" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ENG#4 ARG#1" },
        { "time": "—", "level": "WARN", "msg": "★模型 33/22/45 vs 庄家 36.7/32/31.2:★方向相反,阿根廷+14,多半是模型高估阿根廷——当风险信号" },
        { "time": "—", "level": "OK", "msg": "蒙特卡洛5万次输出: 33 / 22 / 45 · 最可能1-1(9%)" }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 2,
        "scoreline": "1 - 2",
        "scorers": [
          { "min": "55'", "team": "ENG", "player": "Anthony Gordon", "type": "接Rogers传中破门 → 1-0" },
          { "min": "85'", "team": "ARG", "player": "Enzo Fernández", "type": "Messi助攻扳平 → 1-1" },
          { "min": "92'", "team": "ARG", "player": "Lautaro", "type": "Messi助攻头球绝杀 → 1-2" }
        ],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "阿根廷2-1逆转英格兰、进决赛(卫冕在望)。英格兰Gordon 55'先进,阿根廷Enzo 85'扳平、Lautaro 92'头球绝杀,Messi两次助攻。模型逆着庄家押阿根廷45%(庄家押英格兰)→方向对,逆庄家成功",
        "source": "FIFA/ESPN/CNN"
      },
      "review": {
        "verdict": "HIT",
        "headline": "★逆庄家押对!模型押阿根廷45%(庄家押英格兰)→阿根廷2-1逆转。Messi两助攻,大分歧这次兑现在模型这边",
        "hits": [
          "★方向对、还逆庄家:模型给阿根廷45%(庄家只31.2、押英格兰36.7)→阿根廷赢 ✓,难得逆盘口成功",
          "★模型看阿根廷火力(本届场均2.83球)对了:Messi串联,Enzo+Lautaro完成逆转",
          "'两队都能进、易大球'判对:1-2三球"
        ],
        "misses": [
          "阿根廷落后到85'才扳平、92'才绝杀,模型给45%没体现'要落后逆转'(但方向对)",
          "Messi两助攻绝杀这种逆转剧情,模型只给最终概率、算不出"
        ],
        "model_lesson": "这场模型逆着庄家押阿根廷、押对了——和八强瑞士那场(同样逆庄家、但错了)正好相反。这说明'大分歧'的本质是高方差:可能大对(这次)也可能大错(瑞士),因为模型和庄家必有一方大错。诚实的平衡:①这次模型赢在阿根廷火力真兑现(Messi两助攻),不是撞运气;②但绝不能因为这次对就丢掉'大分歧当风险'的原则——瑞士那次一模一样的逻辑就翻车了。押对给模型记一功,长期还是看命中率,别飘"
      }
    }
  ]
};
