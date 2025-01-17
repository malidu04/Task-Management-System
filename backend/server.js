const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // To enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // For logging HTTP requests in development

// Routes
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/tasks', taskRoutes); // Task-related routes

// Health Check Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`); // Log the error
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
