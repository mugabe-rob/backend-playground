const express = require('express');
const courseRoutes = require('./routes/courseRoutes');
const config = require('./config');
const logger = require('../../middleware/logger');

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Welcome route
app.get('/', (req, res) => {
  res.send('Hey Robert, Try this API!');
});

// Routes
app.use('/api/courses', courseRoutes);

// Start the server
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));