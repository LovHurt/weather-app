import React from "react";
import WeatherList from "./Interfaces/WeatherList";
import getWeatherIcon from "./Methods/getWeatherIcon";
import formatUnixTimestamp from "./Methods/formatUnixTimestamp";


const WeatherForecast: React.FC<{ weatherListData?: WeatherList[] }> = ({ weatherListData }) => {

  const renderWeatherForecast = () => {

    return weatherListData?.slice(0, 39).map((weather, index) => {
      // 0., 8., 16., 24., 32. indekslerdeki verileri al
      if (index % 8 !== 0) return null;

      const date = formatUnixTimestamp(weather.dt);
      const day = date.substring(0, 3);
      const maxTemp = weather.main.temp_max; 
      const minTemp = weather.main.temp_min; 

      return (
        <div key={day} className="weatherforecast-item">
          <p className="weatherforecast-day">{day}</p>
          <div className="weatherforecast-icon">{getWeatherIcon(weather)}</div>
          <p className="weatherforecast-maxtemp">{(maxTemp-273.15).toFixed(0)}°c</p>
          <p className="weatherforecast-mintemp">{(minTemp-273.15).toFixed(0)}°c</p>
        </div>
      );
    });
  };

  return <>{renderWeatherForecast()}</>;
};

export default WeatherForecast;
