import './style.css'

const TABS = [
  { id: 'steps', label: 'Steps' },
  { id: 'convo', label: 'Phrases' },
  { id: 'money', label: 'Compensation' },
  { id: 'lawyer', label: 'Lawyer' },
  { id: 'checklist', label: 'Checklist' },
  { id: 'contacts', label: 'Contacts' },
]

const CHECKLIST_KEY = 'rousai-checklist'

function getChecked() {
  try { return JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '{}') } catch { return {} }
}
function setChecked(id, val) {
  const c = getChecked(); c[id] = val; localStorage.setItem(CHECKLIST_KEY, JSON.stringify(c))
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied'); btn.textContent = 'Copied!'
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = 'Copy Japanese text' }, 2000)
  })
}

function phrase(jp, romaji, meaning) {
  return `<div class="phrase-box"><div class="jp">${jp}</div><div class="romaji">${romaji}</div><div class="meaning">${meaning}</div></div>`
}

function convo(who, label, jp, romaji, meaning) {
  return `<div class="convo-line ${who}"><div class="convo-label">${label}</div><div class="jp">${jp}</div>${romaji ? `<div class="romaji">${romaji}</div>` : ''}<div class="meaning">${meaning}</div></div>`
}

function renderSteps() {
  return `
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
  ${phrase(
    'Yuta\u3055\u3093\u3001\u304a\u75b2\u308c\u69d8\u3067\u3059\u3002\u52b4\u707d\u306e\u624b\u7d9a\u304d\u3092\u9032\u3081\u3066\u304f\u308c\u3066\u3044\u308b\u3068\u306e\u3053\u3068\u3067\u3001\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u78ba\u8a8d\u306e\u305f\u3081\u3044\u304f\u3064\u304b\u304a\u805e\u304d\u3057\u305f\u3044\u306e\u3067\u3059\u304c\uff1a1) \u52b4\u707d\u306e\u7533\u8acb\u66f8\u985e\u306f\u3082\u3046\u63d0\u51fa\u3057\u307e\u3057\u305f\u304b\uff1f 2) \u63d0\u51fa\u5148\u306e\u52b4\u50cd\u57fa\u6e96\u76e3\u7763\u7f72\u306f\u3069\u3053\u3067\u3059\u304b\uff1f 3) \u53d7\u7406\u756a\u53f7\u304b\u63a7\u3048\u306e\u30b3\u30d4\u30fc\u3092\u3082\u3089\u3048\u307e\u3059\u304b\uff1f',
    'Yuta-san, otsukaresama desu. Rousai no tetsuzuki wo susumete kurete iru to no koto de, arigatou gozaimasu. Kakunin no tame ikutsuka okiki shitai no desu ga: 1) Rousai no shinsei shorui wa mou teishutsu shimashita ka? 2) Teishutsu-saki no roudou kijun kantoku-sho wa doko desu ka? 3) Juri-bangou ka hikae no copy wo moraemasu ka?',
    'Salamat sa pag-asikaso ng rousai. Para ma-confirm: 1) Na-submit na ba ang forms? 2) Saang Labor Office? 3) Pwede bang makakuha ng receipt/reference number?'
  )}
  <button class="copy-btn" data-copy="yuta">Copy Japanese text</button>
  <div class="highlight danger" style="margin-top:12px">I-SCREENSHOT ang reply niya. Ito ang evidence mo.</div>
</div>

<div class="step-card urgent">
  <div class="step-number">3</div>
  <h4>Bumalik sa Hospital — KASAMA SI NAOMI, HINDI SI YUTA</h4>
  <div class="highlight danger" style="margin-bottom:10px">
    <strong>Si Naomi (asawa mo) ang isama mo, HINDI si Yuta.</strong><br>
    Kung mag-insist si Yuta, sabihin mo:
  </div>
  ${phrase(
    '\u5927\u4e08\u592b\u3067\u3059\u3002\u59bb\u3068\u884c\u304d\u307e\u3059\u3002',
    'Daijoubu desu. Tsuma to ikimasu.',
    'Okay lang. Kasama ko ang asawa ko.'
  )}
  ${phrase(
    '\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3067\u3082\u5bb6\u65cf\u3068\u884c\u304d\u305f\u3044\u3067\u3059\u3002',
    'Arigatou gozaimasu. Demo kazoku to ikitai desu.',
    'Salamat. Pero gusto kong kasama ang pamilya ko.'
  )}
  <button class="copy-btn" data-copy="decline">Copy Japanese text</button>
  <p style="margin-top:12px">Sa hospital, sabihin: <strong>\u52b4\u707d\u3067\u3059 (Rousai desu)</strong></p>
  <p>Humingi ng:</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li><strong>\u8a3a\u65ad\u66f8 (Shindansho)</strong> \u2014 medical certificate \u2014 IKAW ANG PWEDENG KUMUHA NITO, hindi kailangan si Yuta</li>
    <li>Referral sa <strong>\u8133\u795e\u7d4c\u5916\u79d1 (Neurologist)</strong> \u2014 para sa dizziness/head</li>
    <li>Referral sa <strong>\u8033\u9f3b\u54bd\u5589\u79d1 (ENT)</strong> \u2014 para sa hearing</li>
  </ul>
  <p>I-report LAHAT ng symptoms: dizziness, headache, hearing problem, knee pain, finger pain, can't sleep, anxiety</p>
  <p style="color:var(--warning)">Bayad ng shindansho: ~\u00a53,000-5,000 (ire-reimburse sa rousai later)</p>
</div>

<div class="step-card">
  <div class="step-number">4</div>
  <h4>Kolektahin ang Documents</h4>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Payslips (\u7d66\u4e0e\u660e\u7d30) \u2014 last 3 months minimum</li>
    <li>Employment contract kung meron</li>
    <li>Photos ng injuries (kunan araw-araw)</li>
    <li>Screenshots ng messages kay Yuta</li>
    <li>Hospital receipts</li>
    <li>Shindansho</li>
  </ul>
</div>

<div class="phase-header"><h3>PHASE 2: WEEK 2 \u2014 Verification at Specialist</h3><p>I-verify ang rousai at magpa-specialist</p></div>

<div class="step-card warn">
  <div class="step-number">5</div>
  <h4>I-verify sa Labor Standards Office (\u52b4\u50cd\u57fa\u6e96\u76e3\u7763\u7f72)</h4>
  <p>Hanapin: <strong>\u5ddd\u5d0e\u5357\u52b4\u50cd\u57fa\u6e96\u76e3\u7763\u7f72</strong> (Kawasaki Minami Labor Office)</p>
  <p>Sabihin ang company name: \u4e8c\u5bae\u5de5\u696d (Ninomiya Kougyo) at accident date</p>
  <p>Kung HINDI pa nag-file si Yuta \u2192 ikaw mismo ang mag-file. Pwede yan.</p>
</div>

<div class="step-card warn">
  <div class="step-number">6</div>
  <h4>Pumunta sa Neurologist (\u8133\u795e\u7d4c\u5916\u79d1)</h4>
  <p>Gamit ang referral mula sa hospital</p>
  <p>Kung may diagnosis ng concussion/TBI = MALAKING impact sa compensation</p>
</div>

<div class="step-card warn">
  <div class="step-number">7</div>
  <h4>Pumunta sa ENT Doctor (\u8033\u9f3b\u54bd\u5589\u79d1)</h4>
  <p>Hearing test (\u8074\u529b\u691c\u67fb)</p>
  <p>Kung may permanent hearing loss = DISABILITY GRADE = malaking compensation</p>
</div>

<div class="phase-header"><h3>PHASE 3: WEEK 2-4 \u2014 Legal Action</h3><p>Kumuha ng lawyer at file civil damages</p></div>

<div class="step-card ok">
  <div class="step-number">8</div>
  <h4>Kumuha ng Lawyer</h4>
  <p><strong>LIBRE ang lawyer:</strong></p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li><strong>FRESC referral</strong> \u2014 mula sa Step 1</li>
    <li><strong>\u6cd5\u30c6\u30e9\u30b9 (Houterasu)</strong> \u2014 0570-078374, free consult, covers lawyer fees kung low income</li>
    <li><strong>"No Win, No Fee"</strong> lawyer \u2014 zero gastos, percentage lang sa nanalo</li>
  </ul>
</div>

<div class="step-card ok">
  <div class="step-number">9</div>
  <h4>Lawyer Files Civil Damages (\u6c11\u4e8b\u640d\u5bb3\u8ce0\u511f)</h4>
  <p>Ang lawyer ang gagawa nito. Basis: employer negligence</p>
  <ul style="padding-left:20px;color:var(--text-dim);font-size:0.85rem">
    <li>Binago ni Yuta ang safe testing location</li>
    <li>Hindi pinansin ang safety warning mo</li>
    <li>Hindi ka assigned sa kimitsu test pero na-injure ka</li>
  </ul>
</div>

<div class="phase-header"><h3>PHASE 4-5: MONTH 1-24 \u2014 Recovery at Resolution</h3><p>Regular visits, disability assessment, settlement</p></div>

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
  <h4>GOLDEN RULES \u2014 HUWAG KALIMUTAN</h4>
  <ul>
    <li>HUWAG mag-sign ng kahit ano galing kay Yuta nang walang lawyer</li>
    <li>HUWAG bumalik sa trabaho hanggang cleared ng doctor</li>
    <li>HUWAG kalimutan ang CIVIL DAMAGES \u2014 ito ang malaking pera</li>
    <li>I-save LAHAT ng documents, messages, receipts, photos</li>
    <li>Lahat ng communication IN WRITING \u2014 LINE/email, hindi verbal lang</li>
  </ul>
</div>
`
}

function renderConvo() {
  return `
<h2 class="section-title">Conversation Phrases</h2>

<div class="card">
  <h3>Pagtawag sa FRESC (0120-76-2029)</h3>
  ${convo('them', 'FRESC', '\u304a\u96fb\u8a71\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002FRESC\u3067\u3059\u3002', 'Odenwa arigatou gozaimasu. FRESC desu.', 'Thank you for calling. This is FRESC.')}
  ${convo('you', 'IKAW', '\u3059\u307f\u307e\u305b\u3093\u3001\u30bf\u30ac\u30ed\u30b0\u8a9e\u306e\u901a\u8a33\u3092\u304a\u9858\u3044\u3067\u304d\u307e\u3059\u304b\uff1f', 'Sumimasen, Tagalog-go no tsuuyaku wo onegai dekimasu ka?', 'Pwede bang mag-Tagalog interpreter?')}
  ${convo('them', 'FRESC', '\u306f\u3044\u3001\u5c11\u3005\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002', 'Hai, shoushou omachi kudasai.', 'Yes, please wait.')}
  <div class="highlight">Pagkatapos nito, mag-Tagalog/English ka na. Sabihin mo ang situation mo.</div>
</div>

<div class="card">
  <h3>Sa Hospital \u2014 Pagkuha ng Shindansho</h3>
  ${convo('you', 'IKAW', '\u3059\u307f\u307e\u305b\u3093\u3001\u8a3a\u65ad\u66f8\u3092\u304a\u9858\u3044\u3057\u305f\u3044\u306e\u3067\u3059\u304c\u3002', 'Sumimasen, shindansho wo onegai shitai no desu ga.', 'Gusto kong humingi ng medical certificate.')}
  ${convo('them', 'STAFF', '\u306f\u3044\u3001\u3069\u306e\u3088\u3046\u306a\u76ee\u7684\u3067\u3059\u304b\uff1f', 'Hai, dono you na mokuteki desu ka?', 'For what purpose?')}
  ${convo('you', 'IKAW', '\u52b4\u707d\u3067\u3059\u3002\u4ed5\u4e8b\u4e2d\u306e\u4e8b\u6545\u3067\u602a\u6211\u3092\u3057\u307e\u3057\u305f\u3002', 'Rousai desu. Shigoto-chuu no jiko de kega wo shimashita.', 'Workers\u2019 comp. Na-injure ako sa work accident.')}
  ${convo('you', 'IKAW', '\u307e\u3060\u3081\u307e\u3044\u304c\u7d9a\u3044\u3066\u3044\u307e\u3059\u3002\u5c02\u9580\u533b\u3092\u7d39\u4ecb\u3057\u3066\u3082\u3089\u3048\u307e\u3059\u304b\uff1f', 'Mada memai ga tsuzuite imasu. Senmon-i wo shoukai shite moraemasu ka?', 'May dizziness pa rin. Pwede bang i-refer sa specialist?')}
  ${convo('you', 'IKAW', '\u8a3a\u65ad\u66f8\u306b\u300c\u4f11\u696d\u304c\u5fc5\u8981\u300d\u3068\u66f8\u3044\u3066\u3082\u3089\u3048\u307e\u3059\u304b\uff1f', 'Shindansho ni "kyuugyou ga hitsuyou" to kaite moraemasu ka?', 'Pwede bang isulat sa certificate na kailangan ko ng rest from work?')}
  ${convo('you', 'IKAW', '\u8133\u795e\u7d4c\u5916\u79d1\u3078\u306e\u7d39\u4ecb\u72b6\u3092\u304a\u9858\u3044\u3067\u304d\u307e\u3059\u304b\uff1f', 'Nou-shinkei-geka e no shoukai-jou wo onegai dekimasu ka?', 'Pwede bang humingi ng referral letter sa neurologist?')}
  ${convo('you', 'IKAW', '\u8033\u9f3b\u54bd\u5589\u79d1\u3082\u304a\u9858\u3044\u3057\u307e\u3059\u3002', 'Jibi-inkou-ka mo onegai shimasu.', 'Pati ENT doctor.')}
</div>

<div class="card">
  <h3>Kay Yuta \u2014 Tanggihan ang Hospital (Si Naomi ang isama mo)</h3>
  ${convo('them', 'YUTA', '\u4ffa\u304c\u75c5\u9662\u306b\u9023\u308c\u3066\u884c\u304f\u3088\u3002', 'Ore ga byouin ni tsurete iku yo.', 'Sasamahan kita sa hospital.')}
  ${convo('you', 'IKAW', '\u5927\u4e08\u592b\u3067\u3059\u3002\u59bb\u3068\u884c\u304d\u307e\u3059\u3002', 'Daijoubu desu. Tsuma to ikimasu.', 'Okay lang. Kasama ko ang asawa ko.')}
  <p style="color:var(--text-dim);font-size:0.85rem;margin:8px 0">Kung mag-insist pa rin:</p>
  ${convo('you', 'IKAW', '\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3067\u3082\u5bb6\u65cf\u3068\u884c\u304d\u305f\u3044\u3067\u3059\u3002', 'Arigatou gozaimasu. Demo kazoku to ikitai desu.', 'Salamat. Pero gusto kong kasama ang pamilya ko.')}
  <button class="copy-btn" data-copy="decline">Copy Japanese text</button>
  <div class="highlight danger" style="margin-top:10px">Hindi niya karapatan na pigilan si Naomi. Hindi ka niya empleyado sa hospital — pasyente ka. Pwede kang pumili kung sino ang kasama mo.</div>
</div>

<div class="card">
  <h3>Kay Yuta \u2014 Pag-verify ng Rousai</h3>
  ${convo('you', 'IKAW', 'Yuta\u3055\u3093\u3001\u52b4\u707d\u306e\u624b\u7d9a\u304d\u306e\u4ef6\u306a\u3093\u3067\u3059\u304c\u3002\u3082\u3046\u66f8\u985e\u306f\u63d0\u51fa\u3057\u307e\u3057\u305f\u304b\uff1f', 'Yuta-san, rousai no tetsuzuki no ken nan desu ga. Mou shorui wa teishutsu shimashita ka?', 'Yuta-san, tungkol sa rousai paperwork. Na-submit na ba ang documents?')}
  ${convo('you', 'IKAW', '\u78ba\u8a8d\u306e\u305f\u3081\u306b\u3001\u53d7\u7406\u756a\u53f7\u304b\u63a7\u3048\u3092\u3082\u3089\u3048\u307e\u3059\u304b\uff1f', 'Kakunin no tame ni, juri-bangou ka hikae wo moraemasu ka?', 'Para sa records ko, pwede bang makuha ang receipt number o copy?')}
  <div class="highlight danger">Kung mag-offer siya ng pera para "settle":</div>
  ${convo('you', 'IKAW', '\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u305f\u3060\u3001\u307e\u305a\u5f01\u8b77\u58eb\u306b\u76f8\u8ac7\u3057\u3066\u304b\u3089\u8fd4\u4e8b\u3057\u307e\u3059\u3002', 'Arigatou gozaimasu. Tada, mazu bengoshi ni soudan shite kara henji shimasu.', 'Salamat. Pero magpa-consult muna ako sa lawyer bago mag-reply.')}
</div>

<div class="card">
  <h3>Sa Labor Standards Office</h3>
  ${convo('you', 'IKAW', '\u52b4\u707d\u306e\u5c4a\u51fa\u306b\u3064\u3044\u3066\u76f8\u8ac7\u3057\u305f\u3044\u306e\u3067\u3059\u304c\u3002', 'Rousai no todokede ni tsuite soudan shitai no desu ga.', 'Gusto kong mag-consult tungkol sa rousai filing.')}
  ${convo('you', 'IKAW', '\u4f1a\u793e\u540d\u306f\u4e8c\u5bae\u5de5\u696d\u3067\u3059\u3002\u4f1a\u793e\u304c\u52b4\u707d\u7533\u8acb\u3092\u3057\u305f\u304b\u78ba\u8a8d\u3057\u305f\u3044\u3067\u3059\u3002', 'Kaisha-mei wa Ninomiya Kougyo desu. Kaisha ga rousai shinsei wo shita ka kakunin shitai desu.', 'Company: Ninomiya Kougyo. Gusto kong i-verify kung nag-file sila ng rousai.')}
  ${convo('you', 'IKAW', '\u81ea\u5206\u3067\u7533\u8acb\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f', 'Jibun de shinsei suru koto wa dekimasu ka?', 'Pwede ko bang i-file personally?')}
</div>

<div class="card">
  <h3>Emergency Phrases</h3>
  <div class="table-wrap"><table>
    <tr><th>Situation</th><th>Japanese</th><th>Romaji</th><th>Meaning</th></tr>
    <tr><td>Nahihilo</td><td>\u3081\u307e\u3044\u304c\u3057\u307e\u3059</td><td>Memai ga shimasu</td><td>I feel dizzy</td></tr>
    <tr><td>Sumasakit ulo</td><td>\u982d\u304c\u75db\u3044\u3067\u3059</td><td>Atama ga itai desu</td><td>I have a headache</td></tr>
    <tr><td>Hindi marinig</td><td>\u8033\u304c\u805e\u3053\u3048\u306b\u304f\u3044\u3067\u3059</td><td>Mimi ga kikoe nikui desu</td><td>I can't hear well</td></tr>
    <tr><td>Sumasakit tuhod</td><td>\u819d\u304c\u75db\u3044\u3067\u3059</td><td>Hiza ga itai desu</td><td>My knee hurts</td></tr>
    <tr><td>Di maintindihan</td><td>\u308f\u304b\u308a\u307e\u305b\u3093</td><td>Wakarimasen</td><td>I don't understand</td></tr>
    <tr><td>Tagalog please</td><td>\u30bf\u30ac\u30ed\u30b0\u8a9e\u3067\u304a\u9858\u3044\u3057\u307e\u3059</td><td>Tagalog-go de onegai shimasu</td><td>In Tagalog please</td></tr>
    <tr><td>Work accident</td><td>\u52b4\u707d\u3067\u3059</td><td>Rousai desu</td><td>This is a work injury</td></tr>
    <tr><td>Tulong</td><td>\u52a9\u3051\u3066\u304f\u3060\u3055\u3044</td><td>Tasukete kudasai</td><td>Please help me</td></tr>
    <tr><td>Hindi makatulog</td><td>\u7720\u308c\u307e\u305b\u3093</td><td>Nemuremasen</td><td>I can't sleep</td></tr>
    <tr><td>Kinakabahan</td><td>\u4e0d\u5b89\u3067\u3059</td><td>Fuan desu</td><td>I feel anxious</td></tr>
  </table></div>
</div>
`
}

function renderMoney() {
  return `
<h2 class="section-title">Compensation Estimation</h2>

<div class="card">
  <h3>Assumptions</h3>
  <p>Monthly salary estimate: \u00a5250,000 - \u00a5350,000</p>
  <p>Average used: <strong>\u00a5300,000/month (\u00a510,000/day)</strong></p>
  <p>I-adjust kung mas mataas o mababa ang actual sahod mo.</p>
</div>

<div class="card">
  <h3>CLAIM 1: Rousai Benefits (\u52b4\u707d\u4fdd\u967a) \u2014 GUARANTEED</h3>
  <p style="color:var(--accent)">Ito ang MINIMUM na makukuha mo. Automatic benefit ng lahat ng workers.</p>

  <h3 style="margin-top:16px">A. Medical (\u7642\u990c\u88dc\u511f\u7d66\u4ed8) \u2014 100% Covered</h3>
  <div class="table-wrap"><table>
    <tr><th>Item</th><th>Estimated Cost</th><th>You Pay</th></tr>
    <tr><td>Emergency room</td><td>\u00a550,000 - \u00a5100,000</td><td class="amt">\u00a50</td></tr>
    <tr><td>CT scan, X-ray</td><td>\u00a520,000 - \u00a540,000</td><td class="amt">\u00a50</td></tr>
    <tr><td>Neurologist visits</td><td>\u00a510,000 - \u00a530,000 each</td><td class="amt">\u00a50</td></tr>
    <tr><td>ENT / Hearing test</td><td>\u00a510,000 - \u00a520,000 each</td><td class="amt">\u00a50</td></tr>
    <tr><td>MRI (kung kailangan)</td><td>\u00a530,000 - \u00a550,000</td><td class="amt">\u00a50</td></tr>
    <tr><td>Medications</td><td>\u00a55,000 - \u00a515,000/month</td><td class="amt">\u00a50</td></tr>
    <tr><td><strong>TOTAL</strong></td><td><strong>\u00a5200,000 - \u00a5500,000+</strong></td><td class="amt"><strong>\u00a50</strong></td></tr>
  </table></div>

  <h3 style="margin-top:16px">B. Leave Pay (\u4f11\u696d\u88dc\u511f) \u2014 80% ng Sahod</h3>
  <div class="table-wrap"><table>
    <tr><th>Recovery Period</th><th>Monthly</th><th>Total Leave Pay</th></tr>
    <tr><td>3 months</td><td>\u00a5240,000/mo</td><td class="amt">\u00a5720,000</td></tr>
    <tr><td>6 months</td><td>\u00a5240,000/mo</td><td class="amt">\u00a51,440,000</td></tr>
    <tr><td>12 months</td><td>\u00a5240,000/mo</td><td class="amt">\u00a52,920,000</td></tr>
  </table></div>

  <h3 style="margin-top:16px">C. Disability (\u969c\u5bb3\u88dc\u511f) \u2014 Kung may Permanent Symptoms</h3>
  <div class="table-wrap"><table>
    <tr><th>Grade</th><th>Condition</th><th>Total</th></tr>
    <tr><td>Grade 14</td><td>Mild persistent symptoms</td><td class="amt">\u00a5640,000</td></tr>
    <tr><td>Grade 13</td><td>Mild functional impairment</td><td class="amt">\u00a51,150,000</td></tr>
    <tr><td>Grade 12</td><td>Moderate hearing loss / persistent dizziness</td><td class="amt">\u00a51,760,000</td></tr>
    <tr><td>Grade 11</td><td>Significant hearing loss one ear</td><td class="amt">\u00a52,520,000</td></tr>
    <tr><td>Grade 10</td><td>Major functional limitation</td><td class="amt">\u00a53,410,000</td></tr>
    <tr><td>Grade 9</td><td>Severe hearing loss / chronic neurological</td><td class="amt">\u00a54,410,000</td></tr>
  </table></div>
</div>

<div class="card">
  <h3>CLAIM 2: Civil Damages (\u6c11\u4e8b\u640d\u5bb3\u8ce0\u511f) \u2014 KAILANGAN NG LAWYER</h3>
  <p style="color:var(--warning)">ITO ANG MALAKING PERA. Hiwalay sa rousai. Basis: employer negligence.</p>

  <h3 style="margin-top:16px">A. Pain & Suffering (\u6170\u8b1d\u6599)</h3>
  <div class="table-wrap"><table>
    <tr><th>Type</th><th>Grade 14</th><th>Grade 12</th><th>Grade 9-10</th></tr>
    <tr><td>Treatment period</td><td>\u00a5730,000</td><td>\u00a51,670,000</td><td>\u00a52,360,000</td></tr>
    <tr><td>Disability</td><td>\u00a51,100,000</td><td>\u00a52,900,000</td><td>\u00a55,500,000-\u00a56,900,000</td></tr>
    <tr><td><strong>Subtotal</strong></td><td class="amt">\u00a51,830,000</td><td class="amt">\u00a54,570,000</td><td class="amt">\u00a57,860,000-\u00a59,260,000</td></tr>
  </table></div>

  <h3 style="margin-top:16px">B. Lost Wages Top-Up (20% + overtime)</h3>
  <div class="table-wrap"><table>
    <tr><th>Recovery</th><th>Amount</th></tr>
    <tr><td>3 months</td><td class="amt">\u00a5230,000 - \u00a5330,000</td></tr>
    <tr><td>6 months</td><td class="amt">\u00a5460,000 - \u00a5660,000</td></tr>
    <tr><td>12 months</td><td class="amt">\u00a5920,000 - \u00a51,320,000</td></tr>
  </table></div>

  <h3 style="margin-top:16px">C. Lost Future Earnings (\u9038\u5931\u5229\u76ca) \u2014 Kung may Permanent Disability</h3>
  <p>Based sa: Annual income x Disability % x Remaining working years</p>
  <div class="table-wrap"><table>
    <tr><th>Grade</th><th>Capacity Loss</th><th>Estimated</th></tr>
    <tr><td>Grade 14</td><td>5%</td><td class="amt">\u00a52,700,000 - \u00a53,200,000</td></tr>
    <tr><td>Grade 12</td><td>14%</td><td class="amt">\u00a57,600,000 - \u00a59,000,000</td></tr>
    <tr><td>Grade 10</td><td>27%</td><td class="amt">\u00a514,600,000 - \u00a517,400,000</td></tr>
    <tr><td>Grade 9</td><td>35%</td><td class="amt">\u00a518,900,000 - \u00a522,500,000</td></tr>
  </table></div>
</div>

<div class="grand-total">
  <h3>GRAND TOTAL ESTIMATION (Rousai + Civil Damages - Lawyer Fee)</h3>
  <div class="table-wrap"><table style="min-width:300px">
    <tr><th>Scenario</th><th>Net Sa'yo</th><th>Sa PHP</th></tr>
    <tr><td><strong>CONSERVATIVE</strong><br>3mo rest, Grade 14</td><td class="amt-big">\u00a55,000,000 - \u00a55,500,000</td><td class="amt-big">\u20b11.9M - \u20b12.1M</td></tr>
    <tr><td><strong>MIDDLE</strong><br>6mo rest, Grade 12</td><td class="amt-big">\u00a512,500,000 - \u00a514,000,000</td><td class="amt-big">\u20b14.8M - \u20b15.3M</td></tr>
    <tr><td><strong>HIGH</strong><br>12mo rest, Grade 9-10</td><td class="amt-big">\u00a527,000,000 - \u00a530,000,000</td><td class="amt-big">\u20b110.3M - \u20b111.4M</td></tr>
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
`
}

function renderLawyer() {
  return `
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
    <li>Babayaran mo na lang ng <strong>maliit na hulog</strong> pagkatapos (~\u00a55,000-10,000/month)</li>
    <li>Kung hindi ka makapag-bayad = pwedeng i-defer o bawasan pa</li>
  </ul>
</div>

<div class="card">
  <h3>Option 3: "No Win, No Fee" Lawyer (\u6210\u529f\u5831\u916c\u578b)</h3>
  <ul style="padding-left:20px">
    <li><strong>ZERO bayad sa simula</strong></li>
    <li><strong>ZERO bayad kung natalo</strong></li>
    <li>Kung NANALO = kukuha lang sila ng <strong>20-30%</strong> ng nakuha mo</li>
    <li>Hindi ka naglalabas ng kahit isang yen mula sa bulsa mo</li>
  </ul>
  <div class="highlight" style="margin-top:12px">
    <strong>Halimbawa:</strong><br>
    Nakuha mo \u00a510,000,000 sa civil damages<br>
    Lawyer fee (25%) = \u00a52,500,000<br>
    <strong>SA'YO: \u00a57,500,000</strong> — at hindi ka naglabas ng pera
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
        Direct employer mo. May \u5b89\u5168\u914d\u616e\u7fa9\u52d9 (duty of care).<br>
        Si Yuta ang nagbago ng safe testing location.<br>
        Si Yuta ang hindi nakinig sa babala mo tungkol sa burikki.<br>
        <strong>President siya = company liable.</strong>
      </td>
      <td class="amt" style="font-weight:800">MATAAS</td>
    </tr>
    <tr>
      <td><strong>Asami Kougyo<br>(Senno)</strong></td>
      <td>
        Si Senno ang \u73fe\u5834\u76e3\u7763 (kantoku/site supervisor).<br>
        Siya ang nag-conduct ng kimitsu test kasama ni Yuta.<br>
        May \u5b89\u5168\u7ba1\u7406\u8cac\u4efb (safety management duty).<br>
        Kung siya ang \u5143\u8acb\u3051 (prime contractor) = may direct liability din.
      </td>
      <td class="amt" style="font-weight:800">MATAAS</td>
    </tr>
    <tr>
      <td><strong>Both Companies<br>Jointly</strong></td>
      <td>
        Sa Japanese law, kung dalawang company ang involved sa isang project at may nangyaring accident, <strong>both are jointly liable</strong> (\u5171\u540c\u4e0d\u6cd5\u884c\u70ba).<br>
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
    <li>Kung i-pressure ka, sabihin lang: \u307e\u305a\u5f01\u8b77\u58eb\u306b\u76f8\u8ac7\u3057\u307e\u3059 (Mazu bengoshi ni soudan shimasu) = "Magpa-consult muna ako sa lawyer"</li>
  </ul>
</div>
`
}

function renderChecklist() {
  const items = [
    { id: 'c1', text: 'Tawagan FRESC (0120-76-2029) \u2014 "Tagalog please"', phase: 'Week 1' },
    { id: 'c2', text: 'I-send verification message kay Yuta (LINE/email)', phase: 'Week 1' },
    { id: 'c3', text: 'I-screenshot ang reply ni Yuta', phase: 'Week 1' },
    { id: 'c4', text: 'Bumalik sa hospital \u2014 sabihin "Rousai desu"', phase: 'Week 1' },
    { id: 'c5', text: 'Kumuha ng Shindansho (medical certificate)', phase: 'Week 1' },
    { id: 'c6', text: 'Humingi ng referral sa Neurologist', phase: 'Week 1' },
    { id: 'c7', text: 'Humingi ng referral sa ENT doctor', phase: 'Week 1' },
    { id: 'c8', text: 'Kumuha ng photos ng injuries', phase: 'Week 1' },
    { id: 'c9', text: 'Kolektahin payslips (last 3 months)', phase: 'Week 1' },
    { id: 'c10', text: 'I-verify sa Labor Office na na-file ang rousai', phase: 'Week 2' },
    { id: 'c11', text: 'Pumunta sa Neurologist', phase: 'Week 2' },
    { id: 'c12', text: 'Pumunta sa ENT \u2014 hearing test', phase: 'Week 2' },
    { id: 'c13', text: 'Kumuha ng lawyer (via FRESC o Houterasu)', phase: 'Week 2-3' },
    { id: 'c14', text: 'Lawyer files civil damages claim', phase: 'Week 3-4' },
    { id: 'c15', text: 'Regular hospital visits (every 1-2 weeks)', phase: 'Ongoing' },
    { id: 'c16', text: 'I-report lahat ng symptoms every visit', phase: 'Ongoing' },
    { id: 'c17', text: 'I-save lahat ng receipts at documents', phase: 'Ongoing' },
    { id: 'c18', text: 'Disability assessment (kung may permanent symptoms)', phase: 'Month 6+' },
  ]

  const checked = getChecked()
  let html = '<h2 class="section-title">Progress Checklist</h2>'
  html += '<p style="color:var(--text-dim);margin-bottom:16px;font-size:0.9rem">I-click ang box para i-mark as done. Naka-save ito sa phone/browser mo.</p>'
  html += '<div class="card"><ul class="checklist">'

  let currentPhase = ''
  for (const item of items) {
    if (item.phase !== currentPhase) {
      currentPhase = item.phase
      html += `<li style="border-bottom:none;padding:4px 0"><strong style="color:var(--accent);font-size:0.8rem">${currentPhase}</strong></li>`
    }
    const isDone = checked[item.id]
    html += `<li class="${isDone ? 'done' : ''}" data-id="${item.id}"><div class="check-box ${isDone ? 'checked' : ''}"></div><span>${item.text}</span></li>`
  }

  html += '</ul></div>'

  html += `<div class="warning-box">
    <h4>HUWAG KALIMUTAN</h4>
    <ul>
      <li>HUWAG mag-sign ng settlement/waiver nang walang lawyer</li>
      <li>HUWAG bumalik sa trabaho hanggang cleared ng doctor</li>
      <li>HUWAG sabihing "okay na ako" sa doctor kung hindi pa talaga</li>
      <li>Lahat ng communication kay Yuta = IN WRITING (LINE/email)</li>
    </ul>
  </div>`

  return html
}

function renderContacts() {
  return `
<h2 class="section-title">Important Contacts</h2>

<div class="card" style="border-left:4px solid var(--danger)">
  <h3>FRESC \u2014 Foreign Residents Support Center</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0120762029" style="color:var(--text);text-decoration:none">0120-76-2029</a></p>
  <p>FREE \u2022 May Tagalog/English support</p>
  <p>Para sa: Rousai help, lawyer referral, general support</p>
  <p>Hours: Weekdays 9:00-17:00</p>
</div>

<div class="card">
  <h3>\u6cd5\u30c6\u30e9\u30b9 (Houterasu) \u2014 Japan Legal Support Center</h3>
  <p style="font-size:1.3rem;font-weight:800;color:var(--text)"><a href="tel:0570078374" style="color:var(--text);text-decoration:none">0570-078374</a></p>
  <p>Free consultation x3 \u2022 Covers lawyer fees kung low income</p>
  <p>Para sa: Lawyer, legal aid application</p>
</div>

<div class="card">
  <h3>\u52b4\u50cd\u57fa\u6e96\u76e3\u7763\u7f72 \u2014 Labor Standards Office</h3>
  <p>Hanapin: <strong>\u5ddd\u5d0e\u5357\u52b4\u50cd\u57fa\u6e96\u76e3\u7763\u7f72</strong></p>
  <p>Search online: "\u5ddd\u5d0e\u5357\u52b4\u50cd\u57fa\u6e96\u76e3\u7763\u7f72" for exact address/number</p>
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
    <tr><td>Name</td><td>\u8c37\u6751 \u65b0\u53f8 (Tanimura Shinji)</td></tr>
    <tr><td>Address</td><td>\u3012210-0846 \u795e\u5948\u5ddd\u770c\u5ddd\u5d0e\u5e02\u5ddd\u5d0e\u533a\u5c0f\u75305-28-9 \u30cf\u30a4\u30e0\u30a2\u30fc\u30bc\u30eb 102</td></tr>
    <tr><td>Phone</td><td>080-9819-0205</td></tr>
    <tr><td>Email</td><td>shinji.tanimura10@gmail.com</td></tr>
    <tr><td>Employer</td><td>Ninomiya Kougyo (\u4e8c\u5bae\u5de5\u696d)</td></tr>
  </table></div>
</div>

<div class="card">
  <h3>Time Limits \u2014 May Oras Ka Pa</h3>
  <div class="table-wrap"><table>
    <tr><th>Claim</th><th>Deadline</th></tr>
    <tr><td>Medical (\u7642\u990c\u88dc\u511f)</td><td>2 years mula sa accident</td></tr>
    <tr><td>Leave Pay (\u4f11\u696d\u88dc\u511f)</td><td>2 years mula sa araw na hindi ka nakapasok</td></tr>
    <tr><td>Disability (\u969c\u5bb3\u88dc\u511f)</td><td>5 years mula sa injury stabilized</td></tr>
    <tr><td>Civil Damages (\u6170\u8b1d\u6599)</td><td>3 years (or 5 depende sa case)</td></tr>
  </table></div>
  <div class="highlight ok">Hindi pa huli. Pero mas maaga ka kumilos, mas malakas ang case mo.</div>
</div>
`
}

function render() {
  const app = document.querySelector('#app')
  app.innerHTML = `
<div class="header">
  <h1>Work Accident Rousai Guide</h1>
  <p>Step-by-step na gabay para sa workers' compensation claim sa Japan</p>
</div>

<div class="emergency-banner">
  <h2>UNANG TAWAG MO BUKAS</h2>
  <div class="phone"><a href="tel:0120762029">0120-76-2029</a></div>
  <div class="sub">FRESC \u2014 FREE, may Tagalog support \u2014 "Tagalog please"</div>
</div>

<div class="nav">
  ${TABS.map(t => `<button class="nav-btn ${t.id === 'steps' ? 'active' : ''}" data-tab="${t.id}">${t.label}</button>`).join('')}
</div>

<div class="section active" data-section="steps">${renderSteps()}</div>
<div class="section" data-section="convo">${renderConvo()}</div>
<div class="section" data-section="money">${renderMoney()}</div>
<div class="section" data-section="lawyer">${renderLawyer()}</div>
<div class="section" data-section="checklist">${renderChecklist()}</div>
<div class="section" data-section="contacts">${renderContacts()}</div>
`

  // Tab navigation
  app.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      app.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'))
      app.querySelectorAll('.section').forEach(s => s.classList.remove('active'))
      btn.classList.add('active')
      app.querySelector(`[data-section="${btn.dataset.tab}"]`).classList.add('active')
    })
  })

  // Checklist toggle
  app.querySelectorAll('.checklist li[data-id]').forEach(li => {
    li.addEventListener('click', () => {
      const id = li.dataset.id
      const box = li.querySelector('.check-box')
      const isChecked = box.classList.toggle('checked')
      li.classList.toggle('done', isChecked)
      setChecked(id, isChecked)
    })
  })

  // Copy buttons
  const copyTexts = {
    yuta: 'Yuta\u3055\u3093\u3001\u304a\u75b2\u308c\u69d8\u3067\u3059\u3002\u52b4\u707d\u306e\u624b\u7d9a\u304d\u3092\u9032\u3081\u3066\u304f\u308c\u3066\u3044\u308b\u3068\u306e\u3053\u3068\u3067\u3001\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u78ba\u8a8d\u306e\u305f\u3081\u3044\u304f\u3064\u304b\u304a\u805e\u304d\u3057\u305f\u3044\u306e\u3067\u3059\u304c\uff1a\n\n1) \u52b4\u707d\u306e\u7533\u8acb\u66f8\u985e\u306f\u3082\u3046\u63d0\u51fa\u3057\u307e\u3057\u305f\u304b\uff1f\n2) \u63d0\u51fa\u5148\u306e\u52b4\u50cd\u57fa\u6e96\u76e3\u7763\u7f72\u306f\u3069\u3053\u3067\u3059\u304b\uff1f\n3) \u53d7\u7406\u756a\u53f7\u304b\u63a7\u3048\u306e\u30b3\u30d4\u30fc\u3092\u3082\u3089\u3048\u307e\u3059\u304b\uff1f\n\n\u307e\u3060\u3081\u307e\u3044\u3068\u8074\u899a\u306e\u9055\u548c\u611f\u304c\u7d9a\u3044\u3066\u3044\u3066\u3001\u533b\u5e2b\u304b\u3089\u5c02\u9580\u533b\u3078\u306e\u7d39\u4ecb\u304c\u5fc5\u8981\u3068\u8a00\u308f\u308c\u3066\u3044\u307e\u3059\u3002\u4eca\u5f8c\u306e\u6cbb\u7642\u8cbb\u3082\u52b4\u707d\u3067\u5bfe\u5fdc\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002',
    decline: '\u5927\u4e08\u592b\u3067\u3059\u3002\u59bb\u3068\u884c\u304d\u307e\u3059\u3002\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3067\u3082\u5bb6\u65cf\u3068\u884c\u304d\u305f\u3044\u3067\u3059\u3002',
  }

  app.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const key = btn.dataset.copy
      if (copyTexts[key]) copyText(copyTexts[key], btn)
    })
  })
}

render()
