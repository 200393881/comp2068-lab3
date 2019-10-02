'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Pujan Amin', comment: 'I am Developer, believe in Simplicity' });
});

module.exports = router;
