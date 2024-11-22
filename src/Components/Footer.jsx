import React, { useState } from 'react';
import './footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate subscribing if the email is not empty and valid
    if (email && /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setIsSubscribed(true);
      setEmail(''); // Clear the input after subscription
      setShowPopup(true); // Show the pop-up
    } else {
      alert('Please enter a valid email address.');
    }
  };

  // Close the pop-up after a few seconds
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='footer'>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo_name">𝓑𝓮𝓪𝓾𝓽𝔂𝓑𝓵𝓲𝓼𝓼</span>
            </div>
            <div className="media-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="link-boxes">
            {/* Other boxes here */}

            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Get started</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#">Face Products</a></li>
              <li><a href="#">Eyes Products</a></li>
              <li><a href="#">Lips Products</a></li>
              <li><a href="#">Beauty Tips</a></li>
            </ul>

            <ul className="box">
              <li className="link_name">Account</li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Preferences</a></li>
              <li><a href="#">Purchase</a></li>
            </ul>

            <ul className="box">
              <li className="link_name">Courses</li>
              <li><a href="#">Beautician</a></li>
              <li><a href="#">Dermatology</a></li>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Photoshop</a></li>
            </ul>



            {/* Email Subscription Form */}
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              {/* Email input field */}
              {!isSubscribed && (
                <li>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </li>
              )}
              {/* Subscribe button */}
              <li>
                <input
                  type="button"
                  value={isSubscribed ? 'Subscribed' : 'Subscribe'}
                  onClick={handleSubmit}
                  disabled={isSubscribed} // Disable the button after subscribing
                />
              </li>
            </ul>

          </div>
        </div>

        {/* Pop-up Notification */}
        {showPopup && (
          <div className="sub-popup">
            <div className="popup-content">
              <p>You've successfully subscribed!</p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}

        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2021 <a href="#">𝓑𝓮𝓪𝓾𝓽𝔂𝓑𝓵𝓲𝓼𝓼.</a> All rights reserved
            </span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
