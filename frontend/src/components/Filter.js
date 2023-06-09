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
          <div className="col-md-6 input-group text-center search">
            <div class="input-group test text-center">
              <span class="input-group-text test" id="basic-addon1">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                class=" test"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                fdprocessedid="xlmmb"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
