import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <h2>Art in the collection</h2>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
        </div>
        <div className="col-6 input-group">
          <span class="input-group-text" id="basic-addon1">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </div>
      </div>
    );
  }
}
