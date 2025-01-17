import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');  // For error handling

    // Fetch all tasks
    const fetchAllTasks = async () => {
        try {
            const { data } = await fetchTasks();
            setTasks(data);
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to fetch tasks');
        }
    };

    // Handle task deletion
    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            fetchAllTasks();  // Refresh the task list after deletion
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to delete task');
        }
    };

    // Fetch tasks when the component mounts
    useEffect(() => {
        fetchAllTasks();
    }, []);

    return (
        <div style={taskListContainerStyle}>
            <h2 style={headerStyle}>Task List</h2>
            {error && <p style={errorMessageStyle}>{error}</p>}  {/* Display error message */}
            <ul style={taskListStyle}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <li key={task._id} style={taskItemStyle}>
                            <span style={taskTitleStyle}>{task.title}</span>
                            <button 
                                onClick={() => handleDelete(task._id)}
                                style={deleteButtonStyle}
                            >
                                Delete Task
                            </button>
                        </li>
                    ))
                ) : (
                    <p style={noTasksMessageStyle}>No tasks available</p>
                )}
            </ul>
        </div>
    );
};

const taskListContainerStyle = {
    width: '80%',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
};

const errorMessageStyle = {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
};

const taskListStyle = {
    listStyleType: 'none',
    padding: '0',
};

const taskItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
};

const taskTitleStyle = {
    fontSize: '18px',
    color: '#555',
};

const deleteButtonStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
};

const deleteButtonHoverStyle = {
    backgroundColor: '#e53935',
};

const noTasksMessageStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#777',
};

export default TaskList;
