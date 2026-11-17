/* Capitolul 5 — Variabilitatea genetică (curs p. 84–124) */
(function () {
// cod genetic compact (ordinea TCAG) pentru figurile de mutații
const B = "UCAG", AA = "FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG";
const N3 = { F: "Phe", L: "Leu", S: "Ser", Y: "Tyr", "*": "STOP", C: "Cys", W: "Trp", P: "Pro", H: "His", Q: "Gln", R: "Arg", I: "Ile", M: "Met", T: "Thr", N: "Asn", K: "Lys", V: "Val", A: "Ala", D: "Asp", E: "Glu", G: "Gly" };
const tr = (c) => N3[AA[B.indexOf(c[0]) * 16 + B.indexOf(c[1]) * 4 + B.indexOf(c[2])]];
const codoni = (s) => s.match(/.{1,3}/g);
// rând de codoni + aminoacizi, cu evidențiere de la poziția hi
const rand = (x, y, s, hi = -1, lab = "", stopLa = true) => {
  let o = `<text x="${x - 12}" y="${y + 18}" text-anchor="end" class="ti b">${lab}</text>`, stop = false;
  codoni(s).forEach((c, i) => {
    const cx = x + i * 74, full = c.length === 3, aa = full && !stop ? tr(c) : "";
    const dupa = hi >= 0 && i >= hi;
    o += `<rect x="${cx}" y="${y}" width="66" height="26" rx="5" class="${dupa ? "fws sw" : "fis si"}" stroke-width="1"/><text x="${cx + 33}" y="${y + 18}" text-anchor="middle" class="mono ti" style="font-size:15px;letter-spacing:2px">${c}</text>`;
    if (aa) o += `<text x="${cx + 33}" y="${y + 46}" text-anchor="middle" class="${aa === "STOP" ? "tw2 b" : dupa ? "tw2 b" : "tin b"}">${aa}</text>`;
    if (aa === "STOP" && stopLa) stop = true;
  });
  return o;
};

GHID.capitol({
id: "c05",
intro: `<p class="lead">De ce nu există doi oameni identici? Cursul numește trei surse ale variabilității: <b>recombinarea</b> (amestecă ce există), <b>mutațiile</b> (creează ceva nou) și <b>migrațiile</b> (mută variantele între populații). Capitolul se încheie cu mecanismele care țin mutațiile sub control: sistemele de <b>reparare a ADN</b>.</p>
<div class="pasi"><div><b>Recombinare</b>meioză + fecundare: combinații noi din alele existente</div><div><b>Mutații</b>schimbări noi, accidentale, permanente și ereditare</div><div><b>Migrații</b>flux genic între populații, mai mulți heterozigoți</div><div><b>Reparare</b>BER, NER, MMR, rupturi bicatenare: frâna</div></div>`,
sectiuni: [
{
id: "recombinare", titlu: "Recombinarea genetică", pag: "84–88", emery: "cap. 3, p. 35–40", acopera: ["c05-r01", "c05-r02", "c05-r04", "c05-r05"],
html: `
<p><b>Variabilitatea</b> este capacitatea organismelor de a se diferenția unele de altele. Cursul o distinge de <b>variația (diversitatea) genetică</b>: variabilitatea măsoară cât de mult <i>tinde</i> să varieze un caracter, variația numără schimbările efective dintr-o populație.</p>
<p><b>Recombinarea</b> produce combinații genetice noi prin rearanjarea materialului genetic din două unități genetice diferite. Are loc în reproducerea sexuată, în <b>meioză</b> și la <b>fecundare</b>. După cantitatea de material implicat, există trei tipuri (Figura 9 din curs):</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Tipuri de recombinări">
<defs><marker id="r1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="290" y="12" width="180" height="40" rx="10" class="fas"/><text x="380" y="38" text-anchor="middle" class="ta b" style="font-size:15px">Recombinarea genetică</text>
<path d="M330 52 L130 90 M380 52 V90 M430 52 L630 90" class="si" stroke-width="1.6" marker-end="url(#r1)" fill="none"/>
<rect x="20" y="94" width="220" height="140" rx="12" class="fcard si" stroke-width="1.2"/>
<text x="130" y="118" text-anchor="middle" class="ti b">GENOMICĂ</text>
<circle cx="80" cy="160" r="22" class="fG"/><text x="80" y="165" text-anchor="middle" fill="#fff" style="font-weight:700">n</text><text x="118" y="166" text-anchor="middle" class="ti b">+</text><circle cx="156" cy="160" r="22" class="fT"/><text x="156" y="165" text-anchor="middle" fill="#fff" style="font-weight:700">n</text><text x="188" y="166" class="ti">→ 2n</text>
<text x="130" y="206" text-anchor="middle" class="tm">fecundare: doi gameți</text><text x="130" y="222" text-anchor="middle" class="tm">haploizi → zigot diploid</text>
<rect x="270" y="94" width="220" height="140" rx="12" class="fcard si" stroke-width="1.2"/>
<text x="380" y="118" text-anchor="middle" class="ti b">CROMOZOMIALĂ</text>
<rect x="320" y="132" width="12" height="56" rx="6" class="fG"/><rect x="336" y="132" width="12" height="56" rx="6" class="fT"/><rect x="336" y="132" width="12" height="22" rx="6" class="fG"/><rect x="320" y="132" width="12" height="22" rx="6" class="fT"/>
<text x="334" y="204" text-anchor="middle" class="tm">intra-</text>
<rect x="404" y="140" width="12" height="40" rx="6" class="fG"/><rect x="420" y="140" width="12" height="48" rx="6" class="fT"/><rect x="436" y="132" width="12" height="56" rx="6" class="fT"/><rect x="452" y="146" width="12" height="34" rx="6" class="fG"/>
<text x="434" y="204" text-anchor="middle" class="tm">inter-</text>
<text x="380" y="224" text-anchor="middle" class="tm">crossing-over · asortare independentă</text>
<rect x="520" y="94" width="220" height="140" rx="12" class="fcard si" stroke-width="1.2"/>
<text x="630" y="118" text-anchor="middle" class="ti b">GENICĂ</text>
<line x1="560" y1="150" x2="700" y2="150" class="sG" stroke-width="5"/><line x1="560" y1="172" x2="700" y2="172" class="sT" stroke-width="5"/>
<path d="M610 150 L650 172 M610 172 L650 150" class="si" stroke-width="2"/>
<text x="630" y="206" text-anchor="middle" class="tm">schimb în interiorul</text><text x="630" y="222" text-anchor="middle" class="tm">unei gene</text>
</svg>
<figcaption><b>Cele trei niveluri ale recombinării</b> (după Figura 9 din curs). Albastru = material de origine paternă, portocaliu = maternă.</figcaption>
</figure>
<p><b>Recombinarea genomică</b> reface setul diploid (n + n = 2n) prin fecundare. Zigotul are o formulă genetică diferită de a fiecărui părinte; de la el, toate celulele somatice au cromozomii în perechi de omologi identici ca morfologie, dar diferiți ca origine. Variabilitatea este cu atât mai mare cu cât părinții sunt mai puțin înrudiți (consangvinizare redusă).</p>
<h3>Recombinarea cromozomială: crossing-over și „dansul cromozomilor”</h3>
[[gal:meioza|<b>Etapele meiozei.</b> Meioza I separă omologii (diviziune reducțională); meioza II separă cromatidele surori. Rezultă patru celule haploide, diferite genetic.;;crossing|<b>Sinapsa și crossing-overul.</b> Omologii se aliniază genă la genă (bivalent, tetradă); în pachiten, cromatidele nesurori schimbă segmente la nivelul chiasmelor.]]
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Recombinarea intra- și intercromozomială">
<defs><marker id="r2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${(() => {
  const cr = (x, y, h, c1, c2, sw) => `<rect x="${x}" y="${y}" width="11" height="${h}" rx="5.5" class="${c1}"/><rect x="${x + 13}" y="${y}" width="11" height="${h}" rx="5.5" class="${c2}"/>${sw ? `<rect x="${x + 13}" y="${y + h - sw}" width="11" height="${sw}" rx="5.5" class="${c1}"/>` : ""}<circle cx="${x + 12}" cy="${y + h * 0.35}" r="4" class="fZ"/>`;
  let s = "";
  s += `<text x="70" y="22" text-anchor="middle" class="ti b">1 · înainte</text>` + cr(30, 50, 110, "fG", "fG") + cr(66, 50, 110, "fT", "fT");
  s += `<text x="230" y="22" text-anchor="middle" class="ti b">2 · bivalent (profaza I)</text>` + cr(196, 50, 110, "fG", "fG") + cr(222, 50, 110, "fT", "fT");
  s += `<path d="M206 100 L246 130 M246 100 L206 130" class="sw" stroke-width="2"/><text x="230" y="186" text-anchor="middle" class="tm">conjugare: centromer la centromer,</text><text x="230" y="202" text-anchor="middle" class="tm">genă alelă la genă alelă</text>`;
  s += `<text x="420" y="22" text-anchor="middle" class="ti b">3 · după crossing-over</text>`;
  s += `<rect x="370" y="50" width="11" height="110" rx="5.5" class="fG"/><rect x="383" y="50" width="11" height="110" rx="5.5" class="fG"/><rect x="383" y="112" width="11" height="48" rx="5.5" class="fT"/>`;
  s += `<rect x="440" y="50" width="11" height="110" rx="5.5" class="fT"/><rect x="453" y="50" width="11" height="110" rx="5.5" class="fT"/><rect x="440" y="112" width="11" height="48" rx="5.5" class="fG"/>`;
  s += `<text x="420" y="186" text-anchor="middle" class="tm">fiecare cromozom are acum</text><text x="420" y="202" text-anchor="middle" class="tm">segmente materne ȘI paterne</text>`;
  s += `<text x="640" y="22" text-anchor="middle" class="ti b">4 · anafaza I</text>`;
  s += `<rect x="560" y="50" width="11" height="60" rx="5.5" class="fG"/><rect x="576" y="50" width="11" height="44" rx="5.5" class="fT"/><rect x="592" y="50" width="11" height="70" rx="5.5" class="fG"/>`;
  s += `<rect x="680" y="130" width="11" height="60" rx="5.5" class="fT"/><rect x="696" y="130" width="11" height="44" rx="5.5" class="fG"/><rect x="712" y="130" width="11" height="70" rx="5.5" class="fT"/>`;
  s += `<text x="640" y="226" text-anchor="middle" class="tm">fiecare pereche segregă</text><text x="640" y="242" text-anchor="middle" class="tm">independent de celelalte</text>`;
  s += `<path d="M110 105 h60 M276 105 h60 M490 105 h50" class="si" stroke-width="1.6" marker-end="url(#r2)"/>`;
  s += `<rect x="20" y="258" width="720" height="34" rx="8" class="fas"/><text x="380" y="280" text-anchor="middle" class="ti">Doar asortarea independentă dă 2<tspan dy="-6" style="font-size:11px">23</tspan><tspan dy="6"> = 8.388.608 combinații de cromozomi parentali într-un gamet.</tspan></text>`;
  return s;
})()}
</svg>
<figcaption><b>Recombinarea în meioza I</b> (după Figura 10 din curs). Pașii 2–3 = recombinare <b>intracromozomială</b> (crossing-over, în pachiten); pasul 4 = recombinare <b>intercromozomială</b> (combinarea independentă a cromozomilor neomologi).</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Tabelul XIV</th><th>Intracromozomială</th><th>Intercromozomială</th></tr>
<tr><td>Sinonim</td><td><b>crossing-over</b></td><td>„dansul cromozomilor”</td></tr>
<tr><td>Faza</td><td><b>profaza meiozei I</b></td><td><b>anafaza meiozei I</b></td></tr>
<tr><td>Mecanism</td><td>schimb reciproc și egal („transfer încrucișat”) de gene între cromozomii <b>omologi</b></td><td>combinarea independentă, întâmplătoare, a cromozomilor <b>neomologi</b></td></tr>
<tr><td>Rezultat</td><td>fiecare cromozom are fragmente de origine maternă și paternă</td><td>grupuri cromozomiale cu amestec de cromozomi materni și paterni</td></tr>
<tr><td>Număr</td><td>~<b>70</b> recombinări/celulă în meioza feminină, ~<b>50</b> în cea masculină</td><td>2<sup>23</sup> combinații; fiecare cromozom suferă cel puțin un crossing-over</td></tr>
</table></div>
<div class="capcana"><b>Cifră greșită în curs</b><p>Tabelul XIV dă 2<sup>23</sup> = „83.886.068”. Valoarea corectă este <b>8.388.608</b> (cifrele sunt inversate în tipar).</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>În ce fază a meiozei are loc crossing-overul și în ce fază asortarea independentă?</summary><div>Crossing-overul în profaza I (pachiten); asortarea independentă în anafaza I.</div></details>
<details class="q"><summary>De ce doi frați (nu gemeni monozigoți) nu primesc niciodată aceeași combinație de cromozomi?</summary><div>Fiecare gamet are una din 2<sup>23</sup> combinații de cromozomi parentali, iar crossing-overul creează pe deasupra cromozomi „mozaic” unici. Fecundarea combină doi astfel de gameți.</div></details>
</div>`
},
{
id: "clasificare", titlu: "Mutațiile: definiție, caracteristici, clasificare", pag: "86–91", emery: "cap. 2, p. 23–27", acopera: ["c05-r03", "c05-r06"],
html: `
<p><b>Mutația</b> este o schimbare în structura și funcția ADN. Este <b>accidentală, permanentă și ereditară</b>. Poate să nu aibă efect asupra fenotipului sau să îl modifice prin afectarea structurii și funcției genelor.</p>
<div class="pasi">
<div><b>Imprevizibilă</b>nu se poate anticipa când și unde apare</div>
<div><b>Întâmplătoare ca utilitate</b>dar frecvența nu e întâmplătoare: aproape toate sunt dăunătoare, foarte rar benefice</div>
<div><b>Dominantă sau recesivă</b>autozomală sau gonozomală; mai des în doză unică</div>
<div><b>Gene mutator / antimutator</b>gene care cresc, respectiv scad rata mutațiilor</div>
</div>
<figure>
<svg viewBox="0 0 760 430" role="img" aria-label="Clasificarea mutațiilor">
${(() => {
  const crit = [
    ["Genomul", ["nucleare (99,5%)", "mitocondriale (0,5%)"], "fA"],
    ["Mărimea materialului", ["genice", "cromozomiale", "genomiale (ploidie)"], "fG"],
    ["Tipul de celule", ["germinale", "somatice"], "fT"],
    ["Numărul de celule", ["omogene", "în mozaic"], "fC"],
    ["Efectul fenotipic", ["neutre", "nefavorabile (patogene)", "favorabile"], "fP"],
    ["Cauza", ["spontane", "induse"], "fZ"]];
  let s = `<rect x="14" y="180" width="130" height="56" rx="12" class="fas"/><text x="79" y="204" text-anchor="middle" class="ta b">Criterii de</text><text x="79" y="222" text-anchor="middle" class="ta b">clasificare</text>`;
  crit.forEach(([t, xs, c], i) => {
    const y = 18 + i * 68;
    s += `<path d="M144 208 C180 208 180 ${y + 22} 210 ${y + 22}" fill="none" class="sm" stroke-width="1.4"/>`;
    s += `<rect x="210" y="${y + 6}" width="176" height="32" rx="8" class="${c}" opacity=".9"/><text x="298" y="${y + 27}" text-anchor="middle" fill="#fff" style="font-weight:700;font-size:13.5px">${t}</text>`;
    xs.forEach((x, j) => {
      const xx = 410 + j * 116;
      s += `<path d="M386 ${y + 22} H${xx}" class="sm" stroke-width="1" opacity=".6"/><rect x="${xx}" y="${y + 8}" width="110" height="28" rx="7" class="fcard si" stroke-width="1"/><text x="${xx + 55}" y="${y + 27}" text-anchor="middle" class="ti" style="font-size:${x.length > 15 ? 10.5 : 12.5}px">${x}</text>`;
    });
  });
  return s;
})()}
</svg>
<figcaption><b>Șase criterii, aceleași mutații văzute din unghiuri diferite</b> (după Figura 11 din curs). O mutație are câte o etichetă pe fiecare rând: de exemplu, F508del este nucleară, genică, germinală, omogenă, patogenă și spontană.</figcaption>
</figure>
<p><b>Mutațiile nucleare</b> privesc ADN-ul nuclear (99,5%), cele mai multe în ADN-ul extragenic (75% din genom), unde produc polimorfism fără consecințe fenotipice. Cursul numește asta „soluția imensității ADN extragenic”: o sursă de variabilitate care protejează genele.</p>
<p><b>Mutațiile mitocondriale</b> privesc ADNmt (0,5%). Cu mii de copii pe celulă, o mutație într-o singură moleculă are șanse mici să se fixeze; totuși ADNmt este un „punct fierbinte” prin instabilitate crescută și rată mare de fixare. Bolile rezultate au simptomatologie neuromusculară, debut precoce și evoluție rapid progresivă (vezi capitolul 3).</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce majoritatea mutațiilor nucleare nu au consecințe fenotipice?</summary><div>Pentru că lovesc preponderent ADN-ul extragenic, necodant (circa 75% din genom), unde produc doar polimorfisme.</div></details>
<details class="q"><summary>Clasifică o mutație somatică apărută într-un melanocit după criteriile din curs.</summary><div>Nucleară (dacă e în ADN nuclear), de regulă genică, somatică, în mozaic (doar clona celulară respectivă), posibil patogenă, spontană sau indusă (UV). Nu se transmite la descendenți.</div></details>
</div>`
},
{
id: "punctiforme", titlu: "Mutațiile punctiforme: substituții, deleții, inserții", pag: "91–97", emery: "cap. 2, p. 23–25 (Fig. 2.17–2.19)", acopera: ["c05-r07", "c05-r08", "c05-r09", "c05-r10", "c05-r11"],
html: `
<p>Mutațiile <b>punctiforme</b> privesc un singur nucleotid; cele care privesc secvențe mai lungi sunt <b>extinse</b>. Ambele sunt mutații <b>genice</b>.</p>
<div class="tw"><table>
<tr><th>Tabelul XV</th><th>Caracteristici</th></tr>
<tr><td><b>Substituții</b></td><td>înlocuirea unei perechi de baze; prin <b>tranziții</b> sau <b>transversii</b>; efectul depinde de localizare (reglatoare, necodantă, codantă); în exoni schimbă un singur codon (sens sau nonsens); <b>cea mai frecventă mutație</b>; rar, mai multe nucleotide grupate</td></tr>
<tr><td><b>Deleții</b></td><td>pierderea unuia sau mai multor nucleotide; decalarea cadrului de lectură; rar, părți de genă sau gena întreagă</td></tr>
<tr><td><b>Inserții</b></td><td>adăugarea unuia sau mai multor nucleotide; decalarea cadrului de lectură</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Tranziții și transversii">
<circle cx="200" cy="90" r="46" class="fA"/><text x="200" y="98" text-anchor="middle" fill="#fff" style="font-size:28px;font-weight:800">A</text>
<circle cx="560" cy="90" r="46" class="fG"/><text x="560" y="98" text-anchor="middle" fill="#fff" style="font-size:28px;font-weight:800">G</text>
<circle cx="200" cy="250" r="34" class="fT"/><text x="200" y="258" text-anchor="middle" fill="#fff" style="font-size:24px;font-weight:800">T</text>
<circle cx="560" cy="250" r="34" class="fC"/><text x="560" y="258" text-anchor="middle" fill="#fff" style="font-size:24px;font-weight:800">C</text>
<text x="380" y="22" text-anchor="middle" class="tm b">PURINE (două inele)</text><text x="380" y="318" text-anchor="middle" class="tm b">PIRIMIDINE (un inel)</text>
<path d="M250 84 H510 M250 96 H510" class="sok" stroke-width="4"/><path d="M238 244 H522 M238 256 H522" class="sok" stroke-width="4"/>
<text x="380" y="76" text-anchor="middle" class="tok b">TRANZIȚIE</text><text x="380" y="236" text-anchor="middle" class="tok b">TRANZIȚIE</text>
<path d="M200 140 V212 M560 140 V212 M236 120 L526 222 M524 120 L234 222" class="sw" stroke-width="2.5" stroke-dasharray="7 5"/>
<text x="380" y="160" text-anchor="middle" class="tw2 b">TRANSVERSII</text><text x="380" y="178" text-anchor="middle" class="tm">purină ↔ pirimidină</text>
<text x="80" y="170" text-anchor="middle" class="tm">4 tranziții posibile</text><text x="680" y="170" text-anchor="middle" class="tm">8 transversii posibile</text>
</svg>
<figcaption><b>Tranziție vs. transversie.</b> Tranziția înlocuiește o bază cu alta de același tip (A↔G, C↔T); transversia schimbă tipul (purină ↔ pirimidină). Deși transversiile sunt de două ori mai multe ca posibilități, tranzițiile sunt mai frecvente în practică, în parte prin dezaminarea 5-metilcitozinei din CpG (C→T).</figcaption>
</figure>
[[img:mut_punct|<b>Tipurile de mutații punctiforme, pe secvență.</b> Substituție silențioasă, cu sens greșit (conservativă sau nu) și nonsens, plus efectul fiecăreia asupra aminoacidului.]]
<h3>Algoritmul cursului pentru o substituție</h3>
<div class="pasi"><div><b>Ce este?</b>înlocuirea unei perechi de baze</div><div><b>Ce produce?</b>mutații punctiforme (simple), genice</div><div><b>Cum?</b>tranziții sau transversii</div><div><b>Unde?</b>de preferință în „puncte fierbinți”: reglator, necodant intragenic, codant</div><div><b>Ce efect?</b>în exon: schimbă un codon (vezi figura)</div></div>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Efectele unei substituții în codonul UGC">
<rect x="300" y="14" width="160" height="58" rx="12" class="fas"/><text x="380" y="40" text-anchor="middle" class="mono ta" style="font-size:22px;font-weight:800;letter-spacing:3px">UGC</text><text x="380" y="62" text-anchor="middle" class="ta">Cys</text>
${[["UGU", "Cys", "SINONIMĂ", "silențioasă: aceeași proteină", "tok", "foks sok", 120], ["UGG", "Trp", "CU SENS GREȘIT", "missense: alt aminoacid", "tin", "fis sin", 380], ["UGA", "STOP", "NONSENS", "proteină trunchiată", "tw2", "fws sw", 640]].map(([c, a, t, d, cl, f, x]) => `
<path d="M380 72 C380 100 ${x} 100 ${x} 124" fill="none" class="si" stroke-width="1.5"/>
<rect x="${x - 100}" y="124" width="200" height="146" rx="12" class="${f}" stroke-width="1.3"/>
<text x="${x}" y="156" text-anchor="middle" class="mono ti" style="font-size:22px;font-weight:800;letter-spacing:3px">UG<tspan class="${cl}">${c[2]}</tspan></text>
<text x="${x}" y="182" text-anchor="middle" class="${cl} b" style="font-size:16px">${a}</text>
<text x="${x}" y="214" text-anchor="middle" class="${cl} b">${t}</text>
<text x="${x}" y="236" text-anchor="middle" class="tm">${d}</text>`).join("")}
</svg>
<figcaption><b>Trei rezultate posibile ale aceleiași substituții la a treia bază</b> (după Figura 13 din curs). Cursul ilustrează varianta sinonimă tot cu UGC; o substituție sinonimă reală în acest codon este UGC→UGU. Invers, o substituție într-un codon STOP poate da alt STOP (UGA→UAA, fără efect) sau un codon sens (UGA→UGG, Trp): proteina se alungește.</figcaption>
</figure>
[[img:siclemie|<b>Un exemplu clasic de mutație cu sens greșit.</b> În siclemie, o singură transversie A→T în gena β-globinei schimbă GAG (Glu) în GTG (Val) în poziția 6; hemoglobina S polimerizează și deformează hematiile.]]
<h3>Deleții și inserții: contează multiplul de 3</h3>
<p>Dacă se pierd sau se adaugă <b>3 nucleotide</b> (sau un multiplu), cadrul de lectură se păstrează și se pierde sau se adaugă un aminoacid. Exemplul din curs: <b>F508del</b> în <i>CFTR</i>, deleția a trei nucleotide care elimină fenilalanina 508, responsabilă de peste 70% din fibroza chistică la europeni. Tot prin deleții mici în regiunea <b>AZF</b> de pe Y se produce infertilitatea masculină.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Mutație cu decalarea cadrului de lectură">
${rand(130, 20, "AUGAAGUUUGGCGCAUUGGAA", -1, "normal")}
${rand(130, 120, "AUGAAGUUGGCGCAUUGGAA", 2, "deleție U")}
<path d="M300 76 L300 116" class="sw" stroke-width="2" stroke-dasharray="4 3"/><text x="306" y="102" class="tw2 b">✕ U</text>
</svg>
<figcaption><b>Decalarea cadrului de lectură („frameshift”)</b>, exemplul din Figura 14 a cursului, tradus automat cu codul genetic. Pierderea unui singur U din codonul 3 schimbă toți aminoacizii de după el: Phe-Gly-Ala-Leu-Glu devine Leu-Ala-His-Trp.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Efectul inserțiilor de 1, 2 și 3 baze">
${(() => {
  const comp = { A: "U", G: "C", T: "A", C: "G" };
  const m = (d) => d.split("").map((x) => comp[x]).join("");
  const rows = [["AGAAGAAGAAGAAGA", "ADN matriță"], ["AGAAAGAAGAAGAAGA", "+1 bază"], ["AGATAAGAAGAAGAAGA", "+2 baze"], ["AGATTAAGAAGAAGAAGA", "+3 baze"]];
  return rows.map(([d, l], i) => {
    const r = m(d), cs = codoni(r).filter((c) => c.length === 3).slice(0, 5);
    const y = 18 + i * 78;
    return `<text x="12" y="${y + 18}" class="ti b">${l}</text><text x="120" y="${y + 18}" class="mono tm" style="font-size:14px;letter-spacing:1.5px">${d}</text>
    <text x="120" y="${y + 40}" class="tm" style="font-size:11px">ARNm:</text>` + cs.map((c, j) => `<rect x="${330 + j * 84}" y="${y}" width="76" height="26" rx="5" class="${i > 0 && j > 0 && i < 3 ? "fws sw" : i === 3 && j === 1 ? "fws sw" : "fis si"}" stroke-width="1"/><text x="${368 + j * 84}" y="${y + 18}" text-anchor="middle" class="mono ti" style="font-size:14px;letter-spacing:2px">${c}</text><text x="${368 + j * 84}" y="${y + 46}" text-anchor="middle" class="tin b">${tr(c)}</text>`).join("");
  }).join("");
})()}
</svg>
<figcaption><b>Inserții de 1, 2 și 3 baze</b> (după Figura 15 din curs, recalculată). Catena din stânga este matrița; ARNm-ul este complementul ei. Cu +1 și +2 baze, toți codonii de după inserție se schimbă; cu +3 baze se adaugă un singur aminoacid (Asn) și cadrul revine la Ser-Ser-Ser.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce o deleție de 3 nucleotide este de obicei mai blândă decât una de 1 nucleotid?</summary><div>Pentru că păstrează cadrul de lectură: se pierde un singur aminoacid. O deleție de 1 nucleotid schimbă toți codonii din aval și de obicei duce rapid la un codon STOP prematur.</div></details>
<details class="q"><summary>Substituția C→T este tranziție sau transversie?</summary><div>Tranziție: ambele sunt pirimidine.</div></details>
<details class="q"><summary>Ce poate produce o substituție într-un codon STOP?</summary><div>Fie alt codon STOP (fără efect), fie un codon sens: traducerea continuă și rezultă o proteină mai lungă.</div></details>
</div>`
},
{
id: "extinse", titlu: "Mutațiile extinse, cromozomiale și genomiale", pag: "97–102", emery: "cap. 3, p. 40–48; cap. 17", acopera: ["c05-r12", "c05-r13", "c05-r14"],
html: `
<p><b>Mutațiile extinse</b> privesc fragmente de genă sau gene întregi (inserții, deleții, duplicații, inversii). Cursul dă exemple: <b>60%</b> din distrofia Duchenne prin deleții genice extinse (gena <i>DMD</i> are 79 de exoni), <b>90%</b> din ihtioza legată de X prin deleția genei întregi, α-talasemiile, duplicații în hipercolesterolemia familială.</p>
<div class="pasi">
<div><b>Recombinare neomologă (nelegitimă)</b>între secvențe fără omologie</div>
<div><b>Recombinare omologă nealelică (RON)</b>în profaza I, între secvențe identice sau aproape identice, dar în poziții diferite; bolile rezultate se numesc <b>boli genomice</b></div>
</div>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Recombinarea omologă nealelică">
<text x="380" y="22" text-anchor="middle" class="ti b">Două copii ale aceleiași secvențe repetate (LCR) pe fiecare omolog</text>
<line x1="80" y1="70" x2="680" y2="70" class="sG" stroke-width="6"/><line x1="80" y1="110" x2="680" y2="110" class="sT" stroke-width="6"/>
${[200, 480].map((x) => `<rect x="${x}" y="60" width="60" height="20" rx="4" class="fP"/><rect x="${x + 280 - 280}" y="100" width="60" height="20" rx="4" class="fP"/>`).join("")}
<rect x="300" y="62" width="120" height="16" rx="3" class="fZ" opacity=".8"/><text x="360" y="54" text-anchor="middle" class="tm">gene sensibile la doză</text>
<path d="M230 80 C260 96 470 94 510 100" fill="none" class="sw" stroke-width="2.2" stroke-dasharray="6 4"/>
<text x="380" y="142" text-anchor="middle" class="tw2 b">aliniere greșită: LCR stâng se împerechează cu LCR drept</text>
<line x1="80" y1="190" x2="680" y2="190" class="sG" stroke-width="6"/><rect x="200" y="180" width="60" height="20" rx="4" class="fP"/><rect x="260" y="182" width="120" height="16" class="fZ" opacity=".8"/><rect x="380" y="182" width="120" height="16" class="fZ" opacity=".8"/><rect x="500" y="180" width="60" height="20" rx="4" class="fP"/>
<text x="700" y="195" class="tin b">duplicație</text>
<line x1="80" y1="230" x2="440" y2="230" class="sT" stroke-width="6"/><rect x="200" y="220" width="60" height="20" rx="4" class="fP"/>
<text x="460" y="235" class="tw2 b">deleție (aceeași regiune lipsește)</text>
</svg>
<figcaption><b>Recombinarea omologă nealelică.</b> Secvențele repetate în același sens care flanchează o regiune permit o aliniere decalată în meioză. Crossing-overul inegal produce reciproc o duplicație și o deleție. Așa apar deleția 7q11.23 (Williams), 22q11.2 (DiGeorge) sau duplicația 17p12 (Charcot–Marie–Tooth 1A). Schemă proprie.</figcaption>
</figure>
<p>După 1000 Genomes Project, între indivizi diferă aproximativ <b>28.000 de variante structurale</b> (analiza a 185 de subiecți). După mărimea segmentului afectat rezultă: <b>boli mendeliene</b> (ADPKD, hemofilia A, talasemiile, CMT1A, NF1, atrofia musculară spinală, DMD, HNPCC, daltonismul roșu-verde etc.); <b>sindroame de gene contigue</b> (microdeleții de 1–4 Mb, vizibile doar prin FISH sau array CGH; peste 60 cunoscute în DECIPHER, de ex. DiGeorge, Williams); <b>anomalii ale unui braț întreg</b> (inversii, izocromozom Xq).</p>
<figure><img src="fig/c05_cariotip_del.svg" alt="Cariotip cu regiuni de deleție și duplicație">
<figcaption><b>Unde se află delețiile și duplicațiile din Figura 16 a cursului</b>, redesenate pe benzile G reale ale genomului de referință (UCSC hg38). WAGR = tumoră Wilms, aniridie, anomalii genitale, retard mintal (cursul scrie greșit „Williams tumor”).</figcaption></figure>
<h3>Anomaliile cromozomiale structurale</h3>
<p>Rezultă din erori de recombinare meiotică sau din repararea greșită a rupturilor. <b>Neechilibrate</b>: câștig sau pierdere de material, fenotip anormal. <b>Echilibrate</b>: cantitate constantă de material, de regulă fenotip normal.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Tipuri de anomalii cromozomiale structurale">
${(() => {
  const seg = ["A", "B", "C", "D", "E", "F"], col = ["fG", "fA", "fC", "fT", "fP", "fZ"];
  const crz = (x, y, ss, lbl, sub, cls) => {
    let o = "", yy = y;
    ss.forEach((k) => { if (k === "o") { o += `<circle cx="${x + 9}" cy="${yy + 5}" r="6" class="fZ"/>`; yy += 12; return; } const i = seg.indexOf(k); o += `<rect x="${x}" y="${yy}" width="18" height="22" class="${col[i]}" stroke="#fff" stroke-width="1"/><text x="${x + 9}" y="${yy + 15}" text-anchor="middle" fill="#fff" style="font-size:11px;font-weight:700">${k}</text>`; yy += 22; });
    return o + `<text x="${x + 9}" y="${y + 186}" text-anchor="middle" class="${cls} b" style="font-size:13px">${lbl}</text><text x="${x + 9}" y="${y + 202}" text-anchor="middle" class="tm" style="font-size:11px">${sub}</text>`;
  };
  let s = crz(40, 20, ["A", "B", "o", "C", "D", "E", "F"], "normal", "", "ti");
  s += crz(140, 20, ["A", "B", "o", "C", "E", "F"], "deleție", "del · neechil.", "tw2");
  s += crz(240, 20, ["A", "B", "o", "C", "D", "D", "E", "F"], "duplicație", "dup · neechil.", "tw2");
  s += crz(340, 20, ["A", "B", "o", "C", "E", "D", "F"], "inversie", "inv · echilibrată", "tok");
  s += crz(440, 20, ["D", "C", "o", "C", "D"], "izocromozom", "i · neechil.", "tw2");
  s += `<circle cx="560" cy="90" r="34" fill="none" class="sw" stroke-width="16" opacity=".85"/><circle cx="560" cy="56" r="7" class="fZ"/><text x="560" y="206" text-anchor="middle" class="tw2 b" style="font-size:13px">inelar</text><text x="560" y="222" text-anchor="middle" class="tm" style="font-size:11px">r · pierde capetele</text>`;
  s += `<rect x="650" y="20" width="18" height="40" class="fG"/><circle cx="659" cy="66" r="6" class="fZ"/><rect x="650" y="72" width="18" height="30" class="fG"/><rect x="650" y="102" width="18" height="40" class="fT"/>`;
  s += `<rect x="680" y="20" width="18" height="30" class="fT"/><circle cx="689" cy="56" r="6" class="fZ"/><rect x="680" y="62" width="18" height="50" class="fT"/><rect x="680" y="112" width="18" height="40" class="fG"/>`;
  s += `<text x="674" y="206" text-anchor="middle" class="tok b" style="font-size:13px">translocație</text><text x="674" y="222" text-anchor="middle" class="tm" style="font-size:11px">reciprocă · echil.</text>`;
  s += `<rect x="20" y="250" width="720" height="66" rx="10" class="fas"/><text x="380" y="276" text-anchor="middle" class="ti">Un singur cromozom: deleție, duplicație, inversie, izocromozom, inelar.</text><text x="380" y="298" text-anchor="middle" class="ti">Doi cromozomi: translocații (reciproce, robertsoniene, inserții) și cromozomi dicentrici (dic → der).</text>`;
  return s;
})()}
</svg>
<figcaption><b>Anomaliile structurale din Tabelele XVI și XVII</b>, pe același cromozom-model (segmentele A–F, cercul = centromerul). Verde = echilibrate, roșu = neechilibrate. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Anomalie</th><th>Echilibru</th><th>Cum apare</th></tr>
<tr><td><b>Deleție (del)</b></td><td>neechilibrată</td><td>pierdere de segment; fenotipul depinde de mărime și de importanța genelor pierdute</td></tr>
<tr><td><b>Duplicație (dup)</b></td><td>neechilibrată</td><td>crossing-over inegal: un cromozom are segmentul dublu, celălalt deleția lui</td></tr>
<tr><td><b>Inversie (inv)</b></td><td><b>echilibrată</b></td><td>două rupturi și rotirea fragmentului cu 180°</td></tr>
<tr><td><b>Izocromozom (i)</b></td><td>neechilibrată</td><td>clivarea <b>transversală</b> a centromerului în mitoză: două brațe identice (doar p sau doar q)</td></tr>
<tr><td><b>Inelar (r)</b></td><td>neechilibrată</td><td>ruptură în două puncte de o parte și de alta a centromerului, pierderea fragmentelor acentrice și închiderea în inel</td></tr>
<tr><td><b>Translocație (t)</b></td><td>reciprocă (rcp): <b>echilibrată</b>; robertsoniană (rob); inserție (ins)</td><td>transfer de segmente între doi cromozomi, de obicei neomologi</td></tr>
<tr><td><b>Dicentric (dic)</b></td><td>neechilibrată</td><td>ruperea a doi cromozomi, pierderea fragmentelor acentrice și unirea celor centrice într-un cromozom derivat (der)</td></tr>
</table></div>
[[gal:mut_crz|<b>Mutațiile care privesc un singur cromozom</b>: deleție, duplicație, inversie.;;robertson|<b>Translocația robertsoniană.</b> Doi cromozomi acrocentrici fuzionează la centromer; brațele scurte se pierd fără consecințe, iar purtătorul are 45 de cromozomi și fenotip normal.]]
<h3>Mutațiile genomiale (de ploidie)</h3>
<div class="tw"><table>
<tr><th>Tip</th><th>Ce se schimbă</th><th>Exemple</th></tr>
<tr><td><b>Aneuploidie</b></td><td>numărul de cromozomi din una sau două perechi</td><td>45,X; 47,XXX; 47,XXY; 47,XX,+21</td></tr>
<tr><td><b>Poliploidie</b></td><td>seturi haploide întregi în plus</td><td>triploidie 3n = 69; tetraploidie 4n = 92</td></tr>
</table></div>
[[gal:cariotip|<b>Cariotip masculin normal, 46,XY</b>, colorație G: 22 de perechi de autozomi ordonate după mărime și poziția centromerului, plus X și Y.;;t21|<b>Trisomie 21</b> (47,+21): trei copii ale cromozomului 21, cauza sindromului Down.;;xxy|<b>47,XXY</b>: un cromozom X în plus la bărbat, sindromul Klinefelter.;;x0|<b>45,X</b>: un singur cromozom X, sindromul Turner.]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce recombinarea omologă nealelică dă aceeași deleție la pacienți neînrudiți?</summary><div>Punctele de ruptură sunt fixate de pozițiile secvențelor repetate (LCR) care flanchează regiunea; crossing-overul inegal taie mereu în aceleași locuri.</div></details>
<details class="q"><summary>Care dintre anomaliile structurale sunt echilibrate?</summary><div>Inversiile și translocațiile reciproce (și, în general, translocațiile robertsoniene la purtători). Cantitatea de material rămâne constantă.</div></details>
<details class="q"><summary>Ce detectează FISH sau array CGH și nu detectează cariotipul clasic?</summary><div>Microdelețiile și microduplicațiile de 1–4 Mb ale sindroamelor de gene contigue, sub rezoluția benzilor G.</div></details>
</div>`
},
{
id: "efect", titlu: "Germinal și somatic, neutru și patogen, polimorfisme și SNP", pag: "102–105", emery: "cap. 2, p. 25–27; cap. 7", acopera: ["c05-r15"],
html: `
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Mutații germinale, somatice și mozaicism">
${(() => {
  const om = (x, y, pete, gon) => `<circle cx="${x}" cy="${y}" r="16" class="fcard si" stroke-width="1.5"/><rect x="${x - 20}" y="${y + 18}" width="40" height="70" rx="14" class="fcard si" stroke-width="1.5"/>${pete}${gon ? `<circle cx="${x}" cy="${y + 76}" r="7" class="fP"/>` : ""}`;
  const dots = (x, y, n, c) => Array.from({ length: n }, (_, i) => `<circle cx="${x - 12 + (i % 3) * 12}" cy="${y + 30 + Math.floor(i / 3) * 14}" r="4" class="${c}"/>`).join("");
  let s = "";
  s += `<text x="110" y="24" text-anchor="middle" class="ti b">GERMINALĂ · omogenă</text>` + om(110, 60, dots(110, 60, 12, "fT"), false) + `<text x="110" y="182" text-anchor="middle" class="tm">mutația e în zigot:</text><text x="110" y="198" text-anchor="middle" class="tm">toate celulele o au</text><text x="110" y="222" text-anchor="middle" class="tok b">se transmite</text>`;
  s += `<text x="380" y="24" text-anchor="middle" class="ti b">SOMATICĂ · mozaic somatic</text>` + om(380, 60, dots(380, 60, 12, "fline") + `<circle cx="368" cy="104" r="4" class="fT"/><circle cx="380" cy="104" r="4" class="fT"/><circle cx="368" cy="118" r="4" class="fT"/>`, false) + `<text x="380" y="182" text-anchor="middle" class="tm">o clonă de celule mutante</text><text x="380" y="198" text-anchor="middle" class="tm">(cancer, NF1 segmentară)</text><text x="380" y="222" text-anchor="middle" class="tw2 b">NU se transmite</text>`;
  s += `<text x="640" y="24" text-anchor="middle" class="ti b">MOZAICISM GERMINAL</text>` + om(640, 60, dots(640, 60, 12, "fline"), true) + `<text x="640" y="182" text-anchor="middle" class="tm">părinte sănătos; o parte</text><text x="640" y="198" text-anchor="middle" class="tm">din gameți poartă mutația</text><text x="640" y="222" text-anchor="middle" class="ta b">mai mulți copii afectați</text>`;
  s += `<rect x="20" y="244" width="720" height="34" rx="8" class="fas"/><text x="380" y="266" text-anchor="middle" class="ti">Mozaicismul germinal explică frați afectați de o boală dominantă, cu părinți sănătoși și teste negative.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Unde apare mutația decide cine o moștenește.</b> Violet = gonadă. Schemă proprie după curs (p. 102).</figcaption>
</figure>
<p><b>Mutațiile neutre</b> sunt cele mai frecvente; apar în regiuni intergenice și produc polimorfisme. Dintre mutațiile cromozomiale, translocațiile reciproce echilibrate și inversiile sunt neutre pentru purtător, dar în <b>3–6%</b> din cuplurile infertile sau cu avorturi repetate unul dintre parteneri poartă o astfel de anomalie.</p>
<p><b>Polimorfismele</b> sunt variații de secvență fără efect fenotipic evident, prezente la <b>peste 1%</b> din populație: culoarea ochilor, a părului, grupele sangvine. Unele cresc susceptibilitatea la boli sau schimbă răspunsul la tratament (capitolul 6).</p>
[[gal:snp|<b>Polimorfismul unui singur nucleotid (SNP).</b> Două molecule de ADN care diferă printr-o singură pereche de baze (aici C/G față de T/A).;;cnv|<b>Variația numărului de copii (CNV).</b> Un segment de ADN apare în număr diferit de copii la persoane diferite: deleție sau duplicație.]]
<div class="tw"><table>
<tr><th>Tabelul XVIII: SNP după localizare</th><th>Efect posibil</th></tr>
<tr><td><b>Exonic</b> (codant)</td><td><b>sinonim</b> (frecvent la a treia bază a codonului) sau <b>nesinonim</b> (alt aminoacid; poate sau nu să producă boală)</td></tr>
<tr><td><b>Intronic</b></td><td>fără efect, sau cu efect prin afectarea matisării</td></tr>
<tr><td><b>În UTR 5′ și 3′</b></td><td>fără efect, sau afectează maturarea ARNm</td></tr>
<tr><td><b>În regiuni reglatoare</b> (promotor, enhancer, silencer)</td><td>modifică cantitatea de ARNm sintetizat</td></tr>
<tr><td><b>Extragenic</b></td><td>la distanță de regiunile codante</td></tr>
</table></div>
<h3>Mutațiile patogene: pierdere sau câștig de funcție</h3>
<figure>
<svg viewBox="0 0 760 220" role="img" aria-label="Pierdere și câștig de funcție">
<rect x="20" y="16" width="350" height="190" rx="12" class="fws sw" stroke-width="1.2"/>
<text x="195" y="44" text-anchor="middle" class="tw2 b" style="font-size:15px">PIERDERE DE FUNCȚIE</text>
<text x="195" y="64" text-anchor="middle" class="tm">cea mai frecventă cauză de boală</text>
<rect x="60" y="86" width="120" height="22" rx="5" class="fok"/><rect x="60" y="86" width="60" height="22" rx="5" class="fA" opacity=".85"/><text x="190" y="102" class="ti">50% proteină</text>
<text x="40" y="136" class="ti">• deleții, inserții (frameshift)</text><text x="40" y="156" class="ti">• nonsens · missense</text>
<text x="40" y="182" class="ti"><tspan class="b">haploinsuficiență</tspan>: 50% nu ajunge</text>
<rect x="390" y="16" width="350" height="190" rx="12" class="fis sin" stroke-width="1.2"/>
<text x="565" y="44" text-anchor="middle" class="tin b" style="font-size:15px">CÂȘTIG DE FUNCȚIE</text>
<text x="565" y="64" text-anchor="middle" class="tm">efect direct asupra fenotipului</text>
<text x="410" y="96" class="ti">• sinteză crescută a proteinei</text><text x="410" y="118" class="ti">• funcție crescută sau nouă</text><text x="410" y="140" class="ti">• protooncogene scăpate de sub control</text><text x="410" y="162" class="ti">  → proliferare celulară, neoplazii</text>
<text x="410" y="188" class="tm">ex.: FGFR3 în acondroplazie (cap. 7)</text>
</svg>
<figcaption><b>Două căi spre boală.</b> Gravitatea depinde de mărimea dezechilibrului, conținutul genic, proporția eucromatină/heterocromatină, tipul anomaliei și numărul celulelor afectate. Pleiotropie: o singură mutație cu efecte în mai multe organe.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce este haploinsuficiența?</summary><div>Situația în care 50% din proteina normală, produsă de alela sănătoasă, nu ajunge pentru fenotip normal; o mutație cu pierdere de funcție pe o singură alelă produce boală.</div></details>
<details class="q"><summary>Un SNP intronic poate avea efect? Cum?</summary><div>Da, dacă afectează matisarea (de ex. creează sau distruge un situs de splicing), modificând ARNm-ul matur și proteina.</div></details>
</div>`
},
{
id: "cauze", titlu: "Cauzele și frecvența mutațiilor", pag: "105–108", emery: "cap. 2, p. 25–27", acopera: ["c05-r16"],
html: `
<div class="tw"><table>
<tr><th></th><th>Mutații SPONTANE</th><th>Mutații INDUSE</th></tr>
<tr><td>Cauză</td><td>factori cauzali nerecunoscuți</td><td>factori mutageni externi sau interni, fizici sau chimici</td></tr>
<tr><td>Mecanisme principale</td><td><b>erori de replicare</b> prin tautomerie (deplasarea unui H → împerechere greșită); <b>dezaminarea</b> spontană (C→U, A→hipoxantină, G→xantină, 5-metilC→T); situsuri abazice (hidroliză, temperatură)</td><td>radioterapie, chimioterapie, expunere profesională</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Dezaminarea bazelor">
${[["C", "U", "fC", "uracil"], ["A", "Hx", "fA", "hipoxantină"], ["G", "X", "fG", "xantină"], ["5mC", "T", "fP", "timină"]].map(([a, b, c, n], i) => {
  const x = 40 + i * 182;
  return `<circle cx="${x + 30}" cy="70" r="28" class="${c}"/><text x="${x + 30}" y="77" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:${a.length > 2 ? 14 : 20}px">${a}</text>
  <path d="M${x + 62} 70 h50" class="si" stroke-width="1.8"/><path d="M${x + 106} 64 l8 6 l-8 6" class="si" stroke-width="1.8" fill="none"/><text x="${x + 87}" y="60" text-anchor="middle" class="tm" style="font-size:11px">−NH₂</text>
  <circle cx="${x + 146}" cy="70" r="28" class="fcard sw" stroke-width="2.5"/><text x="${x + 146}" y="77" text-anchor="middle" class="tw2 b" style="font-size:18px">${b}</text>
  <text x="${x + 146}" y="118" text-anchor="middle" class="tm">${n}</text>`;
}).join("")}
<rect x="20" y="146" width="720" height="52" rx="10" class="fas"/><text x="380" y="168" text-anchor="middle" class="ti">Uracilul, hipoxantina și xantina sunt străine de ADN și sunt recunoscute (BER).</text><text x="380" y="188" text-anchor="middle" class="ti"><tspan class="b">5-metilC → T</tspan> dă o bază normală, greu de recunoscut: de aceea dinucleotidele CpG sunt „puncte fierbinți”.</text>
</svg>
<figcaption><b>Dezaminarea spontană</b> pierde o grupare amino și transformă baza. Schemă proprie după curs (p. 105).</figcaption>
</figure>
<p>Polimerazele încorporează greșit circa <b>50.000 de nucleotide pe genom pe zi</b>; după corectare și reparare rămâne aproximativ o eroare la 10<sup>9</sup>–10<sup>10</sup> nucleotide.</p>
<div class="tw"><table>
<tr><th>Tabelul XIX</th><th>La nivelul acizilor nucleici</th><th>La nivel cromozomial</th></tr>
<tr><td><b>Factori fizici</b> (radiații ionizante X, γ; UV; temperatură)</td><td>substituții, inversii de baze, deleții, rupturi mono- și bicatenare, inhibarea replicării și a sintezei de ARN</td><td>deleții, rupturi, aneuploidii, disjuncție patologică</td></tr>
<tr><td><b>Factori chimici</b> (citostatice, hidrocarburi policiclice aromatice, agenți alchilanți)</td><td>substituții, deleții, rupturi de catenă, erori de replicare, inhibarea enzimelor de reparare, perturbarea sintezei de ARN și a diviziunii, activarea provirusurilor tumorale</td><td>rearanjamente structurale</td></tr>
</table></div>
<p>Agenți <b>endogeni</b>: specii reactive de oxigen (alterare oxidativă), molecule reactive mici, produși de peroxidare lipidică. Agenți <b>biologici</b>: unele virusuri (posibil herpetic, hepatitic non-A).</p>
<h3>Frecvența mutațiilor</h3>
<p><b>Rata mutației</b> = numărul de mutații <i>de novo</i> per locus per generație. Mutațiile noi sunt mult mai frecvente pe linie <b>paternă</b>: ovogeneza își încheie prima etapă înainte de naștere, pe când spermatogeneza continuă toată viața, cu tot mai multe replicări.</p>
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Numărul de diviziuni în gametogeneză">
<text x="20" y="30" class="tw2 b">Ovogeneză</text>
${Array.from({ length: 23 }, (_, i) => `<rect x="${130 + i * 6}" y="16" width="4" height="20" class="fT"/>`).join("")}
<text x="280" y="31" class="tm">~22–23 de diviziuni, încheiate înainte de naștere; număr fix</text>
<text x="20" y="90" class="tin b">Spermatogeneză</text>
${Array.from({ length: 95 }, (_, i) => `<rect x="${130 + i * 6}" y="${76}" width="4" height="20" class="fG" opacity="${0.35 + 0.65 * (i / 95)}"/>`).join("")}
<text x="130" y="122" class="tm">diviziunile continuă toată viața: cu cât tatăl e mai în vârstă, cu atât mai multe replicări și erori</text>
<text x="20" y="160" class="ti">Rata crește și cu: mărimea genei · numărul de „puncte fierbinți” · numărul de diviziuni (celule somatice, cancer).</text>
<text x="20" y="182" class="ti">Rată mare de mutații <tspan class="b">de novo</tspan>: NF1, distrofia Duchenne, hemofilia A, rinichiul polichistic.</text>
</svg>
<figcaption><b>De ce mutațiile noi vin mai ales de la tată.</b> Fiecare bară = o diviziune celulară (valori orientative: ~23 în ovogeneză; câteva sute la un bărbat de 30–40 de ani, din care sunt desenate doar 95). Schemă proprie după curs (p. 107).</figcaption>
</figure>
<p>Fiecare persoană este heterozigotă pentru circa <b>6–10 gene recesive</b> și <b>3–5 gene recesive letale</b>; 1–2% din indivizi au un efect determinat de mutația unei gene. Totalul formează <b>povara genetică</b>.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce dezaminarea 5-metilcitozinei e mai periculoasă decât dezaminarea citozinei?</summary><div>Citozina dezaminată devine uracil, bază străină de ADN, ușor recunoscută. 5-metilcitozina devine timină, bază normală; rezultă o împerechere G–T greu de atribuit, iar după replicare tranziția C→T se fixează.</div></details>
<details class="q"><summary>De ce vârsta paternă crește riscul de mutații noi?</summary><div>Celulele stem spermatogoniale se divid continuu; la fiecare replicare pot apărea erori, iar numărul de diviziuni crește cu vârsta.</div></details>
</div>`
},
{
id: "dinamice", titlu: "Mutațiile dinamice (expansiunea repetițiilor trinucleotidice)", pag: "108–112", emery: "cap. 2, p. 27–28; cap. 17–18", acopera: ["c05-r17", "c05-r18", "c05-r19", "c05-r20"],
html: `
<p>Spre deosebire de mutațiile clasice, stabile, mutațiile <b>dinamice</b> sunt <b>instabile</b>: numărul de repetiții trinucleotidice (CAG, CTG, CGG) crește de la o generație la alta, mai ales în meioză. Expansiunea poate apărea în regiunea codantă sau în cea necodantă a genei.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Glisarea replicativă">
<text x="130" y="24" text-anchor="middle" class="ti b">replicare normală</text><text x="380" y="24" text-anchor="middle" class="tin b">alunecare înapoi → inserție</text><text x="630" y="24" text-anchor="middle" class="tw2 b">alunecare înainte → deleție</text>
${(() => {
  const rep = (x, y, n, c) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * 28}" y="${y}" width="26" height="14" rx="3" class="${c}"/>`).join("");
  let s = "";
  s += rep(40, 60, 6, "fP") + rep(40, 80, 6, "fT");
  s += `<text x="130" y="120" text-anchor="middle" class="tm">6 repetiții matriță → 6 noi</text>`;
  s += rep(290, 60, 6, "fP") + rep(290, 80, 3, "fT") + `<path d="M374 78 q14 -40 28 0" fill="none" class="sG" stroke-width="10" opacity=".7"/>` + rep(402, 80, 4, "fT");
  s += `<text x="380" y="120" text-anchor="middle" class="tm">catena nouă face o buclă:</text><text x="380" y="136" text-anchor="middle" class="tin b">7 repetiții (expansiune)</text>`;
  s += rep(540, 80, 6, "fP") + `<path d="M596 98 q14 40 28 0" fill="none" class="sP" stroke-width="10" opacity=".7"/>` + rep(540, 60, 2, "fT") + rep(624, 60, 3, "fT");
  s += `<text x="630" y="150" text-anchor="middle" class="tm">matrița face o buclă:</text><text x="630" y="166" text-anchor="middle" class="tw2 b">5 repetiții (contracție)</text>`;
  s += `<rect x="20" y="196" width="720" height="92" rx="12" class="fas"/>`;
  s += `<text x="380" y="222" text-anchor="middle" class="ti">Secvențele repetitive permit o împerechere decalată cu o repetiție, fără să se piardă complementaritatea.</text>`;
  s += `<text x="380" y="244" text-anchor="middle" class="ti">Dacă polimeraza „alunecă înapoi”, numărul de copii crește; dacă alunecă înainte, scade.</text>`;
  s += `<text x="380" y="270" text-anchor="middle" class="ta b">CAG în cadrul de lectură = glutamină: fiecare repetiție adaugă o Gln în proteină (lanț poliglutaminic).</text>`;
  return s;
})()}
</svg>
<figcaption><b>Derapajul (glisarea) replicativ</b>, după Figura 18 din curs. Violet = catena matriță, portocaliu = catena nou sintetizată. Schemă proprie.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 150" role="img" aria-label="Lanțul poliglutaminic">
${(() => {
  const r1 = "CAGCAGCAG".match(/.{3}/g), r2 = "CAGCAGCAGCAGCAGCAG".match(/.{3}/g);
  const row = (y, cs, lab) => `<text x="12" y="${y + 18}" class="ti b">${lab}</text>` + ["AUG", ...cs, "GUA"].map((c, i) => `<rect x="${130 + i * 66}" y="${y}" width="60" height="24" rx="4" class="${c === "CAG" ? "fws sw" : "fis si"}" stroke-width="1"/><text x="${160 + i * 66}" y="${y + 17}" text-anchor="middle" class="mono ti" style="font-size:13px;letter-spacing:2px">${c}</text><text x="${160 + i * 66}" y="${y + 40}" text-anchor="middle" class="${c === "CAG" ? "tw2" : "tin"} b" style="font-size:12px">${tr(c)}</text>`).join("");
  return row(10, r1, "normal") + row(84, r2, "expansiune");
})()}
</svg>
<figcaption><b>Expansiunea lanțului poliglutaminic</b> (după Figura 17 din curs). Fiecare CAG suplimentar adaugă o glutamină. Proteinele cu lanțuri poliglutaminice lungi se agregă în neuroni (boala Huntington).</figcaption>
</figure>
<h3>De la alelă normală la mutație completă</h3>
<div class="pasi">
<div><b>Alelă normală</b>variații sub pragul critic = polimorfism benign</div>
<div><b>Premutație</b>fără fenotip patologic, dar secvența devine instabilă</div>
<div><b>Mutație completă</b>după o nouă meioză: boală</div>
<div><b>Anticipație</b>debut mai precoce și severitate mai mare în generațiile succesive</div>
</div>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Intervalele de repetiții din Tabelul XX">
${(() => {
  const lx = (v) => 230 + (Math.log10(v) / Math.log10(1000)) * 500;
  const D = [["Boala Huntington", "CAG · AD · 4p16.3", 6, 28, 29, 37, 38], ["Sindromul X fragil", "CGG · DLX · Xq27.3", 5, 50, 50, 200, 200], ["Ataxia Friedreich", "GAA · AR · 9q13", 5, 30, 31, 100, 100], ["Distrofia miotonică 1", "CTG · AD · 19q13.3", 5, 37, 37, 50, 50]];
  let s = [1, 3, 10, 30, 100, 300, 1000].map((v) => `<line x1="${lx(v)}" y1="20" x2="${lx(v)}" y2="236" class="sm" stroke-dasharray="2 4" opacity=".6"/><text x="${lx(v)}" y="254" text-anchor="middle" class="tm" style="font-size:11px">${v}</text>`).join("");
  D.forEach(([n, d, a, b, c, e, f], i) => {
    const y = 30 + i * 54;
    s += `<text x="220" y="${y + 12}" text-anchor="end" class="ti b">${n}</text><text x="220" y="${y + 28}" text-anchor="end" class="tm" style="font-size:11px">${d}</text>`;
    s += `<rect x="${lx(a)}" y="${y}" width="${lx(b) - lx(a)}" height="24" class="fok" opacity=".85"/><rect x="${lx(c)}" y="${y}" width="${lx(e) - lx(c)}" height="24" class="fC" opacity=".9"/><rect x="${lx(f)}" y="${y}" width="${730 - lx(f)}" height="24" class="fA" opacity=".9"/>`;
    s += `<text x="${(lx(a) + lx(b)) / 2}" y="${y + 17}" text-anchor="middle" fill="#fff" style="font-size:11px;font-weight:700">${a}–${b}</text><text x="${(lx(c) + lx(e)) / 2}" y="${y + 17}" text-anchor="middle" fill="#1f2a37" style="font-size:11px;font-weight:700">${c}–${e}</text><text x="${(lx(f) + 730) / 2}" y="${y + 17}" text-anchor="middle" fill="#fff" style="font-size:11px;font-weight:700">&gt;${f}</text>`;
  });
  s += `<text x="480" y="276" text-anchor="middle" class="tm">număr de repetiții (scară logaritmică)</text>`;
  s += `<rect x="230" y="284" width="14" height="10" class="fok"/><text x="250" y="294" class="tm" style="font-size:11px">normal</text><rect x="320" y="284" width="14" height="10" class="fC"/><text x="340" y="294" class="tm" style="font-size:11px">premutație</text><rect x="430" y="284" width="14" height="10" class="fA"/><text x="450" y="294" class="tm" style="font-size:11px">mutație completă</text>`;
  return s;
})()}
</svg>
<figcaption><b>Tabelul XX ca grafic.</b> Valorile sunt cele din curs (limita inferioară „normală” la X fragil și distrofia miotonică nu e dată în curs; este pusă orientativ la 5). Pragurile diferă enorm de la o boală la alta: 38 de CAG produc Huntington, pe când la X fragil sunt necesare peste 200 de CGG.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Tabelul XX: boală</th><th>Locus</th><th>Transmitere</th><th>Repetiție</th><th>Normal</th><th>Premutație</th><th>Completă</th></tr>
<tr><td><b>Boala Huntington</b></td><td>4p16.3</td><td>AD</td><td>CAG</td><td>6–28</td><td>29–37</td><td>&gt;38</td></tr>
<tr><td><b>Sindromul X fragil</b></td><td>Xq27.3</td><td>DLX</td><td>CGG</td><td>&lt;50</td><td>50–200</td><td>&gt;200</td></tr>
<tr><td><b>Ataxia Friedreich</b></td><td>9q13</td><td>AR</td><td>GAA</td><td>5–30</td><td>31–100</td><td>&gt;100</td></tr>
<tr><td><b>Distrofia miotonică tip 1</b></td><td>19q13.3</td><td>AD</td><td>CTG</td><td>&lt;37</td><td>37–50</td><td>&gt;50</td></tr>
</table></div>
<p>Expansiunile <b>CAG</b> care produc formele juvenile de Huntington sunt în general de origine <b>paternă</b>; expansiunile <b>CGG</b> din X fragil sunt de origine <b>maternă</b> („efect parental”).</p>
[[gal:huntington|<b>Creierul în boala Huntington</b> (secțiune coronală, sus) comparat cu un creier normal: atrofia nucleului caudat și dilatarea ventriculilor laterali.;;fragilx|<b>Situsul fragil Xq27.3.</b> În mutația completă, expansiunea CGG din <i>FMR1</i> este hipermetilată și gena este stinsă; la cariotip în mediu sărac în folat, capătul brațului lung pare „rupt”.]]
<div class="emery"><b>Curs vs. Emery</b><p>Emery împarte alelele <b>Huntington</b> altfel: normale ≤26 CAG, intermediare 27–35 (fără boală, dar pot expanda la descendenți), cu penetranță redusă 36–39, patologice ≥40. Vârsta medie de debut este 57, 37 și 26 de ani pentru 40, 45 și 50 de repetiții; formele juvenile au de obicei peste 55. Pentru <b>X fragil</b>, Emery folosește premutație 55–200 (cursul: 50–200). În GRCh38, <i>DMPK</i> este la 19q13.32 și <i>FXN</i> (Friedreich) la 9q21.11; benzile din curs sunt mai vechi.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce înseamnă anticipația și ce o explică molecular?</summary><div>Debut tot mai precoce și severitate tot mai mare în generații succesive. Cauza: numărul de repetiții crește la fiecare transmitere, iar severitatea este proporțională cu el.</div></details>
<details class="q"><summary>Un bărbat are 33 de CAG în HTT. E bolnav? Ce risc au copiii lui?</summary><div>După curs, este în zona de premutație (29–37): nu are boala, dar alela e instabilă și poate expanda la descendenți, mai ales pe linie paternă.</div></details>
</div>`
},
{
id: "migratii", titlu: "Migrațiile populaționale", pag: "112–113", emery: "cap. 10 (genetica populațiilor)", acopera: ["c05-r21"],
html: `
<p>Din punct de vedere genetic, <b>migrația</b> este calea prin care specia umană s-a răspândit dintr-o regiune în alta, cu schimb de gene între populații. Efectul ei este creșterea numărului de <b>heterozigoți</b> și formarea unor populații hibride.</p>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Fluxul genic">
${(() => {
  const pop = (cx, cy, n, f) => Array.from({ length: n }, (_, i) => { const a = i * 2.4, r = 8 + 5.5 * Math.sqrt(i); return `<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="5" class="${f(i)}"/>`; }).join("");
  let s = `<text x="130" y="24" text-anchor="middle" class="ti b">Populația 1</text><text x="630" y="24" text-anchor="middle" class="ti b">Populația 2</text><text x="380" y="24" text-anchor="middle" class="ti b">după migrație</text>`;
  s += pop(130, 110, 40, () => "fG") + pop(630, 110, 40, () => "fT") + pop(380, 110, 48, (i) => i % 3 === 0 ? "fG" : i % 3 === 1 ? "fT" : "fP");
  s += `<path d="M200 110 h90 M560 110 h-90" class="si" stroke-width="2"/><path d="M282 104 l8 6 l-8 6 M478 104 l-8 6 l8 6" class="si" stroke-width="2" fill="none"/>`;
  s += `<text x="380" y="200" text-anchor="middle" class="tm">violet = heterozigoți · mai puțini homozigoți recesivi · efect heterozis</text>`;
  return s;
})()}
</svg>
<figcaption><b>Fluxul genic:</b> difuziunea lentă a genelor dintr-o populație în alta. Scade frecvența homozigoților și deci a bolilor recesive favorizate de consangvinizare; crește viabilitatea, vigoarea și fertilitatea (efectul heterozis). Schemă proprie.</figcaption>
</figure>
<p>Markerii <b>ADN-ului mitocondrial</b> (transmis pe linie maternă) și ai <b>cromozomului Y</b> (pe linie paternă) au permis reconstituirea originii omului modern. După Genographic Project, până acum <b>60.000 de ani</b> nu exista niciun om modern în afara Africii; prima migrație „out of Africa” a trecut prin strâmtoarea Bab-el-Mandeb spre Asia de sud, Indonezia și Australia.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce se folosesc ADNmt și cromozomul Y pentru reconstituirea migrațiilor?</summary><div>Pentru că nu recombină (ADNmt) sau recombină foarte puțin (regiunea specifică a lui Y) și se transmit pe o singură linie, maternă respectiv paternă; variantele se acumulează ca într-un arbore genealogic.</div></details>
</div>`
},
{
id: "reparare", titlu: "Mecanismele de reparare a ADN-ului nuclear", pag: "113–122", emery: "cap. 2, p. 28–30; cap. 14", acopera: ["c05-r22", "c05-r23", "c05-r24", "c05-r25", "c05-r26"],
html: `
<p>Sunt cunoscute peste <b>130 de gene</b> ale căror proteine repară ADN-ul. Sistemele nu sunt specifice unei anumite leziuni: recunosc o deformare a ADN-ului. Niciunul nu are eficiență absolută; repararea poate fi fidelă, parțială sau cu defect.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Mecanismele de reparare">
${[["Erori de replicare", "împerecheri greșite, bucle", "MMR", "MSH2, MSH6, MLH1, PMS2", "HNPCC (sdr. Lynch)", "fC"],
   ["Factori endogeni", "baze dezaminate, oxidate", "BER", "ADN-glicozilază, APE1, pol β", "—", "fG"],
   ["UV, benzpiren, aflatoxină", "dimeri, aducți voluminoși", "NER", "complex de incizie duală", "xeroderma pigmentosum", "fP"],
   ["Radiații ionizante, stres oxidativ", "rupturi bicatenare", "HR / NHEJ", "ATM, BRCA1, BRCA2, NBS1", "ataxia telangiectazia, BRCA", "fA"]].map(([f, l, m, p, b, c], i) => {
  const y = 24 + i * 68;
  return `<rect x="10" y="${y}" width="200" height="54" rx="8" class="fcard si" stroke-width="1"/><text x="110" y="${y + 23}" text-anchor="middle" class="ti b" style="font-size:12.5px">${f}</text><text x="110" y="${y + 41}" text-anchor="middle" class="tm" style="font-size:11.5px">${l}</text>
  <path d="M210 ${y + 27} h40" class="si" stroke-width="1.6"/><path d="M244 ${y + 21} l8 6 l-8 6" class="si" stroke-width="1.6" fill="none"/>
  <rect x="256" y="${y}" width="120" height="54" rx="27" class="${c}"/><text x="316" y="${y + 33}" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:16px">${m}</text>
  <text x="392" y="${y + 23}" class="ti" style="font-size:12.5px">${p}</text><text x="392" y="${y + 43}" class="tw2" style="font-size:12.5px">boală: ${b}</text>`;
}).join("")}
<text x="110" y="16" text-anchor="middle" class="tm b">FACTOR DE RISC</text><text x="316" y="16" text-anchor="middle" class="tm b">SISTEM</text><text x="392" y="16" class="tm b">PROTEINE · BOALĂ</text>
</svg>
<figcaption><b>Patru sisteme, patru tipuri de leziune</b> (după Figura 19 din curs).</figcaption>
</figure>
<h3>Schema comună a reparării prin excizie</h3>
<div class="pasi"><div><b>Recunoaștere</b>enzime specifice găsesc situsul lezat</div><div><b>Desfacere</b>helicaza deschide ADN-ul dublu catenar</div><div><b>Excizie</b>endonucleaze taie fragmentul cu leziunea</div><div><b>Degradare</b>exonucleaze îndepărtează fragmentul</div><div><b>Resinteză</b>ADN-polimeraza, după catena complementară</div><div><b>Ligare</b>ADN-ligaza reface legătura fosfodiesterică</div></div>
<h3>1 · MMR: erorile scăpate de polimerază</h3>
<p>Polimerazele au activitate de <b>autocorecție</b> (exonucleazică 3′→5′). Ce scapă (cel mai des perechea <b>G–T</b> și buclele din secvențele repetitive) este corectat de sistemul MMR.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Repararea erorilor de împerechere">
${(() => {
  const strand = (y, cls, n, bad = -1, cut = null) => Array.from({ length: n }, (_, i) => {
    if (cut && i >= cut[0] && i < cut[1]) return "";
    return `<rect x="${60 + i * 26}" y="${y}" width="22" height="14" rx="3" class="${i === bad ? "fA" : cls}"/>`;
  }).join("");
  let s = "";
  s += `<text x="20" y="30" class="ti b">1</text>` + strand(16, "fP", 24) + strand(34, "fok", 24, 11) + `<text x="700" y="30" class="tm">matriță (veche)</text><text x="700" y="47" class="tm">catenă nouă</text><text x="352" y="68" text-anchor="middle" class="tw2 b">G–T: MSH2 + MSH6 recunosc eroarea</text>`;
  s += `<text x="20" y="110" class="ti b">2</text>` + strand(96, "fP", 24) + strand(114, "fok", 24, -1, [6, 16]) + `<text x="352" y="148" text-anchor="middle" class="tin b">MLH1 + PMS2: incizie, exonucleaza îndepărtează un segment al catenei NOI</text>`;
  s += `<text x="20" y="190" class="ti b">3</text>` + strand(176, "fP", 24) + strand(194, "fok", 24) + Array.from({ length: 10 }, (_, i) => `<rect x="${60 + (6 + i) * 26}" y="194" width="22" height="14" rx="3" class="fC"/>`).join("") + `<text x="352" y="230" text-anchor="middle" class="tok b">polimeraza resintetizează corect, ligaza închide</text>`;
  return s;
})()}
</svg>
<figcaption><b>MMR în trei pași</b> (după Figura 20 din curs). Esențial: sistemul taie din catena <b>nou sintetizată</b>, nu din matriță. Segmentul îndepărtat poate depăși 1–2 kb. Schemă proprie.</figcaption>
</figure>
<p>Proteinele de <b>recunoaștere</b>: MSH2, MSH3, MSH6; de <b>îndepărtare</b>: MLH1, PMS1, PMS2. Mutațiile genelor lor produc <b>cancerul colorectal nonpolipozic ereditar (HNPCC)</b>, cu mecanism mixt (MSH2 și MLH1): circa 5% din cancerele colorectale, plus risc crescut de alte neoplazii. Marker: <b>instabilitatea microsateliților</b>.</p>
<h3>2 · BER și 3 · NER</h3>
<div class="tw"><table>
<tr><th></th><th>BER: excizia unei baze</th><th>NER: excizia de nucleotide</th></tr>
<tr><td>Leziune</td><td>bază modificată de factori <b>endogeni</b> (cel mai des dezaminare spontană)</td><td>leziuni produse de factori <b>exogeni</b> care <b>deformează helixul</b>: dimeri T–T (UV), aducți (benzpiren, aflatoxină)</td></tr>
<tr><td>Recunoaștere</td><td><b>ADN-glicozilaza</b> scoate baza → situs abazic (AP)</td><td>un complex specific recunoaște distorsiunea</td></tr>
<tr><td>Incizie</td><td><b>APE1</b> taie catena pe flancul 5′ al situsului abazic</td><td>incizie <b>duală</b>, de o parte și de alta, la distanță de leziune</td></tr>
<tr><td>Ce se scoate</td><td>un singur nucleotid (reziduul dRp, de polimeraza β)</td><td>un oligonucleotid de <b>24–32</b> de nucleotide</td></tr>
<tr><td>Resinteză, ligare</td><td><b>ADN-polimeraza β</b>; <b>ligaza 3–XRCC1</b></td><td>ADN-polimeraza; <b>ligaza 1</b></td></tr>
<tr><td>Boli</td><td>(rupturile monocatenare din stres oxidativ folosesc ultimele etape BER)</td><td><b>xeroderma pigmentosum</b>, sindromul Cockayne, tricotiodistrofia fotosensibilă</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="BER comparat cu NER">
${(() => {
  const st = (x, y, n, cls, gap = null, mark = -1, mcls = "fA") => Array.from({ length: n }, (_, i) => gap && i >= gap[0] && i < gap[1] ? "" : `<rect x="${x + i * 15}" y="${y}" width="13" height="12" rx="2" class="${i === mark || (Array.isArray(mark) && mark.includes(i)) ? mcls : cls}"/>`).join("");
  let s = `<text x="190" y="22" text-anchor="middle" class="tin b" style="font-size:15px">BER</text><text x="570" y="22" text-anchor="middle" class="ta b" style="font-size:15px">NER</text><line x1="380" y1="10" x2="380" y2="260" class="sm" stroke-dasharray="2 5"/>`;
  s += st(40, 40, 20, "fG", null, 9) + st(40, 54, 20, "fP") + `<text x="40" y="86" class="tm">bază dezaminată (U)</text>`;
  s += st(40, 104, 20, "fG", [9, 10]) + st(40, 118, 20, "fP") + `<text x="40" y="150" class="tm">glicozilaza → situs AP; APE1 taie</text>`;
  s += st(40, 168, 20, "fG", null, 9, "fC") + st(40, 182, 20, "fP") + `<text x="40" y="214" class="tm">pol β pune 1 nucleotid, ligaza 3–XRCC1</text>`;
  s += st(420, 40, 20, "fG", null, [9, 10]) + st(420, 54, 20, "fP") + `<path d="M555 38 q7 -8 14 0" class="sw" stroke-width="2" fill="none"/><text x="420" y="86" class="tm">dimer T–T: helix deformat</text>`;
  s += st(420, 104, 20, "fG", [4, 16]) + st(420, 118, 20, "fP") + `<text x="420" y="150" class="tm">incizie duală, se scot 24–32 nt</text>`;
  s += st(420, 168, 20, "fG") + Array.from({ length: 12 }, (_, i) => `<rect x="${420 + (4 + i) * 15}" y="168" width="13" height="12" rx="2" class="fC"/>`).join("") + st(420, 182, 20, "fP") + `<text x="420" y="214" class="tm">polimeraza + ligaza 1</text>`;
  s += `<text x="380" y="252" text-anchor="middle" class="ti">BER scoate <tspan class="b">o bază</tspan>; NER scoate <tspan class="b">un fragment</tspan> de catenă care conține leziunea.</text>`;
  return s;
})()}
</svg>
<figcaption><b>BER și NER, față în față</b> (după Figura 21 din curs). Verde-albastru = catena reparată; turcoaz = nucleotide nou sintetizate. Schemă proprie.</figcaption>
</figure>
[[gal:ber|<b>BER pas cu pas</b>: glicozilaza, endonucleaza AP, polimeraza și ligaza.;;mmr_ner|<b>MMR (stânga) și NER (dreapta)</b>, comparativ: în MMR se taie catena nouă în jurul nepotrivirii, în NER se excizează un oligonucleotid în jurul leziunii voluminoase.;;dimer|<b>Leziunea tipică pentru NER</b>: dimerul de timină format sub UV.]]
<div class="exemplu"><b>Xeroderma pigmentosum (XP)</b><p>Transmitere <b>autozomal recesivă</b>, adesea la copii din părinți consangvini. Risc de cancer cutanat de <b>2000 de ori</b> mai mare, frecvent neurodegenerare. Tablou: aspect poikilodermic „în tablă de șah”, eritem, edem, bule pe zonele expuse, pete pigmentare gălbui, pete atrofice cicatriciale, keratoze pe buze și conjunctive; evoluție spre epitelioame bazo- sau spinocelulare și melanoame. Profilaxie: sfat genetic. Tratament: <b>fotoprotecție</b>.</p></div>
[[img:xp|<b>Xeroderma pigmentosum.</b> Leziuni pigmentare multiple și leziuni tumorale pe zonele fotoexpuse ale feței.]]
<h3>4 · Rupturile bicatenare</h3>
<div class="pasi"><div><b>Ruptura</b>spontană sau prin radiații ionizante</div><div><b>Senzorul</b>complexul BASC (BRCA1-associated genome surveillance complex)</div><div><b>Kinazele ATM și ATR</b>activează reparatorii (NBS1, BRCA1) sau opresc ciclul celular prin MDM2 și p53</div><div><b>Alegerea căii</b>recombinare omologă sau unire neomologă a capetelor</div></div>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Recombinare omologă și NHEJ">
<line x1="380" y1="10" x2="380" y2="280" class="sm" stroke-dasharray="2 5"/>
<text x="190" y="24" text-anchor="middle" class="tok b" style="font-size:15px">RECOMBINARE OMOLOAGĂ</text><text x="570" y="24" text-anchor="middle" class="tw2 b" style="font-size:15px">UNIRE NEOMOLOAGĂ (NHEJ)</text>
<line x1="30" y1="60" x2="160" y2="60" class="sA" stroke-width="7"/><line x1="200" y1="60" x2="350" y2="60" class="sA" stroke-width="7"/><text x="180" y="50" text-anchor="middle" class="tw2 b">⚡</text>
<line x1="30" y1="96" x2="350" y2="96" class="sG" stroke-width="7"/><text x="190" y="120" text-anchor="middle" class="tm">cromatida soră intactă = matriță</text>
<path d="M150 64 C170 90 210 90 210 64" fill="none" class="sok" stroke-width="3" stroke-dasharray="5 3"/>
<line x1="30" y1="170" x2="350" y2="170" class="sA" stroke-width="7"/><line x1="140" y1="170" x2="220" y2="170" class="sok" stroke-width="7"/>
<text x="190" y="200" text-anchor="middle" class="tm">capetele sunt procesate și resintetizate</text><text x="190" y="216" text-anchor="middle" class="tm">după cromatida soră</text>
<text x="190" y="250" text-anchor="middle" class="tok b">reparare PRECISĂ, fără erori</text><text x="190" y="268" text-anchor="middle" class="tm">cea mai folosită · BRCA1, BRCA2</text>
<line x1="410" y1="60" x2="540" y2="60" class="sA" stroke-width="7"/><line x1="600" y1="60" x2="740" y2="60" class="sA" stroke-width="7"/><text x="570" y="50" text-anchor="middle" class="tw2 b">⚡</text>
<text x="570" y="100" text-anchor="middle" class="tm">capetele sunt degradate parțial</text>
<line x1="410" y1="140" x2="530" y2="140" class="sA" stroke-width="7"/><line x1="610" y1="140" x2="740" y2="140" class="sA" stroke-width="7"/><path d="M532 140 h76" class="sw" stroke-width="2" stroke-dasharray="3 3"/>
<line x1="450" y1="190" x2="570" y2="190" class="sA" stroke-width="7"/><line x1="570" y1="190" x2="700" y2="190" class="sA" stroke-width="7"/><circle cx="570" cy="190" r="6" class="fws sw" stroke-width="2"/>
<text x="570" y="216" text-anchor="middle" class="tm">capetele se unesc fără omologie</text>
<text x="570" y="250" text-anchor="middle" class="tw2 b">pot rămâne mici inserții sau deleții</text><text x="570" y="268" text-anchor="middle" class="tm">nu necesită matriță</text>
</svg>
<figcaption><b>Cele două căi de reparare a rupturilor bicatenare</b> (după Figura 22 din curs, adaptată după Strachan și Read). Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Boală</th><th>Genă</th><th>Tablou</th></tr>
<tr><td><b>Ataxia telangiectazia</b></td><td><i>ATM</i> (protein-kinază)</td><td>ataxie, telangiectazii, radiosensibilitate, imunodeficiență, risc de limfoame</td></tr>
<tr><td><b>Cancerul de sân ereditar</b></td><td><i>BRCA1</i> (17q21), <i>BRCA2</i> (13q12)</td><td>neoplasm mamar frecvent bilateral, și ovarian (16–60%); defect al recombinării omoloage</td></tr>
<tr><td><b>Sindromul Nijmegen</b></td><td><i>NBS1</i></td><td>(cursul doar îl enumeră)</td></tr>
<tr><td><b>Sindromul Bloom</b></td><td><i>BLM</i> (cromozomul 15; helicază)</td><td>hipostatură armonică, facies caracteristic, fotosensibilitate cu rash, imunodeficiență, risc de neoplasme, infertilitate; UPD 15 explică asocierea cu Prader–Willi</td></tr>
<tr><td><b>Anemia Fanconi</b></td><td>gene FANC</td><td>hipostatură, malformații, insuficiență medulară progresivă (pancitopenie), tulburări de pigmentare, microftalmie, leucemie acută mieloidă; posibil stadiu final al VACTERL-H</td></tr>
</table></div>
[[img:nhej_hr|<b>NHEJ comparativ cu recombinarea omoloagă.</b> NHEJ leagă direct capetele rupte (rapid, dar imprecis); recombinarea omoloagă copiază secvența lipsă de pe cromatida soră (precis).]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Cum „știe” sistemul MMR care dintre cele două baze nepotrivite e greșită?</summary><div>Taie întotdeauna catena nou sintetizată, recunoscută ca atare; matrița veche este considerată corectă.</div></details>
<details class="q"><summary>De ce bolnavii cu xeroderma pigmentosum fac cancere pe față, dar nu pe zonele acoperite?</summary><div>Defectul NER împiedică repararea dimerilor de timină produși de UV; leziunile se acumulează doar unde ajunge lumina solară.</div></details>
<details class="q"><summary>Ce cale de reparare a rupturilor bicatenare e afectată la purtătoarele BRCA1/2 și de ce contează?</summary><div>Recombinarea omoloagă (cea precisă). Celulele se bazează pe NHEJ, care lasă inserții și deleții; erorile se acumulează și favorizează cancerul.</div></details>
</div>`
}
]
});
})();
