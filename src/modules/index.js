import express from 'express';
// const bookRouter = require('../config/modules');
import booksRouter from './books/index.js';

const router = express.Router();

router.use('/', booksRouter);

export default router;