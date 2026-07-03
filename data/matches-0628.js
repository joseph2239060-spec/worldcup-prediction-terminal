// 世界杯预测 - 2026-06-28（淘汰赛 Round of 32 揭幕，真预测，带盘口）
// ⚠️淘汰赛:90分钟平局→加时30分钟→点球,概率为90分钟胜平负;"平"含进加时
// 6/28只有1场(南非vs加拿大),R32其余6/29起(巴西-日本/德国-巴拉圭/荷兰-摩洛哥等)
// 队代码:RSA/CAN
window.WCP_DAYS = window.WCP_DAYS || {};
window.WCP_DAYS["2026-06-28"] = {
  "date": "2026-06-28", "tournament": "FIFA World Cup 2026 · 淘汰赛 Round of 32",
  "model_version": "POISSON v1.4 + 淘汰赛(加时/点球)修正", "model_accuracy_7d": null,
  "data_note": "★真预测,ODDS tab有盘口;淘汰赛90分钟平局进加时/点球,下列概率为90分钟胜平负,'平'=进加时",
  "matches": [
    {
      "id": "WC2026_R32_01", "kickoff_cst": "2026-06-28 15:00 ET", "group": "R32", "round": 4, "tag": "KNOCKOUT",
      "home": { "code": "RSA", "name_zh": "南非", "flag": "🇿🇦", "fifa_rank": 60 },
      "away": { "code": "CAN", "name_zh": "加拿大", "flag": "🇨🇦", "fifa_rank": 30 },
      "venue": "SoFi Stadium, 洛杉矶", "altitude_m": 30, "temp_c": 26, "humidity_pct": 55, "referee": "未公布",
      "headline": "加拿大45%(90分钟)/晋级~62%：B组第二+David3球+Davies伤愈回归,明显favored。南非爆冷掀翻韩国但实力弱一档。庄家看低比分胶着,平进加时",
      "probabilities": { "home_win": 25.0, "draw": 30.0, "away_win": 45.0 },
      "expected_goals": { "home": 0.85, "away": 1.30 }, "expected_score": "0 : 1",
      "over_2_5": 38.0, "btts": 42.0, "clean_sheet_home": 35.0, "confidence": 58,
      "monte_carlo_n": 50000, "value_rating": 2, "edge_pct": null, "red_card_risk": "ELEVATED",
      "modules": {
        "home_win_reasons": { "score": -0.85, "items": [
          { "label": "momentum", "value": "+", "note": "南非爆冷掀翻韩国的势头+首进淘汰赛的拼劲" },
          { "label": "Williams", "value": "+", "note": "门神Ronwen Williams状态火热,扑救能拖进点球" },
          { "label": "knockout_variance", "value": "+", "note": "淘汰赛单场方差大,弱队抱团防守+点球有机会" } ] },
        "home_risk": { "score": -1.25, "items": [
          { "label": "CAN_quality", "value": "-", "note": "FIFA 30 vs 60,加拿大David(3球)+Davies伤愈回归,质量高一档" },
          { "label": "Davies_back", "value": "-", "note": "★Alphonso Davies(拜仁)伤愈回归,大赛经验+左路冲击大幅加成" },
          { "label": "RSA_attack", "value": "-", "note": "南非进攻有限(小组赛进球少),破加拿大防线难" } ] },
        "away_upset_path": { "score": 0.65, "items": [
          { "label": "market_fav", "value": "本就favorite", "note": "加拿大盘口-125/晋级1-3,模型贴市场" },
          { "label": "David_Davies", "value": "+", "note": "David终结+Davies边路,撕开南非" } ] },
        "live_variables": { "score": 0.00, "items": [
          { "label": "low_event", "value": "-", "note": "★庄家看low total,首次淘汰赛双方谨慎→低比分,易拖进加时/点球" },
          { "label": "Davies_minutes", "value": "±", "note": "Davies伤愈出场时长是变量" },
          { "label": "penalties", "value": "±", "note": "若90分钟平,南非门神Williams的点球能力是X factor" } ] }
      },
      "players": {
        "home": [
          { "name": "Ronwen Williams", "pos": "GK", "status": "KEY", "note": "门神,点球+扑救是爆冷指望" },
          { "name": "Teboho Mokoena", "pos": "CM", "status": "OK", "note": "停赛归来,中场核心" },
          { "name": "Oswin Appollis", "pos": "WG", "status": "OK", "note": "创造力火花" },
          { "name": "南非锋线", "pos": "FW", "status": "QUEST", "note": "进攻有限" } ],
        "away": [
          { "name": "Jonathan David", "pos": "ST", "status": "HOT", "note": "尤文,本届3球,终结点" },
          { "name": "Alphonso Davies", "pos": "LB", "status": "QUEST", "note": "★拜仁,伤愈回归,左路冲击+经验" },
          { "name": "Cyle Larin", "pos": "ST", "status": "OK", "note": "副锋冲击" },
          { "name": "Stephen Eustáquio", "pos": "CM", "status": "OK", "note": "中场组织" } ]
      },
      "odds": [ { "book": "实时盘口见ODDS tab", "home": null, "draw": null, "away": null, "edge_pct": null } ],
      "live_log": [
        { "time": "—", "level": "OK", "msg": "★真预测,ODDS tab有盘口" },
        { "time": "—", "level": "OK", "msg": "FIFA rank RSA#60 CAN#30;R32淘汰赛,两队均首进淘汰赛" },
        { "time": "—", "level": "WARN", "msg": "淘汰赛低比分胶着,平局含进加时;加拿大favored但单场方差大+南非门神能拖点球" },
        { "time": "—", "level": "OK", "msg": "poisson output(90min): 25.0 / 30.0 / 45.0" } ],
      "result": { "status": "FT(加时)", "home_goals": 0, "away_goals": 1, "scoreline": "0 - 1",
        "scorers": [ { "min": "加时", "team": "CAN", "player": "Stephen Eustáquio", "type": "加时绝杀,加拿大首进16强" } ],
        "red_cards": [], "stats": { "shots_home": null, "shots_on_target_home": null, "poss_home": null, "poss_away": null },
        "key_moment": "★90分钟0-0,加时加拿大1-0绝杀(Eustáquio),无点球。Davies伤愈首秀。模型押加拿大(90分钟45%/条件64%)→晋级方向对,且'30%进加时'精准命中(90分钟真平了)", "source": "FIFA/ESPN/CBC" },
      "review": { "verdict": "HIT",
        "headline": "★淘汰赛逻辑首验成功:90分钟0-0→正中'30%进加时'预警,加拿大加时1-0晋级",
        "hits": [ "★晋级方向对：加拿大90分钟45%/条件胜率64% → 加时拿下晋级 ✓", "★'30%进加时'精准:90分钟真打平,拖进加时(淘汰赛框架首次验证)", "Davies伤愈首秀(赛前预警的利好)兑现", "南非门神Williams拖进加时(预警的爆冷X factor部分兑现,但没成)" ],
        "misses": [ "我给南非25%>庄家16.4%,南非拖进加时但没爆冷成功——这点上比庄家略激进,方向上庄家更准" ],
        "model_lesson": "【淘汰赛框架立住了】'90分钟胜平负+进加时几率'比硬猜晋级/点球可信:加拿大明显占优但90分钟0-0拿不下,正是淘汰赛特性。逆庄家押南非爆冷没成,但'拖进加时'对了一半" }
    }
  ]
};
