const Task = require('../models/Task');
const { NotFoundError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const createTask = async (req, res) => {
  req.body.createdBy = req.user.id;
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json(task);
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.id });
  res.status(StatusCodes.OK).json({ totalTask: tasks.length, tasks });
};

const getTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    createdBy: req.user.id,
  });
  if (!task) throw new NotFoundError('Task ID does not exist');
  res.status(StatusCodes.OK).json({ task });
};

const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: req.params.id,
      createdBy: req.user.id,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!task) throw new NotFoundError('Task ID does not exist');
  res.status(StatusCodes.CREATED).json({ task });
};

const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    createdBy: req.user.id,
  });
  if (!task) throw new NotFoundError('Task ID does not exist');
  res.status(StatusCodes.OK).json({ task });
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
