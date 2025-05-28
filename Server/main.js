const express = require('express');
const bodyParser = require('body-parser');
const moduleRouter = require('../src/index/moduleRouter');

const app = express();

app.use(bodyParser.json());

app.use('/', moduleRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));


