/* LP V — Sindroamele heterozomale cromozomiale (LP p. 51–57) */
(function () {
const fo = (x, y, w, h, html, st = "") => `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;line-height:1.35;color:var(--muted);${st}">${html}</div></foreignObject>`;
const DEFS = `<defs><marker id="vf5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fZ"/></marker></defs>`;
const sag = (x1, y1, x2, y2, c = "sm", d = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" stroke-width="1.8" ${d ? `stroke-dasharray="${d}"` : ""} marker-end="url(#vf5)"/>`;
const inel = (cx, cy, r, parts) => { // donut din [procent, clasă]
  let a = -Math.PI / 2, s = ""; const r0 = r * 0.55, P = (rr, t) => `${(cx + rr * Math.cos(t)).toFixed(1)} ${(cy + rr * Math.sin(t)).toFixed(1)}`;
  parts.forEach(([p, c]) => { const b = a + p / 100 * 2 * Math.PI, L = p > 50 ? 1 : 0; s += `<path d="M${P(r, a)} A${r} ${r} 0 ${L} 1 ${P(r, b)} L${P(r0, b)} A${r0} ${r0} 0 ${L} 0 ${P(r0, a)}z" class="${c}"/>`; a = b; });
  return s;
};
// axa hipotalamus–hipofiză–gonadă în insuficiența gonadică primară
const axa = (gonada, hormon) => `<svg viewBox="0 0 760 250" role="img" aria-label="Hipogonadism hipergonadotrop">${DEFS}
<rect x="40" y="20" width="200" height="44" rx="10" class="fcard sm" stroke-width="1"/><text x="140" y="47" text-anchor="middle" class="ti b">Hipotalamus (GnRH)</text>
<rect x="40" y="100" width="200" height="44" rx="10" class="fcard sm" stroke-width="1"/><text x="140" y="127" text-anchor="middle" class="ti b">Hipofiză</text>
<rect x="40" y="180" width="200" height="50" rx="10" class="fws sm" stroke-width="1"/><text x="140" y="203" text-anchor="middle" class="ti b">${gonada}</text><text x="140" y="221" text-anchor="middle" class="tw2" style="font-size:11.5px">disgenetic(ă), fără funcție</text>
${sag(140, 64, 140, 98)}${sag(140, 144, 140, 178, "sa")}
<text x="152" y="166" class="ta b">LH, FSH ↑↑</text>
<path d="M240 205 C330 205 330 40 244 40" fill="none" class="sm" stroke-width="1.6" stroke-dasharray="4 4" marker-end="url(#vf5)"/>
<text x="300" y="118" class="tm" style="font-size:11.5px">feedback</text><text x="300" y="133" class="tm" style="font-size:11.5px">negativ absent</text>
<text x="252" y="232" class="tw2 b">${hormon} ↓</text>
${fo(400, 24, 340, 210, `<b style="color:var(--ink)">Hipogonadism hipergonadotrop</b> = gonada e cea bolnavă (insuficiență primară). Steroizii sexuali scad, hipofiza nu mai e frânată și crește LH/FSH.<br><br>Opusul, <b style="color:var(--ink)">hipogonadismul hipogonadotrop</b> (ex. sindromul Kallmann), are LH/FSH scăzute: problema e sus, în hipotalamus sau hipofiză. Dozarea gonadotropinelor le separă imediat.`)}
</svg>`;

GHID.capitol({
id: "lp05",
intro: `<p class="lead">Anomaliile cromozomilor sexuali sunt mult mai blânde decât cele autozomale: X-urile în plus sunt inactivate, iar Y are puține gene. Dezvoltarea fizică și intelectuală e mai puțin afectată; în schimb domină <b>disgenezia gonadică și infertilitatea</b>. Patru tablouri: 45,X (Turner), 47,XXX, 47,XXY (Klinefelter) și 47,XYY.</p>
<figure>
<svg viewBox="0 0 760 326" role="img" aria-label="Cariotip, corpusculi Barr și fenotip în aneuploidiile cromozomilor sexuali">
${(() => {
  const R = [["45,X", 0, "—", "feminin", "Turner", "1/2.500 F", "fP"], ["46,XX", 1, "—", "feminin", "normal", "", "fcard"], ["47,XXX", 2, "—", "feminin", "triplo X", "1/1.000 F", "fP"], ["46,XY", 0, "+", "masculin", "normal", "", "fcard"], ["47,XXY", 1, "+", "masculin", "Klinefelter", "1/500–600 M", "fG"], ["48,XXXY", 2, "+", "masculin", "Klinefelter sever", "rar", "fG"], ["47,XYY", 0, "++", "masculin", "XYY", "1/850–1.000 M", "fG"]];
  let s = ["Cariotip", "Corpusculi Barr", "Cromatina Y", "Fenotip", "Tablou", "Frecvență"].map((t, j) => `<text x="${[20, 140, 290, 400, 500, 640][j]}" y="22" class="tm b" style="font-size:12px">${t}</text>`).join("");
  R.forEach(([k, b, y, f, n, fr, c], i) => {
    const yy = 34 + i * 36;
    s += `<rect x="12" y="${yy}" width="736" height="30" rx="6" class="${c === "fcard" ? "fcard" : c === "fP" ? "fas" : "fis"}"/><text x="20" y="${yy + 20}" class="ti b" style="font-family:ui-monospace,monospace">${k}</text>`;
    for (let j = 0; j < b; j++) s += `<ellipse cx="${150 + j * 22}" cy="${yy + 15}" rx="8" ry="6" class="fP"/>`;
    if (!b) s += `<text x="142" y="${yy + 20}" class="tm">0</text>`;
    s += `<text x="300" y="${yy + 20}" class="${y === "—" ? "tm" : "tok b"}">${y}</text><text x="400" y="${yy + 20}" class="ti">${f}</text><text x="500" y="${yy + 20}" class="ti${c === "fcard" ? "" : " b"}">${n}</text><text x="640" y="${yy + 20}" class="tm">${fr}</text>`;
  });
  s += `<text x="20" y="300" class="tm">Corpusculi Barr = numărul de X − 1 (se inactivează toți X în afară de unul).</text><text x="20" y="318" class="tm">Fenotipul masculin îl dă prezența lui Y (gena SRY), indiferent câți X sunt.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Cele două reguli care explică tot capitolul.</b> Câte X sunt în plus se vede în corpusculii Barr; dacă e băiat sau fată decide Y. Cromatina sexuală și testele ei sunt în <a href="#/lp08">LP VIII</a>; inactivarea X în <a href="#/c01/lyon">ghidul de curs</a>. Frecvențele din carte. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "turner", titlu: "Sindromul Turner (45,X și variantele)", pag: "51–53", emery: "cap. 17, p. 255–256", acopera: ["lp05-r01", "lp05-r02"], curs: ["c01/lyon"],
html: `
<p>Singura monosomie viabilă: <b>1/2.500–1/3.000</b> de nou-născute. Și asta e o minoritate: ~95–99% din concepțiile 45,X se pierd ca avorturi (higromă chistică, hidrops). Testul Barr e negativ în monosomia omogenă, dar puțin util în mozaicuri și forme structurale; diagnosticul îl dă <b>cariotipul</b>.</p>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Formele citogenetice ale sindromului Turner">
${inel(120, 125, 100, [[55, "fP"], [25, "fA"], [20, "fC"]])}<text x="120" y="130" text-anchor="middle" class="ti b">Turner</text>
${[["45,X omogen", "50–60%", "cel mai des lipsește X-ul patern (~80% după Emery)", "fP"], ["Mozaic", "~25%", "45,X/46,XX; 45,X/46,XX/47,XXX; mai rar 45,X/46,XY", "fA"], ["Anomalii structurale ale X", "restul", "izocromozom Xq [i(Xq)], deleții Xp sau Xq, X inelar", "fC"]].map(([n, p, d, c], i) => `<rect x="260" y="${30 + i * 70}" width="16" height="16" rx="3" class="${c}"/><text x="284" y="${43 + i * 70}" class="ti b">${n} · ${p}</text>${fo(284, 48 + i * 70, 460, 36, d)}`).join("")}
</svg>
<figcaption><b>Formele citogenetice</b> (proporțiile din carte). Mozaicurile au de obicei un fenotip mai ușor și pot păstra fertilitatea. Schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>O linie celulară cu Y schimbă conduita</b>
<p>Cartea nu o spune: dacă în mozaic există material Y (45,X/46,XY), gonada disgenetică are risc de <b>gonadoblastom</b> și se recomandă îndepărtarea ei. De aceea, la o pacientă Turner cu marker cromozomial se caută Y prin FISH sau PCR.</p></div>
<h3>Ce face fiecare braț al lui X</h3>
<figure>
<svg viewBox="0 0 760 250" role="img" aria-label="Corelația dintre brațele cromozomului X și semnele Turner">
<rect x="100" y="30" width="34" height="62" rx="14" class="fA"/><rect x="100" y="96" width="34" height="140" rx="14" class="fC"/><circle cx="117" cy="94" r="5" class="fZ"/>
<text x="90" y="62" text-anchor="end" class="ti b">Xp</text><text x="90" y="170" text-anchor="end" class="ti b">Xq</text>
<line x1="134" y1="38" x2="230" y2="38" class="sm" stroke-width="1"/><text x="236" y="42" class="ta b" style="font-size:12px">SHOX (Xp22.33, pseudoautozomală)</text>
<line x1="134" y1="60" x2="200" y2="80" class="sm" stroke-width="1"/>
${fo(236, 56, 500, 60, "Lipsa lui Xp → <b>statură mică</b> și malformații (scheletice, limfedem). <i>SHOX</i> scapă de inactivarea X: femeia normală are două copii active, pacienta Turner doar una (haploinsuficiență).")}
<line x1="134" y1="160" x2="230" y2="160" class="sm" stroke-width="1"/>
${fo(236, 140, 500, 70, "Lipsa lui Xq (regiunea critică Xq13–q26) → <b>disfuncție ovariană</b>: ovarele se formează, dar foliculii se pierd accelerat și ajung „bandelete fibroase”. Deleții mai mici de Xq dau doar insuficiență ovariană prematură.")}
<text x="20" y="246" class="tm">Sus brațul scurt (Xp), jos brațul lung (Xq). Schemă proprie.</text>
</svg>
<figcaption><b>Statura ține de Xp, ovarul de Xq</b>, cum spune și cartea. Explicația moleculară pentru statură e haploinsuficiența genei <i>SHOX</i>, singura legătură genotip–fenotip bine demonstrată în Turner.</figcaption>
</figure>
<h3>Tabloul clinic</h3>
<figure>
<svg viewBox="0 0 760 340" role="img" aria-label="Semnele sindromului Turner pe grupe">
${[["Creștere", "semnul cardinal: statură mică (până la −3 DS), uneori de la naștere; talie finală ≤ 145 cm fără hormon de creștere", 20, 20, "fis"], ["Nou-născut", "<b>limfedem</b> al mâinilor și picioarelor; exces de piele pe ceafă (urma higromei chistice)", 390, 20, "fis"], ["Cap și gât", "facies triunghiular, epicantus, ptoză, urechi jos inserate, palat ogival; gât scurt, <b>pterygium colli</b>, implantare joasă a părului", 20, 112, "fas"], ["Torace și membre", "torace lat, mameloane depărtate; <b>cubitus valgus</b>, metacarpian IV scurt (semnul Archibald), unghii hipoplazice, nevi multipli", 390, 112, "fas"], ["Cord și rinichi", "<b>valvă aortică bicuspidă</b>, coarctație de aortă; rinichi în potcoavă", 20, 204, "fws"], ["Pubertate", "disgenezie ovariană: amenoree primară, sâni absenți sau mici, infertilitate; estrogeni ↓, LH/FSH ↑", 390, 204, "fws"]].map(([t, d, x, y, c]) => `<rect x="${x}" y="${y}" width="350" height="82" rx="10" class="${c}"/><text x="${x + 12}" y="${y + 22}" class="ti b">${t}</text>${fo(x + 12, y + 28, 330, 54, d, "color:var(--ink)")}`).join("")}
<text x="20" y="310" class="tm">Inteligență de obicei normală, cu dificultăți vizuo-spațiale; hipoacuzie.</text><text x="20" y="328" class="tm">La adult: HTA, obezitate, diabet de tip 2, tiroidită autoimună.</text>
</svg>
<figcaption><b>Semnele din carte, grupate.</b> În copilărie, singurul indiciu poate fi statura: orice fetiță cu statură mică neexplicată merită un cariotip. Schemă proprie.</figcaption>
</figure>
[[gal:x0|<b>Cariotip 45,X</b>: un singur cromozom sexual.;;turner_gat|<b>Pterygium colli</b> (gât „palmat”) la o pacientă cu sindrom Turner: pliuri cutanate pe fețele laterale ale gâtului.]]
<figure>${axa("Ovar → bandeletă fibroasă", "Estrogeni")}
<figcaption><b>De ce LH și FSH sunt crescute</b> („hipogonadism hipergonadotrop”, termenul din carte). Același mecanism, cu testiculul în loc de ovar, apare în sindromul Klinefelter. Schemă proprie.</figcaption>
</figure>
<p><b>Tratament și prognostic:</b> hormon de creștere din copilărie, apoi substituție estro-progestativă la pubertate. Prognosticul depinde de malformațiile cardiace (supraveghere pentru dilatarea aortei) și renale.</p>
<div class="lab"><b>Diagnosticul prenatal și diferențial</b>
<p>Semne ecografice: <b>higromă chistică</b>, hidrops, malformații cardiace sau renale. Confirmare prin cariotip pe amniocite. <b>Sindromul Noonan</b> seamănă (statură mică, gât palmat, facies), dar e monogenic (calea RAS, de ex. <i>PTPN11</i>), afectează și băieții, are stenoză pulmonară în loc de coarctație și fără disgenezie gonadică la fete; cariotipul e normal.</p></div>
<div class="capcana"><b>Riscul de recurență</b>
<p>Cartea spune că monosomia X are un risc de recurență „mai mare decât în populația generală”. Pentru 45,X apărut de novo, riscul nu e practic crescut: nu există efect al vârstei materne și cel mai des se pierde X-ul patern.</p></div>`
},
{
id: "xxx", titlu: "Trisomia X și alte polisomii X", pag: "54", emery: "cap. 17, p. 255", acopera: ["lp05-r03"],
html: `
<p><b>1/1.000</b> de nou-născute; cele mai multe femei 47,XXX nu sunt diagnosticate niciodată. Cromatina X e pozitivă (până la doi corpusculi Barr pe celulă); cariotipul arată 47,XXX omogen sau mozaic 46,XX/47,XXX. Cauza principală: <b>nondisjuncție în meioza I maternă</b>, legată de vârsta mamei (~90%).</p>
<div class="pasi">
<div><b>Statură</b>peste medie</div>
<div><b>Intelect</b>la limita inferioară a normalului; tulburări de limbaj, dificultăți de învățare</div>
<div><b>Față</b>dismorfie discretă, nespecifică: hipoplazie mediofacială, fante oblice, hipertelorism</div>
<div><b>Gonade</b>cicluri neregulate, insuficiență ovariană prematură; adesea fertile</div>
</div>
<figure>
<svg viewBox="0 0 760 210" role="img" aria-label="Severitatea crește cu numărul de cromozomi X">
<text x="20" y="22" class="ti b">Fiecare X în plus scade intelectul și crește dismorfia</text>
${[["46,XX", 0], ["47,XXX", 1], ["48,XXXX", 2], ["49,XXXXX", 3]].map(([k, n], i) => `<text x="120" y="${60 + i * 36}" text-anchor="end" class="ti b" style="font-family:ui-monospace,monospace">${k}</text><rect x="130" y="${46 + i * 36}" width="${560 - n * 130}" height="22" rx="4" class="${n ? "fP" : "fA"}" opacity="${1 - n * 0.15}"/>`).join("")}
<text x="20" y="200" class="tm">Bara sugerează coeficientul de inteligență: aproximativ −10–15 puncte pentru fiecare X în plus.</text>
</svg>
<figcaption><b>Gradientul polisomiilor X.</b> Deși X-urile în plus sunt inactivate, genele care scapă inactivării (~15% din X) și regiunea pseudoautozomală se exprimă în exces. Schemă proprie, calitativă.</figcaption>
</figure>
<div class="capcana"><b>Două scăpări ale cărții</b>
<p>1) „Polisomii X cu diagnosticul 47,XXX sau 48,XXXX” se referă de fapt la <b>48,XXXX și 49,XXXXX</b> (47,XXX e trisomia simplă de mai sus). 2) Copiii femeilor 47,XXX sunt <b>în majoritate normali</b>; riscul de aneuploidie la descendenți e doar puțin crescut, nu un rezultat obișnuit.</p></div>`
},
{
id: "klinefelter", titlu: "Sindromul Klinefelter (47,XXY)", pag: "54–56", emery: "cap. 17, p. 254–255", acopera: ["lp05-r04", "lp05-r06"],
html: `
<p><b>1/500–1/600</b> de nou-născuți băieți, cea mai frecventă cauză genetică de hipogonadism și infertilitate masculină. Peste jumătate dintre cazuri nu sunt diagnosticate niciodată. Testul cromatinei X e pozitiv, testul cromatinei Y la fel.</p>
<figure>
<svg viewBox="0 0 760 240" role="img" aria-label="Formele citogenetice ale sindromului Klinefelter">
${inel(120, 120, 100, [[85, "fG"], [10, "fA"], [5, "fC"]])}<text x="120" y="125" text-anchor="middle" class="ti b">Klinefelter</text>
${[["47,XXY omogen", "~85%", "nondisjuncție meiotică; X-ul în plus vine aproape la fel de des de la tată (MI) ca de la mamă", "fG"], ["Mozaic 46,XY/47,XXY", "~10%", "nondisjuncție mitotică postzigotică; fenotip mai ușor, uneori fertilitate", "fA"], ["48,XXXY, 49,XXXXY, 48,XXYY", "rar", "fiecare X în plus agravează dismorfia și dizabilitatea intelectuală", "fC"]].map(([n, p, d, c], i) => `<rect x="260" y="${30 + i * 68}" width="16" height="16" rx="3" class="${c}"/><text x="284" y="${43 + i * 68}" class="ti b">${n} · ${p}</text>${fo(284, 48 + i * 68, 460, 36, d)}`).join("")}
</svg>
<figcaption><b>Formele citogenetice.</b> Procentele pentru mozaic și variante sunt aproximative (cartea dă doar 85% pentru 47,XXY). Schemă proprie.</figcaption>
</figure>
[[img:xxy|<b>Cariotip 47,XXY</b>: doi cromozomi X și un Y.]]
<div class="capcana"><b>Corecturi la datele cărții</b>
<p>1) Celulele 47,XXY au <b>un singur</b> corpuscul Barr (X − 1), nu „unul sau doi”; doi corpusculi apar la 48,XXXY. 2) X-ul în plus e patern în ~45–50% din cazuri (Emery, Tabelul 3.4), nu 60%. 3) „Azoospermie definitivă”: prin <b>micro-TESE</b> (extracție testiculară de spermatozoizi) și ICSI, o parte dintre bărbații cu Klinefelter pot avea copii biologici.</p></div>
<h3>Fenotipul de după pubertate</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Proporțiile corpului în sindromul Klinefelter">
${(() => {
  const om = (x, umeri, sold, picior, gin, et) => {
    const top = 40, cap = 26, gat = top + cap * 2 + 6, sh = gat + 8, hip = sh + 110, ft = hip + picior;
    return `<circle cx="${x}" cy="${top + cap}" r="${cap}" class="fcard sm" stroke-width="1.5"/>
<path d="M${x - umeri / 2} ${sh} L${x + umeri / 2} ${sh} L${x + sold / 2} ${hip} L${x - sold / 2} ${hip}z" class="fcard sm" stroke-width="1.5"/>
<line x1="${x - umeri / 2}" y1="${sh}" x2="${x - umeri / 2 - 22}" y2="${hip + 34}" class="sm" stroke-width="9" stroke-linecap="round"/><line x1="${x + umeri / 2}" y1="${sh}" x2="${x + umeri / 2 + 22}" y2="${hip + 34}" class="sm" stroke-width="9" stroke-linecap="round"/>
<line x1="${x - 14}" y1="${hip}" x2="${x - 16}" y2="${ft}" class="sm" stroke-width="12" stroke-linecap="round"/><line x1="${x + 14}" y1="${hip}" x2="${x + 16}" y2="${ft}" class="sm" stroke-width="12" stroke-linecap="round"/>
${gin ? `<circle cx="${x - 16}" cy="${sh + 32}" r="9" class="fP" opacity=".55"/><circle cx="${x + 16}" cy="${sh + 32}" r="9" class="fP" opacity=".55"/>` : ""}
<line x1="${x - umeri / 2}" y1="${sh - 6}" x2="${x + umeri / 2}" y2="${sh - 6}" class="sa" stroke-width="2"/><line x1="${x - sold / 2}" y1="${hip + 6}" x2="${x + sold / 2}" y2="${hip + 6}" class="sT" stroke-width="2"/>
<text x="${x}" y="${ft + 24}" text-anchor="middle" class="ti b">${et}</text>`;
  };
  return om(150, 96, 70, 120, false, "46,XY") + om(370, 74, 84, 150, true, "47,XXY") +
    fo(480, 30, 270, 280, `<b style="color:var(--ink)">Ce se vede:</b><br>• statură înaltă, membre inferioare lungi (proporții eunucoide)<br>• <span style="color:var(--accent)">diametrul biacromial</span> mai mic decât <span style="color:var(--warn)">bitrohanterian</span>, adipozitate ginoidă<br>• pilozitate facială și corporală redusă, inserție pubiană orizontală<br>• <b>ginecomastie</b> (~1/3 din adolescenți)<br>• <b>testicule mici (&lt; 3 cm), ferme</b>; penis normal sau mic<br>• azoospermie; testosteron ↓, LH/FSH ↑`);
})()}
</svg>
<figcaption><b>Proporțiile corpului</b> (în locul figurii 14 din carte): testiculele mici și ferme sunt semnul cel mai constant, prezent la aproape toți adulții. Inteligența e de obicei normală, cu dificultăți de limbaj și învățare. Schemă proprie.</figcaption>
</figure>
<figure>${axa("Testicul (tubi hialinizați)", "Testosteron")}
<figcaption><b>Hipogonadism hipergonadotrop în Klinefelter.</b> Diagnosticul diferențial din carte, <b>sindromul Kallmann</b> (hipogonadism + anosmie), are mecanismul opus: GnRH lipsește, deci LH/FSH sunt scăzute. Schemă proprie.</figcaption>
</figure>
<p><b>Tratament și prognostic:</b> speranță de viață normală; substituție cu testosteron începută la 11–12 ani, toată viața. La adult sunt mai frecvente diabetul, bronșita cronică, osteoporoza și boala tromboembolică. <b>Recurența</b> nu e crescută față de populația generală (efectul vârstei materne apare doar la cazurile de origine maternă).</p>`
},
{
id: "xyy", titlu: "Sindromul 47,XYY", pag: "56–57", emery: "cap. 17, p. 256", acopera: ["lp05-r05"],
html: `
<p><b>1/850–1/1.000</b> de nou-născuți băieți; fenotipul e de obicei normal, deci majoritatea nu sunt diagnosticați. Test Barr negativ, cromatina Y „dublă”, cariotip <b>47,XYY</b>.</p>
[[img:xyy_cariotip|<b>Cariotip 47,XYY</b> (din amniocenteză): doi cromozomi Y (săgeata).]]
<div class="pasi">
<div><b>Creștere</b>talie înaltă, prin accelerarea creșterii în copilărie</div>
<div><b>Intelect</b>normal, dar cu 10–15 puncte sub frați; întârziere de limbaj</div>
<div><b>Comportament</b>deficit de atenție, hiperactivitate, impulsivitate</div>
<div><b>Altele</b>acnee nodulochistică, macrodonție, rar sinostoză radio-ulnară</div>
<div><b>Fertilitate</b>de obicei păstrată; uneori hipofertilitate</div>
</div>
<div class="capcana"><b>„Sindromul supermasculului” e un mit</b>
<p>Asocierea cu criminalitatea a pornit din studii pe deținuți din anii 1960. Studiile prospective pe nou-născuți urmăriți până la vârsta adultă nu au confirmat agresivitatea. Ce rămâne: dificultăți de învățare și atenție, care răspund la sprijin școlar. Vezi și <a href="#/lp03/indicatii">LP III, indicațiile cariotipului</a>.</p></div>
<div class="capcana"><b>Nu „toate cazurile” vin din meioza II paternă</b>
<p>Cartea spune că toate cazurile sunt consecința nondisjuncției în MII paternă. Y-ul în plus vine într-adevăr întotdeauna de la tată, dar o parte din cazuri apar <b>după fecundare</b>, prin nondisjuncție mitotică în zigotul 46,XY (Emery).</p></div>`
},
{
id: "aplicatii", titlu: "Aplicații practice: recunoașterea fenotipurilor și cariotipul bandat", pag: "57", emery: "cap. 3, 17", acopera: [],
html: `
<p>Lucrarea are două părți: recunoașterea fenotipurilor din LP IV–V pe fotografii și alcătuirea unui cariotip bandat din imaginea unei metafaze, cu diagnosticul citogenetic.</p>
<ol class="protocol">
<li><b>Numără cromozomii</b><span class="de-ce">înainte de orice decupare. 45 sau 47 orientează imediat; 46 nu exclude o anomalie (translocație echilibrată, mozaic sau o trisomie prin translocație robertsoniană, care are 46 de cromozomi).</span></li>
<li><b>Decupează și grupează</b><span class="de-ce">după mărime și poziția centromerului, în grupele A–G (<a href="#/lp03/criterii">LP III</a>); identifică perechile după benzi.</span></li>
<li><b>Caută perechea fără pereche</b><span class="de-ce">un cromozom în plus sau lipsă; la cromozomii sexuali, compară cu numărul de X și Y.</span></li>
<li><b>Scrie formula ISCN</b><span class="de-ce">număr total, virgulă, cromozomi sexuali, virgulă, anomalia: 47,XY,+21; 45,X; 46,XX,rob(14;21)(q10;q10),+21 (<a href="#/lp07">LP VII</a>).</span></li>
<li><b>Leagă cariotipul de fenotip</b><span class="de-ce">și de riscul de recurență: aceeași clinică, riscuri foarte diferite (<a href="#/lp04/down-sfat">LP IV</a>).</span></li>
</ol>
<h3>Exersează pe cariotipuri reale</h3>
[[gal:t13_cariotip|<b>Cariotipul A.</b>;;t18_cariotip|<b>Cariotipul B.</b>;;xxy|<b>Cariotipul C.</b>;;x0|<b>Cariotipul D.</b>]]
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Cariotipul A: ce formulă scrii?</summary><div><b>47,XX,+13</b>: trei cromozomi în perechea 13 (grupa D, acrocentrici mari). Sindrom Patau.</div></details>
<details class="q"><summary>Cariotipul B?</summary><div><b>47,XY,+18</b>: trei cromozomi 18 (grupa E, submetacentrici mici); cromozomii sexuali sunt X și Y. Sindrom Edwards.</div></details>
<details class="q"><summary>Cariotipul C? Câți corpusculi Barr ar avea celulele lui?</summary><div><b>47,XXY</b>, sindrom Klinefelter. Un corpuscul Barr (X − 1).</div></details>
<details class="q"><summary>Cariotipul D? Ce test ar mai cere un clinician dacă găsește un cromozom marker mic?</summary><div><b>45,X</b>, sindrom Turner. La un marker se caută material Y (FISH sau PCR), din cauza riscului de gonadoblastom.</div></details>
<details class="q"><summary>Un copil cu sindrom Down are 46 de cromozomi. Cum e posibil?</summary><div>Trisomie prin translocație robertsoniană: al treilea 21 e fuzionat cu alt acrocentric (de obicei 14), deci numărul total rămâne 46. Se investighează părinții.</div></details>
</div>`
}
]
});
})();
