import style from "./Ticker.module.css";
import React from "react";
import uniqid from "uniqid";

function Ticker({ data }) {
  const imgWidth = 20;
  const gap = 4;
  const tickerWidth = (imgWidth + gap) * data.length;
  document.documentElement.style.setProperty(
    "--ticker-width",
    `-${tickerWidth}rem`
  );

  const listElements = data.map((icon) => (
    <li key={uniqid()} style={{ width: `${imgWidth}rem` }}>
      <img alt="" src={icon.iconURL} />
    </li>
  ));

  return (
    <div className={style.container}>
      <ul style={{ gap: `${gap}rem` }} className={style.ticker}>
        {listElements}
        {listElements}
      </ul>
    </div>
  );
}

export default Ticker;
