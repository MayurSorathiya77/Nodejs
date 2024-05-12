const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./router/user');
const studentRouter = require('./router/student');

const cluster = require("node:cluster");
const os = require("os");
const cpuCount = os.cpus().length;


if(cluster.isPrimary)
{


for(let i=0;i<cpuCount;i++)
{
    cluster.fork();
}
}
else
{
    
const app = express();
const port = 7777;

mongoose.connect('mongodb://127.0.0.1:27017/userDatabase')
.then(()=>{console.log("Database connected...........................")});

app.use(express.urlencoded({extended:false}));

app.use('/users',userRouter);

app.use('/student',studentRouter);



app.listen(port,()=>{console.log(`server is runing on port ${port}`)});

}
