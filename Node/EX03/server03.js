const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function () {
  console.log(`Server Start =============>${port}`);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "./pages/index.html");
});

app.get("/about", function(req, res) {
  res.sendFile(__dirname + "./pages/about.html");
});
