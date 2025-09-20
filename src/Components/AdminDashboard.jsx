import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-logo">
          <span className="admin-icon">👑</span>
          <span className="admin-title">Admin Dashboard</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="admin-main">
        <div className="admin-welcome">
          <h1>Welcome, Admin!</h1>
          <p>Manage your gaming club with these powerful tools</p>
        </div>

        <div className="admin-actions">
          <Link to="/admin/add-game" className="action-card">
            <div className="action-icon">🎮</div>
            <h3>Add Games</h3>
            <p>Add new games to the club's collection</p>
          </Link>

          <Link to="/admin/member-search" className="action-card">
            <div className="action-icon">🔍</div>
            <h3>Member Search</h3>
            <p>Search and manage club members</p>
          </Link>

          <Link to="/admin/collections" className="action-card">
            <div className="action-icon">📚</div>
            <h3>Collections</h3>
            <p>View and manage game collections</p>
          </Link>
        </div>
      </main>

      <footer className="admin-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard; 