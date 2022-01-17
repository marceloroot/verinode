'use strict';
 const Rotas = require('../models/Rotas');

module.exports = {
 

async index(req,res){
    try{
        const rotas = await Rotas.findAll({include:{association:"usuario"}});
        return res.status(201).send({
            rotas:rotas
        })
    }
    catch(err){
        res.status(200).send({
            error:err.message
        })
    }
},




 


   
}

