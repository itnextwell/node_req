const catchError = require('../utils/catchError');
const User = require('../models/User');
const Elemento = require('../models/Elemento');
const bcrypt=require('bcrypt')

const getAll = catchError(async(req, res) => {
    const results = await User.findAll({
        include:[Elemento],
        attributes:{exclude:['createdAt','updatedAt']}
    
    
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {name, lastName,mail,phone,post,identification,password}=req.body
    const hashPasword= await bcrypt.hash(password,10)
    const body= {name, lastName,mail,phone,post,identification,password:hashPasword}
    console.log(body)
    const result = await User.create(body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id,{
        include:[Elemento],
        attributes:{exclude:['createdAt','updatedAt']}
    });
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    delete req.body.password
    const result = await User.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const login=catchError(async(req,res)=>{
    const {mail,password}=req.body
    const user=await User.findOne({where:{mail}})
    if(!user) return res.sendStatus(401)

    const isValid=await bcrypt.compare(password,user.password)
    if(!isValid) return res.sendStatus(401)
    return res.json(user)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login
}