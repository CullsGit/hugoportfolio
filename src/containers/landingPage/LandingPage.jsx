import React from "react";
import headshot from "../../assets/headshot.svg";

import "./landingPage.css";

export default function LandingPage() {
  return (
    <>
      <div className="container landing-page">
        <div className="landing-page__border">
          <div className="landing-page__content">
            <div className="landing-page__text row">
              <h1>Hugo Cullinan</h1>
              <p>Hello! I am a keen Web Developer.</p>
            </div>
            <div className="row">
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
