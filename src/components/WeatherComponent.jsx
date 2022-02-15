import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg"
}

const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 10px auto;
    margin-bottom: 5px;
`

const Condition = styled.span`
    margin: 5px auto;
    margin-bottom: 0;
    font-size: 1rem;
    & span {
        font-size: 3rem;
        margin-top: 30px;
    }
`
// const WeatherLogo = styled.img`
//     width: 100px;
//     height: 100px;
//     margin: 10px auto;
// `

const Location = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 20px;
`

const WeatherInfo = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin: 40px auto 10px;
    text-align: left; 
    width: 90%;
`

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column; 
    font-size: 14px;
    margin: 15px;
    & span {
        font-size: 12px;
        text-transform: capitalize;
    }
`
const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
        <WeatherCondition>
            <Condition><span>{weather?.main?.temp}°C</span></Condition>
            {/* <WeatherLogo src="/icons/sunny.png" /> */}
        </WeatherCondition>
        <WeatherCondition>
        <Condition>{weather?.weather[0].description}</Condition>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfo>Weather Information</WeatherInfo>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} />
            <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
            <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
            <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
        </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;