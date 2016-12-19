var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('in get tasks route');
  res.sendStatus(200);
});

module.exports = router;
