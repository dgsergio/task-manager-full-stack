const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.createToken = function (id) {
  return jwt.sign({ id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

userSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema);
