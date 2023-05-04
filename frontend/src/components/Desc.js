import React, { useState, useEffect } from "react";
// import axios from "axios";
import desc from "../images/desc-img.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import "../desc.css";

export default function Desc() {
//   const [art, setArt] = useState([]);
//   let apiKey = 129884;

//   let apiUrl = `https://api.artic.edu/api/v1/artworks?=${apiKey}fields=id,title,artist_display,date_display,main_reference_number`;

//   useEffect(() => {
//     axios
//       .get(apiUrl)
//       .then((res) => {
//         console.log(res.data.data);
//         console.log(res.data.data[4].exhibition_history);
//         setArt(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [apiUrl]);

  <>
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
          <div className="col-6 text-right">
            <h3>
              <i class="fa-solid fa-share-from-square"></i>
            </h3>
          </div>
        </div>
        <div className="container row">
          <div className="col-6">
            <div className="text-center">
              <img src={desc} className=" art-blob-2" alt="artimage"></img>
            </div>
          </div>
          <div className="col-6">
            <div className="">
              <h3 className="mb-3">Plastic Hears Sculpture</h3>
              <p>
                {/* {art[0].artist_display} */}
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
  </>;
}
