import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // API call will be added later
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>MediClaimAI</h1>

        <p>Welcome Back</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>

          <div className="forgot">

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          <button className="login-btn">

            Login

          </button>

        </form>

        <p className="register-text">

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;