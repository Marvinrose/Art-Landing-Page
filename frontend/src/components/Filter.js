import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../filter.css";

export default class Filter extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <h2>Art in the collection</h2>
            <p>
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more
            </p>
          </div>
          <div className="col-md-6 text-center search">
            <input
              style={{ width: "70%", textAlign: "center" }}
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              autoFocus="on"
            />
          </div>
        </div>
      </div>
    );
  }
}
