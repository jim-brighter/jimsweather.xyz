import { APPLICATION_JSON, USER_AGENT, API_BASE } from '../constants.js'
import * as errorService from '../services/errorService.js'

const getWeather = async (locationOptions, units) => {
  try {
    const url = locationOptions.zip
      ? `${API_BASE}/weather?zip=${locationOptions.zip}&units=${units}`
      : `${API_BASE}/weather?lat=${locationOptions.lat}&lon=${locationOptions.lon}&units=${units}`

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
