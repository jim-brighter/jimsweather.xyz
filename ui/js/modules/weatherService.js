import { APPLICATION_JSON, USER_AGENT } from './constants.js';
import * as errorService from './errorService.js';

const getWeather = async (locationOptions) => {
    try {
        let response = {};
        if (locationOptions.zip) {
            response = await fetch(`https://api.jimsweather.xyz/weather?zip=${locationOptions.zip}`, {
                headers: {
                    'Accept': APPLICATION_JSON,
                    'User-Agent': USER_AGENT
                }
            });
        }
        else {
            response = await fetch(`https://api.jimsweather.xyz/weather?lat=${locationOptions.lat}&lon=${locationOptions.lon}`, {
                headers: {
                    'Accept': APPLICATION_JSON,
                    'User-Agent': USER_AGENT
                }
            });
        }

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
