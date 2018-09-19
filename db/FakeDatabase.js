const IN_MEMORY_SENSORS = [
    {
        id: 1,
        name: 'Sensor with LED',
        listenPin: 18,
        motionPin: 12,
        actionPin: 21
    }
];

const IN_MEMORY_USERS = [
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
          },
          username: {
            type: String,
            unique: true,
            required: true,
            trim: true
          },
          password: {
            type: String,
            required: true,
          },
          passwordConf: {
            type: String,
            required: true,
          }
    }
]


module.exports = {
    getSwitchesTable() {
        return IN_MEMORY_SENSORS;
    },
    getUsersTable() {
        return IN_MEMORY_USER;
    }
};
