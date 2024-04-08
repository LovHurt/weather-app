import axios from "axios";
import CityData from "../Interfaces/CityData";
import API_KEY from "../API_KEY";
import { toast } from 'react-toastify';

const fetchCityData = async (debouncedCity: string) => {
  try {
    const response = await axios.get<CityData[]>(`https://api.openweathermap.org/geo/1.0/direct?q=${debouncedCity}&limit=10&appid=${API_KEY}`);
    console.log(response.data)
    const cityData = response.data;
    if (cityData.length === 0) {
      toast.error('Entered city can not be found, please enter a valid city name.');
    }
    return cityData;
  } catch (error) {
    throw new Error('Request limit exceeded, please try again tomorrow.');
  }
};

export default fetchCityData;
