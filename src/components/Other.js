import React from "react";
import style from "./weather.module.css";

const Other = (props) => {
  return (
    <div>
      <h1 className={style.other}>Humidity</h1>
      <h1 className={style.desc}>{props.other.humidity}%</h1>
      <div className={style.icon}>________________</div>
      <h1 className={style.other}>Pressure </h1>
      <h1 className={style.desc}>{props.other.pressure} hPa</h1>
      <div className={style.icon}>________________</div>
      <h1 className={style.other}>Feels Like</h1>
      <h1 className={style.desc}>{props.other.feels_like}&deg;C</h1>
    </div>
  );
};

export default Other;
