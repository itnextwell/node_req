const { getAll, create, getOne, remove, update } = require('../controllers/request.controller');
const express = require('express');

const routerRequest = express.Router();

routerRequest.route('/')
    .get(getAll)
    .post(create);

routerRequest.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerRequest;