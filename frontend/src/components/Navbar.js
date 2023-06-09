import React, { Component } from "react";
import icon from "../images/icon.png";

import "../hero.css";

// import { Link } from "react-router-dom";



export default class Navbar extends Component {
  render() {
    return (
      <div className="hero container-fluid">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container-fluid">
            <a
              class="navbar-brand fw-bold text-white"
              href="9"
              rel="noreferrer"
            >
              <img
                className="img-fluid align-img"
                width={25}
                src={icon}
                alt="icon"
              ></img>
              Artisto
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ml-auto">
                <a
                  class="nav-link active text-white fw-bold"
                  aria-current="page"
                  href="9"
                >
                  Events
                </a>
                <a
                  class="nav-link text-white fw-bold"
                  href="9"
                  rel="noreferrer"
                >
                  Museum
                </a>
                <a
                  class="nav-link text-white fw-bold"
                  href="9"
                  rel="noreferrer"
                >
                  Arts
                </a>
                <a
                  class="nav-link text-white fw-bold"
                  href="9"
                  rel="noreferrer"
                >
                  Gallaries
                </a>
                <a
                  class="nav-link login fw-bold text-dark"
                  href="9"
                  rel="noreferrer"
                >
                  Login
                </a>
                <a
                  class="nav-link explore fw-bold text-dark"
                  href="9"
                  rel="noreferrer"
                >
                  Explore arts
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
