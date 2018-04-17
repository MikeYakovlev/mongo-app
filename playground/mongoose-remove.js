const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5ad5ffb1eb11960d3cb47691'}).then((todo) => {
  
});


// remove by ID
let randomId = '5ad5ffb1eb11960d3cb47691';
Todo.findByIdAndRemove(randomId).then((todo) => {
  console.log(todo);
});
