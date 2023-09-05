'use strict';

const ApiController = require('../controllers/apiController');
const express = require('express');
const router = express.Router();

router.get('/home', ApiController.homeController);

module.exports = router;
