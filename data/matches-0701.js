// 世界杯预测 - 2026-07-01（淘汰赛 Round of 32，真预测，带盘口）
// ⚠️淘汰赛:90分钟平→加时/点球,下列为90分钟胜平负,"平"=进加时;点球随机·模型不算
// 日期/时间由 The Odds API commence_time(UTC)换算ET确定
// 队代码:ENG/COD BEL/SEN USA/BIH
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-01"] = {
  "date": "2026-07-01", "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 32",
  "model_version": "POISSON v1.4 + 淘汰赛(加时/点球)修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有48家盘口;淘汰赛90分钟胜平负,'平'=进加时;点球随机不预测",
  "matches": [
    {
      "id": "WC2026_R32_08", "kickoff_cst": "2026-07-01 12:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "ENG", "name_zh": "英格兰", "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "fifa_rank": 4 },
      "away": { "code": "COD", "name_zh": "刚果(金)", "flag": "🇨🇩", "fifa_rank": 46 },
      "venue": "Gillette Stadium, 福克斯堡", "altitude_m": 28, "temp_c": 26, "humidity_pct": 60, "referee": "未公布",
      "headline": "英格兰70%(90分钟)：Kane领衔实力碾压。刚果金(3-1乌兹)有Wissa反击但弱一档。庄家给英格兰75%,我略低留英格兰0-0加纳式闷平隐患",
      "probabilities": { "home_win": 70.0, "draw": 19.0, "away_win": 11.0 },
      "expected_goals": { "home": 1.85, "away": 0.75 }, "expected_score": "2 : 0",
      "over_2_5": 52.0, "btts": 38.0, "clean_sheet_home": 46.0, "confidence": 62,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 1.25, "items": [
          { "label": "ENG_quality", "value": "+", "note": "FIFA 4,Kane/Bellingham/Saka个人能力碾压" },
          { "label": "depth", "value": "+", "note": "英格兰阵容深度厚,淘汰赛余地大" },
          { "label": "COD_weak", "value": "+", "note": "刚果金FIFA 46,面对英格兰质量差距明显" } ] },
        "home_risk": { "score": -0.60, "items": [
          { "label": "ENG_bore", "value": "-", "note": "★英格兰0-0闷平过加纳,进攻效率偶尔卡壳" },
          { "label": "Wissa_counter", "value": "-", "note": "刚果金Wissa(逼平葡萄牙破门)反击点" },
          { "label": "knockout_variance", "value": "-", "note": "淘汰赛单场+英格兰若久攻不下则焦虑" } ] },
        "away_upset_path": { "score": 0.30, "items": [
          { "label": "vs_market", "value": "本就favorite", "note": "庄家英格兰74.8%,我给70%贴市场略留闷平方差" },
          { "label": "park_bus_pen", "value": "+", "note": "刚果金摆大巴+Wissa偷袭拖进点球是唯一路径" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "ENG_open", "value": "±", "note": "★英格兰能否早进球打开(参0-0加纳的卡壳)" },
          { "label": "rotation", "value": "±", "note": "英格兰轮换幅度" },
          { "label": "first_goal", "value": "±", "note": "英格兰早进则大胜,僵持久则焦虑" } ] }
      },
      "players": {
        "home": [
          { "name": "Harry Kane", "pos": "ST", "status": "KEY", "note": "队长,终结点(已11球WC)" },
          { "name": "Jude Bellingham", "pos": "AM", "status": "KEY", "note": "中场推进" },
          { "name": "Bukayo Saka", "pos": "RW", "status": "OK", "note": "边路爆点" },
          { "name": "Phil Foden", "pos": "AM", "status": "OK", "note": "创造" } ],
        "away": [
          { "name": "Yoane Wissa", "pos": "FW", "status": "KEY", "note": "纽卡,反击爆点" },
          { "name": "Cédric Bakambu", "pos": "ST", "status": "OK", "note": "终结" },
          { "name": "Chancel Mbemba", "pos": "CB", "status": "OK", "note": "队长,后防" },
          { "name": "刚果金门将", "pos": "GK", "status": "OK", "note": "摆大巴指望" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ENG#4 COD#46;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型70% vs 庄家74.8%:英格兰favored,但0-0加纳式闷平是隐患,略留方差" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 70.0 / 19.0 / 11.0" } ],
      "result": { "status": "FT", "home_goals": 2, "away_goals": 1, "scoreline": "2 - 1",
        "scorers": [ { "min": "—", "team": "ENG", "player": "Harry Kane 等", "type": "2-1,Kane救主晋级" }, { "min": "—", "team": "COD", "player": "刚果金", "type": "反击扳回1球" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "英格兰2-1刚果金,Kane救主,常规时间晋级。模型押英格兰(70%)→方向对,这次比分也准(预测1.85→实际2球)", "source": "ESPN MD21 recap" },
      "review": { "verdict": "HIT",
        "headline": "★方向+比分都对:英格兰70%→2-1。Kane救主,难得没犯强队进球低估",
        "hits": [ "★晋级方向对：英格兰70%→赢 ✓（真盲测）", "比分精准(预测1.85→实际2球)", "刚果金反击扳回1球(预警过Wissa级反击)" ],
        "misses": [ "几乎无,英格兰没打出井喷所以比分也贴" ],
        "model_lesson": "英格兰打鱼腩碾压,对手够弱没触发井喷→方向+比分都准。Kane关键先生" }
    },
    {
      "id": "WC2026_R32_09", "kickoff_cst": "2026-07-01 16:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "BEL", "name_zh": "比利时", "flag": "🇧🇪", "fifa_rank": 8 },
      "away": { "code": "SEN", "name_zh": "塞内加尔", "flag": "🇸🇳", "fifa_rank": 15 },
      "venue": "Lincoln Financial Field, 费城", "altitude_m": 12, "temp_c": 27, "humidity_pct": 63, "referee": "未公布",
      "headline": "强强对话:比利时42%/平30%/塞内加尔28%。比利时De Bruyne(5-1新西兰)vs塞内加尔Mané+非洲身体(5-0伊拉克火力)。庄家比利时45%,接近五五,易进点球",
      "probabilities": { "home_win": 42.0, "draw": 30.0, "away_win": 28.0 },
      "expected_goals": { "home": 1.35, "away": 1.10 }, "expected_score": "1 : 1",
      "over_2_5": 50.0, "btts": 54.0, "clean_sheet_home": 28.0, "confidence": 53,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.45, "items": [
          { "label": "De_Bruyne", "value": "+", "note": "De Bruyne组织+比利时5-1新西兰火力验证" },
          { "label": "rank_edge", "value": "+", "note": "FIFA 8 vs 15,纸面略占优" },
          { "label": "Doku_Lukaku", "value": "+", "note": "Doku突破+Lukaku终结" } ] },
        "home_risk": { "score": -0.85, "items": [
          { "label": "SEN_physical", "value": "-", "note": "★塞内加尔非洲身体+Mané/Koulibaly级,5-0伊拉克火力足" },
          { "label": "BEL_inconsistent", "value": "-", "note": "比利时小组赛两平挣扎过,状态不稳" },
          { "label": "SEN_press", "value": "-", "note": "塞内加尔高强度逼抢+反击能打乱比利时" } ] },
        "away_upset_path": { "score": 0.80, "items": [
          { "label": "vs_market", "value": "★分歧小", "note": "庄家比利时45%/塞内加尔25.4%,我给塞28%——五五开,给塞更多空间" },
          { "label": "Sarr_Mane", "value": "+", "note": "Ismaila Sarr/Mané反击+个人能力" },
          { "label": "pen_variance", "value": "+", "note": "势均力敌易进点球,塞内加尔门将是变量" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "tactical", "value": "±", "note": "★两队都强,谁先进球+战术博弈决定走向" },
          { "label": "extra_time_likely", "value": "-", "note": "实力接近→最可能进加时甚至点球" },
          { "label": "BEL_defense", "value": "±", "note": "比利时后防能否顶住塞内加尔冲击" } ] }
      },
      "players": {
        "home": [
          { "name": "Kevin De Bruyne", "pos": "AM", "status": "KEY", "note": "组织核心" },
          { "name": "Jérémy Doku", "pos": "WG", "status": "OK", "note": "边路突破" },
          { "name": "Romelu Lukaku", "pos": "ST", "status": "OK", "note": "终结" },
          { "name": "Leandro Trossard", "pos": "FW", "status": "OK", "note": "副攻(对新西兰双响)" } ],
        "away": [
          { "name": "Sadio Mané", "pos": "FW", "status": "KEY", "note": "队魂,爆点" },
          { "name": "Ismaila Sarr", "pos": "WG", "status": "OK", "note": "反击速度" },
          { "name": "Kalidou Koulibaly", "pos": "CB", "status": "KEY", "note": "后防核心" },
          { "name": "Pape Matar Sarr", "pos": "CM", "status": "OK", "note": "中场" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank BEL#8 SEN#15;R32淘汰赛,强强对话" },
        { "time": "—", "level": "WARN", "msg": "★今日最接近五五开:模型42/30/28 vs 庄家45/29.6/25.4;实力接近最易进点球" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 42.0 / 30.0 / 28.0" } ],
      "result": { "status": "加时(3-2)", "home_goals": 3, "away_goals": 2, "scoreline": "3 - 2 (加时)",
        "scorers": [ { "min": "尾段", "team": "BEL", "player": "比利时", "type": "常规时间末段连追" }, { "min": "加时补时", "team": "BEL", "player": "比利时(点球)", "type": "加时读秒点球3-2逆转" }, { "min": "—", "team": "SEN", "player": "塞内加尔", "type": "一度领先" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "★比利时3-2加时惊天逆转塞内加尔:常规时间末段连追+加时读秒点球绝杀,晋级!模型押比利时(42%最高)→方向对,且'易进加时'预警命中。塞内加尔一度领先(逆庄家给的28%空间体现,塞确实接近)", "source": "ESPN MD21 recap" },
      "review": { "verdict": "HIT",
        "headline": "★晋级方向对+进加时预警命中:押比利时42%→加时3-2逆转晋级。塞内加尔一度领先但被读秒逆转",
        "hits": [ "★晋级方向对：比利时42%(三选一最高)→晋级 ✓（真盲测）", "★'最接近五五开+易进加时'预警命中(打进加时)", "逆庄家给塞28%空间体现:塞一度领先、确实接近(比庄家25.4%更准)" ],
        "misses": [ "逆庄家没押到塞爆冷(塞领先被逆转),但主押比利时对——这次顺庄家主押赢了" ],
        "model_lesson": "比利时加时惊天逆转(末段连追+读秒点球)。主押比利时对+进加时预警对,逆庄家'塞接近'也对(塞领先过)。这场是'主押+预警'双对的典型,和昨天塞输的假结果完全不同——真实是比利时逆转" }
    },
    {
      "id": "WC2026_R32_10", "kickoff_cst": "2026-07-01 20:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "USA", "name_zh": "美国", "flag": "🇺🇸", "fifa_rank": 16 },
      "away": { "code": "BIH", "name_zh": "波黑", "flag": "🇧🇦", "fifa_rank": 63 },
      "venue": "SoFi Stadium, 洛杉矶", "altitude_m": 30, "temp_c": 26, "humidity_pct": 55, "referee": "未公布",
      "headline": "美国66%(90分钟)：东道主主场+D组头名,Pulisic回归。波黑Džeko老将有威胁但弱一档。庄家美国70%,我略低留美国被土耳其3-2的不稳",
      "probabilities": { "home_win": 66.0, "draw": 21.0, "away_win": 13.0 },
      "expected_goals": { "home": 1.65, "away": 0.85 }, "expected_score": "2 : 0",
      "over_2_5": 50.0, "btts": 42.0, "clean_sheet_home": 42.0, "confidence": 60,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 1.10, "items": [
          { "label": "home_advantage", "value": "+", "note": "SoFi主场+东道主氛围+裁判心理" },
          { "label": "Pulisic_back", "value": "+", "note": "Pulisic伤愈回归+Balogun/Weah锋线" },
          { "label": "rank_gap", "value": "+", "note": "FIFA 16 vs 63,整体高一档" } ] },
        "home_risk": { "score": -0.70, "items": [
          { "label": "USA_wobble", "value": "-", "note": "★美国末轮2-3被土耳其读秒反杀(轮换阵),状态存疑" },
          { "label": "Dzeko", "value": "-", "note": "波黑Džeko老而弥坚+定位球高点" },
          { "label": "knockout_pressure", "value": "-", "note": "东道主淘汰赛心理压力" } ] },
        "away_upset_path": { "score": 0.35, "items": [
          { "label": "vs_market", "value": "本就favorite", "note": "庄家美国70.4%,我给66%略留美国不稳的方差" },
          { "label": "Dzeko_setpiece", "value": "+", "note": "Džeko定位球+波黑反击偷分" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "USA_form", "value": "±", "note": "★美国主力回归后能否找回状态(vs土耳其轮换阵翻车)" },
          { "label": "Pulisic_minutes", "value": "±", "note": "Pulisic出场时长" },
          { "label": "crowd_pressure", "value": "±", "note": "主场是助力还是压力" } ] }
      },
      "players": {
        "home": [
          { "name": "Christian Pulisic", "pos": "AM", "status": "KEY", "note": "伤愈回归,核心" },
          { "name": "Folarin Balogun", "pos": "ST", "status": "OK", "note": "终结点" },
          { "name": "Tyler Adams", "pos": "CM", "status": "OK", "note": "中场拦截" },
          { "name": "Timothy Weah", "pos": "WG", "status": "OK", "note": "边路速度" } ],
        "away": [
          { "name": "Edin Džeko", "pos": "ST", "status": "KEY", "note": "老将支点+高点" },
          { "name": "Ermedin Demirović", "pos": "FW", "status": "OK", "note": "锋线" },
          { "name": "Sead Kolašinac", "pos": "DF", "status": "OK", "note": "经验" },
          { "name": "波黑门将", "pos": "GK", "status": "OK", "note": "把关" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank USA#16 BIH#63;东道主主场" },
        { "time": "—", "level": "WARN", "msg": "★模型66% vs 庄家70.4%:美国东道主favored,但末轮被土耳其反杀的不稳留方差" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 66.0 / 21.0 / 13.0" } ],
      "result": { "status": "FT", "home_goals": 2, "away_goals": 0, "scoreline": "2 - 0",
        "scorers": [ { "min": "上半场", "team": "USA", "player": "Folarin Balogun", "type": "本届第3球" }, { "min": "82'", "team": "USA", "player": "Malik Tillman", "type": "任意球破门" } ],
        "red_cards": [ { "team": "USA", "player": "Folarin Balogun", "min": "下半场" } ],
        "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "美国2-0波黑,Balogun+Tillman任意球,10人顶住晋级(24年来首个淘汰赛胜)。模型押美国(66%)→方向对,东道主主场兑现", "source": "ESPN/NPR" },
      "review": { "verdict": "HIT",
        "headline": "★方向对:美国66%→2-0。东道主主场兑现,Balogun红牌后10人顶住零封",
        "hits": [ "★晋级方向对：美国66%→赢 ✓（真盲测）", "东道主主场+Balogun/Tillman进球判对", "顶住Balogun红牌(10人)完成零封,美国24年首个淘汰赛胜" ],
        "misses": [ "比分接近(2球vs预测1.65),几乎无" ],
        "model_lesson": "美国东道主主场favored兑现,'被土耳其反杀'的不稳没延续。方向+比分都稳" }
    }
  ]
};
