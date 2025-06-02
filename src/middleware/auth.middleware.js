const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_jwt_secret';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(403).send('Token required');

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // includes username and role
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Admin access required');
  }
  next();
};

module.exports = authMiddleware;
module.exports.isAdmin = isAdmin;
