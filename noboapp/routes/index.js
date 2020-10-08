var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('test');
  res.render('index', { title: 'Express' });
});

/* POST form variables */ 
router.post('/', function(req, res){
  console.log(req.body.string);
  var chaine=req.body.string
  var num=req.body.number 
  res.send("recieved your request!");
});
/* GET SECOND PAGE */
router.get('/Annexe2', function(req, res){
   res.send("Hello World!");
});


module.exports = router;
