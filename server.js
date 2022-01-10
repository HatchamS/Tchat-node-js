const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require("express");
app.use(express.static("Public"));


io.on('connection', function(socket){
    console.log("Nouvel utilisateur connecté")
    socket.on('disconnect', function (){
        console.log('utilisateur déconnecté');
    })
    socket.on('chat message', function (msg){
        io.emit('chat message', msg);
    })

})

http.listen(80, function(){
    console.log("Server running on 80")
})