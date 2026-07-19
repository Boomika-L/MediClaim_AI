import React, { useState } from "react";
import "../styles/Profile.css";

function Profile() {

  const [user, setUser] = useState({
    name: "Boomika",
    email: "boomika@gmail.com",
    age: 22,
    gender: "Female",
    phone: "9876543210"
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    alert("Profile Updated Successfully!");
  };

  return (

    <div className="profile-container">

      <div className="profile-card">

        <h1>My Profile</h1>

        <form onSubmit={handleSubmit}>

          <div className="profile-grid">

            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Gender</label>

              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </select>

            </div>

            <div>

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />

            </div>

          </div>

          <button className="update-btn">

            Update Profile

          </button>

        </form>

      </div>

    </div>

  );
}

export default Profile;