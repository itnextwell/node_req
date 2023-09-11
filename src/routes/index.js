const express = require('express');
const routerElemento = require('./elemento.router');
const routerUser = require('./user.router');
const router = express.Router();
const {verifyJwt}=require('../utils/verifyJwt')

router.use('/elementos',verifyJwt, routerElemento)
router.use('/users', routerUser)

module.exports = router;