import style from "./Portfolio.module.css";
import React from "react";
import projectData from "../../data/projects";
import Project from "../Project/Project";

function Portfolio() {
  return (
    <section className={style.container}>
      <section className={style.blurb}>
        <h1>My work</h1>
        <p>
          officia, fuga nihil repellat quam accusantium debitis doloribus nam
          dolor saepe amet non quos sint dicta tempora? Vero voluptatum
          repudiandae est.
        </p>
      </section>
      <section className={style.projects}>
        {projectData.map((project) => (
          <Project data={project} />
        ))}
      </section>
    </section>
  );
}

export default Portfolio;
