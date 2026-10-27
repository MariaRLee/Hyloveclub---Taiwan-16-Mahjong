
/* Hyloveclub Taiwan 16-Tile Mahjong v5: bilingual, vector-symbol faces. Built on v4 gameplay. */
(()=>{'use strict';
const names=['您','電腦小南','電腦阿西','電腦阿北'];
const suits=['萬','筒','索'];const honors=['東','南','西','北','中','發','白'];const flowers=['春','夏','秋','冬','梅','蘭','竹','菊'];
let G=null,selected=-1,hinted=-1,chooser='';const $=id=>document.getElementById(id);

let LANG='zh';
const TEXT={
 zh:{title:'🀄 Hyloveclub - 台灣十六張麻將',sub:'電腦／手機皆可玩 · 您對戰 3 位電腦 · 五面子一對眼',new:'重新開局',practice:'練習牌局',draw:'摸牌',discard:'打出選中牌',chow:'吃',pong:'碰',kong:'槓',win:'胡！',pass:'過',hint:'💡 提示我該打哪張',rules:'📖 玩法說明與計台表',history:'📝 牌局記錄（點擊展開）',choose:'請點選手牌，再按「打出選中牌」',chosen:'已選 {tile} · 再點一次此牌可直接打出',yourDiscard:'您打出的牌：',wall:'牌牆剩餘',turn:'輪到您',ended:'本局結束',wait:'等待您決定',botturn:'輪到 {person}',dealer:'莊家：{person}',handCount:'手牌 {hand} 張 · 已打 {discard} 張',round:'東風圈',scoreTitle:'計分設定（單位：分，非金錢）',base:'底分',perTai:'每台分值',configNote:'放槍：只有放槍者支付底分＋台數×每台分值；自摸：另外三家各付一份。',pointSummary:'底 {base}／每台 {perTai} 分',nowDiscard:'{person} 打出',drawing:'摸牌進行中',seatchar:'{wind}家',selection:'請點選要打的手牌',badge:'莊',ready:'輪到您',drawMsg:'輪到您摸牌：請按「摸牌」。',discardMsg:'輪到您打牌：請點選一張手牌，再按「打出選中牌」。',canwin:' 🎉 已可自摸胡牌！',claimMsg:'對手打出「{tile}」，您可以選擇吃、碰、槓、胡，或按「過」。',botMsg:'電腦正在進行回合。',drawEnd:'流局！牌牆摸完。',winMsg:'🀄 {person}{mode} 合計 {tai} 台',selfWin:'自摸胡牌！',ronWin:'胡牌！',chooseChow:'請選擇吃牌組合：',chooseKong:'選擇要槓的牌：',drawHead:'流局',drawDesc:'牌牆用完了，這一局沒有玩家胡牌。',playAgain:'再玩一局',winResult:'🀄 {person} {mode}',selfShort:'自摸！',ronShort:'胡牌！',winningMethod:'胡牌方式：',onDiscard:'由 {person} 放槍',tileWin:'胡牌 {tile}',total:'合計 {tai} 台',winningHand:'勝方牌型：',tai:'台',dealerExtra:'另：閒家自摸，莊家支付時加 1 台（莊家該份為 {tai} 台），其餘兩家各 {other} 台。',hintChoice:'💡 建議打 {tile}',hintWaits:'此後可聽：{tiles}（未扣除已知牌）',hintShape:'以保留對子、刻子與順子搭配為優先；目前尚未直接聽牌。',hintLimit:'僅為啟發式建議，不保證是最佳打法。',paymentRon:'放槍結算（放槍者單獨支付）',paymentSelf:'自摸結算（三家各付一份）',paymentFormula:'底 {base} 分＋台數 × {per} 分／台',receiver:'（胡牌者收取）',shooter:'（放槍者）',points:'分',paymentSelfNote:'自摸：三位對手各支付一份，並依莊家規則加計應有台數。',paymentRonNote:'放槍：只有 {person} 支付；其他未胡牌者不需支付。',gui:'🔎 牌面辨識 / Tile Symbols',noteSummary:'玩法與計分：16 張持牌，摸到 17 張後打出一張；胡牌為五組面子＋一對將。自摸三家各付一份，放槍只由放槍者支付。簡化遊戲規則，部分特殊牌型與花台未納入。點開「玩法說明與計台表」查看完整說明。'},
 en:{title:'🀄 Hyloveclub - Taiwan 16-Tile Mahjong',sub:'Desktop & mobile · Play against 3 computers · 5 melds + 1 pair',new:'New Game',practice:'Practice Hand',draw:'Draw',discard:'Discard Selected',chow:'Chow',pong:'Pung',kong:'Kong',win:'Win!',pass:'Pass',hint:'💡 Suggest a Discard',rules:'📖 How to Play & Scoring',history:'📝 Game Log (tap to expand)',choose:'Select a tile, then tap “Discard Selected.”',chosen:'Selected: {tile} · Tap this tile again to discard',yourDiscard:'Your discards:',wall:'Tiles left',turn:'Your turn',ended:'Hand finished',wait:'Choose an action',botturn:'{person}’s turn',dealer:'Dealer: {person}',handCount:'Hand {hand} · Discards {discard}',round:'East Round',scoreTitle:'Point settings (practice points, not money)',base:'Base',perTai:'Per tai',configNote:'Win on discard: only the discarder pays base + tai × points per tai; self-draw: each opponent pays one share.',pointSummary:'Base {base} / Tai {perTai}',nowDiscard:'{person} discarded',drawing:'Drawing tiles',seatchar:'{wind} wind',selection:'Select a tile to discard',badge:'Dealer',ready:'Your turn',drawMsg:'Your turn: tap Draw.',discardMsg:'Your turn: select a tile and tap Discard Selected.',canwin:' 🎉 Your hand can win by self-draw!',claimMsg:'{tile} was discarded. You may Chow, Pung, Kong, Win or Pass.',botMsg:'The computer players are taking their turns.',drawEnd:'Draw! The wall is empty.',winMsg:'🀄 {person} {mode} Total: {tai} tai',selfWin:'won by self-draw!',ronWin:'won!',chooseChow:'Choose the chow sequence:',chooseKong:'Choose a kong:',drawHead:'Draw — No Winner',drawDesc:'No one won before the wall ran out of tiles.',playAgain:'Play Another Hand',winResult:'🀄 {person} {mode}',selfShort:'Self-draw!',ronShort:'Wins!',winningMethod:'Winning method:',onDiscard:'From {person}’s discard',tileWin:'Winning tile: {tile}',total:'Total: {tai} tai',winningHand:'Winning tiles:',tai:'tai',dealerExtra:'Dealer pays +1 extra tai ({tai} tai total for that share); the other two each pay {other} tai.',hintChoice:'💡 Suggested discard: {tile}',hintWaits:'Then you would be waiting on {tiles} (does not subtract visible tiles).',hintShape:'This keeps pairs, triplets and sequences together; you are not in tenpai yet.',hintLimit:'Heuristic suggestion only; the best strategic move is not guaranteed.',paymentRon:'Win on a Discard — Discarder Pays',paymentSelf:'Self-Draw — Three Players Pay',paymentFormula:'Base {base} + tai × {per} points',receiver:'(winner receives)',shooter:'(discarder)',points:'pts',paymentSelfNote:'Self-draw: each of the three opponents pays one share, including any dealer adjustment.',paymentRonNote:'Only {person} pays for the discarded tile; the other two players pay zero.',gui:'🔎 Tile Symbols & Legend',noteSummary:'How to play: hold 16 tiles, draw to 17, then discard one. Win with five melds and a pair. A self-draw is paid by all three opponents; on a discard, only the discarder pays. This is a simplified game: flower tai and some special hands are excluded. Open “How to Play & Scoring” for details.'}
};
const SEATS_ZH=['您','電腦小南','電腦阿西','電腦阿北'];
const SEATS_EN=['You','South Bot','West Bot','North Bot'];
const FACES_EN=['East','South','West','North','Red Dragon','Green Dragon','White Dragon'];
const BONUS_EN=['Spring','Summer','Autumn','Winter','Plum','Orchid','Bamboo Flower','Chrysanthemum'];
const scoreEN={'莊家':'Dealer','莊家放槍（此筆加計）':'Dealer discards (extra)','自摸':'Self-draw','門清':'Concealed hand','門清自摸加計（合計 3 台）':'Concealed self-draw bonus (3 tai total)','碰碰胡':'All Pungs','清一色':'Full Flush','混一色（湊一色）':'Half Flush','大三元':'Big Three Dragons','平胡':'All Chows (Ping Hu)','中刻':'Red Dragon pung','發刻':'Green Dragon pung','白刻':'White Dragon pung'};
function T(key,args={}){return (TEXT[LANG][key]||TEXT.zh[key]||key).replace(/\{(\w+)\}/g,(_,k)=>String(args[k]??''));}
function nseat(p){return (LANG==='zh'?SEATS_ZH:SEATS_EN)[p]}
function tileText(t){if(t<27)return ((t%9)+1)+(LANG==='zh'?suits[Math.floor(t/9)]:[' Cracks',' Dots',' Bamboos'][Math.floor(t/9)]);if(t<34)return LANG==='zh'?honors[t-27]:FACES_EN[t-27];return LANG==='zh'?flowers[t-34]:BONUS_EN[t-34]}
function localizeScore(nm){if(LANG==='zh')return nm;return scoreEN[nm]||nm}
function svgWrap(inner,t){return '<svg class="tile-art" viewBox="0 0 66 88" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+tileText(t)+'">'+inner+'</svg>'}
function dot(x,y,r,col){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="#fff" stroke="'+col+'" stroke-width="4"/><circle cx="'+x+'" cy="'+y+'" r="'+(r*.54)+'" fill="none" stroke="'+col+'" stroke-width="2"/>'}
function stick(x,y,col='#137e46'){return '<g transform="translate('+x+' '+y+')"><rect x="-4" y="-11" width="8" height="22" rx="4" fill="'+col+'"/><path d="M-2 -6 Q2 -4 -1 0 Q-4 4 2 7" fill="none" stroke="#d0eee0" stroke-width="1.1" stroke-linecap="round"/></g>'}
function dragon(color){return '<g transform="translate(11 45) scale(.85)" fill="none" stroke="'+color+'" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 C18 -2 42 1 43 18 C44 32 15 34 16 45 C19 55 42 56 50 44 C58 31 42 24 31 34 C23 41 31 47 39 40"/><path d="M8 7 L12 -2 L17 4 L23 -2 L27 6"/><circle cx="13" cy="9" r="1.7" fill="'+color+'" stroke="none"/><path d="M20 23 l-8 5 M34 25 l10 7 M25 42 l-9 8"/></g>'}
function bambooface(n){if(n===1)return '<g fill="none" stroke="#147e4a" stroke-linecap="round" stroke-linejoin="round"><path d="M24 75 C28 50 15 31 24 16 C34 4 47 22 42 31 C58 33 57 50 46 54 L31 57" stroke-width="3.2"/><path d="M21 30 Q37 11 50 15 M20 39 Q41 30 51 43 M28 51 Q40 59 53 47 M33 58 Q28 66 18 68 M34 59 Q38 76 29 79 M40 58 Q46 76 50 78" stroke-width="2.3"/><circle cx="34" cy="23" r="4.2" fill="#e44237" stroke="#136b40" stroke-width="1.4"/><path d="M15 21 Q29 9 37 14" stroke-width="2.2"/></g>';
 if(n===8)return '<g fill="none" stroke="#147d43" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M13 25 L28 38 L36 30 L51 18 M13 18 L28 31 L36 23 L51 25 M13 62 L28 73 L36 65 L51 53 M13 53 L28 66 L36 57 L51 62"/></g>';
 let positions={2:[[33,25],[33,62]],3:[[33,19],[20,61],[46,61]],4:[[21,25],[45,25],[21,60],[45,60]],5:[[21,20],[45,20],[33,42],[21,66],[45,66]],6:[[17,25],[33,25],[49,25],[17,60],[33,60],[49,60]],7:[[33,12],[17,38],[33,38],[49,38],[17,65],[33,65],[49,65]],9:[[17,17],[33,17],[49,17],[17,44],[33,44],[49,44],[17,70],[33,70],[49,70]]}[n];
 return positions.map(([x,y],i)=>stick(x,y,n===5&&i===2?'#d52a36':n===7&&i===0?'#dc2836':n===7&&(i===2||i===5)?'#1644a1':n===9&&i%3===0?'#1d4495':n===9&&i%3===1?'#d62d38':'#14804c')).join('')}
function dotface(n){if(n===1)return '<g><circle cx="33" cy="43" r="25" fill="none" stroke="#138453" stroke-width="4"/><circle cx="33" cy="43" r="19" fill="none" stroke="#138453" stroke-width="2"/><g fill="#19845a">'+Array.from({length:10},(_,i)=>{let a=i*Math.PI/5;return '<ellipse cx="'+(33+13*Math.cos(a))+'" cy="'+(43+13*Math.sin(a))+'" rx="3.6" ry="6" transform="rotate('+(i*36)+' '+(33+13*Math.cos(a))+' '+(43+13*Math.sin(a))+')"/>'}).join('')+'</g><circle cx="33" cy="43" r="7" fill="#e52c36"/><path d="M33 37 v12 M27 43 h12" stroke="#fff" stroke-width="2"/></g>';
 const b='#1845a4',g='#11865d',r='#e1313d';let pts={2:[[33,22,b],[33,65,g]],3:[[22,18,b],[33,43,r],[44,68,g]],4:[[19,21,b],[47,21,g],[19,66,g],[47,66,b]],5:[[19,21,b],[47,21,g],[33,43,r],[19,66,g],[47,66,b]],6:[[19,17,g],[47,17,g],[19,43,r],[47,43,r],[19,69,r],[47,69,r]],7:[[13,15,g],[33,20,g],[53,25,g],[21,48,r],[44,48,r],[21,70,r],[44,70,r]],8:[[19,12,b],[47,12,b],[19,33,b],[47,33,b],[19,56,b],[47,56,b],[19,77,b],[47,77,b]],9:[[13,18,b],[33,18,b],[53,18,b],[13,43,r],[33,43,r],[53,43,r],[13,68,g],[33,68,g],[53,68,g]]}[n];
 return pts.map(([x,y,c])=>dot(x,y,n>=7?7.5:9.5,c)).join('')}
function arrow(dir,color){let paths=['M10 65 H52 M39 54 L53 65 L39 76','M33 47 V78 M22 65 L33 78 L44 65','M55 65 H13 M26 54 L12 65 L26 76','M33 79 V48 M22 61 L33 48 L44 61'];return '<path d="'+paths[dir]+'" fill="none" stroke="'+color+'" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter"/>'}
function tileFaceSvg(t){let f='';
 if(t<9){f='<text x="33" y="57" fill="#d61e28" font-size="62" text-anchor="middle" font-weight="900" font-family="Arial, sans-serif">'+(t+1)+'</text><circle cx="33" cy="73" r="8" fill="none" stroke="#d61e28" stroke-width="3.2"/><rect x="30" y="70" width="6" height="6" fill="#d61e28"/>'}
 else if(t<18)f=dotface(t-8);
 else if(t<27)f=bambooface(t-17);
 else if(t<31){const k=t-27,letters=['E','S','W','N'],cols=['#164caa','#da2929','#138355','#164caa'];f='<text x="33" y="45" text-anchor="middle" font-size="44" font-weight="900" font-family="Arial,sans-serif" fill="'+cols[k]+'">'+letters[k]+'</text>'+arrow(k,cols[k]);}
 else if(t<=32){const col=t===31?'#d52e32':'#0d8342';f='<text x="33" y="40" text-anchor="middle" font-size="41" font-weight="900" font-family="Noto Sans CJK TC, Noto Sans TC, sans-serif" fill="'+col+'">'+(t===31?'中':'發')+'</text>'+dragon(col);}
 else if(t===33)f='<rect x="14" y="18" width="38" height="54" fill="none" stroke="#154ea1" stroke-width="5"/><rect x="20" y="24" width="26" height="42" fill="none" stroke="#154ea1" stroke-width="2"/>';
 else{const chars=['春','夏','秋','冬','梅','蘭','竹','菊'],pic=['🌸','☀️','🍁','❄️','🌺','🪻','🎋','🌼'];const k=t-34;f='<text x="33" y="26" fill="#173e75" text-anchor="middle" font-size="20" font-weight="800" font-family="Noto Sans CJK TC,Noto Sans TC,sans-serif">'+chars[k]+'</text><text x="33" y="64" text-anchor="middle" font-size="34">'+pic[k]+'</text>'}
 return svgWrap(f,t)}
function tileHtml(t,extra=''){let cl=t<9?'man':t<18?'pin':t<27?'sou':t<31?'wind':t<34?'honor':'flower';return '<span class="tile '+cl+' '+extra+'" title="'+tileText(t)+'">'+tileFaceSvg(t)+'</span>'}
function meldHtml(m){return '<span class="meld"><i>'+(LANG==='en'?({'吃':'Chow','碰':'Pung','槓':'Kong','暗槓':'Concealed kong','補槓':'Added kong'}[m.kind]||m.kind):m.kind)+'</i>'+m.tiles.map(t=>tileHtml(t)).join('')+'</span>'}
const SCORE_ROWS=[['莊家','Dealer','1 台','1 tai'],['自摸','Self-draw','1 台','1 tai'],['門清','Concealed hand','1 台','1 tai'],['門清自摸','Concealed self-draw','合計 3 台','3 tai total'],['碰碰胡','All Pungs','4 台','4 tai'],['清一色','Full Flush','8 台','8 tai'],['大三元','Big Three Dragons','8 台','8 tai'],['平胡','All Chows (Ping Hu)','2 台','2 tai'],['混一色（湊一色）','Half Flush','4 台','4 tai'],['中／發／白刻','Dragon pung','各 1 台','1 tai each']];
function localizeUI(){document.documentElement.lang=LANG==='zh'?'zh-Hant':'en';document.title=LANG==='zh'?'Hyloveclub - 台灣十六張麻將':'Hyloveclub - Taiwan 16-Tile Mahjong';document.querySelector('.top h2').textContent=T('title');document.querySelector('.top .sub').textContent=T('sub');const mappings={'newgame':'new','practice':'practice','draw':'draw','discard':'discard','chow':'chow','pong':'pong','kong':'kong','win':'win','hint':'hint','pass':'pass','score-heading':'scoreTitle','base-label':'base','tai-label':'perTai','settings-hint':'configNote','rules-summary':'rules','guide-heading':'gui'};for(const [id,k] of Object.entries(mappings))$(id).textContent=T(k);document.querySelector('#history-panel summary').textContent=T('history');$('lang-toggle').textContent=LANG==='zh'?'English':'中文';document.querySelector('.mine .op-bottom .mini').textContent=T('yourDiscard');document.querySelector('.center small').textContent=T('wall');$('roundname').textContent=T('round');document.querySelector('.notes').textContent=T('noteSummary');$('rule-grid').innerHTML=SCORE_ROWS.map(([zh,en,zv,ev])=>'<span>'+(LANG==='zh'?zh:en)+'</span><b>'+(LANG==='zh'?zv:ev)+'</b>').join('');$('tile-guide').innerHTML=[['Characters / 萬',Array.from({length:9},(_,i)=>i)],['Bamboos / 條',Array.from({length:9},(_,i)=>18+i)],['Dots / 筒',Array.from({length:9},(_,i)=>9+i)],['Winds / 風牌',[27,28,29,30]],['Dragons / 三元牌',[31,32,33]],['Flowers & Seasons / 花牌',[34,35,36,37,38,39,41,40]]].map(([label,ids])=>'<div class="tile-guide-row"><strong>'+label+'</strong><div class="tile-guide-tiles">'+ids.map(t=>tileHtml(t)).join('')+'</div></div>').join('');}

function makeDeck(){let a=[];for(let t=0;t<34;t++)for(let n=0;n<4;n++)a.push(t);for(let f=34;f<42;f++)a.push(f);for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function ct(arr,t){let k=0;for(const x of arr)if(x===t)k++;return k;}
function take(arr,t,n){for(let i=0;i<n;i++){let j=arr.indexOf(t);if(j<0)throw Error('缺少牌 '+tileText(t));arr.splice(j,1)}}
function counts(a){let c=Array(34).fill(0);for(const t of a)if(t<34)c[t]++;return c;}
function validComplete(hand,melds){let need=5-melds; if(need<0||hand.length!==need*3+2)return false;let c=counts(hand);for(let eye=0;eye<34;eye++){if(c[eye]<2)continue;c[eye]-=2;let memo=new Map();if(allSets(c,need,memo)){c[eye]+=2;return true;}c[eye]+=2;}return false;}
function allSets(c,need,memo){if(need===0)return c.every(x=>x===0);let key=c.join('');if(memo.has(key))return memo.get(key);let i=c.findIndex(v=>v>0);if(i<0)return false;let ok=false;if(c[i]>=3){c[i]-=3;ok=allSets(c,need-1,memo);c[i]+=3;}if(!ok&&i<27&&i%9<=6&&c[i+1]&&c[i+2]&&Math.floor(i/9)===Math.floor((i+2)/9)){c[i]--;c[i+1]--;c[i+2]--;ok=allSets(c,need-1,memo);c[i]++;c[i+1]++;c[i+2]++;}memo.set(key,ok);return ok;}
function allPungs(hand,melds){if(melds.some(m=>m.kind==='吃'))return false;let c=counts(hand);for(let i=0;i<34;i++)if(c[i]>=2){c[i]-=2;if(c.every(n=>n%3===0)){c[i]+=2;return true;}c[i]+=2;}return false;}
function chowPairs(hand,t){if(t>=27)return [];const result=[],start=Math.floor(t/9)*9;for(let s=t-2;s<=t;s++){if(s<start||s+2>=start+9)continue;let ids=[s,s+1,s+2].filter(x=>x!==t);if(ct(hand,ids[0])>0&&ct(hand,ids[1])>0)result.push({ids,seq:[s,s+1,s+2]});}return result;}
function note(str,en){G.logs.unshift({zh:str,en:en||str});G.logs=G.logs.slice(0,45);}
function drawRaw(p,replacement=false){if(!G.wall.length){G.phase='ended';G.result={draw:true};note('牌牆摸完，流局。','The tile wall is empty; the hand ends in a draw.');return false;}let t=replacement?G.wall.pop():G.wall.shift();while(t>=34){G.players[p].flowers.push(t);note(names[p]+' 補花：'+tileText(t),SEATS_EN[p]+' exposed a bonus tile and drew a replacement.');if(!G.wall.length){G.phase='ended';G.result={draw:true};note('牌牆摸完，流局。','The tile wall is empty; the hand ends in a draw.');return false;}t=G.wall.pop();}G.players[p].hand.push(t);G.players[p].hand.sort((a,b)=>a-b);G.lastDraw={seat:p,tile:t};return t;}
function nextSeat(s){return (s+1)%4}function distance(from,seat){return (seat-from+4)%4}
function begin(practice=false){let prior=G, dealer=prior&&!practice?(prior.result?(prior.dealer+((prior.result.draw||prior.result.winner===prior.dealer)?0:1))%4:prior.dealer):0;
 G={wall:makeDeck(),players:[0,1,2,3].map(()=>({hand:[],discards:[],melds:[],flowers:[]})),dealer,turn:dealer,phase:'discard',last:null,lastDraw:null,pending:null,logs:[],result:null,practice,round:prior&&!practice?prior.round+1:1};selected=-1;hinted=-1;chooser='';
 if(practice){let prepared=[0,1,2,3,4,5,6,7,8,10,10,10,22,22,22,31]; // 123 456 789萬, 2筒刻, 5索刻, 中單張
  for(const t of prepared){let idx=G.wall.indexOf(t);if(idx<0)throw Error('練習牌不足');G.wall.splice(idx,1);G.players[0].hand.push(t);}
  for(let p=1;p<4;p++)while(G.players[p].hand.length<16){if(drawRaw(p)===false)break;}
  if(G.dealer!==0){G.dealer=0;G.turn=0;}
  let junk=15;let idx=G.wall.indexOf(junk);if(idx!==-1){G.wall.splice(idx,1);G.players[0].hand.push(junk);}else drawRaw(0);
  G.players[0].hand.sort((a,b)=>a-b);note('練習局：先打出不需要的牌，試著湊成五面子＋一對眼。','Practice hand: discard extras and build five melds plus one pair.');
 } else {for(let r=0;r<16;r++)for(let p=0;p<4;p++){if(drawRaw(p)===false)break;}drawRaw(dealer);note('第 '+G.round+' 局開始，'+names[dealer]+' 坐莊。','Hand '+G.round+' starts. Dealer: '+SEATS_EN[dealer]+'.');}
 if(G.turn!==0){G.phase='draw';runBots();}else if(validComplete(G.players[0].hand,0))note('起手可以胡！','The initial hand is already a winning hand!');render();}
function doDiscard(p,index){if(G.phase!=='discard'||G.turn!==p)return;let pl=G.players[p],t=pl.hand.splice(index,1)[0];pl.discards.push(t);G.last={seat:p,tile:t};G.lastDraw=null;selected=-1;hinted=-1;chooser='';note(names[p]+' 打出 '+tileText(t),SEATS_EN[p]+' discarded '+((t<27)?(t%9+1)+' '+['Cracks','Dots','Bamboos'][Math.floor(t/9)]:t<34?FACES_EN[t-27]:BONUS_EN[t-34])+'.');afterDiscard(p,t);}
function botClaimCandidates(from,t){let choices=[];for(let d=1;d<4;d++){let seat=(from+d)%4;if(seat===0)continue;let pl=G.players[seat];if(ct(pl.hand,t)>=3&&Math.random()<.58)choices.push({seat,kind:'槓',rank:2,dist:d});else if(ct(pl.hand,t)>=2&&Math.random()<.46)choices.push({seat,kind:'碰',rank:2,dist:d});}
 let next=nextSeat(from);if(next!==0){let ch=chowPairs(G.players[next].hand,t);if(ch.length&&Math.random()<.32)choices.push({seat:next,kind:'吃',rank:1,dist:1,chi:ch[0]});}
 choices.sort((a,b)=>b.rank-a.rank||a.dist-b.dist);return choices[0]||null;}
function afterDiscard(from,t){const human=G.players[0]; // winner priority: clockwise nearest single winner
 let winners=[];for(let d=1;d<4;d++){let s=(from+d)%4;if(validComplete([...G.players[s].hand,t],G.players[s].melds.length))winners.push(s)}
 if(winners.length){let first=winners[0];if(first!==0){winGame(first,false,from,t);return;}G.pending={from,t,hu:true,pong:false,kong:false,chows:[],bot:null};G.phase='claim';G.turn=0;note('您可以胡 '+tileText(t)+'！','You may Win on this discard!');return;}
 let bot=botClaimCandidates(from,t),pong=from!==0&&ct(human.hand,t)>=2,kong=from!==0&&ct(human.hand,t)>=3,chows=from===3?chowPairs(human.hand,t):[];
 // Priority: an earlier bot pung/kong blocks user's same-priority claim, any bot pung blocks user's chow.
 if(bot&&bot.rank===2){if(distance(from,bot.seat)<distance(from,0)){pong=false;kong=false;}chows=[];}
 if(pong||kong||chows.length){G.pending={from,t,hu:false,pong,kong,chows,bot};G.phase='claim';G.turn=0;note('您可對 '+tileText(t)+' 吃／碰／槓，或按「過」。','You may claim the discarded tile (Chow/Pung/Kong) or Pass.');return;}
 if(bot){claimBot(bot,from,t);return;}
 G.turn=nextSeat(from);G.phase='draw';}
function claimBot(c,from,t){let pl=G.players[c.seat];let exposed=G.players[from];if(exposed.discards.at(-1)===t)exposed.discards.pop();let tiles=[];
 if(c.kind==='吃'){for(let x of c.chi.ids)take(pl.hand,x,1);tiles=c.chi.seq.slice();}
 else if(c.kind==='碰'){take(pl.hand,t,2);tiles=[t,t,t];}
 else {take(pl.hand,t,3);tiles=[t,t,t,t];}
 pl.melds.push({kind:c.kind,tiles});G.pending=null;G.turn=c.seat;G.phase='discard';G.last=null;note(names[c.seat]+' '+c.kind+' '+tileText(t),SEATS_EN[c.seat]+' claimed a '+({'吃':'chow','碰':'pung','槓':'kong'}[c.kind]||'meld')+'.');if(c.kind==='槓'){let drawn=drawRaw(c.seat,true);if(drawn===false)return;if(validComplete(pl.hand,pl.melds.length)){winGame(c.seat,true,null,drawn);return;}}}
function userClaim(kind,ch=null){let p=G.pending;if(!p||G.phase!=='claim')return;let pl=G.players[0],from=G.players[p.from],t=p.t;
 if(kind==='胡'){if(!p.hu)return;winGame(0,false,p.from,t);render();return;}
 if(kind==='吃'&&!p.chows.length||kind==='碰'&&!p.pong||kind==='槓'&&!p.kong)return;
 if(from.discards.at(-1)===t)from.discards.pop();let ts;
 if(kind==='吃'){ch=ch||p.chows[0];for(const x of ch.ids)take(pl.hand,x,1);ts=ch.seq.slice();}else if(kind==='碰'){take(pl.hand,t,2);ts=[t,t,t];}else{take(pl.hand,t,3);ts=[t,t,t,t];}
 pl.melds.push({kind,tiles:ts});G.pending=null;G.turn=0;G.phase='discard';G.last=null;hinted=-1;chooser='';note('您'+kind+'了 '+tileText(t),'You claimed a '+({'吃':'chow','碰':'pung','槓':'kong'}[kind]||'meld')+'.');if(kind==='槓'){let v=drawRaw(0,true);if(v===false){render();return;}}render();}
function userPass(){let p=G.pending;if(!p||G.phase!=='claim')return;G.pending=null;chooser='';note('您選擇「過」。','You passed on the claim.');if(p.bot)claimBot(p.bot,p.from,p.t);else{G.turn=nextSeat(p.from);G.phase='draw';}runBots();render();}
function kongCandidates(p){let pl=G.players[p],list=[];for(let t=0;t<34;t++)if(ct(pl.hand,t)===4)list.push({t,kind:'暗槓'});for(const m of pl.melds)if(m.kind==='碰'&&ct(pl.hand,m.tiles[0])>0)list.push({t:m.tiles[0],kind:'補槓'});return list;}
function ownKong(p,c){if(G.phase!=='discard'||G.turn!==p)return;let pl=G.players[p];if(c.kind==='暗槓'){take(pl.hand,c.t,4);pl.melds.push({kind:'暗槓',tiles:[c.t,c.t,c.t,c.t]});}else{take(pl.hand,c.t,1);let m=pl.melds.find(m=>m.kind==='碰'&&m.tiles[0]===c.t);if(!m)return;m.kind='補槓';m.tiles.push(c.t);}note(names[p]+' '+c.kind+' '+tileText(c.t),SEATS_EN[p]+' declared a kong.');chooser='';hinted=-1;let v=drawRaw(p,true);if(v===false)return;if(p!==0&&validComplete(pl.hand,pl.melds.length))winGame(p,true,null,v);}
function botDiscardIndex(pl){let best=-Infinity,besti=0,seen=new Set();for(let i=0;i<pl.hand.length;i++){let t=pl.hand[i];if(seen.has(t))continue;seen.add(t);let h=pl.hand.slice();h.splice(i,1);let v=heuristic(h);if(v>best){best=v;besti=i;}}return besti;}
function heuristic(hand){let c=counts(hand),q=0;for(let t=0;t<34;t++){let n=c[t];if(n>=3)q+=12;else if(n===2)q+=5.5;else if(t>=27&&n===1)q-=2.3;else if(n===1)q-=.25;if(t<27){let pos=t%9;if(pos<8)q+=Math.min(c[t],c[t+1])*3.1;if(pos<7)q+=Math.min(c[t],c[t+2])*1.15;}}return q;}
function rankDiscards(hand,mCount){let seen=new Set(),r=[];for(let t of hand){if(seen.has(t))continue;seen.add(t);let h=hand.slice();take(h,t,1);let waits=[];if(h.length===(5-mCount)*3+1){for(let j=0;j<34;j++){if(validComplete([...h,j],mCount))waits.push(j);}}r.push({tile:t,waits,score:heuristic(h)+waits.length*70});}return r.sort((a,b)=>b.score-a.score||b.waits.length-a.waits.length||a.tile-b.tile);}
function botDraw(p){let t=drawRaw(p);if(t===false)return;G.phase='discard';if(validComplete(G.players[p].hand,G.players[p].melds.length)){winGame(p,true,null,t);return;}let cons=kongCandidates(p);if(cons.length&&Math.random()<.42){ownKong(p,cons[0]);}}
function runBots(){let guard=0;while(G.phase!=='ended'&&G.phase!=='claim'&&G.turn!==0&&guard++<250){let p=G.turn;if(G.phase==='draw')botDraw(p);if(G.phase==='ended'||G.phase==='claim')break;if(G.phase==='discard'){let idx=botDiscardIndex(G.players[p]);doDiscard(p,idx);}}if(guard>=250){G.phase='ended';G.result={draw:true};note('牌局已結束（回合保護）。','The hand has ended (turn protection).');}}
function decompositions(hand,melds){
 // Enumerate valid concealed eye + sets. Multiple legal decompositions are checked
 // because the same physical tiles may be interpretable as sequences or triplets.
 const required=5-melds;
 if(required<0||hand.length!==required*3+2)return [];
 const c=counts(hand),results=[];
 function groups(left,sets,eye){
  if(left===0){if(c.every(n=>n===0))results.push({eye,sets:sets.slice()});return;}
  const i=c.findIndex(n=>n>0);if(i<0)return;
  if(c[i]>=3){c[i]-=3;sets.push({type:'刻',tiles:[i,i,i]});groups(left-1,sets,eye);sets.pop();c[i]+=3;}
  if(i<27&&i%9<=6&&c[i+1]&&c[i+2]){
   c[i]--;c[i+1]--;c[i+2]--;
   sets.push({type:'順',tiles:[i,i+1,i+2]});groups(left-1,sets,eye);
   sets.pop();c[i]++;c[i+1]++;c[i+2]++;
  }
 }
 for(let eye=0;eye<34;eye++)if(c[eye]>=2){c[eye]-=2;groups(required,[],eye);c[eye]+=2;}
 return results;
}
function isTwoSidedWin(decomposition,winTile){
 if(winTile===undefined||winTile===null||winTile>=27)return false;
 for(const set of decomposition.sets){
  if(set.type!=='順'||!set.tiles.includes(winTile))continue;
  const lo=set.tiles[0],hi=set.tiles[2];
  if(winTile===lo&&lo%9<=5)return true; // e.g. 5-6 wait 4 or 7
  if(winTile===hi&&lo%9>=1)return true; // e.g. 3-4 wait 2 or 5
 }
 return false;
}
function calcScore(winner,selfdraw,from,t){
 let pl=G.players[winner],all=pl.hand.slice();
 if(!selfdraw&&t!==undefined&&t!==null)all.push(t);
 let full=[...all,...pl.melds.flatMap(m=>m.tiles)],add=[],total=0;
 function plus(label,v){total+=v;add.push([label,v]);}
 const variants=decompositions(all,pl.melds.length);
 if(winner===G.dealer)plus('莊家',1);
 else if(!selfdraw&&from===G.dealer)plus('莊家放槍（此筆加計）',1);
 if(selfdraw)plus('自摸',1);
 const closed=pl.melds.every(m=>m.kind==='暗槓');
 if(closed)plus('門清',1);
 if(closed&&selfdraw)plus('門清自摸加計（合計 3 台）',1);
 const pungs=pl.melds.every(m=>m.kind!=='吃')&&variants.some(v=>v.sets.every(s=>s.type==='刻'));
 if(pungs)plus('碰碰胡',4);
 const suitsUsed=new Set(full.filter(x=>x<27).map(x=>Math.floor(x/9)));
 const honorsUsed=full.some(x=>x>=27&&x<34);
 if(suitsUsed.size===1&&!honorsUsed)plus('清一色',8);
 else if(suitsUsed.size===1&&honorsUsed)plus('混一色（湊一色）',4);
 const bigDragons=[31,32,33].every(d=>pl.melds.some(m=>m.kind!=='吃'&&m.tiles[0]===d)||ct(all,d)>=3);
 if(bigDragons)plus('大三元',8);
 else for(let d=31;d<=33;d++){
  if(pl.melds.some(m=>m.kind!=='吃'&&m.tiles[0]===d)||ct(all,d)>=3)plus(['中刻','發刻','白刻'][d-31],1);
 }
 const numericOnly=full.every(x=>x<27);
 const chowMelds=pl.melds.every(m=>m.kind==='吃');
 const flat=!selfdraw&&numericOnly&&pl.flowers.length===0&&chowMelds&&variants.some(v=>v.eye<27&&v.sets.every(s=>s.type==='順')&&isTwoSidedWin(v,t));
 if(flat)plus('平胡',2);
 const dealerExtra=selfdraw&&winner!==G.dealer?1:0;
 return {total,add,closed,full,dealerExtra,pungs,flat,bigDragons};
}
function pointsConfig(){
 const v=id=>{let n=Number($(id)?.value);return Number.isFinite(n)?Math.max(0,Math.min(99999,Math.floor(n))):1;};
 return {base:v('base-points'),perTai:v('tai-points')};
}
function paymentRows(result){
 if(!result||result.draw)return [];
 const {base,perTai}=pointsConfig(),{winner,selfdraw,from,score}=result;
 if(selfdraw)return [0,1,2,3].filter(p=>p!==winner).map(p=>{
  const tai=score.total+(p===G.dealer?score.dealerExtra:0);
  return {payer:p,receiver:winner,tai,amount:base+tai*perTai};
 });
 return [{payer:from,receiver:winner,tai:score.total,amount:base+score.total*perTai}];
}
function paymentHtml(result){
 const rows=paymentRows(result),{base,perTai}=pointsConfig();
 const total=rows.reduce((x,r)=>x+r.amount,0),payers=new Map(rows.map(r=>[r.payer,r]));
 let markup='<div class="payment-title">📊 '+T(result.selfdraw?'paymentSelf':'paymentRon')+'</div>';
 markup+='<div class="pay-note">'+T('paymentFormula',{base,per:perTai})+'</div><div class="payments">';
 markup+='<div class="payrow winner"><span>🏆 '+nseat(result.winner)+' '+T('receiver')+'</span><strong class="amount">+'+total+' '+T('points')+'</strong></div>';
 for(let p=0;p<4;p++)if(p!==result.winner){const item=payers.get(p);markup+='<div class="payrow '+(item?'payer':'')+'"><span>'+nseat(p)+' '+((!result.selfdraw&&p===result.from)?T('shooter'):'')+'</span><strong class="amount">'+(item?'-'+item.amount:'0')+' '+T('points')+'</strong></div>';}
 markup+='</div><div class="pay-note">'+(result.selfdraw?T('paymentSelfNote'):T('paymentRonNote',{person:nseat(result.from)}))+'</div>';
 return markup;
}
function winGame(winner,selfdraw,from,t){let score=calcScore(winner,selfdraw,from,t);G.phase='ended';G.turn=winner;G.result={winner,selfdraw,from,t,score};G.pending=null;const paid=paymentRows(G.result);note('🀄 '+names[winner]+(selfdraw?' 自摸！':' 胡 '+names[from]+' 的 '+tileText(t)+'（放槍）！')+' 共 '+score.total+' 台；'+(selfdraw?'三家各付分數':names[from]+' 一人支付 '+paid[0].amount+' 分'), '🀄 '+SEATS_EN[winner]+(selfdraw?' won by self-draw!':' won on '+SEATS_EN[from]+"'s discard!")+' Total '+score.total+' tai. '+(selfdraw?'Each opponent pays a share.':SEATS_EN[from]+' pays '+paid[0].amount+' points.'));}
function canSelfHu(){return !!G&&G.phase==='discard'&&G.turn===0&&validComplete(G.players[0].hand,G.players[0].melds.length);}
function userKong(){if(G.phase==='claim'){if(G.pending&&G.pending.kong)userClaim('槓');return;}let a=kongCandidates(0);if(!a.length)return;if(a.length===1){ownKong(0,a[0]);render();return;}chooser=chooser==='kong'?'':'kong';render();}
function showHint(){if(!G||G.phase!=='discard'||G.turn!==0)return;let sorted=rankDiscards(G.players[0].hand,G.players[0].melds.length);if(!sorted.length)return;let h=sorted[0];hinted=h.tile;render();$('hintmsg').innerHTML='<strong>'+T('hintChoice',{tile:tileText(h.tile)})+'</strong>　'+(h.waits.length?T('hintWaits',{tiles:h.waits.map(tileText).join(LANG==='zh'?'、':', ')}):T('hintShape'))+'<br><small>'+T('hintLimit')+'</small>';$('hintmsg').classList.remove('hidden');}
function render(){if(!G)return;
 localizeUI();
 const p=G.players[0],pause=G.phase==='claim',discard=G.phase==='discard'&&G.turn===0,draw=G.phase==='draw'&&G.turn===0,ended=G.phase==='ended';
 $('point-summary').textContent=T('pointSummary',{base:pointsConfig().base,perTai:pointsConfig().perTai});
 $('wallcount').textContent=G.wall.length+' '+(LANG==='zh'?'張':'tiles');
 $('turnname').textContent=ended?T('ended'):pause?T('wait'):G.turn===0?T('turn'):T('botturn',{person:nseat(G.turn)});
 $('dora').textContent=T('dealer',{person:nseat(G.dealer)});
 $('lasttile').innerHTML=G.last?'<span class="mini">'+T('nowDiscard',{person:nseat(G.last.seat)})+'</span> '+tileHtml(G.last.tile):'<span class="mini">'+T('drawing')+'</span>';
 const wind=seat=> (LANG==='zh'?['東','南','西','北']:['East','South','West','North'])[(seat-G.dealer+4)%4];
 for(const ix of [1,2,3]){let x=G.players[ix];$('op'+ix).classList.toggle('active',G.turn===ix&&!ended);$('op'+ix).innerHTML='<div class="op-title">'+nseat(ix)+' · '+T('seatchar',{wind:wind(ix)})+(G.dealer===ix?'<span class="badge">'+T('badge')+'</span>':'')+' <small>'+T('handCount',{hand:x.hand.length,discard:x.discards.length})+'</small></div>'+(x.melds.length?'<div class="me-melds">'+x.melds.map(meldHtml).join('')+'</div>':'')+(x.flowers.length?'<div class="flowers">'+x.flowers.map(t=>tileHtml(t)).join('')+'</div>':'')+'<div class="tiles">'+x.discards.map(t=>tileHtml(t)).join('')+'</div>';}
 $('me-title').textContent=nseat(0)+' · '+T('seatchar',{wind:wind(0)})+(G.dealer===0?' ('+T('badge')+')':'');
 $('mecount').textContent=T('handCount',{hand:p.hand.length,discard:p.discards.length});$('myturnbadge').textContent=T('ready');$('myturnbadge').classList.toggle('hidden',!discard&&!draw&&!pause);
 $('me-melds').innerHTML=p.melds.map(meldHtml).join('');$('meflowers').innerHTML=p.flowers.map(t=>tileHtml(t)).join('');$('mydiscards').innerHTML=p.discards.map(t=>tileHtml(t)).join('');
 $('selection').textContent=(selected>=0&&selected<p.hand.length)?T('chosen',{tile:tileText(p.hand[selected])}):T('selection');
 $('myhand').innerHTML=p.hand.map((t,i)=>'<button class="tile '+(t<9?'man':t<18?'pin':t<27?'sou':t<31?'wind':'honor')+(selected===i?' selected':'')+(hinted===t?' hinted':'')+'" data-idx="'+i+'" aria-label="'+tileText(t)+'" title="'+tileText(t)+'" '+(discard?'':'disabled')+'>'+tileFaceSvg(t)+'</button>').join('');
 $('msg').textContent=ended?(G.result.draw?T('drawEnd'):T('winMsg',{person:nseat(G.result.winner),mode:T(G.result.selfdraw?'selfWin':'ronWin'),tai:G.result.score.total})):pause?T('claimMsg',{tile:tileText(G.pending.t)}):discard?T('discardMsg')+(canSelfHu()?T('canwin'):''):draw?T('drawMsg'):T('botMsg');
 $('draw').disabled=!draw;$('discard').disabled=!discard||selected<0;$('chow').disabled=!pause||!G.pending.chows.length;$('pong').disabled=!pause||!G.pending.pong;$('kong').disabled=!(pause&&G.pending.kong)&&!(discard&&kongCandidates(0).length);$('win').disabled=!(pause&&G.pending.hu)&&!canSelfHu();$('hint').disabled=!discard;$('pass').disabled=!pause;
 $('choices').classList.add('hidden');$('choices').innerHTML='';if(chooser==='chow'&&pause&&G.pending.chows.length>1){$('choices').innerHTML=T('chooseChow')+' '+G.pending.chows.map((ch,i)=>'<button class="btn ghost" data-chi="'+i+'">'+ch.seq.map(tileText).join(' · ')+'</button>').join('');$('choices').classList.remove('hidden');}if(chooser==='kong'&&discard){$('choices').innerHTML=T('chooseKong')+' '+kongCandidates(0).map((k,i)=>'<button class="btn ghost" data-kong="'+i+'">'+(LANG==='en'?({'暗槓':'Concealed Kong','補槓':'Added Kong'}[k.kind]||k.kind):k.kind)+' '+tileText(k.t)+'</button>').join('');$('choices').classList.remove('hidden');}
 if(hinted<0)$('hintmsg').classList.add('hidden');else if(!$('hintmsg').classList.contains('hidden')){let h=rankDiscards(p.hand,p.melds.length).find(x=>x.tile===hinted);if(h)$('hintmsg').innerHTML='<strong>'+T('hintChoice',{tile:tileText(h.tile)})+'</strong> '+(h.waits.length?T('hintWaits',{tiles:h.waits.map(tileText).join(LANG==='zh'?'、':', ')}):T('hintShape'))+'<br><small>'+T('hintLimit')+'</small>';}
 $('history').innerHTML=G.logs.map(s=>'<span class="logline">• '+(typeof s==='string'?s:(s[LANG]||s.zh))+'</span>').join('');
 if(ended){let r=G.result;
   if(r.draw){$('end').innerHTML='<h3>'+T('drawHead')+'</h3><p>'+T('drawDesc')+'</p><button class="btn primary" id="again">'+T('playAgain')+'</button>';}
   else{let win=r.winner,sk=r.score;$('end').innerHTML='<h3>'+(LANG==='en'?('🀄 '+nseat(win)+(r.selfdraw?(win===0?' win by self-draw!':' wins by self-draw!'):(win===0?' win!':' wins!'))):T('winResult',{person:nseat(win),mode:T(r.selfdraw?'selfShort':'ronShort')}))+'</h3><div>'+T('winningMethod')+' '+(r.selfdraw?T('selfShort'):T('onDiscard',{person:nseat(r.from)}))+' · '+(r.t===undefined||r.t===null?'':T('tileWin',{tile:tileText(r.t)}))+'</div>'+sk.add.map(([nm,n])=>'<div class="line"><span>'+localizeScore(nm)+'</span><strong>'+n+' '+T('tai')+'</strong></div>').join('')+'<div class="total">'+T('total',{tai:sk.total})+'</div>'+paymentHtml(r)+(sk.dealerExtra?'<div class="mini" style="color:#525b50;margin-top:7px">'+T('dealerExtra',{tai:sk.total+sk.dealerExtra,other:sk.total})+'</div>':'')+'<hr class="hr"><div>'+T('winningHand')+'<div class="tiles">'+sk.full.map(t=>tileHtml(t)).join('')+'</div></div><br><button class="btn primary" id="again">'+T('playAgain')+'</button>';
  }$('end').classList.remove('hidden');
 }else $('end').classList.add('hidden');
 try{localStorage.setItem('tw16mobile_v2',JSON.stringify({G,selected,hinted}));}catch(e){}
}
$('lang-toggle').addEventListener('click',()=>{LANG=LANG==='zh'?'en':'zh';try{localStorage.setItem('tw16lang_v5',LANG)}catch(e){};render()});
$('myhand').addEventListener('click',e=>{let b=e.target.closest('button[data-idx]');if(!b||b.disabled)return;let idx=+b.dataset.idx;if(idx===selected&&G.phase==='discard'&&G.turn===0){doDiscard(0,idx);runBots();render();return;}selected=idx;hinted=-1;render();});
$('draw').onclick=()=>{if(G.phase==='draw'&&G.turn===0){let t=drawRaw(0);if(t!==false){G.phase='discard';note('您摸到 '+tileText(t),'You drew a tile.');}render();}};
$('discard').onclick=()=>{if(G.phase!=='discard'||G.turn!==0||selected<0)return;doDiscard(0,selected);runBots();render();};
$('chow').onclick=()=>{if(!G.pending||!G.pending.chows.length)return;let x=G.pending.chows;if(x.length===1){userClaim('吃',x[0]);return;}chooser=chooser==='chow'?'':'chow';render();};
$('pong').onclick=()=>userClaim('碰');$('kong').onclick=()=>userKong();
$('win').onclick=()=>{if(G.phase==='claim'&&G.pending&&G.pending.hu){userClaim('胡');return;}if(canSelfHu()){winGame(0,true,null,G.lastDraw?G.lastDraw.tile:undefined);render();}};
$('hint').onclick=()=>showHint();$('pass').onclick=()=>userPass();$('newgame').onclick=()=>begin(false);$('practice').onclick=()=>begin(true);$('end').addEventListener('click',e=>{if(e.target.id==='again')begin(false)});
for(const id of ['base-points','tai-points']){
 $(id).addEventListener('input',()=>{
  const v=pointsConfig();try{localStorage.setItem('tw16points_v1',JSON.stringify(v));}catch(e){}
  if(G)render();
 });
}
try{let v=JSON.parse(localStorage.getItem('tw16points_v1')||'null');if(v){if(Number.isFinite(Number(v.base)))$('base-points').value=String(Math.max(0,Math.floor(Number(v.base))));if(Number.isFinite(Number(v.perTai)))$('tai-points').value=String(Math.max(0,Math.floor(Number(v.perTai))));}}catch(e){}
$('choices').addEventListener('click',e=>{let b=e.target.closest('button');if(!b)return;if(b.dataset.chi!==undefined&&G.pending){let c=G.pending.chows[+b.dataset.chi];userClaim('吃',c);}if(b.dataset.kong!==undefined){let k=kongCandidates(0)[+b.dataset.kong];if(k){ownKong(0,k);render();}}});
try{let langSaved=localStorage.getItem('tw16lang_v5');if(['zh','en'].includes(langSaved))LANG=langSaved;}catch(e){}
try{let saved=JSON.parse(localStorage.getItem('tw16mobile_v2')||'null');if(saved&&saved.G&&saved.G.players&&saved.G.players.length===4&&saved.G.wall&&saved.G.phase){G=saved.G;selected=typeof saved.selected==='number'?saved.selected:-1;hinted=typeof saved.hinted==='number'?saved.hinted:-1;if(G.phase==='ended'&&G.result&&!G.result.draw){const r=G.result;r.score=calcScore(r.winner,r.selfdraw,r.from,r.t);}render();}else begin(false);}catch(e){begin(false);}
})();
