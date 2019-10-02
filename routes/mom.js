'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('mom', { title: 'Mom', comment: 'She is one of the best mom in the world' });
});

module.exports = router;
