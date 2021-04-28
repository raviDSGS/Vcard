const {createUser,createID,findUser} = require('./functionality')

async function signup(signupRequest){
    try{
        let result = await createUser(signupRequest);
        return("User created"+result)
    }
    catch(err){
        return "Error occured while creating new user"+err;

    }
}


async function login(loginRequest){
    try{
        let result = await findUser(loginRequest);
        if(result.length){
            return "User Find";
            //call JWT function
        }
        else{
            return "Invalid username/password";
        }
    }
    catch(err){
        return "Error Occured"+err;
    }
}


module.exports.login = login;

