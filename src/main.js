/**
 * Created by pac on 27/03/16.
 */

var socket = new io.Socket();

socket.connect('http://127.0.0.1:8080');

// Add a connect listener
socket.on('connect',function() {
    console.log('Client has connected to the server!');
});
// Add a connect listener
socket.on('message',function(data) {
    console.log('Received a message from the server!',data);
});
// Add a disconnect listener
socket.on('disconnect',function() {
    console.log('The client has disconnected!');
});

// Sends a message to the server via sockets
function sendMessageToServer(message) {
    socket.send(message);
};