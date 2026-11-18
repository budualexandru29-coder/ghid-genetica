/* LP X — Caractere ereditare fiziologice determinate monogenic (LP p. 115–129) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf10)"/>`;
// zaharuri (simboluri SNFG simplificate): Gal = cerc galben, GalNAc = pătrat galben, Fuc = triunghi roșu, GlcNAc = pătrat albastru
const zah = (t, x, y) => ({
  Gal: `<circle cx="${x}" cy="${y}" r="9" fill="#f2c94c" class="si" stroke-width="1"/>`,
  GalNAc: `<rect x="${x - 9}" y="${y - 9}" width="18" height="18" fill="#f2c94c" class="si" stroke-width="1"/>`,
  GlcNAc: `<rect x="${x - 9}" y="${y - 9}" width="18" height="18" fill="#3a6ea5" class="si" stroke-width="1"/>`,
  Fuc: `<path d="M${x} ${y - 10}L${x + 10} ${y + 8}L${x - 10} ${y + 8}z" fill="#d9534f" class="si" stroke-width="1"/>`
})[t];
const lant = (x, y, extra = [], fuc = true) => {
  let o = `<line x1="${x - 60}" y1="${y}" x2="${x}" y2="${y}" class="si" stroke-width="1.4"/>` + zah("GlcNAc", x - 60, y) + zah("Gal", x, y) + `<line x1="${x - 90}" y1="${y}" x2="${x - 69}" y2="${y}" class="sm" stroke-width="1.4" stroke-dasharray="3 3"/>`;
  if (fuc) o += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 30}" class="si" stroke-width="1.4"/>` + zah("Fuc", x, y + 32);
  extra.forEach((t) => (o += `<line x1="${x}" y1="${y}" x2="${x + 34}" y2="${y - 26}" class="si" stroke-width="1.4"/>` + zah(t, x + 40, y - 30)));
  return o;
};

GHID.capitol({
id: "lp10",
intro: `<p class="lead">Trăsături normale, nu boli, dar cu aceleași reguli mendeliene: grupele sanguine, antigenele HLA, statusul secretor, sensibilitatea gustativă. Le folosim ca modele de dominanță, codominanță, epistazie și înlănțuire, și au aplicații directe: transfuzii, transplant, boala hemolitică a nou-născutului, expertize de filiație.</p>
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Sistemele din capitol și cromozomii lor">
${[["AB0", "9q34", "codominanță A/B, dominanță față de 0", "fT"], ["H (FUT1)", "19q13", "epistazie: fenotipul Bombay", "fT"], ["Rh (RHD, RHCE)", "1p36", "D dominant; Rh− = lipsa genei RHD", "fP"], ["MNS", "4q31", "codominanță M/N; haplotipuri", "fA"], ["Xg", "Xp22.33", "dominant legat de X, scapă inactivării", "fC"], ["Secretor (FUT2)", "19q13", "Se dominant", "fT"], ["HLA", "6p21.3", "codominanță; haplotipuri moștenite în bloc", "fG"], ["PTC (TAS2R38)", "7q34", "gustător dominant", "fA"]].map(([n, c, d, cl], i) => { const x = 10 + (i % 4) * 187, y = 10 + Math.floor(i / 4) * 92; return `<rect x="${x}" y="${y}" width="180" height="84" rx="10" class="fcard sm" stroke-width=".6"/><rect x="${x}" y="${y}" width="6" height="84" rx="3" class="${cl}"/><text x="${x + 16}" y="${y + 22}" class="ti b" style="font-size:12.5px">${n}</text><text x="${x + 16}" y="${y + 40}" class="ta b" style="font-size:11.5px">${c}</text>${fo(x + 16, y + 44, 158, 38, d)}`; }).join("")}
</svg>
<figcaption><b>Opt sisteme, opt lecții de genetică.</b> Localizările sunt cele actuale (cartea dă 1p34 pentru Rh și 4q28 pentru MNS). Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "generalitati", titlu: "Caracterele mendeliene normale și polimorfismul", pag: "115", emery: "cap. 6; cap. 13", acopera: ["lp10-r01"], curs: ["c01/polimorfism"],
html: `
<p>Caracterele monogenice sunt determinate de alelele unui singur locus și se moștenesc după legile lui Mendel. Particularități: <b>mediul le influențează foarte puțin</b>; distribuția în populație e <b>bimodală</b> (prezent/absent) sau <b>multimodală</b> (mai multe variante); multe sunt <b>polimorfe</b>: alela cea mai rară are o frecvență de peste 1%.</p>
<div class="emery"><b>OMIM astăzi</b>
<p>Cartea vorbește de „peste 10.000 de caractere” în OMIM (<i>Online Mendelian Inheritance in Man</i>, omim.org). Catalogul are acum peste 27.000 de intrări, dintre care peste 7.000 de fenotipuri cu baza moleculară cunoscută. Fiecare intrare are un număr de 6 cifre; prima cifră arată tipul de transmitere (1 sau 2 = autozomal, 3 = legat de X, 4 = Y, 5 = mitocondrial, 6 = autozomal, introdus după 1994).</p></div>`
},
{
id: "ab0", titlu: "Sistemul AB0 și fenotipul Bombay", pag: "115–118", emery: "cap. 13, p. 202–203", acopera: ["lp10-r02", "lp10-r03"],
html: `
<p>Descoperit de Karl Landsteiner în 1900. Hematiile poartă <b>aglutinogenele</b> (antigenele) A și/sau B, iar serul conține <b>aglutininele</b> (anticorpii naturali) împotriva antigenului absent: anti-A (α) și anti-B (β). Rezultă patru grupe: 0, A, B, AB.</p>
<h3>Biochimia: două gene care lucrează în serie</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Sinteza antigenelor H, A și B">${DEFS}
${lant(120, 90, [], false)}<text x="60" y="140" text-anchor="middle" class="ti b" style="font-size:12px">precursor</text>
${sag(170, 90, 240, 90)}<text x="205" y="80" text-anchor="middle" class="ta b" style="font-size:11.5px">FUT1 (H)</text><text x="205" y="112" text-anchor="middle" class="tm" style="font-size:11px">+ fucoză</text>
${lant(330, 90)}<text x="290" y="150" text-anchor="middle" class="ti b" style="font-size:12px">antigen H = grupa 0</text>
${sag(370, 70, 470, 40)}${sag(370, 110, 470, 160)}
<text x="420" y="36" class="ta b" style="font-size:11.5px">alela A</text><text x="420" y="178" class="ta b" style="font-size:11.5px">alela B</text>
${lant(560, 60, ["GalNAc"])}<text x="640" y="40" class="ti b" style="font-size:12px">antigen A</text><text x="640" y="56" class="tm" style="font-size:11px">+ N-acetilgalactozamină</text>
${lant(560, 190, ["Gal"])}<text x="640" y="170" class="ti b" style="font-size:12px">antigen B</text><text x="640" y="186" class="tm" style="font-size:11px">+ galactoză</text>
<text x="330" y="190" class="tm" style="font-size:11.5px">alela 0: enzimă inactivă</text><text x="330" y="206" class="tm" style="font-size:11.5px">→ H rămâne nemodificat</text>
<line x1="20" y1="240" x2="740" y2="240" class="sm" stroke-width=".6"/>
${zah("Gal", 40, 270)}<text x="56" y="274" class="ti" style="font-size:11.5px">galactoză</text>${zah("GlcNAc", 150, 270)}<text x="166" y="274" class="ti" style="font-size:11.5px">N-acetilglucozamină</text>${zah("Fuc", 320, 270)}<text x="336" y="274" class="ti" style="font-size:11.5px">fucoză</text>${zah("GalNAc", 410, 270)}<text x="426" y="274" class="ti" style="font-size:11.5px">N-acetilgalactozamină</text>
<text x="20" y="314" class="tm">Locusul H (FUT1): 19q13 · locusul AB0: 9q34. Simboluri simplificate după convenția SNFG pentru glucide.</text>
</svg>
<figcaption><b>H vine primul.</b> Fucoziltransferaza (gena <i>FUT1</i>, „H”) face antigenul H; glicoziltransferaza codificată de locusul AB0 adaugă un zahăr peste H. Alela A adaugă N-acetil<b>galactoz</b>amină, alela B adaugă galactoză, alela 0 are o deleție de o bază și nu produce enzimă activă. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Ce trebuie corectat în carte</b>
<p>1) Enzima A adaugă <b>N-acetilgalactozamină</b>, nu „N-acetilglucozamină”. 2) Tabelul 16 scrie genotipul grupei 0 ca „HH, Hh, hh” și pe al grupei A ca „A1H”: amestecă locusul H cu locusul AB0. Corect: grupa 0 = <b>00</b> (cu H prezent), A1 = A1A1, A1A2 sau <b>A10</b>; hh e fenotipul Bombay, separat.</p></div>
<div class="tw"><table>
<thead><tr><th>Fenotip</th><th>Genotipuri (locusul AB0)</th><th>Antigene</th><th>Anticorpi în ser</th><th>Frecvență (carte)</th></tr></thead>
<tbody>
<tr><td><b>0</b></td><td>00</td><td>H</td><td>anti-A, anti-B</td><td>32,7%</td></tr>
<tr><td><b>A1</b></td><td>A1A1, A1A2, A10</td><td>A1</td><td>anti-B</td><td rowspan="2">43,2% (A1 + A2)</td></tr>
<tr><td><b>A2</b></td><td>A2A2, A20</td><td>A2</td><td>anti-B</td></tr>
<tr><td><b>B</b></td><td>BB, B0</td><td>B</td><td>anti-A</td><td>16,5%</td></tr>
<tr><td><b>A1B, A2B</b></td><td>A1B, A2B</td><td>A și B</td><td>niciunul</td><td>7,6%</td></tr>
</tbody></table></div>
<p>Relațiile dintre alele: <b>A1 dominant față de A2</b>; A1 și A2 <b>codominante cu B</b>; A1, A2, B <b>dominante față de 0</b>. Alelele minore (A3, Ax, B3…) dau antigene slabe, care nu se detectează de rutină.</p>
[[img:gel_card|<b>Determinarea grupei pe card cu gel</b>: hematiile aglutinate de un anticorp rămân deasupra gelului; cele neaglutinate coboară la fund. Aici: fără reacție cu anti-A și anti-B (grupa 0), reacție cu anti-D (Rh pozitiv).]]
<h3>Fenotipul Bombay (hh): epistazie</h3>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Doi părinți de grupa 0 cu un copil de grupa B, explicat prin fenotipul Bombay">
${(() => {
  const per = (x, y, sx, g, gen, culoare) => (sx === "M" ? `<rect x="${x - 26}" y="${y - 26}" width="52" height="52" rx="6" class="${culoare} si" stroke-width="1.4"/>` : `<circle cx="${x}" cy="${y}" r="27" class="${culoare} si" stroke-width="1.4"/>`) + `<text x="${x}" y="${y + 5}" text-anchor="middle" class="ti b" style="font-size:14px">${g}</text><text x="${x}" y="${y + 46}" text-anchor="middle" class="tm" style="font-size:11.5px;font-family:ui-monospace,monospace">${gen}</text>`;
  return per(120, 60, "F", "„0”", "BB hh", "fws") + `<line x1="147" y1="60" x2="253" y2="60" class="si" stroke-width="1.4"/>` + per(280, 60, "M", "0", "00 HH", "fcard") +
    `<line x1="200" y1="60" x2="200" y2="140" class="si" stroke-width="1.4"/>` + per(200, 170, "F", "B", "B0 Hh", "fcard") +
    fo(360, 20, 390, 220, "Mama pare de grupa 0: hematiile ei nu au nici A, nici B, nici H. Are însă alela B, nevăzută fiindcă lipsește substratul H (hh).<br><br>Copilul primește <b>B</b> de la mamă și <b>H</b> de la tată, deci exprimă antigenul B. <b>Excepția</b> de la regula „doi părinți 0 au doar copii 0”.<br><br>Persoanele Bombay au anti-A, anti-B <b>și anti-H</b>: pot primi sânge doar de la alt Bombay. Se identifică cu lectina anti-H (<i>Ulex europaeus</i>): negativă doar la hh.");
})()}
</svg>
<figcaption><b>Epistazie:</b> genotipul hh de la locusul H ascunde orice alelă de la locusul AB0. Fenotipul a fost descris în 1952 la Bombay (Mumbai), unde e mai frecvent (~1/10.000). Schemă proprie.</figcaption>
</figure>
<h3>Regulile de transmitere (filiație)</h3>
<div class="pasi">
<div><b>Părinte AB</b>nu poate avea copil de grupa 0</div>
<div><b>Părinte 0</b>nu poate avea copil AB</div>
<div><b>Copil 0</b>posibil din părinți A sau B, dacă amândoi au alela 0</div>
<div><b>Antigenul copilului</b>A1, A2 sau B trebuie să existe la cel puțin un părinte</div>
<div><b>0 × 0</b>dă doar copii 0</div>
</div>
<p>Ultimele două reguli nu se aplică dacă un părinte e Bombay. Grupele sanguine pot <b>exclude</b> un părinte, dar nu pot dovedi paternitatea: astăzi expertizele folosesc profile ADN (microsateliți STR).</p>`
},
{
id: "rh", titlu: "Sistemul Rh și boala hemolitică a nou-născutului", pag: "118–120", emery: "cap. 13, p. 203–204", acopera: ["lp10-r04"], curs: ["c10b/profilaxie"],
html: `
<p>Hematiile pot avea antigenele C/c, D și E/e. Cel mai imunogen e <b>D</b>: „Rh pozitiv” înseamnă D prezent. În Europa ~85% sunt Rh+, ~15% Rh−; la basci ~30% Rh−, în Asia de Est aproape toți sunt Rh+.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Genetica sistemului Rh: genele RHD și RHCE">
<text x="20" y="24" class="ti b">Modelul din carte: 3 loci (C, D, E) · modelul real: 2 gene vecine pe 1p36.11</text>
<rect x="60" y="54" width="640" height="10" rx="5" class="fline"/>
<rect x="190" y="44" width="170" height="30" rx="6" class="fP"/><text x="275" y="64" text-anchor="middle" style="fill:#fff" class="b">RHD</text>
<rect x="400" y="44" width="170" height="30" rx="6" class="fA"/><text x="485" y="64" text-anchor="middle" style="fill:#fff" class="b">RHCE</text>
${fo(190, 80, 170, 60, "prezentă → D (Rh+); <b>deletată pe ambii cromozomi → Rh−</b> (dd)")}
${fo(400, 80, 170, 60, "o singură genă: alelele ei dau C sau c și E sau e")}
<rect x="60" y="154" width="640" height="10" rx="5" class="fline"/>
<rect x="400" y="144" width="170" height="30" rx="6" class="fA"/><text x="485" y="164" text-anchor="middle" style="fill:#fff" class="b">RHCE</text><text x="275" y="164" text-anchor="middle" class="tw2 b">— (RHD deletată) —</text>
<text x="20" y="66" class="tm" style="font-size:11.5px">Rh+</text><text x="20" y="166" class="tm" style="font-size:11.5px">haplotip d</text>
<text x="20" y="200" class="tm">În Europa, Rh negativ = deleția genei RHD pe ambii cromozomi 1: „d” nu e o alelă, ci absența genei.</text>
</svg>
<figcaption><b>De ce „d” nu are antigen.</b> Notația Fisher–Race (CDe/cde etc.) folosită în carte rămâne utilă pentru haplotipuri, dar sunt doar două gene, nu trei. Schemă proprie.</figcaption>
</figure>
<h3>Cum apare boala hemolitică (izoimunizarea Rh)</h3>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Etapele izoimunizării Rh">${DEFS}
${[["1. Prima sarcină", "mamă dd, făt Dd (tată D+). Puține hematii fetale trec în circulația maternă: fătul nu e afectat.", "fcard"], ["2. Nașterea / avortul", "multe hematii fetale D+ intră la mamă → anticorpi anti-D și limfocite B de memorie.", "fws"], ["3. Sarcina următoare", "puține hematii fetale reactivează memoria; anti-D de tip IgG traversează placenta.", "fws"], ["4. Fătul", "hemoliză → anemie, eritroblastoză, hepatosplenomegalie, hidrops; după naștere icter, risc de icter nuclear.", "fas"]].map(([t, d, c], i) => `<rect x="${10 + i * 188}" y="20" width="176" height="190" rx="10" class="${c} sm" stroke-width=".6"/><text x="${22 + i * 188}" y="44" class="ti b" style="font-size:12.5px">${t}</text>${fo(22 + i * 188, 52, 156, 150, d, "color:var(--ink)")}` + (i < 3 ? sag(186 + i * 188, 115, 196 + i * 188, 115) : "")).join("")}
${fo(10, 222, 740, 64, "Riscul ca fătul să fie D+: <b>100%</b> dacă tatăl e DD, <b>50%</b> dacă e Dd. Bilirubina neconjugată, eliminată prin placentă cât timp fătul e în uter, se acumulează după naștere, fiindcă ficatul nou-născutului o <b>glucuronoconjugă</b> încă slab; depusă în nucleii bazali, dă <b>icterul nuclear</b> (encefalopatie bilirubinică).")}
</svg>
<figcaption><b>Patru etape.</b> Primul copil e de obicei cruțat; afectarea crește de la o sarcină la alta. Schemă proprie.</figcaption>
</figure>
[[img:eritroblastoza|<b>Izoimunizarea Rh</b>, în două momente: la nașterea primului copil Rh+, hematiile fetale intră în sângele matern și activează limfocitele B; la sarcina următoare, anticorpii anti-Rh traversează placenta și atacă hematiile fetale.]]
<div class="capcana"><b>Profilaxia din carte e greșită</b>
<p>1) Imunoglobulina anti-D <b>nu se dă „cu 2–3 zile înaintea nașterii”</b>: se dă <b>în primele 72 de ore după naștere</b> (dacă nou-născutul e Rh+), după orice eveniment cu risc de trecere a hematiilor (avort, sarcină ectopică, amniocenteză, traumatism) și, în multe țări, de rutină în <b>săptămâna 28</b>. Ea distruge hematiile fetale D+ înainte ca mama să se imunizeze. 2) Femeile <b>deja imunizate</b> nu primesc „hematii D+ care să fixeze anticorpii”: se urmăresc titrul anti-D și viteza sângelui în artera cerebrală medie a fătului (Doppler), iar anemia severă se tratează prin <b>transfuzie intrauterină</b>. 3) Bilirubina se conjugă cu <b>acid glucuronic</b> (enzima UGT1A1), nu cu glicocol și taurină (acestea conjugă acizii biliari).</p></div>
<div class="lab"><b>Incompatibilitatea AB0</b>
<p>Apare mai ales la mama de grupa <b>0</b> cu făt A sau B. Cartea spune că anticorpii sunt IgM și nu trec placenta; de fapt, la persoanele de grupa 0 anti-A și anti-B sunt în parte <b>IgG</b> și trec. Boala e totuși ușoară, pentru că antigenele A și B sunt slab exprimate pe hematiile fetale și sunt prezente și pe alte țesuturi, care „absorb” anticorpii. Paradoxul din carte rămâne corect: incompatibilitatea AB0 asociată <b>protejează</b> de imunizarea Rh, fiindcă hematiile fetale sunt distruse imediat de anti-A/anti-B ai mamei.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Mamă Rh−, copil Rh−. Ce genotip are probabil tatăl? (problema 5 din carte)</summary><div>Copilul e dd, deci a primit d de la tată. Tatăl e <b>Dd</b> dacă e Rh+, sau dd dacă e Rh−.</div></details>
</div>`
},
{
id: "mns-xg", titlu: "Sistemele MNSs și Xg", pag: "120–121", emery: "cap. 13", acopera: ["lp10-r05", "lp10-r06", "lp10-r07"],
html: `
<p><b>MNSs</b> (glicoforinele A și B, 4q31): M și N sunt <b>codominante</b> (fenotipuri M, N, MN), S e dominant față de s. Genele sunt atât de apropiate încât se moștenesc ca <b>haplotipuri</b> (MS, Ms, NS, Ns). Importanță clinică mică; a fost folosit în expertize de filiație.</p>
<div class="tw"><table>
<thead><tr><th>Fenotip (Tabelul 17)</th><th>Genotip homozigot</th><th>Genotip heterozigot</th></tr></thead>
<tbody>
<tr><td>MS</td><td>MS/MS</td><td>MS/Ms</td></tr><tr><td>Ms</td><td>Ms/Ms</td><td>—</td></tr>
<tr><td>NS</td><td>NS/NS</td><td>NS/Ns</td></tr><tr><td>Ns</td><td>Ns/Ns</td><td>—</td></tr>
<tr><td>MNS</td><td>—</td><td>MS/NS, MS/Ns, Ms/NS</td></tr><tr><td>MNs</td><td>—</td><td>Ms/Ns</td></tr>
</tbody></table></div>
<p><b>Xg</b> (Xp22.33): alela Xg<sup>a</sup> e dominantă și produce antigenul Xg(a). Fiind legată de X, bărbații sunt hemizigoți (Xg<sup>a</sup>Y sau XgY), femeile pot fi homozigote sau heterozigote.</p>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Fenotipurile Xg la cele două sexe">
${[["Femei", [["Xg<tspan dy='-6' style='font-size:9px'>a</tspan><tspan dy='6'>Xg</tspan><tspan dy='-6' style='font-size:9px'>a</tspan><tspan dy='6'> </tspan>", "Xg(a+)"], ["Xg<tspan dy='-6' style='font-size:9px'>a</tspan><tspan dy='6'> Xg</tspan>", "Xg(a+)"], ["Xg Xg", "Xg(a−)"]]], ["Bărbați", [["Xg<tspan dy='-6' style='font-size:9px'>a</tspan><tspan dy='6'> Y</tspan>", "Xg(a+)"], ["Xg Y", "Xg(a−)"]]]].map(([s, g], i) => `<text x="${30 + i * 380}" y="26" class="ti b">${s}</text>` + g.map(([gt, f], j) => `<text x="${40 + i * 380}" y="${58 + j * 32}" class="ti" style="font-size:14px;font-family:ui-monospace,monospace">${gt}</text><text x="${170 + i * 380}" y="${58 + j * 32}" class="${f.includes("+") ? "tok" : "tm"} b">${f}</text>`).join("")).join("")}
<text x="20" y="160" class="tm">Tabelul 18 din carte. Fenotipul unui fiu arată direct ce X a primit de la mamă: Xg a fost un marker clasic de înlănțuire pe X.</text>
</svg>
<figcaption><b>Xg la cele două sexe.</b> Gena <i>XG</i> se află la granița regiunii pseudoautozomale 1 și scapă inactivării X, deci femeile heterozigote nu sunt mozaic pentru acest antigen. Schemă proprie.</figcaption>
</figure>`
},
{
id: "secretor", titlu: "Statusul secretor", pag: "122", emery: "cap. 13", acopera: ["lp10-r08", "lp10-r10"],
html: `
<p>Aproximativ <b>80%</b> din europeni sunt <b>secretori</b>: au antigenele AB0 și în salivă, urină, spermă, sudoare. Alela <b>Se</b> e dominantă (SeSe, Sese = secretori); <b>sese</b> = nesecretori (20%), cu antigene AB0 doar pe celule.</p>
<div class="tw"><table>
<thead><tr><th>Fenotip (Tabelul 19)</th><th>Genotip</th><th>Antigene AB0 în sânge</th><th>Antigene AB0 în secreții</th></tr></thead>
<tbody><tr><td>secretor</td><td>SeSe, Sese</td><td>după grupă</td><td>prezente (aceleași)</td></tr><tr><td>nesecretor</td><td>sese</td><td>după grupă</td><td>absente</td></tr></tbody></table></div>
<div class="capcana"><b>Mecanismul real</b>
<p>Cartea spune că Se face antigenele „hidrosolubile”. De fapt, <i>FUT2</i> (19q13, gena Se) codifică a doua fucoziltransferază, care face antigenul H în <b>epiteliile glandulare</b> (<i>FUT1</i> îl face pe hematii). Fără H în secreții, enzimele A și B nu au substrat acolo. E tot o epistazie, ca la Bombay. Bonus clinic: nesecretorii sunt în mare parte rezistenți la norovirus, care se leagă de antigenul H din intestin.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Tată secretor a cărui mamă era nesecretoare. Ce genotip are?</summary><div><b>Sese</b>: de la mama lui a primit obligatoriu se.</div></details>
</div>`
},
{
id: "hla", titlu: "Sistemul HLA (grupele tisulare)", pag: "122–125", emery: "cap. 13, p. 199–202", acopera: ["lp10-r09"],
html: `
<p>Complexul major de histocompatibilitate (<b>MHC</b>), la om <b>HLA</b>: proteine care prezintă peptide limfocitelor T. Genele ocupă ~3,6 Mb pe <b>6p21.3</b>, regiunea cea mai densă în gene și cea mai polimorfă din genom.</p>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Harta regiunii HLA pe cromozomul 6">
<text x="20" y="24" class="ti b">6p21.3: de la centromer (stânga) spre telomer (dreapta)</text>
<rect x="40" y="60" width="680" height="12" rx="6" class="fline"/>
<rect x="40" y="48" width="260" height="36" rx="6" class="fA"/><text x="170" y="71" text-anchor="middle" style="fill:#fff" class="b">clasa II</text>
<rect x="300" y="48" width="180" height="36" rx="6" class="fC"/><text x="390" y="71" text-anchor="middle" style="fill:#fff" class="b">clasa III</text>
<rect x="480" y="48" width="240" height="36" rx="6" class="fP"/><text x="600" y="71" text-anchor="middle" style="fill:#fff" class="b">clasa I</text>
${[[80, "DP"], [140, "DQ"], [210, "DR"], [340, "C4, C2, BF"], [430, "TNF, HSP70"], [372, "CYP21A2", 1], [530, "B"], [580, "C"], [670, "A"], [700, "E, F, G", 1]].map(([x, t, j]) => `<line x1="${x}" y1="84" x2="${x}" y2="${j ? 118 : 100}" class="sm" stroke-width="1"/><text x="${x}" y="${j ? 130 : 112}" text-anchor="middle" class="ti b" style="font-size:11.5px">${t}</text>`).join("")}
${fo(40, 140, 250, 86, "<b>Clasa II</b> (α și β codificate aici): pe celulele prezentatoare de antigen (limfocite B, macrofage, celule dendritice); prezintă peptide limfocitelor T CD4.")}
${fo(300, 140, 180, 86, "<b>Clasa III</b>: complement, TNF, 21-hidroxilaza (<i>CYP21A2</i>, hiperplazia congenitală de suprarenală).")}
${fo(490, 140, 260, 86, "<b>Clasa I</b> (doar lanțul α; β2-microglobulina e pe cromozomul 15): pe toate celulele nucleate; prezintă peptide limfocitelor T CD8.")}
</svg>
<figcaption><b>Cele trei regiuni.</b> Schemă simplificată, fără scară exactă.</figcaption>
</figure>
<h3>Haplotipurile se moștenesc în bloc</h3>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Moștenirea haplotipurilor HLA și compatibilitatea între frați">
${(() => {
  const H = { a: "fP", b: "fA", c: "fT", d: "fC" };
  const pers = (x, y, h1, h2, et) => `<rect x="${x - 16}" y="${y}" width="12" height="54" rx="5" class="${H[h1]}"/><rect x="${x + 4}" y="${y}" width="12" height="54" rx="5" class="${H[h2]}"/><text x="${x}" y="${y + 72}" text-anchor="middle" class="ti b" style="font-size:12px">${et}</text>`;
  let o = pers(250, 14, "a", "b", "tata ab") + pers(510, 14, "c", "d", "mama cd") + `<line x1="270" y1="40" x2="490" y2="40" class="si" stroke-width="1.4"/><line x1="380" y1="40" x2="380" y2="110" class="si" stroke-width="1.4"/><line x1="140" y1="110" x2="620" y2="110" class="si" stroke-width="1.4"/>`;
  [["a", "c", 140], ["a", "d", 300], ["b", "c", 460], ["b", "d", 620]].forEach(([h1, h2, x]) => (o += `<line x1="${x}" y1="110" x2="${x}" y2="126" class="si" stroke-width="1.4"/>` + pers(x, 128, h1, h2, h1 + h2)));
  o += fo(20, 214, 730, 44, "Față de copilul <b>ac</b>, un frate oarecare e: <b>identic</b> (ac) cu probabilitatea 1/4, <b>semi-identic</b> (ad sau bc) 1/2, <b>diferit</b> (bd) 1/4. Fiecare copil e semi-identic cu fiecare părinte.");
  return o;
})()}
</svg>
<figcaption><b>Patru combinații posibile de haplotipuri.</b> De aceea, pentru transplantul de celule stem hematopoietice, se caută întâi un frate HLA-identic: șansa e de 25% pentru fiecare frate. Recombinarea în regiune e rară (~1%). Schemă proprie.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Creșterea numărului de alele HLA cunoscute">
${(() => {
  const D = [["HLA-A", 245, 8000], ["HLA-B", 480, 9900], ["HLA-C", 117, 8000], ["HLA-DRB1", 380, 3800], ["HLA-DQB1", 52, 2700]];
  const lx = (v) => Math.log10(v) / 4 * 420;
  let o = `<text x="20" y="20" class="ti b">Alele cunoscute: 2002 (în carte) față de astăzi (scară logaritmică)</text>`;
  D.forEach(([n, a, b], i) => { const y = 34 + i * 32; o += `<text x="120" y="${y + 15}" text-anchor="end" class="ti b" style="font-size:12px">${n}</text><rect x="130" y="${y}" width="${lx(b)}" height="20" rx="4" class="fG" opacity=".35"/><rect x="130" y="${y}" width="${lx(a)}" height="20" rx="4" class="fG"/><text x="${136 + lx(b)}" y="${y + 15}" class="tm" style="font-size:11.5px">${a} → ~${b.toLocaleString("ro-RO")}</text>`; });
  return o + `<text x="20" y="202" class="tm">Valorile actuale sunt aproximative, rotunjite (baza de date IPD-IMGT/HLA; total peste 40.000 de alele).</text>`;
})()}
</svg>
<figcaption><b>Polimorfismul HLA a explodat odată cu secvențierea.</b> Cifrele din carte (aprilie 2002) sunt depășite de ~20–30 de ori. Bara închisă = 2002, bara deschisă = astăzi.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Alelă HLA</th><th>Asociere</th></tr></thead>
<tbody>
<tr><td>B*27</td><td>spondilita anchilozantă (~90% din bolnavi sunt B27+; dar doar câțiva % din purtători fac boala)</td></tr>
<tr><td>DQ2, DQ8</td><td>boala celiacă (practic toți bolnavii au unul dintre ele: absența lor exclude boala)</td></tr>
<tr><td>DR3, DR4 (DQ2/DQ8)</td><td>diabetul zaharat de tip 1, boala Basedow, boala Addison</td></tr>
<tr><td>DR15 (DRB1*15:01)</td><td>scleroza multiplă</td></tr>
<tr><td>B*57:01</td><td>reacție de hipersensibilitate la abacavir: testare obligatorie înainte de tratament</td></tr>
<tr><td>B*15:02</td><td>sindrom Stevens–Johnson la carbamazepină (populații din Asia de Sud-Est)</td></tr>
</tbody></table></div>
<p>Ultimele două rânduri țin de farmacogenetică (<a href="#/c06/definitii">ghidul de curs</a>).</p>`
},
{
id: "serice-enzimatice", titlu: "Grupele serice și enzimatice", pag: "125–126", emery: "cap. 13", acopera: ["lp10-r11", "lp10-r12"],
html: `
<p>Multe proteine serice și enzime au variante alelice care diferă prin sarcină electrică sau mărime și se separă prin <b>electroforeză</b>: haptoglobina, transferina, imunoglobulinele (allotipuri Gm, Km). Enzime polimorfe: în ser pseudocolinesteraza, acetiltransferaza, LDH, CK; în hematii fosfataza acidă, fosfoglucomutaza, adenilatkinaza, G6PD.</p>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Electroforeza haptoglobinei la cele trei genotipuri">
<text x="20" y="22" class="ti b">Haptoglobina: trei genotipuri, trei modele de benzi</text>
${[["Hp 1-1", [40]], ["Hp 2-1", [40, 70, 95, 118, 140]], ["Hp 2-2", [70, 95, 118, 140, 160]]].map(([t, b], i) => `<rect x="${110 + i * 120}" y="40" width="70" height="160" rx="4" class="fline"/>` + b.map((y, j) => `<rect x="${116 + i * 120}" y="${40 + y}" width="58" height="${j && t !== "Hp 1-1" ? 7 : 9}" rx="2" class="fP" opacity="${1 - j * 0.12}"/>`).join("") + `<text x="${145 + i * 120}" y="218" text-anchor="middle" class="ti b" style="font-size:12px">${t}</text>`).join("")}
<text x="90" y="54" text-anchor="end" class="tm" style="font-size:11px">migrare</text><text x="90" y="68" text-anchor="end" class="tm" style="font-size:11px">rapidă</text>
${fo(480, 40, 270, 170, "Codominanță vizibilă direct: heterozigotul 2-1 are benzile ambilor homozigoți, plus forme hibride. Astfel de polimorfisme au fost primii markeri genetici pentru studii de populație și filiație, înainte de markerii ADN.")}
</svg>
<figcaption><b>Exemplu schematic de polimorfism proteic.</b> Haptoglobina 2 formează polimeri de mărimi diferite, deci mai multe benzi. Schemă calitativă, proprie.</figcaption>
</figure>
<div class="emery"><b>De la grupe enzimatice la farmacogenetică</b>
<p>Pseudocolinesteraza deficitară (gena <i>BCHE</i>) prelungește apneea după succinilcolină; acetilatorii lenți (<i>NAT2</i>) fac mai ușor reacții adverse la izoniazidă; deficitul de G6PD dă hemoliză la primaquină și fave. Sunt exemplele clasice din <a href="#/c06/metabolizatori">farmacogenetică</a>.</p></div>`
},
{
id: "ptc", titlu: "Sensibilitatea gustativă la feniltiocarbamidă (PTC)", pag: "126–127", emery: "", acopera: ["lp10-r13", "lp10-r14", "lp10-r15"],
html: `
<p>Pragul gustativ pentru PTC e un caracter monogenic: ~2/3 din europeni sunt <b>gustători</b> (simt PTC amar), ~1/3 <b>negustători</b>. Alela gustătoare <b>G</b> e dominantă: GG și Gg = gustători, gg = negustători. Gena e <i>TAS2R38</i> (7q34), un receptor pentru gustul amar; două haplotipuri frecvente, PAV (gustător) și AVI (negustător).</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Seria de diluții PTC și pragul gustativ">
${(() => {
  const C = [1300, 325, 81.25, 20.32, 5.08, 1.27, 0.32], X0 = 90, W = 600;
  let o = `<text x="20" y="22" class="ti b">Tabelul 21: fiecare soluție e de 4 ori mai diluată decât precedenta (mg%)</text>`;
  C.forEach((c, i) => { const x = X0 + i * W / 6, h = (Math.log10(c) + 1) / 4.2 * 140; o += `<rect x="${x - 26}" y="${190 - h}" width="52" height="${h}" rx="5" class="${i >= 4 ? "fA" : "fC"}"/><text x="${x}" y="${184 - h}" text-anchor="middle" class="ti b" style="font-size:11.5px">${String(c).replace(".", ",")}</text><text x="${x}" y="210" text-anchor="middle" class="ti b">${i + 1}</text>`; });
  o += `<text x="${X0 + 5 * W / 6}" y="236" text-anchor="middle" class="tok b" style="font-size:12px">gustător: prag la soluția 7, 6 sau 5</text><text x="${X0 + 1.5 * W / 6}" y="236" text-anchor="middle" class="tm" style="font-size:12px">negustător: simte abia soluțiile concentrate</text>`;
  return o;
})()}
</svg>
<figcaption><b>Seria de diluții</b>, pe scară logaritmică. Se începe cu soluția cea mai diluată (7) și se urcă până la prima soluție simțită amar: aceea e pragul. Date din carte.</figcaption>
</figure>
<ol class="protocol">
<li><b>Picură 1–2 picături din soluția 7</b><span class="de-ce">pe partea posterioară a limbii, unde receptorii pentru amar sunt mai numeroși.</span></li>
<li><b>Dacă nu e simțită, treci la soluția următoare</b><span class="de-ce">mereu de la diluat la concentrat, ca gustul puternic să nu adapteze receptorii.</span></li>
<li><b>Notează prima soluție simțită amar</b><span class="de-ce">aceasta e pragul. Ideal se verifică „orb” (apă față de soluție, persoana alege paharul amar).</span></li>
</ol>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Dacă 1/3 din populație e negustătoare, care e frecvența alelei g și a heterozigoților?</summary><div>q² = 1/3, deci q = √0,333 ≈ <b>0,58</b>, p ≈ 0,42; heterozigoții 2pq ≈ <b>0,49</b>: aproape jumătate din populație e Gg. Exemplu de polimorfism echilibrat: alela „negustătoare” e frecventă, nu rară.</div></details>
</div>`
},
{
id: "aplicatii", titlu: "Aplicații practice: grupe sanguine și filiație", pag: "127–129", emery: "cap. 13", acopera: ["lp10-r16"],
html: `
<p><b>Exemplul din carte:</b> ce grupe pot avea copiii unui părinte A1 și unui părinte B? Părintele A1 poate fi A1A1, A1A2 sau A10; părintele B poate fi BB sau B0.</p>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Copiii posibili ai unui cuplu A1 × B, după genotipuri">
${(() => {
  const A = ["A1A1", "A1A2", "A10"], B = ["BB", "B0"], fen = (x, y) => { const s = [x, y]; if (s.includes("B") && s.some((z) => z.startsWith("A"))) return s.includes("A1") ? "A1B" : "A2B"; if (s.includes("A1")) return "A1"; if (s.includes("A2")) return "A2"; if (s.includes("B")) return "B"; return "0"; };
  const al = (g) => g.match(/A1|A2|B|0/g);
  const CL = { A1: "fT", A2: "fT", B: "fA", A1B: "fP", A2B: "fP", 0: "fcard" };
  let o = `<text x="120" y="20" text-anchor="middle" class="ti b" style="font-size:12px">părinte A1 \\ părinte B</text>`;
  B.forEach((b, j) => (o += `<text x="${310 + j * 220}" y="20" text-anchor="middle" class="ta b">${b}</text>`));
  A.forEach((a, i) => {
    const y = 34 + i * 66; o += `<text x="120" y="${y + 36}" text-anchor="middle" class="ta b">${a}</text>`;
    B.forEach((b, j) => { const set = [...new Set(al(a).flatMap((x) => al(b).map((z) => fen(x, z))))]; set.forEach((f, k) => (o += `<rect x="${220 + j * 220 + k * 62}" y="${y + 14}" width="56" height="34" rx="6" class="${CL[f]} sm" stroke-width=".8"/><text x="${248 + j * 220 + k * 62}" y="${y + 36}" text-anchor="middle" class="ti b" style="font-size:12.5px">${f}</text>`)); });
  });
  return o;
})()}
</svg>
<figcaption><b>Tabelul 22 din carte, complet.</b> Considerând toate genotipurile posibile, copilul poate avea oricare dintre cele 6 fenotipuri (A1, A2, B, A1B, A2B, 0). Un cuplu real are însă un singur genotip: fiecare copil restrânge posibilitățile. Calcul propriu.</figcaption>
</figure>
<div class="intrebari"><h4>Problemele din carte</h4>
<details class="q"><summary>1) Tatăl A1, copilul B. Ce grupă poate avea mama?</summary><div>Copilul a primit B de la mamă și 0 de la tată (tatăl A10). Mama: <b>B</b> (BB, B0) sau <b>AB</b> (A1B, A2B).</div></details>
<details class="q"><summary>2) Mama B, tatăl A1; copii A1, A2 și B. Care e suspect?</summary><div>Copilul B cere ca tatăl să dea 0 (tată A10); copilul A2 cere ca tatăl să dea A2 (tată A1A2). Tatăl nu poate fi ambele: unul dintre cei doi e incompatibil. Cu tatăl A10 și mama B0 (cel mai probabil, explică A1 și B), <b>copilul A2</b> e suspect.</div></details>
<details class="q"><summary>3) Tatăl B, mama A1; copii, în ordine: A1, A2, B, 0, AB, AB. Primul e sigur legitim. Care sunt legitimi?</summary><div>Copilul 0 cere ambii părinți cu alela 0: tată B0, mamă A10. Cu aceste genotipuri sunt posibili A1, B, 0 și A1B (ambii AB). <b>Copilul A2</b> e incompatibil (nimeni nu are A2).</div></details>
<details class="q"><summary>4) Copil 0, mama B. Doi tați posibili: unul A, altul AB. Care e exclus?</summary><div>Copilul 0 are nevoie de alela 0 de la tată. Bărbatul <b>AB e exclus</b>; bărbatul A (A0) e posibil, dar nu dovedit.</div></details>
<details class="q"><summary>6) Mama A2, M, nesecretoare; tatăl B, MN, secretor (cu mamă nesecretoare). Copii: A2B MN secretor; AB MN nesecretor; B N secretor; A2 M nesecretor. Care sunt suspecți?</summary><div>Părinți: mama A2? MM sese; tatăl B? MN Sese. <b>Copilul AB</b> (A1B) e incompatibil: nimeni nu are A1. <b>Copilul B, N</b> e incompatibil: grupa N cere N de la mamă, care e MM. Ceilalți doi sunt compatibili (A2 M nesecretor cere tată B0).</div></details>
<details class="q"><summary>7) Tatăl A1, mama B; copii A1, A2, B, 0, AB, A2B. Primul e sigur legitim.</summary><div>Nu există o pereche de genotipuri care să-i explice pe toți. Varianta A10 × B0 explică A1, B, 0 și A1B (A2 și A2B suspecți); varianta A1A2 × B0 explică A1, A2, A1B și A2B (B și 0 suspecți). Ambele explică 4 din 6: grupele sanguine pot doar exclude, decizia cere markeri ADN.</div></details>
<details class="q"><summary>8) Mama A, Rh+, N, secretoare (mama ei: 0, nesecretoare); tatăl B, Rh−, MN, nesecretor (părinții lui: A1B și A2B). Copii: AB Rh− MN nesecretor; B Rh+ N secretor; B Rh+ M nesecretor; 0 Rh− MN secretor.</summary><div>Rezolvarea completă e în caseta de mai jos.</div></details>
</div>
<div class="lab"><b>Rezolvarea problemei 8</b>
<p><b>Mama:</b> A0 (de la mama ei 0), Dd (are un copil Rh−), NN, Sese (mama ei nesecretoare). <b>Tatăl:</b> BB (părinții A1B și A2B i-au dat fiecare B, altfel ar fi AB), dd, MN, sese. Copilul 1 (AB, Rh−, MN, nesecretor) și copilul 2 (B, Rh+, N, secretor) sunt <b>compatibili</b>. Copilul 3 are grupa <b>M</b>: imposibil, mama e NN. Copilul 4 are grupa <b>0</b>: imposibil, tatăl e BB. Ambii sunt suspecți.</p></div>`
}
]
});
})();
