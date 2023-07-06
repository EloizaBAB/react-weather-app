import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container-weather">
        <h1> City</h1>
        <h2>date</h2>
        <Weather />
      </div>
      <div className="container-forecast">
        <div className="forecast-grid">
          <div>da1</div>
          <div>day2</div>
          <div>day3</div>
          <div>da4</div>
        </div>
      </div>
      <footer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/EloizaBAB/react-weather-app"
        >
          Open Source here
        </a>
      </footer>
    </div>
  );
}

export default App;
