import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook to handle navigation

    const handleGetStartedClick = () => {
        navigate('/tasks'); // Navigate to the Tasks page
    };

    return (
        <div className="home-container">
            <div className="home-hero-section">
                <h1 className="home-title">Welcome to the Task Management System</h1>
                <p className="home-subtitle">
                    Effortlessly organize your tasks, track deadlines, and boost your productivity.
                </p>
                <button className="home-cta-button" onClick={handleGetStartedClick}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;

/* CSS Styles */
const styles = `
.home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    background: linear-gradient(to bottom right, #6c63ff, #3c9df7);
    color: white;
    padding: 20px;
}

.home-hero-section {
    max-width: 600px;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.home-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.home-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
}

.home-cta-button {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: #6c63ff;
    background: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.home-cta-button:hover {
    background: #fff176;
    color: #6c63ff;
    transform: scale(1.05);
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
