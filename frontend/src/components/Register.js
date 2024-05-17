import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("https://art-institute.onrender.com/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.error === "user already exists") {
          alert("User already exists, try logging in");
          window.localStorage.getItem("token", data.data);
        }

        if (data.status === "ok") {
          alert("Successfully Registered, you can now Sign in!");
        }
        // this.setState({ email: "", password: "", fname: "", lname: "" });
        window.location.href = "./Login";
      });
  }
  render() {
    return (
      <div className="App p-5 mb-5 ">
        <h1 className="text-center">Register</h1>
        <form
          className="form-horizontal"
          action=""
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label for="username">Firstname</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Firstname"
              onChange={(e) => this.setState({ fname: e.target.value })}
            ></input>
          </div>

          <div className="form-group pt-3">
            <label for="userpassword">Lastname</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Lastname"
              onChange={(e) => this.setState({ lname: e.target.value })}
            ></input>
          </div>

          <div className="form-group pt-3">
            <label for="userpassword">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email address"
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>

          <div className="form-group pt-3">
            <label for="userpassword">Password</label>
            <input
              type="text"
              class="form-control"
              id="password"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            ></input>
          </div>

          <div className="mt-3 text-center">
            <button
              className="btn log-btn  waves-effect waves-light"
              type="submit"
            >
              Register
            </button>
          </div>

          <div className="mt-4 ">
            <p className="text-center">
              Already registered?{" "}
              <Link to="/" className="log-link">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
