'use strict';
require('dotenv').config();
const { Sequelize } = require('sequelize');

//Declçaração de models
const dtb_ecac_dctf_web = require('../../models/E_social/dtb_ecac_dctf_web');
const dtb_ecac_dctf_web_detalhes = require('../../models/E_social/dtb_ecac_dctf_web_detalhes');

// verificar utilizacção da tabela empresas
const dtb_empresas = require('../../models/Parcelamentos/dtb_empresas');

// const Usuario = require('../../models/Usuario');
// const ValidationContract = require("../../validator/fluent-validators");
const authService = require('../../services/auth-services');
// const md5 = require('md5');
module.exports = {
    async buscar_parcelamentos(req, res) {
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

            dtb_ecac_dctf_web.init(connection);
            dtb_ecac_dctf_web_detalhes.init(connection);
            // dtb_empresas.init(connection);

            //associate
            dtb_ecac_dctf_web.associate(connection.models);
            dtb_ecac_dctf_web_detalhes.associate(connection.models);
            // dtb_empresas.associate(connection.models);

            const dctf_web = await dtb_ecac_dctf_web.findAll(
                { include: [{ association: "dctf_web_detalhes" }] },
            );

            return res.status(201).send({
                dctf_web
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