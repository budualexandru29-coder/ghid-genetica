#!/bin/bash
# cit.sh A B  -> textul OCR al paginilor de carte A..B, fara linii goale, oprit la bibliografie
for p in $(seq $1 $2); do f=$(printf "src/ocr/p-%03d.txt" $((p+6))); echo "=== p.$p"; grep -v '^\s*$' "$f"; done | awk '/Bibliografie selectiv/{print "[bibliografie omisa]"; exit} {print}'
