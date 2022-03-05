import React from "react";
import Styled  from "styled-components";
 const WeatherInfoIcons = {
    sunset: "/icon/temp.svg",
    sunrise: "/icon/temp.svg",
    humidity: "/icon/humidity.svg",
    wind: "/icon/wind.svg",
    pressure: "/icon/pressure.svg",
};







const WeatherCondition = Styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
magin:30px auto;
`;

const Condition = Styled.span`
margin:20px auto;
font-size:14px;
& span{
    font-size:28px;
}
& sup{
    font-size:15px;
    font-weight:bold; 
}
`;
const WeatherLogo=Styled.img`
height:100px;
width:100px;
margin:5px auto;
`;

const Location=Styled.span`
font-size:28px;
font-weight:bold;
`;
const WeatherInfoLabel=Styled.span`
font-size:14px;
font-weight:bold;
width:90%;
text-align:start;
margin:20px 25px 10px;

`;

const InfoContainer=Styled.div`
display:flex;
margin: 5px 10px;
flex-direction:row;
justify-content:spece-evenly;
align-items:center;
flex-wrap:wrap;
`;
const InfoIcon=Styled.img`
widhth:36px;
height:36px;
`;
const InfoLabel=Styled.span`
display:flex;
flex-direction:column;
font-size:14px;
margin:15px;
& span {
    font-size: 12px;
    text-transform: capitalize;
  }

`;
const WeatherInfoContainer = Styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;


const WeatherInfoComponent=(props)=>{
const{name,value}=props;
return(<>
    <InfoContainer>
    <InfoIcon src={WeatherInfoIcons[name]}/>
    <InfoLabel>
    {value}
    <span>{name}</span>
    </InfoLabel>
    </InfoContainer>
</>);
}

const WeatherComponent=(props)=>{
    const {weather}=props;
    const isDay=weather.weather[0].icon.includes("d");
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
return(<>
            <WeatherCondition>
            <Condition> <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
            </Condition>
            <WeatherLogo src="/icon/perfect-day.svg"/>
            </WeatherCondition>
            <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent  name={isDay?"sunset":"sunrise"} value={getTime(weather.sys[isDay?"sunset":"sunrise"])}/>
                <WeatherInfoComponent name="humidity" value={weather?.main.humidity}/>
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
                <WeatherInfoComponent name="pressure" value={weather?.main.pressure}/>
            </WeatherInfoContainer>
</>);
};
export default WeatherComponent;