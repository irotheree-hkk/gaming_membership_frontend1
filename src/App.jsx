import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AuthChoice from "./Components/AuthChoice";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import RoleSelection from "./Components/RoleSelection";
import AdminDashboard from "./Components/AdminDashboard";
import MemberDashboard from "./Components/MemberDashboard";
import Membership from "./Components/Membership";
import MemberPage from "./Components/MemberPage";
import AddGame from "./Components/AddGame";
import Collections from "./Components/Collections";
import PlayGames from "./Components/PlayGames";

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth-choice" element={<AuthChoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-game" element={
          <>
            <Header />
            <main className="main-content">
              <AddGame />
            </main>
            <Footer />
          </>
        } />
        <Route path="/admin/member-search" element={
          <>
            <Header />
            <main className="main-content">
              <MemberPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/admin/collections" element={
          <>
            <Header />
            <main className="main-content">
              <Collections />
            </main>
            <Footer />
          </>
        } />
        
        {/* Member Routes */}
        <Route path="/member/dashboard" element={<MemberDashboard />} />
        <Route path="/member/membership" element={
          <>
            <Header />
            <main className="main-content">
              <Membership />
            </main>
            <Footer />
          </>
        } />
        <Route path="/member/play-games" element={<PlayGames />} />
      </Routes>
    </div>
  );
}

export default App;