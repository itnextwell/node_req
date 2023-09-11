const catchError = require('../utils/catchError');
const Elemento = require('../models/Elemento');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const userId=req.user.id
    const results = await Elemento.findAll({
        include:[User],
        attributes:{exclude:['createdAt','updatedAt']},
        where:{userId}
    
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const userId=req.user.id
    //traer un usuario
    // const {description,amount,justification,responsible,supplier,priority}=req.body
    // const body={description,amount,justification,responsible,supplier,priority,userId}
    //opción 2 para traer el usuario 
    const body={...req.body, userId}
    const result = await Elemento.create(body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Elemento.findByPk(id,{
        include:[User],
        attributes:{exclude:['createdAt','updatedAt']}
    
    });
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Elemento.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Elemento.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}