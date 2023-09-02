const express = require('express');
const routerElemento = require('./elemento.router');
const routerUser = require('./user.router');
const router = express.Router();


router.use('/elementos',routerElemento)
router.use('/users', routerUser)

module.exports = router;