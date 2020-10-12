var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


/**
 * Websocket Setup
 */
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit('connectionStatus', true);

    socket.on('clientMessage', message => {
        console.log('clientMessage', message);

        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
                       + (currentdate.getMonth()+1)  + "/"
                       + currentdate.getFullYear() + " "
                       + currentdate.getHours() + ":"
                       + currentdate.getMinutes() + ":"
                       + currentdate.getSeconds();

        message.time = datetime;

        io.emit('serverMessage', message);
    })
});



http.listen(9000, () => {
    console.log('app listening on port 9000');
})

//module.exports = app;
