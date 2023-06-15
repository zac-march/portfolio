import SectionLabel from "../../components/SectionLabel/SectionLabel";
import SocialLink from "../../components/SocialLink/SocialLink";
import style from "./Contact.module.css";
import React from "react";

function Contact() {
  return (
    <>
      <SectionLabel id={"contact"} title={"contact me"} />
      <section className={style.container}>
        <div className={style.title}>
          <h1>Let's work Together</h1>
          <div className={style.socials}>
            <SocialLink title={"Github"} url={"https://github.com/zac-march"} />
            <SocialLink
              title={"Linkedin"}
              url={"https://www.linkedin.com/in/zachariah-march/"}
            />
            <SocialLink title={"Email"} url={"mailto:zacmarch101@gmail.com"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
