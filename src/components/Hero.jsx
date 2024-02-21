import React from "react";
import rgipt_logo from "../media/rgipt_logo.png";
import cstup_logo from "../media/cstup_logo.png";
import "./hero.css";

function Hero() {
  return (
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
        <button className="btn">REGISTER</button>
      </div>
    </>
  );
}

export default Hero;
