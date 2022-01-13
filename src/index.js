import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  Home,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  </Router>,

  document.getElementById("root")
);