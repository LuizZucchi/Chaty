const { MongoTopologyClosedError } = require('mongodb');
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/mydatabase';

const Schema = mongoose.Schema;

const exampleModelSchema = new Schema({
	a_string: String,
	a_int: Number,
});

const exampleModel = mongoose.model("ExampleModel3", exampleModelSchema);


async function main() {
    const authDict = {
        authSource: "admin",
        user: "elzuko",
        pass: "221432",
    };
	await mongoose.connect(mongoURL);
    const exampleModelInstance = new exampleModel({
        a_string: "testeString",
        a_int: 22,
    });
    await exampleModelInstance.save();
    mongoose.connection.close()
}
main().catch((err) => console.log(err));