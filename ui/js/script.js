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

// Services
import * as weatherService from './modules/weatherService.js';
import { $ } from './modules/selectors.js';

const setWeather = (locationOptions) => {
    weatherService.getWeather(locationOptions).then((weatherData) => {
        if (weatherData === undefined) {
            return;
        }

        $('#loading').remove();

        if (weatherData.onecall.alerts && weatherData.onecall.alerts.length > 0) {
            $('alerts-weather').alerts = weatherData.onecall.alerts;
            $('alerts-weather').hidden = false;
            $('alerts-weather').click();
        }

        $('current-weather').weather = weatherData.onecall.current;
        $('current-weather').locality = weatherData.locality;
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
