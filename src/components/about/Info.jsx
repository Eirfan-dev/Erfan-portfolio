import React from "react";
import "./about.css";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiense</h3>
        <span className="about__subtitle">5 years on Graphic Design</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">more than 100 Project</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">educated</h3>
        <span className="about__subtitle">CodingFront Bootcamp</span>
      </div>
    </div>
  );
};

export default Info;
