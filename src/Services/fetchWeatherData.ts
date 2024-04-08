import axios from "axios";
import API_KEY from "../API_KEY";
import Weather from "../Interfaces/Weather";

const fetchWeatherData = async (lat: number, lon: number): Promise<Weather> => {
    try {                                                   
        const response = await axios.get<Weather>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        
        return response.data;
    } catch (error) {
        throw new Error('Failed to retrieve weather data');
    }
};
  export default fetchWeatherData;