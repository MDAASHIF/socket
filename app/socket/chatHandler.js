// socket/chatHandler.js
const socketController = require('./socketController');

function setupChatHandlers() {
  const io = socketController.getIO();
  io.emit('chat message', {data:"hello"});
//   io.on('connection', (socket) => {
//     console.log('User connected to chat');

//     // Handle chat-related socket events

//     socket.on('disconnect', () => {
//       console.log('User disconnected from chat');
//     });
//   });
}

module.exports = {
  setupChatHandlers,
};
