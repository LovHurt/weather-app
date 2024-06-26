import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CityData from "./Interfaces/CityData";
import fetchCityData from "./Services/fetchCityData";
import "./styles/SearchWeatherPage.css";
import "react-toastify/dist/ReactToastify.css";
import useDebounce from "./Hooks/useDebounce";
import LoadingIcon from "./Icons/LoadingIcon";
import { Link } from "react-router-dom";
import IWeatherIcon from "./Icons/IWeatherIcon";
import getLocation from "./Methods/getLocation";

const SearchWeatherPage = () => {
  const [cityName, setCityName] = useState("");
  const [usersLatitude, setUsersLatitude] = useState<number | null>(null);
  const [usersLongitude, setUsersLongitude] = useState<number | null>(null);
  const debouncedCity = useDebounce(cityName, 1000);

  const {
    data: cityData,
    error: cityError,
    isLoading: cityLoading,
  } = useQuery<CityData[], Error>(
    ["city", debouncedCity],
    () => fetchCityData(debouncedCity),
    { enabled: debouncedCity !== "" }
  );

  if (cityError) {
    console.log(
      "City information could not be retrieved. Please enter a valid city name."
    );
  }

  useEffect(() => {
    const handleLocation = async () => {
      try {
        const locationData = await getLocation();
        if (locationData) {
          setUsersLatitude(locationData.usersLatitude);
          setUsersLongitude(locationData.usersLongitude);
        }
      } catch (error) {
        console.error("Error getting location:", error);
      }
    };
    handleLocation();
  }, []);

  return (
    <div className="container">
      <div className="cloud-icon">
        <IWeatherIcon />
      </div>
      <div className="content-container">
        <div className="textdiv text-white">
          Welcome To <span className="welcometext">TypeWeather</span>
        </div>
        <div className="text-gray">
          Choose a location to see the weather forecast!
        </div>
        <div className="search-container">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search location"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              className="text-white"
            />
            {cityLoading && <LoadingIcon />}
            {cityData && (
              <div className="dropdown-container">
                <div className="dropdown-content">
                  {cityData.map((city, index) => (
                    <Link
                      key={`${city.name}-${index}`}
                      to={{
                        pathname: `/weather-app/weather-details/${city.lat}/${city.lon}`,
                      }}
                    >
                      <span>
                        {city.name}, {city.country}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="myweather-container">
              {usersLatitude !== null && usersLongitude !== null && (
                <Link
                  to={`/weather-app/weather-details/${usersLatitude}/${usersLongitude}`}
                >
                  <span>
                  Find My Weather
                  </span>
                </Link>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeatherPage;
