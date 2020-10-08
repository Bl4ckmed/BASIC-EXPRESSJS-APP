var express = require('express');
var router = express.Router();

var annexes = require('../controllers/annexes')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nobo_EXPRESS_APP' });
});

/* GET annexe 1 page. */
router.get('/api/p1', function(req, res, next) {
  res.render('annexe1', { title: 'Nobo_EXPRESS_APP' });
});

/* POST form variables in annexe 1 */ 
router.post('/api/p1', function(req, res){
  console.log(req.body.string);
  var chaine=req.body.string;
  var num=req.body.number; 
  
  res.send(annexes.p1(chaine, num));
  
});

/* GET annexe 2 page. */
router.get('/api/p2', function(req, res, next) {
  res.render('annexe2', { title: 'Nobo_EXPRESS_APP' });
});

/* POST form variables in annexe 1 */ 
router.post('/api/p2', function(req, res){
  console.log(req.body.string);
  var chaine=req.body.date1;
  var num=req.body.date2; 
  
  res.send(annexes.p2(date1, date1));
  
});

module.exports = router;
