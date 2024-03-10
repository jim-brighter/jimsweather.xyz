import { APPLICATION_JSON, USER_AGENT } from '../constants.js';
import * as mocks from '../utils/mocks.js';
import * as errorService from '../services/errorService.js';

const getWeather = async (locationOptions, units) => {

    // return mocks.defaultWeatherResponseWithAlert;

    try {
        let url = '';
        if (locationOptions.zip) {
            url = `https://api.jimsweather.xyz/weather?zip=${locationOptions.zip}&units=${units}`;
        }
        else {
            url = `https://api.jimsweather.xyz/weather?lat=${locationOptions.lat}&lon=${locationOptions.lon}&units=${units}`;
        }

        const response = await fetch(url, {
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

export {
    getWeather
};
