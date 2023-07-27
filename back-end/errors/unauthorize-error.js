const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class UnauthorizeError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizeError;
