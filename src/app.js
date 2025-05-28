const express = require('express');

const { sequelize, User } = require('./models');

const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email, contact, address, age, date } = req.body;
  try {
    const user = await User.create({ name, email, contact, address, age, date });
    return res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function main() {
  await sequelize.sync();
}

app.get('/users', async (req, res) => {
    try{
       const users = await User.findAll()
       
       return res.json(users)
    }
    catch(err)
    {
        console.log('Error fetching users:', err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
})

app.get('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
       const user = await User.findOne({
        where: { uuid }
       });
       return res.json(user);
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});

app.put('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update(req.body);
    return res.json(user);
  } catch (err) {
    console.log('Error updating user:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});


app.delete('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    return res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.log('Error deleting user:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});




app.listen(3000, async () => {
  console.log('Server is running on port 3000');
  console.log('Connecting to the database...');
  
  await main();
});