
const lightSwitchesService = require('./LightSwitchService');
const responseBuilder = require('../utils/ResponseBuilder');

lightSwitchesService.registerButton();
lightSwitchesService.registerMotionDetector();

module.exports = server => {
    server.get('/sensors', (req, res, next) => {
        const page = req.params.page ? parseInt(req.params.page, 10) : 0;
        const size = req.params.size ? parseInt(req.params.size, 10) : 10;
        const pagedSensors = lightSwitchesService.getLightSwitches(page,size);
        responseBuilder.setMessage("MESSEGE Z ZEWN");
        responseBuilder.sendResponse(pagedSensors, res);
        next();
    });

    server.post('/changeLight', (req, res, next) => {
        lightSwitchesService.pushTheButton();
        res.send();
        next();
    });
};