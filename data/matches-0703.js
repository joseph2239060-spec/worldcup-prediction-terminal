// 世界杯预测 - 2026-07-03（淘汰赛 Round of 32 收官，真预测，带盘口）
// ⚠️淘汰赛:90分钟平→加时/点球,下列为90分钟胜平负,"平"=进加时;点球随机·模型不算
// 场馆/海拔=官方真值;温湿度=7/3天气预报(WebSearch,含AccuWeather热浪报道);日期时间=odds commence换算ET
// 队代码:AUS/EGY ARG/CPV COL/GHA
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-03"] = {
  "date": "2026-07-03", "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 32 收官",
  "model_version": "POISSON v1.4 + 淘汰赛(加时/点球)修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有48家盘口;淘汰赛90分钟胜平负,'平'=进加时;点球随机不预测",
  "matches": [
    {
      "id": "WC2026_R32_14", "kickoff_cst": "2026-07-03 14:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "AUS", "name_zh": "澳大利亚", "flag": "🇦🇺", "fifa_rank": 42 },
      "away": { "code": "EGY", "name_zh": "埃及", "flag": "🇪🇬", "fifa_rank": 33 },
      "venue": "AT&T Stadium, 阿灵顿", "altitude_m": 180, "temp_c": 24, "humidity_pct": 50, "referee": "未公布",
      "headline": "埃及39%/平31%/澳大利亚30%：Salah质量占优,澳大利亚身体硬顽强。庄家埃及38.3%微favored,接近五五,低比分易进加时。★室外热浪(达拉斯RealFeel 100-105°F),AT&T有顶空调",
      "probabilities": { "home_win": 30.0, "draw": 31.0, "away_win": 39.0 },
      "expected_goals": { "home": 0.95, "away": 1.15 }, "expected_score": "1 : 1",
      "over_2_5": 42.0, "btts": 48.0, "clean_sheet_home": 30.0, "confidence": 53,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.35, "items": [
          { "label": "AUS_physical", "value": "+", "note": "澳大利亚身体硬+顽强(小组赛拼劲足),定位球有威胁" },
          { "label": "Irvine", "value": "+", "note": "Irvine中场引擎+McGree创造" },
          { "label": "block", "value": "+", "note": "澳退守反击能限制埃及" } ] },
        "home_risk": { "score": -0.65, "items": [
          { "label": "Salah", "value": "-", "note": "★Salah一个机会就能终结,埃及个人能力上限高" },
          { "label": "EGY_rank", "value": "-", "note": "FIFA 33 vs 42,埃及略高" },
          { "label": "Marmoush", "value": "-", "note": "Marmoush搭档Salah,反击点" } ] },
        "away_upset_path": { "score": 0.55, "items": [
          { "label": "vs_market", "value": "本就微favorite", "note": "庄家埃及38.3%微favored,我给39%贴市场" },
          { "label": "Salah_moment", "value": "+", "note": "Salah灵光一现打破僵局" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "heat", "value": "-", "note": "★室外热浪RealFeel 100-105°F,AT&T关顶开空调则场内可控,但体能仍是变量" },
          { "label": "low_scoring", "value": "-", "note": "两队都不算火爆→低比分,易进加时" },
          { "label": "first_goal", "value": "±", "note": "谁先进谁掌握主动" } ] }
      },
      "players": {
        "home": [
          { "name": "Jackson Irvine", "pos": "CM", "status": "KEY", "note": "队长,中场引擎" },
          { "name": "Riley McGree", "pos": "AM", "status": "OK", "note": "创造" },
          { "name": "Mathew Leckie", "pos": "FW", "status": "OK", "note": "冲击" },
          { "name": "澳大利亚后防", "pos": "DF", "status": "OK", "note": "强硬+定位球" } ],
        "away": [
          { "name": "Mohamed Salah", "pos": "RW", "status": "KEY", "note": "队长,进攻核心" },
          { "name": "Omar Marmoush", "pos": "FW", "status": "OK", "note": "搭档锋线" },
          { "name": "埃及后防", "pos": "DF", "status": "OK", "note": "组织" },
          { "name": "埃及门将", "pos": "GK", "status": "OK", "note": "把关" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank AUS#42 EGY#33;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型30/31/39 vs 庄家29.1/32.7/38.3:接近五五,埃及微favored;低比分易进加时" },
        { "time": "—", "level": "INFO", "msg": "🌡️室外热浪RealFeel 100-105°F(达拉斯),AT&T有顶空调,场内可控但体能是变量" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 30.0 / 31.0 / 39.0" } ]
    },
    {
      "id": "WC2026_R32_15", "kickoff_cst": "2026-07-03 18:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "ARG", "name_zh": "阿根廷", "flag": "🇦🇷", "fifa_rank": 1 },
      "away": { "code": "CPV", "name_zh": "佛得角", "flag": "🇨🇻", "fifa_rank": 70 },
      "venue": "Hard Rock Stadium, 迈阿密", "altitude_m": 2, "temp_c": 31, "humidity_pct": 72, "referee": "未公布",
      "headline": "阿根廷78%(90分钟)：卫冕冠军+Messi,佛得角黑马已超神(小组赛逼平乌拉圭/西班牙级)但实力差一档。庄家阿83.4%,我略低留黑马+高温方差。★迈阿密31°C高湿",
      "probabilities": { "home_win": 78.0, "draw": 15.0, "away_win": 7.0 },
      "expected_goals": { "home": 2.05, "away": 0.60 }, "expected_score": "2 : 0",
      "over_2_5": 54.0, "btts": 32.0, "clean_sheet_home": 50.0, "confidence": 64,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 1.35, "items": [
          { "label": "ARG_champion", "value": "+", "note": "卫冕冠军+Messi/Álvarez/Lautaro,个人能力碾压" },
          { "label": "rank_gap", "value": "+", "note": "FIFA 1 vs 70,实力差一大档" },
          { "label": "depth", "value": "+", "note": "阿根廷深度厚,淘汰赛余地大" } ] },
        "home_risk": { "score": -0.50, "items": [
          { "label": "CPV_blackhorse", "value": "-", "note": "佛得角本届超神黑马(逼平强队),团队防守+拼劲足" },
          { "label": "heat_humid", "value": "-", "note": "迈阿密31°C+72%湿度,阿根廷体能消耗大" },
          { "label": "CPV_block", "value": "-", "note": "佛得角摆大巴,阿根廷可能久攻不下" } ] },
        "away_upset_path": { "score": -0.30, "items": [
          { "label": "vs_market", "value": "本就大favorite", "note": "庄家阿根廷83.4%,我给78%留黑马+高温方差" },
          { "label": "park_bus_counter", "value": "+", "note": "佛得角铁桶+反击偷袭,复刻小组赛惊喜" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "heat", "value": "-", "note": "★迈阿密高温高湿,降节奏+考验阿根廷耐心" },
          { "label": "Messi_minutes", "value": "±", "note": "Messi出场时长" },
          { "label": "early_goal", "value": "±", "note": "阿根廷早进则大胜,僵持久则黑马有戏" } ] }
      },
      "players": {
        "home": [
          { "name": "Lionel Messi", "pos": "AM", "status": "KEY", "note": "核心,7届连续进球中" },
          { "name": "Julián Álvarez", "pos": "ST", "status": "KEY", "note": "终结点" },
          { "name": "Lautaro Martínez", "pos": "ST", "status": "OK", "note": "冲击" },
          { "name": "Enzo Fernández", "pos": "CM", "status": "OK", "note": "中场" } ],
        "away": [
          { "name": "Ryan Mendes", "pos": "FW", "status": "OK", "note": "佛得角核心" },
          { "name": "佛得角后防", "pos": "DF", "status": "KEY", "note": "团队铁桶" },
          { "name": "Vozinha", "pos": "GK", "status": "KEY", "note": "门将,爆冷指望" },
          { "name": "佛得角中场", "pos": "CM", "status": "OK", "note": "拼抢" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ARG#1 CPV#70;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型78% vs 庄家83.4%:阿根廷大favored,留佛得角黑马+高温方差" },
        { "time": "—", "level": "INFO", "msg": "🌡️迈阿密31°C+72%湿度,高温高湿降节奏,考验阿根廷体能" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 78.0 / 15.0 / 7.0" } ]
    },
    {
      "id": "WC2026_R32_16", "kickoff_cst": "2026-07-03 21:30 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "COL", "name_zh": "哥伦比亚", "flag": "🇨🇴", "fifa_rank": 13 },
      "away": { "code": "GHA", "name_zh": "加纳", "flag": "🇬🇭", "fifa_rank": 73 },
      "venue": "Arrowhead Stadium, 堪萨斯城", "altitude_m": 270, "temp_c": 29, "humidity_pct": 60, "referee": "未公布",
      "headline": "哥伦比亚54%/平28%/加纳18%：Luis Díaz/James质量占优,加纳铁防(0-0英格兰)+Kudus反击。庄家哥58.5%,我给加纳更多——铁防+爆冷史,易低比分。★堪萨斯城29°C余温",
      "probabilities": { "home_win": 54.0, "draw": 28.0, "away_win": 18.0 },
      "expected_goals": { "home": 1.40, "away": 0.85 }, "expected_score": "1 : 0",
      "over_2_5": 42.0, "btts": 44.0, "clean_sheet_home": 40.0, "confidence": 55,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.60, "items": [
          { "label": "Diaz_James", "value": "+", "note": "Luis Díaz火热+James创造,进攻质量占优" },
          { "label": "rank_gap", "value": "+", "note": "FIFA 13 vs 73,实力高一档" },
          { "label": "COL_form", "value": "+", "note": "哥伦比亚小组赛头名出线,状态好" } ] },
        "home_risk": { "score": -0.75, "items": [
          { "label": "GHA_defense", "value": "-", "note": "★加纳铁防(0-0逼平英格兰),低位防守难破" },
          { "label": "Kudus", "value": "-", "note": "Kudus个人能力是反击爆点" },
          { "label": "GHA_record", "value": "-", "note": "加纳有淘汰赛硬骨头基因" } ] },
        "away_upset_path": { "score": 0.65, "items": [
          { "label": "vs_market", "value": "★分歧", "note": "庄家哥58.5%/加15.5%,我给加18%——铁防+爆冷史,留更多空间" },
          { "label": "Kudus_counter", "value": "+", "note": "Kudus反击+加纳退守磨低比分" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "low_scoring", "value": "-", "note": "★加纳铁防+退守→低比分,易进加时" },
          { "label": "heat", "value": "-", "note": "堪萨斯城29°C余温,晚场稍缓但仍热" },
          { "label": "first_goal", "value": "±", "note": "哥先进则加纳出来,反之哥焦虑" } ] }
      },
      "players": {
        "home": [
          { "name": "Luis Díaz", "pos": "LW", "status": "HOT", "note": "利物浦,进攻箭头" },
          { "name": "James Rodríguez", "pos": "AM", "status": "KEY", "note": "10号创造核心" },
          { "name": "Jhon Durán", "pos": "ST", "status": "OK", "note": "终结" },
          { "name": "Daniel Muñoz", "pos": "RB", "status": "OK", "note": "助攻边卫" } ],
        "away": [
          { "name": "Mohammed Kudus", "pos": "AM", "status": "KEY", "note": "反击爆点" },
          { "name": "Thomas Partey", "pos": "CM", "status": "OK", "note": "中场屏障" },
          { "name": "加纳后防", "pos": "DF", "status": "KEY", "note": "0-0英格兰的铁防" },
          { "name": "加纳门将", "pos": "GK", "status": "OK", "note": "把关" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank COL#13 GHA#73;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型54/28/18 vs 庄家58.5/26.1/15.5:给加纳更多(铁防+爆冷史);易低比分进加时" },
        { "time": "—", "level": "INFO", "msg": "🌡️堪萨斯城晚场29°C余温,较日间缓和但仍热" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 54.0 / 28.0 / 18.0" } ]
    }
  ]
};
