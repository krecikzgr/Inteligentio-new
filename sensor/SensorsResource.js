
const sensorsService = require('./SensorService');

module.exports = server => {
    server.get('/sensors', (req, res, next) => {
        const page = req.params.page ? parseInt(req.params.page, 10) : 0;
        const size = req.params.size ? parseInt(req.params.size, 10) : 10;
        const pagedSensors = sensorsService.getSensors(page,size);
        res.send(pagedSensors);
        next();
    });
};