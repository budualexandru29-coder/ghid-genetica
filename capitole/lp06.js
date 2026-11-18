/* LP VI — Anomaliile cromozomiale structurale (LP p. 58–78) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf6)"/>`;
// cromozom orizontal din litere: majuscule = cromozomul 1 (albastru), minuscule = cromozomul 2 (galben), „|” = centromer
const W = 24;
const lat = (s) => [...s].reduce((n, c) => n + (c === "|" ? 8 : W + 2), 0);
const hcr = (x, y, s, et = "", cls = {}) => {
  let o = "", cx = x;
  for (const c of s) {
    if (c === "|") { o += `<circle cx="${cx + 3}" cy="${y + 11}" r="5.5" class="fZ"/>`; cx += 8; continue; }
    const up = c === c.toUpperCase();
    o += `<rect x="${cx}" y="${y}" width="${W}" height="22" rx="5" class="${cls[c] || (up ? "fA" : "fC")}"/><text x="${cx + W / 2}" y="${y + 16}" text-anchor="middle" style="fill:#fff;font-size:12px" class="b">${c.toUpperCase()}</text>`;
    cx += W + 2;
  }
  return o + (et ? `<text x="${cx + 8}" y="${y + 16}" class="ti" style="font-size:12.5px">${et}</text>` : "");
};
const inelSeg = (cx, cy, r, s) => { // cromozom inelar
  const L = [...s].filter((c) => c !== "|"); let o = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" class="sA" stroke-width="22" opacity=".9"/>`;
  L.forEach((c, i) => { const t = -Math.PI / 2 + i * 2 * Math.PI / L.length; o += `<text x="${(cx + r * Math.cos(t)).toFixed(1)}" y="${(cy + r * Math.sin(t) + 4.5).toFixed(1)}" text-anchor="middle" style="fill:#fff;font-size:12px" class="b">${c}</text>`; });
  return o + `<circle cx="${cx + r}" cy="${cy}" r="6" class="fZ"/>`;
};
// mărimea unor deleții (Mb, valori tipice din literatură)
const MARIMI = [["Cri du chat (5p−)", 5, 40, "fT"], ["Wolf–Hirschhorn (4p16.3)", 1.5, 30, "fT"], ["Prader–Willi / Angelman (15q11–q13)", 5, 6, "fP"], ["Smith–Magenis (17p11.2)", 3.5, 3.7, "fP"], ["22q11.2 (DiGeorge)", 1.5, 3, "fP"], ["Williams (7q11.23)", 1.5, 1.8, "fP"], ["CMT1A (dup 17p12)", 1.4, 1.4, "fG"]];

GHID.capitol({
id: "lp06",
intro: `<p class="lead">Anomaliile structurale schimbă forma și conținutul unui cromozom: segmente pierdute, dublate, întoarse sau mutate pe alt cromozom. Regula care le ordonează pe toate: contează dacă materialul genetic total s-a schimbat. <b>Echilibrate</b>: purtător sănătos, dar cu risc reproductiv. <b>Neechilibrate</b>: fenotip anormal. Capitolul se încheie cu sindroamele de deleție și cu anomaliile din cancer.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Clasificarea anomaliilor structurale după efect">${DEFS}
<rect x="270" y="10" width="220" height="40" rx="10" class="fcard sm" stroke-width="1"/><text x="380" y="35" text-anchor="middle" class="ti b">Anomalie structurală</text>
${sag(330, 50, 190, 84)}${sag(430, 50, 570, 84)}
<rect x="40" y="88" width="300" height="44" rx="10" class="foks"/><text x="190" y="108" text-anchor="middle" class="tok b">Echilibrată</text><text x="190" y="125" text-anchor="middle" class="tm" style="font-size:11.5px">aceeași cantitate de material</text>
<rect x="420" y="88" width="300" height="44" rx="10" class="fws"/><text x="570" y="108" text-anchor="middle" class="tw2 b">Neechilibrată</text><text x="570" y="125" text-anchor="middle" class="tm" style="font-size:11.5px">material în plus sau în minus</text>
${fo(40, 142, 300, 120, "inversii · translocații reciproce · translocații robertsoniene · inserții<br><br><b style='color:var(--ink)'>Purtătorul e de obicei sănătos</b>. Riscul apare la copii: gameți dezechilibrați → avorturi, sterilitate, copii cu malformații. Excepție: ruptura taie o genă.")}
${fo(420, 142, 300, 120, "deleții · duplicații · cromozomi inelari · izocromozomi · dicentrici · marker<br><br><b style='color:var(--ink)'>Purtătorul are fenotip anormal</b>: monosomie parțială (deleție) sau trisomie parțială (duplicație). Pierderea e mai gravă decât câștigul.")}
</svg>
<figcaption><b>Primul pas la orice anomalie structurală:</b> e echilibrată sau nu? De răspuns depind și fenotipul purtătorului, și sfatul genetic. Schemă proprie după carte.</figcaption>
</figure>`,
sectiuni: [
{
id: "generalitati", titlu: "Cum apar: rupturi cromozomice și cromatidice", pag: "58–59", emery: "cap. 3, p. 38–42", acopera: ["lp06-r01", "lp06-r02"], curs: ["c05/extinse", "c05/cauze"],
html: `
<p>Anomaliile structurale apar clasic prin <b>ruperea</b> cromozomilor urmată de reunire greșită sau de pierderea fragmentelor. Rupturile pot fi spontane (situsuri fragile) sau produse de agenți <b>clastogeni</b>: radiații ionizante, unele substanțe chimice, virusuri. Un al doilea mecanism, mai important pentru sindroamele cu microdeleții, e <b>crossing-over-ul inegal</b> între secvențe repetitive asemănătoare.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Ruptură cromozomică față de ruptură cromatidică">
${(() => {
  const crz = (x, y, rupt) => { // două cromatide verticale, ruptura la 60%
    let o = "";
    [0, 1].forEach((k) => { const xx = x + k * 20; const r = rupt === "ambele" || (rupt === "una" && k === 1);
      o += r ? `<rect x="${xx}" y="${y}" width="16" height="70" rx="7" class="fA"/><rect x="${xx + (rupt === "una" ? 6 : 0)}" y="${y + 84}" width="16" height="56" rx="7" class="fA"/>` : `<rect x="${xx}" y="${y}" width="16" height="140" rx="7" class="fA"/>`; });
    return o + `<circle cx="${x + 18}" cy="${y + 40}" r="6" class="fZ"/>`;
  };
  return `<text x="40" y="24" class="ti b">Ruptură cromozomică</text>${crz(80, 50, "ambele")}${fo(150, 50, 220, 160, "Agentul acționează în <b>G0/G1</b>, înainte de replicare. Leziunea se copiază pe ambele cromatide („în oglindă”): ambele sunt rupte la același nivel.")}
<text x="410" y="24" class="ti b">Ruptură cromatidică</text>${crz(450, 50, "una")}${fo(520, 50, 220, 160, "Agentul acționează în <b>S/G2</b>, după replicare. E ruptă o singură cromatidă; fragmentul distal e adesea deplasat lateral.")}
<text x="40" y="236" class="tm">Rupturile se văd în metafază; cele cromatidice se numără în testele de mutagenitate.</text>`;
})()}
</svg>
<figcaption><b>Momentul din ciclul celular decide tipul rupturii</b> (<a href="#/lp01/ciclu">ciclul celular</a>). Schemă proprie.</figcaption>
</figure>
<h3>Tabelul 3, ca imagine: câte rupturi, câți cromozomi</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Anomalii structurale după numărul de rupturi și de cromozomi">
${(() => {
  let o = `<text x="250" y="24" text-anchor="middle" class="ti b">un cromozom</text><text x="580" y="24" text-anchor="middle" class="ti b">doi cromozomi</text>`;
  const R = [["1 ruptură", "deleție terminală", "—"], ["2 rupturi", "deleție interstițială · cromozom inelar · inversie · duplicație/deleție prin schimb inegal între cromatide surori", "translocație reciprocă · translocație robertsoniană · duplicație/deleție prin recombinare inegală"], ["3 rupturi", "rearanjări complexe", "inserție"]];
  R.forEach(([n, a, b], i) => { const y = 36 + i * 96; o += `<rect x="10" y="${y}" width="100" height="88" rx="8" class="fas"/><text x="60" y="${y + 50}" text-anchor="middle" class="ta b">${n}</text><rect x="118" y="${y}" width="300" height="88" rx="8" class="fcard sm" stroke-width=".6"/>${fo(128, y + 8, 282, 76, a, "color:var(--ink);font-size:12.5px")}<rect x="426" y="${y}" width="324" height="88" rx="8" class="fcard sm" stroke-width=".6"/>${fo(436, y + 8, 306, 76, b, "color:var(--ink);font-size:12.5px")}`; });
  return o + `<text x="10" y="326" class="tm">Plus izocromozomul, un tip special. O anomalie e stabilă dacă fiecare cromozom rezultat are un singur centromer.</text>`;
})()}
</svg>
<figcaption><b>Tabelul 3 din carte</b>, redesenat. Rupturile se pot repara greșit doar dacă ambele capete sunt „lipicioase”; telomerele normale protejează capetele cromozomilor de fuziune.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un purtător de translocație echilibrată e sănătos. De ce ar avea nevoie de sfat genetic?</summary><div>Pentru că în meioză cromozomii derivați se pot separa în combinații dezechilibrate: avorturi repetate, infertilitate sau copii cu monosomie/trisomie parțială.</div></details>
</div>`
},
{
id: "deletii", titlu: "Delețiile", pag: "60–61", emery: "cap. 3, p. 39; cap. 17, p. 259–262", acopera: ["lp06-r03", "lp06-r04", "lp06-r05"], curs: ["c05/extinse"],
html: `
<p>Deleția (<b>del</b>) e pierderea unui fragment: o <b>monosomie parțială</b>. Doar delețiile mici sunt compatibile cu viața (peste ~2% din genomul haploid sunt letale), de aceea se văd greu fără bandare de înaltă rezoluție sau FISH.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Deleție terminală și deleție interstițială">
${hcr(130, 30, "AB|CDEFG", "normal")}
${hcr(130, 90, "AB|CDE", "deleție terminală: lipsesc F–G (o ruptură)")}
${hcr(130, 150, "AB|CFG", "deleție interstițială: lipsesc D–E (două rupturi)")}
<text x="20" y="46" class="tm">cromozom</text><text x="20" y="106" class="tm">del ter</text><text x="20" y="166" class="tm">del int</text>
<text x="20" y="204" class="tm">Litere = segmente; cercul negru = centromerul.</text>
</svg>
<figcaption><b>Două tipuri, după poziție.</b> Majoritatea delețiilor sunt de fapt <b>interstițiale</b>: nu cer formarea unui telomer nou la capătul rupt. Schemă proprie.</figcaption>
</figure>
<h3>Mecanismul principal: recombinarea omologă nealelică (NAHR)</h3>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Recombinarea omologă nealelică între repetiții cu copii scăzute">${DEFS}
${(() => {
  const lin = (x, y, cl, et) => `<rect x="${x}" y="${y}" width="420" height="16" rx="8" class="${cl}"/><text x="${x - 10}" y="${y + 13}" text-anchor="end" class="ti b" style="font-size:12px">${et}</text>`;
  const lcr = (x, y) => `<rect x="${x}" y="${y - 3}" width="34" height="22" rx="4" class="fT"/>`;
  let o = lin(120, 40, "fA", "omolog 1") + lcr(200, 40) + lcr(360, 40) + lin(220, 84, "fC", "omolog 2");
  o += lcr(200, 84) + lcr(360, 84) + `<text x="380" y="30" text-anchor="middle" class="ta" style="font-size:11.5px">LCR „B”</text><text x="217" y="30" text-anchor="middle" class="ta" style="font-size:11.5px">LCR „A”</text>`;
  o += `<path d="M377 59 L217 81" class="sa" stroke-width="2.5" stroke-dasharray="5 3"/><text x="300" y="76" class="tw2 b" style="font-size:12px">✕ crossing-over</text>`;
  o += `<text x="120" y="140" class="ti b">Rezultat:</text>`;
  o += `<rect x="120" y="156" width="270" height="16" rx="8" class="fA"/>${lcr(200, 156)}<text x="400" y="169" class="tw2 b">deleție</text>`;
  o += `<rect x="120" y="196" width="430" height="16" rx="8" class="fC"/>${lcr(200, 196)}${lcr(330, 196)}${lcr(470, 196)}<text x="560" y="209" class="tok b">duplicație reciprocă</text>`;
  o += `<text x="20" y="258" class="tm">LCR = repetiții specifice (low-copy repeats), >95% identice. Omologii se aliniază greșit, decalați cu o repetiție.</text>`;
  return o;
})()}
</svg>
<figcaption><b>De ce aceleași microdeleții apar la pacienți fără legătură între ei:</b> granițele sunt fixate de repetițiile flancante, deci deleția are aproape aceeași mărime la toți (de ex. ~3 Mb în 22q11.2). Același mecanism produce și duplicația reciprocă. Alte cauze: segregarea unei translocații sau inserții parentale, crossing-over în bucla unei inversii. Schemă proprie.</figcaption>
</figure>
<h3>Microscopice sau submicroscopice</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Mărimea delețiilor comparată cu rezoluția metodelor">
${(() => {
  const X0 = 300, Wd = 420, lo = Math.log10(0.05), hi = Math.log10(50), X = (v) => X0 + (Math.log10(v) - lo) / (hi - lo) * Wd;
  let o = "";
  [[0.1, "0,1"], [1, "1"], [10, "10"], [50, "50 Mb"]].forEach(([v, t]) => (o += `<line x1="${X(v)}" y1="20" x2="${X(v)}" y2="262" class="sm" stroke-dasharray="2 4" opacity=".6"/><text x="${X(v)}" y="278" text-anchor="middle" class="tm" style="font-size:11px">${t}</text>`));
  o += `<rect x="${X(5)}" y="20" width="${X(50) - X(5)}" height="242" class="fis" opacity=".55"/><text x="${X(12)}" y="16" text-anchor="middle" class="tin b" style="font-size:11.5px">vizibil pe cariotip (≥ ~5 Mb)</text>`;
  MARIMI.forEach(([n, a, b, c], i) => { const y = 32 + i * 33; o += `<text x="${X0 - 10}" y="${y + 13}" text-anchor="end" class="ti" style="font-size:12px">${n}</text><rect x="${X(a) - (a === b ? 4 : 0)}" y="${y}" width="${Math.max(X(b) - X(a), 8)}" height="18" rx="4" class="${c}"/>`; });
  o += `<text x="20" y="300" class="tm">Rezoluție tipică: FISH ~0,1–0,2 Mb (sondă țintită); CMA ~0,05–0,2 Mb (tot genomul); cariotip 400–550 benzi ~5–10 Mb.</text><text x="20" y="318" class="tm">Valori tipice, rotunjite, din literatura clinică.</text>`;
  return o;
})()}
</svg>
<figcaption><b>De ce microdelețiile scapă cariotipului.</b> Delețiile mari (5p, 4p) se văd la microscop; cele de 1,5–3 Mb nu. Prin pierderea mai multor gene vecine ele produc <b>sindroame de gene contigue</b>. Azi metoda de primă linie e analiza cromozomială prin microarray (<a href="#/lp02/derivate">LP II</a>).</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Sindrom (Tabelul 4)</th><th>Regiune</th><th>Semne din carte</th><th>Ce trebuie corectat</th></tr></thead>
<tbody>
<tr><td>Prader–Willi</td><td>del(15)(q11q13) <b>paternă</b></td><td>hipotonie, obezitate, dismorfie, DI</td><td>doar ~70% sunt deleții; restul disomie maternă (~25%) sau defect de amprentare</td></tr>
<tr><td>Angelman</td><td>del(15)(q11q13) <b>maternă</b></td><td>DI severă, ataxie, crize de râs</td><td>tabelul nu spune că aceeași deleție dă boli diferite după părinte (<a href="#/c04/pws-as">amprentarea genomică</a>)</td></tr>
<tr><td>Rubinstein–Taybi</td><td>16p13.3</td><td>police și haluce late, DI</td><td>de obicei <b>mutații punctiforme</b> în <i>CREBBP</i> (sau <i>EP300</i>); deleția e cauza a doar ~10%</td></tr>
<tr><td>22q11.2 (DiGeorge / velocardiofacial)</td><td>del(22)(q11.2)</td><td>malformații cardiace, despicătură palatină, dismorfie</td><td>numele actual: <b>sindromul deleției 22q11.2</b></td></tr>
</tbody></table></div>`
},
{
id: "inel-duplicatii", titlu: "Cromozomii inelari și duplicațiile", pag: "62–63", emery: "cap. 3, p. 40–41", acopera: ["lp06-r06", "lp06-r07", "lp06-r08", "lp06-r10"],
html: `
<figure>
<svg viewBox="0 0 760 220" role="img" aria-label="Formarea unui cromozom inelar">${DEFS}
${hcr(30, 40, "AB|CDEFG", "", { A: "fZ", G: "fZ" })}
<path d="M56 34 v34 M184 34 v34" class="sa" stroke-width="2.5" stroke-dasharray="4 3"/>
${sag(240, 51, 330, 90)}
${inelSeg(420, 110, 52, "B|CDEF")}
<text x="30" y="96" class="tm" style="font-size:11.5px">rupturi pe ambele brațe; capetele A și G se pierd</text>
<text x="420" y="194" text-anchor="middle" class="ti b">r: inel</text>
${fo(510, 50, 240, 140, "Capetele „lipicioase” ale fragmentului centric se unesc. Rezultă o <b>deleție a ambelor capete</b>. Inelele sunt instabile în mitoză (se rup, se dublează, se pierd), deci apar des în mozaic.")}
</svg>
<figcaption><b>Cromozomul inelar (r).</b> Cele mai frecvente: r(X), r(18), r(21), r(22), r(15). Efectele sunt de obicei severe. Schemă proprie.</figcaption>
</figure>
[[img:r18|<b>Cromozom 18 inelar</b> într-un cariotip: un cerc mic în locul unuia dintre cromozomii 18.]]
<h3>Duplicațiile</h3>
<p>Duplicația (<b>dup</b>) e prezența unui segment în dublu exemplar pe același cromozom: o <b>trisomie parțială</b>. Apare mai ales prin <b>crossing-over inegal</b> între omologi, aceeași eroare care produce deleția reciprocă.</p>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Duplicație în tandem și în tandem inversat">
${hcr(170, 20, "AB|CDEFG", "normal")}
${hcr(170, 70, "AB|CDEDEFG", "duplicație în tandem (aceeași ordine)", { D: "fT", E: "fT" })}
${hcr(170, 120, "AB|CDEEDFG", "în tandem inversat (ordine întoarsă)", { D: "fT", E: "fT" })}
</svg>
<figcaption><b>Figura 17 din carte, redesenată.</b> Segmentul dublat e colorat diferit. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Două exemple greșite în carte</b>
<p>Cartea dă ca duplicații frecvente „dup12q (sindromul Pallister)” și „dup17q (Charcot–Marie–Tooth)”. Corect: <b>Charcot–Marie–Tooth tip 1A</b> e dată de duplicația de 1,4 Mb din <b>17p12</b>, care conține gena <i>PMP22</i> (exemplul clasic de NAHR; deleția reciprocă dă neuropatia ereditară cu paralizii la compresiune). <b>Sindromul Pallister–Killian</b> e o <b>tetrasomie 12p</b> în mozaic, prin izocromozom 12p supranumerar, nu o duplicație 12q.</p></div>`
},
{
id: "inversii", titlu: "Inversiile", pag: "63–64", emery: "cap. 3, p. 41", acopera: ["lp06-r09", "lp06-r11", "lp06-r13"],
html: `
<p>Inversia (<b>inv</b>) apare prin două rupturi și rotirea cu 180° a segmentului dintre ele. Materialul e complet, deci purtătorul e de obicei sănătos.</p>
<figure>
<svg viewBox="0 0 760 180" role="img" aria-label="Inversie paracentrică și pericentrică">
${hcr(180, 22, "AB|CDEFG", "normal")}
${hcr(180, 74, "AB|CFEDG", "paracentrică: ambele rupturi pe același braț", { F: "fT", E: "fT", D: "fT" })}
${hcr(180, 126, "ADC|BEFG", "pericentrică: câte o ruptură pe fiecare braț", { D: "fT", C: "fT", B: "fT" })}
<text x="20" y="38" class="tm">cromozom</text><text x="20" y="90" class="tm">inv para</text><text x="20" y="142" class="tm">inv peri</text>
</svg>
<figcaption><b>Paracentrică</b>: segmentul nu conține centromerul; forma cromozomului nu se schimbă, se vede doar după benzi. <b>Pericentrică</b>: segmentul conține centromerul, care își poate schimba poziția; raportul brațelor se modifică. Schemă proprie.</figcaption>
</figure>
[[img:inversiuni|<b>Inversie paracentrică și pericentrică</b>, schemă cu bandare.]]
<h3>Riscul reproductiv: bucla de inversie</h3>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Produșii recombinați ai unei inversii pericentrice și paracentrice">
<text x="20" y="22" class="ti b">În meioză, omologii se împerechează formând o buclă. Un crossing-over în buclă dă:</text>
<text x="20" y="56" class="ta b">Inversie pericentrică</text>
${hcr(40, 70, "ABC|DEA", "dup(A) + del(F–G)", { A: "fT" })}
${hcr(40, 104, "GFBC|DEFG", "dup(F–G) + del(A)", { F: "fT", G: "fT" })}
${fo(470, 60, 280, 76, "Produșii au <b>un centromer</b> și pot ajunge la naștere: copii cu duplicație a unui capăt și deleție a celuilalt.")}
<text x="20" y="170" class="ta b">Inversie paracentrică</text>
${hcr(40, 184, "AB|CDEFC|BA", "dicentric", { C: "fG", B: "fG", A: "fG" })}
${hcr(40, 218, "GDEFG", "acentric", { G: "fZ", D: "fZ", E: "fZ", F: "fZ" })}
${fo(470, 176, 280, 76, "Un produs are <b>doi centromeri</b> (se rupe în anafază), celălalt <b>niciunul</b> (se pierde). Concepțiile sunt de regulă neviabile: avorturi precoce.")}
<text x="20" y="276" class="tm">Exemplu: normal A B C | D E F G, segmentul inversat B–E (pericentric) sau D–F (paracentric). Schemă proprie.</text>
</svg>
<figcaption><b>De ce inversiile pericentrice sunt mai periculoase pentru descendenți</b> decât cele paracentrice: produsul dezechilibrat al celor pericentrice e viabil. Riscul total pentru un copil afectat: <b>~5–10%</b>, cu atât mai mare cu cât segmentul inversat e mai lung. Aproximativ 1‰ din oameni poartă o inversie.</figcaption>
</figure>
<div class="cheie"><b>Excepția banală: inv(9)(p12q13)</b>
<p>Inversia pericentrică a regiunii heterocromatice a cromozomului 9 e o <b>variantă normală</b> (~1–3% din populație), fără risc reproductiv. Se raportează, dar nu se tratează ca anomalie (<a href="#/lp03/heteromorfism">LP III, heteromorfisme</a>).</p></div>`
},
{
id: "izocromozomi", titlu: "Izocromozomii și cromozomii marker", pag: "64–65", emery: "cap. 3, p. 41–42", acopera: ["lp06-r12", "lp06-r14", "lp06-r16"],
html: `
<p>Izocromozomul (<b>i</b>) are două brațe identice: două brațe lungi sau două scurte. Rezultatul e o <b>trisomie a brațului prezent</b> și o <b>monosomie a brațului lipsă</b>. Cel mai frecvent: <b>i(Xq)</b> în sindromul Turner (<a href="#/lp05/turner">LP V</a>).</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Două mecanisme de formare a izocromozomului">${DEFS}
<text x="20" y="22" class="ti b">1. Diviziune transversală a centromerului (explicația clasică)</text>
${hcr(40, 40, "ab|CDE", "", { a: "fC", b: "fC" })}${sag(200, 51, 250, 51)}
${hcr(260, 40, "EDC|CDE", "i(q): două brațe lungi")}${hcr(260, 74, "ba|ab", "i(p): două brațe scurte")}
<text x="20" y="128" class="ti b">2. Schimb între cromatidele surori lângă centromer (mai frecvent)</text>
${hcr(40, 146, "EDC||CDE", "izodicentric: doi centromeri foarte apropiați, văzuți ca unul")}
<text x="20" y="200" class="tm">Galben = brațul scurt, verde = brațul lung. Schemă proprie.</text>
</svg>
<figcaption><b>Cele două mecanisme din carte.</b> Majoritatea i(Xq) sunt de fapt <b>izodicentrice</b>; scrierea ISCN modernă e i(X)(q10).</figcaption>
</figure>
[[gal:izocrz_formare|<b>Formarea izocromozomului</b> prin diviziunea greșită a centromerului.;;ixq_cariotip|<b>Cariotip 46,X,i(X)(q10)</b> la o pacientă cu sindrom Turner: un X normal și un izocromozom de braț lung.]]
<h3>Cromozomii marker</h3>
<p>Cromozomul <b>marker (mar)</b> e un cromozom suplimentar mic, a cărui origine nu se poate stabili după bandare; adesea în mozaic. Poate fi un inel mic sau poate conține regiunea pericentromerică a unui cromozom (frecvent 15, uneori X). Originea se stabilește prin FISH sau microarray; contează dacă are gene (de ex. un mar(15) care include regiunea 15q11–q13 dă un fenotip, unul fără eucromatină nu).</p>`
},
{
id: "translocatii", titlu: "Translocațiile reciproce", pag: "65–67", emery: "cap. 3, p. 38–39; cap. 14", acopera: ["lp06-r15", "lp06-r17", "lp06-r18"], curs: ["c12/translocatii"],
html: `
<p>Translocația e transferul de segmente între doi cromozomi (de obicei neomologi). În <b>translocația reciprocă</b> (ISCN: <b>t</b>), fiecare cromozom se rupe o dată și fragmentele distale se schimbă între ei; rezultă doi <b>cromozomi derivați (der)</b>. Frecvență: ~1/400–1/500 de oameni; mai frecventă la bărbații infertili și la cuplurile cu avorturi repetate. Cea mai frecventă recurentă: <b>t(11;22)(q23;q11)</b>.</p>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Formarea cromozomilor derivați într-o translocație reciprocă">${DEFS}
${hcr(60, 30, "AB|CDEF", "1")}${hcr(60, 90, "ab|cdef", "2")}
<path d="M164 24 v34 M164 84 v34" class="sa" stroke-width="2.5" stroke-dasharray="4 3"/>
${sag(290, 75, 360, 75)}
${hcr(390, 30, "AB|CDef", "der(1)")}${hcr(390, 90, "ab|cdEF", "der(2)")}
<text x="60" y="150" class="tm">Rupturile (linia punctată) cad între D și E, respectiv între d și e. Total: tot materialul e prezent.</text>
</svg>
<figcaption><b>Translocație reciprocă echilibrată</b> (figura 21 din carte). Dacă segmentele schimbate au mărimi apropiate, cariotipul fără bandare nu o vede. Schemă proprie.</figcaption>
</figure>
<h3>Ce se întâmplă în meioză: cvadrivalentul</h3>
<figure>
<svg viewBox="0 0 760 400" role="img" aria-label="Modurile de segregare ale unei translocații reciproce">
${(() => {
  let o = `<text x="20" y="22" class="ti b">Cei patru cromozomi (1, der(1), 2, der(2)) se împerechează în cruce; apoi se separă 2:2 sau 3:1</text>`;
  const M = [["Alternantă", [["A|BC"], ["a|bc"]], "normal", "tok"], ["", [["A|Bc"], ["a|bC"]], "echilibrat (purtător)", "tok"], ["Adiacentă 1", [["A|BC"], ["a|bC"]], "trisomie C + monosomie c", "tw2"], ["", [["a|bc"], ["A|Bc"]], "trisomie c + monosomie C", "tw2"], ["Adiacentă 2", [["A|BC"], ["A|Bc"]], "trisomie A–B + monosomie a–b: de obicei avort", "tm"], ["3:1", [["A|BC"], ["a|bc"], ["A|Bc"]], "47 de cromozomi: trisomie a unui cromozom sau derivat", "tm"]];
  M.forEach(([n, g, r, c], i) => {
    const y = 42 + i * 56;
    o += `<rect x="10" y="${y - 6}" width="740" height="50" rx="8" class="${c === "tok" ? "foks" : c === "tw2" ? "fws" : "fline"}" opacity=".6"/><text x="20" y="${y + 22}" class="ti b" style="font-size:12.5px">${n}</text>`;
    g.forEach(([s], j) => (o += hcr(130 + j * 110, y + 7, s)));
    o += fo(480, y + 2, 266, 40, r, "color:var(--ink);font-weight:600");
  });
  return o + `<text x="20" y="384" class="tm">Fiecare rând = un tip de gamet. Simplificat: ruptura cade între B și C. Verde = cromozomul 1, galben = cromozomul 2.</text>`;
})()}
</svg>
<figcaption><b>Modurile de segregare.</b> Teoretic, doar segregarea alternantă dă gameți echilibrați, deci riscul teoretic de dezechilibru e ~50% sau mai mare. <b>Riscul practic</b> pentru un copil născut cu dezechilibru e de doar <b>1–10%</b>, pentru că majoritatea concepțiilor dezechilibrate se pierd. Riscul depinde de mărimea segmentelor: cu cât sunt mai mici, cu atât produsul e mai viabil. Schemă proprie.</figcaption>
</figure>
<h3>Cromozomul Philadelphia</h3>
<p>Translocațiile reciproce dobândite apar în multe cancere. Exemplul clasic e <b>t(9;22)(q34;q11)</b> din leucemia mieloidă cronică: gena <i>ABL1</i> (9q34) se mută lângă <i>BCR</i> (22q11) și formează gena de fuziune <b>BCR::ABL1</b>, care codifică o tirozin-kinază activă permanent. Cromozomul 22 scurtat, der(22), e <b>cromozomul Philadelphia (Ph)</b>.</p>
[[gal:ph_schema|<b>Formarea cromozomului Philadelphia</b>: schimbul dintre 9q34 și 22q11 produce der(22) cu gena BCR-ABL.;;ph_fish|<b>Detecția fuziunii BCR-ABL prin FISH</b>: semnalele roșu (ABL) și verde (BCR) se suprapun (galben) pe cromozomul Ph.]]
<div class="emery"><b>De la cromozom la medicament</b>
<p>BCR::ABL1 a fost prima țintă moleculară pentru un medicament „inteligent”: <b>imatinibul</b> blochează kinaza și a transformat LMC dintr-o boală letală într-una cronică. Răspunsul se urmărește prin RT-PCR cantitativ al transcriptului de fuziune (<a href="#/lp11">LP XI</a>).</p></div>`
},
{
id: "robertsoniene", titlu: "Translocațiile robertsoniene", pag: "68–69", emery: "cap. 3, p. 39–40", acopera: ["lp06-r19"], curs: ["c12/translocatii"],
html: `
<p>Translocația robertsoniană (<b>rob</b>, „fuziune centrică”) unește doi cromozomi <b>acrocentrici</b> (13, 14, 15, 21, 22) la centromer: brațele lungi formează un singur cromozom, brațele scurte se pierd. Purtătorul are <b>45 de cromozomi</b> și e sănătos: brațele scurte conțin doar gene de ARN ribozomal, prezente în multe copii pe ceilalți acrocentrici.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Formarea unei translocații robertsoniene">${DEFS}
${(() => {
  const acr = (x, y, h, c) => `<rect x="${x}" y="${y}" width="18" height="14" rx="6" class="fZ" opacity=".55"/><circle cx="${x + 9}" cy="${y + 18}" r="5" class="fZ"/><rect x="${x}" y="${y + 22}" width="18" height="${h}" rx="8" class="${c}"/>`;
  return acr(80, 30, 120, "fA") + acr(130, 30, 80, "fC") + `<text x="89" y="190" text-anchor="middle" class="ti b">14</text><text x="139" y="190" text-anchor="middle" class="ti b">21</text>` +
    sag(180, 100, 270, 100) +
    `<rect x="300" y="28" width="18" height="80" rx="8" class="fC"/><circle cx="309" cy="112" r="5" class="fZ"/><rect x="300" y="116" width="18" height="120" rx="8" class="fA" transform="translate(0,-46)"/><text x="309" y="190" text-anchor="middle" class="ti b">rob(14;21)</text>` +
    `<rect x="380" y="40" width="14" height="10" rx="5" class="fZ" opacity=".55"/><rect x="398" y="40" width="14" height="10" rx="5" class="fZ" opacity=".55"/><text x="420" y="50" class="tm" style="font-size:11.5px">brațele scurte (ADNr): pierdute, fără efect</text>` +
    fo(380, 80, 370, 110, "ISCN: 45,XX,rob(14;21)(q10;q10). Cele mai frecvente sunt <b>rob(13;14)</b> și <b>rob(14;21)</b>. Frecvența totală: ~1/1.000 de oameni.");
})()}
</svg>
<figcaption><b>Fuziunea centrică</b> (figura 23 din carte). Ca număr, purtătorul pare să aibă o „monosomie”, dar nu-i lipsește nicio genă importantă. Schemă proprie.</figcaption>
</figure>
<h3>Omologi sau neomologi: riscuri foarte diferite</h3>
<div class="tw"><table>
<thead><tr><th></th><th>rob(14;21), neomologi</th><th>rob(21;21), omologi</th></tr></thead>
<tbody>
<tr><td>Tipuri de gameți</td><td>6 (normal, echilibrat, ±14, ±21)</td><td>2: disomie 21 sau nulisomie 21</td></tr>
<tr><td>Zigoți viabili</td><td>normal, purtător, trisomie 21</td><td>doar trisomie 21</td></tr>
<tr><td>Risc teoretic de sindrom Down</td><td>1/3 din nașteri</td><td>100%</td></tr>
<tr><td>Risc observat</td><td>~10% la mama purtătoare; 1–3% la tatăl purtător</td><td>100%; în plus avorturi (monosomie 21)</td></tr>
</tbody></table></div>
<p>Desenul complet al celor șase tipuri de gameți e în <a href="#/lp04/down-sfat">LP IV, sfatul genetic în sindromul Down</a>. Riscul mai mic la tată se explică prin selecția spermatozoizilor dezechilibrați și prin blocarea frecventă a spermatogenezei la purtători.</p>
<div class="lab"><b>Aplicația practică din carte</b>
<p>Desenează mecanismul și efectele reproductive pentru rob(14q21q) și rob(21q21q): pornește de la cei trei cromozomi ai purtătorului, scrie toate combinațiile de gameți, fecundează fiecare cu un gamet normal și marchează care zigoți sunt viabili.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un cuplu are trei avorturi spontane. Cariotipul mamei: 45,XX,rob(13;14)(q10;q10). Ce poate explica avorturile?</summary><div>Gameții dezechilibrați ai mamei: zigoți cu monosomie 13 sau 14 sau cu trisomie 14 sunt neviabili. Trisomia 13 prin translocație e posibilă la naștere (sindrom Patau), deci se discută diagnosticul prenatal.</div></details>
<details class="q"><summary>De ce un purtător de rob(21;21) nu poate avea un copil sănătos?</summary><div>Fiecare gamet conține fie der(21;21) (două doze de 21 → trisomie după fecundare), fie niciun 21 (→ monosomie 21, letală).</div></details>
</div>`
},
{
id: "insertii-dicentrici", titlu: "Inserții, cromozomi dicentrici și anomalii cromatidice", pag: "69–71", emery: "cap. 3, p. 40", acopera: ["lp06-r20", "lp06-r21", "lp06-r22"], curs: ["c05/cauze"],
html: `
<figure>
<svg viewBox="0 0 760 180" role="img" aria-label="Inserție și cromozom dicentric">
<text x="20" y="22" class="ti b">Inserție (ins): trei rupturi, un segment mutat pe alt cromozom</text>
${hcr(40, 36, "AB|CFG", "donor (lipsesc D–E)")}${hcr(380, 36, "ab|cDEdef", "receptor (primește D–E)", { D: "fA", E: "fA" })}
<text x="20" y="104" class="ti b">Dicentric (dic): două rupturi, fragmentele centrice se unesc</text>
${hcr(40, 118, "AB|CD|dc|ba", "doi centromeri; fragmentele acentrice se pierd")}
</svg>
<figcaption><b>Inserția</b> e echilibrată la purtător, dar segregarea poate da copii cu monosomie sau trisomie parțială (risc până la 50%). <b>Dicentricul</b> e instabil: se rupe în anafază, cu excepția cazului în care unul dintre centromeri e inactivat (pseudodicentric). Schemă proprie.</figcaption>
</figure>
<h3>Anomaliile cromatidice (după replicare, S/G2)</h3>
<div class="pasi">
<div><b>Lacună (gap)</b>zonă necolorată mai îngustă decât lățimea cromatidei, fără deplasarea fragmentului</div>
<div><b>Ruptură cromatidică</b>discontinuitate mai largă decât cromatida, cu fragmentul distal deplasat</div>
<div><b>Figuri radiale</b>schimburi între cromatidele unor cromozomi diferiți: triradiale, tetraradiale</div>
<div><b>Micronuclei</b>fragmentele acentrice nu se prind de fus și rămân în afara nucleilor fiici</div>
</div>
[[img:micronucleu|<b>Micronucleu</b>: un nucleu mic, separat, lângă nucleul principal, format dintr-un fragment acentric sau dintr-un cromozom rămas în urmă.]]
<div class="lab"><b>La ce folosesc în laborator</b>
<p>Numărul de rupturi, figuri radiale și micronuclei în limfocite cultivate e <b>biomarker de expunere</b> la clastogeni (dozimetrie biologică după iradiere, monitorizare profesională). Figurile radiale spontane cresc mult în <b>anemia Fanconi</b>, iar testul cu diepoxibutan (DEB) sau mitomicină C e testul ei diagnostic.</p></div>`
},
{
id: "sindroame-deletie", titlu: "Sindroamele cu deleții mari: Cri du chat, Wolf–Hirschhorn, monosomia 21 parțială", pag: "71–73", emery: "cap. 17, p. 259", acopera: ["lp06-r23", "lp06-r24"],
html: `
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Comparație între sindroamele Cri du chat și Wolf–Hirschhorn">
${(() => {
  const C = [["", "Cri du chat (5p−)", "Wolf–Hirschhorn (4p−)"], ["Deleție", "5p15, mărime variabilă", "4p16.3 (regiunea critică include <i>WHSC1/NSD2</i>, <i>LETM1</i>)"], ["Frecvență", "1/15.000–1/50.000", "1/50.000"], ["Semnul-cheie", "<b>plâns ca mieunatul de pisică</b> (laringe hipoplazic); dispare după 2 ani", "<b>facies „cască de luptător grec”</b>: rădăcina nasului lată, continuată de frunte"], ["Față", "microcefalie, facies rotund „lună plină”, hipertelorism, epicantus, fante oblice în jos, micrognatie", "microcefalie, hipertelorism, arcade proeminente, urechi jos inserate"], ["Altele", "DI severă, malformații cardiace, metacarpiene scurte, scolioză", "hipotrofie marcată, DI severă, crize, malformații cardiace; 1/3 mor în primul an"], ["Sfat genetic", "risc minim dacă e de novo; mai mare la o translocație parentală", "idem; cariotipul părinților e obligatoriu"]];
  let o = "";
  C.forEach((r, i) => r.forEach((c, j) => { const x = j ? 130 + (j - 1) * 312 : 10, w = j ? 306 : 116, y = 6 + i * 41; o += `<rect x="${x}" y="${y}" width="${w}" height="37" rx="6" class="${i === 0 ? ["fcard", "fT", "fP"][j] : j === 0 ? "fas" : "fcard"}"/>` + fo(x + 6, y + 2, w - 12, 35, c, `color:${i === 0 && j ? "#fff" : "var(--ink)"};font-weight:${i === 0 || j === 0 ? 700 : 400};font-size:11.5px`); }));
  return o;
})()}
</svg>
<figcaption><b>Cele două deleții terminale mari</b>, vizibile pe cariotip (dar deleția 4p16.3 e uneori atât de mică încât cere FISH sau microarray). Schemă proprie după carte, cu frecvența Cri du chat actualizată.</figcaption>
</figure>
[[gal:criduchat|<b>Copil cu sindrom Cri du chat</b>: facies rotund, hipertelorism, epicantus.;;whs|<b>Sugar cu sindrom Wolf–Hirschhorn</b>: hipotrofie marcată și dismorfie cranio-facială.]]
<p><b>Monosomia 21 parțială</b> (cartea: „sindromul anti-Down” sau „antimongolism”) apare prin del(21q) sau r(21): hipotrofie, microcefalie cu dolicocefalie, rădăcina nasului proeminentă, fante oblice în jos, micrognatie, <b>hipertonie</b>, malformații cardiace, renale, genitale; supraviețuire scurtă.</p>
<div class="capcana"><b>Termeni de abandonat</b>
<p>„Antimongolism”, „fante antimongoloide” și „retard mental (QI = 20)” sunt formulări vechi. Se spune <b>monosomie 21 parțială</b>, <b>fante palpebrale oblice în jos</b> și <b>dizabilitate intelectuală severă</b>.</p></div>`
},
{
id: "microdeletii", titlu: "Sindroamele cu microdeleții", pag: "73–74", emery: "cap. 17, p. 259–264", acopera: ["lp06-r25"], curs: ["c04/pws-as"],
html: `
<p>Microdelețiile (&lt; 4–5 Mb) nu se văd pe cariotipul obișnuit. Se confirmă prin <b>FISH</b> cu sondă pentru regiunea suspectată sau prin <b>microarray</b>, care le găsește fără să știi ce cauți.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Aceeași deleție 15q11–q13 dă două boli diferite">
${(() => {
  let o = `<text x="20" y="20" class="ti b">Regiunea 15q11–q13 e amprentată:</text><text x="20" y="36" class="tm">unele gene funcționează doar de pe cromozomul patern, altele doar de pe cel matern</text>`;
  const rand = (y, et, pat, mat, boala, c) => {
    o += `<text x="20" y="${y + 30}" class="ti b">${et}</text>`;
    o += `<rect x="150" y="${y}" width="260" height="18" rx="9" class="fA"/><rect x="230" y="${y}" width="100" height="18" class="${pat ? "fT" : "fline"}"/><text x="420" y="${y + 14}" class="tm" style="font-size:11.5px">patern</text>`;
    o += `<rect x="150" y="${y + 28}" width="260" height="18" rx="9" class="fP"/><rect x="230" y="${y + 28}" width="100" height="18" class="${mat ? "fG" : "fline"}"/><text x="420" y="${y + 42}" class="tm" style="font-size:11.5px">matern</text>`;
    o += fo(480, y - 2, 270, 54, boala, `color:${c};font-weight:600`);
  };
  rand(52, "Normal", 1, 1, "<span style='color:var(--ink)'>SNRPN etc. de pe patern + UBE3A de pe matern</span>", "var(--ink)");
  rand(124, "Deleție paternă", 0, 1, "Prader–Willi: lipsesc genele exprimate patern", "var(--warn)");
  rand(196, "Deleție maternă", 1, 0, "Angelman: lipsește UBE3A exprimată matern în neuroni", "var(--warn)");
  return o + `<text x="20" y="290" class="tm">Verde = cromozomul 15 patern, mov = cel matern; dreptunghiul colorat = regiunea 15q11–q13 prezentă, gri = deletată. Schemă proprie.</text>`;
})()}
</svg>
<figcaption><b>Aceeași deleție, două boli</b>, în funcție de părintele de la care vine. Același efect îl are <b>disomia uniparentală</b>: două copii materne = Prader–Willi, două paterne = Angelman. Detalii despre metilare și amprentare în <a href="#/c04/pws-as">ghidul de curs</a>.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Sindrom</th><th>Cauze</th><th>Semne cheie</th></tr></thead>
<tbody>
<tr><td><b>Prader–Willi</b></td><td>del 15q11–q13 paternă ~70%; disomie maternă ~25%; defect de amprentare</td><td>nou-născut hipoton, cu supt slab → după 2 ani <b>hiperfagie</b> și obezitate; mâini și picioare mici, hipogonadism, DI ușoară–moderată, tulburări de comportament, hipopigmentare</td></tr>
<tr><td><b>Angelman</b></td><td>del 15q11–q13 maternă ~70%; mutații <i>UBE3A</i> ~10%; disomie paternă, defect de amprentare</td><td>DI severă, <b>vorbire absentă</b>, ataxie, crize, <b>râs frecvent nemotivat</b>, microcefalie</td></tr>
<tr><td><b>Williams</b></td><td>del(7)(q11.23), include <i>ELN</i> (elastina)</td><td>facies „de spiriduș”, <b>stenoză aortică supravalvulară</b>, hipercalcemie, statură mică, DI ușoară, personalitate foarte sociabilă</td></tr>
<tr><td><b>Deleția 22q11.2</b></td><td>del(22)(q11.2), ~3 Mb, include <i>TBX1</i>; ~90% de novo</td><td>vezi mai jos</td></tr>
</tbody></table></div>
[[gal:pws|<b>Sindrom Prader–Willi</b>: obezitate, mâini și picioare mici.;;williams|<b>Sindrom Williams</b>: fruntea lată, nas scurt cu vârf rotunjit, buze pline, gura largă.]]
<h3>Sindromul deleției 22q11.2 (DiGeorge / velocardiofacial)</h3>
<p>Cea mai frecventă microdeleție: <b>~1/3.000–1/4.000</b> de nou-născuți. Organele afectate derivă din <b>arcurile faringiene 3 și 4</b>: inimă (tract de ejecție), timus, paratiroide, palat. Mnemonicul englez <b>CATCH-22</b> ajută: <i>Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcaemia</i>.</p>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Frecvența semnelor în sindromul deleției 22q11.2">
${(() => {
  const D = [["Anomalii ale palatului", 60, 85], ["Malformații cardiace (Fallot, trunchi arterial, DSV)", 75, 80], ["Anomalii musculo-scheletice", 60, 60], ["Dizabilitate intelectuală moderată", 40, 40], ["Statură mică", 30, 30], ["Anomalii urogenitale", 10, 10]];
  let o = `<text x="20" y="22" class="ti b">Cât de des apare fiecare semn (procentele din carte)</text>`;
  D.forEach(([n, a, b], i) => { const y = 38 + i * 30; o += `<text x="330" y="${y + 14}" text-anchor="end" class="ti" style="font-size:12px">${n}</text><rect x="340" y="${y}" width="${b * 3.6}" height="20" rx="4" class="fP" opacity=".35"/><rect x="340" y="${y}" width="${a * 3.6}" height="20" rx="4" class="fP"/><text x="${346 + b * 3.6}" y="${y + 15}" class="tm" style="font-size:11.5px">${a === b ? a : a + "–" + b}%</text>`; });
  return o + `<text x="20" y="232" class="tm">Plus: hipocalcemie neonatală (hipoparatiroidism), hipoplazie timică cu imunodeficiență, tulburări psihiatrice la adult.</text>`;
})()}
</svg>
<figcaption><b>Fenotipul e foarte variabil</b>, chiar în aceeași familie. Diagnosticul de certitudine e molecular (FISH, MLPA sau microarray). Recurența e neglijabilă de novo și <b>50%</b> când un părinte are deleția. Date din carte.</figcaption>
</figure>
[[img:fish_22q|<b>FISH pentru deleția 22q11.2</b>: sonda de control apare pe ambii cromozomi 22, sonda pentru regiunea critică doar pe unul.]]
<div class="capcana"><b>Corecturi la capitolul de microdeleții</b>
<p>1) Angelman nu e „95% deleție”: deleția explică ~70%; ~10% sunt mutații <i>UBE3A</i>, restul disomie paternă și defecte de amprentare. 2) Deleția <b>10p13</b> („DiGeorge 2”) e o cauză rară (sub 2%), nu 15%. 3) Prader–Willi: obezitatea nu urmează imediat hipotoniei; există o fază intermediară, apoi hiperfagia apare în jurul vârstei de 2–4 ani.</p></div>`
},
{
id: "cancer", titlu: "Anomalii cromozomiale în cancer", pag: "74–78", emery: "cap. 14", acopera: ["lp06-r26", "lp06-r27"],
html: `
<p>Celulele canceroase sunt instabile genomic: acumulează aneuploidii, rearanjări și amplificări, diferite chiar de la o celulă la alta. Anomaliile sunt <b>dobândite</b> (doar în clona tumorală), nu moștenite. Unele, mai ales translocațiile, sunt atât de specifice încât definesc boala.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Două mecanisme prin care o translocație activează o oncogenă">
${(() => {
  let o = `<text x="20" y="22" class="ti b">Două feluri în care o translocație produce cancer</text>`;
  o += `<text x="20" y="56" class="ta b">1. Genă de fuziune</text>`;
  o += `<rect x="40" y="70" width="110" height="26" rx="5" class="fA"/><text x="95" y="88" text-anchor="middle" style="fill:#fff" class="b">BCR</text><rect x="150" y="70" width="140" height="26" rx="5" class="fC"/><text x="220" y="88" text-anchor="middle" style="fill:#fff" class="b">ABL1</text>`;
  o += fo(310, 62, 440, 60, "Două gene se unesc într-una singură; proteina hibridă are o activitate nouă sau nereglată. Exemple: <b>BCR::ABL1</b> (LMC), <b>PML::RARA</b> (leucemia promielocitară), <b>ETV6::RUNX1</b> (LAL la copil), <b>EWSR1::FLI1</b> (sarcom Ewing).");
  o += `<text x="20" y="156" class="ta b">2. Oncogena ajunge lângă un promotor puternic</text>`;
  o += `<rect x="40" y="170" width="140" height="26" rx="5" class="fP"/><text x="110" y="188" text-anchor="middle" style="fill:#fff;font-size:11.5px" class="b">IGH (amplificator)</text><rect x="180" y="170" width="110" height="26" rx="5" class="fT"/><text x="235" y="188" text-anchor="middle" style="fill:#fff" class="b">MYC</text>`;
  o += fo(310, 162, 440, 70, "Gena rămâne intactă, dar e exprimată excesiv pentru că a ajuns sub controlul genelor de imunoglobuline, foarte active în limfocite. Exemple: <b>t(8;14)</b>: MYC–IGH (limfom Burkitt); <b>t(14;18)</b>: BCL2–IGH (limfom folicular, blochează apoptoza).");
  return o + `<text x="20" y="270" class="tm">Schemă proprie.</text>`;
})()}
</svg>
<figcaption><b>Fuziune sau supraexpresie.</b> Primul mecanism predomină în leucemiile mieloide și sarcoame, al doilea în limfoamele B, unde rearanjarea genelor de imunoglobuline creează ocazii de ruptură.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Boala</th><th>Anomalii din carte</th><th>Observații</th></tr></thead>
<tbody>
<tr><td><b>LAL</b></td><td>t(1;19)(q23;p13), t(4;11)(q21;q23), t(9;22), del(6q), del(12p), t(8;14)/t(2;8)/t(8;22) în forma L3</td><td>anomalii la 70–98%; t(4;11) = rearanjare <i>KMT2A</i> (MLL), prognostic rezervat; Ph+ în ~25% din LAL-B la adult</td></tr>
<tr><td><b>LAM</b></td><td>M2: t(8;21); M3: t(15;17); M4Eo: inv(16)(p13q22); M5: anomalii 11q23; +8, −7</td><td>clasificarea FAB (M0–M7) a fost înlocuită de clasificarea OMS, care definește entitățile prin genetica lor</td></tr>
<tr><td><b>LMC</b></td><td>t(9;22)(q34;q11), Ph+ la 95%</td><td>la cazurile Ph-negative pe cariotip, fuziunea BCR::ABL1 se găsește prin FISH sau PCR</td></tr>
<tr><td><b>Sindroame mielodisplazice</b></td><td>del(5q), −7, +8, del(20q), −Y, del(7q)</td><td>del(5q) izolată = subtip cu prognostic bun, răspunde la lenalidomidă</td></tr>
<tr><td><b>LLC</b></td><td>+12; 14q+, t(11;14) în stadii avansate</td><td>prin FISH, cea mai frecventă e <b>del(13q14)</b> (~50%); del(17p)/<i>TP53</i> are prognostic prost. t(11;14) definește de fapt limfomul cu celule de manta</td></tr>
<tr><td><b>Limfom Burkitt</b></td><td>t(8;14)(q24;q32); variante t(2;8), t(8;22)</td><td>toate mută <i>MYC</i> lângă o genă de imunoglobulină</td></tr>
<tr><td><b>Limfom folicular</b></td><td>t(14;18)(q32;q21) la 85%</td><td>BCL2 supraexprimat</td></tr>
<tr><td><b>Limfom Hodgkin</b></td><td>hiperdiploidii, fără anomalii specifice</td><td></td></tr>
</tbody></table></div>
[[gal:ph_cariotip|<b>Cariotip cu t(9;22)</b>: cromozomul 22 scurtat (Philadelphia) și cromozomul 9 alungit.;;inv16|<b>inv(16)</b> în leucemia mieloidă acută cu eozinofile (fosta M4Eo).]]
<h3>Tabelul 5: tumori solide</h3>
<div class="tw"><table>
<thead><tr><th>Tumora</th><th>Anomalia</th><th>Gena / observații</th></tr></thead>
<tbody>
<tr><td>Neuroblastom</td><td>del(1)(p36)</td><td>plus amplificarea <i>MYCN</i> (prognostic prost)</td></tr>
<tr><td>Melanom malign</td><td>t(1;6)(q11-12;q15-21)</td><td>astăzi contează mai ales mutațiile <i>BRAF</i> V600E</td></tr>
<tr><td>Rabdomiosarcom alveolar</td><td>t(2;13)(q35;q14)</td><td><i>PAX3::FOXO1</i>; în carte apare greșit „(8q35-37)”</td></tr>
<tr><td>Carcinom pulmonar</td><td>del(3)(p14–p23)</td><td>regiunea <i>FHIT</i> (situs fragil FRA3B)</td></tr>
<tr><td>Carcinom renal</td><td>del(3p) sau t(3;5)(p13;q22)</td><td>pierderea <i>VHL</i> (3p25)</td></tr>
<tr><td>Carcinom de vezică urinară</td><td>i(5p)</td><td></td></tr>
<tr><td>Tumora Wilms</td><td>del(11)(p13)</td><td><i>WT1</i>; în sindromul WAGR, deleția include și <i>PAX6</i> (aniridie)</td></tr>
<tr><td>Sarcom Ewing</td><td>t(11;22)(q24;q12)</td><td><i>EWSR1::FLI1</i></td></tr>
<tr><td>Retinoblastom</td><td>del(13)(q14)</td><td><i>RB1</i>, modelul celor „două lovituri”</td></tr>
</tbody></table></div>
<p>Și tumorile benigne au anomalii clonale: meningioame (pierderea lui 22 sau del 22q, gena <i>NF2</i>), lipoame (rearanjări 12q13–q15, <i>HMGA2</i>), leiomioame uterine (t(12;14)), adenoame colonice (+7, +13).</p>
<div class="capcana"><b>Benzi și coduri de corectat în carte</b>
<p>1) Sindromul monocitar M5 are <b>t(9;11)(p21;q23)</b>, nu „(q21;q23)”. 2) t(15;17) se scrie astăzi (q24;q21), după reevaluarea benzilor genelor <i>PML</i> și <i>RARA</i>. 3) Simbolul „rcp” pentru translocația reciprocă nu mai e folosit în ISCN: se scrie <b>t</b>. 4) Numerotarea figurilor sare de la 24 la 26: în carte nu există figura 25.</p></div>`
}
]
});
})();
