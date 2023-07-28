const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function () {
  console.log(`Server Start =============>${port}`);
});

//http://localhost:3000
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/pages/index.html");
});

//http://localhost:3000/about
app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/pages/about.html");
});
