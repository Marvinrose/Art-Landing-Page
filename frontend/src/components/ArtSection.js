import React, { useState, useEffect } from "react";
import axios from "axios";
import first from "../images/first-art-image.png";
import { useNavigate } from "react-router-dom";
import "../ArtSection.css";

export default function ArtSection() {
  const [artist, setArtist] = useState([]);
  const navigate = useNavigate();

  const apiKey = 12988;
  const apiUrl = `https://api.artic.edu/api/v1/artworks?=${apiKey}&fields=id,title,artist_display,date_display,main_reference_number,image_id`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setArtist(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [apiUrl]);

  const handleArtClick = (artiste) => {
    navigate(`/desc/${artiste.id}`);
  };

  return (
    <div className="container">
      <div className="row gy-5 art-div" style={{ marginBottom: "50px" }}>
        {artist.map((artiste) => {
          const imageUrl = artiste.image_id
            ? `https://www.artic.edu/iiif/2/${artiste.image_id}/full/400,/0/default.jpg`
            : first;
          return (
            <div className="col-md-4" key={artiste.id}>
              <div
                className="link-desc"
                onClick={() => handleArtClick(artiste)}
                style={{ cursor: "pointer" }}
              >
                <div className="art-blob">
                  <img
                    src={imageUrl}
                    className="img-fluid art-blob-img"
                    alt={artiste.title}
                  />
                  <div className="p-3" style={{ wordWrap: "break-word" }}>
                    <h4>{artiste.classification_title}</h4>
                    <p className="art-date">
                      {artiste.date_display},{" "}
                      <span className="artist-title">
                        {artiste.artist_title}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
