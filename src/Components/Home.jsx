import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth-choice");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-section">
          <div className="logo">🎮</div>
          <h1 className="app-name">GAMING CLUB</h1>
          <p className="tagline">Where Gaming Enthusiasts Unite</p>
        </div>

        <div className="description-section">
          <h2>Welcome to the Ultimate Gaming Experience!</h2>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <p>Join a community of passionate gamers</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <p>Compete in tournaments and challenges</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🎮</span>
              <p>Discover new games and adventures</p>
            </div>
            <div className="feature">
              <span className="feature-icon">👥</span>
              <p>Connect with fellow gaming enthusiasts</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>

      <footer className="home-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default Home; 