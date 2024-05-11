const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 7777;

mongoose.connect('mongodb://127.0.0.1:27017/userDatabase')
.then(()=>{console.log("Database connected...........................")});

const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : true,
    },
    last_name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    gender : {
        type : String,
        required : true,
    },
    job_title : {
        type : String,
        required : true,
    },
});


const User = mongoose.model('user',userSchema);


app.use(express.urlencoded({extended:false}));

// //web Browser /users
//  app.get('/users', async (req, res) => {

//     await collection.find({});
//         const html = `<ol> ${users.map((user)=>`<li>${user.first_name} </li>`).join("")}</ol>`;

//         return res.send(html);
// });


app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        console.log(users);

        const html = `<ol>${users.map((user) => `<li>${user.first_name}</li>`).join('')}</ol>`;

        return res.send(html);
    } catch (error) {
        console.error('Error occurred while fetching users:', error);
        return res.status(500).send('Internal Server Error');
    }
});

//Api /users

app.get('/api/users',async (req,res)=>{
    const users = await User.find({});
    return res.json(users);

});

//dynamic parameter path

// app.get('/api/user/:id',(req,res)=>{
//     const id = Number(req.params.id);

//     const userk = users.filter((user)=>{return user.id===id});
//     return res.json(userk);
// });

//POST user creation

app.post('/api/user',async (req,res)=>{

    console.log(req.body);

    await User.create({
        first_name:req.body.first_name,
        last_name : req.body.last_name,
        email :req.body.email,
        gender : req.body.gender,
        job_title : req.body.job_title,
    });
    

    res.send("true");

});






app.listen(port,()=>{console.log(`server is runing on port ${port}`)});