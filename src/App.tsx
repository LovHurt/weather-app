import "./App.css";
import SearchWeatherPage from "./SearchWeatherPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherDetailsPage from "./WeatherDetailsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchWeatherPage />} />
          <Route path="/weather-details/:lat/:lon" element={<WeatherDetailsPage />}/>
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
