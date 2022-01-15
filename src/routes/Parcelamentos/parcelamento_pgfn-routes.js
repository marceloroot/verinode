'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../../services/auth-services');
const controller = require('../../controller/Parcelamento/parcelamento_pgfn-controller');

router.get('/',authService.isParcelamento,authService.authorize,controller.index);


module.exports =router;