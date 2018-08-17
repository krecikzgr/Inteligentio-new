const fakeDataBase = require('../db/FakeDatabase');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIOnpm

const getSensors = (start, size) => {
    const sensors = fakeDataBase.getSensorsTable();
    const sortedSensors = sensors.sort((a,b)=>a.id<b.id).slice(start,start+size);
    return sortedSensors;
};


const registerButton = () => {

    console.log('register class played');
    var led = new Gpio(21, 'out'); //use GPIO pin 4 as output
    const button = new Gpio(18, 'in', 'both');
 
    button.watch((err, value) => led.writeSync(value));
}

module.exports = {
    getSensors,
    registerButton
};