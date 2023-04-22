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
import { setWeather } from './modules/utils.js';

navigator.geolocation.getCurrentPosition(
    (location) => {
        setWeather({
            lat: location.coords.latitude,
            lon: location.coords.longitude
        });
    },
    (error) => {
        const zip = prompt('Could not determine location. Enter zip code to get weather data:');
        setWeather({
            zip: zip
        });
    });
