import isScrolledIntoView from "../../utils/isScrolledIntoView";
import throttle from "../../utils/throttle";
import style from "./Nav.module.css";
import React, { useEffect } from "react";

function Nav() {
  function setActiveLink(el) {
    document.querySelectorAll(`.nav-link`).forEach((ele) => {
      ele.classList.remove(style.active);
    });
    el.classList.add(style.active);
  }

  const processSectionChange = throttle(() => {
    const anchors = [
      document.querySelector("#portfolio"),
      document.querySelector("#skills"),
    ];
    anchors.forEach((anchor) => {
      if (isScrolledIntoView(anchor)) {
        const linkEl = document.querySelector(`#nav-${anchor.id}`);
        if (linkEl) setActiveLink(linkEl);
      }
    });
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", processSectionChange);
  }, []);

  return (
    <nav className={style.container}>
      <div className={style.wrapper}>
        <a href="#">
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
            <a id={"nav-about"} className={"nav-link"} href="#">
              about me
            </a>
          </li>
          <li>
            <a id={"nav-contact"} className={"nav-link"} href="#">
              contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
