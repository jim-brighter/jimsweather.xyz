import { BaseWeatherElement } from '../base-weather-element.js'
import * as utils from '../../modules/utils/utils.js'
import * as domService from '../../modules/services/domService.js'
import { $ } from '../../modules/utils/selectors.js'
import { AQI_COLOR_MAP, UNITS_MAP, UVI_COLOR_MAP } from '../../modules/constants.js'

const define = (style, html) => {
  class HourWeather extends BaseWeatherElement {
    constructor() {
      super(style.cloneNode(true), html.cloneNode(true))

      this._weather = {}
      this._aqi = {}
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

    setWeatherAndAqi(weather, aqi) {
      this.weather = weather
      this.aqi = aqi

      this.setMainDetails()
      this.setWeatherDetails()
      this.setAQIDetails()
      this.setUVDetails()
      this.setPrecipitation()
    }

    setMainDetails() {
      $('#time', this.shadowRoot).textContent = utils.toLocaleTimeString(this.weather.dt)
      $('#icon', this.shadowRoot).src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`
      $('#temp-and-main', this.shadowRoot).textContent = `${Math.round(this.weather.temp)}° ${UNITS_MAP[utils.getUnits()].temperature}, ${this.weather.weather[0].main}`
    }

    setWeatherDetails() {
      $('#feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather['feels_like'])}° ${UNITS_MAP[utils.getUnits()].temperature}`
      $('#uvi-val', this.shadowRoot).textContent = Math.round(this.weather['uvi'])
      $('#clouds-val', this.shadowRoot).textContent = `${Math.round(this.weather['clouds'])}%`
      $('#pop-val', this.shadowRoot).textContent = `${Math.round(this.weather.pop * 100)}%`
      $('#pressure-val', this.shadowRoot).textContent = `${Math.round(this.weather['pressure'])} hPa`
      $('#wind_speed-val', this.shadowRoot).textContent = `${Math.round(this.weather['wind_speed'])} ${UNITS_MAP[utils.getUnits()].windSpeed}`
      $('#humidity-val', this.shadowRoot).textContent = `${Math.round(this.weather['humidity'])}%`
      $('#wind_deg-val', this.shadowRoot).textContent = `${utils.getWindDirection(this.weather['wind_deg'])}`
      $('#visibility-val', this.shadowRoot).textContent = `${Math.round(this.weather['visibility'] / 1000)} km`
      $('#dew_point-val', this.shadowRoot).textContent = `${Math.round(this.weather['dew_point'])}° ${UNITS_MAP[utils.getUnits()].temperature}`
      $('#wind_gust-val', this.shadowRoot).textContent = `${Math.round(this.weather.wind_gust)} ${UNITS_MAP[utils.getUnits()].windSpeed}`
    }

    setAQIDetails() {
      if (this.weather && this.aqi && (this.weather.dt === this.aqi.dt)) {
        $('#aqi-val', this.shadowRoot).textContent = Math.round(this.aqi.main.aqi)
        $('#aqi-val', this.shadowRoot).classList.add(AQI_COLOR_MAP[this.aqi.main.aqi])
      }
    }

    setUVDetails() {
      const uviColor = Math.round(this.weather['uvi']) in UVI_COLOR_MAP ? UVI_COLOR_MAP[Math.round(this.weather['uvi'])] : 'uvi-extreme'
      $('#uvi-val', this.shadowRoot).classList.add(uviColor)
    }

    setPrecipitation() {
      if (this.weather.rain && this.weather.rain['1h']) {
        domService.createRainCells(this.weather.rain['1h'], this.shadowRoot)
      }

      if (this.weather.snow && this.weather.snow['1h']) {
        $('#pop-key', this.shadowRoot).textContent = '% Snow:'

        domService.createSnowCells(this.weather.snow['1h'], this.shadowRoot)
      }
    }
  }

  customElements.define('hour-weather', HourWeather)
}

const htmlFile = '/js/components/hour/hour.html'
const cssFiles = ['/js/components/hour/hour.css', '/css/pills.css']
const options = {
  class: 'one-hour'
}

domService.createComponentElement(htmlFile, cssFiles, define, options)
