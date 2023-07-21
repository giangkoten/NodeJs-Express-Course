const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));
//Bài 1
// app.get("/", (req, res) => {
//   res.send("<h1>This is homePage</h1>");
// });
// app.get("/overview", (req, res) => {
//   res.send("<h1>This is overview page</h1>");
// });
// app.get("/product", (req, res) => {
//   res.send("<h1>This is product page</h1>");
// });
// app.get("/*", (req, res) => {
//   res.send("<h1>PAGE NOT FOUND</h1>");
// });
//Bài 2

app.get("/api/v1/users", (req, res) => {
  let dataUSer = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.status(200).json({ message: "Successfully Registered" });
});

app.get("/api/v1/users/:id", (req, res) => {
  let dataUSer = JSON.parse(fs.readFileSync("./db.json", "utf-8")).user;
  console.log(dataUSer);
  let userIdSearch = req.params.id;
  let check = dataUSer.find((user) => user.id == userIdSearch);
  if (check) {
    res.status(200).json({ message: "Successfully Registered" });
  } else {
    res.status(404).json({ message: "Do not find" });
  }
});
app.post("/api/v1/users", (req, res) => {
  let dataUSer = JSON.parse(fs.readFileSync("./db.json", "utf-8")).user;
  let newUser = req.body;
  let check = dataUSer.find((user) => user.email == newUser.email);
  if (!check) {
    dataUSer.push(newUser);
    fs.writeFileSync("./db.json", JSON.stringify(dataUSer));
    res.status(200).json({ message: "Create successfully" });
  } else {
    res.status(200).json({ message: "User already exists" });
  }
});
app.delete("/api/v1/users/:id", (req, res) => {
  let dataUSer = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let userIdDelete = req.params.id;
  console.log(dataUSer);
  let updatedUsers = dataUSer.filter((user) => user.id != userIdDelete);

  if (updatedUsers.length == dataUSer.length) {
    res.status(404).json({ message: "User not found" });
  } else {
    fs.writeFileSync(
      "./db.json",
      JSON.stringify({ user: updatedUsers }),
      "utf-8"
    );
    res.status(200).json({ message: "User deleted successfully" });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
