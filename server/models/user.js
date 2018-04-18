const mongoose = require('mongoose');
const validator = require('validator');

// {
//   email: 'yakovlev_miha@yahoo.com'
//   password: '123456789'
//   tokens: [{
//     access: 'auth',
//     token: 'Hehre2342jfkfhpll'
//   }]
// }

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  surname: {
    type: String,
    required: false,
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
    minlength: 6,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

module.exports = {
  User
};