var express = require('express');
var router = express.Router();
var Article = require('../models/article');




/* GET home page. */
router.get('/', function(req, res, next) {

  Article.find(function(err, docs){
    res.render('index', {article: docs});


  });







});




module.exports = router;
