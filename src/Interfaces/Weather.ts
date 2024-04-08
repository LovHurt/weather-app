import WeatherList from "./WeatherList";

interface Weather {
    list: WeatherList[],
    city:{
        name:string,
        country:string
    }
}

export default Weather;