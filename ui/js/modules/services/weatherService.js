import * as weatherDao from '../dao/weatherDao.js';
import { $ } from '../utils/selectors.js';
import { getUnits } from '../utils/utils.js';

const ALERTS_WEATHER = 'alerts-weather';
const CURRENT_WEATHER = 'current-weather';
const CURRENT_WEATHER_DETAILS = 'current-weather-details';
const MINUTELY_WEATHER = 'minutely-weather';
const DAILY_WEATHER = 'daily-weather';
const HOURLY_WEATHER = 'hourly-weather';
const AQI_WEATHER = 'aqi-weather';

const ALL_ELEMENTS = [
    ALERTS_WEATHER,
    CURRENT_WEATHER,
    CURRENT_WEATHER_DETAILS,
    MINUTELY_WEATHER,
    DAILY_WEATHER,
    HOURLY_WEATHER,
    AQI_WEATHER
];

const getWeather = async (locationOptions) => {
    const weatherData = await weatherDao.getWeather(locationOptions, getUnits());

    if (weatherData === undefined) {
        return;
    }

    localStorage.setItem('location', JSON.stringify(locationOptions));

    try {
        $('#loading').remove();
    } catch (e) {
        console.log('Loading spinner already removed');
    }

    await Promise.all(ALL_ELEMENTS.map(async e => {
        return await customElements.whenDefined(e);
    }));

    $(ALERTS_WEATHER).alerts = weatherData.onecall.alerts || [];
    $(CURRENT_WEATHER).weather = weatherData.onecall.current;
    $(CURRENT_WEATHER).setLocalityAndUpdatedTime(weatherData.locality, locationOptions.time);
    $(CURRENT_WEATHER_DETAILS).weather = weatherData.onecall.current;
    $(MINUTELY_WEATHER).weather = weatherData.onecall.minutely;
    $(DAILY_WEATHER).weather = weatherData.onecall.daily;
    $(HOURLY_WEATHER).setWeatherAndAqi(weatherData.onecall.hourly, weatherData.air_pollution_forecast.list);
    $(AQI_WEATHER).aqi = weatherData.air_pollution.list[0];

    $(ALERTS_WEATHER).hidden = false;
    $(CURRENT_WEATHER).hidden = false;
    $(CURRENT_WEATHER_DETAILS).hidden = false;
    $(MINUTELY_WEATHER).hidden = false;
    $(DAILY_WEATHER).hidden = false;
    $(HOURLY_WEATHER).hidden = false;
    $(AQI_WEATHER).hidden = false;
}

export {
    getWeather
}
