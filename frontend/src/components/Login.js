import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:9000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Successful!");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./Home";
        } else if (data.error === "invalid password") {
          alert("invalid password");
        }
        if (data.error === "User not found") {
          alert("User not found");
        }
      });
  }

  render() {
    return (
      <div
        className="logg App  p-5 mb-5
    "
      >
        <h1 className="text-center">Login</h1>
        <form
          className="form-horizontal"
          action=""
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email address"
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>

          <div className="form-group pt-3">
            <label for="userpassword">Password</label>
            <input
              type="password"
              class="form-control"
              id="userpassword"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            ></input>
          </div>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customControlInline"
            ></input>
            <label
              className="custom-control-label pt-2"
              for="customControlInline"
            >
              Remember me
            </label>
          </div>

          <div className="mt-3 text-center">
            <button
              className="btn log-btn btn-block waves-effect waves-light"
              type="submit"
            >
              Log In
            </button>
          </div>

          {/* <div className="mt-4 text-center">
            <a href="/" class="text-muted">
              <i class="mdi mdi-lock mr-1"></i> Forgot your password?
            </a>
          </div> */}

          <div className="mt-4 ">
            <p className="text-end">
              Don't have an account?{" "}
              <Link to="/Register" className="log-link">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
