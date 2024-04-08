import local_names from "./local_names";

interface CityData {
    name: string;
    lat: string;
    lon: string;
    country?: string;
    state?: string; 
    local_names?:local_names;
  }

  export default CityData;