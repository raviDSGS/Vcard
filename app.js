const express = require('express');
const app = express();

const v1 = require('./api/v1/index')
const { eastablishDBConn } = require('./api/v1/functionality')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

init();

app.listen(7000, (err) => {
    if (!err) {
        console.log('Running on port number 7000')
    }
})

async function init() {
    try {
        await eastablishDBConn();
        app.use('/api/v1', v1);
    }
    catch (err) {
        console.log(err);
        app.use('/', (req, res) => {
            res.sendStatus(500);
        })
    }
}