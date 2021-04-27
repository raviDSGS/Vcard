const mySql = require('mysql');


const connection= mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vCard'
})

module.exports = connection;


