import { useEffect, useState } from "react";
import "./WeatherCard.css";

type Weather = {
    main: {
        temp: number
    },
    rain: {
        '1h': number
    },
    name: string,
    weather: [{
        description: string,
        icon: string
    }]
}

const WeatherCard = () => {
    const [weatherInfo, setWeatherInfo] = useState<Weather>({
        main: {
            temp: 0
        },
        rain: {
            '1h': 0
        },
        name: "",
        weather: [{
            description: "",
            icon: ""
        }]
    });

    useEffect(() => {
        fetch("http://localhost:8080/api/weather", { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                setWeatherInfo(data);
            });
    }, []);

    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const temperatureInCelsius = (weatherInfo.main.temp - 273.15).toFixed(1);

    return (
        <div className="weather-card">
            <div className="weather-info">
                <div className="weather-headline">
                    <div>
                        <p className="weather-city">{weatherInfo.name}</p>
                        <p>{weatherInfo.weather[0].description}</p>
                    </div>
                    <div>
                        <img src={`https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`} alt="アイコン" />
                    </div>
                </div>
                <div className="weather-detail">
                    <p>{today}</p>
                    <p>{temperatureInCelsius}度</p>
                    <p>{(weatherInfo.rain["1h"] * 100).toFixed(1)}%</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
