import React from "react";
import FormattedDate from "./FormattedDate";
import Weather from "./Weather";

export default function Weatherinfo(properties) {
  return (
    <div>
      <FormattedDate date={properties.data.date} />
      <ul>
        <li className="temperature">
          <span>
            {Math.round(properties.data.temperature)}ºC
            <img alt="weather icon" src={properties.data.icon} />
          </span>
        </li>
        <li> {properties.data.description}</li>
        <li>Wind: {properties.data.wind} km</li>
        <li>Humidity: {properties.data.humidity}% </li>
      </ul>
    </div>
  );
}
