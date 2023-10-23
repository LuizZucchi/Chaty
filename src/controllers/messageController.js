const { Message } = require('../models/messageModel.js')
var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);


const data = {
    messages: require('../models/mocks/messages.json'),
    setMessages: function (data) { this.messages = data }
}

const getAllMessages = (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    })
}

const getUserMessages = (req, res) => {
    var user = req.params.user
    Message.find({name: user}, (err, messages) => {
        res.send(messages);
    })
}

const pubMessage = async (req, res) => {
    try {
        console.log(req.body);
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
}

module.exports = {
    getAllMessages,
    getUserMessages,
    pubMessage
}