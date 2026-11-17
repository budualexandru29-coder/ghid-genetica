/* Capitolul 12 — Sfatul genetic (curs p. 231–236) */
(function () {
const P = GHID.ped;
GHID.capitol({
id: "c12",
intro: `<p class="lead">Sfatul genetic este un proces de <b>comunicare</b> și <b>educație</b>: ce este boala, cum se transmite, ce risc are familia și ce opțiuni există. Decizia rămâne a familiei.</p>`,
sectiuni: [
{
id: "etape", titlu: "Sfatul genetic: etape (Tabelul XXX)", pag: "231–233", emery: "cap. 21", acopera: ["c12-r01", "c12-r02"],
html: `
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Elementele principale ale sfatului genetic">
<defs><marker id="g1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${[["Diagnostic", "examen clinic,|paraclinic", "fP"], ["Ancheta familială", "arbore genealogic|≥3 generații", "fG"], ["Transmitere", "și estimarea|riscului", "fA"], ["Comunicare", "empatie,|limbaj simplu", "fC"], ["Opțiuni", "diagnostic prenatal,|FIV, adopție…", "fT"], ["Sprijin", "în decizia luată,|urmărire", "fZ"]].map(([t, d, c], i) => {
  const x = 20 + i * 124;
  return `<circle cx="${x + 52}" cy="70" r="40" class="${c}"/><text x="${x + 52}" y="76" text-anchor="middle" fill="${c === "fC" ? "#1f2a37" : "#fff"}" style="font-weight:800;font-size:20px">${i + 1}</text><text x="${x + 52}" y="134" text-anchor="middle" class="ti b" style="font-size:12.5px">${t}</text>${d.split("|").map((r, j) => `<text x="${x + 52}" y="${154 + j * 16}" text-anchor="middle" class="tm" style="font-size:11px">${r}</text>`).join("")}${i < 5 ? `<path d="M${x + 94} 70 h28" class="si" stroke-width="1.6" marker-end="url(#g1)"/>` : ""}`;
}).join("")}
<rect x="20" y="200" width="720" height="40" rx="10" class="fas"/><text x="380" y="225" text-anchor="middle" class="ti">Totul pornește de la un <tspan class="b">diagnostic corect</tspan>: un diagnostic greșit face greșite și riscul, și sfatul.</text>
</svg>
<figcaption><b>Tabelul XXX ca proces.</b> Elementele sunt cele din curs (p. 231); ordinea este cea firească a consultației.</figcaption>
</figure>
<h3>1. Diagnosticul</h3>
<p>Examen clinic detaliat, consulturi de specialitate, investigații paraclinice: <b>cariotip</b> pentru bolile cromozomiale, <b>analize biochimice și ADN</b> pentru cele monogenice. Diagnosticul poate fi dificil: bolnavul a trăit demult, a decedat fără investigații sau necropsie, boala nu se poate confirma nici la pacientul în viață, ori s-a pus un diagnostic greșit.</p>
<h3>2. Ancheta familială și arborele genealogic</h3>
<p>Datele se reprezintă cu simboluri convenționale (cele neconvenționale se explică într-o legendă). Se recomandă <b>peste 3 generații</b> și toate rudele de gradul I și II ale probandului. Dificultăți: informații greșite sau necunoscute despre rude.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Simbolurile arborelui genealogic">
${(() => {
  let s = "";
  const it = [
    [P.ind(60, 50, "m"), "bărbat"], [P.ind(60, 50, "f"), "femeie"], [P.ind(60, 50, "?"), "sex necunoscut"], [P.ind(60, 50, "m", "a") , "afectat"],
    [P.ind(60, 50, "f", "p"), "purtător heterozigot (AR)"], [P.ind(60, 50, "f", "x"), "purtătoare X (XR)"], [P.ind(60, 50, "m") + `<line x1="38" y1="72" x2="82" y2="28" class="si" stroke-width="2"/>`, "decedat"], [P.ind(66, 50, "m", "a") + `<path d="M30 74 L46 60" class="si" stroke-width="2"/><path d="M46 60 l-9 2 l5 6z" class="fA"/>`, "proband (săgeată)"],
    [P.ind(30, 50, "m") + P.ind(90, 50, "f") + P.cuplu(30, 90, 50, 15, true), "cuplu consangvin"], [`<path d="M60 22 L34 66 M60 22 L86 66 M42 52 H78" class="si" stroke-width="1.6"/>` + P.ind(34, 70, "m", "n", "", 11) + P.ind(86, 70, "m", "n", "", 11), "gemeni monozigoți"], [`<path d="M60 22 L34 66 M60 22 L86 66" class="si" stroke-width="1.6"/>` + P.ind(34, 70, "m", "n", "", 11) + P.ind(86, 70, "f", "n", "", 11), "gemeni dizigoți"], [`<path d="M60 34 l14 30 h-28z" class="fcard si" stroke-width="1.6"/>`, "avort spontan"],
  ];
  it.forEach(([g, t], i) => {
    const x = 20 + (i % 4) * 185, y = 10 + Math.floor(i / 4) * 96;
    s += `<g transform="translate(${x} ${y})"><rect x="0" y="0" width="175" height="88" rx="10" class="fcard si" stroke-width="1"/><g transform="translate(-4 4) scale(0.75)">${g}</g><text x="128" y="50" text-anchor="middle" class="ti" style="font-size:11.5px">${t.length > 16 ? t.split(" ").slice(0, 2).join(" ") : t}</text>${t.length > 16 ? `<text x="128" y="66" text-anchor="middle" class="ti" style="font-size:11.5px">${t.split(" ").slice(2).join(" ")}</text>` : ""}</g>`;
  });
  return s;
})()}
</svg>
<figcaption><b>Simbolurile convenționale</b> folosite în tot ghidul (capitolele 7–12). Linia dublă de cuplu = consangvinitate.</figcaption>
</figure>
<h3>3. Modul de transmitere și riscul de recurență</h3>
<div class="tw"><table>
<tr><th>Tip de boală</th><th>Ce complică sfatul genetic (curs)</th></tr>
<tr><td><b>Autozomal dominant</b></td><td>„cele mai simple în teorie, adesea cele mai dificile în practică”: <b>expresivitate variabilă</b>, <b>debut tardiv</b> (Huntington), <b>penetranță redusă</b>, <b>amprentare genomică</b>, <b>mutații dinamice</b> cu anticipație (X fragil, Huntington)</td></tr>
<tr><td><b>Autozomal recesiv</b></td><td><b>consangvinitatea</b>, frecventă în unele grupuri etnice</td></tr>
<tr><td><b>Legat de X</b></td><td>peste 100 de boli și caractere descrise, dar adesea trecute cu vederea</td></tr>
<tr><td><b>Mitocondrial</b></td><td>transmitere exclusiv maternă: atrofia optică Leber, MELAS (miopatie, encefalopatie, acidoză lactică, episoade de tip AVC)</td></tr>
<tr><td><b>Multifactorial</b></td><td>risc mai mare: rudenie apropiată, heritabilitate mare, probând din sexul mai rar afectat, debut precoce sau formă severă, mai mulți membri afectați (capitolul 11)</td></tr>
<tr><td><b>Cromozomial</b></td><td>risc foarte mic dacă părinții au cariotip normal; excepție: un părinte purtător de rearanjament echilibrat (Tabelul XXXI)</td></tr>
</table></div>
<h3>Ce înseamnă un risc: comparație cu populația</h3>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Riscuri reprezentate ca 100 de copii">
${(() => {
  let s = "";
  [[50, "AD (un părinte afectat)"], [25, "AR (doi purtători)"], [4, "DLP, un copil afectat"], [3, "populație: orice anomalie congenitală"]].forEach(([n, t], k) => {
    const x0 = 20 + k * 186;
    s += `<text x="${x0 + 85}" y="22" text-anchor="middle" class="ti b" style="font-size:20px">${n}%</text><text x="${x0 + 85}" y="40" text-anchor="middle" class="tm" style="font-size:11px">${t}</text>`;
    for (let i = 0; i < 100; i++) s += `<circle cx="${x0 + 13 + (i % 10) * 16}" cy="${62 + Math.floor(i / 10) * 18}" r="6" class="${i < n ? (k === 3 ? "fC" : "fA") : "fline"}"/>`;
  });
  s += `<text x="380" y="262" text-anchor="middle" class="tm">Fiecare cerc = un copil din 100 de sarcini cu același risc. Riscul de fond (3–5%, capitolul 11) există pentru orice cuplu.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Riscul pus în context.</b> Cursul cere ca riscul stabilit să fie comparat cu cel din populația generală și explicat cu desene și imagini. Riscul pe sarcină nu are „memorie”: 25% rămâne 25% la fiecare sarcină, indiferent de copiii anteriori (în bolile monogenice).</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce bolile AD sunt „simple în teorie, dificile în practică” pentru sfatul genetic?</summary><div>Riscul de 50% e simplu, dar expresivitatea variabilă, penetranța redusă, debutul tardiv, amprentarea și anticipația fac greu de prezis dacă și cât de grav va fi afectat copilul.</div></details>
<details class="q"><summary>Un cuplu are deja un copil cu fibroză chistică. Al doilea copil a fost sănătos. Ce risc are a treia sarcină?</summary><div>Tot 25%: fiecare sarcină este un eveniment independent.</div></details>
</div>`
},
{
id: "translocatii", titlu: "Riscul în translocații (Tabelul XXXI); principiile sfatului genetic", pag: "233–236", emery: "cap. 3 (translocații), cap. 21", acopera: ["c12-r03"],
html: `
<h3>Tabelul XXXI (verificat pe scanare)</h3>
<div class="tw"><table>
<tr><th>Translocația</th><th>Părintele purtător</th><th>Riscul la descendenți (trisomie 21)</th></tr>
<tr><td rowspan="3"><b>14/21</b></td><td>mama</td><td><b>10%</b></td></tr>
<tr><td>tatăl</td><td><b>2,5%</b></td></tr>
<tr><td>niciunul (<i>de novo</i>)</td><td>&lt;1%</td></tr>
<tr><td rowspan="2"><b>21/22</b></td><td>unul dintre părinți</td><td>puține date; probabil similar cu 14/21</td></tr>
<tr><td>niciunul</td><td>&lt;1%</td></tr>
<tr><td rowspan="2"><b>21/21</b></td><td>unul dintre părinți, indiferent de sex</td><td><b>100%</b></td></tr>
<tr><td>niciunul</td><td>&lt;1%</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 400" role="img" aria-label="Gameții unui purtător de translocație robertsoniană 14/21">
${(() => {
  const c14 = (x, y) => `<rect x="${x}" y="${y}" width="12" height="60" rx="6" class="fG"/>`;
  const c21 = (x, y) => `<rect x="${x}" y="${y}" width="12" height="26" rx="6" class="fA"/>`;
  const rob = (x, y) => `<rect x="${x}" y="${y}" width="12" height="60" rx="6" class="fG"/><rect x="${x}" y="${y + 60}" width="12" height="24" rx="6" class="fA"/>`;
  let s = `<text x="20" y="22" class="ti b">Părinte purtător echilibrat: 45 de cromozomi, cu 14 și 21 fuzionați</text>`;
  s += `<rect x="290" y="34" width="180" height="100" rx="12" class="fcard si" stroke-width="1"/>` + c14(320, 50) + rob(360, 46) + c21(400, 64) + `<text x="380" y="150" text-anchor="middle" class="tm" style="font-size:11px">14 · rob(14;21) · 21</text>`;
  const gam = [[["c14", "c21"], "normal", "tok", "fenotip normal"], [["rob"], "purtător echilibrat", "tok", "fenotip normal"], [["rob", "c21"], "trisomie 21", "tw2", "sindrom Down"], [["c14"], "monosomie 21", "tm", "neviabil"], [["rob", "c14"], "trisomie 14", "tm", "neviabil"], [["c21"], "monosomie 14", "tm", "neviabil"]];
  gam.forEach(([el, t, cls, f], i) => {
    const x = 20 + i * 124, y = 190;
    s += `<rect x="${x}" y="${y}" width="112" height="120" rx="12" class="${cls === "tw2" ? "fws sw" : cls === "tok" ? "fis sin" : "fcard si"}" stroke-width="1"/>`;
    let xx = x + 56 - el.length * 10;
    el.forEach((e) => { s += e === "c14" ? c14(xx, y + 12) : e === "c21" ? c21(xx, y + 12) : rob(xx, y + 10); xx += 22; });
    s += `<text x="${x + 56}" y="${y + 140}" text-anchor="middle" class="${cls} b" style="font-size:12px">${t}</text><text x="${x + 56}" y="${y + 158}" text-anchor="middle" class="tm" style="font-size:11px">${f}</text>`;
    s += `<path d="M380 152 L${x + 56} ${y - 4}" class="sm" stroke-width="1"/>`;
  });
  s += `<text x="380" y="372" text-anchor="middle" class="ti">Cromozomii arătați sunt cei din gamet + cei de la celălalt părinte (un 14 și un 21 normali).</text>`;
  s += `<text x="380" y="392" text-anchor="middle" class="tm" style="font-size:11.5px">Teoretic 1/3 din produșii viabili ar avea Down; observat: 10% (mamă) și 2,5% (tată), prin selecția împotriva gameților și embrionilor dezechilibrați.</text>`;
  return s;
})()}
</svg>
<figcaption><b>De ce riscul real este mult sub cel teoretic.</b> Cele șase combinații de segregare ale unui purtător rob(14;21), cu rezultatul după fecundarea cu un gamet normal. Explicația diferenței mamă/tată (selecție mai puternică în spermatogeneză) este din Emery (cap. 3). Schemă proprie; vezi și capitolul 3 din curs.</figcaption>
</figure>
[[img:robertson|<b>Translocația robertsoniană</b>: fuziunea centrică a brațelor lungi a doi cromozomi acrocentrici; brațele scurte se pierd fără efect clinic.]]
<div class="cheie"><b>De ce 21/21 dă 100%</b><p>Purtătorul rob(21;21) poate da doar doi tipuri de gameți: cu cromozomul fuzionat (două copii de 21 → trisomie la copil) sau fără niciun 21 (monosomie 21, neviabilă). Toți copiii născuți vii au sindrom Down.</p></div>
<h3>Translocații reciproce, deleții</h3>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Riscul în translocațiile reciproce și deleții">
${[["Translocație reciprocă, un părinte purtător", 20, "~20%", "fA"], ["… care implică 9p sau 4p/5p terminal", 30, "~30%", "fA"], ["Translocație reciprocă de novo (părinți normali)", 1, "foarte mic", "fline"], ["Deleții, microdeleții absente la părinți", 1, "minim", "fline"]].map(([t, v, l, c], i) => `<text x="380" y="${30 + i * 36}" text-anchor="end" class="ti" style="font-size:12.5px">${t}</text><rect x="392" y="${14 + i * 36}" width="${Math.max(v * 9, 6)}" height="24" rx="5" class="${c}"/><text x="${400 + Math.max(v * 9, 6)}" y="${31 + i * 36}" class="ti b">${l}</text>`).join("")}
</svg>
<figcaption><b>Riscul de produși dezechilibrați</b>, după curs (p. 234).</figcaption>
</figure>
<h3>Comunicarea și principiile sfatului genetic</h3>
<div class="pasi">
<div><b>Nondirectiv</b>medicul informează și sfătuiește, nu decide în locul pacientului</div>
<div><b>Autonomie</b>decizie informată, fără constrângere; nu există „corect” sau „greșit”</div>
<div><b>Confidențialitate</b>a datelor</div>
<div><b>Consimțământ</b>testarea genetică doar după informarea pacientului sau a tutorelui</div>
<div><b>Ambii părinți</b>informați împreună, pe cât posibil</div>
<div><b>Limbaj simplu</b>adaptat; desene, imagini; informațiile se repetă când e nevoie</div>
<div><b>Timp</b>după un eveniment traumatizant (ex. făt mort cu malformații)</div>
<div><b>Context</b>riscul comparat cu cel din populația generală</div>
<div><b>Oral și scris</b>rezultatele se comunică în ambele forme</div>
<div><b>După consultație</b>plan de îngrijire și educație, sprijin psihologic și social (asistenți sociali, grupuri de suport, asociații), urmărire pe termen lung</div>
</div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un copil are sindrom Down prin translocație 14/21; mama are cariotip 45,XX,rob(14;21). Ce risc are următoarea sarcină?</summary><div>~10% (mama purtătoare). Dacă tatăl ar fi fost purtătorul, ~2,5%; dacă niciun părinte, sub 1%.</div></details>
<details class="q"><summary>Ce înseamnă că sfatul genetic este nondirectiv?</summary><div>Consilierul prezintă informațiile și opțiunile, dar decizia (de exemplu privind diagnosticul prenatal) aparține familiei.</div></details>
</div>`
}
]
});
})();
