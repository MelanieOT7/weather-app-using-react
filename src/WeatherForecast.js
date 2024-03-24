import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="weatherForecast-temperature">
              <span className="weatherForecast-temperature-max">19°</span>
              <span className="weatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
