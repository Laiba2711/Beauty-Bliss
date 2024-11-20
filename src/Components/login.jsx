import React from "react";
import { motion } from "framer-motion"; 
import "./Login.css";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="login-card">
        <h1 className="login-title">Welcome Back 💄</h1>
        <p className="login-subtitle">Log in to explore our beauty collection!</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <motion.button
            type="submit"
            className="login-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
        </form>
        <p className="signup-prompt LSB">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </motion.div>
  );
}
