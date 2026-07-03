// 世界杯预测 - 2026-06-30（淘汰赛 Round of 32，真预测，带盘口）
// ⚠️淘汰赛:90分钟平→加时/点球,下列为90分钟胜平负,"平"=进加时;点球随机·模型不算
// 日期/时间由 The Odds API commence_time(UTC)换算ET确定
// 队代码:CIV/NOR FRA/SWE MEX/ECU
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-30"] = {
  "date": "2026-06-30", "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 32",
  "model_version": "POISSON v1.4 + 淘汰赛(加时/点球)修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有48家盘口;淘汰赛90分钟胜平负,'平'=进加时;点球随机不预测",
  "matches": [
    {
      "id": "WC2026_R32_05", "kickoff_cst": "2026-06-30 13:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "CIV", "name_zh": "科特迪瓦", "flag": "🇨🇮", "fifa_rank": 30 },
      "away": { "code": "NOR", "name_zh": "挪威", "flag": "🇳🇴", "fifa_rank": 31 },
      "venue": "AT&T Stadium, 阿灵顿", "altitude_m": 180, "temp_c": 28, "humidity_pct": 55, "referee": "未公布",
      "headline": "挪威44%(90分钟)：Haaland火力占优,但小组赛被法国4-1暴露防守。科特迪瓦非洲身体+Diallo反击。庄家挪威46.8%,我略低给科特迪瓦机会",
      "probabilities": { "home_win": 28.0, "draw": 28.0, "away_win": 44.0 },
      "expected_goals": { "home": 1.05, "away": 1.35 }, "expected_score": "1 : 1",
      "over_2_5": 50.0, "btts": 54.0, "clean_sheet_home": 26.0, "confidence": 54,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.40, "items": [
          { "label": "CIV_physical", "value": "+", "note": "科特迪瓦非洲身体+Kessié中场强度,能磨" },
          { "label": "Diallo", "value": "+", "note": "Amad Diallo/Diomande反击速度打挪威身后" },
          { "label": "NOR_defense", "value": "+", "note": "挪威防守一般(被法国灌4球),可被冲击" } ] },
        "home_risk": { "score": -0.85, "items": [
          { "label": "Haaland", "value": "-", "note": "★Haaland本届火热,一个机会就能终结" },
          { "label": "Odegaard", "value": "-", "note": "Ødegaard组织+挪威排名略高" },
          { "label": "set_piece", "value": "-", "note": "挪威身高+定位球(Haaland/Sørloth头球)" } ] },
        "away_upset_path": { "score": 0.65, "items": [
          { "label": "vs_market", "value": "★分歧", "note": "庄家挪威46.8%,我给44%——科特迪瓦反击+挪威防守漏洞,留爆冷余地" },
          { "label": "Haaland_service", "value": "+", "note": "若切断给Haaland的供给,挪威进攻单一" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "first_goal", "value": "±", "note": "Haaland先进则挪威控,科先进则挪威压上留空" },
          { "label": "extra_time", "value": "±", "note": "实力接近易进加时" },
          { "label": "Haaland_marking", "value": "±", "note": "科特迪瓦如何盯死Haaland" } ] }
      },
      "players": {
        "home": [
          { "name": "Amad Diallo", "pos": "RW", "status": "KEY", "note": "曼联,反击爆点" },
          { "name": "Franck Kessié", "pos": "CM", "status": "OK", "note": "中场引擎" },
          { "name": "Sébastien Haller", "pos": "ST", "status": "OK", "note": "终结" },
          { "name": "Yan Diomande", "pos": "WG", "status": "OK", "note": "速度" } ],
        "away": [
          { "name": "Erling Haaland", "pos": "ST", "status": "HOT", "note": "本届火热,终结点" },
          { "name": "Martin Ødegaard", "pos": "AM", "status": "KEY", "note": "组织核心" },
          { "name": "Alexander Sørloth", "pos": "ST", "status": "OK", "note": "副锋+头球" },
          { "name": "挪威后防", "pos": "DF", "status": "QUEST", "note": "被法国灌4球,不稳" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank CIV#30 NOR#31;R32淘汰赛,实力接近" },
        { "time": "—", "level": "WARN", "msg": "★模型挪威44% vs 庄家46.8%:挪威防守漏洞+科反击,我留爆冷余地;易进加时" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 28.0 / 28.0 / 44.0" } ],
      "result": { "status": "FT", "home_goals": 1, "away_goals": 2, "scoreline": "1 - 2",
        "scorers": [ { "min": "早段", "team": "NOR", "player": "Antonio Nusa", "type": "挪威先进" }, { "min": "74'", "team": "CIV", "player": "科特迪瓦", "type": "扳平" }, { "min": "86'", "team": "NOR", "player": "Erling Haaland", "type": "绝杀" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "挪威2-1科特迪瓦,Haaland 86分钟绝杀,常规时间晋级。模型押挪威(44%三选一)→方向对,Haaland这个赛前点名的X factor兑现;科特迪瓦74'扳平(给的28%爆冷空间体现)", "source": "NBC/FOX" },
      "review": { "verdict": "HIT",
        "headline": "★晋级方向对:挪威44%→2-1,Haaland 86'绝杀。科特迪瓦顽强扳平但被Haaland带走",
        "hits": [ "★晋级方向对：挪威44%(三选一最高)→赢 ✓（真盲测）", "★Haaland 86'绝杀——赛前点名的X factor兑现", "科特迪瓦74'扳平顽强(给的28%爆冷空间体现,一度有戏)" ],
        "misses": [ "一球小胜接近,几乎无" ],
        "model_lesson": "挪威favored兑现,Haaland关键先生。科特迪瓦扳平后被Haaland终结——favorite有超级球星时,给44%押对" }
    },
    {
      "id": "WC2026_R32_06", "kickoff_cst": "2026-06-30 17:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "FRA", "name_zh": "法国", "flag": "🇫🇷", "fifa_rank": 2 },
      "away": { "code": "SWE", "name_zh": "瑞典", "flag": "🇸🇪", "fifa_rank": 22 },
      "venue": "Lincoln Financial Field, 费城", "altitude_m": 12, "temp_c": 27, "humidity_pct": 62, "referee": "未公布",
      "headline": "法国70%(90分钟)：火力全开(4-1挪威),Mbappé领衔实力碾压。瑞典Isak/Gyökeres有锋无后。庄家给法国74%,我贴市场略留淘汰赛方差",
      "probabilities": { "home_win": 70.0, "draw": 19.0, "away_win": 11.0 },
      "expected_goals": { "home": 1.95, "away": 0.85 }, "expected_score": "2 : 0",
      "over_2_5": 54.0, "btts": 42.0, "clean_sheet_home": 44.0, "confidence": 62,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 1.30, "items": [
          { "label": "FRA_firepower", "value": "+", "note": "法国4-1挪威火力验证,Mbappé/Dembélé速度+深度全面碾压" },
          { "label": "rank_gap", "value": "+", "note": "FIFA 2 vs 22,整体高一档" },
          { "label": "SWE_weak_def", "value": "+", "note": "瑞典后防一般,挡不住法国速度" } ] },
        "home_risk": { "score": -0.55, "items": [
          { "label": "Isak_Gyokeres", "value": "-", "note": "瑞典Isak+Gyökeres锋线有质量,能抓机会" },
          { "label": "knockout_variance", "value": "-", "note": "淘汰赛单场+若法国轻敌则方差" },
          { "label": "set_piece", "value": "-", "note": "瑞典身高+定位球是唯一爆冷路径" } ] },
        "away_upset_path": { "score": -0.20, "items": [
          { "label": "vs_market", "value": "本就favorite", "note": "庄家法国74.4%,我给70%,贴市场略留方差" },
          { "label": "Gyokeres_counter", "value": "+", "note": "Gyökeres反击+Isak终结,偷一球" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "FRA_rotation", "value": "±", "note": "法国是否轮换护Mbappé" },
          { "label": "early_goal", "value": "±", "note": "法国早进则大胜" },
          { "label": "SWE_block", "value": "±", "note": "瑞典摆深防能撑多久" } ] }
      },
      "players": {
        "home": [
          { "name": "Kylian Mbappé", "pos": "ST", "status": "HOT", "note": "队长,反击爆点" },
          { "name": "Ousmane Dembélé", "pos": "RW", "status": "OK", "note": "边路速度" },
          { "name": "Aurélien Tchouaméni", "pos": "CM", "status": "KEY", "note": "中场屏障" },
          { "name": "Mike Maignan", "pos": "GK", "status": "OK", "note": "门将" } ],
        "away": [
          { "name": "Alexander Isak", "pos": "ST", "status": "KEY", "note": "终结点" },
          { "name": "Viktor Gyökeres", "pos": "ST", "status": "OK", "note": "冲击+反击" },
          { "name": "Emil Forsberg", "pos": "AM", "status": "OK", "note": "创造" },
          { "name": "瑞典后防", "pos": "DF", "status": "QUEST", "note": "挡法国速度有压力" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank FRA#2 SWE#22;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型70% vs 庄家74.4%:法国明显favored,贴市场略留淘汰赛方差" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 70.0 / 19.0 / 11.0" } ],
      "result": { "status": "FT", "home_goals": 3, "away_goals": 0, "scoreline": "3 - 0",
        "scorers": [ { "min": "—", "team": "FRA", "player": "Kylian Mbappé", "type": "梅开二度" }, { "min": "—", "team": "FRA", "player": "法国", "type": "第三球" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "法国3-0瑞典,Mbappé梅开二度,常规时间碾压晋级。模型押法国(70%)→方向对,但比分又低估(预测1.95→3球)", "source": "NBC/多源" },
      "review": { "verdict": "HIT",
        "headline": "★晋级方向对:法国70%→3-0,Mbappé双响。瑞典被零封,但强队进球又略低估",
        "hits": [ "★晋级方向对：法国70%→赢 ✓（真盲测）", "Mbappé梅开二度,火力兑现", "瑞典被碾压零封(clean sheet判对)" ],
        "misses": [ "比分低估:预测法国1.95球→实际3球,强队进球又偏保守" ],
        "model_lesson": "法国实力碾压兑现。又一个强队进球略低估(和之前豪门井喷一类),但方向+晋级稳" }
    },
    {
      "id": "WC2026_R32_07", "kickoff_cst": "2026-06-30 21:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "MEX", "name_zh": "墨西哥", "flag": "🇲🇽", "fifa_rank": 14 },
      "away": { "code": "ECU", "name_zh": "厄瓜多尔", "flag": "🇪🇨", "fifa_rank": 23 },
      "venue": "Estadio Azteca, 墨西哥城", "altitude_m": 2200, "temp_c": 22, "humidity_pct": 50, "referee": "未公布",
      "headline": "墨西哥40%/平32%/厄瓜多尔28%：东道主主场+高原(3-0捷克) vs 厄瓜多尔爆冷势头(2-1淘汰德国)。庄家墨西哥43.7%,接近五五,低比分易进加时",
      "probabilities": { "home_win": 40.0, "draw": 32.0, "away_win": 28.0 },
      "expected_goals": { "home": 1.15, "away": 0.90 }, "expected_score": "1 : 0",
      "over_2_5": 40.0, "btts": 44.0, "clean_sheet_home": 38.0, "confidence": 53,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.50, "items": [
          { "label": "home_altitude", "value": "+", "note": "阿兹台克2200m=墨西哥主场,东道主+海拔双buff" },
          { "label": "MEX_form", "value": "+", "note": "墨西哥3-0捷克状态好,Jiménez/Quiñones有产出" },
          { "label": "crowd", "value": "+", "note": "主场声浪+裁判心理" } ] },
        "home_risk": { "score": -0.80, "items": [
          { "label": "ECU_momentum", "value": "-", "note": "★厄瓜多尔2-1爆冷淘汰德国,势头+信心爆棚" },
          { "label": "ECU_defense", "value": "-", "note": "厄瓜多尔防守扎实(Caicedo/Pacho),低比分能限制墨西哥" },
          { "label": "Valencia", "value": "-", "note": "Enner Valencia/Plata反击有威胁" } ] },
        "away_upset_path": { "score": 0.70, "items": [
          { "label": "vs_market", "value": "★分歧", "note": "庄家墨西哥43.7%/厄24.7%,我给厄28%——爆冷势头+铁防,留更多空间" },
          { "label": "Caicedo_engine", "value": "+", "note": "Moisés Caicedo中场统治+反击" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "low_scoring", "value": "-", "note": "★厄瓜多尔铁防+生死战谨慎→低比分,易进加时" },
          { "label": "altitude_fatigue", "value": "±", "note": "厄瓜多尔(基多高原球队)反而适应海拔,buff打折" },
          { "label": "first_goal", "value": "±", "note": "谁先进谁掌握主动" } ] }
      },
      "players": {
        "home": [
          { "name": "Raúl Jiménez", "pos": "ST", "status": "OK", "note": "支点前锋" },
          { "name": "Julián Quiñones", "pos": "FW", "status": "OK", "note": "已进球" },
          { "name": "César Montes", "pos": "CB", "status": "OK", "note": "后防" },
          { "name": "Edson Álvarez", "pos": "CM", "status": "KEY", "note": "中场拦截" } ],
        "away": [
          { "name": "Moisés Caicedo", "pos": "CM", "status": "KEY", "note": "切尔西,中场引擎" },
          { "name": "Enner Valencia", "pos": "ST", "status": "OK", "note": "经验+终结" },
          { "name": "Gonzalo Plata", "pos": "WG", "status": "OK", "note": "反击速度" },
          { "name": "Willian Pacho", "pos": "CB", "status": "KEY", "note": "铁防核心" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank MEX#14 ECU#23;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型40/32/28 vs 庄家43.7/31.6/24.7:厄瓜多尔爆冷势头+铁防,我给更多空间;低比分易进加时" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 40.0 / 32.0 / 28.0" } ],
      "result": { "status": "FT", "home_goals": 2, "away_goals": 0, "scoreline": "2 - 0",
        "scorers": [ { "min": "22'", "team": "MEX", "player": "Julián Quiñones", "type": "先拔头筹" }, { "min": "31'", "team": "MEX", "player": "Raúl Jiménez", "type": "扩大领先" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "墨西哥2-0厄瓜多尔,东道主主场早段两球零封晋级。模型押墨西哥(40%三选一)→方向对,东道主主场+高原判对;但我逆庄家给厄瓜多尔的爆冷空间这次没成", "source": "FIFA/ESPN" },
      "review": { "verdict": "HIT",
        "headline": "★晋级方向对:墨西哥40%→2-0。东道主主场兑现,但逆庄家看好厄瓜多尔爆冷这次没成",
        "hits": [ "★晋级方向对：墨西哥40%(三选一最高)→赢 ✓（真盲测）", "东道主主场+阿兹台克高原判对", "Quiñones/Jiménez上半场两球,墨西哥早进球控场" ],
        "misses": [ "★逆庄家没成:我给厄瓜多尔28%(>庄家24.7%)的爆冷空间→厄被零封,墨西哥主场浇灭爆冷势头", "比分低估:墨西哥2球vs预测1.15" ],
        "model_lesson": "【逆庄家这次错·诚实记】接6/29爆冷势头我给厄瓜多尔更多空间,但墨西哥东道主主场+早进球2-0零封——爆冷不是每场都有,主场强队顶住时逆庄家会打脸。主押墨西哥对,平衡了" }
    }
  ]
};
