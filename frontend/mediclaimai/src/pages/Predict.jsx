import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Predict.css";

function Predict() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    region: "",
    socioeconomic_status: "",
    primary_diagnosis: "",
    blood_glucose: "",
    hba1c: "",
    cholesterol: "",
    treatment_type: "",
    treatment_outcome: "",
    imaging_type: "",
    hospital_type: "",
    insurance_covered: "",
    bmi: "",
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

          gender: formData.gender,

          region: formData.region,

          socioeconomic_status: formData.socioeconomic_status,

          primary_diagnosis: formData.primary_diagnosis,

          blood_glucose: Number(formData.blood_glucose),

          hba1c: Number(formData.hba1c),

          cholesterol: Number(formData.cholesterol),

          treatment_type: formData.treatment_type,

          treatment_outcome: formData.treatment_outcome,

          imaging_type: formData.imaging_type,

          hospital_type: formData.hospital_type,

          insurance_covered: formData.insurance_covered === "true",

          bmi: Number(formData.bmi),
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

          category: prediction.costCategory,

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
        <h1>Medical Cost Prediction</h1>

        <p className="predict-subtitle">
          Enter your health and treatment information to estimate your medical
          cost.
        </p>

        {error && <div className="prediction-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* AGE */}

            <div>
              <label>Age</label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="1"
                max="120"
                required
              />
            </div>


            <div>
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>

                <option value="Female">Female</option>

                <option value="Male">Male</option>
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

                <option value="South">South</option>

                <option value="North">North</option>

                <option value="East">East</option>

                <option value="West">West</option>
              </select>
            </div>


            <div>
              <label>Socioeconomic Status</label>

              <select
                name="socioeconomic_status"
                value={formData.socioeconomic_status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>

                <option value="Low">Low</option>

                <option value="Middle">Middle</option>

                <option value="High">High</option>
              </select>
            </div>


            <div>
              <label>Primary Diagnosis</label>

              <select
                name="primary_diagnosis"
                value={formData.primary_diagnosis}
                onChange={handleChange}
                required
              >
                <option value="">Select Diagnosis</option>

                <option value="Diabetes">Diabetes</option>

                <option value="Hypertension">Hypertension</option>

                <option value="Heart Disease">Heart Disease</option>

                <option value="Asthma">Asthma</option>

                <option value="Infection">Infection</option>

                <option value="Fever">Fever</option>

                <option value="Kidney Disease">Kidney Disease</option>

                <option value="Liver Disease">Liver Disease</option>

                <option value="Cancer">Cancer</option>

                <option value="Other">Other</option>
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
              <label>Blood Glucose (mg/dL)</label>

              <input
                type="number"
                step="0.1"
                name="blood_glucose"
                value={formData.blood_glucose}
                onChange={handleChange}
                placeholder="Enter glucose level"
                min="1"
                required
              />
            </div>


            <div>
              <label>HbA1c (%)</label>

              <input
                type="number"
                step="0.1"
                name="hba1c"
                value={formData.hba1c}
                onChange={handleChange}
                placeholder="Enter HbA1c"
                min="1"
                max="20"
                required
              />
            </div>


            <div>
              <label>Total Cholesterol (mg/dL)</label>

              <input
                type="number"
                step="0.1"
                name="cholesterol"
                value={formData.cholesterol}
                onChange={handleChange}
                placeholder="Enter cholesterol"
                min="1"
                required
              />
            </div>


            <div>
              <label>Treatment Type</label>

              <select
                name="treatment_type"
                value={formData.treatment_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Treatment</option>

                <option value="Medication">Medication</option>

                <option value="Surgery">Surgery</option>

                <option value="Therapy">Therapy</option>

                <option value="Consultation">Consultation</option>

                <option value="Emergency">Emergency</option>

                <option value="Other">Other</option>
              </select>
            </div>


            <div>
              <label>Treatment Outcome</label>

              <select
                name="treatment_outcome"
                value={formData.treatment_outcome}
                onChange={handleChange}
                required
              >
                <option value="">Select Outcome</option>

                <option value="Improved">Improved</option>

                <option value="Stable">Stable</option>

                <option value="Not Improved">Not Improved</option>
              </select>
            </div>


            <div>
              <label>Imaging Type</label>

              <select
                name="imaging_type"
                value={formData.imaging_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Imaging</option>

                <option value="None">None</option>

                <option value="X-Ray">X-Ray</option>

                <option value="CT Scan">CT Scan</option>

                <option value="MRI">MRI</option>

                <option value="Ultrasound">Ultrasound</option>
              </select>
            </div>


            <div>
              <label>Hospital Type</label>

              <select
                name="hospital_type"
                value={formData.hospital_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Hospital</option>

                <option value="Government">Government</option>

                <option value="Private">Private</option>

                <option value="Clinic">Clinic</option>
              </select>
            </div>


            <div>
              <label>Insurance Covered</label>

              <select
                name="insurance_covered"
                value={formData.insurance_covered}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>

                <option value="true">Yes</option>

                <option value="false">No</option>
              </select>
            </div>
          </div>

          {/* BUTTON */}

          <button type="submit" className="predict-btn" disabled={loading}>
            {loading ? "Predicting..." : "Predict Medical Cost"}
          </button>
        </form>

        {/* RESULT */}

        {result && (
          <div className="result-card">
            <div className="result-icon">✓</div>

            <h2>Prediction Result</h2>

            <p className="result-label">Estimated Medical Cost</p>

            <h3>{result.cost}</h3>

            <div className="result-risk">
              Cost Category:
              <span className={result.category.toLowerCase()}>
                {result.category}
              </span>
            </div>

            <p className="result-note">
              This estimate is generated using the submitted patient
              information, medical condition, treatment details, and machine
              learning.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Predict;
