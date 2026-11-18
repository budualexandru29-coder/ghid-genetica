/* LP IV — Mutații genetice: anomaliile numerice și trisomiile autozomale (LP p. 41–50) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf4)"/>`;
// Tabelul 2 din LP (p. 44): prevalența la naștere, 1 : N
const T2 = [["15–19", 1600, 17000, 33000], ["20–24", 1400, 14000, 25000], ["25–29", 1100, 11000, 20000], ["30–34", 700, 7100, 14000], ["35–39", 240, 2400, 4800], ["40–44", 70, 700, 1600], ["45–49", 20, 650, 1500]];
// Emery ed. 16, Tabelul 3.4: originea parentală a erorii meiotice (%)
const ORIG = [["Trisomia 13", 15, 85], ["Trisomia 18", 10, 90], ["Trisomia 21", 5, 95], ["45,X", 80, 20], ["47,XXX", 5, 95], ["47,XXY", 45, 55], ["47,XYY", 100, 0]];
// cromozom mic stilizat pentru schemele de translocație
const cr = (x, y, h, cl, w = 10) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="${h}" rx="${w / 2}" class="${cl}"/>`;
const rob = (x, y, top, bot) => `<rect x="${x - 5}" y="${y}" width="10" height="${top}" rx="5" class="fT"/><rect x="${x - 5}" y="${y + top - 4}" width="10" height="${bot}" rx="5" class="fG"/>`;

GHID.capitol({
id: "lp04",
intro: `<p class="lead">Când numărul de cromozomi nu mai e 46. Capitolul pornește de la clasificarea mutațiilor, trece prin poliploidii și aneuploidii și se oprește la cele trei trisomii autozomale cu care se poate naște un copil: 21, 18 și 13. Pentru fiecare: ce arată cariotipul, cum arată pacientul și ce risc de recurență are familia.</p>
<figure>
<svg viewBox="0 0 760 242" role="img" aria-label="De ce supraviețuiesc doar trei trisomii autozomale">
${(() => {
  const ARM = { 13: 114, 18: 80, 21: 47, 1: 249, 2: 242, 16: 90, 22: 51 };
  let s = `<text x="20" y="22" class="ti b">Trisomiile viabile sunt ale cromozomilor cu puține gene</text>`;
  const D = [["21", 230, "viabilă", "tok"], ["18", 270, "viabilă, rar peste 1 an", "tw2"], ["13", 320, "viabilă, rar peste 1 an", "tw2"], ["16", 850, "cea mai frecventă în avorturi; letală", "tm"], ["22", 440, "avorturi", "tm"], ["2", 1300, "avorturi", "tm"], ["1", 2000, "practic nedetectată", "tm"]];
  D.forEach(([c, g, t, cl], i) => { const y = 44 + i * 24, w = g / 2000 * 380; s += `<text x="80" y="${y + 13}" text-anchor="end" class="ti b">+${c}</text><rect x="90" y="${y}" width="${w}" height="17" rx="4" class="${i < 3 ? "fA" : "fZ"}"/><text x="${96 + w}" y="${y + 13}" class="tm" style="font-size:11.5px">~${g} gene · ${t}</text>`; });
  s += `<text x="20" y="232" class="tm">Număr aproximativ de gene codante pe cromozom (rotunjit).</text>`;
  return s;
})()}
</svg>
<figcaption><b>De ce tocmai 21, 18 și 13.</b> Cromozomii 21, 18 și 13 au cele mai puține gene codante dintre autozomi: o copie în plus dezechilibrează mai puține produse. Trisomia 16, deși cel mai des întâlnită în avorturile spontane, nu ajunge la termen. Valori aproximative, rotunjite; schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "generalitati", titlu: "Mutațiile: clasificare; poliploidii și aneuploidii", pag: "41–42", emery: "cap. 3, p. 34–36; cap. 17", acopera: ["lp04-r01"], curs: ["c05/clasificare", "c05/extinse"],
html: `
<p><b>Mutația</b> este orice modificare permanentă în secvența sau aranjarea ADN-ului, întâmplătoare și ereditară. Clasificarea completă e în <a href="#/c05/clasificare">ghidul de curs</a>; aici contează împărțirea după mărimea materialului afectat:</p>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Cele trei categorii de mutații și frecvența lor">
${[["Genice", "secvența unei gene: întreaga genă, o parte sau o pereche de nucleotide (punctiforme) → alele noi", "10⁻⁶ / locus / generație", 6, "fG"], ["Cromozomiale", "anomalii structurale: pierdere, câștig sau rearanjare de segmente (LP VI)", "10⁻⁴ / diviziune", 4, "fC"], ["Genomiale", "numărul de cromozomi: seturi întregi (poliploidie) sau 1–2 cromozomi (aneuploidie)", "10⁻² / diviziune", 2, "fT"]].map(([t, d, f, e, c], i) => `<rect x="20" y="${20 + i * 70}" width="150" height="58" rx="10" class="${c}"/><text x="95" y="${55 + i * 70}" text-anchor="middle" style="fill:#fff;font-size:15px" class="b">${t}</text>${fo(182, 22 + i * 70, 310, 56, d)}<rect x="500" y="${32 + i * 70}" width="${(8 - e) * 22}" height="30" rx="6" class="${c}" opacity=".85"/><text x="${508 + (8 - e) * 22}" y="${52 + i * 70}" class="ti b" style="font-size:12.5px">${f}</text>`).join("")}
<text x="20" y="232" class="tm">Bara din dreapta crește cu frecvența (scară logaritmică). Genomiale + cromozomiale = „anomalii cromozomiale”.</text>
</svg>
<figcaption><b>Mutațiile după mărimea materialului afectat</b>, cu frecvențele din carte: erorile de număr sunt de departe cele mai frecvente, cele genice cele mai rare. După numărul de celule afectate, mutațiile sunt <b>omogene</b> (toate celulele) sau <b>în mozaic</b> (doar unele linii celulare). Schemă proprie.</figcaption>
</figure>
<h3>Poliploidia: seturi întregi în plus</h3>
<p>La om s-au găsit doar <b>triploidia (3n = 69)</b> și <b>tetraploidia (4n = 92)</b>, ambele letale foarte devreme în sarcină. Triploidia apare cel mai des prin <b>dispermie</b>; mai rar prin gameți diploizi (diandrie, diginie); tetraploidia, prin <b>endoreduplicare</b> în prima diviziune a zigotului. Mecanismele sunt desenate în <a href="#/lp01/fecundare">LP I, anomaliile de fecundare</a>.</p>
<h3>Aneuploidia: unul sau câțiva cromozomi</h3>
<div class="pasi">
<div><b>Monosomie</b>2n − 1 = 45. Singura viabilă: monosomia X</div>
<div><b>Trisomie</b>2n + 1 = 47. Viabile: 21, 18, 13 (și 8 în mozaic); XXX, XXY, XYY</div>
<div><b>Tetrasomie</b>2n + 2 = 48. La om doar pentru cromozomii sexuali (XXXX, XXXY)</div>
<div><b>Pentasomie</b>2n + 3 = 49. Doar sexuali (XXXXX, XXXXY)</div>
</div>
<p>Aneuploidiile <b>omogene</b> vin din erori de meioză (nondisjuncție în MI sau MII, întârziere anafazică), cele <b>în mozaic</b> din erori de mitoză după fecundare (<a href="#/lp01/erori-meioza">desenele din LP I</a>). O trisomie omogenă poate deveni mozaic dacă unele celule pierd cromozomul în plus („salvarea trisomiei”): 47,+21/46.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Originea parentală a erorii meiotice în aneuploidii">
${(() => {
  let s = `<text x="20" y="22" class="ti b">De la care părinte vine eroarea meiotică</text><rect x="470" y="10" width="14" height="14" rx="3" class="fG"/><text x="490" y="22" class="ti" style="font-size:12px">paternă</text><rect x="560" y="10" width="14" height="14" rx="3" class="fT"/><text x="580" y="22" class="ti" style="font-size:12px">maternă</text>`;
  ORIG.forEach(([n, p, m], i) => { const y = 40 + i * 32, W = 520; s += `<text x="140" y="${y + 15}" text-anchor="end" class="ti b">${n}</text><rect x="150" y="${y}" width="${W * p / 100}" height="22" class="fG"/><rect x="${150 + W * p / 100}" y="${y}" width="${W * m / 100}" height="22" class="fT"/>` + (p >= 10 ? `<text x="${150 + W * p / 200}" y="${y + 15}" text-anchor="middle" style="fill:#fff;font-size:11.5px" class="b">${p}%</text>` : "") + (m >= 10 ? `<text x="${150 + W * p / 100 + W * m / 200}" y="${y + 15}" text-anchor="middle" style="fill:#fff;font-size:11.5px" class="b">${m}%</text>` : ""); });
  s += `<text x="20" y="284" class="tm">Date: Emery ed. 16, Tabelul 3.4 (studii cu markeri ADN).</text>`;
  return s;
})()}
</svg>
<figcaption><b>Trisomiile autozomale sunt aproape întotdeauna de origine maternă</b> (cartea: aproape 75% din trisomiile 21 prin eroare în MI, 90–95% din trisomiile viabile materne). Excepțiile: <b>45,X</b> (cel mai des lipsește cromozomul sexual patern) și <b>47,XYY</b> (Y suplimentar poate veni doar de la tată, prin nondisjuncție în MII). La 47,XXY, cele două origini sunt aproape egale.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce o monosomie autozomală e mai gravă decât trisomia aceluiași cromozom?</summary><div>Pierderea unei copii lasă jumătate din doză pentru sute de gene și demască orice alelă recesivă de pe omologul rămas. Excesul (150%) e mai bine tolerat decât lipsa (50%).</div></details>
<details class="q"><summary>De ce 47,XYY nu poate apărea din eroarea mamei?</summary><div>Mama nu are cromozom Y. Gametul cu YY vine din tată, prin nesepararea cromatidelor surori ale lui Y în meioza II.</div></details>
</div>`
},
{
id: "down-citogenetic", titlu: "Sindromul Down: incidență și diagnostic citogenetic", pag: "43–44", emery: "cap. 17, p. 250–253", acopera: ["lp04-r02", "lp04-r03", "lp04-r04"], curs: ["c05/extinse"],
html: `
<p>Cea mai frecventă boală cromozomială: <b>1/650–1/800</b> de nou-născuți vii, ceva mai frecventă la băieți. La concepție e mult mai frecventă, dar o mare parte se pierde prin avort. Deși clinica e caracteristică, <b>cariotipul e obligatoriu</b>: confirmă diagnosticul și arată tipul anomaliei, de care depinde riscul de recurență.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Cele trei forme citogenetice ale sindromului Down">
${(() => {
  const F = [["Trisomie liberă", 92, "47,XX,+21 / 47,XY,+21", "nondisjuncție meiotică, mai ales maternă; legată de vârsta mamei", "fT"], ["Translocație robertsoniană", 5, "46,XX,t(14q;21q)", "frecvent moștenită de la un părinte purtător echilibrat", "fP"], ["Mozaic", 3, "46,XX/47,XX,+21", "nondisjuncție mitotică postzigotică; fenotip adesea mai ușor", "fA"]];
  const cx = 130, cy = 135, R = 95, r0 = 52; let a = -Math.PI / 2, s = "";
  F.forEach(([n, p, k, d, c], i) => {
    const b = a + p / 100 * 2 * Math.PI, L = p > 50 ? 1 : 0, P = (rr, t) => `${(cx + rr * Math.cos(t)).toFixed(1)} ${(cy + rr * Math.sin(t)).toFixed(1)}`;
    s += `<path d="M${P(R, a)} A${R} ${R} 0 ${L} 1 ${P(R, b)} L${P(r0, b)} A${r0} ${r0} 0 ${L} 0 ${P(r0, a)}z" class="${c}"/>`;
    s += `<rect x="270" y="${30 + i * 78}" width="16" height="16" rx="3" class="${c}"/><text x="294" y="${43 + i * 78}" class="ti b">${n} · ${p}%</text><text x="294" y="${62 + i * 78}" class="ta" style="font-family:ui-monospace,monospace;font-size:12px">${k}</text>` + fo(294, 66 + i * 78, 450, 34, d);
    a = b;
  });
  s += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" class="ti b">trisomia 21</text>`;
  return s;
})()}
</svg>
<figcaption><b>Cele trei forme citogenetice</b>, cu proporțiile din carte. Clinic nu se pot deosebi sigur; doar cariotipul le separă. Simptomele par legate de trisomia regiunii critice <b>DSCR, în 21q22</b>. Schemă proprie.</figcaption>
</figure>
[[img:t21|<b>Cariotip în trisomia 21</b>: trei cromozomi 21 (încadrați), restul perechilor normale.]]
<h3>Vârsta maternă (Tabelul 2 din LP)</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Prevalența trisomiilor 21, 18 și 13 în funcție de vârsta maternă">
${(() => {
  const X0 = 90, Y0 = 270, W = 560, H = 230, lo = Math.log10(10), hi = Math.log10(40000);
  const X = (i) => X0 + i * W / 6, Y = (n) => Y0 - (hi - Math.log10(n)) / (hi - lo) * H * -1 - H;
  const Yp = (n) => Y0 - H + (Math.log10(n) - lo) / (hi - lo) * H;
  let s = `<text x="20" y="22" class="ti b">Riscul la naștere, 1 din N (scară logaritmică; sus = mai frecvent)</text>`;
  [10, 100, 1000, 10000].forEach((n) => (s += `<line x1="${X0}" y1="${Yp(n)}" x2="${X0 + W}" y2="${Yp(n)}" class="sm" stroke-dasharray="2 4" opacity=".6"/><text x="${X0 - 8}" y="${Yp(n) + 4}" text-anchor="end" class="tm" style="font-size:11px">1:${n.toLocaleString("ro-RO")}</text>`));
  T2.forEach(([v], i) => (s += `<text x="${X(i)}" y="${Y0 + 22}" text-anchor="middle" class="tm" style="font-size:11.5px">${v}</text>`));
  s += `<text x="${X0 + W / 2}" y="${Y0 + 44}" text-anchor="middle" class="tm">vârsta mamei (ani)</text>`;
  [[1, "sT", "fT", "trisomia 21"], [2, "sP", "fP", "trisomia 18"], [3, "sG", "fG", "trisomia 13"]].forEach(([k, sc, fc, et]) => {
    s += `<path d="${T2.map((r, i) => (i ? "L" : "M") + X(i) + " " + Yp(r[k]).toFixed(1)).join("")}" class="${sc}" stroke-width="2.6" fill="none"/>` + T2.map((r, i) => `<circle cx="${X(i)}" cy="${Yp(r[k]).toFixed(1)}" r="3.5" class="${fc}"/>`).join("") + `<text x="${X(6) + 10}" y="${Yp(T2[6][k]) + 4}" class="ti b" style="font-size:12px">${et}</text>`;
  });
  s += `<text x="${X(4)}" y="${Yp(240) - 10}" text-anchor="middle" class="tw2 b" style="font-size:11.5px">1:240</text><text x="${X(6)}" y="${Yp(20) - 10}" text-anchor="middle" class="tw2 b" style="font-size:11.5px">1:20</text>`;
  return s;
})()}
</svg>
<figcaption><b>Tabelul 2, ca grafic.</b> Între 20 și 45 de ani riscul de trisomie 21 crește de ~70 de ori (de la 1:1400 la 1:20); curbele trisomiilor 18 și 13 au aceeași formă, la un nivel de ~10–20 de ori mai jos. Cauze propuse: recombinare redusă în ovocitul fetal (fără chiasme, omologii se separă la întâmplare) și fus anormal în ovocitul îmbătrânit. Date din carte (p. 44).</figcaption>
</figure>
<div class="emery"><b>Vârsta maternă nu explică majoritatea cazurilor</b>
<p>Riscul individual crește cu vârsta, dar cele mai multe nașteri sunt la mame tinere: de aceea majoritatea copiilor cu sindrom Down au mame sub 35 de ani. Asta a mutat screeningul de la criteriul de vârstă la screeningul tuturor sarcinilor (<a href="#/lp12">LP XII</a>).</p></div>`
},
{
id: "down-clinic", titlu: "Sindromul Down: tabloul clinic", pag: "44–45", emery: "cap. 17, p. 252–253", acopera: ["lp04-r05"],
html: `
<p>Diagnosticul clinic se pune de obicei la naștere, pe <b>asocierea</b> semnelor; niciunul nu e specific singur.</p>
<figure>
<svg viewBox="0 0 760 440" role="img" aria-label="Semnele sindromului Down grupate pe regiuni">
${(() => {
  const Z = [["Cap", "brahicefalie, microcefalie, occiput turtit, fontanele largi; profil plat, facies rotund", 20, 20], ["Ochi", "fante palpebrale oblice în sus și în afară, epicantus, pete Brushfield, strabism", 20, 112], ["Nas, gură", "rădăcina nasului turtită, narine mici, antevertite; macroglosie, limbă „geografică”, gura întredeschisă, diasteme, hipodonție", 20, 204], ["Urechi, gât", "urechi mici, rotunde, jos inserate, hipoacuzie; gât scurt, exces de piele pe ceafă", 20, 296], ["General", "hipotonie, hiperlaxitate articulară, hiporeflexie; piele laxă, palidă; statură mică, tendință la obezitate", 390, 20], ["Mâini, picioare", "mâini scurte și late, brahidactilie, clinodactilia degetului mic, plică palmară unică; spațiu de sandală între haluce și degetul II", 390, 112], ["Viscere", "cord: DSA, DSV, canal atrioventricular comun, PCA; digestiv: atrezie/stenoză duodenală, boala Hirschsprung, imperforație anală", 390, 204], ["Evoluție", "dizabilitate intelectuală, de obicei ușoară–moderată; tiroidită, hipotiroidism; leucemii acute; boală Alzheimer la adult; speranță de viață ~60 de ani", 390, 296]];
  return Z.map(([t, d, x, y], i) => `<rect x="${x}" y="${y}" width="350" height="82" rx="10" class="${i < 4 ? "fas" : i < 6 ? "fis" : "fws"}"/><text x="${x + 12}" y="${y + 22}" class="ti b">${t}</text>${fo(x + 12, y + 28, 330, 54, d, "color:var(--ink)")}`).join("") + `<text x="20" y="410" class="tm">Mov = cap și față · albastru = membre și aspect general · portocaliu = organe și evoluție.</text><text x="20" y="428" class="tm">Fertilitate redusă la ambele sexe (vezi caseta de mai jos).</text>`;
})()}
</svg>
<figcaption><b>Semnele din carte, grupate pe regiuni.</b> Dezvoltarea psihomotorie e întârziată cu 2–3 ani; prognosticul depinde de malformațiile cardiace, infecțiile respiratorii, leucemie în copilărie și boala Alzheimer la adult. Schemă proprie.</figcaption>
</figure>
[[gal:down_copil|<b>Copil cu sindrom Down</b>: facies rotund, profil plat, fante palpebrale oblice, rădăcina nasului turtită.;;brushfield|<b>Pete Brushfield</b>: puncte albe-cenușii dispuse în cerc la periferia irisului.;;plica|<b>Plică palmară transversală unică</b>, bilaterală. Apare și la ~1–2% din populația generală, deci are valoare doar în asociere.]]
<div class="capcana"><b>Ce s-a schimbat față de carte</b>
<p><b>„Fante palpebrale mongoloide”</b> și <b>„plică simiană”</b> sunt termeni abandonați: se spune <i>fante palpebrale oblice în sus</i> și <i>plică palmară transversală unică</i>. <b>„Retard mental moderat sau sever (IQ sub 50)”</b>: astăzi se descrie o dizabilitate intelectuală de obicei <b>ușoară până la moderată</b>, cu variație mare, iar intervenția timpurie contează. <b>„Bărbații sunt sterili”</b>: fertilitatea e mult redusă, dar sunt raportați tați cu sindrom Down; femeile pot avea copii, cu risc de ~50% ca acesta să fie afectat.</p></div>
<div class="emery"><b>De ce leucemia și Alzheimer</b>
<p>Pe cromozomul 21 se află gena <i>APP</i> (proteina precursoare a amiloidului): trei copii înseamnă mai mult β-amiloid și leziuni de tip Alzheimer după 40 de ani. Nou-născuții cu sindrom Down pot avea o <b>mielopoieză tranzitorie anormală</b>, iar riscul de leucemie acută în copilărie e de ~10–20 de ori mai mare.</p></div>`
},
{
id: "down-sfat", titlu: "Sindromul Down: sfatul genetic și diagnosticul diferențial", pag: "45–46", emery: "cap. 17, p. 253; cap. 3, p. 38–40", acopera: [], curs: ["c12/translocatii"],
html: `
<p>Diagnosticul prenatal se indică la vârsta maternă peste 35 de ani, la un copil afectat anterior sau la un părinte purtător de translocație robertsoniană cu 21: screening (triplu test, ecografie), confirmare prin cariotip din amniocite sau vilozități coriale (<a href="#/lp12">LP XII</a>). Riscul de recurență depinde de cariotip:</p>
<div class="capcana"><b>Triplul test a fost înlocuit</b><p>Cartea propune screening prin triplu test (trimestrul II). Astăzi se folosesc testul combinat din trimestrul I (translucența nucală + PAPP-A + β-hCG) și, tot mai des, <b>ADN-ul fetal liber din sângele matern (NIPT)</b>, cu sensibilitate peste 99% pentru trisomia 21. Un screening pozitiv tot se confirmă prin test invaziv.</p></div>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Riscul de recurență după forma citogenetică">
${(() => {
  const R = [["Trisomie liberă", 1, "~1% (mai mult dacă mama e în vârstă)", "fT"], ["Mozaic", .1, "< 0,1% (eroare după fecundare)", "fA"], ["t(14q;21q), mama purtătoare", 10, "~10%", "fP"], ["t(14q;21q), tatăl purtător", 1, "~1%", "fP"], ["t(21q;21q), un părinte purtător", 100, "100%", "fT"]];
  const lg = (v) => (Math.log10(v) + 1) / 3 * 420;
  let s = `<text x="20" y="22" class="ti b">Riscul pentru o sarcină următoare (scară logaritmică)</text>`;
  [0.1, 1, 10, 100].forEach((v) => (s += `<line x1="${230 + lg(v)}" y1="34" x2="${230 + lg(v)}" y2="232" class="sm" stroke-dasharray="2 4" opacity=".6"/><text x="${230 + lg(v)}" y="250" text-anchor="middle" class="tm" style="font-size:11px">${String(v).replace(".", ",")}%</text>`));
  R.forEach(([n, v, t, c], i) => { const y = 42 + i * 38; s += `<text x="222" y="${y + 16}" text-anchor="end" class="ti b" style="font-size:12.5px">${n}</text><rect x="230" y="${y}" width="${Math.max(lg(v), 3)}" height="24" rx="4" class="${c}"/><text x="${236 + Math.max(lg(v), 3)}" y="${y + 16}" class="ti" style="font-size:12px">${t}</text>`; });
  return s;
})()}
</svg>
<figcaption><b>Riscurile din carte</b>, pe aceeași scară. Diferența de 100 de ori între formele citogenetice e motivul pentru care se face cariotipul chiar când diagnosticul clinic e sigur. Chiar și la trisomia liberă se recomandă diagnostic prenatal (posibil mozaicism germinal la un părinte). Schemă proprie.</figcaption>
</figure>
<h3>Ce gameți produce un purtător de t(14q;21q)</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Segregarea gameților la un purtător de translocație robertsoniană 14;21">${DEFS}
${(() => {
  let s = `<text x="20" y="22" class="ti b">Purtătorul echilibrat: 45 de cromozomi (14, 21 și der(14;21))</text>`;
  s += cr(60, 40, 56, "fG") + cr(80, 56, 34, "fT") + rob(110, 36, 30, 52) + `<text x="60" y="114" text-anchor="middle" class="tm" style="font-size:11px">14</text><text x="80" y="114" text-anchor="middle" class="tm" style="font-size:11px">21</text><text x="110" y="134" text-anchor="middle" class="tm" style="font-size:11px">der(14;21)</text>`;
  s += fo(150, 40, 230, 80, "Fuziunea brațelor lungi ale lui 14 și 21; brațele scurte (sateliți, ADNr) s-au pierdut fără consecințe. Purtătorul e sănătos.");
  const G = [[["14", "21"], "normal", "46, normal", "tok"], [["der"], "echilibrat", "45, purtător", "tok"], [["der", "21"], "+21", "46,+21 → Down prin translocație", "tw2"], [["14"], "−21", "monosomie 21 → avort", "tm"], [["der", "14"], "+14", "trisomie 14 → avort", "tm"], [["21"], "−14", "monosomie 14 → avort", "tm"]];
  G.forEach(([cs, t, d, cl], i) => {
    const x = 70 + i * 120, y = 170;
    s += `<line x1="110" y1="142" x2="${x}" y2="${y - 6}" class="sm" stroke-width="1" opacity=".6"/><circle cx="${x}" cy="${y + 38}" r="38" class="${cl === "tok" ? "foks" : cl === "tw2" ? "fws" : "fline"} sm" stroke-width="1"/>`;
    cs.forEach((c, j) => { const xx = x - (cs.length - 1) * 12 + j * 24; s += c === "der" ? rob(xx, y + 10, 20, 36) : c === "14" ? cr(xx, y + 14, 46, "fG") : cr(xx, y + 22, 28, "fT"); });
    s += `<text x="${x}" y="${y + 96}" text-anchor="middle" class="${cl} b">${t}</text>` + fo(x - 58, y + 102, 116, 50, d, "text-align:center;font-size:11.5px");
  });
  return s;
})()}
</svg>
<figcaption><b>Cele șase tipuri de gameți</b> ai purtătorului, după cum se repartizează cei trei cromozomi implicați. Trei dintre zigoți sunt neviabili; dintre cei viabili, teoretic 1/3 ar fi cu Down. Riscul observat e mai mic (~10% când mama e purtătoare, ~1% când e tatăl), pentru că gameții dezechilibrați sunt selectați negativ. Mecanismul translocației robertsoniene e detaliat în <a href="#/lp06/robertsoniene">LP VI</a>. Albastru = cromozomul 14, portocaliu = 21. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>t(21q;21q): de ce 100%</b>
<p>Un purtător de t(21q;21q) produce doar gameți cu der(21;21) (→ trisomie 21) sau fără 21 (→ monosomie 21, avort). Nu poate avea copii sănătoși; istoricul cuplului are avorturi spontane repetate. Atenție: multe „t(21q;21q)” sunt de fapt izocromozomi 21q, cu același efect.</p></div>
<div class="lab"><b>Diagnosticul diferențial</b>
<p>Un fenotip asemănător pot da <b>hipotiroidia congenitală</b>, <b>sindromul Beckwith–Wiedemann</b> (macroglosie; <a href="#/c04/bws">ghidul de curs</a>) și <b>sindromul Zellweger</b> (hipotonie, facies plat). Cariotipul tranșează.</p></div>`
},
{
id: "patau", titlu: "Sindromul Patau (trisomia 13)", pag: "47–48", emery: "cap. 17, p. 253–254", acopera: ["lp04-r06", "lp04-r07"],
html: `
<p><b>1/5.000–1/20.000</b> de nou-născuți vii; ~99% din concepțiile cu trisomie 13 se pierd prin avort. Forme: <b>trisomie liberă</b> (majoritatea; vârsta maternă e factor de risc), <b>translocație</b> (~20%, de obicei 13 pe alt cromozom din grupa D) și <b>mozaic</b> (~5%).</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Semnele trisomiei 13: defecte de linie mediană">
${(() => {
  const S = [["Cap și SNC", "microcefalie, defecte ale scalpului (aplazia cutis), suturi larg deschise; <b>holoprozencefalie</b>, crize"], ["Fața", "microftalmie/anoftalmie, hipertelorism, colobom de iris, <b>despicătură labio-palatină</b>, urechi malformate"], ["Membre", "<b>polidactilie postaxială</b>, unghii înguste, convexe, călcâi proeminent („în piolet”)"], ["Viscere", "DSA/DSV, canal arterial persistent; displazie chistică renală și pancreatică; splină accesorie; criptorhidie; hernii"], ["Sânge", "hemoglobină fetală persistentă; mai mulți apendici nucleari la neutrofile"]];
  let s = `<text x="20" y="22" class="ti b">Tripleta care sugerează trisomia 13: despicătură facială + polidactilie + microftalmie</text>`;
  S.forEach(([t, d], i) => { const x = 20 + (i % 3) * 245, y = 40 + Math.floor(i / 3) * 128; s += `<rect x="${x}" y="${y}" width="232" height="116" rx="10" class="${i < 3 ? "fws" : "fcard"} sm" stroke-width=".6"/><text x="${x + 12}" y="${y + 22}" class="ti b">${t}</text>` + fo(x + 12, y + 28, 212, 86, d, "color:var(--ink)"); });
  s += `<rect x="510" y="168" width="232" height="116" rx="10" class="fas"/><text x="522" y="190" class="ta b">Prognostic</text>` + fo(522, 196, 212, 86, "dezvoltare sever întârziată; ~50% mor în perioada neonatală, doar ~10% trăiesc 1 an", "color:var(--ink)");
  return s;
})()}
</svg>
<figcaption><b>Trisomia 13 lovește mai ales linia mediană</b> a capului și feței (holoprozencefalia: emisferele nu se separă; despicături; ochi mici, apropiați sau unul singur). Schemă proprie după semnele din carte.</figcaption>
</figure>
[[gal:t13_cariotip|<b>Cariotip 47,XX,+13</b>: trei cromozomi 13 (încercuiți).;;t13_mana|<b>Polidactilie postaxială</b> în trisomia 13: un deget suplimentar pe marginea ulnară a mâinii.]]
<p><b>Sfatul genetic:</b> recurență sub 1% la trisomia liberă; la un părinte purtător de translocație, de la ~10% (13 cu alt acrocentric) până la 100% pentru t(13;13). Screening prenatal ecografic, confirmare prin cariotip.</p>`
},
{
id: "edwards", titlu: "Sindromul Edwards (trisomia 18)", pag: "49–50", emery: "cap. 17, p. 253", acopera: ["lp04-r08", "lp04-r09"],
html: `
<p><b>1/3.000–1/8.000</b> de nou-născuți vii, cu predominanță feminină (4 fete : 1 băiat); ~95% din concepții se pierd. Aproape întotdeauna <b>trisomie liberă</b> prin nondisjuncție maternă (vârsta maternă); foarte rar trisomie parțială (inversie sau translocație parentală) sau mozaic.</p>
<div class="pasi">
<div><b>Mâna caracteristică</b>pumn încleștat: degetele 2 și 5 acoperă degetele 3 și 4; unghii hipoplazice; plică simiană</div>
<div><b>Capul</b>dolicocefalie, occiput proeminent, profil „de pasăre”, micro-retrognatism, urechi „de faun”</div>
<div><b>Ochi</b>microftalmie, hipertelorism, ptoză, cataractă</div>
<div><b>Corp</b>hipotrofie, <b>hipertonie</b>, stern hipoplazic, picior var ecvin, hernii</div>
<div><b>Malformații</b>cardiace, digestive, renale, criptorhidie</div>
</div>
[[gal:t18_degete|<b>Degete încălecate</b> în trisomia 18: indexul acoperă mediusul, iar degetul mic inelarul.;;t18_cariotip|<b>Cariotip în trisomia 18</b>: trei cromozomi 18 (încercuiți).]]
<p><b>Prognostic:</b> doar 5–10% trăiesc un an, cu întârziere severă. <b>Recurență</b> ~1% la trisomia liberă, mai mare la trisomiile parțiale din anomalii parentale. <b>Diagnostic diferențial:</b> asociația CHARGE (colobom, cord, atrezie coanală, retard, anomalii genito-urinare și ale urechii) și artrogripoza (contracturi și degete încălecate, fără celelalte malformații).</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Comparație între cele trei trisomii autozomale">
${(() => {
  const C = [["", "Down (+21)", "Edwards (+18)", "Patau (+13)"], ["Incidență la naștere", "1/650–800", "1/3.000–8.000", "1/5.000–20.000"], ["Tonus", "hipotonie", "hipertonie", "variabil"], ["Mâna", "plică unică, clinodactilie", "pumn încleștat, degete încălecate", "polidactilie postaxială"], ["Cap / față", "facies plat, fante oblice", "occiput proeminent, micrognatie", "despicături, microftalmie, holoprozencefalie"], ["Supraviețuire", "~60 de ani", "5–10% la 1 an", "~10% la 1 an"], ["Recurență (liberă)", "~1%", "~1%", "< 1%"]];
  let s = "";
  C.forEach((r, i) => r.forEach((c, j) => { const x = 10 + (j ? 170 + (j - 1) * 193 : 0), w = j ? 188 : 165, y = 8 + i * 41; s += `<rect x="${x}" y="${y}" width="${w}" height="37" rx="6" class="${i === 0 ? ["fcard", "fT", "fP", "fG"][j] : j === 0 ? "fas" : "fcard"}"/>` + fo(x + 6, y + 3, w - 12, 34, c, `color:${i === 0 && j ? "#fff" : "var(--ink)"};font-weight:${i === 0 || j === 0 ? 700 : 400};font-size:12px`); }));
  return s;
})()}
</svg>
<figcaption><b>Cele trei trisomii autozomale viabile, una lângă alta.</b> Diferențele de tonus și de mână sunt cele mai utile la o primă examinare. Schemă proprie după carte.</figcaption>
</figure>`
}
]
});
})();
