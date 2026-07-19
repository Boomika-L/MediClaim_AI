import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="welcome-card">
        <h1>Welcome to MediClaimAI 👋</h1>
        <p>
          Manage your insurance predictions, profile and account from one place.
        </p>
      </div>

      <div className="dashboard-grid">

        <Link to="/predict" className="dashboard-card">
          <div className="icon">🤖</div>
          <h2>Predict Insurance</h2>
          <p>Estimate your medical insurance cost using AI.</p>
        </Link>

        <Link to="/history" className="dashboard-card">
          <div className="icon">📜</div>
          <h2>Prediction History</h2>
          <p>View all your previous predictions.</p>
        </Link>

        <Link to="/profile" className="dashboard-card">
          <div className="icon">👤</div>
          <h2>My Profile</h2>
          <p>Update your personal information.</p>
        </Link>

        <Link to="/contact" className="dashboard-card">
          <div className="icon">📞</div>
          <h2>Support</h2>
          <p>Need help? Contact our support team.</p>
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;