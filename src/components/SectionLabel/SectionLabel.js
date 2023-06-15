import style from "./SectionLabel.module.css";
import React from "react";

function SectionLabel({ title, id }) {
  return (
    <div id={id} className={`${style.container} anchor`}>
      <hr></hr>
      <div className={style.label}>{title}</div>
    </div>
  );
}

export default SectionLabel;
