import React from "react";
import { useNavigate } from "react-router-dom";
import "./RoleSelection.css";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleAdminSelect = () => {
    navigate("/admin/dashboard");
  };

  const handleMemberSelect = () => {
    navigate("/member/dashboard");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-content">
        <div className="header-section">
          <h1>�� Welcome to Gaming Club!</h1>
          <p>Please select your role to continue</p>
        </div>

        <div className="role-cards">
          <div className="role-card admin-card">
            <div className="card-icon">👑</div>
            <h2>Admin</h2>
            <div className="features">
              <p>• Add new games</p>
              <p>• Search members</p>
              <p>• View collections</p>
              <p>• Manage gaming club</p>
            </div>
            <button className="role-btn admin-btn" onClick={handleAdminSelect}>
              Continue as Admin
            </button>
          </div>

          <div className="role-card member-card">
            <div className="card-icon">��</div>
            <h2>Member</h2>
            <div className="features">
              <p>• Create membership</p>
              <p>• Play games</p>
              <p>• View game history</p>
              <p>• Join tournaments</p>
            </div>
            <button className="role-btn member-btn" onClick={handleMemberSelect}>
              Continue as Member
            </button>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <footer className="role-selection-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default RoleSelection; 