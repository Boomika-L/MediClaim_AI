import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "Other",
    phone: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("http://localhost:5000/api/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load profile");
      }

      setUser({
        name: data.user.name || "",
        email: data.user.email || "",
        age: data.user.age || "",
        gender: data.user.gender || "Other",
        phone: data.user.phone || "",
      });

      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Profile Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("http://localhost:5000/api/profile", {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          name: user.name,
          age: user.age,
          gender: user.gender,
          phone: user.phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Profile update failed");
      }

      setUser({
        name: data.user.name || "",
        email: data.user.email || "",
        age: data.user.age || "",
        gender: data.user.gender || "Other",
        phone: data.user.phone || "",
      });

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Update Profile Error:", error);

      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <h2>Loading Profile...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-heading">
          <div className="profile-avatar">👤</div>

          <div>
            <h1>My Profile</h1>

            <p>Manage your personal information</p>
          </div>
        </div>

        {message && <div className="success-message">{message}</div>}

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="profile-grid">
            <div className="profile-field">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="profile-field">
              <label>Email</label>

              <input type="email" value={user.email} disabled />

              <small>Email cannot be changed</small>
            </div>

            <div className="profile-field">
              <label>Age</label>

              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Enter your age"
                min="1"
                max="120"
              />
            </div>

            <div className="profile-field">
              <label>Gender</label>

              <select name="gender" value={user.gender} onChange={handleChange}>
                <option value="Male">Male</option>

                <option value="Female">Female</option>

                <option value="Other">Other</option>
              </select>
            </div>

            <div className="profile-field">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          {/* UPDATE BUTTON */}
          <button type="submit" className="update-btn" disabled={saving}>
            {saving ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
