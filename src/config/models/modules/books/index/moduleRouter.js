const express = require('express');
const booksController = require('../books.controller');

const router = express. Router();

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getAllBooks);
router.post('/', booksController.createBook);
router.get('/:id', booksController.updateBook);
router.patch('/:id', booksController.updateBook);
router.delete('/id', booksControlller.deleteBook);

module.exports = router;
