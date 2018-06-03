const DB = require('../connector/connector.js')
var db = new DB()
function createConfig() {
    var config = { listenPort: 1, actionPort: 2, name: "Test sensor" }
    connector.insertObject(config,'config');

}

function readConfig() {
    db.connect().then(function(){
        db.countDocuments('config').then(function(res){

            console.log("returned count " + res)
        })
        console.log("some method in here");
    })
}

module.exports = {
    createConfig,
    readConfig
};