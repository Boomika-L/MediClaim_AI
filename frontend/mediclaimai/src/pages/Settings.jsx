import React, { useState } from "react";
import "../styles/Settings.css";

function Settings() {

  const [notifications, setNotifications] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className="settings-container">

      <div className="settings-card">

        <h1>Settings</h1>

        <div className="setting-item">

          <div>

            <h3>Email Notifications</h3>

            <p>Receive updates about your predictions.</p>

          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />

        </div>

        <div className="setting-item">

          <div>

            <h3>Dark Mode</h3>

            <p>Enable dark theme.</p>

          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

        </div>

        <button className="save-btn">

          Save Changes

        </button>

      </div>

    </div>

  );
}

export default Settings;