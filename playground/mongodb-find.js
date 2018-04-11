// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // const db = client.db('Todos');
  // db.collection('User').find({_id: new ObjectID('5accc8b4c8513c2c485b1f89')}).toArray().then((docs) => {
  //   console.log('User');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  // const db = client.db('Todos');
  // db.collection('User').find().count().then((count) => {
  //   console.log(`User count: ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  const db = client.db('Todos');
  db.collection('User').find({name: 'Mike'}).toArray().then((docs) => {
    console.log('User');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })

  // client.close();
});
