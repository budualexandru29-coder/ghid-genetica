/* Ghid de genetică — navigare, progres, test, matrice de acoperire. Fără dependențe; merge direct din fișier. */
(function () {
  const G = (window.GHID = { cap: {} });
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mem = {
    get(k, d) { try { const v = localStorage.getItem("ghidgen:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("ghidgen:" + k, JSON.stringify(v)); } catch (e) {} },
  };
  G.capitol = (c) => { G.cap[c.id] = c; };
  // [[img:slug|legendă]] -> figură cu atribuire; [[gal:slug|legendă;;slug|legendă]] -> galerie
  const unaImg = (slug, cap) => {
    const m = (window.IMAGINI || {})[slug]; if (!m) return `<figure><figcaption>[imagine lipsă: ${esc(slug)}]</figcaption></figure>`;
    return `<figure class="foto"><img loading="lazy" src="${m.fisier}" width="${m.w}" height="${m.h}" alt="${esc(cap.replace(/<[^>]+>/g, ""))}">
      <figcaption>${cap}<span class="credit">Imagine: ${esc(m.autor)} · ${esc(m.licenta)} · <a href="${m.sursa}" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>`;
  };
  const extinde = (html) => html
    .replace(/\[\[gal:([\s\S]*?)\]\]/g, (_, s) => '<div class="galerie">' + s.split(";;").map((x) => { const i = x.indexOf("|"); return unaImg(x.slice(0, i).trim(), x.slice(i + 1).trim()); }).join("") + "</div>")
    .replace(/\[\[img:([^|\]]+)\|([\s\S]*?)\]\]/g, (_, slug, cap) => unaImg(slug.trim(), cap.trim()));

  // două cărți: cursul (Bănescu 2015) și lucrările practice (Pașcanu, Csep, Mureșan)
  const CARTI = [
    { id: "curs", nume: "Curs", lung: "Cartea de curs", pref: "", pg: "Curs p.", inv: () => window.INVENTAR || [] },
    { id: "lp", nume: "Lucrări practice", lung: "Cartea de lucrări practice", pref: "LP ", pg: "LP p.", inv: () => window.INVENTAR_LP || [] },
  ];
  const carteDe = (id) => (id && /^lp/.test(id) ? CARTI[1] : CARTI[0]);
  const inv = (carte) => (carte ? carte.inv() : CARTI.flatMap((k) => k.inv()));
  // secțiune de curs -> secțiunile de LP care trimit la ea (legături inverse)
  const laLP = () => {
    const m = {};
    Object.values(G.cap).forEach((c) => c.sectiuni.forEach((s) => (s.curs || []).forEach((k) => (m[k] = m[k] || []).push({ cap: c.id, sec: s.id, titlu: s.titlu }))));
    return m;
  };
  const titluSec = (k) => { const [c, s] = k.split("/"); const x = G.cap[c] && G.cap[c].sectiuni.find((y) => y.id === s); return x ? x.titlu : k; };
  const gata = () => mem.get("inteles", {});
  const progres = (id) => {
    const c = G.cap[id]; if (!c) return 0;
    const g = gata(); return c.sectiuni.filter((s) => g[id + "/" + s.id]).length / c.sectiuni.length;
  };
  // rând de inventar -> secțiunea din ghid care îl acoperă
  const acoperire = () => {
    const m = {};
    Object.values(G.cap).forEach((c) => c.sectiuni.forEach((s) => (s.acopera || []).forEach((r) => (m[r] = { cap: c.id, sec: s.id, titlu: s.titlu }))));
    return m;
  };

  function lateral(activ) {
    const k = carteDe(activ);
    let h = `<div class="comut">${CARTI.map((x) => `<a href="#/${x.id === "lp" ? "lp" : ""}" class="${x === k ? "activ" : ""}">${x.nume}</a>`).join("")}</div><h4>${k.id === "lp" ? "Lucrări practice (ordinea din carte)" : "Capitole (ordinea din curs)"}</h4>`;
    inv(k).forEach((c) => {
      const are = !!G.cap[c.id];
      h += `<a href="#/${c.id}" class="${c.id === activ ? "activ" : ""} ${are ? "" : "indisp"}"><span class="nr">${esc(c.nr)}</span><span>${esc(c.titlu)}</span></a>`;
      if (are && c.id === activ) {
        const g = gata();
        h += '<div class="sub">' + G.cap[c.id].sectiuni.map((s) => `<a href="#/${c.id}/${s.id}" class="${g[c.id + "/" + s.id] ? "gata" : ""}">${esc(s.titlu)}</a>`).join("") +
          (G.cap[c.id].test ? `<a href="#/${c.id}/test">Test adevărat / fals</a>` : "") + "</div>";
      }
    });
    h += '<h4>Verificare</h4><a href="#/acoperire"><span class="nr">▦</span><span>Matricea de acoperire</span></a>';
    $("#lateral").innerHTML = h;
  }

  function acasa(k) {
    k = k || CARTI[0];
    const ac = acoperire(), total = inv(k).reduce((n, c) => n + c.randuri.length, 0), n = inv(k).reduce((m, c) => m + c.randuri.filter((r) => ac[r.id]).length, 0);
    let h = `<div class="comut mare">${CARTI.map((x) => `<a href="#/${x.id === "lp" ? "lp" : ""}" class="${x === k ? "activ" : ""}">${x.lung}</a>`).join("")}</div>` + (k.id === "lp"
      ? `<div class="sus">Pașcanu, Csep, Mureșan — Aplicații practice în genetica umană · Emery's Elements, ed. 16</div>
      <h1>Ghid pentru lucrările practice de genetică</h1>
      <p class="lead">Urmează cartea de LP capitol cu capitol: ce faci la masa de lucru, ce vezi la microscop sau pe gel și cum citești rezultatul. Teoria tratată deja în ghidul de curs nu se repetă: fiecare secțiune trimite la capitolul de curs corespunzător.</p>
      <p><span class="eticheta">LP p. N</span> trimite la pagina din cartea de LP · <span class="eticheta cs">Curs: …</span> la secțiunea din ghidul de curs · <span class="eticheta em">Emery cap. N</span> la Emery · acoperire: <b>${n} din ${total}</b> rânduri de inventar (<a href="#/acoperire">vezi matricea</a>).</p>`
      : `<div class="sus">Bibliografie: Bănescu et al., 2015 · Emery's Elements, ed. 16</div>
      <h1>Ghid de pregătire teoretică la genetică</h1>
      <p class="lead">Urmează cartea de curs capitol cu capitol. Fiecare secțiune explică mecanismul, îl arată într-o figură construită din date primare și se încheie cu întrebări la care răspunzi înainte să vezi rezolvarea.</p>
      <p><span class="eticheta">Curs p. N</span> trimite la pagina din cartea de curs · <span class="eticheta em">Emery cap. N</span> la capitolul din Emery · acoperire curentă: <b>${n} din ${total}</b> rânduri de inventar (<a href="#/acoperire">vezi matricea</a>). Pentru lucrările practice: <a href="#/lp">ghidul de LP</a>.</p>`) + `<div class="grila">`;
    inv(k).forEach((c) => {
      const are = !!G.cap[c.id], p = Math.round(progres(c.id) * 100);
      h += `<${are ? `a href="#/${c.id}"` : "div"} class="cartela ${are ? "" : "indisp"}">
        <span class="nrc">${k.id === "lp" ? "LP" : "Capitolul"} ${esc(c.nr)} · p. ${c.pag[0]}–${c.pag[1]}</span><b>${esc(c.titlu)}</b>
        <small>${are ? G.cap[c.id].sectiuni.length + " secțiuni · " + G.cap[c.id].sectiuni.reduce((n, s) => n + (s.html.match(/<figure|\[\[img:|\|/g) || []).filter((x) => x !== "|").length + (s.html.match(/\[\[gal:[\s\S]*?\]\]/g) || []).reduce((k, g) => k + g.split(";;").length, 0), 0) + " figuri · " + p + "% parcurs" : "în lucru — " + c.randuri.length + " rânduri de inventar"}</small>
        <div class="bara"><i style="width:${p}%"></i></div></${are ? "a" : "div"}>`;
    });
    $("#continut").innerHTML = h + "</div>";
  }

  function capitol(id, tinta) {
    const c = G.cap[id], meta = inv().find((x) => x.id === id), k = carteDe(id), cap = k.id === "lp" ? "LP" : "Capitolul";
    if (!c) {
      $("#continut").innerHTML = `<div class="sus">${cap} ${esc(meta ? meta.nr : "")}</div><h1>${esc(meta ? meta.titlu : "Capitol inexistent")}</h1>
        <p class="lead">Capitolul nu este încă scris. Rândurile lui din inventar apar în <a href="#/acoperire">matricea de acoperire</a>.</p>`;
      return;
    }
    const g = gata(), inv2 = laLP();
    const legCurs = (ks) => (ks || []).map((x) => `<a class="eticheta cs" href="#/${x}">Curs: ${esc(titluSec(x))}</a>`).join("");
    let h = `<div class="sus">${cap} ${esc(meta.nr)} · ${k.id === "lp" ? "LP" : "curs"} p. ${meta.pag[0]}–${meta.pag[1]}</div><h1>${esc(meta.titlu)}</h1>
      <div class="surse">${meta.emery.map((e) => `<span class="eticheta em">Emery cap. ${e}</span>`).join("")}${(meta.curs || []).filter((x) => G.cap[x]).map((x) => `<a class="eticheta cs" href="#/${x}">Curs cap. ${esc(inv().find((y) => y.id === x).nr)}</a>`).join("")}</div>${extinde(c.intro || "")}`;
    c.sectiuni.forEach((s) => {
      const k2 = id + "/" + s.id;
      h += `<section id="${s.id}"><h2>${esc(s.titlu)}</h2>
        <div class="surse"><span class="eticheta">${k.pg} ${esc(s.pag)}</span>${s.emery ? `<span class="eticheta em">Emery ${esc(s.emery)}</span>` : ""}${legCurs(s.curs)}${(inv2[k2] || []).map((x) => `<a class="eticheta lpc" href="#/${x.cap}/${x.sec}">LP ${esc(inv().find((y) => y.id === x.cap).nr)}: ${esc(x.titlu)}</a>`).join("")}</div>
        ${extinde(s.html)}
        <label class="inteles ${g[k2] ? "da" : ""}"><input type="checkbox" data-k="${k2}" ${g[k2] ? "checked" : ""}> Pot explica secțiunea asta fără să mă uit</label></section>`;
    });
    if (c.test) {
      h += `<section id="test" class="test"><h2>Test adevărat / fals</h2><p>Formatul întrebărilor din Emery: fiecare afirmație se judecă separat. ${c.testNota || ""}</p>`;
      c.test.forEach((q, qi) => {
        h += `<div class="tulpina">${qi + 1}. ${q.q} ${q.sursa ? `<span class="eticheta gri">${esc(q.sursa)}</span>` : ""}</div>`;
        q.itemi.forEach((it) => {
          h += `<div class="item" data-a="${it.a ? 1 : 0}"><div>${it.t}</div><div class="but"><button data-r="1">Adevărat</button><button data-r="0">Fals</button></div>
            <div class="exp"><b>${it.a ? "Adevărat." : "Fals."}</b> ${it.e}${it.s ? ` <a href="#/${id}/${it.s}">→ secțiunea</a>` : ""}</div></div>`;
        });
      });
      h += `<div class="scor" id="scor"></div></section>`;
    }
    $("#continut").innerHTML = h;
    let nf = 0; document.querySelectorAll("#continut figure > figcaption").forEach((fc) => { nf++; fc.insertAdjacentHTML("afterbegin", `<span class="nrfig">Fig. ${k.pref}${esc(meta.nr)}.${nf}</span> `); });
    if (tinta) { const el = document.getElementById(tinta); if (el) el.scrollIntoView(); } else window.scrollTo(0, 0);
  }

  function matrice() {
    const ac = acoperire();
    let tot = 0, ok = 0, h = "";
    CARTI.forEach((k) => { h += `<h2>${k.lung}</h2>`; inv(k).forEach((c) => {
      const n = c.randuri.filter((r) => ac[r.id]).length; tot += c.randuri.length; ok += n;
      h += `<h3>${k.id === "lp" ? "LP" : "Capitolul"} ${esc(c.nr)} — ${esc(c.titlu)} <span class="stare ${n === c.randuri.length ? "ok" : "nu"}">${n}/${c.randuri.length}</span></h3>
        <div class="tw"><table><tr><th>Rând din cartea de curs</th><th class="n">Pag.</th><th>Tip</th><th>Unde e în ghid</th></tr>` +
        c.randuri.map((r) => { const a = ac[r.id]; return `<tr><td>${esc(r.titlu)}</td><td class="n">${r.pag}</td><td>${r.tip}</td><td>${a ? `<a href="#/${a.cap}/${a.sec}">${esc(a.titlu)}</a>` : '<span class="stare nu">nemapat</span>'}</td></tr>`; }).join("") +
        "</table></div>";
    }); });
    $("#continut").innerHTML = `<div class="sus">Verificare</div><h1>Matricea de acoperire</h1>
      <p class="lead">Fiecare titlu, subtitlu, figură și tabel din cartea de curs și din cartea de LP este un rând. Ghidul e complet când niciun rând nu mai e „nemapat”.</p>
      <p><b>${ok} din ${tot}</b> rânduri acoperite (${Math.round((100 * ok) / tot)}%). Titlurile figurilor și tabelelor provin din OCR-ul legendelor și pot avea mici erori de literă până la scrierea capitolului.</p>` + h;
    window.scrollTo(0, 0);
  }

  function ruta() {
    const [, id, tinta] = location.hash.split("/");
    $("#lateral").classList.remove("deschis");
    lateral(id);
    if (!id) acasa(); else if (id === "lp") acasa(CARTI[1]); else if (id === "acoperire") matrice(); else capitol(id, tinta);
  }

  G.porneste = () => {
    const t = mem.get("tema", null); if (t) document.documentElement.dataset.theme = t;
    $("#tema").onclick = () => {
      const acum = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const nou = acum === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = nou; mem.set("tema", nou);
    };
    $("#meniu").onclick = () => $("#lateral").classList.toggle("deschis");
    document.addEventListener("change", (e) => {
      const k = e.target.dataset && e.target.dataset.k; if (!k) return;
      const g = gata(); if (e.target.checked) g[k] = 1; else delete g[k]; mem.set("inteles", g);
      e.target.closest(".inteles").classList.toggle("da", e.target.checked); lateral(k.split("/")[0]);
    });
    document.addEventListener("click", (e) => {
      const b = e.target.closest(".test .item button"); if (!b) return;
      const it = b.closest(".item"); if (it.classList.contains("corect") || it.classList.contains("gresit")) return;
      it.classList.add(b.dataset.r === it.dataset.a ? "corect" : "gresit");
      const toate = document.querySelectorAll(".test .item"), r = document.querySelectorAll(".test .item.corect,.test .item.gresit"), c = document.querySelectorAll(".test .item.corect");
      $("#scor").textContent = `Corecte: ${c.length} din ${r.length} răspunse (${toate.length} afirmații în total).`;
    });
    document.addEventListener("click", (e) => {
      const lupa = $("#lupa");
      if (!lupa.hidden && (e.target === lupa || e.target.closest("#lupa button"))) { lupa.hidden = true; $("#lupa-c").innerHTML = ""; return; }
      const fig = e.target.closest("#continut figure"); if (!fig || e.target.closest("a")) return;
      const el = fig.querySelector("img, svg"); if (!el) return;
      $("#lupa-c").innerHTML = el.outerHTML + (fig.querySelector("figcaption") ? `<p>${fig.querySelector("figcaption").innerHTML}</p>` : ""); lupa.hidden = false;
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { $("#lupa").hidden = true; } });
    window.addEventListener("hashchange", ruta); ruta();
  };
})();

/* Helper pentru arbori genealogici în SVG (capitolele 7–12).
   ind(x, y, sex: m | f | ?, stare: a = afectat, p = purtător heterozigot, x = purtătoare X, n = sănătos, eticheta) */
window.GHID.ped = {
  ind(x, y, sex, st = "n", et = "", r = 15) {
    const cls = st === "a" ? "fA si" : "fcard si";
    let s = sex === "m" ? `<rect x="${x - r}" y="${y - r}" width="${2 * r}" height="${2 * r}" class="${cls}" stroke-width="1.6"/>`
      : sex === "f" ? `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" stroke-width="1.6"/>`
      : `<path d="M${x} ${y - r - 2} L${x + r + 2} ${y} L${x} ${y + r + 2} L${x - r - 2} ${y}z" class="${cls}" stroke-width="1.6"/>`;
    if (st === "p") s += sex === "m" ? `<rect x="${x - r + 1}" y="${y - r + 1}" width="${r - 1}" height="${2 * r - 2}" class="fA"/>` : `<path d="M${x} ${y - r + 1} A${r - 1} ${r - 1} 0 0 0 ${x} ${y + r - 1}z" class="fA"/>`;
    if (st === "x") s += `<circle cx="${x}" cy="${y}" r="4.5" class="fA"/>`;
    if (et) s += `<text x="${x}" y="${y + r + 16}" text-anchor="middle" class="tm" style="font-size:11px">${et}</text>`;
    return s;
  },
  cuplu(x1, x2, y, r = 15, consang = false) {
    return `<line x1="${x1 + r}" y1="${y}" x2="${x2 - r}" y2="${y}" class="si" stroke-width="1.6"/>` + (consang ? `<line x1="${x1 + r}" y1="${y + 4}" x2="${x2 - r}" y2="${y + 4}" class="si" stroke-width="1.6"/>` : "");
  },
  copii(xm, y, xs, yc, r = 15) {
    const yb = (y + yc - r) / 2;
    return `<line x1="${xm}" y1="${y}" x2="${xm}" y2="${yb}" class="si" stroke-width="1.6"/><line x1="${Math.min(...xs, xm)}" y1="${yb}" x2="${Math.max(...xs, xm)}" y2="${yb}" class="si" stroke-width="1.6"/>` + xs.map((x) => `<line x1="${x}" y1="${yb}" x2="${x}" y2="${yc - r}" class="si" stroke-width="1.6"/>`).join("");
  },
};
