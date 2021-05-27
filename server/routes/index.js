var express = require('express');
var pool = require('../db/db.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hui");
});

module.exports = router;
