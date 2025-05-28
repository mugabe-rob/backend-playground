const express = require('express');
const app = express();
const courseRoutes = require('./routes/courseRoutes');
const productRoutes = require('./routes/product.route'); 
const mongoose = require('mongoose');


app.use(express.json());


app.use('/api/courses', courseRoutes);
app.use('/api/products', productRoutes); 


app.get('/', (req, res) => {
  res.send('Hey Robert Welcome tho the Backend');
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
