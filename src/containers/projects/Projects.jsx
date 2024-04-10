import React from "react";
import "./projects.css";

import pokeimg from "../../assets/poke.png";
import smcarsImg from "../../assets/cars.png";
import lgcarsImg from "../../assets/singlecar.png";
import recipesImg from "../../assets/recipes.png";
import projectLink from "../../assets/export.png";
import githubLink from "../../assets/github.png";

export default function Projects() {
  return (
    <div className="container min-vh-100" id="projects">
      <div className="projects-page__border">
        <div className="card mb-3 text-white bg-dark">
          <div className="row g-0">
            <div className="col-xl-4">
              <img src={pokeimg} className="img-fluid" alt="pokemon project" />
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h2 className="card-title">CollectEmAll</h2>
                <p className="card-text">
                  Immerse yourself in the world of Pokémon with this sleek React
                  FrontEnd application. Seamlessly powered by the PokeAPI, it
                  effortlessly showcases comprehensive information about the
                  iconic first generation of Pokémon. Includes meticulously
                  crafted unit and integration tests, an intuitively responsive
                  design, captivating animations, dynamic state management,
                  dynamic styles, React hooks, and thoughtfully implemented
                  helper functions. Explore the Pokémon universe like never
                  before with this elegantly designed and meticulously crafted
                  application.
                </p>
                <div className="card-footer d-flex justify-content-around poke-links">
                  <a href="https://cullsgit.github.io/collectemall/">
                    <img className="img-fluid" src={projectLink} />
                  </a>
                  <a href="https://github.com/CullsGit/collectemall">
                    <img className="img-fluid" src={githubLink} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 text-white bg-dark">
          <div className="row g-0">
            <div className="col-xl-4">
              <img
                src={smcarsImg}
                className="img-fluid sm-car"
                alt="car project"
              />
              <img
                src={lgcarsImg}
                className="img-fluid lg-car"
                alt="car project"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h2 className="card-title">Deal Cars</h2>
                <p className="card-text">
                  React-based application for a futuristic-style car dealership.
                  It focuses entirely on the front end and adheres to best
                  practices for React development. The design is sleek and
                  futuristic, with a responsive layout to ensure it looks great
                  on all devices. One notable feature is the use of AI images,
                  implemented using MidJourney, which enhances the user
                  experience with dynamic and realistic visuals of cars. The
                  project also follows the BEM (Block Element Modifier) CSS
                  structure, ensuring a modular and maintainable styling
                  approach.
                </p>
                <div className="card-footer d-flex justify-content-around car-links">
                  <a href="https://cullsgit.github.io/DealCars/">
                    <img className="img-fluid" src={projectLink} />
                  </a>
                  <a href="https://github.com/CullsGit/DealCars">
                    <img className="img-fluid" src={githubLink} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 text-white bg-dark">
          <div className="row g-0">
            <div className="col-xl-4">
              <img
                src={recipesImg}
                className="img-fluid"
                alt="recipe project"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h2 className="card-title">Cookbook App</h2>
                <p className="card-text">
                  Front-end React application for a cookbook. Users can create,
                  read, update, and delete recipes, with the data stored in
                  local storage for persistence. The app is designed to be
                  visually appealing, with a user-friendly interface. One of the
                  key features of the app is its ability to search for recipes
                  using keywords. It integrates with the Edamam API to fetch a
                  list of recipes based on the user's search query, providing a
                  wide range of options for users to explore. Overall, the
                  project aims to provide a seamless and enjoyable experience
                  for users to manage their recipes and discover new ones, all
                  within a visually appealing and intuitive interface.
                </p>
                <div className="card-footer d-flex justify-content-around recipe-links">
                  <a href="https://cookbook-36682.web.app/">
                    <img className="img-fluid" src={projectLink} />
                  </a>
                  <a href="https://github.com/CullsGit/cookbook">
                    <img className="img-fluid" src={githubLink} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
