
module.exports = server => {
    server.get('sensors', (req, res, next) => {
        const allSensors = []; //TODO use tweetservice, pass start + size as params
        res.send(allSensors);
        next();
    });
};