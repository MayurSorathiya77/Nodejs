const express = require('express');
const {User} = require('../model/user')
const Router = express.Router();






// //web Browser /users
//  app.get('/users', async (req, res) => {

//     await collection.find({});
//         const html = `<ol> ${users.map((user)=>`<li>${user.first_name} </li>`).join("")}</ol>`;

//         return res.send(html);
// });


Router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        console.log(users);

        const html = `<ol>${users.map((user) => `<li>${user.first_name}</li>`).join('')}</ol>`;
        console.log(`this is for new youser${process.pid}`)
        return res.send(html);
    } catch (error) {
        console.error('Error occurred while fetching users:', error);
        return res.status(500).send('Internal Server Error');
    }
});

//Api /users

Router.get('/api',async (req,res)=>{
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

Router.post('/api',async (req,res)=>{

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



module.exports = Router;