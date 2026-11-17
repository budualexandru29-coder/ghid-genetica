/* Capitolul 13 — Tratamentul bolilor genetice (curs p. 237–248) */
(function () {
GHID.capitol({
id: "c13",
intro: `<p class="lead">Cele mai multe boli genetice nu se vindecă, dar se pot trata. Tratamentul poate interveni la orice nivel, de la fenotip până la genă: cu cât mai aproape de cauză, cu atât mai radical (și mai dificil).</p>
<figure>
<svg viewBox="0 0 760 360" role="img" aria-label="Nivelurile la care poate interveni tratamentul">
<defs><marker id="t1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${[["GENĂ (ADN)", "terapie genică, editare, corectarea mutației", "fP"], ["ARNm", "oligonucleotide antisens, ARNi, ribozime, salt de exon", "fZ"], ["PROTEINĂ", "substituție enzimatică / de factor; chaperone", "fG"], ["METABOLIT", "dietă, eliminarea substanței stocate, reducerea substratului", "fT"], ["CELULĂ / ORGAN", "transplant, terapie celulară cu celule stem", "fC"], ["FENOTIP", "chirurgie corectivă, fizioterapie, evitarea factorilor declanșatori", "fA"]].map(([t, d, c], i) => {
  const y = 16 + i * 56, w = 300 - i * 20;
  return `<rect x="${170 - w / 2 + 40}" y="${y}" width="${w}" height="44" rx="10" class="${c}"/><text x="${210}" y="${y + 28}" text-anchor="middle" fill="${c === "fC" ? "#1f2a37" : "#fff"}" style="font-weight:800">${t}</text><text x="380" y="${y + 28}" class="ti" style="font-size:12.5px">${d}</text>`;
}).join("")}
<path d="M30 340 V24" class="si" stroke-width="2" marker-end="url(#t1)"/><text x="20" y="200" transform="rotate(-90 20 200)" text-anchor="middle" class="tm" style="font-size:11px">mai aproape de cauză</text>
</svg>
<figcaption><b>Clasificarea metodelor de tratament din curs</b> (p. 237–241), așezată pe drumul de la genă la fenotip. Schemă proprie.</figcaption>
</figure>`,
sectiuni: [
{
id: "metode", titlu: "Metode de tratament; Tabelul XXXII", pag: "237–240", emery: "cap. 22", acopera: ["c13-r01", "c13-r02"],
html: `
<p>Diagnosticul cât mai precoce este esențial: unele tratamente (dietă, substituție) previn leziunile doar dacă încep înainte de simptome.</p>
<div class="tw"><table>
<tr><th>Nivel</th><th>Metodă</th><th>Exemple din curs</th></tr>
<tr><td rowspan="3"><b>Fenotip clinic</b></td><td>chirurgie corectivă</td><td>DSA, DSV, polidactilii, DLP</td></tr>
<tr><td>fizioterapie</td><td>picior strâmb congenital</td></tr>
<tr><td>evitarea factorilor declanșatori</td><td>hipoxia la heterozigoții pentru siclemie; bobul (<i>Vicia faba</i>) și unele medicamente în deficitul de G6PD; UV în albinism</td></tr>
<tr><td rowspan="3"><b>Metabolic</b></td><td>dietă</td><td>fără fenilalanină (PKU); fără fructoză și zaharoză (intoleranța ereditară la fructoză); fără lactoză (galactozemie); hipolipidică (FH); hipoproteică (defecte ale ciclului ureei); săracă în fier (hemocromatoză)</td></tr>
<tr><td>îndepărtarea substanței stocate</td><td>flebotomie (hemocromatoză); penicilamină (Wilson); alopurinol (hiperuricemie)</td></tr>
<tr><td>modularea căilor metabolice</td><td>statine (hipercolesterolemie)</td></tr>
<tr><td rowspan="2"><b>Substituție</b></td><td>enzimatică</td><td>α-L-iduronidază (Aldurazyme) în MPS I; iduronat-2-sulfatază în MPS II (Hunter); β-glucocerebrozidază (Cerezyme) în boala Gaucher</td></tr>
<tr><td>alți produși genici</td><td>factor VIII / IX (hemofilii), insulină, hormon de creștere, tiroxină</td></tr>
<tr><td><b>Organ</b></td><td>transplant</td><td>renal în boala polichistică; hepatic în amiloidoza familială</td></tr>
<tr><td><b>Expresie genică</b></td><td>reactivarea unei gene normale reprimate</td><td>(ex. clasic din literatură: reactivarea globinei fetale în siclemie și β-talasemie)</td></tr>
<tr><td><b>Genă</b></td><td>terapie genică</td><td>corectarea defectului prin modificarea genotipului (secțiunea următoare)</td></tr>
</table></div>
<h3>Tabelul XXXII. Terapia în bolile lizozomale (verificat pe scanare)</h3>
<div class="tw"><table>
<tr><th>Tratament</th><th>Mecanism</th></tr>
<tr><td><b>Substituție enzimatică</b></td><td>produse obținute prin tehnologia ADN recombinant, care înlocuiesc enzima deficitară sau absentă</td></tr>
<tr><td><b>Reducerea substratului</b></td><td>medicamente per os care scad concentrația substratului, astfel încât enzima reziduală să facă față</td></tr>
<tr><td><b>Chaperone farmacologice</b></td><td>medicamente per os care refac structura normală a proteinei (plierea), restaurându-i funcția</td></tr>
</table></div>
<figure>
<svg viewBox="0 0 760 350" role="img" aria-label="Trei strategii în bolile lizozomale">
${(() => {
  let s = "";
  const lizo = (x, n, enz) => {
    let t = `<circle cx="${x}" cy="160" r="80" class="fcard si" stroke-width="1.6"/>`;
    for (let i = 0; i < n; i++) { const a = i * 2.4, r = 12 + 9 * Math.sqrt(i); t += `<path d="M${(x + r * Math.cos(a) - 7).toFixed(0)} ${(160 + r * Math.sin(a)).toFixed(0)} q7 -9 14 0" fill="none" class="sA" stroke-width="2"/>`; }
    enz.forEach(([dx, dy, c]) => (t += `<path d="M${x + dx - 9} ${160 + dy - 7} a9 9 0 1 0 18 0 l-9 7z" class="${c}"/>`));
    return t;
  };
  s += `<text x="130" y="30" text-anchor="middle" class="ti b">① Substituție enzimatică</text><text x="130" y="48" text-anchor="middle" class="tm" style="font-size:11px">enzimă recombinantă i.v.</text>`;
  s += lizo(130, 10, [[-40, -20, "fG"], [30, 30, "fG"], [10, -45, "fG"], [-20, 40, "fG"]]);
  s += `<text x="130" y="270" text-anchor="middle" class="ti" style="font-size:12px">enzima intră în lizozom</text><text x="130" y="286" text-anchor="middle" class="ti" style="font-size:12px">prin receptorul manozo-6-fosfat</text>`;
  s += `<text x="380" y="30" text-anchor="middle" class="ti b">② Reducerea substratului</text><text x="380" y="48" text-anchor="middle" class="tm" style="font-size:11px">inhibitor per os al sintezei</text>`;
  s += lizo(380, 6, [[20, 40, "fline"]]) + `<path d="M380 60 v16 M370 66 l10 10 l10 -10" class="sA" stroke-width="2" fill="none"/><text x="404" y="70" class="tw2 b" style="font-size:11px">mai puțin substrat</text>`;
  s += `<text x="380" y="270" text-anchor="middle" class="ti" style="font-size:12px">enzima reziduală</text><text x="380" y="286" text-anchor="middle" class="ti" style="font-size:12px">ține pasul cu aportul redus</text>`;
  s += `<text x="630" y="30" text-anchor="middle" class="ti b">③ Chaperone</text><text x="630" y="48" text-anchor="middle" class="tm" style="font-size:11px">moleculă mică per os</text>`;
  s += lizo(630, 8, [[-30, -10, "fP"], [25, 25, "fP"]]) + `<circle cx="597" cy="156" r="4" class="fC"/><circle cx="652" cy="191" r="4" class="fC"/>`;
  s += `<text x="630" y="270" text-anchor="middle" class="ti" style="font-size:12px">ajută enzima mutantă</text><text x="630" y="286" text-anchor="middle" class="ti" style="font-size:12px">să se plieze și să ajungă în lizozom</text>`;
  s += `<text x="380" y="330" text-anchor="middle" class="tm" style="font-size:11.5px">roșu = substrat acumulat · verde/violet = enzimă activă · gri = enzimă reziduală · galben = chaperone</text>`;
  return s;
})()}
</svg>
<figcaption><b>Tabelul XXXII desenat.</b> Receptorul manozo-6-fosfat (calea de intrare a enzimei recombinante) este din Emery; schemă proprie.</figcaption>
</figure>
<div class="capcana"><b>Limita substituției enzimatice</b><p>Enzima administrată i.v. nu trece bariera hematoencefalică: îmbunătățește organele, dar nu și afectarea neurologică (vezi MPS I în capitolul 8). De aici interesul pentru moleculele mici per os (reducerea substratului, chaperone) și pentru terapia genică.</p></div>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>Asociază: flebotomie, penicilamină, dietă fără lactoză, factor VIII recombinant.</summary><div>Hemocromatoză; boala Wilson; galactozemie; hemofilia A.</div></details>
<details class="q"><summary>De ce reducerea substratului funcționează doar dacă există enzimă reziduală?</summary><div>Strategia scade aportul de substrat, dar degradarea lui tot o face enzima pacientului; fără enzimă deloc, substratul tot s-ar acumula.</div></details>
</div>`
},
{
id: "genica", titlu: "Terapia genică și terapiile moleculare țintite", pag: "240–248", emery: "cap. 22", acopera: [],
html: `
<p>Succesele sunt limitate la puține boli, din cauza complexității: una sau mai multe mutații, unul sau mai mulți produși anormali care acționează local sau la distanță, factori modulatori genetici și de mediu. <b>Principiul</b> terapiei genice: introducerea în celulele mutante a unor secvențe normale de ADN care să înlocuiască funcția genei mutante.</p>
<h3>Etapele terapiei genice</h3>
<figure>
<svg viewBox="0 0 760 230" role="img" aria-label="Etapele terapiei genice">
<defs><marker id="t2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
${[["Identificare", "gena mutantă și|tipul mutației"], ["Secvență", "stabilirea|secvenței genei"], ["Transgenă", "sintetizată in vitro|(sau minigenă)"], ["Transfer", "vector viral|sau nonviral"], ["Fixare", "integrare în genom|sau episom"], ["Expresie", "sinteza proteinei|deficitare"]].map(([t, d], i) => {
  const x = 20 + i * 124;
  return `<rect x="${x}" y="30" width="108" height="110" rx="12" class="${i === 3 ? "fP" : "fcard si"}" stroke-width="1"/><text x="${x + 54}" y="62" text-anchor="middle" ${i === 3 ? 'fill="#fff" style="font-weight:800"' : 'class="ti b"'}>${t}</text>${d.split("|").map((r, j) => `<text x="${x + 54}" y="${92 + j * 16}" text-anchor="middle" ${i === 3 ? 'fill="#fff"' : 'class="tm"'} style="font-size:11px">${r}</text>`).join("")}${i < 5 ? `<path d="M${x + 110} 85 h12" class="si" stroke-width="1.6" marker-end="url(#t2)"/>` : ""}`;
}).join("")}
<rect x="20" y="164" width="720" height="54" rx="10" class="fas"/>
<text x="380" y="186" text-anchor="middle" class="ti"><tspan class="b">Minigene</tspan>: doar fragmente din genă; folosite în DMD (micro-distrofina), unde proteina scurtată rămâne funcțională,</text>
<text x="380" y="204" text-anchor="middle" class="ti">exact ca în distrofia Becker (capitolul 10). Gena întreagă (2,1 Mb) nu încape în niciun vector.</text>
</svg>
<figcaption><b>Etapele din curs</b> (p. 241–242). Schemă proprie.</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 300" role="img" aria-label="Terapie genică ex vivo și in vivo">
<defs><marker id="t3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ti"/></marker></defs>
<rect x="20" y="16" width="350" height="270" rx="14" class="fis sin" stroke-width="1"/><text x="195" y="42" text-anchor="middle" class="tin b" style="font-size:15px">EX VIVO</text>
${["recoltare celule stem (măduvă)", "corectare în laborator (vector)", "cultivare, verificare", "reinfuzie la pacient"].map((t, i) => `<rect x="50" y="${60 + i * 54}" width="290" height="40" rx="20" class="fcard si" stroke-width="1"/><text x="195" y="${85 + i * 54}" text-anchor="middle" class="ti" style="font-size:12.5px">${t}</text>${i < 3 ? `<path d="M195 ${101 + i * 54} v12" class="si" stroke-width="1.4" marker-end="url(#t3)"/>` : ""}`).join("")}
<rect x="390" y="16" width="350" height="270" rx="14" class="fas" stroke-width="1"/><text x="565" y="42" text-anchor="middle" class="ta b" style="font-size:15px">IN VIVO</text>
${["vector cu transgena", "administrat direct: i.v., local,|aerosoli (CFTR în FC), subretinian", "celulele-țintă din organ", "exprimă proteina"].map((t, i) => `<rect x="420" y="${60 + i * 54}" width="290" height="40" rx="20" class="fcard si" stroke-width="1"/>${t.split("|").map((r, j, a) => `<text x="565" y="${(a.length > 1 ? 78 : 85) + i * 54 + j * 15}" text-anchor="middle" class="ti" style="font-size:12px">${r}</text>`).join("")}${i < 3 ? `<path d="M565 ${101 + i * 54} v12" class="si" stroke-width="1.4" marker-end="url(#t3)"/>` : ""}`).join("")}
</svg>
<figcaption><b>Două strategii de transfer.</b> Cursul descrie terapia celulară ex vivo (recoltare, înlocuirea genei, cultivare, diferențiere, reintroducere) și transferul direct cu lipozomi în aerosoli (CFTR). Schemă proprie.</figcaption>
</figure>
<h3>Vectori</h3>
<div class="tw"><table>
<tr><th>Vector</th><th>Caracteristici</th><th>Avantaj / risc</th></tr>
<tr><td><b>Retrovirusuri</b> (inclusiv lentivirusuri)</td><td>ARN, revers-transcris și <b>integrat</b> în ADN-ul gazdei</td><td>expresie de durată în celulele care se divid; risc de <b>mutageneză inserțională</b></td></tr>
<tr><td><b>Adenovirusuri</b></td><td>ADN, gene mari, intră și în celulele care se divid lent; <b>nu se integrează</b></td><td>imunogenitate crescută</td></tr>
<tr><td><b>Virusuri adeno-asociate (AAV)</b> (Emery)</td><td>ADN mic, mai ales episomal</td><td>imunogenitate mică; capacitate mică (~4,7 kb)</td></tr>
<tr><td><b>Nonvirali chimici</b></td><td>lipozomi cu ADN încorporat</td><td>siguri, eficiență mică (încercați în FC, prin aerosoli)</td></tr>
<tr><td><b>Nonvirali fizici</b></td><td>metode mecanice care trec ADN-ul prin membrană</td><td>—</td></tr>
</table></div>
[[gal:aav|<b>Virusul adeno-asociat</b> (capsidă AAV2): vectorul celor mai multe terapii genice in vivo aprobate.;;terapie_gen|<b>Terapia genică cu vector viral</b>: gena terapeutică este ambalată într-un virus fără gene patogene, care o livrează în nucleul celulei-țintă.]]
<div class="capcana"><b>Integrare vs. episom: o frază de citit cu atenție</b><p>Cursul spune că gena rămasă extracromozomial (episom) are „caracter ereditar”, transmițându-se în generațiile de celule. De fapt <b>integrarea</b> în genom asigură transmiterea către celulele-fiice; un episom se diluează când celulele se divid (rămâne stabil doar în celulele care nu se mai divid, ca neuronii sau fotoreceptorii). Dezavantajul integrării este cel corect descris de curs: inserția întâmplătoare poate inactiva o genă sau activa o oncogenă. Emery descrie leucemiile apărute în primele studii pentru SCID-X1 cu vectori retrovirali.</p></div>
<h3>Unde a funcționat (la data cursului)</h3>
<div class="pasi">
<div><b>Cancere</b>~2/3 din studii; singurele ajunse în faza III</div>
<div><b>Infecții virale</b>HIV</div>
<div><b>SCID-X1</b>imunodeficiență combinată severă, X-recesivă: fără limfocite T și NK</div>
<div><b>Deficitul de ADA</b>adenozina acumulată distruge limfocitele (SCID)</div>
<div><b>Granulomatoza septică cronică</b>X-recesivă, defect NADPH-oxidază</div>
<div><b>Epidermoliza buloasă</b>(<i>LAMB3</i>, laminina 5); <b>retinopatii</b></div>
</div>
<p>Protocoale existau și pentru hemofilii, fibroza chistică, DMD/DMB, deficitul de α1-antitripsină, PKU, Gaucher, MPS (Hurler, Hunter), Pompe, talasemii, siclemie.</p>
<div class="emery"><b>După curs</b><p>Între timp au fost aprobate terapii genice pentru distrofia retiniană <i>RPE65</i> (2017, AAV subretinian), atrofia musculară spinală (2019, AAV i.v.), hemofiliile A și B (AAV hepatic) și prima terapie prin editare <b>CRISPR</b> pentru siclemie și β-talasemie (2023), care reactivează globina fetală în celulele stem ex vivo: exact „modularea expresiei genice” din clasificarea cursului.</p></div>
[[img:crispr|<b>CRISPR-Cas9</b>: ARN-ul ghid duce nucleaza Cas9 la secvența-țintă, unde taie ambele catene; reparația celulei produce modificarea dorită.]]
<h3>Terapiile moleculare țintite</h3>
<figure>
<svg viewBox="0 0 760 330" role="img" aria-label="Ținte moleculare: genom, epigenom, transcriptom, proteom, celulă">
${(() => {
  const t = [["GENOM", "corectarea mutației punctiforme (himere ADN–ARN, oligonucleotide);|modularea unei gene secundare din același lanț (ex. β-globina)", "fP"], ["EPIGENOM", "heterocromatină ⇄ eucromatină: inhibitori de histon-deacetilaze,|inhibitori de ADN-metilaze (mai ales în oncologie)", "fZ"], ["TRANSCRIPTOM", "antisens (OAS), PNA, ribozime, ARN interferent (21–22 nt),|anticorpi intracelulari; ARNi testat în boala Huntington", "fG"], ["PROTEOM", "primară: proteina-medicament recombinantă (factor VIII, enzime);|secundară: în amonte/aval (ex. anti-VEGF, sorafenib)", "fT"], ["CELULĂ", "celule stem embrionare (totipotente, telomerază activă) sau|multipotente postnatale (cordon ombilical, măduvă)", "fC"]];
  return t.map(([n, d, c], i) => `<rect x="20" y="${12 + i * 62}" width="170" height="50" rx="12" class="${c}"/><text x="105" y="${42 + i * 62}" text-anchor="middle" fill="${c === "fC" ? "#1f2a37" : "#fff"}" style="font-weight:800">${n}</text>${d.split("|").map((r, j) => `<text x="206" y="${32 + i * 62 + j * 18}" class="ti" style="font-size:12.5px">${r}</text>`).join("")}`).join("");
})()}
</svg>
<figcaption><b>Cele cinci ținte</b> ale terapiei moleculare din curs (p. 244–246).</figcaption>
</figure>
<figure>
<svg viewBox="0 0 760 270" role="img" aria-label="Cum blochează ARNi și oligonucleotidele antisens un ARNm">
${(() => {
  let s = `<path d="M40 70 H720" class="sG" stroke-width="8" stroke-linecap="round"/><text x="40" y="52" class="ti b">ARNm mutant</text><text x="720" y="52" text-anchor="end" class="tm" style="font-size:11px">5′ → 3′</text>`;
  s += `<rect x="120" y="96" width="160" height="16" rx="8" class="fP"/><text x="200" y="134" text-anchor="middle" class="ta b">oligonucleotid antisens</text><text x="200" y="152" text-anchor="middle" class="tm" style="font-size:11px">se împerechează complementar</text><text x="200" y="168" text-anchor="middle" class="tm" style="font-size:11px">→ degradare (RNază H) sau blocarea traducerii</text>`;
  s += `<rect x="440" y="94" width="150" height="20" rx="10" class="fA"/><text x="515" y="134" text-anchor="middle" class="tw2 b">ARN interferent (siRNA)</text><text x="515" y="152" text-anchor="middle" class="tm" style="font-size:11px">21–22 nt bicatenar, încărcat în RISC</text><text x="515" y="168" text-anchor="middle" class="tm" style="font-size:11px">→ taie ARNm-ul complementar</text>`;
  s += `<path d="M200 80 V94 M515 80 V92" class="sm" stroke-width="1.2" stroke-dasharray="3 3"/>`;
  s += `<rect x="40" y="196" width="680" height="60" rx="10" class="fas"/><text x="380" y="220" text-anchor="middle" class="ti">Ambele țintesc secvența, deci pot fi „croite” pentru orice genă: util mai ales în bolile dominante</text><text x="380" y="240" text-anchor="middle" class="ti">cu câștig de funcție (Huntington), unde trebuie redusă proteina toxică, nu înlocuită.</text>`;
  return s;
})()}
</svg>
<figcaption><b>Terapia transcripțională.</b> RNaza H și complexul RISC sunt detalii de mecanism din literatură; cursul numește doar metodele. Schemă proprie.</figcaption>
</figure>
<h3>Terapia genică în bolile dobândite</h3>
<p><b>Cancer:</b> distrugerea celulelor tumorale (modularea imunității sau gene „toxice” care transformă un precursor netoxic în toxic), protejarea celulelor normale de chimio-/radioterapie (gena <i>MDR1</i>), restabilirea genelor supresoare (<i>RB1</i>, <i>TP53</i>, <i>BRCA</i>). <b>Cardiovascular:</b> stimularea angiogenezei în ischemie cu gene de factori de creștere (VEGF, FGF-1/2/4, PlGF, angiopoietina-1, HGF); VEGF stimulează și eNOS, dar și angiogeneza tumorală.</p>
<p style="font-size:14px;color:var(--muted)">Cursul scrie „Ang-1 (angiotensina 1)”; Ang-1 din acest context este <b>angiopoietina-1</b>, un factor angiogenic.</p>
<div class="intrebari"><h4>Verifică-te</h4>
<details class="q"><summary>De ce un vector care se integrează e preferat pentru celulele stem hematopoietice, iar AAV pentru retină?</summary><div>Celulele stem se divid mult, iar integrarea asigură transmiterea genei la toate celulele-fiice. Fotoreceptorii nu se divid, deci un episom AAV rămâne stabil, fără riscul mutagenezei inserționale.</div></details>
<details class="q"><summary>De ce s-ar folosi ARN interferent, nu o genă normală suplimentară, în boala Huntington?</summary><div>Boala este produsă de un câștig de funcție (proteină toxică); adăugarea unei copii normale nu ajută, trebuie redusă expresia alelei mutante.</div></details>
</div>`
}
]
});
})();
