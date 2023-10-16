const { error } = require('console');
const { Message } = require('./models/message.js')
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

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    })
})

app.get('/messages/:user', (req, res) => {
    var user = req.params.user
    Message.find({name: user}, (err, messages) => {
        res.send(messages);
    })
})

app.post('/messages', async (req, res) => {
    try {
        var message = new Message(req.body);

        var savedMessage = await message.save()
        console.log('saved');

        var censored = await Message.findOne({
            message: 'badword'
        });

        if (censored) {
            await Message.removeAllListeners({_id: censored.id})
        } else {
            io.emit('message', req.body);
        }

        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        return console.log('erro', error);
    }
    finally {
        console.log('Message Posted')
    }
})

io.on('connection', () => {
    console.log('a user connected')
})

mongoose.connect(dbUrl, {userMongoClient: false}, (err) => {
    console.log('mongodb connected', err);
})

var server = http.listen(3000, () => {
    console.log('server at port:', server.address().port);
});