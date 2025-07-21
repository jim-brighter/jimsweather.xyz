import * as weatherDao from '../dao/weatherDao.js'
import { getUnits } from '../utils/utils.js'
import { removeLoadingSpinner, updateWeatherUI } from './domService.js'

const getWeather = async (locationOptions) => {
  const weatherData = await weatherDao.getWeather(locationOptions, getUnits())

  removeLoadingSpinner()

  if (weatherData === undefined) {
    return
  }

  await updateWeatherUI(weatherData, locationOptions)
}

export {
  getWeather
}
