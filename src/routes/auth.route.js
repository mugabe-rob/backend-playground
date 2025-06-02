const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', login);

router.get('/users', async (req, res) => {
  try {
    const users = await db.user.findAll({
      attributes: ['id', 'username', 'email', 'createdAt'] 
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});


module.exports = router;