var express = require('express');
var router = express.Router();
var createError = require('http-errors');

router.all('*', function(req, res, next) {
  console.log(req.headers);
  console.log("req.path : ", req.path);
  if(req.path === '/xxx') {
    return res.send({연습:"성공"})
  }
  req.x = '보안인증통과'
  next();
});

router.all('*', function(req, res, next) {
  req.x = req.x + ' 2번째 인증 또한 통과';
  next();
});

router.all('*', function(req, res, next) {
  res.send({ status : req.x})
});

router.use('/user', require('./user'));

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없음요!!!!!'));
});

module.exports = router;
