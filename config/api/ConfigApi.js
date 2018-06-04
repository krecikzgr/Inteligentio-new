var Config = require('../model/ConfigSchema.js')


function initConfig() {
    var newConfig = Config({
        name: "Test Config",
        listenPin: 1,
        actionPin: 2,
    })
    newConfig.save(function(err){
        if (err) throw err;
        console.log('Config  created')
    })
}

module.exports = {
    initConfig
}