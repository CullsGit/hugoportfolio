import React from "react";
import desk from "../../assets/computer_desk.png";

import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="container min-vh-100" id="about">
      <div className="about-page__border">
        <div className="about-page__content">
          <div className="about-page__text">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              delectus. A ducimus dicta eos voluptatibus, doloribus modi
              suscipit deserunt dolorum et mollitia libero ipsum nisi facere
              laboriosam dolorem omnis rem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sint, delectus. A ducimus dicta eos
              voluptatibus, doloribus modi suscipit deserunt dolorum et mollitia
              libero ipsum nisi facere laboriosam dolorem omnis rem.Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint, delectus. A
              ducimus dicta eos voluptatibus, doloribus modi suscipit deserunt
              dolorum et mollitia libero ipsum nisi facere laboriosam dolorem
              omnis rem.
            </p>
          </div>
          <div className="about-page__img">
            <img src={desk} alt="desk" />
          </div>
        </div>
      </div>
    </div>
  );
}
