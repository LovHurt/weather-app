import WeatherList from "../Interfaces/WeatherList";

const getWeatherImage = (weatherListData: WeatherList | undefined) => {

  const mainWeather = weatherListData?.weather[0].description.toLowerCase();
  const isDay = weatherListData?.sys.pod === "d"; 

  switch (mainWeather) {
    case "clear sky":
      return isDay ? "ClearDay.png" : "ClearNight.png";
    case "few clouds":
    case "broken clouds":
      return isDay ? "FewCloudsDay.png" : "FewCloudsNight.png";
    case "overcast clouds":
      return isDay ? "CloudyDay.png" : "CloudyNight.png";
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with heavy rain":
    case "thunderstorm with light snow":
    case "thunderstorm with snow":
    case "thunderstorm with heavy snow":
      return isDay ? "StormDay.png" : "StormNight.png";
    default:
      return isDay ? "RainDay.png" : "RainNight.png";
    }
};

export default getWeatherImage;

