#!/usr/bin/env python3
"""Imagini de pe Wikimedia Commons, cu atribuire.
  python3 tools/wm.py cauta "interogare" [n]        -> listă de fișiere (titlu | licență | dimensiuni)
  python3 tools/wm.py adauga slug "File:Titlu.ext"  -> descarcă în fig/wm/slug.ext și notează autorul/licența în date/imagini.js
"""
import json, os, re, sys, html, urllib.request, urllib.parse, time
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = {"User-Agent": "study-guide-script/1.0 (educational, non-commercial)"}
API = "https://commons.wikimedia.org/w/api.php?format=json&"
OK = re.compile(r"^(CC0|CC BY|CC BY-SA|Public domain|PD|No restrictions|Attribution|GFDL)", re.I)
def get(u, raw=False):
    for i in range(4):
        try:
            d = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60).read()
            return d if raw else json.loads(d)
        except Exception as e:
            err = e; time.sleep(45 if "429" in str(e) else 3 + 4 * i)
    raise err
def info(titles):
    q = API + urllib.parse.urlencode({"action": "query", "titles": "|".join(titles), "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 1100})
    return get(q).get("query", {}).get("pages", {})
def clean(s): return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", s or ""))).strip()
db_path = R + "/date/imagini.js"
def load():
    if not os.path.exists(db_path): return {}
    return json.loads(open(db_path).read().split("=", 1)[1].rstrip().rstrip(";"))
def save(db): open(db_path, "w").write("window.IMAGINI = " + json.dumps(db, ensure_ascii=False, indent=1) + ";\n")
cmd = sys.argv[1]
if cmd == "cauta":
    n = sys.argv[3] if len(sys.argv) > 3 else "8"
    q = API + urllib.parse.urlencode({"action": "query", "generator": "search", "gsrsearch": sys.argv[2] + " filetype:bitmap|drawing", "gsrnamespace": 6, "gsrlimit": n, "prop": "imageinfo", "iiprop": "extmetadata|size"})
    time.sleep(2.5)
    for p in sorted(get(q).get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 0)):
        ii = p["imageinfo"][0]; m = ii["extmetadata"]
        print(f'{p["title"]} | {m.get("LicenseShortName", {}).get("value", "?")} | {ii["width"]}x{ii["height"]}')
elif cmd == "adauga":
    db = load(); args = sys.argv[2:]
    pairs = [(a, b) for a, b in zip(args[0::2], args[1::2]) if a not in db]
    pages = {}
    for i in range(0, len(pairs), 40):
        pg = info([t for _, t in pairs[i:i + 40]])
        for v in pg.values(): pages[v["title"].replace("_", " ")] = v
        time.sleep(3)
    for slug, title in pairs:
        pg = pages.get(title.replace("_", " "))
        if not pg or "imageinfo" not in pg: print("LIPSĂ", slug, title); continue
        ii = pg["imageinfo"][0]; m = ii["extmetadata"]; lic = m.get("LicenseShortName", {}).get("value", "?")
        if not OK.match(lic): print("LICENȚĂ NEACCEPTATĂ", slug, lic); continue
        url = ii.get("thumburl") or ii["url"]
        ext = ".png" if title.lower().endswith(".svg") else os.path.splitext(urllib.parse.urlparse(url).path)[1].lower() or ".jpg"
        try: data = get(url, raw=True)
        except Exception as e: print("EȘEC", slug, e); continue
        open(f"{R}/fig/wm/{slug}{ext}", "wb").write(data)
        db[slug] = dict(fisier=f"fig/wm/{slug}{ext}", titlu=title, autor=clean(m.get("Artist", {}).get("value"))[:120] or "autor nespecificat", licenta=lic, sursa=ii["descriptionurl"], w=ii.get("thumbwidth", ii["width"]), h=ii.get("thumbheight", ii["height"]))
        save(db); print("ok", slug, lic, "|", db[slug]["autor"][:50], flush=True); time.sleep(5)
