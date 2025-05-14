const booksService = require('./books.service');

// Controller methods for books
exports.getAllBooks = (req, res) => {
  const books = booksService.getAllBooks(req.query);
  res.json(books);
};

exports.getBookById = (req, res) => {
  try 
  {
    const book = booksService.getBookById(+req.params.id);
    res.json(book);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.createBook = (req, res) => {
  try {
    const newBook = booksService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBook = (req, res) => {
  try {
    const updatedBook = booksService.updateBook(+req.params.id, req.body);
    res.json(updatedBook);
  } catch (error) {
    res.status(error.code || 400).json({ error: error.message });
  }
};

exports.partialUpdateBook = (req, res) => {
  try {
    const updatedBook = booksService.partialUpdateBook(+req.params.id, req.body);
    res.json(updatedBook);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deleteBook = (req, res) => {
  try {
    booksService.deleteBook(+req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};