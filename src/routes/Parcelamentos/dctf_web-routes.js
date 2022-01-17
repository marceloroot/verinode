'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../../services/auth-services');
const controller = require('../../controller/Parcelamento/dctf_web-controller');

router.get('/',authService.isParcelamento,authService.authorize,controller.index);
router.get('/:id',authService.isParcelamento,authService.authorize,controller.buscarid);

module.exports =router;