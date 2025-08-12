const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes (replace with your actual routes)
app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('💼 Murphy Backend is Live');
});

module.exports = app;
