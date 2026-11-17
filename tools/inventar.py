#!/usr/bin/env python3
"""Construieste date/inventar.js: fiecare titlu, subtitlu, figura si tabel din cartea de curs, cu pagina.
Titlurile vin din cuprins (verificat manual); figurile/tabelele din legendele OCR (pagina PDF - 6 = pagina cartii)."""
import re, glob, json, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAP = [  # (id, nr afisat, titlu, pagina start, pagina sfarsit, capitole Emery, [subtitluri (titlu, pagina)])
 ("c01","1","Structura ADN",5,18,[2,3,9],[("Introducere: ADN-ul ca macropolimer",5),("Structura primară a ADN",5),("Structura secundară a ADN",7),("Polimorfismul structurii ADN",8),("Proprietăți fizice și chimice ale ADN: absorbția UV",9),("Denaturarea – renaturarea – hibridizarea",9),("Replicarea ADN",10),("Cromatina și organizarea cromatinei: histone și proteine nehistonice",12),("Eucromatina și heterocromatina",13),("Cromatina sexuală, compensarea de doză, ipoteza Lyon",14),("Structura terțiară a ADN / structura supramoleculară a cromatinei",15)]),
 ("c02","2","Gena",19,46,[2],[("Concepția clasică despre structura genei",20),("Concepția actuală despre structura genei",21),("Expresia informației genice",25),("Transcripția",26),("Translația",31),("Reglarea expresiei informației ereditare",38)]),
 ("c03","3","Genomul uman",47,66,[2,6],[("Genomul nuclear",48),("Genomul mitocondrial",58)]),
 ("c04","4","Epigenetică",67,83,[6,9],[("Inactivarea cromozomului X",69),("Amprentarea",70),("Metilarea ADN",72)]),
 ("c05","5","Variabilitatea genetică",84,124,[2,3,17],[("Recombinarea genetică",84),("Mutațiile genetice",86),("Mutațiile dinamice",108),("Migrațiile populaționale",112),("Mecanisme de reparare ale ADN-ului nuclear",113)]),
 ("c06","6","Farmacogenetică. Farmacogenomică",125,132,[15],[]),
 ("c07","7","Boli monogenice cu transmitere autozomal dominantă",133,152,[6,19],[("Osteogeneza imperfectă (OI)",133),("Neurofibromatoza tip 1",136),("Sindromul Marfan",139),("Acondroplazia",143),("Boala polichistică renală autozomal dominantă (ADPKD)",145),("Hipercolesterolemia familială",147)]),
 ("c08","8","Boli monogenice cu transmitere autozomal recesivă",153,170,[6,18,19],[("Fibroza chistică",153),("Boala polichistică renală autozomal recesivă (ARPKD)",155),("Hemocromatoza ereditară",157),("Fenilcetonuria",158),("Albinismul",162),("Boala Wilson",163),("Galactozemia",165),("Mucopolizaharidoza tip 1 (MPZ 1)",168)]),
 ("c09","9","Boli monogenice cu transmitere dominantă legată de X",171,178,[6,19],[("Rahitismul familial hipofosfatemic rezistent la vitamina D",171),("Incontinentia pigmenti",172),("Sindromul Rett",174)]),
 ("c10","10","Boli monogenice cu transmitere recesivă legată de X",179,198,[6,19],[("Distrofia musculară progresivă Duchenne (DMD)",179),("Distrofia musculară Becker (DMB)",184),("Hemofilia A",185),("Daltonismul",188),("Displazia ectodermală anhidrotică",189)]),
 ("c10b","10 bis","Profilaxia bolilor genetice",199,208,[11,20],[]),
 ("c11","11","Bolile multifactoriale",209,230,[10,16],[("Ereditatea multifactorială a caracterelor cantitative",211),("Ereditatea multifactorială cu prag",213),("Ereditatea oligogenică",214),("Riscul de recurență în bolile multifactoriale",214),("Boli multifactoriale",215)]),
 ("c12","12","Sfatul genetic",231,236,[21,8],[]),
 ("c13","13","Tratamentul bolilor genetice",237,250,[15],[]),
]
caps=[]
for f in sorted(glob.glob(R+"/src/ocr/p-*.txt")):
    pg=int(re.search(r"p-(\d+)",f).group(1))-6
    for ln in open(f):
        m=re.match(r"\s*(Fig\w*|Tabel\w*)\s*nr\.?\s*([0-9IVXL|]+)\.?\s*(.*)",ln)
        if m: caps.append((pg,"figura" if m.group(1).lower().startswith("fig") else "tabel",m.group(2).replace("|","I"),m.group(3).strip()))
out=[]
for cid,nr,t,a,b,em,subs in CAP:
    rows=[dict(tip="titlu",titlu=s,pag=p) for s,p in subs] or [dict(tip="titlu",titlu=t,pag=a)]
    rows+=[dict(tip=k,titlu=f"{'Figura' if k=='figura' else 'Tabelul'} {n}. {ti}",pag=p) for p,k,n,ti in caps if a<=p<=b]
    rows.sort(key=lambda r:r["pag"])
    for i,r in enumerate(rows): r["id"]=f"{cid}-r{i+1:02d}"
    out.append(dict(id=cid,nr=nr,titlu=t,pag=[a,b],emery=em,randuri=rows))
open(R+"/date/inventar.js","w").write("window.INVENTAR = "+json.dumps(out,ensure_ascii=False,indent=1)+";\n")
print(sum(len(c["randuri"]) for c in out),"randuri;",len(caps),"legende")
