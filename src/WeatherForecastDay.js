import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="weatherForecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="weatherForecast-temperature">
        <span className="weatherForecast-temperature-max">
          {props.data.temp.max}°
        </span>
        <span className="weatherForecast-temperature-min">
          {props.data.temp.min}°
        </span>
      </div>
    </div>
  );
}
