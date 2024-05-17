import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../desc.css";
import desc from "../images/desc-img.png";

export default function Desc() {
  const location = useLocation();
  const { id } = location.state || {};
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchArtwork = async () => {
        try {
          const response = await axios.get(
            `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_display,image_id`
          );
          setArtwork(response.data.data);
        } catch (error) {
          console.error("Error fetching artwork:", error);
        }
      };

      fetchArtwork();
    }
  }, [id]);

  if (!artwork) {
    return <div>Loading...</div>;
  }

  const imageUrl = artwork.image_id
    ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
    : desc;

  return (
    <div>
      <Navbar />
      <div className="row container-fluid margin">
        <div className="col-6 text-left">
          <Link to="/Home" className="link-desc">
            <h3>
              <i className="fa-solid fa-arrow-left"></i>
            </h3>
          </Link>
        </div>
        <div className="col-6 text-end">
          <h3>
            <i className="fa-solid fa-share-from-square"></i>
          </h3>
        </div>
      </div>
      <div className="container row">
        <div className="col-md-6 mb-4">
          <div className="text-center">
            <img src={imageUrl} className="art-blob-2" alt="artimage"></img>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div>
            <h3 className="mb-3">{artwork.title}</h3>
            <p>
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more.
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more.
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more.
            </p>
            <p>{artwork.artist_display}</p>
            <p>{artwork.date_display}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
