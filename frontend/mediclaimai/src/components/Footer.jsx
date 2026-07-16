import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>MediClaimAI</h2>

      <p>
        AI-powered Medical Insurance Cost Prediction using Machine Learning.
      </p>

      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="copyright">
        © 2026 MediClaimAI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;