import SectionLabel from "../../components/SectionLabel/SectionLabel";
import style from "./About.module.css";
import React from "react";

function About() {
  return (
    <>
      <SectionLabel id={"about"} title={"about me"} />
      <section className={style.container}>
        <section className={style.blurb}>
          <h1>Who am I?</h1>
          <p>
            With over four years of experience in the IT industry, I have honed
            my skills as a System Support professional. However, driven by a
            burning passion for Front-End Development, I am shifting gears to
            pursue a career in this dynamic field.
            <br />
            <br />I pride myself on being a quick learner and thrive in
            team-oriented environments. I am always excited about embracing new
            technologies and being part of a rapidly growing organization. One
            of my greatest strengths is my ability to solve problems
            effectively. I excel at breaking down complex technical concepts and
            conveying them in a way that is easy for others to understand. This
            skill has proven invaluable in my previous roles, and I am eager to
            apply it to the world of Software Development.
            <br />
            <br />
            When I'm not immersed in the world of technology, you'll find me
            disconnecting and resetting through camping adventures. Born and
            raised in Rural Queensland, I have always had a deep appreciation
            for the simplicity and beauty of nature. Additionally, I love
            staying active, and cycling has become my preferred source of
            exercise. It not only keeps me fit but also allows me to explore new
            places and appreciate the journey.
            <br />
            <br />
            Overall, I am a self-motivated individual with a genuine passion for
            Front-End Development. I am ready to hit the ground running, armed
            with a solid understanding of front-end development technologies. I
            am excited about the opportunities ahead and look forward to making
            a meaningful impact in this ever-evolving field.
          </p>
        </section>
      </section>
    </>
  );
}

export default About;
