// node tools/verifica.js — audit de acoperire: fiecare rând de inventar (curs + LP) trebuie să aibă o secțiune în ghid
const fs = require("fs"), path = require("path"), R = path.dirname(__dirname);
global.window = {}; const caps = {}; global.GHID = { capitol: (c) => (caps[c.id] = c), ped: { ind: () => "", cuplu: () => "", copii: () => "" } };
require(R + "/date/inventar.js"); require(R + "/date/inventar_lp.js");
const img = (() => { try { return JSON.parse(fs.readFileSync(R + "/date/imagini.js", "utf8").split("=", 1 + 0).length && fs.readFileSync(R + "/date/imagini.js", "utf8").replace(/^[^=]*=\s*/, "").replace(/;\s*$/, "")); } catch (e) { return {}; } })();
fs.readdirSync(R + "/capitole").filter((f) => f.endsWith(".js")).forEach((f) => require(R + "/capitole/" + f));
const total = {};
[["CURS", window.INVENTAR], ["LP", window.INVENTAR_LP]].forEach(([nume, INV]) => {
  let tot = 0, ok = 0;
  INV.forEach((c) => {
    const k = caps[c.id], cov = new Set(k ? k.sectiuni.flatMap((s) => s.acopera || []) : []);
    const lipsa = c.randuri.filter((r) => !cov.has(r.id)); tot += c.randuri.length; ok += c.randuri.length - lipsa.length;
    const html = k ? (k.intro || "") + k.sectiuni.map((s) => s.html).join("") : "";
    const fig = (html.match(/<figure/g) || []).length + (html.match(/\[\[img:/g) || []).length + (html.match(/\[\[gal:[\s\S]*?\]\]/g) || []).reduce((n, g) => n + g.split(";;").length, 0);
    const imgs = [...html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]).filter((p) => !fs.existsSync(R + "/" + p));
    const slugs = [...html.matchAll(/\[\[img:([^|\]]+)\|/g), ...[...html.matchAll(/\[\[gal:([\s\S]*?)\]\]/g)].flatMap((m) => m[1].split(";;").map((x) => [0, x.split("|")[0]]))].map((m) => m[1].trim()).filter((s) => !img[s]);
    const straine = k ? [...cov].filter((id) => !c.randuri.some((r) => r.id === id)) : [];
    const leg = k ? k.sectiuni.flatMap((s) => s.curs || []).filter((x) => { const [a, b] = x.split("/"); return !caps[a] || (b && !caps[a].sectiuni.some((s) => s.id === b)); }) : [];
    console.log(`${c.id.padEnd(5)} ${k ? "scris  " : "LIPSĂ  "} ${c.randuri.length - lipsa.length}/${c.randuri.length} rânduri · ${k ? k.sectiuni.length : 0} secțiuni · ${fig} figuri` +
      (lipsa.length ? "\n      nemapate: " + lipsa.map((r) => r.id.split("-")[1] + " " + r.titlu.slice(0, 40)).join(" | ") : "") +
      (imgs.length ? "\n      IMAGINI LIPSĂ: " + imgs.join(", ") : "") + (slugs.length ? "\n      SLUG-URI COMMONS LIPSĂ: " + slugs.join(", ") : "") +
      (straine.length ? "\n      ID-URI INEXISTENTE: " + straine.join(", ") : "") + (leg.length ? "\n      LEGĂTURI CURS RUPTE: " + leg.join(", ") : ""));
  });
  console.log(`TOTAL ${nume} ${ok}/${tot}\n`);
});
