import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure this file is correctly linked

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 5 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 100); 

    // Clean up the timer if the component is unmounted before 4 seconds
    return () => clearTimeout(timer);
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