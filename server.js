// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory “DB”
let books = [
  { id: 1, title: "1984", author: "Orwell", year: 1949, available: true },
  { id: 2, title: "Dune", author: "Herbert", year: 1965, available: true },
  { id: 3, title: "It", author: "King", year: 1986, available: false },
  { id: 4, title: "Fahrenheit 451", author: "Bradbury", year: 1953, available: true },
  { id: 5, title: "The Hobbit", author: "Tolkien", year: 1937, available: false }
];
let nextId = 6;

// GET all (with optional ?author=…&year=…)
app.get('/books', (req, res) => {
  let result = books;
  if (req.query.author)  result = result.filter(b => b.author === req.query.author);
  if (req.query.year)    result = result.filter(b => b.year === +req.query.year);
  res.json(result);
});

// GET one by id
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).json({ error: 'Not found' });
  res.json(book);
});

// POST (create)
app.post('/books', (req, res) => {
  const { title, author, year, available } = req.body;
  if (!title || !author || typeof year !== 'number') {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }
  const newBook = { id: nextId++, title, author, year, available: !!available };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (replace)
app.put('/books/:id', (req, res) => {
  const idx = books.findIndex(b => b.id === +req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const { title, author, year, available } = req.body;
  if (!title || !author || typeof year !== 'number') {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }
  books[idx] = { id: +req.params.id, title, author, year, available: !!available };
  res.json(books[idx]);
});

// PATCH (partial update)
app.patch('/books/:id', (req, res) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).json({ error: 'Not found' });
  Object.assign(book, req.body);
  res.json(book);
});

// DELETE
app.delete('/books/:id', (req, res) => {
  const lenBefore = books.length;
  books = books.filter(b => b.id !== +req.params.id);
  if (books.length === lenBefore) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(` Running on http://localhost:${PORT}`));
