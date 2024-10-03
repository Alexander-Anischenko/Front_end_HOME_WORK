const weatherRequestButton = document.querySelector(".get-weather-button");
const cityNameEntry = document.querySelector("#form-id");
const resultArea = document.querySelector("#get-results");
const spinGo = document.querySelector("#spinner-div");
const APP_ID = "baa52af8a07d22355fac54528cab1d8a";



const getWeatherResult = async() => {

    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    }

    resultArea.innerHTML = '';
    
    /* const APP_ID = "baa52af8a07d22355fac54528cab1d8a"; */
    const city = cityNameEntry.city.value.trim();
    //console.log(city);
    if(! city) {alert(` Please entry city name`);
    } else { 
        try{ 
            resultArea.classList.remove("error");
            spinGo.classList.remove("hiden");
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`,
        );
        const weatherData = await response.json();
        
        console.log(weatherData);
            if(response.ok) {
                cityNameEntry.reset();
                spinGo.classList.add("hiden");
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
            } else {
                throw Object.assign(new Error("Oops, something went wrong!"),
                {responseError: weatherData})
            }
        } catch(error) {
            resultArea.classList.add("error");
            spinGo.classList.add("hiden");
            console.log(error.responseError);
            resultArea.innerHTML = `
                <div>${error}</div>
                <div>Cod: ${error.responseError.cod}</div>
                <div>${error.responseError.message}</div>
            `
        }
        finally{spinGo.classList.add("hiden")}
        
    }
}
//setInterval(getWeatherResult, 50)

weatherRequestButton.addEventListener('click', getWeatherResult);
