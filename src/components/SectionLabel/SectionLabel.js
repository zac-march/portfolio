import style from "./SectionLabel.module.css";
import React from "react";

function SectionLabel({ title }) {
  return (
    <div className={style.container}>
      <hr></hr>
      <div className={style.label}>{title}</div>
    </div>
  );
}

export default SectionLabel;
