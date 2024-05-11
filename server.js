const express = require('express');
const app = express();

app.get('/mayur',(req,res)=>{

   return res.send("Hello");
})

app.listen(8000,()=>{console.log(`server is runing on port 8000`)})