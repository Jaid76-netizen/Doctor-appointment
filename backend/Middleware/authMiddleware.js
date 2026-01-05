const jwt = require('jsonwebtoken');
const User = require('../models/User');

// JWT verify middleware
const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Secret key same as used in login
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user; // Attach user info to request
    next();
  } catch (err) {
    return res.status(400).json({ message: 'Invalid token', error: err });
  }
};

module.exports = authenticateUser;
