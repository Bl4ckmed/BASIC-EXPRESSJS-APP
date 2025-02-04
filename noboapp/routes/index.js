var express = require('express');
var router = express.Router();

var annexes = require('../controllers/annexe1')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nobo_EXPRESS_APP' });
});

/* GET annexe 1 page. */
router.get('/api/p1', function(req, res, next) {
  res.render('annexe1', { title: 'Nobo_EXPRESS_APP' });
});

/* requete POST des variables pour annexe 1 */ 
router.post('/api/p1', function(req, res){
  console.log(req.body.string);
  var chaine=req.body.string;
  var num=req.body.number; 
  
  res.send(annexes.p1(chaine, num));
  
});
var annexes2= require('../controllers/annexe2')

/* GET annexe 2 page. */
router.get('/api/p2', function(req, res, next) {
  res.render('annexe2', { title: 'Nobo_EXPRESS_APP' });
});

/* requete POST des variables pour annexe 2 */ 
router.post('/api/p2', function(req, res){
  console.log(req.body);
  var date1=req.body.date1;
  var date2=req.body.date2; 
  
  res.send(annexes2.p2(date1, date2));
  
});

module.exports = router;
