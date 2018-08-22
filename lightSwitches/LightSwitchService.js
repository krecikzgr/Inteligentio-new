const fakeDataBase = require('../db/FakeDatabase');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIOnpm
var pushButton = undefined;
var motionDetector = undefined;
var led = undefined;
var timer = undefined;
var motionTimer = 1;

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

const registerMotionDetector = () => {
    const sensors = fakeDataBase.getSwitchesTable();
    const relayGPIO = sensors[0].actionPin;
    const motionDetectorGPIO = sensors[0].motionPin;

    led = new Gpio(relayGPIO, 'out'); 
    motionDetector = new Gpio(motionDetectorGPIO, 'in', 'rising', {debounceTimeout: 1}); 

    motionDetector.watch(function (err, value) { 
    if (err) {
        console.error('There was an error', err); 
    return;
    }
    console.log("Did detect motion");
        setLedState(1);
        if (typeof timer !== 'undefined' && timer !== null){
            clearTimeout(timer);
         }
        timer = setTimeout(motionTurnLightOff, 1000, 0); 
    });

    function unexportOnClose() {
        led.writeSync(0); 
        led.unexport(); 
        motionDetector.unexport(); 
    };

    process.on('SIGINT', unexportOnClose);  
}

const setLedState = (state) => {
    if(led.readSync() == 1 )
    console.log("DID set led state" + state);
    led.writeSync(state)    
}

const motionTurnLightOff = () => {
    console.log("Motion turn off " + motionTimer);
    motionTimer = motionTimer + 1;
    checkIfMotionStillExists() == 0 ? setLedState(0) : timer = setTimeout(motionTurnLightOff, 1000, 0);
}

const checkIfMotionStillExists = () => {
    console.log("check if motion still Exists" + motionDetector.readSync());
    return motionDetector.readSync()
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
    registerMotionDetector,
    setRelayState
};