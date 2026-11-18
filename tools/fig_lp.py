#!/usr/bin/env python3
"""Figuri din date primare pentru ghidul de LP.
Sursa: UCSC Genome Browser hg38, cytoBandIdeo (date/cytoband.json) — benzi G la rezoluția ~850 de benzi.
  fig/lp_ideograma.svg  — idiograma tuturor celor 24 de cromozomi, la scară (Mb), cu tipul morfologic
Rulare: python3 tools/fig_lp.py
"""
import json, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cb = json.load(open(R + "/date/cytoband.json"))
INK, MUTED = "#1f2a37", "#5b6777"
FILL = {"gneg": "#ffffff", "gpos25": "#c8c8c8", "gpos50": "#969696", "gpos75": "#5a5a5a", "gpos100": "#1e1e1e", "gvar": "#9ab3d5", "stalk": "#e8d9a8", "acen": "#d9534f"}
# clasificarea citogenetică clasică (ISCN / grupele Denver)
TIP = {**{c: "m" for c in ["1", "3", "16", "19", "20"]}, **{c: "a" for c in ["13", "14", "15", "21", "22", "Y"]}}
GRUP = {"A": ["1", "2", "3"], "B": ["4", "5"], "C": ["6", "7", "8", "9", "10", "11", "12", "X"], "D": ["13", "14", "15"], "E": ["16", "17", "18"], "F": ["19", "20"], "G": ["21", "22", "Y"]}
TCOL = {"m": "#2a9d8f", "s": "#3a6ea5", "a": "#e76f51"}
ORD = [str(i) for i in range(1, 23)] + ["X", "Y"]


def ideograma():
    W, H, top, sc = 1240, 600, 70, 1.45  # sc = px / Mb
    colw = (W - 40) / 24
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="system-ui,sans-serif">',
         f'<rect width="{W}" height="{H}" fill="#fff"/>',
         f'<text x="20" y="26" font-size="17" font-weight="700" fill="{INK}">Idiograma cromozomilor umani, la scară, din secvența genomului (hg38, ~850 de benzi G)</text>',
         f'<text x="20" y="46" font-size="13" fill="{MUTED}">Fiecare cromozom e aliniat la centromer (roșu). Culoarea numărului: metacentric · submetacentric · acrocentric. Galben pal = tulpina sateliților (NOR).</text>']
    cy = top + 30 + 124 * sc  # linia centromerilor (brațul p cel mai lung: 1p, 123 Mb)
    for i, c in enumerate(ORD):
        b = cb["chr" + c]; ac = [x for x in b if x[3] == "acen"]; cen = (ac[0][0] + ac[-1][1]) / 2
        x = 20 + i * colw + colw / 2; w = 15
        for st, en, nm, g in b:
            y1 = cy + (st - cen) / 1e6 * sc; y2 = cy + (en - cen) / 1e6 * sc
            if g == "acen":
                tip = (y1 + y2) / 2
                pts = f"{x - w / 2},{y1} {x + w / 2},{y1} {x},{y2}" if st < cen else f"{x},{y1} {x - w / 2},{y2} {x + w / 2},{y2}"
                s.append(f'<polygon points="{pts}" fill="{FILL[g]}"/>'); continue
            s.append(f'<rect x="{x - w / 2}" y="{y1:.2f}" width="{w}" height="{max(y2 - y1, .4):.2f}" fill="{FILL[g]}"/>')
        y0 = cy - cen / 1e6 * sc; y9 = cy + (b[-1][1] - cen) / 1e6 * sc
        s.append(f'<path d="M{x - w / 2} {y0 + 4} v{cy - y0 - 6} M{x + w / 2} {y0 + 4} v{cy - y0 - 6} M{x - w / 2} {cy + 2} v{y9 - cy - 6} M{x + w / 2} {cy + 2} v{y9 - cy - 6}" stroke="{INK}" stroke-width="1" fill="none"/>')
        s.append(f'<path d="M{x - w / 2} {y0 + 4} q0 -4 {w / 2} -4 q{w / 2} 0 {w / 2} 4 M{x - w / 2} {y9 - 4} q0 4 {w / 2} 4 q{w / 2} 0 {w / 2} -4" stroke="{INK}" stroke-width="1" fill="none"/>')
        t = TIP.get(c, "s")
        s.append(f'<text x="{x}" y="{y0 - 10}" text-anchor="middle" font-size="14" font-weight="800" fill="{TCOL[t]}">{c}</text>')
        p, q = cen / 1e6, (b[-1][1] - cen) / 1e6
        s.append(f'<text x="{x}" y="{y9 + 18}" text-anchor="middle" font-size="10.5" fill="{MUTED}">{q / p:.1f}</text>')
    s.append(f'<text x="20" y="{H - 40}" font-size="12" fill="{MUTED}">Sub fiecare cromozom: raportul q/p calculat din perechi de baze. La acrocentrici, brațul scurt (sateliți, ADN ribozomal) e doar parțial secvențiat, deci raportul real e mai mare.</text>')
    lg = 20
    for t, nm in (("m", "metacentric (R = 1–1,7)"), ("s", "submetacentric (R = 1,7–3)"), ("a", "acrocentric (R > 3)")):
        s.append(f'<rect x="{lg}" y="{H - 24}" width="12" height="12" rx="2" fill="{TCOL[t]}"/><text x="{lg + 18}" y="{H - 14}" font-size="12.5" fill="{INK}">{nm}</text>'); lg += 215
    for g, nm in (("gneg", "bandă G negativă (deschisă)"), ("gpos75", "bandă G pozitivă"), ("gvar", "heterocromatină")):
        s.append(f'<rect x="{lg}" y="{H - 24}" width="12" height="12" fill="{FILL[g]}" stroke="{INK}" stroke-width=".6"/><text x="{lg + 18}" y="{H - 14}" font-size="12.5" fill="{INK}">{nm}</text>'); lg += 200
    s.append("</svg>")
    open(R + "/fig/lp_ideograma.svg", "w").write("\n".join(s))


DARK = {"gneg": 0, "gpos25": .25, "gpos50": .5, "gpos75": .75, "gpos100": 1}


def benzi(c, nivel=850):
    """Benzile cromozomului c la rezoluția cerută. 850 = datele UCSC; 400 = sub-benzile unite la prima zecimală
    (p36.33 + p36.32 → p36.3); 300 = unite la nivel de bandă (p36.3x → p36). Culoarea benzii unite = media ponderată."""
    b = cb["chr" + c]
    if nivel == 850: return [list(x) for x in b]
    out = []
    for st, en, nm, g in b:
        k = nm.split(".")[0] if nivel == 300 else nm[: nm.index(".") + 2] if "." in nm else nm
        if g in ("acen", "gvar", "stalk"): k = nm + "|" + g
        if out and out[-1][2] == k and g not in ("acen",): out[-1][1] = en; out[-1][4].append((en - st, g))
        else: out.append([st, en, k, g, [(en - st, g)]])
    res = []
    for st, en, k, g, parts in out:
        if g in DARK:
            tot = sum(l for l, _ in parts); d = sum(l * DARK.get(gg, 0) for l, gg in parts) / tot
            g = min(DARK, key=lambda x: abs(DARK[x] - d))
        res.append([st, en, k.split("|")[0], g])
    # benzile vecine cu aceeași culoare se contopesc vizual
    return res


def cromozom(s, c, x, y, sc, w=14, nivel=850, stil="G", et=None, lbl=False):
    """Desenează cromozomul c cu centromerul la (x, y). stil: G (Giemsa), Q (fluorescență), R (invers), C (doar heterocromatina)."""
    b = benzi(c, nivel); ac = [z for z in b if z[3] == "acen"]; cen = (ac[0][0] + ac[-1][1]) / 2
    bg = "#11161f" if stil == "Q" else "#fff"
    for st, en, nm, g in b:
        y1 = y + (st - cen) / 1e6 * sc; y2 = y + (en - cen) / 1e6 * sc; h = max(y2 - y1, .4)
        if g == "acen":
            pts = f"{x - w / 2},{y1} {x + w / 2},{y1} {x},{y2}" if st < cen else f"{x},{y1} {x - w / 2},{y2} {x + w / 2},{y2}"
            col = {"G": "#7a7a7a", "Q": "#5d6b2f", "R": "#7a7a7a", "C": "#2a2a2a"}[stil]
            s.append(f'<polygon points="{pts}" fill="{col}"/>'); continue
        d = DARK.get(g)
        if stil == "G": col = FILL[g]
        elif stil == "Q":
            v = .08 + .92 * (d if d is not None else (.95 if g == "gvar" else .2)); col = f"rgb({int(30 + 190 * v)},{int(45 + 200 * v)},{int(30 + 90 * v)})"
        elif stil == "R":
            v = 1 - d if d is not None else (.05 if g == "gvar" else .1); col = f"rgb({int(255 - 225 * v)},{int(255 - 225 * v)},{int(255 - 225 * v)})"
        else: col = "#2a2a2a" if g == "gvar" else "#d9d9d9"
        s.append(f'<rect x="{x - w / 2}" y="{y1:.2f}" width="{w}" height="{h:.2f}" fill="{col}"/>')
        if lbl and g != "acen" and h > 7:
            s.append(f'<text x="{x + w / 2 + 4}" y="{(y1 + y2) / 2 + 3.5:.1f}" font-size="9" fill="{MUTED}">{nm}</text>')
    y0 = y - cen / 1e6 * sc; y9 = y + (b[-1][1] - cen) / 1e6 * sc
    oc = "#9aa5b1" if stil == "Q" else INK
    s.append(f'<path d="M{x - w / 2} {y0} V{y - 2} M{x + w / 2} {y0} V{y - 2} M{x - w / 2} {y + 2} V{y9} M{x + w / 2} {y + 2} V{y9} M{x - w / 2} {y0} H{x + w / 2} M{x - w / 2} {y9} H{x + w / 2}" stroke="{oc}" stroke-width=".8" fill="none"/>')
    if et: s.append(f'<text x="{x}" y="{y9 + 14}" text-anchor="middle" font-size="11" font-weight="700" fill="{INK}">{et}</text>')
    return y0, y9


def rezolutie():
    W, H = 760, 520; s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="system-ui,sans-serif"><rect width="{W}" height="{H}" fill="#fff"/>',
                          f'<text x="20" y="26" font-size="16" font-weight="700" fill="{INK}">Cromozomul 1 la trei rezoluții de bandare (din benzile UCSC hg38)</text>']
    for i, (niv, t, d) in enumerate(((300, "~300 benzi", "metafază (generația a II-a)"), (400, "~650 benzi", "prometafază (generația a III-a)"), (850, "~800 benzi", "profază timpurie"))):
        x = 110 + i * 230
        cromozom(s, "1", x, 70 + 125 * 1.65, 1.65, w=22, nivel=niv, lbl=(i < 2))
        s.append(f'<text x="{x}" y="58" text-anchor="middle" font-size="13.5" font-weight="700" fill="{INK}">{t}</text><text x="{x}" y="{H - 14}" text-anchor="middle" font-size="12" fill="{MUTED}">{d}</text>')
    s.append("</svg>"); open(R + "/fig/lp_rezolutie.svg", "w").write("\n".join(s))


def bandari():
    W, H = 760, 400; s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="system-ui,sans-serif"><rect width="{W}" height="{H}" fill="#fff"/>',
                          f'<text x="20" y="26" font-size="16" font-weight="700" fill="{INK}">Aceiași cromozomi (1 și 9) în patru tipuri de marcaj</text>']
    for i, (st, t, d) in enumerate((("G", "G (Giemsa + tripsină)", "benzi închise = bogate în AT"), ("Q", "Q (quinacrină, UV)", "fluorescente = benzile G+"), ("R", "R (denaturare termică)", "imaginea inversă a lui G"), ("C", "C (hidroxid de bariu)", "doar heterocromatina constitutivă"))):
        x = 60 + i * 185
        if st == "Q": s.append(f'<rect x="{x - 40}" y="40" width="150" height="{H - 92}" rx="8" fill="#11161f"/>')
        cromozom(s, "1", x, 60 + 124 * 1.1, 1.1, w=18, nivel=400, stil=st)
        cromozom(s, "9", x + 70, 60 + 124 * 1.1, 1.1, w=18, nivel=400, stil=st)
        s.append(f'<text x="{x + 35}" y="{H - 34}" text-anchor="middle" font-size="12.5" font-weight="700" fill="{INK}">{t}</text><text x="{x + 35}" y="{H - 16}" text-anchor="middle" font-size="11.5" fill="{MUTED}">{d}</text>')
        s.append(f'<text x="{x}" y="{60 + 124 * 1.1 + 160 * 1.1 + 12}" text-anchor="middle" font-size="10" fill="{"#9aa5b1" if st == "Q" else MUTED}">1</text><text x="{x + 70}" y="{60 + 124 * 1.1 + 100 * 1.1 + 12}" text-anchor="middle" font-size="10" fill="{"#9aa5b1" if st == "Q" else MUTED}">9</text>')
    s.append("</svg>"); open(R + "/fig/lp_bandari.svg", "w").write("\n".join(s))


def cariotip(sex="XY"):
    """Cariotip aranjat pe grupe, ca pe foaia de la LP, la ~650 de benzi."""
    sc = .95
    rows = [[("A", ["1", "2", "3"]), ("B", ["4", "5"])], [("C", ["6", "7", "8", "9", "10", "11", "12"])], [("D", ["13", "14", "15"]), ("E", ["16", "17", "18"])], [("F", ["19", "20"]), ("G", ["21", "22"]), ("X Y" if sex == "XY" else "X X", ["X", "Y"] if sex == "XY" else ["X", "X"])]]
    GC = {"A": "#e8f0fb", "B": "#e6f4ef", "C": "#fdf3df", "D": "#fbe9e6", "E": "#efe9fb", "F": "#e4f2f5", "G": "#f4ece2", "X Y": "#f0f0f0"}
    arm = lambda c: (lambda b: (lambda cen: (cen / 1e6, (b[-1][1] - cen) / 1e6))((min(z[0] for z in b if z[3] == "acen") + max(z[1] for z in b if z[3] == "acen")) / 2))(cb["chr" + c])
    s, y = [], 14
    for row in rows:
        chs = [c for _, cc in row for c in cc]; mp = max(arm(c)[0] for c in chs); mq = max(arm(c)[1] for c in chs)
        top, cen = y, y + 30 + mp * sc; bot = cen + mq * sc + 26; x = 20
        for g, cc in row:
            pair = g not in ("X Y", "X X"); wgr = len(cc) * (60 if pair else 40) + 14
            s.append(f'<rect x="{x}" y="{top}" width="{wgr}" height="{bot - top}" rx="10" fill="{GC.get(g, "#f0f0f0")}"/><text x="{x + 10}" y="{top + 18}" font-size="14" font-weight="800" fill="{INK}">{g}</text>')
            xx = x + 14
            for c in cc:
                if pair:
                    cromozom(s, c, xx + 12, cen, sc, w=12, nivel=400); cromozom(s, c, xx + 30, cen, sc, w=12, nivel=400)
                    s.append(f'<text x="{xx + 21}" y="{bot - 8}" text-anchor="middle" font-size="12.5" font-weight="700" fill="{INK}">{c}</text>'); xx += 60
                else:
                    cromozom(s, c, xx + 12, cen, sc, w=12, nivel=400); s.append(f'<text x="{xx + 12}" y="{bot - 8}" text-anchor="middle" font-size="12.5" font-weight="700" fill="{INK}">{c}</text>'); xx += 40
            x += wgr + 12
        y = bot + 12
    W = 560; H = y + 4
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="system-ui,sans-serif"><rect width="{W}" height="{H}" fill="#fff"/>'] + s + ["</svg>"]
    open(R + f"/fig/lp_cariotip_{sex.lower()}.svg", "w").write("\n".join(s))


def nomenclatura():
    """Cromozomul X la ~850 de benzi, cu regiunile (p1, p2, q1, q2) și citirea benzii Xp21.2."""
    W, H = 760, 560; sc = 3.0; x = 250; s = []
    b = benzi("X", 850); ac = [z for z in b if z[3] == "acen"]; cen = (ac[0][0] + ac[-1][1]) / 2
    yc = 40 + cen / 1e6 * sc
    cromozom(s, "X", x, yc, sc, w=30, nivel=850)
    Y = lambda v: yc + (v - cen) / 1e6 * sc
    # benzi etichetate în dreapta (toate; textul mic)
    for st, en, nm, g in b:
        if g == "acen": continue
        yy = (Y(st) + Y(en)) / 2
        bold = nm == "p21.2"
        s.append(f'<text x="{x + 22}" y="{yy + 3.2:.1f}" font-size="{10 if bold else 8.5}" font-weight="{700 if bold else 400}" fill="{"#c2410c" if bold else MUTED}">{nm}</text>')
    # regiuni: acolade la stânga
    reg = {}
    for st, en, nm, g in b:
        k = nm[0] + nm[1]
        reg.setdefault(k, [st, en]); reg[k][0] = min(reg[k][0], st); reg[k][1] = max(reg[k][1], en)
    col = {"p": "#3a6ea5", "q": "#2a9d8f"}
    for k, (st, en) in reg.items():
        y1, y2 = Y(st) + 1.5, Y(en) - 1.5; xx = x - 30
        s.append(f'<path d="M{xx + 8} {y1} H{xx} V{y2} H{xx + 8}" stroke="{col[k[0]]}" stroke-width="2" fill="none"/>')
        s.append(f'<text x="{xx - 8}" y="{(y1 + y2) / 2 + 4:.1f}" text-anchor="end" font-size="12.5" font-weight="700" fill="{col[k[0]]}">regiunea {k[1]}</text>')
    s.append(f'<text x="{x - 200}" y="{Y(cen) - 40:.1f}" text-anchor="middle" font-size="14" font-weight="700" fill="{INK}">brațul p</text>')
    s.append(f'<text x="{x - 200}" y="{Y(cen) + 50:.1f}" text-anchor="middle" font-size="14" font-weight="700" fill="{INK}">brațul q</text>')
    s.append(f'<text x="{x + 24}" y="{Y(cen) + 4:.1f}" font-size="9" fill="#c2410c">cen</text>')
    # descompunerea Xp21.2
    st, en = [(a, e) for a, e, n, g in b if n == "p21.2"][0]; yy = (Y(st) + Y(en)) / 2
    s.append(f'<path d="M{x + 62} {yy:.1f} H{x + 150}" stroke="#c2410c" stroke-width="1.5"/>')
    X0 = x + 160; parts = [("X", "cromozomul"), ("p", "brațul scurt"), ("2", "regiunea"), ("1", "banda"), (".2", "sub-banda")]
    xx = X0
    for i, (t, d) in enumerate(parts):
        s.append(f'<text x="{xx}" y="{yy + 10:.1f}" font-size="34" font-weight="700" fill="{"#c2410c" if i else INK}" font-family="ui-monospace,monospace">{t}</text>')
        s.append(f'<line x1="{xx + 10}" y1="{yy + 18:.1f}" x2="{xx + 10}" y2="{yy + 40 + i * 22:.1f}" stroke="{MUTED}" stroke-width="1"/>')
        s.append(f'<text x="{xx + 16}" y="{yy + 44 + i * 22:.1f}" font-size="12.5" fill="{INK}">{d}</text>')
        xx += 22 * len(t) + (8 if t != ".2" else 0)
    s.append(f'<text x="{X0}" y="{yy + 170:.1f}" font-size="12.5" fill="{MUTED}">Se citește „X p doi unu punct doi”,</text>')
    s.append(f'<text x="{X0}" y="{yy + 188:.1f}" font-size="12.5" fill="{MUTED}">nu „X p douăzeci și unu”.</text>')
    s.append(f'<text x="{X0}" y="{yy + 222:.1f}" font-size="12.5" fill="{MUTED}">Aici se află gena DMD (distrofia Duchenne).</text>')
    s.append(f'<text x="20" y="{H - 12}" font-size="11.5" fill="{MUTED}">Date: UCSC hg38, cytoBandIdeo (~850 de benzi). Numerotarea pornește de la centromer spre capete, pe fiecare braț.</text>')
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="system-ui,sans-serif"><rect width="{W}" height="{H}" fill="#fff"/>'] + s + ["</svg>"]
    open(R + "/fig/lp_nomenclatura.svg", "w").write("\n".join(s))


ideograma(); rezolutie(); bandari(); cariotip("XY"); cariotip("XX"); nomenclatura()
print("ok fig/lp_ideograma.svg, lp_rezolutie.svg, lp_bandari.svg, lp_cariotip_xy.svg")
