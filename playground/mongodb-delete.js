// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // current collection
  const db = client.db('Todos');
  

  // delete many
  db.collection('User').deleteMany({name: 'Mike'}).then((result) => {
    console.log(result);
  });


  // delete one
  db.collection('User').deleteOne({name: 'Person'}).then((result) => {
    console.log(result);
  });


  // find one and delete
  db.collection('User').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  });


  // client.close();
});
