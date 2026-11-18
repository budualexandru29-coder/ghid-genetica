/* LP XI — Principiile și metodele analizei moleculare a materialului genetic (LP p. 130–148) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.6" marker-end="url(#vf11)"/>`;
const mono = "font-family:ui-monospace,monospace";
// o bandă pe gel
const banda = (x, y, w = 50, cl = "fP", h = 8) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="2" class="${cl}"/>`;
// gelul de secvențiere al problemei 1 (pozițiile măsurate pe scanarea cărții, de jos în sus)
const SECV = "CGGGTAAATGTCAA";

GHID.capitol({
id: "lp11",
intro: `<p class="lead">Metodele moleculare citesc direct ADN-ul (sau ARN-ul) unui pacient. Toate pornesc de la câteva proprietăți simple ale acizilor nucleici: catenele se separă și se reasociază după complementaritate, enzimele de restricție taie la secvențe precise, iar polimerazele copiază o matriță. Cartea descrie metodele clasice; aici le vezi alături de cele care le-au înlocuit în laboratorul de azi.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Ce dimensiune de modificare detectează fiecare metodă">
<text x="20" y="22" class="ti b">Fiecare metodă vede modificări de altă mărime</text>
${(() => {
  const X0 = 160, W = 570, lx = (e) => X0 + (e / 9) * W; // 10^0 … 10^9 bp
  let o = `<line x1="${X0}" y1="250" x2="${X0 + W}" y2="250" class="si" stroke-width="1.2"/>`;
  [[0, "1 bp"], [3, "1 kb"], [6, "1 Mb"], [9, "1 Gb"]].forEach(([e, t]) => (o += `<line x1="${lx(e)}" y1="246" x2="${lx(e)}" y2="254" class="si"/><text x="${lx(e)}" y="270" text-anchor="middle" class="tm" style="font-size:11.5px">${t}</text>`));
  [["Sanger, ASO, PCR", 0, 3, "fA"], ["NGS (exom, genom)", 0, 7.5, "fG"], ["Southern blot", 2.5, 4.5, "fC"], ["MLPA", 2, 5, "fC"], ["microarray (CMA)", 4.5, 8.2, "fT"], ["FISH", 5, 7, "fP"], ["cariotip", 6.7, 8.4, "fP"]].forEach(([t, a, b, c], i) => { const y = 38 + i * 29; o += `<rect x="${lx(a)}" y="${y}" width="${lx(b) - lx(a)}" height="20" rx="5" class="${c}" opacity=".85"/><text x="${X0 - 8}" y="${y + 15}" text-anchor="end" class="ti" style="font-size:11.5px">${t}</text>`; });
  return o;
})()}
<text x="20" y="286" class="tm" style="font-size:11px">Scară logaritmică, limite aproximative. Cariotipul: 5–10 Mb; CMA: de la ~50 kb; NGS: de la o bază la CNV-uri și (în genom) rearanjări.</text>
</svg>
<figcaption><b>Alegerea testului depinde de ce cauți.</b> O mutație punctiformă scapă cariotipului, iar o trisomie nu se vede la Sanger. Detalii despre metode în <a href="#/c13/metode">ghidul de curs</a>. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "principii", titlu: "Principiile: denaturare, hibridizare, restricție, amplificare", pag: "130–131", emery: "cap. 4, p. 43–49", acopera: ["lp11-r01"], curs: ["c13/metode"],
html: `
<p>Analiza directă a ADN și ARN servește la: identificarea defectului molecular, diagnosticul bolilor ereditare și infecțioase, studiul structurii și funcției genomului. Patru mecanisme stau la baza tuturor metodelor:</p>
<div class="pasi">
<div><b>Denaturarea</b>căldura (~95 °C) sau mediul alcalin rup legăturile de hidrogen: ADN dublu catenar → monocatenar</div>
<div><b>Hibridizarea</b>monocatenele complementare se reasociază, indiferent de origine; o <b>sondă</b> marcată găsește astfel secvența căutată</div>
<div><b>Restricția</b>endonucleazele bacteriene taie la situsuri scurte (4–8 bp), adesea palindromice</div>
<div><b>Amplificarea</b><i>in vivo</i> (clonare în bacterii) sau <i>in vitro</i> (PCR)</div>
</div>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Situsul EcoRI și capetele coezive">${DEFS}
${(() => {
  const s1 = "GAATTC", s2 = "CTTAAG", cx = 28;
  let o = `<text x="20" y="22" class="ti b">EcoRI recunoaște GAATTC și taie decalat între G și A, pe ambele catene</text>`;
  [...s1].forEach((b, i) => (o += `<text x="${60 + i * cx}" y="70" text-anchor="middle" class="ti b" style="font-size:18px;${mono}">${b}</text>`));
  [...s2].forEach((b, i) => (o += `<text x="${60 + i * cx}" y="104" text-anchor="middle" class="ti b" style="font-size:18px;${mono}">${b}</text>`));
  o += `<text x="30" y="70" class="tm" style="${mono}">5′</text><text x="30" y="104" class="tm" style="${mono}">3′</text><text x="226" y="70" class="tm" style="${mono}">3′</text><text x="226" y="104" class="tm" style="${mono}">5′</text>`;
  o += `<path d="M${60 + 0.5 * cx} 50 V80 H${60 + 4.5 * cx} V116" fill="none" class="sa" stroke-width="2.2" stroke-dasharray="5 3"/>`;
  o += sag(260, 87, 330, 87);
  // fragmente rezultate
  o += `<text x="370" y="70" class="ti b" style="font-size:18px;${mono}">…G</text><text x="370" y="104" class="ti b" style="font-size:18px;${mono}">…CTTAA</text>`;
  o += `<text x="540" y="70" class="ti b" style="font-size:18px;${mono}">AATTC…</text><text x="584" y="104" class="ti b" style="font-size:18px;${mono}">G…</text>`;
  o += fo(370, 128, 380, 76, "Rămân <b>capete coezive</b> (lipicioase) de 4 baze, AATT. Orice două fragmente tăiate cu aceeași enzimă se pot lipi (cu ligază), indiferent de specie: așa se obține <b>ADN recombinant</b>.");
  o += fo(20, 128, 330, 76, "Situsul e un <b>palindrom</b>: citit 5′→3′, e același pe ambele catene. Bacteria își protejează propriul ADN prin metilarea acestor situsuri.");
  return o;
})()}
</svg>
<figcaption><b>Enzima de restricție EcoRI</b> (din <i>Escherichia coli</i>). Alte enzime taie „drept” și lasă capete netede. Schemă proprie.</figcaption>
</figure>
<p>LCR (reacția de ligare în lanț), pomenită în carte ca alternativă la PCR, nu mai e folosită în diagnostic.</p>`
},
{
id: "pcr", titlu: "Reacția de polimerizare în lanț (PCR)", pag: "131–133", emery: "cap. 4, p. 47–48", acopera: ["lp11-r02", "lp11-r03"],
html: `
<p>PCR amplifică selectiv un fragment scurt de ADN (de obicei sub 1–2 kb). Ingrediente: ADN matriță, două <b>amorse</b> (primeri, 15–25 de nucleotide) care încadrează regiunea, <b>Taq polimeraza</b> (termorezistentă, din <i>Thermus aquaticus</i>), cele patru <b>dNTP</b>, Mg<sup>2+</sup> și tampon.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Cele trei etape ale unui ciclu PCR">${DEFS}
${(() => {
  let o = "";
  const et = [["1. Denaturare", "94–98 °C", "catenele se separă"], ["2. Hibridizare", "50–65 °C", "amorsele se leagă la capetele regiunii"], ["3. Extensie", "72 °C", "polimeraza adaugă nucleotide la capătul 3′ al amorsei"]];
  et.forEach(([t, T, d], i) => {
    const x = 20 + i * 250;
    o += `<rect x="${x}" y="10" width="230" height="200" rx="10" class="fcard sm" stroke-width=".6"/><text x="${x + 12}" y="32" class="ti b" style="font-size:12.5px">${t}</text><text x="${x + 218}" y="32" text-anchor="end" class="ta b" style="font-size:12px">${T}</text>`;
    const y1 = 90, y2 = 140;
    if (i === 0) o += `<rect x="${x + 20}" y="${y1 - 4}" width="190" height="8" rx="3" class="fG"/><rect x="${x + 20}" y="${y2 - 4}" width="190" height="8" rx="3" class="fT"/>`;
    if (i === 1) o += `<rect x="${x + 20}" y="${y1 - 4}" width="190" height="8" rx="3" class="fG"/><rect x="${x + 20}" y="${y2 - 4}" width="190" height="8" rx="3" class="fT"/><rect x="${x + 166}" y="${y1 + 6}" width="34" height="8" rx="3" class="fA"/><rect x="${x + 30}" y="${y2 - 14}" width="34" height="8" rx="3" class="fA"/>`;
    if (i === 2) o += `<rect x="${x + 20}" y="${y1 - 4}" width="190" height="8" rx="3" class="fG"/><rect x="${x + 20}" y="${y2 - 4}" width="190" height="8" rx="3" class="fT"/><rect x="${x + 166}" y="${y1 + 6}" width="34" height="8" rx="3" class="fA"/><rect x="${x + 70}" y="${y1 + 6}" width="96" height="8" rx="3" class="fA" opacity=".55"/><rect x="${x + 30}" y="${y2 - 14}" width="34" height="8" rx="3" class="fA"/><rect x="${x + 64}" y="${y2 - 14}" width="96" height="8" rx="3" class="fA" opacity=".55"/>` + sag(x + 90, y1 + 24, x + 60, y1 + 24, "sa") + sag(x + 140, y2 - 24, x + 170, y2 - 24, "sa");
    o += fo(x + 12, 160, 206, 46, d, "color:var(--ink)");
  });
  o += `<rect x="20" y="226" width="12" height="12" rx="3" class="fG"/><text x="38" y="236" class="ti" style="font-size:11.5px">catena 1</text><rect x="110" y="226" width="12" height="12" rx="3" class="fT"/><text x="128" y="236" class="ti" style="font-size:11.5px">catena 2</text><rect x="200" y="226" width="12" height="12" rx="3" class="fA"/><text x="218" y="236" class="ti" style="font-size:11.5px">amorse și catena nou sintetizată</text>`;
  o += fo(20, 248, 730, 50, "Un ciclu durează 1–3 minute; 25–35 de cicluri într-un termociclor. La fiecare ciclu numărul de copii ale regiunii <b>se dublează</b>: din al treilea ciclu încolo apar produsele de lungime exactă, care apoi domină.");
  return o;
})()}
</svg>
<figcaption><b>Un ciclu PCR</b> (figura 36 din carte). Schemă proprie.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Creșterea exponențială și platoul PCR">
${(() => {
  const X0 = 80, W = 560, Y0 = 240, H = 200, lx = (c) => X0 + c / 40 * W, ly = (lg) => Y0 - (lg - 3) / 10 * H;
  let ideal = "", real = "", N = 1000, K = 1e11;
  for (let c = 0; c <= 40; c++) { const I = 1000 * Math.pow(2, c); if (Math.log10(I) <= 13) ideal += (ideal ? "L" : "M") + lx(c).toFixed(1) + " " + ly(Math.log10(I)).toFixed(1); real += (real ? "L" : "M") + lx(c).toFixed(1) + " " + ly(Math.log10(N)).toFixed(1); N = N * (1 + 0.95 * Math.max(0, 1 - N / K)); }
  let o = `<text x="20" y="22" class="ti b">De la 1.000 de copii (≈3 ng de ADN genomic): copii după n cicluri</text>`;
  [3, 6, 9, 12].forEach((v) => (o += `<line x1="${X0}" y1="${ly(v)}" x2="${X0 + W}" y2="${ly(v)}" class="sm" stroke-dasharray="2 4" opacity=".5"/><text x="${X0 - 8}" y="${ly(v) + 4}" text-anchor="end" class="tm" style="font-size:11px">10<tspan dy="-5" style="font-size:8.5px">${v}</tspan></text>`));
  [0, 10, 20, 30, 40].forEach((c) => (o += `<text x="${lx(c)}" y="${Y0 + 18}" text-anchor="middle" class="tm" style="font-size:11px">${c}</text>`));
  o += `<path d="${ideal}" fill="none" class="sm" stroke-width="1.6" stroke-dasharray="5 4"/><path d="${real}" fill="none" class="sA" stroke-width="2.6"/>`;
  o += `<text x="${lx(24)}" y="${ly(12)}" text-anchor="end" class="tm" style="font-size:11.5px">ideal: 2<tspan dy="-5" style="font-size:8.5px">n</tspan></text><text x="${lx(34)}" y="${ly(11) + 18}" class="ta b" style="font-size:11.5px">real: platou</text>`;
  o += fo(X0 + W - 250, 150, 300, 80, "Platoul apare când se epuizează amorsele și dNTP, iar produsul se reasociază. <b>PCR în timp real</b> (qPCR) măsoară fluorescența în faza exponențială, deci poate cuantifica.");
  o += `<text x="${X0 + W / 2}" y="${Y0 + 36}" text-anchor="middle" class="tm" style="font-size:11.5px">număr de cicluri</text>`;
  return o;
})()}
</svg>
<figcaption><b>Amplificare exponențială.</b> După 30 de cicluri ideale, o singură copie ar deveni 2<sup>30</sup> ≈ 10<sup>9</sup>. Curbă calculată cu un model simplu de saturare; ilustrativă.</figcaption>
</figure>
<div class="capcana"><b>Greșeală în carte</b><p>Polimeraza adaugă nucleotide la capătul <b>3′</b> al amorsei, nu la 5′: toate ADN-polimerazele sintetizează în direcția 5′→3′ și au nevoie de o grupare 3′-OH liberă. Tot de aceea amorsele se leagă la capetele 3′ ale catenelor-matriță.</p></div>
<p><b>Avantaje:</b> rapidă, foarte sensibilă și specifică, pornește de la cantități minime (o picătură de sânge, o celulă). <b>Limite:</b> trebuie cunoscută secvența de la capetele regiunii; contaminarea cu ADN străin dă rezultate fals pozitive; nu amplifică bine fragmente lungi sau expansiuni mari de repetiții (ex. mutația completă din sindromul X fragil).</p>
[[img:gel_agaroza|<b>Produse PCR pe gel de agaroză</b>, colorate cu un colorant fluorescent și văzute în UV. Prima coloană e un marker de mărime (benzi de lungimi cunoscute).]]`
},
{
id: "southern", titlu: "Metoda Southern blotting", pag: "133–135", emery: "cap. 4, p. 46–47", acopera: ["lp11-r04", "lp11-r05"], curs: ["c05/dinamice"],
html: `
<p>Southern blotting (după Edwin Southern, 1975) arată dacă o secvență-țintă e prezentă în ADN-ul genomic și pe ce fragment de restricție se află.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Etapele Southern blotting">${DEFS}
${(() => {
  const P = [["1. Extracție", "ADN genomic din sânge, celule, biopsie"], ["2. Digestie", "enzimă de restricție → mii de fragmente"], ["3. Electroforeză", "agaroză; fragmentele mici migrează mai departe, spre anod (+)"], ["4. Denaturare", "mediu alcalin → monocatene"], ["5. Transfer", "prin capilaritate, pe membrană de nailon sau nitroceluloză"], ["6. Hibridizare", "sondă marcată, complementară cu ținta"], ["7. Detecție", "autoradiografie sau chemiluminiscență: doar benzile țintă"]];
  let o = "";
  P.forEach(([t, d], i) => { const x = 14 + i * 106; o += `<rect x="${x}" y="14" width="98" height="150" rx="9" class="${i < 4 ? "fas" : "fis"}"/><text x="${x + 8}" y="34" class="ti b" style="font-size:11.5px">${t}</text>${fo(x + 8, 40, 84, 120, d, "font-size:11.5px;color:var(--ink)")}`; if (i < 6) o += sag(x + 98, 90, x + 106, 90); });
  // gel „frotiu” vs membrană cu benzi
  o += `<text x="20" y="196" class="ti b" style="font-size:12px">Pe gel: frotiu continuu</text><rect x="40" y="206" width="40" height="56" rx="3" class="fline"/><rect x="44" y="210" width="32" height="48" rx="2" class="fP" opacity=".35"/>`;
  o += `<text x="290" y="196" class="ti b" style="font-size:12px">Pe film: câteva benzi</text><rect x="310" y="206" width="40" height="56" rx="3" class="fline"/>${banda(330, 222, 30)}${banda(330, 246, 30)}`;
  o += fo(420, 186, 330, 80, "Digestia genomică dă prea multe fragmente ca să se vadă separat; sonda le „alege” doar pe cele care conțin secvența căutată.");
  return o;
})()}
</svg>
<figcaption><b>Cele șapte etape</b> (figura 37 din carte). Schemă proprie.</figcaption>
</figure>
<p><b>Avantaje:</b> vede fragmente mari (zeci de kb), deci și <b>expansiuni mari de repetiții</b> pe care PCR nu le amplifică; a stat la baza analizei RFLP. <b>Dezavantaje:</b> laborioasă, durează zile, necesită mult ADN, folosea marcaj radioactiv.</p>
<div class="emery"><b>Unde mai e folosită</b><p>Southern a fost înlocuită aproape peste tot de PCR, MLPA și secvențiere. A rămas pentru <b>sindromul X fragil</b> (mutația completă, >200 de repetiții CGG, și metilarea ei) și pentru <b>distrofia facio-scapulo-humerală</b> (FSHD1, contracția repetiției D4Z4). Variantele pe ARN și proteine se numesc, în glumă, Northern și Western blotting.</p></div>`
},
{
id: "aso", titlu: "Sondele oligonucleotidice specifice alelei (ASO)", pag: "135", emery: "cap. 4", acopera: ["lp11-r06"], curs: ["c13/genica"],
html: `
<p>ASO verifică dacă o mutație <b>cunoscută</b> e prezentă și în ce stare (homozigot sau heterozigot). ADN-ul pacientului (de obicei produs PCR) e fixat pe membrană ca o pată (<i>dot blot</i>) și hibridizat, în paralel, cu două sonde scurte (15–20 de nucleotide): una perfect complementară cu alela normală, alta cu alela mutantă. În condiții stricte (temperatură înaltă), o singură bază nepotrivită împiedică legarea.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Rezultatul ASO pentru trei genotipuri">
${(() => {
  const G = [["homozigot normal", 1, 0], ["heterozigot (purtător)", 1, 1], ["homozigot mutant (bolnav)", 0, 1]];
  let o = `<text x="200" y="30" text-anchor="end" class="ti b" style="font-size:12px">sondă pentru alela normală</text><text x="200" y="100" text-anchor="end" class="ti b" style="font-size:12px">sondă pentru alela mutantă</text>`;
  G.forEach(([t, n, m], i) => { const x = 270 + i * 160; o += `<circle cx="${x}" cy="26" r="20" class="${n ? "fP" : "fline"}"/><circle cx="${x}" cy="96" r="20" class="${m ? "fP" : "fline"}"/>${fo(x - 70, 126, 140, 40, t, "text-align:center;color:var(--ink);font-weight:600")}`; });
  o += fo(20, 176, 730, 70, "Sonda normală pentru siclemie: …CCT<b>G</b>AGGAG… ; sonda mutantă: …CCT<b>G</b>TGGAG… (codonul GAG → GTG, glutamat → valină). Diferă printr-o singură bază, iar în condiții stricte fiecare se leagă doar de alela ei.");
  return o;
})()}
</svg>
<figcaption><b>Citirea unui dot blot ASO</b>: fiecare persoană = o pereche de pete. Schemă proprie.</figcaption>
</figure>
<p><b>Avantaje:</b> rapidă, precisă, identifică purtătorii. <b>Limită:</b> găsește doar mutațiile pentru care există sondă, deci e utilă în boli cu puține mutații frecvente (siclemie, mutațiile comune din fibroza chistică). Principiul ASO trăiește în <b>genotiparea pe panouri</b> și în microarray-urile SNP, unde sute de mii de sonde specifice alelei sunt citite simultan.</p>`
},
{
id: "microarray", titlu: "Microarray (chip ADN)", pag: "135–137", emery: "cap. 4, p. 52–53; cap. 17", acopera: ["lp11-r07", "lp11-r08"],
html: `
<p>Un microarray are zeci de mii până la milioane de sonde fixate în poziții cunoscute pe o lamă sau un cip. Proba marcată fluorescent hibridizează cu sondele, iar un scanner laser măsoară semnalul din fiecare punct. Cartea descrie <b>chipurile de expresie</b>: ARNm din țesutul de testat și din cel de control, transformat în ADNc și marcat cu două culori diferite, concurează pentru aceleași sonde.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Principiul microarray-ului cu două culori">${DEFS}
${(() => {
  let o = `<rect x="20" y="20" width="150" height="56" rx="8" class="fT"/><text x="95" y="44" text-anchor="middle" style="fill:#fff" class="b">proba de testat</text><text x="95" y="62" text-anchor="middle" style="fill:#fff;font-size:11.5px">ARNm → ADNc roșu</text>`;
  o += `<rect x="20" y="96" width="150" height="56" rx="8" class="fA"/><text x="95" y="120" text-anchor="middle" style="fill:#fff" class="b">proba de control</text><text x="95" y="138" text-anchor="middle" style="fill:#fff;font-size:11.5px">ARNm → ADNc verde</text>`;
  o += sag(176, 48, 240, 78) + sag(176, 124, 240, 94) + `<text x="190" y="170" class="tm" style="font-size:11px">amestec</text>`;
  const C = ["#d9534f", "#e8b53a", "#3aa76d", "#e8b53a", "#d9534f", "#3aa76d", "#e8b53a", "#e8b53a", "#3aa76d", "#d9534f", "#e8b53a", "#e8b53a", "#e8b53a", "#3aa76d", "#d9534f", "#e8b53a"];
  o += `<rect x="250" y="20" width="150" height="140" rx="10" class="fcard sm" stroke-width=".8"/>`;
  C.forEach((c, i) => (o += `<circle cx="${280 + (i % 4) * 30}" cy="${48 + Math.floor(i / 4) * 30}" r="10" fill="${c}"/>`));
  o += `<text x="325" y="178" text-anchor="middle" class="ti b" style="font-size:12px">cipul după hibridizare</text>`;
  o += `<circle cx="440" cy="42" r="9" fill="#d9534f"/><text x="456" y="46" class="ti" style="font-size:12px">roșu: genă mai exprimată în proba de testat</text><circle cx="440" cy="76" r="9" fill="#3aa76d"/><text x="456" y="80" class="ti" style="font-size:12px">verde: mai exprimată în control</text><circle cx="440" cy="110" r="9" fill="#e8b53a"/><text x="456" y="114" class="ti" style="font-size:12px">galben: egal (roșu + verde)</text>`;
  o += fo(20, 196, 730, 70, "Raportul roșu/verde din fiecare punct, exprimat ca log<sub>2</sub>, arată de câte ori se schimbă expresia unei gene. Aplicații din carte: boli complexe, toxicologie, farmacogenetică, genotiparea SNP, comparația între țesuturi și tumori. Expresia genică se studiază azi mai ales prin <b>RNA-seq</b>.");
  return o;
})()}
</svg>
<figcaption><b>Microarray de expresie cu două culori</b> (figura 38 din carte). Schemă proprie.</figcaption>
</figure>
[[gal:chip_adn|Un <b>cip microarray</b> modern: mai multe zone de hibridizare pe aceeași lamă, fiecare pentru un pacient.;;acgh|<b>Hibridizarea genomică comparativă pe array (aCGH)</b>: ADN-ul pacientului (verde) și cel de referință (roșu), amestecate cu ADN Cot-1 care blochează repetițiile, hibridizează pe același cip.]]
<h3>Unde se folosește azi: analiza cromozomială prin microarray (CMA)</h3>
<p>În diagnostic, microarray-ul compară ADN genomic, nu ARN: <b>aCGH</b> sau <b>array SNP</b> caută <b>variații ale numărului de copii (CNV)</b>, adică microdeleții și microduplicații prea mici pentru cariotip. E <b>testul de primă intenție</b> pentru întârzierea în dezvoltare și dizabilitatea intelectuală, tulburările din spectrul autist și anomaliile congenitale multiple, cu un randament de ~15–20% (față de ~3% pentru cariotip).</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Profil CMA cu o deleție și o duplicație">
${(() => {
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647 - 0.5);
  const X0 = 70, W = 660, Y0 = 140, S = 80, n = 320;
  let o = `<text x="20" y="22" class="ti b">Profilul log<tspan dy="4" style="font-size:9px">2</tspan><tspan dy="-4"> (pacient / referință) de-a lungul unui cromozom</tspan></text>`;
  [[1, "+1"], [0.58, "+0,58"], [0, "0"], [-1, "−1"]].forEach(([v, t]) => (o += `<line x1="${X0}" y1="${Y0 - v * S}" x2="${X0 + W}" y2="${Y0 - v * S}" class="sm" stroke-dasharray="${v ? "2 4" : "0"}" opacity="${v ? 0.5 : 0.8}"/><text x="${X0 - 8}" y="${Y0 - v * S + 4}" text-anchor="end" class="tm" style="font-size:11px">${t}</text>`));
  for (let i = 0; i < n; i++) { const x = X0 + (i / n) * W; let v = 0, c = "fZ"; if (i > 70 && i < 105) { v = -1; c = "fT"; } if (i > 210 && i < 250) { v = 0.58; c = "fG"; } o += `<circle cx="${x.toFixed(1)}" cy="${(Y0 - (v + rnd() * 0.45) * S).toFixed(1)}" r="2.2" class="${c}"/>`; }
  o += `<text x="${X0 + 88 / n * W}" y="${Y0 + S + 26}" text-anchor="middle" class="b" style="fill:var(--warn);font-size:12px">deleție (1 copie): log₂(1/2) = −1</text>`;
  o += `<text x="${X0 + 230 / n * W}" y="${Y0 - S - 14}" text-anchor="middle" class="b" style="fill:var(--info);font-size:12px">duplicație (3 copii): log₂(3/2) = +0,58</text>`;
  o += `<text x="20" y="282" class="tm" style="font-size:11px">Fiecare punct = o sondă. Date simulate, ilustrative. Notația ISCN a rezultatului (arr) e explicată în LP VII.</text>`;
  return o;
})()}
</svg>
<figcaption><b>Cum arată o deleție și o duplicație pe CMA.</b> Pe array SNP se văd în plus <b>regiunile fără heterozigoție</b> (disomie uniparentală, consangvinitate). CMA nu vede rearanjările echilibrate (translocații, inversiuni) și nici mutațiile punctiforme. Schemă proprie. Vezi și <a href="#/lp07">notația ISCN „arr”</a>.</figcaption>
</figure>
[[img:acgh_del|<b>Rezultat aCGH real</b>: deleții heterozigote pe cromozomii 3 (1,69 Mb, include <i>SOX2</i>) și 14 (6,5 Mb, include <i>OTX2</i>), la pacienți cu anoftalmie sau microftalmie. Genele din regiune sunt listate deasupra barei roșii.]]`
},
{
id: "mutatii-necunoscute", titlu: "Căutarea mutațiilor în gene necunoscute: SSCP și clivarea chimică", pag: "138–139", emery: "cap. 4", acopera: ["lp11-r09"],
html: `
<p>Când nu știi ce mutație cauți, ai nevoie de o metodă de <b>screening</b> care să arate doar <i>dacă</i> un fragment diferă de normal, urmată de secvențiere.</p>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Principiul SSCP">
<text x="20" y="22" class="ti b">SSCP: o singură bază diferită schimbă forma monocatenei, deci migrarea</text>
${(() => {
  let o = `<path d="M60 70 q20 -30 40 0 t40 0 q10 30 -20 40 t-30 30" fill="none" class="sG" stroke-width="3"/><text x="100" y="170" text-anchor="middle" class="ti" style="font-size:12px">monocatenă normală</text>`;
  o += `<path d="M210 70 q20 -30 40 0 q10 20 -10 40 q-30 10 -10 40 t40 -10" fill="none" class="sT" stroke-width="3"/><circle cx="250" cy="70" r="5" class="fT"/><text x="240" y="170" text-anchor="middle" class="ti" style="font-size:12px">monocatenă cu mutație</text>`;
  o += `<rect x="340" y="40" width="200" height="150" rx="4" class="fline"/>`;
  [["martor", [80, 120]], ["pacient", [80, 120, 100]]].forEach(([t, b], i) => { const x = 400 + i * 80; b.forEach((y, j) => (o += banda(x, 40 + y, 46, j === 2 ? "fT" : "fP"))); o += `<text x="${x}" y="208" text-anchor="middle" class="ti b" style="font-size:12px">${t}</text>`; });
  o += fo(560, 40, 190, 160, "Pacientul heterozigot are benzile normale plus o bandă în plus. Detectează 70–90% din mutații în fragmente sub 200 bp, mult mai puțin în fragmente lungi, și nu spune unde e mutația.");
  return o;
})()}
</svg>
<figcaption><b>Analiza polimorfismului conformației monocatenare (SSCP).</b> ADN-ul amplificat prin PCR se denaturează și se separă în gel de poliacrilamidă nedenaturant. Schemă proprie.</figcaption>
</figure>
<p><b>Clivarea chimică a împerecherilor greșite</b> hibridizează ADN normal cu ADN de testat; la locul unei nepotriviri, baza nepereche e modificată chimic (T cu tetraoxid de osmiu, C cu <b>hidroxilamină</b>; cartea scrie greșit „hidroxialanină”), apoi catena e tăiată cu piperidină. Lungimea fragmentelor arată poziția mutației; analizează fragmente de până la ~1,7 kb, cu sensibilitate aproape de 100%, dar e laborioasă și toxică.</p>
<div class="capcana"><b>Metode istorice</b><p>SSCP, clivarea chimică, DGGE și analiza heteroduplexurilor au fost înlocuite de <b>secvențierea directă</b>: întâi Sanger, apoi <b>panourile NGS</b>, secvențierea exomului și a genomului, care caută simultan mutații în sute sau mii de gene.</p></div>`
},
{
id: "rflp", titlu: "RFLP, VNTR și amprenta ADN", pag: "139", emery: "cap. 4, p. 53–56", acopera: ["lp11-r10"], curs: ["c01/polimorfism"],
html: `
<p>Două genomuri umane neînrudite diferă, în medie, la ~1 bază din 1.000 (cartea dă „la fiecare 100–500 bp”, o supraestimare). Majoritatea variantelor sunt în afara genelor și nu au efect: sunt <b>polimorfisme ADN</b>. Dacă o variantă creează sau distruge un situs de restricție, fragmentele tăiate de enzimă au lungimi diferite: <b>polimorfismul lungimii fragmentelor de restricție (RFLP)</b>.</p>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="RFLP în siclemie cu enzima MstII">
<text x="20" y="22" class="ti b">Siclemia: mutația HbS distruge un situs MstII în gena HBB</text>
${(() => {
  let o = "";
  const harta = (y, et, cu) => { let s = `<text x="20" y="${y + 5}" class="ti b" style="font-size:12px">${et}</text><rect x="120" y="${y - 3}" width="420" height="6" rx="3" class="fline"/>`; [140, cu ? 420 : null, 490].forEach((x) => { if (x) s += `<line x1="${x}" y1="${y - 14}" x2="${x}" y2="${y + 14}" class="sa" stroke-width="2.4"/>`; }); if (!cu) s += `<text x="420" y="${y - 18}" text-anchor="middle" class="tw2 b" style="font-size:16px">×</text>`; return s; };
  o += harta(70, "alela βA", true) + harta(140, "alela βS", false);
  o += `<rect x="150" y="84" width="260" height="8" rx="3" class="fA"/><text x="280" y="108" text-anchor="middle" class="tm" style="font-size:11.5px">1,15 kb</text><rect x="150" y="154" width="330" height="8" rx="3" class="fT"/><text x="315" y="178" text-anchor="middle" class="tm" style="font-size:11.5px">1,35 kb</text>`;
  o += `<text x="140" y="44" text-anchor="middle" class="ta" style="font-size:11px">MstII</text>`;
  o += `<rect x="170" y="190" width="12" height="12" rx="3" class="fA"/><text x="188" y="200" class="tm" style="font-size:11px">fragmentul recunoscut de sondă</text>`;
  // gel
  o += `<rect x="580" y="40" width="170" height="200" rx="4" class="fline"/>`;
  [["AA", [0]], ["AS", [0, 1]], ["SS", [1]]].forEach(([g, b], i) => { const x = 610 + i * 55; b.forEach((k) => (o += banda(x, k ? 100 : 140, 40, k ? "fT" : "fA"))); o += `<text x="${x}" y="260" text-anchor="middle" class="ti b">${g}</text>`; });
  o += `<text x="574" y="104" text-anchor="end" class="tm" style="font-size:11px">1,35</text><text x="574" y="144" text-anchor="end" class="tm" style="font-size:11px">1,15</text>`;
  o += fo(20, 214, 540, 70, "Aici mutația însăși modifică situsul: e un <b>diagnostic direct</b>. Mai des, polimorfismul RFLP e doar <b>vecin</b> cu gena bolii și se folosește ca <b>marker</b> în analiza de înlănțuire (diagnostic indirect).");
  return o;
})()}
</svg>
<figcaption><b>RFLP: un exemplu clasic.</b> Fragmentul mai lung migrează mai puțin. Fragmentele scurte de 0,2 kb nu sunt figurate. Schemă proprie.</figcaption>
</figure>
<h3>VNTR, microsateliți și amprenta genetică</h3>
<p><b>Minisateliții (VNTR)</b> sunt repetiții în tandem ale unor unități de 10–100 bp; <b>microsateliții (STR)</b>, ale unor unități de 2–6 bp. Numărul de repetiții variază mult între persoane și se moștenește mendelian, codominant. Alec Jeffreys a arătat în 1985 că, analizate simultan prin Southern, VNTR-urile dau un model de benzi unic pentru fiecare om (cu excepția gemenilor monozigoți): <b>amprenta ADN</b>.</p>
<div class="emery"><b>Medicina legală azi</b><p>Se analizează <b>STR-uri</b> amplificate prin PCR multiplex și separate prin electroforeză capilară: standardul european are 12 loci, sistemul american CODIS 20. Rezultatul e un șir de numere (repetițiile de pe fiecare alelă), comparabil între laboratoare și stocat în baze de date. Probabilitatea ca un profil complet să se potrivească întâmplător e de ordinul 1 la 10<sup>15</sup> sau mai mică.</p></div>`
},
{
id: "linkage", titlu: "Diagnosticul indirect: analiza de înlănțuire", pag: "140–141", emery: "cap. 8, p. 120–124", acopera: ["lp11-r11"], curs: ["c05/recombinare"],
html: `
<p>Când gena bolii nu e cunoscută (sau mutația familiei nu poate fi găsită), se urmărește în familie un <b>marker polimorf</b> aflat aproape de ea: alela markerului care <b>cosegregă</b> cu boala arată ce cromozom poartă mutația.</p>
<div class="pasi">
<div><b>Genele înlănțuite</b>se transmit împreună: crossing-over-ul le separă rar</div>
<div><b>Genele pe cromozomi diferiți</b>se transmit independent</div>
<div><b>Cu cât sunt mai apropiate</b>cu atât recombinarea între ele e mai rară</div>
</div>
<p><b>Fracția de recombinare θ</b> = recombinanți / total descendenți. θ = 0: înlănțuire completă; θ = 0,5: segregare independentă. <b>1 centimorgan (cM)</b> = distanța la care recombinarea apare în 1% din meioze; în medie, 1 cM ≈ 1 Mb.</p>
<h3>Scorul LOD</h3>
<p>Pentru fiecare valoare a lui θ se compară probabilitatea datelor familiale dacă locii sunt înlănțuiți cu cea dacă nu sunt: <b>LOD = log<sub>10</sub>[L(θ) / L(0,5)]</b>. Convenția: <b>LOD ≥ 3</b> (șanse de 1.000 la 1 pentru înlănțuire) dovedește înlănțuirea; <b>LOD ≤ −2</b> o exclude.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Curbe LOD pentru trei seturi de meioze">
${(() => {
  const X0 = 80, W = 460, Y0 = 190, S = 30, lx = (t) => X0 + t / 0.5 * W, ly = (z) => Y0 - z * S;
  const Z = (t, n, k) => Math.log10(Math.pow(t, k) * Math.pow(1 - t, n - k) / Math.pow(0.5, n));
  const C = [[10, 0, "sG", "10 meioze, 0 rec."], [10, 1, "sT", "10 meioze, 1 rec."], [20, 2, "sA", "20 meioze, 2 rec."]];
  let o = `<text x="20" y="22" class="ti b">LOD în funcție de θ, pentru familii cu meioze informative</text>`;
  [-2, -1, 0, 1, 2, 3, 4].forEach((z) => (o += `<line x1="${X0}" y1="${ly(z)}" x2="${X0 + W}" y2="${ly(z)}" class="sm" stroke-dasharray="${z === 3 || z === -2 ? "6 3" : "2 4"}" opacity="${z === 3 || z === -2 ? 0.9 : 0.4}"/><text x="${X0 - 8}" y="${ly(z) + 4}" text-anchor="end" class="tm" style="font-size:11px">${z}</text>`));
  [0, 0.1, 0.2, 0.3, 0.4, 0.5].forEach((t) => (o += `<text x="${lx(t)}" y="${ly(-2) + 18}" text-anchor="middle" class="tm" style="font-size:11px">${String(t).replace(".", ",")}</text>`));
  C.forEach(([n, k, c, t], i) => { let d = ""; for (let th = 0.001; th <= 0.5; th += 0.004) { const z = Z(th, n, k); if (z < -2.2) continue; d += (d ? "L" : "M") + lx(th).toFixed(1) + " " + ly(z).toFixed(1); } o += `<path d="${d}" fill="none" class="${c}" stroke-width="2.4"/><line x1="612" y1="${40 + i * 20}" x2="634" y2="${40 + i * 20}" class="${c}" stroke-width="2.4"/><text x="640" y="${44 + i * 20}" class="ti" style="font-size:11.5px">${t}</text>`; });
  o += `<text x="${X0 + W + 6}" y="${ly(3) + 4}" class="tok b" style="font-size:11.5px">înlănțuire</text><text x="${X0 + W + 6}" y="${ly(-2) + 4}" class="tw2 b" style="font-size:11.5px">exclusă</text>`;
  o += fo(615, 140, 140, 150, "Maxim la θ = k/n: 3,0 pentru 10/0; doar 1,6 pentru 10/1; 3,2 pentru 20/2. O familie mică rareori ajunge singură la 3: scorurile mai multor familii se <b>adună</b>.");
  o += `<text x="${X0 + W / 2}" y="${ly(-2) + 36}" text-anchor="middle" class="tm" style="font-size:11.5px">fracția de recombinare θ</text>`;
  return o;
})()}
</svg>
<figcaption><b>De ce trebuie familii mari, cu markeri informativi.</b> „rec.” = descendenți recombinanți. LOD calculat pentru meioze în care se știe faza (care alelă e pe cromozomul cu mutația). Calcul propriu.</figcaption>
</figure>
<div class="capcana"><b>Două precizări</b><p>1) <b>Dezechilibrul de înlănțuire</b> (asocierea unei alele cu boala la nivel de populație) nu e același lucru cu înlănțuirea din familii. 2) Exemplul din carte, „HLA-B27 reprezintă un risc relativ de 90%”, amestecă noțiunile: ~90% din bolnavii de spondilită anchilozantă sunt B27+, iar riscul relativ al purtătorilor de B27 e de ordinul zecilor (de ~50–90 de ori), nu un procent. Diagnosticul indirect are o eroare egală cu θ (risc de recombinare) și a fost înlocuit de diagnosticul direct ori de câte ori mutația familiei e cunoscută.</p></div>`
},
{
id: "secventiere", titlu: "Secvențierea ADN: Sanger, Maxam–Gilbert și NGS", pag: "141–143", emery: "cap. 4, p. 49–52", acopera: ["lp11-r12", "lp11-r13", "lp11-r14", "lp11-r16"], curs: ["c13/metode"],
html: `
<h3>Metoda enzimatică (Sanger, 1977)</h3>
<p>Polimeraza copiază matrița pornind de la o amorsă marcată. În amestec există, pe lângă dNTP, puțin <b>didezoxinucleotid</b> (ddNTP), care nu are gruparea 3′-OH: odată încorporat, lanțul nu mai poate crește. Se obțin fragmente de toate lungimile, fiecare terminat cu baza respectivă.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Citirea unui gel de secvențiere Sanger">
${(() => {
  // pozițiile măsurate pe figura din carte (problema 1), ordonate de jos în sus
  const L = { G: [1, 2, 3, 9], A: [5, 6, 7, 12, 13], T: [4, 8, 10], C: [0, 11] };
  const X = { G: 80, A: 140, T: 200, C: 260 }, y = (i) => 290 - i * 18;
  let o = `<rect x="50" y="34" width="240" height="270" rx="4" class="fline"/>`;
  Object.entries(X).forEach(([b, x]) => (o += `<text x="${x}" y="26" text-anchor="middle" class="ta b" style="font-size:14px">dd${b}</text>`));
  Object.entries(L).forEach(([b, ii]) => ii.forEach((i) => (o += banda(X[b], y(i), 44, "fP", 7))));
  o += `<text x="300" y="${y(0) + 4}" class="tm" style="font-size:11px">scurt</text><text x="300" y="${y(13) + 4}" class="tm" style="font-size:11px">lung</text>`;
  [...SECV].forEach((b, i) => (o += `<text x="${360 + i * 26}" y="80" text-anchor="middle" class="ti b" style="font-size:16px;${mono}">${b}</text>`));
  o += `<text x="340" y="80" text-anchor="end" class="tm" style="${mono}">5′</text><text x="${360 + 14 * 26 - 8}" y="80" class="tm" style="${mono}">3′</text>`;
  o += fo(340, 100, 410, 210, "<b style='color:var(--ink)'>Citire:</b> de jos (fragmentul cel mai scurt, care a migrat cel mai departe) în sus; fiecare treaptă = o bază în plus. Banda de pe coloana ddG înseamnă G în acea poziție.<br><br>Citirea dă secvența catenei <b>sintetizate</b>, complementară cu matrița, în direcția 5′→3′.<br><br>Gelul e cel din problema 1 a cărții (pozițiile benzilor măsurate pe scanare).");
  return o;
})()}
</svg>
<figcaption><b>Gelul de secvențiere cu patru coloane</b> (figura 39). Schemă proprie după aplicația practică 1.</figcaption>
</figure>
[[img:sanger_trace|<b>Secvențiere Sanger automată</b>: fiecare ddNTP are alt fluorocrom (A verde, C albastru, G negru, T roșu), toate fragmentele trec printr-un singur capilar, iar detectorul transformă vârfurile în secvență. Zona galbenă e cea de calitate scăzută de la începutul citirii.]]
<h3>Metoda chimică (Maxam–Gilbert)</h3>
<p>ADN-ul marcat la un capăt e tratat în patru reacții care modifică și apoi rup lanțul la anumite baze; fragmentele se separă și se citesc la fel. E istorică: folosea reactivi toxici și nu s-a putut automatiza.</p>
<div class="tw"><table>
<thead><tr><th>Reacția</th><th>Reactiv</th><th>Rupe la</th></tr></thead>
<tbody>
<tr><td>G</td><td>dimetil sulfat</td><td>G</td></tr>
<tr><td>A + G</td><td><b>acid formic</b></td><td>purine</td></tr>
<tr><td>C + T</td><td>hidrazină</td><td>pirimidine</td></tr>
<tr><td>C</td><td>hidrazină + NaCl</td><td>C</td></tr>
<tr><td colspan="3">în toate: <b>piperidina</b> rupe lanțul la baza modificată</td></tr>
</tbody></table></div>
<p class="tm">Cartea scrie „acid fumaric” (corect: acid formic) și omite dimetil sulfatul (figura 40).</p>
<h3>Secvențierea de nouă generație (NGS)</h3>
<p>Milioane de fragmente scurte sunt secvențiate în paralel; software-ul le aliniază pe genomul de referință și găsește diferențele. În practică: <b>panouri de gene</b> (zeci–sute de gene pentru un tablou clinic), <b>exom</b> (~1–2% din genom, partea codantă, unde se află majoritatea mutațiilor cunoscute), <b>genom întreg</b>. Sanger rămâne pentru confirmarea unei mutații și testarea rudelor.</p>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Costul secvențierii unui genom uman, 2001–2022">
${(() => {
  const D = [[2001, 1e8], [2004, 2e7], [2007, 8e6], [2008, 3.4e5], [2010, 3e4], [2012, 7.5e3], [2015, 1.4e3], [2018, 1e3], [2020, 7e2], [2022, 5e2]];
  const X0 = 90, W = 600, Y0 = 220, H = 180, lx = (a) => X0 + (a - 2001) / 21 * W, ly = (v) => Y0 - (Math.log10(v) - 2) / 6 * H;
  let o = `<text x="20" y="22" class="ti b">Costul secvențierii unui genom uman (dolari americani, scară logaritmică)</text>`;
  [[1e2, "100"], [1e4, "10.000"], [1e6, "1 milion"], [1e8, "100 milioane"]].forEach(([v, t]) => (o += `<line x1="${X0}" y1="${ly(v)}" x2="${X0 + W}" y2="${ly(v)}" class="sm" stroke-dasharray="2 4" opacity=".5"/><text x="${X0 - 8}" y="${ly(v) + 4}" text-anchor="end" class="tm" style="font-size:11px">${t}</text>`));
  [2001, 2005, 2010, 2015, 2020].forEach((a) => (o += `<text x="${lx(a)}" y="${Y0 + 18}" text-anchor="middle" class="tm" style="font-size:11px">${a}</text>`));
  o += `<path d="${D.map(([a, v], i) => (i ? "L" : "M") + lx(a).toFixed(1) + " " + ly(v).toFixed(1)).join("")}" fill="none" class="sA" stroke-width="2.4"/>` + D.map(([a, v]) => `<circle cx="${lx(a)}" cy="${ly(v)}" r="4" class="fA"/>`).join("");
  o += `<line x1="${lx(2007.8)}" y1="${Y0}" x2="${lx(2007.8)}" y2="${Y0 - H}" class="sm" stroke-dasharray="4 3"/><text x="${lx(2007.8) + 6}" y="${Y0 - H + 12}" class="ta b" style="font-size:11.5px">apare NGS</text>`;
  o += `<text x="20" y="262" class="tm" style="font-size:11px">Valori rotunjite, după seria publicată de NHGRI (National Human Genome Research Institute).</text>`;
  return o;
})()}
</svg>
<figcaption><b>De la 100 de milioane la câteva sute de dolari</b> în două decenii: de aceea secvențierea a înlocuit aproape toate metodele de screening din acest capitol.</figcaption>
</figure>`
},
{
id: "cartografiere", titlu: "Cartografierea genomului: hărți genetice și fizice", pag: "143", emery: "cap. 4; cap. 8", acopera: ["lp11-r15"],
html: `
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Harta genetică și harta fizică ale aceluiași segment">
<text x="20" y="24" class="ti b">Același segment de cromozom, două unități de măsură</text>
${(() => {
  const M = [["M1", 0, 0], ["M2", 2, 1.2], ["genă", 3.5, 3.4], ["M3", 6, 4.6], ["M4", 9, 8]];
  let o = `<text x="20" y="74" class="ti b" style="font-size:12px">hartă genetică</text><text x="20" y="90" class="tm" style="font-size:11px">(cM, din recombinare)</text><line x1="150" y1="72" x2="710" y2="72" class="si" stroke-width="2"/>`;
  o += `<text x="20" y="164" class="ti b" style="font-size:12px">hartă fizică</text><text x="20" y="180" class="tm" style="font-size:11px">(Mb, din secvență)</text><line x1="150" y1="162" x2="710" y2="162" class="si" stroke-width="2"/>`;
  M.forEach(([n, g, f]) => { const xg = 150 + g / 9 * 560, xf = 150 + f / 8 * 560, c = n === "genă" ? "fT" : "fA"; o += `<circle cx="${xg}" cy="72" r="7" class="${c}"/><circle cx="${xf}" cy="162" r="7" class="${c}"/><line x1="${xg}" y1="80" x2="${xf}" y2="154" class="sm" stroke-dasharray="3 3"/><text x="${xg}" y="54" text-anchor="middle" class="ti b" style="font-size:11.5px">${n}</text><text x="${xg}" y="100" text-anchor="middle" class="tm" style="font-size:10.5px">${g} cM</text><text x="${xf}" y="190" text-anchor="middle" class="tm" style="font-size:10.5px">${f} Mb</text>`; });
  o += `<text x="20" y="222" class="tm" style="font-size:11px">Ordinea e aceeași; distanțele nu sunt proporționale, pentru că recombinarea are „puncte fierbinți”. Valori ilustrative.</text>`;
  return o;
})()}
</svg>
<figcaption><b>Harta genetică</b> se obține din analiza de înlănțuire (ordinea și distanța relativă, în cM). <b>Harta fizică</b> dă distanța reală, în baze (kb, Mb): la început prin FISH și clone suprapuse, azi direct din secvența genomului de referință. Schemă proprie.</figcaption>
</figure>
<p>Insulele CpG (regiuni bogate în CG, nemetilate, în fața multor gene) și EST-urile (fragmente scurte de ADNc, deci din gene exprimate) au fost folosite pentru a găsi rapid genele dintr-o regiune. Azi, adnotarea genomului de referință (GRCh38) face acest lucru direct.</p>`
},
{
id: "gene-arn", titlu: "Identificarea genelor și studiul ARN", pag: "144", emery: "cap. 8, p. 124–126", acopera: ["lp11-r17", "lp11-r18"], curs: ["c08/fc"],
html: `
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Clonarea funcțională și clonarea pozițională">${DEFS}
${(() => {
  const r = (y, t, pasi, cl) => `<text x="20" y="${y + 22}" class="ti b" style="font-size:12.5px">${t}</text>` + pasi.map((p, i) => `<rect x="${160 + i * 150}" y="${y}" width="136" height="44" rx="8" class="${cl}"/>${fo(166 + i * 150, y + 4, 124, 40, p, "color:var(--ink);font-size:11.5px")}` + (i < pasi.length - 1 ? sag(296 + i * 150, y + 22, 310 + i * 150, y + 22) : "")).join("");
  return r(20, "Funcțională", ["proteina deficitară e cunoscută", "secvența de aminoacizi", "sondă ADN (după codul genetic)", "gena și locusul ei"], "fas") +
    r(90, "Pozițională", ["familii afectate", "markeri care cosegregă", "regiunea cromozomială", "gena candidată → mutații"], "fis") +
    fo(20, 150, 730, 76, "Clonarea pozițională nu cere să știi nimic despre proteină: așa au fost găsite genele pentru <b>distrofia Duchenne</b> (1986) și <b>fibroza chistică</b> (<i>CFTR</i>, 1989). Azi, la un pacient cu boală rară, secvențierea exomului sau a genomului înlocuiește ambele strategii: se caută direct varianta cauzală.");
})()}
</svg>
<figcaption><b>Două strategii clasice</b>; cartea mai descrie o combinație „pozițional-funcțională”. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Câte gene avem</b><p>Cartea: „peste 25.000 de gene, aproximativ 5% din genom”. Estimarea actuală: <b>~19.000–20.000 de gene care codifică proteine</b>; secvențele codante (exonii traduși) reprezintă doar <b>~1–1,5%</b> din genom. Există în plus peste 20.000 de gene pentru ARN necodant.</p></div>
<p><b>Studiul ARN</b> arată expresia genelor: <b>RT-PCR</b> (ARN → ADNc prin revers-transcriptază, apoi PCR), <b>Northern blotting</b> (ARN pe membrană + sondă) și, azi, <b>RNA-seq</b>. ARN-ul e greu de lucrat: ARN-azele sunt omniprezente și îl degradează rapid. În diagnostic, analiza ARN confirmă efectul variantelor care pot afecta matisarea (<i>splicing</i>).</p>`
},
{
id: "aplicatii", titlu: "Aplicații practice: patru probleme de interpretare", pag: "145–148", emery: "cap. 4", acopera: [],
html: `
<h3>Problema 1: citește secvența</h3>
<p>Gelul din secțiunea <a href="#/lp11/secventiere">Secvențierea ADN</a> e cel din carte (exonul 5 al genei <i>LPL</i>, lipoprotein-lipaza). Stabilește secvența de nucleotide și aminoacizii codificați.</p>
<details class="q"><summary>Soluția</summary><div>Citind de jos în sus: <b>5′-CGG GTA AAT GTC AA-3′</b> (14 baze). Dacă fragmentul citit e chiar catena codantă și primul nucleotid începe un codon: CGG = <b>Arg</b>, GTA = <b>Val</b>, AAT = <b>Asn</b>, GTC = <b>Val</b>, iar „AA” e un codon incomplet. În realitate, cadrul de citire se stabilește din secvența exonului precedent, deci rezultatul depinde de această presupunere.</div></details>
<h3>Problema 2: fibroza chistică, PCR și electroforeză</h3>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Arbore și gel pentru familia cu fibroză chistică">
${(() => {
  const P = [["I/1", 140, 50, "M", "h"], ["I/2", 220, 50, "F", "h"], ["II/1", 90, 130, "M", "h"], ["II/2", 180, 130, "F", "a"], ["II/3", 270, 130, "M", ""], ["II/4", 340, 130, "F", ""]];
  let o = `<line x1="151" y1="50" x2="209" y2="50" class="si" stroke-width="1.4"/><line x1="180" y1="50" x2="180" y2="94" class="si" stroke-width="1.4"/><line x1="90" y1="94" x2="270" y2="94" class="si" stroke-width="1.4"/>`;
  [90, 180, 270].forEach((x) => (o += `<line x1="${x}" y1="94" x2="${x}" y2="119" class="si" stroke-width="1.4"/>`));
  o += `<line x1="281" y1="130" x2="329" y2="130" class="si" stroke-width="1.4"/><line x1="305" y1="130" x2="305" y2="178" class="si" stroke-width="1.4"/><path d="M305 178 L318 192 L305 206 L292 192z" class="fcard si" stroke-width="1.4" stroke-dasharray="3 2"/><text x="326" y="196" class="tm" style="font-size:11px">sarcină</text>`;
  P.forEach(([id, x, y, s, st]) => { const f = st === "a" ? "fP" : "fcard"; o += s === "M" ? `<rect x="${x - 11}" y="${y - 11}" width="22" height="22" class="${f} si" stroke-width="1.5"/>` : `<circle cx="${x}" cy="${y}" r="11" class="${f} si" stroke-width="1.5"/>`; if (st === "h") o += s === "M" ? `<rect x="${x - 11}" y="${y - 11}" width="11" height="22" class="fP"/>` : `<path d="M${x} ${y - 11}A11 11 0 0 0 ${x} ${y + 11}z" class="fP"/>`; o += `<text x="${x}" y="${y + 28}" text-anchor="middle" class="tm" style="font-size:10.5px">${id}</text>`; });
  o += `<text x="40" y="54" class="ti b">I</text><text x="40" y="134" class="ti b">II</text>`;
  // gel, ordinea coloanelor din carte
  const G = [["II/1", 1, 1], ["I/1", 1, 1], ["II/2", 0, 1], ["I/2", 1, 1], ["II/3", 1, 0], ["II/4", 1, 0]];
  o += `<rect x="420" y="30" width="330" height="170" rx="4" class="fline"/><text x="414" y="84" text-anchor="end" class="tm" style="font-size:11px">50 bp</text><text x="414" y="154" text-anchor="end" class="tm" style="font-size:11px">47 bp</text>`;
  G.forEach(([id, n, m], i) => { const x = 450 + i * 54; if (n) o += banda(x, 80, 40, "fA"); if (m) o += banda(x, 150, 40, "fT"); o += `<text x="${x}" y="220" text-anchor="middle" class="ti b" style="font-size:11.5px">${id}</text>`; });
  o += `<rect x="420" y="240" width="12" height="12" rx="3" class="fA"/><text x="438" y="250" class="ti" style="font-size:11.5px">alela normală (50 bp)</text><rect x="590" y="240" width="12" height="12" rx="3" class="fT"/><text x="608" y="250" class="ti" style="font-size:11.5px">F508del (47 bp)</text>`;
  o += `<text x="20" y="290" class="tm" style="font-size:11px">Genotipurile din arbore sunt deduse din gel. Coloanele, în ordinea din carte.</text>`;
  return o;
})()}
</svg>
<figcaption><b>Fragmentul PCR din exonul cu F508del</b>: deleția a 3 baze scurtează produsul de la 50 la 47 bp, deci alelele se separă direct pe gel. Redesenat după carte.</figcaption>
</figure>
<details class="q"><summary>a) și b) Comentează arborele și stabilește genotipurile</summary><div>II/2 are doar banda de 47 bp: <b>homozigotă F508del</b>, bolnavă. Părinții I/1 și I/2 au ambele benzi: <b>heterozigoți</b>, purtători sănătoși, cum e de așteptat la o boală AR. II/1 e și el <b>purtător</b>. II/3 și soția lui II/4 au doar banda de 50 bp: <b>homozigoți normali</b> pentru F508del.</div></details>
<details class="q"><summary>c) Sfatul genetic pentru cuplul II/3 × II/4, cu sarcină în curs</summary><div>II/3 nu a moștenit mutația familiei, deci nu e purtător. Riscul pentru făt e practic <b>zero</b>. Un risc rezidual foarte mic rămâne pentru că testul caută doar F508del: II/4 (și teoretic II/3) ar putea purta altă mutație <i>CFTR</i>; boala ar cere însă ca amândoi să fie purtători, deci riscul e neglijabil. Diagnostic prenatal nu e indicat.</div></details>
<div class="capcana"><b>Precizări la enunț</b><p>„O deleție în exonul 10 (50 bp) care determină ΔF508 (47 bp)” descrie de fapt <b>mărimile produselor PCR</b>: mutația este deleția a <b>3 nucleotide</b> (CTT), care elimină fenilalanina 508. Denumirea actuală: c.1521_1523del, p.Phe508del, în exonul 11 după numerotarea actuală (exonul 10 în cea veche). Frecvența ei variază: ~70% din alelele <i>CFTR</i> în nord-vestul Europei, mai puțin în sud-estul Europei, inclusiv în România.</p></div>
<h3>Problema 3: ASO în siclemie</h3>
<figure>
<svg viewBox="0 0 760 180" role="img" aria-label="Rezultatul ASO pentru cinci persoane">
${(() => {
  const R = [[0, 1], [1, 1], [0, 1], [1, 1], [1, 0]];
  let o = `<text x="210" y="50" text-anchor="end" class="ti b" style="font-size:12px">alela normală</text><text x="210" y="110" text-anchor="end" class="ti b" style="font-size:12px">alela mutantă (Glu6Val)</text>`;
  R.forEach(([n, m], i) => { const x = 270 + i * 100; o += `<circle cx="${x}" cy="46" r="20" class="${n ? "fP" : "fline"}"/><circle cx="${x}" cy="106" r="20" class="${m ? "fP" : "fline"}"/><text x="${x}" y="160" text-anchor="middle" class="ti b">${i + 1}</text>`; });
  return o;
})()}
</svg>
<figcaption><b>Dot blot ASO</b>, redesenat după carte.</figcaption>
</figure>
<details class="q"><summary>Interpretează rezultatul pentru cele 5 persoane</summary><div>1 și 3: doar sonda mutantă → <b>homozigoți HbSS</b>, siclemie. 2 și 4: ambele sonde → <b>heterozigoți HbAS</b>, purtători (trăsătura siclemică). 5: doar sonda normală → <b>homozigot normal HbAA</b>. Notă: Glu6Val e numerotarea tradițională; numerotarea HGVS, care include metionina inițială, este p.Glu7Val (c.20A&gt;T în gena <i>HBB</i>).</div></details>
<h3>Problema 4: amprenta ADN într-un caz de viol</h3>
<figure>
<svg viewBox="0 0 760 320" role="img" aria-label="Comparația benzilor VNTR între probă, victimă și doi suspecți">
${(() => {
  // pozițiile măsurate pe scanarea cărții (pixeli, de sus în jos)
  const C = [["Proba", [260, 288, 356, 424, 464, 545, 572, 599, 626, 707]], ["Victima", [288, 383, 464, 504, 586, 666]], ["Suspect 1", [329, 356, 383, 451, 491, 518, 545, 626, 734]], ["Suspect 2", [265, 296, 356, 419, 465, 531, 559, 585, 612, 707]]];
  const y = (p) => 40 + (p - 250) * 0.52;
  let o = "";
  C.forEach(([t, b], i) => { const x = 100 + i * 120; o += `<text x="${x}" y="24" text-anchor="middle" class="ti b" style="font-size:12px">${t}</text><rect x="${x - 36}" y="32" width="72" height="262" rx="3" class="fline"/>` + b.map((p) => banda(x, y(p), 56, i === 0 ? "fP" : i === 1 ? "fA" : "fT", 6)).join(""); });
  o += fo(560, 30, 190, 280, "Proba e un amestec: benzile comune cu victima (2 și 5 de sus) vin de la ea. <b>Suspectul 2</b> are toate celelalte benzi ale probei; suspectul 1 doar trei. Grupul de patru benzi din mijloc e ușor decalat la suspectul 2 în desenul din carte (imprecizie de desen, de ~1 lățime de bandă).");
  return o;
})()}
</svg>
<figcaption><b>Pozițiile benzilor</b>, măsurate pe figura din carte și redesenate la scară.</figcaption>
</figure>
<details class="q"><summary>Care suspect a comis fapta?</summary><div><b>Suspectul 2</b>: benzile lui explică toate benzile probei care nu provin de la victimă. Suspectul 1 e exclus: multe dintre benzile lui lipsesc din probă. În practică se separă întâi ADN-ul spermatozoizilor de cel al celulelor victimei (extracție diferențială), se compară profile STR, iar o potrivire se raportează cu probabilitatea unei potriviri întâmplătoare în populație.</div></details>`
}
]
});
})();
