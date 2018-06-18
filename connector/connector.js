var mongoose = require('mongoose');
var url = "mongodb://localhost:27018/";
var dbname = "mydb";

// app.get('/', (req,res)=> {
//     res.send('Hello World');
// });

// app.get('/config', (req, res) => {
//    var items  = config.readConfig(req, res);
//   console.log(items);
//   })

//   app.delete('/config',(req, res) => {
    
//   })

//   app.post('/config', (req, res) => {
//     config.initConfig(req, res);
//   })

//   app.post('/sensor', (req, res) => {
//     res.send('Sensor state');
//     console.log('Sensor state!')
//   })

//   app.listen(3000, function() {
//     console.log('listening on 3000')
//   })