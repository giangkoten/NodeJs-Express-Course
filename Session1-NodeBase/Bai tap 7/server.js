const http = require("http");
const port = 3010;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  let readOverview = fs.readFileSync("./view/view.html", "utf8");
  let product = fs.readFileSync("./view/product.html", "utf8");
  const dataJson = JSON.parse;
  const { query, pathname } = url.parse(req.url, true);
  if (pathname == "/" || pathname == "/overview") {
    res.write(readOverview);
  } else if (pathname == "/product") {
    res.write(product);
  } else {
    console.log("404");
  }
  res.end();
});
server.listen(port, () => {
  console.log(`listening on port ${port} `);
});
