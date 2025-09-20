import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MemberDashboard.css";

const MemberDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="member-dashboard">
      <header className="member-header">
        <div className="member-logo">
          <span className="member-icon">🎯</span>
          <span className="member-title">Member Dashboard</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="member-main">
        <div className="member-welcome">
          <h1>Welcome, Member!</h1>
          <p>Enjoy your gaming experience with these features</p>
        </div>

        <div className="member-actions">
          <Link to="/member/membership" className="action-card">
            <div className="action-icon">👤</div>
            <h3>Membership</h3>
            <p>Manage your membership details and balance</p>
          </Link>

          <Link to="/member/play-games" className="action-card">
            <div className="action-icon">🎮</div>
            <h3>Play Games</h3>
            <p>Browse and play available games</p>
          </Link>
        </div>
      </main>

      <footer className="member-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default MemberDashboard; 