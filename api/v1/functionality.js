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


module.exports.createUser = (userRequest) => {
    return new Promise((resolve, reject) => {
        console.log(userRequest.body.userID)
        var sql = "INSERT INTO userDetail (username, password, fname, mname, lname, userID) VALUES (userRequest.body.username,userRequest.body.password, userRequest.body.fname, userRequest.body.mname, userRequest.body.lname, userRequest.body.userID";
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