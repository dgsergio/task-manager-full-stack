const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
require('express-async-errors');

const signup = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json(user);
};

const login = async (req, res) => {
  res.send('loggin-in...');
};

module.exports = { login, signup };
