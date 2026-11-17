/* Capitolul 2 — Gena (curs p. 19–46) */
(function () {
// Tabelul codului genetic, construit din ordinea standard UCAG
const B = "UCAG", AA = "FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG";
const N3 = { F: "Phe", L: "Leu", S: "Ser", Y: "Tyr", C: "Cys", W: "Trp", P: "Pro", H: "His", Q: "Gln", R: "Arg", I: "Ile", M: "Met", T: "Thr", N: "Asn", K: "Lys", V: "Val", A: "Ala", D: "Asp", E: "Glu", G: "Gly", "*": "STOP" };
let cod = '<div class="tw"><table class="cod"><tr><th>1 ↓ / 2 →</th>' + [...B].map((b) => `<th>${b}</th>`).join("") + "<th>3</th></tr>";
for (let i = 0; i < 4; i++) for (let k = 0; k < 4; k++) {
  cod += "<tr>" + (k === 0 ? `<th rowspan="4">${B[i]}</th>` : "");
  for (let j = 0; j < 4; j++) {
    const a = AA[i * 16 + j * 4 + k], c = B[i] + B[j] + B[k];
    const st = a === "*" ? ' style="background:var(--bad-soft);font-weight:700"' : c === "AUG" ? ' style="background:var(--ok-soft);font-weight:700"' : a === "W" ? ' style="background:var(--info-soft)"' : "";
    cod += `<td${st}><span class="mono">${c}</span> ${N3[a]}${c === "AUG" ? " (START)" : ""}</td>`;
  }
  cod += `<th>${B[k]}</th></tr>`;
}
cod += "</table></div>";

GHID.capitol({
id: "c02",
intro: `<p class="lead">Capitolul răspunde la trei întrebări: ce este o genă, cum ajunge informația ei să devină proteină și cine hotărăște când și cât. Firul este ADN → ARN premesager → ARN mesager matur → polipeptid → proteină activă, iar reglarea poate interveni la fiecare săgeată.</p>`,
sectiuni: [
{
id: "definitie", titlu: "Ce este o genă: concepția clasică și vocabularul ei", pag: "19–21", emery: "cap. 2, p. 13; cap. 6", acopera: ["c02-r01"],
html: `
<div class="tw"><table>
<tr><th>Moment</th><th>Definiția genei</th></tr>
<tr><td><b>Mendel, 1865</b></td><td>„O pereche de factori ereditari determină un caracter și se transmite la urmași independent de alți factori”: gena ca unitate de bază a eredității.</td></tr>
<tr><td><b>1909, teoria cromozomială</b> (concepția clasică)</td><td>Segment cromozomial <b>continuu</b>, bine delimitat, care determină un anumit caracter fenotipic.</td></tr>
<tr><td><b>Concepția actuală</b></td><td>Ansamblu liniar de secvențe nucleotidice necesar pentru a produce un <b>polipeptid sau un ARN funcțional</b>; se transcrie în ARN premesager și formează, împreună cu elementele de control de la ambele capete, o unitate structurală și funcțională.</td></tr>
<tr><td><b>După ENCODE (2007)</b></td><td>Definiția a fost reformulată prin <b>excluderea elementelor de control</b> ca parte a genei.</td></tr>
</table></div>
<h3>Termenii clasici, încă valabili</h3>
<div class="tw"><table>
<tr><th>Termen</th><th>Sens</th></tr>
<tr><td><b>Locus</b> (pl. loci)</td><td>Poziția fixă a genei pe cromozom, identică la toți indivizii speciei. Poate fi autozomal sau heterozomal. X și Y poartă și gene pentru caractere nesexuale; X are multe (grup sangvin, factorii VIII și IX, vederea colorată).</td></tr>
<tr><td><b>Genotip</b></td><td>Structura genetică a individului; în sens restrâns, perechea de gene pentru o trăsătură. Genotip + mediu → <b>fenotip</b>.</td></tr>
<tr><td><b>Gene alele</b></td><td>Variante apărute prin mutația genei tipice („wild type”); ocupă același locus și determină același caracter.</td></tr>
<tr><td><b>Polialelie</b></td><td>Mai multe alele la același locus. Exemple: sistemul <b>ABO</b>, <b>CMH</b>. Cursul dă: gene monoalelice 70%, dialelice 30%, polialelice foarte rare.</td></tr>
<tr><td><b>Homozigot / heterozigot</b></td><td>Alele identice / diferite pe loci omologi. <b>Heterozigot compus</b>: ambele alele mutante, dar diferite între ele.</td></tr>
<tr><td><b>Hemizigot</b></td><td>La bărbat, o genă de pe X nu are de obicei echivalent pe Y: există o singură genă pentru caracter.</td></tr>
<tr><td><b>Dominant / recesiv / codominant</b></td><td>Dominantă: se manifestă la heterozigot (majusculă). Recesivă: nu se manifestă la heterozigot (literă mică). Codominante: se manifestă ambele.</td></tr>
</table></div>
<div class="exemplu"><b>Leagă de restul cărții</b><p>Acești termeni sunt folosiți fără explicații în capitolele 7–10: „heterozigot compus” la fibroza chistică, „hemizigot” la toate bolile legate de X.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce a schimbat proiectul ENCODE în definiția genei?</summary><div>A scos elementele de control din definiția genei: gena este secvența care produce polipeptidul sau ARN-ul funcțional, fără regiunile reglatoare.</div></details>
<details class="q"><summary>Care este diferența dintre un homozigot pentru o alelă mutantă și un heterozigot compus?</summary><div>Homozigotul are aceeași mutație pe ambele alele. Heterozigotul compus are două mutații diferite, câte una pe fiecare alelă a aceleiași gene.</div></details>
</div>`
},
{
id: "structura", titlu: "Structura genei", pag: "21–25", emery: "cap. 2, p. 13–14 (Fig. 2.6)", acopera: ["c02-r02", "c02-r03"],
html: `
<p>O genă are o <b>regiune centrală</b> (cadrul de lectură, care se transcrie) și <b>două regiuni laterale</b> de reglare, care nu se transcriu. Majoritatea genelor au structură discontinuă: exoni întrerupți de introni.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Structura unei gene">
<line x1="20" y1="150" x2="740" y2="150" class="si" stroke-width="3"/>
<rect x="30" y="136" width="46" height="28" rx="4" class="fis"/><text x="53" y="126" text-anchor="middle" class="tin b">activator</text>
<rect x="110" y="136" width="30" height="28" rx="4" class="fG"/><text x="125" y="126" text-anchor="middle" class="ti">CG</text>
<rect x="150" y="136" width="36" height="28" rx="4" class="fA"/><text x="168" y="126" text-anchor="middle" class="ti">CAAT</text>
<rect x="196" y="136" width="36" height="28" rx="4" class="fT"/><text x="214" y="126" text-anchor="middle" class="ti">TATA</text>
<text x="214" y="182" text-anchor="middle" class="tm">−25 pb</text>
<path d="M250 150 V100 H282" fill="none" class="sa" stroke-width="2.5"/><path d="M282 100 l-9 -5 v10z" class="ta"/><text x="250" y="92" class="ta b">Inr: start transcripție</text>
<rect x="250" y="132" width="40" height="36" class="fZ"/><text x="270" y="190" text-anchor="middle" class="tm">5′UTR</text>
<rect x="290" y="132" width="70" height="36" class="fP"/><text x="325" y="155" text-anchor="middle" fill="#fff" class="b">exon 1</text>
<text x="296" y="210" class="tok b">ATG</text><line x1="304" y1="196" x2="296" y2="170" class="sok"/>
<text x="366" y="145" class="ti b">GT</text><text x="424" y="145" class="ti b">AG</text><text x="405" y="182" text-anchor="middle" class="tm">intron 1</text>
<rect x="444" y="132" width="60" height="36" class="fP"/><text x="474" y="155" text-anchor="middle" fill="#fff" class="b">exon 2</text>
<text x="509" y="145" class="ti b">GT</text><text x="548" y="145" class="ti b">AG</text><text x="538" y="182" text-anchor="middle" class="tm">intron 2</text>
<rect x="568" y="132" width="60" height="36" class="fP"/><text x="598" y="155" text-anchor="middle" fill="#fff" class="b">exon 3</text>
<text x="600" y="210" class="tw2 b">stop: TAA / TAG / TGA</text><line x1="622" y1="196" x2="624" y2="170" class="sw"/>
<rect x="628" y="132" width="56" height="36" class="fZ"/><text x="656" y="126" text-anchor="middle" class="tm">3′UTR</text>
<text x="656" y="155" text-anchor="middle" class="ti" style="font-size:10px">AATAAA</text>
<path d="M40 248 h200" class="sm" fill="none"/><text x="140" y="266" text-anchor="middle" class="ti b">regiunea laterală 5′</text><text x="140" y="282" text-anchor="middle" class="tm">nu se transcrie</text>
<path d="M250 248 h434" class="sa" fill="none"/><text x="467" y="266" text-anchor="middle" class="ti b">regiunea centrală: cadrul de lectură</text><text x="467" y="282" text-anchor="middle" class="tm">se transcrie integral în ARN premesager</text>
<path d="M694 248 h46" class="sm" fill="none"/><text x="716" y="266" text-anchor="middle" class="ti b">3′</text>
<text x="20" y="40" class="tm">amonte (5′)</text><text x="740" y="40" text-anchor="end" class="tm">aval (3′)</text>
</svg>
<figcaption><b>Figura 1 din curs, redesenată.</b> Promotorul (CG, CAAT, TATA) poziționează ARN polimeraza II la situsul de inițiere. Exonii rămân în ARN-ul matur; intronii, delimitați de GT…AG, sunt decupați.</figcaption>
</figure>
[[img:gena_euc|<b>De la genă la proteină, pe o singură imagine.</b> Sus: gena, cu secvențele reglatoare, promotorul, UTR-urile și cadrul de lectură întrerupt de introni. Mijloc: pre-ARNm după transcripție, apoi ARNm matur cu bonetă 5′ și coadă poli-A. Jos: proteina.]]
<h3>Regiunea laterală 5′</h3>
<p>Conține <b>promotorul</b> și alte elemente reglatoare din amonte, care activează sau blochează masiv transcripția și dau specificitatea tisulară și de stadiu ontogenetic: <b>activatori (enhancers), inhibitori (silencers), LCR (locus control regions), secvențe izolatoare</b>. Deși sunt la distanță, ajung în contact cu complexul transcripțional bazal (ARN polimerază + factori de transcripție generali) prin <b>formarea unei bucle de ADN</b>.</p>
<div class="tw"><table>
<tr><th>Element al promotorului</th><th>Poziție</th><th>Ce leagă / ce face</th></tr>
<tr><td><b>Cutia CG</b></td><td>în amonte de Inr</td><td>Leagă factorul <b>SP1</b>; modulează transcripția bazală a genelor comune. La genele <b>„housekeeping”</b> înlocuiește secvența TATA.</td></tr>
<tr><td><b>Cutia CAAT</b></td><td>între CG și TATA</td><td>Fixează alți factori care modulează transcripția bazală.</td></tr>
<tr><td><b>Cutia TATA</b></td><td>~<b>25 pb</b> în amonte de Inr</td><td>Locul unde se fixează <b>ARN polimeraza II</b>, prin intermediul factorului de transcripție II. Asigură demararea <b>precisă</b>: mutațiile nu împiedică inițierea, dar deplasează punctul de start.</td></tr>
</table></div>
<p>Elementele promotorului sunt secvențe <b>cis</b>-activatoare (pe aceeași moleculă de ADN). Proteinele care se leagă de ele sunt factori <b>trans</b>-activatori. În regiunea proximală se mai găsesc elemente de expresie specific tisulară și elemente de răspuns.</p>
<h3>Regiunea centrală, piesă cu piesă</h3>
<div class="tw"><table>
<tr><th>Piesă</th><th>Ce trebuie știut</th></tr>
<tr><td><b>Inr</b> (situs de inițiere a transcripției)</td><td>La capătul 5′ al secvenței codante, în primul exon. Aici se adaugă ulterior boneta („cap”) care protejează ARNm de 5′-exonuclează.</td></tr>
<tr><td><b>5′UTR</b> (secvența lider)</td><td>Câteva sute de nucleotide, <b>transcrisă dar netranslatată</b>. Rol în stabilitatea ARNm și inițierea translației.</td></tr>
<tr><td><b>Codonul start ATG</b> (AUG în ARNm)</td><td>Codifică metionina. Metionina inițială este de obicei îndepărtată, deci nu toate proteinele încep cu Met.</td></tr>
<tr><td><b>Exoni</b></td><td>Se păstrează în ARNm matur; codifică domenii ale proteinei. Lungime medie <b>150–200 pb</b>; număr de la <b>1 la 79</b> (media 8).</td></tr>
<tr><td><b>Introni</b></td><td>Se transcriu, apoi sunt decupați. Număr = <b>exoni − 1</b>, dar sunt mult mai lungi. Aproape toți încep cu <b>GT</b> (situs donor, la 5′) și se termină cu <b>AG</b> (situs acceptor, la 3′); o mică parte sunt delimitați de AT…AC.</td></tr>
<tr><td><b>Codon stop</b></td><td>În ultimul exon: <b>TAA, TAG, TGA</b>. Marchează sfârșitul cadrului de lectură.</td></tr>
<tr><td><b>3′UTR</b></td><td>Transcrisă, netranslatată. Conține hexanucleotidul <b>AATAAA</b> (semnal de poliadenilare): ARNm este clivat la un dinucleotid CA și primește coada poli-A. Aici se pot fixa proteine și microARN cu rol reglator.</td></tr>
</table></div>
<p><b>Regiunea laterală 3′</b> nu se transcrie; secvențele ei semnal influențează procesarea, stabilitatea și durata de viață a ARNm.</p>
<div class="emery"><b>Curs vs. Emery</b><p>Cursul dă maximum 79 de exoni, cifră care corespunde genei distrofinei. Emery menționează gena <i>TTN</i> (titina), cu 363 de exoni, ca fiind gena cu cei mai mulți exoni. Cursul spune că intronii încep cu GT și se termină cu AG la nivel de ADN; în ARN aceleași semnale se citesc GU…AG.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>O genă are 12 exoni. Câți introni are și ce dinucleotide îi mărginesc?</summary><div>11 introni. Fiecare începe cu GT (situs donor, 5′) și se termină cu AG (situs acceptor, 3′).</div></details>
<details class="q"><summary>Ce se întâmplă dacă o mutație afectează cutia TATA?</summary><div>Transcripția tot pornește, dar punctul de start este deplasat față de normal. TATA asigură precizia inițierii.</div></details>
<details class="q"><summary>Care regiuni sunt transcrise, dar nu translatate?</summary><div>5′UTR, 3′UTR și intronii (aceștia din urmă sunt și eliminați din ARNm matur).</div></details>
</div>`
},
{
id: "transcriptie", titlu: "Dogma centrală și transcripția", pag: "25–28", emery: "cap. 2, p. 15–16", acopera: ["c02-r04", "c02-r05", "c02-r06", "c02-r07"],
html: `
<p>Expresia genică urmează un flux informațional <b>universal și unidirecțional</b>, în două procese strâns corelate: transcripția (în nucleu) și translația (în citoplasmă).</p>
<figure>
<svg viewBox="0 0 760 170" role="img" aria-label="Dogma centrală">
<defs><marker id="c2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="40" y="55" width="130" height="50" rx="10" class="fP"/><text x="105" y="86" text-anchor="middle" fill="#fff" class="b" style="font-size:17px">ADN</text>
<path d="M70 55 C60 10 150 10 140 52" fill="none" class="si" stroke-width="2" marker-end="url(#c2a)"/><text x="105" y="14" text-anchor="middle" class="tm">replicare (doar în faza S)</text>
<line x1="175" y1="80" x2="305" y2="80" class="si" stroke-width="2" marker-end="url(#c2a)"/><text x="240" y="70" text-anchor="middle" class="ti b">transcripție</text><text x="240" y="100" text-anchor="middle" class="tm">nucleu</text>
<rect x="310" y="55" width="150" height="50" rx="10" class="fA"/><text x="385" y="78" text-anchor="middle" fill="#fff" class="b" style="font-size:15px">ARN</text><text x="385" y="96" text-anchor="middle" fill="#fff" style="font-size:11px">mesager · transfer · ribozomal</text>
<line x1="465" y1="80" x2="595" y2="80" class="si" stroke-width="2" marker-end="url(#c2a)"/><text x="530" y="70" text-anchor="middle" class="ti b">translație</text><text x="530" y="100" text-anchor="middle" class="tm">citoplasmă, ribozomi</text>
<rect x="600" y="55" width="130" height="50" rx="10" class="fT"/><text x="665" y="86" text-anchor="middle" fill="#fff" class="b" style="font-size:17px">PROTEINE</text>
<text x="380" y="150" text-anchor="middle" class="tm">Transcripția și translația au loc continuu, cu excepția fazei M.</text>
</svg>
<figcaption><b>Figura 2 din curs: dogma centrală a geneticii.</b> Toate cele trei tipuri de ARN se transcriu de pe ADN; doar ARN-ul mesager este tradus.</figcaption>
</figure>
<h3>Transcripția: regulile</h3>
<ul>
<li>Are loc în <b>nucleu și în mitocondrii</b>.</li>
<li>Se copiază <b>o singură catenă</b>, catena matriță, citită în sens <b>3′→5′</b>. Care catenă este aleasă depinde de localizarea și orientarea promotorului.</li>
<li>ARN-ul se sintetizează în sens <b>5′→3′</b>, pe bază de complementaritate, cu <b>uracil în loc de timină</b> (A=U).</li>
<li>Enzima: <b>ARN polimeraza II</b>, ajutată de factori de transcripție.</li>
</ul>
<div class="tw"><table>
<tr><th>Etapă</th><th>Ce se întâmplă</th></tr>
<tr><td><b>Inițierea</b> (Figura 3 din curs)</td><td><b>TATA binding protein</b>, primul factor de transcripție, se fixează pe cutia TATA din promotor. Ea atrage un complex de factori transcripționali, apoi se fixează și se activează ARN polimeraza.</td></tr>
<tr><td><b>Elongația</b></td><td>Separarea catenelor, adiția nucleotidelor în direcția 5′→3′, desprinderea pre-ARNm, refacerea dublului helix de ADN.</td></tr>
<tr><td><b>Terminarea</b></td><td>Cursul: „adiția unui factor care recunoaște codonul STOP”.</td></tr>
</table></div>
<div class="capcana"><b>Formulare din curs de citit cu atenție</b><p>Codonii stop sunt semnale pentru <b>translație</b>, citite de ribozom. Sfârșitul transcriptului este marcat de semnalul de poliadenilare din 3′UTR (AATAAA), pe care cursul îl descrie corect la structura genei. Reține formularea din carte, dar nu confunda cele două semnale.</p></div>
<div class="emery"><b>Emery adaugă</b><p>Catena de ADN care servește ca matriță se numește antisens; ARNm are aceeași secvență ca catena sens (cu U în loc de T). Factorii de transcripție se leagă de secvențe reglatoare din promotor, nu de 3′UTR.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Catena matriță are secvența 3′-TACGGA-5′. Ce ARN rezultă?</summary><div>5′-AUGCCU-3′. Se citește matrița 3′→5′, se scrie ARN-ul 5′→3′, cu U în loc de T.</div></details>
<details class="q"><summary>Ce proteină se leagă prima de promotor la inițierea transcripției?</summary><div>TATA binding protein, la nivelul cutiei TATA. Ea recrutează ceilalți factori transcripționali și apoi ARN polimeraza.</div></details>
</div>`
},
{
id: "matisare", titlu: "Maturarea ARN premesager și matisarea", pag: "28–31", emery: "cap. 2, p. 15–16", acopera: ["c02-r08"],
html: `
<p>Maturarea face ARN-ul <b>transportabil</b> din nucleu în citoplasmă, <b>stabil</b> și <b>eficient</b> în fixarea pe ribozomi. Are trei componente:</p>
<div class="tw"><table>
<tr><th>Modificare</th><th>Unde</th><th>Ce se adaugă / se scoate</th></tr>
<tr><td><b>Boneta („cap”)</b></td><td>capătul 5′</td><td>o moleculă de guanină</td></tr>
<tr><td><b>Coada poli-A</b></td><td>capătul 3′</td><td>~<b>200</b> nucleotide de adenină; rol major în transportul din nucleu</td></tr>
<tr><td><b>Matisarea (splicing)</b></td><td>în interior</td><td>secționarea precisă a capetelor intronilor, excizia lor, sudarea exonilor</td></tr>
</table></div>
<p>După matisare, ARNm matur este de <b>4–10 ori mai mic</b> decât precursorul. Situsurile de clivare sunt puternic conservate: <b>situs donor 5′-GU</b> și <b>situs acceptor 3′-AG</b>. Orice eroare decalează cadrul de lectură și duce la o proteină anormală.</p>
<p><b>Spliceosomul</b> este un complex nucleoproteic format din ARN mici nucleari (<b>ARNsn</b>, 5 tipuri din seria U1–U6, cu activitate enzimatică) și <b>peste 50 de proteine</b>. Recunoaște capetele 5′ și 3′ ale intronilor.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Tipuri de matisare">
<g>
<text x="20" y="34" class="ti b">pre-ARNm</text>
<rect x="120" y="18" width="70" height="24" class="fP"/><text x="155" y="35" text-anchor="middle" fill="#fff" class="b">1</text>
<line x1="190" y1="30" x2="250" y2="30" class="sm" stroke-width="2"/>
<rect x="250" y="18" width="70" height="24" class="fA"/><text x="285" y="35" text-anchor="middle" fill="#fff" class="b">2</text>
<line x1="320" y1="30" x2="380" y2="30" class="sm" stroke-width="2"/>
<rect x="380" y="18" width="70" height="24" class="fT"/><text x="415" y="35" text-anchor="middle" fill="#fff" class="b">3</text>
<text x="470" y="35" class="tm">exoni 1–2–3, introni între ei</text>
</g>
<g>
<text x="20" y="98" class="ti b">A · constitutivă</text>
<rect x="250" y="82" width="70" height="24" class="fP"/><text x="285" y="99" text-anchor="middle" fill="#fff" class="b">1</text><rect x="320" y="82" width="70" height="24" class="fA"/><text x="355" y="99" text-anchor="middle" fill="#fff" class="b">2</text><rect x="390" y="82" width="70" height="24" class="fT"/><text x="425" y="99" text-anchor="middle" fill="#fff" class="b">3</text>
<text x="480" y="99" class="tm">toți exonii, aceeași ordine</text>
<text x="20" y="158" class="ti b">B · alternativă</text>
<rect x="250" y="142" width="70" height="24" class="fP"/><text x="285" y="159" text-anchor="middle" fill="#fff" class="b">1</text><rect x="320" y="142" width="70" height="24" class="fT"/><text x="355" y="159" text-anchor="middle" fill="#fff" class="b">3</text>
<text x="480" y="159" class="tm">lipsesc unii exoni; ordinea se păstrează</text>
<text x="20" y="218" class="ti b">C · amestecarea exonilor</text>
<rect x="250" y="202" width="70" height="24" class="fA"/><text x="285" y="219" text-anchor="middle" fill="#fff" class="b">2</text><rect x="320" y="202" width="70" height="24" class="fP"/><text x="355" y="219" text-anchor="middle" fill="#fff" class="b">1</text><rect x="390" y="202" width="70" height="24" class="fT"/><text x="425" y="219" text-anchor="middle" fill="#fff" class="b">3</text>
<text x="480" y="219" class="tm">ordinea exonilor nu este respectată</text>
<text x="20" y="278" class="ti b">D · transmatisare</text>
<rect x="250" y="262" width="70" height="24" class="fP"/><text x="285" y="279" text-anchor="middle" fill="#fff" class="b">1</text><rect x="320" y="262" width="70" height="24" class="fG"/><text x="355" y="279" text-anchor="middle" fill="#fff" class="b">X</text>
<text x="480" y="279" class="tm">exoni situați la distanță (alt transcript); rară</text>
</g>
<text x="20" y="318" class="tm">În toate cele patru variante intronii sunt eliminați.</text>
</svg>
<figcaption><b>Figura 4 din curs: cele patru modalități de matisare.</b> Matisarea alternativă explică de ce un singur pre-ARNm poate da mai multe proteine.</figcaption>
</figure>
[[gal:splicing_reactie|<b>Reacția de matisare.</b> Intronul începe cu GU și se termină cu AG. Capătul 5′ al intronului se leagă de o adenină internă și formează o buclă („lasou”); exonii sunt sudați, iar lasoul este eliminat.;;splicing|<b>Matisare alternativă.</b> Din același pre-ARNm, includerea exonului galben sau a celui verde dă doi ARNm diferiți și două izoforme proteice.]]
<div class="exemplu"><b>Exemplul din curs</b><p>Gena <b>calcitoninei</b>: în celulele C tiroidiene produce calcitonină; în hipotalamus, prin matisare alternativă, produce <b>calcitonin-related peptide</b>, cu rol neuromodulator și trofic.</p></div>
<h3>Când matisarea se strică</h3>
<p>Cauza obișnuită este o mutație punctiformă la situsurile de clivare (GT, AG): situsul normal este abolit și se activează <b>situsuri criptice</b>. Consecințe: exoni excluși, introni rămași în ARNm matur, secvențe exonice noi. Boli enumerate în curs: <b>fibroza chistică, fenilcetonuria, tromboza venoasă recurentă, β-talasemiile, hipoparatiroidismul</b>.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Cum poate un singur pre-ARNm să producă două proteine diferite?</summary><div>Prin matisare alternativă: pe lângă introni sunt eliminați și anumiți exoni, diferit de la un țesut la altul. Exemplu: gena calcitoninei.</div></details>
<details class="q"><summary>Ce este un situs criptic?</summary><div>O secvență care seamănă cu un situs de clivare, dar nu este folosită în mod normal. Devine activă când o mutație abolește situsul autentic, iar matisarea se face greșit.</div></details>
</div>`
},
{
id: "cod", titlu: "Codul genetic", pag: "31–34", emery: "cap. 2, p. 17", acopera: ["c02-r10"],
html: `
<p>Translația are nevoie de un „dicționar” (codul genetic) și de un aparat de translație. Fiecare aminoacid este codificat de unul sau mai mulți <b>codoni</b>, secvențe de trei nucleotide. Codul a fost descifrat în <b>1965</b>.</p>
${cod}
<p style="font-size:14px;color:var(--muted)">Figura 5 din curs, reconstruită din tabelul standard al codului genetic. Verde: codonul start. Roșu: cei trei codoni stop. Albastru: triptofanul, alături de metionină singurul aminoacid cu un singur codon.</p>
<div class="tw"><table>
<tr><th>Proprietate</th><th>Explicație din curs</th></tr>
<tr><td><b>Triplet</b></td><td>4 nucleotide luate câte 3: 4³ = <b>64</b> de combinații. <b>61</b> codoni sens pentru 20 de aminoacizi, <b>3</b> codoni stop („nonsens”).</td></tr>
<tr><td><b>Start și stop</b></td><td>Codon inițiator <b>AUG</b>; stop: <b>UAA, UAG, UGA</b>.</td></tr>
<tr><td><b>Degenerat</b></td><td>Mai mulți codoni (sinonimi) pentru același aminoacid. Excepții: <b>Met</b> și <b>Trp</b>, cu un singur codon. Avantaj: protecție față de mutații (mutații silențioase).</td></tr>
<tr><td><b>Lipsit de ambiguitate</b></td><td>Un codon înseamnă întotdeauna un singur aminoacid. Între al 3-lea nucleotid al codonului și primul al anticodonului pot exista împerecheri nespecifice, de aceea cei 61 de codoni sunt citiți de numai <b>32 de anticodoni</b>.</td></tr>
<tr><td><b>Nesuperpozabil și fără virgule</b></td><td>Codonii vecini nu au nucleotide comune și nu sunt separați de nucleotide cu rol de virgulă.</td></tr>
<tr><td><b>Aproape universal</b></td><td>Același la toate organismele; excepție: codul <b>mitocondrial</b>. Universalitatea stă la baza tehnologiei ADN-ului recombinant (insulină umană, factori de coagulare recombinanți).</td></tr>
<tr><td><b>Sensibil la mutații</b></td><td>Mutațiile punctiforme: substituție, deleție, inserție (capitolul 5).</td></tr>
<tr><td><b>„Înghețat”</b></td><td>Nu a mai evoluat semnificativ de la apariția bacteriilor.</td></tr>
</table></div>
[[img:roata_cod|<b>Codul genetic ca „roată”.</b> Se citește din centru spre exterior: prima bază în cercul interior, a doua în inelul mijlociu, a treia în cel exterior. Se vede imediat degenerarea: pentru mulți aminoacizi, a treia bază nu contează.]]
<div class="cheie"><b>Degenerat nu înseamnă ambiguu</b><p>Degenerat: mai mulți codoni → același aminoacid. Neambiguu: un codon → un singur aminoacid. Săgeata merge într-un singur sens.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce sunt suficienți 32 de anticodoni pentru 61 de codoni?</summary><div>Pentru că împerecherea dintre a treia bază a codonului și prima bază a anticodonului este flexibilă, deci un ARNt poate citi mai mulți codoni sinonimi.</div></details>
<details class="q"><summary>Folosind tabelul: ce efect are schimbarea UGG → UGA?</summary><div>UGG codifică triptofanul, UGA este codon stop. Lanțul polipeptidic se oprește prematur (mutație nonsens).</div></details>
</div>`
},
{
id: "translatie", titlu: "Translația: aparat, etape, modificări posttranslaționale", pag: "31, 34–38", emery: "cap. 2, p. 16–17", acopera: ["c02-r09", "c02-r11"],
html: `
<p>Translația traduce ARNm în secvență de aminoacizi. Are loc în <b>citoplasmă, pe ribozomi</b>, cu ajutorul ARN-ului de transfer.</p>
<div class="tw"><table>
<tr><th>Componentă</th><th>Rol</th></tr>
<tr><td><b>ARNm</b></td><td>Furnizează secvența de codoni; se fixează pe ribozom.</td></tr>
<tr><td><b>Ribozomi</b></td><td>Două subunități, libere în citoplasmă, care se unesc la inițiere. Subunitatea mică <b>40S</b>: situsul de fixare a capătului 5′ al ARNm. Subunitatea mare <b>60S</b>: situsurile <b>P</b> (peptidil), <b>A</b> (aminoacil) și <b>E</b> (exit).</td></tr>
<tr><td><b>ARNt</b></td><td>„Traducătorul”: la un capăt aminoacidul, la celălalt anticodonul.</td></tr>
<tr><td><b>Aminoacil-ARNt sintetaze</b></td><td><b>20</b> de enzime, câte una pentru fiecare aminoacid, cu dublă specificitate. Leagă aminoacidul de ARNt în prezența ATP și Mg; au activitate de corecție.</td></tr>
<tr><td><b>Peptidil transferaza</b></td><td>Formează legătura peptidică.</td></tr>
<tr><td><b>Cofactori proteici</b></td><td>Factori de inițiere (eIF), de elongație (EF) și de terminare (RF). Inactivarea lor de către toxine microbiene blochează translația și omoară celula.</td></tr>
</table></div>
[[img:arnt|<b>ARN-ul de transfer.</b> Stânga: structura în „frunză de trifoi”, cu aminoacidul atașat la capătul 3′ și anticodonul (jos) împerecheat cu un codon din ARNm. Dreapta: forma reală, tridimensională, în L.]]
<p>Mai mulți ribozomi care traduc simultan același ARNm formează un <b>poliribozom</b>.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Ribozomul în elongație">
<defs><marker id="c2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<ellipse cx="380" cy="120" rx="210" ry="90" class="fas"/><text x="560" y="60" class="ta b">subunitatea mare 60S</text>
<ellipse cx="380" cy="232" rx="190" ry="34" class="fis"/><text x="574" y="262" class="tin b">subunitatea mică 40S</text>
<line x1="60" y1="222" x2="700" y2="222" class="si" stroke-width="4"/><text x="50" y="226" text-anchor="end" class="ti b">5′</text><text x="710" y="226" class="ti b">3′</text>
<g>
<rect x="232" y="90" width="86" height="110" rx="10" class="fcard sm"/><text x="275" y="110" text-anchor="middle" class="ti b">E</text><text x="275" y="128" text-anchor="middle" class="tm">ieșire</text>
<rect x="337" y="90" width="86" height="110" rx="10" class="fcard sm"/><text x="380" y="110" text-anchor="middle" class="ti b">P</text><text x="380" y="128" text-anchor="middle" class="tm">peptidil</text>
<rect x="442" y="90" width="86" height="110" rx="10" class="fcard sm"/><text x="485" y="110" text-anchor="middle" class="ti b">A</text><text x="485" y="128" text-anchor="middle" class="tm">aminoacil</text>
</g>
<rect x="362" y="140" width="36" height="56" rx="6" class="fA"/><circle cx="380" cy="66" r="10" class="fT"/><circle cx="366" cy="48" r="10" class="fC"/><circle cx="350" cy="32" r="10" class="fG"/><line x1="380" y1="76" x2="380" y2="140" class="si"/>
<rect x="467" y="140" width="36" height="56" rx="6" class="fA"/><circle cx="485" cy="76" r="10" class="fP"/><line x1="485" y1="86" x2="485" y2="140" class="si"/>
<text x="275" y="240" text-anchor="middle" class="mono ti">AUG</text><text x="380" y="240" text-anchor="middle" class="mono ti">GCU</text><text x="485" y="240" text-anchor="middle" class="mono ti">UUC</text>
<line x1="250" y1="285" x2="520" y2="285" class="si" stroke-width="2" marker-end="url(#c2b)"/><text x="385" y="278" text-anchor="middle" class="ti">ribozomul înaintează cu câte un codon, 5′ → 3′</text>
<text x="90" y="60" class="tm">lanț polipeptidic</text><line x1="190" y1="56" x2="338" y2="36" class="sm"/>
</svg>
<figcaption><b>Elongația.</b> ARNt-ul din situsul P poartă lanțul în creștere; un ARNt nou, încărcat cu aminoacidul următor, intră în A; peptidil transferaza le leagă; ribozomul avansează trei nucleotide, iar ARNt-ul descărcat trece în E și pleacă. Schemă proprie după curs (p. 34–37, Figura 6).</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Etapă</th><th>Ce se întâmplă</th></tr>
<tr><td><b>0. Activarea aminoacidului</b></td><td>Fixarea covalentă (prin gruparea −COOH) pe ARNt-ul corespunzător, de către aminoacil-ARNt sintetază. Unii autori o numără ca primă etapă.</td></tr>
<tr><td><b>1. Inițierea</b></td><td>Primul aminoacid (metionina) este plasat în dreptul codonului <b>AUG</b>; cele două subunități ribozomale se asamblează (complexul de inițiere).</td></tr>
<tr><td><b>2. Elongația</b></td><td>ARNt1-Met în situsul P; ARNt2 intră în A; <b>peptidil transferaza</b> formează legătura peptidică; sub acțiunea factorului de elongație, GTP și a unei translocaze, ribozomul se deplasează cu 3 nucleotide; ARNt1 trece în E, ARNt2 în P, A rămâne liber.</td></tr>
<tr><td><b>3. Terminarea</b></td><td>La un <b>codon stop</b>, factorul <b>RF</b> dezasamblează complexul și eliberează peptidul.</td></tr>
</table></div>
<p>Fiecare etapă consumă energie (ATP sau GTP). Aminoacidul nou se atașează la capătul −COOH al lanțului în creștere.</p>
<div class="capcana"><b>Contradicție în curs</b><p>La p. 34 cursul spune corect că ribozomii se deplasează de-a lungul ARNm din direcția <b>5′ spre 3′</b>. La p. 37, la elongație, apare „în direcția 3′→5′”. Corect este 5′→3′: codonul start este la capătul 5′, codonul stop spre 3′.</p></div>
<h3>După translație</h3>
<p>Lanțul primar devine proteină activă, tridimensională, prin: modificări chimice (reversibile) ale unor aminoacizi; <b>clivarea</b> unor aminoacizi; <b>scindarea unui precursor mare</b> (insulina); modificări conformaționale, cu ajutorul proteinelor <b>chaperone</b>. Chaperonele împiedică și plierea prematură a proteinelor care trebuie mai întâi transportate în alt compartiment.</p>
<p>Destinația este dată de <b>secvențe semnal</b>: peptidul semnal, <b>SRP</b> (signal recognition particle), <b>NLS</b> (nuclear localization signal). Exemple de localizări: tubulina în citosol, colagenul extracelular, receptorii hormonilor peptidici pe membrană. Mutațiile semnalelor de localizare pot produce boli genetice.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce situsuri are subunitatea mare a ribozomului și ce se află în fiecare în timpul elongației?</summary><div>P: ARNt-ul cu lanțul polipeptidic. A: ARNt-ul nou venit, cu aminoacidul următor. E: ARNt-ul descărcat, pe cale să părăsească ribozomul.</div></details>
<details class="q"><summary>De ce este esențială activitatea de corecție a aminoacil-ARNt sintetazei?</summary><div>Ribozomul verifică doar potrivirea codon–anticodon, nu și ce aminoacid poartă ARNt-ul. Fidelitatea depinde de încărcarea corectă a ARNt-ului.</div></details>
</div>`
},
{
id: "reglare-epi", titlu: "Reglarea pretranscripțională și mecanismele epigenetice", pag: "38–41", emery: "cap. 9, p. 123–125", acopera: ["c02-r12", "c02-r13"],
html: `
<p>Reglarea expresiei genice are cinci niveluri: <b>pretranscripțional, transcripțional, posttranscripțional, translațional, posttranslațional</b>.</p>
<h3>Nivelul pretranscripțional</h3>
<p>Acționează prin modificări în <b>conformația ADN</b> și prin <b>mecanisme epigenetice</b> care schimbă structura cromatinei.</p>
<div class="exemplu"><b>Exemplu de conformație</b><p><b>Tetrada G</b>: în promotorul unor protooncogene bogate în guanină, ADN-ul se pliază de patru ori și blochează transcripția. Defectele acestui mecanism favorizează cancerul.</p></div>
<p>„Epi” = în plus față de: mecanismele epigenetice <b>nu schimbă secvența nucleotidică</b>, dar schimbă expresia în spațiu și timp.</p>
<div class="tw"><table>
<tr><th>Mecanism</th><th>Efect asupra transcripției</th></tr>
<tr><td><b>Acetilarea histonelor</b></td><td><b>Activează</b>. Dezacetilarea produce represie.</td></tr>
<tr><td><b>Metilarea histonelor</b></td><td>În general <b>represie</b>; excepție: metilarea lizinei în anumite poziții ale <b>H3</b> activează.</td></tr>
<tr><td><b>Remodelarea cromatinei</b></td><td>Repoziționarea activă a nucleozomilor, de către complexe de remodelare.</td></tr>
<tr><td><b>Metilarea ADN</b></td><td>În general <b>represie</b>. Are loc aproape întotdeauna în dinucleotidele <b>CpG</b>, grupate în <b>insule CpG</b> la promotor (și în interiorul unor gene). Enzimă: <b>ADN-metiltransferaza</b>; demetilarea (activare): ADN-demetilaza. Mecanism <b>direct</b>: ADN-ul metilat împiedică legarea factorilor de transcripție. Mecanism <b>indirect</b>: proteine cu domeniu <b>MBD</b> (methyl-cytosine-binding domain) se leagă de grupările metil.</td></tr>
</table></div>
[[gal:acetilare|<b>Acetilarea histonelor.</b> Histon-acetiltransferazele (HAT) adaugă grupări acetil și relaxează cromatina: gena devine accesibilă. Histon-deacetilazele (HDAC) le scot și cromatina se închide.;;metilare_cancer|<b>Metilarea insulelor CpG.</b> Cercuri albe: CpG nemetilat; cercuri negre: metilat. În celula normală insula CpG a promotorului este nemetilată și gena activă; în cancer, promotorul unei gene supresoare este hipermetilat și gena este stinsă.]]
<h3>Implicațiile mecanismelor epigenetice</h3>
<p><b>1. Efecte de poziție.</b> Heterocromatinizarea se poate propaga la regiunile vecine. Exemplu: <b>distrofia musculară facio-scapulo-humerală</b>.</p>
<p><b>2. Expresia monoalelică (excluzia alelică).</b> Dintr-o pereche de alele se exprimă una singură. Cuprinde amprentarea genomică (dependentă de originea parentală) și mecanisme independente de originea parentală, definitive, aleatorii și transmise celulelor-fiice.</p>
<div class="tw"><table>
<tr><th>Tabelul II din curs: excluzia alelică</th><th>Descriere</th></tr>
<tr><td><b>Semnalizarea localizată, dependentă de poziția celulei</b></td><td>În embriogeneză și organogeneză se activează doar anumite gene, în funcție de factorii extracelulari. Permite specializarea celulelor.</td></tr>
<tr><td><b>Recombinările somatice</b></td><td>Într-un număr limitat de celule, în principal imune (limfocitul B, plasmocite); permit apărarea față de non-self.</td></tr>
<tr><td><b>Competiția pentru activator / inhibitor</b></td><td>Două gene concurează pentru același activator. Exemplu: <b>IGF2</b> (exprimată de pe cromozomul patern; factor de creștere) și <b>H19</b> (exprimată de pe cromozomul matern; supresor tumoral).</td></tr>
<tr><td><b>Inactivarea cromozomului X</b></td><td>Compensarea dozajului genic între femei și bărbați.</td></tr>
</table></div>
<p>Perechea IGF2/H19 revine în capitolul 4, la sindromul Beckwith–Wiedemann. Inactivarea X a fost explicată în capitolul 1.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Ce efect au acetilarea histonelor și metilarea ADN asupra transcripției?</summary><div>Acetilarea histonelor activează transcripția (cromatină relaxată). Metilarea ADN, la nivelul insulelor CpG din promotor, o reprimă.</div></details>
<details class="q"><summary>Prin ce două căi oprește metilarea ADN transcripția?</summary><div>Direct: gruparea metil împiedică legarea factorilor de transcripție. Indirect: proteine cu domeniu MBD recunosc citozinele metilate și se leagă de ele.</div></details>
</div>`
},
{
id: "reglare-rest", titlu: "Reglarea transcripțională, posttranscripțională, translațională și posttranslațională", pag: "41–44", emery: "cap. 2, p. 17–18", acopera: ["c02-r14", "c02-r15"],
html: `
<h3>Reglarea transcripțională</h3>
<p>ARN polimeraza II nu este suficientă singură; are nevoie de <b>factori transcripționali</b>: proteine cu configurație particulară, receptori hormonali nucleari, proteine reglatoare specifice de organ. Fiecare are două situsuri: unul de <b>fixare la ADN</b> și unul de <b>legare a altor molecule</b> reglatoare.</p>
<div class="tw"><table>
<tr><th>Tabelul III: configurație</th><th>Descriere</th><th>Exemple</th></tr>
<tr><td><b>Elice–răsucire–elice</b></td><td>2 spirale α unite printr-o secvență de aminoacizi la nivelul căreia se produce răsucirea</td><td>Factorul nuclear 1; factorii care se fixează pe secvența CAAT</td></tr>
<tr><td><b>Elice–buclă–elice</b></td><td>2 spirale α unite de o buclă lungă și flexibilă</td><td>Control al funcției genelor prin dimeri / heterodimeri</td></tr>
<tr><td><b>Degete de zinc</b></td><td>23 de aminoacizi în formă de deget, cu un ion de Zn</td><td>Receptorii nucleari steroidici; receptorii pentru LDL</td></tr>
<tr><td><b>Fermoar de leucină</b></td><td>2 spirale α unite la nivelul resturilor de leucină</td><td>Proteina CREB; produsele oncogenelor <b>JUN</b> și <b>FOS</b></td></tr>
</table></div>
[[gal:zinc|<b>Degete de zinc pe ADN.</b> Fiecare „deget” (albastru, cu ionul de zinc verde) intră în incizura mare și recunoaște câteva baze.;;leucina|<b>Fermoar de leucină.</b> Două elice α se țin una de alta prin leucine (roșu) și prind ADN-ul ca un clește, tot prin incizura mare.]]
<h3>Reglarea posttranscripțională</h3>
<p>Privește maturarea, localizarea, eficacitatea traducerii și degradarea ARNm. Mecanisme:</p>
<ul>
<li><b>matisarea alternativă</b>;</li>
<li><b>poliadenilarea alternativă</b>;</li>
<li><b>modificarea structurii primare a ARNm</b> (editare): deleții, inserții sau, cel mai frecvent, substituții <b>C→U</b> sau <b>U→C</b>;</li>
<li><b>modificarea stabilității</b> și stocajul ARNm: o coadă poli-A mai lungă înseamnă stabilitate mai mare. ARNm-ul unor oncogene, anormal de stabil, explică proliferarea exagerată din neoplazii.</li>
</ul>
<h3>Reglarea translațională</h3>
<p>Mecanism puțin utilizat. Exemplul din curs: <b>fierul</b> alimentar modifică, după necesități, sinteza <b>transferinei și a receptorului ei</b>, influențând translația, nu transcripția.</p>
<h3>Reglarea posttranslațională (Tabelul IV)</h3>
<div class="tw"><table>
<tr><th>Tip</th><th>Modificare</th><th>Enzimă / aminoacid țintă</th></tr>
<tr><td rowspan="5"><b>Chimice simple</b></td><td>fosforilare</td><td>kinaze specifice; <b>Tyr, Ser, Thr</b></td></tr>
<tr><td>metilare</td><td>metilaze; <b>Lys</b></td></tr>
<tr><td>hidroxilare</td><td><b>Pro și Lys</b> → hidroxiprolină, hidroxilizină (colagen)</td></tr>
<tr><td>acetilare</td><td>acetilaze; <b>Lys</b></td></tr>
<tr><td>carboxilare</td><td>gamma-carboxilază; <b>Glu</b></td></tr>
<tr><td><b>Chimice complexe</b></td><td colspan="2">adăugarea de grupe prostetice (glucidice, lipidice, metalice)</td></tr>
<tr><td><b>Clivare posttranslațională</b></td><td colspan="2">Specifică peptidelor secretate și activate la distanță. Maturarea unor proteine (formarea β-globinei) și activarea prin îndepărtarea secvenței lider necesare traversării membranelor: <b>preproinsulina</b>, cu secvența „pre” formată din aminoacizii 1–24.</td></tr>
</table></div>
<div class="cheie"><b>Legături cu alte capitole</b><p>Hidroxilarea prolinei și lizinei explică de ce colagenul este vulnerabil (osteogeneza imperfectă, capitolul 7). Clivarea unui precursor (preproinsulină → insulină) este același principiu prin care multe enzime și hormoni sunt activați abia la destinație.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Asociază fiecare configurație de factor de transcripție cu un exemplu din curs.</summary><div>Elice–răsucire–elice: factorul nuclear 1, factorii legați de CAAT. Degete de zinc: receptorii nucleari steroidici. Fermoar de leucină: CREB, JUN, FOS. Elice–buclă–elice: reglatori care funcționează ca dimeri.</div></details>
<details class="q"><summary>La ce nivel de reglare acționează fierul, după curs?</summary><div>La nivel translațional: modifică sinteza transferinei și a receptorului ei fără să schimbe transcripția.</div></details>
</div>`
}
]
});
})();
