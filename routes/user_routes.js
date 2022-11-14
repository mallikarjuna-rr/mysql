const express = require('express');
const userRouter = express.Router();
const { createUser, getAllUsers } = require('../controler/user_controller');


userRouter.post('/create', createUser);
userRouter.get('/all', getAllUsers);


module.exports = userRouter;