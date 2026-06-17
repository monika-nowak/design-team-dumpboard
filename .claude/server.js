// Minimalny statyczny serwer do testów podglądu (tylko na czas dev).
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = "/Users/monikanowak/Documents/Claude/Dumpboard";
const PORT = 8753;
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
                ".json": "application/json", ".svg": "image/svg+xml",
                ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
                ".ttf": "font/ttf", ".woff2": "font/woff2" };

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.join(ROOT, p);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end("not found"); return; }
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",   // tylko dev: zawsze świeży plik przy testach
    });
    res.end(data);
  });
}).listen(PORT, () => console.log("static server on " + PORT));
