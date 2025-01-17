import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className="brand-link" to="/">TaskMaster</Link>
            </div>
            <div className="navbar-links">
                <Link className="navbar-link" to="/">Home</Link>
                {user ? (
                    <>
                        <Link className="navbar-link" to="/tasks">Tasks</Link>
                        <button className="navbar-button" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link className="navbar-link"to="/tasks">Tasks</Link>
                        <Link className="navbar-link" to="/login">Login</Link>
                        <Link className="navbar-link" to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

/* CSS Styles */
const styles = `
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    padding: 15px 30px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-brand {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
}

.brand-link {
    text-decoration: none;
    color: #fff;
    transition: transform 0.3s ease, color 0.3s ease;
}

.brand-link:hover {
    color: #ffdd59;
    transform: scale(1.1);
}

.navbar-links {
    display: flex;
    gap: 20px;
}

.navbar-link {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-link:hover {
    background-color: #ffdd59;
    color: #333;
}

.navbar-button {
    background-color: #ff5252;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.navbar-button:hover {
    background-color: #ff1744;
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        padding: 15px;
    }
    .navbar-links {
        flex-direction: column;
        gap: 15px;
    }
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
