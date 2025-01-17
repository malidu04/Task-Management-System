import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({ email, password });
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/tasks');
        } catch (error) {
            console.error(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

/* CSS Styles */
const styles = `
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    padding: 20px;
}

.login-form {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    text-align: center;
}

.login-title {
    margin-bottom: 20px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
}

.login-input {
    width: 90%;
    padding: 10px 15px;
    margin: 10px 0;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
}

.login-input:focus {
    border-color: #6a11cb;
    outline: none;
    box-shadow: 0 0 5px rgba(106, 17, 203, 0.5);
}

.login-button {
    width: 100%;
    padding: 12px 15px;
    font-size: 1rem;
    color: white;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.2s ease;
}

.login-button:hover {
    background: linear-gradient(90deg, #2575fc, #6a11cb);
    transform: scale(1.05);
}

.login-button:active {
    transform: scale(0.95);
}

@media (max-width: 768px) {
    .login-form {
        padding: 20px;
    }
    .login-title {
        font-size: 1.5rem;
    }
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
