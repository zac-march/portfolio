import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Ticker from "../../components/Ticker/Ticker";
import devicons from "../../data/devicons";
import style from "./Skills.module.css";
import React from "react";

function Skills() {
  return (
    <>
      <SectionLabel id={"skills"} title={"Skills"} />
      <section className={style.container}>
        <section className={style.blurb}>
          <h1>The tools I use</h1>
          <p>
            When constructing web applications, I employ a blend of creativity
            and the following technologies:
            <br />
            <br />
            For crafting interactive and visually appealing web applications:
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Jest</li>
              <hr></hr>
            </ul>
            For constructing robust and scalable backends that empower the
            functionality of my web applications:
            <ul>
              <li>NoSQL</li>
              <li>Firebase</li>
              <li>Azure</li>
              <hr></hr>
            </ul>
            To streamline my development process and ensure consistent quality:
            <ul>
              <li>Git/Github</li>
              <li>VSCode</li>
              <li>Prettier</li>
              <hr></hr>
            </ul>
          </p>
        </section>
        <Ticker data={devicons} />
      </section>
    </>
  );
}

export default Skills;
