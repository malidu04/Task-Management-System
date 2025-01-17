const Task = require('../models/Task');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    const { title, description, priority, deadline } = req.body;

    try {
        const task = new Task ({
            user: req.user.id,
            title,
            description,
            priority,
            deadline,
        });
    const createTask = await task.save();
    res.status(201).json(createTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        if (task && task.user.toString() === req.user.id) {
            const updateTask = await Task.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
        res.json(updateTask);
        } else {
            res.status(404).json({ message: 'Task not found or not authorized '});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        if(task && task.user.toString() === req.user.id) {
            await task.remove();
            res.json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ message: 'Task not found or not authorized' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
