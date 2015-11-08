var express = require('express');
var router = express.Router();
var database = require('../database');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/teacher', function(req, res, next) {
  res.render('teacher', { title: 'Teacher' });
});

router.get('/student_list', function(req, res, next) {
  res.render('student_list', { title: 'Students' });
});

router.use('/question_list', function(req, res, next) {
    database.Question.find({}, function(err, questions) {
        if (err) {
            res.status(500);
        }
        else {
            console.log("questions:",JSON.stringify(questions));
            res.render('question_list', { title: 'Questions', questions: questions });
        }
    });
});

router.use('/add_question', function(req, res, next) {
  res.render('add_question', { title: 'Add Question' });
});

router.use('/submit_add_question', function(req, res, next) {
    var submit_state = req.body.submit;
    if(submit_state == "submit_cancel")
        res.render('question_list', { title: 'Questions', questions: questions });
    else {
        var questionObj = {};
        questionObj.question = req.body.question;
        questionObj.choices = [];
        questionObj.choices[0] = req.body.choices0;
        questionObj.choices[1] = req.body.choices1;
        questionObj.choices[2] = req.body.choices2;
        questionObj.choices[3] = req.body.choices3;
        questionObj.answer = req.body.answer;
        questionObj.subject = req.body.subject;
        questionObj.tier = req.body.tier;
        questionObj.tag = [];
        questionObj.tag[0] = req.body.tag0;
        questionObj.tag[1] = req.body.tag1;
        questionObj.tag[2] = req.body.tag2;
        questionObj.practice = req.body.practice;

        questionObj.save(function(err) {
            if (err) {
                res.status(500);
            }
            else {
                if(submit_state == "submit_add_done")
                    res.redirect('question_list', { title: 'Questions', questions: questions });
                else
                    res.redirect('add_question', { title: 'Questions', questions: questions });
            }
        });
    }
});


router.get('/student', function(req, res, next) {
  res.render('student', { title: 'Student' });
});

module.exports = router;
