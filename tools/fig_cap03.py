#!/usr/bin/env python3
"""Harta ADN mitocondrial din adnotarea GENCODE (UCSC hg38, pista knownGene, chrM). Rulare: python3 tools/fig_cap03.py"""
import json, math, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
g = {}
for x in json.load(open(R + "/date/chrM_genes.json"))["knownGene"]:
    g[x["geneName"]] = (x["chromStart"], x["chromEnd"], x["strand"], x["transcriptType"])
L = 16569
COL = {"protein_coding": "#3a6ea5", "Mt_tRNA": "#e9b949", "Mt_rRNA": "#2a9d8f"}
INK, MUTED = "#1f2a37", "#5b6777"
cx, cy = 300, 290
def pt(pos, r):
    a = 2 * math.pi * pos / L - math.pi / 2
    return cx + r * math.cos(a), cy + r * math.sin(a)
def arc(s, e, r1, r2, col):
    (x1, y1), (x2, y2), (x3, y3), (x4, y4) = pt(s, r2), pt(e, r2), pt(e, r1), pt(s, r1)
    big = 1 if (e - s) / L > .5 else 0
    return f'<path d="M{x1:.1f} {y1:.1f}A{r2} {r2} 0 {big} 1 {x2:.1f} {y2:.1f}L{x3:.1f} {y3:.1f}A{r1} {r1} 0 {big} 0 {x4:.1f} {y4:.1f}Z" fill="{col}" stroke="#fff" stroke-width="0.8"/>'
s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 580" font-family="system-ui,sans-serif" role="img"><title>Harta ADN mitocondrial uman</title><rect width="760" height="580" fill="#fff"/>']
s.append(f'<circle cx="{cx}" cy="{cy}" r="200" fill="none" stroke="#c9ced6" stroke-width="1"/><circle cx="{cx}" cy="{cy}" r="170" fill="none" stroke="#c9ced6" stroke-width="1"/>')
n = {"+": 0, "-": 0}; t = {}
for name, (a, b, st, ty) in sorted(g.items(), key=lambda kv: kv[1][0]):
    n[st] += 1; t[ty] = t.get(ty, 0) + 1
    r1, r2 = (186, 214) if st == "+" else (156, 184)
    s.append(arc(a, b, r1, r2, COL[ty]))
    if ty != "Mt_tRNA":
        x, y = pt((a + b) / 2, 240 if st == "+" else 128)
        s.append(f'<text x="{x:.0f}" y="{y + 4:.0f}" text-anchor="middle" font-size="11.5" fill="{INK}">{name.replace("MT-", "")}</text>')
# bucla D (regiunea de control): intre MT-TP (sfarsit 16023) si MT-TF (inceput 576)
s.append(arc(16024, L, 186, 214, "#c9ced6")); s.append(arc(0, 576, 186, 214, "#c9ced6"))
x, y = pt(0, 240); s.append(f'<text x="{x:.0f}" y="{y - 2:.0f}" text-anchor="middle" font-size="11.5" font-weight="700" fill="{INK}">bucla D (control)</text>')
s.append(f'<text x="{cx}" y="{cy - 14}" text-anchor="middle" font-size="19" font-weight="700" fill="{INK}">ADNmt</text><text x="{cx}" y="{cy + 8}" text-anchor="middle" font-size="13" fill="{MUTED}">{L:,} pb · circular'.replace(",", ".") + '</text>')
s.append(f'<text x="{cx}" y="{cy + 28}" text-anchor="middle" font-size="13" fill="{MUTED}">{len(g)} gene, fără introni</text>')
lx, ly = 535, 150
s.append(f'<text x="{lx}" y="{ly - 24}" font-size="14" font-weight="700" fill="{INK}">Numărate din adnotare</text>')
for k, lab in (("protein_coding", "gene pentru proteine"), ("Mt_tRNA", "gene ARNt"), ("Mt_rRNA", "gene ARNr (12S, 16S)")):
    s.append(f'<rect x="{lx}" y="{ly - 11}" width="16" height="12" fill="{COL[k]}"/><text x="{lx + 24}" y="{ly}" font-size="13" fill="{INK}"><tspan font-weight="700">{t[k]}</tspan> {lab}</text>'); ly += 24
ly += 14
for lab in (f"exterior: {n["+"]} gene (catena H)", f"interior: {n["-"]} gene (catena L)"):
    s.append(f'<text x="{lx}" y="{ly}" font-size="12.5" fill="{INK}">{lab}</text>'); ly += 20
for i, lab in enumerate(["Cele 13 proteine sunt subunități", "ale lanțului respirator", "(ND = complex I, CYB = III,", "CO = IV, ATP = ATP-sintaza)."]):
    s.append(f'<text x="{lx}" y="{ly + 16 + i * 17}" font-size="12" fill="{MUTED}">{lab}</text>')
s.append(f'<text x="380" y="570" text-anchor="middle" font-size="10.5" fill="{MUTED}">Sursă: UCSC Genome Browser, GRCh38 chrM, pista GENCODE (knownGene). Pozițiile și catenele genelor sunt cele din adnotare.</text></svg>')
open(R + "/fig/c03_adnmt.svg", "w").write("\n".join(s))
print(len(g), n, t)
