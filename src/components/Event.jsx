import React from "react";
import "./event.css";

function Event() {
  return (
    <>
      <div className="event_head">
        <h1 id="event_h1">-SCHEDULE-</h1>
        <p id="event_p">OF THE EVENT</p>
      </div>
      <div className="dates">
        <h1>
          TENTATIVE DATES : <span id="clrtextevent">9/10 MARCH</span>
        </h1>
      </div>
      <div className="sch">
        <h1>Kindly Wait Till We Clear Everything!!!</h1>
        <div class="loader"></div>
      </div>
    </>
  );
}

export default Event;
