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

  const inv = () => window.INVENTAR || [];
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
    let h = "<h4>Capitole (ordinea din curs)</h4>";
    inv().forEach((c) => {
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

  function acasa() {
    const total = inv().reduce((n, c) => n + c.randuri.length, 0);
    const ac = Object.keys(acoperire()).length;
    let h = `<div class="sus">Bibliografie: Bănescu et al., 2015 · Emery's Elements, ed. 16</div>
      <h1>Ghid de pregătire teoretică la genetică</h1>
      <p class="lead">Urmează cartea de curs capitol cu capitol. Fiecare secțiune explică mecanismul, îl arată într-o figură construită din date primare și se încheie cu întrebări la care răspunzi înainte să vezi rezolvarea.</p>
      <p><span class="eticheta">Curs p. N</span> trimite la pagina din cartea de curs · <span class="eticheta em">Emery cap. N</span> la capitolul din Emery · acoperire curentă: <b>${ac} din ${total}</b> rânduri de inventar (<a href="#/acoperire">vezi matricea</a>).</p>
      <div class="grila">`;
    inv().forEach((c) => {
      const are = !!G.cap[c.id], p = Math.round(progres(c.id) * 100);
      h += `<${are ? `a href="#/${c.id}"` : "div"} class="cartela ${are ? "" : "indisp"}">
        <span class="nrc">Capitolul ${esc(c.nr)} · p. ${c.pag[0]}–${c.pag[1]}</span><b>${esc(c.titlu)}</b>
        <small>${are ? G.cap[c.id].sectiuni.length + " secțiuni · " + p + "% parcurs" : "în lucru — " + c.randuri.length + " rânduri de inventar"}</small>
        <div class="bara"><i style="width:${p}%"></i></div></${are ? "a" : "div"}>`;
    });
    $("#continut").innerHTML = h + "</div>";
  }

  function capitol(id, tinta) {
    const c = G.cap[id], meta = inv().find((x) => x.id === id);
    if (!c) {
      $("#continut").innerHTML = `<div class="sus">Capitolul ${esc(meta ? meta.nr : "")}</div><h1>${esc(meta ? meta.titlu : "Capitol inexistent")}</h1>
        <p class="lead">Capitolul nu este încă scris. Rândurile lui din inventar apar în <a href="#/acoperire">matricea de acoperire</a>.</p>`;
      return;
    }
    const g = gata();
    let h = `<div class="sus">Capitolul ${esc(meta.nr)} · curs p. ${meta.pag[0]}–${meta.pag[1]}</div><h1>${esc(meta.titlu)}</h1>
      <div class="surse">${meta.emery.map((e) => `<span class="eticheta em">Emery cap. ${e}</span>`).join("")}</div>${c.intro || ""}`;
    c.sectiuni.forEach((s) => {
      const k = id + "/" + s.id;
      h += `<section id="${s.id}"><h2>${esc(s.titlu)}</h2>
        <div class="surse"><span class="eticheta">Curs p. ${esc(s.pag)}</span>${s.emery ? `<span class="eticheta em">Emery ${esc(s.emery)}</span>` : ""}</div>
        ${s.html}
        <label class="inteles ${g[k] ? "da" : ""}"><input type="checkbox" data-k="${k}" ${g[k] ? "checked" : ""}> Pot explica secțiunea asta fără să mă uit</label></section>`;
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
    if (tinta) { const el = document.getElementById(tinta); if (el) el.scrollIntoView(); } else window.scrollTo(0, 0);
  }

  function matrice() {
    const ac = acoperire();
    let tot = 0, ok = 0, h = "";
    inv().forEach((c) => {
      const n = c.randuri.filter((r) => ac[r.id]).length; tot += c.randuri.length; ok += n;
      h += `<h3>Capitolul ${esc(c.nr)} — ${esc(c.titlu)} <span class="stare ${n === c.randuri.length ? "ok" : "nu"}">${n}/${c.randuri.length}</span></h3>
        <div class="tw"><table><tr><th>Rând din cartea de curs</th><th class="n">Pag.</th><th>Tip</th><th>Unde e în ghid</th></tr>` +
        c.randuri.map((r) => { const a = ac[r.id]; return `<tr><td>${esc(r.titlu)}</td><td class="n">${r.pag}</td><td>${r.tip}</td><td>${a ? `<a href="#/${a.cap}/${a.sec}">${esc(a.titlu)}</a>` : '<span class="stare nu">nemapat</span>'}</td></tr>`; }).join("") +
        "</table></div>";
    });
    $("#continut").innerHTML = `<div class="sus">Verificare</div><h1>Matricea de acoperire</h1>
      <p class="lead">Fiecare titlu, subtitlu, figură și tabel din cartea de curs este un rând. Ghidul e complet când niciun rând nu mai e „nemapat”.</p>
      <p><b>${ok} din ${tot}</b> rânduri acoperite (${Math.round((100 * ok) / tot)}%). Titlurile figurilor și tabelelor provin din OCR-ul legendelor și pot avea mici erori de literă până la scrierea capitolului.</p>` + h;
    window.scrollTo(0, 0);
  }

  function ruta() {
    const [, id, tinta] = location.hash.split("/");
    $("#lateral").classList.remove("deschis");
    lateral(id);
    if (!id) acasa(); else if (id === "acoperire") matrice(); else capitol(id, tinta);
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
    window.addEventListener("hashchange", ruta); ruta();
  };
})();
