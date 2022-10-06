import React from "react";
import "./Skills.css";
import {
  btnData,
  Frontend,
  Backend,
  Server,
  Networking,
} from "./dataExperiance";
import { useState } from "react";
import { useEffect } from "react";

const NewSkills = () => {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(Frontend);
        break;
      case "backend":
        setData(Backend);
        break;
      case "server":
        setData(Server);
        break;
      case "network":
        setData(Networking);
        break;
      default:
        setData(Frontend);
    }
  }, [selected]);

  return (
    <section className="section" id="skills">
      <div className="title">
        <h2>SKILLS</h2>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {btnData.map((item) => (
            <button
              key={item.id}
              className={`job-btn ${selected === item.id && `active-btn`}`}
              onClick={() => setSelected(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* job info */}

        {data.map(({ id, img, title, dates, skills }) => (
          <article className="job-info" key={id}>
            <h3 className="skill-name">{title}</h3>

            <div className="job-desc">
              {img.map((i) => (
                <img src={i} alt="" className="job-icon" />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewSkills;
