const express = require('express');
const router = express.Router();

const {login,signup} = require('./middleware')

router.post('/signup',signup);

// router.post('/signup',(req,res)=>{
//     req.body.userID=createID();
//     res.send(signup(req))
// })

router.post('/login',login)

// router.post('/login',(req,res)=>{
//     res.send(login(req));
// })

router.post('/user',(req,res)=>{

})

router.put('/user',(req,res)=>{

})

router.get('/user',(req,res)=>{
    res.send("Hello");
})

router.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})
module.exports = router;