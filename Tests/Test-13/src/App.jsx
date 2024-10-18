import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '874a3853e4324f1aa6b133652241810';

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
        setError('');
      } else {
        setError(data.error.message);
        setWeatherData(null);
      }
    } catch (err) {
      setError('Error fetching data');
      setWeatherData(null);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
        </div>
      )}
    </div>
  );
}

export default App;
