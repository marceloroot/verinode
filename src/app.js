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
const indexRoute =require('./routes/index-route');


const usuarioRoute =require('./routes/usuario-routes');
const permissaoRoute =require('./routes/permissao-routes');

//Parcelamentos
const parcelamento_pgfn =require('./routes/Parcelamentos/parcelamento_pgfn-routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(cors());


app.use('/usuario',usuarioRoute);
app.use('/permissao',permissaoRoute);
app.use('/parcelamentos/parcelamento_pgfn',parcelamento_pgfn);
module.exports =app;

