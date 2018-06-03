const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const configurator = require('../api/config.js');


app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.get('/config', (req, res) => {
   var items  = configurator.readConfig();
   console.log(items);
    res.send('config is called');

  })

  app.post('/config', (req, res) => {
    configurator.createConfig();
    res.send('config created');
  })

  app.post('/sensor', (req, res) => {
    res.send('Sensor state');
    console.log('Sensor state!')
  })