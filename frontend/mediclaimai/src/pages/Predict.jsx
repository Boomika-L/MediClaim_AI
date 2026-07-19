import React, { useState } from "react";
import "../styles/Predict.css";

function Predict() {

  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    bmi: "",
    children: "",
    smoker: "",
    region: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Backend API will be added later
    console.log(formData);

    // Dummy Result
    setResult({
      cost: "₹26,350",
      risk: "Low Risk"
    });
  };

  return (
    <div className="predict-container">

      <div className="predict-card">

        <h1>Medical Insurance Prediction</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div>
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
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
                <option value="">Select</option>
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
                required
              />
            </div>

            <div>
              <label>Smoker</label>
              <select
                name="smoker"
                value={formData.smoker}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
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
                <option value="">Select</option>
                <option value="0">Southwest</option>
                <option value="1">Southeast</option>
                <option value="2">Northwest</option>
                <option value="3">Northeast</option>
              </select>
            </div>

          </div>

          <button className="predict-btn">
            Predict Insurance Cost
          </button>

        </form>

        {result && (

          <div className="result-card">

            <h2>Prediction Result</h2>

            <h3>{result.cost}</h3>

            <p>{result.risk}</p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Predict;