import { BaseWeatherElement } from '../base-weather-element.js'
import * as domService from '../../modules/services/domService.js'
import { $ } from '../../modules/utils/selectors.js'

const define = (style, html) => {
  class HourlyWeather extends BaseWeatherElement {
    constructor() {
      super(style, html)

      this._weather = []
      this._aqi = []
    }

    get weather() {
      return this._weather
    }

    set weather(weather) {
      this._weather = weather
    }

    get aqi() {
      return this._aqi
    }

    set aqi(aqi) {
      this._aqi = aqi
    }

    async setWeatherAndAqi(weather, aqi) {
      this.weather = weather
      this.aqi = aqi

      const hourlyContainer = $('#hourly-container', this.shadowRoot)

      hourlyContainer.replaceChildren()

      for (let i = 0; i < Math.min(this.weather.length, 24); i++) {
        const hour = this.weather[i]
        const aqi = this.aqi[i]

        const oneHour = document.createElement('hour-weather')
        await customElements.whenDefined('hour-weather')
        hourlyContainer.append(oneHour)
        oneHour.id = `hour-${hour.dt}`
        oneHour.setWeatherAndAqi(hour, aqi)
      }
    }
  }

  customElements.define('hourly-weather', HourlyWeather)
}

const htmlFile = null
const cssFiles = ['/js/components/hourly-weather/hourly-weather.css']
const options = {
  id: 'hourly-container'
}

domService.createComponentElement(htmlFile, cssFiles, define, options)
