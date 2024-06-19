import * as weatherDao from '../dao/weatherDao.js';
import { $ } from '../utils/selectors.js';
import { getUnits } from '../utils/utils.js';

const getWeather = async (locationOptions) => {
    const weatherData = await weatherDao.getWeather(locationOptions, getUnits());

    if (weatherData === undefined) {
        return;
    }

    try {
        $('#loading').remove();
    } catch (e) {
        console.log('Loading spinner already removed');
    }

    $('alerts-weather').alerts = weatherData.onecall.alerts ? weatherData.onecall.alerts : [];
    $('current-weather').weather = weatherData.onecall.current;
    $('current-weather').setLocalityAndUpdatedTime(weatherData.locality, locationOptions.time);
    $('current-weather-details').weather = weatherData.onecall.current;
    $('minutely-weather').weather = weatherData.onecall.minutely;
    $('daily-weather').weather = weatherData.onecall.daily;
    $('hourly-weather').setWeatherAndAqi(weatherData.onecall.hourly, weatherData.air_pollution_forecast.list);
    $('aqi-weather').aqi = weatherData.air_pollution.list[0];

    $('alerts-weather').hidden = false;
    $('current-weather').hidden = false;
    $('current-weather-details').hidden = false;
    $('minutely-weather').hidden = false;
    $('daily-weather').hidden = false;
    $('hourly-weather').hidden = false;
    $('aqi-weather').hidden = false;
}

export {
    getWeather
}
