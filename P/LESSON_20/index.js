const weatherRequestButton = document.querySelector(".get-weather-button");
const cityNameEntry = document.querySelector("#form-id");
const resultArea = document.querySelector("#get-results");
/* {
    "coord": {
        "lon": 8.3597,
        "lat": 49.6356
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 291.8,
        "feels_like": 291.68,
        "temp_min": 289.85,
        "temp_max": 292.71,
        "pressure": 1006,
        "humidity": 75,
        "sea_level": 1006,
        "grnd_level": 991
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.89,
        "deg": 163,
        "gust": 2.68
    },
    "rain": {
        "1h": 0.24
    },
    "clouds": {
        "all": 100
    },
    "dt": 1727276424,
    "sys": {
        "type": 2,
        "id": 45268,
        "country": "DE",
        "sunrise": 1727241465,
        "sunset": 1727284710
    },
    "timezone": 7200,
    "id": 2806142,
    "name": "Worms",
    "cod": 200
} */





const getWeatherResult = async() => {

    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    }

    resultArea.innerHTML = '';
    
    const APP_ID = "baa52af8a07d22355fac54528cab1d8a";
    const city = cityNameEntry.city.value.trim();
    //console.log(city);
    if(! city) {alert(` Please entry city name`);
    } else {
        resultArea.classList.add("spinner");
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`,
        );
        const weatherData = await response.json();
        console.log(weatherData);

        if(response.ok) {
            cityNameEntry.reset();
            resultArea.classList.remove("spinner");
            const cityWeather = {
                cityNane: `Weather in ${weatherData.name}`,
                degrees: `Temperature: ${kelvinToCelsius(weatherData.main.temp)}°C`,
                degreesFeelsLike: `Feels like: ${kelvinToCelsius(weatherData.main.feels_like)}°C`,
                weather: `Weather: ${weatherData.weather[0].description}`,
                wind: `Wind speed: ${weatherData.wind.speed} m/c`,
            }

            resultArea.innerHTML = `
            <div>${cityWeather.cityNane}</div>
            <div>${cityWeather.degrees}</div>
            <div>${cityWeather.degreesFeelsLike}</div>
            <div>${cityWeather.weather}</div>
            <div>${cityWeather.wind}</div>
            `
        }
    }
}

weatherRequestButton.addEventListener('click', getWeatherResult);
