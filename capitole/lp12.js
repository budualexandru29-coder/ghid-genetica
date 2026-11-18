/* LP XII — Screeningul și diagnosticul prenatal; sfatul genetic (LP p. 149–158) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf12)"/>`;
// densitate log-normală pe scară log10
const dens = (x, med, sd) => Math.exp(-0.5 * Math.pow((Math.log10(x) - Math.log10(med)) / sd, 2));
// uter schematic cu făt, pentru figurile procedurilor
const uter = (cx, cy, s = 1) => `<ellipse cx="${cx}" cy="${cy}" rx="${120 * s}" ry="${95 * s}" class="fcard si" stroke-width="2"/><ellipse cx="${cx}" cy="${cy}" rx="${106 * s}" ry="${82 * s}" fill="var(--info)" opacity=".10"/>
<circle cx="${cx + 18 * s}" cy="${cy - 18 * s}" r="${24 * s}" class="fT" opacity=".55"/><ellipse cx="${cx + 4 * s}" cy="${cy + 28 * s}" rx="${34 * s}" ry="${26 * s}" class="fT" opacity=".55"/>`;

GHID.capitol({
id: "lp12",
intro: `<p class="lead">Screeningul prenatal estimează, neinvaziv, cât de mare e riscul ca fătul să aibă o anumită anomalie; diagnosticul prenatal o confirmă sau o exclude, de obicei prin analiza celulelor fetale. Din 2007, când a fost scrisă cartea, s-au schimbat multe: testul triplu a fost înlocuit de testul combinat din trimestrul I și de analiza ADN-ului fetal liber din sângele matern (NIPT), iar riscurile procedurilor invazive s-au dovedit mai mici.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Calendarul testelor prenatale">
${(() => {
  const X0 = 230, W = 510, lx = (w) => X0 + w / 24 * W;
  let o = `<text x="20" y="22" class="ti b">Când se face fiecare test (săptămâni de sarcină)</text>`;
  [0, 4, 8, 12, 16, 20, 24].forEach((w) => (o += `<line x1="${lx(w)}" y1="34" x2="${lx(w)}" y2="244" class="sm" stroke-dasharray="2 4" opacity=".5"/><text x="${lx(w)}" y="260" text-anchor="middle" class="tm" style="font-size:11px">${w}</text>`));
  [["DGP (înainte de transfer)", 0, 1, "fP"], ["NIPT", 10, 24, "fA"], ["test combinat + TN", 11, 14, "fA"], ["test cvadruplu", 15, 20, "fC"], ["biopsie de vilozități coriale", 10, 13.5, "fT"], ["amniocenteză", 15, 24, "fT"], ["ecografie morfologică", 18, 22, "fG"], ["cordocenteză (rar)", 18, 24, "fT"]].forEach(([t, a, b, c], i) => { const y = 36 + i * 26; o += `<rect x="${lx(a)}" y="${y}" width="${lx(b) - lx(a)}" height="18" rx="5" class="${c}"/><text x="${X0 - 8}" y="${y + 13}" text-anchor="end" class="ti" style="font-size:11.5px">${t}</text>`; });
  return o;
})()}
</svg>
<figcaption><b>Calendarul actual.</b> Verde = screening neinvaziv; portocaliu = proceduri invazive (diagnostic); albastru = ecografie; violet = diagnostic preimplantatoriu. Ferestrele exacte diferă puțin între ghiduri. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "screening-seric", titlu: "Screeningul biochimic din serul matern", pag: "149–150", emery: "cap. 20, p. 312–316", acopera: ["lp12-r01"], curs: ["c10b/profilaxie"],
html: `
<p>Markerii serici sunt proteine sau hormoni produși de făt sau de unitatea feto-placentară, care trec în sângele mamei. Valorile se exprimă în <b>multipli ai medianei (MoM)</b> pentru vârsta gestațională, corectați pentru greutatea mamei, etnie, diabet, fumat, sarcină multiplă, FIV. Rezultatul nu e „pozitiv” sau „negativ”, ci un <b>risc calculat</b> (ex. 1:150), comparat cu un prag.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Profilul markerilor serici în trisomia 21, trisomia 18 și defectele de tub neural">
${(() => {
  const M = ["AFP", "uE3", "hCG", "inhibina A", "PAPP-A (trim. I)"];
  const P = [["Trisomia 21", ["↓", "↓", "↑", "↑", "↓"]], ["Trisomia 18", ["↓", "↓", "↓", "=", "↓"]], ["Defect de tub neural deschis", ["↑↑", "=", "=", "=", "="]]];
  let o = M.map((m, j) => `<text x="${300 + j * 92}" y="30" text-anchor="middle" class="ti b" style="font-size:12px">${m}</text>`).join("");
  P.forEach(([t, v], i) => { const y = 50 + i * 54; o += `<text x="20" y="${y + 26}" class="ti b" style="font-size:12.5px">${t}</text>`; v.forEach((s, j) => { const c = s.includes("↑") ? "fT" : s.includes("↓") ? "fG" : "fline"; o += `<rect x="${264 + j * 92}" y="${y + 6}" width="72" height="34" rx="7" class="${c}"/><text x="${300 + j * 92}" y="${y + 30}" text-anchor="middle" class="b" style="font-size:16px;fill:${c === "fline" ? "var(--muted)" : "#fff"}">${s}</text>`; }); });
  o += `<text x="20" y="222" class="tm" style="font-size:11.5px">AFP = alfa-fetoproteină · uE3 = estriol neconjugat · hCG = gonadotropină corionică (β liberă în trim. I)</text><text x="20" y="240" class="tm" style="font-size:11.5px">PAPP-A = proteina plasmatică A asociată sarcinii · ↑ crescut · ↓ scăzut · = normal</text>`;
  return o;
})()}
</svg>
<figcaption><b>Trei profiluri de reținut.</b> Testul <b>triplu</b> (AFP, uE3, hCG) din carte se făcea la 15–18 săptămâni; cu inhibina A devine <b>cvadruplu</b>. Schemă proprie.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Distribuția AFP la sarcini normale și cu spina bifida">
${(() => {
  const X0 = 60, W = 640, Y0 = 210, H = 160, lx = (v) => X0 + (Math.log10(v) + 0.7) / 1.9 * W; // 0,2 … 16 MoM
  let n = "", s = "", a = "";
  for (let l = -0.7; l <= 1.2; l += 0.01) { const v = Math.pow(10, l); n += (n ? "L" : "M") + lx(v).toFixed(1) + " " + (Y0 - dens(v, 1, 0.16) * H).toFixed(1); s += (s ? "L" : "M") + lx(v).toFixed(1) + " " + (Y0 - dens(v, 3.8, 0.22) * H * 0.55).toFixed(1); a += (a ? "L" : "M") + lx(v).toFixed(1) + " " + (Y0 - dens(v, 6.5, 0.2) * H * 0.4).toFixed(1); }
  let o = `<text x="20" y="22" class="ti b">AFP în serul matern, 16–18 săptămâni (multipli ai medianei, scară logaritmică)</text>`;
  o += `<path d="${n}" fill="none" class="sG" stroke-width="2.4"/><path d="${s}" fill="none" class="sT" stroke-width="2.4"/><path d="${a}" fill="none" class="sP" stroke-width="2.4"/>`;
  o += `<line x1="${lx(2.5)}" y1="40" x2="${lx(2.5)}" y2="${Y0}" class="sa" stroke-width="2" stroke-dasharray="6 3"/><text x="${lx(2.5) + 6}" y="52" class="ta b" style="font-size:11.5px">prag 2,5 MoM</text>`;
  o += `<line x1="${X0}" y1="${Y0}" x2="${X0 + W}" y2="${Y0}" class="si"/>` + [0.25, 0.5, 1, 2, 4, 8, 16].map((v) => `<text x="${lx(v)}" y="${Y0 + 16}" text-anchor="middle" class="tm" style="font-size:11px">${String(v).replace(".", ",")}</text>`).join("");
  o += `<text x="${lx(1)}" y="${Y0 - H - 6}" text-anchor="middle" class="b" style="fill:var(--info);font-size:12px">sarcini normale</text><text x="${lx(3.8)}" y="${Y0 - H * 0.55 - 8}" text-anchor="middle" class="b" style="fill:var(--warn);font-size:12px">spina bifida deschisă</text><text x="${lx(7.5)}" y="${Y0 - H * 0.4 - 8}" class="b" style="fill:#7c3aed;font-size:12px">anencefalie</text>`;
  o += `<text x="20" y="${Y0 + 44}" class="tm" style="font-size:11px">Curbe ilustrative (înălțimile nu reflectă frecvențele reale; bolile sunt rare). Parametri aproximativi, după datele clasice de screening.</text>`;
  return o;
})()}
</svg>
<figcaption><b>Un prag separă imperfect două distribuții.</b> La 2,5 MoM se detectează ~80% din spina bifida deschisă și ~90% din anencefalii, cu ~1–3% rezultate fals pozitive. Azi, defectele de tub neural se depistează mai ales prin ecografie. Calcul propriu.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>AFP crescută: cauze fetale (din carte)</th><th>AFP crescută fără defect fetal</th></tr></thead>
<tbody><tr><td>defecte deschise de tub neural (spina bifida, anencefalie), omfalocel, gastroschizis, atrezii esofagiene sau intestinale, sindrom nefrotic congenital, leziuni cutanate, teratom sacro-coccigian, sindrom Meckel</td><td>vârsta gestațională subestimată (sarcină mai avansată decât se credea), sarcină multiplă, sângerare (iminență de avort), moarte fetală intrauterină</td></tr></tbody></table></div>
<div class="capcana"><b>Ce s-a schimbat față de carte</b>
<p>1) <b>Testul triplu nu se mai recomandă</b> ca primă opțiune: are cea mai mică rată de detecție. Standardul e <b>testul combinat</b> la 11–13<sup>+6</sup> săptămâni (vârsta mamei + translucența nucală + β-hCG liber + PAPP-A) sau, tot mai des, <b>NIPT</b> (vezi mai jos). 2) „Triplu test pozitiv” înseamnă doar <b>risc crescut</b>, nu boală: majoritatea femeilor cu rezultat pozitiv au feți sănătoși. 3) Rata de detecție de 79% pentru testul cvadruplu e corectă (~75–80% la 5% fals pozitive).</p></div>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Rata de detecție a trisomiei 21 pentru diferite strategii de screening">
${(() => {
  const D = [["vârsta mamei ≥ 35 de ani", 30, 15], ["test triplu (15–18 săpt.)", 69, 5], ["test cvadruplu", 79, 5], ["test combinat (11–13 săpt.)", 87, 5], ["NIPT (ADN fetal liber)", 99, 0.1]];
  let o = `<text x="20" y="22" class="ti b">Trisomia 21: ce proporție din cazuri detectează fiecare strategie</text>`;
  D.forEach(([t, d, f], i) => { const y = 40 + i * 38; o += `<text x="250" y="${y + 18}" text-anchor="end" class="ti" style="font-size:12px">${t}</text><rect x="260" y="${y}" width="${d * 3.3}" height="26" rx="5" class="${i === 4 ? "fA" : i === 3 ? "fG" : "fC"}"/><text x="${266 + d * 3.3}" y="${y + 18}" class="ti b" style="font-size:12px">${d}%</text><text x="${750}" y="${y + 18}" text-anchor="end" class="tm" style="font-size:11.5px">${String(f).replace(".", ",")}% fals poz.</text>`; });
  return o + `<text x="20" y="252" class="tm" style="font-size:11px">Valori aproximative din studiile mari de screening (SURUSS, FASTER) și meta-analizele NIPT; variază între populații.</text>`;
})()}
</svg>
<figcaption><b>De la 30% la 99%.</b> Screeningul doar după vârsta mamei ratează majoritatea cazurilor, pentru că majoritatea copiilor cu sindrom Down se nasc din mame sub 35 de ani (care fac mult mai mulți copii). Vezi <a href="#/lp04/down-sfat">LP IV</a>.</figcaption>
</figure>`
},
{
id: "ecografie", titlu: "Ecografia fetală: de rutină și detaliată (nivel II)", pag: "150–152", emery: "cap. 20, p. 314–315", acopera: ["lp12-r02", "lp12-r04"],
html: `
<p>Ecografia e neinvazivă și se face la toate gravidele: în <b>trimestrul I (11–14 săptămâni)</b>, pentru datarea sarcinii și măsurarea translucenței nucale, și în <b>trimestrul II (18–22 de săptămâni)</b>, ecografia morfologică. Cartea dă 12 și 24 de săptămâni și o fereastră de 16–18 săptămâni pentru ecografia de nivel II; ghidurile actuale preferă 18–22. Ecografia de nivel II e o examinare țintită, făcută de un specialist în medicină fetală când există un risc crescut.</p>
[[img:tn_eco|<b>Ecografie la 13 săptămâni</b>, secțiune sagitală: translucența nucală (<b>NT</b>, 2,1 mm, normală) și osul nazal prezent (<b>NBL</b>, 2,45 mm). O translucență ≥3,5 mm crește riscul de aneuploidie, cardiopatie congenitală și sindroame genetice.]]
<div class="tw"><table>
<thead><tr><th>Semn ecografic (din carte)</th><th>Asociere principală</th></tr></thead>
<tbody>
<tr><td>translucență nucală crescută (trim. I), edem nucal (trim. II)</td><td>sindrom Down, sindrom Turner, alte aneuploidii, cardiopatii, sindrom Noonan</td></tr>
<tr><td>higromă chistică, hidrops fetal</td><td>sindrom Turner, trisomii</td></tr>
<tr><td>restricție precoce de creștere</td><td>trisomii 18 și 13, triploidie</td></tr>
<tr><td>placentă mare, chistică</td><td>triploidie cu set suplimentar patern (și talasemii, hidrops)</td></tr>
<tr><td>despicătură labio-palatină, holoprozencefalie</td><td>trisomia 13</td></tr>
<tr><td>pumni strânși cu degete suprapuse, picior în „piolet” (rocker-bottom), omfalocel</td><td>trisomia 18</td></tr>
<tr><td>atrezie duodenală („dublă bulă”), defect atrioventricular, os nazal absent</td><td>sindrom Down</td></tr>
</tbody></table></div>
<div class="cheie"><b>Limitele ecografiei</b><p>Depinde de experiența examinatorului, de aparat, de poziția fătului și de greutatea mamei. Un semn minor izolat (ex. focar ecogen intracardiac) modifică puțin riscul; o malformație majoră îl modifică mult și justifică diagnosticul invaziv cu microarray.</p></div>`
},
{
id: "indicatii", titlu: "Diagnosticul prenatal: indicații", pag: "150–151", emery: "cap. 20, p. 309–311", acopera: ["lp12-r03"], curs: ["c10b/tabel24"],
html: `
<p>Diagnosticul prenatal este un act medical multidisciplinar (obstetrician, ecografist, genetician, laborator). Indicațiile din carte:</p>
<div class="tw"><table>
<thead><tr><th>Indicație</th><th>Comentariu actual</th></tr></thead>
<tbody>
<tr><td>vârsta mamei peste 35 de ani (tatăl peste 55)</td><td>nu mai e indicație independentă: tuturor gravidelor li se oferă screening, iar invazivul se propune după rezultat. Vârsta paternă crește mai ales riscul de mutații <i>de novo</i> dominante, nu de aneuploidii.</td></tr>
<tr><td>screening seric pozitiv sau anomalii la ecografie</td><td>da; azi și NIPT cu risc crescut (se confirmă obligatoriu invaziv)</td></tr>
<tr><td>anomalie cromozomială structurală echilibrată la un părinte</td><td>da (<a href="#/lp06/translocatii">LP VI</a>)</td></tr>
<tr><td>un copil anterior cu anomalie cromozomială <i>de novo</i></td><td>risc de recurență mic (~1%), dar se oferă (mozaicism germinal)</td></tr>
<tr><td>boală monogenică în familie, cu mutația cunoscută</td><td>da; testul țintit e rapid și sigur</td></tr>
<tr><td>sexarea fătului pentru boli legate de X fără test specific</td><td>rar: aproape toate au acum test molecular; sexul se poate afla și din ADN fetal liber, la 7–9 săptămâni</td></tr>
<tr><td>rude de gradul I cu defecte de tub neural, malformații, sindroame plurimalformative</td><td>ecografie țintită, eventual microarray</td></tr>
<tr><td>teratogeni, avorturi spontane recurente, consangvinitate, diabet matern dezechilibrat, antiepileptice</td><td>ecografie detaliată; pentru avorturi recurente se face întâi cariotipul cuplului</td></tr>
</tbody></table></div>`
},
{
id: "amniocenteza", titlu: "Amniocenteza", pag: "152–153", emery: "cap. 20, p. 310–311", acopera: ["lp12-r05", "lp12-r07"],
html: `
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Amniocenteza ghidată ecografic">${DEFS}
${uter(200, 160)}
<path d="M140 50 L180 120" class="si" stroke-width="2.4"/><circle cx="182" cy="124" r="3" class="fT"/>
<rect x="240" y="40" width="80" height="22" rx="8" class="fZ" transform="rotate(14 280 51)"/><path d="M262 64 L230 140 M318 76 L290 152" class="sG" stroke-width="1" stroke-dasharray="3 3" opacity=".7"/>
<text x="90" y="40" class="ti b" style="font-size:12px">ac fin</text><text x="236" y="26" class="ti b" style="font-size:12px">sondă ecografică</text>
<text x="210" y="272" text-anchor="middle" class="tm" style="font-size:11.5px">lichid amniotic (albastru) · făt (portocaliu)</text>
${fo(372, 30, 380, 250, "<b style='color:var(--ink)'>Când:</b> de la 15 săptămâni (amniocenteza precoce, la 11–14 săptămâni, a fost abandonată: mai multe pierderi de sarcină și picior strâmb).<br><b style='color:var(--ink)'>Ce:</b> 15–20 ml de lichid amniotic (cartea: 5–10 ml), cu celule fetale descuamate (piele, căi urinare, digestive).<br><b style='color:var(--ink)'>Analize:</b> QF-PCR sau FISH pentru aneuploidiile frecvente (rezultat în 1–2 zile); microarray; cariotip după cultură (~2 săptămâni); teste ADN țintite; AFP și acetilcolinesterază pentru tubul neural.<br><b style='color:var(--ink)'>Risc de pierdere a sarcinii:</b> ~0,1–0,3% peste riscul de fond (cartea: 0,5–1%).")}
</svg>
<figcaption><b>Amniocenteza</b> (figura 41 din carte): puncție transabdominală, sub ghidaj ecografic continuu. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Date depășite în carte</b><p>Riscul de 0,5–1% vine din studii vechi, fără ghidaj ecografic continuu; meta-analizele recente (2019) dau ~0,3% sau mai puțin. „Fosfataza alcalină intestinală pentru fibroza chistică” nu mai e folosită: fibroza chistică se diagnostichează prenatal prin testarea mutațiilor <i>CFTR</i> ale familiei. Rezultatul nu mai durează 2–4 săptămâni: răspunsul pentru trisomiile 13, 18, 21 și cromozomii sexuali vine în 24–48 de ore.</p></div>`
},
{
id: "bvc", titlu: "Biopsia de vilozități coriale", pag: "153–154", emery: "cap. 20, p. 311", acopera: ["lp12-r06", "lp12-r10"],
html: `
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Biopsia de vilozități coriale pe cale transabdominală și transcervicală">
${(() => {
  const pl = (cx, cy) => `<path d="M${cx - 90} ${cy - 50} Q${cx} ${cy - 110} ${cx + 90} ${cy - 50}" fill="none" class="fP" stroke="#7c3aed" stroke-width="14" opacity=".6"/>`;
  let o = uter(190, 140, 0.9) + pl(190, 140) + `<path d="M120 20 L170 66" class="si" stroke-width="2.4"/><text x="190" y="256" text-anchor="middle" class="ti b">transabdominală</text>`;
  o += `<g transform="translate(380 0)">${uter(190, 140, 0.9)}<path d="M100 170 Q190 110 280 170" fill="none" stroke="#7c3aed" stroke-width="14" opacity=".6"/><path d="M190 250 L190 226 Q190 212 196 196 Q206 178 212 164" fill="none" class="si" stroke-width="2.4"/><text x="190" y="264" text-anchor="middle" class="ti b">transcervicală</text><text x="202" y="244" class="tm" style="font-size:11px">cateter prin col</text></g>`;
  o += `<text x="250" y="40" class="tm" style="font-size:11px">placentă (corion frondosum)</text>`;
  return o;
})()}
</svg>
<figcaption><b>Cele două căi</b> (figura 42 din carte). Calea aleasă depinde de poziția placentei. Schemă proprie.</figcaption>
</figure>
<p>Vilozitățile coriale provin din trofoblast, deci au același genotip ca fătul (cu excepțiile de mai jos). Avantajul major: <b>trimestrul I</b>, la <b>10–13 săptămâni</b>; ADN-ul se obține direct, fără cultură, deci rezultatul vine repede. Țesutul matern (decidua) se îndepărtează la microscop înainte de analiză.</p>
<div class="tw"><table>
<thead><tr><th></th><th>Carte</th><th>Date actuale</th></tr></thead>
<tbody>
<tr><td>momentul</td><td>9–12 săptămâni</td><td><b>după 10 săptămâni</b>: înainte crește riscul de defecte transversale ale membrelor</td></tr>
<tr><td>pierderea sarcinii</td><td>1–2%</td><td>~0,2–0,5%, comparabil cu amniocenteza</td></tr>
<tr><td>sângerare</td><td>40%</td><td>pătare vaginală frecventă după calea transcervicală, de obicei fără consecințe</td></tr>
</tbody></table></div>
<div class="capcana"><b>Mozaicismul limitat la placentă</b><p>În ~1–2% din biopsii apare un <b>mozaicism</b> (o linie anormală alături de una normală). De cele mai multe ori nu e o contaminare, cum sugerează cartea, ci un mozaicism real, <b>limitat la placentă</b>: fătul e normal. Se verifică prin amniocenteză. Uneori ascunde o disomie uniparentală la făt (o trisomie „salvată”), deci se testează și aceasta pentru cromozomii cu gene amprentate (<a href="#/c04/amprentare">ghidul de curs</a>).</p></div>`
},
{
id: "cordocenteza-fetoscopie", titlu: "Cordocenteza și fetoscopia", pag: "154–155", emery: "cap. 20, p. 311–312", acopera: ["lp12-r08", "lp12-r09"],
html: `
<div class="tw"><table>
<thead><tr><th></th><th>Cordocenteza</th><th>Fetoscopia</th></tr></thead>
<tbody>
<tr><td>ce este</td><td>puncția venei ombilicale la inserția placentară, sub ghidaj ecografic; 1–3 ml de sânge fetal</td><td>endoscop introdus în cavitatea amniotică, prin abdomen</td></tr>
<tr><td>când</td><td>după 18 săptămâni</td><td>trimestrul II, centre specializate</td></tr>
<tr><td>în carte</td><td>diagnostic tardiv, rezultate ambigue la amniocenteză, boli hematologice, imune, infecții</td><td>biopsii de piele, mușchi, ficat (genodermatoze, distrofii)</td></tr>
<tr><td>azi</td><td>rar pentru diagnostic genetic (microarray-ul și testele ADN pe lichid amniotic îl înlocuiesc); folosită pentru <b>anemia fetală</b> (izoimunizare Rh, <a href="#/lp10/rh">LP X</a>) și pentru <b>transfuzia intrauterină</b></td><td>aproape exclusiv <b>terapeutică</b>: laser în sindromul transfuzor–transfuzat la gemeni, ocluzia traheală în hernia diafragmatică, uneori corecția spinei bifida</td></tr>
<tr><td>risc de pierdere</td><td>1–2% (cartea: 2–3%)</td><td>mai mare; depinde de intervenție</td></tr>
</tbody></table></div>`
},
{
id: "dgp", titlu: "Diagnosticul genetic preimplantatoriu", pag: "155", emery: "cap. 20, p. 317–318", acopera: ["lp12-r11"],
html: `
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Etapele testării genetice preimplantatorii">${DEFS}
${(() => {
  const E = [["FIV / ICSI", "ovocite fecundate în laborator"], ["Ziua 5–6: blastocist", "biopsie din trofectoderm (5–10 celule)"], ["Analiză", "PCR țintit, microarray sau NGS"], ["Transfer", "embrion neafectat în uter"]];
  let o = "";
  E.forEach(([t, d], i) => { const x = 20 + i * 186; o += `<rect x="${x}" y="20" width="170" height="104" rx="10" class="${i === 1 ? "fis" : "fas"}"/><text x="${x + 12}" y="44" class="ti b" style="font-size:12.5px">${t}</text>${fo(x + 12, 52, 150, 70, d, "color:var(--ink)")}`; if (i < 3) o += sag(x + 170, 72, x + 186, 72); });
  o += `<circle cx="296" cy="168" r="30" class="fcard si" stroke-width="1.6"/><circle cx="286" cy="164" r="14" class="fP" opacity=".55"/><text x="286" y="214" text-anchor="middle" class="tm" style="font-size:11px">masa celulară internă (embrion)</text>${Array.from({ length: 14 }, (_, k) => { const a = k / 14 * 2 * Math.PI; return `<circle cx="${296 + 30 * Math.cos(a)}" cy="${168 + 30 * Math.sin(a)}" r="4" class="${k < 3 ? "fT" : "fA"}"/>`; }).join("")}<text x="338" y="160" class="ta b" style="font-size:11px">celule biopsiate</text><text x="338" y="174" class="tm" style="font-size:11px">(viitoarea placentă)</text>`;
  o += fo(460, 136, 290, 100, "<b>PGT-M</b>: boli monogenice (fibroză chistică, distrofie miotonică, Huntington). <b>PGT-SR</b>: părinte purtător de rearanjare echilibrată. <b>PGT-A</b>: aneuploidii, beneficiu controversat. Uneori se selectează și compatibilitatea HLA cu un frate bolnav.");
  return o;
})()}
</svg>
<figcaption><b>Testarea genetică preimplantatorie (PGT)</b>. Cartea descrie biopsia unui blastomer la 3 zile (stadiul de 8 celule); azi se preferă biopsia trofectodermului la blastocist: mai multe celule, fără a atinge embrionul propriu-zis. Rezultatele se confirmă prenatal. Schemă proprie.</figcaption>
</figure>`
},
{
id: "nipt", titlu: "ADN-ul fetal din sângele matern (NIPT)", pag: "155", emery: "cap. 20, p. 315–317", acopera: ["lp12-r12"],
html: `
<p>Cartea descrie <b>celulele fetale</b> din sângele matern (eritroblaști, limfocite, trofoblast) ca metodă „de cercetare”, cu probleme de rare, persistență după sarcini anterioare și contaminare. Din 2011 s-a impus altă abordare: <b>ADN-ul fetal liber</b> (cell-free fetal DNA), fragmente scurte eliberate de placentă, care formează ~10% din ADN-ul liber din plasma mamei de la 10 săptămâni și dispar în câteva ore după naștere.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Principiul NIPT: numărarea fragmentelor de cromozom 21">
${(() => {
  const f = 0.1, base = 1.32; // % din fragmente care provin de la cromozomul 21 (aproximativ)
  let o = `<text x="20" y="22" class="ti b">NIPT numără fragmentele: dacă fătul are trei cromozomi 21, proporția lor crește puțin</text>`;
  [["făt normal", 0, "fA"], ["făt cu trisomia 21", 1, "fT"]].forEach(([t, tr], i) => {
    const x = 60 + i * 340, v = base * (1 + tr * f / 2);
    o += `<text x="${x}" y="58" class="ti b">${t}</text>`;
    for (let k = 0; k < 60; k++) { const isF = k < 6, is21 = k % 9 === 0 || (tr && isF && k === 5); o += `<rect x="${x + (k % 15) * 18}" y="${70 + Math.floor(k / 15) * 16}" width="14" height="6" rx="2" class="${is21 ? (isF ? "fT" : "fP") : isF ? "fC" : "fline"}"/>`; }
    o += `<text x="${x}" y="158" class="tm" style="font-size:11.5px">fragmente de cromozom 21: <tspan class="ti b">${v.toFixed(3).replace(".", ",")}%</tspan></text>`;
  });
  o += fo(20, 172, 730, 116, "Cu o fracție fetală de 10%, un făt cu trisomia 21 crește proporția fragmentelor de cromozom 21 cu doar <b>f/2 = 5%</b> (aici, de la 1,320% la 1,386%). Diferența se vede statistic prin secvențierea a milioane de fragmente: se calculează un <b>scor z</b> față de sarcinile normale. Sub ~4% fracție fetală (obezitate maternă, vârstă gestațională mică) testul nu dă rezultat. ADN-ul liber „fetal” vine de fapt din placentă, deci mozaicismul limitat la placentă dă fals pozitive: <b>un NIPT pozitiv se confirmă întotdeauna invaziv</b>. <br>Legendă: dreptunghiuri galbene/portocalii = fragmente fetale; violet = fragmente materne de cromozom 21.");
  return o;
})()}
</svg>
<figcaption><b>NIPT</b> e un test de <b>screening</b> foarte bun (detecție ~99% pentru T21, ~97% pentru T18, ~90% pentru T13, sub 0,1% fals pozitive), nu un test de diagnostic. Proporțiile sunt rotunjite; ilustrativ.</figcaption>
</figure>
<p>Alte aplicații ale ADN-ului fetal liber: <b>genotiparea RhD fetală</b> la gravidele Rh negative (imunoglobulina anti-D se dă doar dacă fătul e Rh+), <b>sexul fetal</b> în bolile legate de X, mutații paterne sau <i>de novo</i> (ex. acondroplazia).</p>`
},
{
id: "sfat", titlu: "Sfatul genetic", pag: "156–158", emery: "cap. 21", acopera: [], curs: ["c12/etape", "c12/translocatii"],
html: `
<p>Sfatul genetic este comunicarea, de către persoane pregătite, a informațiilor despre diagnostic, mecanismul ereditar, riscul de recurență și opțiunile disponibile, astfel încât familia să ia singură decizia potrivită pentru ea. Regula de bază: sfatul genetic e <b>nondirectiv</b>. Geneticianul informează și sprijină, dar nu decide; respectă confidențialitatea, autonomia, convingerile religioase și culturale.</p>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Etapele sfatului genetic">${DEFS}
${[["1. Diagnosticul", "anamneză, examen clinic (inclusiv semne minore, dismorfii), analize; arbore pe ≥3 generații"], ["2. Mecanismul", "componenta genetică și tipul de transmitere"], ["3. Riscul", "riscul de recurență, calculat"], ["4. Comunicarea", "ambilor părinți, fără grabă, pe înțelesul lor; opțiunile reproductive"]].map(([t, d], i) => `<rect x="${14 + i * 188}" y="14" width="172" height="140" rx="10" class="${i % 2 ? "fis" : "fas"}"/><text x="${26 + i * 188}" y="38" class="ti b">${t}</text>${fo(26 + i * 188, 46, 150, 104, d, "color:var(--ink)")}` + (i < 3 ? sag(186 + i * 188, 84, 202 + i * 188, 84) : "")).join("")}
</svg>
<figcaption><b>Cele patru etape</b> din carte. Detalii și exemple de calcul în <a href="#/c12/etape">ghidul de curs</a>. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<thead><tr><th>Sfat genetic premarital (preconcepțional)</th><th>Sfat genetic postmarital</th></tr></thead>
<tbody><tr><td>un partener are o boală genetică sau o rearanjare cromozomială echilibrată; consangvinitate; boli genetice în familie; vârstă avansată; expunere la mutageni</td><td>un copil afectat; sterilitate sau infertilitate (avorturi repetate, nou-născuți morți sau malformați); o boală a mamei al cărei tratament poate afecta fătul (epilepsie, diabet, fenilcetonurie maternă)</td></tr></tbody></table></div>
<h3>Opțiunile cuplului cu risc mare</h3>
<p>sarcină cu diagnostic prenatal (și eventual întreruperea sarcinii) · FIV cu diagnostic preimplantatoriu · gameți de la donator · adopție · renunțarea la copii (contracepție). Când riscul e apropiat de cel din populație (~3% pentru o anomalie majoră la orice naștere), rolul sfatului e să liniștească.</p>
<div class="intrebari"><h4>Verifică-te: concepții greșite din carte</h4>
<details class="q"><summary>„Nu avem pe nimeni bolnav în familie, deci boala nu poate fi ereditară.”</summary><div>Fals. Bolile recesive apar adesea la părinți sănătoși fără istoric; mutațiile <i>de novo</i> (acondroplazie, multe cazuri de dizabilitate intelectuală) nu au antecedente; familiile mici ascund transmiterea.</div></details>
<details class="q"><summary>„E prezent de la naștere, deci e ereditar.”</summary><div>Fals. Congenital ≠ genetic: teratogenii (alcool, rubeolă, valproat), factorii mecanici sau infecțioși dau anomalii congenitale neereditare. Și invers: multe boli genetice debutează târziu (Huntington).</div></details>
<details class="q"><summary>„Am un copil cu o boală recesivă (risc 1/4), deci următorii trei vor fi sănătoși.”</summary><div>Fals. Riscul e de 1/4 la <b>fiecare</b> sarcină, independent de rezultatele anterioare: „șansa nu are memorie”. La fel, un risc de 1/2 nu înseamnă că „al doilea copil” va fi afectat.</div></details>
<details class="q"><summary>„Toate bolile genetice se văd la analiza cromozomilor.”</summary><div>Fals. Cariotipul vede doar modificări de peste ~5–10 Mb. Bolile monogenice cer teste moleculare, iar microdelețiile, microarray sau FISH (<a href="#/lp11">LP XI</a>).</div></details>
<details class="q"><summary>„Bolile genetice sunt netratabile.”</summary><div>Fals. Fenilcetonuria (dietă), bolile lizozomale (enzime recombinante), atrofia musculară spinală (terapie genică, oligonucleotide), fibroza chistică (modulatori CFTR) se tratează (<a href="#/lp13">LP XIII</a>).</div></details>
<details class="q"><summary>„Dacă în familie sunt bolnavi doar bărbații, boala e sigur legată de X.”</summary><div>Fals. Pot fi boli autozomale limitate la un sex sau cu expresie diferită după sex, sau simplă întâmplare într-o familie mică. Argumentul decisiv e absența transmiterii tată → fiu.</div></details>
</div>`
}
]
});
})();
