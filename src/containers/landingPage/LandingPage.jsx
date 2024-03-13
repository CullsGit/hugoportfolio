import React from "react";
import headshot from "../../assets/headshot.svg";

import "./landingPage.css";

export default function LandingPage() {
  return (
    <>
      <div className="container landing-page d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="landing-page__border" />
        <div className="landing-page__content">
          <div className="landing-page__text">
            <h1>Hello! I am a keen Web Developer.</h1>
          </div>
          <div>
            <img src={headshot} />
          </div>
        </div>

        <button type="button" className="btn btn-primary mt-5">
          Projects
        </button>
      </div>
    </>
  );
}
