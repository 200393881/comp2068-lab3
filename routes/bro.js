'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('bro', { title: 'Bro', comment: 'He is my best friend ever' });
});

module.exports = router;
