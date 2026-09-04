import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          "http://localhost:5000/api/predictions/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load dashboard");
        }

        setPredictions(data.predictions || []);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const totalPredictions = predictions.length;

  const averageCost =
    totalPredictions > 0
      ? predictions.reduce(
          (total, item) => total + Number(item.predictedCost || 0),
          0
        ) / totalPredictions
      : 0;

  const lowCount = predictions.filter(
    (item) => item.costCategory === "Low"
  ).length;

  const mediumCount = predictions.filter(
    (item) => item.costCategory === "Medium"
  ).length;

  const highCount = predictions.filter(
    (item) => item.costCategory === "High"
  ).length;

  const recentPredictions = predictions.slice(0, 5);

  const formatCost = (cost) => {
    return Number(cost || 0).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    });
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="dashboard">

      <div className="welcome-card">
        <h1>Welcome to MediClaimAI 👋</h1>
        <p>
          Manage your medical insurance predictions and account from one
          place.
        </p>
      </div>

      {loading ? (
        <div className="dashboard-loading">
          <h3>Loading dashboard...</h3>
        </div>
      ) : (
        <>
          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div>
                <h3>Total Predictions</h3>
                <h2>{totalPredictions}</h2>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div>
                <h3>Average Cost</h3>
                <h2>{formatCost(averageCost)}</h2>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🟢</div>
              <div>
                <h3>Low Cost</h3>
                <h2>{lowCount}</h2>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔴</div>
              <div>
                <h3>High Cost</h3>
                <h2>{highCount}</h2>
              </div>
            </div>

          </div>

          <div className="category-section">

            <div className="category-card">
              <h2>Prediction Summary</h2>

              <div className="category-row">
                <span>Low Cost</span>
                <strong>{lowCount}</strong>
              </div>

              <div className="category-row">
                <span>Medium Cost</span>
                <strong>{mediumCount}</strong>
              </div>

              <div className="category-row">
                <span>High Cost</span>
                <strong>{highCount}</strong>
              </div>
            </div>

            <div className="category-card">
              <h2>Quick Actions</h2>

              <Link to="/predict" className="action-button">
                🤖 Make New Prediction
              </Link>

              <Link to="/history" className="action-button">
                📜 View Prediction History
              </Link>
            </div>

          </div>

          <div className="recent-section">

            <div className="recent-header">
              <div>
                <h2>Recent Predictions</h2>
                <p>Your latest medical cost predictions</p>
              </div>

              <Link to="/history">View All</Link>
            </div>

            {recentPredictions.length === 0 ? (
              <div className="empty-dashboard">
                <div>📊</div>
                <h3>No Predictions Yet</h3>
                <p>
                  Make your first medical cost prediction to see your
                  statistics here.
                </p>

                <Link to="/predict" className="new-prediction-btn">
                  Make Prediction
                </Link>
              </div>
            ) : (
              <div className="recent-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Diagnosis</th>
                      <th>Treatment</th>
                      <th>Hospital</th>
                      <th>Predicted Cost</th>
                      <th>Category</th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentPredictions.map((item) => (
                      <tr key={item._id}>
                        <td>{formatDate(item.createdAt)}</td>

                        <td>{item.primaryDiagnosis}</td>

                        <td>{item.treatmentType}</td>

                        <td>{item.hospitalType}</td>

                        <td className="dashboard-cost">
                          {formatCost(item.predictedCost)}
                        </td>

                        <td>
                          <span
                            className={`dashboard-badge ${item.costCategory?.toLowerCase()}`}
                          >
                            {item.costCategory}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>

          <div className="dashboard-grid">

            <Link to="/predict" className="dashboard-card">
              <div className="icon">🤖</div>
              <h2>Predict Insurance</h2>
              <p>
                Estimate your medical insurance cost using AI.
              </p>
            </Link>

            <Link to="/history" className="dashboard-card">
              <div className="icon">📜</div>
              <h2>Prediction History</h2>
              <p>
                View all your previous predictions.
              </p>
            </Link>

            <Link to="/profile" className="dashboard-card">
              <div className="icon">👤</div>
              <h2>My Profile</h2>
              <p>
                Update your personal information.
              </p>
            </Link>

            <Link to="/contact" className="dashboard-card">
              <div className="icon">📞</div>
              <h2>Support</h2>
              <p>
                Need help? Contact our support team.
              </p>
            </Link>

          </div>
        </>
      )}

    </div>
  );
}

export default Dashboard;