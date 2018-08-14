
module.exports = server => {
    server.get('/sensors', (req, res, next) => {
        const allSensors = [];
        res.send(allSensors);
        next();
    });
};