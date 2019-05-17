var express = require('express');
var createError = require('http-errors');
var router = express.Router();

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

router.get('/', function(req, res, next) {
  res.send({users: us});
});

router.post('/', function(req, res, next) {
  res.send({success: true});
});

router.put('/', function(req, res, next) {
  res.send({success: true});
});

router.delete('/', function(req, res, next) {
  res.send({success: true});
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api는 없습니다만..'));
});

module.exports = router;

