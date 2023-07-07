import React from "react";

export default function FormattedDate(properties) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[properties.date.getDay()];
  let hours = properties.date.getHours();
  let minutes = properties.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day},{hours}:{minutes}
    </div>
  );
}