import React from "react";
import icon from "../images/icon.png";

import "../hero.css";
import image from "../images/hero-image.png";

export default function Hero() {
  return (
    <div className="hero container-fluid  ">
      <div className="">
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

      <div className="">
        <div className="row pt-5 mb-5  d-none d-md-flex hero-section">
          <div className="col-md-6 first-col">
            <h1 className="fw-bold">
              Discover amazing art around the
              <span> world</span>{" "}
            </h1>
            <p className="pt-4">
              Browse a curated selection of art around the world, <br />{" "}
              including museum exhibitions, gallery openings, <br /> upcoming
              and many more
            </p>

            <button className="button mt-4">Explore arts</button>
          </div>
          <div className="col-md-6 mx-auto d-block second-col">
            <img
              className="img-fluid hero-image mx-auto d-block"
              src={image}
              alt={image}
              width={100}
            ></img>
          </div>
        </div>

        <div className="mobile d-block d-md-none mx-auto hero-section">
          <h1 className="fw-bold mb-5 mt-3">
            Discover amazing art around the
            <span> world</span>{" "}
          </h1>
          <img
            className="img-fluid hero-image mx-auto d-block"
            src={image}
            alt={image}
            width={100}
          ></img>
          <p className="pt-5 text-center">
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
          <button className="button mt-4 d-block mx-auto">Explore arts</button>
        </div>
      </div>
    </div>
  );
}
