import { getAllBooks } from './books.controller.js';

import express from 'express';

const booksRouter = express. Router();

booksRouter.get('/', getAllBooks);
// booksRouter.get('/:id', booksController.getAllBooks);
// booksRouter.post('/', booksController.createBook);
// booksRouter.get('/:id', booksController.updateBook);
// booksRouter.patch('/:id', booksController.updateBook);
// booksRouter.delete('/id', booksControlller.deleteBook);


export default booksRouter;
