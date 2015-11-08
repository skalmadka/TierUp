var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/teacher', function(req, res, next) {
  res.render('teacher', { title: 'Teacher' });
});

router.get('/student', function(req, res, next) {
  res.render('student', { title: 'Student' });
});


module.exports = router;
