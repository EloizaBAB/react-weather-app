import React, { useState } from "react";

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
        <span>{Math.round(properties.celsius)}</span>
        <span>°C | </span>
        <span>
          <a href="/" onClick={convertToFahrenheit}>
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
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          |{" "}
        </span>
        <span>F°</span>
      </div>
    );
  }
}
