import React from "react";
import style from "./weather.module.css";

const Time = (props) => {
  return (
    <div>
      <h1 className={style.other}>Sunrise</h1>
      <h5 className={style.icon}>
        <i className="wi wi-sunrise display-3"></i>
      </h5>
      <h1>{props.time1} </h1>
      <div className={style.icon}>________________</div>
      <h1 className={style.other}>Sunset</h1>
      <h5 className={style.icon}>
        <i className="wi wi-sunset display-3"></i>
      </h5>
      <h1>{props.time2} </h1>
    </div>
  );
};

export default Time;
