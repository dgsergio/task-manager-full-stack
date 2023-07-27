const BadRequestError = require('./bad-request-error');
const CustomError = require('./custom-error');
const UnauthorizeError = require('./unauthorize-error');
const NotFoundError = require('./not-found-error');

module.exports = {
  CustomError,
  BadRequestError,
  UnauthorizeError,
  NotFoundError,
};
