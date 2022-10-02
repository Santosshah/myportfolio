import React from "react";
import "./ProjectList.scss";

const ProjectList = ({ id, title, active, setSelected }) => {
  return (
    <div>
      <li
        className={active ? "projectlist active" : "projectlist"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </div>
  );
};

export default ProjectList;
