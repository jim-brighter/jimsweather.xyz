import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager'
import { OPENWEATHER_HOST } from './constants.js'

const secret_name = 'jimsweather/openweathermap-api-key'

const client = new SecretsManagerClient({
  region: 'us-east-1'
})

const getApiKey = async () => {
  try {
    const response = await client.send(new GetSecretValueCommand({
      SecretId: secret_name
    }))
    return JSON.parse(response.SecretString)['openweathermap-api-key']
  } catch (e) {
    console.error(e)
    throw e
  }
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Credentials': true
  }

  const openweathermapApiKey = await getApiKey()

  let lat
  let lon

  if (event.queryStringParameters.zip) {
    const geoResponse = await fetch(`${OPENWEATHER_HOST}/geo/1.0/zip?zip=${event.queryStringParameters.zip},US&appid=${openweathermapApiKey}`)

    const geoData = await geoResponse.json()

    lat = geoData.lat
    lon = geoData.lon
  } else {
    lat = event.queryStringParameters.lat
    lon = event.queryStringParameters.lon
  }

  const weatherUrls = {
    onecall: `/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}&units=${event.queryStringParameters.units}`,
    air_pollution_forecast: `/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}`,
    air_pollution: `/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}`,
    locality: `/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${openweathermapApiKey}`
  }

  const weatherResponse = {}

  try {
    await Promise.all(Object.keys(weatherUrls).map(async (key) => {

      const path = weatherUrls[key]

      const response = await fetch(`${OPENWEATHER_HOST}${path}`)

      const result = await response.json()

      weatherResponse[key] = result

      return result
    }))

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(weatherResponse)
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        body: 'An error occurred getting weather details'
      })
    }
  }
}
