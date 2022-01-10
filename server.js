var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
    socket.on('disconnect', function (){
        console.log('a user is disconnected');
    })
    socket.on('chat message', function (msg){
        io.emit('chat message', msg);
    })

})

http.listen(80, function(){
    console.log("Server running on 80")
})