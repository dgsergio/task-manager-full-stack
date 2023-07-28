const express = require('express');
const routes = express.Router();
const { login, signup } = require('../controllers/auth');

routes.post('/login', login);
routes.post('/signup', signup);

module.exports = routes;
