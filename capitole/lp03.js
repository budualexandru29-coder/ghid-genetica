/* LP III — Cariotipul uman normal (LP p. 30–40) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
// lungimile brațelor (Mb) din UCSC hg38, pentru exemplele numerice
const ARM = { 1: [123.4, 125.6], 2: [93.9, 148.3], 3: [90.9, 107.4], 4: [50.0, 140.2], 5: [48.8, 132.8], 6: [60.5, 110.3], 7: [60.1, 99.2], 8: [45.2, 99.9], 9: [43.9, 94.5], 10: [39.8, 94.0], 11: [53.4, 81.7], 12: [35.5, 97.8], 13: [17.7, 96.7], 14: [17.1, 89.9], 15: [19.0, 83.0], 16: [36.9, 53.5], 17: [25.1, 58.2], 18: [18.4, 61.9], 19: [26.1, 32.5], 20: [28.1, 36.4], 21: [11.9, 34.8], 22: [15.6, 35.3], X: [61.0, 95.1], Y: [10.4, 46.8] };
const HAP = Object.entries(ARM).filter(([k]) => k !== "Y").reduce((n, [, [p, q]]) => n + p + q, 0);

GHID.capitol({
id: "lp03",
intro: `<p class="lead">Cariotipul este „fotografia de identitate” a cromozomilor unei celule: cei 46 aranjați în perechi, după mărime, poziția centromerului și benzi. La LP îl construiești cu mâna: decupezi cromozomii dintr-o metafază bandată și îi lipești în caiet, folosind idiogramele ca model.</p>
<figure><img src="fig/lp_cariotip_xy.svg" alt="Cariotip 46,XY aranjat pe grupe, desenat din datele genomului">
<figcaption><b>Cariotipul 46,XY, aranjat pe grupele A–G</b>, cu benzile G la ~650 de benzi, desenat la scară din datele genomului (UCSC hg38). Așa arată foaia finală de la LP: perechile în ordinea descrescătoare a mărimii, grupele încadrate, X și Y separat. Figură proprie din date.</figcaption></figure>`,
sectiuni: [
{
id: "generalitati", titlu: "Ce este cariotipul: cele trei criterii de sistematizare", pag: "30", emery: "cap. 3, p. 25–29", acopera: ["lp03-r01"],
html: `
<p><b>Cariotipul</b> este aranjarea sistematizată a cromozomilor unei celule mitotice (sau meiotice) după număr, formă, mărime și orice altă trăsătură care permite recunoașterea fiecărui cromozom. Se face în <b>metafază</b>, la condensare și colorabilitate maximă.</p>
<div class="pasi">
<div><b>1. Mărimea</b>în ordine descrescătoare; la mărime egală, metacentricul se trece primul</div>
<div><b>2. Grupele A–G</b>7 grupe, în general de cromozomi de aceeași mărime (excepție: grupa E)</div>
<div><b>3. Împerecherea omologilor</b>23 de perechi: 22 de autozomi numerotați 1–22 și perechea de heterozomi (XX sau XY)</div>
</div>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Grupele de cromozomi după mărime și tip">
${(() => {
  const G = [["A", ["1", "2", "3"], "mari; 1 și 3 metacentrici, 2 submetacentric", "fG"], ["B", ["4", "5"], "mari, submetacentrici", "fA"], ["C", ["6", "7", "8", "9", "10", "11", "12", "X"], "mijlocii, submetacentrici", "fC"], ["D", ["13", "14", "15"], "mijlocii, acrocentrici, cu sateliți", "fT"], ["E", ["16", "17", "18"], "16 metacentric mijlociu; 17, 18 submetacentrici mici", "fP"], ["F", ["19", "20"], "mici, metacentrici", "fG"], ["G", ["21", "22", "Y"], "mici, acrocentrici; 21, 22 cu sateliți", "fT"]];
  let s = "", x = 20; const sc = .62, Y0 = 108;
  G.forEach(([g, cs, d, cl]) => {
    const w = cs.length * 13 + 20;
    s += `<text x="${x + w / 2 - 6}" y="20" text-anchor="middle" class="ti b" style="font-size:15px">${g}</text>`;
    cs.forEach((c, i) => { const [p, q] = ARM[c], xx = x + i * 13; s += `<rect x="${xx}" y="${Y0 - p * sc}" width="9" height="${(p + q) * sc}" rx="4" class="${c === "X" || c === "Y" ? "fZ" : cl}"/><rect x="${xx - 1}" y="${Y0 - 1.5}" width="11" height="3" class="fbg"/><text x="${xx + 4.5}" y="${Y0 + q * sc + 13}" text-anchor="middle" class="tm" style="font-size:9.5px">${c}</text>`; });
    s += fo(x - 8, 214, w + 6, 56, d, "text-align:center;font-size:11px");
    x += w + 8;
  });
  s += `<line x1="14" y1="${Y0}" x2="${x}" y2="${Y0}" class="sm" stroke-dasharray="3 3"/><text x="${x - 4}" y="${Y0 - 6}" text-anchor="end" class="tm" style="font-size:11px">centromer</text>`;
  return s;
})()}
</svg>
<figcaption><b>Grupele Denver, la scară.</b> Fiecare cromozom e desenat cu lungimea brațelor din secvența genomului, aliniat la centromer. X intră în grupa C (între 7 și 8 ca mărime), Y în grupa G. La femeie grupa C are 16 cromozomi și grupa G 4; la bărbat 15, respectiv 5. Figură proprie din date (UCSC hg38).</figcaption>
</figure>`
},
{
id: "criterii", titlu: "Criteriile morfologice de identificare: cantitative și calitative", pag: "31–32", emery: "cap. 3, p. 26–29", acopera: ["lp03-r02"],
html: `
<p>Cinci <b>parametri cantitativi</b> permit identificarea perechilor de omologi. Toți se calculează din lungimile p și q măsurate pe fotografie:</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Parametrii cantitativi ai unui cromozom">
<rect x="80" y="40" width="22" height="70" rx="10" class="fG"/><rect x="80" y="116" width="22" height="150" rx="10" class="fG"/><ellipse cx="91" cy="113" rx="13" ry="4" class="fA"/>
<line x1="60" y1="40" x2="60" y2="110" class="sa" stroke-width="2"/><text x="50" y="80" text-anchor="end" class="ta b">p</text>
<line x1="60" y1="116" x2="60" y2="266" class="sT" stroke-width="2"/><text x="50" y="195" text-anchor="end" class="tw2 b">q</text>
<line x1="124" y1="40" x2="124" y2="266" class="sm" stroke-width="1.4"/><text x="132" y="156" class="tm">L = p + q</text>
${[["L", "Lungimea absolută", "în µm; depinde de stadiul diviziunii", "L = p + q"], ["Lr", "Lungimea relativă", "raportată la setul haploid (22 autozomi + X), × 1000", "Lr = (p + q) / Σ(1–22, X) × 1000"], ["R", "Raportul brațelor", "1–1,7 metacentric · 1,7–3 submetacentric · > 3 acrocentric", "R = q / p"], ["Ic", "Indicele centromeric", "procentul brațului scurt din lungimea totală", "Ic = p / (p + q) × 100"], ["Im", "Indicele morfologic", "lungimea totală împărțită la raportul brațelor", "Im = (p + q) / (q / p)"]].map(([k, n, d, f], i) => `<rect x="220" y="${20 + i * 52}" width="520" height="46" rx="8" class="${i % 2 ? "fcard" : "fas"}"/><text x="236" y="${40 + i * 52}" class="ta b" style="font-size:15px">${k}</text><text x="270" y="${40 + i * 52}" class="ti b">${n}</text><text x="270" y="${57 + i * 52}" class="tm" style="font-size:11.5px">${d}</text><text x="730" y="${46 + i * 52}" text-anchor="end" class="ti" style="font-family:ui-monospace,monospace;font-size:12px">${f}</text>`).join("")}
</svg>
<figcaption><b>Cei cinci parametri</b> din carte, cu formulele lor. Măsurătorile au erori și depind de gradul de condensare al fiecărui omolog: de aceea criteriile cantitative singure nu ajung pentru a deosebi, de exemplu, cromozomii grupei C. Schemă proprie.</figcaption>
</figure>
<div class="exemplu"><b>Exemplu calculat, cromozomul 1 (din secvență)</b>
<p>p = ${ARM[1][0]} Mb, q = ${ARM[1][1]} Mb. R = ${(ARM[1][1] / ARM[1][0]).toFixed(2)} (metacentric) · Ic = ${(100 * ARM[1][0] / (ARM[1][0] + ARM[1][1])).toFixed(1)}% · Lr = ${((ARM[1][0] + ARM[1][1]) / HAP * 1000).toFixed(0)} (setul haploid 1–22 + X = ${(HAP / 1000).toFixed(2)} Gb). Pentru cromozomul 21: R = ${(ARM[21][1] / ARM[21][0]).toFixed(1)}, Ic = ${(100 * ARM[21][0] / (ARM[21][0] + ARM[21][1])).toFixed(0)}%, Lr = ${((ARM[21][0] + ARM[21][1]) / HAP * 1000).toFixed(0)}. Pe cromozomul colorat, brațul scurt al acrocentricilor iese relativ mai mic, deci R mai mare.</p></div>
<h3>Criteriile calitative</h3>
<div class="pasi">
<div><b>Sateliții</b>pe acrocentricii din grupele D și G; nu și pe Y</div>
<div><b>Constricțiile secundare</b>tipice: terminal, pe p la acrocentricii D și G; inconstante: juxtacentromeric pe q la 1, 9, 16 (rar Y), de lungimi diferite pe omologi</div>
<div><b>Situsurile fragile</b>regiuni care se rup mult mai des; evidențiate în culturi speciale (mediu sărac în folat, antifolați)</div>
</div>
[[img:fragilx|<b>Situsul fragil FRAXA</b>, la Xq27.3: pe cromozomul cultivat în mediu sărac în folat apare o îngustare sau o ruptură aproape de capătul brațului lung.]]
<div class="capcana"><b>FRAXA, nu FRAXE, la Xq27.3</b>
<p>Cartea numește situsul fragil de la Xq27.3 „FRAXE”. Situsul de la <b>Xq27.3 este FRAXA</b> (gena <i>FMR1</i>, sindromul X fragil, <a href="#/c10/xfragil">ghidul de curs</a>). <b>FRAXE</b> este un situs diferit, la <b>Xq28</b> (gena <i>AFF2</i>), asociat cu o dizabilitate intelectuală ușoară. Termenul „debilitate mentală” din carte se înlocuiește azi cu <b>dizabilitate intelectuală</b>.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un cromozom are Ic = 25%. Ce tip este?</summary><div>p reprezintă un sfert din lungime, deci q/p = 75/25 = 3: la limita submetacentric/acrocentric (submetacentric după definiția R ≤ 3).</div></details>
<details class="q"><summary>De ce se folosește lungimea relativă și nu cea absolută?</summary><div>Lungimea absolută variază de la o metafază la alta, după cât de condensați sunt cromozomii; raportul față de setul haploid din aceeași celulă rămâne aproximativ constant.</div></details>
</div>`
},
{
id: "bandare", titlu: "Tehnicile de bandare", pag: "32–34", emery: "cap. 3, p. 26–28", acopera: ["lp03-r03", "lp03-r04"], curs: ["c01/cromatina"],
html: `
<p>În aceeași grupă cromozomii nu se pot deosebi cu colorare uniformă (de exemplu cei 7 din grupa C). De aici tehnicile de <b>bandare</b>: benzi transversale alternative, închise și deschise, cu dispoziție identică pe omologi și specifică fiecărui cromozom.</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Cele patru generații de tehnici citogenetice">
${[["I", "1956", "colorare uniformă", "aneuploidii, mozaicuri, situsuri fragile", "fZ"], ["II", "1970", "bandare: 300–400 benzi / set haploid", "fiecare cromozom; majoritatea anomaliilor", "fG"], ["III", "1977", "înaltă rezoluție: 550–850 benzi (pro-/prometafază)", "anomalii mici: microdeleții, translocații; poziția genelor", "fA"], ["IV", "1991", "citogenetică moleculară: FISH", "anomalii submicroscopice", "fP"]].map(([g, an, t, u, c], i) => `<rect x="${16 + i * 186}" y="20" width="172" height="170" rx="12" class="fcard sm" stroke-width=".8"/><rect x="${16 + i * 186}" y="20" width="172" height="40" rx="12" class="${c}"/><rect x="${16 + i * 186}" y="44" width="172" height="16" class="${c}"/><text x="${102 + i * 186}" y="46" text-anchor="middle" style="fill:#fff;font-size:15px" class="b">Generația ${g} · ${an}</text>${fo(26 + i * 186, 68, 152, 120, `<b style="color:var(--ink)">${t}</b><br><br>${u}`, "text-align:center;font-size:12.5px")}`).join("")}
</svg>
<figcaption><b>Patru generații de tehnici</b>, după carte. Fiecare a crescut rezoluția: de la numărarea cromozomilor la segmente de câteva megabaze, apoi la loci individuali. Schemă proprie.</figcaption>
</figure>
<figure><img src="fig/lp_rezolutie.svg" alt="Cromozomul 1 la trei rezoluții de bandare">
<figcaption><b>Ce înseamnă „înaltă rezoluție”.</b> Același cromozom 1, din aceleași date (UCSC hg38): la ~300 de benzi pe set haploid fiecare bandă e una singură (p36, p31…); în prometafază banda p36 se separă în p36.1, p36.2, p36.3; în profază apar sub-sub-benzi (p36.33, p36.32…). Benzile au fost unite din datele de rezoluție maximă, cu culoarea medie ponderată. Figură proprie.</figcaption></figure>
<div class="tw"><table><tr><th>Marcaj</th><th>Cum se obține</th><th>Ce colorează</th><th>Particularități</th></tr>
<tr><td><b>Q</b></td><td>quinacrină muștar (20–30 min), examinare în UV</td><td>benzi fluorescente = regiuni bogate în AT</td><td>Yq distal foarte strălucitor (corpusculul F, cromatina Y); preparatele nu sunt permanente, necesită microscop cu fluorescență</td></tr>
<tr><td><b>G</b></td><td>pretratament cu tripsină (sau baze, soluții saline), apoi Giemsa</td><td>benzi închise = aceleași cu benzile Q fluorescente (bogate în AT)</td><td>cea mai folosită: microscop obișnuit, simplă; telomerele nu se colorează</td></tr>
<tr><td><b>R</b></td><td>denaturare termică la 85 °C, soluție salină pH 6,5, Giemsa sau acridin-orange</td><td>inversul lui G: benzi închise = bogate în GC (eucromatină)</td><td>capetele cromozomilor se văd bine</td></tr>
<tr><td><b>T</b></td><td>variantă de R</td><td>subset de benzi R, cu telomerele intens colorate</td><td>diferențiere foarte bună, dar laborioasă</td></tr>
<tr><td><b>C</b></td><td>hidroxid de bariu saturat, apoi Giemsa</td><td>heterocromatina constitutivă, mai ales centromerică</td><td>1q12, 9q12, 16q11.2, Yq12 apar ca blocuri mari</td></tr>
<tr><td><b>NOR</b></td><td>nitrat de argint</td><td>regiunile organizatoare de nucleol active</td><td>tulpinile sateliților acrocentricilor</td></tr></table></div>
<figure><img src="fig/lp_bandari.svg" alt="Cromozomii 1 și 9 în marcajele G, Q, R și C">
<figcaption><b>Aceiași doi cromozomi, patru marcaje</b>, simulate din aceeași hartă de benzi (UCSC hg38): Q are aceeași dispoziție ca G, dar în fluorescență; R este negativul lui G; C lasă vizibile doar blocurile de heterocromatină de lângă centromer (1q12, 9q12). Figură proprie din date.</figcaption></figure>
[[gal:cariotip_46xx|<b>Metafază umană 46,XX</b>, așa cum apare înainte de aranjare: cromozomi bicromatidici, împrăștiați, în aceeași celulă (Figura 7 din LP prezintă o metafază cu marcaj G).;;cariotip|<b>Cariotip uman masculin cu marcaj G</b> (Figura 8 din LP): perechile aranjate, cu benzile caracteristice fiecărui cromozom.]]
<div class="emery"><b>De ce benzile G închise sunt bogate în AT</b>
<p>Benzile G-pozitive sunt regiuni sărace în gene, bogate în AT, replicate târziu și mai compacte; benzile G-negative (R-pozitive) sunt bogate în GC și în gene, replicate devreme. Cartea le numește „heterocromatice”, dar nu sunt heterocromatină constitutivă: aceea apare la marcajul C (<a href="#/c01/cromatina">eucromatină și heterocromatină, ghidul de curs</a>).</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ai doar un microscop obișnuit și vrei preparate permanente. Ce marcaj alegi?</summary><div>G: se citește în lumină obișnuită și preparatul se păstrează. Q cere fluorescență și se stinge în timp.</div></details>
<details class="q"><summary>De ce o deleție de 2 Mb poate scăpa la 400 de benzi, dar se vede la 850?</summary><div>La 400 de benzi o bandă are în medie ~7–8 Mb; o pierdere de 2 Mb nu schimbă vizibil banda. La 850 de benzi, o bandă are ~3–4 Mb, iar sub-banda lipsă devine detectabilă.</div></details>
</div>`
},
{
id: "descriere", titlu: "Descrierea cariotipului uman, grupă cu grupă", pag: "35–37", emery: "cap. 3, p. 26–29", acopera: ["lp03-r05", "lp03-r06", "lp03-r07"],
html: `
<p>Cariotipul se alcătuiește cu ajutorul <b>idiogramelor</b>: reprezentări schematice ale cromozomilor, în ordinea descrescătoare a mărimii, cu benzile standardizate (Figura 9 din LP; o idiogramă din date e la începutul capitolului).</p>
<div class="tw"><table><tr><th>Grupa</th><th>Cromozomi</th><th>Ce reții (după carte)</th><th>Repere de bandare G utile la LP</th></tr>
<tr><td><b>A</b></td><td>1–3</td><td>mari. 1: cel mai mare, metacentric, constricție secundară pe q lângă centromer. 2: mai mic, submetacentric. 3: mai mic decât primii, metacentric</td><td>1: bloc de heterocromatină 1q12 sub centromer; jumătatea distală a lui 1p deschisă la culoare. 3: aspect simetric, cu grupe de benzi închise pe ambele brațe</td></tr>
<tr><td><b>B</b></td><td>4, 5</td><td>mari, submetacentrici, brațe scurte mici</td><td>4: benzi închise distribuite uniform pe q; 5: grup de benzi închise la mijlocul lui q și o zonă deschisă spre capăt</td></tr>
<tr><td><b>C</b></td><td>6–12, X</td><td>mijlocii, submetacentrici; 6, 7, 11 și X mai „metacentrici” decât 8, 9, 10, 12; 9 cu constricție secundară; X între 7 și 8 ca lungime</td><td>6: bandă deschisă largă la mijlocul lui p (6p21, regiunea HLA); 7: bandă închisă la capătul lui p; 9: heterocromatină 9q12 lângă centromer; X: câte o bandă închisă la mijlocul fiecărui braț (Xp21, Xq21)</td></tr>
<tr><td><b>D</b></td><td>13–15</td><td>mijlocii, acrocentrici, toți pot avea sateliți</td><td>13: benzile închise spre capătul distal al lui q; 15: benzile închise în jumătatea proximală</td></tr>
<tr><td><b>E</b></td><td>16–18</td><td>16 metacentric mijlociu, cu constricție secundară; 17 și 18 submetacentrici mici; 17 are p mai lung decât 18</td><td>16: heterocromatină 16q11.2; 17: q distal cu bandă închisă după o zonă deschisă; 18: p scurt și deschis</td></tr>
<tr><td><b>F</b></td><td>19, 20</td><td>mici, metacentrici</td><td>19: aproape în întregime deschis, centromer închis; 20: p mai închis decât q</td></tr>
<tr><td><b>G</b></td><td>21, 22, Y</td><td>mici, acrocentrici; 21 &lt; 22; 21 și 22 pot avea sateliți; Y fără sateliți, cromatide mai puțin divergente, poate avea constricție pericentromerică pe q</td><td>21: bandă închisă mare pe q proximal; 22: mai lung, cu o bandă închisă mică; Y: q distal variabil (heterocromatină)</td></tr></table></div>
[[gal:idiograma_benzi|<b>Idiograma standard a cromozomilor umani</b>, cu benzi și sub-benzi numerotate (după ISCN): modelul pe care îl folosești la LP pentru a recunoaște fiecare cromozom decupat.;;banda_nomenc|<b>Cum se citește numele unei benzi</b>: cromozom, braț, regiune, bandă, sub-bandă: 3p22.1 = cromozomul 3, brațul p, regiunea 2, banda 2, sub-banda 1 (detalii în <a href="#/lp07">LP VII</a>).]]
<figure><img src="fig/lp_cariotip_xx.svg" alt="Cariotip 46,XX aranjat pe grupe">
<figcaption><b>Cariotipul 46,XX</b>, aceeași construcție ca pentru 46,XY de la începutul capitolului: doi cromozomi X în locul perechii XY, deci 16 cromozomi în grupa C și 4 în grupa G. Figură proprie din date (UCSC hg38).</figcaption></figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Numeri 16 cromozomi în grupa C și 4 în grupa G. Ce sex are persoana?</summary><div>Feminin: X e în grupa C (6–12 + 2 X = 16), iar fără Y grupa G are doar 21 și 22, de două ori (4).</div></details>
<details class="q"><summary>Cum deosebești Y de un 21 sau 22 pe un preparat cu colorare uniformă?</summary><div>Y nu are sateliți, are cromatidele mai apropiate (paralele) și capătul q mai puțin conturat; uneori are o constricție pericentromerică pe q. La bandare Q, Yq distal strălucește intens.</div></details>
</div>`
},
{
id: "heteromorfism", titlu: "Heteromorfismul cromozomial", pag: "38", emery: "cap. 3, p. 29", acopera: ["lp03-r08"],
html: `
<p>Variații morfologice ale omologilor, fără semnificație clinică, numite <b>heteromorfisme</b> (Conferința de la Paris, 1971); „polimorfism” se rezervă mai ales variantelor alelice. Afectează regiuni de <b>heterocromatină</b>, inactive genetic, bogate în ADN repetitiv.</p>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Exemple de heteromorfisme cromozomiale">
${(() => {
  const C = (x, p, q, h, sat, hcls = "fP", lbl = "") => { const y = 110; let s = `<rect x="${x - 6}" y="${y - p}" width="12" height="${p - 2}" rx="5" class="fZ"/><rect x="${x - 6}" y="${y + 2}" width="12" height="${q - 2}" rx="5" class="fZ"/>`; if (h) s += `<rect x="${x - 6}" y="${y + 3}" width="12" height="${h}" class="${hcls}"/>`; if (sat) s += `<line x1="${x}" y1="${y - p}" x2="${x}" y2="${y - p - sat}" class="sm" stroke-width="2"/><circle cx="${x}" cy="${y - p - sat - 4}" r="${sat > 8 ? 6 : 4}" class="fZ"/>`; return s + `<text x="${x}" y="${y + q + 16}" text-anchor="middle" class="tm" style="font-size:11px">${lbl}</text>`; };
  let s = "";
  [["1qh+", "heterocromatina 1q12 mai lungă", [[60, 50, 60, 12, 0, "fP", "1"], [100, 50, 74, 26, 0, "fP", "1qh+"]]], ["9qh+", "heterocromatina 9q12 mai lungă", [[250, 26, 60, 8, 0, "fP", "9"], [290, 26, 76, 24, 0, "fP", "9qh+"]]], ["15ps+", "sateliți mai mari pe 15", [[440, 10, 70, 0, 6, "fP", "15"], [480, 10, 70, 0, 14, "fP", "15ps+"]]], ["Yqh+", "Yq mai lung (~10% din bărbați: variații marcate)", [[630, 8, 34, 16, 0, "fC", "Y"], [670, 8, 58, 40, 0, "fC", "Yqh+"]]]].forEach(([t, d, cs], i) => {
    s += `<text x="${80 + i * 190}" y="20" text-anchor="middle" class="ti b">${t}</text>` + cs.map((a) => C(...a)).join("") + fo(i * 190 + 6, 206, 180, 50, d, "text-align:center");
  });
  return s;
})()}
</svg>
<figcaption><b>Patru heteromorfisme frecvente</b>, cu notația lor (h = heterocromatină, s = sateliți, + = mai lung/mai mare). Violet/galben = heterocromatina variabilă. Purtătorul are omologul variant lângă cel obișnuit; varianta se transmite mendelian, la 50% din copii. Schemă proprie.</figcaption>
</figure>
<div class="pasi">
<div><b>Lungimea brațelor lungi</b>mai ales Yq: ~10% din bărbații normali au variații marcate, din heterocromatina pericentromerică</div>
<div><b>Sateliții</b>mare variabilitate de număr, formă, mărime</div>
<div><b>Benzile C</b>heterocromatina centromerică sau juxtacentromerică, mai ales 1, 9, 16</div>
<div><b>Situsurile fragile</b>induse de antifolați: ~5% din populație, peste 60 de tipuri</div>
</div>
<div class="lab"><b>La ce folosesc</b>
<p>Fiecare persoană are un set propriu de heteromorfisme, transmise mendelian: sunt <b>markeri</b> care arată de la care părinte vine un cromozom. Aplicații: <b>originea cromozomului suplimentar</b> în trisomii (matern sau patern, MI sau MII) și medicina legală (paternitate). Cartea spune că se transmit „de tip dominant”; mai precis sunt markeri <b>codominanți</b>: se vede și varianta, și omologul obișnuit. Unele studii găsesc variantele mai frecvent la cuplurile cu avorturi repetate, fără o semnificație demonstrată.</p></div>`
},
{
id: "indicatii", titlu: "Indicațiile și limitele studiului cromozomial", pag: "39–40", emery: "cap. 17, p. 268", acopera: ["lp03-r09"],
html: `
<div class="tw"><table><tr><th>#</th><th>Indicație</th><th>De ce</th></tr>
<tr><td>1</td><td>sindroame plurimalformative (≥ 3 malformații), cu sau fără dizabilitate intelectuală; și când diagnosticul clinic e cert (Down)</td><td>în Down, cariotipul arată <b>tipul</b> anomaliei (liberă, translocație, mozaic), care schimbă riscul de recurență</td></tr>
<tr><td>2</td><td>dizabilitate intelectuală moderată sau severă de cauză necunoscută</td><td>după excluderea suferinței fetale, infecțiilor, bolilor metabolice</td></tr>
<tr><td>3</td><td>„comportament deviant, agresiv, fără cauză”</td><td>indicație istorică (vezi mai jos)</td></tr>
<tr><td>4</td><td>stări intersexuale</td><td>sexul genetic, anomalii ale gonozomilor</td></tr>
<tr><td>5</td><td>tulburări de diferențiere sexuală: lipsa caracterelor sexuale secundare, amenoree primară, pubertate întârziată</td><td>Turner, Klinefelter (LP V)</td></tr>
<tr><td>6</td><td>sterilitate primară de cuplu neexplicată; bărbați cu spermogramă anormală</td><td>Klinefelter, translocații echilibrate</td></tr>
<tr><td>7</td><td>avorturi spontane repetate, feți morți (malformați sau nu); cariotip și pe produsul de avort sau nou-născutul decedat</td><td>~50% din avorturile din primul trimestru au anomalii cromozomiale</td></tr>
<tr><td>8</td><td>părinții unui copil cu anomalie structurală neechilibrată</td><td>caută purtătorul unei forme echilibrate (LP VI)</td></tr>
<tr><td>9</td><td>cancere și hemopatii maligne (cromozomul Ph1 în LMC)</td><td>diagnostic, monitorizare, prognostic, eficiența tratamentului</td></tr>
<tr><td>10</td><td>expunere profesională la radiații sau substanțe chimice</td><td>anomalii dobândite</td></tr>
<tr><td>11</td><td>diagnostic prenatal la cuplurile cu risc crescut</td><td>LP XII</td></tr></table></div>
<div class="capcana"><b>Limitele: când cariotipul nu ajută</b>
<p>Inutil în bolile <b>monogenice</b> sau <b>poligenice</b> (gena anormală nu se vede la microscop: e nevoie de genetică moleculară, LP XI) și în <b>malformațiile unice</b>, chiar grave, de cauză multifactorială (malformații de cord, anomalii de membre izolate).</p></div>
<div class="emery"><b>Două corecturi față de practica actuală</b>
<p><b>„Comportamentul deviant”</b> ca indicație vine din anii '60–'70, din studiile pe bărbații 47,XYY din închisori; legătura cu agresivitatea nu s-a confirmat (<a href="#/lp05/xyy">LP V</a>). <b>La dizabilitate intelectuală, autism și malformații multiple</b>, Emery (cap. 17) recomandă azi ca primă investigație <b>microarray-ul cromozomial</b> (CMA), care vede microdeleții și microduplicații sub rezoluția cariotipului; cariotipul rămâne testul pentru aneuploidii, translocații echilibrate și mozaicuri.</p></div>`
},
{
id: "aplicatii", titlu: "Aplicații practice: alcătuirea cariotipului", pag: "40", emery: "cap. 3",
html: `
<ol class="protocol">
<li><b>Examinezi preparatul la microscop</b> și apreciezi calitatea culturii.<span class="de-ce">Numărul de metafaze, dispersia și claritatea cromozomilor (<a href="#/lp02/aplicatii">tabelul de defecte din LP II</a>).</span></li>
<li><b>Numeri cromozomii metafazei</b> alese.<span class="de-ce">46? Bifează-i pe fotografie pe măsură ce îi numeri, ca să nu numeri unul de două ori.</span></li>
<li><b>Decupezi fiecare cromozom</b> din fotografie.<span class="de-ce">Taie aproape de contur; păstrează orientarea (p în sus).</span></li>
<li><b>Sortezi pe grupe</b>: mărime și poziția centromerului.<span class="de-ce">Începe cu cei ușor de recunoscut: 1, 2, 3 (cei mai mari), acrocentricii D și G, perechile mici F.</span></li>
<li><b>Împerechezi omologii</b> după benzi, cu idiograma alături.<span class="de-ce">Grupa C e cea mai grea: folosește reperele din <a href="#/lp03/descriere">tabelul grupelor</a>.</span></li>
<li><b>Lipești perechile în caiet</b>, cu centromerii pe aceeași linie, și scrii formula.<span class="de-ce">46,XX sau 46,XY (scrierea formulei: <a href="#/lp07">LP VII</a>).</span></li>
</ol>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ai sortat 46 de cromozomi și grupa G are 5. Ce verifici înainte să scrii 46,XY?</summary><div>Că unul dintre cei cinci este Y (fără sateliți, cromatide paralele, eventual Yq strălucitor la Q) și că grupa C are 15 cromozomi. Altfel poți avea, de exemplu, o femeie cu un acrocentric G suplimentar și un cromozom lipsă în altă parte.</div></details>
</div>`
}
]
});
})();
