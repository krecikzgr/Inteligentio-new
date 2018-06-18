const sensorResource = require('./config/ConfigResource');
const server = require('./server/Server');

server.register(sensorResource);

server.start();