/* LP VIII — Cromatina sexuală (LP p. 86–96) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf8)"/>`;
// nucleu de celulă bucală cu n corpusculi Barr lipiți de membrană
const nucleu = (cx, cy, r, n, et = "") => {
  let o = `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.6}" ry="${r * 1.25}" class="fcard sm" stroke-width=".8" opacity=".9"/><ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 0.86}" class="fP" opacity=".22"/><ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 0.86}" fill="none" class="sP" stroke-width="1.4"/>`;
  for (let i = 0; i < n; i++) { const t = -2.3 + i * 1.5, x = cx + (r - 4) * Math.cos(t), y = cy + (r * 0.86 - 4) * Math.sin(t); o += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="5.5" ry="3.6" transform="rotate(${(t * 57.3 + 90).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})" class="fP"/>`; }
  return o + (et ? `<text x="${cx}" y="${cy + r * 1.25 + 18}" text-anchor="middle" class="ti b" style="font-size:12.5px">${et}</text>` : "");
};
// neutrofil polilobat cu un apendice
const pmn = (cx, cy, tip) => {
  let o = `<circle cx="${cx}" cy="${cy}" r="42" class="fcard sm" stroke-width=".8"/>`;
  [[-16, -8], [2, -16], [16, 2], [-2, 14]].forEach(([dx, dy], i) => (o += `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="10" ry="8" class="fP" opacity=".75"/>` + (i ? `<line x1="${cx + [-16, 2, 16, -2][i - 1]}" y1="${cy + [-8, -16, 2, 14][i - 1]}" x2="${cx + dx}" y2="${cy + dy}" class="sP" stroke-width="2.5" opacity=".75"/>` : "")));
  const ax = cx + 16, ay = cy + 2;
  if (tip === "A") o += `<line x1="${ax + 8}" y1="${ay + 4}" x2="${ax + 20}" y2="${ay + 18}" class="sP" stroke-width="1.2"/><circle cx="${ax + 23}" cy="${ay + 21}" r="5" class="fP"/>`;
  if (tip === "B") o += `<circle cx="${ax + 12}" cy="${ay + 9}" r="5" class="fP"/>`;
  if (tip === "mic") o += `<line x1="${ax + 8}" y1="${ay + 4}" x2="${ax + 18}" y2="${ay + 16}" class="sP" stroke-width="1"/><circle cx="${ax + 20}" cy="${ay + 18}" r="2.6" class="fP" opacity=".6"/>`;
  if (tip === "racheta") o += `<line x1="${ax + 8}" y1="${ay + 4}" x2="${ax + 19}" y2="${ay + 17}" class="sP" stroke-width="1.2"/><circle cx="${ax + 23}" cy="${ay + 21}" r="5.2" fill="var(--card)" class="sP" stroke-width="2"/>`;
  if (tip === "lob") o += `<ellipse cx="${ax + 13}" cy="${ay + 12}" rx="7.5" ry="6" class="fP" opacity=".75"/>`;
  return o;
};
// tabelul 7: cariotip → corpusculi Barr
const T7 = [["46,XX", "F", 2, 0, 1], ["46,XY", "M", 1, 1, 0], ["45,X", "F", 1, 0, 0], ["47,XXX", "F", 3, 0, 2], ["47,XXY", "M", 2, 1, 1], ["47,XYY", "M", 1, 2, 0], ["48,XXXX", "F", 4, 0, 3], ["48,XXXY", "M", 3, 1, 2], ["48,XXYY", "M", 2, 2, 1], ["49,XXXXX", "F", 5, 0, 4], ["49,XXXXY", "M", 4, 1, 3]];

GHID.capitol({
id: "lp08",
intro: `<p class="lead">Înainte de cariotip, sexul cromozomial se citea direct pe nucleii în interfază. Un X în plus se vede ca un corpuscul închis la culoare (<b>corpusculul Barr</b>), iar Y ca un punct fluorescent (<b>corpusculul F</b>). Testele sunt azi istorice, înlocuite de FISH și metode moleculare, dar logica lor (X inactivat, Y heterocromatic) rămâne de bază.</p>
<figure>
<svg viewBox="0 0 760 252" role="img" aria-label="Cele două tipuri de cromatină sexuală">
${nucleu(130, 110, 56, 1, "")}
<text x="130" y="210" text-anchor="middle" class="ti b">Cromatina X (corpuscul Barr)</text>
${fo(10, 214, 260, 36, "X inactivat, heterocromatină facultativă", "text-align:center")}
<rect x="410" y="40" width="160" height="140" rx="70" fill="#11161f"/><circle cx="472" cy="96" r="5" fill="#dfff6b"/><circle cx="510" cy="130" r="3" fill="#7f9440" opacity=".6"/>
<text x="490" y="210" text-anchor="middle" class="ti b">Cromatina Y (corpuscul F)</text>
${fo(370, 214, 240, 36, "heterocromatina Yq12, fluorescentă", "text-align:center")}
${fo(620, 40, 130, 160, "Barr: colorație obișnuită, microscop optic.<br><br>F: quinacrină, microscop cu fluorescență.")}
</svg>
<figcaption><b>Două mecanisme diferite:</b> la femeie, un X întreg e compactat și inactivat (facultativ, poate fi oricare dintre X); la bărbat, se vede heterocromatina constitutivă a brațului lung al lui Y. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "cromatina-x", titlu: "Cromatina X pe frotiul de mucoasă bucală", pag: "86–87", emery: "cap. 6, p. 82–83", acopera: ["lp08-r01", "lp08-r02", "lp08-r04"], curs: ["c01/lyon"],
html: `
<p>Cromatina X se poate vedea în aproape orice țesut feminin: mucoasă bucală, neutrofile, bulb pilos, amniocite, biopsii. În practică s-a folosit <b>frotiul de mucoasă bucală</b>: recoltare simplă, nedureroasă, nuclei mari.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Proprietățile corpusculului Barr">
${nucleu(140, 120, 70, 1)}
<line x1="104" y1="70" x2="40" y2="34" class="sm" stroke-width="1"/><text x="20" y="28" class="ta b" style="font-size:12px">corpuscul Barr, lipit de membrană</text>
<circle cx="150" cy="128" r="9" class="fP" opacity=".5"/><line x1="150" y1="138" x2="130" y2="226" class="sm" stroke-width="1"/><text x="20" y="242" class="tm" style="font-size:11.5px">nucleol / cromocentru central: nu se numără</text>
${[["Poziție", "de obicei pe fața internă a membranei nucleare; se numără <b>doar</b> cei lipiți de membrană (evită confuzia cu nucleolul)"], ["Formă", "ovală sau plan-convexă; uneori triunghiulară, sferică, bipartită"], ["Mărime", "~1 ± 0,3 µm; mai mare la i(Xq), mai mică la del(X), r(X), i(Xp)"], ["Frecvență", "teoretic în toate celulele feminine; în practică doar în <b>25–35%</b> din nuclei"], ["Colorație", "bazofil, intens colorat: hematoxilină, orceină acetică, cresil violet, albastru de toluidină"]].map(([t, d], i) => `<text x="330" y="${26 + i * 56}" class="ti b" style="font-size:12.5px">${t}</text>${fo(330, 30 + i * 56, 420, 48, d)}`).join("")}
</svg>
<figcaption><b>Cele cinci proprietăți din carte.</b> Frecvența mică în practică (25–35%) vine din nucleii nepotriviți pentru analiză, din excluderea corpusculilor centrali și din decondensarea X-ului în unele faze. Schemă proprie.</figcaption>
</figure>
[[gal:barr|<b>Corpusculul Barr la microscop</b> (săgeata): masă de cromatină densă lipită de membrana nucleară, într-o celulă feminină.;;barr_bioart|<b>Schemă</b>: X-ul inactiv compactat formează corpusculul Barr.]]`
},
{
id: "lyon", titlu: "Originea cromatinei X: ipoteza Lyon", pag: "87–89", emery: "cap. 6, p. 82–83", acopera: ["lp08-r03", "lp08-r05"], curs: ["c01/lyon"],
html: `
<p>Mary Lyon (1961): la femeie, unul dintre cei doi X se inactivează <b>devreme</b> în embrion, <b>la întâmplare</b> (matern într-o celulă, patern în alta), independent în fiecare celulă și <b>definitiv</b> pentru toți descendenții acelei celule. Femeia e deci un <b>mozaic</b> pentru genele de pe X. Mecanismul molecular (ARN-ul <i>XIST</i>, metilarea) e în <a href="#/c01/lyon">ghidul de curs</a>.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Inactivarea întâmplătoare și definitivă a cromozomului X">${DEFS}
${(() => {
  const cel = (x, y, r, m) => `<circle cx="${x}" cy="${y}" r="${r}" class="fcard sm" stroke-width="1"/>` + (m === "?" ? `<rect x="${x - 8}" y="${y - 7}" width="6" height="16" rx="3" class="fA"/><rect x="${x + 2}" y="${y - 7}" width="6" height="16" rx="3" class="fT"/>` : `<circle cx="${x}" cy="${y}" r="${r * 0.55}" class="${m === "m" ? "fT" : "fA"}" opacity=".85"/>`);
  let o = cel(70, 150, 26, "?") + `<text x="70" y="196" text-anchor="middle" class="ti b" style="font-size:12px">zigot</text><text x="70" y="212" text-anchor="middle" class="tm" style="font-size:11px">ambii X activi</text>`;
  o += sag(100, 150, 150, 150);
  const pos = [[190, 90], [190, 150], [190, 210], [240, 120], [240, 180]], tip = ["p", "m", "p", "m", "m"];
  pos.forEach(([x, y], i) => (o += cel(x, y, 18, tip[i])));
  o += `<text x="215" y="250" text-anchor="middle" class="ti b" style="font-size:12px">embrion timpuriu</text><text x="215" y="266" text-anchor="middle" class="tm" style="font-size:11px">fiecare celulă alege</text>`;
  o += sag(270, 150, 320, 150);
  // țesut adult: plasturi clonali
  let k = 0; const R = [[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [1, 1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1, 0]];
  R.forEach((row, i) => row.forEach((v, j) => (o += `<rect x="${340 + j * 26}" y="${88 + i * 26}" width="24" height="24" rx="5" class="${v ? "fT" : "fA"}" opacity=".85"/>`)));
  o += `<text x="444" y="250" text-anchor="middle" class="ti b" style="font-size:12px">țesut adult: plasturi clonali</text>`;
  o += `<rect x="580" y="96" width="16" height="16" rx="3" class="fA"/><text x="602" y="109" class="ti" style="font-size:12px">X matern activ</text><rect x="580" y="124" width="16" height="16" rx="3" class="fT"/><text x="602" y="137" class="ti" style="font-size:12px">X patern activ</text>`;
  o += fo(580, 152, 170, 100, "Alegerea e la întâmplare; după aceea, fiecare celulă își transmite alegerea tuturor descendenților.");
  o += `<text x="20" y="292" class="tm">Culoarea arată ce X a rămas activ; celălalt formează corpusculul Barr. Schemă proprie (figura 28 din carte).</text>`;
  return o;
})()}
</svg>
<figcaption><b>Patru trăsături: precoce, întâmplătoare, independentă, definitivă.</b> Rezultatul se vede direct la pisica „calico”, unde gena pentru culoarea blănii e pe X.</figcaption>
</figure>
[[img:calico|<b>Pisică calico</b>: plasturii portocalii și negri sunt clone de celule în care a rămas activ X-ul cu una sau cu cealaltă alelă. De aceea pisicile calico sunt aproape toate femele.]]
<h3>Consecințe pentru femeile heterozigote</h3>
<p>Proporția celulelor în care e activ X-ul cu alela mutantă variază la întâmplare. Dacă e inactivat preferențial X-ul mutant, femeia e sănătoasă; dacă rămâne activ în majoritatea celulelor, apar semne (<b>femei heterozigote simptomatice</b>): daltonism, hemofilie, distrofie Duchenne, deficit de G6PD (<a href="#/c10/hemofilie">ghidul de curs</a>).</p>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Distribuția proporției de celule cu X mutant activ la femeile heterozigote">
${(() => {
  // binomial pentru un număr mic de celule precursoare (n = 16) la momentul inactivării
  const n = 16, p = [], X0 = 80, W = 560, H = 140, Y0 = 180;
  let c = 1; for (let k = 0; k <= n; k++) { p.push(c / 2 ** n); c = c * (n - k) / (k + 1); }
  const mx = Math.max(...p);
  let o = "";
  p.forEach((v, k) => { const h = v / mx * H, x = X0 + k * W / (n + 1); o += `<rect x="${x + 2}" y="${Y0 - h}" width="${W / (n + 1) - 4}" height="${h}" rx="3" class="${k >= 13 ? "fT" : k <= 3 ? "fA" : "fP"}" opacity="${k >= 13 || k <= 3 ? 1 : .55}"/>`; });
  [0, 25, 50, 75, 100].forEach((v) => (o += `<text x="${X0 + v / 100 * (W - W / (n + 1)) + W / (n + 1) / 2}" y="${Y0 + 18}" text-anchor="middle" class="tm" style="font-size:11px">${v}%</text>`));
  o += `<text x="${X0 + W / 2}" y="${Y0 + 38}" text-anchor="middle" class="tm" style="font-size:11.5px">celule cu X-ul mutant activ</text>`;
  o += fo(650, 40, 105, 140, "<b style='color:var(--warn)'>dreapta</b>: inactivare deviată spre X-ul normal → femeie cu semne<br><br><b style='color:var(--accent)'>stânga</b>: protejată");
  return `<text x="20" y="22" class="ti b">Dacă alegerea se face în doar 16 celule precursoare</text>` + o;
})()}
</svg>
<figcaption><b>Întâmplarea produce extremele.</b> Cu puține celule la momentul inactivării, distribuția binomială dă un mic procent de femei cu peste 80% celule în care e activ X-ul mutant. Numărul real de precursori diferă de la țesut la țesut; graficul ilustrează doar principiul. Calcul propriu (distribuție binomială, n = 16, p = 0,5).</figcaption>
</figure>
<div class="capcana"><b>„Unul dintre X se inactivează total”: nu chiar</b>
<p>Aproximativ <b>15% dintre genele</b> X-ului inactiv scapă inactivării (plus regiunile pseudoautozomale, de ex. <i>SHOX</i>), iar alte ~10% scapă variabil. Aceste gene explică de ce 45,X (Turner) și 47,XXY (Klinefelter) au fenotip, deși „un singur X e activ” în ambele cazuri.</p></div>`
},
{
id: "numar", titlu: "Relația dintre numărul de X și numărul de corpusculi Barr", pag: "89–90", emery: "cap. 6, p. 83", acopera: ["lp08-r06", "lp08-r08"],
html: `
<div class="cheie"><b>Regula</b><p>Numărul de corpusculi Barr = numărul de cromozomi X − 1. Toți X suplimentari se inactivează; rămâne activ unul singur, indiferent de sex.</p></div>
<figure>
<svg viewBox="0 0 760 420" role="img" aria-label="Tabelul 7: cariotip, fenotip, număr de X și de corpusculi Barr">
${(() => {
  let o = ["Cariotip", "Fenotip", "X", "Y", "Corpusculi Barr", "Corpusculi F"].map((t, j) => `<text x="${[20, 160, 250, 300, 360, 560][j]}" y="22" class="tm b" style="font-size:12px">${t}</text>`).join("");
  T7.forEach(([k, f, x, y, b], i) => {
    const yy = 32 + i * 34;
    o += `<rect x="12" y="${yy}" width="736" height="30" rx="6" class="${f === "F" ? "fas" : "fis"}" opacity="${k.startsWith("46") ? 0.5 : 1}"/><text x="20" y="${yy + 20}" class="ti b" style="font-family:ui-monospace,monospace">${k}</text><text x="160" y="${yy + 20}" class="ti">${f === "F" ? "feminin" : "masculin"}</text><text x="256" y="${yy + 20}" class="ti b">${x}</text><text x="306" y="${yy + 20}" class="ti b">${y}</text>`;
    for (let j = 0; j < b; j++) o += `<ellipse cx="${372 + j * 24}" cy="${yy + 15}" rx="8" ry="5.5" class="fP"/>`;
    if (!b) o += `<text x="364" y="${yy + 20}" class="tm">0</text>`;
    for (let j = 0; j < y; j++) o += `<circle cx="${570 + j * 20}" cy="${yy + 15}" r="6" fill="#c6d83a" stroke="#556b2f" stroke-width="1"/>`;
    if (!y) o += `<text x="564" y="${yy + 20}" class="tm">0</text>`;
  });
  return o + `<text x="20" y="412" class="tm">Corpusculi Barr = X − 1 · corpusculi F = Y. Fenotipul masculin depinde doar de prezența lui Y.</text>`;
})()}
</svg>
<figcaption><b>Tabelul 7 din carte</b>, completat cu numărul de corpusculi F. Testul Barr singur nu distinge 46,XX de 47,XXY: amândouă au un corpuscul Barr. Combinat cu cromatina Y, da. Schemă proprie.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un nou-născut cu fenotip masculin are corpuscul Barr pozitiv. Ce bănuiești?</summary><div>Cel puțin doi X: cel mai probabil 47,XXY (Klinefelter). Se confirmă prin cariotip.</div></details>
<details class="q"><summary>O fată are test Barr negativ. Ce cariotipuri sunt posibile?</summary><div>45,X (Turner); 46,XY cu fenotip feminin (de ex. insensibilitate completă la androgeni); mozaic 45,X/46,XY. Doar cariotipul le separă.</div></details>
</div>`
},
{
id: "sange", titlu: "Cromatina X în neutrofile: apendicii nucleari", pag: "90–92", emery: "", acopera: ["lp08-r07", "lp08-r09"],
html: `
<p>Pe frotiul de sânge colorat May-Grünwald-Giemsa, cromatina X apare în neutrofile ca <b>apendice nuclear</b>. Se numără doar formele A și B; celelalte sunt capcane.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Apendicii nucleari ai neutrofilelor: cei care contează și cei care nu">
${(() => {
  const T = [["A", "„băț de tobă” (drumstick)", "nodul ~1,5 µm, mai închis decât nucleul, legat printr-un filament subțire", "tok"], ["B", "nodul sesil", "aceeași mărime și culoare, fixat direct pe nucleu, fără filament", "tok"], ["mic", "nodul mic", "< 1 µm, palid, cu filament: nu se numără", "tm"], ["racheta", "„rachetă de tenis”", "mărime ca A, dar centrul palid: nu se numără", "tm"], ["lob", "lob mic", "mai mare, contur neregulat, culoarea nucleului: nu se numără", "tm"]];
  return T.map(([t, n, d, c], i) => { const x = 80 + i * 150; return pmn(x, 80, t) + `<text x="${x}" y="150" text-anchor="middle" class="${c} b" style="font-size:12.5px">${i < 2 ? "Tip " + t : "✗"}</text><text x="${x}" y="168" text-anchor="middle" class="ti b" style="font-size:11.5px">${n}</text>` + fo(x - 70, 174, 140, 90, d, "text-align:center;font-size:11.5px"); }).join("");
})()}
</svg>
<figcaption><b>Ce se numără și ce nu.</b> Doar tipurile A și B corespund unui X inactiv. Neutrofilele cu 3–4 lobi sunt cele mai potrivite (lobularea crește frecvența apendicilor). Schemă proprie.</figcaption>
</figure>
<h3>Câte neutrofile trebuie numărate</h3>
<p>Frecvența medie la femeie: 1 apendice la 38 de neutrofile (variație între 1/6 și 1/98). Cartea cere: se numără până la <b>6 apendici</b> (rezultat pozitiv), iar pentru un rezultat negativ, cel puțin <b>500 de neutrofile</b> fără apendice. Calculul arată de ce 500:</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Probabilitatea de a nu vedea niciun apendice la o femeie, în funcție de numărul de neutrofile numărate">
${(() => {
  const X0 = 80, W = 560, Y0 = 230, H = 190, N = 600, X = (n) => X0 + n / N * W, Y = (p) => Y0 - p * H;
  let o = `<text x="20" y="22" class="ti b">Șansa ca o femeie normală să pară „negativă” (0 apendici)</text>`;
  [0, 0.25, 0.5, 0.75, 1].forEach((p) => (o += `<line x1="${X0}" y1="${Y(p)}" x2="${X0 + W}" y2="${Y(p)}" class="sm" stroke-dasharray="2 4" opacity=".5"/><text x="${X0 - 8}" y="${Y(p) + 4}" text-anchor="end" class="tm" style="font-size:11px">${p * 100}%</text>`));
  [0, 100, 200, 300, 400, 500, 600].forEach((n) => (o += `<text x="${X(n)}" y="${Y0 + 18}" text-anchor="middle" class="tm" style="font-size:11px">${n}</text>`));
  o += `<text x="${X0 + W / 2}" y="${Y0 + 38}" text-anchor="middle" class="tm" style="font-size:11.5px">neutrofile numărate</text>`;
  [[38, "sA", "frecvență medie 1/38"], [98, "sT", "frecvența cea mai mică, 1/98"]].forEach(([f, c, et], j) => {
    let d = ""; for (let n = 0; n <= N; n += 5) d += (n ? "L" : "M") + X(n).toFixed(1) + " " + Y(Math.pow(1 - 1 / f, n)).toFixed(1);
    o += `<path d="${d}" fill="none" class="${c}" stroke-width="2.6"/><line x1="${X(330)}" y1="${Y(0.92 - j * 0.12)}" x2="${X(360)}" y2="${Y(0.92 - j * 0.12)}" class="${c}" stroke-width="3"/><text x="${X(368)}" y="${Y(0.92 - j * 0.12) + 4}" class="ti b" style="font-size:12px">${et}</text>`;
  });
  const p500 = Math.pow(1 - 1 / 98, 500);
  o += `<line x1="${X(500)}" y1="${Y(1)}" x2="${X(500)}" y2="${Y0}" class="sm" stroke-width="1.4"/><text x="${X(500) + 6}" y="${Y(0.18)}" class="tw2 b" style="font-size:12px">500: ${(p500 * 100).toFixed(1).replace(".", ",")}% chiar</text><text x="${X(500) + 6}" y="${Y(0.18) + 16}" class="tw2 b" style="font-size:12px">în cazul cel mai rău</text>`;
  return o;
})()}
</svg>
<figcaption><b>De ce cel puțin 500.</b> Probabilitatea de a nu întâlni niciun apendice în n neutrofile este (1 − f)<sup>n</sup>. La frecvența medie, după 200 de celule riscul unui fals negativ e deja ~0,5%; la frecvența cea mai mică din carte, abia după 500 coboară sub 1%. Calcul propriu.</figcaption>
</figure>`
},
{
id: "cromatina-y", titlu: "Cromatina Y (corpusculul F)", pag: "92–93", emery: "cap. 3", acopera: ["lp08-r10"],
html: `
<p>Cromatina Y e aspectul în interfază al <b>heterocromatinei din cele 2/3 distale ale brațului lung al lui Y</b> (Yq12). Colorată cu <b>quinacrină</b>, se vede la microscopul cu fluorescență ca un punct strălucitor de ~0,25 µm: corpusculul F. Numărul de corpusculi F = <b>numărul de cromozomi Y</b>.</p>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Frecvența corpusculului F în diferite celule masculine">
${(() => {
  const D = [["Celule amniotice", 75, 85], ["Fibroblaști", 70, 80], ["Spermatozoizi", 40, 45], ["Mucoasă bucală", 25, 50]];
  let o = `<text x="20" y="22" class="ti b">În câte celule masculine se vede corpusculul F (%, după carte)</text>`;
  D.forEach(([n, a, b], i) => { const y = 42 + i * 40; o += `<text x="170" y="${y + 16}" text-anchor="end" class="ti">${n}</text><rect x="180" y="${y}" width="${b * 5}" height="24" rx="4" fill="#c6d83a" opacity=".45"/><rect x="180" y="${y}" width="${a * 5}" height="24" rx="4" fill="#9db02b"/><text x="${188 + b * 5}" y="${y + 16}" class="tm" style="font-size:12px">${a}–${b}%</text>`; });
  return o + `<text x="20" y="218" class="tm">La spermatozoizi, ~50% sunt teoretic Y-pozitivi (jumătate poartă X); frecvența observată se apropie de această valoare.</text>`;
})()}
</svg>
<figcaption><b>Frecvența depinde de țesut.</b> În 10–20% din nuclei se vede o structură dublă (<i>duplex</i>): cele două cromatide ale lui Yq după replicare (G2). Două corpuscule F <b>depărtate</b> înseamnă doi Y (47,XYY). Date din carte.</figcaption>
</figure>
<div class="capcana"><b>Un fals negativ posibil</b>
<p>Mărimea heterocromatinei Yq12 e un heteromorfism: unii bărbați normali au Yq foarte scurt și corpuscul F mic sau invizibil. Invers, un Y cu deleție a heterocromatinei poate păstra gena <i>SRY</i>. Testul arată heterocromatina, nu gena care determină sexul.</p></div>`
},
{
id: "indicatii", titlu: "Indicațiile și limitele testului cromatinei sexuale", pag: "93–94", emery: "cap. 6; cap. 20", acopera: ["lp08-r11"],
html: `
<div class="tw"><table>
<thead><tr><th>Indicația din carte</th><th>Ce se face astăzi</th></tr></thead>
<tbody>
<tr><td>Sexul fătului la o mamă purtătoare a unei boli legate de X (de ex. hemofilie)</td><td>ADN fetal liber din sângele matern (secvențe Y, <i>SRY</i>) din săptămâna 7–9, sau QF-PCR pe vilozități coriale; apoi diagnostic molecular direct al mutației, nu doar al sexului</td></tr>
<tr><td>Organe genitale ambigue la nou-născut</td><td>cariotip rapid sau FISH interfazic X/Y și QF-PCR (rezultat în 24–48 h), plus evaluare endocrină</td></tr>
<tr><td>Disgenezii gonadice (Turner, Klinefelter)</td><td>cariotip (cu analiza mozaicului) sau microarray</td></tr>
<tr><td>Medicină legală: sexul unei pete de sânge, fir de păr</td><td>PCR pentru gena amelogeninei (<i>AMELX/AMELY</i>) în profilul ADN</td></tr>
</tbody></table></div>
<h3>Limitele, chiar și pe vremea lui</h3>
<ul>
<li>e <b>subiectiv</b>, depinde de experiența examinatorului;</li>
<li>nu vede mozaicurile cu siguranță și nu spune nimic despre autozomi;</li>
<li>un rezultat nu are o singură explicație: Barr negativ la o fată poate fi 45,X, 46,XY sau 45,X/46,XY.</li>
</ul>
<div class="capcana"><b>Termeni depășiți în carte</b>
<p>„Stări intersexuale”, „pseudohermafroditism feminin/masculin” și „sindromul Morris” sunt termeni abandonați. Clasificarea actuală (consensul de la Chicago, 2006) vorbește de <b>diferențe/tulburări ale dezvoltării sexuale (DSD)</b>: DSD 46,XX (de ex. hiperplazia congenitală de suprarenală), DSD 46,XY (de ex. <b>insensibilitatea completă la androgeni</b>, fostul sindrom Morris) și DSD ale cromozomilor sexuali (45,X/46,XY, „disgenezia gonadică mixtă”). Vezi și <a href="#/lp01/fecundare">LP I</a>.</p></div>
<div class="emery"><b>Sexul fătului și etica</b>
<p>Determinarea sexului fătului e justificată doar medical (boală legată de X). Folosită pentru selecția sexului din motive nemedicale, e interzisă în multe țări; ghidurile de diagnostic prenatal o tratează ca problemă etică distinctă.</p></div>`
},
{
id: "tehnica", titlu: "Tehnicile: testul Barr, frotiul de sânge, cromatina Y", pag: "94–96", emery: "", acopera: ["lp08-r12", "lp08-r13", "lp08-r14"],
html: `
<h3>Testul Barr pe mucoasă bucală</h3>
<ol class="protocol">
<li><b>Recoltare</b><span class="de-ce">după clătirea gurii, se raclează fața internă a obrajilor cu o lamă rodată (la copii: fața internă a buzei). Primele celule raclate sunt degenerate și se aruncă. Minimum două frotiuri.</span></li>
<li><b>Fixare, 1 oră</b><span class="de-ce">alcool–eter 1:1 (Papanicolau) sau metanol–acid acetic 9:1: păstrează structura cromatinei.</span></li>
<li><b>Hidratare, apoi hidroliză acidă</b><span class="de-ce">HCl 5N, 10 minute: îndepărtează ARN-ul și accentuează contrastul cromatinei condensate.</span></li>
<li><b>Colorare</b><span class="de-ce">albastru de toluidină 1% sau cresil violet 1%.</span></li>
<li><b>Diferențiere, deshidratare, clarificare</b><span class="de-ce">alcool absolut, apoi xilol.</span></li>
<li><b>Examinare cu obiectiv de imersie</b><span class="de-ce">doar nuclei bine etalați, nesuprapuși, cu membrană intactă și cromatină fin dispersată; se numără corpusculii lipiți de membrană.</span></li>
</ol>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Interpretarea procentului de nuclei Barr-pozitivi">
<text x="20" y="22" class="ti b">Procentul de nuclei cu corpuscul Barr</text>
<rect x="40" y="40" width="${5 * 22}" height="40" class="fA" opacity=".85"/><rect x="${40 + 5 * 22}" y="40" width="${10 * 22}" height="40" class="fC"/><rect x="${40 + 15 * 22}" y="40" width="${15 * 22}" height="40" class="fP"/>
<text x="${40 + 2.5 * 22}" y="65" text-anchor="middle" style="fill:#fff" class="b">negativ</text><text x="${40 + 10 * 22}" y="65" text-anchor="middle" style="fill:#fff" class="b">limită</text><text x="${40 + 22.5 * 22}" y="65" text-anchor="middle" style="fill:#fff" class="b">pozitiv</text>
${[0, 5, 15, 30].map((v) => `<text x="${40 + v * 22}" y="98" text-anchor="middle" class="tm" style="font-size:11.5px">${v}%</text>`).join("")}
${fo(40, 110, 700, 56, "Între 5 și 15% se cer investigații suplimentare (mozaic?). Un rezultat care nu corespunde sexului aparent (Barr negativ la o femeie, pozitiv la un bărbat, doi corpusculi Barr) se confirmă prin repetare și citire independentă de un al doilea examinator.")}
</svg>
<figcaption><b>Pragurile din carte.</b> Femeile normale au de obicei 25–35%; sub 15% la o femeie ridică suspiciunea unui mozaic cu 45,X. Schemă proprie.</figcaption>
</figure>
<div class="lab"><b>Frotiul de sânge și cromatina Y</b>
<p><b>Sânge:</b> frotiu obișnuit colorat May-Grünwald-Giemsa; se analizează cel puțin 300–500 de neutrofile (dublu la un rezultat neașteptat), eventual pe concentrat leucocitar. <b>Cromatina Y:</b> colorare 2–5 minute cu quinacrină 0,5% proaspăt preparată, examinare în UV. Ambele sunt azi înlocuite de <b>FISH interfazic</b> cu sonde X și Y (<a href="#/lp02/fish">LP II</a>), care numără direct cromozomii în sute de nuclei.</p></div>`
},
{
id: "aplicatii", titlu: "Aplicații practice: numără corpusculii Barr", pag: "96", emery: "", acopera: [],
html: `
<p>Lucrarea are trei părți: examinarea preparatelor și fotografiilor din colecție, efectuarea și examinarea propriului frotiu bucal, și stabilirea numărului de X după corpusculii Barr din imagini. Exersează pe nucleii de mai jos:</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Patru nuclei cu un număr diferit de corpusculi Barr">
${nucleu(100, 90, 46, 0, "A")}${nucleu(290, 90, 46, 1, "B")}${nucleu(480, 90, 46, 2, "C")}${nucleu(670, 90, 46, 3, "D")}
<text x="20" y="200" class="tm">Corpusculii Barr sunt masele închise lipite de membrana nucleară. Schemă proprie.</text>
</svg>
<figcaption><b>Patru nuclei de mucoasă bucală</b> de la patru persoane cu fenotip feminin.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Câți cromozomi X are fiecare persoană (A–D)?</summary><div>A: 1 X (de ex. 45,X); B: 2 X (46,XX, normal); C: 3 X (47,XXX); D: 4 X (48,XXXX). Regula: X = corpusculi Barr + 1.</div></details>
<details class="q"><summary>Un singur nucleu cu doi corpusculi Barr e suficient pentru diagnosticul de 47,XXX?</summary><div>Nu: se numără sute de nuclei, se repetă testul și se confirmă prin cariotip. Un nucleu poate fi tetraploid sau un corpuscul poate fi bipartit.</div></details>
<details class="q"><summary>Femeie cu corpusculi Barr mai mari decât normal. Ce anomalie structurală a lui X sugerează?</summary><div>Un izocromozom de braț lung, i(X)(q10): X-ul anormal, mai lung, e inactivat preferențial și formează un corpuscul mai mare.</div></details>
</div>`
}
]
});
})();
