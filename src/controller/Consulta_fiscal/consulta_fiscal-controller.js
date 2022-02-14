'use strict';
require('dotenv').config();
const { Sequelize } = require('sequelize');

//Declçaração de models
const dtb_situacao_fiscal = require('../../models/Consulta_fiscal/dtb_situacao_fiscal');

// verificar utilizacção da tabela empresas
const dtb_empresas = require('../../models/Parcelamentos/dtb_empresas');

// const Usuario = require('../../models/Usuario');
// const ValidationContract = require("../../validator/fluent-validators");
const authService = require('../../services/auth-services');
// const md5 = require('md5');
module.exports = {
  
    async buscar_situacal_fiscal(req, res) {
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

            const situacao_fiscal = await dtb_situacao_fiscal.findAll({include:{association:"empresas"}});

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