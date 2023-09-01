const { getAll, create, getOne, remove, update } = require('../controllers/elemento.controller');
const express = require('express');

const routerElemento = express.Router();

routerElemento.route('/')
    .get(getAll)
    .post(create);

routerElemento.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerElemento;