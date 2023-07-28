const express = require('express');
const routes = express.Router();
const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

routes.post('/', createTask);
routes.get('/', getAllTasks);
routes.get('/:id', getTask);
routes.patch('/:id', updateTask);
routes.delete('/:id', deleteTask);

module.exports = routes;
