/* Capitolul 10 bis — Profilaxia bolilor genetice (curs p. 199–206) */
(function () {
GHID.capitol({
id: "c10b",
intro: `<p class="lead">Majoritatea bolilor genetice sunt cronice și multe nu se pot trata. De aceea prevenția are două ținte: să nu apară sau să nu se transmită boala (<b>profilaxie primară</b>) și să fie descoperită înainte de complicații (<b>profilaxie secundară</b>).</p>
<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="Profilaxia primară și secundară">
<rect x="280" y="14" width="200" height="44" rx="22" class="fP"/><text x="380" y="42" text-anchor="middle" fill="#fff" style="font-weight:800">Profilaxia bolilor genetice</text>
<path d="M330 58 C300 80 200 80 190 96 M430 58 C460 80 560 80 570 96" fill="none" class="si" stroke-width="1.6"/>
<rect x="20" y="96" width="350" height="250" rx="14" class="fis sin" stroke-width="1.2"/>
<text x="195" y="122" text-anchor="middle" class="tin b" style="font-size:15px">PRIMARĂ</text><text x="195" y="140" text-anchor="middle" class="tm" style="font-size:11.5px">evită apariția și transmiterea bolii</text>
${["evitarea mutagenilor (radiații, noxe chimice)", "vârstă reproductivă: mama < 35–38, tatăl < 45 de ani", "depistarea heterozigoților (purtători recesivi)", "evitarea căsătoriilor consangvine", "la predispoziție: identificarea rudelor cu risc", "și evitarea factorilor declanșatori din mediu"].map((t, i) => `<text x="40" y="${172 + i * 28}" class="ti" style="font-size:12.5px">${i === 5 ? "" : "•"} ${t}</text>`).join("")}
<rect x="390" y="96" width="350" height="250" rx="14" class="fas" stroke-width="1.2"/>
<text x="565" y="122" text-anchor="middle" class="ta b" style="font-size:15px">SECUNDARĂ</text><text x="565" y="140" text-anchor="middle" class="tm" style="font-size:11.5px">depistare precoce, evitarea complicațiilor</text>
${["screening și diagnostic prenatal", "alternative pentru cuplurile cu risc: contracepție,", "fertilizare in vitro (± diagnostic preimplantator)", "screening neonatal (toți nou-născuții)", "screeningul heterozigoților în populații cu risc", "screening familial (boli cu debut tardiv: FH, Huntington)"].map((t, i) => `<text x="410" y="${172 + i * 28}" class="ti" style="font-size:12.5px">${i === 2 ? "" : "•"} ${t}</text>`).join("")}
</svg>
<figcaption><b>Cele două niveluri de profilaxie</b> din curs (p. 199–201). Diagnosticul preimplantator nu este numit explicit în curs; este adăugat din Emery (cap. 20) ca formă de FIV pentru cuplurile cu risc.</figcaption>
</figure>`,
sectiuni: [
{
id: "profilaxie", titlu: "Profilaxia primară și secundară; screeningul neonatal", pag: "199–206", emery: "cap. 11 (screening), cap. 20 (diagnostic prenatal)", acopera: ["c10b-r01"],
html: `
<h3>Screeningul prenatal: ce măsoară sângele mamei</h3>
<p>Screeningul identifică sarcinile cu <b>risc crescut</b>; nu pune diagnosticul. Se face prin markeri biochimici din sângele matern și ecografie (morfometrie fetală); un rezultat pozitiv trimite la genetică pentru analiza celulelor fetale.</p>
<div class="tw"><table>
<tr><th>Test</th><th>Când</th><th>Ce măsoară</th></tr>
<tr><td><b>Dublu test</b> (screening de trimestru I)</td><td>săpt. 10–12</td><td><b>PAPP-A</b> + <b>β-hCG liber</b>, împreună cu ecografia (vârsta gestațională, <b>translucența nucală</b>)</td></tr>
<tr><td><b>Triplu test</b></td><td>săpt. 16–18</td><td><b>AFP</b>, <b>β-hCG</b>, <b>estriol neconjugat (uE3)</b></td></tr>
<tr><td><b>Cvadruplu test</b></td><td>trimestrul II</td><td>cele trei + <b>inhibina A</b>; detectează ~75–80% din feții cu sindrom Down</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Tiparele markerilor serici materni">
${(() => {
  const col = ["AFP", "uE3", "β-hCG", "inhibina A"], rows = [["Trisomia 21", ["↓", "↓", "↑", "↑"], "fA"], ["Trisomia 18", ["↓", "↓", "↓", "—"], "fP"], ["Defect deschis de tub neural", ["↑↑", "—", "—", "—"], "fC"], ["Turner cu higromă chistică", ["↓", "↓", "↑", "—"], "fT"]];
  let s = col.map((c, j) => `<text x="${370 + j * 100}" y="30" text-anchor="middle" class="ti b">${c}</text>`).join("");
  rows.forEach(([n, v, c], i) => {
    const y = 48 + i * 52;
    s += `<rect x="20" y="${y}" width="290" height="40" rx="20" class="${c}"/><text x="165" y="${y + 25}" text-anchor="middle" fill="#fff" style="font-weight:800">${n}</text>`;
    v.forEach((a, j) => {
      const cls = a.includes("↑") ? "tw2" : a.includes("↓") ? "tin" : "tm";
      s += `<rect x="${330 + j * 100}" y="${y}" width="80" height="40" rx="8" class="fcard si" stroke-width="1"/><text x="${370 + j * 100}" y="${y + 28}" text-anchor="middle" class="${cls} b" style="font-size:22px">${a}</text>`;
    });
  });
  s += `<text x="20" y="262" class="tm" style="font-size:11.5px">Inhibina A în trisomia 21 nu e dată în curs (Emery). „—” = fără modificare caracteristică / nedescrisă în curs.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Tiparele de reținut.</b> Trisomia 21: AFP și uE3 scăzute, hCG crescut. Trisomia 18: toate scăzute. AFP crescută: defect fetal deschis prin care AFP trece în lichidul amniotic (curs, p. 202–203).</figcaption>
</figure>
<p><b>AFP crescută</b> în lichidul amniotic apare și în: omfalocel, gastroschizis, atrezie esofagiană, sindrom nefrotic congenital (tip finlandez), teratom sacrococcigian, sindrom Meckel, sindrom Turner, afecțiuni cutanate, deces intrauterin.</p>
[[gal:tn|<b>Translucența nucală</b> la ecografia de trimestru I: spațiul transonic de la ceafa fătului. Valorile crescute sugerează aneuploidie (ex. trisomia 21) sau malformații cardiace.;;spina_desen|<b>Spina bifida</b>: defect deschis de tub neural, prin care AFP fetală trece în lichidul amniotic și în sângele mamei.]]
<h3>Diagnosticul prenatal: când se face</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Calendarul metodelor prenatale">
${(() => {
  const X = (w) => 40 + w * 17;
  let s = `<line x1="${X(0)}" y1="250" x2="${X(40)}" y2="250" class="sm" stroke-width="2"/>`;
  [0, 5, 10, 15, 20, 25, 30, 35, 40].forEach((w) => (s += `<line x1="${X(w)}" y1="244" x2="${X(w)}" y2="256" class="sm"/><text x="${X(w)}" y="274" text-anchor="middle" class="tm" style="font-size:11px">${w}</text>`));
  s += `<text x="${X(40)}" y="296" text-anchor="end" class="tm">săptămâni de sarcină</text>`;
  s += `<rect x="${X(0)}" y="282" width="${X(13) - X(0)}" height="6" class="fP" opacity=".4"/><rect x="${X(13)}" y="282" width="${X(27) - X(13)}" height="6" class="fG" opacity=".4"/><rect x="${X(27)}" y="282" width="${X(40) - X(27)}" height="6" class="fT" opacity=".4"/>`;
  const bar = (a, b, y, t, cls, txt) => `<rect x="${X(a)}" y="${y}" width="${Math.max(X(b) - X(a), 6)}" height="26" rx="6" class="${cls}"/><text x="${X(b) + 8}" y="${y + 18}" class="${txt || "ti"} b" style="font-size:12px">${t}</text>`;
  s += `<text x="20" y="20" class="ti b">Screening (neinvaziv)</text>`;
  s += bar(10, 12, 30, "dublu test + translucență nucală (10–12)", "fP");
  s += bar(16, 18, 62, "triplu / cvadruplu test (16–18)", "fP");
  s += bar(12, 12.4, 94, "", "fC") + bar(24, 24.4, 94, "ecografii recomandate: săpt. 12 și 24", "fC");
  s += `<text x="20" y="146" class="ti b">Diagnostic (invaziv)</text>`;
  s += bar(8, 10, 156, "biopsie de vilozități coriale (8–10 în curs)", "fA");
  s += bar(16, 18, 188, "amniocenteză (16–18)", "fA");
  s += bar(20, 24, 220, "cordocenteză (după 20–24)", "fA");
  return s;
})()}
</svg>
<figcaption><b>Ferestrele de timp din curs</b> (p. 200–203). Metodele invazive dau celule fetale pentru analiza cromozomială, moleculară sau biochimică.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Cele trei proceduri invazive">
<path d="M380 40 C200 40 120 130 130 210 C140 290 260 320 380 320 C500 320 620 290 630 210 C640 130 560 40 380 40Z" class="fcard si" stroke-width="2"/>
<path d="M380 60 C250 60 170 140 175 210 C180 280 270 300 380 300 C490 300 580 280 585 210 C590 140 510 60 380 60Z" class="fis"/>
<text x="470" y="284" class="tin b" style="font-size:12px">lichid amniotic</text>
<path d="M200 110 C260 70 340 64 400 70 C360 90 290 100 240 140 Z" class="fA" opacity=".55"/><text x="215" y="96" class="tw2 b" style="font-size:12px">placentă (vilozități)</text>
<ellipse cx="400" cy="210" rx="70" ry="54" class="fC" opacity=".55"/><circle cx="450" cy="180" r="30" class="fC" opacity=".55"/><text x="400" y="216" text-anchor="middle" class="ti b">făt</text>
<path d="M300 110 C320 150 330 180 345 200" fill="none" class="sP" stroke-width="5"/><text x="292" y="174" text-anchor="end" class="ta b" style="font-size:12px">cordon</text>
<line x1="80" y1="20" x2="245" y2="118" class="si" stroke-width="2.5"/><circle cx="245" cy="118" r="5" class="fA"/><text x="20" y="16" class="ti b" style="font-size:12px">① vilozități coriale</text>
<line x1="700" y1="70" x2="545" y2="200" class="si" stroke-width="2.5"/><circle cx="545" cy="200" r="5" class="fG"/><text x="740" y="64" text-anchor="end" class="ti b" style="font-size:12px">② amniocenteză</text>
<line x1="520" y1="14" x2="330" y2="160" class="si" stroke-width="2.5"/><circle cx="330" cy="160" r="5" class="fP"/><text x="540" y="20" class="ti b" style="font-size:12px">③ cordocenteză</text>
</svg>
<figcaption><b>Ce recoltează fiecare procedură</b>, sub ghidaj ecografic, transabdominal: ① țesut placentar (trofoblast, de aceeași origine cu fătul), ② lichid amniotic cu celule fetale descuamate, ③ sânge fetal din vena ombilicală. Schemă neproporțională.</figcaption>
</figure>
[[gal:amnio|<b>Amniocenteza</b>: puncție transabdominală a sacului amniotic, ghidată ecografic.;;vilozitati|<b>Vilozități coriale</b> la microscop: trofoblastul din care se fac analizele ADN, enzimatice și cromozomiale.]]
<div class="emery"><b>Curs vs. Emery</b><p>Emery recomandă biopsia de vilozități coriale la <b>11–13 săptămâni</b>: făcută mai devreme (sub 10 săptămâni) a fost asociată cu defecte de reducere a membrelor. Amniocenteza se face de obicei la 15–16 săptămâni. Pierderea de sarcină atribuită procedurii este estimată în Emery la ~0,5–1% pentru amniocenteză și puțin mai mare pentru biopsia de vilozități; studiile recente dau valori mai mici.</p></div>
<h3>Indicațiile diagnosticului prenatal</h3>
<div class="pasi">
<div><b>Vârsta părinților</b>avansată la concepție</div>
<div><b>Screening pozitiv</b>dublu sau triplu test</div>
<div><b>Ecografie</b>anomalii suspecte sau identificate</div>
<div><b>Părinte cu anomalie structurală</b>translocație echilibrată, inversie</div>
<div><b>Copil anterior</b>cu anomalie cromozomială <i>de novo</i> (risc mic, dar se oferă)</div>
<div><b>Boală monogenică în familie</b>diagnosticabilă molecular sau biochimic</div>
<div><b>Boală legată de X</b>stabilirea sexului fetal, dacă există test specific</div>
<div><b>Rude de gradul I</b>cu defect de tub neural, malformație unică (mai ales cardiacă) sau anomalii multiple</div>
<div><b>Teratogeni</b>expunere în sarcină; antiepileptice antifolice</div>
<div><b>Alți factori</b>avorturi spontane repetate, feți morți; consangvinitate; diabet matern dezechilibrat</div>
</div>
<h3>Metode neinvazive moderne</h3>
<p>Cursul menționează analiza ADN-ului fetal din sângele matern (cuantificarea ADN-ului fetal metilat) pentru trisomiile 13, 18, 21 și aneuploidiile cromozomilor sexuali. Emery o descrie ca <b>NIPT</b> (testare prenatală neinvazivă pe ADN fetal liber), posibilă de la ~10 săptămâni: foarte sensibilă pentru trisomia 21, dar rămâne <b>test de screening</b>, iar un rezultat pozitiv se confirmă invaziv.</p>
[[gal:dpi|<b>Diagnosticul genetic preimplantator</b>: după FIV, din embrion se biopsiază celule care se testează; se transferă doar embrionii fără mutația familiei.;;blastomer|<b>Biopsia unui blastomer</b> dintr-un embrion de 8 celule.]]
<h3>Screeningul neonatal</h3>
<p>Testează <b>toți</b> nou-născuții dintr-o populație pentru boli grave, nemanifeste la naștere, cu consecințe ireversibile, dar <b>tratabile</b> presimptomatic (dietă, substituție). La data cursului, în România: doar <b>fenilcetonurie</b> și <b>hipotiroidism congenital</b>; în alte țări, zeci de boli.</p>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Drumul unei picături de sânge în screeningul neonatal">
<defs><marker id="s1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<path d="M60 150 C40 110 60 70 100 70 C140 70 150 110 130 150 C120 175 80 180 60 150Z" class="fcard si" stroke-width="1.5"/><circle cx="96" cy="150" r="8" class="fA"/><text x="96" y="210" text-anchor="middle" class="ti b">călcâi</text><text x="96" y="228" text-anchor="middle" class="tm" style="font-size:11px">ziua 3–7</text>
<path d="M150 130 H220" class="si" stroke-width="1.8" marker-end="url(#s1)"/>
<rect x="230" y="70" width="170" height="110" rx="10" class="fcard si" stroke-width="1.2"/>
${[0, 1, 2, 3].map((i) => `<circle cx="${262 + i * 36}" cy="120" r="14" class="fA" opacity=".85"/>`).join("")}
<text x="315" y="160" text-anchor="middle" class="tm" style="font-size:11px">hârtie de filtru (DBS)</text><text x="315" y="210" text-anchor="middle" class="ti b">picătură uscată</text>
<path d="M400 125 H470" class="si" stroke-width="1.8" marker-end="url(#s1)"/>
<rect x="480" y="40" width="260" height="170" rx="12" class="fas"/>
<text x="610" y="66" text-anchor="middle" class="ta b">metode</text>
<text x="500" y="94" class="ti" style="font-size:12px"><tspan class="b">Guthrie</tspan>: inhibiția B. subtilis; sensibilitate 90%</text>
<text x="500" y="118" class="ti" style="font-size:12px"><tspan class="b">fluorometrie</tspan>: 99,9% exactitate</text>
<text x="500" y="142" class="ti" style="font-size:12px"><tspan class="b">MS în tandem</tspan>: zeci de boli</text>
<text x="500" y="160" class="ti" style="font-size:12px">metabolice din aceeași picătură</text>
<text x="500" y="188" class="ti" style="font-size:12px"><tspan class="b">TSH, FT4</tspan>: hipotiroidism (1/4.000)</text>
</svg>
<figcaption><b>Screeningul neonatal</b>, după curs (p. 205–206). Testarea se face după ce copilul a primit lapte (fenilalanină). Un test Guthrie pozitiv se confirmă prin fluorometrie sau spectrometrie de masă în tandem.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Boală</th><th>Screening neonatal în curs</th></tr>
<tr><td>Fenilcetonurie</td><td>da: Guthrie, fluorometrie, MS în tandem (capitolul 8)</td></tr>
<tr><td>Hipotiroidism congenital</td><td>da: TSH și FT4; 1/4.000; fără tratament, afectează dezvoltarea intelectuală</td></tr>
<tr><td>Galactozemie</td><td>nu de rutină, deși îndeplinește criteriile</td></tr>
<tr><td>Fibroză chistică</td><td>nu de rutină, deși îndeplinește criteriile; semnale de alarmă: intestin hiperecogen fetal, ileus meconial, atrezie jejunală, icter prelungit</td></tr>
<tr><td>Altele (în alte țări)</td><td>siclemie, malformații cardiace, luxație congenitală de șold (ecografie), screening auditiv</td></tr>
</table></div>
<p><b>Screeningul heterozigoților</b>: talasemie, fibroză chistică etc., în grupuri etnice cu risc, izolate genetice sau la căsătorii consangvine. <b>Screeningul familial</b>: identificarea presimptomatică a rudelor cu genotip anormal, mai ales în bolile cu debut tardiv (hipercolesterolemia familială, boala Huntington).</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Care e diferența esențială dintre dublul test și amniocenteză?</summary><div>Dublul test este screening (estimează un risc, neinvaziv); amniocenteza este diagnostic (analizează celule fetale, invaziv, cu risc mic de pierdere a sarcinii).</div></details>
<details class="q"><summary>Triplu test: AFP scăzută, uE3 scăzut, hCG crescut. Ce sugerează și ce urmează?</summary><div>Risc crescut de trisomie 21; se oferă diagnostic prin amniocenteză (cariotip, FISH sau QF-PCR).</div></details>
<details class="q"><summary>De ce nu se face screening neonatal pentru boala Huntington?</summary><div>Nu se manifestă în copilărie și nu are tratament care să schimbe evoluția; nu îndeplinește criteriile screeningului neonatal.</div></details>
</div>`
},
{
id: "tabel24", titlu: "Tabelul XXIV. Abordări ale diagnosticului prenatal", pag: "204", emery: "cap. 20", acopera: ["c10b-r02"],
html: `
<p>Tabelul din curs, verificat pe scanare, cu o coloană adăugată: ce material obține fiecare metodă.</p>
<div class="tw"><table>
<tr><th>Manevra</th><th>Indicație (curs)</th><th>Material / principiu</th></tr>
<tr><td><b>Amniocenteza</b></td><td>boli cromozomiale (inclusiv în situațiile cu risc scăzut); defecte deschise de tub neural</td><td>lichid amniotic: amniocite (cariotip, ADN) și AFP</td></tr>
<tr><td><b>Biopsia de vilozități coriale</b></td><td>analize ADN și enzimatice; boli cromozomiale (inclusiv în situațiile cu risc scăzut)</td><td>trofoblast; mult ADN, rezultat mai devreme</td></tr>
<tr><td><b>Ecografia / ultrasonografia</b></td><td>localizarea placentei, sarcină unică/gemelară, malformații (membre, tub neural, cardiace); translucența nucală</td><td>imagine, neinvaziv, repetabil</td></tr>
<tr><td><b>Cordocenteza</b> (sânge fetal) sau <b>biopsia de țesut fetal</b></td><td>boli hematologice severe sau boli metabolice; talasemii</td><td>sânge fetal din cordon; țesut fetal</td></tr>
<tr><td><b>Screeningul biochimic al sângelui matern</b></td><td>dublu / triplu test; alfa-fetoproteina, β-hCG etc.</td><td>ser matern, neinvaziv; dă un risc</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Metodele prenatale după invazivitate și moment">
${(() => {
  const X = (w) => 60 + w * 16, Y = (r) => 200 - r * 150;
  let s = `<line x1="60" y1="200" x2="720" y2="200" class="sm"/><line x1="60" y1="40" x2="60" y2="200" class="sm"/>`;
  s += `<text x="720" y="222" text-anchor="end" class="tm" style="font-size:11px">săptămâna de sarcină →</text><text x="66" y="34" class="tm" style="font-size:11px">invazivitate ↑</text>`;
  [10, 20, 30, 40].forEach((w) => (s += `<text x="${X(w)}" y="216" text-anchor="middle" class="tm" style="font-size:11px">${w}</text>`));
  const p = (w1, w2, r, t, c) => `<rect x="${X(w1)}" y="${Y(r) - 14}" width="${X(w2) - X(w1)}" height="28" rx="14" class="${c}"/><text x="${X(w2) + 8}" y="${Y(r) + 5}" class="ti b" style="font-size:12px">${t}</text>`;
  s += p(10, 18, 0.1, "screening seric matern", "fP");
  s += `<rect x="${X(8)}" y="${Y(0.3) - 14}" width="${X(40) - X(8)}" height="28" rx="14" class="fC"/><text x="${X(24)}" y="${Y(0.3) + 5}" text-anchor="middle" fill="#1f2a37" style="font-weight:800;font-size:12px">ecografie (oricând, neinvaziv)</text>`;
  s += p(8, 10, 0.75, "vilozități coriale", "fA");
  s += p(16, 18, 0.62, "amniocenteză", "fA");
  s += p(20, 24, 0.95, "cordocenteză / biopsie fetală", "fA");
  return s;
})()}
</svg>
<figcaption><b>Tabelul XXIV pe două axe:</b> cât de devreme și cât de invaziv. Cu cât metoda este mai invazivă, cu atât indicația trebuie să fie mai precisă. Poziția verticală este calitativă, nu un risc măsurat.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Pentru ce metodă din Tabelul XXIV este indicația „talasemii”?</summary><div>Cordocenteza (sânge fetal) sau biopsia de țesut fetal; azi, de cele mai multe ori, se face analiză ADN din vilozități coriale.</div></details>
<details class="q"><summary>Care metodă permite atât cariotipul, cât și dozarea AFP din aceeași probă?</summary><div>Amniocenteza: amniocitele pentru cariotip, lichidul pentru AFP (defecte de tub neural).</div></details>
</div>`
}
]
});
})();
