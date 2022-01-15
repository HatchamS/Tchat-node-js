const socket = io('http://localhost:80');
const name = prompt('Votre pseudo')
socket.emit('new-user', name)

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
socket.on('user-connected', name => {
    receive(`${name} connecté`)
  })
  socket.on('user-disconnect', name => {
    receive(`${name} déconnecté`)
  })