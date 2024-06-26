import React, { useState, useEffect } from "react";
import axios from "axios";
import first from "../images/first-art-image.png";
import { useNavigate } from "react-router-dom";

import "../ArtSection.css";

export default function ArtSection() {
  const [artist, setArtist] = useState([]);
  const navigate = useNavigate();

  let apiKey = 12988;

  let apiUrl = `https://api.artic.edu/api/v1/artworks?=${apiKey}fields=id,title,artist_display,date_display,main_reference_number,image_id
`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data);
        console.log(res.data.data[0].image_id, "image idd");
        setArtist(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [apiUrl]);

  const handleArtClick = (artiste) => {
    navigate("/Desc", { state: { id: artiste.id } });
  };

  // const handleArtClick = (artiste) => {
  //   navigate(`/desc/${artiste.id}`);
  // };

  return (
    <>
      {" "}
      <div className="container ">
        <div className="row gy-5 art-div " style={{ marginBottom: "50px" }}>
          {artist.map((artiste) => {
            const imageUrl = artiste.image_id
              ? `https://www.artic.edu/iiif/2/${artiste.image_id}/full/400,/0/default.jpg`
              : first; // Provide a fallback image URL if image_id is missing
            return (
              <div className="col-md-4" key={artiste.id}>
                <div
                  style={{ cursor: "pointer" }}
                  className="art-blob"
                  onClick={() => handleArtClick(artiste)}
                >
                  <img
                    src={imageUrl}
                    className="img-fluid art-blob-img"
                    alt={artiste.title}
                  />

                  <div className="p-3" style={{ wordWrap: "break-word" }}>
                    <h4>{artiste["classification_title"]}</h4>
                    <p className="art-date">
                      {artiste["date_display"]},{" "}
                      <span className="artist-title">
                        {artiste["artist_title"]}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <button className="art-button mb-5 mx-auto d-block">
          Explore more <i class="fa-regular fa-arrow-right"></i>
        </button> */}
        </div>
      </div>
    </>
  );
}
