#!/bin/bash
# lp_cit.sh A B -> OCR-ul paginilor A..B din cartea de LP (fiecare foaie e scanată de două ori; folosim PDF-urile impare:
# pagina pară P -> PDF P+3 stânga, pagina impară P -> PDF P+2 dreapta)
R=$(cd "$(dirname "$0")/.." && pwd)
for p in $(seq $1 $2); do if [ $((p%2)) = 0 ]; then f=$(printf "p%03da" $((p+3))); else f=$(printf "p%03db" $((p+2))); fi
echo "=== LP p.$p"; grep -v '^\s*$' $R/src/lp/ocr/$f.txt; done
