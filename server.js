var express = require('express');
var app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mqtt = require('mqtt');
const properties = require('properties');
const orgId = 'e3eazo';
const userName = 'a-e3eazo-lab0r8qrov';
const password = 'Dae3LVlOOGk&aBtpuv';
const clientId = 'A:'+ orgId + ':nismo';
const hostname = orgId + '.messaging.internetofthings.ibmcloud.com';
const deviceType = 'accelerometer';
const deviceId = 'ajgrande';
const subTopic = 'iot-2/type/'+deviceType+'/id/+/evt/status/fmt/json'; 
var mqttClient = mqtt.connect("mqtt://" + hostname + ":" + 1883, {
  "clientId" : clientId,
  "keepalive" : 30,
  "username" : userName,
  "password" : password
});

app.use(express.static(__dirname + '/dist/'));
server.listen(8000);

io.on('connection', (socket) => {
  console.log('a user connected');
});

mqttClient.on('connect', () => {
  mqttClient.subscribe(subTopic, {qos : 0}, (err, granted) => {
    if (err) {
      mqttClient = null;
    } else {
      console.log('MQTT client connected to IBM IoT Cloud');
    }
  });

  mqttClient.on('message', (topic, message) => {
    var data = JSON.parse(message.toString());
    io.emit('data', data);
  });
});
