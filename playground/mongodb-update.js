// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // current collection
  const db = client.db('Todos');
  

  db.collection('User').findOneAndUpdate({
      _id: new ObjectID('5acccb048dbd282600208643')
    }, {
      $set: {
        surname: 'Yakovlev'
      }
    }, {
      returnOriginal: 'Babatunde'
    }
  ).then((result) => {
    console.log(result);
  });


  db.collection('User').findOneAndUpdate({
      name: 'Helen'
    }, {
      $set: {
        surname: 'Yakovleva'
      }, 
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: 'Babatunde'
    }
  ).then((result) => {
    console.log(result);
  });

  // client.close();
});
