import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import logo from "../assests/logo.png";
import hero from "../assests/hero.png";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}

      <section className="hero">
        <div className="hero-left">
          <img src={logo} alt="Logo" className="hero-logo" />

          <h1>
            AI Powered
            <span> Medical Insurance </span>
            Prediction
          </h1>

          <p>
            Predict your medical insurance charges using Machine Learning. Fast,
            secure and accurate prediction based on your health details.
          </p>

          <div className="hero-buttons">
            <Link to="/predict" className="btn-primary">
              Predict Now
            </Link>

            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={hero} alt="Medical AI" />
        </div>
      </section>

      {/* Features */}

      <section className="features">
        <h2>Why Choose MediClaimAI?</h2>

        <div className="feature-container">
          <div className="card">
            <h3>AI Prediction</h3>

            <p>Predict insurance cost using Machine Learning.</p>
          </div>

          <div className="card">
            <h3>Secure</h3>

            <p>JWT Authentication keeps your account secure.</p>
          </div>

          <div className="card">
            <h3>Prediction History</h3>

            <p>View all your previous insurance predictions.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}

      <section className="steps">
        <h2>How It Works</h2>

        <div className="step-container">
          <div className="step">
            <h3>1</h3>

            <p>Register/Login</p>
          </div>

          <div className="step">
            <h3>2</h3>

            <p>Enter Health Details</p>
          </div>

          <div className="step">
            <h3>3</h3>

            <p>AI Predicts Insurance Cost</p>
          </div>

          <div className="step">
            <h3>4</h3>

            <p>Save Prediction</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
