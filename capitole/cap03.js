/* Capitolul 3 — Genomul uman (curs p. 47–66) */
GHID.capitol({
id: "c03",
intro: `<p class="lead">Genomul uman are două componente foarte inegale: un genom nuclear uriaș, în care secvențele care codifică proteine sunt o excepție, și un genom mitocondrial minuscul, în care aproape totul codifică. Capitolul se înțelege cel mai ușor comparându-le punct cu punct.</p>
<div class="cheie"><b>Cifrele de bază</b><p>Genom nuclear: <b>99,5%</b> din ADN, <b>3,2 Gb</b>, eucromatină 94% și heterocromatină 6%, aproximativ <b>30.000</b> de gene (cifră provizorie în textul cursului). Genom mitocondrial: <b>16,6 kb</b>, <b>37</b> de gene.</p></div>`,
sectiuni: [
{
id: "concept", titlu: "Conceptul de genom și arhitectura genomului nuclear", pag: "47–51", emery: "cap. 2, p. 12–13 (Box 2.1)", acopera: ["c03-r01", "c03-r02", "c03-r03"],
html: `
<p>Termenul „genom” (Winkler, <b>1920</b>, din „gene” + „cromozom”) desemna inițial setul haploid de cromozomi. Astăzi înseamnă ansamblul secvențelor de ADN ale unei <b>specii</b>, deci exclude variabilitatea dintre indivizi (pentru un individ se vorbește despre „genom personalizat”). Proiectul Genomului Uman a publicat prima variantă în <b>2001</b> și varianta finisată în <b>2004</b>.</p>
<p>Genomul nuclear are <b>24 de molecule de ADN liniare diferite</b> (22 autozomi, X și Y).</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Compoziția genomului nuclear">
<text x="20" y="24" class="ti b" style="font-size:15px">Genomul nuclear</text>
<rect x="20" y="36" width="180" height="34" class="fP"/><rect x="200" y="36" width="540" height="34" class="fZ"/>
<text x="110" y="58" text-anchor="middle" fill="#fff" class="b">ADN genic 25%</text><text x="470" y="58" text-anchor="middle" class="b" fill="#1f2a37">ADN extragenic 75%</text>
<line x1="20" y1="70" x2="20" y2="110" class="sm"/><line x1="200" y1="70" x2="330" y2="110" class="sm"/>
<rect x="20" y="110" width="8" height="30" class="fT"/><rect x="28" y="110" width="302" height="30" class="fas"/>
<text x="20" y="160" class="tw2 b">exoni: 1,1% din genom</text>
<text x="180" y="130" text-anchor="middle" class="ti">secvențe necodante</text>
<text x="28" y="180" class="tm">5′UTR, 3′UTR, introni,</text><text x="28" y="196" class="tm">secvențe reglatoare, pseudogene</text>
<line x1="200" y1="70" x2="400" y2="110" class="sm"/><line x1="740" y1="70" x2="740" y2="110" class="sm"/>
<rect x="400" y="110" width="110" height="30" class="fis"/><rect x="510" y="110" width="26" height="30" class="fG"/><rect x="536" y="110" width="204" height="30" class="fA"/>
<text x="455" y="130" text-anchor="middle" class="ti">unice</text><text x="638" y="130" text-anchor="middle" fill="#fff" class="b">repetiții dispersate ~45%</text>
<text x="400" y="160" class="ti b">secvențe unice / puține copii</text><text x="400" y="176" class="tm">gene ARN, alte secvențe</text><text x="400" y="192" class="tm">transcrise, conservate</text>
<text x="523" y="216" text-anchor="middle" class="tin b">repetiții în tandem</text><line x1="523" y1="140" x2="523" y2="202" class="sin"/>
<text x="523" y="232" text-anchor="middle" class="tm">satelit, minisatelit,</text><text x="523" y="248" text-anchor="middle" class="tm">microsatelit</text>
<text x="640" y="160" class="tok b">produse prin transpoziție</text><text x="640" y="176" class="tm">LINEs, SINEs,</text><text x="640" y="192" class="tm">LTR, transpozoni ADN</text>
<text x="20" y="290" class="tm">Clasificarea veche: nerepetitiv 60% = secvențe unice · moderat repetitiv 30% = repetiții dispersate ·</text>
<text x="20" y="308" class="tm">înalt repetitiv 10% = repetiții în tandem. Lățimile barelor de jos sunt orientative.</text>
</svg>
<figcaption><b>Figura 7 din curs, redesenată.</b> Doar un sfert din genom ține de gene, iar din acesta doar o fracțiune mică (1,1% din genom) codifică efectiv proteine.</figcaption>
</figure>
<h3>1. Genele care codifică proteine</h3>
<ul>
<li>Doar <b>1,1%</b> din genom. Complexitatea nu vine din numărul de gene: aproximativ 30.000 de gene produc un număr <b>triplu</b> de proteine.</li>
<li><b>Densitate inegală</b>: cromozomii <b>13, 18, X, Y</b> sunt săraci în gene; <b>17, 19, 22</b> sunt bogați. Regiunile subtelomerice sunt dense; există „deșerturi” de ADN necodant (aproximativ 24% din genom).</li>
<li><b>Mărime variabilă</b>: sub 10 kb (histona H4, α-interferon, insulină, β-globină) până la <b>distrofină, 2.400 kb</b>, cea mai mare genă cunoscută.</li>
<li>În medie <b>8–9 exoni/genă</b>, <b>145 pb/exon</b>; intronii sunt mult mai lungi. <b>Genele pentru histone și interferoni nu au introni.</b></li>
</ul>
<h3>2. Secvențele necodante ale ADN-ului genic (Tabelul V)</h3>
<p>Numit cândva „junk ADN”. Majoritatea este transcrisă (ceea ce nu înseamnă neapărat că are funcție), iar o parte reglează sinteza proteinelor.</p>
<div class="tw"><table>
<tr><th>Secvență</th><th>Caracteristici</th></tr>
<tr><td><b>5′UTR, 3′UTR</b></td><td>Elemente cis-reglatoare; în regiunile reglatoare 5′ și 3′ ale genei sau în primul și ultimul exon.</td></tr>
<tr><td><b>Introni</b></td><td>Transcriși în pre-ARNm și îndepărtați prin matisare. Unii au funcții catalitice.</td></tr>
<tr><td><b>Pseudogene</b></td><td>Copii nefuncționale ale unor gene: „gene moarte”. Apar prin mutații; duplicația este cauza principală.</td></tr>
<tr><td><b>Secvențe reglatoare</b></td><td><b>Promotor</b>: fixează ARN polimeraza, inițiază transcripția. <b>Enhancer</b>: amplifică. <b>Silencer</b>: reprimă. <b>Insulator</b>: izolează gena de vecine.</td></tr>
</table></div>
<p>Categoriile funcționale ale genelor, după curs: <b>41%</b> fără funcție cunoscută; 14,5% metabolismul și reglarea acizilor nucleici; 14,2% transducția semnalelor; în scădere până la 2,9% protooncogene și 0,9% gene pentru imunoglobuline.</p>
<div class="emery"><b>Curs vs. Emery și inconsecvențe interne</b>
<p>1. <b>Numărul de gene.</b> Textul cursului dă aproximativ 30.000; Tabelul VII din același capitol dă aproximativ 21.000; Emery dă în jur de 21.000 de gene care codifică proteine. Cifra actuală este cea din tabel și din Emery.</p>
<p>2. <b>Mărimea genomului.</b> Textul: 3,2 Gb; Tabelul VII: aproximativ 3.100 Mb; Emery: aproximativ 3 × 10⁹ pb. Sunt rotunjiri ale aceleiași valori.</p>
<p>3. <b>Cromozomi bogați și săraci în gene.</b> Curs: săraci 13, 18, X, Y; bogați 17, 19, 22. Emery: bogați 19 și 22; săraci 4 și 18.</p>
<p>4. <b>Proporția de ADN repetitiv.</b> Emery: 60–70% secvențe unice sau cu număr mic de copii, 30–40% moderat sau înalt repetitive. Cursul, pe clasificarea nouă, dă aproximativ 45% numai pentru repetițiile dispersate.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Cum explică cursul faptul că doar 1,1% din genom codifică proteine, deși organismul este foarte complex?</summary><div>Complexitatea nu depinde de numărul de gene: genele produc de aproximativ trei ori mai multe proteine decât numărul lor, iar restul genomului are în bună parte rol reglator.</div></details>
<details class="q"><summary>Ce este o pseudogenă?</summary><div>O copie nefuncțională a unei gene, care și-a pierdut funcția prin mutații, de obicei după o duplicație.</div></details>
</div>`
},
{
id: "extragenic", titlu: "ADN-ul extragenic: gene ARN, duplicații segmentare, repetiții în tandem", pag: "51–54", emery: "cap. 2, p. 13–15", acopera: ["c03-r04"],
html: `
<h3>3. Genele ARN</h3>
<p>Sunt transcrise în <b>ARN necodant</b> (ARNnc), care nu este tradus, dar participă la translație și la reglare. Ar putea fi la fel de numeroase ca genele pentru proteine.</p>
<div class="tw"><table>
<tr><th>Funcție</th><th>Tipuri de ARN</th></tr>
<tr><td>Sinteza proteinelor</td><td><b>ARNr</b>, <b>ARNt</b>, <b>ARNsrp</b> (din particula de recunoaștere a semnalului; dirijează polipeptidele în formare)</td></tr>
<tr><td>Replicare</td><td><b>ARN-ul telomerazei</b>: replicarea telomerelor</td></tr>
<tr><td>Procesare posttranscripțională</td><td><b>ARNsn</b> (nuclear mic), <b>ARNsno</b> (nucleolar mic)</td></tr>
<tr><td>Reglare genică și altele</td><td>microARN, ARN lung necodant; amprentare, inactivarea cromozomului X</td></tr>
</table></div>
<p>Mutațiile genelor ARN dau boli mai subtile și mai greu de identificat: neoplazii (microARN, ARNlinc), <b>sindromul Prader–Willi</b> (deleția ARNsno <b>SNORD116</b>), boala Alzheimer, autism.</p>
<h3>4. Duplicațiile segmentare (dupliconi)</h3>
<p><b>5,5%</b> din genomul nuclear. Blocuri lungi, <b>netranspozabile</b>, în număr mic de copii, cvasi-identice, situate pe același cromozom sau pe cromozomi diferiți. Favorizează <b>crossing-over-ul inegal</b>, cu deleții și duplicații:</p>
<ul><li>boli cromozomiale: sindroamele <b>Williams</b> și <b>DiGeorge</b>;</li><li>boli genice: <b>Charcot–Marie–Tooth</b>;</li><li>variații ale numărului de copii (<b>CNV</b>), reluate în capitolul 5.</li></ul>
<h3>5. Repetițiile în tandem (Tabelul VI)</h3>
<div class="tw"><table>
<tr><th>Subtip</th><th>Unitatea repetată</th><th>Localizare</th><th>Ce trebuie reținut</th></tr>
<tr><td><b>ADN microsatelit</b> (SSR, simple sequence repeats)</td><td><b>1–15 pb</b>; mai ales dinucleotidele AC și GT</td><td>uniform în tot genomul</td><td>Polimorfi. Împreună cu minisateliții: SSR, aproximativ 3% din genom.</td></tr>
<tr><td><b>ADN minisatelit</b> (VNTR, variable number of tandem repeats)</td><td><b>15–65 pb</b></td><td>telomeric, pe toți cromozomii cu excepția <b>X și Y</b></td><td><b>Hipervariabili</b>: numărul de repetiții diferă de la o persoană la alta. Formează „<b>amprenta genetică</b>”: medicină legală, diagnostic molecular, cartografiere.</td></tr>
<tr><td><b>ADN satelit</b></td><td>blocuri mari</td><td>heterocromatina de la centromer, telomere, constricții secundare</td><td>Rol arhitectural: stabilizarea cromozomului, distribuția cromozomilor la diviziune, inițierea recombinării.</td></tr>
</table></div>
<div class="cheie"><b>Ordinea de mărime</b><p>Micro (1–15 pb) &lt; mini (15–65 pb) &lt; satelit. Minisateliții sunt cei folosiți pentru amprenta genetică. Microsateliții trinucleotidici revin la mutațiile dinamice (capitolul 5).</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce pot duplicațiile segmentare să producă deleții?</summary><div>Fiind secvențe aproape identice aflate în locuri diferite, se pot alinia greșit în meioză. Crossing-over-ul inegal care rezultă dă un cromozom cu deleție și unul cu duplicație.</div></details>
<details class="q"><summary>Ce tip de repetiție în tandem stă la baza amprentei genetice și de ce?</summary><div>Minisateliții (VNTR): numărul de repetiții este hipervariabil între indivizi, deci profilul este practic unic.</div></details>
</div>`
},
{
id: "transpozoni", titlu: "Repetițiile dispersate și transpozonii", pag: "55–58", emery: "cap. 2, p. 15", acopera: ["c03-r05"],
html: `
<p>Repetițiile dispersate sunt produse prin <b>transpoziție</b>: deplasarea unei secvențe (transpozon) în alt loc din genom. Reprezintă aproximativ <b>45%</b> din genom și au dus la expansiunea lui.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Transpozoni de clasa 1 și 2">
<defs><marker id="c3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<text x="20" y="24" class="ti b" style="font-size:15px">Clasa 1 · retrotranspozoni · „copy &amp; paste” (replicativ)</text>
<line x1="20" y1="60" x2="300" y2="60" class="si" stroke-width="3"/><rect x="110" y="48" width="70" height="24" class="fA"/><text x="145" y="92" text-anchor="middle" class="tm">secvența donor rămâne</text>
<path d="M145 48 C150 20 300 20 350 44" fill="none" class="sm" stroke-dasharray="4 4" marker-end="url(#c3a)"/>
<rect x="352" y="36" width="70" height="20" rx="10" class="fC"/><text x="387" y="50" text-anchor="middle" class="b" fill="#1f2a37" style="font-size:11px">ARN</text>
<text x="387" y="76" text-anchor="middle" class="tm">transcriptază</text><text x="387" y="92" text-anchor="middle" class="tm">inversă</text>
<line x1="425" y1="46" x2="490" y2="56" class="sm" marker-end="url(#c3a)"/>
<line x1="470" y1="60" x2="740" y2="60" class="si" stroke-width="3"/><rect x="560" y="48" width="70" height="24" class="fA"/><text x="595" y="92" text-anchor="middle" class="tm">copie nouă, în alt loc</text>
<text x="20" y="124" class="tok b">LINEs · SINEs · LTR</text><text x="200" y="124" class="tm">numărul de copii crește</text>
<line x1="20" y1="146" x2="740" y2="146" class="sm" stroke-dasharray="2 5"/>
<text x="20" y="178" class="ti b" style="font-size:15px">Clasa 2 · transpozoni ADN · „cut &amp; paste” (conservativ)</text>
<line x1="20" y1="214" x2="110" y2="214" class="si" stroke-width="3"/><line x1="180" y1="214" x2="300" y2="214" class="si" stroke-width="3"/>
<rect x="110" y="202" width="70" height="24" fill="none" class="sm" stroke-dasharray="4 4"/><text x="145" y="246" text-anchor="middle" class="tm">excizat din locul donor</text>
<path d="M145 202 C200 160 500 160 590 198" fill="none" class="sm" marker-end="url(#c3a)"/><text x="370" y="170" text-anchor="middle" class="ti">transpozază</text>
<line x1="470" y1="214" x2="740" y2="214" class="si" stroke-width="3"/><rect x="560" y="202" width="70" height="24" class="fT"/><text x="595" y="246" text-anchor="middle" class="tm">inserat la țintă</text>
<text x="20" y="278" class="tw2 b">transpozoni ADN „fosili”</text><text x="200" y="278" class="tm">ADN polimeraza umple golurile, ADN ligaza închide scheletul</text>
</svg>
<figcaption><b>Figura 8 din curs, redesenată.</b> Clasa 1 trece printr-un intermediar ARN și lasă originalul pe loc. Clasa 2 mută efectiv secvența.</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Element</th><th>Autonomie</th><th>Ce trebuie reținut</th></tr>
<tr><td><b>LINEs</b> (long interspersed nuclear elements)</td><td><b>LINE 1: autonomă</b> (codifică transcriptaza inversă și endonucleaza). LINE 2 și 3: inactive.</td><td>Cele mai frecvente; în benzile <b>G pozitive, bogate în AT</b>. Inserțiile LINE 1 pot produce boli: unele cazuri de <b>hemofilie A și B</b>, <b>distrofie Duchenne</b>.</td></tr>
<tr><td><b>SINEs</b> (short interspersed nuclear elements)</td><td><b>Neautonome</b>: folosesc enzimele LINE 1.</td><td>Familia <b>Alu</b>, cea mai abundentă: deleții și rearanjări; o inserție Alu a fost găsită în <b>neurofibromatoză</b>. Familia SVA: cel mai nou retroelement.</td></tr>
<tr><td><b>Retrotranspozoni LTR</b></td><td>—</td><td>Asemănători retrovirusurilor, dar fără gena de înveliș.</td></tr>
<tr><td><b>Transpozoni ADN „fosili”</b></td><td>inactivi de mult timp</td><td>Au folosit mecanismul „taie și lipește”.</td></tr>
</table></div>
<p><b>Cum se apără celula</b> de retrotranspoziție: interferența ARN (microARN, ARN interferent mic); <b>metilarea ADN</b> în celulele somatice; proteinele familiei <b>APOBEC</b>.</p>
<p><b>Roluri</b> ale repetițiilor dispersate: remodelarea genomului și crearea de gene noi; markeri paleontologici; LINE 1 ca mecanism de reparare a telomerelor; SINEs modulează expresia genelor; sursă de variabilitate individuală.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce se spune că SINEs „parazitează” LINE 1?</summary><div>SINEs nu codifică transcriptaza inversă, deci nu se pot copia singure. Se multiplică folosind enzimele produse de LINE 1.</div></details>
<details class="q"><summary>Care clasă de transpozoni crește numărul de copii din genom?</summary><div>Clasa 1 (retrotranspozonii): elementul este copiat prin intermediar ARN, iar originalul rămâne. Clasa 2 doar mută secvența.</div></details>
</div>`
},
{
id: "mitocondrial", titlu: "Genomul mitocondrial", pag: "58–61", emery: "cap. 2, p. 15; cap. 6, p. 81–82", acopera: ["c03-r06", "c03-r07"],
html: `
<p>ADN-ul mitocondrial (ADNmt) este <b>circular, bicatenar</b>, secvențiat complet în <b>1981</b> (Anderson). Catena <b>grea (H)</b> este bogată în guanină, catena <b>ușoară (L)</b> în citozină. Există și <b>ADN 7S</b>, o piesă scurtă adițională la catena H, în bucla de control. O celulă are câteva mii de copii, adică până la 0,5–1% din ADN-ul ei.</p>
<figure><img src="fig/c03_adnmt.svg" alt="Harta ADN-ului mitocondrial">
<figcaption><b>Harta ADNmt, din adnotarea genomului.</b> Numărătoarea din date confirmă cursul: 37 de gene, dintre care 28 pe catena H și 9 pe catena L; 13 codifică proteine, 22 sunt ARNt și 2 ARNr. Genele sunt lipite una de alta, fără introni.</figcaption></figure>
<div class="tw"><table>
<tr><th>Tabelul VII</th><th>Genom nuclear</th><th>Genom mitocondrial</th></tr>
<tr><td>Mărime</td><td>~3.100 Mb</td><td><b>16,6 kb (16.569 pb)</b></td></tr>
<tr><td>Molecule diferite</td><td>23 la femeie, 24 la bărbat; liniare</td><td>1 moleculă circulară</td></tr>
<tr><td>Molecule pe celulă</td><td>23 (haploid), 46 (diploid)</td><td>variabil: câteva mii de copii</td></tr>
<tr><td>Proteine asociate</td><td>histone și nehistonice</td><td><b>niciuna</b></td></tr>
<tr><td>ADN care codifică proteine</td><td>~1,1%</td><td><b>~66%</b></td></tr>
<tr><td>Gene</td><td>~21.000</td><td><b>37</b> (28 pe H, 9 pe L): ARNr, ARNt și proteine</td></tr>
<tr><td>Densitatea genelor</td><td>mică (1 la 120 kb)</td><td>mare (1 la 0,45 kb)</td></tr>
<tr><td>Introni</td><td>prezenți (excepție: histone, interferon)</td><td><b>absenți</b></td></tr>
<tr><td>ADN repetitiv</td><td>peste 50%</td><td>foarte puțin</td></tr>
<tr><td>Transcripție</td><td>de obicei individuală, de pe catena matriță</td><td><b>multigenică, de pe ambele catene</b></td></tr>
<tr><td>Cod genetic</td><td>61 codoni sens, 3 stop</td><td><b>60 codoni sens, 4 stop</b></td></tr>
<tr><td>Reparare</td><td>numeroase mecanisme, eficiente</td><td>absentă; mutațiile se acumulează de 10–20 de ori mai repede</td></tr>
<tr><td>Recombinare</td><td>prezentă</td><td><b>absentă</b></td></tr>
<tr><td>Replicare</td><td>bidirecțională</td><td><b>unidirecțională</b>, cu origini diferite pentru cele două catene</td></tr>
<tr><td>Transmitere</td><td>mendeliană; paternă pentru Y</td><td><b>exclusiv maternă</b></td></tr>
</table></div>
<h3>De ce mutează ADNmt de 10–20 de ori mai des</h3>
<ul>
<li>proporție mare de regiuni codante, deci aproape orice mutație nimerește ceva util;</li>
<li><b>fără histone</b> protectoare;</li>
<li><b>ADN polimeraza gamma</b> tolerează erorile;</li>
<li>sisteme de reparare puține și ineficiente;</li>
<li>multe mitocondrii pe celulă, fiecare cu mai multe molecule de ADN.</li>
</ul>
<p>Mutațiile se acumulează în timp ca mutații somatice, ceea ce explică progresia bolilor mitocondriale, bolile neurodegenerative ale vârstnicului și senescența.</p>
<h3>Transmiterea maternă</h3>
<p>Întreaga citoplasmă a zigotului provine din ovul. De aceea <b>o mamă afectată transmite mutația tuturor copiilor, băieți și fete</b>, dar numai fetele o transmit mai departe.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Arbore genealogic cu transmitere mitocondrială">
<g stroke-width="2" class="si" fill="none">
<line x1="304" y1="40" x2="376" y2="40"/><line x1="340" y1="40" x2="340" y2="80"/><line x1="150" y1="80" x2="560" y2="80"/>
<line x1="150" y1="80" x2="150" y2="104"/><line x1="340" y1="80" x2="340" y2="104"/><line x1="560" y1="80" x2="560" y2="104"/>
<line x1="174" y1="120" x2="216" y2="120"/><line x1="195" y1="120" x2="195" y2="170"/><line x1="130" y1="170" x2="260" y2="170"/><line x1="130" y1="170" x2="130" y2="190"/><line x1="260" y1="170" x2="260" y2="190"/>
<line x1="494" y1="120" x2="536" y2="120"/><line x1="515" y1="120" x2="515" y2="170"/><line x1="450" y1="170" x2="580" y2="170"/><line x1="450" y1="170" x2="450" y2="190"/><line x1="580" y1="170" x2="580" y2="190"/>
</g>
<rect x="272" y="24" width="32" height="32" class="fcard si" stroke-width="2"/><circle cx="392" cy="40" r="16" class="fP si" stroke-width="2"/>
<circle cx="150" cy="120" r="16" class="fP si" stroke-width="2"/><rect x="216" y="104" width="32" height="32" class="fcard si" stroke-width="2"/>
<rect x="324" y="104" width="32" height="32" class="fP si" stroke-width="2"/>
<rect x="544" y="104" width="32" height="32" class="fP si" stroke-width="2"/><circle cx="478" cy="120" r="16" class="fcard si" stroke-width="2"/>
<circle cx="130" cy="206" r="16" class="fP si" stroke-width="2"/><rect x="244" y="190" width="32" height="32" class="fP si" stroke-width="2"/>
<circle cx="450" cy="206" r="16" class="fcard si" stroke-width="2"/><rect x="564" y="190" width="32" height="32" class="fcard si" stroke-width="2"/>
<text x="20" y="44" class="ti b">I</text><text x="20" y="124" class="ti b">II</text><text x="20" y="210" class="ti b">III</text>
<text x="620" y="110" class="tm">bărbatul afectat</text><text x="620" y="126" class="tm">nu transmite</text>
<text x="20" y="244" class="tm">Violet = afectat. Cerc = femeie, pătrat = bărbat.</text>
</svg>
<figcaption><b>Semnătura arborelui mitocondrial.</b> Toți copiii unei femei afectate moștenesc mutația; niciun copil al unui bărbat afectat nu o moștenește. Schemă proprie, simboluri standard de pedigree.</figcaption>
</figure>
<div class="emery"><b>Emery adaugă</b><p>Emery confirmă 16,6 kb și 37 de gene: 2 ARNr, 22 ARNt și 13 gene pentru proteine ale fosforilării oxidative. Restul proteinelor mitocondriale sunt codificate de gene nucleare, deci multe boli „mitocondriale” se transmit mendelian.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Prin ce diferă codul genetic mitocondrial de cel nuclear, după tabel?</summary><div>Are 60 de codoni sens și 4 codoni stop, față de 61 și 3 în codul nuclear.</div></details>
<details class="q"><summary>Un bărbat cu neuropatie optică Leber întreabă ce risc au copiii lui. Ce îi răspunzi?</summary><div>Practic niciunul: ADNmt se transmite exclusiv pe linie maternă. Riscul ar exista pentru copiii surorilor lui.</div></details>
<details class="q"><summary>Dă trei motive pentru rata mare de mutație a ADNmt.</summary><div>Lipsa histonelor, lipsa mecanismelor eficiente de reparare, toleranța la erori a ADN polimerazei gamma (plus densitatea mare de secvențe codante).</div></details>
</div>`
},
{
id: "boli-mt", titlu: "Bolile mitocondriale: heteroplasmie, prag, tablouri clinice", pag: "61–64", emery: "cap. 6, p. 81–82; cap. 18", acopera: ["c03-r08"],
html: `
<p>Mutațiile ADNmt pot fi deleții, inserții, substituții, rearanjări. Bolile rezultate au mai ales simptomatologie <b>neuromusculară</b>, <b>debut precoce</b> și <b>evoluție rapid progresivă</b>.</p>
<h3>Trei concepte care explică variabilitatea</h3>
<div class="tw"><table>
<tr><th>Concept</th><th>Definiție</th></tr>
<tr><td><b>Heteroplasmie</b></td><td>Amestec de molecule de ADNmt mutante și normale în aceeași celulă.</td></tr>
<tr><td><b>Homoplasmie</b></td><td>Un singur tip de ADNmt: toate normale sau toate mutante.</td></tr>
<tr><td><b>Segregare replicativă</b></td><td>La diviziune, ADNmt se împarte <b>aleatoriu</b> între celulele-fiice, deci proporția de ADN mutant diferă între linii celulare și țesuturi.</td></tr>
<tr><td><b>Efect de prag</b></td><td>Semnele clinice apar când producția de energie scade sub un prag critic, specific fiecărui țesut.</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Heteroplasmie și segregare replicativă">
<defs><marker id="c3b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="tm"/></marker></defs>
<circle cx="110" cy="110" r="60" class="fcard si" stroke-width="1.5"/>
<g class="fA"><circle cx="85" cy="85" r="9"/><circle cx="130" cy="80" r="9"/><circle cx="145" cy="120" r="9"/><circle cx="90" cy="140" r="9"/></g>
<g class="fT"><circle cx="110" cy="110" r="9"/><circle cx="75" cy="115" r="9"/><circle cx="120" cy="145" r="9"/><circle cx="108" cy="62" r="9"/></g>
<text x="110" y="196" text-anchor="middle" class="ti b">celulă heteroplasmică</text><text x="110" y="213" text-anchor="middle" class="tm">50% ADNmt mutant</text>
<line x1="180" y1="110" x2="270" y2="60" class="sm" stroke-width="1.5" marker-end="url(#c3b)"/><line x1="180" y1="110" x2="270" y2="160" class="sm" stroke-width="1.5" marker-end="url(#c3b)"/>
<circle cx="320" cy="55" r="42" class="fcard si" stroke-width="1.5"/><g class="fA"><circle cx="300" cy="40" r="8"/><circle cx="335" cy="38" r="8"/><circle cx="342" cy="68" r="8"/><circle cx="305" cy="72" r="8"/></g><circle cx="322" cy="55" r="8" class="fT"/>
<text x="380" y="50" class="tok b">20% mutant</text><text x="380" y="67" class="tm">sub prag: țesut normal</text>
<circle cx="320" cy="170" r="42" class="fcard si" stroke-width="1.5"/><g class="fT"><circle cx="300" cy="155" r="8"/><circle cx="335" cy="153" r="8"/><circle cx="342" cy="183" r="8"/><circle cx="305" cy="187" r="8"/></g><circle cx="322" cy="170" r="8" class="fA"/>
<text x="380" y="165" class="tw2 b">80% mutant</text><text x="380" y="182" class="tm">peste prag: deficit energetic, boală</text>
<text x="560" y="30" class="ti b">Sensibilitate la deficit</text>
<g class="tm"><text x="560" y="54">1. sistem nervos</text><text x="560" y="74">2. mușchi scheletici</text><text x="560" y="94">3. cord</text><text x="560" y="114">4. rinichi</text><text x="560" y="134">5. glande endocrine</text><text x="560" y="154">6. ficat</text></g>
<circle cx="566" cy="196" r="7" class="fA"/><text x="580" y="200" class="tm">normal</text><circle cx="650" cy="196" r="7" class="fT"/><text x="664" y="200" class="tm">mutant</text>
</svg>
<figcaption><b>De ce aceeași mutație dă tablouri diferite.</b> Împărțirea întâmplătoare a mitocondriilor produce celule cu proporții diferite de ADNmt mutant; boala apare doar în țesuturile în care proporția depășește pragul, începând cu cele mai dependente de energie.</figcaption>
</figure>
[[img:rrf|<b>Fibre roșii zdrențuite („ragged red fibers”).</b> Biopsie musculară. A: colorația tricrom Gomori arată acumulări roșii de mitocondrii anormale sub membrana fibrei. D: la microscopul electronic, mitocondrii cu incluziuni cristaline. Este semnul histologic comun pentru MELAS și MERRF.]]
<h3>Când suspectezi o boală mitocondrială</h3>
<ul>
<li>afectarea concomitentă a <b>cel puțin 3 organe</b> fără origine embriologică sau funcție comună;</li>
<li>agravări și ameliorări recurente la infecții, efort sau anumite medicamente;</li>
<li>asociere aparent întâmplătoare de semne; manifestări atipice, inexplicabile;</li>
<li>debut precoce, evoluție rapid progresivă.</li>
</ul>
<h3>Tabelul VIII: boli prin mutații ale ADNmt</h3>
<div class="tw"><table>
<tr><th>Boală</th><th>Trăsături clinice</th><th>Mutații</th><th>Transmitere</th></tr>
<tr><td><b>Oftalmoplegia externă progresivă cronică</b></td><td>oftalmoplegie externă, ptoză bilaterală; adițional miopatie proximală moderată</td><td>deleții</td><td>matern, sporadic</td></tr>
<tr><td><b>Sindromul Kearns–Sayre</b></td><td>oftalmoplegie externă progresivă cu debut înainte de 20 de ani, retinită pigmentară, ataxie cerebeloasă, blocuri cardiace</td><td>deleții</td><td>matern, sporadic</td></tr>
<tr><td><b>MELAS</b> (mitochondrial myopathy, encephalopathy, lactic acidosis, stroke-like episodes)</td><td>AVC, convulsii, demență, slăbiciune musculară proximală simetrică, fibre roșii zdrențuite și/sau acidoză lactică, ptoză</td><td>ARNt, A↔G</td><td>matern</td></tr>
<tr><td><b>MERRF</b> (myoclonic epilepsy with ragged red fibers)</td><td>mioclonii, convulsii, ataxie cerebeloasă, miopatie</td><td>ARNt, A↔G</td><td>matern</td></tr>
<tr><td><b>Neuropatia optică ereditară Leber</b></td><td>pierdere bilaterală a vederii, nevrită retrobulbară nedureroasă, vârsta medie de debut ≥ 20 de ani</td><td>multiple</td><td>matern</td></tr>
<tr><td><b>NARP</b> (neuropatie, ataxie, retinită pigmentară)</td><td>neuropatie, ataxie cerebeloasă, retinopatie pigmentară, demență, convulsii</td><td>T→G și T→C</td><td>matern</td></tr>
</table></div>
<p style="font-size:14px;color:var(--muted)">Tabel verificat pe pagina scanată. Cursul scrie „MERF” și „Raged red Fibers”; denumirea uzuală este MERRF, „ragged red fibers”.</p>
<h3>Dinamica mitocondrială și bolile neurodegenerative</h3>
<p>Mitocondriile își reglează funcția prin <b>fisiune</b> (divizare) și <b>fuziune</b> (unire), procese guvernate de <b>gene nucleare</b>. Mutațiile acestor gene sunt implicate în:</p>
<div class="tw"><table>
<tr><th>Boală</th><th>Ce spune cursul</th></tr>
<tr><td><b>Boala Parkinson</b></td><td>Triada bradikinezie, tremor, rigiditate, plus instabilitate posturală. Stres oxidativ crescut; cei mai expuși sunt neuronii dopaminergici nigrostriatali. Raportul ADNmt mutant/normal este de aproximativ 10 ori mai mare.</td></tr>
<tr><td><b>Scleroza laterală amiotrofică</b></td><td>Afectează motoneuronii din cortexul motor, trunchi și măduvă. Mutații în gena nucleară <b>SOD1</b> (superoxid dismutaza; forme familiale): se acumulează anionul superoxid, toxic pentru ADNmt și ADN nuclear.</td></tr>
<tr><td><b>Boala Alzheimer</b></td><td>Mutații ale ADNmt din neuronii corticali, cu reducerea activității piruvat dehidrogenazei și a complexului I.</td></tr>
</table></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Doi frați au aceeași mutație mitocondrială, dar unul este mult mai grav afectat. Cum explici?</summary><div>Prin heteroplasmie și segregare replicativă: proporția de ADNmt mutant moștenită și distribuția ei în țesuturi diferă, iar boala apare doar unde se depășește pragul.</div></details>
<details class="q"><summary>Ce au în comun MELAS și MERRF și ce le deosebește?</summary><div>Ambele sunt produse de mutații în gene de ARNt mitocondrial și se transmit matern, cu fibre roșii zdrențuite. MELAS: episoade asemănătoare AVC și acidoză lactică. MERRF: epilepsie mioclonică și ataxie.</div></details>
<details class="q"><summary>Care țesut este afectat primul într-o boală mitocondrială și de ce?</summary><div>Sistemul nervos, pentru că este cel mai sensibil la deficitul energetic; urmează mușchii scheletici, cordul, rinichii, glandele endocrine și ficatul.</div></details>
</div>`
}
]
});
