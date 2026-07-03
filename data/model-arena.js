// 双模型擂台数据 · v1 简单平均 vs v3 加权 λ
// ════════════════════════════════════════════════════════════════
// 数字来自 simulate_compare.py（同一份历史数据，两种加权法的控制变量实验）
// call = 模型最高概率结果(W主胜/D平/L客胜)；hit = 是否与真实方向一致
// 每打完一场，往 matches 里加一条；工具的"模型擂台"tab自动重算总分
// ════════════════════════════════════════════════════════════════

window.WCP_ARENA = {
  note: "v1=近期进失球简单平均；v3=按时间近度×对手强度×赛事级别加权。同输入、同泊松，只比加权方法。",
  matches: [
    {
      date: "2026-06-11", label: "🇲🇽 墨西哥 vs 南非 🇿🇦", actual: "W", score: "2-0",
      v1: { hw: 37.8, dr: 44.2, aw: 18.0, call: "D", hit: false },
      v3: { hw: 48.0, dr: 41.4, aw: 10.6, call: "W", hit: true }
    },
    {
      date: "2026-06-11", label: "🇰🇷 韩国 vs 捷克 🇨🇿", actual: "W", score: "2-1",
      v1: { hw: 34.6, dr: 16.7, aw: 48.7, call: "L", hit: false },
      v3: { hw: 30.1, dr: 20.5, aw: 49.4, call: "L", hit: false }
    },
    {
      date: "2026-06-12", label: "🇨🇦 加拿大 vs 波黑 🇧🇦", actual: "D", score: "1-1",
      v1: { hw: 58.0, dr: 34.4, aw: 7.6, call: "W", hit: false },
      v3: { hw: 44.0, dr: 44.8, aw: 11.2, call: "D", hit: true }
    },
    {
      date: "2026-06-12", label: "🇺🇸 美国 vs 巴拉圭 🇵🇾", actual: "W", score: "4-1",
      v1: { hw: 37.2, dr: 24.7, aw: 38.1, call: "L", hit: false },
      v3: { hw: 44.9, dr: 26.1, aw: 29.0, call: "W", hit: true }
    },
    {
      date: "2026-06-13", label: "🇶🇦 卡塔尔 vs 瑞士 🇨🇭", actual: "D", score: "1-1",
      v1: { hw: 39.7, dr: 28.1, aw: 32.3, call: "W", hit: false },
      v3: { hw: 17.2, dr: 24.2, aw: 58.6, call: "L", hit: false }
    },
    {
      date: "2026-06-13", label: "🇧🇷 巴西 vs 摩洛哥 🇲🇦", actual: "D", score: "1-1",
      v1: { hw: 17.9, dr: 18.3, aw: 63.8, call: "L", hit: false },
      v3: { hw: 38.1, dr: 24.2, aw: 37.7, call: "W", hit: false }
    },
    {
      date: "2026-06-13", label: "🇭🇹 海地 vs 苏格兰 🏴", actual: "L", score: "0-1",
      v1: { hw: 19.3, dr: 21.0, aw: 59.7, call: "L", hit: true },
      v3: { hw: 22.2, dr: 29.7, aw: 48.1, call: "L", hit: true }
    },
    {
      date: "2026-06-13", label: "🇦🇺 澳大利亚 vs 土耳其 🇹🇷", actual: "W", score: "2-0",
      v1: { hw: 43.4, dr: 26.3, aw: 30.3, call: "W", hit: true },
      v3: { hw: 37.7, dr: 32.9, aw: 29.5, call: "W", hit: true }
    },
    {
      date: "2026-06-14", label: "🇩🇪 德国 vs 库拉索 🇨🇼", actual: "W", score: "7-1",
      v1: { hw: 90.7, dr: 7.2, aw: 2.1, call: "W", hit: true },
      v3: { hw: 95.1, dr: 4.0, aw: 0.9, call: "W", hit: true }
    },
    {
      date: "2026-06-14", label: "🇳🇱 荷兰 vs 日本 🇯🇵", actual: "D", score: "2-2",
      v1: { hw: 12.2, dr: 36.4, aw: 51.3, call: "L", hit: false },
      v3: { hw: 8.7, dr: 40.8, aw: 50.5, call: "L", hit: false }
    },
    {
      date: "2026-06-14", label: "🇨🇮 科特迪瓦 vs 厄瓜多尔 🇪🇨", actual: "W", score: "1-0",
      v1: { hw: 43.7, dr: 45.9, aw: 10.5, call: "D", hit: false },
      v3: { hw: 28.5, dr: 54.9, aw: 16.7, call: "D", hit: false }
    },
    {
      date: "2026-06-14", label: "🇸🇪 瑞典 vs 突尼斯 🇹🇳", actual: "W", score: "5-1",
      v1: { hw: 61.1, dr: 20.3, aw: 18.6, call: "W", hit: true },
      v3: { hw: 62.2, dr: 24.3, aw: 13.5, call: "W", hit: true }
    }
  ]
};
