var express = require("express");
var router = express.Router();
const module =require('../models/board_mysql')
// 메인페이지
router.get("/", function (req, res, next) {
  res.redirect("/board");
});
// 목록조회
router.get("/board", function (req, res, next) {
  // res.render('board/list', { title: '게시물 목록' });
  ModuleResolutionKind.render('board/list', {title:'게시물 목록', list})

  m
});
// 등록화면 요청
router.get("/board/new", function (req, res, next) {
  res.render('board/write', { title: '글쓰기' });
});
// 등록 요청
router.post("/board/new", function (req, res, next) {
  res.render('board/result', { title: '등록 결과' });
});
// 상세조회
router.get("/board/:no", function (req, res, next) {
  res.render('board/view', { title: '내용 조회' });
});
// 삭제
router.post("/board/:no", function (req, res, next) {
  res.redirect('/');
});

module.exports = router; 
