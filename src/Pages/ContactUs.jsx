import React, { useState, useEffect } from 'react';
import './ContactUs.css';

export default function ContactUs() {
  // State to hold form input values and list of submissions
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissions, setSubmissions] = useState([]);

  // Fetch submissions from localStorage when the component mounts
  useEffect(() => {
    const savedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setSubmissions(savedSubmissions);
  }, []);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure that all fields are filled
    if (name && email && message) {
      const newSubmission = { name, email, message };
      const updatedSubmissions = [...submissions, newSubmission];
      
      // Update the state with the new submission
      setSubmissions(updatedSubmissions);
      
      // Store the updated submissions in localStorage
      localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
      
      // Clear the form inputs after submission
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <div className="Contact-container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Shahdara, Lahore</div>
              <div className="text-two">FaisalTown Block III</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">beautybliss@gmail.com</div>
              <div className="text-two">info.beautybliss@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any suggestions about Skincare from me or any types of queries related to cosmetics, you can send me a message from here. It's my pleasure to help you.</p>

            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="my-textarea"
                  name="my-textarea"
                  rows="4"
                  cols="50"
                />
              </div>
              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>

            {/* Render all submitted cards */}
            <div className="submitted-cards">
              {submissions.map((submission, index) => (
                <div key={index} className="submitted-card">
                  <h3>Submitted Information</h3>
                  <p><strong>Name:</strong> {submission.name}</p>
                  <p><strong>Email:</strong> {submission.email}</p>
                  <p><strong>Message:</strong> {submission.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}