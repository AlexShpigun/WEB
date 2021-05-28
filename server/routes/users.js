var express = require('express');
var router = express.Router();
const usersControler = require('../controler/usersControler')

/* GET users listing. */
router.post('/register',usersControler.register);
router.post('/login', usersControler.login);
router.get('/', usersControler.check);


module.exports = router;
