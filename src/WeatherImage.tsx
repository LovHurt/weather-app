import React from "react";
import WeatherList from "./Interfaces/WeatherList";
import getWeatherImage from "./Methods/getWeatherImage";
import "./styles/WeatherDetailsPage.css";

const WeatherImage: React.FC<{ weatherListData: WeatherList | undefined }> = ({ weatherListData }) => {
  const imageName = getWeatherImage(weatherListData);

  return <img className="image-weather" src={`/${imageName}`} alt={`${imageName}`} />; 
};

export default WeatherImage;
