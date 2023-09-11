const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controller');
const express = require('express');
const {verifyJwt}=require("../utils/verifyJwt")
const routerUser = express.Router();
//Rutas estaticas
routerUser.route('/')
    .get(verifyJwt,getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

//----------------------------
    
//Rutas dinamicas
routerUser.route('/:id')
    .get(verifyJwt,getOne)
    .delete(verifyJwt,remove,)
    .put(verifyJwt,update);

module.exports = routerUser;