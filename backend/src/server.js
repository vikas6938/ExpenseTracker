const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');
require('dotenv').config();
const path = require('path');

// Initialize app
const app = express();

// Upload Images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Middleware to parse incoming JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());  // Enable CORS

// Database connection
dbConnection();

// Mount the API routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 