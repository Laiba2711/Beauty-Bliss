import React from "react";
import { motion } from "framer-motion"; 
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful!");
  };

  return (
    <motion.div
      className="signup-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="signup-card">
        <h1 className="signup-title">Join Our Beauty Family 💄</h1>
        <p className="signup-subtitle">Create an account to unlock exclusive perks!</p>
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <motion.button
            type="submit"
            className="signup-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>
        <p className="login-prompt LSB">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </motion.div>
  );
}