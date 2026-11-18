/* LP II — Tehnici de evidențiere a cromozomilor umani (LP p. 21–29) */
(function () {
const DEFS = `<defs><marker id="vf2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf2)"/>`;
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
// cromozom mic (pentru metafaze desenate): două cromatide
const mc = (x, y, L, a, cl = "fG") => `<g transform="rotate(${a} ${x} ${y})"><rect x="${x - 3.2}" y="${y - L / 2}" width="3" height="${L}" rx="1.5" class="${cl}"/><rect x="${x + .2}" y="${y - L / 2}" width="3" height="${L}" rx="1.5" class="${cl}"/></g>`;
// o metafază pseudo-aleatoare, reproductibilă
const metafaza = (cx, cy, r, n, seed, cl = "fG", spread = 1) => {
  let s = "", z = seed;
  const rnd = () => ((z = (z * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < n; i++) { const a = rnd() * 6.283, d = Math.sqrt(rnd()) * r * spread; s += mc(cx + d * Math.cos(a), cy + d * Math.sin(a), 6 + rnd() * 12, rnd() * 180, cl); }
  return s;
};

GHID.capitol({
id: "lp02",
intro: `<p class="lead">Cum obții, dintr-o eprubetă de sânge, o lamă pe care se văd 46 de cromozomi bine separați. Tot protocolul urmărește trei lucruri: <b>celule care se divid</b>, <b>oprite în metafază</b> și <b>cromozomi etalați într-un singur plan</b>. A doua parte a capitolului trece la FISH și la tehnicile derivate, care văd ce nu se vede la microscopul obișnuit.</p>
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Cele trei etape ale studiului cromozomilor">${DEFS}
${[["Celule în diviziune", "măduvă, tumoră (direct) sau cultură stimulată (indirect)", "foks"], ["Blocare în metafază", "colchicină: fusul nu se formează, mitozele se acumulează", "fas"], ["Preparat și analiză", "hipotonizare, fixare, etalare, colorare; numărare, cariotip", "fws"]].map(([t, d, c], i) => `<rect x="${14 + i * 250}" y="24" width="230" height="130" rx="12" class="${c}"/><text x="${129 + i * 250}" y="52" text-anchor="middle" class="ti b">${i + 1}. ${t}</text>${fo(28 + i * 250, 62, 202, 90, d, "text-align:center;font-size:12.5px")}` + (i < 2 ? sag(246 + i * 250, 89, 262 + i * 250, 89) : "")).join("")}
<text x="380" y="186" text-anchor="middle" class="tm">Cele trei etape principale ale oricărei metode de evidențiere a cromozomilor (LP p. 21).</text>
</svg>
<figcaption><b>Schema capitolului.</b> Metodele directe și cele indirecte diferă doar la prima etapă: de unde vin celulele care se divid. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "generale", titlu: "Aspecte generale: metode directe și indirecte", pag: "21", emery: "cap. 3, p. 24–25", acopera: ["lp02-r01"],
html: `
<p>Analiza cromozomială stabilește <b>numărul, forma și mărimea</b> cromozomilor în mitoză, alcătuiește cariotipul și caută <b>aberațiile numerice și structurale</b>. Celulele în diviziune vin din două surse:</p>
<div class="tw"><table><tr><th></th><th>Metode directe (fără cultură)</th><th>Metode indirecte (cu cultură)</th></tr>
<tr><td><b>Ce țesut</b></td><td>țesuturi care se divid deja intens: măduvă osoasă (leucemii), tumori solide, ganglioni limfatici, trofoblast, meristeme la plante; spermatocite (cromozomi meiotici)</td><td><b>scurtă durată</b>: limfocite din sânge periferic, măduvă<br><b>lungă durată</b>: fibroblaști (biopsie de piele, fascii, țesut embrionar), amniocite, vilozități coriale</td></tr>
<tr><td><b>Timp</b></td><td>rapid: 3–12 ore</td><td>3 zile (limfocite) până la 1–3 săptămâni (fibroblaști, amniocite)</td></tr>
<tr><td><b>Calitate</b></td><td>număr variabil de metafaze, cromozomi mai slabi calitativ</td><td>multe metafaze, cromozomi buni pentru bandare</td></tr>
<tr><td><b>Ce reflectă</b></td><td>clona care proliferează în țesut (ex. clona leucemică)</td><td>constituția celulelor cultivate (cariotipul constituțional, din limfocitele T)</td></tr></table></div>
<div class="cheie"><b>De ce limfocitele sunt metoda de rutină</b>
<p>Sângele se recoltează ușor, cultura durează doar 3 zile, mitozele pot fi stimulate cu fitohemaglutinină (indice mitotic mare) și nu e nevoie de dotări speciale.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>La un pacient cu leucemie mieloidă cronică vrei să vezi cromozomul Philadelphia. Ce probă și ce metodă alegi?</summary><div>Măduvă osoasă, prin metodă directă (sau cultură de scurtă durată fără mitogen): trebuie analizate celulele clonei leucemice, care se divid singure. Limfocitele T stimulate cu PHA ar arăta cariotipul constituțional, normal.</div></details>
</div>`
},
{
id: "etape", titlu: "Etapele comune: colchicinizare, hipotonizare, fixare, etalare, colorare", pag: "21–23", emery: "cap. 3, p. 25", acopera: [],
html: `
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Ce se întâmplă cu celula la fiecare etapă">${DEFS}
${(() => {
  const E = [["Colchicinizare", "fusul nu se formează; metafazele se acumulează"], ["Hipotonizare", "KCl 0,075 M: celula se umflă, cromozomii se depărtează"], ["Fixare", "metanol : acid acetic 3:1; celula moare, structura rămâne"], ["Etalare", "picătura cade pe lama rece; celula se sparge, cromozomii se întind într-un plan"], ["Colorare", "Giemsa (uniform) sau bandare"]];
  let s = "";
  E.forEach(([t, d], i) => {
    const x = 76 + i * 152, y = 92;
    s += `<text x="${x}" y="22" text-anchor="middle" class="ti b">${i + 1}. ${t}</text>`;
    if (i === 0) s += `<circle cx="${x}" cy="${y}" r="34" class="fis sm" stroke-width="1.3"/>` + metafaza(x, y, 12, 12, 7, "fG", .9) + `<path d="M${x - 30} ${y} h-14 M${x + 30} ${y} h14" class="sw" stroke-width="2"/><text x="${x}" y="${y + 50}" text-anchor="middle" class="tw2" style="font-size:11px">fus ✕</text>`;
    if (i === 1) s += `<circle cx="${x}" cy="${y}" r="52" class="fis sm" stroke-width="1.3"/>` + metafaza(x, y, 34, 14, 11);
    if (i === 2) s += `<circle cx="${x}" cy="${y}" r="52" class="fws sm" stroke-width="1.3" stroke-dasharray="5 3"/>` + metafaza(x, y, 34, 14, 11);
    if (i === 3) s += `<rect x="${x - 62}" y="${y - 30}" width="124" height="70" rx="3" class="fline" opacity=".7"/>` + metafaza(x, y + 4, 30, 14, 23, "fG", 1.6);
    if (i === 4) s += `<rect x="${x - 62}" y="${y - 30}" width="124" height="70" rx="3" class="fline" opacity=".7"/>` + metafaza(x, y + 4, 30, 14, 23, "fP", 1.6);
    if (i < 4) s += sag(x + 58, y, x + 92, y);
    s += fo(x - 70, 160, 140, 108, d, "text-align:center");
  });
  return s;
})()}
</svg>
<figcaption><b>O metafază prin cele cinci etape.</b> Fără colchicină ar fi prea puține metafaze; fără hipotonizare cromozomii ar rămâne înghesuiți; fără etalare s-ar suprapune în mai multe planuri. Schemă proprie.</figcaption>
</figure>
<ol class="protocol">
<li><b>Colchicinizarea (pretratamentul cu inhibitor mitotic)</b> — 2 ore.<span class="de-ce">Substanțele <b>statmokinetice</b> împiedică formarea fusului și blochează mitoza în metafază (sau prometafază, sfârșit de profază). Colchicina, alcaloid din brândușa de toamnă (<i>Colchicum autumnale</i>), se leagă de tubulină și oprește polimerizarea microtubulilor. În plus contractă cromozomii și accentuează separarea cromatidelor. Prea multă sau prea lungă: cromozomi extrem de scurtați, greu de recunoscut. Alternative: Colcemid, vincristină, vinblastină.</span></li>
<li><b>Hipotonizarea</b> — 10–30 minute.<span class="de-ce">KCl 0,56% (0,075 M) sau citrat de sodiu 1%. Apa intră în celulă, care se umflă, citoplasma se fluidifică și cromozomii se dispersează. Prea lungă: celulele se sparg, cromozomii se pierd și au aspect „flaușat”, scămos, colorându-se greu.</span></li>
<li><b>Fixarea</b> — 30 de minute, de obicei de 3 ori.<span class="de-ce">Amestec <b>alcool (metilic sau etilic) : acid acetic glacial 3:1</b>, proaspăt preparat. Oprește brusc activitatea celulei și păstrează morfologia.</span></li>
<li><b>Etalarea</b>: preparatul definitiv.<span class="de-ce"><b>Squash</b> (strivire), pentru țesuturi vegetale: fragmentul, sub lamelă și hârtie de filtru, presat cu policele; multe celule se sparg și cromozomii pot rămâne în mai multe planuri. <b>Uscarea la aer (air-drying)</b>, pentru suspensii celulare în fixator: picături pe lame degresate, ținute în apă distilată cu gheață, uscate 10–20 minute la temperatura camerei (uneori cu încălzire ușoară).</span></li>
<li><b>Colorarea</b>.<span class="de-ce">Giemsa (colorant bazic) pentru cromozomi colorați uniform, sau o tehnică de bandare (<a href="#/lp03/bandare">LP III</a>).</span></li>
</ol>
[[img:colchicum|<b>Brândușa de toamnă</b> (<i>Colchicum autumnale</i>), sursa colchicinei. Aceeași substanță se folosește în clinică în guta acută și în febra mediteraneeană familială, tot prin efectul pe microtubuli.]]
<div class="capcana"><b>Colcemidul nu e „de 40 de ori mai toxic”</b>
<p>Cartea descrie Colcemidul ca analog sintetic „de 40 de ori mai toxic” decât colchicina. E invers: Colcemidul (demecolcina) este de zeci de ori <b>mai puțin toxic</b>, acționează reversibil și de aceea este inhibitorul standard în laboratoarele de citogenetică. Raportul din carte pare inversat.</p></div>
<h3>Analiza la microscop: câte metafaze?</h3>
<p>Se <b>numără 16–20 de metafaze</b> dacă nu există anomalii și <b>minimum 30</b> dacă se suspectează un mozaic. Pentru un caz normal se cariotipează 2–3 metafaze; la o anomalie, mai multe metafaze anormale; la mai multe clone, cel puțin două cariotipuri pe linie celulară.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Probabilitatea de a rata un mozaic în funcție de numărul de celule numărate">
${(() => {
  const X0 = 70, Y0 = 270, W = 640, H = 220, nmax = 50;
  const X = (n) => X0 + (n / nmax) * W, Y = (p) => Y0 - p * H;
  let s = `<text x="20" y="22" class="ti b">Șansa de a NU vedea nicio celulă anormală, după numărul de metafaze numărate</text>`;
  [0, .25, .5, .75, 1].forEach((p) => (s += `<line x1="${X0}" y1="${Y(p)}" x2="${X0 + W}" y2="${Y(p)}" class="sm" stroke-dasharray="2 4" opacity=".6"/><text x="${X0 - 8}" y="${Y(p) + 4}" text-anchor="end" class="tm" style="font-size:11px">${p * 100}%</text>`));
  [0, 10, 20, 30, 40, 50].forEach((n) => (s += `<text x="${X(n)}" y="${Y0 + 18}" text-anchor="middle" class="tm" style="font-size:11px">${n}</text>`));
  s += `<text x="${X0 + W / 2}" y="${Y0 + 38}" text-anchor="middle" class="tm">metafaze numărate</text>`;
  s += `<rect x="${X(16)}" y="${Y(1)}" width="${X(20) - X(16)}" height="${H}" class="foks" opacity=".7"/><text x="${X(18)}" y="${Y(1) + 14}" text-anchor="middle" class="tok" style="font-size:11px">16–20</text>`;
  s += `<line x1="${X(30)}" y1="${Y(1)}" x2="${X(30)}" y2="${Y0}" class="sw" stroke-width="1.6" stroke-dasharray="5 3"/><text x="${X(30) + 4}" y="${Y(1) + 14}" class="tw2 b" style="font-size:11px">30</text>`;
  [[.05, "sG", "mozaic 5%"], [.1, "sT", "mozaic 10%"], [.2, "sP", "mozaic 20%"]].forEach(([f, c, et], k) => {
    let d = ""; for (let n = 0; n <= nmax; n++) d += (n ? "L" : "M") + X(n).toFixed(1) + " " + Y(Math.pow(1 - f, n)).toFixed(1);
    s += `<path d="${d}" class="${c}" stroke-width="2.6" fill="none"/><text x="${X(nmax) - 4}" y="${Y(Math.pow(1 - f, nmax)) - 6 - k * 2}" text-anchor="end" class="ti b" style="font-size:12px">${et}</text>`;
  });
  s += `<circle cx="${X(30)}" cy="${Y(Math.pow(.9, 30))}" r="4.5" class="fT"/><text x="${X(30) + 8}" y="${Y(Math.pow(.9, 30)) - 6}" class="ti" style="font-size:12px">0,9<tspan baseline-shift="super" style="font-size:9px">30</tspan> ≈ 4%</text>`;
  return s;
})()}
</svg>
<figcaption><b>De unde vine regula celor 30 de metafaze.</b> Dacă 10% din celule sunt anormale, probabilitatea ca 30 de celule luate la întâmplare să fie toate normale este 0,9<sup>30</sup> ≈ 4%: numărând 30, excluzi un mozaic de 10% cu ~95% încredere. Cu 16–20 de celule, un mozaic de 10% scapă în 12–18% din cazuri. Calcul propriu (binomial).</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Pe lamă cromozomii apar scămoși și se colorează greu, iar multe metafaze sunt incomplete. Ce etapă a fost greșită?</summary><div>Hipotonizarea, prea lungă: celulele s-au spart, cromozomii s-au pierdut și și-au alterat structura.</div></details>
<details class="q"><summary>Cromozomii sunt foarte scurți și groși, greu de identificat. Ce s-a întâmplat?</summary><div>Expunere prea lungă sau concentrație prea mare de colchicină: contracția extremă a cromozomilor.</div></details>
</div>`
},
{
id: "maduva", titlu: "Metoda directă: cromozomii din măduva osoasă hematogenă", pag: "23–24", emery: "cap. 14 (citogenetica tumorilor)", acopera: ["lp02-r02"],
html: `
<p>Scopul: anomaliile cromozomiale din <b>celulele hematopoietice</b>, mai ales în leucemii. Măduva e semifluidă și se aspiră ușor.</p>
<div class="pasi">
<div><b>Adult</b>stern (corpul sternal, spațiul intercostal II–III) sau creasta iliacă</div>
<div><b>Copil</b>osul iliac</div>
<div><b>Sub 2 ani</b>platoul tibial sau calcaneul</div>
<div><b>Tehnica</b>trocar cu mandren, dezinfecție, anestezie locală; se aspiră 1 ml cu seringă heparinată</div>
</div>
[[img:maduva_punctie|<b>Puncție aspirativă de măduvă osoasă</b> din creasta iliacă posterioară. Proba se pune imediat în seringa heparinată, ca să nu coaguleze.]]
<ol class="protocol">
<li><b>Colchicinizare</b><span class="de-ce">tub steril cu 10 ml soluție Hanks + măduva + 0,1–0,2 ml colchicină 0,002%; termostat 37 °C, 1–2 ore</span></li>
<li><b>Hipotonizare</b><span class="de-ce">centrifugare 800–1000 rpm, 10 min; supernatantul se aruncă; KCl 0,075 M preîncălzit, 15 min la 37 °C; centrifugare 5–8 min; rămân 0,5 ml</span></li>
<li><b>Fixare</b><span class="de-ce">4 ml fixator proaspăt, 20–30 min la frigider; se repetă de 2–3 ori, cu centrifugări între ele; resuspendare în 0,5 ml</span></li>
<li><b>Etalare și colorare</b><span class="de-ce">uscare la aer; Giemsa 5% sau bandare; deshidratare în alcooluri, clarificare în xilol, montare în balsam de Canada</span></li>
</ol>`
},
{
id: "limfocite", titlu: "Metoda indirectă: culturile de limfocite din sângele periferic", pag: "24–26", emery: "cap. 3, p. 24–25", acopera: ["lp02-r03"],
html: `
<p>Problema: în sângele periferic normal nu există celule în mitoză. Limfocitele sunt în <b>G0</b>. Soluția: un <b>mitogen</b> care le activează. Cel mai folosit este <b>fitohemaglutinina (PHA)</b>, o glicoproteină din boabele de fasole (<i>Phaseolus vulgaris</i>). Sub acțiunea ei limfocitele mici devin celule mari, <b>blastice</b>, capabile de diviziune; transformarea blastică începe la ~1 oră după adăugare. PHA stimulează în principal <b>limfocitele T</b>.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Cronologia culturii de limfocite">${DEFS}
${(() => {
  const X = (h) => 50 + h * 9; let s = `<line x1="${X(0)}" y1="120" x2="${X(74)}" y2="120" class="si" stroke-width="2" marker-end="url(#vf2)"/>`;
  [0, 24, 48, 72].forEach((h) => (s += `<line x1="${X(h)}" y1="114" x2="${X(h)}" y2="126" class="si" stroke-width="2"/><text x="${X(h)}" y="144" text-anchor="middle" class="ti b">${h} h</text>`));
  s += `<rect x="${X(0)}" y="84" width="${X(30) - X(0)}" height="22" rx="4" class="fis"/><text x="${X(15)}" y="99" text-anchor="middle" class="tin b" style="font-size:12px">ieșire din G0, transformare blastică, G1 → S</text>`;
  s += `<rect x="${X(40)}" y="84" width="${X(72) - X(40)}" height="22" rx="4" class="foks"/><text x="${X(56)}" y="99" text-anchor="middle" class="tok b" style="font-size:12px">mitoze, tot mai multe</text>`;
  s += `<rect x="${X(70)}" y="56" width="${X(72) - X(70)}" height="50" class="fT"/>`;
  s += `<line x1="${X(70)}" y1="56" x2="${X(62)}" y2="34" class="sT" stroke-width="1.4"/><text x="${X(60)}" y="30" text-anchor="end" class="tw2 b" style="font-size:12px">70 h: colchicină 0,002%, 2 ore</text>`;
  s += `<line x1="${X(0)}" y1="56" x2="${X(0)}" y2="80" class="sa" stroke-width="2"/><text x="${X(0)}" y="48" class="ta b" style="font-size:12px">0 h: sânge heparinat + mediu + ser + PHA, 37 °C</text>`;
  s += `<line x1="${X(72)}" y1="126" x2="${X(72)}" y2="170" class="sa" stroke-width="1.6"/><text x="${X(72) - 6}" y="188" text-anchor="end" class="ta b" style="font-size:12px">72 h: hipotonizare, fixare, etalare, Giemsa 5% (10 min)</text>`;
  s += `<text x="20" y="232" class="tm">Celulele sanguine nu se divid singure; PHA le pornește. Primele mitoze apar după ~2 zile; colchicina adăugată la sfârșit adună metafazele.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Cultura de limfocite în 72 de ore</b>, după protocolul din carte (microcultură, 37 °C). Schemă proprie.</figcaption>
</figure>
<div class="tw"><table><tr><th>Ingredient</th><th>Rol</th></tr>
<tr><td>mediu de cultură (RPMI-1640)</td><td>aminoacizi, vitamine, săruri minerale</td></tr>
<tr><td>ser fetal de vițel sau ser uman</td><td>factori de creștere</td></tr>
<tr><td>fitohemaglutinină</td><td>mitogen: scoate limfocitele T din G0</td></tr>
<tr><td>antibiotice (penicilină, streptomicină 100 UI/ml)</td><td>concentrație bacteriostatică, împotriva contaminării</td></tr>
<tr><td>heparină</td><td>anticoagulant la recoltare (EDTA nu: inhibă cultura)</td></tr>
<tr><td>pH 6,8–7,2, 37 °C</td><td>condiții fiziologice</td></tr></table></div>
<div class="tw"><table><tr><th></th><th>Macrocultură</th><th>Microcultură (mai folosită)</th></tr>
<tr><td>Sânge</td><td>5 ml sânge venos + 0,2 ml heparină</td><td>1 ml recoltat; 0,5 ml în cultură; potrivită la copii și nou-născuți</td></tr>
<tr><td>Tubul de cultură</td><td>6 ml mediu, 2 ml ser de vițel, 2 ml plasmă a bolnavului, 0,1 ml PHA, antibiotic</td><td>6 ml mediu, 1–2 ml ser, 0,1 ml PHA</td></tr></table></div>
<div class="lab"><b>La microscop</b>
<p>Întâi cu obiectivele mici (10×, 20×) găsești mitozele bine etalate, apoi le examinezi cu imersie (90×, 100×). Alegi metafazele după două criterii: <b>fără suprapuneri</b> (sau cât mai puține, cel mult 2 cromozomi implicați) și <b>cromozomii nu prea împrăștiați</b> (altfel pot proveni din două celule).</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce se întâmplă dacă uiți fitohemaglutinina?</summary><div>Limfocitele rămân în G0 și nu se divid: practic nicio metafază după 72 de ore.</div></details>
<details class="q"><summary>De ce colchicina se adaugă abia la 70 de ore și nu de la început?</summary><div>Pentru că oprește fusul și blochează orice diviziune: celulele trebuie lăsate întâi să intre în ciclu și să ajungă la mitoză; colchicina doar adună în metafază celulele care se divid în ultimele 2 ore.</div></details>
</div>`
},
{
id: "fish", titlu: "Citogenetica moleculară: hibridizarea fluorescentă in situ (FISH)", pag: "26–28", emery: "cap. 5 (FISH); cap. 17", acopera: ["lp02-r04", "lp02-r06"], curs: ["c01/proprietati"],
html: `
<p>FISH vede <b>deleții submicroscopice</b>, sub limita de ~5 Mb a cariotipului clasic. Principiul este hibridizarea a două secvențe complementare: ADN-ul cromozomial făcut monocatenar prin denaturare termică (<b>ținta</b>) și o <b>sondă</b> de ADN monocatenar (~40 kb), marcată fluorescent. Denaturarea și renaturarea sunt explicate în <a href="#/c01/proprietati">ghidul de curs</a>.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Principiul FISH">${DEFS}
${(() => {
  const seq = "TAGATCCT", comp = "ATCTAGGA";
  const linie = (x, y, s2, c, st = false) => s2.split("").map((b, i) => `<text x="${x + i * 15}" y="${y}" text-anchor="middle" class="${c} b" style="font-family:ui-monospace,monospace;font-size:13px">${b}</text>` + (st ? `<text x="${x + i * 15}" y="${y - 14}" text-anchor="middle" class="fC" style="font-size:12px;fill:var(--C)">${i % 3 === 0 ? "★" : ""}</text>` : "")).join("");
  let s = `<text x="100" y="22" text-anchor="middle" class="ti b">Ținta: ADN cromozomial</text><text x="380" y="22" text-anchor="middle" class="ti b">Sonda marcată</text><text x="640" y="22" text-anchor="middle" class="ti b">Hibrid</text>`;
  s += linie(48, 60, seq, "ti") + linie(48, 80, comp, "ti") + `<text x="100" y="104" text-anchor="middle" class="tm" style="font-size:11.5px">dublu catenar</text>` + sag(100, 112, 100, 140) + `<text x="108" y="130" class="tw2" style="font-size:11.5px">denaturare (căldură)</text>` + linie(48, 166, seq, "ti") + `<text x="100" y="188" text-anchor="middle" class="tm" style="font-size:11.5px">monocatenar, pe lamă</text>`;
  s += linie(328, 66, comp, "ta", true) + `<text x="380" y="90" text-anchor="middle" class="tm" style="font-size:11.5px">★ = nucleotid fluorescent (direct)</text><text x="380" y="106" text-anchor="middle" class="tm" style="font-size:11.5px">sau biotină / digoxigenină (indirect)</text>`;
  s += sag(200, 166, 560, 170) + sag(420, 110, 580, 150);
  s += linie(588, 156, comp, "ta", true) + linie(588, 176, seq, "ti") + `<text x="640" y="200" text-anchor="middle" class="tm" style="font-size:11.5px">semnal fluorescent</text><text x="640" y="216" text-anchor="middle" class="tm" style="font-size:11.5px">exact la locusul țintă</text>`;
  s += `<rect x="20" y="236" width="720" height="54" rx="10" class="fas"/>` + fo(32, 242, 700, 46, "<b style='color:var(--accent)'>Marcare indirectă:</b> sonda conține biotină, recunoscută de <b>streptavidină</b>, sau digoxigenină, recunoscută de un <b>anticorp anti-digoxigenină</b>; liganzii sunt conjugați cu un fluorocrom. Avantaj: semnal amplificat.", "color:var(--ink);font-size:12.5px");
  return s;
})()}
</svg>
<figcaption><b>Figura 5 din LP, redesenată.</b> Ținta și sonda sunt denaturate separat, apoi sonda se împerechează cu secvența complementară din cromozom. Schemă proprie.</figcaption>
</figure>
<h3>Patru tipuri de sonde, patru întrebări</h3>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Tipurile de sonde FISH și semnalele lor">
${(() => {
  const crs = (x, y, p, q, mk) => `<rect x="${x - 7}" y="${y - p}" width="6" height="${p + q}" rx="3" class="fZ"/><rect x="${x + 1}" y="${y - p}" width="6" height="${p + q}" rx="3" class="fZ"/>` + mk;
  const T = [["Painting (vopsire)", "un cromozom sau un braț întreg colorat; translocații", (x) => `<rect x="${x - 7}" y="70" width="6" height="110" rx="3" class="fA"/><rect x="${x + 1}" y="70" width="6" height="110" rx="3" class="fA"/>` + crs(x + 40, 110, 30, 60, "")], ["Locus-specifică", "un semnal pe cromatidă; absent = deleție, dublu = duplicație", (x) => crs(x, 110, 30, 70, `<circle cx="${x - 4}" cy="150" r="4" class="fT"/><circle cx="${x + 4}" cy="150" r="4" class="fT"/>`) + crs(x + 40, 110, 30, 70, "") + `<text x="${x + 40}" y="200" text-anchor="middle" class="tw2 b" style="font-size:11px">deleție</text>`], ["Centromerică (alfoidă)", "numără cromozomul, chiar în nuclei interfazici", (x) => crs(x, 110, 30, 70, `<circle cx="${x}" cy="110" r="5" class="fP"/>`) + `<circle cx="${x + 46}" cy="120" r="24" class="fis sm"/><circle cx="${x + 38}" cy="112" r="4" class="fP"/><circle cx="${x + 54}" cy="114" r="4" class="fP"/><circle cx="${x + 46}" cy="130" r="4" class="fP"/><text x="${x + 46}" y="160" text-anchor="middle" class="tw2 b" style="font-size:11px">3 semnale</text>`], ["Telomerică", "capetele cromozomilor; rearanjări subtelomerice", (x) => crs(x, 110, 30, 70, `<circle cx="${x - 4}" cy="84" r="3.5" class="fC"/><circle cx="${x + 4}" cy="84" r="3.5" class="fC"/><circle cx="${x - 4}" cy="176" r="3.5" class="fC"/><circle cx="${x + 4}" cy="176" r="3.5" class="fC"/>`)]];
  let s = "";
  T.forEach(([t, d, f], i) => { const x = 70 + i * 185; s += `<rect x="${x - 58}" y="10" width="176" height="272" rx="10" class="fcard sm" stroke-width=".8"/><text x="${x + 30}" y="34" text-anchor="middle" class="ti b">${t}</text>` + f(x + 10) + fo(x - 50, 212, 160, 66, d, "text-align:center"); });
  return s;
})()}
</svg>
<figcaption><b>Sondele din carte</b>, cu semnalul pe care îl dau. Sonda centromerică funcționează și pe nuclei interfazici: trei puncte fluorescente într-un nucleu înseamnă trisomie, fără cultură și fără cariotip. Schemă proprie.</figcaption>
</figure>
[[gal:fish_xy|<b>FISH cu sonde pentru X (roșu) și Y (verde)</b> pe metafaze și nuclei: o celulă masculină normală are câte un semnal de fiecare culoare.;;fish_16|<b>Sondă locus-specifică pe cromozomul 16</b>: semnalul apare în aceeași poziție pe ambii omologi, câte un punct pe fiecare cromatidă.]]
<div class="emery"><b>Interfaza: diagnostic rapid</b>
<p>Ținta poate fi o metafază, fibre de cromatină decondensată sau nuclei interfazici (inclusiv celule fetale din lichid amniotic). FISH interfazic pentru 13, 18, 21, X și Y dă un rezultat prenatal în 24–48 de ore. Pentru 21 se folosesc de obicei sonde locus-specifice din 21q22, pentru că secvențele alfoide ale centromerului 21 sunt aproape identice cu cele ale lui 13.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce avantaj are FISH față de cariotip, și ce dezavantaj?</summary><div>Avantaj: vede anomalii submicroscopice și funcționează și pe celule care nu se divid. Dezavantaj: răspunde doar la întrebarea pusă (locusul sondei); nu scanează tot genomul.</div></details>
<details class="q"><summary>La o sondă locus-specifică vezi un singur semnal într-o metafază. Ce înseamnă?</summary><div>Unul dintre cei doi omologi nu are locusul: o deleție heterozigotă (microdeleție) a regiunii acoperite de sondă.</div></details>
</div>`
},
{
id: "derivate", titlu: "M-FISH, cariotiparea spectrală (SKY) și hibridizarea genomică comparativă (CGH)", pag: "27–29", emery: "cap. 5; cap. 17, p. 259–265", acopera: ["lp02-r05"],
html: `
<div class="pasi">
<div><b>M-FISH</b>sonde pentru fiecare cromozom, combinații de fluorocromi, analiză digitală cu cameră CCD: fiecare cromozom are altă culoare</div>
<div><b>SKY</b>combinații a cinci sonde fluorescente, cameră și software: o culoare unică pentru fiecare cromozom; rearanjările complexe se văd imediat</div>
<div><b>CGH</b>ADN-ul pacientului (verde) și cel de control (roșu) concurează pentru aceleași locuri: excesul unei culori arată câștiguri și pierderi</div>
</div>
[[gal:sky|<b>Cariotip spectral (SKY).</b> Fiecare pereche are culoarea ei; un cromozom în două culori este un cromozom rearanjat (translocație).;;cariotip|<b>Comparație: cariotip clasic cu bandare G</b>, același set de cromozomi la microscopul obișnuit.]]
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Principiul CGH și profilul raportului">
${(() => {
  let s = `<text x="20" y="22" class="ti b">CGH: raportul verde/roșu de-a lungul unui cromozom</text>`;
  const X0 = 80, W = 620, Y = (r) => 160 - Math.log2(r) * 80;
  [[.5, "deleție (1 copie)"], [1, "normal (2 copii)"], [1.5, "duplicație (3 copii)"]].forEach(([r, t]) => (s += `<line x1="${X0}" y1="${Y(r)}" x2="${X0 + W}" y2="${Y(r)}" class="sm" stroke-dasharray="${r === 1 ? "0" : "3 4"}"/><text x="${X0 - 8}" y="${Y(r) + 4}" text-anchor="end" class="tm" style="font-size:11px">${r}</text><text x="${X0 + W + 4}" y="${Y(r) + 4}" class="tm" style="font-size:10.5px"></text>`));
  const prof = []; let z = 5; const rnd = () => ((z = (z * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i <= 120; i++) { const base = i > 25 && i < 40 ? 1.5 : i > 80 && i < 92 ? .5 : 1; prof.push([X0 + i * W / 120, Y(base * (1 + (rnd() - .5) * .12))]); }
  s += `<path d="${prof.map(([x, y], i) => (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1)).join("")}" class="sP" stroke-width="2" fill="none"/>`;
  s += `<rect x="${X0 + 25 * W / 120}" y="${Y(1.5) - 22}" width="${15 * W / 120}" height="16" rx="3" class="fA" opacity=".85"/><text x="${X0 + 32.5 * W / 120}" y="${Y(1.5) - 10}" text-anchor="middle" style="fill:#fff;font-size:11px" class="b">exces de verde</text>`;
  s += `<rect x="${X0 + 80 * W / 120}" y="${Y(.5) + 8}" width="${12 * W / 120}" height="16" rx="3" class="fT"/><text x="${X0 + 86 * W / 120}" y="${Y(.5) + 20}" text-anchor="middle" style="fill:#fff;font-size:11px" class="b">exces de roșu</text>`;
  s += `<rect x="${X0}" y="250" width="${W}" height="16" rx="8" class="fZ"/><rect x="${X0 + 25 * W / 120}" y="250" width="${15 * W / 120}" height="16" class="fA"/><rect x="${X0 + 80 * W / 120}" y="250" width="${12 * W / 120}" height="16" class="fT"/><text x="${X0}" y="288" class="tm" style="font-size:11.5px">poziția pe cromozom →  (ADN pacient = verde, ADN control = roșu; raport verde/roșu pe axa verticală)</text>`;
  return s;
})()}
</svg>
<figcaption><b>Cum se citește CGH.</b> Unde pacientul are o regiune duplicată, ADN-ul lui hibridizează în exces (verde); unde are o deleție, domină ADN-ul de control (roșu). Profil simulat pentru ilustrare.</figcaption>
</figure>
[[gal:cgh|<b>CGH clasic</b>: ADN-ul de test și cel de referință, marcate diferit, se hibridizează pe metafaze normale; se compară intensitățile de-a lungul fiecărui cromozom.;;acgh|<b>CGH pe microarray (array-CGH)</b>: în locul metafazelor, mii de fragmente de ADN fixate pe o lamă; fiecare punct dă raportul pentru un locus.]]
<div class="capcana"><b>„Fără etalarea cromozomilor”: doar la array-CGH</b>
<p>Cartea spune că SKY și CGH nu necesită etalarea cromozomilor. SKY se face chiar pe metafaze etalate, iar CGH clasic hibridizează ADN-ul pe <b>metafaze normale de referință</b> (nu ale pacientului). Fără niciun preparat cromozomial lucrează <b>array-CGH</b>, unde ținta sunt sonde fixate pe un cip (<a href="#/lp11/microarray">LP XI</a>).</p></div>
<div class="emery"><b>Ce se folosește azi</b>
<p>Emery (cap. 17) descrie <b>analiza cromozomială pe microarray (CMA)</b>, array-CGH sau SNP-array, ca test de primă linie la copiii cu dizabilitate intelectuală, autism sau malformații multiple: are rezoluție de zeci–sute de kb, dar nu vede rearanjările echilibrate (translocații, inversii), pe care le vede cariotipul.</p></div>`
},
{
id: "aplicatii", titlu: "Aplicații practice", pag: "29", emery: "cap. 3",
html: `
<ol class="protocol">
<li><b>Proiecții cu etapele de obținere a cromozomilor la om.</b><span class="de-ce">Urmărește pe fiecare imagine în care etapă suntem (<a href="#/lp02/etape">schema celor cinci etape</a>).</span></li>
<li><b>Inițierea unei culturi de limfocite (demonstrație).</b><span class="de-ce">Ordinea în tub: mediu, ser, sânge heparinat, PHA, antibiotic; 37 °C, 72 h (<a href="#/lp02/limfocite">cronologia</a>).</span></li>
<li><b>Examinarea preparatelor din culturi de limfocite.</b><span class="de-ce">10× pentru a găsi metafazele, imersie pentru a le analiza.</span></li>
<li><b>Aprecierea calității preparatului.</b><span class="de-ce">Trei criterii: numărul de metafaze (indicele mitotic), dispersia (cromozomi separați, dar din aceeași celulă), claritatea (contur net, cromatide vizibile, nu scămoși).</span></li>
</ol>
<div class="tw"><table><tr><th>Ce vezi pe lamă</th><th>Cauza probabilă</th></tr>
<tr><td>foarte puține metafaze</td><td>PHA lipsă/inactivă, cultură contaminată, colchicină prea puțină</td></tr>
<tr><td>cromozomi foarte scurți, groși</td><td>colchicină prea multă sau prea mult timp</td></tr>
<tr><td>cromozomi înghesuiți, suprapuși</td><td>hipotonizare insuficientă, etalare slabă</td></tr>
<tr><td>metafaze incomplete, cromozomi scămoși</td><td>hipotonizare prea lungă</td></tr>
<tr><td>cromozomi împrăștiați pe o suprafață mare</td><td>dispersie excesivă: risc de a amesteca două celule</td></tr></table></div>`
}
]
});
})();
