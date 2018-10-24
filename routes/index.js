var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexHotel', { title: 'Express' });
});

router.get('/:clang', function(req, res, next) {
  console.log(req.param("_______: "+clang));
  res.render('index', { title: 'Express' });
});

module.exports = router;
