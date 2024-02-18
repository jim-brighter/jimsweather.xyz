import { OPENWEATHER_HOST } from './constants';

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Credentials': true
    };

    const openweathermapApiKey = JSON.parse(process.env.OPEN_WEATHER_MAP_API_KEY)['openweathermap-api-key'];

    let lat = '';
    let lon = '';

    if (event.queryStringParameters.zip) {
        const geoResponse = await fetch(`${OPENWEATHER_HOST}/geo/1.0/zip?zip=${event.queryStringParameters.zip},US&appid=${openweathermapApiKey}`);

        const geoData = await geoResponse.json();

        lat = geoData.lat;
        lon = geoData.lon;
    }
    else {
        lat = event.queryStringParameters.lat;
        lon = event.queryStringParameters.lon;
    }

    const weatherUrls = [
        `/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}&units=${event.queryStringParameters.units}`,
        `/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}`,
        `/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}`,
        `/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${openweathermapApiKey}`,
    ];

    const weatherResponse = {};

    try {
        await Promise.all(weatherUrls.map(async (urlOptions) => {
            const response = await fetch(`${OPENWEATHER_HOST}${urlOptions}`);

            const result = await response.json();

            if (urlOptions.includes('/data/3.0/onecall')) {
                weatherResponse.onecall = result;
            }
            else if (urlOptions.includes('/data/2.5/air_pollution/forecast')) {
                weatherResponse.air_pollution_forecast = result;
            }
            else if (urlOptions.includes('/data/2.5/air_pollution')) {
                weatherResponse.air_pollution = result;
            }
            else if (urlOptions.includes('/geo/1.0/reverse')) {
                weatherResponse.locality = `${result[0].name}, ${result[0].state || result[0].country}`
            }

            return result;
        }));

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(weatherResponse)
        }
    } catch(e) {
        console.error(e);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                body: 'An error occurred getting weather details'
            })
        }
    }
};
