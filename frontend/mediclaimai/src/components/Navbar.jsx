import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MediClaimAI</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/predict">Predict</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;