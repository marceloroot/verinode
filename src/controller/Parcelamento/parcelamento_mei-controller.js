'use strict';
require('dotenv').config();
const { Sequelize } = require('sequelize');

//Declçaração de models
const dtb_parcelamento_mei_pedido_contribuinte = require('../../models/Parcelamentos/dtb_parcelamento_mei_pedido_contribuinte');
const dtb_mei_parcelas_emitidas = require('../../models/Parcelamentos/dtb_mei_parcelas_emitidas');
const dtb_parcelamento_mei_demonstrativo_pagamento = require('../../models/Parcelamentos/dtb_parcelamento_mei_demonstrativo_pagamento');

// verificar utilizacção da tabela empresas
const dtb_empresas = require('../../models/Parcelamentos/dtb_empresas');

// const Usuario = require('../../models/Usuario');
// const ValidationContract = require("../../validator/fluent-validators");
const authService = require('../../services/auth-services');
// const md5 = require('md5');
module.exports = {
  
    async listar_pedidos(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const {filtro} = req.body;
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

            dtb_parcelamento_mei_pedido_contribuinte.init(connection);
            dtb_empresas.init(connection);
            dtb_mei_parcelas_emitidas.init(connection);

            // dtb_empresas.init(connection);

            //associate
            dtb_parcelamento_mei_pedido_contribuinte.associate(connection.models);
            dtb_mei_parcelas_emitidas.associate(connection.models);
            dtb_empresas.associate(connection.models);
         
            // dtb_empresas.associate(connection.models);

     

          
            var dados = await dtb_parcelamento_mei_pedido_contribuinte.findAll({
                include:{association:"empresas",attributes:['razao_social']}
             });
            if (typeof filtro !== 'undefined' && filtro !=null && filtro != "TODAS") {
                  if(filtro == 'EM_PARCELAMENTO'){
                    console.log(filtro);
                    dados = await dtb_parcelamento_mei_pedido_contribuinte.findAll({
                        where:{situacao:"Em parcelamento"},
                        include:{association:"empresas",attributes:['razao_social']}
                   });

                  }
                  else if(filtro == 'CONCLUIDO'){
                    dados = await dtb_parcelamento_mei_pedido_contribuinte.findAll({
                        where:{situacao:"Concluído"},
                        include:{association:"empresas",attributes:['razao_social']}
                   });

                  }
                
              }

           
            return res.status(201).send({
                dados
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },
    async listar_parcelas(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const {mes} = req.body;
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

          
            dtb_mei_parcelas_emitidas.init(connection);
            dtb_parcelamento_mei_pedido_contribuinte.init(connection);
            dtb_empresas.init(connection);
            // dtb_empresas.init(connection);

            //associate
           
            dtb_mei_parcelas_emitidas.associate(connection.models);
            dtb_parcelamento_mei_pedido_contribuinte.associate(connection.models);
            dtb_empresas.associate(connection.models);
            // dtb_empresas.associate(connection.models);

     

          
            var dados = await dtb_mei_parcelas_emitidas.findAll({
                where:{data_parcela:mes},
                include:{association:"contribuinte"}
             });
           

           
            return res.status(201).send({
                dados
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },

    async listar_parcelas_pagas(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const {mes} = req.body;
            console.log(mes);
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

          
            dtb_mei_parcelas_emitidas.init(connection);
            dtb_parcelamento_mei_pedido_contribuinte.init(connection);
            dtb_empresas.init(connection);
            dtb_parcelamento_mei_demonstrativo_pagamento.init(connection);
            // dtb_empresas.init(connection);

            //associate
           
            dtb_mei_parcelas_emitidas.associate(connection.models);
            dtb_parcelamento_mei_pedido_contribuinte.associate(connection.models);
            dtb_empresas.associate(connection.models);
            dtb_parcelamento_mei_demonstrativo_pagamento.associate(connection.models);
            // dtb_empresas.associate(connection.models);

     

          
            var dados = await dtb_parcelamento_mei_demonstrativo_pagamento.findAll({
                include:{
                    association:"contribuinte",
                    where: {situacao: 'Em parcelamento'},
                }
             });
           

           
            return res.status(201).send({
                dados
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },

    async get_parcela_atual(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const {data_parcela,cnpj} = req.body;
            
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

            dtb_mei_parcelas_emitidas.init(connection);
            dtb_parcelamento_mei_pedido_contribuinte.init(connection);
            dtb_empresas.init(connection);
            dtb_parcelamento_mei_demonstrativo_pagamento.init(connection);



            //associate
            dtb_mei_parcelas_emitidas.associate(connection.models);
            dtb_parcelamento_mei_pedido_contribuinte.associate(connection.models);
            dtb_empresas.associate(connection.models);
            dtb_parcelamento_mei_demonstrativo_pagamento.associate(connection.models);
            // dtb_empresas.associate(connection.models);

     

          
            var dados = await dtb_mei_parcelas_emitidas.findOne({
                where: {cnpj:cnpj},
                where: {data_parcela:data_parcela},
             });
           

           
            return res.status(201).send({
                dados
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },

    async pagou_parcela_mes_atual(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const {mes,id_parcelamento} = req.body;
            
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

          
            dtb_mei_parcelas_emitidas.init(connection);
            dtb_parcelamento_mei_pedido_contribuinte.init(connection);
            dtb_empresas.init(connection);
            dtb_parcelamento_mei_demonstrativo_pagamento.init(connection);
            // dtb_empresas.init(connection);

            //associate
           
            dtb_mei_parcelas_emitidas.associate(connection.models);
            dtb_parcelamento_mei_pedido_contribuinte.associate(connection.models);
            dtb_empresas.associate(connection.models);
            dtb_parcelamento_mei_demonstrativo_pagamento.associate(connection.models);
            // dtb_empresas.associate(connection.models);

     

          
            var dados = await dtb_parcelamento_mei_demonstrativo_pagamento.findOne({
                where: {id_parcelamento:id_parcelamento},
                where: {mes_parcela:mes},
             });
           

           
            return res.status(201).send({
                dados
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },

    async qtd_pagamentos(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const {id_parcelamento} = req.body;
            
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

          
            dtb_mei_parcelas_emitidas.init(connection);
            dtb_parcelamento_mei_pedido_contribuinte.init(connection);
            dtb_empresas.init(connection);
            dtb_parcelamento_mei_demonstrativo_pagamento.init(connection);
            // dtb_empresas.init(connection);

            //associate
           
            dtb_mei_parcelas_emitidas.associate(connection.models);
            dtb_parcelamento_mei_pedido_contribuinte.associate(connection.models);
            dtb_empresas.associate(connection.models);
            dtb_parcelamento_mei_demonstrativo_pagamento.associate(connection.models);
            // dtb_empresas.associate(connection.models);

     

          
            var dados = await dtb_parcelamento_mei_demonstrativo_pagamento.findOne({
                where: {id_parcelamento:id_parcelamento},
                attributes: { 
                    include: [[Sequelize.fn("COUNT", Sequelize.col("id")), "qtd"]] 
                },
             });
           

           
            return res.status(201).send({
                dados
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },

    async buscar_situacao_fiscal_regular(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

            dtb_situacao_fiscal.init(connection);
            dtb_empresas.init(connection);
            // dtb_empresas.init(connection);

            //associate
            dtb_situacao_fiscal.associate(connection.models);
            dtb_empresas.associate(connection.models);
            // dtb_empresas.associate(connection.models);

            const situacao_fiscal = await dtb_situacao_fiscal.findAll({
               
                where: {
                    possui_pendencia: 0
                  },
                include:{association:"empresas"}
            });

            return res.status(201).send({
                situacao_fiscal
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },

    async buscar_situacao_fiscal_pendencia(req, res) {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
            const connection = new Sequelize(data.banco, process.env.DB_USER, process.env.DB_PASS, {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                define: {
                    timestamps: false,
                    underscored: true,
                    freezeTableName: true,
                },
            });

            dtb_situacao_fiscal.init(connection);
            dtb_empresas.init(connection);
            // dtb_empresas.init(connection);

            //associate
            dtb_situacao_fiscal.associate(connection.models);
            dtb_empresas.associate(connection.models);
            // dtb_empresas.associate(connection.models);

            const situacao_fiscal = await dtb_situacao_fiscal.findAll({
               
                where: {
                    possui_pendencia: 1
                  },
                include:{association:"empresas"}
            });

            return res.status(201).send({
                situacao_fiscal
            },

            )
        }
        catch (err) {
            res.status(200).send({
                error: err.message
            })
        }
    },



}