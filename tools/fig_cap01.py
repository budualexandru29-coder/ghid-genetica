#!/usr/bin/env python3
"""Figuri generate din date primare pentru Capitolul 1.
Surse: RCSB PDB (1BNA, 2DCG, 1AOI), UCSC Genome Browser hg38 (cytoBandIdeo, ncbiRefSeqCurated).
Rulare: python3 tools/fig_cap01.py   (din radacina proiectului)
"""
import json, math, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, "date")
F = os.path.join(ROOT, "fig")

INK, MUTED = "#1f2a37", "#5b6777"
BASE_COL = {"DA": "#2a9d8f", "DT": "#e76f51", "DG": "#3a6ea5", "DC": "#e9b949"}
BACKBONE = {"P", "OP1", "OP2", "O1P", "O2P", "O5'", "O3'", "C5'", "C4'", "C3'", "C2'", "C1'", "O4'",
            "O5*", "O3*", "C5*", "C4*", "C3*", "C2*", "C1*", "O4*"}


def atoms(pdb, het=False):
    out = []
    for ln in open(os.path.join(D, pdb)):
        if ln.startswith("ENDMDL"):
            break
        if ln.startswith("ATOM") or (het and ln.startswith("HETATM")):
            out.append(dict(name=ln[12:16].strip(), res=ln[17:20].strip(), chain=ln[21],
                            resi=int(ln[22:26]), x=float(ln[30:38]), y=float(ln[38:46]), z=float(ln[46:54])))
    return out


def pca(pts):
    """Intoarce centrul si axele principale (descrescator dupa varianta) - iteratie de putere, fara numpy."""
    n = len(pts)
    c = [sum(p[i] for p in pts) / n for i in range(3)]
    q = [[p[i] - c[i] for i in range(3)] for p in pts]
    cov = [[sum(a[i] * a[j] for a in q) / n for j in range(3)] for i in range(3)]
    axes = []
    m = [r[:] for r in cov]
    for _ in range(3):
        v = [1.0, 0.7, 0.3]
        for _ in range(300):
            w = [sum(m[i][j] * v[j] for j in range(3)) for i in range(3)]
            nrm = math.sqrt(sum(x * x for x in w)) or 1
            v = [x / nrm for x in w]
        lam = sum(v[i] * sum(m[i][j] * v[j] for j in range(3)) for i in range(3))
        axes.append(v)
        m = [[m[i][j] - lam * v[i] * v[j] for j in range(3)] for i in range(3)]
    return c, axes


def project(at, c, ax_u, ax_v, ax_w):
    for a in at:
        d = [a["x"] - c[0], a["y"] - c[1], a["z"] - c[2]]
        a["u"] = sum(d[i] * ax_u[i] for i in range(3))
        a["v"] = sum(d[i] * ax_v[i] for i in range(3))
        a["w"] = sum(d[i] * ax_w[i] for i in range(3))


def svg_open(w, h, title):
    return [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
            f'font-family="system-ui,-apple-system,Segoe UI,sans-serif" role="img"><title>{title}</title>'
            f'<rect width="{w}" height="{h}" fill="#ffffff"/>']


def helix_panel(pdb, x0, y0, scale, label, sub):
    at = atoms(pdb)
    c, ax = pca([(a["x"], a["y"], a["z"]) for a in at])
    project(at, c, ax[1], ax[0], ax[2])  # axa helixului (varianta maxima) pe verticala
    out = []
    for a in sorted(at, key=lambda a: a["w"]):
        bb = a["name"] in BACKBONE
        col = "#9aa5b1" if bb else BASE_COL.get(a["res"], BASE_COL.get("D" + a["res"][-1], "#888"))
        if a["name"] == "P":
            col = "#7c3aed"
        r = 2.6 if a["name"] == "P" else 1.9
        shade = 0.55 + 0.45 * (a["w"] - min(b["w"] for b in at)) / (max(b["w"] for b in at) - min(b["w"] for b in at))
        out.append(f'<circle cx="{x0 + a["u"] * scale:.1f}" cy="{y0 - a["v"] * scale:.1f}" r="{r * scale / 4:.1f}" '
                   f'fill="{col}" fill-opacity="{shade:.2f}"/>')
    vs = [a["v"] for a in at]
    us = [a["u"] for a in at if a["name"] == "P"]
    span = max(vs) - min(vs)
    out.append(f'<text x="{x0}" y="{y0 + span * scale / 2 + 26}" text-anchor="middle" font-size="15" font-weight="700" fill="{INK}">{label}</text>')
    out.append(f'<text x="{x0}" y="{y0 + span * scale / 2 + 44}" text-anchor="middle" font-size="11.5" fill="{MUTED}">{sub}</text>')
    return out, span, (max(us) - min(us))


def fig_helix():
    w, h = 760, 470
    s = svg_open(w, h, "ADN-B (PDB 1BNA) si ADN-Z (PDB 2DCG) - proiectii din coordonate atomice")
    sc = 7.6
    b, bspan, bdiam = helix_panel("1BNA.pdb", 190, 205, sc, "ADN-B · PDB 1BNA", "dodecamer CGCGAATTCGCG · elice dreaptă")
    z, zspan, zdiam = helix_panel("2DCG.pdb", 560, 205, sc, "ADN-Z · PDB 2DCG", "hexamer CGCGCG · elice stângă, schelet în zigzag")
    s += b + z
    # scara 1 nm = 10 A
    s.append(f'<line x1="340" y1="60" x2="{340 + 10 * sc}" y2="60" stroke="{INK}" stroke-width="2"/>')
    s.append(f'<text x="{340 + 5 * sc}" y="52" text-anchor="middle" font-size="12" fill="{INK}">1 nm (10 Å)</text>')
    # diametru masurat intre atomii P
    s.append(f'<line x1="{190 - bdiam * sc / 2:.0f}" y1="26" x2="{190 + bdiam * sc / 2:.0f}" y2="26" stroke="#7c3aed" stroke-width="1.5"/>')
    s.append(f'<text x="190" y="20" text-anchor="middle" font-size="11.5" fill="#7c3aed">P–P măsurat: {bdiam / 10:.1f} nm (curs: diametru 2 nm)</text>')
    lg = [("P (fosfat)", "#7c3aed"), ("deoxiriboză + O", "#9aa5b1"), ("A", BASE_COL["DA"]), ("T", BASE_COL["DT"]),
          ("G", BASE_COL["DG"]), ("C", BASE_COL["DC"])]
    x = 330
    y = 110
    for name, col in lg:
        s.append(f'<circle cx="{x}" cy="{y}" r="5" fill="{col}"/><text x="{x + 11}" y="{y + 4}" font-size="12" fill="{INK}">{name}</text>')
        y += 20
    s.append(f'<text x="{w / 2}" y="{h - 8}" text-anchor="middle" font-size="10.5" fill="{MUTED}">Sursă: coordonate atomice RCSB PDB 1BNA (Drew et al., 1981) și 2DCG (Wang et al., 1979); proiecție ortografică, axa helixului verticală.</text>')
    s.append("</svg>")
    open(os.path.join(F, "c01_helix_pdb.svg"), "w").write("\n".join(s))
    return bspan, bdiam


def fig_nucleosome():
    at = atoms("1AOI.pdb")
    dna = [a for a in at if a["chain"] in "IJ" and a["name"] == "P"]
    c, ax = pca([(a["x"], a["y"], a["z"]) for a in dna])
    project(at, c, ax[0], ax[1], ax[2])  # privim de-a lungul axei superhelixului (varianta minima)
    w, h, sc = 760, 520, 3.9
    cx, cy = 270, 255
    s = svg_open(w, h, "Nucleozom - PDB 1AOI")
    HIST = {"A": ("H3", "#3a6ea5"), "E": ("H3", "#3a6ea5"), "B": ("H4", "#2a9d8f"), "F": ("H4", "#2a9d8f"),
            "C": ("H2A", "#e9b949"), "G": ("H2A", "#e9b949"), "D": ("H2B", "#e76f51"), "H": ("H2B", "#e76f51")}
    for ch, (nm, col) in HIST.items():
        ca = [a for a in at if a["chain"] == ch and a["name"] == "CA"]
        pts = " ".join(f'{cx + a["u"] * sc:.1f},{cy - a["v"] * sc:.1f}' for a in ca)
        s.append(f'<polyline points="{pts}" fill="none" stroke="{col}" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.9"/>')
    for ch in "IJ":
        p = [a for a in dna if a["chain"] == ch]
        for a in sorted(p, key=lambda a: a["w"]):
            op = 0.45 + 0.55 * (a["w"] + 30) / 60
            s.append(f'<circle cx="{cx + a["u"] * sc:.1f}" cy="{cy - a["v"] * sc:.1f}" r="4.2" fill="#7c3aed" fill-opacity="{max(0.3, min(1, op)):.2f}"/>')
    nbp = len([a for a in at if a["chain"] == "I" and a["name"] == "C1'" or a["chain"] == "I" and a["name"] == "C1*"])
    us = [a["u"] for a in dna]
    diam = max(us) - min(us)
    s.append(f'<line x1="{cx + min(us) * sc:.0f}" y1="{h - 52}" x2="{cx + max(us) * sc:.0f}" y2="{h - 52}" stroke="{INK}" stroke-width="2"/>')
    s.append(f'<text x="{cx}" y="{h - 34}" text-anchor="middle" font-size="12.5" fill="{INK}">≈ {diam / 10:.0f} nm (măsurat între atomii P) — „filamentul de 10 nm”</text>')
    x, y = 545, 110
    s.append(f'<text x="{x}" y="{y - 28}" font-size="15" font-weight="700" fill="{INK}">Nucleozom · PDB 1AOI</text>')
    for nm, col, txt in [("ADN", "#7c3aed", f"{nbp} pb, ~1¾ ture (atomi P)"), ("H3", "#3a6ea5", "× 2"), ("H4", "#2a9d8f", "× 2"),
                         ("H2A", "#e9b949", "× 2"), ("H2B", "#e76f51", "× 2")]:
        s.append(f'<rect x="{x}" y="{y - 10}" width="22" height="10" rx="3" fill="{col}"/>'
                 f'<text x="{x + 30}" y="{y}" font-size="13" fill="{INK}"><tspan font-weight="700">{nm}</tspan> {txt}</text>')
        y += 24
    for i, t in enumerate(["Miezul = octamer histonic:", "2×(H2A, H2B, H3, H4).", "H1 NU face parte din miez:", "se leagă de ADN-ul linker", "(absentă din acest cristal)."]):
        s.append(f'<text x="{x}" y="{y + 16 + i * 17}" font-size="12" fill="{MUTED}">{t}</text>')
    s.append(f'<text x="{w / 2}" y="{h - 8}" text-anchor="middle" font-size="10.5" fill="{MUTED}">Sursă: RCSB PDB 1AOI (Luger et al., Nature 1997, 2,8 Å). Lanțuri histonice trasate prin atomii Cα; vedere de-a lungul axei superhelixului.</text>')
    s.append("</svg>")
    open(os.path.join(F, "c01_nucleozom_pdb.svg"), "w").write("\n".join(s))
    return nbp, diam


def fig_xy():
    STAIN = {"gneg": "#f4f5f7", "gpos25": "#c9ced6", "gpos50": "#8f98a5", "gpos75": "#5b6777", "gpos100": "#1f2a37",
             "acen": "#c0392b", "gvar": "#7fb3d5", "stalk": "#9bb"}
    w, h = 760, 430
    s = svg_open(w, h, "Ideograme cromozomii X si Y (hg38)")
    scale = 330 / 156040895
    info = {}
    for chrom, x0 in (("chrX", 150), ("chrY", 500)):
        bands = json.load(open(os.path.join(D, f"cyto_{chrom}.json")))["cytoBandIdeo"]
        info[chrom] = bands
        top = 50
        L = bands[-1]["chromEnd"]
        s.append(f'<clipPath id="cl{chrom}"><rect x="{x0}" y="{top}" width="34" height="{L * scale:.1f}" rx="15"/></clipPath>')
        s.append(f'<g clip-path="url(#cl{chrom})">')
        for b in bands:
            s.append(f'<rect x="{x0}" y="{top + b["chromStart"] * scale:.1f}" width="34" height="{(b["chromEnd"] - b["chromStart"]) * scale + 0.4:.1f}" fill="{STAIN[b["gieStain"]]}"/>')
        s.append("</g>")
        s.append(f'<rect x="{x0}" y="{top}" width="34" height="{L * scale:.1f}" rx="15" fill="none" stroke="{INK}" stroke-width="1.3"/>')
        s.append(f'<text x="{x0 + 17}" y="34" text-anchor="middle" font-size="17" font-weight="700" fill="{INK}">{chrom[3:]}</text>')
        s.append(f'<text x="{x0 + 17}" y="{top + L * scale + 20:.0f}" text-anchor="middle" font-size="11.5" fill="{MUTED}">{L / 1e6:.0f} Mb</text>')
        cen = [b for b in bands if b["gieStain"] == "acen"]
        cy = top + cen[0]["chromEnd"] * scale
        s.append(f'<text x="{x0 - 10}" y="{cy + 4:.0f}" text-anchor="end" font-size="11.5" fill="#c0392b">centromer</text>')
        s.append(f'<text x="{x0 - 10}" y="{top + cen[0]["chromStart"] * scale / 2 + 4:.0f}" text-anchor="end" font-size="12" fill="{MUTED}">p</text>')
        s.append(f'<text x="{x0 - 10}" y="{(cy + top + L * scale) / 2:.0f}" text-anchor="end" font-size="12" fill="{MUTED}">q</text>')
    # XIST
    xs, xe = 73820655, 73852714
    band = next(b for b in info["chrX"] if b["chromStart"] <= xs < b["chromEnd"])
    y = 50 + xs * scale
    s.append(f'<line x1="184" y1="{y:.1f}" x2="225" y2="{y:.1f}" stroke="#7c3aed" stroke-width="2"/>')
    s.append(f'<text x="230" y="{y - 2:.0f}" font-size="13" font-weight="700" fill="#7c3aed">XIST · X{band["name"]}</text>')
    s.append(f'<text x="230" y="{y + 14:.0f}" font-size="11.5" fill="{MUTED}">chrX:{xs:,}–{xe:,} (catena −)</text>'.replace(",", "."))
    s.append(f'<text x="230" y="{y + 29:.0f}" font-size="11.5" fill="{MUTED}">centrul de inactivare a X (XIC)</text>')
    # Y heterocromatina
    q12 = next(b for b in info["chrY"] if b["name"] == "q12")
    y1, y2 = 50 + q12["chromStart"] * scale, 50 + q12["chromEnd"] * scale
    Ly = info["chrY"][-1]["chromEnd"]
    cenY = [b for b in info["chrY"] if b["gieStain"] == "acen"][-1]["chromEnd"]
    frac = (q12["chromEnd"] - q12["chromStart"]) / (Ly - cenY)
    s.append(f'<path d="M540 {y1:.0f} h8 v{y2 - y1:.0f} h-8" fill="none" stroke="#2e6f9e" stroke-width="1.5"/>')
    s.append(f'<text x="556" y="{(y1 + y2) / 2 - 8:.0f}" font-size="13" font-weight="700" fill="#2e6f9e">Yq12 — heterocromatină</text>')
    s.append(f'<text x="556" y="{(y1 + y2) / 2 + 8:.0f}" font-size="13" font-weight="700" fill="#2e6f9e">constitutivă</text>')
    s.append(f'<text x="556" y="{(y1 + y2) / 2 + 25:.0f}" font-size="11.5" fill="{MUTED}">{(q12["chromEnd"] - q12["chromStart"]) / 1e6:.1f} Mb = {frac * 100:.0f}% din brațul q</text>')
    s.append(f'<text x="556" y="{(y1 + y2) / 2 + 40:.0f}" font-size="11.5" fill="{MUTED}">(curs: „cele două treimi distale”)</text>')
    # legenda
    lx, ly = 470, 300
    for i, (k, t) in enumerate([("gneg", "bandă G-negativă (clară)"), ("gpos75", "bandă G-pozitivă (întunecată)"), ("acen", "centromer"), ("gvar", "heterocromatină variabilă")]):
        s.append(f'<rect x="{lx}" y="{ly + i * 19}" width="16" height="11" fill="{STAIN[k]}" stroke="{MUTED}" stroke-width="0.5"/>'
                 f'<text x="{lx + 23}" y="{ly + i * 19 + 10}" font-size="11.5" fill="{INK}">{t}</text>')
    s.append(f'<text x="{w / 2}" y="{h - 8}" text-anchor="middle" font-size="10.5" fill="{MUTED}">Sursă: UCSC Genome Browser, GRCh38/hg38 — pistele cytoBandIdeo și ncbiRefSeqCurated. Cromozomii sunt desenați la aceeași scară.</text>')
    s.append("</svg>")
    open(os.path.join(F, "c01_ideograme_xy.svg"), "w").write("\n".join(s))
    return band["name"], frac, len(info["chrX"]), len(info["chrY"])


if __name__ == "__main__":
    print("helix: lungime %.1f A, diametru P-P %.1f A" % fig_helix())
    print("nucleozom: %d pb pe catena I, diametru %.1f A" % fig_nucleosome())
    print("XIST banda %s; Yq12 = %.0f%% din q; benzi X=%d Y=%d" % ((lambda r: (r[0], r[1] * 100, r[2], r[3]))(fig_xy())))
