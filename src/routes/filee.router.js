
const { getAll, create } = require('../controllers/filee.controller');
const express = require('express');
const upload = require('../utils/multer');

const routerFilee = express.Router();

routerFilee.route('/')
    .get(getAll)
    .post(upload.single('archivo'), create)

module.exports = routerFilee;