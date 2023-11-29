// socket/socketController.js
const socketIO = require('socket.io');

let io; // Declare a variable to store the Socket.IO instance

function initSocket(server) {
  io = socketIO(server);
  

  io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle socket events here
    io.emit('chat message', {data:"hello"});
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

function getIO() {
  if (!io) {
    throw new Error('Socket.IO not initialized!');
  }
  return io;
}

module.exports = {
  initSocket,
  getIO,
};
