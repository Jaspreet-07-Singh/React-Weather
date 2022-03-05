import logo from './logo.svg';
import './App.css';
import Styled from 'styled-components';
import CityComponent from './Module/CityComponent';
import  WeatherComponent from './Module/WeatherComponent';
import { useState } from 'react';
import Axios from 'axios';

const Container=Styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
width:380px;
background:white;
font-family: 'Montserrat', sans-serif;
`;

const AppLabel=Styled.div`
color:black;
font-size:18px;
font-weight:bold; 
`;

const Api_Key="1f1da2ccee4828eddacd55133459ac03";
function App() {
  const[city,updateCity]=useState();
  const [weather,updateWeather]=useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`,
    );
        updateWeather(response.data);

    // updateWeather(response.data);
  };
  return (
    <>
    <Container>
        <AppLabel>
          React Weather App
        </AppLabel>
        
        {/* <WeatherComponent/> */}
        {/* <CityComponent/> */}
       {weather?(<WeatherComponent weather={weather}/>):(<CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>)}
               
    </Container>
    </>
  );
}

export default App;
