import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/History.css";

function History() {
  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");

        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/predictions/history",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      console.log("History Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Unable to load prediction history");
      }

      setHistory(data.predictions || []);
    } catch (error) {
      console.error("History Error:", error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatCost = (cost) => {
    return Number(cost).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    });
  };

  const getRiskClass = (risk) => {
    if (risk === "High") {
      return "high";
    }

    if (risk === "Medium") {
      return "medium";
    }

    return "low";
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <div>
          <h1>Prediction History</h1>

          <p>View your previous medical insurance cost predictions.</p>
        </div>

        <Link to="/predict" className="new-prediction-btn">
          + New Prediction
        </Link>
      </div>


      {error && <div className="error-message">{error}</div>}


      {loading ? (
        <div className="history-message">
          <h3>Loading your predictions...</h3>

          <p>Please wait.</p>
        </div>
      ) : history.length === 0 ? (

        <div className="history-message">
          <div className="empty-icon">📊</div>

          <h2>No Predictions Yet</h2>

          <p>You haven't made any insurance predictions yet.</p>

          <Link to="/predict" className="new-prediction-btn">
            Make Your First Prediction
          </Link>
        </div>
      ) : (

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>

                <th>Age</th>

                <th>BMI</th>

                <th>Smoker</th>

                <th>Children</th>

                <th>Prediction</th>

                <th>Risk</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item) => (
                <tr key={item._id}>
                  <td>{formatDate(item.createdAt)}</td>

                  <td>{item.age}</td>

                  <td>{item.bmi}</td>

                  <td>{item.smoker === "1" ? "Yes" : "No"}</td>

                  <td>{item.children}</td>

                  <td className="cost">{formatCost(item.predictedCost)}</td>

                  <td>
                    <span
                      className={`risk-badge ${getRiskClass(item.riskLevel)}`}
                    >
                      {item.riskLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default History;
