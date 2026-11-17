#!/usr/bin/env python3
"""Descarcă din UCSC (hg38) poziția, banda și structura exonică (transcript canonic MANE/RefSeq Select) pentru genele din ghid.
Rezultat: date/gene.json și date/cytoband.json. Rulare: python3 tools/gene.py GENA1 GENA2 ... (adaugă la cache)"""
import json, os, sys, urllib.request, urllib.parse, time
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API = "https://api.genome.ucsc.edu"
def get(u):
    for i in range(3):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "study-guide-script"}), timeout=60))
        except Exception as e:
            err = e; time.sleep(2)
    raise err
cb = R + "/date/cytoband.json"
if not os.path.exists(cb):
    d = get(API + "/getData/track?genome=hg38;track=cytoBandIdeo")["cytoBandIdeo"]
    json.dump({c: [[b["chromStart"], b["chromEnd"], b["name"], b["gieStain"]] for b in v] for c, v in d.items() if "_" not in c}, open(cb, "w"))
bands = json.load(open(cb))
gp = R + "/date/gene.json"
db = json.load(open(gp)) if os.path.exists(gp) else {}
for sym in sys.argv[1:]:
    if sym in db: continue
    s = get(API + "/search?genome=hg38&search=" + urllib.parse.quote(sym))
    pos = None
    for want in ("mane", "hgnc", "ncbiRefSeqCurated", "knownGene"):
        for r in s.get("positionMatches", []):
            if r.get("trackName") == want:
                for m in r["matches"]:
                    if m.get("posName", "").split(" ")[0] == sym: pos = m["position"]; break
            if pos: break
        if pos: break
    if not pos: print("NEGĂSIT", sym); continue
    chrom, rng = pos.split(":"); a, b = [int(x) for x in rng.split("-")]
    rec = None
    for tr in ("ncbiRefSeqSelect", "ncbiRefSeqCurated"):
        t = get(f"{API}/getData/track?genome=hg38;track={tr};chrom={chrom};start={a-1};end={b}").get(tr, [])
        c = [x for x in t if x["name2"] == sym]
        if c: rec = max(c, key=lambda x: x["exonCount"]) if tr != "ncbiRefSeqSelect" else c[0]; break
    if not rec: print("FĂRĂ TRANSCRIPT", sym); continue
    mid = (rec["txStart"] + rec["txEnd"]) // 2
    band = next(x[2] for x in bands[chrom] if x[0] <= mid < x[1])
    db[sym] = dict(chrom=chrom, start=rec["txStart"], end=rec["txEnd"], strand=rec["strand"], exoni=rec["exonCount"], transcript=rec["name"],
                   cds=[rec["cdsStart"], rec["cdsEnd"]], ex=[[int(x), int(y)] for x, y in zip(rec["exonStarts"].strip(",").split(","), rec["exonEnds"].strip(",").split(","))], banda=chrom[3:] + band)
    print(f"{sym:9s} {db[sym]['banda']:10s} {chrom}:{rec['txStart']}-{rec['txEnd']} {rec['strand']} {(rec['txEnd']-rec['txStart'])/1000:.1f} kb, {rec['exonCount']} exoni, {rec['name']}")
json.dump(db, open(gp, "w"))
