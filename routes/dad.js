'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('dad', { title: 'Dad', comment: 'Some people don not believe in heroes but they haven not met my dad' });
});

module.exports = router;
