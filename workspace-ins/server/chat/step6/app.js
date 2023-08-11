const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const nocache = require('nocache');

const indexRouter = require('./routes/index');
const indexRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  cookie: { maxAge: 1000 * 60 * 60 * 2 },
  secret: 'sometext',
  rolling: true,
  resave: false,
  saveUninitialized: false
}));

app.use(nocache());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(indexRouter);

app.use(function(req, res, next) {
  let error = new Error(req.url + ' 파일을 찾을 수 없습니다.');
  error.status = 404;
  next(error);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;

  err.status = err.status || 500;
  res.render('error');
});

module.exports = app;
