var express = require('express');
var router = express.Router();
var {check} = require('express-validator')
const usersControler = require('../controler/usersControler')


router.post('/register',[
    check('email', "email crashed").notEmpty(),
    check('password', "password crashed").notEmpty(),
    check('name', "name crashed").notEmpty()
],usersControler.register);


router.post('/login', usersControler.login);


module.exports = router;
