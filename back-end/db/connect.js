const { connect } = require('mongoose');

const connectDB = (url) => {
  connect(url);
};

module.exports = connectDB;
