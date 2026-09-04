import React, { useState, useEffect } from "react";
import "../styles/Settings.css";

function Settings() {
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("notifications");
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleNotifications = () => {
    const newValue = !notifications;

    setNotifications(newValue);
    localStorage.setItem(
      "notifications",
      JSON.stringify(newValue)
    );
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSave = () => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );

    localStorage.setItem(
      "darkMode",
      darkMode
    );

    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-container">

      <div className="settings-card">

        <h1>Settings</h1>

        <div className="setting-item">

          <div>
            <h3>Email Notifications</h3>

            <p>
              Receive updates about your predictions.
            </p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotifications}
          />

        </div>

        <div className="setting-item">

          <div>
            <h3>Dark Mode</h3>

            <p>
              Enable dark theme.
            </p>
          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkMode}
          />

        </div>

        <button
          className="save-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;