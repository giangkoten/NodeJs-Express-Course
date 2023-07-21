const express = require("express");
const app = express();
const port = 3000;

const user = {
  userName: "giangggz",
  password: 123321,
};
const check = {
  checkName: "giangggz",
  checkPassword: 123321,
};

const middleWareCheckLogin = (req, res, next) => {
  if (
    user.userName == check.checkName &&
    user.password == check.checkPassword
  ) {
    next();
  } else {
    res.redirect("/login");
  }
};
app.get("/", (req, res) => {
  res.send("<h1>this is homePage</h1>");
});
app.get("/payment", middleWareCheckLogin, (req, res) => {
  res.send("<h1>this is paymentPage</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>this is loginPage</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
