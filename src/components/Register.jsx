import React from "react";
import "./register.css";
import qr from "../media/qr.png";

function Register() {
  return (
    <>
      <section id="register">
        <div className="event_head">
          <h1 id="event_h1">-REGISTER-</h1>
          <p id="event_p">CLOSING SOON</p>
        </div>
        <div className="steps">
          <h3>STEP 1 - SCAN THE QR CODE</h3>
          <img className="qr" src={qr} alt="qr" />
          <h3>STEP 2 - FILL OUT THE GOOGLE FORM</h3>
          <button className="button">Google Form </button>
        </div>
      </section>
    </>
  );
}

export default Register;
