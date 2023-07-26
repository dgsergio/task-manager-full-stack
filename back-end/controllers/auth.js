const signup = (req, res) => {
  res.send('signing-up...');
};

const login = (req, res) => {
  res.send('loggin-in...');
};

module.exports = { login, signup };
