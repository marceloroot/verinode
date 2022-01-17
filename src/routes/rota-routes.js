'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../services/auth-services');
const controller = require('../controller/rota-controller');


router.get('/',authService.authorize,controller.index);


module.exports =router;