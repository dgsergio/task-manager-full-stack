const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).json({ msg: err.message });

  let responseErr = {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'Something went wrong',
  };

  if (err.code || err.code === 11000)
    responseErr = {
      code: StatusCodes.BAD_REQUEST,
      msg: 'The email already exist.',
    };

  if (err.name === 'ValidationError') {
    const errorsKeys = Object.keys(err.errors).join(', ');
    responseErr = {
      code: StatusCodes.BAD_REQUEST,
      msg: `Could not validate: ${errorsKeys}`,
    };
  }

  if (err.name === 'CastError') {
    responseErr = {
      code: StatusCodes.NOT_FOUND,
      msg: `No task found with id ${err.value}`,
    };
  }
  res.status(responseErr.code).json({ msg: responseErr.msg });
};

module.exports = errorHandler;
