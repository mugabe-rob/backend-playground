// index.js - Simple Node.js API with in-memory array storage
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// In-memory data store as an array
let items = [];
let nextId = 1; // For generating unique IDs

// GET all items
app.get('/api/items', (req, res) => {
  res.json({ success: true, data: items });
});

// GET a specific item by id
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  
  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }
  
  res.json({ success: true, data: item });
});

// POST a new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: nextId++,
    ...req.body,
    createdAt: new Date()
  };
  
  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
});

// PUT (update) an existing item
app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }
  
  const updatedItem = {
    ...items[itemIndex],
    ...req.body,
    id: id, // Ensure ID doesn't change
    updatedAt: new Date()
  };
  
  items[itemIndex] = updatedItem;
  res.json({ success: true, data: updatedItem });
});

// DELETE an item
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }
  
  const deletedItem = items[itemIndex];
  items.splice(itemIndex, 1);
  
  res.json({ success: true, data: deletedItem });
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});