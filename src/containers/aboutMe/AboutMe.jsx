import React from "react";
import desk from "../../assets/computer_desk.png";
import cone from "../../assets/cone.png";

import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="container min-vh-100 d-flex align-items-center" id="about">
      <div className="about-page__border">
        <div className="about-page__content row">
          <div className="about-page__img col-10 col-lg-6">
            <img src={desk} alt="desk" className="img-fluid" />
          </div>
          <div className="about-page__text col-auto col-lg-6">
            <h1 className="display-3">About Me</h1>
            <p>
              Hi, I'm Hugo, a passionate web developer specializing in React
              applications and front-end development. With a keen eye for detail
              and a love for clean, efficient code, I strive to create engaging
              user experiences that delight and inspire. Whether it's crafting
              responsive layouts, implementing complex animations, or optimizing
              performance, I'm dedicated to delivering high-quality solutions
              that exceed expectations. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
