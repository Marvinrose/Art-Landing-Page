import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Desc from "./components/Desc";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Home" element={<Home />} />
        <Route path="Desc" element={<Desc />} />
        <Route path="Hero" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
