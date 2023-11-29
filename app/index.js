// app/index.js
const express = require('express');
const http = require('http');
const socketController = require('./socket/socketController');
const chatHandler = require('./socket/chatHandler');

const app = express();
const server = http.createServer(app);

const test = require('./Test');

// Initialize Socket.IO
socketController.initSocket(server);
chatHandler.setupChatHandlers();
app.use("/api/v1",test);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
