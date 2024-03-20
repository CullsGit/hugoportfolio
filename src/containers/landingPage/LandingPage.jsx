import React from "react";
import headshot from "../../assets/headshot.svg";

import "./landingPage.css";

export default function LandingPage() {
  return (
    <>
      <div className="container min-vh-100 landing-page d-flex flex-column justify-content-center align-items-center">
        <div className="landing-page__border">
          <div className="landing-page__content">
            <div className="landing-page__text">
              <h1>Hugo Cullinan</h1>
              <p>Hello! I am a keen Web Developer.</p>
            </div>
            <div>
              <img src={headshot} />
            </div>
          </div>

          <button type="button" className="btn btn-primary btn-lg mt-5">
            Projects
          </button>
        </div>
      </div>
    </>
  );
}
