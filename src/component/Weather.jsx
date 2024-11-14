import { useEffect, useState } from "react";
import Search from "./search";


export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLastUpdate(getCurrentDateAndTime()); // Update last update time
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDateAndTime() {
    const now = new Date();
    
    // Date format: "Monday, January 1, 2024"
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    // Get the current date
    const date = now.toLocaleDateString("en-us", options);

    // Get the time in the correct format: "3:19 AM"
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    return { date, time };
  }

  useEffect(() => {
    fetchWeatherData("Tezpur");

    // Set an interval to fetch weather data every 5 minutes (300000 ms)
    const intervalId = setInterval(() => {
      fetchWeatherData(search || "Tezpur"); // Fetch data based on the current search or default to Tezpur
    }, 300000); // 5 minutes

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [search]);

  console.log(weatherData);

  return (
    <div className="weather-container">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="weather-info">
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date-time">
            <span>{lastUpdate?.date}</span>
            <span>{lastUpdate?.time}</span> {/* Display time in correct format */}
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-details">
            <div className="column">
              <p className="wind">{weatherData?.wind?.speed} km/h</p>
              <p>Wind Speed</p>
            </div>
            <div className="column">
              <p className="humidity">{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
