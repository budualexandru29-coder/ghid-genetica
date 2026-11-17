/* Capitolul 11 — Bolile multifactoriale (curs p. 209–230) */
(function () {
const gauss = (x, m, s) => Math.exp(-0.5 * ((x - m) / s) ** 2);
// curbă gaussiană ca path SVG: x0..x1 în pixeli, media m, sigma s (pixeli), înălțime h, bază y
const curba = (x0, x1, m, s, h, y, cls, fill) => {
  let d = `M${x0} ${y}`;
  for (let x = x0; x <= x1; x += 3) d += ` L${x} ${(y - h * gauss(x, m, s)).toFixed(1)}`;
  d += ` L${x1} ${y}`;
  return `<path d="${d}${fill ? "Z" : ""}" class="${cls}" ${fill ? "" : 'fill="none"'} stroke-width="2.5"/>`;
};
const arie = (xa, xb, m, s, h, y, cls) => {
  let d = `M${xa} ${y}`;
  for (let x = xa; x <= xb; x += 2) d += ` L${x} ${(y - h * gauss(x, m, s)).toFixed(1)}`;
  return `<path d="${d} L${xb} ${y}Z" class="${cls}"/>`;
};
const binom = (n) => { const r = [1]; for (let k = 1; k <= n; k++) r.push(r[k - 1] * (n - k + 1) / k); return r; };

GHID.capitol({
id: "c11",
intro: `<p class="lead">Multe caractere și boli se adună în familii, dar nu respectă proporțiile lui Mendel. Ele rezultă din <b>mai multe gene</b>, fiecare cu efect mic, plus <b>mediul</b>. Sunt frecvente (peste 5% din populație): bolile comune ale adultului și malformațiile congenitale izolate.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Spectrul de la boli monogenice la boli de mediu">
<defs><linearGradient id="gm" x1="0" x2="1"><stop offset="0" stop-color="#6c4ad1"/><stop offset="1" stop-color="#2a9d8f"/></linearGradient></defs>
<rect x="40" y="70" width="680" height="30" rx="15" fill="url(#gm)"/>
<text x="40" y="56" class="ta b">genetic</text><text x="720" y="56" text-anchor="end" class="tok b">mediu</text>
${[["monogenice", "Duchenne, FC, hemofilie", 70], ["oligogenice", "o genă majoră + altele", 220], ["multifactoriale", "DLP, diabet, HTA, schizofrenie", 420], ["mediu", "traumatisme, infecții", 650]].map(([t, e, x]) => `<circle cx="${x}" cy="85" r="9" class="fcard si" stroke-width="2"/><text x="${x}" y="130" text-anchor="middle" class="ti b">${t}</text><text x="${x}" y="150" text-anchor="middle" class="tm" style="font-size:11.5px">${e}</text>`).join("")}
<text x="380" y="192" text-anchor="middle" class="tm">Aproape orice boală are o componentă genetică și una de mediu; diferă proporția.</text>
</svg>
<figcaption><b>Unde se situează bolile multifactoriale.</b> Schemă proprie după Emery (cap. 10).</figcaption>
</figure>`,
sectiuni: [
{
id: "definitie", titlu: "Ce sunt bolile multifactoriale (Tabelul XXV)", pag: "209–211", emery: "cap. 10", acopera: ["c11-r01"],
html: `
<div class="tw"><table>
<tr><th>Anomalii congenitale (unice, izolate)</th><th>Boli comune ale adultului</th></tr>
<tr><td>despicătura labio-palatină · luxația congenitală de șold · malformațiile congenitale de cord · stenoza hipertrofică de pilor · spina bifida · piciorul strâmb congenital · polidactilia · hernia ombilicală · criptorhidia</td><td>diabetul zaharat · epilepsia · hipertensiunea arterială · glaucomul · boala coronariană · astmul · psoriazisul · schizofrenia</td></tr>
</table></div>
<h3>Cum se demonstrează componenta genetică</h3>
<div class="pasi">
<div><b>Agregarea familială</b>riscul de recurență la rude = prevalența la rude / prevalența în populație; scade odată cu gradul de rudenie</div>
<div><b>Studiul gemenilor</b>concordanța la monozigoți (aceleași gene) vs dizigoți (50% gene comune); cu cât diferența e mai mare, cu atât componenta genetică e mai mare</div>
<div><b>Studiile de adopție</b>copilul adoptat seamănă cu părinții biologici (gene) sau cu cei adoptivi (mediu)?</div>
</div>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Ce arată studiul gemenilor">
${(() => {
  const per = (x, y, cls) => `<circle cx="${x}" cy="${y - 34}" r="11" class="${cls}"/><path d="M${x - 14} ${y} q14 -36 28 0z" class="${cls}"/>`;
  let s = `<rect x="20" y="16" width="350" height="240" rx="14" class="fis sin" stroke-width="1"/><rect x="390" y="16" width="350" height="240" rx="14" class="fas" stroke-width="1"/>`;
  s += `<text x="195" y="42" text-anchor="middle" class="tin b">gemeni monozigoți (MZ)</text><text x="195" y="60" text-anchor="middle" class="tm" style="font-size:11.5px">un zigot → 100% gene comune</text>`;
  s += `<text x="565" y="42" text-anchor="middle" class="ta b">gemeni dizigoți (DZ)</text><text x="565" y="60" text-anchor="middle" class="tm" style="font-size:11.5px">doi zigoți → ~50% gene comune, ca frații</text>`;
  s += per(160, 140, "fA") + per(230, 140, "fA") + per(530, 140, "fA") + per(600, 140, "fcard si");
  s += `<text x="195" y="180" text-anchor="middle" class="ti b">concordanță mare</text><text x="565" y="180" text-anchor="middle" class="ti b">concordanță mai mică</text>`;
  s += `<text x="380" y="216" text-anchor="middle" class="ti">MZ ≫ DZ → componentă genetică importantă · MZ ≈ DZ → mai ales mediu comun</text>`;
  s += `<text x="380" y="238" text-anchor="middle" class="tm" style="font-size:11.5px">MZ sub 100% → și mediul contează (gemenii identici nu sunt mereu ambii bolnavi)</text>`;
  return s;
})()}
</svg>
<figcaption><b>Logica studiului gemenilor</b> (curs, p. 210). Schemă proprie.</figcaption>
</figure>
<h3>Teorii și heritabilitate</h3>
<p><b>Teoria poligenică:</b> multe gene, fiecare cu efect mic, cumulat. <b>Teoria oligogenică:</b> mai multe gene, dintre care unele au pondere mare. <b>Heritabilitatea (h²)</b> = proporția din variația fenotipică explicată de variația genetică (0–1 sau 0–100%), calculată din corelațiile dintre rude.</p>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Heritabilitatea unor boli multifactoriale">
${[["Schizofrenie", 85], ["Astm", 80], ["Despicătura labio-palatină", 76]].map(([b, v], i) => `<text x="230" y="${42 + i * 44}" text-anchor="end" class="ti b">${b}</text><rect x="244" y="${24 + i * 44}" width="${v * 4.6}" height="28" rx="6" class="fP"/><rect x="${244 + v * 4.6}" y="${24 + i * 44}" width="${(100 - v) * 4.6}" height="28" rx="6" class="fline"/><text x="${252}" y="${43 + i * 44}" fill="#fff" style="font-weight:800">${v}%</text>`).join("")}
<text x="244" y="160" class="tm" style="font-size:11.5px">violet = heritabilitate · gri = variație nelegată de gene. Stenoza pilorică are și ea heritabilitate mare.</text>
</svg>
<figcaption><b>Valorile de heritabilitate din curs</b> (p. 211).</figcaption>
</figure>
<div class="capcana"><b>Ce nu înseamnă heritabilitatea</b><p>O heritabilitate de 80% nu înseamnă că 80% din bolnavi au boala „din gene” sau că un individ are 80% risc. Este o proporție din variația <i>dintr-o populație</i>, într-un anumit mediu, și se poate schimba dacă mediul se schimbă (Emery, cap. 10).</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Concordanța pentru o boală este 40% la gemenii MZ și 5% la DZ. Ce concluzii tragi?</summary><div>Componentă genetică importantă (MZ ≫ DZ), dar nu exclusivă: dacă ar fi strict genetică, concordanța la MZ ar fi aproape de 100%.</div></details>
</div>`
},
{
id: "cantitative", titlu: "Ereditatea caracterelor cantitative (Figura 24)", pag: "211–213", emery: "cap. 10, p. 145–147", acopera: ["c11-r02", "c11-r03"],
html: `
<p>Tensiunea arterială, talia, inteligența, greutatea au <b>distribuție continuă</b> în populație (teoria lui Fisher): rezultă din gene nealele la loci diferiți, cu efecte <b>mici și aditive</b>, fără dominanță sau recesivitate, plus mediul.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Cum apare curba gaussiană din mai multe gene">
${(() => {
  let s = "";
  [[1, "1 genă", "3 clase (1:2:1)"], [2, "2 gene", "5 clase"], [3, "3 gene", "7 clase"], [10, "multe gene + mediu", "curbă continuă"]].forEach(([n, t, c], i) => {
    const x0 = 20 + i * 186, w = 170, base = 220;
    s += `<rect x="${x0}" y="16" width="${w}" height="256" rx="12" class="fcard si" stroke-width="1"/><text x="${x0 + w / 2}" y="40" text-anchor="middle" class="ti b">${t}</text><text x="${x0 + w / 2}" y="58" text-anchor="middle" class="tm" style="font-size:11px">${c}</text>`;
    if (n < 10) {
      const b = binom(2 * n), mx = Math.max(...b), bw = (w - 30) / b.length;
      b.forEach((v, k) => (s += `<rect x="${x0 + 15 + k * bw + 2}" y="${base - v / mx * 140}" width="${bw - 4}" height="${v / mx * 140}" rx="3" class="fP"/>`));
    } else {
      s += curba(x0 + 12, x0 + w - 12, x0 + w / 2, 26, 140, base, "fP", true);
    }
    s += `<line x1="${x0 + 12}" y1="${base}" x2="${x0 + w - 12}" y2="${base}" class="sm"/><text x="${x0 + 14}" y="${base + 18}" class="tm" style="font-size:10px">mic</text><text x="${x0 + w - 14}" y="${base + 18}" text-anchor="end" class="tm" style="font-size:10px">mare</text>`;
    s += `<text x="${x0 + w / 2}" y="${base + 40}" text-anchor="middle" class="tm" style="font-size:10.5px">${n < 10 ? `${2 * n} alele aditive` : "fenotip (ex. talie)"}</text>`;
  });
  return s;
})()}
</svg>
<figcaption><b>De la clase discrete la curbă continuă.</b> Fiecare alelă „+” adaugă o unitate; cu tot mai mulți loci, clasele se înmulțesc, iar mediul le „netezește” într-o curbă gaussiană. Proporțiile sunt coeficienți binomiali (1:2:1; 1:4:6:4:1; …). Schemă proprie după Emery (cap. 10).</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Distribuția normală cu deviațiile standard">
${(() => {
  const m = 380, sd = 90, h = 200, y = 240;
  let s = arie(m - 2 * sd, m + 2 * sd, m, sd, h, y, "fP") ;
  s = s.replace('class="fP"', 'class="fP" opacity=".25"');
  s += arie(m - sd, m + sd, m, sd, h, y, "fP").replace('class="fP"', 'class="fP" opacity=".45"');
  s += curba(60, 700, m, sd, h, y, "sP", false);
  s += `<line x1="60" y1="${y}" x2="700" y2="${y}" class="sm" stroke-width="1.5"/>`;
  [-3, -2, -1, 0, 1, 2, 3].forEach((k) => (s += `<line x1="${m + k * sd}" y1="${y}" x2="${m + k * sd}" y2="${y + 8}" class="sm"/><text x="${m + k * sd}" y="${y + 24}" text-anchor="middle" class="tm" style="font-size:11.5px">${k === 0 ? "media" : (k > 0 ? "+" : "−") + Math.abs(k) + " DS"}</text>`));
  s += `<text x="${m}" y="${y - 80}" text-anchor="middle" class="ta b" style="font-size:18px">68%</text><text x="${m}" y="${y - 60}" text-anchor="middle" class="ta" style="font-size:11.5px">între −1 și +1 DS</text>`;
  s += `<line x1="${m - 2 * sd}" y1="${y - 26}" x2="${m + 2 * sd}" y2="${y - 26}" class="sP" stroke-width="1.2"/><text x="${m + 1.5 * sd}" y="${y - 32}" text-anchor="middle" class="ta b">95% (±2 DS)</text>`;
  s += `<text x="${m - 2.6 * sd}" y="${y - 60}" text-anchor="middle" class="tw2 b" style="font-size:12px">patologic</text><text x="${m + 2.6 * sd}" y="${y - 60}" text-anchor="middle" class="tw2 b" style="font-size:12px">patologic</text>`;
  s += `<text x="${m - 2.6 * sd}" y="${y - 44}" text-anchor="middle" class="tm" style="font-size:11px">&lt; −2 DS (2,5%)</text><text x="${m + 2.6 * sd}" y="${y - 44}" text-anchor="middle" class="tm" style="font-size:11px">&gt; +2 DS (2,5%)</text>`;
  return s;
})()}
</svg>
<figcaption><b>Figura 24 redesenată.</b> Nu există o graniță naturală între normal și patologic: se definește statistic, prin deviația standard (DS = rădăcina pătrată a varianței fenotipice) sau percentile. Valorile în afara intervalului ±2 DS se consideră patologice.</figcaption>
</figure>
<div class="cheie"><b>Regresia spre medie</b><p>Copiii unor părinți cu valori extreme (foarte înalți, foarte grei) au, în medie, valori mai apropiate de media populației. Motivul: copilul primește doar jumătate din alelele fiecărui părinte, iar o parte din abaterea părinților venea din mediu, care nu se moștenește.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce procent din populație are o valoare peste +2 DS?</summary><div>Aproximativ 2,5% (jumătate din cele 5% din afara intervalului ±2 DS).</div></details>
</div>`
},
{
id: "prag", titlu: "Ereditatea multifactorială cu prag (Figura 25)", pag: "213–214", emery: "cap. 10, p. 147–149", acopera: ["c11-r04", "c11-r07"],
html: `
<p>Malformațiile izolate și multe boli comune sunt „ai sau n-ai”, nu cantitative. <b>Falconer (1965)</b> a extins teoria poligenică: <b>predispoziția</b> (liability) are distribuție continuă, gaussiană, în toată populația, dar boala apare doar peste un <b>prag</b>. Așa apar două fenotipuri distincte și agregarea familială.</p>
<p style="font-size:14px;color:var(--muted)">Cursul dă anul 1971 pentru modelul lui Falconer; lucrarea originală despre predispoziție și prag este din 1965.</p>
<figure>
<svg viewBox="0 0 760 380" role="img" aria-label="Modelul cu prag: populație și rude de gradul I">
${(() => {
  let s = "";
  const y1 = 160, y2 = 340, T = 560, sd = 70;
  s += `<text x="20" y="24" class="ti b">Populația generală</text>`;
  s += arie(T, 720, 330, sd, 120, y1, "fA") + curba(60, 720, 330, sd, 120, y1, "sP", false);
  s += `<line x1="60" y1="${y1}" x2="720" y2="${y1}" class="sm"/>`;
  s += `<line x1="${T}" y1="30" x2="${T}" y2="${y2 + 6}" class="sA" stroke-width="2.5" stroke-dasharray="6 4"/><text x="${T + 6}" y="44" class="tw2 b">PRAG</text>`;
  s += `<text x="650" y="${y1 - 20}" text-anchor="middle" class="tw2 b" style="font-size:12px">afectați</text>`;
  s += `<text x="20" y="${y1 + 40}" class="ti b">Rudele de gradul I ale unui bolnav</text>`;
  s += arie(T, 720, 420, sd, 120, y2, "fA") + curba(60, 720, 420, sd, 120, y2, "sP", false) + `<line x1="60" y1="${y2}" x2="720" y2="${y2}" class="sm"/>`;
  s += `<line x1="330" y1="${y2 + 4}" x2="330" y2="${y2 - 8}" class="sm"/><path d="M332 ${y2 - 60} H412" class="sP" stroke-width="2"/><path d="M412 ${y2 - 60} l-8 -5 v10z" class="fP"/><text x="372" y="${y2 - 68}" text-anchor="middle" class="ta b" style="font-size:12px">media se mută</text>`;
  s += `<text x="650" y="${y2 - 30}" text-anchor="middle" class="tw2 b" style="font-size:12px">mai mulți afectați</text>`;
  s += `<text x="380" y="${y2 + 30}" text-anchor="middle" class="tm">predispoziție (gene + mediu) →</text>`;
  return s;
})()}
</svg>
<figcaption><b>Figura 25, cu rudele adăugate.</b> Rudele unui bolnav au, în medie, mai multe alele de risc: curba lor se deplasează spre prag, iar proporția de peste prag crește. Așa se explică agregarea familială fără transmitere mendeliană. Schemă proprie după curs (p. 213–214) și Emery.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Praguri diferite la cele două sexe: stenoza pilorică">
${(() => {
  let s = curba(60, 720, 330, 80, 140, 200, "sP", false) + `<line x1="60" y1="200" x2="720" y2="200" class="sm"/>`;
  s += `<line x1="520" y1="40" x2="520" y2="206" class="sT" stroke-width="2.5" stroke-dasharray="6 4"/><text x="514" y="36" text-anchor="end" class="ta b">prag ♂</text>`;
  s += `<line x1="640" y1="40" x2="640" y2="206" class="sA" stroke-width="2.5" stroke-dasharray="6 4"/><text x="646" y="36" class="tw2 b">prag ♀ (mai sus)</text>`;
  s += `<rect x="40" y="214" width="680" height="30" rx="8" class="fas"/><text x="380" y="234" text-anchor="middle" class="ti">O fată afectată a „urcat” peste un prag mai înalt → are mai multe alele de risc → rudele ei au risc mai mare.</text>`;
  s += `<text x="150" y="70" class="ti b">stenoza hipertrofică de pilor</text><text x="150" y="90" class="ti">raport M:F = 5:1</text>`;
  return s;
})()}
</svg>
<figcaption><b>Efectul Carter</b>: când boala e mai frecventă la un sex, sexul mai rar afectat are un prag mai înalt (curs, p. 215, regula 3). Schemă proprie.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce riscul pentru rude scade rapid de la gradul I la gradul III în modelul cu prag?</summary><div>Rudele mai îndepărtate împart tot mai puține alele cu bolnavul; curba lor se apropie de cea a populației, iar aria de peste prag scade spre valoarea populațională.</div></details>
</div>`
},
{
id: "oligogenic", titlu: "Ereditatea oligogenică", pag: "214", emery: "cap. 10", acopera: ["c11-r05"],
html: `
<p>Modelul <b>mixt</b>: o <b>genă majoră</b> (cu mai multe alele) + o componentă poligenică + mediul. Exemplu de tip oligogenic din Emery: boala Hirschsprung, unde variantele <i>RET</i> au efect mare, modulat de alte gene.</p>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Contribuția relativă în modelul oligogenic">
${(() => {
  let s = "";
  const bara = (y, segs, t) => { let x = 200; let r = `<text x="190" y="${y + 22}" text-anchor="end" class="ti b">${t}</text>`; segs.forEach(([w, c, l]) => { r += `<rect x="${x}" y="${y}" width="${w}" height="32" class="${c}"/>${l ? `<text x="${x + w / 2}" y="${y + 21}" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:12px">${l}</text>` : ""}`; x += w; }); return r; };
  s += bara(30, [[510, "fA", "o singură genă"]], "monogenic");
  s += bara(80, [[200, "fA", "genă majoră"], [190, "fP", "alte gene (mici)"], [120, "fT", "mediu"]], "oligogenic");
  s += bara(130, Array.from({ length: 12 }, (_, i) => [24, i % 2 ? "fP" : "fZ", ""]).concat([[222, "fT", "mediu"]]), "poligenic");
  s += `<text x="380" y="200" text-anchor="middle" class="tm">Proporțiile sunt ilustrative, nu măsurate.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Trei modele, aceeași bară.</b> În modelul oligogenic o genă domină contribuția genetică.</figcaption>
</figure>
<div class="pasi">
<div><b>Gene majore</b>ușor de identificat; ajută la înțelegerea fiziopatologiei și la terapii noi</div>
<div><b>Risc mai mare</b>datorită distribuției mendeliene a genei majore, riscul de recurență este semnificativ mai mare decât în bolile multifactoriale obișnuite</div>
<div><b>Persoane cu risc</b>se identifică mai ușor în familie</div>
</div>`
},
{
id: "risc", titlu: "Riscul de recurență (Tabelul XXVI)", pag: "214–215", emery: "cap. 10, p. 149–150", acopera: ["c11-r06", "c11-r09"],
html: `
<p>Riscul empiric (observat în studii de familie), nu calculat după Mendel. Cinci reguli:</p>
<figure>
<svg viewBox="0 0 760 420" role="img" aria-label="Cele cinci reguli ale riscului de recurență">
${(() => {
  let s = "";
  const card = (x, y, n, t) => `<rect x="${x}" y="${y}" width="360" height="190" rx="12" class="fcard si" stroke-width="1"/><circle cx="${x + 24}" cy="${y + 24}" r="13" class="fP"/><text x="${x + 24}" y="${y + 29}" text-anchor="middle" fill="#fff" style="font-weight:800">${n}</text><text x="${x + 46}" y="${y + 29}" class="ti b" style="font-size:12.5px">${t}</text>`;
  const bar = (x, y, v, max, cls, lab, val) => `<rect x="${x}" y="${y}" width="${v / max * 220}" height="22" rx="4" class="${cls}"/><text x="${x - 8}" y="${y + 16}" text-anchor="end" class="ti" style="font-size:11.5px">${lab}</text><text x="${x + v / max * 220 + 6}" y="${y + 16}" class="ti b" style="font-size:11.5px">${val}</text>`;
  s += card(20, 10, 1, "mai mulți afectați în familie → risc mai mare");
  s += bar(130, 70, 4, 12, "fC", "1 copil cu DLP", "4%") + bar(130, 110, 11, 12, "fA", "2 copii cu DLP", "10–12%");
  s += card(390, 10, 2, "formă mai gravă la probând → risc mai mare");
  s += bar(510, 70, 2, 12, "fC", "DLP unilaterală", "2%") + bar(510, 110, 6, 12, "fA", "DLP bilaterală", "> 6%");
  s += card(20, 214, 3, "probandul din sexul mai rar afectat");
  s += `<text x="40" y="276" class="ti" style="font-size:12px">stenoza de pilor, M:F = 5:1</text><text x="40" y="300" class="ti" style="font-size:12px">probând fată → risc mai mare pentru rude</text><text x="40" y="324" class="tm" style="font-size:11px">(Emery dă cifre detaliate pe sexe;</text><text x="40" y="340" class="tm" style="font-size:11px">cursul doar enunță regula)</text>`;
  s += card(390, 214, 4, "scade cu gradul de rudenie");
  s += bar(510, 268, 4, 4.4, "fA", "gradul I", "4%") + bar(510, 298, 0.6, 4.4, "fC", "gradul II", "0,6%") + bar(510, 328, 0.3, 4.4, "fG", "gradul III", "0,3%") + bar(510, 358, 0.1, 4.4, "fline", "populația", "0,1%");
  s += `<rect x="20" y="410" width="0" height="0"/>`;
  return s;
})()}
</svg>
<figcaption><b>Regulile 1–4</b>, cu cifrele din curs pentru despicătura labio-palatină. Regula 5: <b>consangvinitatea</b> crește riscul. Rudele de gradul III au risc apropiat de cel al populației.</figcaption>
</figure>
<h3>Tabelul XXVI (verificat pe scanare)</h3>
<div class="tw"><table>
<tr><th>Boala</th><th>Populația generală</th><th>Rude gradul I</th><th>Rude gradul II</th><th>Rude gradul III</th></tr>
<tr><td>Despicătură labio-palatină</td><td>0,1%</td><td><b>4%</b></td><td>0,6%</td><td>0,3%</td></tr>
<tr><td>Picior strâmb congenital</td><td>0,1%</td><td><b>2,5%</b></td><td>0,5%</td><td>0,2%</td></tr>
<tr><td>Luxație congenitală de șold</td><td>0,2%</td><td><b>0,5%</b> *</td><td>0,6%</td><td>0,4%</td></tr>
</table></div>
<p style="font-size:14px;color:var(--muted)">* Cursul tipărește 0,5% pentru rudele de gradul I la luxația de șold, mai puțin decât la gradul II (0,6%), ceea ce contrazice regula 4. Datele clasice de familie (Carter) din care provine tabelul dau ~5%; probabil o virgulă greșită.</p>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Riscul relativ față de populație">
${(() => {
  const d = [["DLP", [0.1, 4, 0.6, 0.3], "fA"], ["Picior strâmb", [0.1, 2.5, 0.5, 0.2], "fP"], ["Luxație de șold*", [0.2, 5, 0.6, 0.4], "fC"]];
  const X = (i) => 140 + i * 160, Y = (v) => 210 - Math.log10(v / 0.05) / Math.log10(100) * 180;
  let s = [0.1, 1, 5].map((v) => `<line x1="120" y1="${Y(v)}" x2="660" y2="${Y(v)}" class="sm" stroke-dasharray="3 4"/><text x="112" y="${Y(v) + 4}" text-anchor="end" class="tm" style="font-size:11px">${String(v).replace(".", ",")}%</text>`).join("");
  ["populație", "gradul I", "gradul II", "gradul III"].forEach((t, i) => (s += `<text x="${X(i)}" y="238" text-anchor="middle" class="ti b" style="font-size:12px">${t}</text>`));
  d.forEach(([n, v, c], k) => {
    const cls = c.replace("f", "s");
    s += `<path d="${v.map((x, i) => `${i ? "L" : "M"}${X(i)} ${Y(x).toFixed(1)}`).join(" ")}" fill="none" class="${cls}" stroke-width="2.5"/>`;
    v.forEach((x, i) => (s += `<circle cx="${X(i)}" cy="${Y(x)}" r="5" class="${c}"/>`));
    s += `<text x="${X(3) + 14}" y="${Y(v[3]) + 4 + [0, 14, -14][k]}" class="ti b" style="font-size:12px">${n}</text>`;
  });
  return s;
})()}
</svg>
<figcaption><b>Tabelul XXVI pe scară logaritmică.</b> Saltul mare este de la populație la rudele de gradul I; apoi riscul scade rapid. *Pentru luxația de șold s-a folosit valoarea de 5% (vezi nota).</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un cuplu are deja doi copii cu despicătură labio-palatină. Ce risc are a treia sarcină?</summary><div>10–12% (față de 4% după un singur copil afectat).</div></details>
</div>`
},
{
id: "dlp", titlu: "Despicăturile labio-palatine (Tabelele XXVII, XXVIII)", pag: "215–221", emery: "cap. 16", acopera: ["c11-r08", "c11-r10", "c11-r11"],
html: `
<p>Cele mai frecvente anomalii congenitale faciale: <b>1/700–1/1.000</b> nou-născuți (Asia 1/300, Europa 1/1.000, Africa 1/1.500). Mai frecvente la băieți (F:M = 1:2) și pe <b>partea stângă</b> (2:1 în despicăturile labiale unilaterale). Apar prin lipsa de fuziune a mugurilor faciali în <b>zilele 35–37</b> de dezvoltare.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Fuziunea mugurilor faciali și despicătura labială">
${(() => {
  const fata = (x, ok, t) => {
    let s = `<ellipse cx="${x}" cy="150" rx="120" ry="120" class="fcard si" stroke-width="1.4"/>`;
    s += `<ellipse cx="${x - 50}" cy="90" rx="14" ry="10" class="fline"/><ellipse cx="${x + 50}" cy="90" rx="14" ry="10" class="fline"/>`;
    s += `<path d="M${x - 70} 150 Q${x - 40} 120 ${x - 22} 150 L${x - 22} 190 Q${x - 60} 200 ${x - 90} 185Z" class="fC" opacity=".8"/>`;
    s += `<path d="M${x + 70} 150 Q${x + 40} 120 ${x + 22} 150 L${x + 22} 190 Q${x + 60} 200 ${x + 90} 185Z" class="fC" opacity=".8"/>`;
    s += `<path d="M${x - 22} 125 Q${x} 115 ${x + 22} 125 L${x + 22} 192 Q${x} 200 ${x - 22} 192Z" class="fP" opacity=".8"/>`;
    if (!ok) s += `<rect x="${x - 34}" y="150" width="14" height="48" class="fbg"/><path d="M${x - 34} 150 v48 M${x - 20} 150 v48" class="sA" stroke-width="2"/>`;
    s += `<text x="${x}" y="292" text-anchor="middle" class="${ok ? "tok" : "tw2"} b">${t}</text>`;
    return s;
  };
  let s = fata(200, true, "fuziune normală") + fata(560, false, "despicătură labială stângă");
  s += `<text x="200" y="22" text-anchor="middle" class="ta b" style="font-size:12px">mugurele nazal medial (violet)</text><text x="380" y="150" text-anchor="middle" class="tw2" style="font-size:12px">mugurii maxilari</text><text x="380" y="166" text-anchor="middle" class="tw2" style="font-size:12px">(galben)</text>`;
  return s;
})()}
</svg>
<figcaption><b>Buza superioară se formează din trei muguri</b>: mugurele nazal medial (porțiunea centrală, filtrul) și cei doi muguri maxilari. Dacă fuziunea nu are loc pe o parte, apare despicătura labială unilaterală. Embriologia este simplificată; schemă proprie.</figcaption>
</figure>
[[img:despicatura|<b>Despicătură labială și palatină</b>, înainte și după corecția chirurgicală.]]
<div class="tw"><table>
<tr><th>Tip</th><th>Ce este</th><th>Date din curs</th></tr>
<tr><td><b>Despicătura labială</b> (cheiloschizis)</td><td>lipsă de substanță doar la buza superioară; unilaterală (80%) sau bilaterală; completă (până la nări și palat) sau incompletă</td><td>60–70% băieți; partea stângă în 60%</td></tr>
<tr><td><b>Despicătura palatină</b> (palatoschizis)</td><td>lipsa fuziunii mugurilor palatini; incompletă (palat moale sau dur) sau completă</td><td>izolată în peste 50% din cazuri</td></tr>
<tr><td>Labială ± palatină</td><td>2/3 din total; izolate în ~70%</td><td>Frecvențe: labiale 20–30%, palatine 30–40%, labio-palatine 35–55%</td></tr>
</table></div>
<p><b>Consecințele despicăturii palatine:</b> dificultăți de alimentație (tetine speciale, risc de aspirație), tulburări de fonație, infecții sinusale și otite (trompa lui Eustachio funcționează prost).</p>
<h3>Etiologie</h3>
<div class="pasi">
<div><b>Izolate, non-sindromice</b>~70%; sporadice; model multifactorial cu prag; ponderea genetică mai mare în formele labio-palatine</div>
<div><b>Familiale</b>transmitere mendeliană, frecvent AD: <i>MSX1</i> (~2%, cu anomalii dentare); <i>TBX22</i> (legată de X)</div>
<div><b>Sindromice</b>2–10% din DLP și 20–50% din DP; peste 300 de sindroame: monogenice, cromozomiale (Patau, DiGeorge 22q11.2), multifactoriale (secvența Pierre Robin)</div>
</div>
<p><b>Gene de susceptibilitate pentru formele izolate:</b> <i>IRF6</i> (mutat în sindromul <b>Van der Woude</b>, AD: despicături + <b>fosete ale buzei inferioare</b> + hipodonție; variantele comune ale aceleiași gene cresc riscul formelor non-sindromice), <i>MAFB</i> (SNP-uri asociate: rs13041247 în populația europeană, rs11696257 în cea asiatică), <i>TGFA</i>, <i>TGFB</i>, <i>MSX1</i>, <i>PVRL1</i>.</p>
<p><b>Teratogeni:</b> deficit de acid folic, hipervitaminoza A, anticonvulsivante (fenitoină, valproat), talidomidă, alcool, fumat, dioxină, hipoxie maternă, nitrați, obezitate maternă. <b>Profilaxie:</b> acid folic 3 luni înainte și după concepție + evitarea factorilor de risc: riscul de recurență scade până la ~1%. <b>Prenatal:</b> ecografia vede despicătura labială, mai greu pe cea palatină.</p>
<h3>Tabelul XXVII. Sindroame cu DLP și gena identificată (verificat pe scanare)</h3>
<div class="tw"><table>
<tr><th>Boala</th><th>Gena</th><th>Sindrom</th></tr>
<tr><td rowspan="7"><b>DL ± DP</b></td><td><i>EFNB1</i></td><td>sindrom cranio-fronto-nazal</td></tr>
<tr><td><i>ESCO2</i></td><td>sindrom Roberts</td></tr>
<tr><td><i>GLI2</i></td><td>holoprozencefalie</td></tr>
<tr><td><i>GLI3</i></td><td>sindrom oro-facio-digital</td></tr>
<tr><td><i>IRF6</i></td><td>Van der Woude</td></tr>
<tr><td><i>PHF8</i></td><td>retard mintal legat de X cu DL/DP</td></tr>
<tr><td><i>PVRL1</i></td><td>displazie ectodermală cu DL/DP</td></tr>
<tr><td rowspan="2"><b>DL</b></td><td><i>OFD1</i></td><td>sindrom oro-facio-digital tip I</td></tr>
<tr><td><i>MID1</i></td><td>sindrom Opitz G/BBB legat de X (XLOS)</td></tr>
<tr><td rowspan="11"><b>DP</b></td><td><i>BCOR</i></td><td>sindrom oculo-facio-cardio-dental</td></tr>
<tr><td><i>CHD7</i></td><td>sindrom CHARGE</td></tr>
<tr><td><i>COL2A1</i> · <i>COL11A1</i> · <i>COL11A2</i></td><td>sindrom Stickler tip 1 · 2 · 3</td></tr>
<tr><td><i>DHCR7</i></td><td>sindrom Smith–Lemli–Opitz</td></tr>
<tr><td><i>EFNB1</i></td><td>sindrom cranio-fronto-nazal (apare de două ori în curs)</td></tr>
<tr><td><i>FGFR1</i></td><td>sindrom Kallmann</td></tr>
<tr><td><i>FGFR2</i></td><td>sindrom Crouzon; sindrom Apert</td></tr>
<tr><td><i>TBX1</i></td><td>sindrom DiGeorge</td></tr>
<tr><td><i>SOX9</i></td><td>Pierre Robin</td></tr>
<tr><td><i>PIEZO2</i></td><td>sindrom Gordon (artrogripoză)</td></tr>
</table></div>
<h3>Tabelul XXVIII. Riscul genetic în familiile cu DL/P izolate</h3>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Riscul în familiile cu despicături izolate">
${[["Rude gradul I · 1 caz", 4, "4%", "fA"], ["Rude gradul I · ≥2 cazuri", 11, "10–12%", "fA"], ["Rude gradul II", 0.6, "0,6%", "fC"], ["Rude gradul III", 0.3, "0,3%", "fG"], ["Populația generală", 0.1, "0,1%", "fline"]].map(([t, v, l, c], i) => `<text x="230" y="${36 + i * 40}" text-anchor="end" class="ti b">${t}</text><rect x="244" y="${20 + i * 40}" width="${Math.max(v * 40, 4)}" height="26" rx="5" class="${c}"/><text x="${252 + Math.max(v * 40, 4)}" y="${38 + i * 40}" class="ti b">${l}</text>`).join("")}
</svg>
<figcaption><b>Tabelul XXVIII</b> (curs, p. 221), ca bare la aceeași scară.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un copil are despicătură labială și fosete pe buza inferioară; tatăl are aceleași fosete. Ce sindrom și ce transmitere?</summary><div>Sindromul Van der Woude (IRF6), autozomal dominant; riscul pentru frați este 50%, nu cel empiric multifactorial.</div></details>
<details class="q"><summary>De ce contează dacă despicătura este izolată sau sindromică?</summary><div>Pentru formele izolate se folosește riscul empiric (ex. 4%); pentru cele sindromice riscul depinde de cauză (monogenică 25–50%, cromozomială etc.).</div></details>
</div>`
},
{
id: "anomalii", titlu: "Anomaliile congenitale (Tabelul XXIX, Figura 26)", pag: "221–229", emery: "cap. 16", acopera: ["c11-r12", "c11-r13"],
html: `
<p><b>Congenital</b> = prezent la naștere, chiar dacă e descoperit mai târziu (OMS, 1972). Anomaliile congenitale apar la <b>3–5%</b> din nou-născuți; ~25% din copiii afectați mor în primul an, ~20% rămân cu handicap major, restul au prognostic bun prin chirurgie.</p>
<div class="tw"><table>
<tr><th>Criteriu</th><th>Clase</th></tr>
<tr><td>Incidență</td><td>comune (&gt;1‰, ex. DLP) · moderate (0,1–1‰) · rare (0,01–0,1‰) · foarte rare (&lt;0,01‰)</td></tr>
<tr><td>Severitate</td><td><b>majore</b>: letale (anencefalie, agenezie renală bilaterală), grave neletale (omfalocel, focomelie), medii (sindactilie, testicul necoborât) · <b>minore</b> (Tabelul XXIX)</td></tr>
<tr><td>Momentul</td><td>prenatal: săpt. 2–4 → malformații multiple; săpt. 5–8 → malformații izolate · perinatal (hipoxie) · postnatal (ex. Marfan)</td></tr>
</table></div>
<h3>Anomaliile minore (Tabelul XXIX)</h3>
<p>Fără consecințe medicale sau estetice serioase; unele dispar cu creșterea. Prezente la ~15% din nou-născuți (20–35% la prematuri și dismaturi). <b>Peste 3 anomalii minore</b> cresc probabilitatea unei anomalii majore asociate; unele sindroame sunt recunoscute după combinația de anomalii minore.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Anomaliile minore pe regiuni">
${[["Cap și față", ["occiput turtit", "tubercul darwinian", "urechi jos inserate", "epicantus", "iris pestriț", "rădăcină nazală turtită", "filtru scurt / lung"], "fP"], ["Trunchi și piele", ["gropiță sacrată", "hemangioame", "mameloane supranumerare", "hernie ombilicală"], "fG"], ["Membre", ["pliu palmar unic", "cubitus valgus", "clinodactilie", "sindactilie II–III la picior"], "fC"]].map(([t, l, c], i) => `<rect x="${20 + i * 246}" y="16" width="230" height="222" rx="12" class="fcard si" stroke-width="1"/><rect x="${20 + i * 246}" y="16" width="230" height="38" rx="12" class="${c}"/><text x="${135 + i * 246}" y="41" text-anchor="middle" ${c === "fC" ? 'fill="#1f2a37"' : 'fill="#fff"'} style="font-weight:800">${t}</text>${l.map((x, j) => `<text x="${40 + i * 246}" y="${80 + j * 22}" class="ti" style="font-size:12.5px">• ${x}</text>`).join("")}`).join("")}
</svg>
<figcaption><b>Cele 15 anomalii minore din Tabelul XXIX</b>, grupate pe regiuni.</figcaption>
</figure>
<h3>Clasificarea patogenică (Spranger, 1982) — Figura 26</h3>
<figure>
<svg viewBox="0 0 760 310" role="img" aria-label="Malformație, disrupție, deformare, displazie">
${(() => {
  const vas = (x, extra) => `<path d="M${x - 30} 70 Q${x - 50} 110 ${x - 40} 150 Q${x - 30} 190 ${x} 196 Q${x + 30} 190 ${x + 40} 150 Q${x + 50} 110 ${x + 30} 70Z" ${extra}/>`;
  let s = "";
  const xs = [90, 240, 390, 540, 690];
  s += vas(xs[0], 'class="fG" opacity=".8"') + `<text x="${xs[0]}" y="40" text-anchor="middle" class="tok b">Normal</text>`;
  s += `<path d="M${xs[1] - 30} 70 Q${xs[1] - 60} 120 ${xs[1] - 40} 150 Q${xs[1] - 20} 196 ${xs[1] + 10} 190 Q${xs[1] + 22} 160 ${xs[1] + 6} 130 Q${xs[1] + 40} 110 ${xs[1] + 30} 70Z" class="fA" opacity=".8"/><text x="${xs[1]}" y="40" text-anchor="middle" class="tw2 b">Malformație</text>`;
  s += vas(xs[2], 'class="fG" opacity=".8"') + `<path d="M${xs[2] + 10} 150 L${xs[2] + 50} 150 L${xs[2] + 50} 200 L${xs[2] + 10} 200Z" class="fbg"/><path d="M${xs[2] + 8} 148 l8 10 l-8 10 l8 10 l-8 10 l8 12" fill="none" class="sA" stroke-width="2"/><text x="${xs[2]}" y="40" text-anchor="middle" class="tw2 b">Disrupție</text>`;
  s += `<path d="M${xs[3] - 30} 70 Q${xs[3] - 70} 120 ${xs[3] - 50} 160 Q${xs[3] - 30} 186 ${xs[3]} 190 Q${xs[3] + 20} 186 ${xs[3] + 22} 150 Q${xs[3] + 26} 110 ${xs[3] + 30} 70Z" class="fG" opacity=".8"/><path d="M${xs[3] + 48} 130 h-14" class="sA" stroke-width="3"/><path d="M${xs[3] + 34} 130 l8 -6 v12z" class="fA"/><text x="${xs[3]}" y="40" text-anchor="middle" class="tw2 b">Deformare</text>`;
  s += vas(xs[4], 'class="fG" opacity=".35"') + Array.from({ length: 26 }, (_, i) => `<circle cx="${xs[4] - 26 + (i % 5) * 13 + (Math.floor(i / 5) % 2) * 6}" cy="${84 + Math.floor(i / 5) * 21}" r="${3 + (i * 7 % 4)}" class="fA" opacity=".8"/>`).join("") + `<text x="${xs[4]}" y="40" text-anchor="middle" class="tw2 b">Displazie</text>`;
  const sub = [["", ""], ["formare anormală", "primar, intrinsec"], ["structură normală", "distrusă secundar"], ["structură normală", "comprimată mecanic"], ["țesut organizat", "anormal"]];
  sub.forEach(([a, b], i) => (s += `<text x="${xs[i]}" y="226" text-anchor="middle" class="ti" style="font-size:12px">${a}</text><text x="${xs[i]}" y="244" text-anchor="middle" class="tm" style="font-size:11px">${b}</text>`));
  s += `<text x="380" y="276" text-anchor="middle" class="ta b" style="font-size:12px">embriopatii (primele 8 săptămâni, defect primar): malformație, displazie</text><text x="380" y="298" text-anchor="middle" class="tin b" style="font-size:12px">fetopatii (a doua parte a sarcinii, defect secundar): disrupție, deformare</text>`;
  return s;
})()}
</svg>
<figcaption><b>Figura 26 redesenată:</b> patru tipuri de eroare de morfogeneză, aplicate aceluiași organ schematic.</figcaption>
</figure>
<div class="tw"><table>
<tr><th></th><th>Malformație</th><th>Disrupție</th><th>Deformare</th><th>Displazie</th></tr>
<tr><td>Mecanism</td><td>morfogeneză anormală primară, intrinsecă, precoce (diferențiere incompletă sau anormală)</td><td>distrugere secundară, extrinsecă, tardivă a unei structuri normal formate</td><td>forțe mecanice anormale pe o structură normală</td><td>organizare celulară anormală a unui țesut (dishistiogeneză)</td></tr>
<tr><td>Exemple</td><td>DSV, sindactilie, polidactilie, DLP</td><td>amputații digitale (bride amniotice), atrezii, anencefalie prin hipertermie</td><td>picior strâmb prin oligohidramnios, artrogripoză</td><td>localizate: hemangioame, pete café-au-lait; generalizate: displazii osoase, ectodermale</td></tr>
<tr><td>Cauze</td><td>multifactorial (izolate); cromozomial, monogenic, teratogen (multiple)</td><td><b>niciodată genetice</b>: teratogeni, bride, factori vasculari, hipertermie</td><td>uter mic/malformat, gemeni, oligohidramnios; intrinsec: imobilitate fetală</td><td>mai ales <b>monogenice</b>: ecto-, endo-, mezodermatoze</td></tr>
<tr><td>Recurență</td><td>crescută</td><td>foarte mică</td><td>foarte mică (cauze extrinseci)</td><td><b>25–50%</b></td></tr>
<tr><td>Prognostic</td><td>adesea fără tratament</td><td>chirurgie complexă</td><td>bun, reversibil</td><td>variabil</td></tr>
</table></div>
<h3>Clasificarea clinică</h3>
<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="Clasificarea clinică a anomaliilor congenitale">
${(() => {
  const nod = (x, y, t, s2, c, w = 170) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="52" rx="12" class="${c}"/><text x="${x}" y="${y + 23}" text-anchor="middle" ${c.startsWith("fcard") ? 'class="ti b"' : 'fill="#fff" style="font-weight:800"'}>${t}</text><text x="${x}" y="${y + 41}" text-anchor="middle" ${c.startsWith("fcard") ? 'class="tm"' : 'fill="#fff"'} style="font-size:11px">${s2}</text>`;
  let s = nod(380, 10, "Anomalii congenitale", "", "fP", 220);
  s += `<path d="M330 62 C300 90 200 90 190 104 M430 62 C460 90 560 90 570 104" fill="none" class="si" stroke-width="1.6"/>`;
  s += nod(190, 104, "IZOLATE (2/3)", "o singură eroare, multifactorial", "fG", 260) + nod(570, 104, "MULTIPLE (1/3)", "erori multiple, organe diferite", "fA", 260);
  s += `<path d="M150 156 V190 M190 156 V190 M230 156 V190" class="si" stroke-width="1.4"/>`;
  s += nod(80, 190, "unice", "ex. DSV", "fcard si", 140) + nod(190, 260, "complexe", "DSA + DSV", "fcard si", 140) + nod(300, 190, "secvențe", "1 defect → cascadă", "fcard si", 150);
  s += `<path d="M500 156 V190 M570 156 V260 M640 156 V190" class="si" stroke-width="1.4"/>`;
  s += nod(470, 190, "sindroame", "etiologie comună", "fcard si", 140) + nod(570, 270, "asocieri", "VACTERL", "fcard si", 140) + nod(680, 190, "ACM", "combinații întâmplătoare", "fcard si", 150);
  return s;
})()}
</svg>
<figcaption><b>Clasificarea clinică</b> din curs (p. 223, 227–229). Secvențele par multiple, dar pornesc de la un singur defect.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Secvențele Pierre Robin și Potter">
<defs><marker id="q1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${(() => {
  const lant = (y, el, tit, sub) => {
    let s = `<text x="20" y="${y - 12}" class="ti b">${tit}</text><text x="740" y="${y - 12}" text-anchor="end" class="tm" style="font-size:11.5px">${sub}</text>`;
    el.forEach(([t, c], i) => {
      const x = 20 + i * 184;
      s += `<rect x="${x}" y="${y}" width="160" height="64" rx="12" class="${c}"/>` + t.split("|").map((r, j) => `<text x="${x + 80}" y="${y + 28 + j * 18}" text-anchor="middle" ${c === "fcard si" ? 'class="ti b"' : 'fill="#fff" style="font-weight:800"'} style="font-size:12px">${r}</text>`).join("");
      if (i < el.length - 1) s += `<path d="M${x + 162} ${y + 32} h18" class="si" stroke-width="1.8" marker-end="url(#q1)"/>`;
    });
    return s;
  };
  let s = lant(36, [["hipoplazie|mandibulară", "fA"], ["limba rămâne|sus (glosoptoză)", "fcard si"], ["palatul nu|se închide", "fcard si"], ["despicătură palatină|(80%), obstrucție", "fcard si"]], "Secvența malformativă Pierre Robin", "1/8.500–1/14.000 · 40% izolată, 60% în sindroame");
  s += lant(170, [["oligohidramnios", "fA"], ["compresie|fetală", "fcard si"], ["dismorfism facial,|picior strâmb, LCȘ", "fcard si"], ["hipoplazie|pulmonară (fatală)", "fcard si"]], "Secvența deformativă Potter", "defect primar: lipsa lichidului amniotic");
  return s;
})()}
</svg>
<figcaption><b>Două secvențe din curs</b> (p. 227–228); a treia, disruptivă, este cea a bridelor amniotice (amputații digitale, encefalocel asimetric). LCȘ = luxație congenitală de șold.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Anomalii multiple</th><th>Definiție</th><th>Exemple din curs</th></tr>
<tr><td><b>Sindrom</b></td><td>combinație specifică de anomalii majore și minore, cu etiologie comună, la pacienți din familii diferite</td><td>cromozomiale (Down, Turner), microdeleții (Williams, Prader–Willi, DiGeorge), monogenice (Marfan, Rett), teratogene (alcoolism fetal, rubeolă, toxoplasmoză), necunoscute (Cornelia de Lange)</td></tr>
<tr><td><b>Asociere</b></td><td>malformații care apar împreună mai des decât ar prezice întâmplarea; denumite prin acronime</td><td><b>VATER</b>: Vertebrale, Anale, Traheo-Esofagiene, Renale; + cardiace, membre (Limbs), arteră ombilicală unică (Single) → VACTERLS</td></tr>
<tr><td><b>ACM</b></td><td>combinații întâmplătoare de anomalii frecvente, fără diagnostic specific</td><td>se preferă „ACM + retard mintal” în loc de „sindrom plurimalformativ”</td></tr>
</table></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un nou-născut are amputații digitale asimetrice și benzi de constricție. Ce tip de anomalie și ce risc de recurență?</summary><div>Disrupție prin bride amniotice; nu este genetică, riscul de recurență este foarte mic.</div></details>
<details class="q"><summary>Prin ce diferă o secvență de un sindrom?</summary><div>Secvența pornește de la un singur defect primar care produce în cascadă celelalte anomalii; sindromul are mai multe defecte primare cu aceeași cauză.</div></details>
</div>`
}
]
});
})();
