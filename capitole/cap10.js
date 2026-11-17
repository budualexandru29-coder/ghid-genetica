/* Capitolul 10 — Boli monogenice cu transmitere recesivă legată de X (curs p. 179–197) */
(function () {
const P = GHID.ped;
const arboreXR = () => {
  let s = "";
  s += P.ind(300, 40, "m", "n", "I-1") + P.ind(400, 40, "f", "x", "I-2") + P.cuplu(300, 400, 40);
  s += P.copii(350, 40, [160, 260, 440, 540], 120);
  s += P.ind(160, 120, "m", "a", "II-1") + P.ind(260, 120, "f", "x", "II-2") + P.ind(440, 120, "m", "n", "II-3") + P.ind(540, 120, "f", "n", "II-4");
  s += P.ind(330, 120, "m", "n") + P.cuplu(260, 330, 120);
  s += P.copii(295, 120, [220, 280, 340, 400], 210);
  s += P.ind(220, 210, "m", "a", "III-1") + P.ind(280, 210, "f", "n", "III-2") + P.ind(340, 210, "m", "n", "III-3") + P.ind(400, 210, "f", "x", "III-4");
  return s;
};

GHID.capitol({
id: "c10",
intro: `<p class="lead">Boala se manifestă la bărbații hemizigoți (un singur X, mutant); femeile heterozigote sunt de obicei <b>purtătoare sănătoase</b>. Boala „trece” prin femei și apare la băieți, adesea în generații alternante.</p>
<figure>
<svg viewBox="0 0 740 300" role="img" aria-label="Arbore genealogic recesiv legat de X">
${arboreXR()}
<rect x="20" y="250" width="700" height="44" rx="10" class="fas"/>
<text x="370" y="270" text-anchor="middle" class="ti">Afectați aproape numai bărbați · transmisă prin femei purtătoare (punct central) · niciodată tată → fiu</text>
<text x="370" y="287" text-anchor="middle" class="ti">Mamă purtătoare: <tspan class="b">50%</tspan> din fii afectați, <tspan class="b">50%</tspan> din fiice purtătoare · tată afectat: toate fiicele purtătoare</text>
</svg>
<figcaption><b>Recunoașterea transmiterii recesive legate de X.</b> II-1 și III-1 sunt unchi și nepot pe linie maternă: un tipar clasic. Femeile pot fi afectate excepțional (inactivare X deviată, sindrom Turner, tată afectat × mamă purtătoare).</figcaption>
</figure>
[[gal:xlr|<b>Mamă purtătoare × tată sănătos.</b>;;xlr_tata|<b>Tată afectat × mamă sănătoasă:</b> toate fiicele purtătoare, toți fiii sănătoși.]]
<figure><img src="fig/loc_c10_xlr.svg" alt="Genele bolilor recesive legate de X"><figcaption><b>Unde sunt genele din acest capitol</b> (UCSC GRCh38). <i>DMD</i> ocupă singură ~2,1 Mb la Xp21.2 (79 de exoni): cea mai mare genă umană. <i>F8</i> (26 de exoni) și genele opsinelor roșu/verde sunt toate la Xq28, la capătul brațului lung.</figcaption></figure>`,
sectiuni: [
{
id: "dmd", titlu: "Distrofinopatii: distrofia musculară Duchenne (DMD)", pag: "179–184", emery: "cap. 19, p. 296–299", acopera: ["c10-r01"],
html: `
<p>Distrofinopatiile = boli X-recesive prin deficit de <b>distrofină</b>: <b>Duchenne</b> (forma cea mai severă), <b>Becker</b> și alte forme (cardiomiopatia dilatativă legată de X, miopatia izolată de cvadriceps, crampe cu mioglobinurie, CK crescută asimptomatică, femei purtătoare simptomatice). DMD este cea mai frecventă distrofie musculară a copilului: <b>1/3.300</b> nou-născuți băieți.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Distrofina leagă citoscheletul de matricea extracelulară">
<rect x="20" y="20" width="720" height="70" class="fline" opacity=".55"/><text x="40" y="44" class="ti b">matrice extracelulară</text>
<path d="M120 60 C200 40 280 80 360 60 S520 40 640 62" fill="none" class="sC" stroke-width="8" stroke-linecap="round"/><text x="560" y="40" class="ti" style="font-size:12px">laminină-211</text>
<rect x="20" y="100" width="720" height="36" class="fP" opacity=".25"/><text x="730" y="124" text-anchor="end" class="ta b" style="font-size:12px">sarcolemă</text>
<rect x="320" y="70" width="40" height="40" rx="10" class="fG"/><text x="340" y="95" text-anchor="middle" fill="#fff" style="font-size:10px;font-weight:800">α-DG</text>
<rect x="326" y="110" width="28" height="44" rx="6" class="fT"/><text x="340" y="137" text-anchor="middle" fill="#fff" style="font-size:9px;font-weight:800">β-DG</text>
<rect x="390" y="102" width="70" height="32" rx="6" class="fZ"/><text x="425" y="122" text-anchor="middle" fill="#fff" style="font-size:10px;font-weight:800">sarcoglicani</text>
<path d="M340 156 C330 190 300 200 240 214 C200 224 160 230 120 240" fill="none" class="sA" stroke-width="10" stroke-linecap="round"/>
<text x="250" y="190" class="tw2 b">DISTROFINĂ</text><text x="250" y="206" class="tm" style="font-size:11px">427 kDa, „tija” de legătură</text>
<path d="M40 262 H700" class="sm" stroke-width="12" stroke-linecap="round" opacity=".7"/><text x="40" y="290" class="ti b">actină (citoschelet) → sarcomer</text>
<path d="M120 240 V256" class="sA" stroke-width="6"/>
<rect x="470" y="160" width="270" height="130" rx="12" class="fws sw" stroke-width="1.2"/>
<text x="605" y="184" text-anchor="middle" class="tw2 b">Fără distrofină (DMD)</text>
<text x="605" y="206" text-anchor="middle" class="ti" style="font-size:12px">sarcolema se rupe la fiecare</text>
<text x="605" y="222" text-anchor="middle" class="ti" style="font-size:12px">contracție → intră Ca²⁺, iese CK</text>
<text x="605" y="244" text-anchor="middle" class="ti" style="font-size:12px">necroză → regenerare epuizată</text>
<text x="605" y="266" text-anchor="middle" class="ti" style="font-size:12px">→ înlocuire cu grăsime și fibroză</text>
<text x="605" y="282" text-anchor="middle" class="tm" style="font-size:11px">(pseudohipertrofia gambelor)</text>
</svg>
<figcaption><b>Rolul distrofinei.</b> Distrofina ancorează actina subsarcolemală de complexul distroglican, care leagă laminina din matrice; fără ea, membrana fibrei musculare nu rezistă la contracție. Complexul este descris în Emery (cap. 19); schemă proprie, proporțiile nu sunt la scară.</figcaption>
</figure>
<h3>Genetică</h3>
<div class="tw"><table>
<tr><th>Fapt</th><th>Din curs</th></tr>
<tr><td>Gena</td><td><i>DMD</i>, Xp21.2: cea mai mare genă a genomului uman, <b>79 de exoni</b></td></tr>
<tr><td>Deleții</td><td><b>65–70%</b> în DMD; 55–85% în DMB</td></tr>
<tr><td>Duplicații</td><td>5–10% în DMD</td></tr>
<tr><td>Mutații punctiforme</td><td>25–35%, pe toată lungimea genei</td></tr>
<tr><td>Metode</td><td>Southern blot (istoric), PCR multiplex, <b>MLPA</b>, secvențiere</td></tr>
<tr><td>Purtătoare</td><td>CK serică crescută în peste 75% din cazuri; confirmare moleculară</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Regula cadrului de lectură în DMD și Becker">
${(() => {
  const ex = [[44, 0], [45, 1], [46, 1], [47, 0], [48, 2], [49, 1], [50, 0], [51, 2], [52, 1]];
  const rand = (y, lips, tit, sub, cls) => {
    let x = 30, s = `<text x="30" y="${y - 12}" class="${cls} b">${tit}</text><text x="740" y="${y - 12}" text-anchor="end" class="tm" style="font-size:11.5px">${sub}</text>`;
    ex.forEach(([n]) => {
      const del = lips.includes(n);
      s += `<rect x="${x}" y="${y}" width="66" height="34" rx="6" class="${del ? "fbg" : "fG"}" ${del ? 'stroke-dasharray="4 3" stroke-width="1.4"' : ""} ${del ? 'style="stroke:var(--muted)"' : ""}/><text x="${x + 33}" y="${y + 22}" text-anchor="middle" ${del ? 'class="tm"' : 'fill="#fff" style="font-weight:800"'}>${n}</text>`;
      if (!del) x += 78; else x += 78;
    });
    return s;
  };
  let s = rand(40, [], "Gena normală (exonii 44–52, regiunea „fierbinte” a delețiilor)", "", "ti");
  s += rand(130, [45, 46, 47], "Deleția exonilor 45–47: cadrul se păstrează", "→ distrofină mai scurtă, parțial funcțională = BECKER", "tok");
  s += rand(220, [50], "Deleția exonului 50: cadrul se decalează", "→ codon stop prematur, fără distrofină = DUCHENNE", "tw2");
  s += `<text x="30" y="290" class="ti">Contează dacă numărul de nucleotide pierdute este <tspan class="b">multiplu de 3</tspan> (în cadru) sau nu (decalaj), nu cât de mare este deleția.</text>`;
  s += `<text x="30" y="312" class="tm" style="font-size:11.5px">Regula „cadrului de lectură” (Monaco, 1988) explică ~90% din cazuri; vezi și mutațiile frameshift din capitolul 5.</text>`;
  return s;
})()}
</svg>
<figcaption><b>De ce o deleție mare poate da Becker, iar una mică Duchenne.</b> Exemplele (del 45–47 în cadru, del 50 în afara cadrului) sunt clasice în literatură; Emery prezintă aceeași regulă. Schemă proprie.</figcaption>
</figure>
<h3>Tablou clinic</h3>
<p>Debut insidios la <b>3–5 ani</b>, cu întârziere ușoară motorie și de limbaj: mers legănat, căderi, dificultăți la alergat, la urcatul scărilor și la ridicarea de pe podea, uneori mers pe vârfuri.</p>
[[gal:gowers|<b>Semnul Gowers</b>: copilul se ridică „cățărându-se” cu mâinile pe propriile coapse, din cauza slăbiciunii musculaturii proximale a membrelor inferioare și a centurii pelvine.;;dmd_desen|<b>Băiat cu DMD</b> (desen istoric): postură lordotică, abdomen proeminent, pseudohipertrofia gambelor.]]
<div class="pasi">
<div><b>Deficit muscular</b>proximal, simetric; semnul Gowers; hiperlordoză cu abdomen proeminent; deficit al flexorilor gâtului</div>
<div><b>ROT</b>prezente la debut, apoi diminuă până la dispariție</div>
<div><b>Atrofii</b>întâi proximale, apoi generalizate (după pierderea mersului)</div>
<div><b>Pseudohipertrofia gambelor</b>fermă la palpare, de la debut: țesut adipos și conjunctiv în locul fibrelor necrozate</div>
<div><b>Contracturi</b>picior var equin, retracția tendonului ahilian; <b>scolioză</b> la 80–90% după pierderea mersului</div>
<div><b>Alte organe</b>cord (ECG modificat la 90%, apoi cardiomiopatie); SNC (limbaj, memorie, comportament); respirator; digestiv (dilatație gastrică acută); hemeralopie; osteoporoză</div>
</div>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Evoluția DMD în timp">
<line x1="40" y1="110" x2="730" y2="110" class="sm" stroke-width="2"/>
${[0, 5, 10, 15, 20, 25, 30].map((a) => `<line x1="${40 + a * 23}" y1="104" x2="${40 + a * 23}" y2="116" class="sm"/><text x="${40 + a * 23}" y="134" text-anchor="middle" class="tm" style="font-size:11px">${a} ani</text>`).join("")}
<rect x="${40 + 3 * 23}" y="70" width="${2 * 23}" height="28" rx="6" class="fC"/><text x="${40 + 4 * 23}" y="62" text-anchor="middle" class="ti b" style="font-size:12px">debut 3–5</text>
<rect x="${40 + 3 * 23}" y="150" width="${3 * 23}" height="22" rx="6" class="fok" opacity=".7"/><text x="${40 + 4.5 * 23}" y="190" text-anchor="middle" class="tok" style="font-size:11px">ameliorare tranzitorie 3–6</text>
<rect x="${40 + 10 * 23}" y="70" width="${3 * 23}" height="28" rx="6" class="fP"/><text x="${40 + 11.5 * 23}" y="62" text-anchor="middle" class="ti b" style="font-size:12px">fără mers 10–12 (13 cu steroizi)</text>
<rect x="${40 + 10 * 23}" y="150" width="${15 * 23}" height="22" rx="6" class="fT" opacity=".6"/><text x="${40 + 17 * 23}" y="190" text-anchor="middle" class="ti" style="font-size:11px">după 10 ani: complicații respiratorii, tulburări de somn</text>
<rect x="${40 + 15 * 23}" y="70" width="${10 * 23}" height="28" rx="6" class="fA"/><text x="${40 + 20 * 23}" y="89" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:12px">deces obișnuit 15–25 ani</text>
</svg>
<figcaption><b>Cronologia DMD după curs</b> (p. 183–184): decesul prin insuficiență respiratorie (± infecții) la pacienții subponderali sau prin cardiomiopatie dilatativă la cei obezi; rar peste 30 de ani.</figcaption>
</figure>
<h3>Paraclinic și diagnostic diferențial</h3>
<p><b>Enzime musculare</b> crescute de peste 100 de ori: <b>CK (CPK) &gt;5.000 UI</b> la debut, LDH, transaminaze. <b>EMG</b>: traseu miogen. <b>Biopsia musculară și imunohistochimia nu se mai recomandă</b> (invazive). <b>Testele genetice</b> (MLPA, secvențiere) confirmă diagnosticul. Monitorizare periodică: ECG, ecocardiografie, spirometrie, gaze sanguine, evaluare psihologică și funcțională.</p>
<div class="tw"><table>
<tr><th>Diagnostic diferențial</th><th>Ce îl deosebește</th></tr>
<tr><td>Amiotrofia spinală (Kugelberg–Welander)</td><td>enzime normale sau ușor crescute; EMG <b>neurogen</b> cu fibrilații</td></tr>
<tr><td>Polineuropatii</td><td>deficit <b>distal</b>, ROT abolite, tulburări de sensibilitate, enzime normale, EMG neurogen</td></tr>
<tr><td>Miastenia gravis, sindroame miastenice congenitale</td><td>deficit variabil diurn, accentuat de efort; ROT normale; decrement &gt;10% la EMG</td></tr>
<tr><td>Alte miopatii și distrofii</td><td>miopatii și distrofii congenitale, dermatomiozită, Emery–Dreifuss, facioscapulohumerală, Becker, a centurilor</td></tr>
</table></div>
<h3>Tratament și sfat genetic</h3>
<p>Fără tratament curativ. <b>Corticoterapie</b> (prednison, în diferite scheme) pentru a menține funcția motorie; roborante, vitamine B, D3, E; kinetoterapie; evitarea efortului mare; ortopedie (cifoscolioză), tratament respirator și cardiac, dietă, suport psihologic. În cercetare la data cursului: transfer de mioblaști, terapie genică.</p>
<div class="emery"><b>Curs vs. Emery</b><p>Emery adaugă că <b>o treime</b> din cazurile de DMD sunt mutații noi, iar două treimi au mama purtătoare (echilibrul Haldane pentru o boală X-recesivă letală genetic). Descrie și terapiile apărute ulterior: <b>saltul de exon</b> cu oligonucleotide antisens (ex. saltul exonului 51 refăcând cadrul la pacienții cu del 50) și terapia genică cu micro-distrofină. Saltul de exon transformă, practic, un Duchenne într-un Becker.</p></div>
<p><b>Sfat genetic:</b> mama purtătoare → 50% din băieți bolnavi, 50% din fete purtătoare, la fiecare sarcină; se testează mama, surorile ei și fiicele acestora. Bărbații cu DMD nu se reproduc (letalitate genetică). <b>Prenatal:</b> vilozități coriale (săpt. 9–10) sau amniocenteză (săpt. 16–18).</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce CK este atât de mare încă de la debut?</summary><div>Fără distrofină, sarcolema se rupe la fiecare contracție, iar enzimele musculare trec în sânge.</div></details>
<details class="q"><summary>Un băiat are deleția exonilor 45–47 și altul deleția exonului 50. Care are fenotipul mai sever?</summary><div>Cel cu deleția exonului 50: decalează cadrul de lectură (Duchenne). Deleția 45–47 îl păstrează (Becker).</div></details>
<details class="q"><summary>De ce pseudohipertrofia gambelor nu înseamnă mușchi puternic?</summary><div>Volumul crește prin țesut adipos și conjunctiv care înlocuiește fibrele musculare necrozate.</div></details>
</div>`
},
{
id: "dmb", titlu: "Distrofia musculară Becker (DMB)", pag: "184–185", emery: "cap. 19, p. 299", acopera: ["c10-r02"],
html: `
<p>Distrofie <b>benignă</b> pseudohipertrofică, aceeași genă (<i>DMD</i>, Xp21.2), evoluție mai blândă. Mutații: mai ales deleții (frecvent ale exonilor de spre capătul genei) și CNV, <b>în cadrul de lectură</b>. Bărbații afectați au fertilitate de ~70% și transmit mutația <b>tuturor fiicelor</b>. Doar 10% mutații <i>de novo</i>.</p>
<div class="capcana"><b>Incidență contradictorie în curs</b><p>Cursul dă „3–6/10.000” și, în aceeași frază, „de 3 ori mai rară decât Duchenne” (1/3.300 ≈ 3/10.000). Cele două cifre nu se potrivesc: o boală de 3 ori mai rară ar avea ~1/10.000 sau mai puțin. Reține raportul (DMB mai rară decât DMD) și ordinul de mărime al Duchenne.</p></div>
<div class="tw"><table>
<tr><th></th><th>Duchenne</th><th>Becker</th></tr>
<tr><td>Mutație</td><td>în afara cadrului (fără distrofină)</td><td>în cadru (distrofină redusă sau anormală, <b>&gt;20%</b>)</td></tr>
<tr><td>Debut</td><td>3–5 ani</td><td>5–15 ani, uneori decadele 3–4</td></tr>
<tr><td>Simptom de debut</td><td>mers legănat, căderi, Gowers</td><td><b>dureri ale gambelor</b>, care persistă</td></tr>
<tr><td>Deficit</td><td>sever, proximal</td><td>mai puțin sever, proximal</td></tr>
<tr><td>ROT</td><td>dispar</td><td>păstrate</td></tr>
<tr><td>Mers</td><td>pierdut la 10–12 ani</td><td>păstrat <b>peste 20 de ani</b></td></tr>
<tr><td>Cord · digestiv</td><td>afectate</td><td>atingere cardiacă rară · fără afectare digestivă</td></tr>
<tr><td>Intelect</td><td>poate fi afectat</td><td>normal</td></tr>
<tr><td>Reproducere</td><td>nu</td><td>~70%; toate fiicele purtătoare</td></tr>
</table></div>
<p><b>Paraclinic:</b> CK crescută (scade cu vârsta și cu imobilizarea), EMG miogen; biopsia (neobligatorie) arată degenerare miogenă mai ușoară, cu zone de regenerare; imunohistochimic distrofină prezentă &gt;20%, cu anomalii calitative; teste moleculare și diagnostic prenatal ca în DMD. <b>Tratament:</b> corticoterapie cu efect bun, adjuvante ca în DMD.</p>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Spectrul distrofinopatiilor după cantitatea de distrofină">
<defs><linearGradient id="gd" x1="0" x2="1"><stop offset="0" stop-color="#d1495b"/><stop offset=".5" stop-color="#edae49"/><stop offset="1" stop-color="#2a9d8f"/></linearGradient></defs>
<rect x="40" y="50" width="680" height="30" rx="15" fill="url(#gd)"/>
<text x="40" y="38" class="ti b">distrofină absentă</text><text x="720" y="38" text-anchor="end" class="ti b">distrofină normală</text>
<text x="110" y="106" text-anchor="middle" class="tw2 b">Duchenne</text><text x="110" y="124" text-anchor="middle" class="tm" style="font-size:11px">&lt;3–5%</text>
<text x="380" y="106" text-anchor="middle" class="ti b">Becker</text><text x="380" y="124" text-anchor="middle" class="tm" style="font-size:11px">&gt;20% în curs</text>
<text x="640" y="106" text-anchor="middle" class="tok b">purtătoare, CK izolat</text><text x="640" y="124" text-anchor="middle" class="tm" style="font-size:11px">forme minime</text>
<text x="380" y="156" text-anchor="middle" class="tm">Severitatea și vârsta debutului se corelează cu cantitatea de distrofină musculară (curs, p. 184).</text>
</svg>
<figcaption><b>Un singur spectru.</b> Pragul pentru Duchenne este orientativ (literatura clinică); cursul dă doar pragul de 20% pentru Becker.</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un bărbat cu Becker are o fiică. Ce risc are nepotul (fiul ei)?</summary><div>Fiica este obligatoriu purtătoare; fiecare fiu al ei are 50% risc de Becker.</div></details>
</div>`
},
{
id: "hemofilie", titlu: "Hemofilia A", pag: "185–188", emery: "cap. 6; cap. 19 / hemostază", acopera: ["c10-r03"],
html: `
<p>Cea mai frecventă coagulopatie ereditară, X-recesivă. Hemofilia <b>A</b> = deficit de factor <b>VIII</b>; <b>B</b> (boala Christmas) = factor <b>IX</b>; cursul numește și „C” = factor XI. Incidența hemofiliei A: <b>1/5.000–1/10.000</b> băieți; hemofilia B: 1/100.000 în curs.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Locul factorilor VIII și IX în cascada coagulării">
<defs><marker id="h2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${(() => {
  const nod = (x, y, t, cls, w = 90) => `<rect x="${x - w / 2}" y="${y - 18}" width="${w}" height="36" rx="18" class="${cls}"/><text x="${x}" y="${y + 5}" text-anchor="middle" ${cls === "fcard si" ? 'class="ti b"' : 'fill="#fff" style="font-weight:800"'}>${t}</text>`;
  let s = `<text x="150" y="26" text-anchor="middle" class="tm b">calea intrinsecă (contact)</text><text x="600" y="26" text-anchor="middle" class="tm b">calea extrinsecă (factor tisular)</text>`;
  s += nod(150, 56, "XII → XIIa", "fcard si", 120) + `<path d="M150 76 V96" class="si" stroke-width="1.6" marker-end="url(#h2)"/>`;
  s += nod(150, 118, "XI → XIa", "fcard si", 120) + `<path d="M150 138 V158" class="si" stroke-width="1.6" marker-end="url(#h2)"/>`;
  s += nod(150, 180, "IX → IXa", "fC", 120) + `<text x="150" y="214" text-anchor="middle" class="tw2 b" style="font-size:11px">hemofilia B</text>`;
  s += nod(300, 180, "VIIIa", "fA", 80) + `<text x="300" y="214" text-anchor="middle" class="tw2 b" style="font-size:11px">hemofilia A</text><text x="225" y="172" text-anchor="middle" class="ti b">+</text>`;
  s += `<rect x="86" y="156" width="260" height="48" rx="24" fill="none" class="sA" stroke-width="1.6" stroke-dasharray="5 4"/><text x="216" y="148" text-anchor="middle" class="tm" style="font-size:11px">„tenaza” intrinsecă</text>`;
  s += nod(600, 56, "TF + VIIa", "fcard si", 120) + `<path d="M600 76 C600 160 480 220 440 244" fill="none" class="si" stroke-width="1.6" marker-end="url(#h2)"/>`;
  s += `<path d="M300 200 C320 230 360 244 380 248" fill="none" class="si" stroke-width="2" marker-end="url(#h2)"/>`;
  s += nod(410, 256, "X → Xa", "fP", 110) + `<path d="M466 256 H520" class="si" stroke-width="1.6" marker-end="url(#h2)"/>`;
  s += nod(590, 256, "trombină", "fT", 120) + `<path d="M590 276 V292" class="si" stroke-width="1.6" marker-end="url(#h2)"/>`;
  s += `<text x="590" y="314" text-anchor="middle" class="ti b">fibrinogen → fibrină (cheag)</text>`;
  s += `<text x="40" y="300" class="tm" style="font-size:11px">VIII este cofactorul lui IXa: lipsa oricăruia blochează aceeași etapă,</text><text x="40" y="316" class="tm" style="font-size:11px">de aceea hemofiliile A și B nu se pot deosebi clinic.</text>`;
  return s;
})()}
</svg>
<figcaption><b>De ce A și B arată la fel.</b> Factorul VIIIa și factorul IXa formează împreună complexul care activează factorul X. Schemă simplificată după modelul clasic în cascadă; nu este redată la scară cinetică.</figcaption>
</figure>
[[img:coagulare|<b>Cascada coagulării</b> completă, cu legăturile dintre calea intrinsecă și cea extrinsecă.]]
<h3>Genetică</h3>
<p>Gena <b><i>F8</i></b> (cursul: „F8C”), <b>Xq28</b>, 26 de exoni. Mutații: deleții, inversii, inserții, punctiforme. Cursul descrie o inversie asociată cu pierderea porțiunii carboxiterminale a factorului VIII, responsabilă de <b>~25% din toate cazurile</b> și <b>40–50% din formele severe</b>.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Inversia intronului 22 din gena F8">
${(() => {
  let s = `<text x="20" y="22" class="ti b">Inversia intronului 22: recombinare între copii identice ale aceleiași secvențe (int22h)</text>`;
  const gena = (y, inv) => {
    let t = `<line x1="40" y1="${y}" x2="720" y2="${y}" class="sm" stroke-width="3"/>`;
    if (!inv) {
      t += `<rect x="80" y="${y - 14}" width="260" height="28" rx="6" class="fG"/><text x="210" y="${y + 5}" text-anchor="middle" fill="#fff" style="font-weight:800">F8 exonii 26 … 23</text>`;
      t += `<rect x="350" y="${y - 14}" width="190" height="28" rx="6" class="fG"/><text x="445" y="${y + 5}" text-anchor="middle" fill="#fff" style="font-weight:800">exonii 22 … 1 →</text>`;
      t += `<circle cx="345" cy="${y}" r="8" class="fA"/><circle cx="640" cy="${y}" r="8" class="fA"/><text x="345" y="${y - 22}" text-anchor="middle" class="tw2 b" style="font-size:11px">int22h-1</text><text x="640" y="${y - 22}" text-anchor="middle" class="tw2 b" style="font-size:11px">int22h copie</text>`;
      t += `<path d="M345 ${y + 14} C420 ${y + 70} 570 ${y + 70} 640 ${y + 14}" fill="none" class="sA" stroke-width="1.6" stroke-dasharray="5 4"/><text x="492" y="${y + 66}" text-anchor="middle" class="tw2" style="font-size:11px">împerechere în buclă, în meioza masculină</text>`;
    } else {
      t += `<rect x="80" y="${y - 14}" width="260" height="28" rx="6" class="fG"/><text x="210" y="${y + 5}" text-anchor="middle" fill="#fff" style="font-weight:800">exonii 26 … 23</text>`;
      t += `<rect x="440" y="${y - 14}" width="190" height="28" rx="6" class="fline"/><text x="535" y="${y + 5}" text-anchor="middle" class="ti b">← exonii 1 … 22</text>`;
      t += `<circle cx="345" cy="${y}" r="8" class="fA"/><circle cx="640" cy="${y}" r="8" class="fA"/>`;
      t += `<text x="380" y="${y + 40}" text-anchor="middle" class="tw2 b">gena ruptă în două, cu orientări opuse: nu se mai produce factor VIII</text>`;
    }
    return t;
  };
  s += `<text x="20" y="62" class="tm">înainte</text>` + gena(84, false);
  s += `<text x="20" y="190" class="tm">după</text>` + gena(206, true);
  return s;
})()}
</svg>
<figcaption><b>Mecanismul inversiei.</b> O secvență din intronul 22 al <i>F8</i> (int22h-1) are copii identice, în orientare opusă, la câteva sute de kb spre telomer; recombinarea între ele inversează segmentul și separă exonii 1–22 de 23–26. Apare aproape numai în meioza masculină, deci mamele purtătoare au adesea moștenit-o de la tatăl lor. Detaliile mecanismului sunt din Emery și literatură; cursul doar menționează inversia. Schemă neproporțională.</figcaption>
</figure>
<h3>Tablou clinic</h3>
<p>Hemoragii după traumatisme minore, chirurgie sau, în formele severe, spontan; durează ore–zile: echimoze, hematoame subcutanate și musculare, <b>hemartroze</b> care duc la artropatie.</p>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Formele de hemofilie după factorul VIII rezidual">
${[["SEVERĂ", "< 1%", "fA", "neonatal: hemoragii cerebrale, cefalhematoame extinse; sângerări spontane"], ["MODERATĂ", "1–5%", "fC", "de la începutul mersului: hematoame la traumatismele obișnuite"], ["UȘOARĂ", "> 5%", "fG", "descoperită la o operație sau un traumatism moderat"]].map(([t, v, c, d], i) => `<rect x="20" y="${16 + i * 68}" width="150" height="56" rx="12" class="${c}"/><text x="95" y="${40 + i * 68}" text-anchor="middle" fill="#fff" style="font-weight:800">${t}</text><text x="95" y="${60 + i * 68}" text-anchor="middle" fill="#fff" style="font-weight:800">FVIII ${v}</text><text x="190" y="${49 + i * 68}" class="ti">${d}</text>`).join("")}
</svg>
<figcaption><b>Severitatea depinde de activitatea reziduală a factorului VIII</b> (curs, p. 186). La secționarea cordonului ombilical nu sângerează (tromboplastina tisulară este crescută).</figcaption>
</figure>
<p>Manifestări frecvente: <b>hemartroza</b> (genunchi, cot, gleznă, șold), <b>hematuria</b> (± colică), hematoame și echimoze, epistaxis, sângerări după intervenții stomatologice, plăgi bucale și linguale.</p>
<div class="pasi">
<div><b>Diagnostic</b>dozarea activității factorului VIII</div>
<div><b>Diferențial</b>hemofilia B: aceeași clinică, factor IX scăzut; se tratează cu alt preparat, de aceea diagnosticul de laborator este esențial</div>
<div><b>Tratament curativ</b>factor VIII recombinant i.v.; speranță de viață peste 65 de ani</div>
<div><b>Adjuvant</b>antifibrinolitice (acid ε-aminocaproic, tranexamic) pentru mucoase; presiune locală, gheață, bureți de trombină</div>
<div><b>Contraindicate</b>injecțiile intramusculare și aspirina (antiagregant)</div>
</div>
<p><b>Sfat genetic:</b> statusul de purtătoare se stabilește prin mutația cunoscută la o rudă sau testând mutația frecventă (inversia). Mama purtătoare: 50% din băieți bolnavi, 50% din fete purtătoare. <b>~1/3</b> din cazuri sunt <i>de novo</i> (băiat bolnav fără istoric familial). O femeie cu hemofilie: heterozigotă cu inactivare deviată a X-ului normal, sau sindrom Turner (45,X).</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce un pacient cu hemofilie nu primește injecții intramusculare?</summary><div>Riscă hematoame musculare mari, greu de oprit.</div></details>
<details class="q"><summary>Cum se poate naște o fată cu hemofilie A?</summary><div>Tată hemofilic × mamă purtătoare; heterozigotă cu inactivare X deviată; sau 45,X (Turner) cu X-ul mutant.</div></details>
</div>`
},
{
id: "daltonism", titlu: "Daltonismul", pag: "188–189", emery: "cap. 6", acopera: ["c10-r04"],
html: `
<p>Incapacitatea ereditară de a deosebi anumite culori, mai ales <b>roșu de verde</b> (cecitate cromatică, discromatopsie). Bolnavii confundă roșul cu verdele și cu alte culori de aceeași strălucire (albastru, gri).</p>
<div class="tw"><table>
<tr><th></th><th>Absența pigmentului</th><th>Pigment anormal (percepție parțială)</th></tr>
<tr><td>Roșu (conuri L)</td><td><b>protanopie</b></td><td><b>protanomalie</b> (PA)</td></tr>
<tr><td>Verde (conuri M)</td><td><b>deuteranopie</b></td><td><b>deuteranomalie</b> (DA)</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Sensibilitatea spectrală a celor trei tipuri de conuri">
${(() => {
  const X = (nm) => 60 + (nm - 400) * 2.6, Y = (v) => 240 - v * 190;
  const curba = (pk, w, cls) => { let d = ""; for (let nm = 400; nm <= 650; nm += 5) { const v = Math.exp(-0.5 * ((nm - pk) / w) ** 2); d += `${nm === 400 ? "M" : "L"}${X(nm).toFixed(1)} ${Y(v).toFixed(1)} `; } return `<path d="${d}" fill="none" class="${cls}" stroke-width="3"/>`; };
  let s = `<defs><linearGradient id="spec" x1="0" x2="1"><stop offset="0" stop-color="#6a3d9a"/><stop offset=".22" stop-color="#1f78b4"/><stop offset=".45" stop-color="#33a02c"/><stop offset=".65" stop-color="#e6c229"/><stop offset=".8" stop-color="#ff7f00"/><stop offset="1" stop-color="#e31a1c"/></linearGradient></defs>`;
  s += `<rect x="${X(400)}" y="250" width="${X(650) - X(400)}" height="14" rx="3" fill="url(#spec)"/>`;
  [400, 450, 500, 550, 600, 650].forEach((nm) => (s += `<text x="${X(nm)}" y="282" text-anchor="middle" class="tm" style="font-size:11px">${nm} nm</text>`));
  s += curba(420, 28, "sP") + curba(534, 40, "sG") + curba(564, 44, "sA");
  s += `<text x="${X(420)}" y="${Y(1) - 8}" text-anchor="middle" class="ta b">S · ~420</text><text x="${X(520)}" y="${Y(1) - 8}" text-anchor="middle" class="tok b">M · ~534</text><text x="${X(590)}" y="${Y(1) - 8}" text-anchor="middle" class="tw2 b">L · ~564</text>`;
  s += `<rect x="560" y="80" width="190" height="88" rx="10" class="fas"/><text x="655" y="104" text-anchor="middle" class="ti b" style="font-size:12px">curbele M și L</text><text x="655" y="122" text-anchor="middle" class="ti" style="font-size:12px">aproape se suprapun:</text><text x="655" y="140" text-anchor="middle" class="ti" style="font-size:12px">genele lor sunt 98%</text><text x="655" y="158" text-anchor="middle" class="ti" style="font-size:12px">identice, în tandem</text>`;
  return s;
})()}
</svg>
<figcaption><b>Vederea tricromatică.</b> Trei tipuri de conuri, cu pigmenți (opsine) pentru albastru (S), verde (M) și roșu (L). Maximele (~420, ~534, ~564 nm) sunt valorile măsurate de Bowmaker și Dartnall (1980) în conurile umane; formele curbelor sunt aproximări gaussiene, desenate doar orientativ.</figcaption>
</figure>
<h3>Genetică</h3>
<p>Transmitere X-recesivă, mult mai frecventă la bărbați. Genele pentru roșu (<i>OPN1LW</i>, „RCP” în curs) și verde (<i>OPN1MW</i>, „GCP”) sunt la <b>Xq28</b>, aproape de gena factorului VIII, <b>una lângă alta, în tandem</b>, cu secvențe foarte asemănătoare. Aceasta favorizează <b>împerecheri eronate în meioză</b> (crossing-over inegal).</p>
<div class="capcana"><b>Gena pentru albastru nu este pe X</b><p>Cursul plasează și gena pigmentului albastru („BCP”) pe Xq28. Gena <i>OPN1SW</i> este pe <b>cromozomul 7</b> (7q32.1). De aceea defectele de albastru (tritanopia) sunt rare și <b>autozomal dominante</b>, cu frecvență egală la cele două sexe.</p></div>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Crossing-over inegal între genele opsinelor">
${(() => {
  const L = (x, y, t = "L") => `<rect x="${x}" y="${y}" width="70" height="30" rx="6" class="fA"/><text x="${x + 35}" y="${y + 20}" text-anchor="middle" fill="#fff" style="font-weight:800">${t}</text>`;
  const M = (x, y, t = "M") => `<rect x="${x}" y="${y}" width="70" height="30" rx="6" class="fok"/><text x="${x + 35}" y="${y + 20}" text-anchor="middle" fill="#fff" style="font-weight:800">${t}</text>`;
  const H = (x, y) => `<rect x="${x}" y="${y}" width="35" height="30" rx="6" class="fA"/><rect x="${x + 35}" y="${y}" width="35" height="30" rx="6" class="fok"/><text x="${x + 35}" y="${y + 20}" text-anchor="middle" fill="#fff" style="font-weight:800">L/M</text>`;
  let s = `<text x="20" y="22" class="ti b">Două cromozomi X din meioza unei femei, aliniați greșit (decalați cu o genă)</text>`;
  s += `<line x1="60" y1="60" x2="460" y2="60" class="sm" stroke-width="2"/>` + L(100, 45) + M(180, 45) + M(260, 45);
  s += `<line x1="60" y1="110" x2="460" y2="110" class="sm" stroke-width="2"/>` + L(180, 95) + M(260, 95) + M(340, 95);
  s += `<path d="M225 76 L225 94" class="sA" stroke-width="2"/><text x="236" y="88" class="tw2 b" style="font-size:12px">✕ crossing-over</text>`;
  s += `<text x="490" y="64" class="ti">1 L + 2 M = normal</text><text x="490" y="114" class="ti">aliniat decalat</text>`;
  s += `<text x="20" y="168" class="ti b">Rezultate posibile</text>`;
  s += `<line x1="60" y1="200" x2="460" y2="200" class="sm" stroke-width="2"/>` + L(100, 185);
  s += `<text x="490" y="196" class="tw2 b">fără gena M → deuteranopie</text><text x="490" y="214" class="tm" style="font-size:11px">(gena pierdută)</text>`;
  s += `<line x1="60" y1="250" x2="460" y2="250" class="sm" stroke-width="2"/>` + L(100, 235) + M(180, 235) + M(260, 235) + M(340, 235);
  s += `<text x="490" y="254" class="tok b">un M în plus → vedere normală</text>`;
  s += `<line x1="60" y1="300" x2="460" y2="300" class="sm" stroke-width="2"/>` + H(100, 285) + M(180, 285);
  s += `<text x="490" y="296" class="tw2 b">genă hibridă L/M</text><text x="490" y="314" class="tm" style="font-size:11px">→ pigment intermediar: protanomalie</text>`;
  return s;
})()}
</svg>
<figcaption><b>Cum apar formele de daltonism.</b> Absența genei pentru roșu sau verde dă protanopie sau deuteranopie; genele hibride dau protanomalie sau deuteranomalie (curs, p. 189). Schemă proprie; numărul de copii M variază normal între persoane.</figcaption>
</figure>
[[img:ishihara|<b>Planșă pseudoizocromatică de tip Ishihara</b>: cifra se vede după nuanță, nu după luminozitate; un daltonist roșu–verde nu o deosebește de fond.]]
<p><b>Diagnostic:</b> planșe colorate (pseudoizocromatice) sau anomaloscop. <b>Monocromatopsia</b> = percepția unei singure culori primare (lipsesc două); <b>discromatopsia</b> = lipsește una.</p>
<div class="emery"><b>Curs vs. alte surse</b><p>Emery dă pentru defectele roșu–verde o frecvență de ~8% la bărbații de origine europeană. Cursul afirmă că lentilele de corecție „corijează în totalitate” defectul în 80% din cazuri; filtrele colorate cresc contrastul dintre unele nuanțe, dar nu refac pigmentul lipsă și nu restabilesc vederea tricromatică.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce daltonismul roșu–verde este atât de frecvent, comparativ cu alte boli X-recesive?</summary><div>Genele L și M sunt aproape identice și așezate în tandem; crossing-over-ul inegal le pierde sau le hibridizează des. În plus, defectul nu reduce supraviețuirea sau fertilitatea.</div></details>
<details class="q"><summary>Tatăl e daltonist, mama are vedere normală și nu e purtătoare. Ce risc au copiii?</summary><div>Fiii: niciun risc (primesc Y). Fiicele: toate purtătoare, cu vedere normală.</div></details>
</div>`
},
{
id: "dea", titlu: "Displazia ectodermală anhidrotică (hipohidrotică)", pag: "189–193", emery: "cap. 6", acopera: ["c10-r05"],
html: `
<p>Displaziile ectodermale afectează țesuturile din ectoderm: <b>păr, dinți, unghii, glande sudoripare</b> (cel puțin 2 din 4). Forma anhidrotică (sindromul <b>Christ–Siemens–Touraine</b>) reprezintă <b>80%</b> din cazuri și le afectează pe toate patru. Rară: 1–7/100.000.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Calea ectodisplazinei și cele trei moduri de transmitere">
<defs><marker id="d1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="96" width="720" height="26" class="fP" opacity=".2"/><text x="730" y="114" text-anchor="end" class="ta" style="font-size:11px">membrană</text>
<circle cx="120" cy="60" r="26" class="fA"/><text x="120" y="64" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:12px">EDA</text>
<text x="120" y="22" text-anchor="middle" class="ti b" style="font-size:12px">ectodisplazină (ligand)</text>
<path d="M146 60 H224" class="si" stroke-width="1.8" marker-end="url(#d1)"/>
<rect x="230" y="40" width="50" height="110" rx="10" class="fG"/><text x="255" y="100" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:11px">EDAR</text><text x="255" y="22" text-anchor="middle" class="ti b" style="font-size:12px">receptor</text>
<path d="M280 140 H340" class="si" stroke-width="1.8" marker-end="url(#d1)"/>
<rect x="346" y="124" width="110" height="34" rx="8" class="fT"/><text x="401" y="146" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:11px">EDARADD</text>
<path d="M456 141 H520" class="si" stroke-width="1.8" marker-end="url(#d1)"/>
<rect x="526" y="124" width="100" height="34" rx="17" class="fok"/><text x="576" y="146" text-anchor="middle" fill="#fff" style="font-weight:800;font-size:11px">NEMO / NF-κB</text>
<path d="M626 141 H668" class="si" stroke-width="1.8" marker-end="url(#d1)"/><text x="672" y="138" class="ti b" style="font-size:12px">placode:</text><text x="672" y="154" class="ti" style="font-size:12px">păr, dinți,</text><text x="672" y="170" class="ti" style="font-size:12px">glande</text>
<rect x="20" y="196" width="720" height="84" rx="12" class="fas"/>
<text x="40" y="220" class="ti"><tspan class="b">EDA</tspan> (ED1), Xq13.1 · <tspan class="b">X-recesiv</tspan> · &gt;60% din cazuri</text>
<text x="40" y="242" class="ti"><tspan class="b">EDAR</tspan>, 2q13 · <tspan class="b">autozomal recesiv</tspan> · 15–20%</text>
<text x="40" y="264" class="ti"><tspan class="b">EDARADD</tspan>, 1q43 · <tspan class="b">autozomal dominant</tspan> · 1–2%</text>
</svg>
<figcaption><b>O cale, trei gene, trei moduri de transmitere</b>, cu același fenotip. Ultima verigă, NF-κB activat prin NEMO, este aceeași ca în incontinentia pigmenti (capitolul 9), care are și ea anomalii dentare și ale anexelor. Benzile cromozomiale sunt din UCSC GRCh38; legătura cu NF-κB este din literatură. Schemă proprie.</figcaption>
</figure>
[[img:dea|<b>Displazie ectodermală hipohidrotică</b>: păr rar și fin, sprâncene absente, trăsături faciale caracteristice.]]
<div class="tw"><table>
<tr><th>Țesut</th><th>Manifestări</th></tr>
<tr><td><b>Față</b></td><td>bose frontale, nas în șa cu rădăcina turtită și aripi hipoplazice, buze groase, buza inferioară răsfrântă, micrognatism, hipoplazie maxilară, urechi mari</td></tr>
<tr><td><b>Piele</b></td><td>subțire, uscată, fină, descuamată (mai ales neonatal), hipopigmentată, glabră; hiperpigmentare periorbitară</td></tr>
<tr><td><b>Păr, unghii</b></td><td>pilozitate redusă sau absentă; păr deschis, uscat, friabil; sprâncene și gene rare sau absente; unghii subțiri, concave</td></tr>
<tr><td><b>Glande</b></td><td>anhidroză/hipohidroză: lipsa transpirației, lacrimilor, sebumului; <b>hipertermie</b>, intoleranță la căldură</td></tr>
<tr><td><b>Dinți</b></td><td><b>hipodonție sau anodonție</b>, microdonție, erupție tardivă, <b>incisivi conici</b>, creastă alveolară incompletă</td></tr>
<tr><td>Altele</td><td>rinită atrofică, disfonie, stomatite, eczeme palmo-plantare, glande mamare hipoplazice; ocazional diabet, HTA. <b>Intelect normal</b></td></tr>
</table></div>
<p><b>Diagnostic:</b> ușor la bărbați, după fenotip. Femeile purtătoare pot fi sănătoase sau cu semne minime (~1/3 afectate ușor): anomalii dentare și test al transpirației pozitiv; confirmare moleculară. Formele AR: ambele sexe egal, purtători fără semne, adesea părinți consangvini; riscul se calculează diferit.</p>
<p><b>Sfat genetic</b> (forma X): mama purtătoare → 50% din băieți afectați, 50% din fete purtătoare. <b>Prenatal</b> rar (boală compatibilă cu viața, intelect normal): molecular din vilozități (9–10 săpt.) sau amniocenteză (16–18 săpt.); istoric, fetoscopie cu biopsie cutanată la 20 de săptămâni, riscantă. <b>Prognostic</b> bun dacă diagnosticul e precoce; nerecunoscute, crizele de hipertermie pot da leziuni neurologice și deces neonatal. Urmărire: prevenirea hipertermiei, hidratarea pielii, <b>îngrijire stomatologică</b> și protezare continuă.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Care este cel mai mare pericol vital pentru un sugar cu displazie ectodermală anhidrotică nediagnosticată?</summary><div>Hipertermia: nu poate transpira, deci nu își poate reduce temperatura.</div></details>
<details class="q"><summary>De ce același fenotip poate fi X-recesiv, autozomal recesiv sau autozomal dominant?</summary><div>Trei gene diferite (EDA, EDAR, EDARADD) codifică veriguri ale aceleiași căi de semnalizare.</div></details>
</div>`
},
{
id: "xfragil", titlu: "Sindromul X fragil", pag: "193–197", emery: "cap. 2 (repetiții), cap. 6, cap. 19", acopera: ["c10-r06"],
html: `
<p>Principala cauză de <b>retard mintal ereditar la băieți</b> și principala boală genetică asociată cu autismul. Triada: <b>retard mintal, macroorhidism, dismorfism facial</b>. Incidență 1/4.000–5.000 la bărbați, 1/6.000 la femei. Premutația: 1/130–250 femei, 1/250–800 bărbați. Descris de Martin și Bell.</p>
<p>Cauza: <b>expansiunea repetiției CGG</b> din regiunea 5′ netradusă a genei <b><i>FMR1</i></b> (Xq27.3). Repetiția mare se <b>metilează</b>, gena este reprimată și lipsește proteina <b>FMRP</b>, abundentă în neuroni, cu rol în dezvoltarea axonilor, formarea sinapselor și circuitele de învățare și memorie. Metilarea produce o constricție a cromatidei: <b>situsul fragil FRAXA</b>, vizibil în culturi fără folați sau cu inhibitori ai sintezei de ADN. Mecanismul de expansiune este descris în capitolul 5 (mutații dinamice).</p>
[[img:fragilx|<b>Cromozomul X normal și X-ul fragil</b>: constricția de la capătul brațului lung (Xq27.3).]]
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Categoriile de alele FMR1">
${(() => {
  const X = (n) => 40 + (Math.log10(n) - Math.log10(5)) / (Math.log10(1200) - Math.log10(5)) * 680;
  let s = `<text x="20" y="22" class="ti b">Numărul de repetiții CGG în FMR1 (scară logaritmică)</text>`;
  s += `<rect x="${X(6)}" y="50" width="${X(45) - X(6)}" height="34" rx="6" class="fok"/><text x="${(X(6) + X(45)) / 2}" y="72" text-anchor="middle" fill="#fff" style="font-weight:800">normal</text>`;
  s += `<rect x="${X(45)}" y="50" width="${X(55) - X(45)}" height="34" class="fC"/>`;
  s += `<rect x="${X(55)}" y="50" width="${X(200) - X(55)}" height="34" class="fP"/><text x="${(X(55) + X(200)) / 2}" y="72" text-anchor="middle" fill="#fff" style="font-weight:800">premutație</text>`;
  s += `<rect x="${X(200)}" y="50" width="${X(1000) - X(200)}" height="34" rx="6" class="fA"/><text x="${(X(200) + X(1000)) / 2}" y="72" text-anchor="middle" fill="#fff" style="font-weight:800">completă</text>`;
  [6, 10, 45, 55, 100, 200, 1000].forEach((n) => (s += `<line x1="${X(n)}" y1="86" x2="${X(n)}" y2="96" class="sm"/><text x="${X(n)}" y="110" text-anchor="middle" class="tm" style="font-size:11px">${n}</text>`));
  s += `<text x="${X(50)}" y="44" text-anchor="middle" class="tm" style="font-size:10px">intermediar</text>`;
  s += `<rect x="20" y="130" width="720" height="110" rx="12" class="fas"/>`;
  s += `<text x="40" y="154" class="ti"><tspan class="b">Curs:</tspan> normal 6–65 · premutație 50–200 · mutație completă &gt;200 (până la 1.000)</text>`;
  s += `<text x="40" y="176" class="ti"><tspan class="b">Emery:</tspan> normal &lt;45 · intermediar („zonă gri”) 45–54 · premutație 55–200 · completă &gt;200</text>`;
  s += `<text x="40" y="198" class="ti">Cursul: alelele materne cu peste 90–100 de repetiții trec la mutație completă în generația următoare.</text>`;
  s += `<text x="40" y="222" class="tm">Intervalele din curs se suprapun (50–65); bara folosește pragurile din Emery.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Patru categorii de alele.</b> Expansiunea de la premutație la mutație completă se produce <b>numai prin mamă</b> (în ovogeneză). Schemă proprie.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 740 310" role="img" aria-label="Paradoxul Sherman: transmiterea X fragil prin generații">
${(() => {
  let s = "";
  s += P.ind(300, 40, "m", "x", "I-1") + P.ind(400, 40, "f", "n", "I-2") + P.cuplu(300, 400, 40);
  s += `<text x="300" y="86" text-anchor="middle" class="ta b" style="font-size:11px">premutație</text><text x="300" y="100" text-anchor="middle" class="tm" style="font-size:10px">bărbat transmițător</text>`;
  s += P.copii(350, 40, [250, 450], 140) + P.ind(250, 140, "m", "n", "II-1") + P.ind(450, 140, "f", "x", "II-2") + P.ind(540, 140, "m", "n") + P.cuplu(450, 540, 140);
  s += `<text x="450" y="186" text-anchor="middle" class="ta b" style="font-size:11px">premutație</text><text x="450" y="200" text-anchor="middle" class="tm" style="font-size:10px">toate fiicele lui I-1</text>`;
  s += P.copii(495, 140, [400, 470, 540, 610], 240);
  s += P.ind(400, 240, "m", "a", "III-1") + P.ind(470, 240, "f", "p", "III-2") + P.ind(540, 240, "m", "n", "III-3") + P.ind(610, 240, "m", "a", "III-4");
  s += `<text x="505" y="292" text-anchor="middle" class="tw2 b" style="font-size:12px">expansiune în ovogeneza lui II-2 → mutație completă</text>`;
  s += `<rect x="20" y="20" width="190" height="200" rx="10" class="fas"/>`;
  s += `<text x="115" y="44" text-anchor="middle" class="ti b" style="font-size:12px">De reținut din curs</text>`;
  ["Bărbatul cu premutație", "o dă tuturor fiicelor,", "nemodificată; fiii", "nu o primesc.", "Bărbatul afectat dă", "fiicelor tot o premutație", "(spermatozoizii nu au", "mutația completă).", "Mama unui copil afectat:", "premutație sau completă."].forEach((t, i) => (s += `<text x="115" y="${66 + i * 15}" text-anchor="middle" class="ti" style="font-size:11.5px">${t}</text>`));
  return s;
})()}
</svg>
<figcaption><b>Anticipația în X fragil.</b> Riscul crește din generație în generație: nepoții unui bărbat transmițător sănătos sunt afectați mai des decât frații lui (paradoxul Sherman, descris în Emery). Punct central = premutație; jumătate plin = femeie cu mutație completă (poate fi afectată ușor).</figcaption>
</figure>
<h3>Corelația genotip–fenotip</h3>
<div class="tw"><table>
<tr><th>Genotip</th><th>Bărbați</th><th>Femei</th></tr>
<tr><td><b>Mutație completă</b></td><td>retard mintal <b>100%</b>; triada; autism; epilepsie &gt;30%</td><td>~<b>50–60%</b> cu deficit cognitiv (borderline–ușor), 50% intelect normal; comportament ușor afectat; fără dismorfism tipic</td></tr>
<tr><td><b>Premutație</b></td><td>de obicei fără fenotip; tulburări obsesiv-compulsive, de învățare; <b>FXTAS</b> la ~1/3 după 50 de ani: tremor intențional, ataxie, parkinsonism, leziuni de substanță albă</td><td>intelect normal; risc psihiatric; <b>menopauză precoce</b> (4% la 30 de ani, 25% la 40), FSH crescut, răspuns slab la stimularea ovariană</td></tr>
</table></div>
<p>Cu cât <b>metilarea</b> este mai completă, cu atât fenotipul este mai sever: mutație completă nemetilată → formă ușoară; metilare parțială → intermediară; hipermetilare → severă (Kaufmann și Reiss, 1999).</p>
<figure>
<svg viewBox="0 0 760 220" role="img" aria-label="Fenotipul bărbatului cu sindrom X fragil">
${[["Față", "alungită, frunte înaltă, urechi mari, proeminente, prognatism, filtru lung"], ["Testicule", "macroorhidism, evident după pubertate"], ["Neuropsihic", "limbaj expresiv întârziat, ADHD, retard ușor–sever, epilepsie"], ["Comportament", "autism, stereotipii, fluturarea mâinilor, evitarea privirii, ecolalie"], ["Țesut conjunctiv", "hiperlaxitate, piele catifelată, picior plat, PVM, dilatarea aortei"]].map(([t, d], i) => `<rect x="20" y="${12 + i * 41}" width="160" height="34" rx="17" class="${["fP", "fC", "fA", "fG", "fT"][i]}"/><text x="100" y="${34 + i * 41}" text-anchor="middle" fill="#fff" style="font-weight:800">${t}</text><text x="196" y="${34 + i * 41}" class="ti" style="font-size:12.5px">${d}</text>`).join("")}
</svg>
<figcaption><b>Mutația completă la bărbat.</b> În copilărie tabloul este nespecific (macrocefalie, întârzierea limbajului, hiperactivitate); triada devine clară după pubertate. După curs (p. 195–196).</figcaption>
</figure>
<p><b>Testare moleculară recomandată:</b> băieți cu întârzierea limbajului expresiv, retard de cauză neprecizată, elemente autiste, istoric familial de retard; fete cu retard și istoric familial. Se determină numărul de repetiții și statusul metilării. Tablou de X fragil cu număr normal de repetiții → secvențierea <i>FMR1</i> sau array-CGH.</p>
<p><b>Sfat genetic:</b> persoanele fără premutație nu transmit boala. Bărbatul cu premutație → fiice cu premutație, sănătoase → nepoți cu risc de X fragil. Femeia cu mutație completă: copiii care primesc X-ul mutant au mutație completă (toți băieții afectați; 50–60% din fete afectate). <b>Tratament:</b> intervenție precoce (logopedie, terapie ocupațională, ABA), psihostimulante, anticonvulsivante.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce un bărbat afectat de X fragil nu are niciodată nepoți afectați prin fiii săi?</summary><div>Fiii primesc cromozomul Y. X-ul lui merge doar la fiice, ca premutație; expansiunea se poate produce apoi în ovogeneza fiicelor.</div></details>
<details class="q"><summary>O femeie de 35 de ani are menopauză precoce, iar fratele ei are tremor și ataxie la 60 de ani. Ce genă testezi?</summary><div>FMR1: premutația dă insuficiență ovariană precoce la femei și FXTAS la bărbații vârstnici.</div></details>
</div>`
}
]
});
})();
