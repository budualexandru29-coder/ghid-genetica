/* Capitolul 8 — Boli monogenice cu transmitere autozomal recesivă (curs p. 153–170) */
(function () {
const P = GHID.ped;
const arboreAR = () => {
  let s = "";
  s += P.ind(220, 40, "m", "p", "I-1") + P.ind(320, 40, "f", "n", "I-2") + P.cuplu(220, 320, 40);
  s += P.ind(480, 40, "m", "n", "I-3") + P.ind(580, 40, "f", "p", "I-4") + P.cuplu(480, 580, 40);
  s += P.copii(270, 40, [200, 300], 120) + P.ind(200, 120, "f", "n", "II-1") + P.ind(300, 120, "m", "p", "II-2");
  s += P.copii(530, 40, [440, 540], 120) + P.ind(440, 120, "f", "p", "II-3") + P.ind(540, 120, "m", "n", "II-4");
  s += `<line x1="315" y1="120" x2="425" y2="120" class="si" stroke-width="1.6"/>`;
  s += P.copii(370, 120, [280, 340, 400, 460], 210);
  s += P.ind(280, 210, "m", "n", "III-1") + P.ind(340, 210, "f", "a", "III-2") + P.ind(400, 210, "m", "p", "III-3") + P.ind(460, 210, "f", "a", "III-4");
  return s;
};

GHID.capitol({
id: "c08",
intro: `<p class="lead">Boala apare doar când <b>ambele</b> alele sunt mutante. Părinții sunt de regulă purtători sănătoși; boala „sare” generații și apare la frați. Cele mai multe boli recesive sunt deficite enzimatice: jumătate din enzimă (la heterozigot) ajunge, nimic nu ajunge.</p>
<figure>
<svg viewBox="0 0 740 300" role="img" aria-label="Arbore genealogic autozomal recesiv">
${arboreAR()}
<rect x="20" y="250" width="700" height="44" rx="10" class="fas"/>
<text x="370" y="270" text-anchor="middle" class="ti">Părinți sănătoși, purtători (jumătate plini) · frați afectați, ambele sexe · consangvinizarea crește riscul</text>
<text x="370" y="287" text-anchor="middle" class="ti">Doi purtători (Aa × Aa): <tspan class="b">25%</tspan> afectat · <tspan class="b">50%</tspan> purtător · 25% normal; un frate sănătos are 2/3 șanse de a fi purtător</text>
</svg>
<figcaption><b>Recunoașterea transmiterii autozomal recesive.</b> Simbolurile pe jumătate pline = purtători heterozigoți (de obicei cunoscuți doar retrospectiv sau prin testare).</figcaption>
</figure>
[[img:ar|<b>Doi purtători, patru combinații egal probabile:</b> AA, Aa, aA, aa. Doar combinația aa produce boala.]]
<figure>
<svg viewBox="0 0 760 220" role="img" aria-label="Frecvența purtătorilor din incidența bolii">
<text x="380" y="24" text-anchor="middle" class="ti b">De la incidența bolii la frecvența purtătorilor (echilibrul Hardy–Weinberg)</text>
${[["Fibroza chistică", "1/2.500", "q = 1/50", "1/25"], ["Fenilcetonuria", "1/10.000", "q = 1/100", "1/50"], ["Boala Wilson", "1/30.000", "q ≈ 1/170", "≈1/90"], ["Galactozemia", "1/60.000", "q ≈ 1/245", "≈1/120"]].map(([b, i, q, c], k) => {
  const x = 20 + k * 182;
  return `<rect x="${x}" y="44" width="170" height="160" rx="12" class="fcard si" stroke-width="1"/><text x="${x + 85}" y="70" text-anchor="middle" class="ti b">${b}</text><text x="${x + 85}" y="96" text-anchor="middle" class="tw2">incidență ${i}</text><text x="${x + 85}" y="118" text-anchor="middle" class="tm">= q²  →  ${q}</text><text x="${x + 85}" y="150" text-anchor="middle" class="tin b" style="font-size:16px">purtători ${c}</text><text x="${x + 85}" y="172" text-anchor="middle" class="tm" style="font-size:11px">2pq ≈ 2q</text>`;
}).join("")}
</svg>
<figcaption><b>De ce purtătorii sunt mult mai frecvenți decât bolnavii.</b> Pentru o incidență de 1/10.000, q = 1/100 și 2pq ≈ 1/50: exact cifra din curs pentru fenilcetonurie. Valorile pentru Wilson și galactozemie sunt calculate din incidențele cursului (1–4/100.000, respectiv 1/60.000); cursul dă pentru Wilson 1/100 purtători.</figcaption>
</figure>`,
sectiuni: [
{
id: "fc", titlu: "Fibroza chistică (mucoviscidoza)", pag: "153–155", emery: "cap. 18, p. 273–276", acopera: ["c08-r01"],
html: `
<p>Cea mai frecventă boală autozomal recesivă la populația caucaziană: <b>1/2.000–1/3.500</b> nou-născuți (Irlanda 1/1.350; afro-americani 1/15.000; asiatici 1/32.000). În Europa, <b>1 din 25</b> de persoane este purtătoare.</p>
<figure><img src="fig/loc_c08_ar.svg" alt="Localizarea genelor bolilor recesive">
<figcaption><b>Unde sunt genele bolilor din acest capitol</b> (UCSC GRCh38), cu harta exonilor <i>CFTR</i>: 27 de exoni pe 188,6 kb la 7q31.2.</figcaption></figure>
<div class="capcana"><b>Două localizări de corectat</b><p>Cursul plasează <i>HFE</i> la „6q21.3” (pe brațul lung); gena este pe brațul scurt, la <b>6p22.2</b>, lângă complexul HLA. <i>TYR</i> este la 11q14.3 (cursul: 11q14–q21, un interval mai vechi).</p></div>
<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="CFTR normal și F508del">
<defs><marker id="c1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="4" width="350" height="316" rx="14" class="fis sin" stroke-width="1"/><text x="195" y="24" text-anchor="middle" class="tin b" style="font-size:15px">NORMAL</text>
<rect x="390" y="4" width="350" height="316" rx="14" class="fws sw" stroke-width="1"/><text x="565" y="24" text-anchor="middle" class="tw2 b" style="font-size:15px">F508del</text>
${[0, 370].map((d, i) => `
<rect x="${40 + d}" y="70" width="310" height="22" class="fline"/><text x="${50 + d}" y="86" class="tm" style="font-size:10px">lumen (căi aeriene)</text>
<rect x="${40 + d}" y="92" width="310" height="140" class="fcard"/><text x="${50 + d}" y="226" class="tm" style="font-size:11px">celulă epitelială</text>
${i === 0 ? `<rect x="${170 + d}" y="62" width="40" height="40" rx="8" class="fG"/><text x="${190 + d}" y="87" text-anchor="middle" fill="#fff" style="font-size:10px;font-weight:800">CFTR</text>
<path d="M${190 + d} 140 V66" class="sok" stroke-width="2.5" marker-end="url(#c1)"/><text x="${220 + d}" y="130" class="tok b">Cl⁻ iese</text><text x="${220 + d}" y="148" class="tm" style="font-size:11px">apa urmează</text>
<path d="M${80 + d} 60 q20 -14 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" class="sG" stroke-width="2"/><text x="${195 + d}" y="270" text-anchor="middle" class="tok">mucus fluid, curățat de cili</text>`
: `<circle cx="${180 + d}" cy="${170}" r="18" class="fA"/><text x="${180 + d}" y="174" text-anchor="middle" fill="#fff" style="font-size:9px;font-weight:800">CFTR</text><path d="M${195 + d} 180 l30 20" class="sw" stroke-width="2"/><text x="${232 + d}" y="210" class="tw2 b" style="font-size:12px">pliere greșită → RE</text><text x="${232 + d}" y="226" class="tw2" style="font-size:12px">degradată în proteazom</text>
<rect x="${70 + d}" y="34" width="250" height="30" rx="8" class="fC" opacity=".75"/><text x="${195 + d}" y="54" text-anchor="middle" fill="#1f2a37" style="font-weight:700">mucus vâscos, aderent</text>
<text x="${195 + d}" y="270" text-anchor="middle" class="tw2">Cl⁻ și NaCl rămân în celulă</text>`}
<text x="${195 + d}" y="298" text-anchor="middle" class="tm" style="font-size:11px">${i === 0 ? "canal de clor în membrana apicală" : "nu ajunge la membrană: fără canal"}</text>`).join("")}
</svg>
<figcaption><b>Ce face și ce nu face CFTR.</b> CFTR este un canal de clor din membrana apicală. <b>F508del</b> (deleția a 3 nucleotide care elimină fenilalanina 508; ~70% din alele) produce o proteină pliată greșit, reținută și degradată. Clorul nu mai iese, apa nu urmează, secrețiile devin vâscoase și blochează canalele excretorii (plămân, pancreas, canale deferente). În glanda sudoripară defectul este invers: clorul nu e reabsorbit, deci transpirația e sărată. Schemă proprie după curs (p. 153) și Emery.</figcaption>
</figure>
[[img:cftr|<b>Arhitectura CFTR</b>: două domenii transmembranare (care formează porul), două domenii de legare a nucleotidelor (NBD1, NBD2) și domeniul reglator R. F508 se află în NBD1.]]
<h3>Tablou clinic: triada pulmonar–pancreas–piele</h3>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Organele afectate în fibroza chistică">
${[["Plămân", "infecții recurente cu evoluție cronică; principala cauză de deces", "fA"], ["Pancreas exocrin", "malabsorbție, steatoree, hipotrofie; diabetul = prima complicație non-pulmonară", "fC"], ["Glande sudoripare", "Na⁺ și Cl⁻ > 60 mEq/L în transpirație", "fG"], ["Intestin (nou-născut)", "ileus meconial la 10–20%", "fP"], ["Aparat reproducător", "absența bilaterală a canalelor deferente: sterilitate la 95% din bărbați", "fT"]].map(([o, t, c], i) => {
  const y = 16 + i * 48;
  return `<rect x="20" y="${y}" width="190" height="40" rx="20" class="${c}"/><text x="115" y="${y + 25}" text-anchor="middle" fill="#fff" style="font-weight:800">${o}</text><text x="226" y="${y + 25}" class="ti" style="font-size:12.5px">${t}</text>`;
}).join("")}
</svg>
<figcaption><b>Același defect de canal, cinci organe.</b> Debut de la naștere sau în copilărie. După curs (p. 154).</figcaption>
</figure>
<h3>Diagnostic</h3>
<div class="pasi">
<div><b>Testul sudorii</b>„gold standard”: iontoforeză cu pilocarpină; Cl⁻ peste 60 mEq/L</div>
<div><b>Analiza moleculară</b>stripuri sau kituri ARMS-PCR pentru ~50 de mutații frecvente în zona geografică; un test negativ nu exclude boala</div>
<div><b>Secvențiere</b>în anumite situații</div>
<div><b>Prenatal</b>din vilozități coriale sau lichid amniotic; obligatoriu să se cunoască alelele ambilor părinți</div>
</div>
<p><b>Sfat genetic:</b> părinți purtători → 25% risc la fiecare sarcină; frații sănătoși ai bolnavului au 2/3 șanse de a fi purtători (cursul scrie 50%, valabil pentru orice copil înainte de a ști dacă e afectat); se recomandă testarea partenerului. <b>Tratament</b> (necurativ): tratament agresiv al infecțiilor, fluidificarea secrețiilor, substituție enzimatică pancreatică.</p>
<div class="emery"><b>Curs vs. Emery</b><p>Emery precizează că testul sudorii măsoară clorul (valori peste 60 mmol/L sunt diagnostice) și descrie moleculele care corectează direct CFTR (ivacaftor, combinații cu elexacaftor/tezacaftor), apărute după redactarea cursului; acestea ajută pliera și deschiderea canalului mutant.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce transpirația e sărată în fibroza chistică, dacă în plămân CFTR secretă clor?</summary><div>În ductul glandei sudoripare CFTR reabsoarbe clorul din transpirație. Fără CFTR, clorul (și sodiul) rămân în transpirație.</div></details>
<details class="q"><summary>Ce înseamnă că testul genetic negativ nu exclude fibroza chistică?</summary><div>Kiturile uzuale caută doar mutațiile frecvente (~50 din peste 1.500). Pacientul poate avea două mutații rare, nedetectate.</div></details>
<details class="q"><summary>Un frate sănătos al unui copil cu FC: ce risc are să fie purtător?</summary><div>2/3: dintre cele trei combinații compatibile cu starea de sănătate (AA, Aa, aA), două sunt purtătoare.</div></details>
</div>`
},
{
id: "arpkd", titlu: "Boala polichistică renală autozomal recesivă (ARPKD)", pag: "155–156", emery: "boli renale chistice", acopera: ["c08-r02"],
html: `
<p>Boala polichistică renală „infantilă”, din grupul sindroamelor fibrochistice hepatorenale: cea mai frecventă boală chistică renală la nou-născut și copilul mic. Incidență <b>1/10.000–1/40.000</b> (probabil subestimată); purtători <b>1/70</b>. Gena <b><i>PKHD1</i></b> (6p12.2), peste 250 de mutații, codifică <b>fibrocistina (poliductina)</b>.</p>
<div class="tw"><table>
<tr><th></th><th>ADPKD (capitolul 7)</th><th>ARPKD</th></tr>
<tr><td>Transmitere</td><td>AD</td><td>AR</td></tr>
<tr><td>Gene</td><td><i>PKD1</i>, <i>PKD2</i> (policistine)</td><td><i>PKHD1</i> (fibrocistină)</td></tr>
<tr><td>Frecvență</td><td>1/400–1/1.000</td><td>1/10.000–1/40.000</td></tr>
<tr><td>Debut</td><td>adult, 30–40 ani</td><td>nou-născut, copil mic (prenatal)</td></tr>
<tr><td>Rinichi</td><td>chisturi mari, macroscopice</td><td>rinichi mari, <b>hiperecogeni</b>, fără diferențiere corticomedulară</td></tr>
<tr><td>Ficat</td><td>chisturi hepatice</td><td><b>fibroză hepatică</b> congenitală, ectazie biliară, hipertensiune portală</td></tr>
<tr><td>Evoluție</td><td>~50% insuficiență renală terminală pe la 60 de ani</td><td>peste 50% insuficiență renală terminală în <b>prima decadă</b></td></tr>
</table></div>
[[img:arpkd|<b>Rinichiul în ARPKD</b>: mărit, cu nenumărate dilatații chistice mici ale tubilor colectori, orientate radiar.]]
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Secvența Potter în ARPKD">
<defs><marker id="c2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${["rinichi afectați", "puțină urină fetală", "oligohidramnios", "hipoplazie pulmonară"].map((t, i) => `<rect x="${20 + i * 186}" y="60" width="160" height="60" rx="12" class="${i === 3 ? "fA" : "fcard si"}" stroke-width="1.2"/><text x="${100 + i * 186}" y="95" text-anchor="middle" ${i === 3 ? 'fill="#fff" style="font-weight:800"' : 'class="ti b"'}>${t}</text>${i < 3 ? `<path d="M${182 + i * 186} 90 h20" class="si" stroke-width="1.8" marker-end="url(#c2)"/>` : ""}`).join("")}
<text x="380" y="160" text-anchor="middle" class="ti">Lichidul amniotic este în mare parte urina fătului; plămânii au nevoie de el ca să se dezvolte.</text>
<text x="380" y="182" text-anchor="middle" class="tm">De aceea afectarea pulmonară din ARPKD este secundară celei renale (curs, p. 156).</text>
</svg>
<figcaption><b>De ce un nou-născut cu boală renală are plămâni mici.</b> Schemă proprie.</figcaption>
</figure>
<p>Copiii cu insuficiență renală precoce de obicei nu mai apucă manifestările hepatice; cei cu afectare hepatică predominantă decedează prin hepatopatie după ani de evoluție. <b>Diagnostic</b> ecografic (și prenatal: rinichi mari, hiperecogeni, oligohidramnios ± hipoplazie pulmonară) și molecular (secvențierea <i>PKHD1</i>). <b>Tratament</b> suportiv: ventilație, antihipertensive, dializă, transplant renal, uneori hepatic.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Cum deosebești ecografic ARPKD de ADPKD?</summary><div>ARPKD: rinichi mari, hiperecogeni, fără chisturi mari vizibile, la făt sau nou-născut, cu oligohidramnios. ADPKD: chisturi macroscopice multiple, la adult.</div></details>
</div>`
},
{
id: "he", titlu: "Hemocromatoza ereditară", pag: "157–158", emery: "cap. 18", acopera: ["c08-r03"],
html: `
<p>Absorbție intestinală excesivă de fier, cu depunere în ficat, cord, pancreas, piele, articulații, tiroidă. Una dintre cele mai frecvente boli AR: <b>1/200</b> în nordul Europei. Bărbații sunt afectați mai des (raport F/M = 1/10); vârf în decadele 4–6.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Hepcidina și HFE">
<defs><marker id="c3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="30" width="200" height="90" rx="14" class="fcard si" stroke-width="1.2"/><text x="120" y="58" text-anchor="middle" class="ti b">hepatocit</text><text x="120" y="80" text-anchor="middle" class="tm">HFE „simte” fierul</text><text x="120" y="98" text-anchor="middle" class="tm">→ produce HEPCIDINĂ</text>
<path d="M220 75 H330" class="sP" stroke-width="2.5" marker-end="url(#c3)"/><text x="275" y="66" text-anchor="middle" class="ta b">hepcidină</text>
<rect x="340" y="30" width="200" height="90" rx="14" class="fcard si" stroke-width="1.2"/><text x="440" y="58" text-anchor="middle" class="ti b">enterocit duodenal</text><text x="440" y="80" text-anchor="middle" class="tm">feroportina exportă</text><text x="440" y="98" text-anchor="middle" class="tm">fierul în sânge</text>
<path d="M540 75 H640" class="sA" stroke-width="2.5" marker-end="url(#c3)"/><text x="690" y="80" text-anchor="middle" class="ti b">Fe în sânge</text>
<text x="440" y="142" text-anchor="middle" class="ta">hepcidina blochează feroportina = frână</text>
<rect x="20" y="170" width="720" height="104" rx="12" class="fws sw" stroke-width="1.2"/>
<text x="380" y="196" text-anchor="middle" class="tw2 b" style="font-size:15px">HFE mutant (C282Y/C282Y): prea puțină hepcidină</text>
<text x="380" y="220" text-anchor="middle" class="ti">→ frâna nu mai funcționează → absorbție intestinală crescută toată viața</text>
<text x="380" y="242" text-anchor="middle" class="ti">→ saturația transferinei ↑ → feritină ↑ → depozite în ficat, pancreas, cord, piele, gonade</text>
<text x="380" y="262" text-anchor="middle" class="tm">Femeile pierd fier prin menstruație și sarcini: boala apare mai târziu și mai rar la ele.</text>
</svg>
<figcaption><b>Mecanismul hemocromatozei de tip 1.</b> Calea HFE–hepcidină–feroportină este descrisă în Emery; cursul se oprește la „absorbție excesivă”. Schemă proprie.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Genetică (HE tip 1, cea mai frecventă din 4 tipuri)</th><th></th></tr>
<tr><td>Gena</td><td><i>HFE</i>, lângă locusul HLA (asociere cu HLA-A3); peste 35 de alele mutante</td></tr>
<tr><td><b>C282Y</b></td><td>85–90% din cazuri; cisteina 282 înlocuită cu tirozină; majoritatea bolnavilor sunt <b>homozigoți C282Y</b></td></tr>
<tr><td><b>H63D</b></td><td>~10%; <b>histidina</b> 63 înlocuită cu <b>aspartat</b> (cursul scrie invers, „Asp cu His”)</td></tr>
</table></div>
[[img:hemocrom|<b>Ficat în hemocromatoză</b>, colorație Perls (albastru de Prusia): fierul depus în hepatocite apare albastru.]]
<p><b>Tablou</b> (sugestiv pe la 40 de ani la bărbați, 60 la femei): la debut apatie, oboseală, dureri osteoarticulare; apoi <b>hepatomegalie</b> (95%), splenomegalie (50%), <b>ciroză</b> cu risc de hepatocarcinom, insuficiență cardiacă, hipogonadism, <b>diabet</b>, <b>hiperpigmentare cutanată</b> („diabet bronzat”).</p>
<div class="pasi">
<div><b>Saturația transferinei</b>screening: &gt;60% la bărbați, &gt;45–50% la femei</div>
<div><b>Feritina</b>&gt;300 µg/L la bărbați, &gt;200 µg/L la femei</div>
<div><b>Testare HFE</b>dacă ambele sunt crescute; C282Y homozigot = diagnostic cert, testează frații</div>
<div><b>Flebotomie</b>singurul tratament eficient, sigur și ieftin; se începe la feritină &gt;300; chelatorii NU sunt eficienți</div>
</div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce hemocromatoza se manifestă mai târziu la femei?</summary><div>Pierderile fiziologice de fier (menstruație, sarcini) întârzie acumularea.</div></details>
<details class="q"><summary>Care este testul de screening și care este tratamentul de elecție?</summary><div>Saturația transferinei (urmată de feritină și testarea HFE); flebotomiile repetate.</div></details>
</div>`
},
{
id: "pku", titlu: "Fenilcetonuria", pag: "158–162", emery: "cap. 18, p. 263–266", acopera: ["c08-r04", "c08-r05"],
html: `
<p>Boală metabolică AR prin absența sau deficitul <b>fenilalanin-hidroxilazei</b> (PAH), care transformă fenilalanina în tirozină. Incidență 1/10.000–1/15.000 la caucazieni (Turcia 1/2.600; Finlanda și Japonia sub 1/100.000; <b>România 1/7.500–8.000</b>). Gena <i>PAH</i> la 12q23.2 (cursul: 12q22–q24.1); peste 500 de mutații, dintre care 6 explică peste 65% din cazurile europene. Purtători 1/50.</p>
<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="Calea fenilalaninei și blocul din PKU">
<defs><marker id="c4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="30" width="190" height="60" rx="30" class="fA"/><text x="115" y="58" text-anchor="middle" fill="#fff" style="font-weight:800">FENILALANINĂ</text><text x="115" y="76" text-anchor="middle" fill="#fff" style="font-size:11px">din proteinele alimentare</text>
<path d="M210 60 H370" class="si" stroke-width="2.5" marker-end="url(#c4)"/><rect x="250" y="40" width="80" height="40" rx="8" class="fws sw" stroke-width="2"/><text x="290" y="66" text-anchor="middle" class="tw2 b">PAH</text>
<path d="M266 46 l48 28 M314 46 l-48 28" class="sw" stroke-width="3"/>
<rect x="380" y="30" width="170" height="60" rx="30" class="fline"/><text x="465" y="58" text-anchor="middle" class="ti b">TIROZINĂ</text><text x="465" y="76" text-anchor="middle" class="tm" style="font-size:11px">scade</text>
<path d="M550 60 H600" class="si" stroke-width="1.8" marker-end="url(#c4)"/>
<text x="610" y="48" class="ti" style="font-size:12px">melanină ↓ (blond)</text><text x="610" y="68" class="ti" style="font-size:12px">neurotransmițători</text><text x="610" y="88" class="ti" style="font-size:12px">hormoni tiroidieni</text>
<path d="M115 92 V170" class="sA" stroke-width="3" marker-end="url(#c4)"/><text x="125" y="140" class="tw2 b">acumulare</text>
<rect x="20" y="174" width="230" height="74" rx="12" class="fws sw" stroke-width="1.2"/><text x="135" y="198" text-anchor="middle" class="tw2 b">cale secundară</text><text x="135" y="218" text-anchor="middle" class="ti" style="font-size:12px">acid fenilpiruvic, fenilacetic</text><text x="135" y="236" text-anchor="middle" class="tm" style="font-size:11px">în urină, miros „de șoarece”</text>
<path d="M250 210 H330" class="sA" stroke-width="2.5" marker-end="url(#c4)"/>
<rect x="340" y="174" width="400" height="74" rx="12" class="fA"/><text x="540" y="200" text-anchor="middle" fill="#fff" style="font-weight:800">toxic pentru creierul în dezvoltare</text><text x="540" y="222" text-anchor="middle" fill="#fff" style="font-size:12.5px">retard psihomotor, regresie, retard mintal, convulsii</text>
<rect x="20" y="268" width="720" height="78" rx="12" class="fas"/>
<text x="380" y="292" text-anchor="middle" class="ti b">Figura 23 din curs: patru consecințe ale oricărui bloc enzimatic</text>
<text x="380" y="314" text-anchor="middle" class="ti">① acumularea substratului · ② absența produsului final · ③ o cale secundară cu produși toxici</text>
<text x="380" y="334" text-anchor="middle" class="ti">④ feedback negativ dereglat, care accentuează efectele adverse</text>
</svg>
<figcaption><b>Fenilcetonuria ca model de bloc enzimatic.</b> Schemă proprie după curs (p. 160, Figura 23).</figcaption>
</figure>
[[img:pku|<b>Erorile înnăscute din metabolismul fenilalaninei și tirozinei</b>: blocul PAH (fenilcetonurie) și blocurile din aval (albinism, alcaptonurie, tirozinemii), pe aceeași hartă.]]
<h3>Tablou clinic</h3>
<p>Nou-născutul este <b>asimptomatic</b> (de aici rolul screeningului). Din trimestrul al doilea, fără dietă: miros „de șoarece/mucegai” al urinei, pielii și părului; fenotip <b>blond cu ochi albaștri</b>, piele deschisă (90%); piele uscată, eczeme, fotosensibilitate; vărsături, diaree; convulsii; retard psihomotor, regresia achizițiilor, retard mintal; retard de creștere.</p>
<h3>Diagnostic și tratament</h3>
<div class="pasi">
<div><b>Screening neonatal</b>teste fluorimetrice (99,9% exacte), în zilele 3–7, după ce copilul a primit lapte. Istoric: testul Guthrie (inhibiția creșterii <i>Bacillus subtilis</i>)</div>
<div><b>Confirmare</b>fenilalanină plasmatică &gt;20 mg/dL; acid fenilpiruvic și o-hidroxifenilacetic urinar crescute; tirozină normală</div>
<div><b>Dietă săracă în fenilalanină</b>din prima lună, cel târziu în primul trimestru; țintă 2–10 mg/dL (ideal &lt;6); după adolescență 10–12 mg/dL; toată viața</div>
</div>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Frecvența monitorizării fenilalaninei">
${[["0–1 an", "săptămânal", 52, "fA"], ["1–12 ani", "de 2 ori pe lună", 24, "fG"], ["peste 12 ani", "lunar", 12, "fP"], ["gravidă cu PKU", "de 2 ori pe săptămână", 104, "fC"]].map(([a, f, n, c], i) => `<text x="150" y="${34 + i * 34}" text-anchor="end" class="ti b">${a}</text><rect x="162" y="${20 + i * 34}" width="${n * 3.2}" height="22" rx="4" class="${c}"/><text x="${170 + n * 3.2}" y="${36 + i * 34}" class="ti">${f} · ~${n}/an</text>`).join("")}
</svg>
<figcaption><b>Cât de des se măsoară fenilalanina</b> (curs, p. 161). Lungimea barei = numărul aproximativ de determinări pe an.</figcaption>
</figure>
<div class="exemplu"><b>Fenilcetonuria maternă</b><p>O femeie cu PKU care nu ține dietă înainte de concepție și în sarcină expune fătul (care de obicei <i>nu</i> are PKU, ci e heterozigot) la fenilalanină crescută: malformații cardiace, microcefalie, greutate mică la naștere, retard mintal. De aceea dieta severă se reia preconcepțional.</p></div>
<p><b>Sfat genetic:</b> 25% risc după un copil afectat; un bolnav cu partener AA are copii sănătoși (toți purtători); cu partener Aa, 50% risc.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce screeningul pentru PKU se face după 3 zile, nu imediat după naștere?</summary><div>Fenilalanina crește doar după ce copilul primește lapte (proteine); în primele ore valoarea poate fi încă normală, deci rezultatul ar fi fals negativ.</div></details>
<details class="q"><summary>De ce copiii cu PKU netratați sunt mai deschiși la culoare?</summary><div>Tirozina, produsul blocat, este precursorul melaninei; în plus, fenilalanina în exces inhibă tirozinaza.</div></details>
</div>`
},
{
id: "albinism", titlu: "Albinismul", pag: "162–163", emery: "cap. 18", acopera: ["c08-r06"],
html: `
<p>Absența completă (amelanoză) sau parțială (hipomelanoză) a melaninei din piele, păr și ochi, prin defectul <b>tirozinazei</b> sau al altor proteine ale melanogenezei. Forma cea mai frecventă: <b>albinismul oculocutanat (OCA)</b>, 1/17.000–1/20.000 (Africa subsahariană 1/5.000).</p>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Sinteza melaninei">
<defs><marker id="c5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${["tirozină", "DOPA", "dopachinonă", "MELANINĂ"].map((t, i) => `<rect x="${20 + i * 186}" y="40" width="150" height="50" rx="25" class="${i === 3 ? "fZ" : "fcard si"}" stroke-width="1.2"/><text x="${95 + i * 186}" y="71" text-anchor="middle" ${i === 3 ? 'fill="#fff" style="font-weight:800"' : 'class="ti b"'}>${t}</text>${i < 3 ? `<path d="M${172 + i * 186} 65 h32" class="si" stroke-width="1.8" marker-end="url(#c5)"/>` : ""}`).join("")}
<text x="188" y="118" text-anchor="middle" class="tw2 b">tirozinază (TYR)</text><text x="374" y="118" text-anchor="middle" class="tw2 b">tirozinază (TYR)</text>
<rect x="20" y="140" width="720" height="56" rx="10" class="fas"/>
<text x="380" y="164" text-anchor="middle" class="ti"><tspan class="b">OCA1</tspan>: TYR (11q14.3) · <tspan class="b">OCA2</tspan>: proteina P (OCA2, 15q13.1) · OCA3: TYRP1 · OCA4: SLC45A2</text>
<text x="380" y="184" text-anchor="middle" class="tm">OCA1 și OCA2 sunt cele mai frecvente; OCA3 și OCA4, mult mai rare (curs, p. 162).</text>
</svg>
<figcaption><b>Tirozinaza catalizează primii doi pași ai melanogenezei.</b> Genele OCA3/OCA4 sunt numite după Emery și OMIM; cursul doar le enumeră. Schemă proprie.</figcaption>
</figure>
<p><b>Tablou:</b> iris albastru deschis, <b>fotofobie, nistagmus, ambliopie</b>; tegumente de la crem la translucide; păr galben-deschis, blond, șaten. Pigmentarea de obicei nu se schimbă în timp. Risc crescut de arsuri solare și cancer cutanat. <b>Diagnostic</b> clinic, molecular (mai ales pentru descendenți), prenatal prin secvențiere. Nu există tratament curativ: corectarea anomaliilor vizuale, fotoprotecție, control dermatologic.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce albinismul afectează vederea, nu doar culoarea?</summary><div>Melanina este necesară pentru dezvoltarea normală a retinei și a căilor optice; lipsa ei dă nistagmus, ambliopie, fotofobie.</div></details>
</div>`
},
{
id: "wilson", titlu: "Boala Wilson", pag: "163–165", emery: "cap. 18", acopera: ["c08-r07"],
html: `
<p>Degenerescența hepato-lenticulară: cuprul nu este eliminat și se depune în ficat, ganglionii bazali, cornee, rinichi. Purtători <b>1/100</b>, bolnavi <b>1–4/100.000</b>, ambele sexe egal. Gena <b><i>ATP7B</i></b> (13q14.3) codifică o ATP-ază care transportă cuprul și îl încorporează în ceruloplasmină. În Europa, mutația cea mai frecventă: <b>H1069Q</b>.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Drumul cuprului în hepatocit">
<defs><marker id="c6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="200" y="30" width="360" height="200" rx="20" class="fcard si" stroke-width="1.4"/><text x="380" y="54" text-anchor="middle" class="ti b">hepatocit</text>
<circle cx="130" cy="130" r="22" class="fC"/><text x="130" y="135" text-anchor="middle" fill="#1f2a37" style="font-weight:800">Cu</text><text x="130" y="172" text-anchor="middle" class="tm">din alimente</text>
<path d="M152 130 H230" class="si" stroke-width="2" marker-end="url(#c6)"/>
<rect x="300" y="100" width="100" height="56" rx="12" class="fP"/><text x="350" y="126" text-anchor="middle" fill="#fff" style="font-weight:800">ATP7B</text><text x="350" y="144" text-anchor="middle" fill="#fff" style="font-size:11px">13q14.3</text>
<path d="M400 112 C460 90 520 80 600 70" fill="none" class="sok" stroke-width="2" marker-end="url(#c6)"/><text x="606" y="62" class="tok b">ceruloplasmină</text><text x="606" y="80" class="tok b">→ sânge</text>
<path d="M400 146 C460 170 520 200 600 214" fill="none" class="sok" stroke-width="2" marker-end="url(#c6)"/><text x="606" y="212" class="tok b">bilă</text><text x="606" y="230" class="tok b">→ excreție</text>
<rect x="20" y="246" width="720" height="44" rx="10" class="fws sw" stroke-width="1.2"/>
<text x="380" y="266" text-anchor="middle" class="tw2 b">ATP7B defect: ambele ieșiri blocate</text>
<text x="380" y="283" text-anchor="middle" class="ti">ceruloplasmină ↓ (&lt;20 mg/dL) · Cu se acumulează în ficat, apoi se revarsă în creier, cornee, rinichi · cuprurie ↑</text>
</svg>
<figcaption><b>Cele două ieșiri ale cuprului din ficat</b> depind de ATP7B. Schemă proprie după curs (p. 164).</figcaption>
</figure>
[[img:kf|<b>Inelul Kayser–Fleischer</b>: depozit brun-auriu de cupru la periferia corneei (membrana Descemet). Semn patognomonic, mai sigur la examenul cu lampa cu fantă.]]
<div class="tw"><table>
<tr><th>Sistem</th><th>Manifestări (debut de obicei după 5 ani)</th></tr>
<tr><td><b>Hepatic</b> (debut tipic la copil)</td><td>encefalopatie, hipertensiune portală, varice esofagiene, splenomegalie, ascită, carcinom hepatocelular</td></tr>
<tr><td><b>Neurologic</b> (debut tipic la adult)</td><td>parkinsonian: ataxie, distonie, bradikinezie, tremor; convulsii, migrenă, disfagie</td></tr>
<tr><td><b>Psihic</b></td><td>tulburări cognitive, impulsivitate, apatie, anxietate, psihoze, depresie, fobii</td></tr>
<tr><td><b>Ocular</b></td><td>inelul <b>Kayser–Fleischer</b>; cataractă „în floarea-soarelui”</td></tr>
<tr><td>Renal · cardiac · endocrin</td><td>acidoză tubulară, nefrocalcinoză, aminoacidurie · cardiomiopatie, aritmii · hipoparatiroidism, infertilitate</td></tr>
</table></div>
<p><b>Diagnostic:</b> tablou sugestiv, cuprurie crescută, ceruloplasmină &lt;20 mg/dL, <b>biopsie hepatică</b> (gold standard), analiza mutațiilor. ~50% rămân nediagnosticați sau sunt diagnosticați abia la adult. Netratată, boala duce la deces în jurul vârstei de 20–30 de ani. <b>Tratament:</b> chelatori (<b>penicilamină</b>) ± <b>zinc</b>, dietă săracă în cupru, monitorizare; transplant hepatic în formele grave. Inițiat precoce, previne sau oprește boala.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Tânăr de 19 ani cu tremor, tulburări de comportament și ceruloplasmină scăzută. Ce cauți la examenul ocular?</summary><div>Inelul Kayser–Fleischer, semn patognomonic de boală Wilson.</div></details>
<details class="q"><summary>De ce ceruloplasmina este scăzută în boala Wilson?</summary><div>ATP7B încorporează cuprul în ceruloplasmină; apo-ceruloplasmina fără cupru este instabilă și degradată rapid.</div></details>
</div>`
},
{
id: "galactozemie", titlu: "Galactozemia", pag: "165–168", emery: "cap. 18", acopera: ["c08-r08"],
html: `
<p>Tulburare AR a metabolismului galactozei, cu acumularea de <b>galactozo-1-fosfat</b> toxic. Netratată, mortalitatea la sugari este de <b>75%</b>. Incidență în Europa 1/60.000 (tipul I, 1/48.000).</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Calea Leloir și cele trei tipuri de galactozemie">
<defs><marker id="c7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="40" width="150" height="50" rx="25" class="fcard si" stroke-width="1.2"/><text x="95" y="62" text-anchor="middle" class="ti b">lactoză (lapte)</text><text x="95" y="78" text-anchor="middle" class="tm" style="font-size:11px">= galactoză + glucoză</text>
<path d="M170 65 h30" class="si" stroke-width="1.8" marker-end="url(#c7)"/>
<rect x="206" y="40" width="120" height="50" rx="25" class="fC"/><text x="266" y="70" text-anchor="middle" fill="#1f2a37" style="font-weight:800">galactoză</text>
<path d="M326 65 h50" class="si" stroke-width="1.8" marker-end="url(#c7)"/><text x="351" y="56" text-anchor="middle" class="tw2 b" style="font-size:11px">GALK</text>
<rect x="382" y="40" width="150" height="50" rx="25" class="fA"/><text x="457" y="64" text-anchor="middle" fill="#fff" style="font-weight:800">galactozo-1-P</text><text x="457" y="80" text-anchor="middle" fill="#fff" style="font-size:10px">toxic dacă se acumulează</text>
<path d="M532 65 h50" class="si" stroke-width="1.8" marker-end="url(#c7)"/><text x="557" y="56" text-anchor="middle" class="tw2 b" style="font-size:11px">GALT</text>
<rect x="588" y="40" width="150" height="50" rx="25" class="fcard si" stroke-width="1.2"/><text x="663" y="62" text-anchor="middle" class="ti b">UDP-galactoză</text><text x="663" y="78" text-anchor="middle" class="tm" style="font-size:11px">→ (GALE) UDP-glucoză</text>
<path d="M266 92 V130" class="si" stroke-width="1.6" marker-end="url(#c7)"/><text x="266" y="148" text-anchor="middle" class="ti" style="font-size:12px">galactitol în cristalin</text><text x="266" y="164" text-anchor="middle" class="tw2 b" style="font-size:12px">→ cataractă</text>
<rect x="20" y="186" width="720" height="104" rx="12" class="fas"/>
<text x="40" y="210" class="ti"><tspan class="b">Tip I</tspan> · <tspan class="b">GALT</tspan> (9p13.3) · galactozemia clasică, cea mai frecventă · Q188R (severă, Europa/America de N.), S135L (ușoară)</text>
<text x="40" y="236" class="ti"><tspan class="b">Tip II</tspan> · GALK1 (17q24 în curs) · deficit de galactokinază, &lt;1/100.000 · mai ales cataractă</text>
<text x="40" y="262" class="ti"><tspan class="b">Tip III</tspan> · GALE (1p36) · deficit de epimerază, rar (1/23.000 în Japonia)</text>
<text x="40" y="282" class="tm">Calea Leloir: trei enzime transformă galactoza în glucoză.</text>
</svg>
<figcaption><b>Calea Leloir și unde se blochează în fiecare tip.</b> Schemă proprie după curs (p. 166).</figcaption>
</figure>
[[img:galt|<b>Calea metabolică a galactozei</b>, cu reacția catalizată de GALT.]]
<p><b>Tablou</b> (la câteva zile–săptămâni după primul lapte): refuzul alimentației, vărsături, stagnare ponderală; <b>afectare hepatică</b> (hepatomegalie, insuficiență, icter, hipoglicemie, sângerări); <b>sepsis</b> (mai ales cu <i>E. coli</i>); retard mintal evident după 6–12 luni, adesea ireversibil; tulburări de vorbire; <b>cataractă</b>; pseudotumor cerebri; insuficiență ovariană.</p>
<p><b>Diagnostic:</b> screening neonatal (galactoză totală și/sau activitate GALT din picătura de sânge pe card; galactoză în urină la 24–36 h după lapte; galactozo-1-P din sângele de cordon la copiii cu risc); confirmare genetică. <b>Sfat genetic:</b> heterozigoții au jumătate din activitatea enzimei și sunt asimptomatici; frații sănătoși au 2/3 risc de a fi purtători; frații părinților 50%. <b>Tratament:</b> eliminarea lactozei și galactozei din dietă cât mai rapid (inclusiv urmele de lapte praf). Chiar tratați, unii dezvoltă tulburări de vorbire, dificultăți de învățare, insuficiență ovariană, cataractă.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un sugar de 10 zile are icter, vărsături, hepatomegalie și hemocultură cu E. coli. Ce boală metabolică suspectezi și ce faci imediat?</summary><div>Galactozemie clasică. Se oprește imediat laptele (matern sau formula cu lactoză) și se trece la o formulă fără galactoză, apoi se confirmă diagnosticul.</div></details>
</div>`
},
{
id: "mps1", titlu: "Mucopolizaharidoza tip I (sindromul Hurler)", pag: "168–170", emery: "cap. 18 (boli lizozomale)", acopera: ["c08-r09"],
html: `
<p>Acumularea de <b>glicozaminoglicani (GAG)</b> în lizozomi, prin deficitul enzimei lizozomale <b>α-L-iduronidază</b>. Gena <i>IDUA</i> la 4p16.3; peste 100 de mutații. AR, ambele sexe, incidență ~1/100.000.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Lizozom normal și lizozom încărcat">
<circle cx="190" cy="120" r="80" class="fcard si" stroke-width="1.5"/><text x="190" y="40" text-anchor="middle" class="tok b">lizozom normal</text>
${Array.from({ length: 6 }, (_, i) => `<path d="M${150 + (i % 3) * 30} ${100 + Math.floor(i / 3) * 40} l10 -8 l10 8" fill="none" class="sG" stroke-width="2"/>`).join("")}
<text x="190" y="226" text-anchor="middle" class="tm">GAG degradați de α-L-iduronidază</text>
<circle cx="560" cy="120" r="100" class="fws sw" stroke-width="1.5"/><text x="560" y="14" text-anchor="middle" class="tw2 b">lizozom în MPS I</text>
${Array.from({ length: 40 }, (_, i) => { const a = i * 2.39, r = 12 + 11 * Math.sqrt(i); return `<path d="M${(560 + r * Math.cos(a) - 8).toFixed(0)} ${(120 + r * Math.sin(a)).toFixed(0)} q8 -10 16 0" fill="none" class="sA" stroke-width="2.2"/>`; }).join("")}
<text x="560" y="246" text-anchor="middle" class="tm">GAG (dermatan și heparan sulfat) nedegradați</text>
</svg>
<figcaption><b>Lizozomii se umflă</b> cu material nedegradat, mai ales în macrofage: afectare viscerală, osoasă și neurologică, progresivă. Schemă proprie.</figcaption>
</figure>
<p><b>Tablou</b> (de la 6–8 luni, aproape complet la 12 ani; severitate foarte variabilă): primele luni hernii inghinale și ombilicale, rinite și otite recidivante; <b>facies grosolan</b> („gargoilism”), macroglosie, buze mari, macrognație; anomalii dentare; hipostatură cu trunchi și gât scurt; hiperpilozitate; <b>disostoză multiplă</b> (cifoscolioză, genu valgum, displazie de șold, contracturi, tunel carpian); infecții respiratorii, apnee de somn; <b>hepatosplenomegalie</b>, cardiomegalie, cardiomiopatie; <b>opacități corneene</b>, glaucom; hipoacuzie; retard mintal și psihomotor.</p>
[[img:hurler|<b>Sindromul Hurler</b>: rigiditate articulară și deformări osoase.]]
<p><b>Diagnostic:</b> clinic, paraclinic (ecografie, ecocardiografie, radiografie, examen oftalmologic, neurologic), <b>enzimatic</b> (activitatea α-L-iduronidazei) și molecular. <b>Tratament specific:</b> <b>substituție enzimatică</b> cu α-L-iduronidază recombinantă (laronidază, Aldurazyme), perfuzie i.v. săptămânală; plus tratamentul complicațiilor. <b>Profilaxie</b>: diagnostic prenatal enzimatic (vilozități coriale, lichid amniotic) sau molecular.</p>
<div class="capcana"><b>Medicament greșit în listă</b><p>Cursul dă ca exemple „Elaprase, Aldurazyme”. <b>Elaprase</b> (idursulfază) este pentru MPS II (sindromul Hunter), nu pentru MPS I. Pentru MPS I se folosește <b>Aldurazyme</b> (laronidază). Vezi și Tabelul XXXII din capitolul 13.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce substituția enzimatică ameliorează organele, dar nu și afectarea neurologică din MPS I?</summary><div>Enzima recombinantă administrată i.v. nu traversează bariera hematoencefalică.</div></details>
</div>`
}
]
});
})();
