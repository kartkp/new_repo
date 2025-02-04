import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Brightways Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="enhancer" className="nav-link">Note Enhancer</a></li>
                <li><a href="quiz" className="nav-link">Quiz</a></li>
                <li><a href="task" className="nav-link">Task</a></li>
                <li><a href="#" className="nav-link">Grammar</a></li>
            </ul>
            <a href="/" className="register-btn">Register</a>
        </nav>
    );
};

export default Navbar;