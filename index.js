var express = require('express');
var app = express();

var server = require('http').Server(app);
var path = require('path');

var io = require('socket.io')(server);
var r = require('rethinkdb');

app.use(express.static('public'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log('Server running on port 9000...');
server.listen(9000);
