const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: false }));
//Express là gì: Là một Framework server được xây dựng dựa trên nền tảng nodeJS
//Express giúp chúng ta dễ dangd sử dụng các API, hàm có sẵn để viết API dễ dàng hơn
//Express hoạt động nhanh, câu lệnh ngắn gọn

//Khái niệm routing
// Cấu trúc:
// app.[GET,POST,PUSH,DELETE,PATCH]('/route',()=>{logic Code})
const Datauser = {
  users: [
    {
      name: "john",
      address: "Hà Nội",
      phone: 123456789,
    },
    {
      name: "Giang",
      address: "Hà Nội",
      phone: 12356523,
    },
    {
      name: "Lam",
      address: "TN",
      phone: 92343254,
    },
  ],
};
// app.get("/send-hello", (req, res) => {
//   res.send("<h1>Hello World!</h1>");
// });
// app.get("/json/:id", (req, res) => {
//   // req: là một obj chứa toàn bộ thông tin người dùng gửi về cho server
//   //res : là một obj chứa các phương thức mà server gửi về cho client
//   console.log(req.query);

//   res.json(users);

//   //Định nghĩa: Query : domain/key1=value1 && key2=value2 && keyN=valueN
//   //Định nghĩa params: domain/users/id || name || ...
// });
app.get("/", (req, res) => {
  res.send("<h1>home page</h1>");
});
app.get("/product", (req, res) => {
  res.send("<h1>product page</h1>");
});
app.get("/detail", (req, res) => {
  res.send("<h1>Detail page</h1>");
});
app.post("/products", (req, res) => {
  const data = req.body;
  Datauser.users.push(data);
  res.send(Datauser);
  console.log(req.body);
});

//Tạo 1 file data.json chứa data users như trên :
//Sau khi method POST, log ra data
//Khi đã đọc được data từ req.body => sử dụng writleFileSync để thêm dữ liệu vào file data.json
const dataexercise = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

app.post("/detail", (req, res) => {
  const newUser = req.body;
  dataexercise.users.push(newUser);
  fs.writeFileSync("./data.json", JSON.stringify(dataexercise));
  res.send("Post sucess");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
