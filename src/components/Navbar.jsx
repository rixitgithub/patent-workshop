import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <section>
        <div className="nav">
          <ul className="navitem">
            <li className="boxed">
              <a href="">HOME</a>
            </li>
            <li className="boxed">
              <a href="">TOPICS</a>
            </li>
            <li className="boxed">
              <a href="">GUESTS</a>
            </li>
            <li className="boxed">
              <a href="">SCHEDULE</a>
            </li>
            <li className="boxed">
              <a href="">REGISTER</a>
            </li>
            <li className="boxed">
              <a href="">TEAM</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
