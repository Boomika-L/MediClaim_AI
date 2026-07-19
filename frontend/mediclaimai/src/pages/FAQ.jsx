import React, { useState } from "react";
import "../styles/FAQ.css";

function FAQ() {

  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What is MediClaimAI?",
      answer:
        "MediClaimAI is an AI-powered Medical Insurance Claim Prediction System that estimates insurance costs using Machine Learning."
    },
    {
      question: "How does the prediction work?",
      answer:
        "The prediction is based on user details such as age, gender, BMI, smoking status, number of children, and region."
    },
    {
      question: "Is my personal data secure?",
      answer:
        "Yes. We securely store your data using MongoDB and user authentication with JWT."
    },
    {
      question: "Can I view my previous predictions?",
      answer:
        "Yes. Every prediction is saved in your account and can be viewed in the Prediction History page."
    },
    {
      question: "Is this prediction 100% accurate?",
      answer:
        "No. The prediction is based on a trained Machine Learning model and should be considered an estimate."
    }
  ];

  return (
    <div className="faq-container">

      <h1>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (

        <div className="faq-card" key={index}>

          <div
            className="faq-question"
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            <h3>{faq.question}</h3>

            <span>
              {active === index ? "-" : "+"}
            </span>

          </div>

          {active === index && (

            <div className="faq-answer">

              <p>{faq.answer}</p>

            </div>

          )}

        </div>

      ))}

    </div>
  );
}

export default FAQ;