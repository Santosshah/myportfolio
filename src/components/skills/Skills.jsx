import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Beckend from "./Beckend";

const Skills = () => {
  return (
    <section className="skills section " id="skills">
      <h3 className="section__title">Skills</h3>
      <span className="section__subtitle">My Technical level</span>
      <div className="skills__contianer container grid">
        <Frontend />
        <Beckend />
      </div>
    </section>
  );
};

export default Skills;
