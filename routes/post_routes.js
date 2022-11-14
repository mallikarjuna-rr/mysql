const express = require('express');
const postRouter = express.Router();
const { createPost } = require('../controler/post_controller');


postRouter.post('/create', createPost);


module.exports = postRouter;