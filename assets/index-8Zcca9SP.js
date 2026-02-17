(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerPolicy&&(n.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?n.credentials="include":u.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(u){if(u.ep)return;u.ep=!0;const n=a(u);fetch(u.href,n)}})();const g=[{id:"steps",label:"Steps"},{id:"convo",label:"Phrases"},{id:"money",label:"Compensation"},{id:"lawyer",label:"Lawyer"},{id:"checklist",label:"Checklist"},{id:"contacts",label:"Contacts"}],r="rousai-checklist";function l(){try{return JSON.parse(localStorage.getItem(r)||"{}")}catch{return{}}}function c(i,t){const a=l();a[i]=t,localStorage.setItem(r,JSON.stringify(a))}function p(i,t){navigator.clipboard.writeText(i).then(()=>{t.classList.add("copied"),t.textContent="Copied!",setTimeout(()=>{t.classList.remove("copied"),t.textContent="Copy Japanese text"},2e3)})}function o(i,t,a){return`<div class="phrase-box"><div class="jp">${i}</div><div class="romaji">${t}</div><div class="meaning">${a}</div></div>`}function e(i,t,a,s,u){return`<div class="convo-line ${i}"><div class="convo-label">${t}</div><div class="jp">${a}</div>${s?`<div class="romaji">${s}</div>`:""}<div class="meaning">${u}</div></div>`}function m(){return`
<div class="warning-box" style="margin-bottom:20px">
  <h4>BABALA TUNGKOL KAY YUTA</h4>
  <p style="margin-bottom:8px">Ang behavior ni Yuta ay RED FLAG. Hindi siya nag-aalaga sa'yo — <strong>binabantayan ka niya</strong>:</p>
  <ul>
    <li>Kasama ka sa emergency at hospital — nagmamasid lang</li>
    <li>Hindi nag-offer mag-file ng rousai agad</li>
    <li>Nag-insist na siya ang sasama sa hospital, hindi si Naomi (asawa mo)</li>
    <li>Gusto niyang ma-control kung ano ang maririnig mo at sasabihin mo sa doctor</li>
  </ul>
  <p style="margin-top:10px"><strong>Bakit?</strong> Kasi kasalanan niya ang accident (binago ang safe location, hindi pinansin ang babala mo). Ayaw niyang mag-file ka ng malaking claim.</p>
  <p style="margin-top:8px;color:white"><strong>RULE: Si NAOMI ang isama mo sa hospital, HINDI si Yuta.</strong></p>
</div>

<div class="phase-header"><h3>NGAYON — TAMANG ORDER NG GAGAWIN</h3><p>FRESC muna para may guide ka bago hospital</p></div>

<div class="highlight ok" style="margin-bottom:16px">
  <strong>WHY CALL FRESC BEFORE THE HOSPITAL?</strong><br>
  If you call FRESC first, they will tell you EXACTLY what to do at the hospital — what to say, what to ask for, how to handle rousai. You'll be more confident when you go. The shindansho won't disappear — you can get it today or next week.
</div>

<div class="step-card urgent">
  <div class="step-number">1</div>
  <h4>9:00 AM — Call FRESC (DO THIS FIRST)</h4>
  <p style="font-size:1.1rem;font-weight:700"><a href="tel:0120762029" style="color:var(--accent);text-decoration:none">0120-76-2029</a> (FREE)</p>
  <p>Open: Weekdays 9:00-17:00</p>
  <p>Say: <strong>"Tagalog please"</strong> or <strong>"English please"</strong></p>
  <p>Then explain your situation:</p>
  <p style="background:var(--bg);padding:12px;border-radius:8px;margin:8px 0;font-size:0.9rem">"I had a work accident 2 days ago. I was hit during a pressure test (kimitsu test) at my employer's factory. I have head injury, dizziness, hearing problems, knee pain, and 9 stitches on my finger. My employer says he filed rousai but I'm not sure. I need help with: (1) verifying the rousai, (2) getting a lawyer for civil damages, and (3) what to do at the hospital. I have no money for a lawyer. My wife is pregnant and I have a child."</p>
  <p style="margin-top:10px">Also ask:</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>What should I do at the hospital? What should I ask for?</li>
    <li>How can I verify if my employer actually filed rousai?</li>
    <li>Can you refer me to a free lawyer?</li>
    <li>Do I need to tell my employer that I'm going to the hospital?</li>
  </ul>
  <div class="highlight">They will guide you through EVERYTHING — hospital, rousai, lawyer. You don't have to figure this out alone. It's their job.</div>
</div>

<div class="step-card urgent">
  <div class="step-number">2</div>
  <h4>Pagkatapos ng FRESC — Tawagan ang Hospital para mag-Schedule</h4>
  <p>Tumawag sa hospital kung saan ka nag-emergency para mag-set ng appointment:</p>
  ${o("先日救急で受診した者ですが、まだめまいが続いているので受診したいです。今日行っても大丈夫ですか？","Senjitsu kyuukyuu de jushin shita mono desu ga, mada memai ga tsuzuite iru node jushin shitai desu. Kyou itte mo daijoubu desu ka?","Pumunta ako sa emergency kamakailan. May dizziness pa rin, gusto ko magpa-check. Pwede ba pumunta ngayon?")}
  <button class="copy-btn" data-copy="hospital-call">Copy Japanese text</button>
  <p style="color:var(--text-dim);font-size:0.85rem;margin-top:8px">Kung pwede ngayon &rarr; pumunta. Kung kailangan ng schedule &rarr; sila mag-set. Either way okay lang.</p>
</div>

<div class="step-card urgent">
  <div class="step-number">3</div>
  <h4>Pumunta sa Hospital — KASAMA SI NAOMI, HINDI SI YUTA</h4>
  <p><strong>HUWAG sabihin kay Yuta. Hindi niya kailangan malaman.</strong></p>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Kung mag-insist si Yuta na sasama:</p>
  ${o("大丈夫です。妻と行きます。","Daijoubu desu. Tsuma to ikimasu.","Okay lang. Kasama ko ang asawa ko.")}
  <button class="copy-btn" data-copy="decline">Copy Japanese text</button>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Sa reception:</p>
  ${o("労災です。仕事中の事故で怪我をしました。","Rousai desu. Shigoto-chuu no jiko de kega wo shimashita.","Workers’ comp ito. Na-injure ako sa work accident.")}

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Para hindi ma-contact si Yuta:</p>
  ${o("会社には連絡しないでください。個人で来ています。","Kaisha ni wa renraku shinaide kudasai. Kojin de kite imasu.","Huwag po i-contact ang company ko. Personal ang pagpunta ko.")}
  <button class="copy-btn" data-copy="privacy">Copy Japanese text</button>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Sa doctor — I-report lahat ng symptoms:</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>めまいがします (Memai ga shimasu) = Nahihilo</li>
    <li>頭が痛いです (Atama ga itai desu) = Sumasakit ulo</li>
    <li>耳が聞こえにくいです (Mimi ga kikoe nikui desu) = Hindi marinig ng maayos</li>
    <li>膝が痛いです (Hiza ga itai desu) = Sumasakit tuhod</li>
    <li>眠れません (Nemuremasen) = Hindi makatulog</li>
    <li>不安です (Fuan desu) = Kinakabahan</li>
  </ul>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Humingi ng Shindansho:</p>
  ${o("診断書をお願いしたいのですが。労災で使います。診断書に「休業が必要」と書いてもらえますか？",'Shindansho wo onegai shitai no desu ga. Rousai de tsukaimasu. Shindansho ni "kyuugyou ga hitsuyou" to kaite moraemasu ka?',"Gusto ko po ng medical certificate. Para sa rousai. Pwede bang isulat na kailangan ko ng rest from work?")}
  <button class="copy-btn" data-copy="shindansho">Copy Japanese text</button>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Humingi ng Specialist Referrals:</p>
  ${o("脳神経外科への紹介状をお願いできますか？耳鼻咽喉科もお願いします。","Nou-shinkei-geka e no shoukai-jou wo onegai dekimasu ka? Jibi-inkou-ka mo onegai shimasu.","Pwede bang humingi ng referral sa neurologist? Pati ENT doctor.")}
  <button class="copy-btn" data-copy="referral">Copy Japanese text</button>

  <div class="highlight warn" style="margin-top:12px">
    <strong>Bayad ng shindansho:</strong> ~¥3,000-5,000 yen. Ire-reimburse sa rousai later.
  </div>
</div>

<div class="step-card">
  <div class="step-number">4</div>
  <h4>LAST — Message kay Yuta (Pagkatapos ng FRESC at Hospital)</h4>
  <p><strong>Ito ang HULI — pag may shindansho ka na at nakausap mo na FRESC.</strong></p>
  <p>Bakit last? Para hindi siya maka-interfere sa hospital o ma-pressure ka.</p>
  <p style="margin-top:10px">I-send sa LINE/email:</p>
  ${o("Yutaさん、お疲れ様です。労災の手続きを進めてくれているとのことで、ありがとうございます。確認のためいくつかお聞きしたいのですが：1) 労災の申請書類はもう提出しましたか？ 2) 提出先の労働基準監督署はどこですか？ 3) 受理番号か控えのコピーをもらえますか？","Yuta-san, otsukaresama desu. Rousai no tetsuzuki wo susumete kurete iru to no koto de, arigatou gozaimasu. Kakunin no tame ikutsuka okiki shitai no desu ga: 1) Rousai no shinsei shorui wa mou teishutsu shimashita ka? 2) Teishutsu-saki no roudou kijun kantoku-sho wa doko desu ka? 3) Juri-bangou ka hikae no copy wo moraemasu ka?","Salamat sa pag-asikaso ng rousai. Para ma-confirm: 1) Na-submit na ba ang forms? 2) Saang Labor Office? 3) Pwede bang makakuha ng receipt/reference number?")}
  <button class="copy-btn" data-copy="yuta">Copy Japanese text</button>
  <div class="highlight danger" style="margin-top:12px">I-SCREENSHOT ang reply niya. Ito ang evidence mo. HUWAG mag-sign ng kahit ano nang walang lawyer.</div>
</div>

<div class="step-card">
  <div class="step-number">5</div>
  <h4>Kolektahin ang Documents (Sa Bahay)</h4>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Payslips (給与明細) — last 3 months minimum</li>
    <li>Employment contract kung meron</li>
    <li>Photos ng injuries (kunan araw-araw)</li>
    <li>Screenshots ng messages kay Yuta</li>
    <li>Hospital receipts</li>
    <li>Shindansho (pag nakuha na)</li>
  </ul>
</div>

<div class="phase-header"><h3>WEEK 2 — Verification at Specialists</h3><p>IBANG araw ito, hindi bukas. Hindi ka pupunta ng hospital nang maraming beses sa isang araw.</p></div>

<div class="highlight" style="margin-bottom:16px">
  <strong>ILANG BESES AKO PUPUNTA NG HOSPITAL?</strong><br><br>
  <strong>BUKAS:</strong> 1 beses lang — sa SAME hospital kung saan ka nag-emergency. Dun mo kukunin ang check-up + shindansho + referrals. ISANG BESES LANG.<br><br>
  <strong>IBANG ARAW (Week 2+):</strong> Pupunta ka sa IBANG clinic para sa specialists:<br>
  &bull; Neurologist = ibang clinic (gamit ang referral letter mula sa hospital bukas)<br>
  &bull; ENT = ibang clinic (gamit ang referral letter mula sa hospital bukas)<br><br>
  <strong>Hindi ito sa iisang araw.</strong> Isa-isa lang. Bukas hospital lang muna.
</div>

<div class="step-card warn">
  <div class="step-number">6</div>
  <h4>I-verify sa Labor Standards Office (労働基準監督署)</h4>
  <p>Pwede ng FRESC ang mag-guide sa'yo dito. O pwede ka pumunta/tumawag ng personal.</p>
  <p>Hanapin: <strong>川崎南労働基準監督署</strong> (Kawasaki Minami Labor Office)</p>
  <p>Sabihin ang company name: 二宮工業 (Ninomiya Kougyo) at accident date</p>
  <p>Kung HINDI pa nag-file si Yuta → ikaw mismo ang mag-file. Pwede yan.</p>
</div>

<div class="step-card warn">
  <div class="step-number">7</div>
  <h4>Pumunta sa Neurologist (脳神経外科) — IBANG ARAW, IBANG CLINIC</h4>
  <p>Gamit ang referral letter na nakuha mo sa hospital (Step 2)</p>
  <p>Mag-schedule ka gamit ang referral — may number dun ng specialist clinic</p>
  <p>Kung may diagnosis ng concussion/TBI = MALAKING impact sa compensation</p>
</div>

<div class="step-card warn">
  <div class="step-number">8</div>
  <h4>Pumunta sa ENT Doctor (耳鼻咽喉科) — IBANG ARAW, IBANG CLINIC</h4>
  <p>Gamit ang referral letter na nakuha mo sa hospital (Step 2)</p>
  <p>Hearing test (聴力検査)</p>
  <p>Kung may permanent hearing loss = DISABILITY GRADE = malaking compensation</p>
</div>

<div class="phase-header"><h3>WEEK 2-4 — Legal Action</h3><p>Kumuha ng lawyer at file civil damages</p></div>

<div class="step-card ok">
  <div class="step-number">9</div>
  <h4>Kumuha ng Lawyer (LIBRE)</h4>
  <p><strong>Hindi mo kailangan ng pera:</strong></p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li><strong>FRESC referral</strong> — mula sa Step 3, sila mag-re-refer</li>
    <li><strong>法テラス (Houterasu)</strong> — 0570-078374, free consult, covers lawyer fees kung low income</li>
    <li><strong>"No Win, No Fee"</strong> lawyer — zero gastos, percentage lang sa nanalo (20-30%)</li>
  </ul>
  <p style="margin-top:8px">Tingnan ang <strong>Lawyer tab</strong> para sa full details.</p>
</div>

<div class="step-card ok">
  <div class="step-number">10</div>
  <h4>Lawyer Files Civil Damages (民事損害賠償)</h4>
  <p>Ang lawyer ang gagawa nito, hindi ikaw. Basis: employer negligence</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Ninomiya Kougyo (Yuta) — binago ang safe testing location, hindi pinansin ang babala</li>
    <li>Asami Kougyo (Senno) — kantoku na nag-conduct ng test</li>
    <li>Pwedeng i-claim sa DALAWANG company</li>
  </ul>
</div>

<div class="phase-header"><h3>MONTH 1-24 — Recovery at Resolution</h3><p>Regular visits, disability assessment, settlement</p></div>

<div class="step-card">
  <div class="step-number">11</div>
  <h4>Regular Hospital/Specialist Visits</h4>
  <p>Every 1-2 weeks. I-report LAHAT ng symptoms every visit.</p>
  <p>HUWAG bumalik sa trabaho hanggang cleared ng doctor.</p>
  <p>Habang naka-leave = tumatanggap ka ng <strong>80% ng sahod</strong> (rousai leave pay).</p>
</div>

<div class="step-card">
  <div class="step-number">12</div>
  <h4>Disability Assessment (kung may permanent symptoms)</h4>
  <p>After treatment period (6 months - 1.5 years)</p>
  <p>Kung may natitirang dizziness/hearing loss = disability grade = LUMP SUM/PENSION</p>
</div>

<div class="step-card ok">
  <div class="step-number">13</div>
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
`}function h(){return`
<h2 class="section-title">Conversation Phrases</h2>

<div class="card">
  <h3>Calling FRESC (0120-76-2029)</h3>
  ${e("them","FRESC","お電話ありがとうございます。FRESCです。","Odenwa arigatou gozaimasu. FRESC desu.","Thank you for calling. This is FRESC.")}
  ${e("you","YOU","すみません、タガログ語の通訳をお願いできますか？","Sumimasen, Tagalog-go no tsuuyaku wo onegai dekimasu ka?","Can I get a Tagalog interpreter please?")}
  ${e("them","FRESC","はい、少々お待ちください。","Hai, shoushou omachi kudasai.","Yes, please wait.")}
  <div class="highlight">After the interpreter joins, speak in Tagalog or English. Explain your situation using the script from Step 1.</div>
</div>

<div class="card">
  <h3>Sa Hospital — Pagkuha ng Shindansho</h3>
  ${e("you","IKAW","すみません、診断書をお願いしたいのですが。","Sumimasen, shindansho wo onegai shitai no desu ga.","Gusto kong humingi ng medical certificate.")}
  ${e("them","STAFF","はい、どのような目的ですか？","Hai, dono you na mokuteki desu ka?","For what purpose?")}
  ${e("you","IKAW","労災です。仕事中の事故で怪我をしました。","Rousai desu. Shigoto-chuu no jiko de kega wo shimashita.","Workers’ comp. Na-injure ako sa work accident.")}
  ${e("you","IKAW","まだめまいが続いています。専門医を紹介してもらえますか？","Mada memai ga tsuzuite imasu. Senmon-i wo shoukai shite moraemasu ka?","May dizziness pa rin. Pwede bang i-refer sa specialist?")}
  ${e("you","IKAW","診断書に「休業が必要」と書いてもらえますか？",'Shindansho ni "kyuugyou ga hitsuyou" to kaite moraemasu ka?',"Pwede bang isulat sa certificate na kailangan ko ng rest from work?")}
  ${e("you","IKAW","脳神経外科への紹介状をお願いできますか？","Nou-shinkei-geka e no shoukai-jou wo onegai dekimasu ka?","Pwede bang humingi ng referral letter sa neurologist?")}
  ${e("you","IKAW","耳鼻咽喉科もお願いします。","Jibi-inkou-ka mo onegai shimasu.","Pati ENT doctor.")}
</div>

<div class="card">
  <h3>Kay Yuta — Tanggihan ang Hospital (Si Naomi ang isama mo)</h3>
  ${e("them","YUTA","俺が病院に連れて行くよ。","Ore ga byouin ni tsurete iku yo.","Sasamahan kita sa hospital.")}
  ${e("you","IKAW","大丈夫です。妻と行きます。","Daijoubu desu. Tsuma to ikimasu.","Okay lang. Kasama ko ang asawa ko.")}
  <p style="color:var(--text-dim);font-size:0.85rem;margin:8px 0">Kung mag-insist pa rin:</p>
  ${e("you","IKAW","ありがとうございます。でも家族と行きたいです。","Arigatou gozaimasu. Demo kazoku to ikitai desu.","Salamat. Pero gusto kong kasama ang pamilya ko.")}
  <button class="copy-btn" data-copy="decline">Copy Japanese text</button>
  <div class="highlight danger" style="margin-top:10px">Hindi niya karapatan na pigilan si Naomi. Hindi ka niya empleyado sa hospital — pasyente ka. Pwede kang pumili kung sino ang kasama mo.</div>
</div>

<div class="card">
  <h3>Kay Yuta — Pag-verify ng Rousai</h3>
  ${e("you","IKAW","Yutaさん、労災の手続きの件なんですが。もう書類は提出しましたか？","Yuta-san, rousai no tetsuzuki no ken nan desu ga. Mou shorui wa teishutsu shimashita ka?","Yuta-san, tungkol sa rousai paperwork. Na-submit na ba ang documents?")}
  ${e("you","IKAW","確認のために、受理番号か控えをもらえますか？","Kakunin no tame ni, juri-bangou ka hikae wo moraemasu ka?","Para sa records ko, pwede bang makuha ang receipt number o copy?")}
  <div class="highlight danger">Kung mag-offer siya ng pera para "settle":</div>
  ${e("you","IKAW","ありがとうございます。ただ、まず弁護士に相談してから返事します。","Arigatou gozaimasu. Tada, mazu bengoshi ni soudan shite kara henji shimasu.","Salamat. Pero magpa-consult muna ako sa lawyer bago mag-reply.")}
</div>

<div class="card">
  <h3>Sa Labor Standards Office</h3>
  ${e("you","IKAW","労災の届出について相談したいのですが。","Rousai no todokede ni tsuite soudan shitai no desu ga.","Gusto kong mag-consult tungkol sa rousai filing.")}
  ${e("you","IKAW","会社名は二宮工業です。会社が労災申請をしたか確認したいです。","Kaisha-mei wa Ninomiya Kougyo desu. Kaisha ga rousai shinsei wo shita ka kakunin shitai desu.","Company: Ninomiya Kougyo. Gusto kong i-verify kung nag-file sila ng rousai.")}
  ${e("you","IKAW","自分で申請することはできますか？","Jibun de shinsei suru koto wa dekimasu ka?","Pwede ko bang i-file personally?")}
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
`}function b(){return`
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
`}function y(){return`
<h2 class="section-title">Lawyer Guide — LIBRE, WALANG BAYAD</h2>

<div class="highlight ok" style="font-size:1rem;text-align:center;padding:20px">
  <strong>HINDI MO KAILANGAN NG PERA PARA SA LAWYER.</strong><br>
  May 3 options na ZERO gastos.
</div>

<div class="card">
  <h3>Option 1: FRESC Referral (Pinaka-madali)</h3>
  <p style="font-size:1.2rem;font-weight:700;color:var(--text)"><a href="tel:0120762029" style="color:var(--accent);text-decoration:none">0120-76-2029</a></p>
  <ul style="padding-left:20px">
    <li>FREE legal consultation for foreign workers</li>
    <li>May Tagalog/English support</li>
    <li>Mag-re-refer sila ng lawyer na libre o affordable</li>
    <li><strong>Ito ang UNANG tawagan mo</strong></li>
  </ul>
</div>

<div class="card">
  <h3>Option 2: Houterasu — Government Legal Aid</h3>
  <p style="font-size:1.2rem;font-weight:700;color:var(--text)"><a href="tel:0570078374" style="color:var(--accent);text-decoration:none">0570-078374</a></p>
  <ul style="padding-left:20px">
    <li><strong>3 beses na FREE consultation</strong> sa lawyer</li>
    <li>Kung low income ka (wala kang trabaho ngayon dahil sa injury) = <strong>QUALIFY ka</strong></li>
    <li>Sila ang magbabayad ng lawyer fees</li>
    <li>Babayaran mo na lang ng <strong>maliit na hulog</strong> pagkatapos (~¥5,000-10,000/month)</li>
    <li>Kung hindi ka makapag-bayad = pwedeng i-defer o bawasan pa</li>
  </ul>
</div>

<div class="card">
  <h3>Option 3: "No Win, No Fee" Lawyer (成功報酬型)</h3>
  <ul style="padding-left:20px">
    <li><strong>ZERO bayad sa simula</strong></li>
    <li><strong>ZERO bayad kung natalo</strong></li>
    <li>Kung NANALO = kukuha lang sila ng <strong>20-30%</strong> ng nakuha mo</li>
    <li>Hindi ka naglalabas ng kahit isang yen mula sa bulsa mo</li>
  </ul>
  <div class="highlight" style="margin-top:12px">
    <strong>Halimbawa:</strong><br>
    Nakuha mo ¥10,000,000 sa civil damages<br>
    Lawyer fee (25%) = ¥2,500,000<br>
    <strong>SA'YO: ¥7,500,000</strong> — at hindi ka naglabas ng pera
  </div>
</div>

<div class="card">
  <h3>Pinaka-Magandang Plan</h3>
  <div style="background:var(--bg);border-radius:8px;padding:16px;font-size:0.9rem;color:var(--text-dim)">
    <p><strong style="color:var(--accent)">Step 1:</strong> Tawagan FRESC (0120-76-2029) &mdash; "Tagalog please"</p>
    <p style="margin:4px 0;color:var(--text-dim)">&darr;</p>
    <p><strong style="color:var(--accent)">Step 2:</strong> FRESC mag-re-refer ng lawyer sa'yo</p>
    <p style="margin:4px 0;color:var(--text-dim)">&darr;</p>
    <p><strong style="color:var(--accent)">Step 3:</strong> Kung kailangan ng bayad &rarr; apply sa Houterasu</p>
    <p style="margin:4px 0;color:var(--text-dim)">O kaya &rarr;</p>
    <p><strong style="color:var(--accent)">Step 3b:</strong> Humanap ng "No Win, No Fee" lawyer</p>
    <p style="margin:4px 0;color:var(--text-dim)">&darr;</p>
    <p><strong style="color:var(--success)">Result:</strong> May lawyer ka na. ZERO gastos.</p>
  </div>
</div>

<div class="card">
  <h3>Sino ang Pananagutan? (Liability)</h3>
  <p style="color:var(--accent);margin-bottom:10px">May TATLO na may pananagutan sa accident mo. Pwedeng i-claim sa lahat.</p>
  <div class="table-wrap"><table>
    <tr><th>Sino</th><th>Bakit May Pananagutan</th><th>Level</th></tr>
    <tr>
      <td><strong>Ninomiya Kougyo<br>(Yuta)</strong></td>
      <td>
        Direct employer mo. May 安全配慮義務 (duty of care).<br>
        Si Yuta ang nagbago ng safe testing location.<br>
        Si Yuta ang hindi nakinig sa babala mo tungkol sa burikki.<br>
        <strong>President siya = company liable.</strong>
      </td>
      <td class="amt" style="font-weight:800">MATAAS</td>
    </tr>
    <tr>
      <td><strong>Asami Kougyo<br>(Senno)</strong></td>
      <td>
        Si Senno ang 現場監督 (kantoku/site supervisor).<br>
        Siya ang nag-conduct ng kimitsu test kasama ni Yuta.<br>
        May 安全管理責任 (safety management duty).<br>
        Kung siya ang 元請け (prime contractor) = may direct liability din.
      </td>
      <td class="amt" style="font-weight:800">MATAAS</td>
    </tr>
    <tr>
      <td><strong>Both Companies<br>Jointly</strong></td>
      <td>
        Sa Japanese law, kung dalawang company ang involved sa isang project at may nangyaring accident, <strong>both are jointly liable</strong> (共同不法行為).<br>
        Ibig sabihin: pwede kang mag-claim sa DALAWA.
      </td>
      <td class="amt" style="font-weight:800">PAREHO</td>
    </tr>
  </table></div>
  <div class="highlight warn" style="margin-top:12px">
    <strong>Ang lawyer mo ang mag-determine kung sino ang i-sue:</strong><br>
    Pwedeng Ninomiya lang, pwedeng Asami lang, o pwedeng DALAWA. Mas malaki ang makukuha mo kung DALAWA ang i-claim.
  </div>
</div>

<div class="card">
  <h3>Ano ang Sasabihin sa Lawyer</h3>
  <p>Sa first consultation, dalhin/sabihin mo ang mga ito:</p>
  <ul style="padding-left:20px">
    <li>Accident report (meron ka na nito sa read.txt)</li>
    <li>Shindansho at medical records</li>
    <li>Photos ng injuries</li>
    <li>Screenshots ng messages kay Yuta</li>
    <li>Payslips (para ma-compute ang compensation)</li>
    <li>"Hindi ako ang assigned sa kimitsu test"</li>
    <li>"Nag-prepare ako ng safe testing area pero binago ni Yuta"</li>
    <li>"Binalaan ko sila tungkol sa burikki pero hindi pinansin"</li>
    <li>"Si Senno ng Asami Kougyo ang kantoku na nandoon"</li>
    <li>"May buntis akong asawa at anak na mag-e-elementary"</li>
  </ul>
</div>

<div class="warning-box">
  <h4>HUWAG GAWIN — BAGO MAKAUSAP ANG LAWYER</h4>
  <ul>
    <li>HUWAG mag-sign ng kahit anong papel galing kay Yuta o Asami Kougyo</li>
    <li>HUWAG tumanggap ng cash/pera bilang "settlement" nang walang lawyer</li>
    <li>HUWAG mag-agree na "okay na tayo" o "ayos na ito"</li>
    <li>HUWAG mag-resign o mag-agree na tapusin ang contract</li>
    <li>Kung i-pressure ka, sabihin lang: まず弁護士に相談します (Mazu bengoshi ni soudan shimasu) = "Magpa-consult muna ako sa lawyer"</li>
  </ul>
</div>
`}function f(){const i=[{id:"c1",text:'Tawagan FRESC (0120-76-2029) — "Tagalog please"',phase:"Week 1"},{id:"c2",text:"I-send verification message kay Yuta (LINE/email)",phase:"Week 1"},{id:"c3",text:"I-screenshot ang reply ni Yuta",phase:"Week 1"},{id:"c4",text:'Bumalik sa hospital — sabihin "Rousai desu"',phase:"Week 1"},{id:"c5",text:"Kumuha ng Shindansho (medical certificate)",phase:"Week 1"},{id:"c6",text:"Humingi ng referral sa Neurologist",phase:"Week 1"},{id:"c7",text:"Humingi ng referral sa ENT doctor",phase:"Week 1"},{id:"c8",text:"Kumuha ng photos ng injuries",phase:"Week 1"},{id:"c9",text:"Kolektahin payslips (last 3 months)",phase:"Week 1"},{id:"c10",text:"I-verify sa Labor Office na na-file ang rousai",phase:"Week 2"},{id:"c11",text:"Pumunta sa Neurologist",phase:"Week 2"},{id:"c12",text:"Pumunta sa ENT — hearing test",phase:"Week 2"},{id:"c13",text:"Kumuha ng lawyer (via FRESC o Houterasu)",phase:"Week 2-3"},{id:"c14",text:"Lawyer files civil damages claim",phase:"Week 3-4"},{id:"c15",text:"Regular hospital visits (every 1-2 weeks)",phase:"Ongoing"},{id:"c16",text:"I-report lahat ng symptoms every visit",phase:"Ongoing"},{id:"c17",text:"I-save lahat ng receipts at documents",phase:"Ongoing"},{id:"c18",text:"Disability assessment (kung may permanent symptoms)",phase:"Month 6+"}],t=l();let a='<h2 class="section-title">Progress Checklist</h2>';a+='<p style="color:var(--text-dim);margin-bottom:16px;font-size:0.9rem">I-click ang box para i-mark as done. Naka-save ito sa phone/browser mo.</p>',a+='<div class="card"><ul class="checklist">';let s="";for(const u of i){u.phase!==s&&(s=u.phase,a+=`<li style="border-bottom:none;padding:4px 0"><strong style="color:var(--accent);font-size:0.8rem">${s}</strong></li>`);const n=t[u.id];a+=`<li class="${n?"done":""}" data-id="${u.id}"><div class="check-box ${n?"checked":""}"></div><span>${u.text}</span></li>`}return a+="</ul></div>",a+=`<div class="warning-box">
    <h4>HUWAG KALIMUTAN</h4>
    <ul>
      <li>HUWAG mag-sign ng settlement/waiver nang walang lawyer</li>
      <li>HUWAG bumalik sa trabaho hanggang cleared ng doctor</li>
      <li>HUWAG sabihing "okay na ako" sa doctor kung hindi pa talaga</li>
      <li>Lahat ng communication kay Yuta = IN WRITING (LINE/email)</li>
    </ul>
  </div>`,a}function k(){return`
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
`}function v(){const i=document.querySelector("#app");i.innerHTML=`
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
  ${g.map(a=>`<button class="nav-btn ${a.id==="steps"?"active":""}" data-tab="${a.id}">${a.label}</button>`).join("")}
</div>

<div class="section active" data-section="steps">${m()}</div>
<div class="section" data-section="convo">${h()}</div>
<div class="section" data-section="money">${b()}</div>
<div class="section" data-section="lawyer">${y()}</div>
<div class="section" data-section="checklist">${f()}</div>
<div class="section" data-section="contacts">${k()}</div>
`,i.querySelectorAll(".nav-btn").forEach(a=>{a.addEventListener("click",()=>{i.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("active")),i.querySelectorAll(".section").forEach(s=>s.classList.remove("active")),a.classList.add("active"),i.querySelector(`[data-section="${a.dataset.tab}"]`).classList.add("active")})}),i.querySelectorAll(".checklist li[data-id]").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.id,n=a.querySelector(".check-box").classList.toggle("checked");a.classList.toggle("done",n),c(s,n)})});const t={yuta:`Yutaさん、お疲れ様です。労災の手続きを進めてくれているとのことで、ありがとうございます。確認のためいくつかお聞きしたいのですが：

1) 労災の申請書類はもう提出しましたか？
2) 提出先の労働基準監督署はどこですか？
3) 受理番号か控えのコピーをもらえますか？

まだめまいと聴覚の違和感が続いていて、医師から専門医への紹介が必要と言われています。今後の治療費も労災で対応をお願いします。`,decline:"大丈夫です。妻と行きます。ありがとうございます。でも家族と行きたいです。","hospital-call":"先日救急で受診した者ですが、まだめまいが続いているので受診したいです。今日行っても大丈夫ですか？",privacy:"会社には連絡しないでください。個人で来ています。",shindansho:"診断書をお願いしたいのですが。労災で使います。診断書に「休業が必要」と書いてもらえますか？",referral:"脳神経外科への紹介状をお願いできますか？耳鼻咽喉科もお願いします。"};i.querySelectorAll(".copy-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const u=a.dataset.copy;t[u]&&p(t[u],a)})})}v();
