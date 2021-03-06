'use strict'
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

require('./database');///importante erro de lenght
require('./databaseveri');///importante erro de lenght
const app = express();
var cors = require('cors')
const router = express.Router();



//Carrega rota
const indexRoute = require('./routes/index-route');


const usuarioRoute = require('./routes/usuario-routes');
const permissaoRoute = require('./routes/permissao-routes');
const rotaRoute =require('./routes/rota-routes');
//Parcelamentos
const parcelamento_pgfn = require('./routes/Parcelamentos/parcelamento_pgfn-routes');
const parcelamento_mei = require('./routes/Parcelamentos/parcelamento_mei-routes');
const sitacao_fiscal = require('./routes/Consulta_fiscal/Sitacao_fiscal-routes');

//E_social
const dctf_web = require('./routes/e_social/dctf_web-routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(cors());


app.use('/usuario', usuarioRoute);
app.use('/permissao', permissaoRoute);
app.use('/rota',rotaRoute);
app.use('/parcelamentos/parcelamento_pgfn', parcelamento_pgfn);
app.use('/parcelamentos/parcelamento_mei', parcelamento_mei);
app.use('/e_social/dctf_web', dctf_web);
app.use('/sitacao_fiscal', sitacao_fiscal);
module.exports = app;

