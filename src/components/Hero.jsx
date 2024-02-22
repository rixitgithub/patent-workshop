import React from "react";
import rgipt_logo from "../media/rgipt_logo.png";
import cstup_logo from "../media/cstup_logo.png";
import "./hero.css";
import Register from "./Register";
import Topics from "./Topics";
import Guest from "./Guest";
import Event from "./Event";
import Team from "./Team";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Hero() {
  return (
    <BrowserRouter>
      <>
        <div className="logo">
          <img className="rgipt_logo" src={rgipt_logo} alt="RGIPT" />
          <img className="cstup_logo" src={cstup_logo} alt="RGIPT" />
        </div>
        <div className="title">
          <h3>WORKSHOP</h3>
          <p>on</p>
          <h1>Intellectual Property Rights</h1>
          <p>Organized By-</p>
          <h3>Department of Electrical and Electronics Engineering,</h3>
          <h3>Rajiv Gandhi Institute of Petroleum Technology</h3>
          <p>Jais,Amethi</p>
        </div>
        <div className="submit">
          <button className="btn">
            <Link to="#register" smooth className="link">
              REGISTER
            </Link>
          </button>
        </div>
        <Topics />
        <Guest />
        <Event />
        <Register />
        <Team />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Hero;
