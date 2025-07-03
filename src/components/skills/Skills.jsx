import react from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Graphic from "./Graphic";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className="skills__container container gride">
        <Frontend />
        <Graphic />
      </div>
    </section>
  );
};

export default Skills;
