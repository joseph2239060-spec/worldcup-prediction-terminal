// 世界杯预测 - 2026-07-02（淘汰赛 Round of 32，真预测，带盘口）
// ⚠️淘汰赛:90分钟平→加时/点球,下列为90分钟胜平负,"平"=进加时;点球随机·模型不算
// 日期/时间由 The Odds API commence_time(UTC)换算ET确定
// 队代码:ESP/AUT POR/CRO SUI/ALG
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-07-02"] = {
  "date": "2026-07-02", "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 32",
  "model_version": "POISSON v1.4 + 淘汰赛(加时/点球)修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有48家盘口;淘汰赛90分钟胜平负,'平'=进加时;点球随机不预测",
  "matches": [
    {
      "id": "WC2026_R32_11", "kickoff_cst": "2026-07-02 15:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "ESP", "name_zh": "西班牙", "flag": "🇪🇸", "fifa_rank": 3 },
      "away": { "code": "AUT", "name_zh": "奥地利", "flag": "🇦🇹", "fifa_rank": 23 },
      "venue": "SoFi Stadium, 洛杉矶", "altitude_m": 30, "temp_c": 29, "humidity_pct": 60, "referee": "未公布",
      "headline": "西班牙70%(90分钟)：夺冠热门,Yamal/Pedri传控+小组赛最强。奥地利组织性强但弱一档。庄家给西班牙75%,我贴市场略留淘汰赛方差",
      "probabilities": { "home_win": 70.0, "draw": 19.0, "away_win": 11.0 },
      "expected_goals": { "home": 1.85, "away": 0.80 }, "expected_score": "2 : 0",
      "over_2_5": 52.0, "btts": 40.0, "clean_sheet_home": 44.0, "confidence": 62,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "LOW",
      "modules": {
        "home_win_reasons": { "score": 1.25, "items": [
          { "label": "ESP_quality", "value": "+", "note": "夺冠热门,Yamal/Pedri/Nico Williams传控体系,小组赛最强" },
          { "label": "rank_gap", "value": "+", "note": "FIFA 3 vs 23,整体高一档" },
          { "label": "depth", "value": "+", "note": "西班牙阵容深度,淘汰赛余地大" } ] },
        "home_risk": { "score": -0.60, "items": [
          { "label": "AUT_organize", "value": "-", "note": "奥地利组织性强+Sabitzer,3-3阿尔及利亚显示能打对攻" },
          { "label": "ESP_wasteful", "value": "-", "note": "西班牙偶尔控球无果(0-0佛得角过)" },
          { "label": "knockout_variance", "value": "-", "note": "淘汰赛单场方差" } ] },
        "away_upset_path": { "score": -0.10, "items": [
          { "label": "vs_market", "value": "本就favorite", "note": "庄家西班牙74.6%,我给70%贴市场略留方差" },
          { "label": "Sabitzer_setpiece", "value": "+", "note": "Sabitzer组织+奥地利定位球偷袭" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "ESP_open", "value": "±", "note": "西班牙能否打穿奥地利密集防守" },
          { "label": "first_goal", "value": "±", "note": "西班牙早进则大胜" },
          { "label": "rotation", "value": "±", "note": "西班牙轮换幅度" } ] }
      },
      "players": {
        "home": [
          { "name": "Lamine Yamal", "pos": "RW", "status": "HOT", "note": "巴萨,边路爆点" },
          { "name": "Pedri", "pos": "CM", "status": "KEY", "note": "节拍器" },
          { "name": "Nico Williams", "pos": "LW", "status": "OK", "note": "速度" },
          { "name": "Álvaro Morata", "pos": "ST", "status": "OK", "note": "终结" } ],
        "away": [
          { "name": "Marcel Sabitzer", "pos": "AM", "status": "KEY", "note": "中前场核心" },
          { "name": "Christoph Baumgartner", "pos": "AM", "status": "OK", "note": "插上" },
          { "name": "Marko Arnautović", "pos": "ST", "status": "OK", "note": "支点" },
          { "name": "奥地利后防", "pos": "DF", "status": "QUEST", "note": "挡西班牙传控有压力" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank ESP#3 AUT#23;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型70% vs 庄家74.6%:西班牙明显favored,贴市场略留淘汰赛方差" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 70.0 / 19.0 / 11.0" } ],
      "result": { "status": "FT", "home_goals": 3, "away_goals": 0, "scoreline": "3 - 0",
        "scorers": [ { "min": "—", "team": "ESP", "player": "西班牙", "type": "3-0碾压零封晋级" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "西班牙3-0奥地利,碾压零封晋级。模型押西班牙(70%)→方向对,但比分又低估(预测1.85→3球)", "source": "多源核实" },
      "review": { "verdict": "HIT",
        "headline": "★晋级方向对:西班牙70%→3-0碾压。夺冠热门兑现,但强队进球又低估",
        "hits": [ "★晋级方向对：西班牙70%→赢 ✓（真盲测）", "西班牙传控碾压+零封", "奥地利被压制无还手" ],
        "misses": [ "比分低估:预测西班牙1.85球→实际3球" ],
        "model_lesson": "西班牙夺冠热门碾压兑现。又一个强队进球低估,方向稳" }
    },
    {
      "id": "WC2026_R32_12", "kickoff_cst": "2026-07-02 19:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "POR", "name_zh": "葡萄牙", "flag": "🇵🇹", "fifa_rank": 5 },
      "away": { "code": "CRO", "name_zh": "克罗地亚", "flag": "🇭🇷", "fifa_rank": 10 },
      "venue": "BMO Field, 多伦多", "altitude_m": 76, "temp_c": 26, "humidity_pct": 62, "referee": "未公布",
      "headline": "两豪门:葡萄牙46%/平29%/克罗地亚25%。葡萄牙火力(B费/Leão)vs克罗地亚Modrić韧性+淘汰赛经验(2022亚军/点球王)。庄家葡50.9%,我给克更多——最易进点球",
      "probabilities": { "home_win": 46.0, "draw": 29.0, "away_win": 25.0 },
      "expected_goals": { "home": 1.40, "away": 1.05 }, "expected_score": "1 : 1",
      "over_2_5": 48.0, "btts": 52.0, "clean_sheet_home": 30.0, "confidence": 53,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.55, "items": [
          { "label": "POR_firepower", "value": "+", "note": "葡萄牙B费/Leão/C罗火力,纸面略占优" },
          { "label": "rank_edge", "value": "+", "note": "FIFA 5 vs 10,略高" },
          { "label": "CRO_age", "value": "+", "note": "克罗地亚中场偏老,90分钟体能可能下滑" } ] },
        "home_risk": { "score": -0.75, "items": [
          { "label": "Modric_experience", "value": "-", "note": "★Modrić/Kovačić控场+克罗地亚淘汰赛经验(2022亚军)" },
          { "label": "CRO_knockout_king", "value": "-", "note": "克罗地亚是点球大战之王(2018/2022多次点球晋级)" },
          { "label": "POR_bore", "value": "-", "note": "葡萄牙0-0哥伦比亚过,进攻偶尔卡壳" } ] },
        "away_upset_path": { "score": 0.75, "items": [
          { "label": "vs_market", "value": "★分歧", "note": "庄家葡50.9%/克21%,我给克25%——克罗地亚淘汰赛韧性被低估" },
          { "label": "drag_to_pen", "value": "+", "note": "克罗地亚擅长磨进点球,那是它的主场" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "tactical", "value": "±", "note": "★两豪门博弈,谁先进球+克罗地亚能否拖住节奏" },
          { "label": "extra_time_likely", "value": "-", "note": "势均力敌+克擅长磨→易进加时/点球" },
          { "label": "Ronaldo_minutes", "value": "±", "note": "C罗出场时长+状态" } ] }
      },
      "players": {
        "home": [
          { "name": "Bruno Fernandes", "pos": "AM", "status": "KEY", "note": "调度核心" },
          { "name": "Rafael Leão", "pos": "LW", "status": "OK", "note": "突破爆点" },
          { "name": "Cristiano Ronaldo", "pos": "ST", "status": "QUEST", "note": "终结,时长存疑" },
          { "name": "Rúben Dias", "pos": "CB", "status": "OK", "note": "后防核心" } ],
        "away": [
          { "name": "Luka Modrić", "pos": "CM", "status": "KEY", "note": "节拍器,控场核心" },
          { "name": "Mateo Kovačić", "pos": "CM", "status": "OK", "note": "中场搭档" },
          { "name": "Andrej Kramarić", "pos": "FW", "status": "OK", "note": "终结" },
          { "name": "克罗地亚门将", "pos": "GK", "status": "KEY", "note": "点球大战利器" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank POR#5 CRO#10;R32淘汰赛,两豪门" },
        { "time": "—", "level": "WARN", "msg": "★模型46/29/25 vs 庄家50.9/28.1/21:给克罗地亚更多(淘汰赛韧性+点球王);最易进点球" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 46.0 / 29.0 / 25.0" } ],
      "result": { "status": "FT", "home_goals": 2, "away_goals": 1, "scoreline": "2 - 1",
        "scorers": [ { "min": "53'", "team": "CRO", "player": "Ivan Perišić", "type": "克罗地亚先进" }, { "min": "70'", "team": "POR", "player": "Cristiano Ronaldo(点球)", "type": "VAR点球扳平" }, { "min": "尾段", "team": "POR", "player": "Gonçalo Ramos", "type": "头球绝杀" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "葡萄牙2-1克罗地亚,Ramos尾段头球绝杀晋级。克罗地亚Perišić先进,C罗VAR点球扳平,Ramos绝杀。模型押葡萄牙(46%最高)→方向对,逆庄家给克25%空间也体现(克领先过),但'最易进点球'没兑现(常规绝杀)", "source": "FIFA/ESPN" },
      "review": { "verdict": "HIT",
        "headline": "★晋级方向对:葡萄牙46%→2-1绝杀。逆庄家给克空间对(克领先过),但'最易进点球'落空(Ramos常规绝杀)",
        "hits": [ "★晋级方向对：葡萄牙46%(三选一最高)→晋级 ✓（真盲测）", "逆庄家:给克罗地亚25%>庄家21%,克Perišić先进领先过,确实接近", "C罗点球+Ramos绝杀,葡萄牙火力兑现" ],
        "misses": [ "★'最易进点球'没兑现:Ramos常规时间头球绝杀,没拖进点球(不像7/1比利时)" ],
        "model_lesson": "押葡萄牙对+逆庄家给克空间对(克领先),但进点球预警落空——favorite常规绝杀了。进点球预警7/1比利时中、这场没中,不是每场都进,别过度自信" }
    },
    {
      "id": "WC2026_R32_13", "kickoff_cst": "2026-07-02 23:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "SUI", "name_zh": "瑞士", "flag": "🇨🇭", "fifa_rank": 19 },
      "away": { "code": "ALG", "name_zh": "阿尔及利亚", "flag": "🇩🇿", "fifa_rank": 38 },
      "venue": "BC Place, 温哥华", "altitude_m": 3, "temp_c": 19, "humidity_pct": 68, "referee": "未公布",
      "headline": "瑞士47%/平28%/阿尔及利亚25%：瑞士Xhaka/Embolo稳健(3-1加拿大)vs阿尔及利亚速度(3-3奥地利对攻)。庄家瑞士51%,接近,易进加时",
      "probabilities": { "home_win": 47.0, "draw": 28.0, "away_win": 25.0 },
      "expected_goals": { "home": 1.30, "away": 1.05 }, "expected_score": "1 : 1",
      "over_2_5": 48.0, "btts": 52.0, "clean_sheet_home": 30.0, "confidence": 53,
      "monte_carlo_n": 50000, "value_rating": 3, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": 0.50, "items": [
          { "label": "SUI_solid", "value": "+", "note": "瑞士Xhaka/Embolo稳健,3-1加拿大晋级,组织好" },
          { "label": "Akanji", "value": "+", "note": "Akanji/Sommer后防轴心稳" },
          { "label": "rank_edge", "value": "+", "note": "FIFA 19 vs 38,略占优" } ] },
        "home_risk": { "score": -0.70, "items": [
          { "label": "ALG_speed", "value": "-", "note": "★阿尔及利亚速度+非洲身体,3-3奥地利显示对攻能力" },
          { "label": "Amoura_Mahrez", "value": "-", "note": "Amoura/Mahrez反击爆点" },
          { "label": "SUI_pace", "value": "-", "note": "瑞士节奏偏慢,怕被速度冲击" } ] },
        "away_upset_path": { "score": 0.60, "items": [
          { "label": "vs_market", "value": "★分歧小", "note": "庄家瑞士51%/阿25%,我给阿25%——接近,给阿反击空间" },
          { "label": "Mahrez_counter", "value": "+", "note": "Mahrez/Amoura反击+定位球" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "tempo", "value": "±", "note": "★瑞士稳守 vs 阿尔及利亚提速,谁控节奏" },
          { "label": "extra_time_likely", "value": "-", "note": "实力接近→易进加时" },
          { "label": "first_goal", "value": "±", "note": "先进球方掌握主动" } ] }
      },
      "players": {
        "home": [
          { "name": "Granit Xhaka", "pos": "CM", "status": "KEY", "note": "中场核心" },
          { "name": "Breel Embolo", "pos": "ST", "status": "OK", "note": "终结" },
          { "name": "Manuel Akanji", "pos": "CB", "status": "KEY", "note": "后防" },
          { "name": "Gregor Kobel", "pos": "GK", "status": "OK", "note": "门将" } ],
        "away": [
          { "name": "Mohamed Amoura", "pos": "FW", "status": "KEY", "note": "锋线爆点" },
          { "name": "Riyad Mahrez", "pos": "WG", "status": "OK", "note": "边路创造" },
          { "name": "Ismaël Bennacer", "pos": "CM", "status": "OK", "note": "中场" },
          { "name": "阿尔及利亚后防", "pos": "DF", "status": "OK", "note": "组织" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有48家盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank SUI#19 ALG#38;R32淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "★模型47/28/25 vs 庄家51/26.6/22.4:接近,给阿尔及利亚反击空间;易进加时" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 47.0 / 28.0 / 25.0" } ],
      "result": { "status": "FT", "home_goals": 2, "away_goals": 0, "scoreline": "2 - 0",
        "scorers": [ { "min": "10'", "team": "SUI", "player": "Breel Embolo", "type": "早段破门" }, { "min": "46'", "team": "SUI", "player": "Dan Ndoye", "type": "半场后扩大" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "瑞士2-0阿尔及利亚,Embolo/Ndoye各入一球,干净晋级。模型押瑞士(47%最高)→方向对,但'易进加时'没兑现(2-0常规解决)", "source": "FIFA/ESPN" },
      "review": { "verdict": "HIT",
        "headline": "★晋级方向对:瑞士47%→2-0。稳健零封晋级,但'易进加时'落空(干净解决)",
        "hits": [ "★晋级方向对：瑞士47%(三选一最高)→晋级 ✓（真盲测）", "Embolo/Ndoye进球,瑞士组织+零封判对", "顶住阿尔及利亚速度反击" ],
        "misses": [ "'易进加时'没兑现:瑞士2-0干净解决", "逆庄家给阿25%没成:阿尔及利亚被零封" ],
        "model_lesson": "瑞士favored兑现,干净利落。这天(7/2)favorite全部常规时间解决,'易进加时/点球'两场都落空——和7/1那种爆冷/逆转日形成对比,淘汰赛也有'强队全兑现'的平淡日" }
    }
  ]
};
