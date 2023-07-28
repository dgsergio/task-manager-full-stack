const { UnauthorizeError } = require('../errors');
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
require('express-async-errors');

const signup = async (req, res) => {
  const user = await User.create(req.body);
  const { _id, name, email } = user;
  const token = user.createToken(_id);
  res.status(StatusCodes.CREATED).json({ user: { name, email }, token });
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthorizeError('Invalid credentials');
  const passwordMatch = await user.comparePasswords(req.body.password);
  if (!passwordMatch) throw new UnauthorizeError('Invalid credentials');
  const { _id, name } = user;
  const token = user.createToken(_id);
  res.status(StatusCodes.OK).json({ user: { name }, token });
};

module.exports = { login, signup };
