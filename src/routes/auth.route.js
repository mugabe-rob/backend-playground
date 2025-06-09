const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');
const db = require('../models'); 

router.post('/register', register);
router.post('/login', login);

router.get('/users', async (req, res) => {
  try {
    const users = await db.User.findAll({ 
      attributes: ['id', 'username','createdAt', 'updatedAt'] 
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

module.exports = router;