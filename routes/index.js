var express = require('express');
var router = express.Router();
var Article = require('../models/article');

var pages = ['index', 'create', 'post']


/* GET home page. */
router.get('/', function(req, res, next) {

  Article.find(null, function(err, docs){
    res.render('index', {article: docs});
  });

  });


router.get('/:page', function(req, res, next){
    var page = req.params.page
    if(pages.indexOf(page) == -1){
      res.render('error', {message: 'Page not Found! Check your Spelling'})
    }

    res.render(page, null)

});


router.post('/:page', function(req, res, next){
  var page = req.params.page
  if(pages.indexOf(page) == -1){
    res.render('error', {message: 'Page not Found! Check your Spelling'})
  }

  var params = req.body
  Article.create(params, function(err, articles){
    if(err){
      console.log('FAILED')
      res.render('error', {message: 'Something weird happend'})
      return
    }
    console.log('POSTED')
    res.redirect('/')
  })


});

router.get('/:page', function(req, res, next) {

    var page = req.params.page
    if (pages.indexOf(page) == -1) {
        res.render('error', {
            message: 'Check your Spellin boooYYY!'
        })
        return
      }

    var id = req.query.id // Id number of Post we want to render
    Article.findById(id, function(err, post) {
        if (err) {
            res.render('error', {
                message: 'Page not found'
            })
            return
        }

        res.render(page, post)

    })

});




module.exports = router;
