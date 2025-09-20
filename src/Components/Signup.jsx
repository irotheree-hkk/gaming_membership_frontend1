import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (formData.username && formData.email && formData.password) {
      alert("Account created successfully! Welcome to Gaming Club!");
      navigate("/role-selection");
    } else {
      alert("Please fill in all required fields");
    }
  };

  const handleBack = () => {
    navigate("/auth-choice");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <button className="back-btn" onClick={handleBack}>
          ← Back to Choice
        </button>
        
        <h1>🎮 Create Your Gaming Account</h1>
        <p className="subtitle">Join our amazing gaming community today!</p>

        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <label>
              Username *
              <input
                type="text"
                name="username"
                placeholder="Choose a unique username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Email *
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Password *
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Confirm Password *
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        <p className="login-link">
          Already have an account? <span onClick={() => navigate("/login")}>Sign In</span>
        </p>
      </div>

      <footer className="signup-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default Signup; 