import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import { FaSistrix } from "react-icons/fa";
import Other from "./components/Other";
import Time from "./components/Time";

const App = () => {
  const API_KEY = "5e4c2cc0640e14a76430df7dfaf51f8a";
  const [weathers, setWeathers] = useState();
  const [search, setSearch] = useState("");
  const [icon, setIcon] = useState("wi-day-sunny");
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [query, setQuery] = useState("Maroc");

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeathers(data);
    console.log(data);
    changeIcon(data.weather[0].main);
    changeTime(data.sys.sunrise, data.sys.sunset);
  };

  useEffect(() => {
    getWeather();
  }, [query]);
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    getWeather();
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const changeIcon = (main) => {
    if (main == "Clouds") {
      setIcon("wi-cloudy");
    } else {
      if (main == "Clear") {
        setIcon("wi-day-sunny");
      }
    }
  };
  const changeTime = (unix1, unix2) => {
    var date1 = new Date(unix1 * 1000);
    var date2 = new Date(unix2 * 1000);
    // Hours part from the timestamp
    var hours2 = date2.getHours();
    var hours1 = date1.getHours();
    // Minutes part from the timestamp
    var minutes1 = "0" + date1.getMinutes();
    var minutes2 = "0" + date2.getMinutes();
    // Seconds part from the timestamp

    var formattedTime1 = hours1 + ":" + minutes1.substr(-2);
    var formattedTime2 = hours2 + ":" + minutes2.substr(-2);
    setSunrise(formattedTime1);
    setSunset(formattedTime2);
    console.log(formattedTime1);
    console.log(formattedTime2);
  };
  // switch (true) {
  //   case rangeTemp >= 200 && rangeTemp < 232:
  //     setIcon("wi-thunderstorm");

  //     break;

  //   case rangeTemp >= 300 && rangeTemp <= 321:
  //     setIcon("wi-sleet");
  //     break;
  //   case rangeTemp >= 500 && rangeTemp <= 521:
  //     setIcon("wi-storm-showers");
  //     break;
  //   case rangeTemp >= 600 && rangeTemp <= 622:
  //     setIcon("wi-snow");
  //     break;
  //   case rangeTemp >= 701 && rangeTemp <= 781:
  //     setIcon("wi-fog");
  //     break;
  //   case rangeTemp === 800:
  //     setIcon("wi-day-sunny");
  //     break;
  //   case rangeTemp >= 801 && rangeTemp <= 804:
  //     setIcon("wi-day-fog");
  //     break;
  //   default:
  //     setIcon("wi-day-sunny");
  // }

  return (
    <div className="App">
      <h2 className="header">There is No bad weather,</h2>

      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="City / Country Name....."
          value={search}
          onChange={updateSearch}
          required
        />
        <button className="search-button" type="submit">
          <FaSistrix size="25px" />
        </button>
      </form>
      <div className="pp">
        <div className="other">
          {weathers && <Other other={weathers.main} />}
        </div>
        <div className="weather">
          {weathers && (
            <Weather
              weather={weathers.main}
              icon={icon}
              city={weathers.name}
              description={weathers.weather[0].description}
              country={weathers.sys.country}
            />
          )}
        </div>
        <div className="time">
          {weathers && <Time time1={sunrise} time2={sunset} />}
        </div>
      </div>
    </div>
  );
};

export default App;
