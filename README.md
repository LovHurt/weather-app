# iWeatherApp Project, 

This weather application allows users to view weather information for different locations worldwide. Users can retrieve weather information by searching for their desired location.

# Features

- Users can retrieve weather information by searching for a location.
  
- View current weather information as well as 5-day weather forecasts.
  
- Simple and user-friendly interface.
  
- Visual representation of weather conditions with weather icons.

- Data fetching and posting operations were handled using Axios and React Query (aka Tanquery).

- OpenWeather API was utilized for operations involving weather and city data.

- To prevent making requests every time the user types in the input, a custom hook named useDebounce was employed. This hook delays the request by 1 second after the user finishes typing.


# Installation

1- Clone the project:
git clone https://github.com/LovHurt/weather-app.git

2- Navigate to the project directory:
cd weather-app

3- Install the required packages:
npm install

4- Start the application:
npm run dev

5- Click on the http://localhost:5173/weather-app/ link.

# Technologies Used

* React.js
* TypeScript
* React Query
* React Router
* CSS
* Axios
* React-toastify

