// 世界杯预测 - 2026-06-27（小组末轮 MD3 收官·L/K/J组，真预测，带盘口）
// 看点:哥伦比亚vs葡萄牙(争头名)、约旦vs阿根廷(阿已锁头名)、克罗地亚vs加纳(生死战)
// 教训应用:阿根廷/英格兰对已出局鱼腩(约旦/巴拿马)→碾压(像巴西打苏格兰);争头名/生死战则正常发挥
// 队代码:PAN/ENG CRO/GHA COL/POR COD/UZB JOR/ARG ALG/AUT
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-27"] = {
  "date": "2026-06-27", "tournament": "FIFA World Cup 2026 · 小组末轮收官 MD3 (L/K/J组)",
  "model_version": "POISSON v1.4 + 末轮轮换修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有盘口;6/27仍是小组赛(有平局),6/28才淘汰赛;豪强打已出局鱼腩→碾压,争头名/生死战→正常",
  "matches": [
    {
      "id": "WC2026_M066", "kickoff_cst": "2026-06-27 17:00 ET", "group": "L", "round": 3, "tag": null,
      "home": { "code": "PAN", "name_zh": "巴拿马", "flag": "🇵🇦", "fifa_rank": 41 },
      "away": { "code": "ENG", "name_zh": "英格兰", "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "fifa_rank": 4 },
      "venue": "MetLife Stadium, 新泽西", "altitude_m": 7, "temp_c": 26, "humidity_pct": 62, "referee": "未公布",
      "headline": "英格兰62%：4分争头名,巴拿马0分已出局。英格兰实力碾压(4-2克罗地亚),但0-0加纳暴露闷平隐患→看进攻能否打开",
      "probabilities": { "home_win": 15.0, "draw": 23.0, "away_win": 62.0 },
      "expected_goals": { "home": 0.70, "away": 1.85 }, "expected_score": "0 : 2",
      "over_2_5": 52.0, "btts": 38.0, "clean_sheet_home": 14.0, "confidence": 62,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": -1.30, "items": [
          { "label": "PAN_pride", "value": "+", "note": "巴拿马已出局,荣誉战放手一搏" },
          { "label": "ENG_bore", "value": "+", "note": "英格兰0-0闷平加纳,进攻效率存疑,可能再卡壳" },
          { "label": "ENG_rotate", "value": "±", "note": "英格兰若锁头名后轮换则强度降" } ] },
        "home_risk": { "score": -1.65, "items": [
          { "label": "ENG_quality", "value": "-", "note": "FIFA 4,Kane/Bellingham/Saka个人能力碾压巴拿马" },
          { "label": "ENG_motivation", "value": "-", "note": "英格兰争头名(避开强对手)有动机,会全力" },
          { "label": "PAN_no_attack", "value": "-", "note": "巴拿马两场0进球,进攻乏力" } ] },
        "away_upset_path": { "score": 1.40, "items": [
          { "label": "market_fav", "value": "本就favorite", "note": "英格兰盘口大热,模型贴市场" },
          { "label": "Kane_Saka", "value": "+", "note": "Kane终结+Saka/Bellingham解锁密集防守" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "ENG_open", "value": "±", "note": "★英格兰能否打开进攻=关键(参0-0加纳的卡壳);别因0-0就砍其λ" },
          { "label": "first_goal", "value": "±", "note": "英格兰早进则大胜,僵持久则焦虑" },
          { "label": "rotation", "value": "±", "note": "英格兰轮换幅度" } ] }
      },
      "players": {
        "home": [
          { "name": "巴拿马锋线", "pos": "FW", "status": "QUEST", "note": "两场0进球" },
          { "name": "巴拿马后防", "pos": "DF", "status": "OK", "note": "摆大巴" },
          { "name": "巴拿马门将", "pos": "GK", "status": "OK", "note": "扑救指望" },
          { "name": "巴拿马中场", "pos": "CM", "status": "OK", "note": "拼抢" } ],
        "away": [
          { "name": "Harry Kane", "pos": "ST", "status": "KEY", "note": "队长,终结点" },
          { "name": "Jude Bellingham", "pos": "AM", "status": "KEY", "note": "中场推进" },
          { "name": "Bukayo Saka", "pos": "RW", "status": "OK", "note": "边路爆点" },
          { "name": "英格兰轮换", "pos": "—", "status": "QUEST", "note": "或部分轮换" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank PAN#41 ENG#4;巴拿马已出局" },
        { "time": "—", "level": "WARN", "msg": "英格兰打鱼腩→碾压(非无欲轮换);但0-0加纳的闷平隐患是变量" },
        { "time": "—", "level": "OK", "msg": "poisson output: 15.0 / 23.0 / 62.0" } ],
      "result": { "status": "FT", "home_goals": 0, "away_goals": 2, "scoreline": "0 - 2",
        "scorers": [ { "min": "—", "team": "ENG", "player": "Harry Kane 等", "type": "2-0,Kane第11个世界杯进球" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "英格兰2-0巴拿马,Kane第11球。模型押英格兰(62%)→方向对,这次比分也接近(预测1.85,实际2)", "source": "ESPN/Olympics" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中且比分接近:英格兰62%→2-0。打鱼腩碾压判对,没犯强队低估",
        "hits": [ "★胜负方向对：英格兰62%→赢 ✓（真盲测）", "Kane兑现(第11个世界杯进球)", "英格兰这次打开了进攻(没复刻0-0加纳的卡壳)" ],
        "misses": [ "几乎无,比分2球贴预测1.85" ],
        "model_lesson": "英格兰打已出局鱼腩→碾压判对。罕见的'方向+比分都准'的强队场,因为对手太弱没触发井喷" }
    },
    {
      "id": "WC2026_M067", "kickoff_cst": "2026-06-27 17:00 ET", "group": "L", "round": 3, "tag": "CLOSE_MATCH",
      "home": { "code": "CRO", "name_zh": "克罗地亚", "flag": "🇭🇷", "fifa_rank": 10 },
      "away": { "code": "GHA", "name_zh": "加纳", "flag": "🇬🇭", "fifa_rank": 73 },
      "venue": "Lincoln Financial Field, 费城", "altitude_m": 12, "temp_c": 27, "humidity_pct": 64, "referee": "未公布",
      "headline": "克罗地亚44%生死战：3分必须赢出线,Modrić控场。加纳4分赢/平即出线+铁防(0-0英格兰)→低比分,平局当风险",
      "probabilities": { "home_win": 44.0, "draw": 30.0, "away_win": 26.0 },
      "expected_goals": { "home": 1.35, "away": 0.90 }, "expected_score": "1 : 0",
      "over_2_5": 40.0, "btts": 42.0, "clean_sheet_home": 40.0, "confidence": 54,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.55, "items": [
          { "label": "must_win", "value": "+", "note": "克罗地亚3分必须赢才出线,会全力压上" },
          { "label": "Modric_quality", "value": "+", "note": "Modrić/Kovačić中场控制+经验,个人能力强一档" },
          { "label": "GHA_passive", "value": "+", "note": "加纳赢/平即出线,可能退守给克罗地亚控球空间" } ] },
        "home_risk": { "score": -0.85, "items": [
          { "label": "GHA_defense", "value": "-", "note": "★加纳铁防(0-0英格兰),低位防守难破" },
          { "label": "CRO_age", "value": "-", "note": "克罗地亚中场偏老,逼平巴拿马后体能存疑" },
          { "label": "GHA_counter", "value": "-", "note": "加纳速度反击(Kudus)抓克罗地亚压上身后" } ] },
        "away_upset_path": { "score": 0.60, "items": [
          { "label": "draw_enough", "value": "+", "note": "加纳平局即出线,退守反击最优解" },
          { "label": "Kudus", "value": "+", "note": "Kudus个人能力是反击爆点" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "low_scoring", "value": "-", "note": "★加纳铁防+退守→低比分,平局风险高(克罗地亚急需进球但难破)" },
          { "label": "first_goal", "value": "±", "note": "克罗地亚先进则加纳被迫出来,反之克焦虑" },
          { "label": "cards", "value": "-", "note": "生死战强度大,红黄牌风险" } ] }
      },
      "players": {
        "home": [
          { "name": "Luka Modrić", "pos": "CM", "status": "KEY", "note": "节拍器,控场核心" },
          { "name": "Mateo Kovačić", "pos": "CM", "status": "OK", "note": "中场搭档" },
          { "name": "Andrej Kramarić", "pos": "FW", "status": "OK", "note": "终结点" },
          { "name": "克罗地亚后防", "pos": "DF", "status": "QUEST", "note": "防加纳反击" } ],
        "away": [
          { "name": "Mohammed Kudus", "pos": "AM", "status": "KEY", "note": "反击爆点" },
          { "name": "加纳后防", "pos": "DF", "status": "KEY", "note": "0-0英格兰的铁防" },
          { "name": "加纳门将", "pos": "GK", "status": "OK", "note": "把关" },
          { "name": "Thomas Partey", "pos": "CM", "status": "OK", "note": "中场屏障" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank CRO#10 GHA#73;生死战克须赢/加纳赢平即出线" },
        { "time": "—", "level": "WARN", "msg": "加纳铁防+退守反击→低比分,平局30%当风险标尺,不硬猜" },
        { "time": "—", "level": "OK", "msg": "poisson output: 44.0 / 30.0 / 26.0" } ],
      "result": { "status": "FT", "home_goals": 2, "away_goals": 1, "scoreline": "2 - 1",
        "scorers": [ { "min": "—", "team": "CRO", "player": "克罗地亚", "type": "2-1生死战拿下,出线" }, { "min": "—", "team": "GHA", "player": "加纳", "type": "反击进1球" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "克罗地亚2-1加纳,生死战拿下出线。模型押克罗地亚(44%必须赢)→方向对,加纳反击进1球(预警过Kudus)", "source": "ESPN/多源" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中:克罗地亚44%→2-1。生死战'必须赢→全力'判对,加纳反击进球也在预期",
        "hits": [ "★胜负方向对：克罗地亚44%(三选一最高)→赢 ✓（真盲测）", "Modrić控场+必须赢的判断兑现", "加纳反击进1球(赛前预警Kudus反击点)" ],
        "misses": [ "比分接近,几乎无" ],
        "model_lesson": "生死战克罗地亚必须赢→拿下,方向+大致比分都对。比那些豪门井喷场准多" }
    },
    {
      "id": "WC2026_M068", "kickoff_cst": "2026-06-27 19:30 ET", "group": "K", "round": 3, "tag": "CLOSE_MATCH",
      "home": { "code": "COL", "name_zh": "哥伦比亚", "flag": "🇨🇴", "fifa_rank": 13 },
      "away": { "code": "POR", "name_zh": "葡萄牙", "flag": "🇵🇹", "fifa_rank": 5 },
      "venue": "Hard Rock Stadium, 迈阿密", "altitude_m": 2, "temp_c": 30, "humidity_pct": 70, "referee": "未公布",
      "headline": "争头名豪门对决：葡萄牙37/平30/哥伦比亚33。哥伦比亚6分领头(赢平即头名),葡萄牙4分火力强(5-0乌兹)需赢→近三选一",
      "probabilities": { "home_win": 33.0, "draw": 30.0, "away_win": 37.0 },
      "expected_goals": { "home": 1.25, "away": 1.45 }, "expected_score": "1 : 1",
      "over_2_5": 50.0, "btts": 56.0, "clean_sheet_home": 25.0, "confidence": 53,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.50, "items": [
          { "label": "COL_lead", "value": "+", "note": "哥伦比亚2连胜6分领头,赢/平即锁头名,心态主动" },
          { "label": "Diaz_James", "value": "+", "note": "Luis Díaz火热+James创造,进攻有质量" },
          { "label": "home_neutral", "value": "+", "note": "迈阿密近哥伦比亚球迷,准主场氛围" } ] },
        "home_risk": { "score": -0.80, "items": [
          { "label": "POR_firepower", "value": "-", "note": "葡萄牙5-0乌兹验证火力,B费/Leão/C罗级阵容深度" },
          { "label": "POR_need_win", "value": "-", "note": "葡萄牙需赢争头名(避强对手),求胜欲强" },
          { "label": "POR_rank", "value": "-", "note": "FIFA 5 vs 13,葡萄牙纸面更强" } ] },
        "away_upset_path": { "score": 0.55, "items": [
          { "label": "market_edge", "value": "本就微favorite", "note": "葡萄牙盘口微favored,模型贴市场" },
          { "label": "Bruno_Leao", "value": "+", "note": "B费调度+Leão突破撕开哥伦比亚" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "head_to_head_math", "value": "±", "note": "★哥伦比亚平即头名→可能保守;葡萄牙必须赢→压上,影响双方λ" },
          { "label": "heat", "value": "-", "note": "迈阿密高温高湿降节奏" },
          { "label": "first_goal", "value": "±", "note": "葡先进则哥被迫出来对攻" } ] }
      },
      "players": {
        "home": [
          { "name": "Luis Díaz", "pos": "LW", "status": "HOT", "note": "利物浦,进攻箭头" },
          { "name": "James Rodríguez", "pos": "AM", "status": "KEY", "note": "10号创造核心" },
          { "name": "Jhon Durán", "pos": "ST", "status": "OK", "note": "终结点" },
          { "name": "Daniel Muñoz", "pos": "RB", "status": "OK", "note": "助攻边卫" } ],
        "away": [
          { "name": "Bruno Fernandes", "pos": "AM", "status": "KEY", "note": "调度核心" },
          { "name": "Rafael Leão", "pos": "LW", "status": "OK", "note": "突破爆点" },
          { "name": "Cristiano Ronaldo", "pos": "ST", "status": "QUEST", "note": "终结,出场时长存疑" },
          { "name": "Rúben Dias", "pos": "CB", "status": "OK", "note": "后防核心" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank COL#13 POR#5;争头名,都已基本出线" },
        { "time": "—", "level": "WARN", "msg": "争头名近三选一→平局30%当风险;哥平即头名可能保守,葡须赢" },
        { "time": "—", "level": "OK", "msg": "poisson output: 33.0 / 30.0 / 37.0" } ],
      "result": { "status": "FT", "home_goals": 0, "away_goals": 0, "scoreline": "0 - 0",
        "scorers": [ { "min": "—", "team": "—", "player": "无进球", "type": "0-0,哥伦比亚保头名" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "哥伦比亚0-0葡萄牙,争头名豪门0-0闷平。模型押葡萄牙(37%)方向没中,但赛前标CLOSE+'哥平即头名可能保守'→0-0正中预警", "source": "NBC/多源" },
      "review": { "verdict": "MISS",
        "headline": "✗方向没中但预警精准:押葡萄牙(37%)→0-0。赛前'哥平即头名会保守→低比分'全应验",
        "hits": [ "★平局风险判断精准(标CLOSE_MATCH+'哥平即头名可能保守'→0-0)", "争头名两队都不愿冒险的判断对" ],
        "misses": [ "方向错:押葡萄牙37%→0-0平(没押平,但已预警)", "又一个平局" ],
        "model_lesson": "争头名豪门对决,两队都有理由保守(哥平即头名)→0-0,正中'可能保守'预警。平局盲区但这次预警到位,价值在让用户提前知道'这场可能闷'" }
    },
    {
      "id": "WC2026_M069", "kickoff_cst": "2026-06-27 19:30 ET", "group": "K", "round": 3, "tag": null,
      "home": { "code": "COD", "name_zh": "刚果(金)", "flag": "🇨🇩", "fifa_rank": 46 },
      "away": { "code": "UZB", "name_zh": "乌兹别克斯坦", "flag": "🇺🇿", "fifa_rank": 57 },
      "venue": "Mercedes-Benz Stadium, 亚特兰大", "altitude_m": 320, "temp_c": 27, "humidity_pct": 60, "referee": "未公布",
      "headline": "刚果金48%：1分搏最佳第三名,Wissa反击。乌兹别克0分已出局(0-5惨败葡萄牙)。刚果金动机+略强→微favored",
      "probabilities": { "home_win": 48.0, "draw": 27.0, "away_win": 25.0 },
      "expected_goals": { "home": 1.25, "away": 0.85 }, "expected_score": "1 : 0",
      "over_2_5": 40.0, "btts": 43.0, "clean_sheet_home": 42.0, "confidence": 54,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 0.55, "items": [
          { "label": "still_alive", "value": "+", "note": "刚果金1分,赢可能搏最佳第三名,有动机" },
          { "label": "Wissa", "value": "+", "note": "Wissa(逼平葡萄牙破门)反击点,锋线有威胁" },
          { "label": "UZB_low", "value": "+", "note": "乌兹别克0-5惨败葡萄牙信心崩+已出局" } ] },
        "home_risk": { "score": -0.55, "items": [
          { "label": "COD_attack", "value": "-", "note": "刚果金进攻有限,破密集防守乏力" },
          { "label": "dead_rubber_UZB", "value": "-", "note": "乌兹别克已出局但可能踢得放松反而轻装" },
          { "label": "low_scoring", "value": "-", "note": "两队进攻都不强,易闷局" } ] },
        "away_upset_path": { "score": 0.30, "items": [
          { "label": "UZB_pride", "value": "+", "note": "乌兹别克荣誉战想雪0-5之耻" },
          { "label": "set_piece", "value": "+", "note": "乌兹别克身高+定位球" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "third_place_math", "value": "±", "note": "★刚果金最佳第三名门槛是否明朗,影响冒进度" },
          { "label": "first_goal", "value": "±", "note": "刚果金早进则掌握主动" },
          { "label": "motivation", "value": "±", "note": "乌兹别克无欲程度" } ] }
      },
      "players": {
        "home": [
          { "name": "Yoane Wissa", "pos": "FW", "status": "KEY", "note": "纽卡,反击爆点" },
          { "name": "Cédric Bakambu", "pos": "ST", "status": "OK", "note": "终结" },
          { "name": "Chancel Mbemba", "pos": "CB", "status": "OK", "note": "队长,后防" },
          { "name": "刚果金中场", "pos": "CM", "status": "OK", "note": "拼抢" } ],
        "away": [
          { "name": "Eldor Shomurodov", "pos": "ST", "status": "OK", "note": "锋线支点" },
          { "name": "乌兹别克后防", "pos": "DF", "status": "QUEST", "note": "0-5失球多" },
          { "name": "乌兹别克门将", "pos": "GK", "status": "OK", "note": "把关" },
          { "name": "乌兹别克中场", "pos": "CM", "status": "OK", "note": "组织" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank COD#46 UZB#57;刚果金搏最佳第三" },
        { "time": "—", "level": "WARN", "msg": "进攻都有限+乌兹无欲→低比分,给刚果金48%但置信不高" },
        { "time": "—", "level": "OK", "msg": "poisson output: 48.0 / 27.0 / 25.0" } ],
      "result": { "status": "FT", "home_goals": 3, "away_goals": 1, "scoreline": "3 - 1",
        "scorers": [ { "min": "—", "team": "COD", "player": "刚果(金)", "type": "3-1,搏最佳第三名" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "刚果金3-1乌兹别克。模型押刚果金(48%)→方向对,但比分低估(预测1.25,实际3球)", "source": "NBC/多源" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中:刚果金48%→3-1。但又一个进球低估(预测1.25球→实际3)",
        "hits": [ "★胜负方向对：刚果金48%→赢 ✓（真盲测）", "Wissa等反击点兑现", "乌兹别克无欲判断对" ],
        "misses": [ "比分低估:预测刚果金1.25球→实际3球(为搏最佳第三全力)" ],
        "model_lesson": "刚果金为出线全力→3-1。方向对,进球又偏保守——有强动机的队进球λ要上调" }
    },
    {
      "id": "WC2026_M070", "kickoff_cst": "2026-06-27 22:00 ET", "group": "J", "round": 3, "tag": null,
      "home": { "code": "JOR", "name_zh": "约旦", "flag": "🇯🇴", "fifa_rank": 64 },
      "away": { "code": "ARG", "name_zh": "阿根廷", "flag": "🇦🇷", "fifa_rank": 1 },
      "venue": "AT&T Stadium, 阿灵顿", "altitude_m": 180, "temp_c": 28, "humidity_pct": 55, "referee": "未公布",
      "headline": "阿根廷62%：已锁头名(2连胜零封),约旦0分已出局。阿根廷或轮换护Messi/淘汰赛,但打鱼腩仍碾压",
      "probabilities": { "home_win": 15.0, "draw": 23.0, "away_win": 62.0 },
      "expected_goals": { "home": 0.65, "away": 1.80 }, "expected_score": "0 : 2",
      "over_2_5": 50.0, "btts": 35.0, "clean_sheet_home": 13.0, "confidence": 63,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": -1.40, "items": [
          { "label": "JOR_pride", "value": "+", "note": "约旦已出局,荣誉战搏一把" },
          { "label": "ARG_rotate", "value": "+", "note": "阿根廷锁头名,Scaloni或大轮换护Messi+主力淘汰赛" },
          { "label": "JOR_compact", "value": "+", "note": "约旦踢紧凑或限制比分" } ] },
        "home_risk": { "score": -1.70, "items": [
          { "label": "ARG_quality", "value": "-", "note": "FIFA 1,卫冕冠军即便轮换替补仍碾压约旦" },
          { "label": "ARG_depth", "value": "-", "note": "Álvarez/Lautaro等替补质量足,轮换不削太多火力(参巴西教训)" },
          { "label": "JOR_no_attack", "value": "-", "note": "约旦进攻乏力,难给阿根廷压力" } ] },
        "away_upset_path": { "score": 1.45, "items": [
          { "label": "market_fav", "value": "本就favorite", "note": "阿根廷盘口大热,模型贴市场" },
          { "label": "Alvarez_Lautaro", "value": "+", "note": "即便Messi休,Álvarez/Lautaro也能终结" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "Messi_minutes", "value": "±", "note": "★Messi出场时长=变量,但替补阵仍强(别因轮换砍太狠)" },
          { "label": "rotation_extent", "value": "±", "note": "阿根廷轮换几人" },
          { "label": "first_goal", "value": "±", "note": "阿根廷早进则大胜" } ] }
      },
      "players": {
        "home": [
          { "name": "约旦锋线", "pos": "FW", "status": "QUEST", "note": "进攻乏力" },
          { "name": "Mousa Al-Taamari", "pos": "WG", "status": "OK", "note": "唯一爆点" },
          { "name": "约旦后防", "pos": "DF", "status": "OK", "note": "摆大巴" },
          { "name": "约旦门将", "pos": "GK", "status": "OK", "note": "扑救指望" } ],
        "away": [
          { "name": "Lionel Messi", "pos": "AM", "status": "QUEST", "note": "或轮休护体能" },
          { "name": "Julián Álvarez", "pos": "ST", "status": "KEY", "note": "终结点" },
          { "name": "Lautaro Martínez", "pos": "ST", "status": "OK", "note": "替补冲击" },
          { "name": "Enzo Fernández", "pos": "CM", "status": "OK", "note": "中场" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank JOR#64 ARG#1;阿根廷已锁头名" },
        { "time": "—", "level": "WARN", "msg": "阿根廷打已出局鱼腩→碾压(像巴西打苏格兰);轮换但替补仍强,λ别砍狠" },
        { "time": "—", "level": "OK", "msg": "poisson output: 15.0 / 23.0 / 62.0" } ],
      "result": { "status": "FT", "home_goals": 1, "away_goals": 3, "scoreline": "1 - 3",
        "scorers": [ { "min": "—", "team": "ARG", "player": "Messi(替补) 等", "type": "3-1,Messi第7届世界杯进球破纪录" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "阿根廷3-1约旦,Messi替补登场进球(连续7届世界杯破纪录)。模型押阿根廷(62%)→方向对,'轮换λ别砍狠'判对", "source": "CBS/ESPN" },
      "review": { "verdict": "HIT",
        "headline": "★方向命中+教训应用成功:阿根廷62%→3-1。'轮换但替补仍强,λ别砍狠'判对(吸取巴西教训)",
        "hits": [ "★胜负方向对：阿根廷62%→赢 ✓（真盲测）", "★'已出线轮换但λ别砍狠'判对→阿根廷3球(没像早期那样误判轮换乏力)", "Messi替补破纪录(连续7届进球)" ],
        "misses": [ "约旦进1球略高于预测0.65,可接受" ],
        "model_lesson": "【教训应用成功】打鱼腩碾压+'轮换λ别砍狠'两条都对,3-1方向比分都好。和早期误砍强队λ相比是进步" }
    },
    {
      "id": "WC2026_M071", "kickoff_cst": "2026-06-27 22:00 ET", "group": "J", "round": 3, "tag": "CLOSE_MATCH",
      "home": { "code": "ALG", "name_zh": "阿尔及利亚", "flag": "🇩🇿", "fifa_rank": 38 },
      "away": { "code": "AUT", "name_zh": "奥地利", "flag": "🇦🇹", "fifa_rank": 23 },
      "venue": "Arrowhead Stadium, 堪萨斯城", "altitude_m": 270, "temp_c": 27, "humidity_pct": 58, "referee": "未公布",
      "headline": "争第二生死战：奥地利36/平30/阿尔及利亚34。两队都3分,赢者出线。奥地利组织vs阿尔及利亚速度→势均力敌,平局当风险",
      "probabilities": { "home_win": 34.0, "draw": 30.0, "away_win": 36.0 },
      "expected_goals": { "home": 1.10, "away": 1.20 }, "expected_score": "1 : 1",
      "over_2_5": 46.0, "btts": 52.0, "clean_sheet_home": 28.0, "confidence": 52,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.30, "items": [
          { "label": "must_win", "value": "+", "note": "阿尔及利亚3分,赢即出线,会全力" },
          { "label": "speed", "value": "+", "note": "阿尔及利亚速度+非洲身体,反击有威胁" },
          { "label": "Amoura", "value": "+", "note": "锋线爆点(2-1约旦进球)" } ] },
        "home_risk": { "score": -0.70, "items": [
          { "label": "AUT_organize", "value": "-", "note": "奥地利组织性强+FIFA 23更高,Sabitzer中场质量" },
          { "label": "AUT_form", "value": "-", "note": "奥地利3-1约旦展示火力,0-2阿根廷虽败但不弱" },
          { "label": "AUT_must_win_too", "value": "-", "note": "奥地利同样必须赢,会拼" } ] },
        "away_upset_path": { "score": 0.45, "items": [
          { "label": "Sabitzer", "value": "+", "note": "Sabitzer/Baumgartner中前场质量解锁" },
          { "label": "set_piece", "value": "+", "note": "奥地利定位球+身高优势" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "both_must_win", "value": "±", "note": "★双方都必须赢→开放对攻还是谨慎=最大未知" },
          { "label": "first_goal", "value": "±", "note": "先进球方掌握主动,另一方压上留空" },
          { "label": "cards", "value": "-", "note": "生死战强度大,红黄牌风险" } ] }
      },
      "players": {
        "home": [
          { "name": "Mohamed Amoura", "pos": "FW", "status": "KEY", "note": "锋线爆点" },
          { "name": "Riyad Mahrez", "pos": "WG", "status": "OK", "note": "边路创造" },
          { "name": "阿尔及利亚后防", "pos": "DF", "status": "OK", "note": "组织" },
          { "name": "阿尔及利亚门将", "pos": "GK", "status": "OK", "note": "把关" } ],
        "away": [
          { "name": "Marcel Sabitzer", "pos": "AM", "status": "KEY", "note": "中前场核心" },
          { "name": "Christoph Baumgartner", "pos": "AM", "status": "OK", "note": "插上" },
          { "name": "Konrad Laimer", "pos": "CM", "status": "OK", "note": "中场引擎" },
          { "name": "奥地利后防", "pos": "DF", "status": "OK", "note": "组织性" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ALG#38 AUT#23;争第二生死战" },
        { "time": "—", "level": "WARN", "msg": "两队都必须赢+势均力敌→平局30%当风险标尺,不硬猜" },
        { "time": "—", "level": "OK", "msg": "poisson output: 34.0 / 30.0 / 36.0" } ],
      "result": { "status": "FT", "home_goals": 3, "away_goals": 3, "scoreline": "3 - 3",
        "scorers": [ { "min": "—", "team": "—", "player": "六球对攻烂仗", "type": "3-3,两队都进3球" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "阿尔及利亚3-3奥地利,疯狂6球平局。模型押奥地利(36%三选一)方向没中,标了CLOSE+平局风险→平局对,但没料到3-3对攻", "source": "CBS/Yahoo" },
      "review": { "verdict": "MISS",
        "headline": "✗方向没中但平局预警对:押奥地利(36%)→3-3。标了CLOSE+平局风险应验,但'低比分'判错(实际6球对攻)",
        "hits": [ "★平局风险判断对(标CLOSE_MATCH+'两队都必须赢'→平局)", "btts/over判对(6球大球)" ],
        "misses": [ "方向错:押奥地利36%→3-3平(没押平,但已预警)", "'势均力敌→低比分1:1'判错,实际3-3对攻烂仗", "又一个平局" ],
        "model_lesson": "平局盲区,这次是高比分平局(3-3)。平局风险预警对,但'生死战→谨慎低比分'错——两队都必须赢时反而开放对攻。生死战分两种:保守闷平(哥-葡0-0)vs拼命对攻(阿-奥3-3),模型难区分" }
    }
  ]
};
