import isScrolledIntoView from "../../utils/isScrolledIntoView";
import throttle from "../../utils/throttle";
import style from "./Nav.module.css";
import React, { useEffect } from "react";

function Nav() {
  function setActiveLink(el) {
    document.querySelectorAll(`.nav-link`).forEach((ele) => {
      ele.classList.remove(style.active);
    });
    if (el.id !== "nav-hero") el.classList.add(style.active);
  }

  const sectionChange = throttle(() => {
    const anchors = document.querySelectorAll(".anchor");
    anchors.forEach((anchor) => {
      if (isScrolledIntoView(anchor)) {
        const linkEl = document.querySelector(`#nav-${anchor.id}`);
        if (linkEl) {
          setActiveLink(linkEl);
        }
      }
    });
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", sectionChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={style.container}>
      <div className={style.wrapper}>
        <a href="#hero" className={"nav-link"} id={"nav-hero"}>
          <h1>ZM</h1>
        </a>
        <ul>
          <li>
            <a id={"nav-portfolio"} className={"nav-link"} href="#portfolio">
              my work
            </a>
          </li>
          <li>
            <a id={"nav-skills"} className={"nav-link"} href="#skills">
              my tools
            </a>
          </li>
          <li>
            <a id={"nav-about"} className={"nav-link"} href="#about">
              about me
            </a>
          </li>
          <li>
            <a id={"nav-contact"} className={"nav-link"} href="#contact">
              contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
