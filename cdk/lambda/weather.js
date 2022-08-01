const https = require('https');

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
    const apiKey = JSON.parse(process.env.API_KEY)['openweathermap-api-key'];

    let lat = '';
    let lon = '';

    if (event.queryStringParameters.zip) {
        const geoData = await sendRequest({
            hostname: 'api.openweathermap.org',
            path: `/geo/1.0/zip?zip=${event.queryStringParameters.zip},US&appid=${apiKey}`,
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
            path: `/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`,
            method: 'GET',
            port: 443
        },
        {
            hostname: 'api.openweathermap.org',
            path: `/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`,
            method: 'GET',
            port: 443
        },
        {
            hostname: 'api.openweathermap.org',
            path: `/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`,
            method: 'GET',
            port: 443
        }
    ];

    const weatherResponse = {};

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

        return result;
    }));

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': 'https://jimsweather.xyz',
            'Access-Control-Allow-Methods': 'GET,OPTIONS'
        },
        body: JSON.stringify(weatherResponse)
    }
};
