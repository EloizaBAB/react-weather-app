import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";

export default function Weatherinfo(properties) {
  return (
    <div className="Weatherinfo">
      <FormattedDate date={properties.info.date} />
      <ul>
        <li className="temperature">
          <span>
            {Math.round(properties.info.temperature)}ºC
            <div>
              <Weathericon code={properties.info.icon} />
            </div>
          </span>
        </li>
        <li> {properties.info.description}</li>
        <li>Wind: {properties.info.wind} km</li>
        <li>Humidity: {properties.info.humidity}% </li>
      </ul>
    </div>
  );
}
