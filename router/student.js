const express = require('express');
const {Student} = require('../model/student')
const router = express.Router();
const {setUserId} = require('../service/session')
const {v4:uuidv4} = require('uuid');


router.post('/login',async (req,res)=>{

    const user = await Student.findOne({ name: req.body.name});

    if (user) {
        const {v4:uuidv4} = require('uuid');
        const sessionId = uuidv4();
        setUserId(sessionId,user);
        res.cookie('UserId',sessionId);
        return res.json(user);
    } else {
        return res.status(404).send('User not found');
    }


});

router.post('/',async (req,res)=>{

    await Student.create({
        name:req.body.name,
        password : req.body.password,
    });

    res.send("true");

});



module.exports = router;
