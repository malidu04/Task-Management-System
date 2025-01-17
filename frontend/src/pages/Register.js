import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            setSuccess('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred during registration.');
        }
    };

    return (
        <div style={registerContainerStyle}>
            <h2 style={registerTitleStyle}>Register</h2>
            {error && <p style={errorMessageStyle}>{error}</p>}
            {success && <p style={successMessageStyle}>{success}</p>}
            <form style={registerFormStyle} onSubmit={handleSubmit}>
                <div style={formGroupStyle}>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <button type="submit" style={registerBtnStyle}>Register</button>
            </form>
        </div>
    );
};

// Enhanced Inline Styles
const registerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(135deg, #6e7dff, #3c57ff)',
};

const registerTitleStyle = {
    fontSize: '2.5rem',
    color: '#fff',
    marginBottom: '20px',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
};

const registerFormStyle = {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '450px',
    transition: 'all 0.3s ease',
};

const formGroupStyle = {
    marginBottom: '20px',
};

const labelStyle = {
    display: 'block',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#34495e',
    fontSize: '1.1rem',
};

const inputStyle = {
    width: '90%',
    padding: '12px',
    border: '2px solid #bdc3c7',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    fontWeight: '500',
};

const registerBtnStyle = {
    background: 'linear-gradient(135deg, #3498db, #2980b9)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '14px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.3s ease',
    width: '90%',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
};

const errorMessageStyle = {
    color: '#e74c3c',
    background: 'rgba(231, 76, 60, 0.1)',
    padding: '10px',
    border: '1px solid #e74c3c',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '500',
};

const successMessageStyle = {
    color: '#27ae60',
    background: 'rgba(39, 174, 96, 0.1)',
    padding: '10px',
    border: '1px solid #27ae60',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '500',
};

// Hover and Focus Effects
const inputFocusStyle = {
    borderColor: '#3498db',
    boxShadow: '0 0 8px rgba(52, 152, 219, 0.5)',
};

const registerBtnHoverStyle = {
    background: '#2980b9',
    transform: 'scale(1.05)',
};

const registerBtnActiveStyle = {
    transform: 'scale(0.98)',
};

export default Register;
