const express = require('express');
const app = express();

app.use(express.json());

const food= [

    {id:1, name:"Matoke", price:200},
    {id:2, name:"Piza", price:200},
    {id:3, name:"Rice", price:200},
    {id:4, name:"Sweets", price:200},
    {id:5, name:"Juice", price:200},

];

app.get('/food', (req, res) => {
    res.send([food]);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port,() => console.log('We are listening on port ${port}'));