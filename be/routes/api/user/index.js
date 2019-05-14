var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function(req, res, next) {
  const us = [
    {
      name: '박준우',
      age: 29
    },
    {
      name: '이가온',
      age: 28
    }
  ];

  res.send({ users: us });
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;

