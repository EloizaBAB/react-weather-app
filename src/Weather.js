import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(properties) {
  const [city, setCity] = useState(" ");
  const [result, setResult] = useState(false);
  const [weatherobj, setWeatherobj] = useState({});
  function displayWeather(response) {
    setResult(true);
    setWeatherobj({
      temperature: response.main.temp,
      date: new Date(response.dt * 1000),
      wind: response.wind.speed,
      description: response.weather[0].description,
      humidity: response.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "be81f193e065bf5feb2d944c7336968b";
    let apiUrl = `https://api.openweathermap.org/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    // this function gives access to the citys
    //make an api call and update the weather UI
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={updateCity}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
  if (result === true) {
    return (
      <div>
        {form}
        <h1>{city}</h1>
        {/* to display the date in an easy way i had to create a new component with the formatted date and then send properties to it, the properties
         come from the weather object date info */}

        <FormattedDate date={weatherobj.date} />
        <ul>
          <li className="temperature">
            <span>
              {Math.round(weatherobj.temperature)}ºC
              <img alt="weather icon" src={weatherobj.icon} />
            </span>
          </li>
          <li>Description: {weatherobj.description}</li>
          <li>Wind: {weatherobj.wind} km</li>
          <li>Humidity: {weatherobj.humidity}% </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
