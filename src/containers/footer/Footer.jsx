import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div id="contact">
      <div className="footer-banner d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-3">Contact</h1>
        <p>Transforming ideas into captivating digital experiences</p>
        <a
          href="mailto:hugo.cullinan@gmail.com"
          class="btn btn-dark btn-lg mt-5"
        >
          Hit me up!
        </a>
      </div>
    </div>
  );
}
