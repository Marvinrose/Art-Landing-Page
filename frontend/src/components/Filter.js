// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "../filter.css";

// <div className="container-fluid">
//   <div className="row mt-5 mb-5">
//     <div className="col-md-6">
//       <h2>Art in the collection</h2>
//       <p>
//         Browse a curated selection of art around the world, including
//         museum exhibitions, gallery openings, upcoming and many more
//       </p>
//     </div>
//     <div className="col-md-6  search">
//       <div className="text-right">
//         <input
//           style={{ width: "70%" }}
//           className="form-control "
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           autoFocus="on"
//         />
//       </div>
//     </div>
//   </div>
// </div>
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../filter.css";

const Filter = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <h2>Art in the collection</h2>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
        </div>
        <div className="col-md-6 search">
          <div className="text-right">
            <input
              style={{ width: "70%" }}
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              // autoFocus="on"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
