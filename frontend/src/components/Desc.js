import React, { Component } from "react";
import desc from "../images/desc-img.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import "../desc.css";

export default class Desc extends Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <div>
          <div className="row container-fluid mt-5">
            <div className="col-6 text-left">
              <Link to="/Hero" className="link-desc">
                <h2>
                  {" "}
                  <i class="fa-solid fa-arrow-left"></i>
                </h2>
              </Link>
            </div>
            <div className="col-6 text-right">
              <h2>
                <i class="fa-sharp fa-regular fa-share-nodes"></i>
              </h2>
            </div>
          </div>
          <div className="container row">
            <div className="col-6">
              <div className="art-blob">
                <img
                  src={desc}
                  className="img-fluid art-blob"
                  alt="artimage"
                ></img>
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <h3 className="mb-3">Plastic Hears Sculpture</h3>
                <p>
                  Browse a curated selection of art around the world, including
                  museum exhibitions, gallery openings, upcoming and many more.
                  Browse a curated selection of art around the world, including
                  museum exhibitions, gallery openings, upcoming and many
                  moreBrowse a curated selection of art around the world,
                  including museum exhibitions, gallery openings, upcoming and
                  many more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
