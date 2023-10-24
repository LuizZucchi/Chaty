const path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve static files
app.use('/', express.static(path.join(__dirname, '..', '/public')));

//routes
app.use('/', require('./routes/root.js'));
app.use('/messages', require('./routes/api/messages.js'));

io.on('connection', () => {
    console.log('a user connected')
})

const dbUrl = "mongodb://localhost:27017/mydatabase"

const authDict = {
    authSource: "admin",
    user: "elzuko",
    pass: "221432",
};

mongoose.connect(dbUrl, authDict, {}, (err) => {
    console.log('mongodb connected', err);
})

var server = http.listen(3000, () => {
    console.log('server at port:', server.address().port);
});

module.exports = {
    app,
    io,
    http
}
// TODO: implementar exemplo de auth jwt
// TODO: criar repo git
