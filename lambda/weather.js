import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager'

const Constants = {
  OPENWEATHER_HOST: 'https://api.openweathermap.org',
  SECRET_ARN: 'jimsweather/openweathermap-api-key',
  CORS_HEADERS: {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Credentials': true
  }
}

const secretsClient = new SecretsManagerClient({
  region: 'us-east-1'
})

/**
 * Retrieves the OpenWeather API key from AWS Secrets Manager.
 */
async function getApiKey() {
  try {
    const response = await secretsClient.send(new GetSecretValueCommand({
      SecretId: Constants.SECRET_ARN
    }))
    return JSON.parse(response.SecretString)['openweathermap-api-key']
  } catch (e) {
    console.error('Error retrieving OpenWeather API key:', e)
    throw e
  }
}

/**
 * Resolves latitude and longitude coordinates, querying the geocoding service if zip is provided.
 */
async function resolveCoordinates(queryParams, apiKey) {
  if (queryParams?.zip) {
    const geoUrl = `${Constants.OPENWEATHER_HOST}/geo/1.0/zip?zip=${queryParams.zip},US&appid=${apiKey}`
    const response = await fetch(geoUrl)
    if (!response.ok) {
      throw new Error(`Geocoding lookup failed with status: ${response.status}`)
    }
    const data = await response.json()
    return { lat: data.lat, lon: data.lon }
  }

  return {
    lat: queryParams?.lat,
    lon: queryParams?.lon
  }
}

/**
 * Concurrently fetches weather data for all weather components.
 */
async function fetchWeatherData({ lat, lon, units }, apiKey) {
  const weatherUrls = {
    onecall: `/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
    air_pollution_forecast: `/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    air_pollution: `/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    locality: `/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`
  }

  const weatherResponse = {}

  await Promise.all(
    Object.entries(weatherUrls).map(async ([key, path]) => {
      console.log(`Calling OpenWeather API: ${key}`)
      const response = await fetch(`${Constants.OPENWEATHER_HOST}${path}`)
      console.log(`Response from OpenWeather API for ${key}:`, response.status)
      if (!response.ok) {
        throw new Error(`OpenWeather API fetch failed for ${key} with status: ${response.status}`)
      }
      weatherResponse[key] = await response.json()
    })
  )

  return weatherResponse
}

export const handler = async (event) => {
  try {
    const queryParams = event.queryStringParameters || {}
    const apiKey = await getApiKey()
    const coords = await resolveCoordinates(queryParams, apiKey)

    if (!coords.lat || !coords.lon) {
      return {
        statusCode: 400,
        headers: Constants.CORS_HEADERS,
        body: JSON.stringify({ body: 'Missing required parameters: zip or lat and lon' })
      }
    }

    const weatherData = await fetchWeatherData({
      lat: coords.lat,
      lon: coords.lon,
      units: queryParams.units
    }, apiKey)

    return {
      statusCode: 200,
      headers: Constants.CORS_HEADERS,
      body: JSON.stringify(weatherData)
    }
  } catch (e) {
    console.error('Error handling weather request:', e)
    return {
      statusCode: 500,
      headers: Constants.CORS_HEADERS,
      body: JSON.stringify({ body: 'An error occurred getting weather details' })
    }
  }
}
