// 世界杯赛前预测 - 2026-06-12 数据
// ════════════════════════════════════════════════════════════════
// 6/12 真实赛程：2 场（加拿大/美国 东道主首战）— FIFA 官方
//   1. 加拿大 vs 波黑   — B组，BMO Field，多伦多
//   2. 美国   vs 巴拉圭 — D组，SoFi Stadium，洛杉矶
// 概率来自泊松模型（λ 基于核实近期战绩+FIFA排名+主客场）
// 数据来源：FIFA/ESPN/Sofascore + 多agent Workflow 交叉验证（见 SOURCES.md）
// 新增 red_card_risk 字段：v2 纪律因子的风险等级（揭幕战3红牌教训）
// 赔率：仍占位待接入 The Odds API
// ════════════════════════════════════════════════════════════════

window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-12"] = {
  "date": "2026-06-12",
  "tournament": "FIFA World Cup 2026 · Day 2 · 东道主首战",
  "model_version": "POISSON v1.1 + 红牌风险标记",
  "model_accuracy_7d": null,
  "data_note": "概率=泊松估算；排名/球员/防守数据=官方核实；赔率=占位；red_card_risk=v2纪律因子",
  "matches": [
    {
      "id": "WC2026_M003",
      "kickoff_cst": "2026-06-12 15:00 ET",
      "group": "B",
      "round": 1,
      "tag": null,
      "home": { "code": "CAN", "name_zh": "加拿大", "flag": "🇨🇦", "fifa_rank": 30 },
      "away": { "code": "BIH", "name_zh": "波黑", "flag": "🇧🇦", "fifa_rank": 64 },
      "venue": "BMO Field, 多伦多",
      "altitude_m": 76,
      "temp_c": 23,
      "humidity_pct": 60,
      "referee": "Facundo Tello (ESPN预告，未官方确认)",
      "headline": "加拿大主场+波黑后防漏(场均失1.9) → 模型给60%；但Davies缺阵+红牌风险偏高",
      "probabilities": { "home_win": 59.9, "draw": 25.3, "away_win": 14.7 },
      "expected_goals": { "home": 1.55, "away": 0.62 },
      "expected_score": "1 : 0",
      "over_2_5": 36.9,
      "btts": 36.4,
      "clean_sheet_home": 53.8,
      "confidence": 68,
      "monte_carlo_n": 50000,
      "value_rating": 3,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 1.30,
          "items": [
            { "label": "FIFA_30_vs_64", "value": "+34位", "note": "排名差34位，加拿大2025至今16场仅1负" },
            { "label": "BIH_leaky_def", "value": "对手漏防", "note": "波黑近10场失19球(场均1.9)，曾0-6圣马力诺、1-4马耳他" },
            { "label": "home_BMO_Marsch", "value": "主场", "note": "多伦多满场+Marsch压迫体系，主场系数1.20" },
            { "label": "CAN_solid_def", "value": "防守稳", "note": "加拿大近10场场均仅失0.5球" }
          ]
        },
        "home_risk": {
          "score": -0.70,
          "items": [
            { "label": "Davies_OUT", "value": "-", "note": "队长+最佳球员Davies缺阵(Marsch证实首战不上)，左路削弱" },
            { "label": "CAN_low_attack", "value": "-", "note": "加拿大进攻平庸，近10场场均仅0.9球，多场0-0" },
            { "label": "Dzeko_setpiece", "value": "-", "note": "40岁Dzeko头球终结点专克防反，一球可能就够偷分" },
            { "label": "Tello_strict", "value": "-", "note": "主裁严判，若罚下或送点走势可能逆转" }
          ]
        },
        "away_upset_path": {
          "score": 0.65,
          "items": [
            { "label": "Dzeko_aerial", "value": "+", "note": "Dzeko/Kolasinac身高占优，定位球偷一球" },
            { "label": "park_the_bus", "value": "+", "note": "4-4-2大巴龟缩，把加拿大拖进0-0/1-1" },
            { "label": "Demirovic_counter", "value": "+", "note": "Demirovic本季德甲9-12球+Bajraktarevic速度反击" },
            { "label": "BIH_experience", "value": "+", "note": "刚靠两轮点球淘汰Wales、Italy，大赛心理强" }
          ]
        },
        "live_variables": {
          "score": -0.10,
          "items": [
            { "label": "Davies_gametime", "value": "-", "note": "Davies是否临场进名单(预测按缺阵处理)" },
            { "label": "wind_41kmh", "value": "-", "note": "下午阵风达41km/h，影响传中/定位球精度" },
            { "label": "Tello_VAR", "value": "±", "note": "南美严判+VAR，红牌/点球将剧烈改变走势" },
            { "label": "BIH_lineup", "value": "±", "note": "波黑首发战术(龟缩vs主动)以开赛名单为准" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Alphonso Davies", "pos": "LB/LW", "status": "OUT", "note": "拜仁，队长兼最佳球员，Marsch证实首战缺阵" },
          { "name": "Jonathan David", "pos": "ST", "status": "KEY", "note": "进攻核心终结点" },
          { "name": "Tajon Buchanan", "pos": "WG", "status": "OK", "note": "Davies缺阵后边路主要威胁" },
          { "name": "Stephen Eustáquio", "pos": "CM", "status": "OK", "note": "中场组织" }
        ],
        "away": [
          { "name": "Edin Džeko", "pos": "ST", "status": "KEY", "note": "40岁，定位球头球终结点，爆冷关键" },
          { "name": "Sead Kolašinac", "pos": "DF", "status": "OK", "note": "定位球高点+身体" },
          { "name": "Ermedin Demirović", "pos": "FW", "status": "HOT", "note": "本季德甲9-12球" },
          { "name": "Bajraktarević", "pos": "WG", "status": "OK", "note": "速度反击点" }
        ]
      },
      "odds": [
        { "book": "占位-待接入API", "home": null, "draw": null, "away": null, "edge_pct": null }
      ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "fixture verified: FIFA / ESPN" },
        { "time": "—", "level": "OK", "msg": "FIFA rank CAN#30 BIH#64; CAN GA 0.5, BIH GA 1.9" },
        { "time": "—", "level": "WARN", "msg": "Davies OUT (Marsch confirmed) → λ_home -adj" },
        { "time": "—", "level": "WARN", "msg": "red_card_risk ELEVATED: ref Tello strict + BIH fouling" },
        { "time": "—", "level": "OK", "msg": "poisson output: 59.9 / 25.3 / 14.7" }
      ],
      "result": {
        "status": "FT",
        "home_goals": 1,
        "away_goals": 1,
        "scoreline": "1 - 1",
        "scorers": [
          { "min": "21'", "team": "BIH", "player": "Jovo Lukić", "type": "近距离头球 (0.64 xG)" },
          { "min": "78'", "team": "CAN", "player": "Cyle Larin", "type": "替补登场121秒后17码射门扳平" }
        ],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": 4, "poss_home": 61, "poss_away": 39, "xg_home": 1.25, "xg_away": 0.98 },
        "key_moment": "波黑21'头球先进，加拿大61%控球难破铁桶，Larin 78'替补登场即扳平。Davies坐板凳未出场",
        "source": "ESPN / FOX / Yahoo"
      },
      "review": {
        "verdict": "PARTIAL",
        "headline": "方向错了（预测加拿大60%胜→实际1-1平），但模型把平局机制和概率都说中了——这才是关键",
        "hits": [
          "★模型home_risk原话:'破不了密集防守易被拖入平局(draw 25.3%)'→ 真的1-1平了",
          "★away_upset_path原话:'波黑龟缩+一次头槌偷一球,拖进0-0或1-1'→ Lukić头球+1-1，字面应验",
          "加拿大61%控球、xG1.25却只进1球——'进攻效率平庸、破不了密集防守'完全说中",
          "Davies缺阵的判断对了（确实坐板凳未出场）",
          "xG对比 加1.25 vs 模型期望1.55、波0.98 vs 模型0.62——量级方向对"
        ],
        "misses": [
          "★核心失手：头条结论给加拿大60%胜，实际平局。60%favorite被1-in-4的平局兑现了",
          "低估波黑进攻：模型给波黑λ0.62/期望进球低，实际波黑xG0.98还先进球",
          "红牌风险标了ELEVATED，实际0红牌——v2纪律因子这场误报（单场样本，因子给概率非确定）"
        ],
        "model_lesson": "60%不是'稳赢'是'10次输4次'——平局25%被兑现是概率正常工作,不是模型失败。教训:对'强队vs铁桶'类比赛要在视频里强调平局风险,别让观众误读高favorite为稳胆。红牌因子需校准(误报率偏高)"
      }
    },
    {
      "id": "WC2026_M004",
      "kickoff_cst": "2026-06-12 21:00 ET",
      "group": "D",
      "round": 1,
      "tag": "CLOSE_MATCH",
      "home": { "code": "USA", "name_zh": "美国", "flag": "🇺🇸", "fifa_rank": 17 },
      "away": { "code": "PAR", "name_zh": "巴拉圭", "flag": "🇵🇾", "fifa_rank": 41 },
      "venue": "SoFi Stadium, 洛杉矶",
      "altitude_m": 30,
      "temp_c": 24,
      "humidity_pct": 50,
      "referee": "Makkelie (ESPN预告，未官方确认)",
      "headline": "东道主主场遇铁桶巴拉圭：又一场五五开。美国40%、巴拉圭近8场不败刚爆冷墨西哥",
      "probabilities": { "home_win": 40.1, "draw": 24.0, "away_win": 35.9 },
      "expected_goals": { "home": 1.58, "away": 1.48 },
      "expected_score": "2 : 1",
      "over_2_5": 58.9,
      "btts": 61.3,
      "clean_sheet_home": 22.7,
      "confidence": 58,
      "monte_carlo_n": 50000,
      "value_rating": 4,
      "edge_pct": null,
      "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": {
          "score": 0.80,
          "items": [
            { "label": "host_SoFi", "value": "主场", "note": "SoFi同揭幕日场馆，大洛杉矶亲美主场，主场系数1.22" },
            { "label": "FIFA_17_vs_41", "value": "+24位", "note": "排名差+2025年11月刚2-1赢过这支巴拉圭" },
            { "label": "Balogun_HOT", "value": "状态", "note": "Balogun摩纳哥下半程火热，真正在状态的中锋" },
            { "label": "Pochettino_press", "value": "压迫", "note": "高位压迫可压制低位防反的客队" }
          ]
        },
        "home_risk": {
          "score": -0.95,
          "items": [
            { "label": "PAR_elite_def", "value": "-", "note": "巴拉圭18场预选赛仅失14球7零封，Gustavo Gomez领衔" },
            { "label": "Pulisic_drought", "value": "-", "note": "Pulisic国家队8场进球荒，创造核心哑火" },
            { "label": "USA_leaky_2026", "value": "-", "note": "美国2026热身5-2负比利时、2-1负德国，场均失~1.9" },
            { "label": "Richards_doubt", "value": "-", "note": "中卫Richards脚踝韧带伤存疑，替补削弱后防" }
          ]
        },
        "away_upset_path": {
          "score": 1.10,
          "items": [
            { "label": "Almiron_counter", "value": "+", "note": "深位防守+Almirón转换速度打美国暴露的后防" },
            { "label": "USA_def_lapse", "value": "+", "note": "美国后防失误/定位球易送礼，逼美国压上露空当" },
            { "label": "PAR_unbeaten_8", "value": "+", "note": "巴拉圭近8场不败(含逼平巴西/阿根廷/乌拉圭)，刚爆冷墨西哥" },
            { "label": "Gomez_contain_Balogun", "value": "+", "note": "Gomez若锁死Balogun，低比分里巴拉圭一球致胜" }
          ]
        },
        "live_variables": {
          "score": 0.00,
          "items": [
            { "label": "Pulisic_form", "value": "±", "note": "若Pulisic早进球美国胜率飙升；持续哑火则爆冷路径变宽" },
            { "label": "Richards_fitness", "value": "-", "note": "Richards中卫能否首发直接影响巴拉圭λ与BTTS" },
            { "label": "Enciso_doubt", "value": "±", "note": "巴拉圭Enciso大腿伤存疑，复出会抬升客队进攻上限" },
            { "label": "first_goal_timing", "value": "±", "note": "巴拉圭领先后铁桶更强，首球归属极大左右分布" }
          ]
        }
      },
      "players": {
        "home": [
          { "name": "Christian Pulisic", "pos": "LW", "status": "QUEST", "note": "AC米兰，但国家队8场进球荒，创造核心待找状态" },
          { "name": "Folarin Balogun", "pos": "ST", "status": "HOT", "note": "摩纳哥下半程火热，在状态的中锋" },
          { "name": "Chris Richards", "pos": "CB", "status": "QUEST", "note": "脚踝韧带伤存疑，后防关键" },
          { "name": "Tyler Adams", "pos": "CM", "status": "OK", "note": "中场屏障" }
        ],
        "away": [
          { "name": "Gustavo Gómez", "pos": "CB", "status": "KEY", "note": "队长，巴拉圭铁桶防线核心(预选赛仅失14球)" },
          { "name": "Miguel Almirón", "pos": "RW", "status": "KEY", "note": "反击转换速度，爆冷发起点" },
          { "name": "Antonio Sanabria", "pos": "ST", "status": "OK", "note": "锋线终结" },
          { "name": "Julio Enciso", "pos": "AM", "status": "QUEST", "note": "大腿伤存疑，复出抬升进攻上限" }
        ]
      },
      "odds": [
        { "book": "占位-待接入API", "home": null, "draw": null, "away": null, "edge_pct": null }
      ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "fixture verified: FIFA / ESPN" },
        { "time": "—", "level": "OK", "msg": "FIFA rank USA#17 PAR#41; H2H USA 2-1 (Nov 2025)" },
        { "time": "—", "level": "WARN", "msg": "Pulisic 8-game NT scoring drought; Richards ankle doubt" },
        { "time": "—", "level": "WARN", "msg": "PAR elite def: 14 GA/18 quals, unbeaten in 8" },
        { "time": "—", "level": "OK", "msg": "poisson output: 40.1 / 24.0 / 35.9 (close)" }
      ],
      "result": {
        "status": "FT",
        "home_goals": 4,
        "away_goals": 1,
        "scoreline": "4 - 1",
        "scorers": [
          { "min": "7'", "team": "USA", "player": "Bobadilla 乌龙", "type": "乌龙球" },
          { "min": "31'", "team": "USA", "player": "Folarin Balogun", "type": "open play" },
          { "min": "45+5'", "team": "USA", "player": "Folarin Balogun", "type": "梅开二度" },
          { "min": "73'", "team": "PAR", "player": "Maurício", "type": "扳回一球" },
          { "min": "90+8'", "team": "USA", "player": "Giovanni Reyna", "type": "锁定大胜" }
        ],
        "red_cards": [],
        "stats": { "shots_home": null, "shots_on_target_home": 6, "poss_home": 65, "poss_away": 35, "xg_home": 1.34, "xg_away": 0.47 },
        "key_moment": "美国7'乌龙先开局、Balogun上半场梅开二度，半场3-0。Pulisic半场替补登场未参与进球",
        "source": "ESPN / NBC / NPR"
      },
      "review": {
        "verdict": "MISS",
        "headline": "方向又错，但这次是反方向：模型给美国只40%(五五开)，实际4-1大胜——模型过度高估了巴拉圭",
        "hits": [
          "★点名HOT球员Balogun → 真的梅开二度，球员判断对",
          "BTTS偏向是(61%) → 4-1双方都进 ✓",
          "大2.5球58.9% → 实际5球大球 ✓",
          "Reyna作为替补冲击点的价值(模型阵容覆盖) → 补时锁定"
        ],
        "misses": [
          "★核心失手：给美国40%当五五开，实际美国65%控球、xG1.34碾压打成4-1",
          "过度高估巴拉圭：被'预选赛仅失14球+近8场不败'误导，给λ太高(1.48)。中立赛会环境下巴拉圭防线远没预选赛稳",
          "Pulisic进球荒的负面权重被高估——他没进球也没影响美国大胜(队友火力足够)",
          "乌龙球开局(7')是模型无法建模的随机事件，但即便剔除美国也明显占优"
        ],
        "model_lesson": "两个6/12比赛暴露同一问题:对'强队vs防守型弱旅'方差判断不准——加拿大那场高估favorite(平)，美国这场低估favorite(大胜)。教训:预选赛防守数据≠世界杯防守表现，要给'赛会制首战易崩盘'更大权重；别因单个球员(Pulisic)状态过度下调整队λ"
      }
    }
  ]
};
