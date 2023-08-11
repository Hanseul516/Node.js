var express = require('express');
var router = express.Router();
const model = require('../models/board_mysql');

// 메인페이지
router.get('/', function(req, res, next) {
  res.redirect('/board');
});
// 목록 조회
router.get('/board', async function(req, res, next) {
  const list = await model.list();
  res.render('board/list', { title: '게시물 목록', list });

  // model.list(function(list){
  //   res.render('board/list', { title: '게시물 목록', list });
  // });
});
// 등록 화면 요청
router.get('/board/new', function(req, res, next) {
  res.render('board/write', { title: '글쓰기' });
});
// 등록 요청
router.post('/board/new', async function(req, res, next) {
  const no = await model.create(req.body);
  res.render('board/result', { title: '등록 결과', no });
});
// 상세 조회
router.get('/board/:no', async function(req, res, next) {
  const no = Number(req.params.no);
  const article = await model.show(no);
  res.render('board/view', { title: '내용 조회', article });
});
// 삭제
router.delete('/board/:no', async function(req, res, next) {
  const no = Number(req.params.no);
  await model.remove(no);
  res.redirect('/');
});

module.exports = router;
