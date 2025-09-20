import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🎮 Gaming Club</div>
      <nav className="nav">
        <Link to="/dashboard/membership"><button>Membership</button></Link>
        <Link to="/dashboard/member-search"><button>Member</button></Link>
        <Link to="/dashboard/add-game"><button>Add Game</button></Link>
        <Link to="/dashboard/collections"><button>Collections</button></Link>
      </nav>
      <div className="auth">
        <button>Admin</button>
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;
