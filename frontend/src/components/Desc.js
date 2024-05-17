import React from "react";
// import axios from "axios";
import desc from "../images/desc-img.png";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation, Link } from "react-router-dom";

import "../desc.css";

export default function Desc() {
  const location = useLocation();
  const { artiste } = location.state || {};

  if (!artiste) {
    return <div>No artwork selected</div>;
  }

  const imageUrl = artiste.image_id
    ? `https://www.artic.edu/iiif/2/${artiste.image_id}/full/843,/0/default.jpg`
    : "../images/first-art-image.png";
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="row container-fluid margin">
          <div className="col-6 text-left">
            <Link to="/Home" className="link-desc">
              <h3>
                {" "}
                <i class="fa-solid fa-arrow-left"></i>
              </h3>
            </Link>
          </div>
          <div className="col-6 text-end">
            <h3>
              <i class="fa-solid fa-share-from-square"></i>
            </h3>
          </div>
        </div>
        <div className="container row">
          <div className="col-md-6 mb-4">
            <div className="text-center">
              <img src={imageUrl} className=" art-blob-2" alt="artimage"></img>
            </div>
          </div>
          <div className="col-md-6 mb-4 ">
            <div className=" ">
              <h3 className="mb-3">{artiste.title}</h3>
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
