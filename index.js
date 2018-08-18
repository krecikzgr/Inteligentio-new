
const lightsResource = require('./lightSwitches/LightSwitchResource');
const server = require('./server/Server');




server.register(lightsResource);
server.start();

