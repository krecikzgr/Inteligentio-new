const fakeDataBase = require('../db/FakeDatabase');
var bonjour = require('bonjour')()


const announce = () => {
    const sensors = fakeDataBase.getSwitchesTable();
    const switchName = sensors[0].name;
    bonjour.publish({ name: switchName, type: 'HAD', port: 3000 })
}

module.exports = {
    announce
};

