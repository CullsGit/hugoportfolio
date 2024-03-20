import React from "react";
import headshot from "../../assets/headshot.svg";

import "./landingPage.css";

export default function LandingPage() {
  return (
    <>
      <div className="container landing-page">
        <div className="landing-page__border">
          <div className="landing-page__content row">
            <div className="landing-page__text col-auto col-lg-6">
              <h1 className="display-1">Hugo Cullinan</h1>
              <p className="lead">Hello! I am a keen Web Developer.</p>
            </div>
            <div className="col-10 col-lg-6">
              <img src={headshot} alt="headshot" />
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
