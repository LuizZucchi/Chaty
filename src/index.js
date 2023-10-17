const { error } = require('console');
const { Message } = require('./models/messageModel.js')
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

/*
Arrow functions (params) => {
    function_tasks
}
*/
// serve static files
app.use('/', express.statuc(path.join(__dirname, '..', '/public')));

//routes
app.use('/', require('./routes/root.js'));
app.use('/messages', require('./routes/api/messages.js'));

io.on('connection', () => {
    console.log('a user connected')
})

mongoose.connect(dbUrl, {userMongoClient: false}, (err) => {
    console.log('mongodb connected', err);
})

var server = http.listen(3000, () => {
    console.log('server at port:', server.address().port);
});

// TODO: add mongo db connection
// TODO: test application
