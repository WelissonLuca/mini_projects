const express = require('express');
const path = require('path');
const htpp = require('http');
const socketIO = require('socket.io');


const app = express();

const server = htpp.createServer(app);
const io = socketIO(server);
server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
  console.log('Conexão detectada....');
  
  
  
});