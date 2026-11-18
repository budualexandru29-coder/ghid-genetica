#!/usr/bin/env python3
"""Construieste date/inventar_lp.js: inventarul cartii de lucrari practice
(Pascanu, Csep, Muresan — „Aplicatii practice in genetica umana", UMF Targu Mures).
Titlurile vin din cuprins (p. 3–6, verificat pe scanare); figurile/tabelele din legendele OCR (src/lp/carte.txt).
Paginile sunt cele tiparite in carte; tools/lp_cit.sh A B afiseaza OCR-ul lor."""
import re, json, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAP = [  # (id, nr afisat, titlu, pagina start, pagina sfarsit, capitole Emery ed. 16, capitole din ghidul de curs, [subtitluri (titlu, pagina)])
 ("lp01","I","Ereditatea la nivel celular — citogenetica umană",7,20,[3],["c01","c05"],[
   ("Cromozomii umani",7),("Ciclul celular",11),("Evenimentele din timpul mitozei",13),("Erorile de distribuție a materialului genetic în mitoză",15),
   ("Gametogeneza — evenimentele din timpul meiozei",16),("Particularitățile gametogenezei masculine și feminine",17),
   ("Erorile de recombinare și distribuție a materialului genetic în meioză",18),("Fecundarea",18),("Anomaliile de fecundare",19)]),
 ("lp02","II","Tehnici de evidențiere a cromozomilor umani",21,29,[3,5,17],["c01"],[
   ("Aspecte generale",21),("Metode directe: cromozomii din măduva osoasă hematogenă",23),("Metode indirecte: cromozomii din culturi de limfocite",24),("Tehnici de citogenetică moleculară",26)]),
 ("lp03","III","Cariotipul uman normal",30,40,[3],["c01"],[
   ("Generalități",30),("Criterii morfologice de identificare cromozomială",31),("Tehnici de bandare",32),("Descrierea cariotipului uman",35),
   ("Heteromorfismul cromozomial",38),("Indicațiile și limitele studiului cromozomial în practica medicală",39)]),
 ("lp04","IV","Mutații genetice: anomaliile numerice și trisomiile autozomale",41,50,[17],["c05"],[
   ("Generalități",41),("Trisomiile autozomale",43),("Sindromul Down",43),("Sindromul Patau",47),("Sindromul Edwards",49)]),
 ("lp05","V","Sindroamele heterozomale cromozomiale",51,57,[17],["c05"],[
   ("Sindromul Turner",51),("Trisomia X și alte polisomii X",54),("Sindromul Klinefelter",54),("Sindromul XYY",56)]),
 ("lp06","VI","Anomaliile cromozomiale structurale",58,78,[3,14,17],["c05"],[
   ("Generalități",58),("Delețiile",60),("Cromozomii inelari",62),("Duplicațiile",62),("Inversiile",63),("Izocromozomii",64),("Cromozomii marker",65),
   ("Translocațiile",65),("Cromozomii dicentrici",70),("Anomaliile cromatidice",70),("Sindromul „Cri du chat”",71),("Sindromul Wolf–Hirschhorn",72),
   ("Sindroame cu microdeleții",73),("Modificări citogenetice în cancer: leucemii, limfoame, tumori solide",74)]),
 ("lp07","VII","Nomenclatura cromozomilor umani",79,85,[3],[],[("Nomenclatura cromozomilor umani",79)]),
 ("lp08","VIII","Cromatina sexuală",86,96,[3,6],["c01","c04"],[
   ("Generalități",86),("Cromatina X pe frotiu de mucoasă bucală",86),("Originea cromatinei X",87),("Relația dintre numărul cromozomilor X și numărul corpusculilor Barr",89),
   ("Cromatina X pe frotiu de sânge periferic în polimorfonuclearele neutrofile",90),("Cromatina Y",92),("Indicațiile și limitele testului cromatinei sexuale",93),
   ("Tehnica de evidențiere a cromatinei X pe frotiu de mucoasă bucală",94),("Tehnica de evidențiere a cromatinei X pe frotiu de sânge periferic",95),("Evidențierea cromatinei Y",96)]),
 ("lp09","IX","Constituirea arborelui genealogic",97,114,[6,8],["c07","c08","c09","c10"],[
   ("Generalități",97),("Ancheta familială",97),("Reprezentarea grafică a datelor",98),("Mecanisme de transmitere în ereditatea monogenică",100),
   ("Transmiterea autozomal dominantă",101),("Transmiterea autozomal recesivă",104),("Ereditatea legată de X",106),("Ereditatea legată de Y — transmiterea holandrică",112)]),
 ("lp10","X","Caractere ereditare fiziologice determinate monogenic",115,129,[6,13],["c02"],[
   ("Generalități",115),("Sistemul de grup sanguin AB0",115),("Sistemul de grup sanguin Rh",118),("Sistemul de grup sanguin Xg",121),("Grupele din secreții",122),
   ("Grupele tisulare (HLA)",122),("Grupele serice",125),("Grupele enzimatice",126),("Sensibilitatea gustativă",126)]),
 ("lp11","XI","Principiile și metodele analizei moleculare a materialului genetic",130,148,[4,5],["c01","c03","c05"],[
   ("Generalități",130),("Metoda PCR",131),("Metoda Southern blotting",133),("Tehnica ASO",135),("Tehnologia microarray. Chip-ul ADN",135),
   ("Analiza mutațiilor în gene necunoscute: SSCP, clivarea chimică",138),("Metoda RFLP",139),("Diagnostic ADN indirect — analiza de înlănțuire (linkage)",140),
   ("Stabilirea secvenței de nucleotide: metoda enzimatică",141),("Stabilirea secvenței de nucleotide: metoda chimică",142),("Cartografierea",143),("Identificarea genelor",144),("Studiul moleculelor de ARN",144)]),
 ("lp12","XII","Screeningul și diagnosticul prenatal",149,158,[11,20],["c10b"],[
   ("Screeningul prenatal: triplu test și alfa-fetoproteina",149),("Ecografia fetală de rutină",150),("Diagnosticul prenatal",150),("Ecografia fetală detaliată (nivel II)",151),
   ("Amniocenteza",152),("Biopsia vilozităților coriale",153),("Cordocenteza",154),("Fetoscopia",154),("Diagnosticul genetic preimplantatoriu",155),("Analiza celulelor fetale din sângele matern",155)]),
 ("lp13","XIII","Posibilități actuale de tratament etiopatogenic în bolile genetice",159,167,[15,18],["c13","c08"],[
   ("Generalități",159),("Noi strategii de intervenție terapeutică. Tratamentul bolilor lizozomale",160),("Boala Gaucher",161),("Boala Fabry",162),("Mucopolizaharidoza tip I",164),("Boala Pompe",165)]),
]
# figuri pe care OCR-ul nu le-a prins (legenda verificată pe scanare)
MANUAL = [(28,"figura","5","Hibridizare in situ fluorescentă (FISH)")]
pg, caps = 0, []
for ln in open(R + "/src/lp/carte.txt"):
    m = re.match(r"=== LP p\.(\d+)", ln)
    if m: pg = int(m.group(1)); continue
    m = re.match(r"\W*(Fig\w*|Tabel\w*)\s*(?:nr\.?)?\s*([0-9]+)\s*[.,]?\s*(.*)", ln)
    if m: caps.append((pg, "figura" if m.group(1).lower().startswith("fig") else "tabel", m.group(2), m.group(3).strip(" |;")))
caps += MANUAL
out = []
for cid, nr, t, a, b, em, curs, subs in CAP:
    rows = [dict(tip="titlu", titlu=s, pag=p) for s, p in subs]
    rows += [dict(tip=k, titlu=f"{'Figura' if k == 'figura' else 'Tabelul'} {n}. {ti}", pag=p) for p, k, n, ti in caps if a <= p <= b]
    rows.sort(key=lambda r: (r["pag"], r["tip"] != "titlu"))
    for i, r in enumerate(rows): r["id"] = f"{cid}-r{i + 1:02d}"
    out.append(dict(id=cid, nr=nr, titlu=t, pag=[a, b], emery=em, curs=curs, randuri=rows))
open(R + "/date/inventar_lp.js", "w").write("window.INVENTAR_LP = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
print(sum(len(c["randuri"]) for c in out), "randuri;", len(caps), "legende")
for c in out: print(c["id"], len(c["randuri"]), " | ".join(r["titlu"][:28] for r in c["randuri"] if r["tip"] != "titlu"))
