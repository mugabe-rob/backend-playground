const express = require('express');
const app = express();


const productRoutes = require('./src/routes/product.route');
const authRoutes = require('./src/routes/auth.route');
const authMiddleware = require('./src/middleware/auth.middleware');

const mongoose = require('mongoose');


app.use(express.json());


app.use('/api/products', productRoutes); 
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Hey Robert Welcome tho the Backend');
});

app.get('/api/protected', authMiddleware, (req,res) => {
    res.send('Hello ${req.username}, The route is protected but you have access to it!');
});


mongoose.connect("mongodb+srv://mugaberoberto007:OA9Lx0ULu61mX5fe@backenddb.xyhdi92.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the database");
        app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
    })

    .catch(() => {
        console.log("Failed to connect to MongoDB");
    });
