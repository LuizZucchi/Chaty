const mongoose = require('mongoose');
dbUrl = "mongodb://172.25.146.148:27017";

mongoose.connect(dbUrl);

const kittySchema = new mongoose.Schema({
    name: String
  });

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);