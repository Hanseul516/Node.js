// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "106.246.114.78",
  user: "node",
  password: 'node'
  database: "board",
  port: 33306
});

module.exports = {
  // 게시물 목록 조회
  list: function(cb){
    let sql = `select * from board order by no desc`;
    // const list = connection.query(sql);
    // return list;

    connection.query(sql, function(err,results){
      cb(results);
    })
  }
  list: function () {
    const list = boardList;
    return list;
  },
  // 게시물 상세 조회
  show: function (no) {
    const article = boardList[no];
    return article;
  },
  // 게시물 등록
  create: function (article) {
    return 2;
  },
  // 게시물 삭제
  remove: function (no) {
    return 1;
  },
};
