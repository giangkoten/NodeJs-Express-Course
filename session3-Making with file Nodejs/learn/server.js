const http = require("http");
const port = 3000;
const url = require("url");
const fs = require("fs");
const nodeStatic = require("node-static");
const file = new nodeStatic.Server("./public");

const server = http.createServer((req, res) => {
  file.serve(req, res);
  //Tạo ra 3 file txt (firtData,midData, lastData) trong folder conntent cùng cấp với server.js
  //1.Đọc dữ liệu từ 3 file đó
  //2.Ghi dữ liệu từ 3 file vào 1 file mới là finalData
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, "Content-Type", "text/html", "charset=utf-8");
  const firtData = fs.readFileSync("./txt/firtData.txt", "utf-8");
  const midData = fs.readFileSync("./txt/midData.txt", "utf-8");
  const lastData = fs.readFileSync("./txt/lastData.txt", "utf-8");

  //Ghi data vào file finalData.txt
  // const finalData = `${firtData} ${midData} ${lastData}`;
  // fs.writeFileSync("./txt/finalData.txt", finalData);

  //Read template
  // let readContentHtml = fs.readFileSync("./views/content.html", "utf8");
  // res.writeHead(200, { "conntent-Type": "text/html ; charset=utf-8" });
  // res.write(readContentHtml);

  console.log(firtData);
  //VD: thêm một chuỗi string vào fistData và lưu lại
  let newData = "Nic to meet you";
  let newFirstDAta = `${firtData} ${newData}`;
  console.log(newFirstDAta);
  fs.writeFileSync("./txt/firtData.txt", newFirstDAta);
  res.end();
});

server.listen(port, () => {
  console.log(`app to listen http://localhost:${port}`);
});
