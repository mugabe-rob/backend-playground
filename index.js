const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

// This is a middleware that parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hey Robertson, this is anode API")
});






// //GET ALL PRODUCTS
// app.get('/api/products/:id', async (req, res) => {
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }
//     catch (error){
//         res.status(500).json({message: error.message});
//     }
// });


// //POSTING A PRODUCT IN THE DATABASE

// app.post('/api/products', async (req, res) => {
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     }
//     catch (error){
//         res.status(500). json({message:error.message})
//     }

// });


// //UPDATING A PRODUCT
// app.put('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id,req.body);

//         if(!product)
//             {
//            return res.status(404).json({message: "Product not found please"}); 
//         }
//         const UpdatedProduct = await Product.findById(id);
//         res.status(200).json(UpdatedProduct);
//     }
//     catch (error){
//         res.status(500).json({message: error.message});
//     }
// })


// //DELETING A PRODUCT
//  app.delete('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if (!product)

//             {
//             return res.status(404).json({message: "Product is not found please"}); 
//         }  
//         res.status(200).json({message: "Product deleted well!"});
//     }
//     catch (error){
//         res.status(500).json({message: error.message});
//     }
//  })

//AN API TO GET A SINGLE PRODUCT
app.get('/api/product/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const product= await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
})


//A CONNECTION STRING TO MONGODB

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
