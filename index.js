
const sensorsResource = require('./sensor/SensorsResource');
const server = require('./server/Server');




server.register(sensorsResource);
server.start();

