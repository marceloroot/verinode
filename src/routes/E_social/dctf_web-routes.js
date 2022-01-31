'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../../services/auth-services');
const controller = require('../../controller/E_social/dctf_web-controller');

router.get('/', authService.isE_social, controller.buscar_parcelamentos);
//router.get('/:id',authService.isE_social,controller.buscarid);

module.exports = router;