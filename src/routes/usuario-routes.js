'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../services/auth-services');
const controller = require('../controller/usuario-controller');

router.get('/decoude/',authService.authorize,controller.decoude);
router.post('/',authService.isAdmin,controller.store);
router.put('/:id',authService.isAdmin,controller.update);
router.post('/authenticate/',controller.autenticar);
router.get('/:id',authService.isAdmin,controller.show);
router.get('/usuariocompermissao/:id',authService.isAdmin,controller.showPermissao);
router.get('/',authService.isAdmin,controller.index);
router.put('/mudastatus/:id',authService.isAdmin,controller.mudastatus);

module.exports =router;