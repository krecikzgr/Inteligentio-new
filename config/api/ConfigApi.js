var Config = require('../model/ConfigSchema.js')


function readConfig(req, res)  {
    Config.find((err, configs) => {  
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).send(err)
        if (configs.length > 0) return res.status(200).send(configs[0])
        // send the list of all people
        return res.status(200).send("No element found");
    });
}

function initConfig(req, res) {
    Config.find().then(configs => {
        if(configs.length > 0) return res.status(200).send("object alraedy exists");
        var newConfig = new Config({
            name: "Test Config",
            listenPin: 0,
            actionPin: 2,
        })
        newConfig.save(function(err) {
            console.log('init schema')
            if (err) return res.status(500).send(err);
            console.log('config created');
            return res.status(200).send('object created');
          });
    }).catch(err=> {
        return res.status(500).send(err);
    })
}

module.exports = {
    initConfig,
    readConfig
}