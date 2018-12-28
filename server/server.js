const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

 io.on('connection', (socket) => {
    console.log('New user connected');

    //from server to client
    socket.emit('newMessage',generateMessage('Admin','welcome to the chat room'));
    socket.broadcast.emit('newMessage',generateMessage('Admin','new user joined'));

    //from client to server
    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
        io.emit('newMessage',generateMessage(message.from,message.text));
        
        //wont see message sent by yourself,but others will
        // socket.broadcast.emit('newMessage',{
        //     from:message.from,
        //     text:message.text,
        //     createAt:new Date().getTime
        // });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
