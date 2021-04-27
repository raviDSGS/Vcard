const express = require('express');
const router = express.Router();

const {createUser,createID} = require('./functionality')

router.post('/signup',(req,res)=>{
    req.body.userID=createID();
    createUser(req).then((response)=>{
        res.send(response)
    })
    .catch((err)=>{
        res.sendStatus(500)
    })
})

router.post('/login',(req,res,next)=>{

})

router.post('/user',(req,res,next)=>{

})

router.put('/user',(req,res,next)=>{

})

router.get('/user',(req,res,next)=>{
    res.send("Hello");
})


module.exports = router;