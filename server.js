const express = require('express');
const app = express();
const db = require('./src/models');

const productRoutes = require('./src/routes/product.route');
const authRoutes = require('./src/routes/auth.route');
const orderRoutes = require('./src/routes/order.route');
const authMiddleware = require('./src/middleware/auth.middleware');

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hey Robert, Welcome to the MySQL-Backed Backend');
});

app.get('/api/protected', authMiddleware, (req, res) => {
  res.send(`Hello ${req.username}, the route is protected and you have access!`);
});

// Sync MySQL DB
db.sequelize.sync({ force: false })
  .then(() => {
    console.log('DB Connected');
    app.listen(3000, () => console.log('Server is running on port 3000'));
  })
  .catch((err) => console.log('DB Sync Error:', err));
