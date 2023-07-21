const http = require("http");
const port = 3000;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type", "text/html; charset=utf-8");
  const getForm = fs.readFileSync("./views/get-form.html", "utf-8");
  const postForm = fs.readFileSync("./views/post-form.html", "utf-8");
  const search = fs.readFileSync("./views/search.html", "utf-8");
  //   res.write(getForm);
  //   res.write(postForm);
  res.write(search);
  res.end();

  const query = url.parse(req.url, true);
  console.log(query.query.search);
  //   console.log(query.query.userName);
  //   console.log(query.query.password);
  //post
  //   console.log(req);
  //   let data;
  //   req.on("data", (chunk) => {
  //     console.log(chunk);
  //   });
});

server.listen(port, () => {
  console.log(`app listen on http://localhost:${port}`);
});
