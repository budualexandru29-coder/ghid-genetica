#!/usr/bin/env python3
"""Fișe de genă: ideogramă (UCSC cytoBandIdeo, hg38) + harta exonilor (transcript RefSeq Select).
Rulare: python3 tools/locus.py   -> scrie fig/loc_*.svg pentru toate figurile din FIG."""
import json, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bands = json.load(open(R + "/date/cytoband.json")); G = json.load(open(R + "/date/gene.json"))
STAIN = {"gneg": "#f4f5f7", "gpos25": "#c9ced6", "gpos50": "#8f98a5", "gpos75": "#5b6777", "gpos100": "#1f2a37", "acen": "#c0392b", "gvar": "#7fb3d5", "stalk": "#9bb7c4"}
INK, MUTED, ACC = "#1f2a37", "#5b6777", "#7c3aed"
MAXLEN = 248956422  # chr1
# nume fisier -> (titlu, [gene], [gene cu harta exonilor], nota optionala)
FIG = {
 "c04_15q": ("Regiunea 15q11–q13: Prader–Willi și Angelman", ["NDN", "SNRPN", "UBE3A"], [], "", ("chr15", 23500000, 25600000,
    {"col": {"NDN": "#3a6ea5", "SNRPN": "#3a6ea5", "UBE3A": "#e76f51"}, "leg": [("#3a6ea5", "exprimate de pe cromozomul patern (NDN, SNRPN): pierderea lor = Prader–Willi"), ("#e76f51", "exprimată de pe cromozomul matern (UBE3A): pierderea ei = Angelman")]})),
 "c04_11p": ("Regiunea 11p15.5: Beckwith–Wiedemann", ["H19", "IGF2", "KCNQ1OT1", "CDKN1C"], [], "", ("chr11", 1900000, 2950000,
    {"extra": ["KCNQ1"], "col": {"H19": "#e76f51", "CDKN1C": "#e76f51", "KCNQ1": "#9aa5b1", "IGF2": "#3a6ea5", "KCNQ1OT1": "#3a6ea5"}, "leg": [("#3a6ea5", "exprimate de pe cromozomul patern (IGF2, KCNQ1OT1)"), ("#e76f51", "exprimate de pe cromozomul matern (H19, CDKN1C)"), ("#9aa5b1", "KCNQ1 (KCNQ1OT1 se află în interiorul ei, pe catena opusă)")]})),
}
def fmt(n): return f"{n:,}".replace(",", ".")
def draw(name, title, genes, exmaps, note, zoom=None):
    chroms = []
    for g in genes:
        if G[g]["chrom"] not in chroms: chroms.append(G[g]["chrom"])
    W = 760; y = 54; s = []
    for c in chroms:
        bl = bands[c]; L = bl[-1][1]; x0 = 60; wid = 640 * L / MAXLEN if len(chroms) > 1 else 640; wid = max(wid, 260); sc = wid / L
        s.append(f'<text x="{x0 - 10}" y="{y + 15}" text-anchor="end" font-size="15" font-weight="700" fill="{INK}">{c[3:]}</text>')
        s.append(f'<clipPath id="cp{name}{c}"><rect x="{x0}" y="{y}" width="{wid:.1f}" height="20" rx="10"/></clipPath><g clip-path="url(#cp{name}{c})">')
        for a, b, nm, st in bl: s.append(f'<rect x="{x0 + a * sc:.1f}" y="{y}" width="{(b - a) * sc + .4:.1f}" height="20" fill="{STAIN[st]}"/>')
        s.append(f'</g><rect x="{x0}" y="{y}" width="{wid:.1f}" height="20" rx="10" fill="none" stroke="{INK}" stroke-width="1.2"/>')
        s.append(f'<text x="{x0 + wid + 8:.0f}" y="{y + 15}" font-size="11" fill="{MUTED}">{L / 1e6:.0f} Mb</text>')
        gs = sorted([g for g in genes if G[g]["chrom"] == c], key=lambda g: G[g]["start"])
        # etichete esalonate ca sa nu se suprapuna
        lx_prev = -1e9; row = 0
        for g in gs:
            gx = x0 + (G[g]["start"] + G[g]["end"]) / 2 * sc
            label = f'{g} · {G[g]["banda"]}'
            lw = len(label) * 7.2
            lx = min(max(gx, x0 + lw / 2), W - 10 - lw / 2)
            row = row + 1 if lx - lw / 2 < lx_prev + 6 else 0
            ly = y + 48 + row * 18
            lx_prev = lx + lw / 2 if row == 0 else max(lx_prev, lx + lw / 2)
            s.append(f'<line x1="{gx:.1f}" y1="{y - 4}" x2="{gx:.1f}" y2="{y + 26}" stroke="{ACC}" stroke-width="2.2"/><line x1="{gx:.1f}" y1="{y + 26}" x2="{lx:.1f}" y2="{ly - 12}" stroke="{ACC}" stroke-width="1"/>')
            s.append(f'<text x="{lx:.1f}" y="{ly}" text-anchor="middle" font-size="12.5" font-weight="700" fill="{ACC}" stroke="#fff" stroke-width="4" paint-order="stroke">{label}</text>')
        y += 66 + 18 * max(0, len(gs) - 1)
    for g in exmaps:
        r = G[g]; x0, wid = 60, 640; L = r["end"] - r["start"]; sc = wid / L
        s.append(f'<text x="{x0}" y="{y + 4}" font-size="12.5" fill="{INK}"><tspan font-weight="700" font-style="italic">{g}</tspan> · {r["exoni"]} exoni · {L / 1000:.1f} kb · catena {"+" if r["strand"] == "+" else "−"} · {r["transcript"]}</text>')
        s.append(f'<line x1="{x0}" y1="{y + 22}" x2="{x0 + wid}" y2="{y + 22}" stroke="{MUTED}" stroke-width="1.2"/>')
        for a, b in r["ex"]:
            s.append(f'<rect x="{x0 + (a - r["start"]) * sc:.2f}" y="{y + 12}" width="{max(1.6, (b - a) * sc):.2f}" height="20" fill="{ACC}"/>')
        s.append(f'<text x="{x0}" y="{y + 48}" font-size="10.5" fill="{MUTED}">{r["chrom"]}:{fmt(r["start"])}</text><text x="{x0 + wid}" y="{y + 48}" text-anchor="end" font-size="10.5" fill="{MUTED}">{fmt(r["end"])}</text>')
        y += 66
    if zoom:
        zc, za, zb, cap = zoom; x0, wid = 60, 640; sc = wid / (zb - za)
        s.append(f'<text x="{x0}" y="{y + 4}" font-size="12.5" font-weight="700" fill="{INK}">Detaliu: {zc}:{fmt(za)}–{fmt(zb)} ({(zb - za) / 1e6:.1f} Mb)</text>')
        s.append(f'<line x1="{x0}" y1="{y + 40}" x2="{x0 + wid}" y2="{y + 40}" stroke="{MUTED}" stroke-width="1.2"/>')
        zg = sorted([g for g in G if G[g]["chrom"] == zc and G[g]["end"] > za and G[g]["start"] < zb and g in genes + cap.get("extra", [])], key=lambda g: G[g]["start"])
        for i, g in enumerate(zg):
            a, b = max(za, G[g]["start"]), min(zb, G[g]["end"]); col = cap.get("col", {}).get(g, ACC)
            gx, gw = x0 + (a - za) * sc, max(4, (b - a) * sc)
            s.append(f'<rect x="{gx:.1f}" y="{y + 30}" width="{gw:.1f}" height="20" rx="3" fill="{col}"/>')
            ty = y + 22 if i % 2 == 0 else y + 68
            s.append(f'<text x="{min(max(gx + gw / 2, x0 + 30), x0 + wid - 30):.1f}" y="{ty}" text-anchor="middle" font-size="12" font-weight="700" font-style="italic" fill="{col}">{g}</text>')
        y += 84
        for k, t in cap.get("leg", []):
            s.append(f'<rect x="60" y="{y - 10}" width="14" height="11" fill="{k}"/><text x="82" y="{y}" font-size="12" fill="{INK}">{t}</text>'); y += 18
        y += 6
    if note:
        s.append(f'<text x="60" y="{y + 2}" font-size="12" fill="{INK}">{note}</text>'); y += 20
    H = y + 22
    head = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="system-ui,sans-serif" role="img"><title>{title}</title><rect width="{W}" height="{H}" fill="#fff"/>'
            f'<text x="60" y="28" font-size="15" font-weight="700" fill="{INK}">{title}</text>')
    foot = f'<text x="{W / 2}" y="{H - 8}" text-anchor="middle" font-size="10.5" fill="{MUTED}">Sursă: UCSC Genome Browser, GRCh38/hg38 (cytoBandIdeo, NCBI RefSeq Select). Barele violet din hartă = exoni, la scară.</text></svg>'
    open(f"{R}/fig/loc_{name}.svg", "w").write(head + "".join(s) + foot)
if __name__ == "__main__":
    extra = R + "/tools/locus_fig.json"
    if os.path.exists(extra): FIG.update({k: tuple(v) for k, v in json.load(open(extra)).items()})
    for k, v in FIG.items(): draw(k, *v)
    print(len(FIG), "figuri")
