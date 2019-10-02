'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('sister', { title: 'Sister', comment: 'Sisters are for sharing laughter and wiping tears' });
});

module.exports = router;
