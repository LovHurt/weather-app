import WeatherList from "../Interfaces/WeatherList";
import ClearDayIcon from "../Icons/ClearDayIcon";
import ClearNightIcon from "../Icons/ClearNightIcon";
import FewCloudsDayIcon from "../Icons/FewCloudsDayIcon";
import FewCloudsNightIcon from "../Icons/FewCloudsNightIcon";
import CloudyDayIcon from "../Icons/CloudyDayIcon";
import CloudyNightIcon from "../Icons/CloudyNightIcon";
import StormNightIcon from "../Icons/StormNightIcon";
import StormDayIcon from "../Icons/StormDayIcon";
import RainDayIcon from "../Icons/RainDayIcon";
import RainNightIcon from "../Icons/RainNightIcon";

const getWeatherIcon = (weatherListData: WeatherList | undefined) => {
  const mainWeather = weatherListData?.weather[0].description.toLowerCase();
  const isDay = weatherListData?.sys.pod === "d";

  switch (mainWeather) {
    case "clear sky":
      return isDay ? <ClearDayIcon /> : <ClearNightIcon />;
    case "few clouds":
    case "broken clouds":
      return isDay ? <FewCloudsDayIcon /> : <FewCloudsNightIcon />;
    case "overcast clouds":
      return isDay ? <CloudyDayIcon /> : <CloudyNightIcon />;
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with heavy rain":
    case "thunderstorm with light snow":
    case "thunderstorm with snow":
    case "thunderstorm with heavy snow":
      return isDay ? <StormDayIcon /> : <StormNightIcon />;
    default:
      return isDay ? <RainDayIcon /> : <RainNightIcon />;
  }
};

  export default getWeatherIcon;