// 世界杯预测 - 2026-06-25（小组末轮 MD3 收官日，真预测，带盘口）
// 看点:多支已出线豪强(墨西哥/德国/荷兰/日本)可能轮换,模型已据此下调λ
// 队代码:CZE/MEX RSA/KOR CUW/CIV ECU/GER JPN/SWE TUN/NED
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-25"] = {
  "date": "2026-06-25", "tournament": "FIFA World Cup 2026 · 小组末轮收官 MD3",
  "model_version": "POISSON v1.4 + 末轮轮换修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有盘口;已出线队(德/荷/墨/日)按可能轮换下调λ",
  "matches": [
    {
      "id": "WC2026_M054", "kickoff_cst": "2026-06-25 16:00 ET", "group": "E", "round": 3, "tag": null,
      "home": { "code": "CUW", "name_zh": "库拉索", "flag": "🇨🇼", "fifa_rank": 83 },
      "away": { "code": "CIV", "name_zh": "科特迪瓦", "flag": "🇨🇮", "fifa_rank": 30 },
      "venue": "Lincoln Financial Field, 费城", "altitude_m": 12, "temp_c": 28, "humidity_pct": 65, "referee": "未公布",
      "headline": "科特迪瓦客场66%：实力碾压库拉索,平局即出线会控场。库拉索进攻near-zero(场均0.5)",
      "probabilities": { "home_win": 12.4, "draw": 21.5, "away_win": 65.8 },
      "expected_goals": { "home": 0.65, "away": 1.85 }, "expected_score": "0 : 1",
      "over_2_5": 45.3, "btts": 40.1, "clean_sheet_home": 15.7, "confidence": 61,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": -1.40, "items": [
          { "label": "must_win_push", "value": "+", "note": "库拉索必须赢(垫底1分),全力压上,定位球(Bacuna)或偷一球" },
          { "label": "Room", "value": "+", "note": "门神Room状态火热(15扑零封厄瓜多尔),1球+零封是唯一路径" },
          { "label": "CIV_manage", "value": "+", "note": "科特迪瓦平局即出线,可能控场不追第二球,封顶比分" } ] },
        "home_risk": { "score": -1.85, "items": [
          { "label": "CUW_no_attack", "value": "-", "note": "库拉索进攻near-zero(场均0.5,唯一进球来自1-7负德国)" },
          { "label": "push_counter", "value": "-", "note": "压上把身后让给Diallo/Diomande速度反击" },
          { "label": "rank_gap", "value": "-", "note": "FIFA 83 vs 30,Kessié控中场断供给" } ] },
        "away_upset_path": { "score": 1.55, "items": [
          { "label": "Diallo_counter", "value": "+", "note": "Amad Diallo/Diomande反击早进球后控场" },
          { "label": "draw_enough", "value": "+", "note": "1-1平也够科特迪瓦出线,愿换球不冒进" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "group_math", "value": "±", "note": "若厄瓜多尔同时拿分,库拉索数学出局可能没动力" },
          { "label": "CIV_rotation", "value": "±", "note": "科特迪瓦平局够用是否轮换" },
          { "label": "storm", "value": "-", "note": "费城雷暴风险(6/22法国-伊拉克曾延误)" } ] }
      },
      "players": {
        "home": [
          { "name": "Eloy Room", "pos": "GK", "status": "HOT", "note": "15扑零封厄瓜多尔" },
          { "name": "Juninho Bacuna", "pos": "CM", "status": "OK", "note": "定位球" },
          { "name": "Gervane Kastaneer", "pos": "FW", "status": "OK", "note": "反击点" },
          { "name": "库拉索进攻", "pos": "FW", "status": "QUEST", "note": "near-zero,场均0.5" } ],
        "away": [
          { "name": "Amad Diallo", "pos": "RW", "status": "KEY", "note": "反击核心" },
          { "name": "Yan Diomande", "pos": "WG", "status": "OK", "note": "速度" },
          { "name": "Franck Kessié", "pos": "CM", "status": "KEY", "note": "中场控制" },
          { "name": "Simon Adingra", "pos": "WG", "status": "OK", "note": "边路" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank CUW#83 CIV#30" },
        { "time": "—", "level": "OK", "msg": "poisson output: 12.4 / 21.5 / 65.8" } ],
      "result": { "status": "FT", "home_goals": 0, "away_goals": 2, "scoreline": "0 - 2",
        "scorers": [ { "min": "—", "team": "CIV", "player": "科特迪瓦", "type": "2-0客胜,出线" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "科特迪瓦2-0库拉索,稳稳出线。模型押科特迪瓦(65.8%)+判库拉索进攻near-zero零封→双双命中", "source": "多源核实" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中:科特迪瓦65.8%→2-0。库拉索进攻near-zero的判断兑现(0进球)",
        "hits": [ "★胜负方向对：科特迪瓦65.8%→赢 ✓（真盲测）", "库拉索零封判对(赛前写'进攻near-zero')", "科特迪瓦平局即出线仍拿下" ],
        "misses": [ "比分科特迪瓦2球略高于预测1.85,可接受" ],
        "model_lesson": "实力碾压+弱队无进攻的场,模型最稳。今日仅有的两个干净HIT之一" }
    },
    {
      "id": "WC2026_M055", "kickoff_cst": "2026-06-25 16:00 ET", "group": "E", "round": 3, "tag": null,
      "home": { "code": "ECU", "name_zh": "厄瓜多尔", "flag": "🇪🇨", "fifa_rank": 29 },
      "away": { "code": "GER", "name_zh": "德国", "flag": "🇩🇪", "fifa_rank": 10 },
      "venue": "AT&T Stadium, 达拉斯", "altitude_m": 130, "temp_c": 30, "humidity_pct": 50, "referee": "未公布",
      "headline": "德国客场49%但不稳：已头名出线会大轮换(Neuer等留力)。厄瓜多尔必须赢+Caicedo/Pacho铁防能压低德国",
      "probabilities": { "home_win": 22.0, "draw": 29.0, "away_win": 49.0 },
      "expected_goals": { "home": 0.85, "away": 1.55 }, "expected_score": "1 : 2",
      "over_2_5": 42.0, "btts": 41.0, "clean_sheet_home": 21.0, "confidence": 58,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 0.55, "items": [
          { "label": "must_win", "value": "+", "note": "厄瓜多尔必须取胜确保出线,全力压上决心最强" },
          { "label": "GER_rotate", "value": "+", "note": "德国锁头名,Nagelsmann强烈轮换/留力动机" },
          { "label": "ECU_def", "value": "+", "note": "Caicedo+Pacho顶级硬度,两轮仅失1球,能压低德国" } ] },
        "home_risk": { "score": -0.85, "items": [
          { "label": "Paez_susp", "value": "-", "note": "前腰Páez累黄停赛,厄瓜多尔本就贫瘠的创造力再削(两轮0进球)" },
          { "label": "Valencia_slump", "value": "-", "note": "队长Valencia(36岁)哑火,锋线缺终结点" },
          { "label": "GER_depth", "value": "-", "note": "德国即便轮换替补仍强(Wirtz/Musiala级)" } ] },
        "away_upset_path": { "score": 0.60, "items": [
          { "label": "GER_quality", "value": "+", "note": "德国轮换阵凭个人能力仍能取胜" },
          { "label": "ECU_no_goals", "value": "+", "note": "厄瓜多尔两轮0进球,攻坚乏力,德国零封反偷" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "GER_rotation", "value": "±", "note": "★德国轮换幅度(Neuer等是否留力)=本场最大变量" },
          { "label": "ECU_finishing", "value": "-", "note": "厄瓜多尔能否打破0进球魔咒" },
          { "label": "first_goal", "value": "±", "note": "厄瓜多尔早进则德国轮换阵被动" } ] }
      },
      "players": {
        "home": [
          { "name": "Moisés Caicedo", "pos": "CDM", "status": "KEY", "note": "切尔西,中场绞杀" },
          { "name": "Willian Pacho", "pos": "CB", "status": "KEY", "note": "PSG铁闸" },
          { "name": "Enner Valencia", "pos": "ST", "status": "QUEST", "note": "36岁哑火" },
          { "name": "Kendry Páez", "pos": "AM", "status": "SUSP", "note": "累黄停赛,创造力再削" } ],
        "away": [
          { "name": "Florian Wirtz", "pos": "AM", "status": "KEY", "note": "创造核心" },
          { "name": "Jamal Musiala", "pos": "AM", "status": "OK", "note": "进攻" },
          { "name": "Manuel Neuer", "pos": "GK", "status": "QUEST", "note": "可能轮休留力" },
          { "name": "德国替补", "pos": "—", "status": "QUEST", "note": "已出线,大概率轮换" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ECU#29 GER#10" },
        { "time": "—", "level": "INFO", "msg": "德国已出线轮换→λ下调到1.55" },
        { "time": "—", "level": "OK", "msg": "poisson output: 22.0 / 29.0 / 49.0" } ],
      "result": { "status": "FT", "home_goals": 2, "away_goals": 1, "scoreline": "2 - 1",
        "scorers": [ { "min": "—", "team": "ECU", "player": "厄瓜多尔", "type": "2-1爆冷掀翻德国" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "★厄瓜多尔2-1爆冷掀翻德国。模型押德国(49%)→方向打脸,这是末轮又一个已出线豪强翻车", "source": "多源核实" },
      "review": { "verdict": "MISS",
        "headline": "✗方向失手:押德国(49%)→厄瓜多尔2-1爆冷。末轮豪强轮换+无欲=翻车温床,模型没敢看衰",
        "hits": [ "给了厄瓜多尔22%+平29%(没完全无视),over判断方向对" ],
        "misses": [ "★胜负方向错:押德国49%→厄瓜多尔赢,大冷门", "重押已出线的德国,低估了'豪强末轮轮换+无欲'的崩盘风险", "厄瓜多尔主场+必拼的动机被低估" ],
        "model_lesson": "【末轮规律】已出线豪强(德国)末轮轮换易翻车,和巴西/墨西哥轮换照样赢相反——区别在'对手是否拼命+豪强是否真无欲'。模型对'已出线大队末轮'要更敢看衰" }
    },
    {
      "id": "WC2026_M056", "kickoff_cst": "2026-06-25 19:00 ET", "group": "F", "round": 3, "tag": "CLOSE_MATCH",
      "home": { "code": "JPN", "name_zh": "日本", "flag": "🇯🇵", "fifa_rank": 18 },
      "away": { "code": "SWE", "name_zh": "瑞典", "flag": "🇸🇪", "fifa_rank": 34 },
      "venue": "Estadio BBVA, 蒙特雷", "altitude_m": 540, "temp_c": 26, "humidity_pct": 55, "referee": "未公布",
      "headline": "日本39/平28/瑞典33：日本铁防+已出线可轮换 vs 瑞典必胜+Isak/Gyökeres火力。近三选一",
      "probabilities": { "home_win": 39.0, "draw": 28.0, "away_win": 33.0 },
      "expected_goals": { "home": 1.32, "away": 1.22 }, "expected_score": "1 : 1",
      "over_2_5": 46.6, "btts": 51.6, "clean_sheet_home": 29.5, "confidence": 52,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.55, "items": [
          { "label": "JPN_def", "value": "+", "note": "日本~0.6失球,平荷兰+零封英格兰/苏格兰,真材实料" },
          { "label": "Ueda_Kamada", "value": "+", "note": "Ueda(对突尼斯双响)+Kamada(连续进球)锋线火热" },
          { "label": "no_pressure", "value": "+", "note": "已4分+4净胜,无压力不易出错" } ] },
        "home_risk": { "score": -0.85, "items": [
          { "label": "JPN_rotate", "value": "-", "note": "已出线,Moriyasu可能轮换,削进攻锐度" },
          { "label": "mid_absences", "value": "-", "note": "Endo/Mitoma/Minamino均缺,中场控制变薄" },
          { "label": "SWE_strikers", "value": "-", "note": "Isak+Gyökeres双杀,必胜全力压上" } ] },
        "away_upset_path": { "score": 0.80, "items": [
          { "label": "must_win_intensity", "value": "+", "note": "瑞典必须赢,全主力高强度打可能轮换的日本" },
          { "label": "Isak_Gyokeres", "value": "+", "note": "顶级双杀一个moment翻盘" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "JPN_rotation", "value": "±", "note": "日本轮换幅度=客队λ变量" },
          { "label": "first_goal", "value": "±", "note": "瑞典先进则日本被迫认真" } ] }
      },
      "players": {
        "home": [
          { "name": "Ayase Ueda", "pos": "ST", "status": "HOT", "note": "对突尼斯双响" },
          { "name": "Daichi Kamada", "pos": "AM", "status": "OK", "note": "连续进球" },
          { "name": "Takefusa Kubo", "pos": "RW", "status": "OK", "note": "创造" },
          { "name": "日本中场", "pos": "CM", "status": "QUEST", "note": "Endo/Mitoma/Minamino缺,可能轮换" } ],
        "away": [
          { "name": "Alexander Isak", "pos": "ST", "status": "HOT", "note": "对突尼斯进球,状态顶" },
          { "name": "Viktor Gyökeres", "pos": "ST", "status": "HOT", "note": "双杀之一" },
          { "name": "Anthony Elanga", "pos": "WG", "status": "OK", "note": "速度" },
          { "name": "瑞典", "pos": "—", "status": "OK", "note": "必胜全主力" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank JPN#18 SWE#34" },
        { "time": "—", "level": "WARN", "msg": "日本可能轮换+瑞典必胜→近三选一,低置信52%" },
        { "time": "—", "level": "OK", "msg": "poisson output: 39.0 / 28.0 / 33.0" } ],
      "result": { "status": "FT", "home_goals": 1, "away_goals": 1, "scoreline": "1 - 1",
        "scorers": [ { "min": "—", "team": "—", "player": "日本/瑞典各入一球", "type": "1-1平" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "日本1-1瑞典。模型押日本(39%)→平局盲区再现,模型从不把平局当首选", "source": "多源核实" },
      "review": { "verdict": "MISS",
        "headline": "✗平局又没抓:押日本(39%)→1-1。平局是公认盲区,模型从不敢押平",
        "hits": [ "给了平局28%(第二高),btts/over方向大致对" ],
        "misses": [ "★方向错:押日本赢→1-1平", "平局盲区再现——16+场里模型把平局当首选0次,实际平局~44%" ],
        "model_lesson": "平局不可预测(庄家也抓不住)。末轮两队都可能求稳=平。维持'分胜负看赢家+平局当风险标尺',不硬猜" }
    },
    {
      "id": "WC2026_M057", "kickoff_cst": "2026-06-25 19:00 ET", "group": "F", "round": 3, "tag": null,
      "home": { "code": "TUN", "name_zh": "突尼斯", "flag": "🇹🇳", "fifa_rank": 39 },
      "away": { "code": "NED", "name_zh": "荷兰", "flag": "🇳🇱", "fifa_rank": 7 },
      "venue": "Lincoln Financial Field, 费城", "altitude_m": 12, "temp_c": 28, "humidity_pct": 65, "referee": "未公布",
      "headline": "荷兰客场67.5%：火力已验证(5-1瑞典)+突尼斯防线崩盘(两轮丢9球)。但荷兰锁头名可能大轮换",
      "probabilities": { "home_win": 12.7, "draw": 19.8, "away_win": 67.5 },
      "expected_goals": { "home": 0.75, "away": 2.05 }, "expected_score": "0 : 2",
      "over_2_5": 52.8, "btts": 45.9, "clean_sheet_home": 12.9, "confidence": 64,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": -1.30, "items": [
          { "label": "Renard_pride", "value": "+", "note": "突尼斯新帅Renard首秀+主场荣誉战,首阶段或踢紧凑" },
          { "label": "NED_rotate", "value": "+", "note": "荷兰锁头名大概率轮换(van Dijk/de Jong休),降强度" },
          { "label": "Dahmen", "value": "+", "note": "门将Dahmen承压,需超神才能减少失球" } ] },
        "home_risk": { "score": -1.80, "items": [
          { "label": "TUN_collapse", "value": "-", "note": "突尼斯两轮丢9球(0-5 0-4),GA场均2.4,防线已崩" },
          { "label": "NED_firepower", "value": "-", "note": "荷兰5-1瑞典验证火力,Gakpo/Dumfries连线,轮换阵仍质变" },
          { "label": "TUN_no_attack", "value": "-", "note": "突尼斯进攻熄火,难给荷兰压力" } ] },
        "away_upset_path": { "score": -0.30, "items": [
          { "label": "市场favorite", "value": "本就favorite", "note": "荷兰博彩隐含~70%,模型贴市场(非upset)" },
          { "label": "rotation_risk", "value": "±", "note": "荷兰若大轮换+松懈,突尼斯荣誉战或抢1球" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "NED_rotation", "value": "±", "note": "荷兰轮换幅度=λ变量(已从2.5下调到2.05)" },
          { "label": "early_goal", "value": "±", "note": "荷兰早进则大胜" },
          { "label": "storm", "value": "-", "note": "费城雷暴风险" } ] }
      },
      "players": {
        "home": [
          { "name": "Aymen Dahmen", "pos": "GK", "status": "KEY", "note": "承压门将" },
          { "name": "Youssef Msakni", "pos": "FW", "status": "OK", "note": "荣誉战核心" },
          { "name": "Hannibal Mejbri", "pos": "AM", "status": "OK", "note": "定位球" },
          { "name": "突尼斯后防", "pos": "DF", "status": "QUEST", "note": "两轮丢9球,崩盘" } ],
        "away": [
          { "name": "Cody Gakpo", "pos": "LW", "status": "HOT", "note": "进攻箭头" },
          { "name": "Denzel Dumfries", "pos": "RB", "status": "OK", "note": "对瑞典两助攻" },
          { "name": "Virgil van Dijk", "pos": "CB", "status": "QUEST", "note": "可能轮休" },
          { "name": "Frenkie de Jong", "pos": "CM", "status": "QUEST", "note": "可能轮休" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank TUN#39 NED#7" },
        { "time": "—", "level": "INFO", "msg": "荷兰已出线轮换→λ从2.5下调到2.05" },
        { "time": "—", "level": "OK", "msg": "poisson output: 12.7 / 19.8 / 67.5" } ],
      "result": { "status": "FT", "home_goals": 1, "away_goals": 3, "scoreline": "1 - 3",
        "scorers": [ { "min": "—", "team": "NED", "player": "荷兰", "type": "3-1客胜,Gakpo连线" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "荷兰3-1突尼斯。模型押荷兰(67.5%)→方向对,但又一次低估强队进球(预测2球,荷兰打3)", "source": "多源核实" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中:荷兰67.5%→3-1。但又是强队进球低估——从2.5砍到2.05还是不够",
        "hits": [ "★胜负方向对：荷兰67.5%→赢 ✓（真盲测）", "突尼斯防线崩盘判对(两轮丢9球→这场再丢3)", "突尼斯进1球(预测0.75)接近" ],
        "misses": [ "★比分低估:预测荷兰2球,实际3球(轮换阵照样,强队进球低估第N次)" ],
        "model_lesson": "今日两个干净HIT之二。但'已出线轮换下调λ'又坑比分——荷兰砍到2.05仍打3球。强队进攻别砍,双λ比分用未折扣λ要更硬" }
    },
    {
      "id": "WC2026_M058", "kickoff_cst": "2026-06-25 22:00 ET", "group": "D", "round": 3, "tag": null,
      "home": { "code": "TUR", "name_zh": "土耳其", "flag": "🇹🇷", "fifa_rank": 26 },
      "away": { "code": "USA", "name_zh": "美国", "flag": "🇺🇸", "fifa_rank": 16 },
      "venue": "SoFi Stadium, 洛杉矶", "altitude_m": 30, "temp_c": 26, "humidity_pct": 55, "referee": "未公布",
      "headline": "美国客场47%：已锁头名将重度轮换(4主力累黄+Pulisic不冒险),土耳其已出局但62射门全赛事最多想挽尊。贴盘口不无脑高",
      "probabilities": { "home_win": 27.0, "draw": 26.0, "away_win": 47.0 },
      "expected_goals": { "home": 1.05, "away": 1.55 }, "expected_score": "1 : 2",
      "over_2_5": 52.0, "btts": 54.0, "clean_sheet_home": 22.0, "confidence": 56,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": -0.30, "items": [
          { "label": "TUR_shots", "value": "+", "note": "土耳其62射门全赛事最多(13中框),火力被压抑想爆发挽尊" },
          { "label": "USA_rotate", "value": "+", "note": "美国锁头名,Adams/Balogun/Robinson/Richards累黄+Pulisic伤,Pochettino大轮换" },
          { "label": "TUR_pride", "value": "+", "note": "土耳其已出局,避免三连败0进球的耻辱,会全力踢" } ] },
        "home_risk": { "score": -1.10, "items": [
          { "label": "USA_home", "value": "-", "note": "SoFi=美国地理主场,主场声浪+熟悉" },
          { "label": "USA_quality", "value": "-", "note": "美国两场+5净胜(4-1巴拉圭/2-0澳),实力+深度即便轮换仍占优" },
          { "label": "TUR_finishing", "value": "-", "note": "土耳其0.67xGOT vs 2.17xG,效率灾难,射门多进不了" } ] },
        "away_upset_path": { "score": 0.55, "items": [
          { "label": "market_fav", "value": "本就favorite", "note": "美国盘口-111隐含~48%,模型贴市场(非upset)" },
          { "label": "rotation_depth", "value": "+", "note": "美国轮换替补质量仍高,Pochettino深度足" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "USA_rotation", "value": "±", "note": "★美国轮换幅度=最大变量,决定双方λ(教训:轮换阵未必砍进球)" },
          { "label": "TUR_early", "value": "±", "note": "土耳其早进球则无包袱的美国轮换阵可能被拖入混战" },
          { "label": "yellow_caution", "value": "-", "note": "美国累黄球员谨慎,逼抢可能收着" } ] }
      },
      "players": {
        "home": [
          { "name": "Kenan Yıldız", "pos": "AM", "status": "KEY", "note": "尤文新星,创造核心" },
          { "name": "Hakan Çalhanoğlu", "pos": "CM", "status": "OK", "note": "组织+定位球" },
          { "name": "Arda Güler", "pos": "AM", "status": "OK", "note": "皇马,威胁点" },
          { "name": "土耳其锋线", "pos": "FW", "status": "QUEST", "note": "两场0进球,效率灾难" } ],
        "away": [
          { "name": "美国轮换阵", "pos": "—", "status": "QUEST", "note": "主力累黄+护淘汰赛,大轮换" },
          { "name": "Tyler Adams", "pos": "CM", "status": "QUEST", "note": "累黄,大概率轮休" },
          { "name": "Folarin Balogun", "pos": "ST", "status": "QUEST", "note": "累黄" },
          { "name": "Christian Pulisic", "pos": "AM", "status": "OUT", "note": "伤,不冒险" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank TUR#26 USA#16;美国SoFi地理主场" },
        { "time": "—", "level": "WARN", "msg": "美国重度轮换(累黄+护淘汰赛)→λ适度保守但不砍狠(吸取巴西/墨西哥教训)" },
        { "time": "—", "level": "OK", "msg": "poisson output: 27.0 / 26.0 / 47.0" } ],
      "result": { "status": "FT", "home_goals": 3, "away_goals": 2, "scoreline": "3 - 2",
        "scorers": [ { "min": "45'", "team": "TUR", "player": "Arda Güler / Orkun Kökçü", "type": "上半场两球" }, { "min": "90+", "team": "TUR", "player": "Kaan Ayhan", "type": "读秒绝杀" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "★土耳其3-2读秒绝杀美国(Kaan Ayhan补时)。模型押美国(47%)→方向打脸,美国重度轮换被反杀", "source": "ESPN/CBS" },
      "review": { "verdict": "MISS",
        "headline": "✗方向失手:押美国(47%)→土耳其3-2读秒绝杀。讽刺——这次轮换真的反噬了",
        "hits": [ "给土耳其27%+赛前点名'62射门全赛事最多想爆发'→兑现", "over判对(5球大球,预测52%over)", "headline预警了土耳其挽尊决心" ],
        "misses": [ "★方向错:押美国47%→土耳其3-2; 美国4主力累黄轮休+Pulisic缺,轮换阵被反杀", "低估了'被压抑的高射门队'(土耳其62射)的爆发" ],
        "model_lesson": "【自打脸的进步】前几场怪'轮换没削火力',这场美国轮换真被惩罚了——轮换是双刃:护淘汰赛但末轮可能丢分。对'无欲但高xG/高射门'的队要更警惕其爆发" }
    },
    {
      "id": "WC2026_M059", "kickoff_cst": "2026-06-25 22:00 ET", "group": "D", "round": 3, "tag": "CLOSE_MATCH",
      "home": { "code": "PAR", "name_zh": "巴拉圭", "flag": "🇵🇾", "fifa_rank": 56 },
      "away": { "code": "AUS", "name_zh": "澳大利亚", "flag": "🇦🇺", "fifa_rank": 42 },
      "venue": "Levi's Stadium, 旧金山湾区", "altitude_m": 5, "temp_c": 23, "humidity_pct": 60, "referee": "未公布",
      "headline": "争第二生死战：澳大利亚39%微favored(近10场7胜+排名高14位),巴拉圭核心Almirón停赛进攻受损。庄家压低比分,平局当风险标尺",
      "probabilities": { "home_win": 30.0, "draw": 31.0, "away_win": 39.0 },
      "expected_goals": { "home": 0.85, "away": 1.05 }, "expected_score": "0 : 1",
      "over_2_5": 38.0, "btts": 40.0, "clean_sheet_home": 38.0, "confidence": 55,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.20, "items": [
          { "label": "must_not_lose", "value": "+", "note": "巴拉圭主名义+刚1-0赢土耳其的士气,争第二全力踢" },
          { "label": "PAR_defense", "value": "+", "note": "巴拉圭防守扎实(零封土耳其),低比分对它有利" },
          { "label": "Gomez", "value": "+", "note": "Diego Gómez可能首发,中场推进" } ] },
        "home_risk": { "score": -0.85, "items": [
          { "label": "Almiron_susp", "value": "-", "note": "★Almirón停赛,巴拉圭头号创造力缺失,进攻空窗" },
          { "label": "AUS_form", "value": "-", "note": "澳大利亚近10场7胜+过去15仅2负+FIFA排名高14位" },
          { "label": "AUS_physical", "value": "-", "note": "澳身体强硬+定位球冲击力" } ] },
        "away_upset_path": { "score": 0.65, "items": [
          { "label": "rank_form", "value": "+", "note": "澳排名+状态双占优,analysts普遍看好" },
          { "label": "exploit_Almiron", "value": "+", "note": "抓巴拉圭缺Almirón的进攻乏力,控场推进" },
          { "label": "set_piece", "value": "+", "note": "澳定位球+二点争抢" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "low_scoring", "value": "-", "note": "★庄家under2.5(-165)看死低比分,生死战双方谨慎→平局风险高" },
          { "label": "first_goal", "value": "±", "note": "谁先进球谁掌握出线主动,另一方被迫压上留空" },
          { "label": "Leckie", "value": "±", "note": "澳Mathew Leckie存疑,冲击点受影响" } ] }
      },
      "players": {
        "home": [
          { "name": "Diego Gómez", "pos": "CM", "status": "OK", "note": "推进+插上" },
          { "name": "Antonio Sanabria", "pos": "ST", "status": "OK", "note": "支点前锋" },
          { "name": "Miguel Almirón", "pos": "AM", "status": "SUSP", "note": "★停赛,头号创造力缺失" },
          { "name": "Gustavo Velázquez", "pos": "DF", "status": "OK", "note": "后防" } ],
        "away": [
          { "name": "Jackson Irvine", "pos": "CM", "status": "KEY", "note": "队长,中场引擎" },
          { "name": "Riley McGree", "pos": "AM", "status": "OK", "note": "创造力" },
          { "name": "Mathew Leckie", "pos": "FW", "status": "QUEST", "note": "存疑,冲击点" },
          { "name": "澳大利亚防线", "pos": "DF", "status": "OK", "note": "强硬+定位球" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank PAR#56 AUS#42;争第二名生死战" },
        { "time": "—", "level": "WARN", "msg": "巴拉圭Almirón停赛+生死战低比分→平局31%当风险标尺,不硬猜" },
        { "time": "—", "level": "OK", "msg": "poisson output: 30.0 / 31.0 / 39.0" } ],
      "result": { "status": "FT", "home_goals": 0, "away_goals": 0, "scoreline": "0 - 0",
        "scorers": [ { "min": "—", "team": "—", "player": "无进球", "type": "0-0,澳大利亚靠净胜球出线" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "巴拉圭0-0澳大利亚,澳出线。模型押澳赢(39%)方向没中,但赛前已标CLOSE_MATCH+平局31%+低比分→0-0正中风险预警", "source": "多源核实" },
      "review": { "verdict": "MISS",
        "headline": "✗方向没中但风险预警精准:押澳(39%)→0-0平。赛前标的'平局风险+低比分'全应验",
        "hits": [ "★风险判断精准:赛前标CLOSE_MATCH+平局31%+under2.5低比分→0-0正中", "Almirón停赛'巴拉圭进攻乏力'判对(0进球)", "生死战双方谨慎=0-0,符合v1.4'λ差小→平局当风险'" ],
        "misses": [ "方向严格算错:押澳39%→0-0平(没押平,但已预警)", "又一个平局" ],
        "model_lesson": "平局盲区,但这次是'预警了平局风险'的半个进步:虽没押平,但CLOSE_MATCH+平局当风险标尺让用户提前知道'这场可能闷平'。比硬押方向更有价值" }
    }
  ]
};
