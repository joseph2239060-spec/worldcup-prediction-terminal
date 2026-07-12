// 世界杯预测数据 - 2026-07-14（★半决赛 SF：真模型 predict.js 泊松+蒙特卡洛5万次，防穿越 cutoff 7/14）
// 概率=真模型算出，不是人工拍；强度来自各队本届真实比分；比分/盘口/排名/天气均查证
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-14"] = {
  "date": "2026-07-14",
  "tournament": "FIFA World Cup 2026 · 半决赛 Semi-final",
  "model_version": "泊松乘法模型 + 真蒙特卡洛5万次(predict.js 真跑,防穿越:只用赛前真实比分算强度) · 会错但每个数字真算出来",
  "model_accuracy_7d": null,
  "data_note": "★真模型预测:泊松+蒙特卡洛5万次(predict.js真跑,cutoff到7/14、含R16+八强结果算强度),强度来自各队本届真实进球;再对49家庄家盘口看分歧。天气=open-meteo 实时预报",
  "matches": [
    {
      "id": "WC2026_SF_01",
      "kickoff_cst": "2026-07-14 15:00 ET",
      "group": "SF",
      "round": 7,
      "tag": "KNOCKOUT",
      "home": {
        "code": "FRA",
        "name_zh": "法国",
        "flag": "🇫🇷",
        "fifa_rank": 2
      },
      "away": {
        "code": "ESP",
        "name_zh": "西班牙",
        "flag": "🇪🇸",
        "fifa_rank": 3
      },
      "venue": "AT&T Stadium, 阿灵顿",
      "altitude_m": 180,
      "temp_c": 32,
      "humidity_pct": 46,
      "referee": "未公布",
      "headline": "模型 法国35%/平36%/西班牙29%:两大铁防对撞(法国失0.33、西班牙整届失0.17)→模型算低比分僵局、最可能0-0(21%)、平局概率最高、易拖加时。庄家法国41%略高,模型更看重平局。AT&T室内空调场",
      "probabilities": {
        "home_win": 35,
        "draw": 36,
        "away_win": 29
      },
      "expected_goals": {
        "home": 0.83,
        "away": 0.73
      },
      "expected_score": "1 : 1",
      "over_2_5": 21,
      "btts": 29,
      "clean_sheet_home": 48,
      "confidence": 36,
      "value_rating": 2,
      "edge_pct": null,
      "red_card_risk": "NORMAL",
      "modules": {
        "home_win_reasons": {
          "score": 0.5,
          "items": [
            {
              "label": "FRA_firepower",
              "value": "+",
              "note": "法国Mbappé/Dembélé火力,本届场均进2.67球,反击效率高"
            },
            {
              "label": "FRA_balance",
              "value": "+",
              "note": "攻防均衡,失0.33/场,Maignan+后防稳"
            }
          ]
        },
        "home_risk": {
          "score": -0.5,
          "items": [
            {
              "label": "ESP_defense",
              "value": "-",
              "note": "★西班牙整届失0.17、铁防天花板,极难打穿(半决赛前只丢1球)"
            },
            {
              "label": "ESP_control",
              "value": "-",
              "note": "Yamal/Pedri传控磨人,控球压缩法国反击空间"
            },
            {
              "label": "low_score",
              "value": "±",
              "note": "★两队都铁防→低比分,谁先进谁占心理优势"
            }
          ]
        },
        "away_upset_path": {
          "score": 0.4,
          "items": [
            {
              "label": "vs_market",
              "value": "一致",
              "note": "模型给西班牙29% vs 庄家29.5%,一致;分歧在平局(模型36% vs 庄家29%,模型更看重僵局)"
            },
            {
              "label": "Yamal_Pedri",
              "value": "+",
              "note": "Yamal边路爆点+Pedri中场统治,是西班牙破铁桶的钥匙"
            }
          ]
        },
        "live_variables": {
          "score": 0,
          "items": [
            {
              "label": "draw_high",
              "value": "★",
              "note": "★模型平局36%最高、最可能0-0(21%)——两大铁防最易踢成僵局、拖进加时/点球"
            },
            {
              "label": "heat",
              "value": "±",
              "note": "AT&T可开合顶+空调,32°C高温对场内影响小,利技术流"
            }
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
          { "name": "Lamine Yamal", "pos": "RW", "status": "HOT", "note": "边路爆点" },
          { "name": "Pedri", "pos": "CM", "status": "KEY", "note": "节拍器" },
          { "name": "Nico Williams", "pos": "LW", "status": "OK", "note": "速度突破" },
          { "name": "Álvaro Morata", "pos": "ST", "status": "OK", "note": "终结点" }
        ]
      },
      "odds": [
        { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null }
      ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真模型:泊松+蒙特卡洛真跑5万次,强度=各队本届真实进球(防穿越cutoff7/14,含R16+八强)" },
        { "time": "—", "level": "OK", "msg": "FIFA rank FRA#2 ESP#3" },
        { "time": "—", "level": "WARN", "msg": "★模型 35/36/29 vs 庄家 41.1/29.4/29.5:法国favored一致,但模型更看重平局(两铁防)" },
        { "time": "—", "level": "OK", "msg": "蒙特卡洛5万次输出: 35 / 36 / 29 · 最可能0-0(21%)" }
      ]
    }
  ]
};
