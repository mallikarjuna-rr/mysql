const express = require('express');
const infoRouter = express.Router();
const { createInfo } = require('../controler/info_controller');


infoRouter.post('/create', createInfo);


module.exports = infoRouter;