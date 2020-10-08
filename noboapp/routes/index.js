var express = require('express');
var router = express.Router();

var annexes = require('../controllers/annexes')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST form variables */ 
router.post('/', function(req, res){
  console.log(req.body.string);
  var chaine=String(req.body.string);
  var num=parseInt(req.body.number); 
  if (num>=0 && num<=20 && chaine.length>0 )
  {
    var a=annexes.p1(chaine, num)
    res.send("The result is:" + String(a));
  } 
  else 
  {
    res.send("Input conditions not respected");
  }
});
/* GET SECOND PAGE */
router.get('/Annexe2', function(req, res){
   res.send("Hello World!");
});


module.exports = router;
