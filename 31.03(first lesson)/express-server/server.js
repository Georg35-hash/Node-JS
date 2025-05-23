const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("hello world from about page");
});

app.listen(3000, () => {
  console.log(`server is listening on port ${port}`);
});
