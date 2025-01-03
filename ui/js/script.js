// Components
import './components/current-weather/current-weather.js';
import './components/hourly-weather/hourly-weather.js';
import './components/current-weather-details/current-weather-details.js';
import './components/minutely-weather/minutely-weather.js';
import './components/daily-weather/daily-weather.js';
import './components/aqi-weather/aqi-weather.js';
import './components/hour/hour.js';
import './components/day/day.js';
import './components/alerts-weather/alerts-weather.js';

// Util
import { getWeather } from './modules/services/weatherService.js';

const isLocationFresh = (location) => {
    const now = new Date()
    const then = new Date(location.time)

    // shelf life of 1 month
    return ((now - then) / 1000 / 60 / 60 / 24) < 30;
}

const geoHandler = (location) => {
    const locationData = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        time: Date.now()
    };

    getWeather(locationData);
}

const errorHandler = () => {
    const zip = prompt('Could not determine location. Enter zip code to get weather data:');
    const locationData = {
        zip,
        time: Date.now()
    };

    getWeather(locationData);
}

const options = {
    enableHighAccuracy: false,
    maximumAge: 24 * 60 * 60 * 1000
}

const storedLocation = JSON.parse(localStorage.getItem('location'))

if (storedLocation && isLocationFresh(storedLocation)) {
    console.log('location is fresh')
    getWeather(storedLocation)
} else {
    console.log('location is stale')
    navigator.geolocation.getCurrentPosition(geoHandler, errorHandler, options);
}
