import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-icon"></span>
          <span className="logo-text">MediTrack</span>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/signup" className="login-link">Register</a></li>
        </ul>
      </nav>

      {/* Login Page */}
      <div className="login-container">
        <div className="login-box">
          <h2 className="welcome-text">Welcome Back</h2>

          <form>
            <label className="form-label">Username</label>
            <input type="text" className="form-input" placeholder="Enter username" />

            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Enter password" />

            <button type="submit" className="login-btn">Login</button>

            <div className="extra-links">
              <a href="/forgot" className="link-btn">Forgot Password?</a>
              <a href="/signup" className="link-btn">Create Account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
