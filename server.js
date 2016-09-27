const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mqtt = require('mqtt');
const properties = require('properties');
const orgId = 'e3eazo';
const userName = 'a-e3eazo-lab0r8qrov';
const password = 'Dae3LVlOOGk&aBtpuv';
const clientId = 'A:' + orgId + ':nismo';
const hostname = orgId + '.messaging.internetofthings.ibmcloud.com';
const deviceType = 'accelerometer';
const deviceId = 'ajgrande';
const subTopic = 'iot-2/type/' + deviceType + '/id/+/evt/status/fmt/json';
let mqttClient = mqtt.connect('mqtt://' + hostname + ':' + 1883, {
  clientId,
  'keepalive': 30,
  'username': userName,
  password,
});

app.use(express.static(__dirname + '/dist/'));
server.listen(8000);

io.on('connection', (socket) => {
  console.log('a user connected');
});

mqttClient.on('connect', () => {
  mqttClient.subscribe(subTopic, { qos: 0 }, (err, granted) => {
    if (err) {
      mqttClient = null;
    } else {
      console.log('MQTT client connected to IBM IoT Cloud');
    }
  });
  const queue = [];
  mqttClient.on('message', (topic, message) => {
    let data = JSON.parse(message.toString());
    queue.push(data);
    console.log(queue, queue.length);
    if (queue.length < 3) {
      data.alarm = false;
      io.emit('data', data);
    } else {
      const dataOne = queue.shift();
      const dataTwo = queue[0];
      if (Math.abs(dataOne.xaxis - dataTwo.xaxis) > 10 || Math.abs(dataOne.yaxis - dataTwo.yaxis) > 10) {
        data.alarm = true;
        io.emit('data', data);
      } else {
        data.alarm = false;
        io.emit('data', data);
      }
    }
  });
});
