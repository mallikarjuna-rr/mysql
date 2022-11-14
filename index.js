const express = require('express');
const app = express();
const userRouter = require('./routes/user_routes');
const infoRouter = require('./routes/info_routes');
const postRouter = require('./routes/post_routes');
const sequelize = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

sequelize.sync({alter:true}).then(() => console.log("Table Created")).catch((e) => console.log(e))
app.use('/api/user', userRouter);
app.use('/api/info', infoRouter);
app.use('/api/post', postRouter);


app.listen(5000, console.log("Server is running on 5000"))