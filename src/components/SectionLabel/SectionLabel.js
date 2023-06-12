import style from "./SectionLabel.module.css";
import React from "react";

function SectionLabel({ title }) {
  return (
    <>
      <hr></hr>
      <div className={style.label}>{title}</div>
    </>
  );
}

export default SectionLabel;
