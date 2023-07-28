const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const tasksRoutes = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const authorization = require('./middleware/authorization');
require('dotenv').config();
const connectDB = require('./db/connect');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

app.get('/', (req, res) => {
  res.status(200).send('<h1>Task Manager API</h1>');
});

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use('/api/v1', authRoutes);
app.use('/api/v1/tasks', authorization, tasksRoutes);
app.use(notFound);
app.use(errorHandler);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

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
