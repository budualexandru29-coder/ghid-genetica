#!/usr/bin/env python3
"""plansa.py out.png slug1 slug2 ... -> planșă de contact cu imaginile Commons (pentru verificare vizuală)"""
import sys, json, os
from PIL import Image, ImageDraw
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
db = json.loads(open(R + "/date/imagini.js").read().split("=", 1)[1].rstrip().rstrip(";"))
sl = sys.argv[2:]; W = 420; n = 3; rows = (len(sl) + n - 1) // n
sheet = Image.new("RGB", (W * n, (W + 24) * rows), "white"); d = ImageDraw.Draw(sheet)
for i, s in enumerate(sl):
    im = Image.open(R + "/" + db[s]["fisier"]).convert("RGB"); im.thumbnail((W - 8, W - 8))
    x, y = (i % n) * W, (i // n) * (W + 24); sheet.paste(im, (x + 4, y + 4)); d.text((x + 6, y + W + 4), s, fill="red")
sheet.save(sys.argv[1])
