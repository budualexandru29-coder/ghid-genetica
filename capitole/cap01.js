/* Capitolul 1 — Structura ADN (curs p. 5–18). Fiecare secțiune declară rândurile de inventar pe care le acoperă. */
GHID.capitol({
id: "c01",
intro: `<p class="lead">Capitolul urcă pe o singură scară: nucleotid → catenă → dublu helix → nucleozom → cromozom. La fiecare treaptă întreabă-te ce leagă piesele între ele și ce proprietate nouă apare. Aproape toate cifrele de examen din capitol sunt răspunsuri la aceste două întrebări.</p>
<div class="cheie"><b>Harta capitolului</b><p>Structura <b>primară</b> = ordinea nucleotidelor pe o catenă (legături fosfodiesterice). Structura <b>secundară</b> = două catene complementare, antiparalele (punți de hidrogen). Structura <b>terțiară</b> = ADN + histone, împachetat succesiv până la cromozom.</p></div>`,

sectiuni: [
{
id: "primara", titlu: "Nucleotidul și structura primară", pag: "5–7", emery: "cap. 2, p. 11", acopera: ["c01-r01", "c01-r02"],
html: `
<p>ADN-ul este un <b>macropolimer liniar</b> de unități deoxiribonucleotidice. Cursul îi dă trei roluri: <b>stocarea</b>, <b>transmiterea</b> și <b>exprimarea</b> informației ereditare. Cantitatea de ADN este constantă la indivizii aceleiași specii, diferită între specii și invariabilă în celulele somatice diploide ale unui individ.</p>

<h3>Cele trei piese ale unui deoxiribonucleotid</h3>
<div class="tw"><table>
<tr><th>Piesă</th><th>Ce este</th><th>Unde se leagă</th><th>Variabilă?</th></tr>
<tr><td><b>Bază azotată</b></td><td>Purine (două heterocicluri): adenină A, guanină G. Pirimidine (un heterociclu): timină T, citozină C.</td><td>La carbonul <b>1′</b> al deoxiribozei</td><td><b>Da</b>: singura parte variabilă</td></tr>
<tr><td><b>Glucid</b></td><td>D-2-deoxiriboză, pentoză în formă furanozică</td><td>—</td><td>Nu</td></tr>
<tr><td><b>Grupare fosforică</b></td><td>Rest de acid ortofosforic. Dă caracterul de „acid” și sarcina negativă.</td><td>La carbonul <b>5′</b> al deoxiribozei</td><td>Nu</td></tr>
</table></div>
<p><b>Nucleozid</b> = bază + deoxiriboză. <b>Nucleotid</b> = nucleozid + fosfat. Există patru deoxiribonucleotide: acid deoxiadenilic, deoxiguanilic, deoxicitidilic și deoxitimidilic. Sarcinile negative ale fosfaților sunt neutralizate în celulă de proteine bazice, <b>histonele</b>.</p>

<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Două nucleotide legate fosfodiesteric">
<defs><marker id="sg1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<!-- nucleotid 1 -->
<circle cx="150" cy="60" r="22" class="fP"/><text x="150" y="65" text-anchor="middle" fill="#fff" class="b">P</text>
<line x1="165" y1="76" x2="205" y2="104" class="si" stroke-width="2"/>
<polygon points="250,95 300,125 282,180 218,180 200,125" class="fZ"/><text x="250" y="150" text-anchor="middle" class="ti b">deoxiriboză</text>
<text x="184" y="120" text-anchor="end" class="ta b">5′</text><text x="308" y="120" class="ta b">1′</text><text x="262" y="198" text-anchor="end" class="ta b">3′</text>
<line x1="300" y1="125" x2="380" y2="125" class="si" stroke-width="2"/>
<rect x="380" y="103" width="170" height="44" rx="8" class="fA"/><text x="465" y="130" text-anchor="middle" fill="#fff" class="b">Adenină (purină)</text>
<!-- legatura fosfodiesterica -->
<line x1="222" y1="180" x2="158" y2="216" class="sa" stroke-width="3"/>
<circle cx="150" cy="230" r="22" class="fP"/><text x="150" y="235" text-anchor="middle" fill="#fff" class="b">P</text>
<line x1="165" y1="246" x2="205" y2="262" class="sa" stroke-width="3"/>
<polygon points="250,250 300,275 282,318 218,318 200,275" class="fZ"/>
<text x="184" y="290" text-anchor="end" class="ta b">5′</text><text x="308" y="272" class="ta b">1′</text><text x="214" y="328" text-anchor="end" class="ta b">3′-OH liber</text>
<line x1="300" y1="275" x2="380" y2="275" class="si" stroke-width="2"/>
<rect x="380" y="253" width="170" height="44" rx="8" class="fC"/><text x="465" y="280" text-anchor="middle" class="b" fill="#1f2a37">Citozină (pirimidină)</text>
<text x="100" y="42" text-anchor="end" class="ti b">capăt 5′-fosfat</text>
<text x="40" y="212" class="ta b">legătură</text><text x="40" y="228" class="ta b">3′–5′</text><text x="40" y="244" class="ta b">fosfodiester</text>
<line x1="600" y1="50" x2="600" y2="300" class="si" stroke-width="2.5" marker-end="url(#sg1)"/>
<text x="614" y="60" class="ti b">5′</text><text x="614" y="300" class="ti b">3′</text>
<text x="614" y="165" class="tm">sensul de citire</text><text x="614" y="183" class="tm">și de scriere:</text><text x="614" y="201" class="ti b">5′ → 3′</text>
<text x="614" y="225" class="tm">(de la stânga,</text><text x="614" y="243" class="tm">începând cu 5′)</text>
</svg>
<figcaption><b>Schelet invariabil, baze variabile.</b> Axul catenei este alternanța deoxiriboză–fosfat. Bazele se prind lateral, perpendicular pe ax, la C1′. Pe aceeași catenă bazele nu se leagă niciodată între ele. Schemă proprie după descrierea din curs (p. 6).</figcaption>
</figure>

<h3>Cum se leagă nucleotidele și de unde vine polaritatea</h3>
<p>Nucleotidele aceleiași catene se unesc prin <b>legături covalente 3′–5′ fosfodiester</b>: hidroxilul de la C3′ al unei deoxiriboze se leagă de fosfatul fixat la C5′ al nucleotidului următor. Rezultă o catenă <b>liniară, neramificată, polarizată</b>. Aceasta este structura primară.</p>
<p>La capete rămân două poziții neangajate: <b>5′-fosfat</b> la primul nucleotid și <b>3′-hidroxil</b> la ultimul. Ele dau polaritatea <b>5′→3′</b> și impun sensul de citire. Informația genetică este chiar ordinea nucleotidelor de-a lungul catenei, care stabilește ordinea aminoacizilor în proteine.</p>

<div class="capcana"><b>Capcană de examen</b><p>Caracterul <b>acid</b> vine de la fosfat, nu de la baze. Bazele sunt „azotate” și hidrofobe. Histonele sunt <b>bazice</b> tocmai pentru că trebuie să neutralizeze fosfații.</p></div>

<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Care este diferența dintre un nucleozid și un nucleotid și la ce carbon se leagă fiecare componentă?</summary><div>Nucleozid = bază azotată + D-2-deoxiriboză, legate la C1′. Nucleotid = nucleozid + grupare fosforică legată la C5′.</div></details>
<details class="q"><summary>De ce are o catenă de ADN polaritate?</summary><div>Pentru că legăturile fosfodiester unesc C3′ al unui glucid de C5′ al următorului, deci cele două capete nu sunt echivalente: unul are un 5′-fosfat liber, celălalt un 3′-OH liber.</div></details>
<details class="q"><summary>Secvența 5′-ATGC-3′: care nucleotid are fosfatul liber și care hidroxilul liber?</summary><div>A are 5′-fosfatul liber (primul nucleotid), C are 3′-OH liber (ultimul). Secvența se scrie de la stânga, începând cu capătul 5′.</div></details>
<details class="q"><summary>Ce parte a moleculei poartă informația și ce parte e identică la toate nucleotidele?</summary><div>Informația o poartă ordinea bazelor azotate (partea variabilă). Deoxiriboza și fosfatul sunt partea invariabilă și formează axul fosfoglucidic.</div></details>
</div>`
},

{
id: "secundara", titlu: "Dublul helix: structura secundară", pag: "7–8", emery: "cap. 2, p. 11 (Fig. 2.2)", acopera: ["c01-r03"],
html: `
<p>În 1953, Watson și Crick, pe baza difracției cu raze X, propun modelul spațial al ADN: <b>două catene</b> unite complementar prin baze, înfășurate <b>plectonemic</b> (una în jurul celeilalte și împreună în jurul unui ax imaginar), formând un <b>dublu helix orientat spre dreapta</b>.</p>

<h3>Complementaritatea și rapoartele lui Chargaff</h3>
<p>Analiza chimică arată că <span class="mono">(A+G)/(T+C) = 1</span>, adică purinele sunt mereu egale cu pirimidinele. În schimb, <span class="mono">(A+T)/(G+C) ≠ 1</span> și este o caracteristică de specie: la om este <b>1,7</b>. Explicația este împerecherea preferențială purină–pirimidină prin <b>punți de hidrogen</b> (legături electrostatice slabe):</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Împerecherea bazelor și antiparalelismul">
<defs><marker id="sg2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="150" y="30" width="16" height="240" rx="8" class="fZ"/><rect x="594" y="30" width="16" height="240" rx="8" class="fZ"/>
<line x1="120" y1="40" x2="120" y2="260" class="si" stroke-width="2" marker-end="url(#sg2)"/><text x="112" y="46" text-anchor="end" class="ti b">5′</text><text x="112" y="262" text-anchor="end" class="ti b">3′</text>
<line x1="640" y1="260" x2="640" y2="40" class="si" stroke-width="2" marker-end="url(#sg2)"/><text x="650" y="262" class="ti b">5′</text><text x="650" y="46" class="ti b">3′</text>
<g>
<rect x="166" y="45" width="190" height="36" rx="6" class="fA"/><text x="261" y="68" text-anchor="middle" fill="#fff" class="b">A · purină</text>
<rect x="424" y="45" width="170" height="36" rx="6" class="fT"/><text x="509" y="68" text-anchor="middle" fill="#fff" class="b">T · pirimidină</text>
<line x1="360" y1="56" x2="420" y2="56" class="si" stroke-width="2" stroke-dasharray="4 4"/><line x1="360" y1="70" x2="420" y2="70" class="si" stroke-width="2" stroke-dasharray="4 4"/>
<rect x="166" y="105" width="190" height="36" rx="6" class="fG"/><text x="261" y="128" text-anchor="middle" fill="#fff" class="b">G · purină</text>
<rect x="424" y="105" width="170" height="36" rx="6" class="fC"/><text x="509" y="128" text-anchor="middle" fill="#1f2a37" class="b">C · pirimidină</text>
<line x1="360" y1="113" x2="420" y2="113" class="si" stroke-width="2" stroke-dasharray="4 4"/><line x1="360" y1="123" x2="420" y2="123" class="si" stroke-width="2" stroke-dasharray="4 4"/><line x1="360" y1="133" x2="420" y2="133" class="si" stroke-width="2" stroke-dasharray="4 4"/>
<rect x="166" y="165" width="170" height="36" rx="6" class="fT"/><text x="251" y="188" text-anchor="middle" fill="#fff" class="b">T</text>
<rect x="404" y="165" width="190" height="36" rx="6" class="fA"/><text x="499" y="188" text-anchor="middle" fill="#fff" class="b">A</text>
<line x1="340" y1="176" x2="400" y2="176" class="si" stroke-width="2" stroke-dasharray="4 4"/><line x1="340" y1="190" x2="400" y2="190" class="si" stroke-width="2" stroke-dasharray="4 4"/>
<rect x="166" y="225" width="170" height="36" rx="6" class="fC"/><text x="251" y="248" text-anchor="middle" fill="#1f2a37" class="b">C</text>
<rect x="404" y="225" width="190" height="36" rx="6" class="fG"/><text x="499" y="248" text-anchor="middle" fill="#fff" class="b">G</text>
<line x1="340" y1="233" x2="400" y2="233" class="si" stroke-width="2" stroke-dasharray="4 4"/><line x1="340" y1="243" x2="400" y2="243" class="si" stroke-width="2" stroke-dasharray="4 4"/><line x1="340" y1="253" x2="400" y2="253" class="si" stroke-width="2" stroke-dasharray="4 4"/>
</g>
<text x="380" y="22" text-anchor="middle" class="tm">A=T: 2 punți de hidrogen · G≡C: 3 punți de hidrogen</text>
<text x="380" y="292" text-anchor="middle" class="tm">O purină (lată) stă mereu în fața unei pirimidine (îngustă): lățimea helixului rămâne constantă.</text>
</svg>
<figcaption><b>Complementare și antiparalele.</b> Secvența unei catene o determină complet pe cealaltă: catenele sunt <i>codeterminate</i>, nu identice. Schemă proprie după curs (p. 7–8) și Emery Fig. 2.2.</figcaption>
</figure>
<p>Consecința practică: dacă știi o catenă, o poți scrie pe cealaltă. Cursul subliniază că <b>transcripția, replicarea, recombinarea și repararea</b> sunt posibile numai datorită legii complementarității. În schimb, nicio regulă nu dictează ordinea nucleotidelor <i>de-a lungul</i> unei catene.</p>

<h3>Parametrii formei B (de memorat exact)</h3>
<figure><img src="fig/c01_helix_pdb.svg" alt="ADN-B și ADN-Z din coordonate PDB">
<figcaption><b>Helixul real, nu desenat.</b> Fiecare punct este un atom din structura cristalografică. Distanța măsurată între atomii de fosfor de pe laturi opuse este 2,0 nm, exact diametrul din curs. Bazele (colorate) stau în interior, scheletul fosfoglucidic (gri, violet) în exterior.</figcaption></figure>
<div class="tw"><table>
<tr><th>Caracteristică a ADN-B</th><th>Valoare în curs</th></tr>
<tr><td>Sens de răsucire</td><td>dextrogir (spre dreapta), structură perfect regulată</td></tr>
<tr><td>Diametru</td><td><b>20 Å (2 nm)</b></td></tr>
<tr><td>Pasul elicei</td><td><b>34 Å (3,4 nm)</b></td></tr>
<tr><td>Perechi de baze pe tur</td><td><b>10</b></td></tr>
<tr><td>Rotația între perechi vecine</td><td><b>36°</b> (360° / 10)</td></tr>
<tr><td>Incizura <b>mare</b></td><td>loc de fixare a proteinelor reglatoare ale transcripției și translației</td></tr>
<tr><td>Incizura <b>mică</b></td><td>loc de fixare a histonelor, cu rol de stabilizare</td></tr>
</table></div>
<p>Cifrele se țin minte împreună: 10 perechi pe tur × 0,34 nm între perechi = 3,4 nm pasul; 360° / 10 = 36°.</p>

<div class="capcana"><b>Formulare din curs de citit cu atenție</b><p>Cursul numește „catena sens” cea polimerizată 5′→3′ și „catena antisens” cea polimerizată 3′→5′. Sensul corect al ideii este că cele două catene sunt <b>orientate invers</b> una față de alta (antiparalele). Nicio polimerază nu sintetizează în direcția 3′→5′, lucru pe care cursul însuși îl afirmă la replicare (p. 11).</p></div>
<div class="emery"><b>Curs vs. Emery</b><p>Emery (cap. 2) descrie aceeași structură, dar fără parametrii numerici ai helixului. Cifrele de mai sus (10 pb/tur, 3,4 nm, 36°) sunt valorile clasice ale modelului Watson–Crick și sunt cele cerute de curs. Măsurătorile în soluție dau aproximativ 10,5 pb/tur; la examen folosește valorile din curs.</p></div>

<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Scrie catena complementară pentru 5′-ATGCCG-3′, cu polaritate.</summary><div>3′-TACGGC-5′, adică, scrisă convențional de la 5′: <b>5′-CGGCAT-3′</b>. Complementaritatea dă bazele, antiparalelismul dă orientarea.</div></details>
<details class="q"><summary>Un ADN dublu catenar conține 20% adenină. Cât la sută este guanină?</summary><div>A = T = 20%, deci A+T = 40%. Rămân 60% pentru G+C, iar G = C = <b>30%</b>.</div></details>
<details class="q"><summary>De ce raportul (A+G)/(T+C) este 1 la orice specie, dar (A+T)/(G+C) nu?</summary><div>Primul rezultă direct din împerechere: fiecare purină are în față o pirimidină. Al doilea depinde de câte perechi A=T și câte G≡C conține genomul, ceea ce diferă între specii (la om 1,7, deci genom mai bogat în A=T).</div></details>
<details class="q"><summary>Ce se leagă în incizura mare și ce se leagă în incizura mică, după curs?</summary><div>Incizura mare: proteinele reglatoare (nehistonice). Incizura mică: histonele.</div></details>
</div>`
},

{
id: "polimorfism", titlu: "Polimorfismul structurii ADN: formele A, B, Z", pag: "8–9", emery: "", acopera: ["c01-r04"],
html: `
<p>Forma B este cea descrisă de Watson și Crick și cea care <b>predomină în condiții fiziologice</b>. Există și alte conformații, toate cu structură de elice dublă; ele diferă prin pasul elicei și numărul de nucleotide pe tur.</p>
<div class="tw"><table>
<tr><th>Formă</th><th>Sens</th><th>Aspect față de B</th></tr>
<tr><td><b>A</b></td><td>dreapta</td><td>mai <b>groasă și mai scurtă</b></td></tr>
<tr><td><b>B</b></td><td>dreapta</td><td>referința; forma fiziologică</td></tr>
<tr><td><b>C, D, E</b></td><td>dreapta</td><td>mai <b>subțiri și mai lungi</b></td></tr>
<tr><td><b>Z</b></td><td><b>stânga</b></td><td>dublu catenară, elicoidală; tip particular</td></tr>
</table></div>
<p>Forma B se poate transforma în A sau în Z, iar transformarea este <b>reversibilă</b>. În figura din secțiunea anterioară, panoul din dreapta arată un fragment de ADN-Z real: scheletul nu mai urcă lin, ci în zigzag, de unde și numele.</p>
<div class="cheie"><b>De reținut</b><p>O singură formă este levogiră: <b>Z</b>. Toate celelalte (A, B, C, D, E) sunt dextrogire.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Care formă de ADN este orientată spre stânga?</summary><div>Forma Z. Toate celelalte forme descrise în curs sunt orientate spre dreapta.</div></details>
<details class="q"><summary>Cum diferă forma A de formele C, D, E, raportat la B?</summary><div>A este mai groasă și mai scurtă; C, D și E sunt mai subțiri și mai lungi.</div></details>
<details class="q"><summary>Este trecerea B → Z definitivă?</summary><div>Nu. Cursul precizează că transformarea formei B în A sau Z este reversibilă.</div></details>
</div>`
},

{
id: "proprietati", titlu: "Proprietăți fizice și chimice: UV, denaturare, renaturare, hibridizare", pag: "9–10", emery: "cap. 2, p. 12; cap. 5", acopera: ["c01-r05", "c01-r06"],
html: `
<h3>Absorbția razelor ultraviolete</h3>
<p>Bazele azotate absorb UV, ceea ce înseamnă risc mutagen. Riscul maxim este la lungimea de undă de <b>260 nm</b>. Leziunea caracteristică este <b>dimerul de timină</b>: două pirimidine vecine de pe <i>aceeași</i> catenă se leagă între ele (legături <b>intracatenare</b>). Leziunea este recunoscută și reparată prin <b>NER</b> (nucleotide excision repair), mecanism reluat în capitolul 5.</p>

<h3>Denaturarea</h3>
<p>Denaturarea este desfacerea parțială sau totală a celor două catene. In vitro, cea mai folosită este denaturarea termică („topire”). <b>Temperatura de topire (Tm)</b> este temperatura la care <b>jumătate</b> din ADN-ul dublu catenar este denaturat.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Curbe de topire">
<line x1="90" y1="250" x2="700" y2="250" class="si" stroke-width="1.5"/><line x1="90" y1="250" x2="90" y2="30" class="si" stroke-width="1.5"/>
<text x="395" y="288" text-anchor="middle" class="tm">temperatură →</text>
<text x="30" y="140" class="tm" transform="rotate(-90 30 140)" text-anchor="middle">% ADN denaturat</text>
<text x="82" y="254" text-anchor="end" class="tm">0</text><text x="82" y="144" text-anchor="end" class="tm">50</text><text x="82" y="44" text-anchor="end" class="tm">100</text>
<line x1="90" y1="140" x2="700" y2="140" class="sm" stroke-dasharray="3 5"/>
<path d="M90 248 C250 248 270 245 310 140 C350 35 380 34 700 34" fill="none" class="sT" stroke-width="3"/>
<path d="M90 248 C400 248 420 245 460 140 C500 35 530 34 700 34" fill="none" class="sG" stroke-width="3"/>
<line x1="310" y1="140" x2="310" y2="250" class="sT" stroke-dasharray="4 4"/><line x1="460" y1="140" x2="460" y2="250" class="sG" stroke-dasharray="4 4"/>
<text x="310" y="268" text-anchor="middle" class="ti b">Tm mai mică</text><text x="460" y="268" text-anchor="middle" class="ti b">Tm mai mare</text>
<text x="230" y="110" text-anchor="middle" class="ti">ADN bogat în A=T</text><text x="230" y="127" text-anchor="middle" class="tm">(2 punți / pereche)</text>
<text x="560" y="110" text-anchor="middle" class="ti">ADN bogat în G≡C</text><text x="560" y="127" text-anchor="middle" class="tm">(3 punți / pereche)</text>
</svg>
<figcaption><b>De ce contează conținutul în G≡C.</b> Trei punți de hidrogen pe pereche cer mai multă energie pentru a fi rupte decât două, deci un ADN cu multe perechi G≡C se topește la temperatură mai mare. Curbe schematice, nu date măsurate.</figcaption>
</figure>

<h3>Renaturarea și hibridizarea</h3>
<div class="tw"><table>
<tr><th>Proces</th><th>Ce se întâmplă</th><th>De ce depinde</th></tr>
<tr><td><b>Renaturare</b></td><td>Reasocierea celor două monocatene. Întâi <b>nucleație</b>, apoi asociere rapidă a bazelor.</td><td>Doar de gradul de complementaritate, <b>nu</b> de sursa monocatenelor</td></tr>
<tr><td><b>Hibridizare</b></td><td>Renaturare între secvențe de <b>origine diferită</b>. Rezultă hibrizi ADN–ADN, ADN–ARN, ARN–ARN.</td><td>Stabilitatea depinde de gradul de complementaritate</td></tr>
</table></div>
<div class="exemplu"><b>La ce folosește</b><p>Hibridizarea este principiul din spatele sondelor și al tehnicilor de diagnostic molecular (PCR, FISH, microarray): o secvență cunoscută, marcată, își găsește singură perechea complementară. Emery le descrie în capitolul 5.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Definește Tm și spune ce o crește.</summary><div>Temperatura la care jumătate din ADN-ul dublu catenar este denaturat. O crește un număr mare de perechi G≡C.</div></details>
<details class="q"><summary>Ce leziune produce UV, la ce lungime de undă e riscul maxim și ce mecanism o repară?</summary><div>Dimeri de timină (între două pirimidine vecine, pe aceeași catenă), risc maxim la 260 nm, reparare prin NER.</div></details>
<details class="q"><summary>Dimerul de timină leagă cele două catene între ele?</summary><div>Nu. Este o legătură intracatenară, între pirimidine vecine de pe aceeași catenă.</div></details>
<details class="q"><summary>Care este singura diferență dintre renaturare și hibridizare?</summary><div>Originea catenelor: la renaturare se reunesc catenele inițiale; la hibridizare se asociază secvențe de origine diferită. Ambele respectă complementaritatea.</div></details>
</div>`
},

{
id: "replicare", titlu: "Replicarea ADN", pag: "10–12", emery: "cap. 2, p. 11–12 (Fig. 2.3)", acopera: ["c01-r07"],
html: `
<p>Replicarea este sinteza unei noi molecule de ADN, identică cu cea inițială. Trebuie să fie <b>completă și fidelă</b>. Subcapitolul nu apare în cuprinsul cărții, dar ocupă trei pagini și conține multe detalii de grilă.</p>
<h3>Etape</h3>
<ol><li>apariția <b>furcii de replicare</b> (structură în Y, cu catenele parentale separate și stabilizate);</li><li>inițierea;</li><li>elongarea în direcția 5′→3′, prin sinteză complementară;</li><li>terminarea;</li><li>alăturarea catenelor.</li></ol>

<figure>
<svg viewBox="0 0 760 380" role="img" aria-label="Furca de replicare">
<defs>
<marker id="sg3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="tok"/></marker>
<marker id="sg4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="tw2"/></marker>
</defs>
<!-- parental -->
<path d="M720 180 H470" fill="none" class="si" stroke-width="4"/><path d="M720 200 H470" fill="none" class="si" stroke-width="4"/>
<path d="M470 180 L60 70" fill="none" class="si" stroke-width="4"/><path d="M470 200 L60 310" fill="none" class="si" stroke-width="4"/>
<text x="728" y="176" class="ti b">3′</text><text x="728" y="212" class="ti b">5′</text>
<text x="44" y="66" text-anchor="end" class="ti b">5′</text><text x="44" y="318" text-anchor="end" class="ti b">3′</text>
<!-- leading: matrita de jos (3' la stanga... ) -->
<path d="M90 318 L440 224" fill="none" class="sok" stroke-width="4" marker-end="url(#sg3)"/>
<text x="300" y="312" class="tok b">catena directoare: sinteză continuă 5′→3′</text>
<!-- lagging -->
<path d="M430 153 L330 126" fill="none" class="sw" stroke-width="4" marker-end="url(#sg4)"/>
<path d="M310 121 L210 94" fill="none" class="sw" stroke-width="4" marker-end="url(#sg4)"/>
<path d="M190 89 L90 62" fill="none" class="sw" stroke-width="4" marker-end="url(#sg4)"/>
<circle cx="432" cy="154" r="6" class="fT"/><circle cx="312" cy="122" r="6" class="fT"/><circle cx="192" cy="90" r="6" class="fT"/>
<text x="150" y="40" class="tw2 b">catena în întârziere: fragmente Okazaki (~200 nucleotide)</text>
<circle cx="560" cy="52" r="6" class="fT"/><text x="574" y="57" class="ti">amorsă de ARN (primază)</text>
<!-- enzime -->
<ellipse cx="482" cy="190" rx="26" ry="20" class="fas"/><text x="482" y="194" text-anchor="middle" class="ta b">helicază</text>
<ellipse cx="610" cy="190" rx="44" ry="18" class="fis"/><text x="610" y="194" text-anchor="middle" class="tin b">topoizomerază</text>
<text x="500" y="246" text-anchor="middle" class="tm">rupe punțile de H</text>
<text x="630" y="150" text-anchor="middle" class="tm">detensionează, în amonte</text>
<g><circle cx="380" cy="166" r="5" class="fZ"/><circle cx="350" cy="158" r="5" class="fZ"/><circle cx="260" cy="134" r="5" class="fZ"/><circle cx="140" cy="102" r="5" class="fZ"/></g>
<text x="330" y="186" class="tm">proteine SSB</text>
<text x="252" y="76" text-anchor="middle" class="ti b">ligază</text><line x1="252" y1="80" x2="258" y2="102" class="sm"/>
<text x="600" y="262" class="ti">furca înaintează →</text>
<text x="380" y="366" text-anchor="middle" class="tm">Ambele catene noi cresc 5′→3′. Pe matrița orientată „greșit” sinteza merge înapoi, pe bucăți.</text>
</svg>
<figcaption><b>Aceeași regulă, două rezultate.</b> ADN polimeraza adaugă nucleotide numai la un capăt 3′-OH liber, deci numai în direcția 5′→3′. Pe o matriță sinteza urmează furca (continuu). Pe cealaltă trebuie să pornească repetat de lângă furcă și să se îndepărteze de ea (discontinuu). Schemă proprie după curs (p. 11–12) și Emery Fig. 2.3A.</figcaption>
</figure>

<h3>Cele patru particularități</h3>
<div class="tw"><table>
<tr><th>Particularitate</th><th>Ce înseamnă</th><th>Cifra din curs</th></tr>
<tr><td><b>Semiconservativă</b></td><td>Fiecare moleculă-fiică are o monocatenă veche și una nou sintetizată.</td><td>—</td></tr>
<tr><td><b>Semidiscontinuă</b></td><td>Catena directoare se sintetizează continuu; catena în întârziere, pe fragmente Okazaki, tot în sens 5′→3′.</td><td>~<b>200</b> nucleotide / fragment</td></tr>
<tr><td><b>Asincronă</b></td><td>Eucromatina se replică la <b>începutul</b> fazei S, heterocromatina la <b>sfârșitul</b> fazei S.</td><td>—</td></tr>
<tr><td><b>Multicentrică și bidirecțională</b></td><td>Pornește simultan din mai multe origini (ori). Fiecare origine formează un <b>replicon</b> (buclă de replicare) care se extinde în ambele sensuri până întâlnește buclele vecine. Un replicon se replică o singură dată pe ciclu.</td><td>~<b>30.000</b> ori; durată <b>6–8 ore</b> (ar fi ~<b>500 ore</b> cu o singură origine)</td></tr>
</table></div>

<h3>Sintesomul: cine ce face</h3>
<div class="tw"><table>
<tr><th>Componentă</th><th>Rol</th></tr>
<tr><td><b>ADN polimeraza</b></td><td>Sintetizează catena nouă pe matriță, adăugând nucleotide la 3′-OH, doar 5′→3′. <b>Nu poate iniția</b> sinteza: are nevoie de o amorsă.</td></tr>
<tr><td><b>ADN primaza</b></td><td>Sintetizează amorsele (primeri) de <b>ARN</b>.</td></tr>
<tr><td><b>Topoizomeraza</b></td><td>Secționează catenele în amonte de origine; rol în spiralizare/despiralizare. Face o incizie la nivelul grupării fosfat, apoi reface legăturile fosfodiesterice.</td></tr>
<tr><td><b>Helicaze și proteine destabilizatoare</b></td><td>Rup punțile de hidrogen și desfac catenele; permit înaintarea furcii.</td></tr>
<tr><td><b>ADN ligaza</b></td><td>Leagă fragmentele de ADN nou sintetizate. Poate repara o monocatenă în ADN dublu catenar.</td></tr>
<tr><td><b>Proteine SSB</b></td><td>Mențin separate cele două monocatene (single strand binding proteins).</td></tr>
<tr><td>Proteine inițiator; enzime de degradare a amorselor ARN</td><td>Pornirea replicării; îndepărtarea primerilor.</td></tr>
</table></div>

<div class="capcana"><b>Trei confuzii frecvente</b>
<p>1. Amorsa este de <b>ARN</b>, nu de ADN, și o face <b>primaza</b>, nu polimeraza.</p>
<p>2. Helicaza rupe <b>punți de hidrogen</b> (între catene). Topoizomeraza taie și reface <b>legături fosfodiesterice</b> (în lungul catenei).</p>
<p>3. „Discontinuu” nu înseamnă sinteză 3′→5′. Fragmentele Okazaki se sintetizează tot 5′→3′.</p></div>
<div class="emery"><b>Curs vs. Emery</b><p>Emery nu dă numărul total de origini, ci spune că originile vecine se află la <b>50–300 kb</b> una de alta și sunt grupate în unități de replicare de <b>20–80 origini</b>. Cifrele nu se contrazic cu cele din curs (~30.000 ori, 6–8 ore), sunt doar exprimate diferit. Emery atribuie explicit unirea fragmentelor Okazaki <b>ADN ligazei</b>.</p></div>

<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce replicarea nu poate fi continuă pe ambele catene?</summary><div>Catenele matriță sunt antiparalele, iar polimeraza sintetizează doar 5′→3′. Pe una dintre matrițe această direcție coincide cu înaintarea furcii; pe cealaltă este opusă, așa că sinteza se reia periodic sub formă de fragmente Okazaki.</div></details>
<details class="q"><summary>De ce are nevoie polimeraza de primază?</summary><div>ADN polimeraza poate doar să prelungească un capăt 3′-OH existent; nu poate începe o catenă de la zero. Primaza sintetizează o amorsă scurtă de ARN care oferă acel 3′-OH.</div></details>
<details class="q"><summary>Cum explică cifrele din curs necesitatea originilor multiple?</summary><div>Cu o singură origine, replicarea unui cromozom ar dura aproximativ 500 de ore. Cu aproximativ 30.000 de origini active simultan și propagare bidirecțională, durează 6–8 ore.</div></details>
<details class="q"><summary>Ce se replică mai devreme în faza S: eucromatina sau heterocromatina?</summary><div>Eucromatina, la începutul fazei S. Heterocromatina se replică tardiv, la sfârșitul fazei S. De aceea cromozomul X inactiv este cu replicare tardivă.</div></details>
<details class="q"><summary>După două runde de replicare pornind de la o moleculă, câte molecule mai conțin o catenă originală?</summary><div>Două din patru. Cele două catene originale nu dispar și nu se amestecă; fiecare ajunge în câte o moleculă (replicare semiconservativă).</div></details>
</div>`
},

{
id: "cromatina", titlu: "Cromatina: histone, eucromatină, heterocromatină", pag: "12–14", emery: "cap. 2, p. 12; cap. 3, p. 27", acopera: ["c01-r08", "c01-r09", "c01-r10"],
html: `
<p><b>Cromatina</b> = ADN asociat cu proteine histonice și nehistonice. Structura supramoleculară a ADN se datorează interacțiunilor histone–ADN.</p>
<div class="tw"><table>
<tr><th></th><th>Histone</th><th>Proteine nehistonice</th></tr>
<tr><td>Caracter</td><td>puternic <b>alcalin</b> (bazic)</td><td>neutru sau <b>acid</b>; heterogene</td></tr>
<tr><td>Cantitate</td><td>abundente; doar în nucleul eucariotelor</td><td>slab reprezentate în nucleu</td></tr>
<tr><td>Unde se fixează</td><td><b>mica incizură</b></td><td><b>marea incizură</b></td></tr>
<tr><td>Rol</td><td>neutralizează sarcinile acide ale ADN; împachetare</td><td>reglarea și modularea specifică a activității genelor; un grup limitat are rol structural (matricea cromozomială)</td></tr>
</table></div>

<h3>Tabelul I din curs: clasificarea histonelor</h3>
<div class="tw"><table>
<tr><th>Histonă</th><th class="n">Aminoacizi</th><th class="n">Greutate moleculară (kDa)</th><th>Modificări (acțiune)</th></tr>
<tr><td><b>H1</b></td><td class="n">200–265</td><td class="n">17–28</td><td>fosforilare</td></tr>
<tr><td><b>H2A</b></td><td class="n">129–155</td><td class="n">13,9</td><td>ubiquitinizare</td></tr>
<tr><td><b>H2B</b></td><td class="n">121–148</td><td class="n">13,8</td><td>ubiquitinizare</td></tr>
<tr><td><b>H3</b></td><td class="n">135</td><td class="n">15,3</td><td>metilare, fosforilare, acetilare</td></tr>
<tr><td><b>H4</b></td><td class="n">102</td><td class="n">11,3</td><td>metilare, fosforilare, acetilare</td></tr>
</table></div>
<p>Cele cinci clase au structură stabilă, <b>conservată în evoluție, cu excepția H1</b>. H1 este și cea mai mare și singura care nu intră în miezul nucleozomului. Modificările din ultima coloană sunt baza reglării epigenetice din capitolul 4.</p>

<h3>Eucromatină și heterocromatină</h3>
<div class="tw"><table>
<tr><th>Criteriu</th><th>Eucromatină</th><th>Heterocromatină</th></tr>
<tr><td>Replicare</td><td>precoce, <b>început</b> de fază S</td><td>tardivă, <b>sfârșit</b> de fază S</td></tr>
<tr><td>Condensare</td><td>slab condensată</td><td>înalt condensată</td></tr>
<tr><td>Tip de ADN</td><td>bogată în ADN <b>nerepetitiv</b></td><td>bogată în ADN <b>repetitiv</b></td></tr>
<tr><td>Perechi predominante</td><td><b>G≡C</b></td><td><b>A=T</b></td></tr>
<tr><td>Proteine predominante</td><td>nehistonice</td><td>histone</td></tr>
<tr><td>Activitate genetică</td><td><b>activă</b> transcripțional</td><td><b>inactivă</b></td></tr>
<tr><td>Alte roluri</td><td>—</td><td>stabilizează centromerul și telomerele; participă în meioză; modulează diferențierea celulară</td></tr>
</table></div>
<p>Logica tabelului este una singură: ce trebuie citit stă desfăcut, bogat în proteine reglatoare și se copiază primul; ce nu se citește stă strâns, pe histone, și se copiază ultimul.</p>

<h3>Două feluri de heterocromatină</h3>
<div class="tw"><table>
<tr><th></th><th>Constitutivă</th><th>Facultativă</th></tr>
<tr><td>Prezență</td><td>în <b>toate</b> celulele, la <b>toți</b> indivizii speciei</td><td>diferă între organisme, între celulele aceluiași organism sau între perioade ale vieții</td></tr>
<tr><td>Localizare / exemplu</td><td>centromer, telomere, <b>cele două treimi distale ale cromozomului Y</b>, sateliți, constricții secundare intercalare și terminale</td><td><b>cromatina sexuală</b> (cromozomul X inactiv)</td></tr>
</table></div>
<figure><img src="fig/c01_ideograme_xy.svg" alt="Ideogramele cromozomilor X și Y">
<figcaption><b>„Cele două treimi distale ale cromozomului Y”, verificat pe date.</b> În asamblarea GRCh38, banda Yq12 (heterocromatină) are 30,6 Mb, adică 66% din brațul lung. Cromozomul X este de aproape trei ori mai lung și poartă gena <i>XIST</i>, de la care pornește inactivarea (secțiunea următoare).</figcaption></figure>

<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Care histonă face excepție de la conservarea evolutivă și ce alte particularități are?</summary><div>H1. Este cea mai mare (200–265 aminoacizi, 17–28 kDa), suferă fosforilare și se leagă de ADN-ul internucleozomal, nu face parte din miezul histonic.</div></details>
<details class="q"><summary>Care histone pot fi acetilate, după tabelul din curs?</summary><div>H3 și H4 (metilare, fosforilare, acetilare). H2A și H2B sunt ubiquitinizate, H1 fosforilată.</div></details>
<details class="q"><summary>Dă cinci localizări ale heterocromatinei constitutive.</summary><div>Centromer, telomere, cele două treimi distale ale cromozomului Y, sateliți, constricții secundare (intercalare și terminale).</div></details>
<details class="q"><summary>De ce cromatina sexuală este heterocromatină facultativă, nu constitutivă?</summary><div>Pentru că nu este prezentă în toate celulele și la toți indivizii: apare numai când există mai mult de un cromozom X, iar X-ul inactivat diferă de la o celulă la alta.</div></details>
<details class="q"><summary>Ce perechi de baze și ce proteine predomină în eucromatină?</summary><div>Perechile G≡C și proteinele nehistonice. În heterocromatină predomină A=T și histonele.</div></details>
</div>`
},

{
id: "lyon", titlu: "Cromatina sexuală, compensarea de doză și ipoteza Lyon", pag: "14–15", emery: "cap. 9, p. 124–125; cap. 3, p. 32; cap. 6, p. 73", acopera: ["c01-r11"],
html: `
<p><b>Cromatina sexuală</b> este reprezentată de cromocentrii din nucleul celulelor interfazice (corpusculul Barr). Ea permite stabilirea numărului de cromozomi sexuali, deci a sexului genetic (XX sau XY), și identificarea anomaliilor numerice ale cromozomilor sexuali.</p>

<h3>De ce e nevoie de compensare de doză</h3>
<p>Cromozomul <b>Y</b> este mic (grupa <b>G</b>), sărac în eucromatină, cu puține gene, implicate în sexualizarea masculină. Cromozomul <b>X</b> este mijlociu (grupa <b>C</b>) și are multe gene, implicate și în sexualizare, și în caractere somatice. Fără un mecanism de egalizare, femeile ar avea doză dublă din toate genele de pe X. Soluția: în toate celulele organismului feminin, <b>unul dintre cei doi X este inactivat</b>, iar cromatina sexuală rămâne activă genetic pe un singur X.</p>

<h3>Ipoteza Lyon: cele patru proprietăți</h3>
<div class="tw"><table>
<tr><th>Inactivarea este…</th><th>Ce înseamnă</th></tr>
<tr><td><b>precoce</b></td><td>se produce în perioada embrionară</td></tr>
<tr><td><b>independentă</b></td><td>fiecare celulă „decide” separat</td></tr>
<tr><td><b>întâmplătoare</b></td><td>în unele celule este inactivat X-ul patern, în altele X-ul matern</td></tr>
<tr><td><b>definitivă</b></td><td>odată stabilită, se păstrează în toate celulele-fiice</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 290" role="img" aria-label="Mozaicul produs de inactivarea X">
<defs><marker id="sg5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="tm"/></marker></defs>
<circle cx="90" cy="145" r="38" class="fcard si" stroke-width="1.5"/>
<rect x="72" y="125" width="8" height="40" rx="4" class="fG"/><rect x="100" y="125" width="8" height="40" rx="4" class="fT"/>
<text x="90" y="205" text-anchor="middle" class="ti b">zigot XX</text><text x="90" y="222" text-anchor="middle" class="tm">ambii X activi</text>
<text x="72" y="98" text-anchor="middle" class="tin b">Xm</text><text x="108" y="98" text-anchor="middle" class="tw2 b">Xp</text>
<line x1="135" y1="145" x2="205" y2="100" class="sm" stroke-width="1.5" marker-end="url(#sg5)"/><line x1="135" y1="145" x2="205" y2="200" class="sm" stroke-width="1.5" marker-end="url(#sg5)"/>
<text x="110" y="34" text-anchor="middle" class="tm">embrion timpuriu:</text><text x="110" y="50" text-anchor="middle" class="tm">alegere la întâmplare</text>
<circle cx="245" cy="90" r="30" class="fis si" stroke-width="1.5"/><rect x="230" y="74" width="7" height="32" rx="3.5" class="fG"/><circle cx="262" cy="90" r="6" class="fZ"/>
<text x="245" y="138" text-anchor="middle" class="tin b">Xm activ</text>
<circle cx="245" cy="210" r="30" class="fws si" stroke-width="1.5"/><rect x="253" y="194" width="7" height="32" rx="3.5" class="fT"/><circle cx="232" cy="210" r="6" class="fZ"/>
<text x="245" y="258" text-anchor="middle" class="tw2 b">Xp activ</text>
<line x1="285" y1="90" x2="345" y2="90" class="sm" stroke-width="1.5" marker-end="url(#sg5)"/><line x1="285" y1="210" x2="345" y2="210" class="sm" stroke-width="1.5" marker-end="url(#sg5)"/>
<text x="345" y="146" text-anchor="middle" class="tm">mitoze: alegerea</text><text x="345" y="162" text-anchor="middle" class="tm">se moștenește</text>
<g>
<circle cx="372" cy="76" r="13" class="fis si"/><circle cx="400" cy="76" r="13" class="fis si"/><circle cx="386" cy="101" r="13" class="fis si"/><circle cx="414" cy="101" r="13" class="fis si"/>
<circle cx="372" cy="196" r="13" class="fws si"/><circle cx="400" cy="196" r="13" class="fws si"/><circle cx="386" cy="221" r="13" class="fws si"/><circle cx="414" cy="221" r="13" class="fws si"/>
</g>
<line x1="440" y1="90" x2="500" y2="130" class="sm" stroke-width="1.5" marker-end="url(#sg5)"/><line x1="440" y1="210" x2="500" y2="165" class="sm" stroke-width="1.5" marker-end="url(#sg5)"/>
<g>
<rect x="510" y="85" width="210" height="125" rx="14" class="fcard si" stroke-width="1.5"/>
<path d="M510 99a14 14 0 0 1 14-14h60l-20 50 30 30-25 45h-45a14 14 0 0 1-14-14z" class="fis"/>
<path d="M584 85h70l-12 60 28 20-10 45h-91l25-45-30-30z" class="fws"/>
<path d="M654 85h52a14 14 0 0 1 14 14v97a14 14 0 0 1-14 14h-46l10-45-28-20z" class="fis"/>
</g>
<text x="615" y="232" text-anchor="middle" class="ti b">organism feminin = mozaic</text>
<text x="615" y="250" text-anchor="middle" class="tm">clone cu Xm activ și clone cu Xp activ</text>
<circle cx="520" cy="38" r="6" class="fZ"/><text x="534" y="43" class="ti">X inactiv = corpuscul Barr</text>
</svg>
<figcaption><b>De la o alegere întâmplătoare la un mozaic.</b> Fiecare celulă a embrionului inactivează la întâmplare X-ul matern sau pe cel patern, iar toate descendentele ei păstrează alegerea. Femeia este un mozaic funcțional pentru genele de pe X. Schemă proprie după curs (p. 14) și Emery Fig. 9.28.</figcaption>
</figure>

<div class="cheie"><b>Regula care rezolvă grilele cu cariotipuri</b><p>Numărul de corpusculi Barr = <b>numărul de cromozomi X − 1</b>. Regula este formulată explicit în Emery; cursul spune doar că cromatina sexuală permite identificarea anomaliilor numerice.</p></div>
<div class="tw"><table>
<tr><th>Cariotip</th><th class="n">Cromozomi X</th><th class="n">Corpusculi Barr</th></tr>
<tr><td>46,XY (bărbat)</td><td class="n">1</td><td class="n">0</td></tr>
<tr><td>46,XX (femeie)</td><td class="n">2</td><td class="n">1</td></tr>
<tr><td>45,X (Turner)</td><td class="n">1</td><td class="n">0</td></tr>
<tr><td>47,XXY (Klinefelter)</td><td class="n">2</td><td class="n">1</td></tr>
<tr><td>47,XXX</td><td class="n">3</td><td class="n">2</td></tr>
</table></div>

<div class="emery"><b>Curs vs. Emery: trei diferențe de știut</b>
<p>1. <b>Cât de „totală” este inactivarea.</b> Cursul vorbește despre „inactivarea totală a unuia dintre cei doi cromozomi X”. Emery precizează că genele din regiunile pseudoautozomale și alte loci, inclusiv <i>XIST</i>, rămân active; aproximativ 15% dintre gene scapă de inactivare. La grila din Emery, afirmația „toate genele unui X sunt stinse” este <b>falsă</b>.</p>
<p>2. <b>Momentul.</b> Cursul: „în perioada embrionară”. Emery: procesul începe probabil foarte devreme, ARN-ul <i>XIST</i> acumulându-se pe unul dintre X din stadiul de aproximativ 8 celule.</p>
<p>3. <b>Locusul <i>XIST</i>.</b> Emery îl dă la Xq13.3. În asamblarea actuală a genomului (GRCh38, UCSC) gena se află în banda <b>Xq13.2</b> (vezi ideograma din secțiunea anterioară). Cursul nu menționează <i>XIST</i> în acest capitol; revine la capitolul 4.</p></div>
<div class="exemplu"><b>De ce contează clinic</b><p>O femeie heterozigotă pentru o boală recesivă legată de X (hemofilie A, Duchenne, capitolul 10) poate avea semne clinice dacă, din întâmplare, X-ul normal este inactivat în majoritatea celulelor relevante. Emery numește fenomenul inactivare asimetrică („skewed”).</p></div>

<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Enumeră cele patru caracteristici ale inactivării X după ipoteza Lyon, așa cum apar în curs.</summary><div>Se produce în perioada embrionară; este independentă în fiecare celulă; este întâmplătoare (X patern sau matern); este definitivă.</div></details>
<details class="q"><summary>Câți corpusculi Barr are o persoană 48,XXXY? Dar una 45,X?</summary><div>48,XXXY: 3 X − 1 = <b>2</b>. 45,X: 1 − 1 = <b>0</b>.</div></details>
<details class="q"><summary>De ce nu este nevoie de compensare pentru genele de pe Y?</summary><div>Y este mic, sărac în eucromatină și are puține gene, implicate în sexualizarea masculină. Dezechilibrul de doză între sexe vine de la X, care are multe gene somatice.</div></details>
<details class="q"><summary>În ce grupe de cromozomi intră X și Y?</summary><div>X: cromozom mijlociu, grupa C. Y: cromozom mic, grupa G.</div></details>
<details class="q"><summary>De ce se spune că femeia este un mozaic?</summary><div>Pentru că are două populații de celule: unele cu X-ul matern activ, altele cu X-ul patern activ. Pentru genele de pe X, cele două populații pot exprima alele diferite.</div></details>
</div>`
},

{
id: "compactare", titlu: "Structura terțiară: de la nucleozom la cromozom", pag: "15–16", emery: "cap. 2, p. 12 (Fig. 2.4)", acopera: ["c01-r12"],
html: `
<p>În nucleul eucariot, ADN-ul este organizat într-un sistem <b>ierarhizat</b> de fibre de cromatină, obținute prin spiralizări succesive. Fiecare nivel are un nume, un diametru și un factor de compactare.</p>

<h3>Nivelul 1: nucleozomul și filamentul de 10 nm</h3>
<figure><img src="fig/c01_nucleozom_pdb.svg" alt="Nucleozomul din structura PDB 1AOI">
<figcaption><b>Nucleozomul, din structura cristalografică.</b> ADN-ul (violet) are exact 146 de perechi de baze și înconjoară miezul de opt histone. Diametrul măsurat este de aproximativ 10 nm, de unde numele „filament de 10 nm”.</figcaption></figure>
<ul>
<li><b>Nucleozomul</b> este unitatea structurală de bază a cromatinei.</li>
<li><b>Miezul histonic</b>: cilindric, <b>octamer</b> = câte două molecule din H2A, H2B, H3, H4.</li>
<li>În jurul lui se înfășoară <b>146 pb</b> de ADN, făcând <b>o rotație și trei sferturi</b>.</li>
<li><b>ADN-ul linker (spacer)</b>: aproximativ <b>60 pb</b> între nucleozomi; de el se atașează <b>H1</b>.</li>
<li>Rezultatul este „șiragul de mărgele” (nucleofilamentul), cu diametru de <b>10 nm</b> și compactare de <b>10 ori</b>.</li>
</ul>

<h3>Toate nivelurile, pe o singură scară</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Nivelurile de compactare a cromatinei">
<line x1="170" y1="20" x2="170" y2="290" class="sm"/>
<g>
<text x="160" y="46" text-anchor="end" class="ti b">Dublu helix</text><rect x="170" y="32" width="24" height="22" rx="3" class="fP"/><text x="202" y="48" class="ti">2 nm</text>
<text x="160" y="90" text-anchor="end" class="ti b">Nucleofilament</text><rect x="170" y="76" width="89" height="22" rx="3" class="fP"/><text x="267" y="92" class="ti">10 nm · compactare ×10</text>
<text x="160" y="134" text-anchor="end" class="ti b">Cromonemă</text><rect x="170" y="120" width="133" height="22" rx="3" class="fP"/><text x="311" y="136" class="ti">30 nm · încă ×5 (solenoid, 6 nucleozomi/tur, H1)</text>
<text x="160" y="178" text-anchor="end" class="ti b">Bucle laterale</text><rect x="170" y="164" width="226" height="22" rx="3" class="fP"/><text x="404" y="180" class="ti">300 nm · încă ×10 (topoizomeraza II)</text>
<text x="160" y="222" text-anchor="end" class="ti b">Cromatidă</text><rect x="170" y="208" width="260" height="22" rx="3" class="fP"/><text x="438" y="224" class="ti">700 nm · încă ×20 (profază)</text>
<text x="160" y="266" text-anchor="end" class="ti b">Cromozom metafazic</text><rect x="170" y="252" width="288" height="22" rx="3" class="fP"/><text x="466" y="268" class="ti">1400 nm · total ×10.000</text>
</g>
<text x="170" y="308" class="tm">Lungimea barelor este proporțională cu logaritmul diametrului (de la 2 la 1400 nm).</text>
<text x="170" y="324" class="tm">Produsul treptelor: 10 × 5 × 10 × 20 = 10.000.</text>
</svg>
<figcaption><b>Cifrele din curs se verifică între ele.</b> Factorii de compactare ai celor patru trepte, înmulțiți, dau exact compactarea totală de 10.000 de ori. Diametrele sunt cele din curs (p. 15–16).</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Nivel</th><th class="n">Diametru</th><th>Compactare</th><th>Ce îl realizează / când</th></tr>
<tr><td>1. Filamentul cu nucleozomi (nucleofilament)</td><td class="n">10 nm</td><td>×10</td><td>ADN înfășurat pe octamerul histonic</td></tr>
<tr><td>2. Fibra groasă (<b>cromonema</b>)</td><td class="n">30 nm</td><td>×5 față de nucleofilament</td><td>solenoid cu <b>6 nucleozomi pe tur</b>, mediat de <b>H1</b>. Unitatea fundamentală a cromatinei în <b>interfază</b>.</td></tr>
<tr><td>3. Bucle laterale (domenii cromozomice de 10–100 kb)</td><td class="n">300 nm</td><td>×10 față de cromonemă</td><td>menținute de <b>topoizomeraza II</b> (proteină nehistonică); în interfază</td></tr>
<tr><td>4. Cromatida</td><td class="n">700 nm</td><td>×20 suplimentar</td><td>în <b>profază</b></td></tr>
<tr><td>5. Cromozomul (metafază)</td><td class="n">1400 nm</td><td><b>×10.000</b> în total</td><td>asigură distribuția precisă a materialului genetic la diviziune</td></tr>
</table></div>
<p>În <b>telofază</b>, la sfârșitul diviziunii, cromozomii se decondensează (despiralizează).</p>

<div class="capcana"><b>Atenție la formulări</b>
<p>1. Cursul scrie „cromozomul <b>metacentric</b>” pentru nivelul de 1400 nm. Din context (cel mai înalt grad de compactare, distribuția materialului la diviziune) este vorba despre cromozomul <b>metafazic</b>. „Metacentric” descrie poziția centromerului, nu gradul de condensare. Dacă la examen apare formularea din carte, recunoaște-o.</p>
<p>2. H1 <b>nu</b> face parte din octamer. Octamerul conține doar H2A, H2B, H3, H4, câte două.</p>
<p>3. Un cromozom metafazic are două cromatide: 2 × 700 nm = 1400 nm.</p></div>
<div class="emery"><b>Curs vs. Emery</b><p>Emery descrie aceleași trepte calitativ („modelul solenoid”: helix → nucleozomi → fibră de cromatină → bucle pe un schelet de proteine acide nehistonice → cromozom) și nu dă diametre sau factori de compactare. Dă în schimb imaginea de ansamblu: ADN-ul unei celule, întins, ar avea câțiva metri, iar lungimea totală a cromozomilor este sub jumătate de milimetru.</p></div>

<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Descrie complet un nucleozom, cu cifre.</summary><div>Miez cilindric din opt histone (2×H2A, 2×H2B, 2×H3, 2×H4), în jurul căruia 146 pb de ADN fac 1¾ rotații. Între nucleozomi, ADN linker de aproximativ 60 pb, de care se leagă H1.</div></details>
<details class="q"><summary>Pune în ordine, cu diametre: cromonemă, cromatidă, nucleofilament, bucle laterale, cromozom.</summary><div>Nucleofilament 10 nm → cromonemă 30 nm → bucle laterale 300 nm → cromatidă 700 nm → cromozom 1400 nm.</div></details>
<details class="q"><summary>Ce proteină menține buclele laterale și ce proteină mediază formarea solenoidului?</summary><div>Buclele laterale: topoizomeraza II (nehistonică). Solenoidul: histona H1.</div></details>
<details class="q"><summary>De câte ori este compactat ADN-ul la nivel de cromonemă față de dublul helix?</summary><div>De 50 de ori: ×10 (nucleofilament) × 5 (cromonemă).</div></details>
<details class="q"><summary>Care este unitatea fundamentală de organizare a cromatinei în interfază?</summary><div>Cromonema (fibra de 30 nm).</div></details>
<details class="q"><summary>În ce fază a diviziunii se decondensează cromozomii?</summary><div>În telofază.</div></details>
</div>`
}
],

testNota: "Întrebările marcate „Emery” sunt traduse din setul de autoevaluare al capitolului 2; restul sunt construite din cartea de curs.",
test: [
{ q: "În timpul replicării ADN:", sursa: "Emery, cap. 2, întrebarea 4", itemi: [
  { t: "ADN helicaza separă ADN-ul dublu catenar", a: true, e: "Helicaza desface helixul rupând punțile de hidrogen.", s: "replicare" },
  { t: "ADN-ul este sintetizat într-o singură direcție", a: false, e: "Răspunsul din Emery: replicarea se desfășoară în ambele direcții pornind de la origine (bidirecțional). Fiecare catenă nouă crește, totuși, numai 5′→3′; afirmația este falsă pentru procesul în ansamblu.", s: "replicare" },
  { t: "Se sintetizează fragmente Okazaki", a: true, e: "Pe catena în întârziere; sunt apoi unite de ADN ligază.", s: "replicare" },
  { t: "ADN-ul este sintetizat în mod conservativ", a: false, e: "Replicarea este semiconservativă: o singură catenă din fiecare moleculă-fiică este nou sintetizată.", s: "replicare" },
]},
{ q: "Despre structura primară a ADN:", sursa: "curs p. 5–7", itemi: [
  { t: "Baza azotată se leagă la carbonul 5′ al deoxiribozei", a: false, e: "Baza se leagă la C1′. La C5′ se leagă gruparea fosforică.", s: "primara" },
  { t: "Purinele au două heterocicluri cu azot", a: true, e: "Adenina și guanina. Pirimidinele (T, C) au un singur heterociclu.", s: "primara" },
  { t: "Caracterul acid al ADN este dat de gruparea fosfat", a: true, e: "Fosfatul este un rest de acid ortofosforic și conferă sarcini negative.", s: "primara" },
  { t: "Bazele azotate vecine de pe aceeași catenă sunt legate între ele prin punți de hidrogen", a: false, e: "Pe aceeași catenă bazele nu prezintă niciodată legături între ele; nucleotidele se leagă prin punți fosfodiester la nivelul scheletului.", s: "primara" },
  { t: "Secvențele se scriu de la stânga la dreapta începând cu capătul 3′", a: false, e: "Scrierea începe cu capătul 5′; citirea se face 5′→3′.", s: "primara" },
]},
{ q: "Despre dublul helix (forma B):", sursa: "curs p. 7–8", itemi: [
  { t: "Pasul elicei este de 3,4 nm și cuprinde 10 perechi de baze", a: true, e: "34 Å, 10 pb pe tur, rotație de 36° între perechi.", s: "secundara" },
  { t: "La om raportul (A+T)/(G+C) este 1", a: false, e: "Este 1,7. Egal cu 1 este raportul (A+G)/(T+C).", s: "secundara" },
  { t: "Între guanină și citozină se formează trei punți de hidrogen", a: true, e: "G≡C: trei; A=T: două.", s: "secundara" },
  { t: "Cele două catene sunt identice", a: false, e: "Sunt complementare și strict codeterminate, nu identice.", s: "secundara" },
  { t: "Histonele se fixează în incizura mare", a: false, e: "După curs, histonele se fixează în incizura mică; în incizura mare se fixează proteinele reglatoare.", s: "secundara" },
]},
{ q: "Despre polimorfism și proprietățile fizico-chimice:", sursa: "curs p. 8–10", itemi: [
  { t: "ADN-ul de tip Z este orientat spre stânga", a: true, e: "Este singura formă levogiră descrisă.", s: "polimorfism" },
  { t: "Forma A este mai subțire și mai lungă decât forma B", a: false, e: "Forma A este mai groasă și mai scurtă. Mai subțiri și mai lungi sunt C, D, E.", s: "polimorfism" },
  { t: "Tm este temperatura la care tot ADN-ul este denaturat", a: false, e: "Este temperatura la care jumătate din ADN-ul dublu catenar este denaturat.", s: "proprietati" },
  { t: "Un conținut ridicat de perechi A=T crește Tm", a: false, e: "Tm crește cu numărul de perechi G≡C.", s: "proprietati" },
  { t: "Dimerii de timină sunt reparați prin mecanismul NER", a: true, e: "Nucleotide excision repair.", s: "proprietati" },
  { t: "Renaturarea depinde de sursa monocatenelor", a: false, e: "Depinde doar de gradul de complementaritate.", s: "proprietati" },
]},
{ q: "Despre replicare (detalii din curs):", sursa: "curs p. 10–12", itemi: [
  { t: "Heterocromatina se replică la începutul fazei S", a: false, e: "La sfârșitul fazei S. Eucromatina se replică la început.", s: "replicare" },
  { t: "Genomul uman are aproximativ 30.000 de origini ale replicării", a: true, e: "Datorită lor replicarea durează 6–8 ore în loc de aproximativ 500.", s: "replicare" },
  { t: "ADN polimeraza poate iniția singură sinteza unei catene noi", a: false, e: "Are nevoie de o amorsă de ARN sintetizată de ADN primază.", s: "replicare" },
  { t: "Proteinele SSB mențin separate cele două monocatene", a: true, e: "Single strand binding proteins.", s: "replicare" },
  { t: "Un replicon se poate replica de mai multe ori în același ciclu celular", a: false, e: "Un replicon se replică o singură dată pe ciclu.", s: "replicare" },
]},
{ q: "Despre cromatină:", sursa: "curs p. 12–16", itemi: [
  { t: "Miezul nucleozomului conține histona H1", a: false, e: "Miezul este un octamer 2×(H2A, H2B, H3, H4). H1 se leagă de ADN-ul linker.", s: "compactare" },
  { t: "În jurul miezului histonic se înfășoară 146 pb de ADN", a: true, e: "O rotație și trei sferturi.", s: "compactare" },
  { t: "Cromonema are diametrul de 300 nm", a: false, e: "Cromonema are 30 nm. 300 nm au buclele laterale.", s: "compactare" },
  { t: "Heterocromatina constitutivă se găsește la nivelul centromerului și al telomerelor", a: true, e: "Și în cele două treimi distale ale cromozomului Y, în sateliți și în constricțiile secundare.", s: "cromatina" },
  { t: "În eucromatină predomină perechile A=T și histonele", a: false, e: "În eucromatină predomină G≡C și proteinele nehistonice.", s: "cromatina" },
  { t: "Histona H1 este cea mai bine conservată în evoluție", a: false, e: "H1 este excepția: celelalte patru clase sunt conservate.", s: "cromatina" },
]},
{ q: "Despre cromozomul X și lyonizare:", sursa: "curs p. 14–15; Emery cap. 6 și 9", itemi: [
  { t: "Cromatina sexuală este un exemplu de heterocromatină constitutivă", a: false, e: "Este exemplul tipic de heterocromatină facultativă.", s: "lyon" },
  { t: "Inactivarea cromozomului X este întâmplătoare și definitivă", a: true, e: "Plus: se produce în perioada embrionară și este independentă în fiecare celulă.", s: "lyon" },
  { t: "În lyonizare sunt stinse toate genele unui cromozom X", a: false, e: "Răspunsul din Emery: nu toate. Genele din regiunile pseudoautozomale și alte loci scapă de inactivare. Cursul folosește formularea „inactivare totală”; vezi nota din secțiune.", s: "lyon" },
  { t: "Toate femeile cu lyonizare sunt mozaicuri pentru cromozomul X", a: true, e: "Unele celule au X-ul matern activ, altele pe cel patern.", s: "lyon" },
  { t: "Un bărbat 47,XXY are un corpuscul Barr", a: true, e: "Numărul de corpusculi Barr = numărul de X − 1.", s: "lyon" },
  { t: "Cromozomul Y aparține grupei C", a: false, e: "Y aparține grupei G; X aparține grupei C.", s: "lyon" },
]}
]
});
