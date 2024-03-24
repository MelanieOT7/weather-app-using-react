import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="unit">℃</span>
    </div>
  );
}

// let fahrenheit = (props.celcius * 9) / 5 + 32;
