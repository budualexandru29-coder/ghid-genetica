/* LP XIII — Posibilități actuale de tratament etiopatogenic în bolile genetice (LP p. 159–165) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf13)"/>`;

GHID.capitol({
id: "lp13",
intro: `<p class="lead">Cartea pornește de la ideea că bolile genetice sunt „cronice, incurabile” și descrie începuturile tratamentului etiopatogenic, cu bolile lizozomale ca model. De atunci, lista s-a lungit mult: modulatori pentru fibroza chistică, oligonucleotide și terapie genică pentru atrofia musculară spinală, editare genică pentru siclemie. Principiul rămâne cel din carte: intervii la nivelul la care mecanismul bolii e cunoscut.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Nivelurile de intervenție terapeutică, de la genă la organ">${DEFS}
${(() => {
  const N = [["Genă", "terapie genică, editare (CRISPR)", "fP"], ["ARNm", "oligonucleotide antisens, siARN, modularea matisării", "fP"], ["Proteină / enzimă", "substituție enzimatică, chaperone, modulatori, transplant de celule stem", "fA"], ["Substrat / metabolit", "dietă, reducerea sintezei substratului, eliminare (chelare)", "fC"], ["Organ / fenotip", "transplant de organ, chirurgie, tratament simptomatic", "fT"]];
  let o = "";
  N.forEach(([t, d, c], i) => { const y = 14 + i * 56; o += `<rect x="20" y="${y}" width="180" height="44" rx="10" class="${c}"/><text x="110" y="${y + 27}" text-anchor="middle" style="fill:#fff" class="b">${t}</text>${fo(240, y + 4, 510, 40, d, "color:var(--ink);font-size:12.5px")}` + sag(204, y + 22, 232, y + 22) + (i < 4 ? sag(110, y + 44, 110, y + 56) : ""); });
  return o;
})()}
</svg>
<figcaption><b>Cinci niveluri de intervenție</b>, de la cauză la consecință. Cartea dă pentru bolile lizozomale patru: terapie genică → mutația; substituție enzimatică sau transplant de celule stem → deficitul enzimatic; inhibiția sintezei substratului → acumularea; tratament simptomatic → leziunea de organ. Vezi și <a href="#/c10b/profilaxie">ghidul de curs</a>. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "generalitati", titlu: "Strategiile clasice de tratament", pag: "159–160", emery: "cap. 22", acopera: ["lp13-r01"],
html: `
<p>Primul obstacol e cunoașterea genei și a produsului ei. Odată cunoscut mecanismul, cartea enumeră opt tipuri de măsuri; tabelul le păstrează exemplele și corectează ce s-a schimbat.</p>
<div class="tw"><table>
<thead><tr><th>Strategie</th><th>Exemplu din carte</th><th>Comentariu</th></tr></thead>
<tbody>
<tr><td>substituția proteinei deficiente</td><td>α1-antitripsină; factor VIII în hemofilie; tiroxină în hipotiroidia congenitală</td><td><b>Hemofilia A</b> = factor VIII; <b>hemofilia B</b> = factor IX (cartea scrie greșit „factor VIII în hemofilia tip B”). Crioprecipitatul a fost înlocuit de factori recombinanți și de emicizumab.</td></tr>
<tr><td>vitamine, cofactori</td><td>vitamina B6 în homocistinurie</td><td>răspunde doar o parte din pacienți (forma B6-responsivă); exemplu similar: sapropterina (BH4) în unele forme de fenilcetonurie</td></tr>
<tr><td>inducție enzimatică</td><td>fenobarbital în icterul congenital nehemolitic</td><td>eficient în sindromul Crigler–Najjar tip II, nu în tipul I (fără activitate UGT1A1 reziduală)</td></tr>
<tr><td>restricție alimentară</td><td>fenilalanină (fenilcetonurie), galactoză (galactozemie), lipide (hipercolesterolemie familială)</td><td>dieta din fenilcetonurie și galactozemie e esențială și începe după screeningul neonatal; în hipercolesterolemia familială dieta singură nu ajunge</td></tr>
<tr><td>evitarea unor substanțe</td><td>barbiturice în porfirii; antimalarice, sulfamide în deficitul de G6PD</td><td>enzima e <b>glucozo-6-fosfat dehidrogenaza</b> (cartea: „G-6-fosfatază”, altă enzimă, deficitară în glicogenoza tip I)</td></tr>
<tr><td>medicamente</td><td>penicilamină în boala Wilson; colestiramină în hipercolesterolemia familială</td><td>Wilson: și trientină, zinc. Hipercolesterolemia familială: statine, ezetimib, inhibitori PCSK9 (<a href="#/c07/fh">curs</a>)</td></tr>
<tr><td>îndepărtarea țesutului anormal</td><td>colectomie în polipoza adenomatoasă familială</td><td>profilactică, înainte de transformarea malignă</td></tr>
<tr><td>transplant de organ</td><td>transplant renal în rinichiul polichistic</td><td>și transplant hepatic (ex. hiperoxalurie, unele boli metabolice); în ADPKD, tolvaptanul încetinește creșterea chisturilor</td></tr>
</tbody></table></div>
<div class="emery"><b>Bolile „frecvente” nu mai sunt netratabile</b><p>Cartea spune că fibroza chistică și fenilcetonuria nu au încă „medicație accesibilă”. Astăzi: <b>modulatorii CFTR</b> (elexacaftor–tezacaftor–ivacaftor) sunt eficienți la ~90% din pacienții cu fibroză chistică (cei cu cel puțin o alelă F508del); în fenilcetonurie există sapropterina și enzima pegvaliază, care degradează fenilalanina. Îngrijirea rămâne multidisciplinară, coordonată de genetician, iar <b>registrele internaționale</b> ale bolilor rare ajută la studiul evoluției naturale și la testarea medicamentelor.</p></div>`
},
{
id: "lizozomale", titlu: "Bolile lizozomale și substituția enzimatică", pag: "160–161", emery: "cap. 18; cap. 22", acopera: ["lp13-r02"], curs: ["c08/mps1"],
html: `
<p>Peste 70 de boli monogenice (cartea: peste 40) sunt cauzate de deficitul unei enzime lizozomale sau al unei proteine care o transportă. Substratul nedegradat se acumulează în lizozomi și dă o boală <b>multisistemică, progresivă</b>. Clasificarea se face după substrat: mucopolizaharidoze, sfingolipidoze, glicogenoza tip II (Pompe), glicoproteinoze, mucolipidoze. Luate împreună, au o prevalență de ~1:7.700 de nou-născuți (cartea) sau mai mare, după datele recente de screening neonatal.</p>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Frecvența relativă a principalelor boli lizozomale">
${(() => {
  const D = [["Boala Gaucher", 14, "fA"], ["Boala Fabry", 7, "fT"], ["MPS I (Hurler / Scheie)", 7, "fP"], ["MPS II (Hunter)", 6, "fP"], ["Boala Pompe", 5, "fG"]];
  let o = `<text x="20" y="22" class="ti b">Proporția din toate bolile lizozomale diagnosticate (după carte)</text>`;
  D.forEach(([t, v, c], i) => { const y = 40 + i * 36; o += `<text x="210" y="${y + 18}" text-anchor="end" class="ti" style="font-size:12px">${t}</text><rect x="220" y="${y}" width="${v * 28}" height="24" rx="5" class="${c}"/><text x="${226 + v * 28}" y="${y + 17}" class="ti b" style="font-size:12px">${v}%</text>`; });
  return o + `<text x="20" y="230" class="tm" style="font-size:11px">Restul de ~60% se împarte între zeci de boli mai rare. Proporțiile variază între țări (screeningul neonatal descoperă mult mai multe forme ușoare de Fabry și Pompe).</text>`;
})()}
</svg>
<figcaption><b>Cele cinci boli lizozomale tratate în carte.</b> Date din carte, reprezentate grafic.</figcaption>
</figure>
<h3>Cum ajunge enzima în lizozom</h3>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Captarea enzimei recombinante prin receptorul pentru manozo-6-fosfat">${DEFS}
${(() => {
  let o = `<rect x="200" y="30" width="540" height="240" rx="40" class="fcard si" stroke-width="2"/><text x="720" y="56" text-anchor="end" class="tm" style="font-size:11.5px">celula (ex. macrofag, miocit)</text>`;
  o += `<text x="20" y="90" class="ti b" style="font-size:12px">perfuzie i.v.:</text><text x="20" y="106" class="tm" style="font-size:11.5px">enzimă recombinantă</text>`;
  [60, 110, 160].forEach((x, i) => (o += `<circle cx="${x}" cy="${150 + (i % 2) * 20}" r="10" class="fA"/><circle cx="${x + 9}" cy="${142 + (i % 2) * 20}" r="4" class="fC"/>`));
  o += `<rect x="196" y="140" width="10" height="34" rx="3" class="fP"/><text x="150" y="208" class="tm" style="font-size:11px">receptor M6P</text>`;
  o += sag(216, 157, 290, 157) + `<circle cx="330" cy="157" r="32" class="fas si" stroke-width="1"/><text x="330" y="208" text-anchor="middle" class="tm" style="font-size:11px">endozom</text>`;
  o += sag(366, 157, 450, 157) + `<circle cx="520" cy="157" r="62" class="fis si" stroke-width="1.2"/><text x="520" y="242" text-anchor="middle" class="ti b" style="font-size:12px">lizozom</text>`;
  [[495, 135], [540, 130], [505, 180], [550, 172], [525, 155]].forEach(([x, y], i) => (o += i < 2 ? `<circle cx="${x}" cy="${y}" r="9" class="fA"/>` : `<rect x="${x - 7}" y="${y - 7}" width="14" height="14" rx="3" class="fT" opacity=".7"/>`));
  o += fo(600, 100, 140, 120, "enzima (verde) degradează substratul acumulat (portocaliu)");
  o += `<circle cx="34" cy="250" r="8" class="fA"/><circle cx="41" cy="244" r="3.5" class="fC"/><text x="50" y="254" class="ti" style="font-size:11.5px">enzimă cu reziduu M6P (galben)</text>`;
  return o;
})()}
</svg>
<figcaption><b>Ținta: receptorul pentru manozo-6-fosfat (M6P)</b>, prin care celula își trimite normal enzimele în lizozom. Enzimele recombinante sunt produse astfel încât să poarte M6P (sau, pentru boala Gaucher, manoză expusă, recunoscută de receptorul de manoză al macrofagelor). Enzima nu trece bariera hematoencefalică, deci nu tratează afectarea neurologică. Schemă proprie.</figcaption>
</figure>
<h3>Cum se produce enzima recombinantă</h3>
<figure>
<svg viewBox="0 0 760 190" role="img" aria-label="Producerea unei enzime prin tehnologia ADN recombinant">${DEFS}
${[["1. Plasmida", "izolată și tăiată cu o enzimă de restricție"], ["2. Inserția genei", "ADNc uman pentru enzimă + ligază"], ["3. Transfecția", "în celule gazdă de mamifer (ex. CHO, ovar de hamster chinezesc)"], ["4. Cultura", "celulele secretă enzima în mediu"], ["5. Purificarea", "și modificarea glicanilor (M6P sau manoză)"]].map(([t, d], i) => `<rect x="${12 + i * 150}" y="16" width="138" height="120" rx="10" class="${i % 2 ? "fis" : "fas"}"/><text x="${22 + i * 150}" y="38" class="ti b" style="font-size:12.5px">${t}</text>${fo(22 + i * 150, 44, 122, 90, d, "color:var(--ink)")}` + (i < 4 ? sag(150 + i * 150, 76, 162 + i * 150, 76) : "")).join("")}
<text x="20" y="168" class="tm" style="font-size:11.5px">Se folosesc celule de mamifer, nu bacterii, pentru că enzimele lizozomale au nevoie de glicozilare. Principiul ADN-ului recombinant: <a href="#/lp11/principii">LP XI</a>.</text>
</svg>
<figcaption><b>Cinci etape</b>, după carte. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Termen greșit în carte</b><p>HSCT înseamnă <i>hematopoietic stem cell transplantation</i> (<b>transplant de celule stem hematopoietice</b>), nu „human stem cell therapy”. Celulele donatorului, inclusiv macrofagele din creier (microglia), produc enzima normală și o cedează celulelor vecine.</p></div>`
},
{
id: "gaucher", titlu: "Boala Gaucher", pag: "161–162", emery: "cap. 18", acopera: ["lp13-r03", "lp13-r04", "lp13-r06"],
html: `
<p>Cea mai frecventă boală lizozomală. Deficitul de <b>glucocerebrozidază</b> (β-glucozidază acidă, gena <i>GBA1</i>, 1q22) duce la acumularea glucocerebrozidei în lizozomii macrofagelor, care devin <b>celule Gaucher</b>. Transmitere <b>autozomal recesivă</b>.</p>
[[img:gaucher_celula|<b>Celule Gaucher</b> în măduva osoasă (colorație hematoxilină-eozină): macrofage mari, încărcate cu glucocerebrozid, cu citoplasmă fin striată („hârtie mototolită”). În stânga, o trabeculă osoasă.]]
<div class="tw"><table>
<thead><tr><th>Tip</th><th>Caracteristici</th></tr></thead>
<tbody>
<tr><td><b>1</b>, cronic, non-neuronopatic</td><td>~95% din cazuri; orice vârstă; splenomegalie și hepatomegalie, anemie, trombocitopenie, afectare osoasă (dureri, „crize osoase”, necroză aseptică, osteopenie, fracturi), întârzierea creșterii. Prevalență ~1:40.000; la evreii așkenazi 1:450–1.000</td></tr>
<tr><td><b>2</b>, neuronopatic acut</td><td>sugar; afectare neurologică severă, deces în primii ani</td></tr>
<tr><td><b>3</b>, neuronopatic subacut sau cronic</td><td>copilărie; afectare neurologică mai lentă (ex. paralizia mișcărilor oculare orizontale)</td></tr>
</tbody></table></div>
<p><b>Diagnostic:</b> activitatea enzimatică în leucocite sau fibroblaști (sub 30% din normal), apoi genotipare. Mutația N370S (azi notată <b>p.Asn409Ser</b>, după numerotarea care include peptidul semnal) e cea mai frecventă la evreii așkenazi (~70% din alele); un singur alel N370S protejează de afectarea neurologică.</p>
<div class="lab"><b>Tratament</b><p><b>Substituția enzimatică</b> a fost primul succes de acest tip: alglucerază (Ceredase, 1991, extrasă din placentă), apoi imigluceraza recombinantă (Cerezyme), perfuzii la 2 săptămâni (cartea: 60 U/kg, doză individualizată). Splenomegalia, anemia și trombocitopenia regresează în 1–2 ani (figura 44 din carte arată o pacientă înainte și după un an). Opțiuni noi: velaglucerază și taliglucerază (alte enzime), <b>eliglustat</b> și miglustat, pe cale orală (<b>reducerea sintezei substratului</b>). Nu există tratament eficient pentru afectarea neurologică din tipul 2.</p></div>
<div class="emery"><b>Legătura cu boala Parkinson</b><p>Heterozigoții pentru mutații <i>GBA1</i>, sănătoși din punctul de vedere al bolii Gaucher, au un risc de ~5 ori mai mare de boală Parkinson. Sunt cel mai important factor genetic de risc cunoscut pentru Parkinson.</p></div>`
},
{
id: "fabry", titlu: "Boala Fabry", pag: "162–163", emery: "cap. 18", acopera: ["lp13-r05", "lp13-r07"],
html: `
<p>Deficitul de <b>α-galactozidază A</b> (gena <i>GLA</i>, Xq22) duce la acumularea <b>globotriaozilceramidei (Gb3, GL-3)</b> în endoteliul vascular, rinichi, inimă, nervi. Transmitere <b>legată de X</b>: spre deosebire de celelalte boli din capitol, care sunt autozomal recesive.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Evoluția bolii Fabry pe vârste">
${(() => {
  const X0 = 30, W = 700, lx = (a) => X0 + a / 60 * W;
  const E = [["copilărie", 4, 16, "dureri arzătoare la mâini și picioare (crize Fabry), acroparestezii, hipohidroză, intoleranță la căldură, tulburări digestive", "fC"], ["adolescență", 12, 25, "angiokeratoame, opacități corneene „în spiță de roată” (cornea verticillata), proteinurie", "fT"], ["adult", 25, 55, "insuficiență renală, hipertrofie ventriculară stângă și aritmii, accidente vasculare cerebrale", "fP"]];
  let o = `<line x1="${X0}" y1="200" x2="${X0 + W}" y2="200" class="si"/>` + [0, 10, 20, 30, 40, 50, 60].map((a) => `<text x="${lx(a)}" y="218" text-anchor="middle" class="tm" style="font-size:11px">${a} ani</text>`).join("");
  E.forEach(([t, a, b, d, c], i) => { const y = 20 + i * 58; o += `<rect x="${lx(a)}" y="${y}" width="${lx(b) - lx(a)}" height="16" rx="5" class="${c}"/>${fo(Math.min(lx(a), 330), y + 18, 400, 40, `<b style='color:var(--ink)'>${t}:</b> ${d}`)}`; });
  return o + `<text x="20" y="242" class="tm" style="font-size:11px">Bărbații hemizigoți cu forma clasică; femeile heterozigote au, de cele mai multe ori, semne mai ușoare și mai tardive. Vârste aproximative.</text>`;
})()}
</svg>
<figcaption><b>O boală care începe cu dureri în copilărie</b> și e diagnosticată adesea abia la adult, după apariția leziunilor ireversibile. Fără tratament, decesul survine la adultul tânăr, prin insuficiență renală sau boală cardiovasculară. Schemă proprie.</figcaption>
</figure>
[[img:fabry_angio|<b>Angiokeratoame</b> în boala Fabry (figura 45 din carte: <i>angiokeratoma corporis diffusum</i>): papule roșii-violacee, mici, tipic în zona dintre ombilic și genunchi; aici și pe buze.]]
<div class="capcana"><b>Femeile nu sunt doar „purtătoare”</b><p>Boala e clasificată în carte ca recesivă legată de X, dar majoritatea femeilor heterozigote au manifestări (adesea renale sau cardiace), uneori severe, din cauza inactivării X (<a href="#/lp08/lyon">LP VIII</a>). De aceea se tratează și femeile simptomatice. Prevalența de 1:40.000 bărbați din carte se referă la forma clasică; screeningul neonatal arată că variantele cu debut tardiv (mai ales cardiac) sunt mult mai frecvente, de ~1:3.000–1:4.000.</p></div>
<div class="lab"><b>Diagnostic și tratament</b><p><b>Bărbați:</b> activitatea α-galactozidazei A scăzută; <b>femei:</b> enzima poate fi normală, deci diagnosticul se face prin <b>analiza genei</b> (cartea: 170 de mutații cunoscute, azi peste 1.000). Tratament: <b>substituție enzimatică</b> (agalsidază beta, Fabrazyme, 1 mg/kg la 2 săptămâni; agalsidază alfa; pegunigalsidază alfa) și, pentru mutațiile care produc o enzimă instabilă dar funcțională, <b>migalastat</b>, un <b>chaperon farmacologic</b> oral care stabilizează enzima pacientului. Cartea citează clearance-ul GL-3 după un an: 98% în endoteliul renal, 96% în piele, 75% în inimă.</p></div>`
},
{
id: "mps1", titlu: "Mucopolizaharidoza tip I", pag: "164", emery: "cap. 18", acopera: ["lp13-r08", "lp13-r09"], curs: ["c08/mps1"],
html: `
<p>Deficitul de <b>α-L-iduronidază</b> (gena <i>IDUA</i>, 4p16.3) împiedică degradarea glicozaminoglicanilor (GAG) <b>dermatan sulfat și heparan sulfat</b>, care se acumulează în aproape toate țesuturile. Transmitere <b>autozomal recesivă</b>; boală progresivă, cu un spectru continuu de severitate.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Spectrul de severitate al MPS I">
<defs><linearGradient id="gr13" x1="0" x2="1"><stop offset="0" stop-color="#7c3aed"/><stop offset="1" stop-color="#7c3aed" stop-opacity=".18"/></linearGradient></defs>
<rect x="30" y="40" width="700" height="24" rx="12" fill="url(#gr13)"/>
<text x="30" y="30" class="ti b">sever</text><text x="730" y="30" text-anchor="end" class="ti b">atenuat</text>
${[["Hurler", 70, "debut în primul an; afectare neurologică (regres cognitiv); deces în copilărie fără tratament; ~1:100.000"], ["Hurler–Scheie", 380, "intermediar; inteligență normală sau ușor afectată"], ["Scheie", 650, "debut tardiv, fără afectare a SNC; articulații, cornee, valve; ~1:500.000"]].map(([t, x, d]) => `<line x1="${x}" y1="64" x2="${x}" y2="84" class="si"/><text x="${x}" y="100" text-anchor="middle" class="ti b">${t}</text>${fo(Math.max(20, Math.min(x - 110, 520)), 106, 220, 100, d, "text-align:center")}`).join("")}
</svg>
<figcaption><b>Trei nume pentru aceeași boală</b>, de la sever la atenuat. Azi se vorbește simplu de MPS I severă și atenuată. Schemă proprie.</figcaption>
</figure>
<p><b>Semne</b> (variabile după formă): facies „gargoilic” (trăsături grosiere, buze groase, macroglosie, hipertrofie gingivală), opacități corneene, hipoacuzie, obstrucția căilor respiratorii, hepatosplenomegalie, hernii, valvulopatii, disostoză multiplă, contracturi articulare în flexie, retard de creștere și, în forma severă, retard mintal.</p>
[[img:mps1_a|<b>Mucopolizaharidoză (sindrom Hurler)</b>: trăsături faciale grosiere, caracteristice formei severe (figura 46 din carte).]]
<div class="lab"><b>Diagnostic și tratament</b><p>GAG crescuți în urină (dermatan și heparan sulfat) orientează; confirmarea se face prin activitatea enzimatică (1–10% sau mai puțin din normal) și analiza genei <i>IDUA</i>. Tratament: <b>laronidaza</b> (Aldurazyme), 100 U/kg săptămânal, ameliorează manifestările non-neurologice (respirație, mobilitate, organomegalie). Pentru forma severă, <b>transplantul de celule stem hematopoietice</b> e standardul de îngrijire, nu o opțiune pentru „unele cazuri”, cum spune cartea: făcut înainte de ~2–2,5 ani, păstrează funcția cognitivă. MPS I a intrat în screeningul neonatal în mai multe țări tocmai pentru că tratamentul precoce schimbă evoluția.</p></div>`
},
{
id: "pompe", titlu: "Boala Pompe (glicogenoza tip II)", pag: "165", emery: "cap. 18", acopera: ["lp13-r10", "lp13-r11"],
html: `
<p>Deficitul de <b>α-glucozidază acidă</b> (maltază acidă, gena <i>GAA</i>, 17q25) împiedică degradarea glicogenului în lizozomi. Singura glicogenoză care e și boală lizozomală. Afectează în special mușchii scheletici, inima și mușchii respiratori. Autozomal recesivă, panetnică, ~1:40.000.</p>
<div class="tw"><table>
<thead><tr><th></th><th>Forma infantilă</th><th>Forma cu debut tardiv</th></tr></thead>
<tbody>
<tr><td>debut</td><td>primele luni</td><td>din copilărie până la vârsta adultă</td></tr>
<tr><td>semne</td><td>hipotonie severă („floppy baby”, figura 47 din carte), <b>cardiomiopatie hipertrofică</b>, macroglosie, dificultăți de alimentare și respirație</td><td>slăbiciune musculară proximală progresivă, insuficiență respiratorie (adesea primul semn), oboseală; inima de obicei neafectată</td></tr>
<tr><td>enzimă reziduală</td><td>sub 1%</td><td>2–40%</td></tr>
<tr><td>evoluție fără tratament</td><td>deces în primul an, prin insuficiență cardiorespiratorie</td><td>foarte variabilă; dependență de ventilator și de scaun cu rotile</td></tr>
</tbody></table></div>
[[img:pompe_biopsie|<b>Biopsie musculară în boala Pompe</b>: fibre musculare cu vacuole pline cu glicogen (zonele clare din interiorul fibrelor).]]
<p><b>Diagnostic:</b> activitatea enzimatică (azi din picătură de sânge uscat, apoi confirmare), analiza genei; CK, transaminazele (GOT, GPT, de origine musculară) crescute, cardiomegalie la imagistică în forma infantilă. <b>Tratament:</b> alglucozidaza alfa recombinantă (Myozyme, 2006) prelungește supraviețuirea în forma infantilă și ameliorează funcția motorie și respiratorie; urmașii: avalglucozidaza alfa și cipaglucozidaza alfa asociată cu miglustat. Copiii fără nicio proteină GAA proprie (CRIM-negativi) fac anticorpi împotriva enzimei și au nevoie de imunomodulare.</p>`
},
{
id: "terapii-noi", titlu: "Dincolo de carte: terapii genice și moleculare", pag: "—", emery: "cap. 22", acopera: [], curs: ["c13/genica"],
html: `
<p>Cartea (2007) încheie cu substituția enzimatică. Între timp, au fost aprobate terapii care acționează pe ARN sau pe genă.</p>
<figure>
<svg viewBox="0 0 760 380" role="img" aria-label="Cronologia terapiilor etiopatogenice în bolile genetice">
${(() => {
  const E = [[1991, "Ceredase: prima substituție enzimatică (Gaucher)", "fA"], [2001, "Fabrazyme / Replagal (Fabry)", "fA"], [2003, "Aldurazyme (MPS I)", "fA"], [2006, "Myozyme (Pompe)", "fA"], [2012, "ivacaftor: primul modulator CFTR", "fC"], [2016, "nusinersen: oligonucleotid antisens (AAS)", "fP"], [2017, "Luxturna: terapie genică AAV, distrofie retiniană RPE65", "fG"], [2018, "patisiran: primul siARN (amiloidoză TTR)", "fP"], [2019, "Zolgensma (AAS, genă SMN1 prin AAV9); elexacaftor–tezacaftor–ivacaftor (FC)", "fG"], [2022, "Hemgenix: terapie genică pentru hemofilia B", "fG"], [2023, "Casgevy: primul tratament prin editare CRISPR (siclemie, β-talasemie)", "fT"]];
  const y = (a) => 26 + (a - 1990) / 34 * 330;
  let o = `<line x1="110" y1="20" x2="110" y2="360" class="si" stroke-width="2"/>`;
  E.forEach(([a, t, c], i) => { const yy = 26 + i * 31; o += `<circle cx="110" cy="${yy}" r="7" class="${c}"/><text x="94" y="${yy + 4}" text-anchor="end" class="ti b" style="font-size:12px">${a}</text><text x="126" y="${yy + 4}" class="ti" style="font-size:12px">${t}</text>`; });
  o += `<rect x="560" y="22" width="12" height="12" rx="3" class="fA"/><text x="578" y="32" class="tm" style="font-size:11px">enzimă</text><rect x="640" y="22" width="12" height="12" rx="3" class="fC"/><text x="658" y="32" class="tm" style="font-size:11px">modulator</text><rect x="560" y="44" width="12" height="12" rx="3" class="fP"/><text x="578" y="54" class="tm" style="font-size:11px">ARN</text><rect x="640" y="44" width="12" height="12" rx="3" class="fG"/><text x="658" y="54" class="tm" style="font-size:11px">genă (AAV)</text><rect x="560" y="66" width="12" height="12" rx="3" class="fT"/><text x="578" y="76" class="tm" style="font-size:11px">editare genică</text>`;
  return o;
})()}
</svg>
<figcaption><b>Trei decenii de tratamente etiopatogenice.</b> Anii sunt cei ai primei aprobări (SUA sau UE). AAS = atrofie musculară spinală; AAV = vector viral adeno-asociat. Schemă proprie.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce substituția enzimatică nu ameliorează forma neurologică a bolii Gaucher sau a MPS I?</summary><div>Enzima, o proteină mare administrată intravenos, nu trece <b>bariera hematoencefalică</b>. Pentru creier se folosesc transplantul de celule stem hematopoietice (MPS I), molecule mici care trec bariera (unii inhibitori de substrat) sau terapii genice.</div></details>
<details class="q"><summary>Ce face un chaperon farmacologic, ca migalastatul în boala Fabry?</summary><div>Se leagă de enzima mutantă, greșit pliată dar potențial activă, o stabilizează și o ajută să ajungă în lizozom. Funcționează doar pentru mutațiile „amenabile” (în special <i>missense</i>), nu pentru cele care elimină complet proteina.</div></details>
<details class="q"><summary>Ce nivel al căii genă → fenotip țintesc dieta din fenilcetonurie, nusinersenul și Zolgensma?</summary><div>Dieta: <b>substratul</b> (limitarea fenilalaninei). Nusinersenul: <b>ARNm</b> (modifică matisarea genei <i>SMN2</i> ca să producă proteină SMN completă). Zolgensma: <b>gena</b> (aduce o copie funcțională a <i>SMN1</i>).</div></details>
</div>`
}
]
});
})();
