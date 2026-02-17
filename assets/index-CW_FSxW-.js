(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h=[{id:"steps",label:"Steps"},{id:"convo",label:"Phrases"},{id:"money",label:"Compensation"},{id:"lawyer",label:"Lawyer"},{id:"checklist",label:"Checklist"},{id:"contacts",label:"Contacts"}],d="rousai-checklist";function c(){try{return JSON.parse(localStorage.getItem(d)||"{}")}catch{return{}}}function u(s,a){const t=c();t[s]=a,localStorage.setItem(d,JSON.stringify(t))}function p(s,a){navigator.clipboard.writeText(s).then(()=>{a.classList.add("copied"),a.textContent="Copied!",setTimeout(()=>{a.classList.remove("copied"),a.textContent="Copy Japanese text"},2e3)})}function n(s,a,t){return`<div class="phrase-box"><div class="jp">${s}</div><div class="romaji">${a}</div><div class="meaning">${t}</div></div>`}function i(s,a,t,o,e){return`<div class="convo-line ${s}"><div class="convo-label">${a}</div><div class="jp">${t}</div>${o?`<div class="romaji">${o}</div>`:""}<div class="meaning">${e}</div></div>`}function g(){return`
<div class="warning-box" style="margin-bottom:20px">
  <h4>WARNING ABOUT YUTA</h4>
  <p style="margin-bottom:8px">Yuta's behavior is a RED FLAG. He's not taking care of you — <strong>he's monitoring you</strong>:</p>
  <ul>
    <li>He was with you at the emergency and hospital — just watching</li>
    <li>He didn't offer to file rousai right away</li>
    <li>He insisted on going to the hospital with you instead of Naomi (your wife)</li>
    <li>He wants to control what you hear and say to the doctor</li>
  </ul>
  <p style="margin-top:10px"><strong>Why?</strong> Because the accident is his fault (he changed the safe testing location, ignored your warning). He doesn't want you to file a big claim.</p>
  <p style="margin-top:8px;color:white"><strong>RULE: Bring NAOMI to the hospital, NOT Yuta.</strong></p>
</div>

<div class="phase-header"><h3>TODAY — CORRECT ORDER OF ACTIONS</h3><p>If symptoms suddenly worsen, call 119 first. If stable, call legal support then hospital.</p></div>

<div class="highlight ok" style="margin-bottom:16px">
  <strong>SAFETY FIRST:</strong><br>
  119 comes first for urgent symptoms. If stable, support lines can guide you on rousai, lawyer referral, and what to request at the hospital.
</div>

<div class="step-card urgent">
  <div class="step-number">1</div>
  <h4>9:00 AM — Call Multilingual Legal Support</h4>
  <p style="font-size:1.1rem;font-weight:700"><a href="tel:0570078377" style="color:var(--accent);text-decoration:none">0570-078377</a> (IP/prepaid: 050-3754-5430)</p>
  <p>Open: Weekdays 9:00-17:00</p>
  <p style="font-size:0.85rem;color:var(--text-dim)">If unavailable: FRESC reservation 03-5363-3025 (21 languages)</p>
  <p style="font-size:0.85rem;color:var(--text-dim)">Immigration/status info: 0570-013904 (IP/PHS/overseas: 03-5796-7112)</p>
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
  <h4>After Support Call — Call the Hospital to Schedule</h4>
  <p>Call the hospital where you went to the emergency to set an appointment:</p>
  ${n("先日救急で受診した者ですが、まだめまいが続いているので受診したいです。今日行っても大丈夫ですか？","Senjitsu kyuukyuu de jushin shita mono desu ga, mada memai ga tsuzuite iru node jushin shitai desu. Kyou itte mo daijoubu desu ka?","I came to the emergency recently. I still have dizziness and want to be seen. Can I come today?")}
  <button class="copy-btn" data-copy="hospital-call">Copy Japanese text</button>
  <p style="color:var(--text-dim);font-size:0.85rem;margin-top:8px">If they can see you today &rarr; go. If they need to schedule &rarr; they'll set a time. Either way is fine.</p>
</div>

<div class="step-card urgent">
  <div class="step-number">3</div>
  <h4>Go to Hospital — WITH NAOMI, NOT YUTA</h4>
  <p><strong>DO NOT tell Yuta. He doesn't need to know.</strong></p>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">If Yuta insists on coming with you:</p>
  ${n("大丈夫です。妻と行きます。","Daijoubu desu. Tsuma to ikimasu.","I'm fine. I'll go with my wife.")}
  <button class="copy-btn" data-copy="decline">Copy Japanese text</button>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">At reception:</p>
  ${n("労災です。仕事中の事故で怪我をしました。","Rousai desu. Shigoto-chuu no jiko de kega wo shimashita.","This is workers’ comp. I was injured in a work accident.")}

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">To prevent the hospital from contacting Yuta:</p>
  ${n("会社には連絡しないでください。個人で来ています。","Kaisha ni wa renraku shinaide kudasai. Kojin de kite imasu.","Please do not contact my company. I came here personally.")}
  <button class="copy-btn" data-copy="privacy">Copy Japanese text</button>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Tell the doctor ALL your symptoms:</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>めまいがします (Memai ga shimasu) = I feel dizzy</li>
    <li>頭が痛いです (Atama ga itai desu) = I have a headache</li>
    <li>耳が聞こえにくいです (Mimi ga kikoe nikui desu) = I can't hear well</li>
    <li>膝が痛いです (Hiza ga itai desu) = My knee hurts</li>
    <li>眠れません (Nemuremasen) = I can't sleep</li>
    <li>不安です (Fuan desu) = I feel anxious</li>
  </ul>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Ask for a Shindansho (medical certificate):</p>
  ${n("診断書をお願いしたいのですが。労災で使います。診断書に「休業が必要」と書いてもらえますか？",'Shindansho wo onegai shitai no desu ga. Rousai de tsukaimasu. Shindansho ni "kyuugyou ga hitsuyou" to kaite moraemasu ka?',"I'd like a medical certificate please. It's for workers’ comp. Can you write that I need time off work?")}
  <button class="copy-btn" data-copy="shindansho">Copy Japanese text</button>

  <p style="color:var(--accent);font-weight:600;margin:12px 0 6px">Ask for Specialist Referrals:</p>
  ${n("脳神経外科への紹介状をお願いできますか？耳鼻咽喉科もお願いします。","Nou-shinkei-geka e no shoukai-jou wo onegai dekimasu ka? Jibi-inkou-ka mo onegai shimasu.","Can I get a referral to a neurologist? And also to an ENT doctor.")}
  <button class="copy-btn" data-copy="referral">Copy Japanese text</button>

  <div class="highlight warn" style="margin-top:12px">
    <strong>Shindansho cost:</strong> ~¥3,000-5,000 yen. This will be reimbursed through rousai later.
  </div>
</div>

<div class="step-card">
  <div class="step-number">4</div>
  <h4>LAST — Message Yuta (After Support Call and Hospital)</h4>
  <p><strong>This is the LAST step — after you have the shindansho and have talked to the support line.</strong></p>
  <p>Why last? So he can't interfere with your hospital visit or pressure you.</p>
  <p style="margin-top:10px">Send via LINE/email:</p>
  ${n("Yutaさん、お疲れ様です。労災の手続きを進めてくれているとのことで、ありがとうございます。確認のためいくつかお聞きしたいのですが：1) 労災の申請書類はもう提出しましたか？ 2) 提出先の労働基準監督署はどこですか？ 3) 受理番号か控えのコピーをもらえますか？","Yuta-san, otsukaresama desu. Rousai no tetsuzuki wo susumete kurete iru to no koto de, arigatou gozaimasu. Kakunin no tame ikutsuka okiki shitai no desu ga: 1) Rousai no shinsei shorui wa mou teishutsu shimashita ka? 2) Teishutsu-saki no roudou kijun kantoku-sho wa doko desu ka? 3) Juri-bangou ka hikae no copy wo moraemasu ka?","Thanks for handling the rousai. To confirm: 1) Have you submitted the forms? 2) Which Labor Office? 3) Can I get the receipt/reference number?")}
  <button class="copy-btn" data-copy="yuta">Copy Japanese text</button>
  <div class="highlight danger" style="margin-top:12px">SCREENSHOT his reply. This is your evidence. DO NOT sign anything without a lawyer.</div>
</div>

<div class="step-card">
  <div class="step-number">5</div>
  <h4>Collect Documents (At Home)</h4>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Payslips (給与明細) — last 3 months minimum</li>
    <li>Employment contract if you have one</li>
    <li>Photos of injuries (take new ones daily)</li>
    <li>Screenshots of messages with Yuta</li>
    <li>Hospital receipts</li>
    <li>Shindansho (once you get it)</li>
  </ul>
</div>

<div class="phase-header"><h3>WEEK 2 — Verification & Specialists</h3><p>These are on DIFFERENT days. You don't go to the hospital multiple times in one day.</p></div>

<div class="highlight" style="margin-bottom:16px">
  <strong>HOW MANY TIMES DO I GO TO THE HOSPITAL?</strong><br><br>
  <strong>TOMORROW:</strong> Just 1 time — at the SAME hospital where you went to the emergency. That's where you get your check-up + shindansho + referrals. JUST ONCE.<br><br>
  <strong>OTHER DAYS (Week 2+):</strong> You'll go to DIFFERENT clinics for specialists:<br>
  &bull; Neurologist = different clinic (using the referral letter from the hospital)<br>
  &bull; ENT = different clinic (using the referral letter from the hospital)<br><br>
  <strong>These are NOT on the same day.</strong> One at a time. Tomorrow is just the hospital.
</div>

<div class="step-card warn">
  <div class="step-number">6</div>
  <h4>Verify at Labor Standards Office (労働基準監督署)</h4>
  <p>Support line/FRESC route can guide you through this. Or you can go/call yourself.</p>
  <p>Look for: <strong>川崎南労働基準監督署</strong> (Kawasaki Minami Labor Office)</p>
  <p>Tell them the company name: 二宮工業 (Ninomiya Kougyo) and the accident date</p>
  <p>If Yuta has NOT filed → you can file it yourself. That's allowed.</p>
</div>

<div class="step-card warn">
  <div class="step-number">7</div>
  <h4>Go to Neurologist (脳神経外科) — DIFFERENT DAY, DIFFERENT CLINIC</h4>
  <p>Use the referral letter you got from the hospital (Step 3)</p>
  <p>Schedule using the referral — it has the specialist clinic's number</p>
  <p>If diagnosed with concussion/TBI = BIG impact on compensation</p>
</div>

<div class="step-card warn">
  <div class="step-number">8</div>
  <h4>Go to ENT Doctor (耳鼻咽喉科) — DIFFERENT DAY, DIFFERENT CLINIC</h4>
  <p>Use the referral letter you got from the hospital (Step 3)</p>
  <p>Hearing test (聴力検査)</p>
  <p>If there's permanent hearing loss = DISABILITY GRADE = big compensation</p>
</div>

<div class="phase-header"><h3>WEEK 2-4 — Legal Action</h3><p>Get a lawyer and file civil damages</p></div>

<div class="step-card ok">
  <div class="step-number">9</div>
  <h4>Get a Lawyer (Low/No Upfront Cost Options)</h4>
  <p><strong>You don't need money:</strong></p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li><strong>FRESC referral</strong> — 03-5363-3025 (reservation/connection route)</li>
    <li><strong>法テラス multilingual</strong> — 0570-078377 (IP/prepaid: 050-3754-5430)</li>
    <li><strong>法テラス JP Support Dial</strong> — 0570-078374 (Japanese line)</li>
    <li><strong>"No Win, No Fee"</strong> lawyer — zero cost upfront, they take a percentage (20-30%) only if you win</li>
  </ul>
  <p style="margin-top:8px">See the <strong>Lawyer tab</strong> for full details.</p>
</div>

<div class="step-card ok">
  <div class="step-number">10</div>
  <h4>Lawyer Files Civil Damages (民事損害賠償)</h4>
  <p>The lawyer handles this, not you. Basis: employer negligence</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Ninomiya Kougyo (Yuta) — changed the safe testing location, ignored your warning</li>
    <li>Asami Kougyo (Senno) — supervisor who conducted the test</li>
    <li>You can claim against BOTH companies</li>
  </ul>
</div>

<div class="phase-header"><h3>MONTH 1-24 — Recovery & Resolution</h3><p>Regular visits, disability assessment, settlement</p></div>

<div class="step-card">
  <div class="step-number">11</div>
  <h4>Regular Hospital/Specialist Visits</h4>
  <p>Every 1-2 weeks. Report ALL symptoms every visit.</p>
  <p>DO NOT return to work until cleared by the doctor.</p>
  <p>While on leave = you receive <strong>80% of your salary</strong> (rousai leave pay).</p>
</div>

<div class="step-card">
  <div class="step-number">12</div>
  <h4>Disability Assessment (if you have permanent symptoms)</h4>
  <p>After treatment period (6 months - 1.5 years)</p>
  <p>If you still have dizziness/hearing loss = disability grade = LUMP SUM/PENSION</p>
</div>

<div class="step-card ok">
  <div class="step-number">13</div>
  <h4>Settlement / Court Decision</h4>
  <p>Your lawyer handles this. Negotiated settlement or court.</p>
  <p>RECEIVE COMPENSATION.</p>
</div>

<div class="warning-box">
  <h4>GOLDEN RULES — DON'T FORGET</h4>
  <ul>
    <li>DO NOT sign anything from Yuta without a lawyer</li>
    <li>DO NOT return to work until cleared by the doctor</li>
    <li>DO NOT forget about CIVIL DAMAGES — that's the big money</li>
    <li>SAVE ALL documents, messages, receipts, photos</li>
    <li>All communication IN WRITING — LINE/email, not just verbal</li>
  </ul>
</div>
`}function m(){return`
<h2 class="section-title">Conversation Phrases</h2>

<div class="card">
  <h3>Calling Multilingual Legal Support (0570-078377)</h3>
  ${i("them","OPERATOR","ご希望の言語は何ですか？","Gokibou no gengo wa nan desu ka?","Which language would you like?")}
  ${i("you","YOU","すみません、タガログ語の通訳をお願いできますか？","Sumimasen, Tagalog-go no tsuuyaku wo onegai dekimasu ka?","Excuse me, can I get a Tagalog interpreter?")}
  ${i("them","OPERATOR","承知しました。タガログ語通訳につなぎます。少々お待ちください。","Shouchi shimashita. Tagalog-go tsuuyaku ni tsunagimasu. Shoushou omachi kudasai.","Understood. I will connect you to a Tagalog interpreter. Please wait a moment.")}
  <div class="highlight">After the interpreter joins, speak in Tagalog or English. Explain your situation using the script from Step 1.</div>
</div>

<div class="card">
  <h3>At the Hospital — Getting a Shindansho</h3>
  ${i("you","YOU","すみません、診断書をお願いしたいのですが。","Sumimasen, shindansho wo onegai shitai no desu ga.","Excuse me, I'd like a medical certificate please.")}
  ${i("them","STAFF","はい、どのような目的ですか？","Hai, dono you na mokuteki desu ka?","Sure, what is it for?")}
  ${i("you","YOU","労災です。仕事中の事故で怪我をしました。","Rousai desu. Shigoto-chuu no jiko de kega wo shimashita.","Workers’ comp. I was injured in a work accident.")}
  ${i("you","YOU","まだめまいが続いています。専門医を紹介してもらえますか？","Mada memai ga tsuzuite imasu. Senmon-i wo shoukai shite moraemasu ka?","I still have dizziness. Can you refer me to a specialist?")}
  ${i("you","YOU","診断書に「休業が必要」と書いてもらえますか？",'Shindansho ni "kyuugyou ga hitsuyou" to kaite moraemasu ka?','Can you write "time off work is necessary" on the certificate?')}
  ${i("you","YOU","脳神経外科への紹介状をお願いできますか？","Nou-shinkei-geka e no shoukai-jou wo onegai dekimasu ka?","Can I get a referral letter to a neurologist?")}
  ${i("you","YOU","耳鼻咽喉科もお願いします。","Jibi-inkou-ka mo onegai shimasu.","And an ENT doctor as well, please.")}
</div>

<div class="card">
  <h3>Declining Yuta's Hospital Escort — Bring Naomi Instead</h3>
  ${i("them","YUTA","俺が病院に連れて行くよ。","Ore ga byouin ni tsurete iku yo.","I'll take you to the hospital.")}
  ${i("you","YOU","大丈夫です。妻と行きます。","Daijoubu desu. Tsuma to ikimasu.","I'm fine. I'll go with my wife.")}
  <p style="color:var(--text-dim);font-size:0.85rem;margin:8px 0">If he insists again:</p>
  ${i("you","YOU","ありがとうございます。でも家族と行きたいです。","Arigatou gozaimasu. Demo kazoku to ikitai desu.","Thank you. But I want to go with my family.")}
  <button class="copy-btn" data-copy="decline">Copy Japanese text</button>
  <div class="highlight danger" style="margin-top:10px">He has no right to stop Naomi from coming. You're not his employee at the hospital — you're a patient. You choose who comes with you.</div>
</div>

<div class="card">
  <h3>Verifying Rousai with Yuta</h3>
  ${i("you","YOU","Yutaさん、労災の手続きの件なんですが。もう書類は提出しましたか？","Yuta-san, rousai no tetsuzuki no ken nan desu ga. Mou shorui wa teishutsu shimashita ka?","Yuta-san, about the rousai paperwork. Have you submitted the documents?")}
  ${i("you","YOU","確認のために、受理番号か控えをもらえますか？","Kakunin no tame ni, juri-bangou ka hikae wo moraemasu ka?","For my records, can I get the receipt number or a copy?")}
  <div class="highlight danger">If he offers money to "settle":</div>
  ${i("you","YOU","ありがとうございます。ただ、まず弁護士に相談してから返事します。","Arigatou gozaimasu. Tada, mazu bengoshi ni soudan shite kara henji shimasu.","Thank you. But let me consult with a lawyer first before I respond.")}
</div>

<div class="card">
  <h3>At the Labor Standards Office</h3>
  ${i("you","YOU","労災の届出について相談したいのですが。","Rousai no todokede ni tsuite soudan shitai no desu ga.","I'd like to consult about filing a rousai claim.")}
  ${i("you","YOU","会社名は二宮工業です。会社が労災申請をしたか確認したいです。","Kaisha-mei wa Ninomiya Kougyo desu. Kaisha ga rousai shinsei wo shita ka kakunin shitai desu.","The company is Ninomiya Kougyo. I want to verify if they filed for rousai.")}
  ${i("you","YOU","自分で申請することはできますか？","Jibun de shinsei suru koto wa dekimasu ka?","Can I file the claim myself?")}
</div>

<div class="card">
  <h3>Emergency Phrases</h3>
  <div class="table-wrap"><table>
    <tr><th>Situation</th><th>Japanese</th><th>Romaji</th><th>English</th></tr>
    <tr><td>Dizzy</td><td>めまいがします</td><td>Memai ga shimasu</td><td>I feel dizzy</td></tr>
    <tr><td>Headache</td><td>頭が痛いです</td><td>Atama ga itai desu</td><td>I have a headache</td></tr>
    <tr><td>Hearing</td><td>耳が聞こえにくいです</td><td>Mimi ga kikoe nikui desu</td><td>I can't hear well</td></tr>
    <tr><td>Knee pain</td><td>膝が痛いです</td><td>Hiza ga itai desu</td><td>My knee hurts</td></tr>
    <tr><td>Don't understand</td><td>わかりません</td><td>Wakarimasen</td><td>I don't understand</td></tr>
    <tr><td>Tagalog</td><td>タガログ語でお願いします</td><td>Tagalog-go de onegai shimasu</td><td>In Tagalog please</td></tr>
    <tr><td>Work accident</td><td>労災です</td><td>Rousai desu</td><td>This is a work injury</td></tr>
    <tr><td>Help</td><td>助けてください</td><td>Tasukete kudasai</td><td>Please help me</td></tr>
    <tr><td>Can't sleep</td><td>眠れません</td><td>Nemuremasen</td><td>I can't sleep</td></tr>
    <tr><td>Anxious</td><td>不安です</td><td>Fuan desu</td><td>I feel anxious</td></tr>
  </table></div>
</div>
`}function y(){return`
<h2 class="section-title">Compensation Estimation</h2>

<div class="card">
  <h3>Assumptions</h3>
  <p>Monthly salary estimate: ¥250,000 - ¥350,000</p>
  <p>Average used: <strong>¥300,000/month (¥10,000/day)</strong></p>
  <p>Adjust if your actual salary is higher or lower.</p>
</div>

<div class="card">
  <h3>CLAIM 1: Rousai Benefits (労災保険) — GUARANTEED</h3>
  <p style="color:var(--accent)">This is the MINIMUM you will receive. Automatic benefit for all workers.</p>

  <h3 style="margin-top:16px">A. Medical (療養補償給付) — 100% Covered</h3>
  <div class="table-wrap"><table>
    <tr><th>Item</th><th>Estimated Cost</th><th>You Pay</th></tr>
    <tr><td>Emergency room</td><td>¥50,000 - ¥100,000</td><td class="amt">¥0</td></tr>
    <tr><td>CT scan, X-ray</td><td>¥20,000 - ¥40,000</td><td class="amt">¥0</td></tr>
    <tr><td>Neurologist visits</td><td>¥10,000 - ¥30,000 each</td><td class="amt">¥0</td></tr>
    <tr><td>ENT / Hearing test</td><td>¥10,000 - ¥20,000 each</td><td class="amt">¥0</td></tr>
    <tr><td>MRI (if needed)</td><td>¥30,000 - ¥50,000</td><td class="amt">¥0</td></tr>
    <tr><td>Medications</td><td>¥5,000 - ¥15,000/month</td><td class="amt">¥0</td></tr>
    <tr><td><strong>TOTAL</strong></td><td><strong>¥200,000 - ¥500,000+</strong></td><td class="amt"><strong>¥0</strong></td></tr>
  </table></div>

  <h3 style="margin-top:16px">B. Leave Pay (休業補償) — 80% of Salary</h3>
  <div class="table-wrap"><table>
    <tr><th>Recovery Period</th><th>Monthly</th><th>Total Leave Pay</th></tr>
    <tr><td>3 months</td><td>¥240,000/mo</td><td class="amt">¥720,000</td></tr>
    <tr><td>6 months</td><td>¥240,000/mo</td><td class="amt">¥1,440,000</td></tr>
    <tr><td>12 months</td><td>¥240,000/mo</td><td class="amt">¥2,920,000</td></tr>
  </table></div>

  <h3 style="margin-top:16px">C. Disability (障害補償) — If You Have Permanent Symptoms</h3>
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
  <h3>CLAIM 2: Civil Damages (民事損害賠償) — REQUIRES A LAWYER</h3>
  <p style="color:var(--warning)">THIS IS THE BIG MONEY. Separate from rousai. Based on employer negligence.</p>

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

  <h3 style="margin-top:16px">C. Lost Future Earnings (逸失利益) — If You Have Permanent Disability</h3>
  <p>Based on: Annual income x Disability % x Remaining working years</p>
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
    <tr><th>Scenario</th><th>Net to You</th><th>In PHP</th></tr>
    <tr><td><strong>CONSERVATIVE</strong><br>3mo rest, Grade 14</td><td class="amt-big">¥5,000,000 - ¥5,500,000</td><td class="amt-big">₱1.9M - ₱2.1M</td></tr>
    <tr><td><strong>MIDDLE</strong><br>6mo rest, Grade 12</td><td class="amt-big">¥12,500,000 - ¥14,000,000</td><td class="amt-big">₱4.8M - ₱5.3M</td></tr>
    <tr><td><strong>HIGH</strong><br>12mo rest, Grade 9-10</td><td class="amt-big">¥27,000,000 - ¥30,000,000</td><td class="amt-big">₱10.3M - ₱11.4M</td></tr>
  </table></div>
  <p class="sub-number" style="margin-top:16px">Lawyer fee (20-30%) is already deducted from these amounts</p>
</div>

<div class="card">
  <h3>How to Maximize</h3>
  <div class="highlight ok">
    <strong>Compensation goes UP if:</strong><br>
    Longer treatment &bull; Specialist diagnosis (concussion/TBI) &bull; Permanent hearing loss &bull; Higher disability grade &bull; Lawyer files civil damages
  </div>
  <div class="highlight danger">
    <strong>Compensation goes DOWN if:</strong><br>
    You return to work too soon &bull; Skip specialists &bull; Sign a settlement without a lawyer &bull; Don't document symptoms &bull; Only file rousai (no civil claim)
  </div>
</div>
`}function v(){return`
<h2 class="section-title">Lawyer Guide — Low/No Upfront Cost</h2>

<div class="highlight ok" style="font-size:1rem;text-align:center;padding:20px">
  <strong>YOU DON'T NEED MONEY FOR A LAWYER.</strong><br>
  There are 3 options with low/no upfront cost.
</div>

<div class="card">
  <h3>Option 1: Multilingual Legal Support (Best for Tagalog/English)</h3>
  <p style="font-size:1.2rem;font-weight:700;color:var(--text)"><a href="tel:0570078377" style="color:var(--accent);text-decoration:none">0570-078377</a></p>
  <ul style="padding-left:20px">
    <li>IP/prepaid line: 050-3754-5430</li>
    <li>If unavailable: FRESC reservation line 03-5363-3025</li>
    <li>Consultation/support is free; call charges apply</li>
    <li>Tagalog/English support available</li>
    <li>They can refer you to a lawyer or legal aid route</li>
    <li><strong>This is your FIRST call</strong></li>
  </ul>
</div>

<div class="card">
  <h3>Option 2: Houterasu JP Support Dial</h3>
  <p style="font-size:1.2rem;font-weight:700;color:var(--text)"><a href="tel:0570078374" style="color:var(--accent);text-decoration:none">0570-078374</a></p>
  <ul style="padding-left:20px">
    <li>Japanese-language legal information line</li>
    <li>IP phone: 03-6745-5600</li>
    <li>Can guide you to legal aid applications and next steps</li>
  </ul>
</div>

<div class="card">
  <h3>Option 3: Houterasu Legal Aid / Lawyer Referral</h3>
  <ul style="padding-left:20px">
    <li><strong>Up to 3 consultations</strong> may be available (eligibility-based)</li>
    <li>If you're low income (not working right now due to injury) = <strong>you QUALIFY</strong></li>
    <li>They cover the lawyer's fees</li>
    <li>You pay back in <strong>small installments</strong> later (~¥5,000-10,000/month)</li>
    <li>If you can't pay = can be deferred or reduced</li>
  </ul>
</div>

<div class="card">
  <h3>Option 4: "No Win, No Fee" Lawyer (成功報酬型)</h3>
  <ul style="padding-left:20px">
    <li><strong>ZERO cost upfront</strong></li>
    <li><strong>ZERO cost if you lose</strong></li>
    <li>If you WIN = they take <strong>20-30%</strong> of what you receive</li>
    <li>You don't pay a single yen from your own pocket</li>
  </ul>
  <div class="highlight" style="margin-top:12px">
    <strong>Example:</strong><br>
    You receive ¥10,000,000 in civil damages<br>
    Lawyer fee (25%) = ¥2,500,000<br>
    <strong>YOU GET: ¥7,500,000</strong> — and you paid nothing upfront
  </div>
</div>

<div class="card">
  <h3>Best Plan</h3>
  <div style="background:var(--bg);border-radius:8px;padding:16px;font-size:0.9rem;color:var(--text-dim)">
    <p><strong style="color:var(--accent)">Step 1:</strong> Call multilingual legal support (0570-078377 / 050-3754-5430)</p>
    <p><strong style="color:var(--accent)">Fallback:</strong> If unavailable, call FRESC reservation (03-5363-3025)</p>
    <p style="margin:4px 0;color:var(--text-dim)">&darr;</p>
    <p><strong style="color:var(--accent)">Step 2:</strong> Get referral to lawyer/legal aid</p>
    <p style="margin:4px 0;color:var(--text-dim)">&darr;</p>
    <p><strong style="color:var(--accent)">Step 3:</strong> If they need payment → apply at Houterasu</p>
    <p style="margin:4px 0;color:var(--text-dim)">Or →</p>
    <p><strong style="color:var(--accent)">Step 3b:</strong> Find a "No Win, No Fee" lawyer</p>
    <p style="margin:4px 0;color:var(--text-dim)">&darr;</p>
    <p><strong style="color:var(--success)">Result:</strong> You have a lawyer route with low/no upfront cost.</p>
  </div>
</div>

<div class="card">
  <h3>Who is Liable?</h3>
  <p style="color:var(--accent);margin-bottom:10px">THREE parties are responsible for your accident. You can claim against all of them.</p>
  <div class="table-wrap"><table>
    <tr><th>Who</th><th>Why They're Liable</th><th>Level</th></tr>
    <tr>
      <td><strong>Ninomiya Kougyo<br>(Yuta)</strong></td>
      <td>
        Your direct employer. Has 安全配慮義務 (duty of care).<br>
        Yuta changed the safe testing location.<br>
        Yuta ignored your warning about the burikki.<br>
        <strong>He's the president = company is liable.</strong>
      </td>
      <td class="amt" style="font-weight:800">HIGH</td>
    </tr>
    <tr>
      <td><strong>Asami Kougyo<br>(Senno)</strong></td>
      <td>
        Senno was the 現場監督 (site supervisor).<br>
        He conducted the kimitsu test with Yuta.<br>
        Has 安全管理責任 (safety management duty).<br>
        If he's the 元請け (prime contractor) = direct liability too.
      </td>
      <td class="amt" style="font-weight:800">HIGH</td>
    </tr>
    <tr>
      <td><strong>Both Companies<br>Jointly</strong></td>
      <td>
        Under Japanese law, if two companies are involved in a project and an accident occurs, <strong>both are jointly liable</strong> (共同不法行為).<br>
        This means: you can claim against BOTH.
      </td>
      <td class="amt" style="font-weight:800">BOTH</td>
    </tr>
  </table></div>
  <div class="highlight warn" style="margin-top:12px">
    <strong>Your lawyer will determine who to sue:</strong><br>
    Could be just Ninomiya, just Asami, or BOTH. Claiming against both increases your total compensation.
  </div>
</div>

<div class="card">
  <h3>What to Tell the Lawyer</h3>
  <p>At your first consultation, bring/tell them:</p>
  <ul style="padding-left:20px">
    <li>Accident report (you already have this in read.txt)</li>
    <li>Shindansho and medical records</li>
    <li>Photos of injuries</li>
    <li>Screenshots of messages with Yuta</li>
    <li>Payslips (to calculate compensation)</li>
    <li>"I was NOT assigned to the kimitsu test"</li>
    <li>"I prepared a safe testing area but Yuta changed it"</li>
    <li>"I warned them about the burikki but they ignored me"</li>
    <li>"Senno from Asami Kougyo was the supervisor present"</li>
    <li>"My wife is pregnant and I have a child starting elementary school"</li>
  </ul>
</div>

<div class="warning-box">
  <h4>DO NOT DO THIS — BEFORE TALKING TO A LAWYER</h4>
  <ul>
    <li>DO NOT sign any papers from Yuta or Asami Kougyo</li>
    <li>DO NOT accept cash/money as a "settlement" without a lawyer</li>
    <li>DO NOT agree to "we're good" or "this settles it"</li>
    <li>DO NOT resign or agree to end your contract</li>
    <li>If pressured, just say: まず弁護士に相談します (Mazu bengoshi ni soudan shimasu) = "Let me consult with my lawyer first"</li>
  </ul>
</div>
`}function f(){const s=[{id:"c1",text:"Call legal support (0570-078377 / 050-3754-5430). If unavailable: 03-5363-3025",phase:"Week 1"},{id:"c2",text:"Send verification message to Yuta (LINE/email)",phase:"Week 1"},{id:"c3",text:"Screenshot Yuta's reply",phase:"Week 1"},{id:"c4",text:'Go back to hospital — say "Rousai desu"',phase:"Week 1"},{id:"c5",text:"Get Shindansho (medical certificate)",phase:"Week 1"},{id:"c6",text:"Ask for referral to Neurologist",phase:"Week 1"},{id:"c7",text:"Ask for referral to ENT doctor",phase:"Week 1"},{id:"c8",text:"Take photos of injuries",phase:"Week 1"},{id:"c9",text:"Collect payslips (last 3 months)",phase:"Week 1"},{id:"c10",text:"Verify at Labor Office that rousai was filed",phase:"Week 2"},{id:"c11",text:"Go to Neurologist",phase:"Week 2"},{id:"c12",text:"Go to ENT — hearing test",phase:"Week 2"},{id:"c13",text:"Get a lawyer (via Houterasu or FRESC reservation route)",phase:"Week 2-3"},{id:"c14",text:"Lawyer files civil damages claim",phase:"Week 3-4"},{id:"c15",text:"Regular hospital visits (every 1-2 weeks)",phase:"Ongoing"},{id:"c16",text:"Report ALL symptoms every visit",phase:"Ongoing"},{id:"c17",text:"Save all receipts and documents",phase:"Ongoing"},{id:"c18",text:"Disability assessment (if permanent symptoms)",phase:"Month 6+"}],a=c();let t='<h2 class="section-title">Progress Checklist</h2>';t+='<p style="color:var(--text-dim);margin-bottom:16px;font-size:0.9rem">Click the box to mark as done. This is saved in your phone/browser.</p>',t+='<div class="card"><ul class="checklist">';let o="";for(const e of s){e.phase!==o&&(o=e.phase,t+=`<li style="border-bottom:none;padding:4px 0"><strong style="color:var(--accent);font-size:0.8rem">${o}</strong></li>`);const r=a[e.id];t+=`<li class="${r?"done":""}" data-id="${e.id}"><div class="check-box ${r?"checked":""}"></div><span>${e.text}</span></li>`}return t+="</ul></div>",t+=`<div class="warning-box">
    <h4>DON'T FORGET</h4>
    <ul>
      <li>DO NOT sign any settlement/waiver without a lawyer</li>
      <li>DO NOT return to work until cleared by the doctor</li>
      <li>DO NOT tell the doctor "I'm fine" if you're not</li>
      <li>All communication with Yuta = IN WRITING (LINE/email)</li>
    </ul>
  </div>`,t}function b(){return`
<h2 class="section-title">Important Contacts</h2>

<div class="card" style="border-left:4px solid var(--danger)">
  <h3>FRESC Reservation (21 Languages)</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0353633025" style="color:var(--text);text-decoration:none">03-5363-3025</a></p>
  <p>For: Booking consultation at FRESC (includes Tagalog)</p>
  <p>FRESC center representative menu: 0570-011000</p>
</div>

<div class="card">
  <h3>法テラス Multilingual (Tagalog/English)</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0570078377" style="color:var(--text);text-decoration:none">0570-078377</a></p>
  <p>IP/prepaid: 050-3754-5430</p>
  <p>Consultation/support is free; call charges apply</p>
  <p>For: Legal guidance, referral, legal aid route</p>
</div>

<div class="card">
  <h3>Foreign Residents Information Center</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0570013904" style="color:var(--text);text-decoration:none">0570-013904</a></p>
  <p>IP/PHS/overseas: 03-5796-7112</p>
  <p>For: Immigration/status-related phone consultation</p>
</div>

<div class="card">
  <h3>法テラス JP Support Dial</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0570078374" style="color:var(--text);text-decoration:none">0570-078374</a></p>
  <p>IP phone: 03-6745-5600</p>
  <p>Japanese legal information line</p>
</div>

<div class="card">
  <h3>労働基準監督署 — Labor Standards Office</h3>
  <p>Look for: <strong>川崎南労働基準監督署</strong></p>
  <p>Search online: "川崎南労働基準監督署" for exact address/number</p>
  <p>For: Verify rousai filing, file rousai yourself</p>
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
  <h3>Time Limits — You Still Have Time</h3>
  <div class="table-wrap"><table>
    <tr><th>Claim</th><th>Deadline</th></tr>
    <tr><td>Medical (療養補償)</td><td>2 years from the accident</td></tr>
    <tr><td>Leave Pay (休業補償)</td><td>2 years from the day you missed work</td></tr>
    <tr><td>Disability (障害補償)</td><td>5 years from when injury stabilized</td></tr>
    <tr><td>Civil Damages (慰謝料)</td><td>3 years (or 5 depending on the case)</td></tr>
  </table></div>
  <div class="highlight ok">It's not too late. But the sooner you act, the stronger your case.</div>
</div>
`}function w(){const s=document.querySelector("#app");s.innerHTML=`
<div class="header">
  <h1>Work Accident Rousai Guide</h1>
  <p>Step-by-step guide for workers' compensation claims in Japan</p>
</div>

<div class="emergency-banner">
  <h2>LEGAL SUPPORT HOTLINE (IF STABLE)</h2>
  <div class="phone"><a href="tel:0570078377">0570-078377</a></div>
  <div class="sub">IP/prepaid: 050-3754-5430 • If unavailable: 03-5363-3025 • For emergencies call 119 first</div>
</div>

<div class="nav">
  ${h.map(t=>`<button class="nav-btn ${t.id==="steps"?"active":""}" data-tab="${t.id}">${t.label}</button>`).join("")}
</div>

<div class="section active" data-section="steps">${g()}</div>
<div class="section" data-section="convo">${m()}</div>
<div class="section" data-section="money">${y()}</div>
<div class="section" data-section="lawyer">${v()}</div>
<div class="section" data-section="checklist">${f()}</div>
<div class="section" data-section="contacts">${b()}</div>
`,s.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{s.querySelectorAll(".nav-btn").forEach(o=>o.classList.remove("active")),s.querySelectorAll(".section").forEach(o=>o.classList.remove("active")),t.classList.add("active"),s.querySelector(`[data-section="${t.dataset.tab}"]`).classList.add("active")})}),s.querySelectorAll(".checklist li[data-id]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.id,r=t.querySelector(".check-box").classList.toggle("checked");t.classList.toggle("done",r),u(o,r)})});const a={yuta:`Yutaさん、お疲れ様です。労災の手続きを進めてくれているとのことで、ありがとうございます。確認のためいくつかお聞きしたいのですが：

1) 労災の申請書類はもう提出しましたか？
2) 提出先の労働基準監督署はどこですか？
3) 受理番号か控えのコピーをもらえますか？

まだめまいと聴覚の違和感が続いていて、医師から専門医への紹介が必要と言われています。今後の治療費も労災で対応をお願いします。`,decline:"大丈夫です。妻と行きます。ありがとうございます。でも家族と行きたいです。","hospital-call":"先日救急で受診した者ですが、まだめまいが続いているので受診したいです。今日行っても大丈夫ですか？",privacy:"会社には連絡しないでください。個人で来ています。",shindansho:"診断書をお願いしたいのですが。労災で使います。診断書に「休業が必要」と書いてもらえますか？",referral:"脳神経外科への紹介状をお願いできますか？耳鼻咽喉科もお願いします。"};s.querySelectorAll(".copy-btn").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const e=t.dataset.copy;a[e]&&p(a[e],t)})})}w();
