import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(properties) {
  return (
    <div className="Weatherinfo">
      <FormattedDate date={properties.info.date} />
      <ul>
        <li className="temperature">
          <span>
            {Math.round(properties.info.temperature)}ºC
            <img alt="weather icon" src={properties.info.icon} />
          </span>
        </li>
        <li> {properties.info.description}</li>
        <li>Wind: {properties.info.wind} km</li>
        <li>Humidity: {properties.info.humidity}% </li>
      </ul>
    </div>
  );
}
