var bodyParser = require('body-parser');
var express = require('express');

var database = require('../database');
var router = express.Router();

router.put('/', bodyParser.json(), function(req, res) {
    var question = new database.Question(req.body);

    question.save(function(err) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;
