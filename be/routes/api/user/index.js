var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function(req, res, next) {
  const us = [
    {
      name: 'park',
      age: 10
    },
    {
      name: 'lee',
      age: 9
    }
  ];

  res.send({users: us});
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api는 없습니다만..'));
});

module.exports = router;

