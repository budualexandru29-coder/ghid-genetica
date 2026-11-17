/* Capitolul 7 — Boli monogenice cu transmitere autozomal dominantă (curs p. 133–152) */
(function () {
const P = GHID.ped;
// arbore AD cu trei generații
const arboreAD = () => {
  let s = "";
  s += P.ind(320, 40, "m", "a", "I-1") + P.ind(420, 40, "f", "n", "I-2") + P.cuplu(320, 420, 40);
  s += P.copii(370, 40, [160, 300, 440, 580], 120);
  s += P.ind(160, 120, "f", "a", "II-1") + P.ind(300, 120, "m", "n", "II-2") + P.ind(440, 120, "f", "n", "II-3") + P.ind(580, 120, "m", "a", "II-4");
  s += P.ind(80, 120, "m", "n") + P.cuplu(80, 160, 120) + P.ind(660, 120, "f", "n") + P.cuplu(580, 660, 120);
  s += P.copii(120, 120, [60, 120, 180], 210) + P.ind(60, 210, "m", "a", "III-1") + P.ind(120, 210, "f", "n", "III-2") + P.ind(180, 210, "f", "a", "III-3");
  s += P.copii(620, 120, [560, 620, 680], 210) + P.ind(560, 210, "m", "a", "III-4") + P.ind(620, 210, "f", "n", "III-5") + P.ind(680, 210, "m", "a", "III-6");
  return s;
};

GHID.capitol({
id: "c07",
intro: `<p class="lead">O singură alelă mutantă ajunge pentru boală. Capitolul trece prin șase boli autozomal dominante, toate cu aceeași regulă de transmitere, dar cu mecanisme moleculare diferite: proteine structurale (colagen, fibrilină), un supresor tumoral (neurofibromina), un receptor activat permanent (FGFR3), proteine ale cililor (policistinele) și un receptor de captare (LDLR).</p>
<figure>
<svg viewBox="0 0 740 300" role="img" aria-label="Arbore genealogic autozomal dominant">
${arboreAD()}
<rect x="20" y="250" width="700" height="44" rx="10" class="fas"/>
<text x="370" y="270" text-anchor="middle" class="ti">Boala apare în fiecare generație · ambele sexe sunt afectate egal · transmitere și tată → fiu</text>
<text x="370" y="287" text-anchor="middle" class="ti">Un părinte afectat (heterozigot) × unul sănătos: risc de <tspan class="b">50%</tspan> la fiecare copil · cei sănătoși nu transmit</text>
</svg>
<figcaption><b>Recunoașterea transmiterii autozomal dominante</b> într-un arbore (pătrat = bărbat, cerc = femeie, plin = afectat). Excepțiile din capitol: mutațiile <i>de novo</i> (copil afectat cu părinți sănătoși), penetranța incompletă și expresivitatea variabilă.</figcaption>
</figure>
[[img:ad|<b>De ce 50%:</b> părintele afectat are o alelă mutantă (D) și una normală (d); fiecare copil primește la întâmplare una dintre ele.]]`,
sectiuni: [
{
id: "oi", titlu: "Osteogeneza imperfectă", pag: "133–135", emery: "cap. 19 (displazii scheletice); cap. 2, p. 26", acopera: ["c07-r01"],
html: `
<p>„Boala oaselor de sticlă” (sindromul Lobstein): un grup de afecțiuni cu <b>fragilitate osoasă</b> și fracturi spontane sau la traumatisme minore. Este o boală generalizată a țesutului conjunctiv, prin anomalia <b>colagenului de tip I</b>: fie prea puțin colagen normal, fie colagen defectuos și în cantitate redusă. Colagenul I reprezintă ~30% din greutatea corpului: matricea osoasă, capsule, fascii, cornee, scleră, tendoane, piele, dentină, meninge.</p>
<figure><img src="fig/loc_c07_oi.svg" alt="Genele COL1A1 și COL1A2">
<figcaption><b>Cele două gene ale colagenului I, din datele genomului.</b> <i>COL1A1</i> este la 17q21.33 (51 de exoni), <i>COL1A2</i> la 7q21.3 (52 de exoni). Exonii mici și numeroși corespund repetițiilor Gly-X-Y ale helixului.</figcaption></figure>
<div class="capcana"><b>Localizări inversate în curs</b><p>Cursul scrie <i>COL1A1</i> pe 7q și <i>COL1A2</i> pe 17q. Este invers: <b>COL1A1 → 17q</b>, <b>COL1A2 → 7q</b> (UCSC GRCh38; la fel în Emery).</p></div>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Efectul dominant negativ în colagenul de tip I">
${(() => {
  const fir = (x, y, col, m) => Array.from({ length: 14 }, (_, i) => `<circle cx="${x + i * 11}" cy="${y + Math.sin(i * 0.9) * 4}" r="4.5" class="${m && i === 7 ? "fA" : col}"/>`).join("");
  const triplu = (x, y, a, b, c, ok) => fir(x, y, a.col, a.m) + fir(x, y + 12, b.col, b.m) + fir(x, y + 24, c.col, c.m) + `<text x="${x + 72}" y="${y + 52}" text-anchor="middle" class="${ok ? "tok" : "tw2"} b">${ok ? "normal" : "defect"}</text>`;
  const N1 = { col: "fG" }, M1 = { col: "fG", m: true }, A2 = { col: "fT" };
  let s = `<text x="20" y="24" class="ti b">Molecula de colagen I = 2 lanțuri α1 (COL1A1) + 1 lanț α2 (COL1A2), răsucite în triplu helix</text>`;
  s += `<text x="20" y="60" class="tin b">Mutație NUL în COL1A1</text><text x="20" y="78" class="tm">(nu se produce lanț)</text>`;
  s += triplu(200, 60, N1, N1, A2, true) + `<text x="390" y="90" class="ti">→ jumătate din cantitate, toate moleculele normale</text><text x="390" y="110" class="tok b">tip I: formă ușoară</text>`;
  s += `<text x="20" y="170" class="tw2 b">Mutație MISSENSE în COL1A1</text><text x="20" y="188" class="tm">(ex. Gly → altceva)</text>`;
  s += triplu(200, 160, N1, N1, A2, true) + triplu(200, 220, M1, N1, A2, false);
  s += `<text x="390" y="180" class="ti">→ un lanț anormal strică toată molecula în care intră:</text><text x="390" y="200" class="ti">¾ din molecule sunt defecte (efect dominant negativ)</text><text x="390" y="220" class="tw2 b">tipurile II, III, IV: forme severe</text>`;
  s += `<text x="20" y="288" class="tm">Roșu = lanț cu substituție a glicinei; glicina, cel mai mic aminoacid, ocupă fiecare a treia poziție în interiorul helixului.</text>`;
  return s;
})()}
</svg>
<figcaption><b>De ce contează tipul mutației.</b> Un lanț absent reduce doar cantitatea; un lanț anormal se încorporează și distruge molecule întregi. Emery folosește colagenul ca exemplu clasic de mutație dominant negativă (cap. 2). Schemă proprie.</figcaption>
</figure>
[[img:colagen|<b>Triplul helix de colagen.</b> Trei lanțuri polipeptidice răsucite unul în jurul celuilalt; fiecare a treia poziție este o glicină, orientată spre axul helixului.]]
<h3>Genetică</h3>
<p>Incidență <b>1/15.000–1/30.000</b>, probabil subestimată. Cursul descrie <b>8 forme</b>; <b>90%</b> prin mutații <i>COL1A1</i>/<i>COL1A2</i>, restul prin <i>CRTAP</i> (tip VII) și <i>LEPRE1</i> (tip VIII). Transmitere <b>AD</b> în tipurile I, II, IV și V (50% risc dacă un părinte e afectat; în 60% din cazuri mutație <i>de novo</i>); <b>AR</b> rar, în unele forme de tip III și VII (risc 25%).</p>
<h3>Tablou clinic</h3>
<div class="pasi">
<div><b>Fracturi</b>multiple, recurente, spontane sau la traumatisme minore (zeci–sute)</div>
<div><b>Deformări</b>curbarea brațelor, gambelor, scolioză, cifoză; statură normală sau mică</div>
<div><b>Sclere albastre</b>(apar și în alte boli)</div>
<div><b>Echimoze</b>apar foarte ușor (75%)</div>
<div><b>Dentinogeneză imperfectă</b></div>
<div><b>Surditate progresivă</b>50% la vârsta adultă</div>
<div><b>Hiperlaxitate articulară</b>; la copil facies triunghiular (30%), macrocefalie relativă; intelect normal</div>
</div>
[[img:oi_sclere|<b>Sclere albastre în osteogeneza imperfectă.</b> Sclera subțiată, săracă în colagen, lasă să se vadă coroida pigmentată de dedesubt.]]
<h3>Diagnostic, tratament, sfat genetic</h3>
<p>Anamneză familială, examen clinic, biochimie; <b>radiologic</b>: fracturi, calusuri vicioase, osteoporoză (în formele severe fracturi încă din perioada neonatală, la simpla manipulare); <b>molecular</b>: confirmă și stabilește tipul; <b>prenatal</b>: ecografie (fracturi, deformări în formele letale) și analiza <i>COL1A1</i>/<i>COL1A2</i> din vilozități coriale sau lichid amniotic, dacă mutația familiei e cunoscută.</p>
<p>Nu există tratament curativ. Abordare multidisciplinară (pediatru, genetician, ortoped, ORL, stomatolog, kinetoterapeut, psiholog); <b>bifosfonați</b> (pamidronat i.v.) scad incidența fracturilor și cresc densitatea minerală osoasă. Prognosticul depinde de tip: speranță de viață normală în formele ușoare, deces neonatal în cele severe.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce o mutație nulă în COL1A1 produce o formă mai ușoară decât o substituție a glicinei?</summary><div>Mutația nulă reduce la jumătate cantitatea de colagen, dar toate moleculele formate sunt normale. Lanțul cu glicină substituită se încorporează și strică moleculele în care intră (efect dominant negativ).</div></details>
<details class="q"><summary>Doi părinți sănătoși au un copil cu OI tip I. Ce explicații posibile există?</summary><div>Cel mai probabil o mutație de novo; posibil și mozaicism germinal la unul dintre părinți, care crește riscul de recurență peste cel al populației.</div></details>
</div>`
},
{
id: "nf1", titlu: "Neurofibromatoza tip 1", pag: "136–139", emery: "cap. 19, p. 284–286", acopera: ["c07-r02"],
html: `
<p>Neurofibromatozele sunt boli AD cu <b>penetranță mare</b> (100% la adult), dar <b>expresivitate foarte variabilă</b>, și cu risc crescut de tumori, mai ales cerebrale.</p>
<div class="tw"><table>
<tr><th></th><th>NF1 (von Recklinghausen)</th><th>NF2</th><th>Schwannomatoza</th></tr>
<tr><td>Debut</td><td>copilărie (uneori de la naștere)</td><td>adolescent, adult tânăr</td><td>—</td></tr>
<tr><td>Tablou</td><td>afectare cutanată, deformări osoase</td><td>hipoacuzie, surditate, acufene, tulburări de echilibru</td><td>durere intensă prin schwannoame pe nervi cranieni, spinali, periferici</td></tr>
<tr><td>Incidență</td><td><b>1/2.500–1/4.000</b></td><td>1/35.000–50.000</td><td>cea mai rară</td></tr>
<tr><td>Genă</td><td><i>NF1</i>, 17q11.2</td><td><i>NF2</i>, 22q12.2</td><td>—</td></tr>
</table></div>
<p style="font-size:14px;color:var(--muted)">Cursul scrie „22p12” pentru <i>NF2</i>; gena este pe brațul lung, la 22q12.2.</p>
<figure><img src="fig/loc_c07_nf1.svg" alt="Gena NF1"><figcaption><b>Gena NF1 la 17q11.2.</b> Mare (~283 kb în GRCh38), cu 58 de exoni în transcriptul RefSeq Select (cursul dă 59, după altă numerotare). Mărimea ei explică rata mare de mutații <i>de novo</i> (~50% din cazuri) și de ce secvențierea e scumpă și lentă.</figcaption></figure>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Neurofibromina ca frână a semnalizării RAS">
<defs><marker id="n1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="30" y="60" width="150" height="56" rx="28" class="fok"/><text x="105" y="84" text-anchor="middle" fill="#fff" style="font-weight:800">RAS-GTP</text><text x="105" y="102" text-anchor="middle" fill="#fff" style="font-size:11px">activ</text>
<rect x="30" y="160" width="150" height="56" rx="28" class="fline"/><text x="105" y="184" text-anchor="middle" class="ti b">RAS-GDP</text><text x="105" y="202" text-anchor="middle" class="tm" style="font-size:11px">inactiv</text>
<path d="M90 118 V156" class="si" stroke-width="2" marker-end="url(#n1)"/>
<rect x="210" y="120" width="140" height="36" rx="18" class="fP"/><text x="280" y="143" text-anchor="middle" fill="#fff" style="font-weight:800">neurofibromina</text>
<path d="M210 138 H96" class="sP" stroke-width="2" stroke-dasharray="4 3"/>
<path d="M180 88 H420" class="sok" stroke-width="2.5" marker-end="url(#n1)"/><text x="300" y="80" text-anchor="middle" class="tok b">semnal de proliferare</text>
<rect x="430" y="64" width="150" height="48" rx="12" class="fcard si"/><text x="505" y="93" text-anchor="middle" class="ti b">diviziune celulară</text>
<rect x="420" y="150" width="320" height="70" rx="12" class="fws sw" stroke-width="1.2"/>
<text x="580" y="176" text-anchor="middle" class="tw2 b">fără neurofibromină funcțională</text>
<text x="580" y="196" text-anchor="middle" class="ti">RAS rămâne activ → proliferare → neurofibroame</text>
<text x="580" y="212" text-anchor="middle" class="tm">(în tumori: pierderea completă, ambele alele)</text>
<text x="380" y="30" text-anchor="middle" class="ti">Neurofibromina accelerează hidroliza GTP pe RAS: este o <tspan class="b">genă supresoare tumorală</tspan>.</text>
</svg>
<figcaption><b>Ce face neurofibromina.</b> Cursul o descrie ca produs al unei gene supresoare a creșterii tumorale, pierdută complet în formele cu tumori. Mecanismul RAS-GAP este din Emery. Schemă proprie.</figcaption>
</figure>
<h3>Tablou clinic</h3>
[[gal:nf1|<b>Semnele NF1 pe un singur desen</b>: pete café-au-lait, pistrui axilari, neurofibroame cutanate și plexiforme, noduli Lisch, gliom optic, anomalii osoase.;;cafe|<b>Pată café-au-lait</b> pe abdomen: macula uniform pigmentată, cu margini nete.;;lisch|<b>Noduli Lisch</b>: hamartoame pigmentate ale irisului, asimptomatice, dependente de vârstă (70% la 10 ani), vizibile la lampa cu fantă.]]
<div class="tw"><table>
<tr><th>Caracteristice</th><th>Ocazionale</th></tr>
<tr><td><b>Cutanate</b>: pete café-au-lait (rotunde, ovale, respectă scalpul, palmele, plantele); pistrui (90% la 7 ani)<br><b>Tumori</b>: neurofibroame multiple<br><b>Altele</b>: noduli Lisch (70% la 10 ani), macrocefalie, hipostatură, rar retard</td><td><b>SNC</b>: gliom optic, astrocitoame, meningioame; convulsii, anomalii EEG (20%), tulburări de vorbire (50%), ADHD (35%)<br><b>Schelet</b>: scolioză, cifoză (20%), pseudartroza congenitală a tibiei, displazia aripii sfenoidului, pectus excavatum<br><b>Hamartoame</b>: nevi, lipoame, angioame<br>glaucom, HTA, pubertate precoce sau tardivă</td></tr>
</table></div>
<p>Riscul de <b>tumori maligne ale sistemului nervos</b> este de 8–12% (neurofibrosarcoame, neuroblastoame, ependimoame), plus feocromocitoame, tumori carcinoide duodenale, rabdomiosarcoame, tumori Wilms, leucemii: monitorizare clinică, oftalmologică, neurologică și imagistică anuală.</p>
<h3>Criteriile de diagnostic: cel puțin 2 din 7</h3>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Criteriile de diagnostic NF1">
${[["≥6 pete café-au-lait", ">0,5 cm prepubertar · >1,5 cm postpubertar"], ["≥2 neurofibroame", "sau 1 neurofibrom plexiform"], ["Pistrui axilari / inghinali", "semnul Crowe"], ["Gliom optic", ""], ["≥2 noduli Lisch", "lampa cu fantă"], ["Leziune osoasă distinctă", "displazie sfenoidală, pseudartroză"], ["Rudă de gradul I afectată", "părinte, frate, copil"]].map(([t, d], i) => {
  const x = 20 + (i % 4) * 182, y = 20 + Math.floor(i / 4) * 116;
  return `<rect x="${x}" y="${y}" width="170" height="100" rx="12" class="fcard si" stroke-width="1.2"/><circle cx="${x + 24}" cy="${y + 24}" r="13" class="fP"/><text x="${x + 24}" y="${y + 29}" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:13px">${i + 1}</text><text x="${x + 85}" y="${y + 60}" text-anchor="middle" class="ti b" style="font-size:12.5px">${t}</text><text x="${x + 85}" y="${y + 80}" text-anchor="middle" class="tm" style="font-size:10.5px">${d}</text>`;
}).join("")}
<rect x="566" y="136" width="170" height="100" rx="12" class="fas"/><text x="651" y="178" text-anchor="middle" class="ta b" style="font-size:15px">≥ 2 criterii</text><text x="651" y="200" text-anchor="middle" class="ta b" style="font-size:15px">= NF1</text>
</svg>
<figcaption><b>Criteriile clinice din curs</b> (p. 138).</figcaption>
</figure>
<p><b>Genetic:</b> FISH sau MLPA pentru microdeleții; secvențierea genei nu se face de rutină (genă mare, multe mutații posibile, cost și durată), ci mai ales când există rude deja testate; diagnostic prenatal dacă mutația e cunoscută. <b>Sfat genetic:</b> 50% risc dacă un părinte e afectat; peste 50% din cazuri sunt <i>de novo</i>.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un copil are 7 pete café-au-lait de 1 cm și pistrui axilari. Îndeplinește criteriile?</summary><div>Da: două criterii (≥6 pete café-au-lait peste 0,5 cm prepubertar și pistrui axilari).</div></details>
<details class="q"><summary>Ce înseamnă „penetranță 100%, expresivitate variabilă” la NF1?</summary><div>Toți purtătorii adulți au semne de boală, dar gravitatea diferă foarte mult, chiar în aceeași familie: unii au doar pete, alții tumori severe.</div></details>
</div>`
},
{
id: "marfan", titlu: "Sindromul Marfan", pag: "139–143", emery: "cap. 19, p. 290–291", acopera: ["c07-r03", "c07-r04"],
html: `
<p>Boală AD a țesutului conjunctiv, cu variabilitate clinică mare. Incidență <b>1/5.000–1/10.000</b>, ambele sexe egal afectate. În <b>65–90%</b> din cazuri: mutații în gena <b>fibrilinei 1</b> (<i>FBN1</i>, 15q21.1, 66 de exoni), esențială pentru fibrele elastice; ocazional în <i>TGFBR1</i>/<i>TGFBR2</i>. Peste 250 de mutații descrise; în formele clasice sunt <b>missense</b>, cu scăderea sintezei fibrilinei sub 35%.</p>
<figure><img src="fig/loc_c07_marfan.svg" alt="Gena FBN1"><figcaption><b>Gena FBN1</b> la 15q21.1: 66 de exoni pe ~230 kb.</figcaption></figure>
<p>Fibrele elastice sunt abundente în <b>aortă</b>, <b>ligamente</b> și <b>zona ciliară a ochiului</b>: de aceea acestea sunt cele trei sisteme lovite.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Cele trei sisteme afectate în sindromul Marfan">
<rect x="20" y="20" width="230" height="290" rx="14" class="fis sin" stroke-width="1.2"/>
<text x="135" y="48" text-anchor="middle" class="tin b" style="font-size:15px">SCHELET</text>
<g transform="translate(135 150)"><circle cx="0" cy="-70" r="14" class="fcard si" stroke-width="1.5"/><line x1="0" y1="-56" x2="0" y2="20" class="si" stroke-width="3"/><line x1="0" y1="-44" x2="-62" y2="2" class="si" stroke-width="2.5"/><line x1="0" y1="-44" x2="62" y2="2" class="si" stroke-width="2.5"/><line x1="0" y1="20" x2="-18" y2="90" class="si" stroke-width="2.8"/><line x1="0" y1="20" x2="18" y2="90" class="si" stroke-width="2.8"/></g>
<text x="135" y="262" text-anchor="middle" class="ti" style="font-size:12px">talie înaltă, membre lungi</text><text x="135" y="278" text-anchor="middle" class="ti" style="font-size:12px">arahnodactilie, pectus</text><text x="135" y="294" text-anchor="middle" class="ti" style="font-size:12px">cifoscolioză, hiperlaxitate</text>
<rect x="265" y="20" width="230" height="290" rx="14" class="fws sw" stroke-width="1.2"/>
<text x="380" y="48" text-anchor="middle" class="tw2 b" style="font-size:15px">CARDIOVASCULAR · 90%</text>
<path d="M380 250 V170 C380 120 330 110 330 80 C330 60 360 56 380 70" fill="none" class="sA" stroke-width="14" stroke-linecap="round"/>
<ellipse cx="380" cy="190" rx="22" ry="34" class="fA" opacity=".55"/>
<text x="420" y="194" class="tw2 b" style="font-size:12px">dilatarea</text><text x="420" y="208" class="tw2 b" style="font-size:12px">rădăcinii</text>
<text x="380" y="278" text-anchor="middle" class="ti" style="font-size:12px">anevrism, disecție de aortă</text><text x="380" y="294" text-anchor="middle" class="ti" style="font-size:12px">PVM, aritmii · decid prognosticul</text>
<rect x="510" y="20" width="230" height="290" rx="14" class="fas" stroke-width="1.2"/>
<text x="625" y="48" text-anchor="middle" class="ta b" style="font-size:15px">OCULAR</text>
<ellipse cx="625" cy="150" rx="70" ry="54" class="fcard si" stroke-width="1.5"/><circle cx="625" cy="150" r="30" class="fP" opacity=".35"/><ellipse cx="642" cy="124" rx="22" ry="14" class="fcard si" stroke-width="2"/>
<text x="625" y="230" text-anchor="middle" class="tm" style="font-size:11px">cristalin deplasat în sus</text>
<text x="625" y="278" text-anchor="middle" class="ti" style="font-size:12px">ectopie / subluxație de cristalin</text><text x="625" y="294" text-anchor="middle" class="ti" style="font-size:12px">miopie, glaucom, cataractă</text>
</svg>
<figcaption><b>Triada sistemelor din sindromul Marfan.</b> Nu toți pacienții le au pe toate (expresivitate variabilă). Mai rar: pneumotorax spontan, ectazie durală, vergeturi, hernii. Schemă proprie după curs (p. 140).</figcaption>
</figure>
[[gal:steinberg|<b>Semnul policelui (Steinberg) și al încheieturii (Walker–Murdoch)</b>: policele depășește marginea palmei; policele și degetul mic se suprapun în jurul încheieturii.;;ectopie|<b>Ectopia cristalinului</b>: cristalinul deplasat superior, prin slăbirea fibrelor zonulare bogate în fibrilină.;;marfan_police|<b>Semnul policelui</b>, schematic.]]
<h3>Criteriile Ghent (Tabelul XXIII)</h3>
<div class="tw"><table>
<tr><th>Sistem</th><th>Criterii majore</th><th>Criterii minore / implicare</th></tr>
<tr><td><b>Scheletic</b></td><td>pectus carinatum; pectus excavatum care necesită operație; raport segment superior/inferior &lt;0,85; anvergură/înălțime &gt;1,05; semnul policelui și al pumnului; scolioză &gt;20°; picior plat; protruzie acetabulară</td><td>pectus excavatum moderat; laxitate articulară; palat înalt, îngust, anomalii dentare; dolicocefalie, hipoplazie malară, enoftalmie, retrognație</td></tr>
<tr><td><b>Ocular</b></td><td>subluxația, ectopia de cristalin</td><td>cornee plată; hipoplazie iriană; glob ocular alungit (miopie)</td></tr>
<tr><td><b>Cardiovascular</b></td><td>dilatația aortei ascendente; disecția aortei ascendente</td><td>PVM; anevrism / disecție de aortă descendentă; dilatația arterelor pulmonare</td></tr>
<tr><td><b>Pulmonar</b></td><td>—</td><td>pneumotorax, pneumatocele apicale</td></tr>
<tr><td><b>Cutanat</b></td><td>—</td><td>striuri atrofice; hernii recurente</td></tr>
<tr><td><b>Dural</b></td><td>ectazie durală lombosacrată</td><td>—</td></tr>
<tr><td><b>Familial</b></td><td>rudă cu diagnostic de Marfan; mutație <i>FBN1</i></td><td>—</td></tr>
</table></div>
<div class="cheie"><b>Regula de diagnostic din curs</b><p>La pacient: criterii <b>majore în cel puțin 2 sisteme</b> + implicarea unui <b>al treilea</b>. La membrii unei familii cu caz cunoscut: <b>un criteriu major</b> + anamneză pozitivă. Fără istoric familial, <b>anevrismul rădăcinii aortei + ectopia cristalinului</b> sunt suficiente. Ecocardiografia este esențială.</p></div>
<div class="emery"><b>O nepotrivire de ediție</b><p>Cursul spune că folosește criteriile Ghent „revizuite în 2010”, dar tabelul reproduce structura criteriilor din 1996 (majore/minore pe sisteme). Revizia din 2010 (Loeys et al.) pune accentul pe dilatarea rădăcinii aortei (scor Z ≥ 2) și ectopia cristalinului, plus un „scor sistemic”. Pentru examen, tabelul din curs este referința.</p></div>
<p><b>Sfat genetic:</b> 50% risc pentru descendenți; în 75% din cazuri un părinte este afectat, în 25% mutație <i>de novo</i>; părinți sănătoși cu mai mulți copii afectați sugerează mozaicism germinal. <b>Tratament:</b> evaluare cardiologică periodică, <b>β-blocante</b> și <b>blocanți ai receptorului de angiotensină II</b> (încetinesc dilatarea aortei, și la copii), chirurgie cardiovasculară.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce ochiul, aorta și ligamentele sunt organele-țintă în Marfan?</summary><div>Sunt cele mai bogate în fibre elastice, iar fibrilina 1 este componenta esențială a microfibrilelor acestora.</div></details>
<details class="q"><summary>Pacient fără istoric familial, cu ectopie de cristalin și dilatarea aortei ascendente. Diagnostic?</summary><div>Sindrom Marfan: cursul precizează că, în absența istoricului familial, anevrismul rădăcinii aortei și ectopia cristalinului sunt suficiente.</div></details>
</div>`
},
{
id: "acondroplazie", titlu: "Acondroplazia", pag: "143–145", emery: "cap. 19, p. 292 (Tabelul 19.3)", acopera: ["c07-r05"],
html: `
<p>Cauza principală a <b>nanismului dizarmonic</b> (oprirea creșterii oaselor lungi încă intrauterin). Incidență <b>1/15.000–1/25.000</b>, ambele sexe, toate rasele.</p>
<figure><img src="fig/loc_c07_fgfr3.svg" alt="Gena FGFR3"><figcaption><b>Gena FGFR3</b> la 4p16.3 (18 exoni).</figcaption></figure>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="FGFR3 activat constitutiv">
${(() => {
  const rec = (x, act, lab, cls) => `<rect x="${x}" y="70" width="18" height="60" rx="6" class="fG"/><rect x="${x + 24}" y="70" width="18" height="60" rx="6" class="fG"/><rect x="${x - 2}" y="130" width="22" height="20" class="fT"/><rect x="${x + 22}" y="130" width="22" height="20" class="fT"/><rect x="${x}" y="150" width="18" height="44" rx="6" class="${act ? "fA" : "fline"}"/><rect x="${x + 24}" y="150" width="18" height="44" rx="6" class="${act ? "fA" : "fline"}"/><text x="${x + 21}" y="230" text-anchor="middle" class="${cls} b">${lab}</text>`;
  let s = `<rect x="20" y="128" width="720" height="24" class="fline" opacity=".7"/><text x="30" y="122" class="tm">membrana condrocitului</text>`;
  s += rec(90, false, "fără ligand: inactiv", "tm") + `<circle cx="300" cy="50" r="10" class="fP"/><circle cx="324" cy="50" r="10" class="fP"/>` + rec(290, true, "cu FGF: activ (normal)", "tin") + rec(520, true, "G380R: activ ȘI fără ligand", "tw2");
  s += `<text x="560" y="64" text-anchor="middle" class="tw2 b">⚡ mutația din domeniul transmembranar</text>`;
  s += `<rect x="20" y="246" width="720" height="34" rx="8" class="fas"/><text x="380" y="268" text-anchor="middle" class="ti">FGFR3 FRÂNEAZĂ proliferarea condrocitelor din cartilajul de creștere; activ în permanență = frână trasă = oase lungi scurte.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Mutație cu câștig de funcție.</b> FGFR3 inhibă normal creșterea osoasă. Mutația <b>G380R</b> (nucleotidul 1138) îl ține activ. Albastru = domeniul extracelular, portocaliu = transmembranar, roșu = kinaza activă. Schemă proprie după curs (p. 144). Emery adaugă că pierderea funcției FGFR3 nu dă displazie scheletică (deleția 4p din Wolf–Hirschhorn include FGFR3, fără anomalii osoase).</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Fapt genetic</th><th>Valoare din curs</th></tr>
<tr><td>Mutații <i>de novo</i></td><td><b>80–90%</b>, în spermatogeneză, asociate cu vârsta paternă &gt;35 de ani</td></tr>
<tr><td>Mutația</td><td><b>98%</b>: G380R la nucleotidul 1138 (97% c.1138G&gt;A, 1% c.1138G&gt;C)</td></tr>
<tr><td>Homozigoți</td><td>decedează înainte sau imediat după naștere</td></tr>
<tr><td>Înălțime adultă medie</td><td><b>131 cm</b> la bărbați, <b>123 cm</b> la femei</td></tr>
</table></div>
<p><b>Tablou:</b> nanism sever disproporționat (oase lungi scurte, simetric: rizomelie), trunchi normal, macrocefalie relativă cu frunte înaltă și etaj mijlociu hipoplazic, intelect normal, limitarea extensiei cotului, genu varum, hiperlordoză, hipotonie și laxitate în prima copilărie.</p>
<p><b>Prenatal</b> (din trimestrul II): discordanța între lungimea femurului și diametrul biparietal, exces de lichid amniotic, uneori „mâna în trident”; testare moleculară <i>FGFR3</i>. <b>Sfat genetic:</b> 50% dacă un părinte e afectat; doi părinți afectați: 25% risc de homozigot, de obicei letal. Hormonul de creștere este controversat.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Riscurile când ambii părinți au acondroplazie">
${[["A/A", "homozigot · letal", "fA", "25%"], ["A/a", "acondroplazie", "fC", "50%"], ["a/a", "înălțime normală", "fok", "25%"]].map(([g, t, c, p], i) => `<rect x="${110 + i * 190}" y="40" width="160" height="120" rx="12" class="${c}" opacity=".9"/><text x="${190 + i * 190}" y="84" text-anchor="middle" fill="#fff" style="font-size:24px;font-weight:800">${g}</text><text x="${190 + i * 190}" y="110" text-anchor="middle" fill="#fff" style="font-weight:700">${t}</text><text x="${190 + i * 190}" y="140" text-anchor="middle" fill="#fff" style="font-size:20px;font-weight:800">${p}</text>`).join("")}
<text x="380" y="24" text-anchor="middle" class="ti b">Ambii părinți cu acondroplazie (A/a × A/a)</text>
<text x="380" y="190" text-anchor="middle" class="tm">Dintre copiii născuți vii, 2/3 au acondroplazie și 1/3 înălțime normală.</text>
</svg>
<figcaption><b>Cazul special al cuplului cu ambii parteneri afectați.</b> Schemă proprie după curs (p. 145).</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce 80–90% din cazurile de acondroplazie au părinți de înălțime normală?</summary><div>Sunt mutații de novo, apărute în spermatogeneza tatălui, a căror frecvență crește cu vârsta paternă.</div></details>
<details class="q"><summary>De ce acondroplazia este un exemplu de câștig de funcție, nu de pierdere?</summary><div>Receptorul mutant este activ și fără ligand, deci frânează excesiv creșterea condrocitelor. Pierderea funcției FGFR3 nu produce nanism.</div></details>
</div>`
},
{
id: "adpkd", titlu: "Boala polichistică renală autozomal dominantă (ADPKD)", pag: "145–147", emery: "cap. 19 / boli renale", acopera: ["c07-r06"],
html: `
<p>Boală multisistemică progresivă, cu chisturi renale bilaterale și în alte organe (ficat, pancreas, splină). Una dintre cele mai frecvente boli ereditare: <b>1/400–1/1.000</b>. Aproximativ <b>50%</b> din pacienți ajung la insuficiență renală terminală în jurul vârstei de <b>60 de ani</b>.</p>
<figure><img src="fig/loc_c07_pkd.svg" alt="Genele PKD1 și PKD2"><figcaption><b>PKD1 (16p13.3, 46 de exoni) și PKD2 (4q22.1, 15 exoni).</b> PKD1 explică ~85% din cazuri, PKD2 ~15%.</figcaption></figure>
<div class="capcana"><b>Localizare greșită în curs</b><p>Cursul plasează <i>PKD2</i> „pe brațul lung al cromozomului 16”. Gena <i>PKD2</i> este pe <b>cromozomul 4</b>, la 4q22.1 (UCSC GRCh38). <i>PKD1</i> este corect plasată pe 16p.</p></div>
<p>Genele codifică <b>policistinele 1 și 2</b>, care formează un complex funcțional implicat în intrarea Ca²⁺ în celulă, la joncțiunile celulă–celulă și celulă–matrice.</p>
[[gal:adpkd|<b>Rinichiul în ADPKD</b>, schematic: chisturi multiple de mărimi diferite, rinichi mult mărit.;;rinichi_pk|<b>Rinichi polichistic al adultului</b>, piesă de necropsie: parenchimul este aproape complet înlocuit de chisturi.]]
<div class="tw"><table>
<tr><th>Renal</th><th>Extrarenal</th></tr>
<tr><td>durere în flanc, lombară sau abdominală; nefrolitiază, colici, infecții sau hemoragii intrachistice; <b>hematuria</b> (frecvent primul semn); evoluție spre insuficiență renală</td><td><b>HTA</b> (50–75%, una dintre cele mai precoce manifestări); chisturi hepatice, pancreatice, ovariene; PVM; anevrism de aortă toracică; <b>anevrisme cerebrale</b> (20–30%); hepatomegalie nodulară</td></tr>
</table></div>
<p>Debut de obicei la <b>30–40 de ani</b> (de la viața intrauterină până la 60–70 de ani).</p>
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Criteriile ecografice Ravine">
${[["< 30 ani", "≥ 2 chisturi", "într-un rinichi, sau 1 chist în fiecare rinichi", 2, 1], ["30–59 ani", "≥ 2 chisturi", "în FIECARE rinichi", 2, 2], ["≥ 60 ani", "≥ 4 chisturi", "în FIECARE rinichi", 4, 4]].map(([a, n, d, l, r], i) => {
  const x = 20 + i * 246;
  const k = (cx, m) => `<ellipse cx="${cx}" cy="96" rx="26" ry="40" class="fcard si" stroke-width="1.5"/>` + Array.from({ length: m }, (_, j) => `<circle cx="${cx - 8 + (j % 2) * 16}" cy="${78 + Math.floor(j / 2) * 22}" r="7" class="fC"/>`).join("");
  return `<rect x="${x}" y="10" width="230" height="180" rx="12" class="fis sin" stroke-width="1"/><text x="${x + 115}" y="34" text-anchor="middle" class="tin b">${a}</text>` + k(x + 80, l) + k(x + 150, r) + `<text x="${x + 115}" y="160" text-anchor="middle" class="ti b">${n}</text><text x="${x + 115}" y="178" text-anchor="middle" class="tm" style="font-size:11px">${d}</text>`;
}).join("")}
</svg>
<figcaption><b>Criteriile ecografice Ravine (1994)</b>, adaptate după vârstă pentru a reduce rezultatele fals pozitive și fals negative (curs, p. 147). Pragul crește cu vârsta pentru că și chisturile simple devin mai frecvente.</figcaption>
</figure>
<p><b>Diagnostic genetic:</b> secvențierea <i>PKD1</i>/<i>PKD2</i> detectează mutația în 50–70%; prenatal, dacă mutația familiei e cunoscută. <b>Tratament:</b> conservarea funcției renale (antihipertensive IEC/ARB, antiproteinurice, antiinfecțioase), tratamentul litiazei, drenajul chisturilor mari sau suprainfectate, nefrectomie, dializă, transplant.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un bărbat de 25 de ani, cu tatăl cu ADPKD, are un singur chist în rinichiul stâng. Îndeplinește criteriile Ravine?</summary><div>Nu: sub 30 de ani sunt necesare cel puțin 2 chisturi într-un rinichi sau câte un chist în fiecare rinichi.</div></details>
<details class="q"><summary>Ce complicație extrarenală impune atenție la un pacient cu ADPKD și cefalee bruscă?</summary><div>Ruperea unui anevrism cerebral (prezent la 20–30% din bolnavi).</div></details>
</div>`
},
{
id: "fh", titlu: "Hipercolesterolemia familială", pag: "147–150", emery: "cap. 18, p. 270–272", acopera: ["c07-r07"],
html: `
<p>Hiperlipoproteinemia tip II: AD, cu colesterol plasmatic crescut, mai ales <b>LDL</b>. Heterozigoți <b>1/500</b>; homozigoți foarte rari, <b>1/160.000–1/1.000.000</b>. Peste 1.600 de mutații descrise.</p>
<figure><img src="fig/loc_c07_fh.svg" alt="Genele LDLR, APOB, PCSK9"><figcaption><b>Cele trei gene ale hipercolesterolemiei familiale AD</b>, din datele genomului: <i>LDLR</i> la 19p13.2 (18 exoni, ~44 kb), <i>APOB</i> la 2p24.1 (29 de exoni; exonul 26 este cel mare), <i>PCSK9</i> la 1p32.3 (12 exoni).</figcaption></figure>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Ciclul receptorului LDL și cele trei defecte">
<defs><marker id="h1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<path d="M20 110 Q380 90 740 110" fill="none" class="sm" stroke-width="10" opacity=".35"/>
<text x="30" y="40" class="ti b">sânge</text><text x="30" y="150" class="ti b">hepatocit</text>
${[120, 330, 560].map((x, i) => `<path d="M${x} 104 v-26 M${x - 10} 78 h20" class="sG" stroke-width="5"/>`).join("")}
<circle cx="120" cy="58" r="16" class="fC"/><text x="120" y="63" text-anchor="middle" fill="#1f2a37" style="font-size:10px;font-weight:800">LDL</text><circle cx="132" cy="70" r="4" class="fP"/>
<text x="120" y="22" text-anchor="middle" class="tm" style="font-size:11px">apoB-100 = ligandul</text>
<path d="M120 120 C120 170 180 200 240 200" fill="none" class="si" stroke-width="1.6" marker-end="url(#h1)"/>
<circle cx="270" cy="210" r="28" class="fcard si" stroke-width="1.4"/><text x="270" y="214" text-anchor="middle" class="tm" style="font-size:11px">endozom</text>
<path d="M298 210 H380" class="si" stroke-width="1.6" marker-end="url(#h1)"/><text x="440" y="214" text-anchor="middle" class="ti b" style="font-size:12px">colesterol în celulă</text><text x="440" y="232" text-anchor="middle" class="tm" style="font-size:11px">↓ sinteza proprie (HMG-CoA red.)</text>
<path d="M270 182 C270 150 330 140 330 118" fill="none" class="sok" stroke-width="1.6" marker-end="url(#h1)"/><text x="296" y="150" class="tok" style="font-size:11px">receptorul se reciclează</text>
<circle cx="560" cy="58" r="12" class="fP"/><text x="560" y="62" text-anchor="middle" fill="#fff" style="font-size:9px;font-weight:800">PCSK9</text>
<path d="M560 120 C560 170 620 210 660 230" fill="none" class="sw" stroke-width="1.6" marker-end="url(#h1)"/><text x="660" y="252" text-anchor="middle" class="tw2 b" style="font-size:12px">lizozom: receptor distrus</text>
<rect x="20" y="268" width="230" height="56" rx="10" class="fws"/><text x="135" y="290" text-anchor="middle" class="tw2 b">LDLR (cea mai frecventă)</text><text x="135" y="308" text-anchor="middle" class="ti" style="font-size:11.5px">receptor absent sau nefuncțional</text>
<rect x="265" y="268" width="230" height="56" rx="10" class="fws"/><text x="380" y="290" text-anchor="middle" class="tw2 b">APOB R3500W (~5,5%)</text><text x="380" y="308" text-anchor="middle" class="ti" style="font-size:11.5px">ligand care nu se mai leagă</text>
<rect x="510" y="268" width="230" height="56" rx="10" class="fws"/><text x="625" y="290" text-anchor="middle" class="tw2 b">PCSK9 câștig de funcție</text><text x="625" y="308" text-anchor="middle" class="ti" style="font-size:11.5px">distruge prea mulți receptori</text>
</svg>
<figcaption><b>Trei gene, același rezultat: LDL rămâne în sânge.</b> Receptorul LDL leagă apoB-100 de pe particula LDL, o internalizează și se reciclează la suprafață; PCSK9 îl trimite spre degradare. Schemă proprie după curs (p. 148–149) și Emery (cap. 18).</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Genă</th><th>Frecvență</th><th>Mecanism</th></tr>
<tr><td><b>LDLR</b> (19p13.1–13.3 în curs; 18 exoni, 45 kb)</td><td>prevalență 1/500</td><td>pierdere de funcție; heterozigoți LDL de <b>2–3×</b>, homozigoți <b>6–8×</b> valoarea normală</td></tr>
<tr><td><b>APOB</b> (2p24.1, 29 exoni)</td><td>~5,5% din FH; prevalență 1/1.000</td><td>p.Arg3500Trp în exonul 26: ligand defect (FDB), penetranță completă</td></tr>
<tr><td><b>PCSK9</b> (1p32.3, 12 exoni)</td><td>1,5–3% din FH (HCHOLA3)</td><td>câștig de funcție (ex. c.1120G&gt;T, Asp374Tyr): afinitate crescută pentru LDLR, mai puțini receptori. Mutațiile cu pierdere de funcție <b>scad</b> LDL.</td></tr>
<tr><td><b>LDLRAP1</b></td><td>&lt;1/5.000.000 (Sardinia 1/40.000)</td><td>formă <b>autozomal recesivă</b>, răspuns bun la terapie</td></tr>
</table></div>
[[gal:xantelasma|<b>Xantelasme palpebrale</b>: depuneri de colesterol în pleoape.;;ldlr|<b>Structura receptorilor din familia LDL</b>: modulele de legare a ligandului, domeniul asemănător EGF, segmentul transmembranar și coada citoplasmatică.]]
<p><b>Tablou:</b> <b>xantoame tendinoase</b> (mai ales tendonul ahilian), <b>xantelasme</b>, <b>arc cornean</b>, ateroscleroză precoce (boală coronariană, infarct, arteriopatie, AIT) sub 40 de ani. <b>Laborator:</b> colesterol total 350–550 mg/dL la heterozigoți, 650–1.000 mg/dL la homozigoți; LDL mult crescut, HDL și trigliceride normale. Peste 85% din pacienți nu sunt diagnosticați: <b>screening activ</b> în familiile cu decese cardiace la tineri. <b>Tratament:</b> dietă, efort, statine, inhibitori ai absorbției intestinale a colesterolului.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce o mutație cu pierdere de funcție în PCSK9 protejează cardiovascular?</summary><div>PCSK9 trimite receptorii LDL la degradare. Fără PCSK9 funcțional rămân mai mulți receptori pe hepatocit, care extrag mai mult LDL din sânge.</div></details>
<details class="q"><summary>Un copil de 8 ani are xantoame și colesterol total de 800 mg/dL. Ce genotip suspectezi?</summary><div>Homozigot (sau heterozigot compus) pentru FH: valorile de 650–1.000 mg/dL și debutul în copilărie sunt caracteristice homozigoților.</div></details>
</div>`
}
]
});
})();
