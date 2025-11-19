import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-root">
      <nav className="navbar">
        <div className="logo">Volunteer Connect</div>
        <div className="nav-center">
          <a href="#">Events</a>
          <a href="#">NGOs</a>
          <a href="#">About</a>
        </div>
        <div className="nav-buttons">
          <button className="nav-login">Login</button>
          <button className="nav-signup">Sign Up</button>
        </div>
      </nav>

      <main className="main-content">
        <div className="main-left">
          <h1>
            Connecting Volunteers <span className="blue">with</span>
            <br />
            <span className="blue">Opportunities</span>
          </h1>
          <p>
            Join volunteers making an impact. Discover events, connect with NGOs, and contribute to meaningful change.
          </p>
          <div className="main-actions">
            <button className="find-btn">Find Opportunities</button>
            <button className="register-btn">Register as NGO</button>
          </div>
        </div>
        <div className="main-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Volunteer"
            className="volunteer-img"
          />
        </div>
      </main>

      <footer className="footer">
        © 2025 Volunteer Connect — Built with <span className="footer-heart">♥</span>
      </footer>
    </div>
  );
}

export default LandingPage;
