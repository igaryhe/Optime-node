var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

router.post('/', function(req, res, next) {
});

module.exports = router;