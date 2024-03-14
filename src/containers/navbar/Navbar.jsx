import React from "react";

import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container d-flex">
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home
          </a>
          <a className="nav-item nav-link" href="#">
            About
          </a>
          <a className="nav-item nav-link" href="#">
            Projects
          </a>
          <a className="nav-item nav-link" href="#">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
