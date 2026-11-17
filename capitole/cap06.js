/* Capitolul 6 — Farmacogenetică. Farmacogenomică (curs p. 125–132) */
(function () {
// curbă de concentrație plasmatică pentru doze repetate (model cu o singură eliminare de ordinul 1)
const curba = (k, x0, y0, w, h, cls) => {
  const pts = []; let c = 0;
  for (let t = 0; t <= 96; t += 0.5) {
    if (t % 12 === 0) c += 1;
    c *= Math.exp(-k * 0.5);
    pts.push([x0 + (t / 96) * w, y0 + h - Math.min(c / 4.2, 1) * h]);
  }
  return `<path d="M${pts.map((p) => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L")}" fill="none" class="${cls}" stroke-width="2.6"/>`;
};

GHID.capitol({
id: "c06",
intro: `<p class="lead">Același medicament, în aceeași doză, poate fi ineficient la un pacient și toxic la altul. O parte importantă din diferență este genetică: variante în genele enzimelor care metabolizează medicamentul, ale transportorilor sau ale țintei. Capitolul arată cum se citesc aceste variante și ce consecințe clinice au.</p>`,
sectiuni: [
{
id: "definitii", titlu: "Farmacogenetică și farmacogenomică", pag: "125–126", emery: "cap. 15, p. 210–213", acopera: ["c06-r01"],
html: `
<div class="tw"><table>
<tr><th>Farmacogenetica</th><th>Farmacogenomica</th></tr>
<tr><td>studiază variațiile individuale în secvența ADN care influențează <b>farmacocinetica</b> (absorbție, distribuție, metabolizare, excreție) și <b>farmacodinamica</b> (acțiunea medicamentului)</td><td>studiază relația dintre <b>profilul genetic al pacientului</b> și răspunsul la un medicament, la nivelul întregului genom; și modul în care medicamentele modifică expresia genelor</td></tr>
</table></div>
<p><b>Testarea farmacogenomică</b> studiază variațiile la nivelul întregului genom sau SNP-urile genelor candidate, haplotipurile și expresia genică, căutând markeri predictivi pentru răspunsul individual. Răspunsul la medicamente depinde de factori de <b>mediu</b> (dietă, fumat, interacțiuni), <b>genetici</b> și de vârstă, sex, severitatea bolii, patologia asociată.</p>
<figure>
<svg viewBox="0 0 760 260" role="img" aria-label="Unde intervin genele în drumul unui medicament">
<defs><marker id="f1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${[["Absorbție", "transportori intestinali", "fG"], ["Distribuție", "proteine plasmatice", "fG"], ["Metabolizare", "CYP450, TPMT, DPD, NAT", "fA"], ["Excreție", "transportori renali", "fG"], ["Țintă", "receptor, enzimă (VKORC1)", "fP"]].map(([t, d, c], i) => {
  const x = 20 + i * 148;
  return `<rect x="${x}" y="40" width="130" height="64" rx="12" class="${c}"/><text x="${x + 65}" y="68" text-anchor="middle" fill="#fff" style="font-weight:800">${t}</text><text x="${x + 65}" y="88" text-anchor="middle" fill="#fff" style="font-size:11px">${d}</text>${i < 4 ? `<path d="M${x + 132} 72 h14" class="si" stroke-width="1.6" marker-end="url(#f1)"/>` : ""}`;
}).join("")}
<path d="M20 120 H606" class="sG" stroke-width="3"/><text x="313" y="140" text-anchor="middle" class="tin b">FARMACOCINETICĂ: ce face organismul cu medicamentul</text>
<path d="M612 120 H748" class="sP" stroke-width="3"/><text x="680" y="140" text-anchor="middle" class="ta b">FARMACODINAMICĂ</text><text x="680" y="156" text-anchor="middle" class="tm">ce face medicamentul</text>
<rect x="20" y="180" width="720" height="68" rx="10" class="fas"/>
<text x="380" y="204" text-anchor="middle" class="ti">O enzimă în <tspan class="b">cantitate insuficientă</tspan>: efect la doze mici, toxicitate la doze normale.</text>
<text x="380" y="224" text-anchor="middle" class="ti">O enzimă <tspan class="b">atipică</tspan>: produși intermediari toxici. O enzimă <tspan class="b">hiperdegradativă</tspan>: lipsa efectului.</text>
<text x="380" y="242" text-anchor="middle" class="ti">Un <tspan class="b">receptor</tspan> mai puțin sensibil: sunt necesare doze mai mari.</text>
</svg>
<figcaption><b>Unde poate interveni o variantă genetică</b> pe drumul unui medicament. Schemă proprie după curs (p. 126).</figcaption>
</figure>
<p>Enzimele codificate de genele <b>CYP450</b> (citocromul P450) intervin în metabolizarea a <b>75–90%</b> din medicamentele uzuale; pentru ele sunt descrise numeroase variante alelice.</p>
[[img:cyp2d6|<b>Structura CYP2D6</b> (PDB 2F9Q). În centru, gruparea hem, unde are loc oxidarea medicamentului. Variantele alelice care schimbă aminoacizi din jurul acestui situs sau stabilitatea proteinei modifică viteza metabolizării.]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Prin ce diferă farmacogenetica de farmacogenomică?</summary><div>Farmacogenetica privește variante individuale (de obicei în gene candidate) care afectează farmacocinetica sau farmacodinamica. Farmacogenomica privește relația dintre întregul profil genetic și răspunsul la medicament, inclusiv efectul medicamentelor asupra expresiei genelor.</div></details>
</div>`
},
{
id: "metabolizatori", titlu: "Fenotipurile de metabolizator și markerii predictivi", pag: "126–130", emery: "cap. 15, p. 211–214", acopera: ["c06-r02"],
html: `
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Concentrația plasmatică la diferite fenotipuri de metabolizator">
<line x1="70" y1="30" x2="70" y2="250" class="si" stroke-width="1.3"/><line x1="70" y1="250" x2="700" y2="250" class="si" stroke-width="1.3"/>
<rect x="70" y="64" width="630" height="56" class="fws" opacity=".7"/><text x="694" y="82" text-anchor="end" class="tw2 b">zonă toxică</text>
<rect x="70" y="150" width="630" height="60" class="foks" opacity=".7"/><text x="694" y="170" text-anchor="end" class="tok b">fereastra terapeutică</text>
${curba(0.02, 70, 30, 630, 220, "sA")}${curba(0.04, 70, 30, 630, 220, "sG")}${curba(0.07, 70, 30, 630, 220, "sP")}${curba(0.3, 70, 30, 630, 220, "sC")}
<text x="34" y="140" text-anchor="middle" class="tm" transform="rotate(-90 34 140)">concentrație plasmatică</text>
<text x="385" y="274" text-anchor="middle" class="tm">timp · aceeași doză, administrată la intervale egale</text>
${[["sA", "fA", "lent (slab)"], ["sG", "fG", "intermediar"], ["sP", "fP", "normal (rapid)"], ["sC", "fC", "ultrarapid"]].map(([s, f, t], i) => `<rect x="${90 + i * 160}" y="294" width="22" height="10" class="${f}"/><text x="${118 + i * 160}" y="304" class="ti">${t}</text>`).join("")}
</svg>
<figcaption><b>Patru fenotipuri, aceeași doză.</b> Metabolizatorul lent acumulează medicamentul până în zona toxică; ultrarapidul nu atinge fereastra terapeutică. Dacă medicamentul este un <b>promedicament</b> activat de enzimă (codeina → morfină, tamoxifen → endoxifen), consecințele se inversează: lentul nu are efect, ultrarapidul are efect exagerat. Curbe calculate cu un model simplu de eliminare de ordinul 1, cu constante alese ilustrativ.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Tabelul XXI: genă + medicament</th><th>Indicație</th><th>Efectul variantelor</th></tr>
<tr><td><b>CYP2C9</b> + anticoagulante orale (warfarină)</td><td>prevenția și tratamentul bolilor trombotice</td><td>alelele variante <b>scad</b> necesarul de anticoagulant (sensibilitate la warfarină)</td></tr>
<tr><td><b>VKORC1</b> + anticoagulante orale</td><td>idem</td><td>alelele variante <b>cresc</b> necesarul (rezistență la warfarină)</td></tr>
<tr><td><b>CYP2C19</b> + inhibitori de pompă de protoni (omeprazol, lansoprazol, pantoprazol)</td><td>reducerea acidității gastrice</td><td>metabolizatorii intenși au răspuns variabil</td></tr>
<tr><td><b>CYP2D6</b> + codeină</td><td>durere moderată</td><td>metabolizatorii <b>lenți nu răspund</b>; ultrarapizii au răspuns <b>exagerat</b></td></tr>
<tr><td><b>CYP2D6</b> + tamoxifen</td><td>cancer mamar</td><td>metabolizatoarele lente produc mai puțin <b>endoxifen</b> (metabolitul activ): risc crescut de recidivă</td></tr>
<tr><td><b>TPMT</b> (alelele *2, *3A, *3B, *3C) + 6-mercaptopurină, azatioprină</td><td>leucemii, boli imune</td><td>intoleranță severă la imunosupresie și la terapia antileucemică; interacțiuni cu inhibitori ai TPMT (olsalazină)</td></tr>
<tr><td><b>DPD</b> (dihidropirimidin-dehidrogenaza) + 5-fluorouracil</td><td>cancere digestive, mamare, cap–gât</td><td>mutația <b>IVS14+1 G&gt;A</b> predispune la intoxicație severă cu 5-FU</td></tr>
</table></div>
<p style="font-size:14px;color:var(--muted)">Cursul scrie „TMPT” și „CYP2CD6”; numele corecte sunt TPMT și CYP2D6.</p>
<h3>Warfarina: două gene, două mecanisme</h3>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="CYP2C9 și VKORC1 în răspunsul la warfarină">
<defs><marker id="f2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="290" y="20" width="180" height="46" rx="23" class="fA"/><text x="380" y="49" text-anchor="middle" fill="#fff" style="font-weight:800">WARFARINĂ</text>
<path d="M330 66 L170 118" class="si" stroke-width="1.8" marker-end="url(#f2)"/><path d="M430 66 L590 118" class="si" stroke-width="1.8" marker-end="url(#f2)"/>
<rect x="40" y="120" width="260" height="76" rx="12" class="fis sin" stroke-width="1.3"/><text x="170" y="146" text-anchor="middle" class="tin b">CYP2C9 o elimină</text><text x="170" y="166" text-anchor="middle" class="tm">*2 (c.430C&gt;T), *3 (c.1075A&gt;C)</text><text x="170" y="184" text-anchor="middle" class="tm">= metabolizare mai lentă</text>
<rect x="460" y="120" width="260" height="76" rx="12" class="fas" stroke-width="1.3"/><text x="590" y="146" text-anchor="middle" class="ta b">VKORC1 = ținta ei</text><text x="590" y="166" text-anchor="middle" class="tm">−1639 G&gt;A, 1173 C&gt;T</text><text x="590" y="184" text-anchor="middle" class="tm">= mai puțin ARNm, mai puțină țintă</text>
<text x="170" y="222" text-anchor="middle" class="ti b">farmacocinetic</text><text x="170" y="242" text-anchor="middle" class="tm">„metabolizator slab”</text>
<text x="590" y="222" text-anchor="middle" class="ti b">farmacodinamic</text><text x="590" y="242" text-anchor="middle" class="tm">„nivel țintă scăzut”</text>
<rect x="140" y="258" width="480" height="32" rx="8" class="fws"/><text x="380" y="279" text-anchor="middle" class="tw2 b">Ambele variante cer o DOZĂ MAI MICĂ; altfel, risc de hemoragie</text>
</svg>
<figcaption><b>Cele două gene explică împreună aproximativ 50% din variabilitatea răspunsului</b> la anticoagulantele orale (curs, p. 128). Atenție la o aparentă contradicție din Tabelul XXI: el leagă VKORC1 de <i>rezistență</i> (alele care cresc doza), pe când textul de la p. 128 descrie variantele frecvente −1639 G&gt;A și 1173 C&gt;T, cu expresie scăzută, care cresc <i>sensibilitatea</i>. Ambele există: variantele rare din regiunea codantă dau rezistență, cele frecvente din promotor dau sensibilitate.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Genotip CYP2C9</th><th>Fenotip</th><th>Frecvență (curs)</th><th>Consecință</th></tr>
<tr><td>*1/*1 (wild-type)</td><td>metabolizator <b>rapid</b> (normal)</td><td>majoritatea</td><td>eliminare rapidă, doză standard</td></tr>
<tr><td>*1/*2 sau *1/*3</td><td>metabolizator <b>intermediar</b></td><td>25–30%</td><td>doză redusă</td></tr>
<tr><td>*2/*2, *3/*3 sau *2/*3 (heterozigot compus)</td><td>metabolizator <b>lent</b></td><td>3–5%</td><td>doză cu <b>60–75% mai mică</b>; risc de acumulare</td></tr>
</table></div>
<p>Aproximativ <b>35–40%</b> din europeni au o alelă variantă VKORC1. Testarea CYP2C9 și VKORC1 este recomandată <b>înainte</b> de inițierea anticoagulantelor orale. Interacțiunile cu inhibitori enzimatici (de ex. omeprazolul) cresc riscul de supradozare.</p>
<h3>Alte exemple din curs</h3>
<div class="pasi">
<div><b>Clopidogrel + CYP2C19*2</b>antiagregantul este un promedicament; purtătorii (hetero- sau homozigoți) îl activează slab: rezistență, tromboze</div>
<div><b>CYP2D6</b>metabolizează cel puțin 20–25% din medicamente (β-blocante, antidepresive, antiaritmice, antipsihotice, citostatice); cursul dă 68 de variante alelice</div>
<div><b>Durerea</b>peste 200 de gene candidate; în durerea neuropată: IL6, TNFα, COMT, IL10</div>
</div>
[[img:metabolizator|<b>De la genotip la raportul clinic.</b> Exemplu de raport farmacogenetic: două alele CYP2D6 cu activitate redusă dau un fenotip de metabolizator intermediar și o recomandare de ajustare a dozei.]]
<div class="emery"><b>Curs vs. Emery și surse actuale</b><p>Emery plasează <i>CYP2D6</i> pe cromozomul 22 și spune că enzima metabolizează peste 20% din medicamentele prescrise (metoprolol, carvedilol, fluoxetină, imipramină, tioridazină, haloperidol, codeină, tamoxifen); pentru fenotipul de metabolizator lent dă „cel puțin 18 variante”. Cursul dă 20–25% și 68 de variante alelice. Baza actuală PharmVar listează peste 100 de alele principale, inclusiv deleția întregii gene (*5) și duplicațiile care produc metabolizatorii ultrarapizi.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce un metabolizator lent CYP2D6 nu răspunde la codeină, dar acumulează alte medicamente?</summary><div>Codeina este un promedicament: CYP2D6 o transformă în morfină, forma activă. Pentru medicamentele active ca atare, pe care CYP2D6 doar le elimină, metabolizarea lentă duce la acumulare și toxicitate.</div></details>
<details class="q"><summary>Un pacient CYP2C9*2/*3 are nevoie de mai multă sau mai puțină warfarină?</summary><div>Mai puțină: este heterozigot compus, deci metabolizator lent; doza necesară este cu 60–75% mai mică.</div></details>
<details class="q"><summary>De ce se testează DPD înainte de 5-fluorouracil?</summary><div>Purtătorii mutației IVS14+1 G&gt;A (variantă de matisare) au activitate DPD scăzută și nu pot elimina 5-FU; dozele obișnuite produc intoxicație severă.</div></details>
</div>`
},
{
id: "boli", titlu: "Boli genetice declanșate sau agravate de medicamente", pag: "130–132", emery: "cap. 15, p. 214–216", acopera: ["c06-r03"],
html: `
<p>În unele boli genetice, medicamente banale produc reacții adverse severe; altele sunt declanșate sau agravate de medicamente (Tabelul XXII).</p>
<div class="tw"><table>
<tr><th>Boala</th><th>Medicament / agent</th><th>Manifestări</th></tr>
<tr><td><b>Deficit de G6PD</b> (glucozo-6-fosfat-dehidrogenază)</td><td>sulfamide, antipiretice, antimalarice, antalgice</td><td>febră, dureri abdominale, hematurie, reacții hemolitice, hemoliză intravasculară, tahicardie, hepatosplenomegalie, anemie; în formele grave insuficiență cardiacă. Dispare la întreruperea medicamentului.</td></tr>
<tr><td><b>Deficit de colinesterază</b></td><td>miorelaxante (succinilcolină)</td><td>cefalee, amețeli, greață, transpirații, vărsături, paralizii musculare, <b>stop respirator</b></td></tr>
<tr><td><b>Hipertermia malignă</b></td><td>anestezice inhalatorii, succinilcolină</td><td>hipertermie marcată, rigiditate musculară, hipoxie, tahipnee, acidoză respiratorie, mioglobinurie, uneori stop cardiac. Semn precoce la pacientul ventilat: <b>creșterea rapidă a CO₂</b> expirat. Emery: transmitere <b>autozomal dominantă</b>, ~1/10.000; temperatura poate ajunge la 42,3 °C, mai ales cu halotan + succinilcolină.</td></tr>
<tr><td><b>Deficit de acetiltransferază</b> (acetilatori lenți)</td><td>izoniazidă; benzidină și alte arilamine</td><td>neuropatie periferică toxică; risc crescut de cancer de vezică și mamar</td></tr>
<tr><td><b>Guta</b></td><td>diuretice</td><td>scad excreția urinară de acid uric → hiperuricemie → agravare</td></tr>
<tr><td><b>Hemocromatoza</b></td><td>medicamente și alimente cu fier, alcool</td><td>cresc absorbția fierului: leziuni hepatice, ciroză, diabet, cardiomiopatie, artrită, disfuncții sexuale</td></tr>
<tr><td><b>Hemofilia</b></td><td>aspirina</td><td>agravarea sângerărilor</td></tr>
<tr><td><b>Porfiriile</b> (tulburări ale sintezei hemului)</td><td>barbiturice, sulfamide, tranchilizante, anestezice, hormoni, contraceptive, estrogeni, alcool</td><td>crize: crampe abdominale, slăbiciune musculară, tulburări psihice, afectare cutanată</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 280" role="img" aria-label="De ce hemolizează hematiile cu deficit de G6PD">
<defs><marker id="f3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="30" width="150" height="44" rx="10" class="fcard si" stroke-width="1.2"/><text x="95" y="57" text-anchor="middle" class="ti b">glucozo-6-P</text>
<rect x="230" y="30" width="110" height="44" rx="22" class="fA"/><text x="285" y="57" text-anchor="middle" fill="#fff" style="font-weight:800">G6PD</text>
<path d="M170 52 h56" class="si" stroke-width="1.8" marker-end="url(#f3)"/><path d="M340 52 h56" class="si" stroke-width="1.8" marker-end="url(#f3)"/>
<rect x="400" y="30" width="110" height="44" rx="10" class="foks sok" stroke-width="1.2"/><text x="455" y="57" text-anchor="middle" class="tok b">NADPH</text>
<path d="M510 52 h56" class="si" stroke-width="1.8" marker-end="url(#f3)"/>
<rect x="570" y="30" width="170" height="44" rx="10" class="foks sok" stroke-width="1.2"/><text x="655" y="50" text-anchor="middle" class="tok b">glutation redus</text><text x="655" y="66" text-anchor="middle" class="tm" style="font-size:11px">neutralizează oxidanții</text>
<text x="380" y="112" text-anchor="middle" class="ti">Hematia nu are mitocondrii: calea pentozo-fosfaților este SINGURA ei sursă de NADPH.</text>
<rect x="60" y="140" width="640" height="56" rx="12" class="fws sw" stroke-width="1.2"/>
<text x="380" y="164" text-anchor="middle" class="tw2 b">Deficit G6PD + oxidant (sulfamidă, antimalaric, bob)</text>
<text x="380" y="184" text-anchor="middle" class="ti">→ hemoglobina se oxidează și precipită (corpi Heinz) → membrana se rupe → HEMOLIZĂ</text>
<text x="380" y="232" text-anchor="middle" class="tm">Gena G6PD este pe X (Xq28): afectați sunt mai ales bărbații hemizigoți.</text>
<text x="380" y="252" text-anchor="middle" class="tm">Criza se oprește la întreruperea medicamentului, pentru că hematiile tinere au mai multă enzimă.</text>
</svg>
<figcaption><b>Mecanismul hemolizei în deficitul de G6PD.</b> Schemă proprie după Emery (cap. 15) și curs (Tabelul XXII).</figcaption>
</figure>
[[img:g6pd|<b>Patologia deficitului de G6PD</b>, pas cu pas: de la mutația pe cromozomul X la stresul oxidativ, corpii Heinz și hemoliza.]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce anestezic și ce miorelaxant sunt periculoși în hipertermia malignă? Care e semnul precoce?</summary><div>Anestezicele inhalatorii și succinilcolina. Semnul precoce la pacientul intubat: creșterea rapidă a CO₂ expirat.</div></details>
<details class="q"><summary>De ce un pacient cu hemocromatoză trebuie să evite alcoolul și suplimentele de fier?</summary><div>Ambele cresc absorbția și depunerea fierului, accelerând leziunile hepatice (ciroză), diabetul și cardiomiopatia.</div></details>
</div>`
}
]
});
})();
