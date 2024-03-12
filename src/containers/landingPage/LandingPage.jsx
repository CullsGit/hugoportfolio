import React from "react";

import "./landingPage.css";

export default function LandingPage() {
  return (
    <>
      <div className="container landing-page d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="landing-page__border" />
        <div className="landing-page__content">
          <div className="landing-page__text">
            <h1>Hello, my name is Hugo Cullinan I'm a keen Web Developer.</h1>
          </div>
          <div className="landing-page__image">
            <h1>Image</h1>
          </div>
        </div>

        <button type="button" className="btn btn-primary mt-5">
          About me
        </button>
      </div>
    </>
  );
}
