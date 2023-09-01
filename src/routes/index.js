const express = require('express');
const routerElemento = require('./elemento.router');
const router = express.Router();


router.use('/elementos',routerElemento)

module.exports = router;