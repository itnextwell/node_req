const catchError = require('../utils/catchError');
const Elemento = require('../models/Elemento');
const User = require('../models/User');
const Request = require('../models/Request');


const getAll = catchError(async(req, res) => {
    const userId=req.user.id
    const userRol=req.user.rol
    
    if(userRol==='admin'){
        const results = await Elemento.findAll({
            include:[Request],
            attributes:{exclude:['createdAt','updatedAt']},
        });
        return res.json(results);

    }else{
        const results = await Elemento.findAll({
            include:[User,Request],
            attributes:{exclude:['createdAt','updatedAt']},
            where:{userId}
        
        });
        return res.json(results);
    }
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
    const userRol=req.user.rol
    if(userRol==='admin'){
        const result = await Elemento.destroy({ where: {id} });
        if(!result) return res.sendStatus(404);
        return res.sendStatus(204);
    }else{
        return res.status(403).json({ error: 'No tienes permiso para editar usuarios.' });
    }
    
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