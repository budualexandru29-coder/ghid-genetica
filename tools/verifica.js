// node tools/verifica.js — audit de acoperire: fiecare rând de inventar trebuie să aibă o secțiune în ghid
const fs = require("fs"), path = require("path"), R = path.dirname(__dirname);
global.window = {}; const caps = {}; global.GHID = { capitol: (c) => (caps[c.id] = c) };
require(R + "/date/inventar.js");
fs.readdirSync(R + "/capitole").filter((f) => f.endsWith(".js")).forEach((f) => require(R + "/capitole/" + f));
let tot = 0, ok = 0;
window.INVENTAR.forEach((c) => {
  const k = caps[c.id], cov = new Set(k ? k.sectiuni.flatMap((s) => s.acopera || []) : []);
  const lipsa = c.randuri.filter((r) => !cov.has(r.id)); tot += c.randuri.length; ok += c.randuri.length - lipsa.length;
  const fig = k ? k.sectiuni.reduce((n, s) => n + (s.html.match(/<figure/g) || []).length, 0) : 0;
  const imgs = k ? k.sectiuni.flatMap((s) => [...s.html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1])).filter((p) => !fs.existsSync(R + "/" + p)) : [];
  const straine = k ? [...cov].filter((id) => !c.randuri.some((r) => r.id === id)) : [];
  console.log(`${c.id.padEnd(5)} ${k ? "scris  " : "LIPSĂ  "} ${c.randuri.length - lipsa.length}/${c.randuri.length} rânduri · ${k ? k.sectiuni.length : 0} secțiuni · ${fig} figuri` +
    (lipsa.length ? "\n      nemapate: " + lipsa.map((r) => r.id.split("-")[1] + " " + r.titlu.slice(0, 40)).join(" | ") : "") +
    (imgs.length ? "\n      IMAGINI LIPSĂ: " + imgs.join(", ") : "") + (straine.length ? "\n      ID-URI INEXISTENTE: " + straine.join(", ") : ""));
});
console.log(`TOTAL ${ok}/${tot}`);
