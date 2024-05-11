const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./router/user');
const app = express();
const port = 7777;

mongoose.connect('mongodb://127.0.0.1:27017/userDatabase')
.then(()=>{console.log("Database connected...........................")});

app.use(express.urlencoded({extended:false}));
app.use('/users',userRouter);



app.listen(port,()=>{console.log(`server is runing on port ${port}`)});