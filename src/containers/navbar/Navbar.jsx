import React, { useEffect, useState } from "react";

import "./navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      const scrollPosition = window.scrollY + navbarHeight + 10;

      if (scrollPosition < aboutSection.offsetTop) {
        setActiveSection("home");
      } else if (scrollPosition < projectsSection.offsetTop) {
        setActiveSection("about");
      } else if (scrollPosition < contactSection.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const extraOffset = 10;
    const targetPosition = section.offsetTop - navbarHeight - extraOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };
  return (
    <nav className="navbar navbar-expand-md custom-nav fixed-top">
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
              <a
                className={`nav-link fs-2 fw-bold ${
                  activeSection === "home" ? "active" : ""
                }`}
                onClick={() => handleClick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={`nav-link fs-2 fw-bold ${
                  activeSection === "about" ? "active" : ""
                }`}
                onClick={() => handleClick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={`nav-link fs-2 fw-bold ${
                  activeSection === "projects" ? "active" : ""
                }`}
                onClick={() => handleClick("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={`nav-link fs-2 fw-bold ${
                  activeSection === "contact" ? "active" : ""
                }`}
                onClick={() => handleClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
