const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please provide your name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'please provide a valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 6,
  },
});

module.exports = model('User', userSchema);
