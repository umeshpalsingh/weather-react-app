import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import WeatherComponent from './components/WeatherComponent';
import CityComponent from './components/CityComponent';
import axios from 'axios';


const Container = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 20px 10px;
  width: 380px;
  font-family: 'Merriweather Sans', sans-serif;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const AppLabel = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`
const API_KEY = "ebf127d69f16072d097b5949707a607a";


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
  const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  updateWeather(response.data);
  console.log(response.data);
  }
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather}/>
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} /> 
      ) }
    </Container>
    
  );
}

export default App;
