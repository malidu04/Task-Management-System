import React, { useState } from "react";
import { createTask } from "../api"; // Ensure this is the correct path to your API functions

const TaskForm = ({ onTaskAdded }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: 'Low', // Default value
        deadline: '',
        status: 'Pending', // Default value
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create task using the fields from the form
            await createTask(task);
            onTaskAdded(); // Trigger callback after task is added
            setTask({
                title: '',
                description: '',
                priority: 'Low',
                deadline: '',
                status: 'Pending',
            });
        } catch (error) {
            console.error('Error creating task:', error.response?.data?.message || error.message);
        }
    };

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={titleStyle}>Create a New Task</h2>
            
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={task.title}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
            </div>

            <div style={inputGroupStyle}>
                <label style={labelStyle}>Description:</label>
                <textarea
                    name="description"
                    placeholder="Task Description"
                    value={task.description}
                    onChange={handleChange}
                    style={textareaStyle}
                />
            </div>

            <div style={inputGroupStyle}>
                <label style={labelStyle}>Priority:</label>
                <select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                    style={selectStyle}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <div style={inputGroupStyle}>
                <label style={labelStyle}>Deadline:</label>
                <input
                    type="date"
                    name="deadline"
                    value={task.deadline}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>

            <div style={inputGroupStyle}>
                <label style={labelStyle}>Status:</label>
                <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                    style={selectStyle}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <button type="submit" style={submitButtonStyle}>Add Task</button>
        </form>
    );
};

const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f4f4f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
};

const inputGroupStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    height: '100px',
    resize: 'none',
};

const selectStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
};

const submitButtonStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

const hoverStyle = {
    backgroundColor: '#45a049',
};


export default TaskForm;
