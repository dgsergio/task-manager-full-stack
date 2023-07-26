const createTask = (req, res) => {
  res.send('creating task...');
};

const getAllTasks = (req, res) => {
  res.send('getting all tasks...');
};

const getTask = (req, res) => {
  res.send('getting single task...');
};

const updateTask = (req, res) => {
  res.send('patching task...');
};

const deleteTask = (req, res) => {
  res.send('deleting task...');
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
