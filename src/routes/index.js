var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello world',msg:'欢迎加入美呗技术部'});
  console.log("执行",next);
});

module.exports = router;
