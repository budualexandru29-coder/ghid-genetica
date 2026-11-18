/* LP VII — Nomenclatura cromozomilor umani (LP p. 79–85) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const mono = "font-family:ui-monospace,monospace";
// o formulă ISCN desfăcută în bucăți colorate, cu explicații dedesubt
const formula = (y, parti, nota = "") => {
  let o = "", x = 30;
  parti.forEach(([t, d, c], i) => {
    const w = Math.max(t.length * 13.2 + 6, d ? d.length * 6.4 + 10 : 0);
    o += `<rect x="${x}" y="${y}" width="${w}" height="32" rx="6" class="${c}"/><text x="${x + w / 2}" y="${y + 22}" text-anchor="middle" style="fill:#fff;font-size:20px;${mono}" class="b">${t}</text>`;
    if (d) o += `<line x1="${x + w / 2}" y1="${y + 34}" x2="${x + w / 2}" y2="${y + 46}" class="sm" stroke-width="1"/><text x="${x + w / 2}" y="${y + 58}" text-anchor="middle" class="ti" style="font-size:11.5px">${d}</text>`;
    x += w + 4;
  });
  return o + (nota ? `<text x="30" y="${y + 86}" class="tm" style="font-size:12px">${nota}</text>` : "");
};

GHID.capitol({
id: "lp07",
intro: `<p class="lead">Un cariotip se raportează într-o formulă standard, scrisă după regulile <b>ISCN</b>, ca să poată fi citită la fel de orice laborator. Formula spune, în ordine: câți cromozomi, ce cromozomi sexuali și ce anomalii, cu cromozomii și benzile implicate. Capitolul e un mic dicționar plus regulile de gramatică.</p>
<figure>
<svg viewBox="0 0 760 140" role="img" aria-label="Structura unei formule ISCN">
${formula(16, [["46", "număr total", "fA"], [",", "", "fZ"], ["XX", "cromozomi sexuali", "fP"], [",", "", "fZ"], ["t", "tipul anomaliei", "fT"], ["(11;22)", "cromozomii implicați", "fG"], ["(q23;q11.2)", "punctele de ruptură", "fC"]], "Fără spații. Virgula separă numărul, sexul și fiecare anomalie; punct și virgulă separă cromozomii și benzile între ei.")}
</svg>
<figcaption><b>Anatomia unei formule:</b> o femeie cu 46 de cromozomi și translocația reciprocă t(11;22), rupturile fiind în 11q23 și 22q11.2. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Cartea folosește ISCN 1995</b>
<p>Ediția curentă e <b>ISCN 2024</b> (numele s-a schimbat în <i>International System for Human Cytogenomic Nomenclature</i>, pentru că acoperă și FISH, microarray și secvențiere). Mai multe forme din carte sunt depășite; le marcăm pe parcurs.</p></div>`,
sectiuni: [
{
id: "formula", titlu: "Formula de bază, aneuploidiile și mozaicurile", pag: "79–81", emery: "cap. 3, p. 33–34", acopera: ["lp07-r01"],
html: `
<p>Se scrie numărul total de cromozomi, virgulă, cromozomii sexuali. <b>Autozomii apar doar dacă sunt implicați într-o anomalie</b>: semnul + sau − se pune <b>înaintea</b> numărului cromozomului, după cromozomii sexuali.</p>
<div class="tw"><table>
<thead><tr><th>Formula</th><th>Se citește</th></tr></thead>
<tbody>
<tr><td><code>46,XX</code> · <code>46,XY</code></td><td>cariotip normal feminin / masculin</td></tr>
<tr><td><code>45,X</code></td><td>45 de cromozomi, un singur X (sindrom Turner)</td></tr>
<tr><td><code>47,XXY</code></td><td>47 de cromozomi, un X în plus (sindrom Klinefelter)</td></tr>
<tr><td><code>47,XX,+21</code></td><td>femeie cu un cromozom 21 în plus (trisomie 21)</td></tr>
<tr><td><code>45,XY,-21</code></td><td>bărbat cu un cromozom 21 lipsă</td></tr>
<tr><td><code>47,XX,+mar</code></td><td>un cromozom suplimentar neidentificat (marker)</td></tr>
</tbody></table></div>
<h3>Mozaicuri</h3>
<p>Liniile celulare se separă prin <b>bară oblică (/)</b>. Cartea le ordonează după numărul crescător de cromozomi; ISCN actual cere altceva:</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Scrierea unui mozaic: forma din carte și forma ISCN actuală">
<text x="30" y="26" class="tm b">Forma din carte</text>
<text x="30" y="56" class="ti" style="font-size:18px;${mono}">45,X/46,XX/47,XXX</text>
<text x="30" y="96" class="tok b">Forma ISCN actuală</text>
<text x="30" y="128" class="ti" style="font-size:18px;${mono}"><tspan class="ta b">mos </tspan>45,X<tspan class="tw2 b">[15]</tspan>/47,XXX<tspan class="tw2 b">[10]</tspan>/46,XX<tspan class="tw2 b">[23]</tspan></text>
${fo(30, 140, 720, 66, "<b class='ta'>mos</b> = mozaic constituțional (<b>chi</b> = himeră, din doi zigoți). <b style='color:var(--warn)'>[n]</b> = câte metafaze s-au numărat din fiecare linie: obligatoriu. Liniile anormale se scriu în ordinea mărimii clonei, <b>linia normală la sfârșit</b>.")}
</svg>
<figcaption><b>Același mozaic, două scrieri.</b> Numărul de celule e esențial: un mozaic 45,X[2]/46,XX[48] are altă semnificație decât 45,X[40]/46,XX[10]. Schemă proprie.</figcaption>
</figure>`
},
{
id: "simboluri", titlu: "Simbolurile (Tabelul 6)", pag: "80–82", emery: "cap. 3, Tabelul 3.2", acopera: ["lp07-r02"],
html: `
<div class="tw"><table>
<thead><tr><th>Simbol</th><th>Înseamnă</th><th>Simbol</th><th>Înseamnă</th></tr></thead>
<tbody>
<tr><td><code>p</code> · <code>q</code></td><td>brațul scurt (<i>petit</i>) · lung (<i>queue</i>)</td><td><code>del</code></td><td>deleție</td></tr>
<tr><td><code>cen</code></td><td>centromer</td><td><code>dup</code></td><td>duplicație</td></tr>
<tr><td><code>pter</code> · <code>qter</code></td><td>capătul brațului scurt · lung</td><td><code>inv</code></td><td>inversie</td></tr>
<tr><td><code>h</code></td><td>heterocromatină / constricție secundară</td><td><code>i</code> · <code>idic</code></td><td>izocromozom · izodicentric</td></tr>
<tr><td><code>+</code> · <code>−</code></td><td>cromozom (sau segment) în plus · lipsă</td><td><code>r</code></td><td>cromozom inelar</td></tr>
<tr><td><code>/</code> · <code>mos</code></td><td>separă liniile unui mozaic</td><td><code>t</code></td><td>translocație (reciprocă)</td></tr>
<tr><td><code>;</code></td><td>separă cromozomii și benzile în rearanjări</td><td><code>rob</code></td><td>translocație robertsoniană</td></tr>
<tr><td><code>:</code> · <code>::</code></td><td>ruptură · ruptură și reunire (sistemul detaliat)</td><td><code>ins</code></td><td>inserție</td></tr>
<tr><td><code>→</code></td><td>„de la… până la” (sistemul detaliat)</td><td><code>der</code></td><td>cromozom derivat</td></tr>
<tr><td><code>mat</code> · <code>pat</code></td><td>moștenit de la mamă · tată</td><td><code>dic</code></td><td>cromozom dicentric</td></tr>
<tr><td><code>dn</code></td><td>de novo (adăugat după carte)</td><td><code>mar</code></td><td>cromozom marker</td></tr>
<tr><td><code>upd</code></td><td>disomie uniparentală</td><td><code>fra</code></td><td>situs fragil</td></tr>
<tr><td><code>add</code></td><td>material suplimentar de origine necunoscută (în locul vechiului „p+/q+”)</td><td><code>~</code> · <code>?</code></td><td>interval incert · identificare incertă</td></tr>
</tbody></table></div>
<div class="capcana"><b>Ce nu se mai folosește din Tabelul 6</b>
<p><code>rcp</code> pentru translocația reciprocă: se scrie <code>t</code>. Notațiile „scurte” de tipul <code>10q+</code>, <code>21q−</code>, <code>t(3p−;12q+)</code>, <code>inv(5p+q−)</code> sunt abandonate: spun că un braț e mai lung sau mai scurt, dar nu de ce. Se scrie anomalia cu benzile ei: <code>add(10)(q22)</code>, <code>del(21)(q21)</code>, <code>t(3;12)(p21;q13)</code>, <code>inv(5)(p13q31)</code>. La <code>46,XY,9qh+</code> (heteromorfism) forma rămâne acceptată.</p></div>`
},
{
id: "benzi", titlu: "Numerotarea regiunilor, benzilor și sub-benzilor", pag: "82–83", emery: "cap. 3, p. 34", acopera: ["lp07-r03"], curs: [],
html: `
<p>Pe fiecare braț, <b>reperele</b> (centromerul, capătul, unele benzi foarte distincte) împart brațul în <b>regiuni</b>, numerotate de la centromer spre capăt. Fiecare regiune are mai multe <b>benzi</b>; la rezoluție mai mare, benzile se împart în <b>sub-benzi</b>, notate după punct.</p>
<figure><img src="fig/lp_nomenclatura.svg" alt="Cromozomul X cu regiuni și benzi, și citirea benzii Xp21.2">
<figcaption><b>Cum se citește Xp21.2</b> (figura 26 din carte, refăcută din datele genomului): cromozomul X, brațul scurt, regiunea 2, banda 1, sub-banda 2. Pe brațul lung, numerotarea pornește tot de la centromer: q11 e lângă centromer, q28 la capăt. Desenat din benzile UCSC hg38 la ~850 de benzi.</figcaption>
</figure>
<div class="pasi">
<div><b>Regiune</b>prima cifră după p/q: Xp<span style="color:var(--warn);font-weight:700">2</span></div>
<div><b>Bandă</b>a doua cifră: Xp2<span style="color:var(--warn);font-weight:700">1</span>; se citește „doi unu”</div>
<div><b>Sub-bandă</b>după punct: Xp21<span style="color:var(--warn);font-weight:700">.2</span>, apare în prometafază</div>
<div><b>Sub-sub-bandă</b>a doua cifră după punct: 18q22<span style="color:var(--warn);font-weight:700">.11</span>, doar la rezoluție foarte mare</div>
</div>
<p>Cum arată aceeași bandă la rezoluții diferite e desenat în <a href="#/lp03/descriere">LP III</a>; idiograma completă, în <a href="#/lp01/cromozomul">LP I</a>.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce înseamnă 17p13.1 și cum se pronunță?</summary><div>Cromozomul 17, brațul scurt, regiunea 1, banda 3, sub-banda 1: „șaptesprezece p unu trei punct unu”. Acolo se află <i>TP53</i>.</div></details>
<details class="q"><summary>Care bandă e mai aproape de centromer: 7q11.23 sau 7q36?</summary><div>7q11.23: regiunea 1 e prima de lângă centromer. 7q36 e spre capătul brațului lung.</div></details>
</div>`
},
{
id: "rearanjari", titlu: "Descrierea anomaliilor structurale: sistemul scurt și cel detaliat", pag: "83–85", emery: "cap. 3", acopera: [],
html: `
<p>Anomaliile structurale se descriu cu simbolul anomaliei urmat de <b>două paranteze</b>: în prima, cromozomii implicați; în a doua, punctele de ruptură, în aceeași ordine. Dacă sunt implicați doi cromozomi, se separă prin <b>;</b> și se scriu în ordine numerică, cu excepția cromozomilor sexuali, care vin primii.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Sistemul scurt și sistemul detaliat pentru o translocație">
<text x="30" y="24" class="ti b">Sistemul scurt (folosit în rapoarte)</text>
${formula(36, [["46,XY,", "", "fZ"], ["t", "anomalia", "fT"], ["(2;5)", "cromozomii", "fG"], ["(q21;q31)", "rupturile, în aceeași ordine", "fC"]])}
<text x="30" y="150" class="ti b">Sistemul detaliat (descrie fiecare derivat de la un capăt la altul)</text>
<text x="30" y="180" class="ti" style="font-size:14px;${mono}">46,XY,t(2;5)(2pter→2q21::5q31→5qter;</text>
<text x="30" y="202" class="ti" style="font-size:14px;${mono}">              5pter→5q31::2q21→2qter)</text>
${fo(30, 212, 720, 54, "Primul derivat: brațul scurt al lui 2 până la ruptura din 2q21, <b>unit (::)</b> cu segmentul lui 5 de la 5q31 până la capătul lui. Al doilea: invers. Descrierea începe de la pter; dacă pter lipsește, se începe de la qter.")}
</svg>
<figcaption><b>Aceeași translocație în cele două sisteme</b> (exemplul din carte, cu „rcp” înlocuit de „t”). În practică se folosește aproape mereu sistemul scurt. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Anomalia</th><th>Sistemul scurt</th><th>Observații</th></tr></thead>
<tbody>
<tr><td>Deleție terminală</td><td><code>46,XX,del(1)(q21)</code></td><td>detaliat: <code>del(1)(pter→q21:)</code>; „:” arată că după ruptură nu mai urmează nimic</td></tr>
<tr><td>Deleție interstițială</td><td><code>46,XY,del(7)(q11.23q11.23)</code></td><td>două rupturi, fără „;” (același braț); sindromul Williams</td></tr>
<tr><td>Izocromozom</td><td><code>46,X,i(X)(q10)</code></td><td>în carte <code>i(Xq)</code>; „q10” = ruptura în centromer, pe partea brațului lung</td></tr>
<tr><td>Inversie paracentrică</td><td><code>46,XY,inv(2)(p13p24)</code></td><td>ambele rupturi pe același braț (în carte apare greșit „p1p24”)</td></tr>
<tr><td>Inversie pericentrică</td><td><code>46,XY,inv(2)(p21q31)</code></td><td>o ruptură pe fiecare braț</td></tr>
<tr><td>Cromozom inelar</td><td><code>46,XX,r(2)(p21q31)</code></td><td>rupturile pe cele două brațe, capetele unite</td></tr>
<tr><td>Translocație robertsoniană</td><td><code>45,XX,rob(13;14)(q10;q10)</code></td><td>în carte „(p11;q11)”; ISCN actual: ruptura în centromer, q10</td></tr>
<tr><td>Trisomie prin translocație</td><td><code>46,XX,rob(14;21)(q10;q10),+21</code></td><td>46 de cromozomi, dar trei doze de 21</td></tr>
<tr><td>Inserție</td><td><code>46,XX,ins(6;12)(p21;q13q23)</code></td><td>primul e cromozomul receptor; segmentul 12q13→q23 inserat în 6p21</td></tr>
<tr><td>Derivat moștenit</td><td><code>46,XY,der(4)t(4;8)(p16;p23)mat</code></td><td>copilul are doar unul dintre derivați (dezechilibrat), de la mamă</td></tr>
<tr><td>Situs fragil</td><td><code>46,Y,fra(X)(q27.3)</code></td><td>forma istorică pentru X fragil; astăzi diagnosticul e molecular</td></tr>
</tbody></table></div>
<h3>Dincolo de microscop: ISCN pentru FISH și microarray</h3>
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Formule ISCN pentru microarray și FISH">
<text x="30" y="26" class="ta b">Microarray (CMA)</text>
<text x="30" y="56" class="ti" style="font-size:15px;${mono}">arr[GRCh38] 22q11.21(18912231_21465672)x1</text>
${fo(30, 64, 720, 44, "ansamblul genomului de referință · banda · coordonatele (în perechi de baze) · <b>x1</b> = o copie (deleție); x3 = duplicație; x2 = normal")}
<text x="30" y="132" class="ta b">FISH pe metafază</text>
<text x="30" y="162" class="ti" style="font-size:15px;${mono}">ish del(22)(q11.2q11.2)(TBX1-)</text>
${fo(30, 170, 720, 30, "ish = hibridizare in situ · sonda pentru TBX1 lipsește (−) de pe un cromozom 22")}
</svg>
<figcaption><b>Același sindrom (deleția 22q11.2), scris pentru alte metode.</b> Coordonatele sunt orientative. Schemă proprie după regulile ISCN 2024.</figcaption>
</figure>`
},
{
id: "aplicatii", titlu: "Aplicații practice: scrie și citește formule", pag: "85", emery: "cap. 3, 17", acopera: [],
html: `
<p>Lucrarea cere: recunoașterea anomaliilor pe imagini, observarea lor la microscop, diagnosticul pe cariotipuri date și descrierea lor în nomenclatura ISCN. Exersează în ambele sensuri:</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Scrie formula: băiat cu trisomie 18 liberă.</summary><div><code>47,XY,+18</code></div></details>
<details class="q"><summary>Scrie formula: fată cu sindrom Down prin translocație robertsoniană 14;21.</summary><div><code>46,XX,rob(14;21)(q10;q10),+21</code>. Numărul total e 46, pentru că al treilea 21 e fuzionat cu 14.</div></details>
<details class="q"><summary>Scrie formula: mama sănătoasă a copilului de mai sus, purtătoare echilibrată.</summary><div><code>45,XX,rob(14;21)(q10;q10)</code></div></details>
<details class="q"><summary>Citește: <code>46,XY,del(5)(p15.2)</code></summary><div>Băiat cu deleție terminală a brațului scurt al cromozomului 5, de la banda 5p15.2 până la capăt: sindrom Cri du chat (<a href="#/lp06/sindroame-deletie">LP VI</a>).</div></details>
<details class="q"><summary>Citește: <code>mos 47,XXY[12]/46,XY[18]</code></summary><div>Mozaic constituțional: 12 metafaze 47,XXY și 18 normale. Klinefelter în mozaic, de obicei cu fenotip mai ușor.</div></details>
<details class="q"><summary>Citește: <code>46,X,i(X)(q10)</code>. Ce sindrom și ce lipsește?</summary><div>Un X normal și un izocromozom de braț lung: trei doze de Xq, una singură de Xp. Sindrom Turner (statura mică ține de Xp, <i>SHOX</i>).</div></details>
<details class="q"><summary>Ce e greșit în <code>46,XY inv(9)(p12q13)</code>?</summary><div>Lipsește virgula dintre XY și inv: <code>46,XY,inv(9)(p12q13)</code>. (Și e o variantă normală, fără risc.)</div></details>
</div>`
}
]
});
})();
