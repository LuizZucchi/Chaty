const { default: mongoose } = require("mongoose");

var Message = mongoose.model( // rewrite as a mock
    'Message', {
        name: String,
        message: String
    }
)

module.exports = {Message};