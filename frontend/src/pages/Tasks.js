import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Tasks = () => {
    return (
        <div style={tasksContainerStyle}>
            <h1 style={headerStyle}>Tasks</h1>
            <TaskForm onTaskAdded={() => window.location.reload()} />
            <TaskList />
        </div>
    );
};

const tasksContainerStyle = {
    width: '80%',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    textAlign: 'center',
    fontSize: '30px',
    color: '#333',
    marginBottom: '20px',
};

export default Tasks;
