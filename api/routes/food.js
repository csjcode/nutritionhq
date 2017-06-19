var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Food = require('../models/Food.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  Food.find(function (err, foods) {
    if (err) return next(err);
    res.json(foods);
  });
});

module.exports = router;
