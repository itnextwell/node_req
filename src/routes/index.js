const express = require('express');
const routerElemento = require('./elemento.router');
const routerUser = require('./user.router');
const router = express.Router();
const {verifyJwt}=require('../utils/verifyJwt');
const routerRequest = require('./request.router');

router.use('/elementos',verifyJwt, routerElemento)
router.use('/users', routerUser)
router.use('/requests',verifyJwt,routerRequest)

module.exports = router;