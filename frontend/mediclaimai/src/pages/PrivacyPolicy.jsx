import React from "react";
import "../styles/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="policy-container">

      <div className="policy-card">

        <h1>Privacy Policy</h1>

        <p className="updated">Last Updated: July 2026</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information such as your name, email, insurance
            prediction inputs, and prediction history to provide our services.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to generate insurance predictions,
            improve user experience, and maintain your account.
          </p>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>
            We use secure authentication and database protection to keep
            your information safe.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2>5. Contact</h2>
          <p>Email: support@mediclaimai.com</p>
        </section>

      </div>

    </div>
  );
}

export default PrivacyPolicy;