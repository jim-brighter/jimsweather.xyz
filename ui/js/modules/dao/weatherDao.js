import { APPLICATION_JSON, USER_AGENT } from '../constants.js'
import * as errorService from '../services/errorService.js'
// import { defaultWeatherResponseWithAlert } from '../utils/mocks.js'

const getWeather = async (locationOptions, units) => {

  // return defaultWeatherResponseWithAlert

  try {
    const url = locationOptions.zip
      ? `https://api.jimsweather.xyz/weather?zip=${locationOptions.zip}&units=${units}`
      : `https://api.jimsweather.xyz/weather?lat=${locationOptions.lat}&lon=${locationOptions.lon}&units=${units}`

    const response = await fetch(url, {
      headers: {
        'Accept': APPLICATION_JSON,
        'User-Agent': USER_AGENT
      }
    })

    if (!response.ok) {
      console.error(response)
      throw `Got status ${response.status} from weather api`
    }

    return await response.json()
  } catch (err) {
    errorService.handleError(err)
  }
}

export {
  getWeather
}
