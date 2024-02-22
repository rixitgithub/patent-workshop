import React from "react";
import "./footer.css";
import logo from "../media/rgipt_logo.png";

function Footer() {
  return (
    <>
      <div className="foot">
        <div className="foot-content">
          <div className="left">
            <div className="contact">
              <h4>Contact Us</h4>
            </div>
            <div className="num">
              <h5>Abhinav Tripathi ( +91-9026879340 )</h5>
            </div>
          </div>
          <div className="middle">
            <h2>
              Our Workshop is a tapestry of innovation, where ideas converge,
              and solutions emerge.
            </h2>
          </div>
          <div className="right">
            <img src={logo} alt="rgipt_logo" />
          </div>
        </div>
        <div className="last">
          <p>&copy; 2024 PATENT WORKSHOP RGIPT</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
