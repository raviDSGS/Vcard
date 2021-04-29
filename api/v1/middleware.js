const {createUser,findUser,} = require('./functionality')

async function signup(req,res,next){
    try{
        req.body.userID=createID();
        let result = await createUser(req);
        res.send("User Created")
        //return("User created"+result)
    }
    catch(err){
        next(err);
     // return "Error occured while creating new user"+err;
    }
}


async function login(req,res,next){
    try{
        let result = await findUser(req);
        if(result.length){
            res.send("User Found")
            //call JWT function
        }
        else{
            res.send("User not found")
        }
    }
    catch(err){
        next(err);
    }
}


module.exports.login = login;
module.exports.signup = signup;

