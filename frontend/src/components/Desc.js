import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../desc.css";
import desc from "../images/desc-img.png";

export default function Desc() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchArtwork = async () => {
        try {
          console.log("Fetching artwork for ID:", id);
          const response = await axios.get(
            `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_display,medium_display,credit_line,place_of_origin,department_title,image_id`
          );
          console.log("API response:", response.data.data);
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

  const handleShareClick = async () => {
    const shareData = {
      title: artwork.title,
      text: `Check out this artwork: ${artwork.title} by ${artwork.artist_display}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Artwork shared successfully");
      } catch (error) {
        console.error("Error sharing artwork:", error);
      }
    } else {
      navigator.clipboard
        .writeText(shareData.url)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Error copying link to clipboard:", error);
        });
    }
  };

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
            <i
              className="fa-solid fa-share-from-square"
              onClick={handleShareClick}
              style={{ cursor: "pointer" }}
            ></i>
          </h3>
        </div>
      </div>
      <div className="container row">
        <div className="col-md-6 mb-4">
          <div className="text-center">
            <img
              src={imageUrl}
              className="art-blob-2 img-fluid"
              alt="artimage"
            />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="text-center">
            <h3 className="mb-3">{artwork.title}</h3>
            <p>{artwork.medium_display}</p>
            <p>{artwork.credit_line}</p>
            <p>{artwork.artist_display}</p>
            <p>Place of origin: {artwork.place_of_origin}</p>
            <p>Department: {artwork.department_title}</p>
            <p>{artwork.date_display}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
