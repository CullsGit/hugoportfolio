import React from "react";

import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md custom-nav">
      <div className="container">
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <a href="#" className="nav-link fs-2 fw-bold active">
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a href="#" className="nav-link fs-2 fw-bold">
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a href="#" className="nav-link fs-2 fw-bold">
                Projects
              </a>
            </li>
            <li className="nav-item me-3">
              <a href="#" className="nav-link fs-2 fw-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
