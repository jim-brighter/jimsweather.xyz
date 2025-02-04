import { $ } from '../utils/selectors.js'

const CURRENT_WEATHER = 'current-weather'
const CURRENT_WEATHER_DETAILS = 'current-weather-details'
const MINUTELY_WEATHER = 'minutely-weather'
const DAILY_WEATHER = 'daily-weather'
const HOURLY_WEATHER = 'hourly-weather'
const AQI_WEATHER = 'aqi-weather'

const ALL_ELEMENTS = [
  CURRENT_WEATHER,
  CURRENT_WEATHER_DETAILS,
  MINUTELY_WEATHER,
  DAILY_WEATHER,
  HOURLY_WEATHER,
  AQI_WEATHER
]

const createStyleElement = (cssFilenames) => {
  const style = document.createElement('style')
  cssFilenames.forEach((f) => {
    style.textContent += `@import "${f}";\n`
  })
  return style
}

const createHtmlElement = async (filename, options = { id: '', class: '' }) => {
  const htmlBody = filename ? await fetch(filename) : ''
  const htmlText = htmlBody ? await htmlBody.text() : ''
  const html = document.createElement('div')
  html.innerHTML = htmlText

  if (options.class) {
    html.classList.add(options.class)
  }

  if (options.id) {
    html.id = options.id
  }

  return html
}

const createComponentElement = async (htmlFile, cssFiles, defineFunction, options = { id: '', class: '' }) => {
  const html = await createHtmlElement(htmlFile, options)

  const style = createStyleElement(cssFiles)

  defineFunction(style, html)
}

const addPrecipitationClass = (htmlElement, precipitationValue) => {
  if (precipitationValue <= 0) {
    return
  }

  if (precipitationValue > 0 && precipitationValue < 2.5) {
    htmlElement.classList.add('light-rain')
  } else if (precipitationValue >= 2.5 && precipitationValue < 10) {
    htmlElement.classList.add('moderate-rain')
  } else if (precipitationValue >= 10 && precipitationValue < 50) {
    htmlElement.classList.add('heavy-rain')
  } else {
    htmlElement.classList.add('violent-rain')
  }
}

const createRainCells = (volume, shadowRootElement) => {
  createPrecipitationCells(volume, 'rain-key', 'Rain:', shadowRootElement)
}

const createSnowCells = (volume, shadowRootElement) => {
  createPrecipitationCells(volume, 'snow-key', 'Snow:', shadowRootElement)
}

const createPrecipitationCells = (volume, keyId, keyText, shadowRootElement) => {
  const keyCell = document.createElement('td')
  keyCell.classList.add('key-col')
  keyCell.id = keyId
  keyCell.textContent = keyText

  const valCell = document.createElement('td')
  valCell.textContent = `${Math.round(volume)} mm`

  $('#rain-snow-row', shadowRootElement).append(keyCell)
  $('#rain-snow-row', shadowRootElement).append(valCell)

  addPrecipitationClass(valCell, volume)
}

const removeLoadingSpinner = () => {
  try {
    $('#loading').remove()
  } catch (e) {
    console.log('Loading spinner already removed')
  }
}

const updateWeatherUI = async (weatherData, locationOptions) => {
  await Promise.all(ALL_ELEMENTS.map(async (e) => {
    return await customElements.whenDefined(e)
  }))

  $(CURRENT_WEATHER).weather = weatherData.onecall.current
  $(CURRENT_WEATHER).setLocalityAndUpdatedTime(weatherData.locality[0], locationOptions.time)
  $(CURRENT_WEATHER_DETAILS).weather = weatherData.onecall.current
  $(CURRENT_WEATHER_DETAILS).alerts = weatherData.onecall.alerts || []
  $(MINUTELY_WEATHER).weather = weatherData.onecall.minutely
  $(DAILY_WEATHER).weather = weatherData.onecall.daily
  $(HOURLY_WEATHER).setWeatherAndAqi(weatherData.onecall.hourly, weatherData.air_pollution_forecast.list)
  $(AQI_WEATHER).aqi = weatherData.air_pollution.list[0]

  ALL_ELEMENTS.forEach((e) => {
    $(e).hidden = false
  })
}

export {
  createComponentElement,
  addPrecipitationClass,
  createRainCells,
  createSnowCells,
  removeLoadingSpinner,
  updateWeatherUI
}
