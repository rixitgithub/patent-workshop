import React from "react";
import "./guest.css";
import profile from "../media/profile.jpg";

function Guest() {
  return (
    <>
      <div className="top_head">
        <h1 id="guest_h1">-GUESTS-</h1>
        <p id="guest_p">APPEARING FOR THE EVENT</p>
      </div>
      <div class="grid">
        <div class="grid__item">
          <div class="card">
            <img class="card__img" src={profile} />
            <div class="card__content">
              <h1 class="card__header">REVEALING SOON</h1>
            </div>
          </div>
        </div>
        <div class="grid__item">
          <div class="card">
            <img class="card__img" src={profile} alt="Desert" />
            <div class="card__content">
              <h1 class="card__header">REVEALING SOON</h1>
            </div>
          </div>
        </div>
        <div class="grid__item">
          <div class="card">
            <img class="card__img" src={profile} />
            <div class="card__content">
              <h1 class="card__header">REVEALING SOON</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guest;
