import style from "./Portfolio.module.css";
import React from "react";
import projectData from "../../data/projects";
import Project from "../../components/Project/Project";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import uniqid from "uniqid";

function Portfolio() {
  return (
    <>
      <SectionLabel id={"portfolio"} title={"my work"} />
      <section className={style.container}>
        <section className={style.blurb}>
          <h1>I build things</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti
            ut nostrum iste provident, itaque earum sit dolorum laborum fugit a
            quasi minus voluptatum, quaerat exercitationem labore magnam
            voluptate corporis?
            <br />
            <br />
            Suscipit veritatis minus architecto quae magni sunt tempora ut quo,
            veniam voluptates distinctio, repellendus magnam. A quos saepe illo
            odio maxime quia laboriosam quibusdam expedita numquam, facere,
            <br />
            <br />
            voluptatem corporis nulla eveniet, mollitia maiores quasi reiciendis
            rem. Commodi saepe omnis assumenda mollitia labore nulla a
            accusantium. Unde fuga itaque voluptate delectus?
          </p>
        </section>
        <section className={style.projects}>
          {projectData.map((project) => (
            <Project key={uniqid()} data={project} />
          ))}
        </section>
      </section>
    </>
  );
}

export default Portfolio;
