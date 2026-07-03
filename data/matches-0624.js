// 世界杯赛前预测 - 2026-06-24（小组末轮 MD3，真预测，带盘口）
// 模型已纳入"已出线队可能轮换"因素(巴西/摩洛哥)
// 队代码:COL/COD BIH/QAT SUI/CAN SCO/BRA MAR/HAI
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-24"] = {
  "date": "2026-06-24", "tournament": "FIFA World Cup 2026 · 小组末轮 MD3",
  "model_version": "POISSON v1.4 + 末轮轮换修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有盘口;末轮:已出线队(巴西/摩洛哥)按可能轮换适度下调λ",
  "matches": [
    {
      "id": "WC2026_M048", "kickoff_cst": "2026-06-24 15:00 ET", "group": "B", "round": 3, "tag": null,
      "home": { "code": "BIH", "name_zh": "波黑", "flag": "🇧🇦", "fifa_rank": 63 },
      "away": { "code": "QAT", "name_zh": "卡塔尔", "flag": "🇶🇦", "fifa_rank": 56 },
      "venue": "Lumen Field, 西雅图", "altitude_m": 5, "temp_c": 29, "humidity_pct": 50, "referee": "Valenzuela",
      "headline": "波黑52%：主场+Džeko复出+卡塔尔双红停赛后防掏空。但双方都必须赢,会对攻",
      "probabilities": { "home_win": 52.0, "draw": 26.0, "away_win": 22.0 },
      "expected_goals": { "home": 1.55, "away": 0.95 }, "expected_score": "2 : 1",
      "over_2_5": 46.0, "btts": 51.0, "clean_sheet_home": 39.0, "confidence": 58,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.85, "items": [
          { "label": "QAT_susp", "value": "+", "note": "卡塔尔主力中卫Homam Ahmed+后腰Madibo双红停赛,后防掏空" },
          { "label": "must_win_home", "value": "+", "note": "波黑主场+净胜球占优,必须赢搏小组第三" },
          { "label": "Dzeko", "value": "+", "note": "Džeko肩伤康复预计首发,队史第一射手+Demirović" } ] },
        "home_risk": { "score": -0.85, "items": [
          { "label": "BIH_mid_out", "value": "-", "note": "波黑自身Muharemović红牌停赛+Celik伤,中场也受损" },
          { "label": "BIH_form", "value": "-", "note": "波黑近5场0胜状态低迷" },
          { "label": "Almoez_Afif", "value": "-", "note": "卡塔尔Almoez Ali(预选12球)+Afif单点能打穿" } ] },
        "away_upset_path": { "score": 0.65, "items": [
          { "label": "Afif_Almoez", "value": "+", "note": "把握机会先进球迫低迷波黑冒进" },
          { "label": "BIH_mid_gap", "value": "+", "note": "针对波黑残阵中场,定位球/反击偷分" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "Dzeko_start", "value": "±", "note": "Džeko肩伤是否确认首发" },
          { "label": "QAT_CB", "value": "±", "note": "卡塔尔停赛后补位中卫能否顶住" },
          { "label": "Valenzuela", "value": "-", "note": "卡塔尔上场2红+严判主裁" } ] }
      },
      "players": {
        "home": [
          { "name": "Edin Džeko", "pos": "ST", "status": "QUEST", "note": "队史第一射手,肩伤康复" },
          { "name": "Ermedin Demirović", "pos": "FW", "status": "OK", "note": "锋线" },
          { "name": "Sead Kolašinac", "pos": "DF", "status": "OK", "note": "经验" },
          { "name": "Muharemović", "pos": "CM", "status": "SUSP", "note": "红牌停赛,中场缺" } ],
        "away": [
          { "name": "Akram Afif", "pos": "AM", "status": "KEY", "note": "创造核心" },
          { "name": "Almoez Ali", "pos": "ST", "status": "KEY", "note": "预选12球" },
          { "name": "Homam Ahmed", "pos": "CB", "status": "SUSP", "note": "红牌停赛,后防掏空" },
          { "name": "Madibo", "pos": "CDM", "status": "SUSP", "note": "红牌停赛" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank BIH#63 QAT#56" },
        { "time": "—", "level": "WARN", "msg": "卡塔尔双红停赛后防掏空+双方必须赢" },
        { "time": "—", "level": "OK", "msg": "poisson output: 52.0 / 26.0 / 22.0" } ],
      "result": { "status": "FT", "home_goals": 3, "away_goals": 1, "scoreline": "3 - 1",
        "scorers": [ { "min": "—", "team": "BIH", "player": "波黑", "type": "3-1,双红停赛的卡塔尔后防被打穿" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "波黑3-1拿下卡塔尔。模型押波黑(52%)+点名'卡塔尔双红停赛后防掏空'→正中,但比分被低估(预测2-1)", "source": "多源核实" },
      "review": { "verdict": "HIT",
        "headline": "★真盲测命中：波黑52%→3-1胜。模型预先点名的'卡塔尔双红停赛后防掏空'兑现成3球",
        "hits": [ "★胜负方向对：波黑52%→赢 ✓（真盲测）", "★赛前判断'卡塔尔后防掏空'→波黑进3球应验", "判了对攻(双方必须赢)→4球over对" ],
        "misses": [ "比分低估：预测2-1,实际3-1(波黑多进1球)", "over_2.5只给46%偏保守,实际4球" ],
        "model_lesson": "停赛/红牌导致的后防减员,模型方向抓对但进球数仍压低半档——'对手非常规减员'应更激进上调λ" }
    },
    {
      "id": "WC2026_M049", "kickoff_cst": "2026-06-24 15:00 ET", "group": "B", "round": 3, "tag": "CLOSE_MATCH",
      "home": { "code": "SUI", "name_zh": "瑞士", "flag": "🇨🇭", "fifa_rank": 19 },
      "away": { "code": "CAN", "name_zh": "加拿大", "flag": "🇨🇦", "fifa_rank": 30 },
      "venue": "BC Place, 温哥华", "altitude_m": 0, "temp_c": 22, "humidity_pct": 55, "referee": "未公布",
      "headline": "瑞士37/平29/加拿大34：瑞士必须赢(平则加拿大靠净胜球头名)→瑞士更拼。但加拿大温哥华主场+David火热",
      "probabilities": { "home_win": 37.0, "draw": 29.0, "away_win": 34.0 },
      "expected_goals": { "home": 1.45, "away": 1.30 }, "expected_score": "1 : 1",
      "over_2_5": 48.0, "btts": 53.0, "clean_sheet_home": 27.0, "confidence": 55,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 0.55, "items": [
          { "label": "must_win", "value": "+", "note": "瑞士平则加拿大靠净胜球(+6 vs +3)夺头名,瑞士更全力" },
          { "label": "Xhaka_Embolo", "value": "+", "note": "Xhaka(瑞士世界杯射手王)+Embolo,5场不败仅丢2" },
          { "label": "rank_edge", "value": "+", "note": "FIFA 19 vs 30,Akanji/Sommer轴心" } ] },
        "home_risk": { "score": -0.75, "items": [
          { "label": "CAN_home", "value": "-", "note": "温哥华BC Place=加拿大事实主场,声浪+熟悉" },
          { "label": "David_hot", "value": "-", "note": "Jonathan David(对卡塔尔帽子戏法,4球)反击致命" },
          { "label": "SUI_push", "value": "-", "note": "瑞士压上,加拿大反击空间大" } ] },
        "away_upset_path": { "score": 0.70, "items": [
          { "label": "David_counter", "value": "+", "note": "David反击打瑞士压上的身后" },
          { "label": "sit_deep", "value": "+", "note": "加拿大平局即头名,可收deep反击" },
          { "label": "Larin", "value": "+", "note": "Larin替补冲击点" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "CAN_approach", "value": "±", "note": "加拿大求平收deep还是争胜" },
          { "label": "first_goal", "value": "±", "note": "瑞士先进则加拿大压出,反之瑞士冒进" } ] }
      },
      "players": {
        "home": [
          { "name": "Granit Xhaka", "pos": "CM", "status": "KEY", "note": "瑞士世界杯射手王" },
          { "name": "Breel Embolo", "pos": "ST", "status": "OK", "note": "焦点前锋" },
          { "name": "Manuel Akanji", "pos": "CB", "status": "KEY", "note": "后防" },
          { "name": "Gregor Kobel", "pos": "GK", "status": "OK", "note": "门将" } ],
        "away": [
          { "name": "Jonathan David", "pos": "ST", "status": "HOT", "note": "对卡塔尔帽子戏法,4球" },
          { "name": "Cyle Larin", "pos": "ST", "status": "OK", "note": "冲击点" },
          { "name": "Alphonso Davies", "pos": "LB", "status": "OK", "note": "左路" },
          { "name": "Stephen Eustáquio", "pos": "CM", "status": "OK", "note": "中场" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank SUI#19 CAN#30; 加拿大温哥华主场" },
        { "time": "—", "level": "WARN", "msg": "瑞士必须赢+加拿大主场→三选一,低置信55%" },
        { "time": "—", "level": "OK", "msg": "poisson output: 37.0 / 29.0 / 34.0" } ],
      "result": { "status": "FT", "home_goals": 3, "away_goals": 1, "scoreline": "3 - 1",
        "scorers": [ { "min": "—", "team": "SUI", "player": "瑞士", "type": "3-1,'必须赢'的瑞士全力碾过加拿大主场" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "瑞士3-1加拿大。模型在三选一里押了瑞士(37%最高,理由'瑞士必须赢更拼')→对,但只给55%置信、判1-1平局战,实际瑞士3-1并不胶着", "source": "多源核实" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中但过度谨慎：模型标CLOSE_MATCH(37/29/34)押瑞士,结果瑞士3-1毫不胶着",
        "hits": [ "★胜负方向对：瑞士37%(三选一里最高)→赢 ✓（真盲测）", "★'瑞士必须赢更拼'的逻辑兑现", "顶住了加拿大温哥华主场+David火热的upset叙事" ],
        "misses": [ "置信只55%、标CLOSE_MATCH→实际3-1不close,过度看平", "比分大幅低估：预测1-1,实际3-1(又一次低估favorite进球)" ],
        "model_lesson": "对'排名占优+必须赢'的中上游favorite,模型仍习惯性往平局收→该更敢给胜。这和苏格兰-巴西同病:低估favorite进球数" }
    },
    {
      "id": "WC2026_M050", "kickoff_cst": "2026-06-24 18:00 ET", "group": "C", "round": 3, "tag": null,
      "home": { "code": "SCO", "name_zh": "苏格兰", "flag": "🏴", "fifa_rank": 40 },
      "away": { "code": "BRA", "name_zh": "巴西", "flag": "🇧🇷", "fifa_rank": 6 },
      "venue": "MetLife Stadium, 新泽西", "altitude_m": 7, "temp_c": 27, "humidity_pct": 65, "referee": "未公布",
      "headline": "巴西客场64%：但已出线会轮换护Vini、Raphinha伤缺、Neymar复出生疏。苏格兰必须搏分会全力",
      "probabilities": { "home_win": 14.0, "draw": 22.0, "away_win": 64.0 },
      "expected_goals": { "home": 0.75, "away": 2.00 }, "expected_score": "1 : 2",
      "over_2_5": 58.0, "btts": 48.0, "clean_sheet_home": 13.0, "confidence": 66,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.30, "items": [
          { "label": "must_score", "value": "+", "note": "苏格兰必须不输才稳进,会全力搏分,赌性高于巴西" },
          { "label": "BRA_rotation", "value": "+", "note": "巴西已锁出线+净胜+3居首,Ancelotti强烈轮换动机" },
          { "label": "Raphinha_OUT", "value": "+", "note": "巴西头号边锋Raphinha伤缺+Neymar复出生疏,火力缺一档" } ] },
        "home_risk": { "score": -1.40, "items": [
          { "label": "BRA_quality", "value": "-", "note": "FIFA 6 vs 40,Vinícius本届2球火热,替补深度仍碾压" },
          { "label": "counter_risk", "value": "-", "note": "苏格兰压上搏分=把空间送给Vini/Cunha快下,易被打大球" } ] },
        "away_upset_path": { "score": -0.30, "items": [
          { "label": "市场favorite", "value": "本就favorite", "note": "巴西博彩~66%,模型贴市场(非upset)" },
          { "label": "Vini_Cunha", "value": "+", "note": "Vinícius火热+Cunha对海地梅开二度,反击终结" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "BRA_rotation_extent", "value": "±", "note": "巴西轮换几人+Neymar/Vini出场时长" },
          { "label": "SCO_early", "value": "±", "note": "苏格兰定位球早进球则轮换巴西陷被动" } ] }
      },
      "players": {
        "home": [
          { "name": "Scott McTominay", "pos": "CM", "status": "KEY", "note": "定位球+推进" },
          { "name": "John McGinn", "pos": "CM", "status": "OK", "note": "中场" },
          { "name": "Che Adams", "pos": "ST", "status": "OK", "note": "锋线" },
          { "name": "Andy Robertson", "pos": "LB", "status": "OK", "note": "队长" } ],
        "away": [
          { "name": "Vinícius Júnior", "pos": "LW", "status": "HOT", "note": "本届2球" },
          { "name": "Matheus Cunha", "pos": "ST", "status": "OK", "note": "对海地梅开二度" },
          { "name": "Raphinha", "pos": "RW", "status": "OUT", "note": "★官方伤缺" },
          { "name": "Neymar", "pos": "AM", "status": "QUEST", "note": "复出存疑,生疏" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank SCO#40 BRA#6" },
        { "time": "—", "level": "INFO", "msg": "末轮:巴西已出线,轮换+Raphinha缺→λ适度下调到2.0" },
        { "time": "—", "level": "OK", "msg": "poisson output: 14.0 / 22.0 / 64.0" } ],
      "result": { "status": "FT", "home_goals": 0, "away_goals": 3, "scoreline": "0 - 3",
        "scorers": [ { "min": "—", "team": "BRA", "player": "Vinícius Júnior ×2 + Matheus Cunha", "type": "巴西0-3完胜,Vini双响" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "巴西3-0苏格兰,Vinícius两球+Cunha。模型押巴西(64%)→强命中,但把巴西λ下调到2.0(因轮换+Raphinha伤)是错的,巴西照打3-0零封", "source": "ESPN逐场" },
      "review": { "verdict": "HIT",
        "headline": "★胜负强命中：巴西64%→3-0完胜。但'已出线轮换→下调λ到2.0'又一次坑了比分预测",
        "hits": [ "★胜负方向对：巴西64%→3-0 ✓（真盲测,贴市场favorite）", "Vini/Cunha反击终结点判对", "苏格兰压上搏分→被打快下大球的剧本应验" ],
        "misses": [ "★比分低估:为'巴西轮换'把λ砍到2.0,实际巴西打3球+零封→轮换没削弱火力", "苏格兰预测0.75球,实际0球——巴西防守被低估" ],
        "model_lesson": "【固化教训·又一例】别因'已出线/轮换'过度下调强队λ。巴西、德国、瑞士、摩洛哥本届反复证明:强队即便轮换,进球数仍打满。双λ里比分用未折扣λ,这条要更硬" }
    },
    {
      "id": "WC2026_M051", "kickoff_cst": "2026-06-24 18:00 ET", "group": "C", "round": 3, "tag": null,
      "home": { "code": "MAR", "name_zh": "摩洛哥", "flag": "🇲🇦", "fifa_rank": 6 },
      "away": { "code": "HAI", "name_zh": "海地", "flag": "🇭🇹", "fifa_rank": 85 },
      "venue": "Gillette Stadium, 福克斯堡", "altitude_m": 28, "temp_c": 25, "humidity_pct": 60, "referee": "未公布",
      "headline": "摩洛哥75%：非洲杯冠军+31场不败 vs 已出局海地。但摩洛哥已基本出线可能轮换+刷净胜球的张力",
      "probabilities": { "home_win": 75.2, "draw": 16.9, "away_win": 7.9 },
      "expected_goals": { "home": 2.20, "away": 0.55 }, "expected_score": "2 : 0",
      "over_2_5": 51.5, "btts": 37.6, "clean_sheet_home": 57.7, "confidence": 76,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 1.55, "items": [
          { "label": "rank_6_vs_85", "value": "+", "note": "非洲杯冠军+31场不败 vs 已出局、两场0进球的海地" },
          { "label": "MAR_def", "value": "+", "note": "摩洛哥近10场仅失0.4,海地进攻零产出,零封58%" },
          { "label": "GD_incentive", "value": "+", "note": "与巴西同分(净胜+1 vs +3),想刷净胜球争组头,有动机进攻" } ] },
        "home_risk": { "score": -0.55, "items": [
          { "label": "rotation", "value": "-", "note": "摩洛哥可能轮休Issa Diop(黄牌)等,降强度" },
          { "label": "trap_game", "value": "-", "note": "出线near-certain,可能踢得收着只1-0" } ] },
        "away_upset_path": { "score": 0.25, "items": [
          { "label": "rotation_flat", "value": "+", "note": "摩洛哥大轮换+松懈,海地为荣誉死守" },
          { "label": "Isidor_counter", "value": "+", "note": "Isidor/Bellegarde反击抓早段机会" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "MAR_rotation", "value": "±", "note": "摩洛哥轮换几人(护淘汰赛)" },
          { "label": "early_goal", "value": "±", "note": "摩洛哥早进则大胜刷净胜球" } ] }
      },
      "players": {
        "home": [
          { "name": "Achraf Hakimi", "pos": "RB", "status": "KEY", "note": "攻防一体" },
          { "name": "Brahim Díaz", "pos": "AM", "status": "OK", "note": "线间杀手" },
          { "name": "Yassine Bounou", "pos": "GK", "status": "OK", "note": "门神" },
          { "name": "Issa Diop", "pos": "CB", "status": "QUEST", "note": "黄牌,可能轮休" } ],
        "away": [
          { "name": "Wilson Isidor", "pos": "ST", "status": "OK", "note": "桑德兰,反击点" },
          { "name": "Jean-Ricner Bellegarde", "pos": "CM", "status": "OK", "note": "狼队" },
          { "name": "Johny Placide", "pos": "GK", "status": "KEY", "note": "死守指望" },
          { "name": "海地进攻", "pos": "FW", "status": "QUEST", "note": "两场0进球" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank MAR#6 HAI#85" },
        { "time": "—", "level": "INFO", "msg": "末轮:摩洛哥想刷净胜球但可能轮换,λ取2.2" },
        { "time": "—", "level": "OK", "msg": "poisson output: 75.2 / 16.9 / 7.9" } ],
      "result": { "status": "FT", "home_goals": 4, "away_goals": 2, "scoreline": "4 - 2",
        "scorers": [ { "min": "—", "team": "MAR", "player": "摩洛哥", "type": "4-2混战,海地两场0进球后突然进2球" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "摩洛哥4-2海地,6球大战。模型押摩洛哥(75%)→对,但完全没料到对攻:海地此前两场0进球,这场进2;摩洛哥零封(57.7%)落空", "source": "ESPN逐场" },
      "review": { "verdict": "HIT",
        "headline": "★胜负命中但比分全跑偏：摩洛哥75%→赢对,可预测2-0、实际4-2,零封彻底落空",
        "hits": [ "★胜负方向对：摩洛哥75.2%→赢 ✓（真盲测）", "over_2.5给51.5%偏向大球→6球大over对", "判了'刷净胜球有动机进攻'→摩洛哥进4球" ],
        "misses": [ "★零封大miss:clean_sheet_home给57.7%,海地却进2球(此前两场颗粒无收的先验把模型带偏)", "比分跑偏:预测2-0,实际4-2,完全没料到对攻烂仗", "海地away_win只给7.9%→虽没赢但进2球说明其进攻被低估" ],
        "model_lesson": "【盲区】'弱队此前0进球'≠这场也0进球——末轮荣誉战+对手大轮换松懈,鱼腩会突然开火。零封概率对'已无压力的强队末轮'要打折,别轻信防守先验" }
    },
    {
      "id": "WC2026_M052", "kickoff_cst": "2026-06-24 21:00 ET", "group": "A", "round": 3, "tag": "CLOSE_MATCH",
      "home": { "code": "CZE", "name_zh": "捷克", "flag": "🇨🇿", "fifa_rank": 40 },
      "away": { "code": "MEX", "name_zh": "墨西哥", "flag": "🇲🇽", "fifa_rank": 14 },
      "venue": "Estadio Azteca, 墨西哥城", "altitude_m": 2200, "temp_c": 22, "humidity_pct": 50, "referee": "Falcón Pérez",
      "headline": "罕见近三选一：捷克33/平29/墨西哥38。墨西哥已头名出线会大轮换,但高原主场+实力仍微favored",
      "probabilities": { "home_win": 33.0, "draw": 29.0, "away_win": 38.0 },
      "expected_goals": { "home": 1.25, "away": 1.30 }, "expected_score": "1 : 1",
      "over_2_5": 46.0, "btts": 53.0, "clean_sheet_home": 27.0, "confidence": 52,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.55, "items": [
          { "label": "must_win", "value": "+", "note": "捷克需赢争最佳第三名,全力压上,动机远高于已出线墨西哥" },
          { "label": "MEX_rotate", "value": "+", "note": "墨西哥锁头名,Aguirre大概率大轮换,默契/体能降" },
          { "label": "Schick_Hlozek", "value": "+", "note": "Schick+Hložek锋线,Krejčí已头球破门" } ] },
        "home_risk": { "score": -0.75, "items": [
          { "label": "altitude_home", "value": "-", "note": "阿兹台克2200m=墨西哥主场,欧洲队捷克体能/球速受损" },
          { "label": "MEX_depth", "value": "-", "note": "FIFA 14 vs 40,墨西哥轮换替补仍强" },
          { "label": "Jurasek_OUT", "value": "-", "note": "捷克中卫Jurásek大腿伤整届缺,防线减员" } ] },
        "away_upset_path": { "score": 0.70, "items": [
          { "label": "MEX_quality", "value": "+", "note": "墨西哥若不大轮换,凭实力+主场+海拔碾压" },
          { "label": "counter", "value": "+", "note": "Jiménez/Quiñones打捷克压上的身后" },
          { "label": "Montes_back", "value": "+", "note": "Montes停赛归来稳固后防,复制零封" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "MEX_rotation", "value": "±", "note": "★墨西哥轮换幅度=本场最大未知,决定双方λ" },
          { "label": "third_place_math", "value": "±", "note": "捷克所需最佳第三名门槛是否明朗,影响冒进度" },
          { "label": "first_goal", "value": "±", "note": "捷克先进则更敢压;墨先进则控场" } ] }
      },
      "players": {
        "home": [
          { "name": "Patrik Schick", "pos": "ST", "status": "KEY", "note": "勒沃库森,锋线支点" },
          { "name": "Adam Hložek", "pos": "FW", "status": "OK", "note": "搭档锋线" },
          { "name": "Ladislav Krejčí", "pos": "DF", "status": "OK", "note": "队长,已头球破门" },
          { "name": "David Jurásek", "pos": "CB", "status": "OUT", "note": "大腿伤整届缺" } ],
        "away": [
          { "name": "Raúl Jiménez", "pos": "FW", "status": "OK", "note": "反击点" },
          { "name": "Julián Quiñones", "pos": "FW", "status": "OK", "note": "已进球" },
          { "name": "César Montes", "pos": "CB", "status": "OK", "note": "停赛归来稳后防" },
          { "name": "墨西哥替补", "pos": "—", "status": "QUEST", "note": "已出线,大概率大轮换" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "INFO", "msg": "⚠️归档修正:原误置6/25(UTC/ET混淆),实为6/24 A组末轮9pm,已归位" },
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "WARN", "msg": "墨西哥轮换+捷克必胜→近三选一,低置信52%" },
        { "time": "—", "level": "OK", "msg": "poisson output: 33.0 / 29.0 / 38.0" } ],
      "result": { "status": "FT", "home_goals": 0, "away_goals": 3, "scoreline": "0 - 3",
        "scorers": [ { "min": "55'", "team": "MEX", "player": "Mateo Chávez", "type": "客胜" }, { "min": "61'", "team": "MEX", "player": "Julián Quiñones", "type": "客胜" }, { "min": "90'+4", "team": "MEX", "player": "Álvaro Fidalgo", "type": "客胜" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "墨西哥0-3客胜捷克。模型三选一押墨西哥(38%最高)→方向对,但判1-1平局战,实际墨西哥轮换阵照样3-0零封", "source": "ESPN逐场" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中:三选一押墨西哥(38%)→0-3。但又一次低估——判1-1,墨西哥大轮换阵还是3-0零封",
        "hits": [ "★胜负方向对：墨西哥38%(三选一最高)→赢 ✓（真盲测）", "判了'墨西哥实力+海拔仍favored'顶住捷克必胜冲击", "Quiñones反击点兑现进球" ],
        "misses": [ "比分大低估:预测1-1,实际0-3(又一次低估favorite,即便对方大轮换)", "捷克'必须赢'的攻势完全没兑现(0球)" ],
        "model_lesson": "和巴西/瑞士同病:'已出线会轮换'不该把强队压成平局战。墨西哥轮换阵仍3-0,双λ里胜负与比分要分开,比分别跟着轮换砍" }
    },
    {
      "id": "WC2026_M053", "kickoff_cst": "2026-06-24 21:00 ET", "group": "A", "round": 3, "tag": null,
      "home": { "code": "RSA", "name_zh": "南非", "flag": "🇿🇦", "fifa_rank": 60 },
      "away": { "code": "KOR", "name_zh": "韩国", "flag": "🇰🇷", "fifa_rank": 25 },
      "venue": "Estadio BBVA, 蒙特雷", "altitude_m": 540, "temp_c": 25, "humidity_pct": 55, "referee": "Facundo Tello",
      "headline": "韩国客场55%：Son/Kim Min-jae质量占优。南非必须赢但中场双停赛(Mokoena/Zwane)进攻被掏空",
      "probabilities": { "home_win": 18.0, "draw": 26.9, "away_win": 55.1 },
      "expected_goals": { "home": 0.70, "away": 1.45 }, "expected_score": "0 : 1",
      "over_2_5": 36.3, "btts": 38.5, "clean_sheet_home": 23.5, "confidence": 62,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.30, "items": [
          { "label": "must_win_push", "value": "+", "note": "南非必须取胜出线,会全力压上" },
          { "label": "Williams", "value": "+", "note": "门将Williams扑救能保住1球" },
          { "label": "Appollis", "value": "+", "note": "Appollis创造力是仅存的进攻火花" } ] },
        "home_risk": { "score": -1.10, "items": [
          { "label": "mid_suspended", "value": "-", "note": "★Mokoena(累黄+点球手)+Zwane(红牌)双停赛,进攻λ被砍到0.70" },
          { "label": "KOR_quality", "value": "-", "note": "Son+Kim Min-jae+Lee Kang-in全面占优" },
          { "label": "push_leaves_space", "value": "-", "note": "南非压上把后场让给Son/Lee反击" } ] },
        "away_upset_path": { "score": 1.00, "items": [
          { "label": "Son_transition", "value": "+", "note": "Son/Lee Kang-in打南非残阵中场的转换" },
          { "label": "counter_0-1", "value": "+", "note": "韩国退守反击,0-1/0-2最可能比分" },
          { "label": "early_goal", "value": "+", "note": "韩国早进球迫南非冒进,扩大比分" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "RSA_suspensions", "value": "-", "note": "确认Mokoena/Zwane缺阵+Appollis是否首发" },
          { "label": "KOR_rotation", "value": "±", "note": "韩国平局即可出线,若轮休Son则平局概率升" },
          { "label": "Tello_cards", "value": "-", "note": "南非已两红+严判主裁,再减员则崩" } ] }
      },
      "players": {
        "home": [
          { "name": "Ronwen Williams", "pos": "GK", "status": "KEY", "note": "门将,保级靠他" },
          { "name": "Oswin Appollis", "pos": "WG", "status": "OK", "note": "创造力火花" },
          { "name": "Teboho Mokoena", "pos": "CM", "status": "SUSP", "note": "★累黄停赛,中场核心+点球手" },
          { "name": "Themba Zwane", "pos": "AM", "status": "SUSP", "note": "红牌停赛" } ],
        "away": [
          { "name": "Son Heung-min", "pos": "LW", "status": "KEY", "note": "反击爆点" },
          { "name": "Kim Min-jae", "pos": "CB", "status": "KEY", "note": "拜仁,后防" },
          { "name": "Lee Kang-in", "pos": "RW", "status": "OK", "note": "PSG,转换" },
          { "name": "Hwang In-beom", "pos": "CM", "status": "OK", "note": "中场" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "INFO", "msg": "⚠️归档修正:原误置6/25(UTC/ET混淆),实为6/24 A组末轮9pm,已归位" },
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "WARN", "msg": "南非中场双停赛→进攻λ砍到0.70" },
        { "time": "—", "level": "OK", "msg": "poisson output: 18.0 / 26.9 / 55.1" } ],
      "result": { "status": "FT", "home_goals": 1, "away_goals": 0, "scoreline": "1 - 0",
        "scorers": [ { "min": "—", "team": "RSA", "player": "南非", "type": "1-0爆冷,绝境出线" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "南非1-0爆冷掀翻韩国。模型重押韩国(55%客胜)+判南非中场双停赛进攻瘫痪(λ0.70)→双双打脸,这是真盲测的一次方向失手", "source": "FIFA/ESPN" },
      "review": { "verdict": "MISS",
        "headline": "✗真盲测失手:押韩国(55%客胜)→南非1-0爆冷。残阵+必死的主队照样赢,模型最该认的一场",
        "hits": [ "比分量级判对(低进球,实际1-0)", "判了'南非进攻被砍'→南非确实只进1球,但1球就够了" ],
        "misses": [ "★胜负方向错:押韩国55%→南非1-0赢,这是今日唯一方向失手", "重仓'南非中场双停赛=进攻瘫痪',低估了'必须赢'的主队决心+主场", "Son/韩国的反击转换完全没兑现" ],
        "model_lesson": "【真失手·要认】末轮'必须赢'的残阵主队能爆冷;客队纸面质量占优≠稳赢,尤其对方抱必死决心。模型对'停赛减员'反应过度(λ砍太狠)。这一场录视频就该当众认输——诚实反账比假装全中更立得住" }
    }
  ]
};
