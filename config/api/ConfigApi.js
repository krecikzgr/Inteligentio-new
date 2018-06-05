var Config = require('../model/ConfigSchema.js')


function initConfig(req, res) {
    var newConfig = Config({
        name: "Test Config",
        listenPin: 1,
        actionPin: 2,
    })
    newConfig.save(function(err) {
        console.log('init schema')
        if (err) return res.status(500).send(err);
        console.log('config created');
        return res.status(200).send('object created');
      });
}

module.exports = {
    initConfig
}