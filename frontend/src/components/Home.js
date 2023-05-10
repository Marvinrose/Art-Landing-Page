import React, { Component } from "react";
import Hero from "./Hero";
import ArtSection from "./ArtSection";
import Filter from "./Filter";
import "../App.css";

// import "../hero.css";

export default class Home extends Component {
  componentDidMount() {
    fetch("https://art-institute.onrender.com/home", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "home");
      });
  }

  render() {
    return (
      <div>
        <Hero />
        <Filter />
        <ArtSection defaultKeyword="mask" />
      </div>
    );
  }
}

// http://localhost:9000/home
