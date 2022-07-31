import { APPLICATION_JSON, USER_AGENT } from './constants.js';
import * as errorService from './errorService.js';

const getWeather = async (lat, lon) => {
    try {
        let response = await fetch(`https://api.jimsweather.xyz/weather?lat=${lat}&lon=${lon}`, {
            headers: {
                'Accept': APPLICATION_JSON,
                'User-Agent': USER_AGENT
            }
        });

        if (!response.ok) {
            throw `Got status ${response.status} from weather api`;
        }

        return await response.json();
    } catch(err) {
        errorService.handleError(err);
    }
}

const getGeocoding = async (zip) => {
    let data;

    try {
        console.log('Calling openweathermap.org Geocoding API');
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`, {
            headers: {
                'Accept': APPLICATION_JSON,
                'User-Agent': USER_AGENT
            }
        });

        if (!response.ok) {
            throw `Got status ${response.status} from openweathermap.org:geocoding`
        }

        data = await response.json();
    } catch(err) {
        errorService.handleError(err);
    }
    return data;
}

export {
    getWeather,
    getGeocoding
};
