const mongoose = require('mongoose');

const uri = 'mongodb://mike:baba24Tunde@ds147469.mlab.com:47469/todos';

mongoose.Promise = global.Promise;
// mongoose.connect(uri);
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Users');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};


