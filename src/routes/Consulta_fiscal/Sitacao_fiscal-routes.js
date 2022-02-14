'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../../services/auth-services');
const controller = require('../../controller/Consulta_fiscal/consulta_fiscal-controller');

router.get('/', authService.authorize, controller.buscar_situacal_fiscal);
router.get('/regular', authService.authorize, controller.buscar_situacao_fiscal_regular);
router.get('/pendencia', authService.authorize, controller.buscar_situacao_fiscal_pendencia);
//router.get('/:id',authService.isE_social,controller.buscarid);

module.exports = router;