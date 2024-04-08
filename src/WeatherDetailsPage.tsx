import Weather from "./Interfaces/Weather";
import formatUnixTimestamp from "./Methods/formatUnixTimestamp";
import fetchWeatherData from "./Services/fetchWeatherData";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./styles/WeatherDetailsPage.css";
import ThermometerIcon from "./Icons/ThermometerIcon";
import RainIcon from "./Icons/RainIcon";
import WindIcon from "./Icons/WindIcon";
import HumidityIcon from "./Icons/HumidityIcon";
import WeatherImage from "./WeatherImage";
import getWeatherIcon from "./Methods/getWeatherIcon";
import WeatherForecast from "./WeatherForecast";

const WeatherDetailsPage: React.FC = () => {
  const { lat, lon } = useParams<{ lat: string; lon: string }>();

  const { data: weatherData, error: weatherError } = useQuery<Weather, Error>(
    ["weather", lat, lon],
    () => fetchWeatherData(parseFloat(lat || "0"), parseFloat(lon || "0")),
    { enabled: !!lat && !!lon }
  );

  if (weatherError) {
    console.log(
      "City information could not be retrieved. Please enter a valid city name."
    );
  }

  return (
    <div className="container">
      <div className="weather-image-first-container">
        <div className="weather-image-second-container">
          <WeatherImage weatherListData={weatherData?.list[0]} />
          <div className="top-left text-white">
            <p className="placename">
              {weatherData && weatherData.city.name},{" "}
              {weatherData && weatherData.city.country}
            </p>
            <p className="date">
              {weatherData && formatUnixTimestamp(weatherData.list[0].dt)}
            </p>
          </div>
          <div className="bottom-left text-white">
            <p className="temp-text">
              {weatherData &&
                (weatherData.list[0].main.temp - 273.15).toFixed(0)}
              °c
            </p>
            <p className="minmax-text">
              {weatherData &&
                (weatherData.list[0].main.temp_min - 273.15).toFixed(2)}
              °c /{" "}
              {weatherData &&
                (weatherData.list[0].main.temp_max - 273.15).toFixed(2)}
              °c{" "}
            </p>
            <p className="weather-situation-text">
              {weatherData && weatherData.list[0].weather[0].main}
            </p>
          </div>
          <div className="weather-icons">
            {getWeatherIcon(weatherData?.list[0])}
          </div>
        </div>
      </div>
      <div className="result-container">
        <p className="weather-info">
          <div className="icons">
            <ThermometerIcon />
          </div>
          <div className="weather-description">Thermal sensation</div>
          <div className="weather-data">
            {weatherData &&
              (weatherData.list[0].main.feels_like - 273.15).toFixed(2)}
            °C
          </div>
        </p>
        <p className="weather-info">
          <div className="icons">
            <RainIcon />
          </div>
          <div className="weather-description">Probability of Rain</div>
          <div className="weather-data">
            {(weatherData && weatherData.list[0].pop * 100)?.toFixed(0)}%
          </div>
        </p>
        <p className="weather-info">
          <div className="icons">
            <WindIcon />
          </div>
          <div className="weather-description">Wind Speed</div>
          <div className="weather-data">
            {weatherData && weatherData.list[0].wind.speed} km/s
          </div>
        </p>
        <p className="weather-info">
          <div className="icons">
            <HumidityIcon />
          </div>
          <div className="weather-description">Air Humidity</div>
          <div className="weather-data">
            {weatherData && weatherData.list[0].main.humidity}%
          </div>
        </p>
      </div>

      <div className="weatherforecast-container">
        <WeatherForecast weatherListData={weatherData?.list} />
      </div>
    </div>
  );
};

export default WeatherDetailsPage;
