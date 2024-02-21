import React from "react";
import "./team.css";
import team01 from "../media/profile.jpg";
import team02 from "../media/amarish.jpg";
import team03 from "../media/profile.jpg";
import team04 from "../media/profile.jpg";

const teamMembers = [
  {
    imgUrl: team02,
    name: "Dr. Amarish Dubey",
    position: "Faculty Advisor",
  },

  {
    imgUrl: team01,
    name: "Thein Dan Ma",
    position: "Production Designer",
  },

  {
    imgUrl: team03,
    name: "OK Tal Mg Lay",
    position: "Customer Service",
  },

  {
    imgUrl: team04,
    name: "Ma Ma Saung",
    position: "Project Leader",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="event_head">
        <h1 id="guest_h1">-TEAM-</h1>
        <p id="guest_p">BEHIND THE EVENT</p>
      </div>
      <div className="container">
        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                  <span>
                    <i class="ri-facebook-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="genteam">
        <div class="grid">
          <div class="grid__item">
            <div class="card">
              <div class="card__content">
                <h1 class="card__header">REVEALING SOON</h1>
              </div>
            </div>
          </div>
          <div class="grid__item">
            <div class="card">
              <div class="card__content">
                <h1 class="card__header">REVEALING SOON</h1>
              </div>
            </div>
          </div>
          <div class="grid__item">
            <div class="card">
              <div class="card__content">
                <h1 class="card__header">REVEALING SOON</h1>
              </div>
            </div>
          </div>
          <div class="grid__item">
            <div class="card">
              <div class="card__content">
                <h1 class="card__header">REVEALING SOON</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
