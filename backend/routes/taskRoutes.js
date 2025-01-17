const express = require('express');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getTasks); // Get all tasks
router.post('/', protect, createTask); // Create a new task
router.put('/:id', protect, updateTask); // Update a task
router.delete('/:id', protect, deleteTask); // Delete a task

module.exports = router;
