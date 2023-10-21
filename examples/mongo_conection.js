const { MongoClient } = require('mongodb');

async function write() {
  const uri = 'mongodb://admin:secret@localhost:27017';
  const client = new MongoClient(uri, { useNewUrlParser: true });

  try {
    await client.connect();
    console.log('Write Connected to mongo');

    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const testDocument = {
      name: 'John Doe3',
      age: 30,
      email: 'johndoe@example.com',
    };

    const result = await collection.insertOne(testDocument);
    console.log(`Inserted ${result.insertedCount} document with _id: ${result.insertedId}`);
  } finally {
    await client.close();
    console.log('Disconected');
  }
}

write().catch(console.error);

async function read() {
  const uri = 'mongodb://admin:secret@localhost:27017';
  const client = new MongoClient(uri, { useNewUrlParser: true });

  try {
    await client.connect();
    console.log("Read connected")

    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const result = await collection.findOne({name: 'John Doe3'});
    console.log(`Found ${result.name}`);
  } finally {
    await client.close();
    console.log('Disconected');
  }
}

read().catch(console.error);

