/* LP IX — Constituirea arborelui genealogic (LP p. 97–114) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const ROM = ["I", "II", "III", "IV", "V"];
/* ── Desenarea arborilor genealogici ─────────────────────────────────────────
   ind: { id: [x, generație, sex ('M' | 'F' | '?' | 'T' = avort), stare, opțiuni] }
     stare: '' sănătos · 'a' afectat · 'c' purtătoare (punct central) · 'h' heterozigot (jumătate)
     opțiuni (șir): 'd' decedat · 'p' probant · 's' steril · 'n<text>' text în simbol · 'e<text>' etichetă sub simbol
   mar: [[id1, id2, consangvin?]] · kids: [[[părinte1, părinte2], [copii], gemeni?]]
     gemeni: [[c1, c2, 'mz' | 'dz']] */
const R = 11;
const ped = (cfg) => {
  const { ind, mar = [], kids = [], gy, x0 = 34, nume = true, gen = true } = cfg;
  const P = (id) => ({ x: ind[id][0], y: gy[ind[id][1]] });
  let L = "", S = "";
  mar.forEach(([a, b, c]) => {
    const A = P(a), B = P(b), x1 = Math.min(A.x, B.x) + R, x2 = Math.max(A.x, B.x) - R;
    L += c ? `<line x1="${x1}" y1="${A.y - 2.5}" x2="${x2}" y2="${A.y - 2.5}" class="si" stroke-width="1.4"/><line x1="${x1}" y1="${A.y + 2.5}" x2="${x2}" y2="${A.y + 2.5}" class="si" stroke-width="1.4"/>` : `<line x1="${x1}" y1="${A.y}" x2="${x2}" y2="${A.y}" class="si" stroke-width="1.4"/>`;
  });
  kids.forEach(([par, ch, tw = []]) => {
    const pp = par.map(P), mx = pp.reduce((s, p) => s + p.x, 0) / pp.length, py = pp[0].y + (par.length === 1 ? R : 0);
    const cy = gy[ind[ch[0]][1]], sy = cy - 26;
    const inTw = new Set(tw.flatMap(([a, b]) => [a, b]));
    const tops = ch.filter((c) => !inTw.has(c)).map((c) => ind[c][0]).concat(tw.map(([a, b]) => (ind[a][0] + ind[b][0]) / 2));
    const xs = tops.concat([mx]);
    L += `<line x1="${mx}" y1="${py}" x2="${mx}" y2="${sy}" class="si" stroke-width="1.4"/><line x1="${Math.min(...xs)}" y1="${sy}" x2="${Math.max(...xs)}" y2="${sy}" class="si" stroke-width="1.4"/>`;
    ch.filter((c) => !inTw.has(c)).forEach((c) => (L += `<line x1="${ind[c][0]}" y1="${sy}" x2="${ind[c][0]}" y2="${cy - R}" class="si" stroke-width="1.4"/>`));
    tw.forEach(([a, b, t]) => {
      const m = (ind[a][0] + ind[b][0]) / 2;
      L += `<line x1="${m}" y1="${sy}" x2="${ind[a][0]}" y2="${cy - R}" class="si" stroke-width="1.4"/><line x1="${m}" y1="${sy}" x2="${ind[b][0]}" y2="${cy - R}" class="si" stroke-width="1.4"/>`;
      if (t === "mz") L += `<line x1="${(m + ind[a][0]) / 2}" y1="${(sy + cy - R) / 2}" x2="${(m + ind[b][0]) / 2}" y2="${(sy + cy - R) / 2}" class="si" stroke-width="1.4"/>`;
    });
  });
  // numerotarea în fiecare generație, de la stânga la dreapta
  const nr = {};
  Object.keys(gy).forEach((g) => Object.entries(ind).filter(([, v]) => v[1] == g).sort((a, b) => a[1][0] - b[1][0]).forEach(([id], i) => (nr[id] = i + 1)));
  Object.entries(ind).forEach(([id, [x, g, sx, st = "", op = ""]]) => {
    const y = gy[g], fill = st === "a" ? "fP" : "fcard";
    if (sx === "M") S += `<rect x="${x - R}" y="${y - R}" width="${2 * R}" height="${2 * R}" class="${fill} si" stroke-width="1.5"/>`;
    else if (sx === "F") S += `<circle cx="${x}" cy="${y}" r="${R}" class="${fill} si" stroke-width="1.5"/>`;
    else if (sx === "?") S += `<path d="M${x} ${y - R - 2}L${x + R + 2} ${y}L${x} ${y + R + 2}L${x - R - 2} ${y}z" class="${fill} si" stroke-width="1.5"/>`;
    else if (sx === "T") S += `<path d="M${x} ${y - 8}L${x + 8} ${y + 6}L${x - 8} ${y + 6}z" class="fZ"/>`;
    if (st === "c") S += `<circle cx="${x}" cy="${y}" r="3.6" class="fP"/>`;
    if (st === "h") S += sx === "M" ? `<rect x="${x - R}" y="${y - R}" width="${R}" height="${2 * R}" class="fP"/><rect x="${x - R}" y="${y - R}" width="${2 * R}" height="${2 * R}" fill="none" class="si" stroke-width="1.5"/>` : `<path d="M${x} ${y - R}A${R} ${R} 0 0 0 ${x} ${y + R}z" class="fP"/><circle cx="${x}" cy="${y}" r="${R}" fill="none" class="si" stroke-width="1.5"/>`;
    if (op.includes("d")) S += `<line x1="${x - R - 4}" y1="${y + R + 4}" x2="${x + R + 4}" y2="${y - R - 4}" class="si" stroke-width="1.5"/>`;
    if (op.includes("s")) S += `<line x1="${x}" y1="${y + R}" x2="${x}" y2="${y + R + 12}" class="si" stroke-width="1.4"/><line x1="${x - 8}" y1="${y + R + 12}" x2="${x + 8}" y2="${y + R + 12}" class="si" stroke-width="1.4"/><line x1="${x - 8}" y1="${y + R + 16}" x2="${x + 8}" y2="${y + R + 16}" class="si" stroke-width="1.4"/>`;
    if (op.includes("p")) S += `<line x1="${x - R - 16}" y1="${y + R + 12}" x2="${x - R - 2}" y2="${y + R - 2}" class="sa" stroke-width="2" marker-end="url(#vf9)"/><text x="${x - R - 24}" y="${y + R + 22}" class="ta b" style="font-size:11px">P</text>`;
    const mN = op.match(/n([^,]+)/); if (mN) S += `<text x="${x}" y="${y + 4}" text-anchor="middle" class="ti b" style="font-size:11px">${mN[1]}</text>`;
    const mE = op.match(/e([^,]+)/);
    if (sx !== "T" && nume) S += `<text x="${x}" y="${y + R + (op.includes("s") ? 30 : 15)}" text-anchor="middle" class="tm" style="font-size:10.5px">${mE ? mE[1] : nr[id]}</text>`;
  });
  const G = !gen ? "" : Object.entries(gy).map(([g, y]) => `<text x="${x0 - 30}" y="${y + 4}" class="ti b" style="font-size:12.5px">${ROM[g]}</text>`).join("");
  return `<defs><marker id="vf9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="fA"/></marker></defs>` + G + L + S;
};
// pătrat Punnett: g1 = gameții mamei (vertical), g2 = ai tatălui (orizontal)
const punnett = (x, y, titlu, g1, g2, cell) => {
  const c = 64; let o = `<text x="${x}" y="${y}" class="ti b" style="font-size:12.5px">${titlu}</text>`;
  g2.forEach((g, j) => (o += `<text x="${x + 50 + j * c + c / 2}" y="${y + 24}" text-anchor="middle" class="ta b" style="font-size:13px">${g}</text>`));
  g1.forEach((g, i) => {
    o += `<text x="${x + 30}" y="${y + 34 + i * c + c / 2 + 5}" text-anchor="middle" class="ta b" style="font-size:13px">${g}</text>`;
    g2.forEach((h, j) => { const [t, cl] = cell(g, h); o += `<rect x="${x + 50 + j * c}" y="${y + 34 + i * c}" width="${c - 4}" height="${c - 4}" rx="6" class="${cl} sm" stroke-width=".8"/><text x="${x + 50 + j * c + (c - 4) / 2}" y="${y + 34 + i * c + (c - 4) / 2 + 5}" text-anchor="middle" class="ti b" style="font-size:13px">${t}</text>`; });
  });
  return o;
};
const xs = (a) => `X<tspan dy="-6" style="font-size:9.5px">${a}</tspan><tspan dy="6"> </tspan>`;
const legenda = (x, y) => `<rect x="${x}" y="${y}" width="14" height="14" rx="3" class="fP"/><text x="${x + 20}" y="${y + 12}" class="ti" style="font-size:11.5px">afectat</text><rect x="${x + 80}" y="${y}" width="14" height="14" rx="3" class="fws"/><text x="${x + 100}" y="${y + 12}" class="ti" style="font-size:11.5px">purtător sănătos</text><rect x="${x + 210}" y="${y}" width="14" height="14" rx="3" class="fcard si" stroke-width="1"/><text x="${x + 230}" y="${y + 12}" class="ti" style="font-size:11.5px">sănătos</text>`;

GHID.capitol({
id: "lp09",
intro: `<p class="lead">Arborele genealogic (pedigree) e primul instrument al geneticianului: din câteva întrebări puse familiei și din simboluri desenate corect se vede dacă boala e ereditară, cum se transmite și cine are risc. Capitolul are trei părți: ancheta familială, desenul și cele cinci tipuri de transmitere monogenică, fiecare cu arborele, tabelul de încrucișări și semnele după care se recunoaște.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Cum se recunosc tipurile de transmitere după arbore">
${[["AD", "vertical, continuu", "ambele sexe; un părinte afectat; transmitere tată → fiu posibilă", "fP"], ["AR", "orizontal, în fratrie", "ambele sexe; părinți sănătoși, adesea înrudiți", "fT"], ["XLR", "oblic, prin femei", "aproape doar bărbați; niciodată tată → fiu", "fA"], ["XLD", "vertical", "mai multe femei; tatăl afectat → toate fiicele, niciun fiu", "fC"], ["Y", "tată → toți fiii", "doar bărbați", "fG"]].map(([t, a, b, c], i) => `<rect x="${10 + i * 150}" y="10" width="142" height="190" rx="10" class="fcard sm" stroke-width=".6"/><rect x="${10 + i * 150}" y="10" width="142" height="40" rx="10" class="${c}"/><text x="${81 + i * 150}" y="37" text-anchor="middle" style="fill:#fff;font-size:17px" class="b">${t}</text><text x="${81 + i * 150}" y="72" text-anchor="middle" class="ti b" style="font-size:12px">${a}</text>${fo(18 + i * 150, 82, 126, 110, b, "text-align:center;color:var(--ink)")}`).join("")}
</svg>
<figcaption><b>Cele cinci tipuri de transmitere monogenică</b>, pe scurt. Mecanismele și bolile sunt în ghidul de curs: <a href="#/c07">AD</a>, <a href="#/c08">AR</a>, <a href="#/c09">XLD</a>, <a href="#/c10">XLR</a>. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "ancheta", titlu: "Scopul arborelui și ancheta familială", pag: "97–98", emery: "cap. 6, p. 71–72; cap. 21", acopera: ["lp09-r01", "lp09-r02"],
html: `
<p>Arborele genealogic se face în două etape: <b>ancheta familială</b> (strângerea datelor) și <b>reprezentarea grafică</b>. Permite să afli dacă o trăsătură e ereditară, cum se transmite, dacă segregă împreună cu alte trăsături și cât de variabil se exprimă.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Ce se întreabă în ancheta familială">
${[["Cine", "pornești de la <b>consultand</b> (cel care cere sfatul; poate să nu fie bolnav) și de la <b>cazul index</b> (probandul: primul bolnav prin care s-a ajuns la familie)", "fas"], ["Pe cine", "linie ascendentă (părinți, bunici), descendentă (copii, nepoți) și colaterală (frați, unchi, veri); de obicei minimum 3 generații", "fas"], ["Despre fiecare", "nume, sex, vârstă (sau vârsta și cauza decesului); boli, condiții de viață și muncă, obiceiuri", "fis"], ["Antecedente familiale", "boli în familie, decese, <b>sterilitate</b>, <b>avorturi spontane</b>, nou-născuți morți, <b>căsătorii consangvine</b>, originea etnică", "fis"], ["La copii", "sarcina (boli, medicamente, teratogeni), nașterea (termen, greutate, Apgar), dezvoltarea psihomotorie", "fws"], ["Verificare", "examen clinic, consulturi și analize, documente medicale, registre, fotografii; <b>confidențialitate</b> pe tot parcursul", "fws"]].map(([t, d, c], i) => { const x = 20 + (i % 2) * 370, y = 10 + Math.floor(i / 2) * 96; return `<rect x="${x}" y="${y}" width="355" height="86" rx="10" class="${c}"/><text x="${x + 12}" y="${y + 22}" class="ti b">${t}</text>${fo(x + 12, y + 28, 335, 56, d, "color:var(--ink)")}`; }).join("")}
</svg>
<figcaption><b>Ce conține ancheta familială</b>, după carte. Dificultăți reale: familii dispersate, lipsa documentelor, informații ignorate sau ascunse (paternitate, avorturi). Schemă proprie.</figcaption>
</figure>
<div class="cheie"><b>Întrebarea care se uită cel mai des</b><p>„Sunteți rude, părinții dumneavoastră?” Consangvinitatea e indiciul principal pentru o boală autozomal recesivă și trebuie întrebată explicit, pentru că rareori e menționată spontan.</p></div>`
},
{
id: "simboluri", titlu: "Reprezentarea grafică: simbolurile și numerotarea", pag: "98–100", emery: "cap. 6, Fig. 6.1", acopera: ["lp09-r03", "lp09-r04", "lp09-r06"],
html: `
<figure>
<svg viewBox="0 0 760 364" role="img" aria-label="Simbolurile standard ale arborelui genealogic">
${(() => {
  const it = [[{ a: ["M", ""] }, "bărbat sănătos"], [{ a: ["F", ""] }, "femeie sănătoasă"], [{ a: ["?", ""] }, "sex necunoscut"], [{ a: ["M", "a"] }, "bărbat afectat"], [{ a: ["F", "a"] }, "femeie afectată"], [{ a: ["F", "c"] }, "purtătoare a unei mutații legate de X"], [{ a: ["M", "h"] }, "heterozigot (purtător AR)"], [{ a: ["M", "", "d"] }, "decedat"], [{ a: ["F", "a", "p"] }, "probandul (cazul index)"], [{ a: ["T", ""] }, "avort spontan"], [{ a: ["F", "", "n3"] }, "3 femei sănătoase"], [{ a: ["M", "", "s"] }, "steril"]];
  let o = "";
  it.forEach(([d, t], i) => { const x = 60 + (i % 4) * 180, y = 34 + Math.floor(i / 4) * 64; const [sx, st, op = ""] = d.a; o += ped({ ind: { a: [x, 0, sx, st, op] }, gy: { 0: y }, nume: false, gen: false }) + fo(x + 20, y - 14, 140, 40, t, "color:var(--ink)"); });
  // relații
  const y0 = 250;
  o += ped({ ind: { a: [60, 0, "M"], b: [120, 0, "F"] }, mar: [["a", "b"]], gy: { 0: y0 }, nume: false, gen: false }) + `<text x="60" y="${y0 + 32}" class="ti" style="font-size:11.5px">căsătorie</text>`;
  o += ped({ ind: { a: [240, 0, "M"], b: [300, 0, "F"] }, mar: [["a", "b", 1]], gy: { 0: y0 }, nume: false, gen: false }) + `<text x="230" y="${y0 + 32}" class="ti" style="font-size:11.5px">căsătorie consangvină</text>`;
  o += ped({ ind: { a: [440, 0, "M"], b: [500, 0, "F"], c: [430, 1, "F"], d: [470, 1, "F"], e: [510, 1, "M"] }, mar: [["a", "b"]], kids: [[["a", "b"], ["c", "d", "e"], [["c", "d", "mz"]]]], gy: { 0: y0 - 26, 1: y0 + 46 }, nume: false, gen: false }) + fo(400, y0 + 70, 200, 40, "linie de descendență și de fratrie; gemene monozigote (bara)");
  o += ped({ ind: { a: [620, 0, "M"], b: [680, 0, "F"], c: [630, 1, "M"], d: [670, 1, "F"] }, mar: [["a", "b"]], kids: [[["a", "b"], ["c", "d"], [["c", "d", "dz"]]]], gy: { 0: y0 - 26, 1: y0 + 6 }, nume: false, gen: false }) + `<text x="610" y="${y0 + 40}" class="ti" style="font-size:11.5px">gemeni dizigoți</text>`;
  return o;
})()}
</svg>
<figcaption><b>Simbolurile folosite în ghid</b> (figura 30 din carte). Bărbat = pătrat, femeie = cerc, sex necunoscut = romb; simbol plin = afectat; linie dublă de căsătorie = consangvinitate. Orice simbol neobișnuit se explică în legendă. Schemă proprie.</figcaption>
</figure>
<p><b>Numerotarea:</b> generațiile cu cifre romane (I = cea mai veche), persoanele dintr-o generație cu cifre arabe, de la stânga la dreapta. Probandul de mai jos e <b>IV-2</b>. Consultandul se marchează cu o săgeată.</p>
<figure>
<svg viewBox="0 0 760 320" role="img" aria-label="Exemplu de arbore genealogic pe patru generații">
${ped({
  ind: { a: [120, 0, "M", "", "d"], b: [190, 0, "F"], c: [80, 1, "F"], d: [160, 1, "M", "a"], e: [220, 1, "F"], f: [300, 1, "M"], g: [380, 1, "F"], h: [460, 1, "M"], i: [100, 2, "F"], j: [200, 2, "M", "a"], k: [260, 2, "F"], l: [340, 2, "F"], m: [420, 2, "M"], n: [500, 2, "T"], o: [180, 3, "F"], p: [240, 3, "M", "a", "p"], q: [300, 3, "F"], r: [380, 3, "?", "", "n2"] },
  mar: [["a", "b"], ["d", "e"], ["g", "h"], ["j", "k"], ["l", "m"]],
  kids: [[["a", "b"], ["c", "d", "f", "g"]], [["d", "e"], ["i", "j"]], [["g", "h"], ["l", "n"]], [["j", "k"], ["o", "p", "q"]], [["l", "m"], ["r"]]],
  gy: { 0: 40, 1: 110, 2: 190, 3: 270 }
})}
${fo(540, 40, 210, 240, "<b style='color:var(--ink)'>Citește arborele:</b><br>I-1 decedat.<br>II-2 afectat, căsătorit cu II-3.<br>Fiul lor III-2, afectat, are trei copii; IV-2 e probandul.<br>II-5 × II-6: o fiică (III-4) și un avort spontan.<br>IV-4: doi copii de sex nespecificat.<br><br>Probandul se numește <b>IV-2</b> aici (numerotarea include toți membrii generației).")}
</svg>
<figcaption><b>Un arbore pe patru generații</b> (după modelul figurii 31). Soții intrați în familie (II-3, III-3, II-6) se numerotează la fel ca membrii de sânge. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Standardul actual</b><p>Simbolurile au fost actualizate de Societatea Națională a Consilierilor Genetici din SUA (NSGC, 2008; revizuire 2022): se marchează separat sexul atribuit la naștere și identitatea de gen, iar persoanele cu variante genetice dar fără boală (purtători, presimptomatici) au simboluri proprii. Semnele de bază din carte rămân valabile.</p></div>`
},
{
id: "termeni", titlu: "Termenii de bază și relațiile dintre alele", pag: "100–101", emery: "cap. 6, p. 71", acopera: ["lp09-r05"], curs: ["c02/definitie"],
html: `
<div class="tw"><table>
<thead><tr><th>Termen</th><th>Definiție</th></tr></thead>
<tbody>
<tr><td><b>Locus</b></td><td>poziția unei gene pe cromozom</td></tr>
<tr><td><b>Alele</b></td><td>variante ale aceleiași gene, la același locus; varianta obișnuită = „de tip sălbatic”</td></tr>
<tr><td><b>Genotip / fenotip</b></td><td>alelele unei persoane la un locus / trăsăturile observabile (morfologice, fiziologice, biochimice)</td></tr>
<tr><td><b>Homozigot / heterozigot</b></td><td>două alele identice / diferite la un locus</td></tr>
<tr><td><b>Hemizigot</b></td><td>o singură alelă: genele lui X la bărbat</td></tr>
<tr><td><b>Epistazie</b></td><td>o genă maschează efectul altei gene, nealele (ex. fenotipul Bombay ascunde grupa AB0, <a href="#/lp10/ab0">LP X</a>)</td></tr>
</tbody></table></div>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Dominanță, semidominanță și codominanță">
${[["Dominanță", "heterozigotul arată ca homozigotul dominant", [["AA", 1], ["Aa", 1], ["aa", 0]], "ex. polidactilia"], ["Semidominanță", "heterozigotul are fenotip intermediar", [["AA", 1], ["Aa", .5], ["aa", 0]], "ex. acondroplazia (AA: letal)"], ["Codominanță", "ambele alele se exprimă, fiecare vizibil", [["AB", "AB"], ["A", "A"], ["B", "B"]], "ex. grupa AB, HLA"]].map(([t, d, g, ex], i) => {
  const x = 20 + i * 250; let o = `<rect x="${x}" y="10" width="235" height="210" rx="10" class="fcard sm" stroke-width=".6"/><text x="${x + 12}" y="34" class="ti b">${t}</text>${fo(x + 12, 40, 215, 36, d)}`;
  g.forEach(([k, v], j) => {
    const yy = 90 + j * 34;
    o += `<text x="${x + 20}" y="${yy + 17}" class="ti b" style="font-family:ui-monospace,monospace">${k}</text>`;
    if (typeof v === "number") o += `<rect x="${x + 70}" y="${yy}" width="140" height="24" rx="5" class="fline"/><rect x="${x + 70}" y="${yy}" width="${140 * v}" height="24" rx="5" class="fP"/>`;
    else o += (v.includes("A") ? `<rect x="${x + 70}" y="${yy}" width="68" height="24" rx="5" class="fT"/>` : "") + (v.includes("B") ? `<rect x="${x + 142}" y="${yy}" width="68" height="24" rx="5" class="fA"/>` : "");
  });
  return o + `<text x="${x + 12}" y="210" class="tm" style="font-size:11.5px">${ex}</text>`;
}).join("")}
</svg>
<figcaption><b>Trei relații între alele.</b> Dominanța și recesivitatea sunt proprietăți ale fenotipului, nu ale alelei: aceeași mutație poate fi „dominantă” pentru un semn și „recesivă” pentru altul (ex. purtătorii de siclemie au protecție la malarie, dar nu boală). Schemă proprie.</figcaption>
</figure>`
},
{
id: "ad", titlu: "Transmiterea autozomal dominantă", pag: "101–104", emery: "cap. 6, p. 72–75", acopera: ["lp09-r07", "lp09-r08", "lp09-r09", "lp09-r10"], curs: ["c07/nf1", "c07/acondroplazie"],
html: `
<p>Alela patologică <b>A</b> e dominantă, alela normală <b>a</b> recesivă. Bolnavii sunt aproape întotdeauna <b>heterozigoți (Aa)</b>; homozigoții AA sunt rari și, la multe boli, mai grav afectați sau neviabili.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Arbore autozomal dominant și pătratul Punnett Aa × aa">
${ped({
  ind: { a: [80, 0, "M", "a"], b: [140, 0, "F"], c: [60, 1, "F", "a"], d: [120, 1, "M"], e: [190, 1, "M", "a"], f: [250, 1, "F"], g: [40, 2, "M", "a"], h: [90, 2, "F"], i: [140, 2, "M", "a"], j: [210, 2, "F", "a", "p"], k: [270, 2, "M"] },
  mar: [["a", "b"], ["c", "d"], ["e", "f"]],
  kids: [[["a", "b"], ["c", "e"]], [["c", "d"], ["g", "h", "i"]], [["e", "f"], ["j", "k"]]],
  gy: { 0: 40, 1: 120, 2: 200 }
})}
${punnett(400, 30, "Aa (bolnav) × aa (sănătos)", ["A", "a"], ["a", "a"], (g) => (g === "A" ? ["Aa", "fP"] : ["aa", "fcard"]))}
${fo(590, 60, 160, 140, "<b style='color:var(--ink)'>50% bolnavi</b> la fiecare sarcină, indiferent de sex și de câți copii afectați există deja.")}
${legenda(20, 262)}
</svg>
<figcaption><b>Arborele tipic</b> (polidactilie, figura 32 din carte): boala apare în fiecare generație, la ambele sexe, și se transmite și de la tată la fiu (I-1 → II-3), ceea ce exclude transmiterea legată de X. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Părinți (Tabelul 9)</th><th>Copii</th><th>Bolnavi</th></tr></thead>
<tbody>
<tr><td>AA × AA</td><td>AA</td><td>100%</td></tr>
<tr><td>AA × Aa</td><td>½ AA, ½ Aa</td><td>100%</td></tr>
<tr><td>AA × aa</td><td>Aa</td><td>100%</td></tr>
<tr><td>Aa × Aa</td><td>¼ AA, ½ Aa, ¼ aa</td><td>75% (dacă AA e viabil)</td></tr>
<tr><td><b>Aa × aa</b> (cazul obișnuit)</td><td>½ Aa, ½ aa</td><td><b>50%</b></td></tr>
<tr><td>aa × aa</td><td>aa</td><td>0% (în afara mutațiilor noi)</td></tr>
</tbody></table></div>
<h3>Cum îl recunoști</h3>
<div class="pasi">
<div><b>Vertical, continuu</b>boala apare în generații succesive</div>
<div><b>Un părinte afectat</b>de obicei; un bolnav poate avea și copii sănătoși</div>
<div><b>Ambele sexe</b>egal afectate; transmitere tată → fiu posibilă</div>
<div><b>Rudele sănătoase nu transmit</b>cu excepția penetranței incomplete și a debutului tardiv</div>
<div><b>Variabilitate</b>expresivitate variabilă și penetranță incompletă, frecvente</div>
</div>
<div class="capcana"><b>Trei capcane ale arborelui AD</b>
<p>1) <b>Mutația de novo</b>: un copil bolnav cu părinți sănătoși (ex. ~80% din cazurile de acondroplazie); vârsta paternă avansată crește riscul. 2) <b>Penetranța incompletă</b> „sare” o generație și imită transmiterea recesivă. 3) <b>Mozaicismul germinal</b>: părinți sănătoși cu doi copii afectați de aceeași boală dominantă (ex. osteogeneza imperfectă). Detalii în <a href="#/c07/oi">ghidul de curs</a>.</p></div>
<p>Exemple din carte: neurofibromatoza, polidactilia, brahidactilia, sindromul Marfan, acondroplazia, osteogeneza imperfectă, polipoza adenomatoasă familială, sferocitoza ereditară, boala Huntington. Bolile AD sunt de obicei mai puțin grave decât cele recesive și pot debuta oricând, de la naștere la vârsta adultă.</p>`
},
{
id: "ar", titlu: "Transmiterea autozomal recesivă", pag: "104–106", emery: "cap. 6, p. 75–77; cap. 8", acopera: ["lp09-r11", "lp09-r12", "lp09-r13", "lp09-r15"], curs: ["c08/fc", "c08/albinism", "c11/risc"],
html: `
<p>Boala apare doar la <b>homozigoții aa</b>. Heterozigoții (Aa) sunt <b>purtători sănătoși</b>; cartea îi numește „heterozigoți recesivi”, termen care nu mai e folosit.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Arbore autozomal recesiv cu consangvinitate și pătratul Punnett Aa × Aa">
${ped({
  ind: { a: [110, 0, "M", "h"], b: [170, 0, "F"], c: [70, 1, "F", "h"], d: [130, 1, "M"], e: [200, 1, "M", "h"], f: [260, 1, "F"], g: [110, 2, "M", "h"], h: [210, 2, "F", "h"], i: [90, 3, "F"], j: [150, 3, "M", "a", "p"], k: [210, 3, "F", "a"], l: [270, 3, "M"] },
  mar: [["a", "b"], ["c", "d"], ["e", "f"], ["g", "h", 1]],
  kids: [[["a", "b"], ["c", "e"]], [["c", "d"], ["g"]], [["e", "f"], ["h"]], [["g", "h"], ["i", "j", "k", "l"]]],
  gy: { 0: 36, 1: 106, 2: 180, 3: 260 }
})}
${punnett(400, 30, "Aa × Aa (doi purtători)", ["A", "a"], ["A", "a"], (g, h) => { const t = [g, h].sort().join(""); return [t, t === "aa" ? "fP" : t === "Aa" ? "fws" : "fcard"]; })}
${fo(590, 60, 160, 190, "<b style='color:var(--ink)'>25% bolnavi</b>, 50% purtători, 25% necondiționat sănătoși.<br><br>Un frate sănătos al unui bolnav e purtător cu probabilitatea <b>2/3</b> (din cele trei căsuțe sănătoase, două sunt Aa).")}
${legenda(20, 304)}
</svg>
<figcaption><b>Arborele tipic</b> (albinism, figura 33): bolnavii sunt frați, părinții sănătoși, generațiile anterioare neafectate. Aici părinții (III-1 și III-2) sunt <b>veri primari</b> (linie dublă), purtători ai aceleiași alele moștenite de la bunicul comun I-1. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Părinți (Tabelul 11)</th><th>Copii</th><th>Bolnavi</th></tr></thead>
<tbody>
<tr><td>aa × aa</td><td>aa</td><td>100%</td></tr>
<tr><td>Aa × aa</td><td>½ Aa, ½ aa</td><td>50% („pseudodominanță”)</td></tr>
<tr><td><b>Aa × Aa</b> (cazul obișnuit)</td><td>¼ AA, ½ Aa, ¼ aa</td><td><b>25%</b></td></tr>
<tr><td>AA × aa</td><td>Aa</td><td>0% (toți purtători)</td></tr>
<tr><td>AA × Aa</td><td>½ AA, ½ Aa</td><td>0%</td></tr>
<tr><td>AA × AA</td><td>AA</td><td>0%</td></tr>
</tbody></table></div>
<div class="pasi">
<div><b>Orizontal, discontinuu</b>bolnavii sunt grupați în fratrie, nu în generații succesive</div>
<div><b>Părinți sănătoși</b>dar purtători; doi părinți bolnavi au doar copii bolnavi</div>
<div><b>Ambele sexe</b>egal afectate</div>
<div><b>Consangvinitate</b>și izolate (geografice, etnice, religioase) cresc riscul</div>
</div>
<h3>Legea Hardy–Weinberg: câți purtători sunt în populație</h3>
<p>Dacă p = frecvența alelei normale și q = a celei patologice (p + q = 1), atunci p² + 2pq + q² = 1: <b>q²</b> = bolnavi, <b>2pq</b> = purtători. Pentru bolile rare, p ≈ 1, deci <b>purtători ≈ 2q = 2√(prevalență)</b>.</p>
<figure>
<svg viewBox="0 0 760 320" role="img" aria-label="Frecvența purtătorilor în funcție de prevalența bolii recesive">
${(() => {
  const B = [["Fibroză chistică", 2500], ["Fenilcetonurie", 10000], ["Albinism", 17000], ["Boala Wilson", 30000], ["Galactozemie", 50000], ["Alcaptonurie", 250000]];
  const X0 = 90, W = 520, Y0 = 260, H = 220, lx = (v) => (Math.log10(v) - 3) / 3 * W + X0, ly = (v) => Y0 - (Math.log10(v) - 1) / 2 * H; // purtători 1 din 10..1000
  let o = `<text x="20" y="20" class="ti b">Boala e rară, purtătorii nu: purtători ≈ 2 × √prevalență</text>`;
  [1000, 10000, 100000, 1000000].forEach((v) => (o += `<line x1="${lx(v)}" y1="${Y0 - H}" x2="${lx(v)}" y2="${Y0}" class="sm" stroke-dasharray="2 4" opacity=".5"/><text x="${lx(v)}" y="${Y0 + 16}" text-anchor="middle" class="tm" style="font-size:11px">1:${v.toLocaleString("ro-RO")}</text>`));
  [10, 100, 1000].forEach((v) => (o += `<line x1="${X0}" y1="${ly(v)}" x2="${X0 + W}" y2="${ly(v)}" class="sm" stroke-dasharray="2 4" opacity=".5"/><text x="${X0 - 8}" y="${ly(v) + 4}" text-anchor="end" class="tm" style="font-size:11px">1:${v}</text>`));
  let d = ""; for (let e = 3; e <= 6; e += 0.05) { const P = Math.pow(10, e), q = 1 / Math.sqrt(P), c = 1 / (2 * q * (1 - q)); d += (d ? "L" : "M") + lx(P).toFixed(1) + " " + ly(c).toFixed(1); }
  o += `<path d="${d}" fill="none" class="sA" stroke-width="2.4"/>`;
  const POZ = [[8, -8, "start"], [8, 18, "start"], [-8, -10, "end"], [8, 18, "start"], [-8, -10, "end"], [-8, -10, "end"]];
  B.forEach(([n, P], i) => { const q = 1 / Math.sqrt(P), c = 1 / (2 * q * (1 - q)), [dx, dy, an] = POZ[i]; o += `<circle cx="${lx(P)}" cy="${ly(c)}" r="5" class="fT"/><text x="${lx(P) + dx}" y="${ly(c) + dy}" text-anchor="${an}" class="ti" style="font-size:11.5px">${n}: 1 din ${Math.round(c)}</text>`; });
  o += `<text x="${X0 + W / 2}" y="${Y0 + 36}" text-anchor="middle" class="tm" style="font-size:11.5px">prevalența bolii (1 din N nou-născuți)</text><text x="20" y="${Y0 - H / 2}" class="tm" style="font-size:11.5px" transform="rotate(-90 20 ${Y0 - H / 2})" text-anchor="middle">purtători</text>`;
  return o;
})()}
</svg>
<figcaption><b>Fibroza chistică: 1 bolnav la 2.500 de nou-născuți, dar 1 purtător la ~25 de oameni</b>. Prevalențe aproximative pentru populația europeană; purtătorii calculați cu 2pq. Calcul propriu.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Riscul relativ al unei boli recesive la copiii verilor primari">
${(() => {
  const F = 1 / 16, P = [2500, 10000, 40000, 160000, 640000];
  let o = `<text x="20" y="20" class="ti b">De câte ori crește riscul la copiii verilor primari (F = 1/16)</text>`;
  P.forEach((p, i) => { const q = 1 / Math.sqrt(p), r = (q * q + F * q * (1 - q)) / (q * q), y = 40 + i * 38, w = Math.log10(r) / Math.log10(60) * 420; o += `<text x="200" y="${y + 17}" text-anchor="end" class="ti" style="font-size:12px">boală cu prevalența 1:${p.toLocaleString("ro-RO")}</text><rect x="210" y="${y}" width="${w}" height="26" rx="5" class="fT"/><text x="${218 + w}" y="${y + 18}" class="ti b" style="font-size:12.5px">× ${r.toFixed(0)}</text>`; });
  return o + `<text x="20" y="242" class="tm">Risc = q² + F·p·q, comparat cu q² la părinți neînrudiți. Scară logaritmică.</text>`;
})()}
</svg>
<figcaption><b>Cu cât boala e mai rară, cu atât consangvinitatea contează mai mult.</b> Verii primari au în comun 1/8 din gene; copilul lor e homozigot prin descendență comună la 1/16 din loci. Pentru o boală foarte rară, majoritatea cazurilor provin din căsătorii consangvine. Calcul propriu.</figcaption>
</figure>
<p>Exemple din carte: fibroza chistică, fenilcetonuria, galactozemia, boala Gaucher, mucopolizaharidozele, siclemia, talasemiile. Bolile AR sunt de obicei grave și precoce; depistarea purtătorilor și diagnosticul precoce (screening neonatal) permit prevenție și tratament.</p>`
},
{
id: "xld", titlu: "Transmiterea dominantă legată de X", pag: "106–109", emery: "cap. 6, p. 78–79", acopera: ["lp09-r14", "lp09-r16", "lp09-r17", "lp09-r18"], curs: ["c09/rahitism", "c09/ip"],
html: `
<p>Alela patologică X<sup>A</sup> e pe X și se exprimă și la femeile heterozigote. Bărbatul are un singur X, deci e <b>hemizigot</b>.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Arbore dominant legat de X și pătratele Punnett">
${ped({
  ind: { a: [80, 0, "M", "a"], b: [140, 0, "F"], c: [40, 1, "F", "a"], d: [100, 1, "M"], e: [160, 1, "F", "a"], f: [220, 1, "M"], g: [40, 2, "M", "a"], h: [90, 2, "F"], i: [140, 2, "F", "a", "p"], j: [200, 2, "M"] },
  mar: [["a", "b"], ["e", "f"]],
  kids: [[["a", "b"], ["c", "d", "e"]], [["e", "f"], ["g", "h", "i", "j"]]],
  gy: { 0: 40, 1: 120, 2: 200 }
})}
${punnett(290, 24, "tată afectat × mamă sănătoasă", [xs("a"), xs("a")], [xs("A"), "Y"], (g, h) => (h === "Y" ? ["fiu", "fcard"] : ["fiică", "fP"]))}
${punnett(530, 24, "mamă afectată (het.) × tată sănătos", [xs("A"), xs("a")], [xs("a"), "Y"], (g) => (g.includes(">A<") ? ["afect.", "fP"] : ["săn.", "fcard"]))}
${fo(290, 180, 460, 70, "Tatăl afectat: <b>toate fiicele</b> bolnave, <b>niciun fiu</b>. Mama heterozigotă: <b>50%</b> din copii, indiferent de sex.")}
${legenda(20, 272)}
</svg>
<figcaption><b>Arborele tipic</b> (rahitism hipofosfatemic, figura 34): seamănă cu AD, dar tatăl afectat (I-1) are doar fiice afectate și fiu sănătos. Femeile afectate sunt de ~2 ori mai multe decât bărbații. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Mama × tata (Tabelul 13)</th><th>Fiice bolnave</th><th>Fii bolnavi</th></tr></thead>
<tbody>
<tr><td>X<sup>A</sup>X<sup>A</sup> × X<sup>A</sup>Y</td><td>100%</td><td>100%</td></tr>
<tr><td>X<sup>a</sup>X<sup>a</sup> × X<sup>A</sup>Y</td><td>100%</td><td>0%</td></tr>
<tr><td>X<sup>A</sup>X<sup>a</sup> × X<sup>A</sup>Y</td><td>100%</td><td>50%</td></tr>
<tr><td>X<sup>A</sup>X<sup>a</sup> × X<sup>a</sup>Y</td><td>50%</td><td>50%</td></tr>
<tr><td>X<sup>A</sup>X<sup>A</sup> × X<sup>a</sup>Y</td><td>100%</td><td>100%</td></tr>
<tr><td>X<sup>a</sup>X<sup>a</sup> × X<sup>a</sup>Y</td><td>0%</td><td>0%</td></tr>
</tbody></table></div>
<p>Doi părinți bolnavi pot avea copii sănătoși, dar <b>numai băieți</b> (dacă mama e heterozigotă). Exemple: <a href="#/c09/rahitism">rahitismul hipofosfatemic legat de X</a>, <a href="#/c09/ip">incontinentia pigmenti</a> (letală la băieții hemizigoți, deci aproape numai fete și avorturi de feți masculini), <a href="#/c09/rett">sindromul Rett</a>.</p>`
},
{
id: "xlr", titlu: "Transmiterea recesivă legată de X", pag: "109–112", emery: "cap. 6, p. 77–78", acopera: ["lp09-r19", "lp09-r20", "lp09-r22"], curs: ["c10/hemofilie", "c10/dmd"],
html: `
<figure>
<svg viewBox="0 0 760 320" role="img" aria-label="Arbore recesiv legat de X și pătratele Punnett">
${ped({
  ind: { a: [80, 0, "M"], b: [140, 0, "F", "c"], c: [40, 1, "M", "a"], d: [100, 1, "F", "c"], e: [160, 1, "M"], f: [210, 1, "F", "c"], g: [270, 1, "M"], h: [40, 2, "M", "a", "p"], i: [90, 2, "F"], j: [140, 2, "M"], k: [210, 2, "M", "a"], l: [260, 2, "F", "c"] },
  mar: [["a", "b"], ["d", "e"], ["f", "g"]],
  kids: [[["a", "b"], ["c", "d", "f"]], [["d", "e"], ["h", "i", "j"]], [["f", "g"], ["k", "l"]]],
  gy: { 0: 40, 1: 120, 2: 200 }
})}
${punnett(310, 24, "mamă purtătoare × tată sănătos", [xs("A"), xs("a")], [xs("A"), "Y"], (g, h) => (h === "Y" ? (g.includes(">a<") ? ["fiu af.", "fP"] : ["fiu", "fcard"]) : g.includes(">a<") ? ["purt.", "fws"] : ["fiică", "fcard"]))}
${punnett(540, 24, "tată afectat × mamă sănătoasă", [xs("A"), xs("A")], [xs("a"), "Y"], (g, h) => (h === "Y" ? ["fiu", "fcard"] : ["purt.", "fws"]))}
${fo(310, 180, 440, 74, "Mama purtătoare: <b>50% din fii bolnavi</b>, 50% din fiice purtătoare. Tatăl bolnav: <b>toate fiicele purtătoare</b> (obligatorii), <b>niciun fiu bolnav</b>.")}
${legenda(20, 292)}
</svg>
<figcaption><b>Arborele tipic</b> (hemofilie, figura 35): bărbați bolnavi legați prin femei sănătoase, purtătoare (punct central): un băiat bolnav are adesea un unchi matern sau un bunic matern bolnav. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Mama × tata (Tabelul 15)</th><th>Fiice</th><th>Fii</th></tr></thead>
<tbody>
<tr><td>X<sup>a</sup>X<sup>a</sup> × X<sup>a</sup>Y</td><td>100% bolnave</td><td>100% bolnavi</td></tr>
<tr><td>X<sup>a</sup>X<sup>a</sup> × X<sup>A</sup>Y</td><td>100% purtătoare</td><td>100% bolnavi</td></tr>
<tr><td>X<sup>A</sup>X<sup>a</sup> × X<sup>a</sup>Y</td><td>50% bolnave, 50% purtătoare</td><td>50% bolnavi</td></tr>
<tr><td><b>X<sup>A</sup>X<sup>a</sup> × X<sup>A</sup>Y</b> (cazul obișnuit)</td><td>50% purtătoare</td><td><b>50% bolnavi</b></td></tr>
<tr><td>X<sup>A</sup>X<sup>A</sup> × X<sup>a</sup>Y</td><td>100% purtătoare</td><td>0%</td></tr>
<tr><td>X<sup>A</sup>X<sup>A</sup> × X<sup>A</sup>Y</td><td>0%</td><td>0%</td></tr>
</tbody></table></div>
<div class="pasi">
<div><b>Oblic, discontinuu</b>sare generații prin femei purtătoare</div>
<div><b>Aproape doar bărbați</b>hemizigoți; femeile bolnave sunt rare</div>
<div><b>Niciodată tată → fiu</b>tatăl dă fiului Y, nu X</div>
<div><b>Fiicele bolnavului</b>sunt toate purtătoare obligatorii</div>
</div>
<p><b>Heterozigotele manifeste:</b> dacă X-ul mutant rămâne activ în majoritatea celulelor (<a href="#/lp08/lyon">inactivare X deviată</a>), purtătoarea are semne atenuate. Exemple din carte: distrofia Duchenne, hemofilia, daltonismul, sindromul X fragil, boala Fabry.</p>
<div class="capcana"><b>X fragil și Fabry nu sunt XLR „clasice”</b>
<p>În <b>sindromul X fragil</b> (mutație dinamică), ~50% din femeile cu mutație completă au dizabilitate intelectuală, iar mutația se amplifică trecând prin mamă (<a href="#/c10/xfragil">ghidul de curs</a>). În <b>boala Fabry</b>, majoritatea femeilor heterozigote au semne, uneori severe. De aceea ghidurile actuale preferă termenul simplu „legat de X”, fără dominant/recesiv, pentru multe boli.</p></div>`
},
{
id: "y", titlu: "Transmiterea legată de Y (holandrică)", pag: "112", emery: "cap. 6, p. 79", acopera: ["lp09-r21"],
html: `
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Arbore cu transmitere legată de Y">
${ped({
  ind: { a: [100, 0, "M", "a"], b: [160, 0, "F"], c: [60, 1, "M", "a"], d: [120, 1, "F"], e: [190, 1, "M", "a"], f: [250, 1, "F"], g: [60, 2, "F"], h: [120, 2, "M", "a"], i: [200, 2, "M", "a"], j: [260, 2, "F"] },
  mar: [["a", "b"], ["c", "d"], ["e", "f"]],
  kids: [[["a", "b"], ["c", "d", "e"]], [["c", "d"], ["g", "h"]], [["e", "f"], ["i", "j"]]],
  gy: { 0: 40, 1: 110, 2: 180 }
})}
${fo(320, 40, 420, 170, "De la tată la <b>toți fiii</b>, niciodată la fiice. (Femeia II-2 din desen e soția intrată în familie.)<br><br>Cartea spune că trăsăturile holandrice „nu au importanță patologică”. Excepție importantă: <b>microdelețiile AZF</b> ale lui Yq dau azoospermie sau oligospermie severă; prin ICSI, bărbatul infertil poate avea copii, iar toți fiii lui moștenesc deleția și infertilitatea.")}
</svg>
<figcaption><b>Transmiterea holandrică.</b> Y are puține gene (majoritatea pentru determinarea sexului și spermatogeneză), deci exemplele sunt rare. Schemă proprie.</figcaption>
</figure>`
},
{
id: "aplicatii", titlu: "Aplicații practice: probleme rezolvate", pag: "112–114", emery: "cap. 8", acopera: [],
html: `
<p>Metoda pentru fiecare problemă: <b>1)</b> desenează arborele generație cu generație, numerotând la sfârșit; <b>2)</b> stabilește tipul de transmitere; <b>3)</b> scrie genotipurile sigure (obligatorii) și apoi pe cele probabile; <b>4)</b> calculează riscul înmulțind probabilitățile.</p>
<h3>Problema 1: hemofilia</h3>
<p>Un bărbat sănătos și o femeie purtătoare a mutației pentru hemofilie au un băiat sănătos, un băiat bolnav și o fată sănătoasă. Fata se căsătorește cu un bărbat sănătos și, din patru nașteri, are 5 copii: un băiat sănătos, o fată decedată în prima lună, două fete identice și un băiat cu hemofilie (cazul primar).</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Arborele problemei 1">
${ped({
  ind: { a: [100, 0, "M"], b: [160, 0, "F", "c"], c: [60, 1, "M"], d: [120, 1, "M", "a"], e: [190, 1, "F", "c"], f: [250, 1, "M"], g: [120, 2, "M"], h: [180, 2, "F", "", "d"], i: [230, 2, "F"], j: [270, 2, "F"], k: [330, 2, "M", "a", "p"] },
  mar: [["a", "b"], ["e", "f"]],
  kids: [[["a", "b"], ["c", "d", "e"]], [["e", "f"], ["g", "h", "i", "j", "k"], [["i", "j", "mz"]]]],
  gy: { 0: 40, 1: 120, 2: 200 }
})}
${fo(400, 30, 350, 230, "<b style='color:var(--ink)'>a.</b> Arborele: II-3 e <b>purtătoare obligatorie</b> (are un fiu bolnav). Gemenele III-3 și III-4 sunt monozigote (bara orizontală).<br><b style='color:var(--ink)'>b.</b> Probandul III-5 (X<sup>a</sup>Y) × femeie sănătoasă (X<sup>A</sup>X<sup>A</sup>): <b>toate fiicele purtătoare</b> (100%), dar <b>0% bolnave</b>; fiii sănătoși.<br><b style='color:var(--ink)'>c.</b> Recesiv legat de X.")}
</svg>
<figcaption><b>Soluția problemei 1</b>, desenată cu simbolurile din ghid.</figcaption>
</figure>
<h3>Problema 5: fibroza chistică într-o căsătorie între veri</h3>
<p>Un cuplu sănătos are doi băieți și o fată; tatăl a decedat. Primul băiat, căsătorit cu o femeie sănătoasă, are trei copii din două nașteri: două fete identice și un băiat. Băiatul se căsătorește cu fiica sănătoasă a cazului II-4 și se naște o fată cu fibroză chistică (cazul primar).</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Arborele problemei 5">
${ped({
  ind: { a: [120, 0, "M", "", "d"], b: [180, 0, "F"], c: [60, 1, "M"], d: [120, 1, "F"], e: [190, 1, "M"], f: [260, 1, "F"], g: [320, 1, "M"], h: [50, 2, "F"], i: [90, 2, "F"], j: [150, 2, "M", "h"], k: [260, 2, "F", "h"], l: [205, 3, "F", "a", "p"] },
  mar: [["a", "b"], ["c", "d"], ["f", "g"], ["j", "k", 1]],
  kids: [[["a", "b"], ["c", "e", "f"]], [["c", "d"], ["h", "i", "j"], [["h", "i", "mz"]]], [["f", "g"], ["k"]], [["j", "k"], ["l"]]],
  gy: { 0: 40, 1: 120, 2: 200, 3: 280 }
})}
${fo(400, 30, 350, 270, "<b style='color:var(--ink)'>a.</b> Cazul II-4 e fata cuplului inițial, deci părinții probandului (III-3 și III-4) sunt <b>veri primari</b>: linie dublă de căsătorie.<br><b style='color:var(--ink)'>b.</b> Au un copil bolnav, deci <b>ambii sunt purtători obligatorii</b>. Riscul pentru sarcina în curs: <b>1/4 (25%)</b>, ca la orice sarcină a doi purtători.<br><b style='color:var(--ink)'>c.</b> Autozomal recesiv; mutația a venit probabil de la unul dintre bunicii comuni (I-1 sau I-2).")}
</svg>
<figcaption><b>Soluția problemei 5.</b> Heterozigoții dovediți sunt marcați pe jumătate.</figcaption>
</figure>
<div class="intrebari"><h4>Celelalte probleme din carte</h4>
<details class="q"><summary>Problema 2: acondroplazia (homozigotul e letal). a) Doi părinți cu acondroplazie: ce proporție de copii moștenesc boala?</summary><div>Aa × Aa → ¼ AA (letal, nu se naște), ½ Aa, ¼ aa. Dintre copiii născuți vii, <b>2/3 au acondroplazie</b>, 1/3 sunt sănătoși; în plus, risc de 25% de pierdere a sarcinii.</div></details>
<details class="q"><summary>Problema 2: b) Fratele sănătos al unui copil cu acondroplazie, căsătorit cu o femeie sănătoasă: ce risc au copiii? c) Trăsăturile arborelui?</summary><div>b) Fratele sănătos e aa (boala dominantă cu penetranță completă), deci riscul e practic <b>0</b> (doar mutații noi). c) Transmitere AD; ~80% din cazuri sunt mutații de novo, asociate cu vârsta paternă avansată, deci arborele arată adesea un caz izolat.</div></details>
<details class="q"><summary>Problema 3: polidactilia. b) Riscul la făt dacă ambii părinți sunt heterozigoți? c) Mecanismul?</summary><div>b) Aa × Aa → <b>75%</b> afectați (AA și Aa). c) Autozomal dominant, cu expresivitate variabilă (hexadactilie, polidactilie de grade diferite).</div></details>
<details class="q"><summary>Problema 4: alcaptonuria (AR). a) Doi părinți bolnavi? b) Sora sănătoasă a unui bolnav × partener AA?</summary><div>a) aa × aa → <b>100%</b> bolnavi. b) Sora are 2/3 șanse de a fi purtătoare; cu un partener AA, <b>niciun copil bolnav</b>; probabilitatea ca un copil să fie purtător = 2/3 × 1/2 = <b>1/3</b>.</div></details>
<details class="q"><summary>Problema 6: o femeie are un băiat sănătos, o fată sănătoasă și un băiat cu hemofilie. a) Riscul ca fata să fie purtătoare?</summary><div>Dacă mama e purtătoare: <b>1/2</b>. Atenție: un singur băiat bolnav fără alte cazuri în familie poate fi și mutație nouă (~1/3 din cazurile de hemofilie), caz în care mama ar putea să nu fie purtătoare; riscul real se calculează bayesian (<a href="#/c11/risc">curs</a>) sau prin testarea mamei.</div></details>
<details class="q"><summary>Problema 6: b) Băiatul bolnav × o femeie homozigotă normală: riscul ca fetele să moștenească mutația? c) Băieți bolnavi?</summary><div>b) <b>100%</b> din fiice sunt purtătoare. c) <b>0%</b>: fiii primesc Y de la tată.</div></details>
<details class="q"><summary>Problema 7: fiica unei femei (căsătorită cu un bărbat cu hemofilie) are o fată sănătoasă și un nou-născut băiat. Riscul ca băiatul să aibă hemofilie?</summary><div>De la tată: <b>0</b> (tatăl îi dă Y). Riscul vine doar dacă mama e purtătoare. Familia ei are un frate decedat la 11 luni (cauză neprecizată) și o soră sterilă; dacă fratele a avut hemofilie, bunica e purtătoare, mama are 1/2 șanse să fie purtătoare și băiatul 1/2 × 1/2 = <b>1/4</b>. Fără această informație, riscul e cel din populație. Fata cuplului e însă sigur purtătoare (de la tată).</div></details>
<details class="q"><summary>Problema 8: rahitismul vitamino-rezistent (XLD). Mamă bolnavă heterozigotă × tată sănătos: risc pentru fii, fiice? Rudele sănătoase? Fiii bărbaților bolnavi?</summary><div>Fii: <b>50%</b>; fiice: <b>50%</b>; rudele sănătoase nu transmit (<b>0%</b>); fiii unui bărbat bolnav: <b>0%</b> (dar toate fiicele lui sunt bolnave).</div></details>
</div>`
}
]
});
})();
