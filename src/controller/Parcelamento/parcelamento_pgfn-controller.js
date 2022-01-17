'use strict';
require('dotenv').config();
const { Sequelize } = require('sequelize');

//Declçaração de models
const dtb_parcelamento_pgfn = require('../../models/Parcelamentos/dtb_parcelamento_pgfn');
const dtb_parcelamento_pgfn_parcelas = require('../../models/Parcelamentos/dtb_parcelamento_pgfn_parcelas');
const dtb_parcelamento_pgfn_dados_negociacao = require('../../models/Parcelamentos/dtb_parcelamento_pgfn_dados_negociacao');
const dtb_empresas = require('../../models/Parcelamentos/dtb_empresas');

 const Usuario = require('../../models/Usuario');
 const ValidationContract = require("../../validator/fluent-validators");
 const authService = require('../../services/auth-services');
 const md5 = require('md5');
module.exports = {
 

async index(req,res){
    try{
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
            dialect: 'mysql',
            host:process.env.DB_HOST,
            define:{
                timestamps:false,
                underscored:true,
                freezeTableName: true,
                
            },
          });

      
          dtb_parcelamento_pgfn.init(connection);
          dtb_parcelamento_pgfn_parcelas.init(connection);
          dtb_parcelamento_pgfn_dados_negociacao.init(connection);
          dtb_empresas.init(connection);

          //associate
          dtb_parcelamento_pgfn.associate(connection.models);
          dtb_parcelamento_pgfn_parcelas.associate(connection.models);
          dtb_parcelamento_pgfn_dados_negociacao.associate(connection.models);
          dtb_empresas.associate(connection.models);

          //array finalization
          var dadosfinal = Array();
          
          //var cont =0;
       // const temp = await dtb_empresas.findAll();
          
         const pgfns = await dtb_parcelamento_pgfn.findAll(
            {include:[{association:"parcelas"},{association:"negocio"},{association:"empresa"}]},
         );
         

         //pgfn.push.apply(paracelas, novoParcelasId);
         return res.status(201).send({
            pgfns
         },
         
         )
    }
    catch(err){
        res.status(200).send({
            error:err.message
        })
    }
},
async buscarid(req,res){
    try{
        const { id } = req.params;
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
            dialect: 'mysql',
            host:process.env.DB_HOST,
            define:{
                timestamps:false,
                underscored:true,
                freezeTableName: true,
                
            },
          });

      
          dtb_parcelamento_pgfn.init(connection);
          dtb_parcelamento_pgfn_parcelas.init(connection);
          dtb_parcelamento_pgfn_dados_negociacao.init(connection);
          dtb_empresas.init(connection);

          //associate
          dtb_parcelamento_pgfn.associate(connection.models);
          dtb_parcelamento_pgfn_parcelas.associate(connection.models);
          dtb_parcelamento_pgfn_dados_negociacao.associate(connection.models);
          dtb_empresas.associate(connection.models);

          //array finalization
          var dadosfinal = Array();
          
          //var cont =0;
       // const temp = await dtb_empresas.findAll();
          
         const pgfns = await dtb_parcelamento_pgfn.findAll(
            {where:{id},include:[{association:"parcelas"},{association:"negocio"},{association:"empresa"}]},
         );
         

         //pgfn.push.apply(paracelas, novoParcelasId);
         return res.status(201).send({
            pgfns
         },
         
         )
    }
    catch(err){
        res.status(200).send({
            error:err.message
        })
    }
},


   
}