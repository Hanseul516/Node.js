const express = require("express"); //서버모듈
const app = express(); //객체
const port = 3000; //접속포트

app.listen(port, function () {
  console.log(`Server Start =================> ${port}`); //포트번호를 보려고 ` 함
});

//localhost:3000
app.get("/", function (req, res) {
  //req - 아이디, 비밀번호 ~~~~

  res.send(`
    <h1>hello main page</h1>
    <h1>사과</h1>
    <h1>바나나</h1>
    <h1>딸기</h1>
    <h1>샤인머스켓</h1>
    `);
});

//localhost:3000/apple
app.get("/apple", function (req, res) {
  console.log("apple OK");
});

//localhost:3000/abc/xyz/banana
app.get("/abc/xyz/banana", function (req, res) {
  console.log("banana OK");
});
