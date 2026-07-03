"""
WCP TERMINAL · 预测引擎 v4 · Dixon-Coles 平局修正 + favorite 收缩
─────────────────────────────────────────────────────────────────────
实测发现(16场)：模型把"平局"当首选 0 次，实际平局 8 场(50%)。
独立泊松对 0-0/1-1 这类低分平局系统性低估——这是 Dixon-Coles(1997)
那篇经典论文专门修的病。

v4 两个修正：
  1. Dixon-Coles τ 修正：用 ρ<0 拉高 0-0/1-1、压低 1-0/0-1 → 平局概率↑
  2. favorite 收缩：把双方 λ 向中点收缩(k<1)，因为实测模型对强队过度自信
     (西班牙86%/伊朗71.6%都被逼平)。收缩降低极端favorite、抬高平局与冷门。

运行：python simulate_v4.py
"""

import math, sys, os
if os.name == 'nt':
    os.system('')
    try: sys.stdout.reconfigure(encoding='utf-8')
    except Exception: pass

GREEN='\033[92m'; RED='\033[91m'; YELLOW='\033[93m'; AMBER='\033[38;5;208m'
CYAN='\033[96m'; WHITE='\033[97m'; GRAY='\033[90m'; BOLD='\033[1m'; END='\033[0m'

# ── 可调参数 ──
RHO = -0.15      # Dixon-Coles 低分修正(负=拉高平局)
SHRINK = 0.78    # favorite 收缩系数(λ 向中点收缩, <1=压平实力差)

# 16 场已打完: (λ_home, λ_away, 真实W/D/L, 标签)
MATCHES = [
    (2.0, 0.7, "W", "墨西哥 vs 南非"),
    (1.35, 1.15, "W", "韩国 vs 捷克"),
    (1.55, 0.62, "D", "加拿大 vs 波黑"),
    (1.58, 1.48, "W", "美国 vs 巴拉圭"),
    (0.43, 1.85, "D", "卡塔尔 vs 瑞士"),
    (1.41, 1.81, "D", "巴西 vs 摩洛哥"),
    (1.0, 1.44, "L", "海地 vs 苏格兰"),
    (0.8, 1.58, "W", "澳大利亚 vs 土耳其"),
    (2.75, 0.42, "W", "德国 vs 库拉索"),
    (0.93, 0.98, "D", "荷兰 vs 日本"),
    (0.9, 0.7, "W", "科特迪瓦 vs 厄瓜多尔"),
    (1.55, 0.92, "W", "瑞典 vs 突尼斯"),
    (2.35, 0.45, "D", "西班牙 vs 佛得角"),
    (1.65, 0.95, "D", "比利时 vs 埃及"),
    (0.65, 1.55, "D", "沙特 vs 乌拉圭"),
    (1.83, 0.43, "D", "伊朗 vs 新西兰"),
]

def pmf(k, lam):
    return math.exp(-lam) * lam**k / math.factorial(k)

def shrink(lh, la, k):
    """向中点收缩，压低过度自信的实力差"""
    m = (lh + la) / 2.0
    return m + k*(lh - m), m + k*(la - m)

def dc_tau(h, a, lh, la, rho):
    """Dixon-Coles 低分修正因子"""
    if h == 0 and a == 0: return 1 - lh*la*rho
    if h == 0 and a == 1: return 1 + lh*rho
    if h == 1 and a == 0: return 1 + la*rho
    if h == 1 and a == 1: return 1 - rho
    return 1.0

def probs(lh, la, use_dc=False, use_shrink=False, mg=8):
    if use_shrink:
        lh, la = shrink(lh, la, SHRINK)
    hw = dr = aw = 0.0
    for h in range(mg):
        for a in range(mg):
            p = pmf(h, lh) * pmf(a, la)
            if use_dc:
                p *= dc_tau(h, a, lh, la, RHO)
            if h > a: hw += p
            elif h == a: dr += p
            else: aw += p
    t = hw + dr + aw
    return 100*hw/t, 100*dr/t, 100*aw/t

def call(hw, dr, aw):
    m = max(hw, dr, aw)
    return "W" if m == hw else ("D" if m == dr else "L")

def main():
    print()
    print(f"{AMBER}{BOLD}╔════════════════════════════════════════════════════════════════════════╗{END}")
    print(f"{AMBER}{BOLD}║  WCP ENGINE v4 · DIXON-COLES 平局修正 + favorite 收缩                    ║{END}")
    print(f"{AMBER}{BOLD}║  专治: 模型16场0次预测平局，实际8场平(50%)                              ║{END}")
    print(f"{AMBER}{BOLD}╚════════════════════════════════════════════════════════════════════════╝{END}")
    print(f"  {GRAY}参数: Dixon-Coles ρ={RHO}, favorite收缩 k={SHRINK}{END}\n")

    v3_hit = v4_hit = 0
    v3_draws = v4_draws = 0
    actual_draws = sum(1 for m in MATCHES if m[2] == "D")

    print(f"  {GRAY}{'比赛':<22}{'v3独立泊松':>18}{'v4 DC+收缩':>20}{'真实':>6}{END}")
    print(f"  {GRAY}{'─'*72}{END}")
    for (lh, la, actual, label) in MATCHES:
        p3 = probs(lh, la, use_dc=False, use_shrink=False)
        p4 = probs(lh, la, use_dc=True, use_shrink=True)
        c3, c4 = call(*p3), call(*p4)
        if c3 == actual: v3_hit += 1
        if c4 == actual: v4_hit += 1
        if c3 == "D": v3_draws += 1
        if c4 == "D": v4_draws += 1
        m3 = (GREEN+"✓") if c3==actual else (RED+"✗")
        m4 = (GREEN+"✓") if c4==actual else (RED+"✗")
        # 高亮 v4 修对的平局
        flip = ""
        if c4 == "D" and actual == "D" and c3 != "D":
            flip = f"  {AMBER}← v4救回平局{END}"
        actclr = {"W":GREEN,"D":YELLOW,"L":RED}[actual]
        print(f"  {WHITE}{label:<20}{END} "
              f"{p3[1]:>5.0f}%平 {c3}{m3}{END} "
              f"{CYAN}{p4[1]:>7.0f}%平 {c4}{m4}{END}  "
              f"{actclr}{actual:>4}{END}{flip}")

    print(f"\n  {WHITE}{BOLD}━━━━━━ 16 场回测对比 ━━━━━━{END}")
    print(f"  {GRAY}实际平局场次: {actual_draws}{END}")
    print(f"  {YELLOW}v3 独立泊松: 方向命中 {v3_hit}/16 · 预测平局 {v3_draws} 次{END}")
    print(f"  {CYAN}v4 DC+收缩 : 方向命中 {v4_hit}/16 · 预测平局 {v4_draws} 次{END}")
    print()
    print(f"  {GRAY}注:v4 不会(也不该)预测西班牙vs佛得角这种大冷平——那是真方差。{END}")
    print(f"  {GRAY}它修的是'接近的比赛该判平却押了favorite'。参数 ρ/k 待更多样本回测校准。{END}")
    print()

if __name__ == "__main__":
    main()
