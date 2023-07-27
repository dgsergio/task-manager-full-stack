const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).json({ msg: err.message });

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: 'Something went wrong :(', err });
};

module.exports = errorHandler;
