'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../../services/auth-services');
const controller = require('../../controller/Parcelamento/parcelamento_mei-controller');

router.post('/',authService.authorize,controller.listar_pedidos);
router.post('/parcelas_emitidas',authService.authorize,controller.listar_parcelas);
router.post('/parcelas_pagas',authService.authorize,controller.listar_parcelas_pagas);
router.post('/pagou_parcela_mes_atual',authService.authorize,controller.pagou_parcela_mes_atual);
router.post('/get_parcela_atual',authService.authorize,controller.get_parcela_atual);
router.post('/qtd_pagamentos',authService.authorize,controller.qtd_pagamentos);


module.exports =router;