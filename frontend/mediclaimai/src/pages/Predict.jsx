import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Predict.css";

function Predict() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    bmi: "",
    children: "",
    smoker: "",
    region: "",
  });

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    setResult(null);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");

        navigate("/login");

        return;
      }

      const response = await fetch("http://localhost:5000/api/predictions", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          age: Number(formData.age),

          sex: formData.sex,

          bmi: Number(formData.bmi),

          children: Number(formData.children),

          smoker: formData.smoker,

          region: formData.region,
        }),
      });

      const data = await response.json();

      console.log("Prediction Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Prediction failed");
      }

      if (data.success) {
        const prediction = data.prediction;

        setResult({
          cost: `₹${Number(prediction.predictedCost).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}`,

          risk: prediction.riskLevel,

          date: prediction.createdAt,
        });
      }
    } catch (error) {
      console.error("Prediction Error:", error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="predict-container">
      <div className="predict-card">
        <h1>Medical Insurance Prediction</h1>

        <p className="predict-subtitle">
          Enter your health information to estimate your medical insurance cost.
        </p>

        {error && <div className="prediction-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div>
              <label>Age</label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                min="1"
                max="120"
                required
              />
            </div>


            <div>
              <label>Gender</label>

              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>

                <option value="0">Female</option>

                <option value="1">Male</option>
              </select>
            </div>


            <div>
              <label>BMI</label>

              <input
                type="number"
                step="0.1"
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
                placeholder="Enter BMI"
                min="1"
                max="100"
                required
              />
            </div>


            <div>
              <label>Children</label>

              <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
                placeholder="Number of children"
                min="0"
                max="20"
                required
              />
            </div>


            <div>
              <label>Smoking Status</label>

              <select
                name="smoker"
                value={formData.smoker}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>

                <option value="0">No</option>

                <option value="1">Yes</option>
              </select>
            </div>


            <div>
              <label>Region</label>

              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="">Select Region</option>

                <option value="0">Southwest</option>

                <option value="1">Southeast</option>

                <option value="2">Northwest</option>

                <option value="3">Northeast</option>
              </select>
            </div>
          </div>

          <button type="submit" className="predict-btn" disabled={loading}>
            {loading ? "Predicting..." : "Predict Insurance Cost"}
          </button>
        </form>


        {result && (
          <div className="result-card">
            <div className="result-icon">✓</div>

            <h2>Prediction Result</h2>

            <p className="result-label">Estimated Insurance Cost</p>

            <h3>{result.cost}</h3>

            <div className="result-risk">
              Risk Level:
              <span className={result.risk.toLowerCase()}>{result.risk}</span>
            </div>

            <p className="result-note">
              This prediction is generated using your submitted health
              information and machine learning.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Predict;
