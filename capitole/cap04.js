/* Capitolul 4 — Epigenetică (curs p. 67–83) */
(function () {
// lollipop de metilare: plin = metilat, gol = nemetilat
const lol = (x, y, plin) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 16}" class="si"/><circle cx="${x}" cy="${y - 20}" r="5" class="${plin ? "ti" : "fcard"} si" ${plin ? "" : 'stroke-width="1.5"'}/>`;
const lols = (x0, n, y, plin, pas = 13) => Array.from({ length: n }, (_, i) => lol(x0 + i * pas, y, plin)).join("");
// bară de procente: [[eticheta, procent, clasa]]
const bare = (titlu, rows, y0 = 30) => rows.map(([t, a, b, cls], i) => {
  const y = y0 + i * 34, w = (b / 100) * 300;
  return `<text x="330" y="${y + 15}" text-anchor="end" class="ti">${t}</text><rect x="342" y="${y}" width="${Math.max(3, w)}" height="22" rx="4" class="${cls}"/><text x="${352 + Math.max(3, w)}" y="${y + 16}" class="ti b">${a === b ? b + "%" : a + "–" + b + "%"}</text>`;
}).join("");

GHID.capitol({
id: "c04",
intro: `<p class="lead">Epigenetica explică cum două celule cu același ADN ajung să citească gene diferite și cum această alegere se moștenește la diviziune. Ideea centrală: nu se schimbă literele, se schimbă cât de accesibile sunt. Capitolul aplică ideea la trei situații clinice: inactivarea X, amprentarea genomică și cancerul.</p>`,
sectiuni: [
{
id: "mecanisme", titlu: "Ce este epigenetica și cu ce lucrează", pag: "67–69", emery: "cap. 9, p. 123", acopera: [],
html: `
<p>„Epi” înseamnă deasupra. Epigenetica studiază modificările care schimbă <b>expresia</b> genelor fără să schimbe <b>secvența</b> ADN, sub influența unor factori nongenetici interni sau externi (dietetici, metabolici). Cursul o numește calea prin care genomul „învață din propria experiență”. Modificările sunt ereditare la diviziunea celulară și au <b>potențial reversibil</b>, de aceea pot fi ținte terapeutice.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Cromatină deschisă și închisă">
<defs><marker id="e1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<text x="190" y="26" text-anchor="middle" class="tok b" style="font-size:15px">EUCROMATINĂ · genă activă</text>
<text x="570" y="26" text-anchor="middle" class="tw2 b" style="font-size:15px">HETEROCROMATINĂ · genă stinsă</text>
<path d="M30 150 C60 110 80 110 100 150 S150 190 170 150 S220 110 240 150 S290 190 310 150 S340 120 350 150" fill="none" class="sP" stroke-width="3"/>
<g>${[100, 170, 240, 310].map((x, i) => `<circle cx="${x}" cy="150" r="24" class="fis si" stroke-width="1.2"/><path d="M${x + 14} ${134} q14 -22 26 -30" fill="none" class="sok" stroke-width="2"/><circle cx="${x + 42}" cy="${101}" r="8" class="foks sok" stroke-width="1.5"/><text x="${x + 42}" y="105" text-anchor="middle" class="tok b" style="font-size:9px">Ac</text>`).join("")}</g>
<g>${lols(60, 3, 196, false, 70)}</g>
<path d="M120 230 h130" class="sok" stroke-width="3" marker-end="url(#e1)" fill="none"/><text x="185" y="252" text-anchor="middle" class="tok b">transcripție</text>
<text x="190" y="284" text-anchor="middle" class="tm">histone acetilate (HAT) · CpG nemetilat</text>
<text x="190" y="302" text-anchor="middle" class="tm">cromatină laxă, accesibilă</text>
<g>${[470, 512, 554, 596, 638, 491, 533, 575, 617].map((x, i) => `<circle cx="${x}" cy="${i < 5 ? 138 : 172}" r="22" class="fws si" stroke-width="1.2"/>`).join("")}</g>
<path d="M448 138 h212 M470 172 h170" class="sP" stroke-width="3" fill="none" opacity=".55"/>
<g>${lols(478, 5, 118, true, 38)}</g>
<line x1="500" y1="232" x2="640" y2="232" class="sw" stroke-width="3"/><line x1="540" y1="218" x2="600" y2="246" class="sw" stroke-width="3"/><line x1="600" y1="218" x2="540" y2="246" class="sw" stroke-width="3"/>
<text x="570" y="284" text-anchor="middle" class="tm">histone dezacetilate (HDAC) · CpG metilat (DNMT)</text>
<text x="570" y="302" text-anchor="middle" class="tm">cromatină compactă, inaccesibilă</text>
<path d="M370 120 h60" class="si" stroke-width="2" marker-end="url(#e1)" fill="none"/><text x="400" y="110" text-anchor="middle" class="ti">HDAC, DNMT</text>
<path d="M430 180 h-60" class="si" stroke-width="2" marker-end="url(#e1)" fill="none"/><text x="400" y="200" text-anchor="middle" class="ti">HAT</text>
</svg>
<figcaption><b>Două stări ale aceleiași secvențe.</b> Acetilarea histonelor relaxează cromatina și permite transcripția; dezacetilarea și metilarea ADN o compactează. „Acadelele” reprezintă dinucleotide CpG: goale = nemetilate, pline = metilate. Schemă proprie după curs (p. 68).</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Modificare</th><th>Enzime</th><th>Efect</th></tr>
<tr><td><b>Acetilarea histonelor</b></td><td>histon-acetiltransferaze (<b>HAT</b>)</td><td>relaxează cromatina, <b>favorizează</b> transcripția</td></tr>
<tr><td><b>Dezacetilarea histonelor</b></td><td>histon-deacetilaze (<b>HDAC</b>)</td><td>compactează, <b>reprimă</b></td></tr>
<tr><td><b>Metilarea histonelor</b></td><td>histon-metiltransferaze</td><td>modifică structura cromatinei</td></tr>
<tr><td><b>Metilarea ADN</b></td><td>ADN-metiltransferaze (<b>DNMT</b>): <b>DNMT1</b> menține modelul de la o generație celulară la alta; <b>DNMT3</b> produce un model nou</td><td><b>reprimă</b></td></tr>
</table></div>
<p>Modificările posttranslaționale (PTM) privesc histonele H2A, H2B, H3 și H4. Despre ele se știe mai puțin decât despre metilarea ADN, din cauza limitelor tehnice (Western blot nu poate urmări multe modificări simultan).</p>
<div class="cheie"><b>Unde contează în clinică</b><p>Cursul numește trei situații: <b>inactivarea cromozomului X</b>, <b>amprentarea</b> („imprinting”) și <b>cancerul</b>. Perturbarea mecanismelor epigenetice dă boli genetice rare sau cancere.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce se spune că modificările epigenetice au „potențial reversibil” și de ce contează?</summary><div>Pentru că nu schimbă secvența ADN, ci marcaje chimice care pot fi puse și scoase de enzime (HAT/HDAC, DNMT/demetilaze). De aceea pot fi influențate medicamentos.</div></details>
<details class="q"><summary>Ce face DNMT1 și ce face DNMT3?</summary><div>DNMT1 copiază modelul de metilare existent pe catena nouă după replicare (întreținere). DNMT3 stabilește un model nou de metilare (de novo).</div></details>
</div>`
},
{
id: "metilare", titlu: "Metilarea ADN: cum se scrie, cum se copiază, cum se citește", pag: "72–73", emery: "cap. 9, p. 123; cap. 14", acopera: ["c04-r04"],
html: `
<p>Metilarea are loc la <b>citozina</b> din dinucleotidele <b>CpG</b>, grupate în <b>insule CpG</b>: se adaugă o grupare metil la carbonul 5 și rezultă <b>5-metilcitozină</b>. Gruparea metil iese în <b>marea incizură</b>, unde o pot „citi” proteinele. Nu toate insulele CpG sunt metilate.</p>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Menținerea metilării după replicare">
<defs><marker id="e2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<text x="110" y="24" text-anchor="middle" class="ti b">1 · înainte de replicare</text>
<line x1="30" y1="80" x2="190" y2="80" class="sP" stroke-width="4"/><line x1="30" y1="100" x2="190" y2="100" class="sP" stroke-width="4"/>
${lols(60, 3, 80, true, 40)}
<g transform="translate(0,200) scale(1,-1)">${lols(80, 3, 100, true, 40).replace(/y1="100"/g, 'y1="100"')}</g>
<text x="110" y="150" text-anchor="middle" class="tm">ambele catene metilate</text>
<path d="M205 90 h50" class="si" stroke-width="2" marker-end="url(#e2)" fill="none"/><text x="230" y="80" text-anchor="middle" class="tm">replicare</text>
<text x="380" y="24" text-anchor="middle" class="ti b">2 · imediat după replicare</text>
<line x1="300" y1="80" x2="460" y2="80" class="sP" stroke-width="4"/><line x1="300" y1="100" x2="460" y2="100" class="sok" stroke-width="4"/>
${lols(330, 3, 80, true, 40)}
<g transform="translate(0,200) scale(1,-1)">${lols(350, 3, 100, false, 40)}</g>
<text x="380" y="150" text-anchor="middle" class="tm">catena nouă (verde): nemetilată</text><text x="380" y="167" text-anchor="middle" class="tm">= ADN hemimetilat</text>
<path d="M475 90 h50" class="si" stroke-width="2" marker-end="url(#e2)" fill="none"/><text x="500" y="80" text-anchor="middle" class="ta b">DNMT1</text>
<text x="650" y="24" text-anchor="middle" class="ti b">3 · model refăcut</text>
<line x1="570" y1="80" x2="730" y2="80" class="sP" stroke-width="4"/><line x1="570" y1="100" x2="730" y2="100" class="sok" stroke-width="4"/>
${lols(600, 3, 80, true, 40)}
<g transform="translate(0,200) scale(1,-1)">${lols(620, 3, 100, true, 40)}</g>
<text x="650" y="150" text-anchor="middle" class="tm">metilate doar CpG-urile aflate</text><text x="650" y="167" text-anchor="middle" class="tm">vizavi de un CpG metilat</text>
<rect x="30" y="200" width="700" height="80" rx="10" class="fas"/>
<text x="380" y="228" text-anchor="middle" class="ti b">Așa se transmite „memoria” epigenetică de la celula-mamă la celulele-fiice.</text>
<text x="380" y="250" text-anchor="middle" class="tm">Metilarea ADN și modificarea histonelor se întrețin reciproc: ADN-ul metilat fixează proteine care modifică</text>
<text x="380" y="267" text-anchor="middle" class="tm">histonele, iar histonele modificate devin situsuri de ancorare pentru metiltransferaze.</text>
</svg>
<figcaption><b>Copierea modelului de metilare.</b> După replicare, catena nouă este inițial nemetilată. Metiltransferaza metilează numai CpG-urile situate în dreptul unui CpG metilat de pe catena matriță. Schemă proprie după curs (p. 72).</figcaption>
</figure>
<div class="cheie"><b>Regula de bază</b><p>Metilarea ADN + dezacetilarea histonelor = principalul mecanism de <b>represie</b> a transcripției.</p></div>
<h3>Cum se analizează metilarea</h3>
<div class="pasi">
<div><b>Imunoprecipitare</b>ADN-ul metilat este precipitat cu anticorpi anti-5-metilcitozină.</div>
<div><b>Enzime de restricție sensibile la metilare</b>Taie situsul cu CpG numai dacă este nemetilat.</div>
<div><b>Secvențiere cu bisulfit</b>Bisulfitul transformă citozina în uracil; 5-metilcitozina rezistă.</div>
</div>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Principiul secvențierii cu bisulfit">
<defs><marker id="e3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<text x="30" y="30" class="ti b">ADN inițial</text><text x="290" y="30" class="ti b">după bisulfit</text><text x="560" y="30" class="ti b">după PCR, la citire</text>
${[["nemetilat", 70, false], ["metilat", 150, true]].map(([t, y, m]) => `
<text x="30" y="${y + 6}" class="tm">C ${t}</text>
<g class="mono" style="font-size:20px"><text x="140" y="${y + 8}" class="ti">A <tspan class="${m ? "tw2" : "tok"} b">C</tspan>${m ? '<tspan class="tw2" style="font-size:12px" dy="-9">m</tspan><tspan dy="9"> </tspan>' : " "}G T</text>
<text x="330" y="${y + 8}" class="ti">A <tspan class="${m ? "tw2" : "tok"} b">${m ? "C" : "U"}</tspan>${m ? '<tspan class="tw2" style="font-size:12px" dy="-9">m</tspan><tspan dy="9"> </tspan>' : " "}G T</text>
<text x="590" y="${y + 8}" class="ti">A <tspan class="${m ? "tw2" : "tok"} b">${m ? "C" : "T"}</tspan> G T</text></g>
<path d="M235 ${y} h70" class="si" stroke-width="1.5" marker-end="url(#e3)" fill="none"/><path d="M430 ${y} h130" class="si" stroke-width="1.5" marker-end="url(#e3)" fill="none"/>`).join("")}
<text x="380" y="196" text-anchor="middle" class="tm">Un C citit ca T era nemetilat. Un C rămas C era metilat.</text>
</svg>
<figcaption><b>Secvențierea cu bisulfit.</b> Citozina nemetilată devine uracil și apare ca timină după amplificare; 5-metilcitozina rămâne citozină. Cursul scrie „tiamină” la p. 73; este vorba despre timină.</figcaption>
</figure>
<h3>Metilarea în cancer</h3>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Hipermetilare și hipometilare în cancer">
<text x="20" y="26" class="ti b">Celulă normală</text><text x="400" y="26" class="ti b">Celulă canceroasă</text>
<text x="20" y="80" class="tm">genă supresoare</text><text x="20" y="96" class="tm">(BRCA1, APC)</text>
<line x1="140" y1="86" x2="360" y2="86" class="si" stroke-width="2"/>${lols(150, 5, 86, false)}<rect x="230" y="72" width="110" height="28" rx="5" class="foks sok"/><text x="285" y="91" text-anchor="middle" class="tok b">activă</text>
<line x1="520" y1="86" x2="740" y2="86" class="si" stroke-width="2"/>${lols(530, 5, 86, true)}<rect x="610" y="72" width="110" height="28" rx="5" class="fws sw"/><text x="665" y="91" text-anchor="middle" class="tw2 b">stinsă</text>
<text x="400" y="80" class="tw2 b">HIPERmetilare</text><text x="400" y="96" class="tm">+ dezacetilare</text>
<text x="20" y="170" class="tm">oncogenă</text>
<line x1="140" y1="176" x2="360" y2="176" class="si" stroke-width="2"/>${lols(150, 5, 176, true)}<rect x="230" y="162" width="110" height="28" rx="5" class="fline"/><text x="285" y="181" text-anchor="middle" class="tm b">stinsă</text>
<line x1="520" y1="176" x2="740" y2="176" class="si" stroke-width="2"/>${lols(530, 5, 176, false)}<rect x="610" y="162" width="110" height="28" rx="5" class="fws sw"/><text x="665" y="181" text-anchor="middle" class="tw2 b">activată</text>
<text x="400" y="170" class="tw2 b">HIPOmetilare</text>
<text x="380" y="220" text-anchor="middle" class="tm">Al treilea mecanism: pierderea amprentării (LOI). IGF2, normal exprimată doar de pe alela paternă, devine bialelică.</text>
</svg>
<figcaption><b>Două erori opuse, același rezultat.</b> Genele supresoare tumorale sunt stinse prin hipermetilarea promotorului; oncogenele sunt activate prin hipometilare. Schemă proprie după curs (p. 73).</figcaption>
</figure>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>După replicare, cum „știe” metiltransferaza ce CpG-uri să metileze pe catena nouă?</summary><div>Metilează doar CpG-urile situate vizavi de un CpG metilat de pe catena matriță. Catena veche servește drept șablon pentru modelul de metilare.</div></details>
<details class="q"><summary>După tratament cu bisulfit și PCR, într-o poziție apare T în loc de C. Ce înseamnă?</summary><div>Citozina din acea poziție era nemetilată: bisulfitul a transformat-o în uracil, citit ca timină după amplificare.</div></details>
<details class="q"><summary>Cum este inactivată epigenetic gena BRCA1 în unele tumori?</summary><div>Prin hipermetilarea promotorului, asociată cu dezacetilarea histonelor, care compactează cromatina.</div></details>
</div>`
},
{
id: "xi", titlu: "Inactivarea cromozomului X", pag: "69–70", emery: "cap. 9, p. 124–125", acopera: ["c04-r01"],
html: `
<p>La femeia 46,XX, unul dintre cei doi cromozomi X este inactivat, astfel încât rămâne activ genetic un singur X, ca la bărbat (<b>compensare de dozaj genic</b>). Inactivarea este <b>totală, precoce, întâmplătoare, independentă și ireversibilă</b>.</p>
<figure>
<svg viewBox="0 0 760 310" role="img" aria-label="XIST și regiunile pseudoautozomale">
<defs><marker id="e4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ta"/></marker></defs>
<text x="110" y="24" text-anchor="middle" class="ti b">X activ (Xa)</text>
<rect x="96" y="40" width="28" height="230" rx="14" class="fis si" stroke-width="1.5"/><rect x="94" y="126" width="32" height="10" rx="5" class="fT"/>
<text x="140" y="150" class="tm">XIST tăcută</text>
<text x="330" y="24" text-anchor="middle" class="ti b">X inactiv (Xi)</text>
<rect x="316" y="40" width="28" height="230" rx="14" class="fline si" stroke-width="1.5"/><rect x="314" y="126" width="32" height="10" rx="5" class="fT"/>
<rect x="316" y="40" width="28" height="18" rx="9" class="foks sok" stroke-width="1.5"/>
<rect x="312" y="150" width="36" height="12" rx="3" class="fP"/><text x="358" y="161" class="ta b">XIST · Xq13</text>
<g fill="none" class="sa" stroke-width="1.6" opacity=".8">${[60, 78, 96, 114, 172, 190, 208, 226, 244].map((y) => `<path d="M304 ${y} q26 -10 52 0"/>`).join("")}</g>
<path d="M360 170 q40 20 10 60" fill="none" class="sa" stroke-width="1.5" marker-end="url(#e4)"/>
<text x="390" y="200" class="tm">ARN-ul XIST nu este tradus;</text><text x="390" y="217" class="tm">îmbracă cromozomul de pe</text><text x="390" y="234" class="tm">care a fost transcris și</text><text x="390" y="251" class="tm">declanșează compactarea</text>
<text x="358" y="54" class="tok b">regiune pseudoautozomală</text><text x="358" y="71" class="tm">scapă inactivării</text>
<text x="640" y="24" text-anchor="middle" class="ti b">Y</text>
<rect x="626" y="40" width="28" height="84" rx="14" class="fis si" stroke-width="1.5"/><rect x="626" y="40" width="28" height="18" rx="9" class="foks sok" stroke-width="1.5"/><rect x="624" y="66" width="32" height="8" rx="4" class="fT"/>
<path d="M344 46 C470 20 560 20 626 46" fill="none" class="sok" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="490" y="18" text-anchor="middle" class="tok">omologie X–Y</text>
<text x="600" y="150" class="tm">Secvență de 2,6 Mb pe</text><text x="600" y="167" class="tm">brațul scurt, cu omolog</text><text x="600" y="184" class="tm">pe brațul scurt al lui Y:</text><text x="600" y="201" class="tm">două copii active la</text><text x="600" y="218" class="tm">ambele sexe, transmitere</text><text x="600" y="235" class="tm">ca la autozomi</text>
<text x="380" y="298" text-anchor="middle" class="tm">Roșu = centromer. Violet = locusul XIST și ARN-ul său. Verde = regiunea pseudoautozomală.</text>
</svg>
<figcaption><b>Cine comandă inactivarea și ce îi scapă.</b> Gena <i>XIST</i> (X inactivation specific transcript), de la Xq13, se exprimă <b>numai de pe X-ul inactiv</b>. Regiunea pseudoautozomală de pe brațul scurt rămâne activă. Schemă proprie după curs (p. 69–70).</figcaption>
</figure>
<div class="tw"><table>
<tr><th>Întrebare</th><th>Răspunsul din curs</th></tr>
<tr><td>Cromozomul inactiv este deteriorat?</td><td>Nu, este <b>intact</b>; majoritatea genelor doar nu se exprimă.</td></tr>
<tr><td>Se inactivează toate genele?</td><td>Nu: <b>unele gene scapă inactivării</b>, în special cele din regiunea pseudoautozomală.</td></tr>
<tr><td>Cui se transmite starea inactivă?</td><td><b>Celulelor-fiice</b>, dar <b>nu generațiilor următoare</b>.</td></tr>
<tr><td>Ce se întâmplă în linia germinală?</td><td>În celulele germinale feminine X-ul inactivat este <b>reactivat</b>. În zigot ambii X sunt activi; inactivarea se face din nou, la întâmplare.</td></tr>
</table></div>
<div class="capcana"><b>Două formulări de corectat mental</b>
<p>1. Cursul scrie că XIST „codifică o moleculă de ARN <b>netranscrisă</b>”. Corect este <b>netradusă</b> (ARN necodant): molecula există tocmai pentru că este transcrisă.</p>
<p>2. Cursul numește inactivarea „totală”, dar în paragraful următor precizează că unele gene scapă. Reține ambele: cromozomul întreg este vizat, cu excepții.</p></div>
<div class="emery"><b>Curs vs. Emery</b><p>Emery precizează că ARN-ul XIST se acumulează pe unul dintre cromozomii X încă din stadiul de aproximativ 8 celule și că aproximativ 15% dintre genele de pe X scapă complet inactivării. Vezi și capitolul 1 al ghidului, secțiunea despre ipoteza Lyon.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De pe care cromozom X se exprimă gena XIST?</summary><div>Numai de pe cromozomul X inactiv. ARN-ul ei îmbracă acel cromozom și semnalizează schimbarea conformației cromatinei.</div></details>
<details class="q"><summary>O femeie moștenește starea de inactivare a X-ului de la mama ei?</summary><div>Nu. Inactivarea se transmite celulelor-fiice, nu generațiilor următoare: X-ul inactiv este reactivat în celulele germinale, iar în embrion alegerea se face din nou.</div></details>
<details class="q"><summary>De ce se numește „pseudoautozomală” regiunea de pe brațul scurt al X?</summary><div>Pentru că are o copie omoloagă pe Y și scapă inactivării, deci ambele sexe au două copii active, iar genele ei se transmit ca genele autozomale.</div></details>
</div>`
},
{
id: "amprentare", titlu: "Amprentarea genomică și disomia uniparentală", pag: "70–72", emery: "cap. 6, p. 77–81", acopera: ["c04-r02", "c04-r03"],
html: `
<p>Pentru majoritatea genelor se exprimă ambele alele. La genele <b>amprentate</b> se exprimă doar una, iar care anume depinde de <b>părintele de la care provine</b>. Secvența ADN este aceeași; diferă marcajul epigenetic.</p>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Ciclul amprentării">
<defs><marker id="e5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<text x="120" y="24" text-anchor="middle" class="ti b">Celulă somatică</text>
<rect x="60" y="40" width="120" height="16" rx="8" class="fG"/><text x="190" y="53" class="tin">alela paternă</text>
<rect x="60" y="70" width="120" height="16" rx="8" class="fT"/><text x="190" y="83" class="tw2">alela maternă</text>
${lols(80, 4, 70, true, 22)}
<text x="120" y="112" text-anchor="middle" class="tm">una metilată (tăcută),</text><text x="120" y="128" text-anchor="middle" class="tm">cealaltă activă</text>
<path d="M120 140 v40" class="si" stroke-width="2" marker-end="url(#e5)" fill="none"/>
<rect x="30" y="186" width="180" height="56" rx="10" class="fas"/><text x="120" y="208" text-anchor="middle" class="ta b">Linia germinală</text><text x="120" y="228" text-anchor="middle" class="tm">amprentele sunt ȘTERSE</text>
<path d="M210 204 C300 150 330 110 400 80" fill="none" class="si" stroke-width="2" marker-end="url(#e5)"/>
<path d="M210 224 C300 260 330 270 400 270" fill="none" class="si" stroke-width="2" marker-end="url(#e5)"/>
<text x="500" y="24" text-anchor="middle" class="ti b">La bărbat: spermatozoizi</text>
<rect x="410" y="60" width="120" height="16" rx="8" class="fG"/><rect x="410" y="86" width="120" height="16" rx="8" class="fG"/>
<text x="545" y="74" class="tm">ambele copii primesc</text><text x="545" y="92" class="tm">amprentă PATERNĂ</text>
<text x="500" y="230" text-anchor="middle" class="ti b">La femeie: ovule</text>
<rect x="410" y="250" width="120" height="16" rx="8" class="fT"/><rect x="410" y="276" width="120" height="16" rx="8" class="fT"/>
${lols(430, 4, 250, true, 22)}${lols(430, 4, 276, true, 22)}
<text x="545" y="264" class="tm">ambele copii primesc</text><text x="545" y="282" class="tm">amprentă MATERNĂ</text>
<path d="M600 110 C700 130 700 200 640 236" fill="none" class="sm" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#e5)"/>
<text x="712" y="166" text-anchor="middle" class="tm">fecundare:</text><text x="712" y="182" text-anchor="middle" class="tm">ciclul reia</text>
<text x="380" y="322" text-anchor="middle" class="tm">Amprenta ține de sexul părintelui care transmite, nu de originea cromozomului în părinte.</text>
</svg>
<figcaption><b>Amprenta este reversibilă: se șterge și se rescrie la fiecare generație.</b> Un cromozom primit de un bărbat de la mama lui poartă amprentă maternă în celulele lui somatice, dar în spermatozoizii lui va fi rescris cu amprentă paternă. Schemă proprie după curs (p. 70).</figcaption>
</figure>
<h3>Ce se întâmplă când tot genomul vine de la un singur părinte</h3>
<figure>
<svg viewBox="0 0 760 200" role="img" aria-label="Mola hidatiformă și teratomul ovarian">
<circle cx="110" cy="80" r="46" class="fcard si" stroke-width="1.5"/><circle cx="96" cy="80" r="14" class="fG"/><circle cx="126" cy="80" r="14" class="fG"/>
<text x="110" y="150" text-anchor="middle" class="tin b">2 seturi paterne</text><text x="110" y="168" text-anchor="middle" class="ti">→ molă hidatiformă</text><text x="110" y="186" text-anchor="middle" class="tm">trofoblast fără embrion</text>
<circle cx="380" cy="80" r="46" class="fcard si" stroke-width="1.5"/><circle cx="366" cy="80" r="14" class="fG"/><circle cx="396" cy="80" r="14" class="fT"/>
<text x="380" y="150" text-anchor="middle" class="tok b">1 patern + 1 matern</text><text x="380" y="168" text-anchor="middle" class="ti">→ dezvoltare normală</text>
<circle cx="650" cy="80" r="46" class="fcard si" stroke-width="1.5"/><circle cx="636" cy="80" r="14" class="fT"/><circle cx="666" cy="80" r="14" class="fT"/>
<text x="650" y="150" text-anchor="middle" class="tw2 b">2 seturi materne</text><text x="650" y="168" text-anchor="middle" class="ti">→ teratom ovarian</text><text x="650" y="186" text-anchor="middle" class="tm">țesuturi embrionare, fără placentă</text>
</svg>
<figcaption><b>Genomul matern și cel patern nu sunt echivalente funcțional.</b> Ambele situații anormale apar prin fecundarea unui gamet fără nucleu cu un gamet normal și dublarea setului cromozomial. Schemă proprie după curs (p. 70).</figcaption>
</figure>
[[img:mola|<b>Molă hidatiformă completă, histologie.</b> Vilozități coriale mult mărite, edematoase, cu proliferare de trofoblast și fără țesut fetal. Tot materialul genetic nuclear este de origine paternă.]]
<h3>Disomia uniparentală (UPD)</h3>
<p>UPD înseamnă că numărul de cromozomi este corect, dar <b>ambii cromozomi ai unei perechi provin de la același părinte</b>. Pentru cromozomii care poartă gene amprentate, copilul ajunge fără nicio copie activă (sau cu două) a genei respective.</p>
<div class="tw"><table>
<tr><th>Tabelul IX: boală</th><th>Localizare</th><th>Gene implicate</th></tr>
<tr><td><b>Sindromul Prader–Willi</b></td><td>15q11–q13</td><td><i>SNRPN</i></td></tr>
<tr><td><b>Sindromul Angelman</b></td><td>15q11–q13</td><td><i>UBE3A</i></td></tr>
<tr><td><b>Sindromul Beckwith–Wiedemann</b></td><td>11p15.5</td><td><i>H19, IGF2, KCNQ1OT1</i></td></tr>
<tr><td><b>Sindromul Silver–Russell</b></td><td>7p11.2; 11p15.5</td><td><i>GRB10</i>; <i>H19, IGF2</i></td></tr>
<tr><td><b>Pseudohipoparatiroidism (PHP1A)</b></td><td>20q13.2</td><td><i>GNAS1</i></td></tr>
</table></div>
<p style="font-size:14px;color:var(--muted)">În asamblarea actuală a genomului (GRCh38, UCSC), <i>GRB10</i> este la 7p12.1 și <i>GNAS</i> la 20q13.32; benzile din curs sunt cele din literatura mai veche.</p>
<p>Sunt cunoscute peste <b>80 de gene amprentate</b>. Trăsături comune: <b>expresie monoalelică</b> dependentă de originea parentală (uneori doar în anumite țesuturi sau perioade); <b>dinucleotide CpG</b> în promotor, metilate diferit în funcție de părinte; <b>ARN antisens</b>, transcris de pe catena opusă, cu rol reglator. Modelul de amprentare se analizează prin teste bazate pe PCR și <b>MLPA</b>.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce se spune că amprentarea este reversibilă, deși inactivează stabil o alelă?</summary><div>Este stabilă în celulele somatice ale unui individ, dar se șterge în linia germinală și se rescrie după sexul acelui individ. La generația următoare aceeași copie poate purta amprenta opusă.</div></details>
<details class="q"><summary>Ce este disomia uniparentală și de ce poate produce boală deși nu lipsește niciun cromozom?</summary><div>Ambii cromozomi ai unei perechi provin de la același părinte. Dacă perechea conține gene amprentate, lipsește contribuția funcțională a celuilalt părinte.</div></details>
</div>`
},
{
id: "pws-as", titlu: "Sindroamele Prader–Willi și Angelman", pag: "73–76, 80–82", emery: "cap. 6, p. 78–79 (Fig. 6.22–6.24)", acopera: ["c04-r05", "c04-r08"],
html: `
<p>Sunt două boli diferite produse de aceeași regiune, <b>15q11–q13</b>. Diferența o face părintele de la care lipsește contribuția.</p>
<figure><img src="fig/loc_c04_15q.svg" alt="Regiunea 15q11-q13">
<figcaption><b>Regiunea 15q11–q13, din datele genomului.</b> <i>NDN</i> (necdina) și <i>SNRPN</i> se exprimă doar de pe cromozomul patern; <i>UBE3A</i>, la mai puțin de 0,5 Mb distanță, doar de pe cel matern (în creier). O deleție care le cuprinde pe toate dă Prader–Willi dacă este pe cromozomul patern și Angelman dacă este pe cel matern.</figcaption></figure>
<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="Mecanismele din Prader-Willi și Angelman">
${(() => {
  const cr = (x, y, cls, del, lab) => `<rect x="${x}" y="${y}" width="18" height="74" rx="9" class="${cls} si" stroke-width="1.2"/>${del ? `<rect x="${x - 3}" y="${y + 24}" width="24" height="14" class="fcard"/><path d="M${x - 4} ${y + 24} l26 14 M${x - 4} ${y + 38} l26 -14" class="si" stroke-width="1.5"/>` : `<rect x="${x}" y="${y + 24}" width="18" height="14" class="fP" opacity=".55"/>`}<text x="${x + 9}" y="${y + 92}" text-anchor="middle" class="tm" style="font-size:11px">${lab}</text>`;
  const col = (x, t, a, b, sub) => `<text x="${x + 24}" y="52" text-anchor="middle" class="ti b" style="font-size:12px">${t}</text>${a}${b}<text x="${x + 24}" y="170" text-anchor="middle" class="ta b">${sub}</text>`;
  const P = (x, del) => cr(x, 66, "fG", del, "P"), M = (x, del) => cr(x, 66, "fT", del, "M");
  let s = `<text x="20" y="24" class="tin b" style="font-size:15px">PRADER–WILLI: lipsește contribuția PATERNĂ</text>`;
  s += col(40, "normal", P(40), M(72), "") + col(200, "deleție paternă", P(200, true), M(232), "70%") + col(380, "UPD maternă", M(380), M(412), "~25%") + col(560, "defect centru amprentare", cr(560, 66, "fT", false, "P*"), M(592), "1–2%");
  s += `<line x1="20" y1="186" x2="740" y2="186" class="sm" stroke-dasharray="2 5"/>`;
  const dy = 180;
  const P2 = (x, del) => cr(x, 66 + dy, "fG", del, "P"), M2 = (x, del) => cr(x, 66 + dy, "fT", del, "M");
  const col2 = (x, t, a, b, sub) => `<text x="${x + 24}" y="${52 + dy}" text-anchor="middle" class="ti b" style="font-size:12px">${t}</text>${a}${b}<text x="${x + 24}" y="${170 + dy}" text-anchor="middle" class="ta b">${sub}</text>`;
  s += `<text x="20" y="${24 + dy}" class="tw2 b" style="font-size:15px">ANGELMAN: lipsește contribuția MATERNĂ</text>`;
  s += col2(40, "deleție maternă", P2(40), M2(72, true), "65–75%") + col2(200, "UPD paternă", P2(200), P2(232), "3–7%") + col2(380, "defect centru amprentare", P2(380), cr(412, 66 + dy, "fG", false, "M*"), "3–5%") + col2(560, "mutație UBE3A", P2(560), `<rect x="592" y="${66 + dy}" width="18" height="74" rx="9" class="fT si" stroke-width="1.2"/><circle cx="601" cy="${97 + dy}" r="7" class="fcard si" stroke-width="2"/><text x="601" y="${158 + dy}" text-anchor="middle" class="tm" style="font-size:11px">M</text>`, "10–11%");
  return s;
})()}
</svg>
<figcaption><b>Patru drumuri către fiecare sindrom.</b> Albastru = cromozom 15 patern (P), portocaliu = matern (M); banda violet = regiunea 15q11–q13. P* și M* = cromozom de la părintele corect, dar cu amprenta greșită. Procentele sunt cele din curs (p. 74, 80–81).</figcaption>
</figure>
<div class="tw"><table>
<tr><th></th><th>Prader–Willi (SPW)</th><th>Angelman (SA)</th></tr>
<tr><td>Incidență</td><td>1/10.000–1/30.000</td><td>1/12.000–1/20.000</td></tr>
<tr><td>Ce lipsește</td><td>expresia <b>paternă</b> (<i>SNRPN</i>, necdina)</td><td>expresia <b>maternă</b> (<i>UBE3A</i>)</td></tr>
<tr><td>Tonus, alimentație</td><td><b>hipotonie</b> marcată neonatală, supt slab, apoi <b>hiperfagie</b> și <b>obezitate</b></td><td>hipotonie, dificultăți de alimentare la sugar</td></tr>
<tr><td>Neurologic</td><td>retard mintal ușor–moderat, tulburări de comportament (accese de furie, încăpățânare)</td><td>retard <b>sever</b>, <b>absența vorbirii</b>, <b>mers ataxic</b>, <b>convulsii</b>, microcefalie</td></tr>
<tr><td>Semn caracteristic</td><td>lipsa sațietății (cauză hipotalamică), hipogonadism, mâini și picioare mici, hipostatură</td><td><b>crize paroxistice de râs</b>, comportament hiperkinetic</td></tr>
<tr><td>Pigmentare</td><td>tegumente, ochi și păr mai deschise (~30%)</td><td>tegumente hipopigmentate, ochi deschiși la culoare</td></tr>
<tr><td>Analiza de metilare detectează</td><td>~90–99% din cazuri</td><td>peste 80% din cazuri</td></tr>
</table></div>
<h3>Prader–Willi pe vârste</h3>
<div class="pasi">
<div><b>Nou-născut, sugar</b>Hipotonie marcată, plâns slab, tulburări de alimentație (uneori alimentare enterală), hipoplazia organelor genitale.</div>
<div><b>Copilărie</b>Obezitate cu debut la 1–3 ani, secundară hiperfagiei; apnee de somn; fenotip comportamental; dizabilități cognitive; hipostatură.</div>
<div><b>Adolescent, adult</b>Hipogonadism, deficit statural, apnee de somn, hipoventilație, diabet zaharat.</div>
</div>
<h3>Scorul clinic Prader–Willi (Tabelul X)</h3>
<div class="tw"><table>
<tr><th>Criterii majore (1 punct fiecare)</th><th>Criterii minore (½ punct fiecare)</th></tr>
<tr><td>Hipotonie cu debut prenatal sau neonatal, supt slab</td><td>Mișcări fetale reduse („făt leneș”), hipotonie infantilă, plâns slab</td></tr>
<tr><td>Dificultăți de alimentare cu greutate mică</td><td>Tulburări de comportament (minimum 5)</td></tr>
<tr><td>Creștere rapidă și excesivă a greutății între 1 și 6 ani</td><td>Tulburări de somn sau apnee de somn</td></tr>
<tr><td>Hiperfagie</td><td>Talie mică</td></tr>
<tr><td>Facies caracteristic (minimum 3 trăsături): diametru bifrontal îngust, ochi migdalați, gură mică cu buză superioară subțire, comisuri coborâte</td><td>Mâini mici și înguste, picioare mici</td></tr>
<tr><td>Hipogonadism</td><td>Tegumente hipopigmentate</td></tr>
<tr><td>Dizabilitate intelectuală ușoară sau moderată</td><td>Anomalii oculare (strabism convergent, miopie); salivă vâscoasă; tulburări de vorbire</td></tr>
</table></div>
<p>Diagnosticul clinic este susținut de un scor peste <b>5 puncte</b> sub vârsta de 3 ani și peste <b>8 puncte</b> după 3 ani. Criterii suplimentare (0 puncte): prag ridicat la durere, tulburări de termoreglare, scolioză, osteoporoză, abilități deosebite la jocul de puzzle.</p>
<h3>Angelman pe vârste (Tabelul XI)</h3>
<div class="pasi">
<div><b>Sugar</b>Dificultăți de alimentare, hipotonie, retard de dezvoltare (100%); microcefalie (50%), strabism, protruzia limbii, comportament hiperkinetic.</div>
<div><b>Copil mic</b>Convulsii; mers tardiv și sacadat; retard de vorbire (limbajul receptiv mai bun decât cel expresiv); râs paroxistic, excitabilitate.</div>
<div><b>Copil mare, adult</b>Crize convulsive, scolioză, ataxie, tremor; dismorfism facial accentuat (prognatism, macrostomie, dinți spațiați); hipopigmentare; constipație.</div>
</div>
<h3>Ordinea investigațiilor</h3>
<div class="pasi">
<div><b>Analiza de metilare</b>MS-MLPA, MS-PCR. Cursul recomandă să se înceapă cu ea, pentru că prinde aproape toate cazurile indiferent de mecanism.</div>
<div><b>FISH / array CGH</b>Confirmă microdeleția 15q11–q13.</div>
<div><b>Cariotip</b>Deleții mari, translocații, alte anomalii ale regiunii.</div>
<div><b>Secvențierea <i>UBE3A</i></b>Doar pentru Angelman cu metilare normală.</div>
</div>
<p><b>Tratamentul SPW</b> este simptomatic: dietă și exerciții de timpuriu; <b>hormon de creștere</b> (crește talia și masa musculară, reduce masa grasă); tratarea osteoporozei, diabetului și a tulburărilor de comportament.</p>
<div class="emery"><b>Curs vs. Emery</b><p>Emery dă pentru Angelman aproximativ 1 la 15.000 de nașteri, deleție maternă în aproximativ 70% din cazuri, UPD paternă în aproximativ 5% și mutații <i>UBE3A</i> în până la 10%, valori în intervalele din curs. Adaugă că defectele centrului de amprentare (aproximativ 2% în SPW, 5% în SA) sunt singurele cu risc de recurență semnificativ.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Un copil are ambii cromozomi 15 de la mamă. Ce sindrom are și de ce?</summary><div>Prader–Willi. Genele din 15q11–q13 exprimate doar de pe cromozomul patern (SNRPN, necdina) nu au nicio copie activă, pentru că ambele copii poartă amprentă maternă.</div></details>
<details class="q"><summary>De ce se începe investigația cu analiza de metilare și nu cu FISH?</summary><div>Metilarea este anormală indiferent de mecanism (deleție, UPD sau defect de amprentare), deci testul prinde circa 90–99% din SPW. FISH vede doar deleția.</div></details>
<details class="q"><summary>Care mecanism există doar la Angelman și de ce nu are echivalent la Prader–Willi?</summary><div>Mutația punctiformă a unei singure gene, UBE3A. Angelman rezultă din pierderea unei singure gene; Prader–Willi este o boală multigenică.</div></details>
</div>`
},
{
id: "bws", titlu: "Sindromul Beckwith–Wiedemann", pag: "77–80", emery: "cap. 6, p. 80–81", acopera: ["c04-r06", "c04-r07"],
html: `
<p>Triada clasică: <b>omfalocel, gigantism (macrosomie, visceromegalie), macroglosie</b>. Inteligența este de obicei normală. Regiunea implicată este <b>11p15</b>, cu două domenii amprentate, fiecare controlat de un centru de amprentare (IC, imprinting center).</p>
[[img:bws|<b>Semne clinice în sindromul Beckwith–Wiedemann.</b> Macroglosie, creștere excesivă lateralizată (hemihiperplazie), hernie ombilicală, șanțuri pe lobul urechii și nevus facial.]]
<figure><img src="fig/loc_c04_11p.svg" alt="Regiunea 11p15.5">
<figcaption><b>Cele două domenii din 11p15.5, la scară.</b> Domeniul IC1 cuprinde <i>H19</i> și <i>IGF2</i>; domeniul IC2 cuprinde <i>KCNQ1</i>, antisensul <i>KCNQ1OT1</i> și <i>CDKN1C</i>. Întreaga regiune are aproximativ 1 Mb.</figcaption></figure>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="IC1 normal și în Beckwith-Wiedemann">
<defs><marker id="e6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="tok"/></marker></defs>
${(() => {
  const al = (y, lab, cls, met, igf, h19) => `<text x="20" y="${y + 5}" class="${cls} b">${lab}</text><line x1="110" y1="${y}" x2="360" y2="${y}" class="si" stroke-width="2"/>
  <rect x="130" y="${y - 11}" width="70" height="22" rx="4" class="${igf ? "fG" : "fline"}"/><text x="165" y="${y + 5}" text-anchor="middle" ${igf ? 'fill="#fff"' : 'class="tm"'} style="font-weight:700">IGF2</text>
  ${lols(232, 3, y, met, 12)}
  <rect x="280" y="${y - 11}" width="60" height="22" rx="4" class="${h19 ? "fT" : "fline"}"/><text x="310" y="${y + 5}" text-anchor="middle" ${h19 ? 'fill="#fff"' : 'class="tm"'} style="font-weight:700">H19</text>
  ${igf ? `<path d="M165 ${y - 14} v-14 h22" fill="none" class="sok" stroke-width="2" marker-end="url(#e6)"/>` : ""}${h19 ? `<path d="M310 ${y - 14} v-14 h22" fill="none" class="sok" stroke-width="2" marker-end="url(#e6)"/>` : ""}`;
  const al2 = (y, lab, cls, met, igf, h19) => al(y, lab, cls, met, igf, h19).replace(/x="20"/, 'x="400"').replace(/x1="110"/, 'x1="490"').replace(/x2="360"/, 'x2="740"').replace(/x="130"/, 'x="510"').replace(/x="165"/g, 'x="545"').replace(/x="280"/, 'x="660"').replace(/x="310"/g, 'x="690"').replace(/M165/, "M545").replace(/M310/, "M690").replace(/x1="(\d+)" y1="(\d+)" x2="\1" y2="(\d+)" class="si"\/><circle cx="\1"/g, (m, x) => m.replace(new RegExp(x, "g"), String(+x + 380)));
  return `<text x="190" y="24" text-anchor="middle" class="ti b" style="font-size:15px">Normal</text><text x="570" y="24" text-anchor="middle" class="ti b" style="font-size:15px">Beckwith–Wiedemann (IC1)</text>
  ${al(90, "patern", "tin", true, true, false)}${al(170, "matern", "tw2", false, false, true)}
  ${al2(90, "patern", "tin", true, true, false)}${al2(170, "„matern”", "tw2", true, true, false)}
  <text x="190" y="216" text-anchor="middle" class="tm">IGF2 dintr-o singură alelă</text><text x="570" y="216" text-anchor="middle" class="tw2 b">IGF2 bialelic → creștere excesivă</text>
  <text x="570" y="234" text-anchor="middle" class="tm">H19 (supresor tumoral) stins → risc de tumoră Wilms</text>
  <line x1="380" y1="40" x2="380" y2="240" class="sm" stroke-dasharray="2 5"/>`;
})()}
<rect x="20" y="256" width="720" height="60" rx="10" class="fas"/>
<text x="380" y="280" text-anchor="middle" class="ti">Același rezultat îl dă <tspan class="b">disomia uniparentală paternă</tspan>: două copii cu amprentă paternă, nicio copie maternă.</text>
<text x="380" y="300" text-anchor="middle" class="tm">La IC2, mecanismul obișnuit este invers: pierderea metilării materne (hipometilarea KvDMR1) reduce expresia CDKN1C.</text>
</svg>
<figcaption><b>Domeniul IC1: competiția IGF2–H19.</b> Normal, alela paternă este metilată la IC1 și exprimă <i>IGF2</i> (factor de creștere); alela maternă, nemetilată, exprimă <i>H19</i>. Dacă și alela maternă este metilată, ambele exprimă <i>IGF2</i>. Schemă proprie după curs (p. 77–79) și Emery (Fig. 6.25).</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Frecvența mecanismelor moleculare în BWS">
${bare("", [["hipometilarea KvDMR1 (IC2)", 50, 60, "fP"], ["disomie uniparentală paternă 11p15 (mozaic)", 10, 20, "fG"], ["mutații CDKN1C", 5, 10, "fA"], ["hipermetilarea H19DMR (IC1)", 2, 7, "fT"], ["anomalii citogenetice", 1, 2, "fZ"]], 20)}
<text x="342" y="204" class="tm">Mutațiile CDKN1C ajung la 40% în formele familiale autozomal dominante.</text>
</svg>
<figcaption><b>Mecanismele moleculare din BWS, după frecvență</b> (curs, p. 77). Lungimea barei corespunde limitei superioare a intervalului.</figcaption>
</figure>
<div class="capcana"><b>Inconsecvență în curs</b><p>În text, IC1 controlează <i>IGF2</i> și <i>H19</i>, iar IC2 controlează <i>CDKN1C</i>, <i>KCNQ1</i> și <i>KCNQ1OT1</i>. În lista mecanismelor de la p. 77, acoladele sunt inversate: mutațiile <i>CDKN1C</i> și hipometilarea KvDMR1 apar la „IC1”, iar hipermetilarea H19DMR și disomia la „IC2”. Corectă este varianta din text (și din Emery): <b>H19DMR = IC1</b>, <b>KvDMR1 = IC2</b>. Cursul scrie și „CDNQ1” pentru gena <i>KCNQ1</i>.</p></div>
<h3>Diagnostic clinic (Tabelul XII)</h3>
<p>Sunt necesare <b>minimum 3 semne majore</b> sau <b>2 majore și unul minor</b>.</p>
<div class="tw"><table>
<tr><th>Criterii majore</th><th>Criterii minore</th></tr>
<tr><td>Macroglosie</td><td>Hipoglicemie neonatală (de obicei tranzitorie)</td></tr>
<tr><td>Macrosomie / creștere excesivă</td><td>Hemihiperplazie</td></tr>
<tr><td>Omfalocel, diastazis recti, hernie ombilicală</td><td>Cardiomegalie</td></tr>
<tr><td>Visceromegalie</td><td>Polihidramnios, placentă mare</td></tr>
<tr><td>Tumori embrionare (Wilms, neuroblastom, carcinom adrenal, hepatoblastom, rabdomiosarcom)</td><td>Nevus flammeus facial sau alte anomalii vasculare</td></tr>
<tr><td>Anomalii auriculare (șanț pe lob, indentări posterioare ale helixului)</td><td>Prematuritate</td></tr>
<tr><td>Citomegalie adrenocorticală (la făt); anomalii renale și genitale; istoric familial pozitiv</td><td>Dismorfism facial cu hipoplazie mediofacială, care se atenuează în timp</td></tr>
</table></div>
<p style="font-size:14px;color:var(--muted)">Primele șase rânduri sunt verificate pe pagina scanată; ultimul rând de criterii majore este reconstituit din OCR.</p>
<h3>Corelații genotip–fenotip și risc de recurență (Tabelul XIII)</h3>
<div class="tw"><table>
<tr><th>Defect</th><th>Fenotip asociat</th><th>Transmitere</th><th>Risc de recurență</th></tr>
<tr><td><b>Hipometilare IC2</b> (KvDMR1 / <i>KCNQ1OT1</i>)</td><td>macroglosie, omfalocel; risc tumoral relativ scăzut</td><td>sporadic</td><td>scăzut</td></tr>
<tr><td><b>UPD paternă 11p15</b></td><td>hemihiperplazie, visceromegalie; risc crescut de tumori solide</td><td>sporadic</td><td>foarte scăzut</td></tr>
<tr><td><b>Mutații <i>CDKN1C</i></b></td><td>omfalocel, despicături palatine, anomalii genitale; risc tumoral scăzut</td><td>aproape exclusiv maternă</td><td>50% dacă mama este purtătoare</td></tr>
<tr><td><b>Hipermetilare <i>H19</i></b></td><td>hemihiperplazie, visceromegalie; <b>risc crescut de tumoră Wilms</b></td><td>cu deleție: maternă; fără deleție: sporadic</td><td>50% dacă mama are deleția; altfel scăzut</td></tr>
<tr><td><b>dup(11)(p15.5)</b></td><td>—</td><td>paternă</td><td>crescut</td></tr>
<tr><td><b>Translocații, inversii 11p15</b></td><td>—</td><td>maternă</td><td>până la 50%</td></tr>
</table></div>
<p><b>Urmărire:</b> glicemia nou-născutului (prevenirea convulsiilor hipoglicemice); screening tumoral periodic prin examen clinic, <b>ecografie abdominală</b> și <b>dozarea alfa-fetoproteinei</b>; chirurgie pentru omfalocel. Diagnostic genetic: cariotip (1–2%), FISH, <b>MS-MLPA</b> pentru UPD și defecte de metilare.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce duce expresia bialelică a IGF2 la macrosomie?</summary><div>IGF2 este un factor de creștere exprimat normal doar de pe alela paternă. Când se exprimă și de pe cea maternă, doza se dublează și creșterea fetală este exagerată.</div></details>
<details class="q"><summary>Care defect molecular din BWS impune cea mai atentă supraveghere oncologică?</summary><div>Hipermetilarea H19 (IC1) și disomia uniparentală paternă: ambele au risc crescut de tumori embrionare, în special tumoră Wilms.</div></details>
<details class="q"><summary>În ce situație riscul de recurență al BWS ajunge la 50%?</summary><div>Când mama poartă o mutație CDKN1C, o deleție asociată hipermetilării H19 sau o translocație/inversie 11p15: transmiterea este maternă.</div></details>
</div>`
}
]
});
})();
