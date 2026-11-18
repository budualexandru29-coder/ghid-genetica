#!/bin/bash
# lp_ocr.sh — taie fiecare foaie scanata (doua pagini A5) in jumatati si face OCR in romana
R=$(cd "$(dirname "$0")/.." && pwd); T=$R/src/rpm/root
export LD_LIBRARY_PATH=$T/usr/lib64 TESSDATA_PREFIX=$(dirname $(find $T -name ron.traineddata | head -1))
cd $R/src/lp
python3 -I - <<'PY'
from PIL import Image; import glob, os
os.makedirs("half", exist_ok=True)
for f in sorted(glob.glob("pages/p-*.png")):
    n = os.path.basename(f)[2:5]; im = Image.open(f); w, h = im.size
    for s, box in (("a", (0, 0, w//2, h)), ("b", (w//2, 0, w, h))):
        o = f"half/p{n}{s}.png"
        if not os.path.exists(o): im.crop(box).save(o)
PY
ls half/*.png | xargs -P 8 -I{} sh -c 'b=$(basename {} .png); [ -s ocr/$b.txt ] || '"$T"'/usr/bin/tesseract {} ocr/$b -l ron --psm 6 >/dev/null 2>&1'
