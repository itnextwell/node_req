const catchError = require('../utils/catchError');
const Request = require('../models/Request');
const Elemento = require('../models/Elemento');

const getAll = catchError(async(req, res) => {
    console.log(req.user)
    const results = await Request.findAll({
        include:[Elemento],
        attributes:{exclude:['createdAt','updatedAt']},
    
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const elementId=req.elemento
    console.log(elementId)
    
    const result = await Request.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Request.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Request.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Request.update(
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