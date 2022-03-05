import React from "react";
import Styled from 'styled-components';

const CityComponentTag=Styled.div`
display:flex;
flex-direction:column;
`;


const ChooseCityLabel=Styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;
`;

const SearchBox=Styled.form`
color:black;
display:flex;
flex-direction:row;
border:1px solid black;
font-size:18px;
border-radius:2px;
font-weight:bold;
margin:20px auto;
& input {
    outline:none;
    font:14px;
    border:none;
    padding:10px;
    font-weight:bold;
}
& button{
    
    outline:none;
    font:14px;
    border:none;
    padding:10px;
    font-weight:bold;
    background-color:black;
    cursor:pointer;
    color:white;
}
`;

const WelcomeWeatherLogo = Styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
      <>
        <WelcomeWeatherLogo src={"/icon/perfect-day.svg"} />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
          <input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
          />
          <button type={"submit"}>Search</button>
        </SearchBox>
      </>
    );
  };
export default CityComponent;