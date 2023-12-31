const catchError = require('../utils/catchError');
const Request = require('../models/Request');
const Elemento = require('../models/Elemento');

const getAll = catchError(async(req, res) => {
    const userId=req.user.id
    const userRol=req.user.rol
    const orderOption = [['createdAt', 'DESC']]

    const results = await Request.findAll({
        include:[Elemento],
        attributes:{exclude:['createdAt','updatedAt']},
        order: orderOption,
     
    });
    return res.json(results);
    
    
    
});

const create = catchError(async(req, res) => {
    const userRol=req.user.rol
    if(userRol==='admin'){
        const { description, isApproved, elementoId } = req.body;
    const existingRequest = await Request.findOne({
        where: {
            elementoId,
            isProcessed: true
        }
    });
    if (existingRequest) {
        return res.status(400).json({ error: 'Esta solicitud ya ha sido procesada.' });
    }
    const result = await Request.create({
        description,
        isApproved,
        elementoId,
        isProcessed: true
    });

    return res.status(201).json(result);
    // const result = await Request.create(req.body);
    // return res.status(201).json(result);
    }

    // const { description, isApproved, elementoId } = req.body;
    // const existingRequest = await Request.findOne({
    //     where: {
    //         elementoId,
    //         isProcessed: true
    //     }
    // });
    // if (existingRequest) {
    //     return res.status(400).json({ error: 'Esta solicitud ya ha sido procesada.' });
    // }
    // const result = await Request.create({
    //     description,
    //     isApproved,
    //     elementoId,
    //     isProcessed: true
    // });

    // return res.status(201).json(result);
    // const result = await Request.create(req.body);
    // return res.status(201).json(result);
    

    
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