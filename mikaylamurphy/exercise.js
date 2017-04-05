var mqtt = require('mqtt');
var client = {};
var exercise = {};
exercise.channelsReceived = [];

// We have devices connected to a broker publishing
// data. Each device may publish any data in topics
// such as:
// device/loganWeather/temperature
// device/loganWeather/pressure
// device/MITWeather/temperature
// device/MITWeather/pressure
// device/muddyCharles/soundLevel
// device/muddyCharles/lightLevel
// device/muddyCharles/temperature

exercise.ConnectToServer = function(address){
    // Connect to the MQTT broker
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    client = mqtt.connect(address, 1883)
    exercise.client = client;
};

exercise.SubscribeToAllSensorData = function(){
    // Subscribe to sensor data from all
    // devices
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    client.subscribe('device/#');

};

exercise.SubscribeToTemperatureDataOnly = function(){
    // Subscribe to sensor data from only
    // devices which report temperature
    // data
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    client.subscribe('device/+/temperature')
};

exercise.LogChannelsReceived = function(){
    // Store the channel used for any
    // incoming message in the
    // exercise.channelsReceived array
    // -------------------------------
	// ---------- Your Code ----------
	// -------------------------------
    exercise.client.on('message', function(channel, message){
        exercise.channelsReceived.push(channel);
    })
    //exercise.channelsReceived = exercise.channelsReceived.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

};

exercise.Disconnect = function(){
    // Disconnect the client
    // -------------------------------
    // ---------- Your Code ----------
    // -------------------------------
    client.end()
};

module.exports = exercise;
