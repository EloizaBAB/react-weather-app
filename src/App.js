import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App by Eloiza B.</h1>
        <Weather />
      </header>
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
