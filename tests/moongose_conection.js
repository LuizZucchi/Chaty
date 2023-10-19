const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://admin:secret@localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your data
const Schema = mongoose.Schema;
const myDataSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

// Create a model based on the schema
const MyData = mongoose.model('MyData', myDataSchema);

// Create a new document to insert
const documentToInsert = new MyData({
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
});

// Save the document to the database
documentToInsert.save((err, savedDoc) => {
  if (err) {
    console.error('Error saving document:', err);
  } else {
    console.log('Document saved successfully:', savedDoc);
  }

  // Close the MongoDB connection
  mongoose.connection.close();
});