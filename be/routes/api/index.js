var express = require('express');
var router = express.Router();
var createError = require('http-errors');

router.all('*', function(req, res, next) {
  console.log(req.headers);
  console.log("req.path : ", req.path);
  if(req.path === '/xxx') {
    return res.send({연습:"성공"})
  }
  next();
});

router.use('/user', require('./user'));

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없음요!!!!!'));
});

module.exports = router;
