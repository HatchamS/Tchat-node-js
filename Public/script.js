const socket = io();

var send = function () {
var text = document.getElementById('Envoyer').value;
socket.emit('chat message',text);
}

var receive = function(msg) {
const li = document.createElement('li');
li.innerText = msg;
document.getElementById('discussion').appendChild(li);
}
socket.on('chat message', receive);