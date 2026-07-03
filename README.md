# 世界杯 2026 · AI 预测终端 (WCP Terminal)

用一个自己写的 AI 模型预测 2026 世界杯的**每一场**——赛前给预测、赛后诚实复盘,数据全公开。这是 YouTube 频道「**Afu 的 AI 沙盒日记**」背后那套模型和仪表盘的开源版。

> 📺 频道 & 每日复盘视频:https://www.youtube.com/@AI沙盒日记

## 这是什么
- 基于**泊松分布 + 蒙特卡洛模拟**的足球赛果预测模型(把每场球按概率反复模拟一万遍)。
- **淘汰赛版**:只预测 90 分钟内谁赢;90 分钟打平就进加时/点球,这部分当随机、**不预测**(但会给出"拖进加时的概率")。
- 一个终端风格的仪表盘 `index.html`:每场的胜平负概率、期望比分、最可能比分 TOP6、以及**模型 vs 庄家去水盘口**的对比。

## 目录
| 文件 | 说明 |
|---|---|
| `index.html` | 仪表盘,双击用浏览器打开即可 |
| `simulate.py` ~ `simulate_v5.py` | 模型迭代史(泊松 → 加权 λ → Dixon-Coles → 对手强度门槛 → 淘汰赛加时/点球修正) |
| `data/matches-*.js` | 每天一份的预测 + 赛后复盘数据 |
| `fetch_odds.py` | 拉实时博彩盘口(需自己的 API key) |
| `fetch_weather.py` | 天气数据 |
| `SOURCES.md` | 数据来源 |

## 怎么跑
1. **看仪表盘**:直接双击 `index.html`。
2. **跑模型**:`python simulate.py`
3. **拉实时盘口(可选)**:去 https://the-odds-api.com 申请免费 key,把 `odds_config.example.py` 复制成 `odds_config.py` 填进去,再 `python fetch_odds.py`。

## ⚠️ 免责声明 / Disclaimer
个人技术演示,所有预测仅代表模型与个人观点,**不构成任何投注建议**,请理性看球。
Personal tech/stats project. Predictions are NOT betting advice.
