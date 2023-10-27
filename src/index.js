const path = require('path');
var express = require('express');
var mongoose = require('mongoose');

var app = express(); // experiment change to const and export (avoid repeat at controller)
var http = require('http').Server(app)
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
const { verifyJWT } = require('./utils/auth');
require('dotenv-safe').config('../.env.example')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve static files
app.use('/', express.static(path.join(__dirname, '..', '/public')));
auth = require('./utils/auth');

//routes
app.use('/login', require('./routes/api/authApi.js'))
app.use('/', verifyJWT, require('./routes/root.js'));
app.use('/messages', require('./routes/api/messagesApi.js'));

//app.use('/logout', require('./routes/api/authApi.js'))

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
// TODO: 
// build auth screen
// build auth backend: just implement verifyJWT in endpoints (avoid code repeat)
// /login dando 404