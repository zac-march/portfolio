import style from "./Project.module.css";
import React from "react";

function Project({ data }) {
  return (
    <div className={style.container}>
      <img alt={"Project preview"} src={data.imgURL} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <ul className={style.stack}>
        {data.stack.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <div className={style.links}>
        <a href={data.codeLink}>Code</a>
        <a href={data.demoLink}>Demo</a>
      </div>
    </div>
  );
}

export default Project;
