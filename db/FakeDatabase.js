const IN_MEMORY_SENSORS = [
    {
        id: 1,
        name: 'Sensor with LED',
        listenPin: 18,
        actionPin: 21
    }
];


module.exports = {
    getSwitchesTable() {
        return IN_MEMORY_SENSORS;
    }
};
