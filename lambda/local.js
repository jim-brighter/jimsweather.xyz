import { handler } from './weather.js'
import fs from 'node:fs'

export const mockHandler = async (event) => {
  if (process.env.USE_MOCKS === 'true') {
    const headers = {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Credentials': true
    }
    try {
      const readMock = (filename) => {
        const url = new URL(`./mock/${filename}`, import.meta.url)
        return JSON.parse(fs.readFileSync(url, 'utf-8'))
      }
      const weatherResponse = {
        locality: readMock('locality.json'),
        air_pollution: readMock('air_pollution.json'),
        air_pollution_forecast: readMock('air_pollution_forecast.json'),
        onecall: readMock('onecall.json')
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(weatherResponse)
      }
    } catch (e) {
      console.error('Error reading mock data:', e)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          body: 'An error occurred getting mock weather details'
        })
      }
    }
  }

  return handler(event)
}
