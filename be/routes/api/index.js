var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('나는 어떤 api입니다.');
});

module.exports = router;
