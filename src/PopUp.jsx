import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure this file is correctly linked

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup every 5 seconds
  useEffect(() => {
    // Set an interval to show the popup every 5 seconds
    const interval = setInterval(() => {
      setShowPopup(true); // Show the popup every 5 seconds
    }, 30000); // Popup appears every 5 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Close the popup when the user clicks the close button
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Popup modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>
              Welcome to <br />
              <span>𝓑𝓮𝓪𝓾𝓽𝔂 𝓑𝓵𝓲𝓼𝓼!</span>
            </h2>
            <p>We are excited to have you here!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
