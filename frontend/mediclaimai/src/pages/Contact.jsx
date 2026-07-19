import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">

      <div className="contact-info">

        <h1>Contact Us</h1>

        <p>
          Have questions about MediClaimAI? We'd love to hear from you.
        </p>

        <div className="info-box">

          <h3>📧 Email</h3>
          <p>support@mediclaimai.com</p>

        </div>

        <div className="info-box">

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>

        </div>

        <div className="info-box">

          <h3>📍 Address</h3>
          <p>Coimbatore, Tamil Nadu, India</p>

        </div>

      </div>

      <div className="contact-form">

        <h2>Send a Message</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">

            Send Message

          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;