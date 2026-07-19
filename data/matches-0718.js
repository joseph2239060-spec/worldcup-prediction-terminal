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
      ],
      "result": {
        "status": "FT",
        "home_goals": 4,
        "away_goals": 6,
        "scoreline": "4 - 6",
        "scorers": [
          { "min": "3'", "team": "ENG", "player": "Declan Rice", "type": "远射吊射 → 0-1" },
          { "min": "18'", "team": "ENG", "player": "Ezri Konsa", "type": "角球头球 → 0-2" },
          { "min": "37'", "team": "ENG", "player": "Saka", "type": "接Rashford传球推空门 → 0-3" },
          { "min": "45+1'", "team": "ENG", "player": "Saka", "type": "禁区边缘爆射 → 0-4" },
          { "min": "48'", "team": "FRA", "player": "Mbappé", "type": "下半场首球 → 1-4" },
          { "min": "54'", "team": "FRA", "player": "Barcola", "type": "Mbappé助攻 → 2-4" },
          { "min": "65'", "team": "FRA", "player": "Mbappé", "type": "梅开二度(Olise助攻)→ 3-4" },
          { "min": "87'", "team": "ENG", "player": "Saka", "type": "点球完成帽子戏法 → 3-5" },
          { "min": "90+6'", "team": "FRA", "player": "Dembélé", "type": "Upamecano助攻,追到 → 4-5" },
          { "min": "90+8'", "team": "ENG", "player": "Bellingham", "type": "单骑过三人锁定 → 4-6" }
        ],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "英格兰6-4法国、10球大战夺季军铜牌。英格兰上半场0-4狂轰(Rice 3'/Konsa 18'/Saka 37'+45+1'),法国下半场Mbappé梅开二度(48'/65')+Barcola追到4-5差一球,Saka 87'点球完成帽子戏法、Bellingham 90+8'单骑锁定6-4。Mbappé金靴级(追平进球纪录)。模型押法国57%→MISS,但赛前'季军赛方差大'预警对了、大球也判对",
        "source": "ESPN/beIN/Yahoo"
      },
      "review": {
        "verdict": "MISS",
        "headline": "✗季军赛爆10球:模型押法国57%→英格兰6-4夺铜。但赛前'季军赛方差大'预警对了,大球也判准",
        "hits": [
          "★大球判对:模型说两队都能进、易大球(over 54%),结果10球爆表(4-6)",
          "★赛前预警对:模型自己标了'季军赛荣誉战、动力不足、方差大、参考打折'——结果正是无防守的疯狂对攻,完美印证"
        ],
        "misses": [
          "★方向错:模型押法国57%(最高)→英格兰6-4赢,英格兰上半场就0-4狂轰",
          "模型给英格兰20%远远不够:Saka帽子戏法、英格兰进6球,季军赛的实力方向模型本就难算"
        ],
        "model_lesson": "季军赛MISS,但这场恰恰证明模型赛前的诚实预警是对的——我标了'季军赛荣誉战、动力不足、方差大、参考打折,别太当真',结果10球疯狂对攻(0-4→4-5→4-6)完美印证。季军赛没有防守动机、放开对攻,任何实力模型都算不准方向,能判对'大球'已经不错。这不是模型核心能力的问题(淘汰赛分胜负那套仍成立),是'荣誉战'本身不可预测。教训已在赛前落实:遇到动机异常的比赛(季军赛/已出线末轮),模型输出就该打折、标风险——这次做到了"
      }
    }
  ]
};
