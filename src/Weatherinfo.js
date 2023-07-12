import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";
import WeatherTemperature from "./WeatherTemperature";
export default function Weatherinfo(properties) {
  return (
    <div className="Weatherinfo">
      <FormattedDate date={properties.info.date} />
      <ul>
        <li className="temperature">
          <WeatherTemperature celsius={properties.info.temperature} />

          <div>
            <Weathericon code={properties.info.icon} />
          </div>
        </li>
        <li> {properties.info.description}</li>
        <li>Wind: {properties.info.wind} km</li>
        <li>Humidity: {properties.info.humidity}% </li>
      </ul>
    </div>
  );
}
