import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email);

        // API call will be added later
    };

    return (

        <div className="forgot-container">

            <div className="forgot-box">

                <h1>Forgot Password?</h1>

                <p>
                    Enter your registered email address and we'll help you reset your password.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <button type="submit" className="forgot-btn">

                        Send Reset Link

                    </button>

                </form>

                <div className="back-login">

                    <Link to="/login">

                        ← Back to Login

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ForgotPassword;