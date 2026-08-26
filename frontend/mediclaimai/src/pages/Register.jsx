import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    // Check password

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError("Passwords do not match");

      return;
    }


    // Check password length

    if (formData.password.length < 6) {

      setError(
        "Password must contain at least 6 characters"
      );

      return;
    }


    setLoading(true);


    try {

      console.log(
        "Sending registration data:",
        formData
      );


      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();


      console.log(
        "Register Response:",
        data
      );


      if (!response.ok) {

        setError(
          data.message ||
          "Registration failed"
        );

        setLoading(false);

        return;
      }


      setSuccess(
        "Registration successful! Redirecting to login..."
      );


      // Clear form

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });


      // Redirect to login

      setTimeout(() => {

        navigate("/login");

      }, 1500);


    } catch (error) {

      console.error(
        "Registration Error:",
        error
      );

      setError(
        "Unable to connect to server. Please make sure the backend is running."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="register-container">

      <div className="register-box">

        <h1>
          Create Account
        </h1>

        <p>
          Join MediClaimAI Today
        </p>


        {/* ERROR MESSAGE */}

        {error && (

          <div className="register-error">
            {error}
          </div>

        )}


        {/* SUCCESS MESSAGE */}

        {success && (

          <div className="register-success">
            {success}
          </div>

        )}


        <form onSubmit={handleSubmit}>


          {/* NAME */}

          <div className="input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          {/* EMAIL */}

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>


          {/* CONFIRM PASSWORD */}

          <div className="input-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>


          {/* REGISTER BUTTON */}

          <button
            type="submit"
            className="register-btn"
            disabled={loading}
          >

            {loading
              ? "Creating Account..."
              : "Register"
            }

          </button>

        </form>


        <p className="login-link">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;