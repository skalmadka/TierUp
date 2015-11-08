var express = require('express');

var router = express.Router();

router.use('/question', require('./question'));

module.exports = router;
