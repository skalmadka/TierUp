var bodyParser = require('body-parser');
var express = require('express');

var database = require('../database');
var router = express.Router();

router.get('/', function(req, res) {
    database.Question.find({}, function(err, questions) {
        if (err) {
            res.status(500);
        }
        else {
            res.status(200).json(questions);
        }
    });
});

router.put('/', bodyParser.json(), function(req, res) {
    var question = new database.Question(req.body);

    question.save(function(err) {
        if (err) {
            res.status(500);
        }
        else {
            res.status(200);
        }
    });
});

module.exports = router;
