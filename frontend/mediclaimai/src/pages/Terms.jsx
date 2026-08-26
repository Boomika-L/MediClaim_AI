import React from "react";
import "../styles/Terms.css";

function Terms() {
  return (
    <div className="terms-container">

      <div className="terms-card">

        <h1>Terms & Conditions</h1>

        <section>
          <h2>1. Acceptance</h2>
          <p>
            By using MediClaimAI, you agree to these terms and conditions.
          </p>
        </section>

        <section>
          <h2>2. Prediction Results</h2>
          <p>
            Predictions are generated using Machine Learning and are
            estimates only. They should not be considered official insurance quotations.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>
            Users should provide accurate information to obtain reliable predictions.
          </p>
        </section>

        <section>
          <h2>4. Account Security</h2>
          <p>
            Users are responsible for maintaining the confidentiality of
            their login credentials.
          </p>
        </section>

        <section>
          <h2>5. Changes</h2>
          <p>
            We reserve the right to update these terms whenever necessary.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Terms;