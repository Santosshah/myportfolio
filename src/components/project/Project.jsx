import React, { useState, useEffect } from "react";
import "./Project.scss";
import ProjectList from "../Project_List/ProjectList";

import {
  project_list,
  Web_App_Data,
  Mobile_App_Data,
  FeatureData,
  Design_Data,
  Branding_Data,
} from "../../ProjectDatas";

const Project = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  // fetching data from datasets;
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(FeatureData);
        break;
      case "web":
        setData(Web_App_Data);
        break;
      case "mobile":
        setData(Mobile_App_Data);
        break;
      case "design":
        setData(Design_Data);
        break;
      case "branding":
        setData(Branding_Data);
        break;

      default:
        setData(FeatureData);
    }
  }, [selected]);

  return (
    <section className="project" id="project">
      <h3 className="section__title">Projects</h3>

      <div className="project_container">
        <ul>
          {project_list.map((list) => (
            <ProjectList
              key={list.id}
              title={list.title}
              active={selected === list.id}
              setSelected={setSelected}
              id={list.id}
            />
          ))}
        </ul>

        <div className="project_items">
          {data.map((Dlist) => (
            <div className="item" key={Dlist.id}>
              <img src={Dlist.img} alt="" />
              <h3>{Dlist.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
