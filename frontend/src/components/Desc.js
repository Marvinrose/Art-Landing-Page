import React, { Component } from "react";
import first from "../images/first-art-image.png";
// import "../ArtSection.css";

import "../desc.css";

export default class Desc extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <div className="art-blob">
              <img
                src={first}
                className="img-fluid art-blob-img"
                alt="artimage"
              ></img>
            </div>
          </div>
          <div className="col-6">
            <div className="">
              <h3>Plastic Hears Sculpture</h3>
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
    );
  }
}
