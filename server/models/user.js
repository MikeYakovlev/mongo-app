const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  surname: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  age: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  }
});

module.exports = {
  User
};