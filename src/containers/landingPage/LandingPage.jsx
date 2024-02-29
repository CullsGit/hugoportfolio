import React from "react";

import "./landingPage.css";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="landing-page__border" />
        <h1>
          Hello, my name is <span className="hugo-text">Hugo Cullinan</span> I'm
          a keen Web Developer.
        </h1>
        <button type="button" className="btn btn-primary mt-5">
          About me
        </button>
      </div>
    </>
  );
}
