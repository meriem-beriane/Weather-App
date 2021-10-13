import React from "react";
import style from "./weather.module.css";

const Weather = (props) => {
  return (
    <div className="container">
      <div className={style.cards}>
        <h1 className={style.title}>
          {props.city}, {props.country}
        </h1>
        <h5 className={style.icon}>
          <i className={`wi ${props.icon} display-1`}></i>
        </h5>
        <h4 className={style.desc}>{props.description}</h4>
        <h1 className={style.temp}>{props.weather.temp}&deg;C</h1>
      </div>
      <div className={style.icon}>________________</div>
      {minmaxTemp(props.weather.temp_min, props.weather.temp_max)}
    </div>
  );
};
const minmaxTemp = (min, max) => {
  return (
    <h3>
      <span className={style.min}>Min : {min}&deg;</span>
      <i className="wi wi-thermometer "> </i>
      <span className={style.max}> Max : {max}&deg;</span>
    </h3>
  );
};

export default Weather;
