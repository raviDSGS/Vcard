const express = require('express');
const router = express.Router();

// const {createUser,createID,findUser} = require('./functionality')
const {login,signup} = require('./middleware')

router.post('/signup',(req,res)=>{
    req.body.userID=createID();
    res.send(signup(req))
})

router.post('/login',(req,res,next)=>{
    res.send(login(req));
})

router.post('/user',(req,res,next)=>{

})

router.put('/user',(req,res,next)=>{

})

router.get('/user',(req,res,next)=>{
    res.send("Hello");
})


module.exports = router;