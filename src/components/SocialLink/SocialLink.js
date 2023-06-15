import style from "./SocialLink.module.css";
import React from "react";

function SocialLink({ title, url }) {
  return (
    <a target="_blank" rel="noreferrer" className={style.link} href={url}>
      {title + " ->"}
    </a>
  );
}

export default SocialLink;
