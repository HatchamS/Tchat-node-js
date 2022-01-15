const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require("express");
app.use(express.static("Public"));

const users = {}

io.on('connection', function(socket){
    socket.on('new-user', function (name){
        
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    })
    socket.on('disconnect', function (){
        
        socket.broadcast.emit('user-disconnect', users[socket.id]);
    })
    socket.on('chat message', function (msg){
        io.emit('chat message', `${users[socket.id]} : ${msg}`);
    })

})

http.listen(80, function(){
    console.log("Server running on 80")
})