import React from "react";
import headshot from "../../assets/headshot.svg";

import "./landingPage.css";

export default function LandingPage() {
  const handleClick = () => {
    const projectsSection = document.getElementById("projects");
    window.scrollTo({
      top: projectsSection.offsetTop - 85, // fix this number in future
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="container min-vh-100 landing-page d-flex align-items-center"
        id="home"
      >
        <div className="landing-page__border">
          <div className="landing-page__content row">
            <div className="landing-page__text col-auto col-lg-6">
              <h1 className="display-1">Hugo Cullinan</h1>
              <p className="lead">Hello! I am a keen Web Developer.</p>
            </div>
            <div className="col-10 col-lg-6">
              <img src={headshot} alt="headshot" className="img-fluid" />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-lg mt-5"
            onClick={handleClick}
          >
            Projects
          </button>
        </div>
      </div>
    </>
  );
}
