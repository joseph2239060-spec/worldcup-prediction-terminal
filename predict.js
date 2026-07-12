// ════════════════════════════════════════════════════════════════
// WCP 真模型 · 泊松 + 蒙特卡洛 (真跑,非包装)
// ────────────────────────────────────────────────────────────────
// 做什么:
//   1. 从各队本届【真实比分】算 进攻/防守强度(带贝叶斯平滑,避免极端)
//   2. 乘法泊松模型 → 两队预期进球 λ
//   3. 【真的】蒙特卡洛模拟 N=50000 次比赛,统计胜平负 + 比分分布
//   4. 输出模型概率 + 最可能比分 + 预期进球
// 用法:  node predict.js ARG EGY          (主队 客队)
//        node predict.js ARG EGY 100000   (自定义模拟次数)
// 依赖:  只用 data/matches-all.js 的真实比分,无外部库
// ════════════════════════════════════════════════════════════════
const path = require('path');
global.window = {};
require(path.join(__dirname, 'data', 'matches-all.js'));
const D = window.WCP_DAYS;

// ── 1. 从真实比分统计各队 进球/失球/场次 ──
// 防穿越:若传了 YYYY-MM-DD,只用该日期【之前】的比分算强度(模拟真实赛前,不作弊)
const CUTOFF = (process.argv.slice(2).find(function(a){ return /^\d{4}-\d{2}-\d{2}$/.test(a); })) || null;
const team = {};
function ensure(c){ if(!team[c]) team[c]={gf:0,ga:0,gp:0,name:c}; return team[c]; }
let totalGoals = 0, totalTeamGames = 0;
Object.keys(D).forEach(function(day){
  if(CUTOFF && day >= CUTOFF) return; // 只用截止日期之前的真实比分
  D[day].matches.forEach(function(m){
    const r = m.result;
    if(!r || r.home_goals==null || r.away_goals==null) return;
    const hg=r.home_goals, ag=r.away_goals;
    const h=ensure(m.home.code), a=ensure(m.away.code);
    h.name=m.home.name_zh; a.name=m.away.name_zh;
    h.gf+=hg; h.ga+=ag; h.gp++;
    a.gf+=ag; a.ga+=hg; a.gp++;
    totalGoals += hg+ag; totalTeamGames += 2;
  });
});
// 全局:每队每场平均进球
const L = totalGoals / totalTeamGames;

// ── 2. 强度(带贝叶斯平滑:相当于给每队加 PRIOR 场"联盟平均"表现,压极端) ──
const PRIOR = 2.0;
function attack(c){ const t=team[c]; if(!t||t.gp===0) return 1.0; return ((t.gf + PRIOR*L)/(t.gp+PRIOR))/L; }
function defense(c){ const t=team[c]; if(!t||t.gp===0) return 1.0; return ((t.ga + PRIOR*L)/(t.gp+PRIOR))/L; } // >1 = 防守差

// ── 3. 泊松抽样(Knuth 算法,真随机) ──
function poissonSample(lam){
  const Lp = Math.exp(-lam); let k=0, p=1.0;
  do { k++; p *= Math.random(); } while(p > Lp);
  return k-1;
}

// ── 4. 蒙特卡洛模拟 N 次 ──
function simulate(lh, la, n){
  let hw=0, dr=0, aw=0; const scores={}; let sh=0, sa=0;
  for(let i=0;i<n;i++){
    const hg=poissonSample(lh), ag=poissonSample(la);
    sh+=hg; sa+=ag;
    if(hg>ag) hw++; else if(hg<ag) aw++; else dr++;
    const key=hg+'-'+ag; scores[key]=(scores[key]||0)+1;
  }
  const top=Object.keys(scores).map(k=>({s:k,p:scores[k]/n})).sort((a,b)=>b.p-a.p).slice(0,6);
  return { home:hw/n, draw:dr/n, away:aw/n, top, avgH:sh/n, avgA:sa/n };
}

// ── main ──
const HOME=(process.argv[2]||'').toUpperCase(), AWAY=(process.argv[3]||'').toUpperCase();
const N = parseInt((process.argv.slice(2).find(function(a){ return /^\d+$/.test(a); }))||'50000');
if(!HOME||!AWAY){ console.log('用法: node predict.js 主队code 客队code [模拟次数]\n例:  node predict.js ARG EGY'); process.exit(1); }

const HOME_ADV = 1.05; // 轻微主场系数(世界杯多中立场,给很小)
const attH=attack(HOME), defH=defense(HOME), attA=attack(AWAY), defA=defense(AWAY);
const lambdaH = L * attH * defA * HOME_ADV;
const lambdaA = L * attA * defH;

const R = simulate(lambdaH, lambdaA, N);
const nm = c => (team[c] && team[c].name) || c;
const g = c => team[c] ? team[c].gp+'场 进'+(team[c].gf/team[c].gp).toFixed(2)+'/失'+(team[c].ga/team[c].gp).toFixed(2) : '无数据(用中性先验)';

console.log('\n════ '+nm(HOME)+' ('+HOME+')  vs  '+nm(AWAY)+' ('+AWAY+') ════');
console.log('联盟每队场均进球 L = '+L.toFixed(2)+'  ·  模拟 '+N.toLocaleString()+' 次');
console.log('  '+HOME+' 真实数据: '+g(HOME)+'  → 进攻'+attH.toFixed(2)+' 防守'+defH.toFixed(2));
console.log('  '+AWAY+' 真实数据: '+g(AWAY)+'  → 进攻'+attA.toFixed(2)+' 防守'+defA.toFixed(2));
console.log('  预期进球 λ:  '+HOME+' '+lambdaH.toFixed(2)+'  '+AWAY+' '+lambdaA.toFixed(2));
console.log('──────── 模型输出(蒙特卡洛 '+N.toLocaleString()+'次) ────────');
console.log('  '+nm(HOME)+'胜 '+(R.home*100).toFixed(1)+'%   平 '+(R.draw*100).toFixed(1)+'%   '+nm(AWAY)+'胜 '+(R.away*100).toFixed(1)+'%');
console.log('  预期比分 '+R.avgH.toFixed(2)+' : '+R.avgA.toFixed(2));
console.log('  最可能比分: '+R.top.map(t=>t.s+'('+(t.p*100).toFixed(1)+'%)').join('  '));
console.log('');
