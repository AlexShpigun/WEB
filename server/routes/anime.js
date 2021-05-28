var express = require('express');
var router = express.Router();
var animeControler = require('../controler/animeControler')

/* GET users listing. */
router.get('/find', animeControler.findInYourAnimes);
router.get('/', animeControler.getYourAnimes);


module.exports = router;