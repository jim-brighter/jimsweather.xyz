import { BaseWeatherElement } from '../base-weather-element.js'
import * as utils from '../../modules/utils/utils.js'
import * as domService from '../../modules/services/domService.js'
import * as locationService from '../../modules/services/locationService.js'
import { $ } from '../../modules/utils/selectors.js'
import { UNITS_MAP } from '../../modules/constants.js'

const define = (style, html) => {
  class CurrentWeather extends BaseWeatherElement {
    constructor() {
      super(style, html)

      this._weather = {}
      this._locality = ''
    }

    get weather() {
      return this._weather
    }

    set weather(weather) {
      this._weather = weather

      $('#temp', this.shadowRoot).textContent = `${Math.round(this.weather.temp)}° ${UNITS_MAP[utils.getUnits()].temperature}`
      $('#icon', this.shadowRoot).src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`
      $('#main', this.shadowRoot).textContent = `${this.weather.weather[0].main}. Feels like ${Math.round(this.weather['feels_like'])}°.`

      $('#temp-link', this.shadowRoot).onclick = () => {
        this.changeUnits()
      }
    }

    get locality() {
      return this._locality
    }

    set locality(locality) {
      this._locality = `${locality.name}, ${locality.state || locality.country}`

      $('#locality', this.shadowRoot).textContent = this.locality

      const edit = document.createElement('button')
      edit.textContent = '✏️'
      edit.id = 'edit-btn'
      edit.className = 'btn'
      edit.title = 'Change Location'
      edit.onclick = () => {
        this.changeLocation()
      }

      const refresh = document.createElement('button')
      refresh.textContent = '🔄'
      refresh.id = 'refresh-btn'
      refresh.className = 'btn'
      refresh.title = 'Refresh Location'
      refresh.onclick = () => {
        locationService.refreshLocation()
      }

      $('#locality', this.shadowRoot).appendChild(edit)
      $('#locality', this.shadowRoot).appendChild(refresh)
    }

    setLocalityAndUpdatedTime(locality, updatedAt) {
      this.locality = locality

      $('#locality', this.shadowRoot).title = `Updated at ${utils.toLocaleString(updatedAt)}`
    }

    changeLocation() {
      locationService.getLocationByZip('Enter zip code:')
    }

    changeUnits() {
      utils.changeUnits()
    }
  }

  customElements.define('current-weather', CurrentWeather)
}

const htmlFile = '/js/components/current-weather/current-weather.html'
const cssFiles = ['/js/components/current-weather/current-weather.css']
const options = {
  id: 'current-weather-parent'
}

domService.createComponentElement(htmlFile, cssFiles, define, options)
