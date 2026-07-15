// 世界杯预测数据 - 2026-07-18（★季军赛 3rd-place：真模型 predict.js 泊松+蒙特卡洛5万次，防穿越 cutoff 7/18）
// 概率=真模型算出，不是人工拍；强度来自各队本届真实比分；比分/盘口/排名/天气均查证
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-18"] = {
  "date": "2026-07-18",
  "tournament": "FIFA World Cup 2026 · 季军赛 3rd-place",
  "model_version": "泊松乘法模型 + 真蒙特卡洛5万次(predict.js 真跑,防穿越:只用赛前真实比分算强度) · 会错但每个数字真算出来",
  "model_accuracy_7d": null,
  "data_note": "★真模型预测:泊松+蒙特卡洛5万次(predict.js真跑,cutoff到7/18、含全部淘汰赛结果算强度),强度来自各队本届真实进球;再对41家庄家盘口看分歧。天气=open-meteo 实时预报。⚠季军赛是荣誉战,双方动力常不足、方差大",
  "matches": [
    {
      "id": "WC2026_3RD_01",
      "kickoff_cst": "2026-07-18 17:00 ET",
      "group": "3RD",
      "round": 8,
      "tag": "KNOCKOUT",
      "home": { "code": "FRA", "name_zh": "法国", "flag": "🇫🇷", "fifa_rank": 2 },
      "away": { "code": "ENG", "name_zh": "英格兰", "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "fifa_rank": 4 },
      "venue": "Hard Rock Stadium, 迈阿密",
      "altitude_m": 2,
      "temp_c": 33,
      "humidity_pct": 50,
      "referee": "未公布",
      "headline": "模型 法国57%/平23%/英格兰20%:法国火力(Mbappé)+整体强,模型给favored;英格兰刚经历加时+半决赛失利。庄家法44%,模型更看好法国(+13)。★但季军赛是荣誉战、动力常不足、方差大,别太当真。迈阿密33°C酷热",
      "probabilities": { "home_win": 57, "draw": 23, "away_win": 20 },
      "expected_goals": { "home": 1.83, "away": 0.99 },
      "expected_score": "2 : 1",
      "over_2_5": 54,
      "btts": 53,
      "clean_sheet_home": 37,
      "confidence": 57,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "NORMAL",
      "modules": {
        "home_win_reasons": {
          "score": 0.6,
          "items": [
            { "label": "FRA_firepower", "value": "+", "note": "法国Mbappé/Dembélé火力,本届场均进2.29球" },
            { "label": "FRA_depth", "value": "+", "note": "阵容深度冠军级,替补也能打" }
          ]
        },
        "home_risk": {
          "score": -0.4,
          "items": [
            { "label": "ENG_quality", "value": "-", "note": "英格兰Kane/Bellingham整体强,不是软柿子" },
            { "label": "motivation", "value": "-", "note": "★季军赛动力常不足,两队都刚输半决赛、易松懈" }
          ]
        },
        "away_upset_path": {
          "score": 0.35,
          "items": [
            { "label": "vs_market", "value": "偏低", "note": "模型给英格兰20% vs 庄家28.7%,模型偏低;季军赛冷门多,别把法国favored看太死" },
            { "label": "Bellingham", "value": "+", "note": "Bellingham八强/半决赛状态火热" }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            { "label": "dead_rubber", "value": "★", "note": "★季军赛是'荣誉战',双方动力有限、轮换多、方差大,历史冷门频出——预测参考价值打折" },
            { "label": "heat", "value": "-", "note": "迈阿密33°C+湿50%,酷热拖体能" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Kylian Mbappé", "pos": "ST", "status": "HOT", "note": "火力核心" },
          { "name": "Ousmane Dembélé", "pos": "RW", "status": "OK", "note": "边路爆点" },
          { "name": "Aurélien Tchouaméni", "pos": "CM", "status": "KEY", "note": "中场屏障" },
          { "name": "Mike Maignan", "pos": "GK", "status": "OK", "note": "门线稳" }
        ],
        "away": [
          { "name": "Harry Kane", "pos": "ST", "status": "KEY", "note": "支点+终结" },
          { "name": "Jude Bellingham", "pos": "AM", "status": "HOT", "note": "淘汰赛状态火热" },
          { "name": "Bukayo Saka", "pos": "RW", "status": "OK", "note": "边路突破" },
          { "name": "英格兰体能", "pos": "—", "status": "QUEST", "note": "背靠背加时+酷热,体能存疑" }
        ]
      },
      "odds": [
        { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null }
      ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越cutoff7/18,含全部淘汰赛)" },
        { "time": "—", "level": "OK", "msg": "FIFA rank FRA#2 ENG#4" },
        { "time": "—", "level": "WARN", "msg": "★模型 57/23/20 vs 庄家 44/27.3/28.7:模型更看好法国(+13);但季军赛方差大,参考打折" },
        { "time": "—", "level": "OK", "msg": "蒙特卡洛5万次输出: 57 / 23 / 20 · 最可能1-1(11%)" }
      ]
    }
  ]
};
