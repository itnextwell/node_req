const catchError = require('../utils/catchError');
const Filee = require('../models/Filee');

const getAll = catchError(async(req, res) => {
    const result= await Filee.findAll()
    return res.json(result)
});

const create= catchError(async(req,res)=>{
    const {filename}=req.file

    const result= await Filee.create({filename,url})
    return res.sendStatus(201)

})
module.exports = {
    getAll,
    create
}