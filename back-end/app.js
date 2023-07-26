const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const tasksRoutes = require('./routes/tasks');

app.get('/', (req, res) => {
  res.status(200).send('<h1>Task Manager API</h1>');
});

app.use('/api/v1', authRoutes);
app.use('/api/v1/tasks', tasksRoutes);

const start = async () => {
  try {
    app.listen(3000, () => {
      console.log(`Server is listening on port 3000`);
    });
  } catch (err) {}
};

start();
