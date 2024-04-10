import React from "react";
import "./projects.css";

import pokeimg from "../../assets/poke.png";
import smcarsimg from "../../assets/cars.png";
import lgcarsimg from "../../assets/singlecar.png";
import recipesimg from "../../assets/recipes.png";

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
                <div className="card-footer">Links</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 text-white bg-dark">
          <div className="row g-0">
            <div className="col-xl-4">
              <img
                src={smcarsimg}
                className="img-fluid sm-car"
                alt="car project"
              />
              <img
                src={lgcarsimg}
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
                <div className="card-footer">Links</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 text-white bg-dark">
          <div className="row g-0">
            <div className="col-xl-4">
              <img
                src={recipesimg}
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
                <div className="card-footer">Links</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
