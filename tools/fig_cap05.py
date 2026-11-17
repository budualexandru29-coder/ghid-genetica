#!/usr/bin/env python3
"""Capitolul 5: ideograma tuturor cromozomilor (UCSC hg38 cytoBandIdeo) cu regiunile din Figura 16 a cursului.
Rulare: python3 tools/fig_cap05.py"""
import json, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cb = json.load(open(f"{R}/date/cytoband.json"))
COL = {"gneg": "#ffffff", "gpos25": "#c9ced6", "gpos50": "#98a1ad", "gpos75": "#5f6b7a", "gpos100": "#2c3440", "acen": "#c0392b", "gvar": "#b8c4d6", "stalk": "#dfe3e8"}
# (crom, start_banda, end_banda, eticheta, tip) — benzile din curs, mapate pe hg38
REG = [("chr2", "q37.1", "q37.3", "del 2q37 · sdr. Albright-like", "del"),
       ("chr5", "p15.33", "p15.2", "del 5p · cri du chat", "del"),
       ("chr7", "q11.23", "q11.23", "del 7q11.23 · Williams", "del"),
       ("chr11", "p13", "p13", "del 11p13 · WAGR", "del"),
       ("chr15", "q11.2", "q13.3", "del 15q11–q13 · Prader–Willi / Angelman", "del"),
       ("chr17", "p12", "p12", "dup 17p12 · Charcot–Marie–Tooth 1A", "dup"),
       ("chr21", "q22.11", "q22.3", "del 21q · monosomie parțială 21", "del"),
       ("chrX", "p21.2", "p21.1", "del Xp21 · Duchenne / Becker", "del")]
names = [f"chr{i}" for i in range(1, 23)] + ["chrX", "chrY"]
L = {c: cb[c][-1][1] for c in names}
mx = max(L.values()); H = 300; W = 34
cols = 12; gx = 78; top = 40
out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" font-family="system-ui,-apple-system,Segoe UI,sans-serif" role="img"><title>Regiuni de deleție și duplicație pe cariotipul uman</title><rect width="1000" height="800" fill="#fff"/>']
pos = {}
for k, c in enumerate(names):
    row, col = divmod(k, cols)
    x = 30 + col * gx; y0 = top + row * (H + 110)
    s = H / mx
    for a, b, n, g in cb[c]:
        out.append(f'<rect x="{x}" y="{y0 + a * s:.1f}" width="14" height="{max(.6, (b - a) * s):.1f}" fill="{COL.get(g, "#fff")}"/>')
    out.append(f'<rect x="{x}" y="{y0}" width="14" height="{L[c] * s:.1f}" rx="7" fill="none" stroke="#1f2a37" stroke-width="1.1"/>')
    out.append(f'<text x="{x + 7}" y="{y0 + L[c] * s + 18:.0f}" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2a37">{c[3:]}</text>')
    pos[c] = (x, y0, s)
leg = []
for i, (c, b1, b2, lab, tip) in enumerate(REG):
    bands = {n: (a, b) for a, b, n, g in cb[c]}
    a = bands[b1][0]; b = bands[b2][1]
    if a > b: a, b = bands[b2][0], bands[b1][1]
    x, y0, s = pos[c]; col = "#d1495b" if tip == "del" else "#2a9d8f"
    out.append(f'<rect x="{x + 17}" y="{y0 + a * s:.1f}" width="6" height="{max(4, (b - a) * s):.1f}" rx="2" fill="{col}"/>')
    out.append(f'<circle cx="{x + 31}" cy="{y0 + (a + b) / 2 * s:.1f}" r="8" fill="{col}"/><text x="{x + 31}" y="{y0 + (a + b) / 2 * s + 4:.1f}" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">{i + 1}</text>')
    leg.append((i + 1, lab, col))
ly = 680
for j, (n, lab, col) in enumerate(leg):
    xx = 140 + (j % 2) * 400; yy = ly + 60 + (j // 2) * 26
    out.append(f'<circle cx="{xx}" cy="{yy - 4}" r="8" fill="{col}"/><text x="{xx}" y="{yy}" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">{n}</text><text x="{xx + 14}" y="{yy}" font-size="13.5" fill="#1f2a37">{lab}</text>')
out.append(f'<text x="126" y="{ly + 30}" font-size="13" fill="#5b6777"><tspan fill="#d1495b" font-weight="700">■ deleție</tspan>   <tspan fill="#2a9d8f" font-weight="700">■ duplicație</tspan>   · benzi G (UCSC hg38 cytoBandIdeo), centromer roșu</text>')
out.append('</svg>')
open(f"{R}/fig/c05_cariotip_del.svg", "w").write("\n".join(out))
print("ok")
