'use strict';
require('dotenv').config();
const { Sequelize } = require('sequelize');

//Declçaração de models
const dtb_ecac_dctf_web = require('../../models/Parcelamentos/dtb_ecac_dctf_web');
const dtb_ecac_dctf_web_detalhes = require('../../models/Parcelamentos/dtb_ecac_dctf_web_detalhes');



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

      
          dtb_ecac_dctf_web.init(connection);
          dtb_ecac_dctf_web_detalhes.init(connection);
      

          //associate
          dtb_ecac_dctf_web.associate(connection.models);
         dtb_ecac_dctf_web_detalhes.associate(connection.models);
   

        
        // const dfddfdf= await  dtb_ecac_dctf_web.findAll({include:{association:"dctfwebdetalhes"}})
         
            const dtb_ecac_dctf_webdf = await connection.query('SELECT * FROM dtb_ecac_dctf_web  INNER JOIN dtb_ecac_dctf_web_detalhes on dtb_ecac_dctf_web.id = dtb_ecac_dctf_web_detalhes.id_declaracao',
           );
         
          const teste =dtb_ecac_dctf_webdf[0];
          let array =[];
          let cont = 0;
          
          //mONTA O OBJT
          teste.forEach(element =>{
           const result= array.find(el => el.id ==element.id);

          if(!result){
              
            const obj = {
                id:element.id,
                cnpj: element.cnpj,
                id_declaracao :  element.id_declaracao,
                id_controle :   element.id_controle,
                periodo_apuracao : element.periodo_apuracao,
                data_transmissao :  element.data_transmissao,
                categoria  :   element.categoria,
                origem  : element.origem,
                tipo  : element.tipo,
                situacao  :  element.situacao,
                elementdebito_apurado:  element.debito_apurado,
                saldo_a_pagar :  element.saldo_a_pagar,
                path_download_darf  :element.path_download_darf,
                path_download_recibo     :  element.path_download_recibo,
                path_download_extrato  :   element.path_download_extrato,
               };    
              obj.dectfwebs =[];
            const objdetalhes = { id_declaracao:element.id_declaracao,
                nivel:element.nivel,
                tributo:element.tributo,
                pa_debito:element.pa_debito,
                debito_apurado:element.debito_apurado,
                credito_vinculado:element.credito_vinculado,
                saldo_a_pagar:element.saldo_a_pagar,};
                obj.dectfwebs.push(objdetalhes);
               
              
                array[cont] = obj;
               
               cont++;
           }else{
            const objdetalhes = { id_declaracao:element.id_declaracao,
                nivel:element.nivel,
                tributo:element.tributo,
                pa_debito:element.pa_debito,
                debito_apurado:element.debito_apurado,
                credito_vinculado:element.credito_vinculado,
                saldo_a_pagar:element.saldo_a_pagar,};
                result.dectfwebs.push(objdetalhes);
           }
          })
         
         //pgfn.push.apply(paracelas, novoParcelasId);
         return res.status(201).send({
            dctfwebs:array
         })
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

      
      
          dtb_ecac_dctf_web.init(connection);
          dtb_ecac_dctf_web_detalhes.init(connection);
      

          //associate
          dtb_ecac_dctf_web.associate(connection.models);
          dtb_ecac_dctf_web_detalhes.associate(connection.models);

          //array finalization
          var dadosfinal = Array();
          
          //var cont =0;
       // const temp = await dtb_empresas.findAll();
          
         const dctfwebdetalhes = await dtb_ecac_dctf_web_detalhes.findAll(
            {where:{id},include:[{association:"dctfwebdetalhes"}]},
         );
         

         //pgfn.push.apply(paracelas, novoParcelasId);
         return res.status(201).send({
            dctfwebdetalhes
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