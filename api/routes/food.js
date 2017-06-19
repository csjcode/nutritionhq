var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Food = require('../models/Food.js');


router.get('/name/:name', function(req, res, next) {
  r = new RegExp(req.params.name,'i');
  Food.find({ 'Long_Desc': {$regex:r} }, function (err, food) {
    if (err) return next(err);
    res.json(food);
  });
});

router.get('/id/:id', function(req, res, next) {
  Food.findOne({ 'NDB_No': req.params.id }, function (err, food) {
    if (err) return next(err);
    res.json(food);
  });
});

/* GET foods listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  Food.find(function (err, foods) {
    if (err) return next(err);
    res.json(foods);
  });
});



module.exports = router;
