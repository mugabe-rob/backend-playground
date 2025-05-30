const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const SECRET_KEY = 'your_jwt_secret';

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = User.findByUsername(username);
  if (existingUser) return res.status(400).send('User already exists');

  const hashedPassword = await bcrypt.hash(password, 8);
  const user = User.create({ username, password: hashedPassword });
  res.status(201).send(user);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = User.findByUsername(username);
  if (!user) return res.status(400).send('Invalid username or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid username or password');

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.send({ token });
};