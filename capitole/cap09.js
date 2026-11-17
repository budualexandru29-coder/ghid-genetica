/* Capitolul 9 — Boli monogenice cu transmitere dominantă legată de X (curs p. 171–178) */
(function () {
const P = GHID.ped;
// două arbori: tată afectat / mamă afectată
const arbori = () => {
  let s = "";
  // stânga: tată afectat
  s += `<text x="185" y="20" text-anchor="middle" class="ti b">Tatăl afectat</text>`;
  s += P.ind(140, 60, "m", "a", "I-1") + P.ind(230, 60, "f", "n", "I-2") + P.cuplu(140, 230, 60);
  s += P.copii(185, 60, [80, 140, 230, 290], 150);
  s += P.ind(80, 150, "f", "a") + P.ind(140, 150, "m", "n") + P.ind(230, 150, "f", "a") + P.ind(290, 150, "m", "n");
  s += `<text x="185" y="200" text-anchor="middle" class="ti">toate fiicele afectate · niciun fiu</text><text x="185" y="218" text-anchor="middle" class="tm" style="font-size:11px">tatăl dă X fiicelor și Y fiilor</text>`;
  // dreapta: mamă afectată
  s += `<text x="555" y="20" text-anchor="middle" class="ti b">Mama afectată (heterozigotă)</text>`;
  s += P.ind(510, 60, "m", "n", "I-1") + P.ind(600, 60, "f", "a", "I-2") + P.cuplu(510, 600, 60);
  s += P.copii(555, 60, [450, 510, 600, 660], 150);
  s += P.ind(450, 150, "f", "a") + P.ind(510, 150, "m", "a") + P.ind(600, 150, "f", "n") + P.ind(660, 150, "m", "n");
  s += `<text x="555" y="200" text-anchor="middle" class="ti">50% din fete, 50% din băieți</text><text x="555" y="218" text-anchor="middle" class="tm" style="font-size:11px">ca la autozomal dominant</text>`;
  s += `<line x1="370" y1="10" x2="370" y2="226" class="sm" stroke-dasharray="4 4"/>`;
  return s;
};

GHID.capitol({
id: "c09",
intro: `<p class="lead">Gena este pe cromozomul X, iar o singură copie mutantă ajunge pentru boală. Femeile (XX) pot fi heterozigote și au de obicei forme mai ușoare, datorită inactivării X (capitolul 4); bărbații (XY) sunt hemizigoți și au forme mai grave, uneori letale intrauterin.</p>
<figure>
<svg viewBox="0 0 740 240" role="img" aria-label="Arbori genealogici dominanți legați de X">
${arbori()}
</svg>
<figcaption><b>Regula care deosebește X-dominantul de autozomal dominant:</b> <b>nu există transmitere tată → fiu</b>, iar un tată afectat are <b>toate</b> fiicele afectate. Bolile sunt de ~2× mai frecvente la femei.</figcaption>
</figure>
[[gal:xld_tata|<b>Tată afectat:</b> X-ul mutant ajunge la toate fiicele, Y-ul la toți fiii.;;xld_mama|<b>Mamă afectată:</b> fiecare copil, indiferent de sex, are 50% risc.]]
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Trei boli dominante legate de X și efectul la bărbați">
${[["Rahitism hipofosfatemic", "PHEX · Xp22.11", "bărbați afectați mai sever, viabili", "fG"], ["Incontinentia pigmenti", "IKBKG (NEMO) · Xq28", "letală la fătul masculin → avort", "fA"], ["Sindromul Rett", "MECP2 · Xq28", "letal / encefalopatie severă la băieți", "fP"]].map(([b, g, m, c], i) => `<rect x="${20 + i * 246}" y="16" width="230" height="168" rx="14" class="fcard si" stroke-width="1"/><rect x="${20 + i * 246}" y="16" width="230" height="44" rx="14" class="${c}"/><text x="${135 + i * 246}" y="44" text-anchor="middle" fill="#fff" style="font-weight:800">${b}</text><text x="${135 + i * 246}" y="92" text-anchor="middle" class="ti b">${g}</text><text x="${135 + i * 246}" y="130" text-anchor="middle" class="tm">la bărbați:</text><text x="${135 + i * 246}" y="152" text-anchor="middle" class="tw2 b" style="font-size:12px">${m}</text>`).join("")}
</svg>
<figcaption><b>Cele trei boli ale capitolului</b> și ce se întâmplă cu hemizigoții de sex masculin.</figcaption>
</figure>
<figure><img src="fig/loc_c09_xld.svg" alt="Genele PHEX, IKBKG și MECP2 pe cromozomul X"><figcaption><b>Cele trei gene pe cromozomul X</b> (UCSC GRCh38): <i>PHEX</i> la Xp22.11 (22 de exoni), <i>IKBKG</i> și <i>MECP2</i> la Xq28, la ~0,5 Mb una de alta.</figcaption></figure>`,
sectiuni: [
{
id: "rahitism", titlu: "Rahitismul familial hipofosfatemic rezistent la vitamina D", pag: "171–172", emery: "cap. 6 (exemplu de transmitere X-dominantă)", acopera: ["c09-r01"],
html: `
<p>Rahitism, nanism și <b>hipofosfatemie</b> prin pierderea renală de fosfat. Gena: <b><i>PHEX</i></b> (Xp22.11). Incidență <b>1/20.000</b>: cea mai frecventă formă de rahitism genetic. „Rezistent la vitamina D” = nu se vindecă cu dozele obișnuite de vitamina D, spre deosebire de rahitismul carențial.</p>
<figure>
<svg viewBox="0 0 760 320" role="img" aria-label="Pierderea renală de fosfat în rahitismul hipofosfatemic">
<defs><marker id="r1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="30" width="170" height="80" rx="14" class="fcard si" stroke-width="1.2"/><text x="105" y="58" text-anchor="middle" class="ti b">osteocit</text><text x="105" y="78" text-anchor="middle" class="tw2 b">PHEX mutant</text><text x="105" y="96" text-anchor="middle" class="tm" style="font-size:11px">nu mai frânează FGF23</text>
<path d="M190 70 H270" class="sA" stroke-width="2.5" marker-end="url(#r1)"/><text x="230" y="60" text-anchor="middle" class="tw2 b">FGF23 ↑</text>
<rect x="280" y="20" width="260" height="110" rx="14" class="fcard si" stroke-width="1.2"/><text x="410" y="44" text-anchor="middle" class="ti b">tubul contort proximal</text>
<text x="410" y="70" text-anchor="middle" class="ti">transportorii Na–fosfat ↓</text><text x="410" y="88" text-anchor="middle" class="tm" style="font-size:11px">(membrana apicală)</text>
<text x="410" y="112" text-anchor="middle" class="ti">1α-hidroxilaza ↓ → calcitriol „normal”</text>
<path d="M540 60 H620" class="sA" stroke-width="2.5" marker-end="url(#r1)"/><rect x="626" y="30" width="114" height="60" rx="12" class="fA"/><text x="683" y="56" text-anchor="middle" fill="#fff" style="font-weight:800">fosfaturie</text><text x="683" y="76" text-anchor="middle" fill="#fff" style="font-size:11px">fosfat seric ↓</text>
<path d="M683 92 V160" class="sA" stroke-width="2" marker-end="url(#r1)"/>
<rect x="420" y="164" width="320" height="64" rx="12" class="fws sw" stroke-width="1.2"/><text x="580" y="190" text-anchor="middle" class="tw2 b">os slab mineralizat</text><text x="580" y="210" text-anchor="middle" class="ti" style="font-size:12px">rahitism la copil, osteomalacie la adult</text>
<rect x="20" y="164" width="380" height="140" rx="12" class="fas"/>
<text x="210" y="188" text-anchor="middle" class="ta b">Profilul de laborator din curs</text>
${[["fosfat seric", "↓", "tw2"], ["fosfatază alcalină", "↑ încă neonatal", "tw2"], ["calciu seric", "normal", "tok"], ["vitamina D", "normală", "tok"], ["parathormon", "normal", "tok"]].map(([a, b, c], i) => `<text x="50" y="${214 + i * 18}" class="ti" style="font-size:12.5px">${a}</text><text x="250" y="${214 + i * 18}" class="${c} b" style="font-size:12.5px">${b}</text>`).join("")}
<text x="580" y="262" text-anchor="middle" class="tm" style="font-size:11px">Diferența față de rahitismul carențial:</text><text x="580" y="280" text-anchor="middle" class="tm" style="font-size:11px">acolo calciul scade și PTH crește.</text>
</svg>
<figcaption><b>Mecanismul.</b> Cursul îl descrie ca „defect al transportului fosfaților prin membrana apicală a celulelor tubulare”. Veriga dintre PHEX și rinichi este hormonul <b>FGF23</b> (produs de os), care crește când PHEX lipsește; aceasta este explicația actuală, adăugată aici pentru înțelegere. Schemă proprie.</figcaption>
</figure>
<h3>Tablou clinic</h3>
<p>Debut precoce: <b>regresul achizițiilor motorii</b> până la un an; retard de creștere limitat la <b>membrele inferioare</b> (hipostatură).</p>
<div class="pasi">
<div><b>Dinți</b>erupție întârziată, hipoplazia smalțului, carii</div>
<div><b>Craniu</b>craniotabes, bose frontale și parietale, fontanela anterioară larg deschisă după 1 an</div>
<div><b>Torace</b>mătănii costale, torace evazat, pectus excavatum sau carinatum; brățări rahitice</div>
<div><b>Membre inferioare</b>genu valgum sau varum, arcuire evidentă după începerea mersului</div>
<div><b>Os</b>dureri osoase, pseudofracturi, osteomalacie</div>
</div>
<p><b>Diagnostic:</b> clinic, radiologic (rahitism sever) și de laborator. <b>Tratament:</b> fosfat oral cronic + <b>calcitriol</b> (forma activă a vitaminei D3).</p>
<div class="emery"><b>Dincolo de curs</b><p>Din 2018 există și un anticorp monoclonal anti-FGF23 (burosumab), care țintește direct veriga dintre PHEX și rinichi. Cursul nu îl menționează.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un bărbat cu rahitism hipofosfatemic are 2 fii și 2 fiice. Câți copii vor fi afectați?</summary><div>Toate cele 2 fiice (primesc X-ul lui); niciunul dintre fii (primesc Y).</div></details>
<details class="q"><summary>Ce valori de laborator deosebesc această boală de rahitismul carențial?</summary><div>Aici calciul, vitamina D și PTH sunt normale, cu fosfat scăzut; în rahitismul carențial calciul tinde să scadă și PTH crește.</div></details>
</div>`
},
{
id: "ip", titlu: "Incontinentia pigmenti (sindromul Bloch–Sulzberger)", pag: "172–174", emery: "cap. 6", acopera: ["c09-r02"],
html: `
<p>Boală rară (<b>1/50.000</b>), multisistemică, cu afectare cutanată dominantă. Gena <b><i>IKBKG</i></b> (numită și <b>NEMO</b>, Xq28; 23 kb, 10 exoni). <b>Peste 80%</b> din cazuri: aceeași <b>deleție</b> în genă. Afectează aproape numai fetele: la fătul masculin boala este letală.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="NEMO și NF-kB protejează celula de apoptoză">
<defs><marker id="i1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="20" width="350" height="250" rx="14" class="fis sin" stroke-width="1"/><text x="195" y="44" text-anchor="middle" class="tin b">NEMO funcțional</text>
<rect x="390" y="20" width="350" height="250" rx="14" class="fws sw" stroke-width="1"/><text x="565" y="44" text-anchor="middle" class="tw2 b">NEMO absent (deleție)</text>
${[0, 370].map((d, i) => `<circle cx="${80 + d}" cy="90" r="18" class="fC"/><text x="${80 + d}" y="94" text-anchor="middle" fill="#1f2a37" style="font-size:10px;font-weight:800">TNF</text>
<path d="M${100 + d} 90 H${150 + d}" class="si" stroke-width="1.8" marker-end="url(#i1)"/>
<rect x="${156 + d}" y="70" width="110" height="40" rx="10" class="${i ? "fline" : "fP"}"/><text x="${211 + d}" y="95" text-anchor="middle" ${i ? 'class="tm b"' : 'fill="#fff" style="font-weight:800"'}>IKK + NEMO</text>
${i === 0 ? `<path d="M${211 + d} 112 V150" class="sok" stroke-width="2" marker-end="url(#i1)"/><rect x="${146 + d}" y="154" width="130" height="36" rx="18" class="fok"/><text x="${211 + d}" y="177" text-anchor="middle" fill="#fff" style="font-weight:800">NF-κB activ</text><text x="${195 + d}" y="222" text-anchor="middle" class="tok b">gene anti-apoptotice</text><text x="${195 + d}" y="244" text-anchor="middle" class="ti">celula supraviețuiește semnalului TNF</text>`
: `<path d="M${211 + d} 112 V150" class="sw" stroke-width="2" stroke-dasharray="4 3"/><text x="${211 + d}" y="172" text-anchor="middle" class="tw2 b">NF-κB inactiv</text><text x="${195 + d}" y="222" text-anchor="middle" class="tw2 b">apoptoză („autodistrugere celulară”)</text><text x="${195 + d}" y="244" text-anchor="middle" class="ti">inflamație, apoi pierderea celulelor</text>`}`).join("")}
</svg>
<figcaption><b>De ce celulele cu NEMO mutant mor.</b> NF-κB protejează celula de apoptoza indusă de factorul de necroză tumorală (TNF), după curs (p. 172). Schemă proprie.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Mozaicismul funcțional la femeile cu incontinentia pigmenti">
${(() => {
  let s = `<text x="20" y="24" class="ti b">Femeia heterozigotă este un mozaic: în fiecare celulă e activ fie X normal, fie X mutant</text>`;
  const W = 14, rnd = (i) => (Math.sin(i * 12.9898) * 43758.5453) % 1;
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 18 * 9; i++) {
      const x = 30 + k * 380 + (i % 18) * (W + 4), y = 40 + Math.floor(i / 18) * (W + 4);
      const mut = Math.abs(rnd(i + 7)) < 0.5;
      const cls = k === 0 ? (mut ? "fA" : "fG") : (mut ? "fline" : "fG");
      s += `<rect x="${x}" y="${y}" width="${W}" height="${W}" rx="3" class="${cls}"/>`;
    }
  }
  s += `<text x="190" y="222" text-anchor="middle" class="ti">la naștere: ~50% celule cu X mutant activ (verde)</text>`;
  s += `<text x="570" y="222" text-anchor="middle" class="ti">mai târziu: celulele verzi au murit (gri)</text>`;
  s += `<text x="570" y="240" text-anchor="middle" class="tm" style="font-size:11px">inactivare X „deviată” (skewed) în sânge</text>`;
  return s;
})()}
</svg>
<figcaption><b>Fazele cutanate și inactivarea X.</b> Celulele care folosesc X-ul mutant mor (inflamație, vezicule), iar pielea se repopulează cu celulele care folosesc X-ul normal. Leziunile urmează <b>liniile lui Blaschko</b>, traseele clonelor embrionare. Legătura cu inactivarea X este în Emery; schemă proprie.</figcaption>
</figure>
<h3>Cele patru faze cutanate</h3>
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Fazele cutanate în incontinentia pigmenti">
${[["1. Veziculo-buloasă", "primele săptămâni", "eritem, vezicule pe palme, picioare, trunchi, abdomen", "fA"], ["2. Verucoasă", "3–6 luni", "veruci hipertrofice, mai ales pe picioare", "fC"], ["3. Hiperpigmentată", "copilărie", "pete gri, maro, mov sau albăstrui", "fZ"], ["4. Hipopigmentată", "copil mare, adult", "dungi liniare pe membre", "fline"]].map(([t, v, d, c], i) => `<rect x="${20 + i * 182}" y="20" width="170" height="160" rx="12" class="fcard si" stroke-width="1"/><rect x="${32 + i * 182}" y="32" width="146" height="40" rx="8" class="${c}"/><text x="${105 + i * 182}" y="57" text-anchor="middle" ${c === "fline" ? 'class="ti b"' : 'fill="#fff" style="font-weight:800"'} style="font-size:12px">${t}</text><text x="${105 + i * 182}" y="96" text-anchor="middle" class="tin b">${v}</text>${d.match(/.{1,26}(\s|$)/g).map((l, j) => `<text x="${105 + i * 182}" y="${122 + j * 16}" text-anchor="middle" class="tm" style="font-size:11px">${l.trim()}</text>`).join("")}`).join("")}
</svg>
<figcaption><b>Leziunile se succed în timp</b>; nu toate fazele apar la fiecare pacientă. După curs (p. 173).</figcaption>
</figure>
[[gal:ip_piele|<b>Incontinentia pigmenti</b>: leziuni pigmentate dispuse liniar, de-a lungul liniilor Blaschko.;;ip_dinti|<b>Anomalii dentare</b> (radiografie panoramică): hipodonție și dinți conici, prezente în 50–90% din cazuri.]]
<div class="tw"><table>
<tr><th>Sistem</th><th>Manifestări</th></tr>
<tr><td>Ocular</td><td>ptoză, nistagmus, anomalii de vascularizație a retinei, cataractă congenitală, strabism</td></tr>
<tr><td>SNC</td><td>întârziere neuropsihomotorie, paralizii cerebrale, convulsii, microcefalie, hidrocefalie, retard mintal</td></tr>
<tr><td>Dentar, oro-maxilo-facial</td><td>erupție întârziată; anomalii dentare (50–90%), mai ales hipodonție și dinți de formă anormală; despicături labio-palatine, hipoplazie maxilară</td></tr>
<tr><td>Scheletic</td><td>spina bifida, anomalii vertebrale, sindactilie, coaste supranumerare</td></tr>
<tr><td>Altele</td><td>alopecie, distrofii unghiale, anomalii ale urechilor, insuficiență cardiopulmonară</td></tr>
</table></div>
<p><b>Diagnostic:</b> clinic; <b>biopsie cutanată</b>; laborator (<b>eozinofilie</b>, leucocitoză); CT/RMN cerebral, EEG; molecular (PCR, secvențiere: deleții, duplicații); <b>cariotip la băieții afectați</b> (suspiciune de sindrom Klinefelter, 47,XXY, care le permite să supraviețuiască).</p>
<div class="capcana"><b>IP1 și IP2</b><p>Cursul numește forma familială (<i>IKBKG</i>, Xq28) „IP2 sau clasică” și o formă sporadică „IP1” (Xp11), încadrată ca hipomelanoză Ito. Clasificarea este veche: „IP1” s-a dovedit a fi hipomelanoza Ito (adesea mozaicism cromozomial), o entitate distinctă. Astăzi incontinentia pigmenti înseamnă boala prin <i>IKBKG</i>.</p></div>
<p><b>Sfat genetic:</b> mama afectată → 50% din fete afectate; feții masculini afectați sunt avortați, deci băieții născuți vii sunt sănătoși (raportul F:M al nașterilor se modifică). Tatăl afectat (excepțional) → toate fetele afectate, toți băieții sănătoși. <b>Tratament</b> suportiv, multidisciplinar (pediatru, neurolog, oftalmolog, stomatolog).</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce o femeie cu IP are în sânge inactivare X „deviată”?</summary><div>Celulele sanguine care foloseau X-ul mutant au murit prin apoptoză; au rămas aproape doar cele cu X-ul normal activ.</div></details>
<details class="q"><summary>De ce cursul cere cariotip la un băiat cu incontinentia pigmenti?</summary><div>Un băiat XY cu mutația nu supraviețuiește; un băiat afectat viu poate fi 47,XXY (Klinefelter), cu un al doilea X normal, sau un mozaic somatic.</div></details>
</div>`
},
{
id: "rett", titlu: "Sindromul Rett", pag: "174–176", emery: "cap. 6; cap. 9 (MeCP2)", acopera: ["c09-r03"],
html: `
<p>Afecțiune neuropsihică a fetelor, descrisă de Rett în 1966: dezvoltare aparent normală, apoi <b>oprire și regres</b> motor, psihic și de limbaj. A doua cauză genetică de retard mintal la fete, după sindromul Down. Incidență 1–2 la 10.000–15.000 de fete.</p>
<div class="tw"><table>
<tr><th>Fapt genetic</th><th>Din curs</th></tr>
<tr><td>Gena</td><td><b><i>MECP2</i></b> (methyl-CpG-binding protein 2), Xq28</td></tr>
<tr><td>Origine</td><td><b>95% mutații <i>de novo</i></b> (de aceea nu există de obicei istoric familial)</td></tr>
<tr><td>Mutații</td><td>punctiforme (deleții, inserții ale unui nucleotid), mai ales în exonii 3 sau 4</td></tr>
<tr><td>Băieți</td><td>hemizigoții nu supraviețuiesc sau au encefalopatie severă; afectați „tipic” doar cei cu X suplimentar (Klinefelter) sau mozaic; aceștia au pareze spastice și retard</td></tr>
<tr><td>Fete</td><td>heterozigote manifeste; severitatea depinde de inactivarea întâmplătoare a X</td></tr>
</table></div>
<p style="font-size:14px;color:var(--muted)">Numerotarea exonilor: cursul folosește modelul cu 4 exoni; transcriptul RefSeq actual al <i>MECP2</i> (izoforma e1) are 3 exoni, iar „exonii 3–4” din curs corespund ultimilor doi exoni, unde sunt domeniile proteinei.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="MeCP2 citește metilarea ADN">
<rect x="20" y="20" width="720" height="210" rx="14" class="fcard si" stroke-width="1"/>
<path d="M60 120 H700" class="sG" stroke-width="10" stroke-linecap="round"/>
${[150, 290, 430, 570].map((x) => `<circle cx="${x}" cy="104" r="8" class="fA"/><text x="${x}" y="90" text-anchor="middle" class="tw2 b" style="font-size:10px">CH₃</text>`).join("")}
${[150, 430].map((x) => `<ellipse cx="${x}" cy="150" rx="46" ry="22" class="fP"/><text x="${x}" y="155" text-anchor="middle" fill="#fff" style="font-weight:800">MeCP2</text>`).join("")}
<text x="380" y="50" text-anchor="middle" class="ti b">Neuron matur: MeCP2 se leagă de citozinele metilate din dinucleotidele CpG</text>
<text x="380" y="196" text-anchor="middle" class="ti">și reglează expresia multor gene neuronale (legătura cu metilarea, capitolul 4)</text>
<text x="380" y="216" text-anchor="middle" class="tw2 b">MECP2 mutant: neuronii nu se maturizează corect → regres după o perioadă normală</text>
</svg>
<figcaption><b>Ce face MeCP2.</b> Cursul: proteină „cu rol în funcționarea normală a celulelor nervoase mature”. Emery o leagă de metilarea CpG. Schemă proprie.</figcaption>
</figure>
<h3>Cele patru stadii</h3>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Stadiile sindromului Rett">
<path d="M40 70 C120 70 160 60 200 50 C230 46 250 70 290 110 C350 170 420 180 520 190 C600 196 660 210 720 230" fill="none" class="sP" stroke-width="3"/>
<text x="40" y="40" class="tm" style="font-size:11px">achiziții psihomotorii</text>
<line x1="40" y1="240" x2="720" y2="240" class="sm"/><text x="720" y="258" text-anchor="end" class="tm" style="font-size:11px">vârsta →</text>
<text x="120" y="258" text-anchor="middle" class="tm" style="font-size:11px">debut: 4–6 luni … 24 luni</text>
${[["I", 120, "stagnare", "PC nu mai crește după 4–5 luni"], ["II", 270, "regres", "pierde achiziții, EEG anormal, apoi convulsii"], ["III", 460, "pseudo-staționar", "hiperventilație, apnee, „spălatul mâinilor”"], ["IV", 650, "deteriorare motorie", "scolioză, spasticitate, fotoliu rulant"]].map(([n, x]) => `<circle cx="${x}" cy="${n === "I" ? 64 : n === "II" ? 92 : n === "III" ? 180 : 214}" r="14" class="fP"/><text x="${x}" y="${(n === "I" ? 64 : n === "II" ? 92 : n === "III" ? 180 : 214) + 5}" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:12px">${n}</text>`).join("")}

<rect x="330" y="20" width="410" height="84" rx="10" class="fas"/>
<text x="346" y="42" class="ti" style="font-size:12px"><tspan class="b">I</tspan> PC nu mai crește după 4–5 luni (stagnare precoce)</text>
<text x="346" y="60" class="ti" style="font-size:12px"><tspan class="b">II</tspan> pierde achizițiile; EEG modificat, apoi convulsii</text>
<text x="346" y="78" class="ti" style="font-size:12px"><tspan class="b">III</tspan> hiperventilație, apnee, „spălatul mâinilor”, discontact</text>
<text x="346" y="96" class="ti" style="font-size:12px"><tspan class="b">IV</tspan> scolioză, ataxie, spasticitate → fotoliu rulant</text>
</svg>
<figcaption><b>Curba achizițiilor în sindromul Rett.</b> Durata fiecărui stadiu variază de la luni la ani. După curs (p. 175–176); curba este schematică, fără valori măsurate.</figcaption>
</figure>
[[img:rett|<b>Stereotipii ale mâinilor pe linia mediană</b> („spălatul”, frecatul mâinilor), cu pierderea mișcărilor cu scop: semnul cel mai caracteristic.]]
<p><b>Diagnostic diferențial:</b> boli organice cerebrale, retard mintal de altă cauză, tulburări de învățare, <b>tulburări din spectrul autist</b>. <b>Tratament</b> (necurativ): kinetoterapie, stimulare multisenzorială, terapii comportamentale, program educațional adaptat; neuroleptice atipice, antiepileptice, neurotrofice.</p>
<div class="emery"><b>Dincolo de curs</b><p>În 2023 a fost aprobat în SUA trofinetidul, primul medicament specific pentru sindromul Rett (simptomatic). Duplicația <i>MECP2</i> la băieți produce un alt sindrom, cu retard sever: atât prea puțin, cât și prea mult MeCP2 afectează neuronii.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce severitatea sindromului Rett variază între fete cu aceeași mutație?</summary><div>Depinde de proporția neuronilor care au inactivat X-ul normal (inactivarea X este întâmplătoare).</div></details>
<details class="q"><summary>De ce riscul de recurență într-o familie cu un copil cu Rett este mic?</summary><div>95% din cazuri sunt mutații de novo; riscul rămâne mic, dar nu zero (posibil mozaicism germinal).</div></details>
</div>`
}
]
});
})();
