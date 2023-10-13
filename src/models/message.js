const { default: mongoose } = require("mongoose");

var Message = mongoose.model(
    'Message', {
        name: String,
        message: String
    }
)