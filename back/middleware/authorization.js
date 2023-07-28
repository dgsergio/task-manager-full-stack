const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const { name, id } = jwt.verify(token, process.env.JWT_SECRET);
  req.user = { name, id };
  next();
};

module.exports = authorization;
