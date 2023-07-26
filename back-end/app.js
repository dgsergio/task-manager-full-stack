const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const tasksRoutes = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
require('dotenv').config();
const connectDB = require('./db/connect');

app.get('/', (req, res) => {
  res.status(200).send('<h1>Task Manager API</h1>');
});

app.use(express.json());
app.use('/api/v1', authRoutes);
app.use('/api/v1/tasks', tasksRoutes);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  const port = process.env.PORT || 3000;
  try {
    app.listen(port, () => {
      connectDB(process.env.MONGO_URI);
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
