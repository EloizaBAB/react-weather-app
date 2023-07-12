import React from "react";

export default function WeatherTemperature(properties) {
  return (
    <div>
      <span>{Math.round(properties.info.temperature)}</span>
      <span>ºC</span>
    </div>
  );
}
