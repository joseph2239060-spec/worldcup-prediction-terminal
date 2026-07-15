// 世界杯预测数据 - 2026-07-19（★决赛 Final：真模型 predict.js 泊松+蒙特卡洛5万次，防穿越 cutoff 7/19）
// 概率=真模型算出，不是人工拍；强度来自各队本届真实比分；比分/盘口/排名/天气均查证
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-19"] = {
  "date": "2026-07-19",
  "tournament": "FIFA World Cup 2026 · 决赛 Final",
  "model_version": "泊松乘法模型 + 真蒙特卡洛5万次(predict.js 真跑,防穿越:只用赛前真实比分算强度) · 会错但每个数字真算出来",
  "model_accuracy_7d": null,
  "data_note": "★真模型预测:泊松+蒙特卡洛5万次(predict.js真跑,cutoff到7/19、含全部淘汰赛结果算强度),强度来自各队本届真实进球;再对42家庄家盘口看分歧(分歧大多半是模型偏差,当风险信号不当机会)。天气=open-meteo 实时预报",
  "matches": [
    {
      "id": "WC2026_FINAL",
      "kickoff_cst": "2026-07-19 15:00 ET",
      "group": "F",
      "round": 8,
      "tag": "KNOCKOUT",
      "home": { "code": "ESP", "name_zh": "西班牙", "flag": "🇪🇸", "fifa_rank": 3 },
      "away": { "code": "ARG", "name_zh": "阿根廷", "flag": "🇦🇷", "fifa_rank": 1 },
      "venue": "MetLife Stadium, 新泽西",
      "altitude_m": 7,
      "temp_c": 27,
      "humidity_pct": 34,
      "referee": "未公布",
      "headline": "决赛!模型 西班牙53%/平28%/阿根廷19%:模型重仓西班牙(整届失0.14球、防守天花板,零封法国进决赛);阿根廷火力猛(Messi/Lautaro,场均2.71球)但模型看防守压过火力。庄家更平衡(西41.8/阿26.7)——★模型比庄家更看好西班牙(+11),但模型刚在半决赛低估过西班牙,分歧谨慎看。Messi或谢幕之战,MetLife决赛",
      "probabilities": { "home_win": 53, "draw": 28, "away_win": 19 },
      "expected_goals": { "home": 1.40, "away": 0.72 },
      "expected_score": "1 : 1",
      "over_2_5": 36,
      "btts": 39,
      "clean_sheet_home": 49,
      "confidence": 53,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "NORMAL",
      "modules": {
        "home_win_reasons": {
          "score": 0.7,
          "items": [
            { "label": "ESP_defense", "value": "+", "note": "★西班牙整届失0.14球、防守天花板,半决赛零封法国进决赛" },
            { "label": "ESP_control", "value": "+", "note": "Yamal/Pedri传控体系,决赛能控住节奏、磨死对手" }
          ]
        },
        "home_risk": {
          "score": -0.55,
          "items": [
            { "label": "ARG_firepower", "value": "-", "note": "★阿根廷本届场均2.71球,Messi/Lautaro/Julián Álvarez火力,半决赛逆转英格兰" },
            { "label": "ARG_champion", "value": "-", "note": "卫冕冠军+Messi决赛经验,大场面拎得清" },
            { "label": "recent_miss", "value": "⚠", "note": "★诚实:模型上一场(半决赛)才给西班牙29%最低、被2-0打脸,这次反手重仓西班牙53%,要留个心眼" }
          ]
        },
        "away_upset_path": {
          "score": 0.45,
          "items": [
            { "label": "vs_market", "value": "★分歧=风险", "note": "★模型给阿根廷19% vs 庄家26.7%,模型偏低——模型看防守压过火力,但阿根廷火力+Messi不该被压这么低,分歧当风险看" },
            { "label": "Messi", "value": "+", "note": "Messi或谢幕决赛,一己之力定乾坤的能力+精神加成" }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            { "label": "final_tension", "value": "-", "note": "★决赛紧张、双方谨慎→易低比分僵局、拖加时/点球(模型最可能1-0)" },
            { "label": "Messi_last", "value": "★", "note": "★Messi可能最后一届世界杯决赛,精神层面对阿根廷是隐形加成,模型算不进去" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Lamine Yamal", "pos": "RW", "status": "HOT", "note": "边路爆点" },
          { "name": "Pedri", "pos": "CM", "status": "KEY", "note": "节拍器" },
          { "name": "Mikel Oyarzabal", "pos": "ST", "status": "HOT", "note": "半决赛点球功臣" },
          { "name": "Nico Williams", "pos": "LW", "status": "OK", "note": "速度突破" }
        ],
        "away": [
          { "name": "Lionel Messi", "pos": "AM", "status": "KEY", "note": "核心大脑,半决赛两助攻" },
          { "name": "Lautaro Martínez", "pos": "ST", "status": "HOT", "note": "半决赛绝杀,火热" },
          { "name": "Julián Álvarez", "pos": "ST", "status": "OK", "note": "锋线终结" },
          { "name": "Enzo Fernández", "pos": "CM", "status": "OK", "note": "中场调度" }
        ]
      },
      "odds": [
        { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null }
      ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越cutoff7/19,含全部淘汰赛)" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ESP#3 ARG#1" },
        { "time": "—", "level": "WARN", "msg": "★模型 53/28/19 vs 庄家 41.8/31.4/26.7:模型重仓西班牙(+11),但刚半决赛低估过西班牙——分歧谨慎" },
        { "time": "—", "level": "OK", "msg": "蒙特卡洛5万次输出: 53 / 28 / 19 · 最可能1-0(17%)" }
      ]
    }
  ]
};
