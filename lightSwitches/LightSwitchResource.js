
const lightSwitchesService = require('./LightSwitchService');

lightSwitchesService.registerButton();


module.exports = server => {
    server.get('/lights', (req, res, next) => {
        const page = req.params.page ? parseInt(req.params.page, 10) : 0;
        const size = req.params.size ? parseInt(req.params.size, 10) : 10;
        const pagedSensors = lightSwitchesService.getSensors(page,size);
        res.send(pagedSensors);
        next();
    });

    server.post('/pushButton', (req, res, next) => {
        lightSwitchesService.pushTheButton();
        res.send();
        next();
    });
};