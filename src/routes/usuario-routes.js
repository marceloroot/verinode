'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../services/auth-services');
const controller = require('../controller/usuario-controller');

router.get('/decoude/',authService.authorize,controller.decoude);
router.post('/',controller.store);
router.put('/:id',authService.authorize,controller.update);
router.post('/authenticate/',controller.autenticar);
router.get('/:id',authService.authorize,controller.show);
router.get('/usuariocompermissao/:id',authService.authorize,controller.showPermissao);
router.get('/',authService.authorize,controller.index);
router.put('/mudastatus/:id',authService.authorize,controller.mudastatus);

module.exports =router;