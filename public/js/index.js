var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // to server
    // socket.emit('createMessage',{
    //     from:'JC',
    //     text:'hey, this is JC.'
    // });
});

socket.on('disconnect',function () {
    console.log('Disconnected from server');
});

socket.on('newMessage',function (message){
    console.log('newMessage',message);
});