const express = require('express');
const users = require('./static-data/MOCK_DATA.json')
const app = express();
const port = 7777;




app.use(express.urlencoded({extended:false}));

//web Browser /users
 app.get('/users', (req, res) => {
        const html = `<ol> ${users.map((user)=>`<li>${user.first_name} </li>`).join("")}</ol>`;

        return res.send(html);
});

//Api /users

app.get('/api/users',(req,res)=>{

    return res.json(users);

});

//dynamic parameter path

app.get('/api/user/:id',(req,res)=>{
    const id = Number(req.params.id);

    const userk = users.filter((user)=>{return user.id===id});
    return res.json(userk);
});

//POST user creation

app.post('/api/user',(req,res)=>{

    console.log(req.body);
    users.push(req.body);
    const userk = users.filter((user)=>{return user.id===req.body.id});
    res.send(userk);

});






app.listen(port,()=>{console.log(`server is runing on port ${port}`)});