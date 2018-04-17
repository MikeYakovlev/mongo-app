const mongoose = require('mongoose');

// const uri = 'mongodb://MikeBabatunde:baba24Tunde@@ds111804.mlab.com:11804/test-todo';

mongoose.Promise = global.Promise;
// mongoose.connect(uri);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Users');

module.exports = {mongoose};


