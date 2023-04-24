import * as https from 'https';
import { STATE_TO_ABBREVIATION } from './constants';

const sendRequest = (options) => {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            res.setEncoding('utf8');

            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(responseBody));
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.end();
    });
};

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
        const geoData = await sendRequest({
            hostname: 'api.openweathermap.org',
            path: `/geo/1.0/zip?zip=${event.queryStringParameters.zip},US&appid=${openweathermapApiKey}`,
            method: 'GET',
            port: 443
        });

        lat = geoData.lat;
        lon = geoData.lon;
    }
    else {
        lat = event.queryStringParameters.lat;
        lon = event.queryStringParameters.lon;
    }

    const weatherUrls = [
        {
            hostname: 'api.openweathermap.org',
            path: `/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}&units=${event.queryStringParameters.units}`,
            method: 'GET',
            port: 443
        },
        {
            hostname: 'api.openweathermap.org',
            path: `/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}`,
            method: 'GET',
            port: 443
        },
        {
            hostname: 'api.openweathermap.org',
            path: `/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}`,
            method: 'GET',
            port: 443
        },
        {
            hostname: 'api.openweathermap.org',
            path: `/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${openweathermapApiKey}`,
            method: 'GET',
            port: 443
        }
    ];

    const weatherResponse = {};

    try {
        await Promise.all(weatherUrls.map(async (urlOptions) => {
            const result = await sendRequest(urlOptions);

            if (urlOptions.path.includes('/data/3.0/onecall')) {
                weatherResponse.onecall = result;
            }
            else if (urlOptions.path.includes('/data/2.5/air_pollution/forecast')) {
                weatherResponse.air_pollution_forecast = result;
            }
            else if (urlOptions.path.includes('/data/2.5/air_pollution')) {
                weatherResponse.air_pollution = result;
            }
            else if (urlOptions.path.includes('/geo/1.0/reverse')) {
                weatherResponse.locality = `${result[0].name}, ${result[0].state ? STATE_TO_ABBREVIATION[result[0].state] : result[0].country}`
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
