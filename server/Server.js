
var restify = require('restify');
const networkScanner = require('../networkScanner/NetworkScanner')
const server = restify.createServer();


networkScanner.announce();

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
