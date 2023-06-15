import SectionLabel from "../../components/SectionLabel/SectionLabel";
import style from "./Hero.module.css";
import React from "react";

function Hero() {
  return (
    <>
      <div id="hero" className={`anchor`}></div>
      <section className={style.container}>
        <div className={style.wrapper}>
          <h1>Let's work together.</h1>
          <p>
            I'm a dedicated Front-End Developer based in Melbourne, Australia.
            With a passion for crafting immersive and user-friendly web
            experiences, I thrive on tackling development challenges head-on.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
