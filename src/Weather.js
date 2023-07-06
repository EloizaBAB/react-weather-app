import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState(" ");
  const [result, setResult] = useState(false);
  const [weatherobj, setWeatherobj] = useState({});
  function displayWeather(response) {
    setResult(true);
    setWeatherobj({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "be81f193e065bf5feb2d944c7336968b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
