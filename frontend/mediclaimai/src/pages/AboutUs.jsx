import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-header">
        <h1>About MediClaimAI</h1>
        <p>
          AI-Based Medical Insurance Claim Prediction System
        </p>
      </div>

      <div className="about-content">

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            MediClaimAI helps users estimate their medical insurance costs
            using Artificial Intelligence and Machine Learning. The system
            provides quick, accurate, and user-friendly insurance predictions.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>

          <ul>
            <li>✔ AI-based Insurance Cost Prediction</li>
            <li>✔ Secure User Authentication</li>
            <li>✔ Prediction History</li>
            <li>✔ User Profile Management</li>
            <li>✔ Fast & Responsive Interface</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Technologies Used</h2>

          <div className="tech-grid">

            <span>React</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Scikit-learn</span>
            <span>JWT</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;