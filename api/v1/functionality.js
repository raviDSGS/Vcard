const crypto = require('crypto')

const dbConnection = require('../../dbConn');

module.exports.eastablishDBConn = () => {
    return new Promise((resolve, reject) => {
        dbConnection.connect((err) => {
            err=false;
            if (err) {
                reject('Error while connecting to DB')
            }
            else {
                resolve("Sucessfully Connected to database server")
            }
        })
    })
}


module.exports.createUser = (signupRequest) => {
    return new Promise((resolve, reject) => {
        console.log(signupRequest.body.userID)

        let sql = "INSERT INTO userDetail (username, password, fname, mname, lname, userID) VALUES (?,?,?,?,?,?)";
        let input=[signupRequest.body.username,signupRequest.body.password, signupRequest.body.fname, signupRequest.body.mname, signupRequest.body.lname, signupRequest.body.userID]
        
        dbConnection.query(sql,input, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    })
}

module.exports.findUser = (loginRequest) => {
    return new Promise((resolve, reject) => {
        console.log(loginRequest.body.userID)
        
        let sql = "SELECT * FROM userDetail WHERE username=? and password=?";
        let parameter=[loginRequest.body.username,loginRequest.body.password]
        dbConnection.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    })
}


module.exports.createID =()=>{
    return crypto.randomBytes(4).toString('hex')
}

