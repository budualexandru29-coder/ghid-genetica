/* LP I — Ereditatea la nivel celular: citogenetica umană (LP p. 7–20) */
(function () {
// cromozom metafazic: două cromatide surori, fiecare cu brațul p (sus) și q (jos), prinse la centromer
const crz = (x, y, p, q, o = {}) => {
  const w = o.w || 12, g = o.g == null ? 2 : o.g, cl = o.cl || "fG", r = Math.min(w / 2, 6);
  const cr = (cx) => `<rect x="${cx}" y="${y - p}" width="${w}" height="${p - 3}" rx="${r}" class="${cl}"/><rect x="${cx}" y="${y + 3}" width="${w}" height="${q - 3}" rx="${r}" class="${cl}"/>`;
  let s = o.mono ? cr(x - w / 2) : cr(x - w - g / 2) + cr(x + g / 2);
  s += `<ellipse cx="${x}" cy="${y}" rx="${o.mono ? w / 2 - 1 : w - 1}" ry="3.2" class="fA"/>`;
  if (o.sat) s += o.mono ? `<circle cx="${x}" cy="${y - p - 7}" r="${w / 2 - 1}" class="${cl}"/>` : `<circle cx="${x - w / 2 - g / 2}" cy="${y - p - 7}" r="${w / 2 - 1}" class="${cl}"/><circle cx="${x + w / 2 + g / 2}" cy="${y - p - 7}" r="${w / 2 - 1}" class="${cl}"/>`;
  return s;
};
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf)"/>`;
const DEFS = `<defs><marker id="vf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
// celulă cu cromozomi (pentru schemele de diviziune)
const cel = (x, y, r, cls = "fis") => `<circle cx="${x}" cy="${y}" r="${r}" class="${cls} sm" stroke-width="1.4"/>`;

const T1 = [["Scorpion (o specie)", 4], ["Drosophila melanogaster", 8], ["Mazăre", 14], ["Ceapă", 16], ["Șoarece", 40], ["Șobolan", 42], ["Om", 46], ["Cartof", 48], ["Cimpanzeu", 48], ["Cal", 64], ["Câine", 78]];

GHID.capitol({
id: "lp01",
intro: `<p class="lead">Primul LP pune la un loc „hardware-ul” eredității: cum arată un cromozom la microscop, cum se copiază și se împarte la fiecare diviziune, cum se reduce la jumătate în gameți și ce iese când una dintre aceste etape greșește. Aproape toate bolile cromozomiale din LP-urile IV–VI au originea într-una dintre erorile de aici.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Harta capitolului">${DEFS}
${[["Cromozomul", "structură, tipuri", "fis"], ["Ciclul celular", "G1 · S · G2 · M", "fis"], ["Mitoza", "2n → 2n + 2n", "foks"], ["Meioza", "2n → 4 × n", "fas"], ["Fecundarea", "n + n → 2n", "fws"]].map(([t, s2, c], i) => `<rect x="${12 + i * 150}" y="30" width="134" height="62" rx="10" class="${c}"/><text x="${79 + i * 150}" y="56" text-anchor="middle" class="ti b">${t}</text><text x="${79 + i * 150}" y="76" text-anchor="middle" class="tm">${s2}</text>` + (i < 4 ? sag(148 + i * 150, 61, 160 + i * 150, 61) : "")).join("")}
${[["erori de distribuție → mozaicism", 2], ["nondisjuncție → gameți n+1 / n−1", 3], ["dispermie, diginie, diandrie → 3n, mole", 4]].map(([t, i]) => `<line x1="${79 + i * 150}" y1="92" x2="${79 + i * 150}" y2="124" class="sw" stroke-width="1.6" stroke-dasharray="4 3"/><rect x="${12 + i * 150}" y="124" width="134" height="52" rx="8" class="fws"/><foreignObject x="${16 + i * 150}" y="128" width="126" height="46"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.3;font-weight:700;color:var(--warn);text-align:center">${t}</div></foreignObject>`).join("")}
<text x="380" y="198" text-anchor="middle" class="tm">Sus: ce se întâmplă normal. Jos (portocaliu): ce iese când etapa respectivă greșește.</text>
</svg>
<figcaption><b>Drumul informației ereditare</b> de la o celulă la celulele fiice (mitoză) și de la o generație la alta (meioză + fecundare). Schemă proprie după structura capitolului.</figcaption>
</figure>`,
sectiuni: [
{
id: "cromozomul", titlu: "Cromozomii umani: definiție, număr, structură", pag: "7–10", emery: "cap. 3", acopera: ["lp01-r01", "lp01-r02", "lp01-r03"], curs: ["c01/compactare", "c01/cromatina"],
html: `
<p>Cromozomii sunt <b>elemente nucleare permanente</b>: ADN complexat cu proteine (în cantități aproximativ egale) care, în diviziune, se supraspiralizează și se condensează ca informația ereditară să fie împărțită egal între celulele fiice. Numele vine de la Waldeyer (1888): <i>chroma</i> + <i>soma</i>, „corpuscul colorat”, pentru că se colorează intens cu coloranți nucleari bazici. Cum se ajunge de la dublul helix la cromozomul metafazic e explicat în ghidul de curs (<a href="#/c01/compactare">nucleozom → fibra de 30 nm → bucle → cromozom</a>).</p>
<div class="pasi">
<div><b>Autozomi</b>22 de perechi de omologi (1–22), unul matern și unul patern în fiecare pereche</div>
<div><b>Heterozomi (gonozomi)</b>X și Y: XX la femeie (sex <i>homogametic</i>, toate ovulele 23,X), XY la bărbat (sex <i>heterogametic</i>)</div>
<div><b>Celule somatice: 2n = 46</b>diploid; numărul se reface la fecundare</div>
<div><b>Gameți: n = 23</b>haploid, după meioză: ovul 23,X; spermatozoid 23,X (ginospermatozoid) sau 23,Y (androspermatozoid)</div>
</div>
<h3>Numărul de cromozomi nu urmează complexitatea</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Numărul diploid de cromozomi la diferite specii">
<text x="10" y="20" class="ti b">Numărul diploid (2n), din Tabelul 1 al cărții de LP</text>
${T1.map(([n, v], i) => `<text x="200" y="${54 + i * 24}" text-anchor="end" class="${n === "Om" ? "ta b" : "ti"}">${n}</text><rect x="210" y="${41 + i * 24}" width="${v * 6.4}" height="17" rx="4" class="${n === "Om" ? "fP" : "fG"}" opacity="${n === "Om" ? 1 : .75}"/><text x="${216 + v * 6.4}" y="${54 + i * 24}" class="ti b">${v}</text>`).join("")}
<text x="10" y="322" class="tm">Câinele are 78 de cromozomi, cartoful cât cimpanzeul (48), omul 46: numărul e caracteristic speciei, nu nivelului evolutiv.</text>
</svg>
<figcaption><b>Tabelul 1, redesenat ca grafic.</b> Cimpanzeul are o pereche în plus față de om pentru că, în linia umană, doi cromozomi ancestrali s-au unit cap la cap și au dat cromozomul 2 (urmele fuziunii, secvențe telomerice inversate, se văd în 2q13).</figcaption>
</figure>
<h3>Anatomia cromozomului metafazic</h3>
<p>Se studiază în <b>metafază</b> (sau pro-/prometafază), când condensarea e maximă: brațe îngroșate, cromatide distanțate, contur net.</p>
<figure>
<svg viewBox="0 0 760 400" role="img" aria-label="Structura cromozomului metafazic">${DEFS}
${crz(250, 150, 80, 190, { w: 34, g: 6, cl: "fG" })}
<rect x="206" y="166" width="88" height="10" class="fZ" opacity=".9"/>
<circle cx="230" cy="62" r="5" class="fC"/><circle cx="270" cy="62" r="5" class="fC"/><circle cx="230" cy="336" r="5" class="fC"/><circle cx="270" cy="336" r="5" class="fC"/>
<rect x="208" y="146" width="10" height="8" rx="2" class="fT"/><rect x="282" y="146" width="10" height="8" rx="2" class="fT"/>
${sag(380, 60, 280, 64)}<text x="386" y="56" class="ti b">telomere</text><text x="386" y="73" class="tm">(TTAGGG)n; împiedică lipirea capetelor</text>
${sag(380, 115, 296, 118)}<text x="386" y="112" class="ti b">brațul scurt (p)</text><text x="386" y="129" class="tm">p = „petit” (mic)</text>
${sag(380, 150, 296, 150)}<text x="386" y="147" class="ti b">centromer / constricția primară</text><text x="386" y="164" class="tm">strangulată, slab colorată; ține cromatidele</text><text x="386" y="179" class="tm">unite până în anafază</text>
${sag(380, 200, 294, 152)}<text x="386" y="204" class="ti b">2 kinetocori</text><text x="386" y="221" class="tm">câte unul pe cromatidă; aici se prind fusul</text>
${sag(380, 250, 296, 171)}<text x="386" y="252" class="ti b">constricție secundară interstițială</text><text x="386" y="269" class="tm">heterocromatină pe q: cromozomii 1, 9, 16, Y</text>
${sag(380, 310, 296, 300)}<text x="386" y="314" class="ti b">brațul lung (q)</text>
${sag(120, 230, 210, 230)}<text x="20" y="226" class="ti b">cromatidă</text><text x="20" y="243" class="tm">o moleculă de ADN</text><text x="20" y="258" class="tm">dublu catenar, continuă</text>
${sag(120, 290, 250, 300)}<text x="20" y="286" class="ti b">cromatidele surori</text><text x="20" y="303" class="tm">identice, rezultate</text><text x="20" y="318" class="tm">din replicarea din S</text>
<text x="20" y="385" class="tm">Schemă proprie: verde = brațe, roșu = centromer, portocaliu = kinetocori, galben = telomere, gri = constricție secundară.</text>
</svg>
<figcaption><b>Elementele obligatorii</b> ale cromozomului metafazic: cromatidele, constricția primară, centromerul cu cei doi kinetocori, brațele p și q, telomerele. Elementele <b>facultative</b> (sateliți, constricții secundare) apar doar pe anumiți cromozomi.</figcaption>
</figure>
[[gal:crz_termeni|<b>Omologi și cromatide surori.</b> Înainte de replicare fiecare cromozom are o singură cromatidă; după faza S are două, identice, unite la centromer. Cei doi omologi (unul matern, unul patern) nu sunt identici: poartă aceleași gene, dar alele posibil diferite.;;mitoza_micro|<b>Cromatidele surori la microscopul electronic</b> (dreapta), puse lângă schema fazei din care provin (stânga): profază, prometafază, metafază, anafază timpurie.]]
<div class="lab"><b>Telomerele, pe scurt</b>
<p>Repetiții <b>(TTAGGG)<sub>n</sub></b>, n = 900–2000, deci 5–20 kb, după vârstă și țesut. Replicarea capătului e incompletă: la fiecare ciclu se pierd <b>25–200 pb</b>; când lungimea scade la ~<b>1,5 kb</b>, celula își pierde capacitatea de a prolifera. <b>Telomeraza</b> le reface: activă în țesuturile embrio-fetale, apoi inactivată progresiv, rămâne activă în celulele stem medulare și se <b>reactivează în cancer</b>. Un cromozom care își pierde telomerele prin rupere are capete „lipicioase”: așa apar cromozomii inelari (r) și dicentrici (dic) din <a href="#/lp06">LP VI</a>.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Câte molecule de ADN are un cromozom metafazic? Dar unul în anafază, după separare?</summary><div>Metafazic: două (câte una pe cromatidă). După clivarea centromerului în anafază, fiecare cromozom monocromatidic are o singură moleculă.</div></details>
<details class="q"><summary>Prin ce diferă două cromatide surori de doi cromozomi omologi?</summary><div>Cromatidele surori sunt copii identice ale aceleiași molecule (dacă n-a avut loc crossing-over). Omologii provin de la părinți diferiți: aceeași ordine a genelor, dar alele posibil diferite.</div></details>
</div>`
},
{
id: "tipuri", titlu: "Elementele facultative și tipurile morfologice de cromozomi", pag: "10", emery: "cap. 3", acopera: ["lp01-r04"],
html: `
<p><b>Sateliții</b> sunt corpusculi terminali rotunzi sau ovalari pe brațele scurte ale acrocentricilor <b>13, 14, 15, 21, 22</b>, legați de rest prin <b>constricția secundară terminală</b> (tulpina satelitului). În tulpini sunt genele ARN ribozomal: sunt regiunile organizatoare de nucleol (NOR). <b>Constricțiile secundare interstițiale</b> sunt pe brațele lungi, aproape de centromer, la cromozomii <b>1, 9, 16 și Y</b>: blocuri de heterocromatină.</p>
<p>Poziția centromerului dă <b>indicele brațelor R = q/p</b> și tipul morfologic:</p>
<figure>
<svg viewBox="0 0 760 345" role="img" aria-label="Tipuri morfologice de cromozomi">
${[["metacentric", "R = q/p = 1–1,7", "centromer median", 78, 78, "1, 3, 16, 19, 20", false], ["submetacentric", "R = 1,7–3", "centromer submedian", 52, 108, "2, 4–12, 17, 18, X", false], ["acrocentric", "R > 3", "centromer subterminal", 22, 138, "13, 14, 15, 21, 22, Y", true], ["telocentric", "centromer terminal", "", 6, 150, "", false]].map(([n, r, d, p, q, ex, sat], i) => {
  const x = 100 + i * 185, y = 130;
  return crz(x, y, p, q, { w: 18, g: 3, cl: i === 3 ? "fZ" : "fG", sat }) + `<line x1="${x - 34}" y1="${y}" x2="${x + 34}" y2="${y}" class="sm" stroke-dasharray="3 3"/><text x="${x}" y="22" text-anchor="middle" class="ti b">${n}</text><text x="${x}" y="306" text-anchor="middle" class="ta b">${r}</text><text x="${x}" y="322" text-anchor="middle" class="tm" style="font-size:11.5px">${d}</text><text x="${x}" y="339" text-anchor="middle" class="ti" style="font-size:11.5px">${ex || "absent la om"}</text>`;
}).join("")}
</svg>
<figcaption><b>Cele patru tipuri morfologice</b> (Figura 2 din LP). Acrocentricii umani au sateliți pe brațul scurt. Cromozomul Y este acrocentric, dar fără sateliți.</figcaption>
</figure>
<figure><img src="fig/lp_ideograma.svg" alt="Idiograma tuturor cromozomilor umani din secvența genomului">
<figcaption><b>Toți cei 24 de cromozomi umani, desenați din datele genomului</b> (UCSC hg38, benzi G): culoarea numărului dă tipul clasic. Se văd cele două elemente facultative: <b>tulpinile sateliților</b> (galben pal) doar pe 13, 14, 15, 21 și 22, și <b>blocurile de heterocromatină</b> (albastru) pe 1q, 9q, 16q și Yq, adică exact constricțiile secundare interstițiale din carte. Raportul q/p calculat în perechi de baze nu se suprapune perfect cu cel măsurat pe cromozomul colorat (de exemplu cromozomul 2 iese 1,6, deși e clasificat submetacentric).</figcaption></figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un cromozom are brațul scurt de 2 µm și cel lung de 5 µm. Ce tip este?</summary><div>R = 5/2 = 2,5, între 1,7 și 3: submetacentric.</div></details>
<details class="q"><summary>De ce contează că acrocentricii 13, 14, 15, 21, 22 au brațe scurte făcute din sateliți și ADN ribozomal?</summary><div>Pentru că pierderea brațelor scurte nu are consecințe (genele ARNr există în multe copii pe ceilalți acrocentrici). De aceea doi acrocentrici pot fuziona la centromer (translocația robertsoniană, LP VI) fără efect asupra purtătorului.</div></details>
</div>`
},
{
id: "ciclu", titlu: "Ciclul celular", pag: "11–13", emery: "cap. 3, p. 31", acopera: ["lp01-r05", "lp01-r06"], curs: ["c01/replicare"],
html: `
<p>Ciclul celular cuprinde tot ce se întâmplă de la formarea unei celule până la terminarea propriei diviziuni: <b>interfaza</b> și <b>diviziunea</b>. Durata variază mult după țesut, în principal prin G1.</p>
<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="Ciclul celular cu durate proporționale">${DEFS}
${(() => {
  const cx = 210, cy = 180, R1 = 130, R0 = 82, fazele = [["G1", 9, "fG", "presintetic: cromatină despiralizată, transcripție și translație"], ["S", 7, "fA", "sinteza ADN (replicare): materialul genetic se dublează"], ["G2", 4, "fC", "postsintetic: se sintetizează aparatul mitotic, se acumulează energie"], ["M", 1, "fT", "mitoza, ~1 oră"]];
  const tot = 21; let a = -Math.PI / 2, s = "";
  fazele.forEach(([n, h, c, d], i) => {
    const b = a + (h / tot) * 2 * Math.PI, L = b - a > Math.PI ? 1 : 0;
    const P = (r, t) => `${(cx + r * Math.cos(t)).toFixed(1)} ${(cy + r * Math.sin(t)).toFixed(1)}`;
    s += `<path d="M${P(R1, a)} A${R1} ${R1} 0 ${L} 1 ${P(R1, b)} L${P(R0, b)} A${R0} ${R0} 0 ${L} 0 ${P(R0, a)}z" class="${c}" opacity=".9"/>`;
    const m = (a + b) / 2; s += `<text x="${cx + 106 * Math.cos(m)}" y="${cy + 106 * Math.sin(m) + 5}" text-anchor="middle" class="b" style="font-size:${n === "M" ? 12 : 16}px;fill:#fff">${n}</text>`;
    s += `<rect x="400" y="${48 + i * 58}" width="16" height="16" rx="3" class="${c}"/><text x="424" y="${61 + i * 58}" class="ti b">${n} · ${["8–10 ore", "6–8 ore", "3–5 ore", "~1 oră"][i]}</text><text x="424" y="${80 + i * 58}" class="tm" style="font-size:12px">${d}</text>`;
    a = b;
  });
  s += `<text x="${cx}" y="${cy - 4}" text-anchor="middle" class="ti b">interfaza</text><text x="${cx}" y="${cy + 14}" text-anchor="middle" class="tm">G1 + S + G2</text>`;
  s += `<path d="M${cx - 60} ${cy - 118} q-90 -40 -150 30" class="sw" stroke-width="2" fill="none" stroke-dasharray="5 3" marker-end="url(#vf)"/><text x="16" y="72" class="tw2 b">G0</text><text x="16" y="90" class="tm" style="font-size:12px">repaus; poate</text><text x="16" y="105" class="tm" style="font-size:12px">reintra în ciclu</text>`;
  s += `<text x="400" y="300" class="ti b">După diviziune, trei posibilități:</text><text x="400" y="320" class="tm" style="font-size:12.5px">• rămâne în ciclu (proliferează) • iese temporar în G0</text><text x="400" y="338" class="tm" style="font-size:12.5px">• iese definitiv: postmitotică (ex. neuronii)</text>`;
  return s;
})()}
</svg>
<figcaption><b>Ciclul celular desenat la scară</b>, cu valorile medii din carte (G1 ~9 h, S ~7 h, G2 ~4 h, M ~1 h). Mitoza e o fracțiune mică din ciclu: de aceea, pe o lamă cu vârf de rădăcină de ceapă, majoritatea celulelor sunt în interfază. Schemă proprie.</figcaption>
</figure>
[[img:ciclu_celular|<b>Ciclul celular al celulei animale</b>, cu evenimentele fiecărei etape: în S se dublează ADN-ul și centrozomul, în M cromatina se condensează, membrana nucleară dispare, cromatidele se separă.]]
<div class="lab"><b>SCE: schimbul între cromatidele surori</b>
<p>În faza S poate avea loc un schimb egal de material între cele două cromatide surori (<i>sister chromatid exchange</i>). Fiind egal, nu schimbă informația, dar frecvența lui crește sub acțiunea mutagenilor: numărarea SCE e un test pentru efectul unor factori externi asupra materialului genetic.</p></div>
<p>Diviziunea poate fi <b>mitoză</b> (2n → două celule 2n identice; celulele somatice) sau <b>meioză</b> (două diviziuni succesive fără sinteză de ADN între ele, 2n → n; doar în gametogeneză). Diferența de bază e în graficul următor.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Cantitatea de ADN și numărul de cromozomi în mitoză și meioză">
${(() => {
  const st = (x0, pts, cls, lab) => { let d = `M${x0} ${pts[0][1]}`, s = ""; pts.forEach(([x, y], i) => { if (i) d += ` H${x0 + x} V${y}`; }); return `<path d="${d} H${x0 + 320}" class="${cls}" stroke-width="3" fill="none"/>`; };
  const Y = { 4: 70, 2: 130, 1: 190 };
  let s = `<text x="20" y="20" class="ti b">Conținutul de ADN pe celulă (c) în cele două tipuri de diviziune</text>`;
  [["Mitoza", 30, [[0, Y[2]], [90, Y[4]], [230, Y[2]]], [["G1", 40], ["S", 90], ["G2", 160], ["M", 230], ["2 celule", 280]], "2n,2c → 2n,4c → 2 × (2n,2c)"], ["Meioza", 410, [[0, Y[2]], [70, Y[4]], [170, Y[2]], [250, Y[1]]], [["G1", 30], ["S", 75], ["MI", 170], ["MII", 250], ["4 gameți", 300]], "2n,2c → 2n,4c → 2 × (n,2c) → 4 × (n,c)"]].forEach(([t, x0, pts, et, rez]) => {
    s += `<text x="${x0}" y="48" class="ta b">${t}</text>`;
    [4, 2, 1].forEach((k) => (s += `<line x1="${x0}" y1="${Y[k]}" x2="${x0 + 320}" y2="${Y[k]}" class="sm" stroke-dasharray="2 4"/><text x="${x0 - 6}" y="${Y[k] + 4}" text-anchor="end" class="tm" style="font-size:11px">${k}c</text>`));
    s += st(x0, pts, t === "Mitoza" ? "sok" : "sa");
    et.forEach(([e, x]) => (s += `<text x="${x0 + x}" y="216" text-anchor="middle" class="tm" style="font-size:11.5px">${e}</text>`));
    s += `<text x="${x0}" y="246" class="ti" style="font-size:12.5px">${rez}</text>`;
  });
  s += `<text x="20" y="280" class="tm">n = numărul de seturi cromozomiale; c = cantitatea de ADN a unui set haploid monocromatidic (gametul).</text>`;
  return s;
})()}
</svg>
<figcaption><b>Mitoza păstrează, meioza reduce.</b> Replicarea din S dublează ADN-ul (2c → 4c) fără să schimbe numărul de cromozomi; anafaza mitotică îl împarte înapoi la 2c. În meioză, după o singură replicare urmează două împărțiri: în MI se separă omologii (2n → n), în MII cromatidele (2c → c). Schemă proprie.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>O celulă umană în G2: câți cromozomi, câte cromatide, câte molecule de ADN nuclear?</summary><div>46 de cromozomi bicromatidici = 92 de cromatide = 92 de molecule de ADN (4c).</div></details>
<details class="q"><summary>De ce durata ciclului variază în principal prin G1?</summary><div>S, G2 și M au durate relativ constante; G1 este etapa în care celula „decide” dacă intră din nou în diviziune, rămâne în repaus (G0) sau se diferențiază.</div></details>
</div>`
},
{
id: "mitoza", titlu: "Evenimentele din timpul mitozei", pag: "13–15", emery: "cap. 3, p. 31–33", acopera: ["lp01-r07", "lp01-r08"],
html: `
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Fazele mitozei">
${(() => {
  const ph = [["Profaza", "nucleolii dispar; centrozomii migrează la poli; cromozomii se condensează; membrana nucleară se dezintegrează → mixoplasmă"], ["Metafaza", "condensare maximă; cromozomii în placa ecuatorială, prinși prin kinetocori; centromerii spre interior, brațele spre exterior"], ["Anafaza", "centromerul se clivează longitudinal; cromatidele (acum cromozomi monocromatidici) migrează cu viteză egală spre poli"], ["Telofaza", "decondensare; reapar nucleolii și membrana nucleară; fusul dispare; citokineză și citodiereză"]];
  let s = "";
  ph.forEach(([n, d], i) => {
    const x = 95 + i * 190, y = 110;
    s += `<text x="${x}" y="20" text-anchor="middle" class="ti b">${n}</text>`;
    if (i === 0) {
      s += cel(x, y, 72) + `<circle cx="${x}" cy="${y}" r="52" class="sm" fill="none" stroke-dasharray="4 4" stroke-width="1.4"/>` + crz(x - 18, y - 6, 14, 20, { w: 5, g: 1 }) + crz(x + 16, y + 4, 18, 22, { w: 5, g: 1, cl: "fT" }) + crz(x + 4, y - 22, 10, 16, { w: 5, g: 1, cl: "fT" }) + crz(x - 6, y + 22, 9, 14, { w: 5, g: 1 }) + `<circle cx="${x - 40}" cy="${y - 52}" r="4" class="fC"/><circle cx="${x + 40}" cy="${y - 52}" r="4" class="fC"/>`;
    } else if (i === 1) {
      s += cel(x, y, 72) + `<circle cx="${x}" cy="${y - 66}" r="4" class="fC"/><circle cx="${x}" cy="${y + 66}" r="4" class="fC"/>`;
      [-36, -12, 12, 36].forEach((dx, k) => (s += `<line x1="${x}" y1="${y - 66}" x2="${x + dx}" y2="${y - 3}" class="sm" stroke-width=".8"/><line x1="${x}" y1="${y + 66}" x2="${x + dx}" y2="${y + 3}" class="sm" stroke-width=".8"/>` + `<g transform="rotate(90 ${x + dx} ${y})">${crz(x + dx, y, [10, 14, 9, 18][k], [16, 20, 14, 22][k], { w: 5, g: 1, cl: k % 2 ? "fT" : "fG" })}</g>`));
    } else if (i === 2) {
      s += `<ellipse cx="${x}" cy="${y}" rx="64" ry="84" class="fis sm" stroke-width="1.4"/><circle cx="${x}" cy="${y - 80}" r="4" class="fC"/><circle cx="${x}" cy="${y + 80}" r="4" class="fC"/>`;
      [-30, -10, 10, 30].forEach((dx, k) => { const c = k % 2 ? "fT" : "fG"; s += `<line x1="${x}" y1="${y - 80}" x2="${x + dx * .6}" y2="${y - 40}" class="sm" stroke-width=".8"/><line x1="${x}" y1="${y + 80}" x2="${x + dx * .6}" y2="${y + 40}" class="sm" stroke-width=".8"/><path d="M${x + dx * .6} ${y - 40} l${-dx * .25} 22 M${x + dx * .6} ${y - 40} l${dx * .25} 22" class="${c === "fT" ? "sT" : "sG"}" stroke-width="5" stroke-linecap="round"/><path d="M${x + dx * .6} ${y + 40} l${-dx * .25} -22 M${x + dx * .6} ${y + 40} l${dx * .25} -22" class="${c === "fT" ? "sT" : "sG"}" stroke-width="5" stroke-linecap="round"/>`; });
    } else {
      s += `<path d="M${x - 62} ${y - 80} h124 v58 q-30 22 0 44 v58 h-124 v-58 q30 -22 0 -44z" class="fis sm" stroke-width="1.4"/>` + `<circle cx="${x}" cy="${y - 48}" r="26" class="fcard sm" stroke-width="1.2"/><circle cx="${x}" cy="${y + 48}" r="26" class="fcard sm" stroke-width="1.2"/>`;
      [-1, 1].forEach((sg) => (s += `<path d="M${x - 14} ${y + sg * 48 - 6} q8 -10 14 0 t14 4 M${x - 10} ${y + sg * 48 + 8} q10 6 20 -2" class="sG" stroke-width="2" fill="none"/><path d="M${x - 4} ${y + sg * 48 - 14} q6 12 -2 22" class="sT" stroke-width="2" fill="none"/>`));
    }
    s += `<foreignObject x="${x - 90}" y="196" width="180" height="134"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11.5px;line-height:1.35;color:var(--muted);text-align:center">${d}</div></foreignObject>`;
  });
  return s;
})()}
</svg>
<figcaption><b>Cele patru faze din carte</b>, cu un cromozom matern (verde) și unul patern (portocaliu) pentru două perechi. În metafază cromozomii sunt bicromatidici; în anafază fiecare pol primește câte o cromatidă din fiecare cromozom, deci ambele celule fiice primesc același set complet. Schemă proprie.</figcaption>
</figure>
[[img:mitoza_etape|<b>Succesiunea completă</b>: interfază, profază, prometafază, metafază, anafază, telofază și citokineză.]]
<div class="capcana"><b>Termenii vechi din carte și echivalentul lor actual</b>
<div class="tw"><table><tr><th>În cartea de LP</th><th>Termen actual</th></tr>
<tr><td>centrozomul se divide în profază în doi centrioli</td><td>centrozomul (cu perechea lui de centrioli) se <b>dublează în faza S</b>; în profază cei doi centrozomi migrează spre poli</td></tr>
<tr><td>filamente centriolo-centriolare</td><td>microtubuli <b>polari</b> (interpolari), care se alungesc în anafaza B</td></tr>
<tr><td>filamente centriolo-centromerice / centriolo-cromozomiale</td><td>microtubuli <b>kinetocorieni</b>, care se scurtează în anafaza A</td></tr>
<tr><td>mixoplasmă</td><td>amestecul nucleoplasmă–citoplasmă după dezintegrarea anvelopei nucleare (<b>prometafaza</b>, o fază separată în descrierile actuale)</td></tr>
<tr><td>citodiereză</td><td>finalul citokinezei: separarea completă prin membrană a celor două celule</td></tr></table></div></div>
<h3>Ce vezi la microscop: vârful de rădăcină de ceapă</h3>
<p>Lama clasică de la LP. Meristemul apical se divide intens, iar ceapa are doar <b>2n = 16</b> cromozomi, mari, așa că fazele se recunosc ușor la obiectivul de 40×.</p>
[[gal:ceapa_mitoza|<b>Câmp din meristemul de rădăcină de ceapă.</b> Majoritatea celulelor sunt în interfază (nucleu rotund, cu nucleoli). Caută celulele în care cromatina apare ca filamente (profază), ca bandă în mijloc (metafază) sau ca două grupuri la capete (anafază, telofază).;;ceapa_mitoza2|<b>Metafază și telofază la ceapă.</b> În centru, cromozomii aliniați în placa ecuatorială; lângă ea, o celulă cu două nuclee fiice reformate și peretele nou format între ele.]]
<div class="tw"><table><tr><th>Ce vezi</th><th>Faza</th></tr>
<tr><td>nucleu rotund, granular, cu 1–2 nucleoli</td><td>interfază</td></tr>
<tr><td>filamente subțiri, încolăcite, în nucleu încă delimitat</td><td>profază</td></tr>
<tr><td>bandă densă de cromozomi la ecuator; fără membrană nucleară</td><td>metafază</td></tr>
<tr><td>două grupuri de cromozomi în formă de V, cu vârful spre poli</td><td>anafază</td></tr>
<tr><td>două mase de cromatină la poli, cu perete median (placă celulară la plante)</td><td>telofază</td></tr></table></div>
<p>Cartea mai clasifică mitozele după rezultat: <b>homotipică</b> (două celule nediferențiate, ca mama), <b>heterotipică</b> (două celule mai diferențiate), <b>homo-heterotipică</b> (una rămâne ca mama, una se diferențiază: modul de diviziune al celulelor stem) și <b>de dediferențiere</b> (din celulă diferențiată, celule nediferențiate).</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce se studiază cromozomii în metafază și nu în anafază?</summary><div>În metafază condensarea e maximă și cromozomii sunt bine individualizați, cu cromatidele vizibile. În anafază cromatidele s-au despărțit și sunt în mișcare, deci cromozomii se suprapun și nu se mai pot număra și compara ușor.</div></details>
<details class="q"><summary>Ce eveniment fizic definește începutul anafazei?</summary><div>Clivarea longitudinală a centromerului: cromatidele surori se separă și devin cromozomi monocromatidici.</div></details>
</div>`
},
{
id: "erori-mitoza", titlu: "Erorile de distribuție a materialului genetic în mitoză", pag: "15–16", emery: "cap. 3, p. 34–40", acopera: ["lp01-r09"], curs: ["c05/extinse"],
html: `
<p>O greșeală în mitoză afectează doar celulele care descind din celula respectivă. Dacă apare în primele diviziuni ale zigotului, organismul ajunge format din linii celulare diferite genetic: <b>mozaicism</b>.</p>
<figure>
<svg viewBox="0 0 760 420" role="img" aria-label="Cinci erori de distribuție în mitoză">${DEFS}
${(() => {
  const P = [["1. Nondisjuncție cromatidiană", "centromerul nu se separă; cromozomul bicromatidic merge la un pol", "2n+1  |  2n−1"], ["2. Întârziere anafazică", "un cromozom rămâne în urmă și ajunge într-un micronucleu, apoi se pierde", "2n−1 (micronucleu)  |  2n"], ["3. Clivare transversală a centromerului", "se despart brațele, nu cromatidele: izocromozomi i(p), i(q)", "trisomie p + monosomie q (sau invers)"], ["4. Mitoză multipolară", "centrozomul se divide multiplu; cromozomii se împart inegal", "aneuploidii grave"], ["5. Endomitoză (endoreduplicare)", "replicare normală, fără citokineză", "o celulă 4n"]];
  let s = "";
  P.forEach(([t, d, r], i) => {
    const col = i < 3 ? 0 : 1, row = i < 3 ? i : i - 3, x = 20 + col * 380, y = 14 + row * 136;
    s += `<rect x="${x}" y="${y}" width="360" height="126" rx="10" class="fcard sm" stroke-width="1"/><text x="${x + 12}" y="${y + 22}" class="ti b">${t}</text>`;
    s += `<foreignObject x="${x + 12}" y="${y + 30}" width="170" height="90"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted)">${d}</div></foreignObject>`;
    const cx = x + 210, cy = y + 74;
    if (i === 0) s += cel(cx + 20, cy, 30) + crz(cx + 20, cy, 9, 14, { w: 5, g: 1, cl: "fT" }) + sag(cx + 52, cy, cx + 74, cy - 18) + sag(cx + 52, cy, cx + 74, cy + 18) + cel(cx + 98, cy - 26, 16, "foks") + cel(cx + 98, cy + 26, 16, "fws") + `<text x="${cx + 98}" y="${cy - 22}" text-anchor="middle" class="ti b" style="font-size:10.5px">+1</text><text x="${cx + 98}" y="${cy + 30}" text-anchor="middle" class="ti b" style="font-size:10.5px">−1</text>`;
    if (i === 1) s += cel(cx + 20, cy, 30) + `<rect x="${cx + 4}" y="${cy - 3}" width="22" height="5" rx="2" class="fT"/>` + sag(cx + 52, cy, cx + 74, cy - 18) + sag(cx + 52, cy, cx + 74, cy + 18) + cel(cx + 98, cy - 26, 16, "fws") + `<circle cx="${cx + 120}" cy="${cy - 36}" r="5" class="fT"/>` + cel(cx + 98, cy + 26, 16, "foks");
    if (i === 2) s += crz(cx + 6, cy + 4, 14, 28, { w: 6, g: 1 }) + `<line x1="${cx - 8}" y1="${cy + 4}" x2="${cx + 20}" y2="${cy + 4}" class="sw" stroke-width="2" stroke-dasharray="3 2"/>` + sag(cx + 26, cy + 4, cx + 52, cy + 4) + crz(cx + 74, cy + 4, 14, 14, { w: 6, g: 1, cl: "fT" }) + crz(cx + 112, cy + 4, 28, 28, { w: 6, g: 1 }) + `<text x="${cx + 74}" y="${cy + 38}" text-anchor="middle" class="tm" style="font-size:11px">i(p)</text><text x="${cx + 112}" y="${cy + 50}" text-anchor="middle" class="tm" style="font-size:11px">i(q)</text>`;
    if (i === 3) s += cel(cx + 60, cy, 44) + [0, 1, 2].map((k) => { const a = -Math.PI / 2 + k * 2.1; return `<circle cx="${cx + 60 + 40 * Math.cos(a)}" cy="${cy + 40 * Math.sin(a)}" r="4" class="fC"/><line x1="${cx + 60 + 40 * Math.cos(a)}" y1="${cy + 40 * Math.sin(a)}" x2="${cx + 60}" y2="${cy}" class="sm" stroke-width=".8"/>`; }).join("");
    if (i === 4) s += cel(cx + 20, cy, 28) + sag(cx + 50, cy, cx + 74, cy) + cel(cx + 110, cy, 36, "fws") + `<text x="${cx + 110}" y="${cy + 5}" text-anchor="middle" class="ti b">4n</text>`;
    s += `<text x="${x + 12}" y="${y + 118}" class="tw2 b" style="font-size:12px">${r}</text>`;
  });
  s += `<rect x="400" y="290" width="340" height="120" rx="10" class="fas"/><text x="412" y="314" class="ta b">Testul micronucleilor</text><foreignObject x="412" y="322" width="318" height="88"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12.5px;line-height:1.4;color:var(--ink)">Un micronucleu = un cromozom (sau fragment) rămas în afara nucleului. Numărul lor crește după expunere la mutageni, mai ales radiații ionizante: e un test de genotoxicitate.</div></foreignObject>`;
  return s;
})()}
</svg>
<figcaption><b>Erorile mitotice din carte, comparate.</b> Primele trei produc, dacă apar devreme în embrion, mozaicuri (de exemplu 46,XX/45,X în sindromul Turner în mozaic, LP V). Endomitoza poate fi fiziologică, în regenerare. Schemă proprie.</figcaption>
</figure>
[[img:izocrz_formare|<b>Cum apare un izocromozom.</b> Stânga: centromerul se divide transversal și rezultă un cromozom format din două brațe lungi identice, i(Xq) (brațele scurte se pierd). Dreapta: varianta izodicentrică, prin rupere în brațul scurt și fuziunea cromatidelor surori. Izocromozomul Xq e cauza a ~15% din cazurile de sindrom Turner.]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce întârzierea anafazică produce doar monosomii, iar nondisjuncția și trisomii?</summary><div>Cromozomul întârziat nu ajunge în niciun nucleu: se pierde într-un micronucleu. La nondisjuncție cromozomul nu se pierde, ci ajunge integral la un singur pol, care primește o copie în plus.</div></details>
<details class="q"><summary>Ce cariotip are o persoană la care nondisjuncția 21 s-a petrecut la a doua diviziune a unui zigot normal?</summary><div>Mozaic, cu trei linii la început: 46 normală, 47,+21 și 45,−21. Linia monosomică pentru un autozom nu e viabilă și dispare, deci rezultatul practic este 46/47,+21 (Down în mozaic).</div></details>
</div>`
},
{
id: "meioza", titlu: "Gametogeneza: evenimentele din timpul meiozei", pag: "16–17", emery: "cap. 3, p. 33–34", acopera: ["lp01-r10"], curs: ["c05/recombinare"],
html: `
<p>Două diviziuni succesive, fără replicare între ele. <b>Meioza I</b> este <b>reducțională</b> (se separă omologii); <b>meioza II</b> este <b>ecvațională</b>, asemănătoare unei mitoze pe un set haploid (se separă cromatidele).</p>
<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="Substadiile profazei I">
${(() => {
  const st = [["Leptoten", "filamente lungi, subțiri, prinse cu telomerele de membrana nucleară"], ["Zigoten", "omologii se aliniază; complex sinaptonemal; bivalenți (de fapt tetrade). XY: doar regiunea pseudoautozomală → vezicula sexuală"], ["Pahiten", "scurtare și îngroșare; crossing-over între o cromatidă paternă și una maternă"], ["Diploten", "omologii încep să se separe; rămân prinși la chiasme (locurile crossing-overului)"], ["Diakineză", "terminalizarea chiasmelor; condensare maximă înainte de MI"]];
  let s = "";
  st.forEach(([n, d], i) => {
    const x = 76 + i * 152, y = 100;
    s += `<rect x="${x - 70}" y="18" width="140" height="160" rx="10" class="${i === 2 ? "fas" : "fcard"} sm" stroke-width="1"/><text x="${x}" y="40" text-anchor="middle" class="ti b">${n}</text>`;
    if (i === 0) s += `<path d="M${x - 30} ${y - 40} q20 30 -4 50 t10 40" class="sG" stroke-width="2.5" fill="none"/><path d="M${x + 20} ${y - 40} q-14 34 6 50 t-6 40" class="sT" stroke-width="2.5" fill="none"/>`;
    if (i === 1) s += `<path d="M${x - 8} ${y - 46} q10 30 -2 50 t6 40" class="sG" stroke-width="3" fill="none"/><path d="M${x + 4} ${y - 46} q10 30 -2 50 t6 40" class="sT" stroke-width="3" fill="none"/><path d="M${x - 2} ${y - 44} q10 30 -2 50 t6 40" class="sm" stroke-width="1" stroke-dasharray="2 2" fill="none"/>`;
    if (i === 2) s += [-9, -4, 4, 9].map((dx, k) => `<line x1="${x + dx}" y1="${y - 44}" x2="${x + dx}" y2="${y + 44}" class="${k < 2 ? "sG" : "sT"}" stroke-width="4" stroke-linecap="round"/>`).join("") + `<path d="M${x - 4} ${y - 8} L${x + 4} ${y + 8} M${x + 4} ${y - 8} L${x - 4} ${y + 8}" class="sa" stroke-width="2"/>`;
    if (i === 3) s += `<path d="M${x - 14} ${y - 44} q-6 30 10 44 q16 14 -2 44" class="sG" stroke-width="4" fill="none"/><path d="M${x - 9} ${y - 44} q-6 30 10 44 q16 14 -2 44" class="sG" stroke-width="4" fill="none" opacity=".6"/><path d="M${x + 14} ${y - 44} q6 30 -10 44 q-16 14 2 44" class="sT" stroke-width="4" fill="none"/><path d="M${x + 9} ${y - 44} q6 30 -10 44 q-16 14 2 44" class="sT" stroke-width="4" fill="none" opacity=".6"/>`;
    if (i === 4) s += `<path d="M${x - 22} ${y - 30} q-4 26 18 30 q-20 6 -16 30" class="sG" stroke-width="5" fill="none"/><path d="M${x + 22} ${y - 30} q4 26 -18 30 q20 6 16 30" class="sT" stroke-width="5" fill="none"/>`;
    s += `<foreignObject x="${x - 74}" y="186" width="148" height="152"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11.5px;line-height:1.35;color:var(--muted);text-align:center">${d}</div></foreignObject>`;
  });
  return s;
})()}
</svg>
<figcaption><b>Profaza I, cea mai lungă etapă a meiozei</b>, cu cele cinci substadii. Verde = omologul patern, portocaliu = cel matern. În pahiten se produce crossing-overul (recombinarea intracromozomică), vizibil apoi în diploten ca chiasme. Schemă proprie.</figcaption>
</figure>
[[gal:sinaptonemal|<b>Complexul sinaptonemal</b>: o „fermoar” proteic (elemente axiale/laterale și element central) care ține omologii aliniați pe toată lungimea, de la leptoten la pahiten; crossing-overul pornește de la rupturi dublu catenare programate.;;meioza|<b>Meioza în ansamblu</b>: o replicare, două diviziuni, patru celule haploide, fiecare cu o combinație diferită de cromozomi materni și paterni.]]
<div class="pasi">
<div><b>Metafaza I</b>bivalenții se așază în placa metafazică</div>
<div><b>Anafaza I</b>se separă <b>omologii bicromatidici</b>, aleatoriu: recombinarea intercromozomială, 2<sup>23</sup> ≈ 8,4 milioane de combinații</div>
<div><b>Telofaza I</b>două celule n, cu cromozomi bicromatidici, legate printr-o punte citoplasmatică (diadă)</div>
<div><b>Profaza și metafaza II</b>fără interfază și fără sinteză de ADN</div>
<div><b>Anafaza II</b>clivarea longitudinală a centromerului; se separă cromatidele surori</div>
<div><b>Telofaza II</b>patru celule haploide cu cromozomi monocromatidici recombinați</div>
</div>
[[img:crossing|<b>Crossing-overul</b>: schimbul reciproc de segmente între cromatide nesurori ale omologilor. Rezultă cromatide recombinante, cu alele dintr-un părinte pe o porțiune și din celălalt pe restul.]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Care sunt cele două surse de variabilitate produse de meioză?</summary><div>Crossing-overul din pahiten (recombinare intracromozomică, între cromatide nesurori) și segregarea independentă a omologilor în anafaza I (recombinare intercromozomială, 2<sup>23</sup> combinații).</div></details>
<details class="q"><summary>De ce se spune că bivalentul este de fapt o tetradă?</summary><div>Bivalentul are doi cromozomi omologi, dar fiecare e bicromatidic (replicarea s-a făcut înainte): patru cromatide în total.</div></details>
<details class="q"><summary>Cum se împerechează X și Y, dacă nu sunt omologi?</summary><div>Doar prin regiunile pseudoautozomale de la capete, cap la cap, formând vezicula sexuală. Acolo au loc și crossing-overurile obligatorii X–Y.</div></details>
</div>`
},
{
id: "gametogeneza", titlu: "Particularitățile gametogenezei masculine și feminine", pag: "17–18", emery: "cap. 3, p. 34", acopera: ["lp01-r11"],
html: `
<figure>
<svg viewBox="0 0 760 410" role="img" aria-label="Spermatogeneză și ovogeneză comparate">
${(() => {
  let s = "";
  [["Spermatogeneza", 190, "foks", "sok", [[0, "spermatocit I (2n)"], [1, "2 spermatocite II (n)"], [2, "4 spermatide (n)"]], "2 × 23,X (ginospermatozoizi) + 2 × 23,Y (androspermatozoizi)"], ["Ovogeneza", 570, "fws", "sw", [[0, "ovocit I (2n)"], [1, "ovocit II + globul polar I"], [2, "ovul + 3 globuli polari"]], "1 ovul 23,X + 3 globuli polari (23,X), care degenerează"]].forEach(([t, x, cl, sl, lv, rez], k) => {
    s += `<text x="${x}" y="22" text-anchor="middle" class="ti b">${t}</text>`;
    const Y = [62, 132, 202];
    if (k === 0) {
      s += cel(x, Y[0], 20, cl); [x - 70, x + 70].forEach((xx) => (s += `<line x1="${x}" y1="${Y[0] + 20}" x2="${xx}" y2="${Y[1] - 16}" class="${sl}" stroke-width="1.4"/>` + cel(xx, Y[1], 16, cl)));
      [x - 105, x - 35, x + 35, x + 105].forEach((xx, i) => (s += `<line x1="${i < 2 ? x - 70 : x + 70}" y1="${Y[1] + 16}" x2="${xx}" y2="${Y[2] - 13}" class="${sl}" stroke-width="1.4"/>` + cel(xx, Y[2], 13, cl) + `<path d="M${xx} ${Y[2] + 13} q6 14 -2 28 t2 22" class="${sl}" stroke-width="1.6" fill="none"/><text x="${xx}" y="${Y[2] + 4}" text-anchor="middle" class="ti b" style="font-size:10.5px">${i % 2 ? "Y" : "X"}</text>`));
    } else {
      s += cel(x, Y[0], 26, cl) + `<line x1="${x}" y1="${Y[0] + 26}" x2="${x - 30}" y2="${Y[1] - 22}" class="${sl}" stroke-width="1.4"/>` + cel(x - 30, Y[1], 22, cl) + `<line x1="${x}" y1="${Y[0] + 26}" x2="${x + 80}" y2="${Y[1] - 7}" class="${sl}" stroke-width="1.4"/>` + cel(x + 80, Y[1], 7, "fline");
      s += `<line x1="${x - 30}" y1="${Y[1] + 22}" x2="${x - 50}" y2="${Y[2] - 30}" class="${sl}" stroke-width="1.4"/>` + cel(x - 50, Y[2] + 4, 32, cl) + `<text x="${x - 50}" y="${Y[2] + 9}" text-anchor="middle" class="ti b">ovul</text><line x1="${x - 30}" y1="${Y[1] + 22}" x2="${x + 20}" y2="${Y[2] - 6}" class="${sl}" stroke-width="1.4"/>` + cel(x + 20, Y[2], 6, "fline") + [x + 66, x + 96].map((xx) => `<line x1="${x + 80}" y1="${Y[1] + 7}" x2="${xx}" y2="${Y[2] - 6}" class="${sl}" stroke-width="1.4"/>` + cel(xx, Y[2], 6, "fline")).join("") + `<text x="${x + 80}" y="${Y[2] + 24}" text-anchor="middle" class="tm" style="font-size:11px">globuli polari</text>`;
    }
    lv.forEach(([i, e]) => (s += `<text x="${k === 0 ? 20 : 400}" y="${[62, 132, 202][i] + 4}" class="tm" style="font-size:11px">${i === 0 ? "" : i === 1 ? "MI →" : "MII →"}</text>`));
    s += `<foreignObject x="${x - 178}" y="284" width="356" height="124"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12.5px;line-height:1.4;color:var(--ink);background:var(--${k ? "warn" : "ok"}-soft);border-radius:8px;padding:8px 10px"><b>${rez}</b><br>${k ? "Începe în viața intrauterină, se oprește în profaza I și se reia discontinuu, câte un ovul pe ciclu, până la menopauză. Risc dominant: <b>cromozomial</b>, prin erori de distribuție (crește cu vârsta mamei)." : "Începe la pubertate, continuă până la vârste înaintate. Multe diviziuni mitotice ale spermatogoniilor. Risc dominant: <b>genic</b>, prin erori de copiere (crește cu vârsta tatălui)."}</div></foreignObject>`;
  });
  return s;
})()}
</svg>
<figcaption><b>Același program meiotic, rezultate diferite.</b> La bărbat, patru gameți funcționali din fiecare celulă; la femeie, citoplasma merge aproape toată într-un singur ovul, iar celelalte trei produse sunt globuli polari. Schemă proprie.</figcaption>
</figure>
[[img:gametogeneza|<b>Ovar și testicul în paralel</b>: de la ovogonie/spermatogonie (mitoze), la ovocitul/spermatocitul primar (intrarea în meioză), apoi la ovulul matur cu globulii polari, respectiv la cele patru spermatide.]]
<div class="capcana"><b>„Conținut genetic identic”: doar ca formulă</b>
<p>Cartea scrie că ovulul și cei trei globuli polari au „conținut genetic identic, 23,X”. Identică este doar <b>formula cromozomială</b> (23,X). Ca alele nu sunt identici: crossing-overul și segregarea independentă fac fiecare produs al meiozei diferit.</p></div>
<div class="emery"><b>De ce diferă tipul de risc</b>
<p>Spermatogoniile trec prin sute de replicări până la vârsta a 50 de ani, deci acumulează mutații punctiforme de novo (efectul vârstei paterne, de exemplu în acondroplazie). Ovocitele stau blocate în profaza I zeci de ani, iar coeziunea dintre omologi slăbește: nondisjuncțiile cresc cu vârsta maternă (trisomia 21).</p></div>`
},
{
id: "erori-meioza", titlu: "Erorile de recombinare și de distribuție în meioză", pag: "18", emery: "cap. 3, p. 35–36", acopera: ["lp01-r12"], curs: ["c05/extinse"],
html: `
<div class="pasi">
<div><b>Crossing-over inegal</b>omologii se aliniază greșit; un cromozom pierde o secvență (deleție), celălalt o primește în plus (duplicație)</div>
<div><b>Nondisjuncție cromozomială (MI)</b>omologii nu se separă: gameți diplosomici (n+1) și nulisomici (n−1)</div>
<div><b>Nondisjuncție cromatidiană (MII)</b>cromatidele surori nu se separă: gameți diplosomici sau nulisomici</div>
<div><b>Întârziere anafazică</b>în anafaza I sau II: gameți nulisomici</div>
</div>
<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="Nondisjuncția în meioza I comparată cu meioza II">
${(() => {
  let s = "";
  const bara = (x, y, c, ch) => `<rect x="${x - (ch ? 6 : 3)}" y="${y - 14}" width="${ch ? 5 : 5}" height="28" rx="2.5" class="${c}"/>` + (ch ? `<rect x="${x + 1}" y="${y - 14}" width="5" height="28" rx="2.5" class="${c}"/>` : "");
  [["Nondisjuncție în meioza I", 190, true], ["Nondisjuncție în meioza II", 570, false]].forEach(([t, x, mi]) => {
    s += `<text x="${x}" y="22" text-anchor="middle" class="ti b">${t}</text>`;
    s += cel(x, 70, 30) + bara(x - 8, 70, "fG", true) + bara(x + 10, 70, "fT", true);
    const L = [x - 90, x + 90];
    if (mi) {
      s += `<line x1="${x}" y1="100" x2="${L[0]}" y2="138" class="sm" stroke-width="1.4"/><line x1="${x}" y1="100" x2="${L[1]}" y2="138" class="sm" stroke-width="1.4"/>`;
      s += cel(L[0], 160, 24) + bara(L[0] - 8, 160, "fG", true) + bara(L[0] + 10, 160, "fT", true) + cel(L[1], 160, 24);
      [[L[0] - 40, ["fG", "fT"], "n+1"], [L[0] + 40, ["fG", "fT"], "n+1"], [L[1] - 40, [], "n−1"], [L[1] + 40, [], "n−1"]].forEach(([gx, cc, et], i) => (s += `<line x1="${i < 2 ? L[0] : L[1]}" y1="184" x2="${gx}" y2="226" class="sm" stroke-width="1.4"/>` + cel(gx, 246, 20, cc.length ? "fws" : "fline") + cc.map((c, j) => bara(gx - 5 + j * 10, 246, c, false)).join("") + `<text x="${gx}" y="284" text-anchor="middle" class="tw2 b">${et}</text>`));
      s += `<text x="${x}" y="312" text-anchor="middle" class="ti" style="font-size:12.5px">toți cei 4 gameți sunt anormali;</text><text x="${x}" y="330" text-anchor="middle" class="ti" style="font-size:12.5px">gametul n+1 are <tspan class="b">ambii omologi</tspan> (unul matern, unul patern)</text>`;
    } else {
      s += `<line x1="${x}" y1="100" x2="${L[0]}" y2="138" class="sm" stroke-width="1.4"/><line x1="${x}" y1="100" x2="${L[1]}" y2="138" class="sm" stroke-width="1.4"/>`;
      s += cel(L[0], 160, 24) + bara(L[0], 160, "fG", true) + cel(L[1], 160, 24) + bara(L[1], 160, "fT", true);
      [[L[0] - 40, ["fG", "fG"], "n+1"], [L[0] + 40, [], "n−1"], [L[1] - 40, ["fT"], "n"], [L[1] + 40, ["fT"], "n"]].forEach(([gx, cc, et], i) => (s += `<line x1="${i < 2 ? L[0] : L[1]}" y1="184" x2="${gx}" y2="226" class="sm" stroke-width="1.4"/>` + cel(gx, 246, 20, et === "n" ? "foks" : cc.length ? "fws" : "fline") + cc.map((c, j) => bara(gx - (cc.length - 1) * 5 + j * 10, 246, c, false)).join("") + `<text x="${gx}" y="284" text-anchor="middle" class="${et === "n" ? "tok" : "tw2"} b">${et}</text>`));
      s += `<text x="${x}" y="312" text-anchor="middle" class="ti" style="font-size:12.5px">doar jumătate din gameți sunt anormali;</text><text x="${x}" y="330" text-anchor="middle" class="ti" style="font-size:12.5px">gametul n+1 are <tspan class="b">două copii ale aceluiași</tspan> cromozom</text>`;
    }
  });
  s += `<text x="20" y="354" class="tm">Verde = cromozomul de origine paternă, portocaliu = cel de origine maternă (o singură pereche, pentru simplitate).</text>`;
  return s;
})()}
</svg>
<figcaption><b>MI sau MII: cum se deosebesc.</b> După fecundare cu un gamet normal, gametul n+1 dă un zigot trisomic (2n+1), iar cel n−1 unul monosomic (2n−1). Cu markeri ADN se poate afla în care diviziune s-a produs eroarea: în trisomia 21 de origine maternă, ~3/4 din cazuri sunt erori de MI. Schemă proprie.</figcaption>
</figure>
[[img:nondisj_t21|<b>De la nondisjuncție la trisomia 21.</b> Eroarea apare în MI la mamă: un ovul cu 24 de cromozomi (două copii ale lui 21), fecundat de un spermatozoid normal cu 23, dă un zigot cu 47.]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un copil cu trisomie 21 are două cromozomii 21 materni identici în regiunea centromerică. În ce diviziune a fost eroarea?</summary><div>În meioza II: cromatidele surori nu s-au separat, deci copiile sunt identice la centromer. O eroare în MI ar fi dus în gamet cei doi omologi diferiți ai mamei.</div></details>
<details class="q"><summary>Ce rezultă prin crossing-over inegal între două copii ale unei gene repetate în tandem?</summary><div>Un cromozom cu o copie în minus (deleție) și unul cu o copie în plus (duplicație). Exemplu clasic: genele opsinelor de pe X, în daltonism.</div></details>
</div>`
},
{
id: "fecundare", titlu: "Fecundarea și anomaliile de fecundare", pag: "18–19", emery: "cap. 3; cap. 9 (mole hidatiforme)", acopera: ["lp01-r13", "lp01-r14"], curs: ["c04/amprentare", "c03/mitocondrial"],
html: `
<p>Fecundarea unește doi gameți haploizi: zigotul are din nou <b>2n = 46</b> (46,XX sau 46,XY). Prin ea se produce <b>recombinarea genomică</b> (o combinație nouă de cromozomi materni și paterni) și se stabilește <b>sexul genetic</b>, după cum fecundează un ginospermatozoid (23,X) sau un androspermatozoid (23,Y). Raportul sexelor la naștere nu e 1:1: se concep mai mulți băieți, dar pierderea mai mare a produșilor 46,XY de-a lungul vieții inversează raportul la vârste înaintate. Citoplasma zigotului vine din ovul, deci ADN-ul mitocondrial are <b>ereditate maternă</b> (<a href="#/c03/mitocondrial">ghidul de curs, genomul mitocondrial</a>).</p>
<figure>
<svg viewBox="0 0 760 390" role="img" aria-label="Originea parentală a seturilor cromozomiale în anomaliile de fecundare">
${(() => {
  const R = [["Normal", "n♀ + n♂", ["M", "P"], "zigot 2n", "dezvoltare normală", "tok"], ["Dispermie", "n♀ + n♂ + n♂", ["M", "P", "P"], "triploid 3n", "molă parțială (exces patern)", "tw2"], ["Diandrie", "n♀ + 2n♂", ["M", "P", "P"], "triploid 3n", "molă parțială: placentă mare, polichistică; embrion slab dezvoltat", "tw2"], ["Diginie", "2n♀ + n♂", ["M", "M", "P"], "triploid 3n", "embrion întârziat, placentă mică, fibrotică; avort precoce", "tw2"], ["Izodisomie globală paternă", "ovul fără nucleu + n♂, dublat", ["P", "P"], "2n, doar patern", "molă hidatiformă completă, fără embrion", "tw2"], ["Izodisomie globală maternă", "n♀ dublat, fără tată", ["M", "M"], "2n, doar matern", "teratom ovarian: țesuturi embrionare variate, fără placentă", "tw2"]];
  let s = `<text x="20" y="20" class="ti b">Câte seturi haploide vin de la fiecare părinte</text>`;
  R.forEach(([n, m, set, z, ef, c], i) => {
    const y = 40 + i * 56;
    s += `<rect x="16" y="${y}" width="728" height="50" rx="8" class="${i ? "fcard" : "foks"} sm" stroke-width=".8"/><text x="28" y="${y + 21}" class="ti b">${n}</text><text x="28" y="${y + 39}" class="tm" style="font-size:11.5px">${m}</text>`;
    set.forEach((k, j) => (s += `<rect x="${250 + j * 34}" y="${y + 11}" width="28" height="28" rx="6" class="${k === "M" ? "fT" : "fG"}"/><text x="${264 + j * 34}" y="${y + 30}" text-anchor="middle" style="fill:#fff;font-size:13px" class="b">${k}</text>`));
    s += `<text x="370" y="${y + 21}" class="ti b" style="font-size:12.5px">${z}</text><foreignObject x="370" y="${y + 24}" width="370" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11.5px;line-height:1.2;color:var(--${c === "tok" ? "ok" : "warn"})">${ef}</div></foreignObject>`;
  });
  s += `<text x="20" y="384" class="tm">M = set haploid de origine maternă, P = paternă. Dispermia este una dintre cauzele triploidiei diandrice.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Originea parentală decide fenotipul</b>, chiar la același număr de cromozomi. Excesul patern favorizează placenta (trofoblastul), cel matern embrionul. Explicația este <b>amprentarea genomică</b>: unele gene se exprimă doar de pe copia paternă, altele doar de pe cea maternă (<a href="#/c04/amprentare">ghidul de curs, amprentarea</a>). Schemă proprie.</figcaption>
</figure>
[[img:mola|<b>Molă hidatiformă completă, la microscop</b>: vilozități coriale mari, edemațiate (macroscopic, aspectul de „ciorchine de strugure”), cu proliferare de trofoblast și fără țesut embrionar. Genomul este integral patern.]]
<div class="lab"><b>Fecundarea dublă</b>
<p>Dacă ovarul eliberează două ovule fecundate separat: doi zigoți, care evoluează fie separat (<b>gemeni dizigoți</b>), fie se unesc într-un singur organism, o <b>himeră</b>. O himeră din doi zigoți de sex diferit (46,XX/46,XY) poate avea țesut ovarian și testicular: cartea folosește termenul „hermafroditism adevărat”; denumirea actuală este <b>tulburare de dezvoltare sexuală ovotesticulară</b> (DSD ovotesticular).</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Prin ce diferă o himeră de un mozaic?</summary><div>Mozaicul provine dintr-un singur zigot, în care o eroare mitotică a creat o a doua linie celulară. Himera provine din doi zigoți diferiți, uniți într-un singur organism.</div></details>
<details class="q"><summary>De ce o molă completă nu are embrion, deși are 46 de cromozomi?</summary><div>Toți cei 46 sunt paterni: lipsesc genele care se exprimă doar de pe setul matern și sunt necesare dezvoltării embrionului. Rămâne doar țesutul trofoblastic, care proliferează.</div></details>
</div>`
},
{
id: "aplicatii", titlu: "Aplicații practice", pag: "20", emery: "cap. 3",
html: `
<p>Ce faci efectiv la acest LP, după carte:</p>
<ol class="protocol">
<li><b>Examinezi preparate cromozomiale</b> de la plante (ceapă), animale și om.<span class="de-ce">Numără cromozomii unei metafaze bine etalate și compară cu Tabelul 1 (ceapa 16, omul 46).</span></li>
<li><b>Identifici elementele cromozomiale și tipurile de cromozomi pe idiograme.</b><span class="de-ce">Pe fiecare cromozom: centromer, p, q, sateliți, constricții secundare; apoi tipul după R = q/p (<a href="#/lp01/tipuri">secțiunea despre tipuri</a>).</span></li>
<li><b>Studiezi etapele diviziunii celulare pe lame.</b><span class="de-ce">Vârful de rădăcină de ceapă: găsește câte o celulă din fiecare fază (<a href="#/lp01/mitoza">tabelul de recunoaștere</a>).</span></li>
<li><b>Rezolvi probleme despre mitoză și meioză.</b><span class="de-ce">Cele mai multe se reduc la a urmări n (seturi de cromozomi) și c (cantitatea de ADN) prin fiecare etapă: vezi graficul din <a href="#/lp01/ciclu">ciclul celular</a>.</span></li>
</ol>
<div class="tw"><table><tr><th>Etapa (la om)</th><th class="n">Cromozomi</th><th class="n">Cromatide / cromozom</th><th class="n">ADN</th><th>Ploidie</th></tr>
<tr><td>Celulă somatică în G1</td><td class="n">46</td><td class="n">1</td><td class="n">2c</td><td>2n</td></tr>
<tr><td>G2 / metafaza mitotică</td><td class="n">46</td><td class="n">2</td><td class="n">4c</td><td>2n</td></tr>
<tr><td>Fiecare pol în anafaza mitotică</td><td class="n">46</td><td class="n">1</td><td class="n">2c</td><td>2n</td></tr>
<tr><td>Spermatocit / ovocit I (profaza I)</td><td class="n">46 (23 de bivalenți)</td><td class="n">2</td><td class="n">4c</td><td>2n</td></tr>
<tr><td>Spermatocit / ovocit II</td><td class="n">23</td><td class="n">2</td><td class="n">2c</td><td>n</td></tr>
<tr><td>Spermatidă / ovul</td><td class="n">23</td><td class="n">1</td><td class="n">c</td><td>n</td></tr></table></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Câte cromatide are o celulă umană în metafaza I? Dar în metafaza II?</summary><div>Metafaza I: 46 de cromozomi bicromatidici = 92 de cromatide. Metafaza II: 23 de cromozomi bicromatidici = 46 de cromatide.</div></details>
<details class="q"><summary>Câte tipuri de gameți poate produce o celulă cu 2n = 6 (trei perechi), fără crossing-over?</summary><div>2<sup>3</sup> = 8 combinații de omologi materni și paterni.</div></details>
<details class="q"><summary>O celulă cu 2n = 8 suferă o nondisjuncție în anafaza I pentru o pereche. Câți cromozomi au gameții?</summary><div>Doi gameți cu n+1 = 5 și doi cu n−1 = 3.</div></details>
</div>`
}
]
});
})();
