import './App.css';
import { CurrentWeather } from './components/current-weather/current-weather';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { Search } from './components/search/search';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import { ForeCast } from './components/forecast/forecast';




function App() {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData:any) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, foreCastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const foreCastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecast({city: searchData.label, ...foreCastResponse});
    }) 
    .catch((error) => console.log(error));

  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <div className="secondaryContainer">
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <ForeCast data={forecast} />}
      </div>
    </div>
  );
}


export default App;
