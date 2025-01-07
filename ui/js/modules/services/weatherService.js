import * as weatherDao from '../dao/weatherDao.js';
import { getUnits } from '../utils/utils.js';
import { removeLoadingSpinner, updateWeatherUI } from './domService.js';

const getWeather = async (locationOptions) => {
    const weatherData = await weatherDao.getWeather(locationOptions, getUnits());

    if (weatherData === undefined) {
        return;
    }

    removeLoadingSpinner();

    await updateWeatherUI(weatherData, locationOptions);
}

export {
    getWeather
}
