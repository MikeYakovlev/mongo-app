const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const id = '5acf1c8c058e6217306abb99';


if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// all todos
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});


// one todo
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});


// todo by ID
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not find')
  }
  console.log('Todo by ID', todo);
}).catch((e) => console.log(e));


// user by ID
User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not find')
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));

