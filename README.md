# Ghid de genetică

Interfață de pregătire teoretică pentru examenul de genetică. Deschide `index.html` în browser (nu are nevoie de server).

- `capitole/capNN.js` — conținutul fiecărui capitol; fiecare secțiune declară în `acopera` rândurile de inventar pe care le tratează.
- `date/inventar.js` — inventarul cărții de curs (titluri, figuri, tabele, pagini), generat de `tools/inventar.py`.
- `tools/fig_capNN.py` — figurile construite din date primare (RCSB PDB, UCSC Genome Browser); datele brute sunt în `date/`.
- `src/ocr/p-NNN.txt` — OCR-ul cărții de curs (pagina PDF = pagina cărții + 6); `src/emery.txt` — textul din Emery.
- OCR: tesseract despachetat local în `src/rpm/root` (fără instalare în sistem).

Notă: directorul `src/` (OCR-ul cărții de curs, textul din Emery, paginile scanate) nu este inclus în repository, fiind material protejat de drepturi de autor. Ghidul funcționează fără el; e necesar doar pentru regenerarea inventarului.
