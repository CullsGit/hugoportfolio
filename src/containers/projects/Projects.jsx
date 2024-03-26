import React from "react";
import "./projects.css";

import cone from "../../assets/cone.png";
export default function Projects() {
  return (
    <div className="container min-vh-100" id="projects">
      <div className="projects-page__border">
        <div className="projects-page__content row justify-content-around">
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={cone} />
            <div className="card-body">
              <h2 className="card-title">Deal Cars</h2>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                delectus id ratione tempora nulla repellat laborum, fugiat
                possimus laudantium beatae numquam nam perferendis asperiores
                sunt iure sint rerum odio voluptates?
              </div>
            </div>
            <div className="card-footer">Links</div>
          </div>
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={cone} />
            <div className="card-body">
              <h2 className="card-title">Deal Cars</h2>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                delectus id ratione tempora nulla repellat laborum, fugiat
                possimus laudantium beatae numquam nam perferendis asperiores
                sunt iure sint rerum odio voluptates?
              </div>
            </div>
            <div className="card-footer">Links</div>
          </div>
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={cone} />
            <div className="card-body">
              <h2 className="card-title">Deal Cars</h2>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                delectus id ratione tempora nulla repellat laborum, fugiat
                possimus laudantium beatae numquam nam perferendis asperiores
                sunt iure sint rerum odio voluptates?
              </div>
            </div>
            <div className="card-footer">Links</div>
          </div>
        </div>
      </div>
    </div>
  );
}
