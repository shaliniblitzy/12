/**
 * Main application entry point for the Node.js/Express.js server
 * This file implements a simple web server with two API endpoints:
 * - GET / : Returns "Hello world"
 * - GET /evening : Returns "Good evening"
 */

// Import required dependencies
const express = require('express');

// Create Express application instance
const app = express();

// Define port to listen on (use environment variable PORT if available, otherwise default to 3000)
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * @route GET /
 * @returns {string} Returns "Hello world" text response
 */
app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

/**
 * Evening greeting endpoint handler
 * @route GET /evening
 * @returns {string} Returns "Good evening" text response
 */
app.get('/evening', (req, res) => {
  res.status(200).send('Good evening');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(500).send('Internal Server Error');
});

// Handle 404 - Route not found
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running and listening on port ${PORT}`);
  console.log(`- Access the root endpoint at: http://localhost:${PORT}/`);
  console.log(`- Access the evening endpoint at: http://localhost:${PORT}/evening`);
});

// Export the app for testing purposes (if needed)
module.exports = app;