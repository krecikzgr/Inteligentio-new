const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const config = require('../config/api/ConfigApi.js')

app.use(bodyParser.urlencoded({extended: true}))


  module.exports = {
    start() {
        server.listen(3001, () => {
            console.log('server up');
        })
    },
    register(resource){
        resource(server);
    },
    getServer(){
        return server;
    }
};