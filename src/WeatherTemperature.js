import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(properties) {
  const [unit, setunit] = useState("celsius");
  function convertToCelsius(event) {
    event.preventDefault();
    setunit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setunit("Fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(properties.celsius)}</span>
        <span className="celsius">°C | </span>
        <span>
          <a href="/" onClick={convertToFahrenheit} className="fahrenheit">
            F°
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (properties.celsius * 9) / 5 + 32;
    return (
      <div>
        <span>{Math.round(fahrenheit)}</span>
        <span>
          {" "}
          <a href="/" onClick={convertToCelsius} className="celsius">
            °C |
          </a>
        </span>
        <span className="fahrenheit">F°</span>
      </div>
    );
  }
}
