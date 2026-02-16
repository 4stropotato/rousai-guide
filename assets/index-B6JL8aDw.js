(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(u){if(u.ep)return;u.ep=!0;const i=a(u);fetch(u.href,i)}})();const l=[{id:"steps",label:"Steps"},{id:"convo",label:"Phrases"},{id:"money",label:"Compensation"},{id:"checklist",label:"Checklist"},{id:"contacts",label:"Contacts"}],r="rousai-checklist";function o(){try{return JSON.parse(localStorage.getItem(r)||"{}")}catch{return{}}}function c(t,e){const a=o();a[t]=e,localStorage.setItem(r,JSON.stringify(a))}function g(t,e){navigator.clipboard.writeText(t).then(()=>{e.classList.add("copied"),e.textContent="Copied!",setTimeout(()=>{e.classList.remove("copied"),e.textContent="Copy Japanese text"},2e3)})}function h(t,e,a){return`<div class="phrase-box"><div class="jp">${t}</div><div class="romaji">${e}</div><div class="meaning">${a}</div></div>`}function d(t,e,a,s,u){return`<div class="convo-line ${t}"><div class="convo-label">${e}</div><div class="jp">${a}</div>${s?`<div class="romaji">${s}</div>`:""}<div class="meaning">${u}</div></div>`}function m(){return`
<div class="phase-header"><h3>PHASE 1: NGAYONG WEEK (Day 1-7)</h3><p>Immediate — Medical at FRESC muna</p></div>

<div class="step-card urgent">
  <div class="step-number">1</div>
  <h4>Tawagan ang FRESC</h4>
  <p><strong>Number: 0120-76-2029</strong> (FREE)</p>
  <p>Sabihin: <strong>"Tagalog please. I had a work accident. I need help with rousai and a lawyer."</strong></p>
  <p>Itanong mo:</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Paano i-verify kung nag-file na ng rousai ang employer?</li>
    <li>May ma-re-refer ba kayong libre na lawyer?</li>
    <li>Ano ang susunod na steps ko?</li>
  </ul>
</div>

<div class="step-card urgent">
  <div class="step-number">2</div>
  <h4>I-send ang Verification Message kay Yuta</h4>
  <p>Para may written record. I-send via LINE/email:</p>
  ${h("Yutaさん、お疲れ様です。労災の手続きを進めてくれているとのことで、ありがとうございます。確認のためいくつかお聞きしたいのですが：1) 労災の申請書類はもう提出しましたか？ 2) 提出先の労働基準監督署はどこですか？ 3) 受理番号か控えのコピーをもらえますか？","Yuta-san, otsukaresama desu. Rousai no tetsuzuki wo susumete kurete iru to no koto de, arigatou gozaimasu. Kakunin no tame ikutsuka okiki shitai no desu ga: 1) Rousai no shinsei shorui wa mou teishutsu shimashita ka? 2) Teishutsu-saki no roudou kijun kantoku-sho wa doko desu ka? 3) Juri-bangou ka hikae no copy wo moraemasu ka?","Salamat sa pag-asikaso ng rousai. Para ma-confirm: 1) Na-submit na ba ang forms? 2) Saang Labor Office? 3) Pwede bang makakuha ng receipt/reference number?")}
  <button class="copy-btn" data-copy="yuta">Copy Japanese text</button>
  <div class="highlight danger" style="margin-top:12px">I-SCREENSHOT ang reply niya. Ito ang evidence mo.</div>
</div>

<div class="step-card urgent">
  <div class="step-number">3</div>
  <h4>Bumalik sa Hospital</h4>
  <p>Sabihin: <strong>労災です (Rousai desu)</strong></p>
  <p>Humingi ng:</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li><strong>診断書 (Shindansho)</strong> — medical certificate</li>
    <li>Referral sa <strong>脳神経外科 (Neurologist)</strong> — para sa dizziness/head</li>
    <li>Referral sa <strong>耳鼻咽喉科 (ENT)</strong> — para sa hearing</li>
  </ul>
  <p>I-report LAHAT ng symptoms: dizziness, headache, hearing problem, knee pain, finger pain, can't sleep, anxiety</p>
  <p style="color:var(--warning)">Bayad ng shindansho: ~¥3,000-5,000 (ire-reimburse sa rousai later)</p>
</div>

<div class="step-card">
  <div class="step-number">4</div>
  <h4>Kolektahin ang Documents</h4>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Payslips (給与明細) — last 3 months minimum</li>
    <li>Employment contract kung meron</li>
    <li>Photos ng injuries (kunan araw-araw)</li>
    <li>Screenshots ng messages kay Yuta</li>
    <li>Hospital receipts</li>
    <li>Shindansho</li>
  </ul>
</div>

<div class="phase-header"><h3>PHASE 2: WEEK 2 — Verification at Specialist</h3><p>I-verify ang rousai at magpa-specialist</p></div>

<div class="step-card warn">
  <div class="step-number">5</div>
  <h4>I-verify sa Labor Standards Office (労働基準監督署)</h4>
  <p>Hanapin: <strong>川崎南労働基準監督署</strong> (Kawasaki Minami Labor Office)</p>
  <p>Sabihin ang company name: 二宮工業 (Ninomiya Kougyo) at accident date</p>
  <p>Kung HINDI pa nag-file si Yuta → ikaw mismo ang mag-file. Pwede yan.</p>
</div>

<div class="step-card warn">
  <div class="step-number">6</div>
  <h4>Pumunta sa Neurologist (脳神経外科)</h4>
  <p>Gamit ang referral mula sa hospital</p>
  <p>Kung may diagnosis ng concussion/TBI = MALAKING impact sa compensation</p>
</div>

<div class="step-card warn">
  <div class="step-number">7</div>
  <h4>Pumunta sa ENT Doctor (耳鼻咽喉科)</h4>
  <p>Hearing test (聴力検査)</p>
  <p>Kung may permanent hearing loss = DISABILITY GRADE = malaking compensation</p>
</div>

<div class="phase-header"><h3>PHASE 3: WEEK 2-4 — Legal Action</h3><p>Kumuha ng lawyer at file civil damages</p></div>

<div class="step-card ok">
  <div class="step-number">8</div>
  <h4>Kumuha ng Lawyer</h4>
  <p><strong>LIBRE ang lawyer:</strong></p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li><strong>FRESC referral</strong> — mula sa Step 1</li>
    <li><strong>法テラス (Houterasu)</strong> — 0570-078374, free consult, covers lawyer fees kung low income</li>
    <li><strong>"No Win, No Fee"</strong> lawyer — zero gastos, percentage lang sa nanalo</li>
  </ul>
</div>

<div class="step-card ok">
  <div class="step-number">9</div>
  <h4>Lawyer Files Civil Damages (民事損害賠償)</h4>
  <p>Ang lawyer ang gagawa nito. Basis: employer negligence</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Binago ni Yuta ang safe testing location</li>
    <li>Hindi pinansin ang safety warning mo</li>
    <li>Hindi ka assigned sa kimitsu test pero na-injure ka</li>
  </ul>
</div>

<div class="phase-header"><h3>PHASE 4-5: MONTH 1-24 — Recovery at Resolution</h3><p>Regular visits, disability assessment, settlement</p></div>

<div class="step-card">
  <div class="step-number">10</div>
  <h4>Regular Hospital/Specialist Visits</h4>
  <p>Every 1-2 weeks. I-report LAHAT ng symptoms every visit.</p>
  <p>HUWAG bumalik sa trabaho hanggang cleared ng doctor.</p>
</div>

<div class="step-card">
  <div class="step-number">11</div>
  <h4>Disability Assessment (kung may permanent symptoms)</h4>
  <p>After treatment period (6 months - 1.5 years)</p>
  <p>Kung may natitirang dizziness/hearing loss = disability grade = LUMP SUM/PENSION</p>
</div>

<div class="step-card ok">
  <div class="step-number">12</div>
  <h4>Settlement / Court Decision</h4>
  <p>Ang lawyer ang bahala. Negotiated settlement o court.</p>
  <p>RECEIVE COMPENSATION.</p>
</div>

<div class="warning-box">
  <h4>GOLDEN RULES — HUWAG KALIMUTAN</h4>
  <ul>
    <li>HUWAG mag-sign ng kahit ano galing kay Yuta nang walang lawyer</li>
    <li>HUWAG bumalik sa trabaho hanggang cleared ng doctor</li>
    <li>HUWAG kalimutan ang CIVIL DAMAGES — ito ang malaking pera</li>
    <li>I-save LAHAT ng documents, messages, receipts, photos</li>
    <li>Lahat ng communication IN WRITING — LINE/email, hindi verbal lang</li>
  </ul>
</div>
`}function p(){return`
<h2 class="section-title">Conversation Phrases</h2>

<div class="card">
  <h3>Pagtawag sa FRESC (0120-76-2029)</h3>
  ${d("them","FRESC","お電話ありがとうございます。FRESCです。","Odenwa arigatou gozaimasu. FRESC desu.","Thank you for calling. This is FRESC.")}
  ${d("you","IKAW","すみません、タガログ語の通訳をお願いできますか？","Sumimasen, Tagalog-go no tsuuyaku wo onegai dekimasu ka?","Pwede bang mag-Tagalog interpreter?")}
  ${d("them","FRESC","はい、少々お待ちください。","Hai, shoushou omachi kudasai.","Yes, please wait.")}
  <div class="highlight">Pagkatapos nito, mag-Tagalog/English ka na. Sabihin mo ang situation mo.</div>
</div>

<div class="card">
  <h3>Sa Hospital — Pagkuha ng Shindansho</h3>
  ${d("you","IKAW","すみません、診断書をお願いしたいのですが。","Sumimasen, shindansho wo onegai shitai no desu ga.","Gusto kong humingi ng medical certificate.")}
  ${d("them","STAFF","はい、どのような目的ですか？","Hai, dono you na mokuteki desu ka?","For what purpose?")}
  ${d("you","IKAW","労災です。仕事中の事故で怪我をしました。","Rousai desu. Shigoto-chuu no jiko de kega wo shimashita.","Workers’ comp. Na-injure ako sa work accident.")}
  ${d("you","IKAW","まだめまいが続いています。専門医を紹介してもらえますか？","Mada memai ga tsuzuite imasu. Senmon-i wo shoukai shite moraemasu ka?","May dizziness pa rin. Pwede bang i-refer sa specialist?")}
  ${d("you","IKAW","診断書に「休業が必要」と書いてもらえますか？",'Shindansho ni "kyuugyou ga hitsuyou" to kaite moraemasu ka?',"Pwede bang isulat sa certificate na kailangan ko ng rest from work?")}
  ${d("you","IKAW","脳神経外科への紹介状をお願いできますか？","Nou-shinkei-geka e no shoukai-jou wo onegai dekimasu ka?","Pwede bang humingi ng referral letter sa neurologist?")}
  ${d("you","IKAW","耳鼻咽喉科もお願いします。","Jibi-inkou-ka mo onegai shimasu.","Pati ENT doctor.")}
</div>

<div class="card">
  <h3>Kay Yuta — Pag-verify ng Rousai</h3>
  ${d("you","IKAW","Yutaさん、労災の手続きの件なんですが。もう書類は提出しましたか？","Yuta-san, rousai no tetsuzuki no ken nan desu ga. Mou shorui wa teishutsu shimashita ka?","Yuta-san, tungkol sa rousai paperwork. Na-submit na ba ang documents?")}
  ${d("you","IKAW","確認のために、受理番号か控えをもらえますか？","Kakunin no tame ni, juri-bangou ka hikae wo moraemasu ka?","Para sa records ko, pwede bang makuha ang receipt number o copy?")}
  <div class="highlight danger">Kung mag-offer siya ng pera para "settle":</div>
  ${d("you","IKAW","ありがとうございます。ただ、まず弁護士に相談してから返事します。","Arigatou gozaimasu. Tada, mazu bengoshi ni soudan shite kara henji shimasu.","Salamat. Pero magpa-consult muna ako sa lawyer bago mag-reply.")}
</div>

<div class="card">
  <h3>Sa Labor Standards Office</h3>
  ${d("you","IKAW","労災の届出について相談したいのですが。","Rousai no todokede ni tsuite soudan shitai no desu ga.","Gusto kong mag-consult tungkol sa rousai filing.")}
  ${d("you","IKAW","会社名は二宮工業です。会社が労災申請をしたか確認したいです。","Kaisha-mei wa Ninomiya Kougyo desu. Kaisha ga rousai shinsei wo shita ka kakunin shitai desu.","Company: Ninomiya Kougyo. Gusto kong i-verify kung nag-file sila ng rousai.")}
  ${d("you","IKAW","自分で申請することはできますか？","Jibun de shinsei suru koto wa dekimasu ka?","Pwede ko bang i-file personally?")}
</div>

<div class="card">
  <h3>Emergency Phrases</h3>
  <div class="table-wrap"><table>
    <tr><th>Situation</th><th>Japanese</th><th>Romaji</th><th>Meaning</th></tr>
    <tr><td>Nahihilo</td><td>めまいがします</td><td>Memai ga shimasu</td><td>I feel dizzy</td></tr>
    <tr><td>Sumasakit ulo</td><td>頭が痛いです</td><td>Atama ga itai desu</td><td>I have a headache</td></tr>
    <tr><td>Hindi marinig</td><td>耳が聞こえにくいです</td><td>Mimi ga kikoe nikui desu</td><td>I can't hear well</td></tr>
    <tr><td>Sumasakit tuhod</td><td>膝が痛いです</td><td>Hiza ga itai desu</td><td>My knee hurts</td></tr>
    <tr><td>Di maintindihan</td><td>わかりません</td><td>Wakarimasen</td><td>I don't understand</td></tr>
    <tr><td>Tagalog please</td><td>タガログ語でお願いします</td><td>Tagalog-go de onegai shimasu</td><td>In Tagalog please</td></tr>
    <tr><td>Work accident</td><td>労災です</td><td>Rousai desu</td><td>This is a work injury</td></tr>
    <tr><td>Tulong</td><td>助けてください</td><td>Tasukete kudasai</td><td>Please help me</td></tr>
    <tr><td>Hindi makatulog</td><td>眠れません</td><td>Nemuremasen</td><td>I can't sleep</td></tr>
    <tr><td>Kinakabahan</td><td>不安です</td><td>Fuan desu</td><td>I feel anxious</td></tr>
  </table></div>
</div>
`}function f(){return`
<h2 class="section-title">Compensation Estimation</h2>

<div class="card">
  <h3>Assumptions</h3>
  <p>Monthly salary estimate: ¥250,000 - ¥350,000</p>
  <p>Average used: <strong>¥300,000/month (¥10,000/day)</strong></p>
  <p>I-adjust kung mas mataas o mababa ang actual sahod mo.</p>
</div>

<div class="card">
  <h3>CLAIM 1: Rousai Benefits (労災保険) — GUARANTEED</h3>
  <p style="color:var(--accent)">Ito ang MINIMUM na makukuha mo. Automatic benefit ng lahat ng workers.</p>

  <h3 style="margin-top:16px">A. Medical (療餌補償給付) — 100% Covered</h3>
  <div class="table-wrap"><table>
    <tr><th>Item</th><th>Estimated Cost</th><th>You Pay</th></tr>
    <tr><td>Emergency room</td><td>¥50,000 - ¥100,000</td><td class="amt">¥0</td></tr>
    <tr><td>CT scan, X-ray</td><td>¥20,000 - ¥40,000</td><td class="amt">¥0</td></tr>
    <tr><td>Neurologist visits</td><td>¥10,000 - ¥30,000 each</td><td class="amt">¥0</td></tr>
    <tr><td>ENT / Hearing test</td><td>¥10,000 - ¥20,000 each</td><td class="amt">¥0</td></tr>
    <tr><td>MRI (kung kailangan)</td><td>¥30,000 - ¥50,000</td><td class="amt">¥0</td></tr>
    <tr><td>Medications</td><td>¥5,000 - ¥15,000/month</td><td class="amt">¥0</td></tr>
    <tr><td><strong>TOTAL</strong></td><td><strong>¥200,000 - ¥500,000+</strong></td><td class="amt"><strong>¥0</strong></td></tr>
  </table></div>

  <h3 style="margin-top:16px">B. Leave Pay (休業補償) — 80% ng Sahod</h3>
  <div class="table-wrap"><table>
    <tr><th>Recovery Period</th><th>Monthly</th><th>Total Leave Pay</th></tr>
    <tr><td>3 months</td><td>¥240,000/mo</td><td class="amt">¥720,000</td></tr>
    <tr><td>6 months</td><td>¥240,000/mo</td><td class="amt">¥1,440,000</td></tr>
    <tr><td>12 months</td><td>¥240,000/mo</td><td class="amt">¥2,920,000</td></tr>
  </table></div>

  <h3 style="margin-top:16px">C. Disability (障害補償) — Kung may Permanent Symptoms</h3>
  <div class="table-wrap"><table>
    <tr><th>Grade</th><th>Condition</th><th>Total</th></tr>
    <tr><td>Grade 14</td><td>Mild persistent symptoms</td><td class="amt">¥640,000</td></tr>
    <tr><td>Grade 13</td><td>Mild functional impairment</td><td class="amt">¥1,150,000</td></tr>
    <tr><td>Grade 12</td><td>Moderate hearing loss / persistent dizziness</td><td class="amt">¥1,760,000</td></tr>
    <tr><td>Grade 11</td><td>Significant hearing loss one ear</td><td class="amt">¥2,520,000</td></tr>
    <tr><td>Grade 10</td><td>Major functional limitation</td><td class="amt">¥3,410,000</td></tr>
    <tr><td>Grade 9</td><td>Severe hearing loss / chronic neurological</td><td class="amt">¥4,410,000</td></tr>
  </table></div>
</div>

<div class="card">
  <h3>CLAIM 2: Civil Damages (民事損害賠償) — KAILANGAN NG LAWYER</h3>
  <p style="color:var(--warning)">ITO ANG MALAKING PERA. Hiwalay sa rousai. Basis: employer negligence.</p>

  <h3 style="margin-top:16px">A. Pain & Suffering (慰謝料)</h3>
  <div class="table-wrap"><table>
    <tr><th>Type</th><th>Grade 14</th><th>Grade 12</th><th>Grade 9-10</th></tr>
    <tr><td>Treatment period</td><td>¥730,000</td><td>¥1,670,000</td><td>¥2,360,000</td></tr>
    <tr><td>Disability</td><td>¥1,100,000</td><td>¥2,900,000</td><td>¥5,500,000-¥6,900,000</td></tr>
    <tr><td><strong>Subtotal</strong></td><td class="amt">¥1,830,000</td><td class="amt">¥4,570,000</td><td class="amt">¥7,860,000-¥9,260,000</td></tr>
  </table></div>

  <h3 style="margin-top:16px">B. Lost Wages Top-Up (20% + overtime)</h3>
  <div class="table-wrap"><table>
    <tr><th>Recovery</th><th>Amount</th></tr>
    <tr><td>3 months</td><td class="amt">¥230,000 - ¥330,000</td></tr>
    <tr><td>6 months</td><td class="amt">¥460,000 - ¥660,000</td></tr>
    <tr><td>12 months</td><td class="amt">¥920,000 - ¥1,320,000</td></tr>
  </table></div>

  <h3 style="margin-top:16px">C. Lost Future Earnings (逸失利益) — Kung may Permanent Disability</h3>
  <p>Based sa: Annual income x Disability % x Remaining working years</p>
  <div class="table-wrap"><table>
    <tr><th>Grade</th><th>Capacity Loss</th><th>Estimated</th></tr>
    <tr><td>Grade 14</td><td>5%</td><td class="amt">¥2,700,000 - ¥3,200,000</td></tr>
    <tr><td>Grade 12</td><td>14%</td><td class="amt">¥7,600,000 - ¥9,000,000</td></tr>
    <tr><td>Grade 10</td><td>27%</td><td class="amt">¥14,600,000 - ¥17,400,000</td></tr>
    <tr><td>Grade 9</td><td>35%</td><td class="amt">¥18,900,000 - ¥22,500,000</td></tr>
  </table></div>
</div>

<div class="grand-total">
  <h3>GRAND TOTAL ESTIMATION (Rousai + Civil Damages - Lawyer Fee)</h3>
  <div class="table-wrap"><table style="min-width:300px">
    <tr><th>Scenario</th><th>Net Sa'yo</th><th>Sa PHP</th></tr>
    <tr><td><strong>CONSERVATIVE</strong><br>3mo rest, Grade 14</td><td class="amt-big">¥5,000,000 - ¥5,500,000</td><td class="amt-big">₱1.9M - ₱2.1M</td></tr>
    <tr><td><strong>MIDDLE</strong><br>6mo rest, Grade 12</td><td class="amt-big">¥12,500,000 - ¥14,000,000</td><td class="amt-big">₱4.8M - ₱5.3M</td></tr>
    <tr><td><strong>HIGH</strong><br>12mo rest, Grade 9-10</td><td class="amt-big">¥27,000,000 - ¥30,000,000</td><td class="amt-big">₱10.3M - ₱11.4M</td></tr>
  </table></div>
  <p class="sub-number" style="margin-top:16px">Lawyer fee (20-30%) is already deducted from these amounts</p>
</div>

<div class="card">
  <h3>Paano Ma-Maximize</h3>
  <div class="highlight ok">
    <strong>TATAAS ang compensation kung:</strong><br>
    Mas matagal ang treatment &bull; May specialist diagnosis (concussion/TBI) &bull; May permanent hearing loss &bull; May mataas na disability grade &bull; May lawyer for civil damages
  </div>
  <div class="highlight danger">
    <strong>BABABA ang compensation kung:</strong><br>
    Bumalik ka agad sa work &bull; Hindi nagpa-specialist &bull; Nag-sign ng settlement nang walang lawyer &bull; Hindi na-document ang symptoms &bull; Rousai lang ang kinuha (walang civil claim)
  </div>
</div>
`}function b(){const t=[{id:"c1",text:'Tawagan FRESC (0120-76-2029) — "Tagalog please"',phase:"Week 1"},{id:"c2",text:"I-send verification message kay Yuta (LINE/email)",phase:"Week 1"},{id:"c3",text:"I-screenshot ang reply ni Yuta",phase:"Week 1"},{id:"c4",text:'Bumalik sa hospital — sabihin "Rousai desu"',phase:"Week 1"},{id:"c5",text:"Kumuha ng Shindansho (medical certificate)",phase:"Week 1"},{id:"c6",text:"Humingi ng referral sa Neurologist",phase:"Week 1"},{id:"c7",text:"Humingi ng referral sa ENT doctor",phase:"Week 1"},{id:"c8",text:"Kumuha ng photos ng injuries",phase:"Week 1"},{id:"c9",text:"Kolektahin payslips (last 3 months)",phase:"Week 1"},{id:"c10",text:"I-verify sa Labor Office na na-file ang rousai",phase:"Week 2"},{id:"c11",text:"Pumunta sa Neurologist",phase:"Week 2"},{id:"c12",text:"Pumunta sa ENT — hearing test",phase:"Week 2"},{id:"c13",text:"Kumuha ng lawyer (via FRESC o Houterasu)",phase:"Week 2-3"},{id:"c14",text:"Lawyer files civil damages claim",phase:"Week 3-4"},{id:"c15",text:"Regular hospital visits (every 1-2 weeks)",phase:"Ongoing"},{id:"c16",text:"I-report lahat ng symptoms every visit",phase:"Ongoing"},{id:"c17",text:"I-save lahat ng receipts at documents",phase:"Ongoing"},{id:"c18",text:"Disability assessment (kung may permanent symptoms)",phase:"Month 6+"}],e=o();let a='<h2 class="section-title">Progress Checklist</h2>';a+='<p style="color:var(--text-dim);margin-bottom:16px;font-size:0.9rem">I-click ang box para i-mark as done. Naka-save ito sa phone/browser mo.</p>',a+='<div class="card"><ul class="checklist">';let s="";for(const u of t){u.phase!==s&&(s=u.phase,a+=`<li style="border-bottom:none;padding:4px 0"><strong style="color:var(--accent);font-size:0.8rem">${s}</strong></li>`);const i=e[u.id];a+=`<li class="${i?"done":""}" data-id="${u.id}"><div class="check-box ${i?"checked":""}"></div><span>${u.text}</span></li>`}return a+="</ul></div>",a+=`<div class="warning-box">
    <h4>HUWAG KALIMUTAN</h4>
    <ul>
      <li>HUWAG mag-sign ng settlement/waiver nang walang lawyer</li>
      <li>HUWAG bumalik sa trabaho hanggang cleared ng doctor</li>
      <li>HUWAG sabihing "okay na ako" sa doctor kung hindi pa talaga</li>
      <li>Lahat ng communication kay Yuta = IN WRITING (LINE/email)</li>
    </ul>
  </div>`,a}function v(){return`
<h2 class="section-title">Important Contacts</h2>

<div class="card" style="border-left:4px solid var(--danger)">
  <h3>FRESC — Foreign Residents Support Center</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0120762029" style="color:var(--text);text-decoration:none">0120-76-2029</a></p>
  <p>FREE • May Tagalog/English support</p>
  <p>Para sa: Rousai help, lawyer referral, general support</p>
  <p>Hours: Weekdays 9:00-17:00</p>
</div>

<div class="card">
  <h3>法テラス (Houterasu) — Japan Legal Support Center</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0570078374" style="color:var(--text);text-decoration:none">0570-078374</a></p>
  <p>Free consultation x3 • Covers lawyer fees kung low income</p>
  <p>Para sa: Lawyer, legal aid application</p>
</div>

<div class="card">
  <h3>労働基準監督署 — Labor Standards Office</h3>
  <p>Hanapin: <strong>川崎南労働基準監督署</strong></p>
  <p>Search online: "川崎南労働基準監督署" for exact address/number</p>
  <p>Para sa: Verify rousai filing, file rousai yourself</p>
</div>

<div class="card">
  <h3>Emergency</h3>
  <div class="table-wrap"><table>
    <tr><td><strong>Ambulance/Fire</strong></td><td style="font-size:1.2rem;font-weight:700">119</td></tr>
    <tr><td><strong>Police</strong></td><td style="font-size:1.2rem;font-weight:700">110</td></tr>
    <tr><td><strong>TELL Lifeline</strong> (English counseling)</td><td style="font-size:1.2rem;font-weight:700">03-5774-0992</td></tr>
  </table></div>
</div>

<div class="card">
  <h3>Your Information (for reference)</h3>
  <div class="table-wrap"><table>
    <tr><td>Name</td><td>谷村 新司 (Tanimura Shinji)</td></tr>
    <tr><td>Address</td><td>〒210-0846 神奈川県川崎市川崎区小田5-28-9 ハイムアーゼル 102</td></tr>
    <tr><td>Phone</td><td>080-9819-0205</td></tr>
    <tr><td>Email</td><td>shinji.tanimura10@gmail.com</td></tr>
    <tr><td>Employer</td><td>Ninomiya Kougyo (二宮工業)</td></tr>
  </table></div>
</div>

<div class="card">
  <h3>Time Limits — May Oras Ka Pa</h3>
  <div class="table-wrap"><table>
    <tr><th>Claim</th><th>Deadline</th></tr>
    <tr><td>Medical (療餌補償)</td><td>2 years mula sa accident</td></tr>
    <tr><td>Leave Pay (休業補償)</td><td>2 years mula sa araw na hindi ka nakapasok</td></tr>
    <tr><td>Disability (障害補償)</td><td>5 years mula sa injury stabilized</td></tr>
    <tr><td>Civil Damages (慰謝料)</td><td>3 years (or 5 depende sa case)</td></tr>
  </table></div>
  <div class="highlight ok">Hindi pa huli. Pero mas maaga ka kumilos, mas malakas ang case mo.</div>
</div>
`}function y(){const t=document.querySelector("#app");t.innerHTML=`
<div class="header">
  <h1>Work Accident Rousai Guide</h1>
  <p>Step-by-step na gabay para sa workers' compensation claim sa Japan</p>
</div>

<div class="emergency-banner">
  <h2>UNANG TAWAG MO BUKAS</h2>
  <div class="phone"><a href="tel:0120762029">0120-76-2029</a></div>
  <div class="sub">FRESC — FREE, may Tagalog support — "Tagalog please"</div>
</div>

<div class="nav">
  ${l.map(a=>`<button class="nav-btn ${a.id==="steps"?"active":""}" data-tab="${a.id}">${a.label}</button>`).join("")}
</div>

<div class="section active" data-section="steps">${m()}</div>
<div class="section" data-section="convo">${p()}</div>
<div class="section" data-section="money">${f()}</div>
<div class="section" data-section="checklist">${b()}</div>
<div class="section" data-section="contacts">${v()}</div>
`,t.querySelectorAll(".nav-btn").forEach(a=>{a.addEventListener("click",()=>{t.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("active")),t.querySelectorAll(".section").forEach(s=>s.classList.remove("active")),a.classList.add("active"),t.querySelector(`[data-section="${a.dataset.tab}"]`).classList.add("active")})}),t.querySelectorAll(".checklist li[data-id]").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.id,i=a.querySelector(".check-box").classList.toggle("checked");a.classList.toggle("done",i),c(s,i)})});const e=`Yutaさん、お疲れ様です。労災の手続きを進めてくれているとのことで、ありがとうございます。確認のためいくつかお聞きしたいのですが：

1) 労災の申請書類はもう提出しましたか？
2) 提出先の労働基準監督署はどこですか？
3) 受理番号か控えのコピーをもらえますか？

まだめまいと聴覚の違和感が続いていて、医師から専門医への紹介が必要と言われています。今後の治療費も労災で対応をお願いします。`;t.querySelectorAll(".copy-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),a.dataset.copy==="yuta"&&g(e,a)})})}y();
