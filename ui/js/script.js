// Components
import './components/current-weather.js';
import './components/hourly-weather.js';
import './components/current-weather-details.js';
import './components/minutely-weather.js';
import './components/daily-weather.js';
import './components/aqi-weather.js';
import './components/hour.js';
import './components/day.js';
import './components/alerts-weather.js';

// Services
import * as weatherService from './modules/weatherService.js';
import { $ } from './modules/selectors.js';

const setWeather = (lat, lon) => {
    weatherService.getWeather(lat, lon).then((weatherData) => {
        if (weatherData === undefined) {
            return;
        }

        $('#loading').remove();

        if (weatherData.onecall.alerts && weatherData.onecall.alerts.length > 0) {
            $('alerts-weather').alerts = weatherData.onecall.alerts;
            $('alerts-weather').hidden = false;
        }

        $('current-weather').weather = weatherData.onecall.current;
        $('current-weather-details').weather = weatherData.onecall.current;
        $('minutely-weather').weather = weatherData.onecall.minutely;
        $('daily-weather').weather = weatherData.onecall.daily;
        $('hourly-weather').setWeatherAndAqi(weatherData.onecall.hourly, weatherData.air_pollution_forecast.list);
        $('aqi-weather').aqi = weatherData.air_pollution.list[0];

        $('current-weather').hidden = false;
        $('current-weather-details').hidden = false;
        $('minutely-weather').hidden = false;
        $('daily-weather').hidden = false;
        $('hourly-weather').hidden = false;
        $('aqi-weather').hidden = false;
    });
}

navigator.geolocation.getCurrentPosition(
    (location) => {
        setWeather(location.coords.latitude, location.coords.longitude);
    },
    (error) => {
        console.error(error);
        const zip = prompt('Enter zip code for retrieving weather data:');
        console.log(`Could not determine location, calling geolocation api for zip ${zip}`);
        weatherService.getGeocoding(zip).then((geoData) => {
            if (geoData === undefined) {
                return;
            }

            setWeather(geoData.lat, geoData.lon);
        })
    });
