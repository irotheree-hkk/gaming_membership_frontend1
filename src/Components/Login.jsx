import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // Redirect to role selection
      navigate("/role-selection");
    } else {
      alert("Please enter username and password");
    }
  };

  const handleBack = () => {
    navigate("/auth-choice");
  };

  return (
    <div className="login-container">
      <button className="back-btn" onClick={handleBack}>
        ← Back to Choice
      </button>
      
      <h1>🎮 Welcome Back!</h1>
      <p className="subtitle">Sign in to continue your gaming journey</p>
      
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Sign In</button>
      </form>

      <p className="signup-link">
        Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
      </p>

      <footer className="login-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
