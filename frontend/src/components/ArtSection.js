import React, { useState, useEffect } from "react";
import axios from "axios";
import first from "../images/first-art-image.png";
import { Link } from "react-router-dom";

import "../ArtSection.css";

export default function ArtSection() {
  const [artist, setArtist] = useState([]);

  let apiKey = 12988;

  let apiUrl = `https://api.artic.edu/api/v1/artworks?=${apiKey}fields=id,title,artist_display,date_display,main_reference_number`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data[4].exhibition_history);
        setArtist(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [apiUrl]);

  return (
    <>
      {" "}
      <div className="row mb-5 art-div">
        {artist.map((artiste) => (
          <div className="col-md-4">
            <Link to="/Desc" className="link-desc">
              <div className="art-blob">
                <img
                  src={first}
                  className="img-fluid art-blob-img"
                  alt="artimage"
                ></img>
                <h4 key={artiste["id_artist"]}>
                  {artiste["classification_title"]}
                </h4>
                <p className="art-date">
                  {artiste["date_display"]},{" "}
                  <span className="artist-title">
                    {artiste["artist_title"]}
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}

        <button className="art-button mb-5 mx-auto d-block">
          Explore more <i class="fa-regular fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
