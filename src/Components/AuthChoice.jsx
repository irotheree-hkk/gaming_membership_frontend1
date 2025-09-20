import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthChoice.css";

const AuthChoice = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="auth-choice-container">
      <div className="auth-choice-content">
        <div className="header-section">
          <button className="back-btn" onClick={handleBack}>
            ← Back to Home
          </button>
          <h1>Welcome to Gaming Club</h1>
          <p>Choose how you'd like to continue</p>
        </div>

        <div className="choice-cards">
          <div className="choice-card login-card">
            <div className="card-icon">��</div>
            <h2>Login</h2>
            <p>Already have an account? Sign in to continue your gaming journey.</p>
            <button className="choice-btn login-btn" onClick={handleLogin}>
              Sign In
            </button>
          </div>

          <div className="choice-card signup-card">
            <div className="card-icon">✨</div>
            <h2>Sign Up</h2>
            <p>New to our gaming community? Create an account and join the fun!</p>
            <button className="choice-btn signup-btn" onClick={handleSignup}>
              Create Account
            </button>
          </div>
        </div>
      </div>

      <footer className="auth-choice-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthChoice; 