const fakeDataBase = require('../db/FakeDatabase');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIOnpm
var pushButton = undefined;
var led = undefined;

const getLightSwitches = (start, size) => {
    const sensors = fakeDataBase.getSwitchesTable();
    const sortedSensors = sensors.sort((a,b)=>a.id<b.id).slice(start,start+size);
    return sortedSensors;
};

const registerButton = () => {
    const sensors = fakeDataBase.getSwitchesTable();
    const relayGPIO = sensors[0].actionPin;
    const buttonGPIO = sensors[0].listenPin;

    led = new Gpio(relayGPIO, 'out'); 
    pushButton = new Gpio(buttonGPIO, 'in', 'rising', {debounceTimeout: 10}); 

    pushButton.watch(function (err, value) { 
    if (err) {
        console.error('There was an error', err); 
    return;
    }
        led.writeSync((led.readSync() ^ 1)); 
    });

    function unexportOnClose() {
        led.writeSync(0); 
        led.unexport(); 
        pushButton.unexport(); 
    };

    process.on('SIGINT', unexportOnClose);  
}

const pushTheButton = () => {
    led.writeSync((led.readSync() ^ 1)); 
}

const setRelayState = (state) => {
    led.writeSync(state)
}

module.exports = {
    getLightSwitches,
    registerButton,
    pushTheButton,
    setRelayState
};